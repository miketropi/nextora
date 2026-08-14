"use strict";
(() => {
  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _randomExp = /random\([^)]+\)/g;
  var _commaDelimExp = /,\s*/g;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _isRevertWorthy = function _isRevertWorthy2(animation) {
    return !!(animation._initted || animation._startAt || animation.add);
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt < l && wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(s) {
    return s.replace(_randomExp, function(match) {
      var arIndex = match.indexOf("[") + 1, values = match.substring(arIndex || 7, arIndex ? match.indexOf("]") : match.length - 1).split(_commaDelimExp);
      return random(arIndex ? values : +values[0], arIndex ? 0 : +values[1], +values[2] || 1e-5);
    });
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3) return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  };
  var _colorExp = (function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  })();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = (function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
      var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i = 0; _i < _listeners2.length; _i++) {
          _listeners2[_i](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners2[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners2
    };
    return _self;
  })();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ (function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !this._initted && this._dur && _totalTime || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = _roundPrecise(value);
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, this._start - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (_isRevertWorthy(this)) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
      this._dur || (this._zTime = -_tinyNum);
      return this;
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this, prevProm = self._prom;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          prevProm && prevProm();
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  })();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ (function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            if (this.vars.repeatRefresh && !isYoyo) {
              this.invalidate()._lock = 1;
              prevIteration = iteration;
            }
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !!timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && tTime && dur && !suppressEvents && !prevIteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      child.parent === this && _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      amount = _roundPrecise(amount);
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += _roundPrecise(start / self._ts);
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  })(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, reverseEase = vars.easeReverse || yoyoEase, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._rEase = reverseEase && (_parseEase(reverseEase) || tween._ease);
    tween._from = !tl && !!vars.runBackwards;
    if (tween._from) tween.ratio = 1;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset. Try splitting into individual properties") : 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ (function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        var easeReverse = vars.easeReverse || vars.yoyoEase;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            easeReverse && (copy.easeReverse = easeReverse);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            } else if (time > dur) {
              time = dur;
            }
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) time = dur - time;
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        if (this._rEase) {
          var inv = time < prevTime;
          if (inv !== this._inv) {
            var segDur = inv ? prevTime : dur - prevTime;
            this._inv = inv;
            if (this._from) this.ratio = 1 - this.ratio;
            this._invRatio = this.ratio;
            this._invTime = prevTime;
            this._invRecip = segDur ? (inv ? -1 : 1) / segDur : 0;
            this._invScale = inv ? -this.ratio : 1 - this.ratio;
            this._invEase = inv ? this._rEase : this._ease;
          }
          this.ratio = ratio = this._invRatio + this._invScale * this._invEase((time - this._invTime) * this._invRecip);
        } else {
          this.ratio = ratio = this._ease(time / dur);
        }
        if (this._from) this.ratio = ratio = 1 - ratio;
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        if (!prevTime && tTime && !suppressEvents && !prevIteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
        return this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  })(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ (function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  })();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c) {
        return c.onMatch(c, function(func) {
          return c.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ (function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f = function f2() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f;
      return name === _isFunction ? f(self, function(func2) {
        return self.add(null, func2);
      }) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
          while (i2--) {
            t = _this4.data[i2];
            if (t.data === "isFlip") {
              t.revert();
              t.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t2) {
            return {
              g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
              t: t2
            };
          }).sort(function(a, b) {
            return b.g - a.g || -Infinity;
          }).forEach(function(o) {
            return o.t.revert(revert);
          });
          i2 = _this4.data.length;
          while (i2--) {
            t = _this4.data[i2];
            if (t instanceof Timeline) {
              if (t.data !== "nested") {
                t.scrollTrigger && t.scrollTrigger.revert();
                t.kill();
              }
            } else {
              !(t instanceof Tween) && t.revert && t.revert(revert);
            }
          }
          _this4._r.forEach(function(f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i = _media.length;
        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  })();
  var MatchMedia = /* @__PURE__ */ (function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f) {
        return context3.add(null, f);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  })();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _setDefaults22;
      var tween = gsap.to(target, _setDefaults((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      headless: 1,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    headless: 1,
    init: function init2(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.15.0";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderCSSPropWithBeginningAndEnd = function _renderCSSPropWithBeginningAndEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for (i = 0; i < props.length; i += 3) {
      if (!props[i + 1]) {
        props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
      } else if (props[i + 1] === 2) {
        target[props[i]](props[i + 2]);
      } else {
        target[props[i]] = props[i + 2];
      }
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting2();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e && e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
    var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
    clone.style.display = "block";
    svg.appendChild(clone);
    _docElement.appendChild(svg);
    try {
      bbox = clone.getBBox();
    } catch (e) {
    }
    svg.removeChild(clone);
    _docElement.removeChild(svg);
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds, cloned;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getReparentedCloneBBox(target);
      cloned = 1;
    }
    bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end.substring(0, 6) === "var(--") {
      end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
    }
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          style.scale = style.rotate = style.translate = "none";
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, finalTransformValue;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          }
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            finalTransformValue = endValue;
            if (type === "string" && endValue.substring(0, 6) === "var(--") {
              endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
              if (endValue.substring(0, 5) === "calc(") {
                var origPerspective = target.style.perspective;
                target.style.perspective = endValue;
                endValue = _getComputedProperty(target, "perspective");
                origPerspective ? target.style.perspective = origPerspective : _removeProperty(target, "perspective");
              }
              endNum = parseFloat(endValue);
            }
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (isTransformRelated && finalTransformValue !== endValue) {
              this._pt.b = startValue;
              this._pt.e = finalTransformValue;
              this._pt.r = _renderCSSPropWithBeginningAndEnd;
            } else if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // blocks/related-posts/view.ts
  var INIT_ATTR = "data-nextora-rp-inited";
  var THUMB_ATTR = "data-nextora-rp-thumb";
  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function isTouchDevice() {
    return typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }
  function createThumbnail() {
    const el = document.createElement("div");
    el.className = "nextora-related-posts__floating-thumb";
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<img class="nextora-related-posts__floating-thumb-img" src="" alt="" />';
    el.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:9999;";
    document.body.appendChild(el);
    return el;
  }
  function bindCard(card, thumbEl, thumbImg, reduceMotion) {
    const thumbUrl = card.getAttribute(THUMB_ATTR);
    if (!thumbUrl) return;
    const xTo = gsapWithCSS.quickTo(thumbEl, "x", { duration: 0.15, ease: "power1.out" });
    const yTo = gsapWithCSS.quickTo(thumbEl, "y", { duration: 0.15, ease: "power1.out" });
    const THUMB_W = 220;
    const THUMB_H = 140;
    const GAP = 24;
    const EDGE_PAD = 20;
    let active = false;
    function getThumbPos(cx, cy) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let x = cx + GAP;
      let y = cy - THUMB_H / 2;
      if (x + THUMB_W > vw - EDGE_PAD) {
        x = cx - THUMB_W - GAP;
      }
      if (y < EDGE_PAD) {
        y = EDGE_PAD;
      } else if (y + THUMB_H > vh - EDGE_PAD) {
        y = vh - THUMB_H - EDGE_PAD;
      }
      return { x, y };
    }
    function onMove(e) {
      const { x, y } = getThumbPos(e.clientX, e.clientY);
      xTo(x);
      yTo(y);
    }
    function onEnter(e) {
      if (active || reduceMotion || isTouchDevice()) return;
      active = true;
      if (thumbImg.src !== thumbUrl) {
        thumbImg.src = thumbUrl;
      }
      const { x, y } = getThumbPos(e.clientX, e.clientY);
      gsapWithCSS.fromTo(
        thumbEl,
        { opacity: 0, scale: 0.85, x, y },
        { opacity: 1, scale: 1, x, y, duration: 0.25, ease: "power2.out" }
      );
      gsapWithCSS.to(card, {
        borderLeftColor: "var(--wp--preset--color--primary, currentColor)",
        backgroundColor: "rgba(0,0,0,0.015)",
        duration: 0.3,
        ease: "power2.out"
      });
      card.addEventListener("mousemove", onMove, { passive: true });
    }
    function onLeave() {
      if (!active) return;
      active = false;
      card.removeEventListener("mousemove", onMove);
      gsapWithCSS.killTweensOf(thumbEl, "opacity,scale");
      gsapWithCSS.to(thumbEl, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: "power2.in"
      });
      gsapWithCSS.to(card, {
        borderLeftColor: "transparent",
        backgroundColor: "rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    card.__rpCleanup = () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      card.removeEventListener("mousemove", onMove);
    };
  }
  function initRoot(root) {
    if (root.getAttribute(INIT_ATTR) === "1") return;
    root.setAttribute(INIT_ATTR, "1");
    const reduceMotion = prefersReducedMotion();
    if (isTouchDevice() || reduceMotion) {
      return;
    }
    const thumbEl = createThumbnail();
    const thumbImg = thumbEl.querySelector(".nextora-related-posts__floating-thumb-img");
    if (!thumbImg) return;
    const cards = root.querySelectorAll(".nextora-related-posts__card");
    cards.forEach((card) => bindCard(card, thumbEl, thumbImg, reduceMotion));
  }
  function boot() {
    document.querySelectorAll(".nextora-related-posts").forEach(initRoot);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2dzYXAvZ3NhcC1jb3JlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9nc2FwL0NTU1BsdWdpbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvZ3NhcC9pbmRleC5qcyIsICJ2aWV3LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qIVxuICogR1NBUCAzLjE1LjBcbiAqIGh0dHBzOi8vZ3NhcC5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDI2LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dzYXAuY29tL3N0YW5kYXJkLWxpY2Vuc2VcbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBfY29uZmlnID0ge1xuICBhdXRvU2xlZXA6IDEyMCxcbiAgZm9yY2UzRDogXCJhdXRvXCIsXG4gIG51bGxUYXJnZXRXYXJuOiAxLFxuICB1bml0czoge1xuICAgIGxpbmVIZWlnaHQ6IFwiXCJcbiAgfVxufSxcbiAgICBfZGVmYXVsdHMgPSB7XG4gIGR1cmF0aW9uOiAuNSxcbiAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgZGVsYXk6IDBcbn0sXG4gICAgX3N1cHByZXNzT3ZlcndyaXRlcyxcbiAgICBfcmV2ZXJ0aW5nLFxuICAgIF9jb250ZXh0LFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX3RpbnlOdW0gPSAxIC8gX2JpZ051bSxcbiAgICBfMlBJID0gTWF0aC5QSSAqIDIsXG4gICAgX0hBTEZfUEkgPSBfMlBJIC8gNCxcbiAgICBfZ3NJRCA9IDAsXG4gICAgX3NxcnQgPSBNYXRoLnNxcnQsXG4gICAgX2NvcyA9IE1hdGguY29zLFxuICAgIF9zaW4gPSBNYXRoLnNpbixcbiAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn0sXG4gICAgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59LFxuICAgIF9pc051bWJlciA9IGZ1bmN0aW9uIF9pc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufSxcbiAgICBfaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBfaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9pc05vdEZhbHNlID0gZnVuY3Rpb24gX2lzTm90RmFsc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBmYWxzZTtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfaXNGdW5jT3JTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSB8fCBfaXNTdHJpbmcodmFsdWUpO1xufSxcbiAgICBfaXNUeXBlZEFycmF5ID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgIC8vIG5vdGU6IElFMTAgaGFzIEFycmF5QnVmZmVyLCBidXQgTk9UIEFycmF5QnVmZmVyLmlzVmlldygpLlxuX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgIF9yYW5kb21FeHAgPSAvcmFuZG9tXFwoW14pXStcXCkvZyxcbiAgICBfY29tbWFEZWxpbUV4cCA9IC8sXFxzKi9nLFxuICAgIF9zdHJpY3ROdW1FeHAgPSAvKD86LT9cXC4/XFxkfFxcLikrL2dpLFxuICAgIC8vb25seSBudW1iZXJzIChpbmNsdWRpbmcgbmVnYXRpdmVzIGFuZCBkZWNpbWFscykgYnV0IE5PVCByZWxhdGl2ZSB2YWx1ZXMuXG5fbnVtRXhwID0gL1stKz0uXSpcXGQrWy5lXFwtK10qXFxkKltlXFwtK10qXFxkKi9nLFxuICAgIC8vZmluZHMgYW55IG51bWJlcnMsIGluY2x1ZGluZyBvbmVzIHRoYXQgc3RhcnQgd2l0aCArPSBvciAtPSwgbmVnYXRpdmUgbnVtYmVycywgYW5kIG9uZXMgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBsaWtlIDFlLTguXG5fbnVtV2l0aFVuaXRFeHAgPSAvWy0rPS5dKlxcZCtbLmUtXSpcXGQqW2EteiVdKi9nLFxuICAgIF9jb21wbGV4U3RyaW5nTnVtRXhwID0gL1stKz0uXSpcXGQrXFwuP1xcZCooPzplLXxlXFwrKT9cXGQqL2dpLFxuICAgIC8vZHVwbGljYXRlIHNvIHRoYXQgd2hpbGUgd2UncmUgbG9vcGluZyB0aHJvdWdoIG1hdGNoZXMgZnJvbSBleGVjKCksIGl0IGRvZXNuJ3QgY29udGFtaW5hdGUgdGhlIGxhc3RJbmRleCBvZiBfbnVtRXhwIHdoaWNoIHdlIHVzZSB0byBzZWFyY2ggZm9yIGNvbG9ycyB0b28uXG5fcmVsRXhwID0gL1srLV09LT9bLlxcZF0rLyxcbiAgICBfZGVsaW1pdGVkVmFsdWVFeHAgPSAvW14sJ1wiXFxbXFxdXFxzXSsvZ2ksXG4gICAgLy8gcHJldmlvdXNseSAvWyNcXC0rLl0qXFxiW2EtelxcZFxcLT0rJS5dKy9naSBidXQgZGlkbid0IGNhdGNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbl91bml0RXhwID0gL15bK1xcLT1lXFxzXFxkXSpcXGQrWy5cXGRdKihbYS16XSp8JSlcXHMqJC9pLFxuICAgIF9nbG9iYWxUaW1lbGluZSxcbiAgICBfd2luLFxuICAgIF9jb3JlSW5pdHRlZCxcbiAgICBfZG9jLFxuICAgIF9nbG9iYWxzID0ge30sXG4gICAgX2luc3RhbGxTY29wZSA9IHt9LFxuICAgIF9jb3JlUmVhZHksXG4gICAgX2luc3RhbGwgPSBmdW5jdGlvbiBfaW5zdGFsbChzY29wZSkge1xuICByZXR1cm4gKF9pbnN0YWxsU2NvcGUgPSBfbWVyZ2Uoc2NvcGUsIF9nbG9iYWxzKSkgJiYgZ3NhcDtcbn0sXG4gICAgX21pc3NpbmdQbHVnaW4gPSBmdW5jdGlvbiBfbWlzc2luZ1BsdWdpbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIGNvbnNvbGUud2FybihcIkludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHksIFwic2V0IHRvXCIsIHZhbHVlLCBcIk1pc3NpbmcgcGx1Z2luPyBnc2FwLnJlZ2lzdGVyUGx1Z2luKClcIik7XG59LFxuICAgIF93YXJuID0gZnVuY3Rpb24gX3dhcm4obWVzc2FnZSwgc3VwcHJlc3MpIHtcbiAgcmV0dXJuICFzdXBwcmVzcyAmJiBjb25zb2xlLndhcm4obWVzc2FnZSk7XG59LFxuICAgIF9hZGRHbG9iYWwgPSBmdW5jdGlvbiBfYWRkR2xvYmFsKG5hbWUsIG9iaikge1xuICByZXR1cm4gbmFtZSAmJiAoX2dsb2JhbHNbbmFtZV0gPSBvYmopICYmIF9pbnN0YWxsU2NvcGUgJiYgKF9pbnN0YWxsU2NvcGVbbmFtZV0gPSBvYmopIHx8IF9nbG9iYWxzO1xufSxcbiAgICBfZW1wdHlGdW5jID0gZnVuY3Rpb24gX2VtcHR5RnVuYygpIHtcbiAgcmV0dXJuIDA7XG59LFxuICAgIF9zdGFydEF0UmV2ZXJ0Q29uZmlnID0ge1xuICBzdXBwcmVzc0V2ZW50czogdHJ1ZSxcbiAgaXNTdGFydDogdHJ1ZSxcbiAga2lsbDogZmFsc2Vcbn0sXG4gICAgX3JldmVydENvbmZpZ05vS2lsbCA9IHtcbiAgc3VwcHJlc3NFdmVudHM6IHRydWUsXG4gIGtpbGw6IGZhbHNlXG59LFxuICAgIF9yZXZlcnRDb25maWcgPSB7XG4gIHN1cHByZXNzRXZlbnRzOiB0cnVlXG59LFxuICAgIF9yZXNlcnZlZFByb3BzID0ge30sXG4gICAgX2xhenlUd2VlbnMgPSBbXSxcbiAgICBfbGF6eUxvb2t1cCA9IHt9LFxuICAgIF9sYXN0UmVuZGVyZWRGcmFtZSxcbiAgICBfcGx1Z2lucyA9IHt9LFxuICAgIF9lZmZlY3RzID0ge30sXG4gICAgX25leHRHQ0ZyYW1lID0gMzAsXG4gICAgX2hhcm5lc3NQbHVnaW5zID0gW10sXG4gICAgX2NhbGxiYWNrTmFtZXMgPSBcIlwiLFxuICAgIF9oYXJuZXNzID0gZnVuY3Rpb24gX2hhcm5lc3ModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1swXSxcbiAgICAgIGhhcm5lc3NQbHVnaW4sXG4gICAgICBpO1xuICBfaXNPYmplY3QodGFyZ2V0KSB8fCBfaXNGdW5jdGlvbih0YXJnZXQpIHx8ICh0YXJnZXRzID0gW3RhcmdldHNdKTtcblxuICBpZiAoIShoYXJuZXNzUGx1Z2luID0gKHRhcmdldC5fZ3NhcCB8fCB7fSkuaGFybmVzcykpIHtcbiAgICAvLyBmaW5kIHRoZSBmaXJzdCB0YXJnZXQgd2l0aCBhIGhhcm5lc3MuIFdlIGFzc3VtZSB0YXJnZXRzIHBhc3NlZCBpbnRvIGFuIGFuaW1hdGlvbiB3aWxsIGJlIG9mIHNpbWlsYXIgdHlwZSwgbWVhbmluZyB0aGUgc2FtZSBraW5kIG9mIGhhcm5lc3MgY2FuIGJlIHVzZWQgZm9yIHRoZW0gYWxsIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgaSA9IF9oYXJuZXNzUGx1Z2lucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tICYmICFfaGFybmVzc1BsdWdpbnNbaV0udGFyZ2V0VGVzdCh0YXJnZXQpKSB7fVxuXG4gICAgaGFybmVzc1BsdWdpbiA9IF9oYXJuZXNzUGx1Z2luc1tpXTtcbiAgfVxuXG4gIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGFyZ2V0c1tpXSAmJiAodGFyZ2V0c1tpXS5fZ3NhcCB8fCAodGFyZ2V0c1tpXS5fZ3NhcCA9IG5ldyBHU0NhY2hlKHRhcmdldHNbaV0sIGhhcm5lc3NQbHVnaW4pKSkgfHwgdGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0cztcbn0sXG4gICAgX2dldENhY2hlID0gZnVuY3Rpb24gX2dldENhY2hlKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRvQXJyYXkodGFyZ2V0KSlbMF0uX2dzYXA7XG59LFxuICAgIF9nZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2KSB7XG4gIHJldHVybiAodiA9IHRhcmdldFtwcm9wZXJ0eV0pICYmIF9pc0Z1bmN0aW9uKHYpID8gdGFyZ2V0W3Byb3BlcnR5XSgpIDogX2lzVW5kZWZpbmVkKHYpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkgfHwgdjtcbn0sXG4gICAgX2ZvckVhY2hOYW1lID0gZnVuY3Rpb24gX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jKSB7XG4gIHJldHVybiAobmFtZXMgPSBuYW1lcy5zcGxpdChcIixcIikpLmZvckVhY2goZnVuYykgfHwgbmFtZXM7XG59LFxuICAgIC8vc3BsaXQgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBuYW1lcyBpbnRvIGFuIGFycmF5LCB0aGVuIHJ1biBhIGZvckVhY2goKSBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSBzcGxpdCBhcnJheSAodGhpcyBpcyBqdXN0IGEgd2F5IHRvIGNvbnNvbGlkYXRlL3Nob3J0ZW4gc29tZSBjb2RlKS5cbl9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX3JvdW5kUHJlY2lzZSA9IGZ1bmN0aW9uIF9yb3VuZFByZWNpc2UodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDAwMCkgLyAxMDAwMDAwMCB8fCAwO1xufSxcbiAgICAvLyBpbmNyZWFzZWQgcHJlY2lzaW9uIG1vc3RseSBmb3IgdGltaW5nIHZhbHVlcy5cbl9wYXJzZVJlbGF0aXZlID0gZnVuY3Rpb24gX3BhcnNlUmVsYXRpdmUoc3RhcnQsIHZhbHVlKSB7XG4gIHZhciBvcGVyYXRvciA9IHZhbHVlLmNoYXJBdCgwKSxcbiAgICAgIGVuZCA9IHBhcnNlRmxvYXQodmFsdWUuc3Vic3RyKDIpKTtcbiAgc3RhcnQgPSBwYXJzZUZsb2F0KHN0YXJ0KTtcbiAgcmV0dXJuIG9wZXJhdG9yID09PSBcIitcIiA/IHN0YXJ0ICsgZW5kIDogb3BlcmF0b3IgPT09IFwiLVwiID8gc3RhcnQgLSBlbmQgOiBvcGVyYXRvciA9PT0gXCIqXCIgPyBzdGFydCAqIGVuZCA6IHN0YXJ0IC8gZW5kO1xufSxcbiAgICBfYXJyYXlDb250YWluc0FueSA9IGZ1bmN0aW9uIF9hcnJheUNvbnRhaW5zQW55KHRvU2VhcmNoLCB0b0ZpbmQpIHtcbiAgLy9zZWFyY2hlcyBvbmUgYXJyYXkgdG8gZmluZCBtYXRjaGVzIGZvciBhbnkgb2YgdGhlIGl0ZW1zIGluIHRoZSB0b0ZpbmQgYXJyYXkuIEFzIHNvb24gYXMgb25lIGlzIGZvdW5kLCBpdCByZXR1cm5zIHRydWUuIEl0IGRvZXMgTk9UIHJldHVybiBhbGwgdGhlIG1hdGNoZXM7IGl0J3Mgc2ltcGx5IGEgYm9vbGVhbiBzZWFyY2guXG4gIHZhciBsID0gdG9GaW5kLmxlbmd0aCxcbiAgICAgIGkgPSAwO1xuXG4gIGZvciAoOyB0b1NlYXJjaC5pbmRleE9mKHRvRmluZFtpXSkgPCAwICYmICsraSA8IGw7KSB7fVxuXG4gIHJldHVybiBpIDwgbDtcbn0sXG4gICAgX2xhenlSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVJlbmRlcigpIHtcbiAgdmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG4gICAgICBhID0gX2xhenlUd2VlbnMuc2xpY2UoMCksXG4gICAgICBpLFxuICAgICAgdHdlZW47XG5cbiAgX2xhenlMb29rdXAgPSB7fTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgdHdlZW4gPSBhW2ldO1xuICAgIHR3ZWVuICYmIHR3ZWVuLl9sYXp5ICYmICh0d2Vlbi5yZW5kZXIodHdlZW4uX2xhenlbMF0sIHR3ZWVuLl9sYXp5WzFdLCB0cnVlKS5fbGF6eSA9IDApO1xuICB9XG59LFxuICAgIF9pc1JldmVydFdvcnRoeSA9IGZ1bmN0aW9uIF9pc1JldmVydFdvcnRoeShhbmltYXRpb24pIHtcbiAgcmV0dXJuICEhKGFuaW1hdGlvbi5faW5pdHRlZCB8fCBhbmltYXRpb24uX3N0YXJ0QXQgfHwgYW5pbWF0aW9uLmFkZCk7XG59LFxuICAgIF9sYXp5U2FmZVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5U2FmZVJlbmRlcihhbmltYXRpb24sIHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgIV9yZXZlcnRpbmcgJiYgX2xhenlSZW5kZXIoKTtcbiAgYW5pbWF0aW9uLnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UgfHwgISEoX3JldmVydGluZyAmJiB0aW1lIDwgMCAmJiBfaXNSZXZlcnRXb3J0aHkoYW5pbWF0aW9uKSkpO1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgIV9yZXZlcnRpbmcgJiYgX2xhenlSZW5kZXIoKTsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIHNvbWVvbmUgY2FsbHMgc2VlaygpIG9yIHRpbWUoKSBvciBwcm9ncmVzcygpLCB0aGV5IGV4cGVjdCBhbiBpbW1lZGlhdGUgcmVuZGVyLlxufSxcbiAgICBfbnVtZXJpY0lmUG9zc2libGUgPSBmdW5jdGlvbiBfbnVtZXJpY0lmUG9zc2libGUodmFsdWUpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIChuIHx8IG4gPT09IDApICYmICh2YWx1ZSArIFwiXCIpLm1hdGNoKF9kZWxpbWl0ZWRWYWx1ZUV4cCkubGVuZ3RoIDwgMiA/IG4gOiBfaXNTdHJpbmcodmFsdWUpID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG59LFxuICAgIF9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uIF9wYXNzVGhyb3VnaChwKSB7XG4gIHJldHVybiBwO1xufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF9zZXRLZXlmcmFtZURlZmF1bHRzID0gZnVuY3Rpb24gX3NldEtleWZyYW1lRGVmYXVsdHMoZXhjbHVkZUR1cmF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBkZWZhdWx0cykge1xuICAgIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICAgIHAgaW4gb2JqIHx8IHAgPT09IFwiZHVyYXRpb25cIiAmJiBleGNsdWRlRHVyYXRpb24gfHwgcCA9PT0gXCJlYXNlXCIgfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgICB9XG4gIH07XG59LFxuICAgIF9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZShiYXNlLCB0b01lcmdlKSB7XG4gIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgIGJhc2VbcF0gPSB0b01lcmdlW3BdO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9tZXJnZURlZXAgPSBmdW5jdGlvbiBfbWVyZ2VEZWVwKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgcCAhPT0gXCJfX3Byb3RvX19cIiAmJiBwICE9PSBcImNvbnN0cnVjdG9yXCIgJiYgcCAhPT0gXCJwcm90b3R5cGVcIiAmJiAoYmFzZVtwXSA9IF9pc09iamVjdCh0b01lcmdlW3BdKSA/IF9tZXJnZURlZXAoYmFzZVtwXSB8fCAoYmFzZVtwXSA9IHt9KSwgdG9NZXJnZVtwXSkgOiB0b01lcmdlW3BdKTtcbiAgfVxuXG4gIHJldHVybiBiYXNlO1xufSxcbiAgICBfY29weUV4Y2x1ZGluZyA9IGZ1bmN0aW9uIF9jb3B5RXhjbHVkaW5nKG9iaiwgZXhjbHVkaW5nKSB7XG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiBvYmopIHtcbiAgICBwIGluIGV4Y2x1ZGluZyB8fCAoY29weVtwXSA9IG9ialtwXSk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2luaGVyaXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9pbmhlcml0RGVmYXVsdHModmFycykge1xuICB2YXIgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgZnVuYyA9IHZhcnMua2V5ZnJhbWVzID8gX3NldEtleWZyYW1lRGVmYXVsdHMoX2lzQXJyYXkodmFycy5rZXlmcmFtZXMpKSA6IF9zZXREZWZhdWx0cztcblxuICBpZiAoX2lzTm90RmFsc2UodmFycy5pbmhlcml0KSkge1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGZ1bmModmFycywgcGFyZW50LnZhcnMuZGVmYXVsdHMpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCB8fCBwYXJlbnQuX2RwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufSxcbiAgICBfYXJyYXlzTWF0Y2ggPSBmdW5jdGlvbiBfYXJyYXlzTWF0Y2goYTEsIGEyKSB7XG4gIHZhciBpID0gYTEubGVuZ3RoLFxuICAgICAgbWF0Y2ggPSBpID09PSBhMi5sZW5ndGg7XG5cbiAgd2hpbGUgKG1hdGNoICYmIGktLSAmJiBhMVtpXSA9PT0gYTJbaV0pIHt9XG5cbiAgcmV0dXJuIGkgPCAwO1xufSxcbiAgICBfYWRkTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfYWRkTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCwgc29ydEJ5KSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBwYXJlbnRbbGFzdFByb3BdLFxuICAgICAgdDtcblxuICBpZiAoc29ydEJ5KSB7XG4gICAgdCA9IGNoaWxkW3NvcnRCeV07XG5cbiAgICB3aGlsZSAocHJldiAmJiBwcmV2W3NvcnRCeV0gPiB0KSB7XG4gICAgICBwcmV2ID0gcHJldi5fcHJldjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIGNoaWxkLl9uZXh0ID0gcHJldi5fbmV4dDtcbiAgICBwcmV2Ll9uZXh0ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQuX25leHQgPSBwYXJlbnRbZmlyc3RQcm9wXTtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgaWYgKGNoaWxkLl9uZXh0KSB7XG4gICAgY2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBjaGlsZC5fcHJldiA9IHByZXY7XG4gIGNoaWxkLnBhcmVudCA9IGNoaWxkLl9kcCA9IHBhcmVudDtcbiAgcmV0dXJuIGNoaWxkO1xufSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gY2hpbGQuX3ByZXYsXG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Ll9uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIGlmIChwYXJlbnRbZmlyc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IG5leHQ7XG4gIH1cblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuX3ByZXYgPSBwcmV2O1xuICB9IGVsc2UgaWYgKHBhcmVudFtsYXN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IHByZXY7XG4gIH1cblxuICBjaGlsZC5fbmV4dCA9IGNoaWxkLl9wcmV2ID0gY2hpbGQucGFyZW50ID0gbnVsbDsgLy8gZG9uJ3QgZGVsZXRlIHRoZSBfZHAganVzdCBzbyB3ZSBjYW4gcmV2ZXJ0IGlmIG5lY2Vzc2FyeS4gQnV0IHBhcmVudCBzaG91bGQgYmUgbnVsbCB0byBpbmRpY2F0ZSB0aGUgaXRlbSBpc24ndCBpbiBhIGxpbmtlZCBsaXN0LlxufSxcbiAgICBfcmVtb3ZlRnJvbVBhcmVudCA9IGZ1bmN0aW9uIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkLCBvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlKSB7XG4gIGNoaWxkLnBhcmVudCAmJiAoIW9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUgfHwgY2hpbGQucGFyZW50LmF1dG9SZW1vdmVDaGlsZHJlbikgJiYgY2hpbGQucGFyZW50LnJlbW92ZSAmJiBjaGlsZC5wYXJlbnQucmVtb3ZlKGNoaWxkKTtcbiAgY2hpbGQuX2FjdCA9IDA7XG59LFxuICAgIF91bmNhY2hlID0gZnVuY3Rpb24gX3VuY2FjaGUoYW5pbWF0aW9uLCBjaGlsZCkge1xuICBpZiAoYW5pbWF0aW9uICYmICghY2hpbGQgfHwgY2hpbGQuX2VuZCA+IGFuaW1hdGlvbi5fZHVyIHx8IGNoaWxkLl9zdGFydCA8IDApKSB7XG4gICAgLy8gcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uOiBpZiBhIGNoaWxkIGFuaW1hdGlvbiBpcyBwYXNzZWQgaW4gd2Ugc2hvdWxkIG9ubHkgdW5jYWNoZSBpZiB0aGF0IGNoaWxkIEVYVEVORFMgdGhlIGFuaW1hdGlvbiAoaXRzIGVuZCB0aW1lIGlzIGJleW9uZCB0aGUgZW5kKVxuICAgIHZhciBhID0gYW5pbWF0aW9uO1xuXG4gICAgd2hpbGUgKGEpIHtcbiAgICAgIGEuX2RpcnR5ID0gMTtcbiAgICAgIGEgPSBhLnBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcmVjYWNoZUFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9yZWNhY2hlQW5jZXN0b3JzKGFuaW1hdGlvbikge1xuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLnBhcmVudDtcblxuICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAvL3NvbWV0aW1lcyB3ZSBtdXN0IGZvcmNlIGEgcmUtc29ydCBvZiBhbGwgY2hpbGRyZW4gYW5kIHVwZGF0ZSB0aGUgZHVyYXRpb24vdG90YWxEdXJhdGlvbiBvZiBhbGwgYW5jZXN0b3IgdGltZWxpbmVzIGltbWVkaWF0ZWx5IGluIGNhc2UsIGZvciBleGFtcGxlLCBpbiB0aGUgbWlkZGxlIG9mIGEgcmVuZGVyIGxvb3AsIG9uZSB0d2VlbiBhbHRlcnMgYW5vdGhlciB0d2VlbidzIHRpbWVTY2FsZSB3aGljaCBzaG92ZXMgaXRzIHN0YXJ0VGltZSBiZWZvcmUgMCwgZm9yY2luZyB0aGUgcGFyZW50IHRpbWVsaW5lIHRvIHNoaWZ0IGFyb3VuZCBhbmQgc2hpZnRDaGlsZHJlbigpIHdoaWNoIGNvdWxkIGFmZmVjdCB0aGF0IG5leHQgdHdlZW4ncyByZW5kZXIgKHN0YXJ0VGltZSkuIERvZXNuJ3QgbWF0dGVyIGZvciB0aGUgcm9vdCB0aW1lbGluZSB0aG91Z2guXG4gICAgcGFyZW50Ll9kaXJ0eSA9IDE7XG4gICAgcGFyZW50LnRvdGFsRHVyYXRpb24oKTtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3Jld2luZFN0YXJ0QXQgPSBmdW5jdGlvbiBfcmV3aW5kU3RhcnRBdCh0d2VlbiwgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgcmV0dXJuIHR3ZWVuLl9zdGFydEF0ICYmIChfcmV2ZXJ0aW5nID8gdHdlZW4uX3N0YXJ0QXQucmV2ZXJ0KF9yZXZlcnRDb25maWdOb0tpbGwpIDogdHdlZW4udmFycy5pbW1lZGlhdGVSZW5kZXIgJiYgIXR3ZWVuLnZhcnMuYXV0b1JldmVydCB8fCB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCBmb3JjZSkpO1xufSxcbiAgICBfaGFzTm9QYXVzZWRBbmNlc3RvcnMgPSBmdW5jdGlvbiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHJldHVybiAhYW5pbWF0aW9uIHx8IGFuaW1hdGlvbi5fdHMgJiYgX2hhc05vUGF1c2VkQW5jZXN0b3JzKGFuaW1hdGlvbi5wYXJlbnQpO1xufSxcbiAgICBfZWxhcHNlZEN5Y2xlRHVyYXRpb24gPSBmdW5jdGlvbiBfZWxhcHNlZEN5Y2xlRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZShhbmltYXRpb24uX3RUaW1lLCBhbmltYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSArIGFuaW1hdGlvbi5fckRlbGF5KSAqIGFuaW1hdGlvbiA6IDA7XG59LFxuICAgIC8vIGZlZWQgaW4gdGhlIHRvdGFsVGltZSBhbmQgY3ljbGVEdXJhdGlvbiBhbmQgaXQnbGwgcmV0dXJuIHRoZSBjeWNsZSAoaXRlcmF0aW9uIG1pbnVzIDEpIGFuZCBpZiB0aGUgcGxheWhlYWQgaXMgZXhhY3RseSBhdCB0aGUgdmVyeSBFTkQsIGl0IHdpbGwgTk9UIGJ1bXAgdXAgdG8gdGhlIG5leHQgY3ljbGUuXG5fYW5pbWF0aW9uQ3ljbGUgPSBmdW5jdGlvbiBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIGN5Y2xlRHVyYXRpb24pIHtcbiAgdmFyIHdob2xlID0gTWF0aC5mbG9vcih0VGltZSA9IF9yb3VuZFByZWNpc2UodFRpbWUgLyBjeWNsZUR1cmF0aW9uKSk7XG4gIHJldHVybiB0VGltZSAmJiB3aG9sZSA9PT0gdFRpbWUgPyB3aG9sZSAtIDEgOiB3aG9sZTtcbn0sXG4gICAgX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUgPSBmdW5jdGlvbiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnRUaW1lLCBjaGlsZCkge1xuICByZXR1cm4gKHBhcmVudFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzICsgKGNoaWxkLl90cyA+PSAwID8gMCA6IGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKTtcbn0sXG4gICAgX3NldEVuZCA9IGZ1bmN0aW9uIF9zZXRFbmQoYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX2VuZCA9IF9yb3VuZFByZWNpc2UoYW5pbWF0aW9uLl9zdGFydCArIChhbmltYXRpb24uX3REdXIgLyBNYXRoLmFicyhhbmltYXRpb24uX3RzIHx8IGFuaW1hdGlvbi5fcnRzIHx8IF90aW55TnVtKSB8fCAwKSk7XG59LFxuICAgIF9hbGlnblBsYXloZWFkID0gZnVuY3Rpb24gX2FsaWduUGxheWhlYWQoYW5pbWF0aW9uLCB0b3RhbFRpbWUpIHtcbiAgLy8gYWRqdXN0cyB0aGUgYW5pbWF0aW9uJ3MgX3N0YXJ0IGFuZCBfZW5kIGFjY29yZGluZyB0byB0aGUgcHJvdmlkZWQgdG90YWxUaW1lIChvbmx5IGlmIHRoZSBwYXJlbnQncyBzbW9vdGhDaGlsZFRpbWluZyBpcyB0cnVlIGFuZCB0aGUgYW5pbWF0aW9uIGlzbid0IHBhdXNlZCkuIEl0IGRvZXNuJ3QgZG8gYW55IHJlbmRlcmluZyBvciBmb3JjaW5nIHRoaW5ncyBiYWNrIGludG8gcGFyZW50IHRpbWVsaW5lcywgZXRjLiAtIHRoYXQncyB3aGF0IHRvdGFsVGltZSgpIGlzIGZvci5cbiAgdmFyIHBhcmVudCA9IGFuaW1hdGlvbi5fZHA7XG5cbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgYW5pbWF0aW9uLl90cykge1xuICAgIGFuaW1hdGlvbi5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKHBhcmVudC5fdGltZSAtIChhbmltYXRpb24uX3RzID4gMCA/IHRvdGFsVGltZSAvIGFuaW1hdGlvbi5fdHMgOiAoKGFuaW1hdGlvbi5fZGlydHkgPyBhbmltYXRpb24udG90YWxEdXJhdGlvbigpIDogYW5pbWF0aW9uLl90RHVyKSAtIHRvdGFsVGltZSkgLyAtYW5pbWF0aW9uLl90cykpO1xuXG4gICAgX3NldEVuZChhbmltYXRpb24pO1xuXG4gICAgcGFyZW50Ll9kaXJ0eSB8fCBfdW5jYWNoZShwYXJlbnQsIGFuaW1hdGlvbik7IC8vZm9yIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LiBJZiB0aGUgcGFyZW50J3MgY2FjaGUgaXMgYWxyZWFkeSBkaXJ0eSwgaXQgYWxyZWFkeSB0b29rIGNhcmUgb2YgbWFya2luZyB0aGUgYW5jZXN0b3JzIGFzIGRpcnR5IHRvbywgc28gc2tpcCB0aGUgZnVuY3Rpb24gY2FsbCBoZXJlLlxuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG5cbi8qXG5fdG90YWxUaW1lVG9UaW1lID0gKGNsYW1wZWRUb3RhbFRpbWUsIGR1cmF0aW9uLCByZXBlYXQsIHJlcGVhdERlbGF5LCB5b3lvKSA9PiB7XG5cdGxldCBjeWNsZUR1cmF0aW9uID0gZHVyYXRpb24gKyByZXBlYXREZWxheSxcblx0XHR0aW1lID0gX3JvdW5kKGNsYW1wZWRUb3RhbFRpbWUgJSBjeWNsZUR1cmF0aW9uKTtcblx0aWYgKHRpbWUgPiBkdXJhdGlvbikge1xuXHRcdHRpbWUgPSBkdXJhdGlvbjtcblx0fVxuXHRyZXR1cm4gKHlveW8gJiYgKH5+KGNsYW1wZWRUb3RhbFRpbWUgLyBjeWNsZUR1cmF0aW9uKSAmIDEpKSA/IGR1cmF0aW9uIC0gdGltZSA6IHRpbWU7XG59LFxuKi9cbl9wb3N0QWRkQ2hlY2tzID0gZnVuY3Rpb24gX3Bvc3RBZGRDaGVja3ModGltZWxpbmUsIGNoaWxkKSB7XG4gIHZhciB0O1xuXG4gIGlmIChjaGlsZC5fdGltZSB8fCAhY2hpbGQuX2R1ciAmJiBjaGlsZC5faW5pdHRlZCB8fCBjaGlsZC5fc3RhcnQgPCB0aW1lbGluZS5fdGltZSAmJiAoY2hpbGQuX2R1ciB8fCAhY2hpbGQuYWRkKSkge1xuICAgIC8vIGluIGNhc2UsIGZvciBleGFtcGxlLCB0aGUgX3N0YXJ0IGlzIG1vdmVkIG9uIGEgdHdlZW4gdGhhdCBoYXMgYWxyZWFkeSByZW5kZXJlZCwgb3IgaWYgaXQncyBiZWluZyBpbnNlcnRlZCBpbnRvIGEgdGltZWxpbmUgQkVGT1JFIHdoZXJlIHRoZSBwbGF5aGVhZCBpcyBjdXJyZW50bHkuIEltYWdpbmUgaXQncyBhdCBpdHMgZW5kIHN0YXRlLCB0aGVuIHRoZSBzdGFydFRpbWUgaXMgbW92ZWQgV0FZIGxhdGVyIChhZnRlciB0aGUgZW5kIG9mIHRoaXMgdGltZWxpbmUpLCBpdCBzaG91bGQgcmVuZGVyIGF0IGl0cyBiZWdpbm5pbmcuIFNwZWNpYWwgY2FzZTogaWYgaXQncyBhIHRpbWVsaW5lIChoYXMgLmFkZCgpIG1ldGhvZCkgYW5kIG5vIGR1cmF0aW9uLCB3ZSBjYW4gc2tpcCByZW5kZXJpbmcgYmVjYXVzZSB0aGUgdXNlciBtYXkgYmUgcG9wdWxhdGluZyBpdCBBRlRFUiBhZGRpbmcgaXQgdG8gYSBwYXJlbnQgdGltZWxpbmUgKHVuY29udmVudGlvbmFsLCBidXQgcG9zc2libGUsIGFuZCB3ZSB3b3VsZG4ndCB3YW50IGl0IHRvIGdldCByZW1vdmVkIGlmIHRoZSBwYXJlbnQncyBhdXRvUmVtb3ZlQ2hpbGRyZW4gaXMgdHJ1ZSkuXG4gICAgdCA9IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWVsaW5lLnJhd1RpbWUoKSwgY2hpbGQpO1xuXG4gICAgaWYgKCFjaGlsZC5fZHVyIHx8IF9jbGFtcCgwLCBjaGlsZC50b3RhbER1cmF0aW9uKCksIHQpIC0gY2hpbGQuX3RUaW1lID4gX3RpbnlOdW0pIHtcbiAgICAgIGNoaWxkLnJlbmRlcih0LCB0cnVlKTtcbiAgICB9XG4gIH0gLy9pZiB0aGUgdGltZWxpbmUgaGFzIGFscmVhZHkgZW5kZWQgYnV0IHRoZSBpbnNlcnRlZCB0d2Vlbi90aW1lbGluZSBleHRlbmRzIHRoZSBkdXJhdGlvbiwgd2Ugc2hvdWxkIGVuYWJsZSB0aGlzIHRpbWVsaW5lIGFnYWluIHNvIHRoYXQgaXQgcmVuZGVycyBwcm9wZXJseS4gV2Ugc2hvdWxkIGFsc28gYWxpZ24gdGhlIHBsYXloZWFkIHdpdGggdGhlIHBhcmVudCB0aW1lbGluZSdzIHdoZW4gYXBwcm9wcmlhdGUuXG5cblxuICBpZiAoX3VuY2FjaGUodGltZWxpbmUsIGNoaWxkKS5fZHAgJiYgdGltZWxpbmUuX2luaXR0ZWQgJiYgdGltZWxpbmUuX3RpbWUgPj0gdGltZWxpbmUuX2R1ciAmJiB0aW1lbGluZS5fdHMpIHtcbiAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvcnMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLi4uXG4gICAgaWYgKHRpbWVsaW5lLl9kdXIgPCB0aW1lbGluZS5kdXJhdGlvbigpKSB7XG4gICAgICB0ID0gdGltZWxpbmU7XG5cbiAgICAgIHdoaWxlICh0Ll9kcCkge1xuICAgICAgICB0LnJhd1RpbWUoKSA+PSAwICYmIHQudG90YWxUaW1lKHQuX3RUaW1lKTsgLy9tb3ZlcyB0aGUgdGltZWxpbmUgKHNoaWZ0cyBpdHMgc3RhcnRUaW1lKSBpZiBuZWNlc3NhcnksIGFuZCBhbHNvIGVuYWJsZXMgaXQuIElmIGl0J3MgY3VycmVudGx5IHplcm8sIHRob3VnaCwgaXQgbWF5IG5vdCBiZSBzY2hlZHVsZWQgdG8gcmVuZGVyIHVudGlsIGxhdGVyIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSBpdCB0byBhbGlnbiB3aXRoIHRoZSBjdXJyZW50IHBsYXloZWFkIHBvc2l0aW9uLiBPbmx5IG1vdmUgdG8gY2F0Y2ggdXAgd2l0aCB0aGUgcGxheWhlYWQuXG5cbiAgICAgICAgdCA9IHQuX2RwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVsaW5lLl96VGltZSA9IC1fdGlueU51bTsgLy8gaGVscHMgZW5zdXJlIHRoYXQgdGhlIG5leHQgcmVuZGVyKCkgd2lsbCBiZSBmb3JjZWQgKGNyb3NzaW5nU3RhcnQgPSB0cnVlIGluIHJlbmRlcigpKSwgZXZlbiBpZiB0aGUgZHVyYXRpb24gaGFzbid0IGNoYW5nZWQgKHdlJ3JlIGFkZGluZyBhIGNoaWxkIHdoaWNoIHdvdWxkIG5lZWQgdG8gZ2V0IHJlbmRlcmVkKS4gRGVmaW5pdGVseSBhbiBlZGdlIGNhc2UuIE5vdGU6IHdlIE1VU1QgZG8gdGhpcyBBRlRFUiB0aGUgbG9vcCBhYm92ZSB3aGVyZSB0aGUgdG90YWxUaW1lKCkgbWlnaHQgdHJpZ2dlciBhIHJlbmRlcigpIGJlY2F1c2UgdGhpcyBfYWRkVG9UaW1lbGluZSgpIG1ldGhvZCBnZXRzIGNhbGxlZCBmcm9tIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIEJFRk9SRSB0d2VlbnMgZXZlbiByZWNvcmQgdGhlaXIgdGFyZ2V0cywgZXRjLiBzbyB3ZSB3b3VsZG4ndCB3YW50IHRoaW5ncyB0byBnZXQgdHJpZ2dlcmVkIGluIHRoZSB3cm9uZyBvcmRlci5cbiAgfVxufSxcbiAgICBfYWRkVG9UaW1lbGluZSA9IGZ1bmN0aW9uIF9hZGRUb1RpbWVsaW5lKHRpbWVsaW5lLCBjaGlsZCwgcG9zaXRpb24sIHNraXBDaGVja3MpIHtcbiAgY2hpbGQucGFyZW50ICYmIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgY2hpbGQuX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZSgoX2lzTnVtYmVyKHBvc2l0aW9uKSA/IHBvc2l0aW9uIDogcG9zaXRpb24gfHwgdGltZWxpbmUgIT09IF9nbG9iYWxUaW1lbGluZSA/IF9wYXJzZVBvc2l0aW9uKHRpbWVsaW5lLCBwb3NpdGlvbiwgY2hpbGQpIDogdGltZWxpbmUuX3RpbWUpICsgY2hpbGQuX2RlbGF5KTtcbiAgY2hpbGQuX2VuZCA9IF9yb3VuZFByZWNpc2UoY2hpbGQuX3N0YXJ0ICsgKGNoaWxkLnRvdGFsRHVyYXRpb24oKSAvIE1hdGguYWJzKGNoaWxkLnRpbWVTY2FsZSgpKSB8fCAwKSk7XG5cbiAgX2FkZExpbmtlZExpc3RJdGVtKHRpbWVsaW5lLCBjaGlsZCwgXCJfZmlyc3RcIiwgXCJfbGFzdFwiLCB0aW1lbGluZS5fc29ydCA/IFwiX3N0YXJ0XCIgOiAwKTtcblxuICBfaXNGcm9tT3JGcm9tU3RhcnQoY2hpbGQpIHx8ICh0aW1lbGluZS5fcmVjZW50ID0gY2hpbGQpO1xuICBza2lwQ2hlY2tzIHx8IF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCk7XG4gIHRpbWVsaW5lLl90cyA8IDAgJiYgX2FsaWduUGxheWhlYWQodGltZWxpbmUsIHRpbWVsaW5lLl90VGltZSk7IC8vIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIG5ldyBjaGlsZCBtYWtlcyBpdCBsb25nZXIsIHdlIG1heSBuZWVkIHRvIGFkanVzdCB0aGUgcGFyZW50J3MgX3N0YXJ0IChwdXNoIGl0IGJhY2spXG5cbiAgcmV0dXJuIHRpbWVsaW5lO1xufSxcbiAgICBfc2Nyb2xsVHJpZ2dlciA9IGZ1bmN0aW9uIF9zY3JvbGxUcmlnZ2VyKGFuaW1hdGlvbiwgdHJpZ2dlcikge1xuICByZXR1cm4gKF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIgfHwgX21pc3NpbmdQbHVnaW4oXCJzY3JvbGxUcmlnZ2VyXCIsIHRyaWdnZXIpKSAmJiBfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh0cmlnZ2VyLCBhbmltYXRpb24pO1xufSxcbiAgICBfYXR0ZW1wdEluaXRUd2VlbiA9IGZ1bmN0aW9uIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0aW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMsIHRUaW1lKSB7XG4gIF9pbml0VHdlZW4odHdlZW4sIHRpbWUsIHRUaW1lKTtcblxuICBpZiAoIXR3ZWVuLl9pbml0dGVkKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoIWZvcmNlICYmIHR3ZWVuLl9wdCAmJiAhX3JldmVydGluZyAmJiAodHdlZW4uX2R1ciAmJiB0d2Vlbi52YXJzLmxhenkgIT09IGZhbHNlIHx8ICF0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSkgJiYgX2xhc3RSZW5kZXJlZEZyYW1lICE9PSBfdGlja2VyLmZyYW1lKSB7XG4gICAgX2xhenlUd2VlbnMucHVzaCh0d2Vlbik7XG5cbiAgICB0d2Vlbi5fbGF6eSA9IFt0VGltZSwgc3VwcHJlc3NFdmVudHNdO1xuICAgIHJldHVybiAxO1xuICB9XG59LFxuICAgIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQgPSBmdW5jdGlvbiBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KF9yZWYpIHtcbiAgdmFyIHBhcmVudCA9IF9yZWYucGFyZW50O1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5fdHMgJiYgcGFyZW50Ll9pbml0dGVkICYmICFwYXJlbnQuX2xvY2sgJiYgKHBhcmVudC5yYXdUaW1lKCkgPCAwIHx8IF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQocGFyZW50KSk7XG59LFxuICAgIC8vIGNoZWNrIHBhcmVudCdzIF9sb2NrIGJlY2F1c2Ugd2hlbiBhIHRpbWVsaW5lIHJlcGVhdHMveW95b3MgYW5kIGRvZXMgaXRzIGFydGlmaWNpYWwgd3JhcHBpbmcsIHdlIHNob3VsZG4ndCBmb3JjZSB0aGUgcmF0aW8gYmFjayB0byAwXG5faXNGcm9tT3JGcm9tU3RhcnQgPSBmdW5jdGlvbiBfaXNGcm9tT3JGcm9tU3RhcnQoX3JlZjIpIHtcbiAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xuICByZXR1cm4gZGF0YSA9PT0gXCJpc0Zyb21TdGFydFwiIHx8IGRhdGEgPT09IFwiaXNTdGFydFwiO1xufSxcbiAgICBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4gPSBmdW5jdGlvbiBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odHdlZW4sIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIHZhciBwcmV2UmF0aW8gPSB0d2Vlbi5yYXRpbyxcbiAgICAgIHJhdGlvID0gdG90YWxUaW1lIDwgMCB8fCAhdG90YWxUaW1lICYmICghdHdlZW4uX3N0YXJ0ICYmIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQodHdlZW4pICYmICEoIXR3ZWVuLl9pbml0dGVkICYmIF9pc0Zyb21PckZyb21TdGFydCh0d2VlbikpIHx8ICh0d2Vlbi5fdHMgPCAwIHx8IHR3ZWVuLl9kcC5fdHMgPCAwKSAmJiAhX2lzRnJvbU9yRnJvbVN0YXJ0KHR3ZWVuKSkgPyAwIDogMSxcbiAgICAgIC8vIGlmIHRoZSB0d2VlbiBvciBpdHMgcGFyZW50IGlzIHJldmVyc2VkIGFuZCB0aGUgdG90YWxUaW1lIGlzIDAsIHdlIHNob3VsZCBnbyB0byBhIHJhdGlvIG9mIDAuIEVkZ2UgY2FzZTogaWYgYSBmcm9tKCkgb3IgZnJvbVRvKCkgc3RhZ2dlciB0d2VlbiBpcyBwbGFjZWQgbGF0ZXIgaW4gYSB0aW1lbGluZSwgdGhlIFwic3RhcnRBdFwiIHplcm8tZHVyYXRpb24gdHdlZW4gY291bGQgaW5pdGlhbGx5IHJlbmRlciBhdCBhIHRpbWUgd2hlbiB0aGUgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgaXMgdGVjaG5pY2FsbHkgQkVGT1JFIHdoZXJlIHRoaXMgdHdlZW4gaXMsIHNvIG1ha2Ugc3VyZSB0aGF0IGFueSBcImZyb21cIiBhbmQgXCJmcm9tVG9cIiBzdGFydEF0IHR3ZWVucyBhcmUgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUgYXQgYSByYXRpbyBvZiAxLlxuICByZXBlYXREZWxheSA9IHR3ZWVuLl9yRGVsYXksXG4gICAgICB0VGltZSA9IDAsXG4gICAgICBwdCxcbiAgICAgIGl0ZXJhdGlvbixcbiAgICAgIHByZXZJdGVyYXRpb247XG5cbiAgaWYgKHJlcGVhdERlbGF5ICYmIHR3ZWVuLl9yZXBlYXQpIHtcbiAgICAvLyBpbiBjYXNlIHRoZXJlJ3MgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIHRoYXQgaGFzIGEgcmVwZWF0IHdpdGggYSByZXBlYXREZWxheVxuICAgIHRUaW1lID0gX2NsYW1wKDAsIHR3ZWVuLl90RHVyLCB0b3RhbFRpbWUpO1xuICAgIGl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgIHR3ZWVuLl95b3lvICYmIGl0ZXJhdGlvbiAmIDEgJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcblxuICAgIGlmIChpdGVyYXRpb24gIT09IF9hbmltYXRpb25DeWNsZSh0d2Vlbi5fdFRpbWUsIHJlcGVhdERlbGF5KSkge1xuICAgICAgLy8gaWYgaXRlcmF0aW9uIGNoYW5nZWRcbiAgICAgIHByZXZSYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIHR3ZWVuLnZhcnMucmVwZWF0UmVmcmVzaCAmJiB0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5pbnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJhdGlvICE9PSBwcmV2UmF0aW8gfHwgX3JldmVydGluZyB8fCBmb3JjZSB8fCB0d2Vlbi5felRpbWUgPT09IF90aW55TnVtIHx8ICF0b3RhbFRpbWUgJiYgdHdlZW4uX3pUaW1lKSB7XG4gICAgaWYgKCF0d2Vlbi5faW5pdHRlZCAmJiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMsIHRUaW1lKSkge1xuICAgICAgLy8gaWYgd2UgcmVuZGVyIHRoZSB2ZXJ5IGJlZ2lubmluZyAodGltZSA9PSAwKSBvZiBhIGZyb21UbygpLCB3ZSBtdXN0IGZvcmNlIHRoZSByZW5kZXIgKG5vcm1hbCB0d2VlbnMgd291bGRuJ3QgbmVlZCB0byByZW5kZXIgYXQgYSB0aW1lIG9mIDAgd2hlbiB0aGUgcHJldlRpbWUgd2FzIGFsc28gMCkuIFRoaXMgaXMgYWxzbyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIG92ZXJ3cml0aW5nIGtpY2tzIGluIGltbWVkaWF0ZWx5LlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByZXZJdGVyYXRpb24gPSB0d2Vlbi5felRpbWU7XG4gICAgdHdlZW4uX3pUaW1lID0gdG90YWxUaW1lIHx8IChzdXBwcmVzc0V2ZW50cyA/IF90aW55TnVtIDogMCk7IC8vIHdoZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgc3VwcHJlc3NFdmVudHMgfHwgKHN1cHByZXNzRXZlbnRzID0gdG90YWxUaW1lICYmICFwcmV2SXRlcmF0aW9uKTsgLy8gaWYgaXQgd2FzIHJlbmRlcmVkIHByZXZpb3VzbHkgYXQgZXhhY3RseSAwIChfelRpbWUpIGFuZCBub3cgdGhlIHBsYXloZWFkIGlzIG1vdmluZyBhd2F5LCBET04nVCBmaXJlIGNhbGxiYWNrcyBvdGhlcndpc2UgdGhleSdsbCBzZWVtIGxpa2UgZHVwbGljYXRlcy5cblxuICAgIHR3ZWVuLnJhdGlvID0gcmF0aW87XG4gICAgdHdlZW4uX2Zyb20gJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcbiAgICB0d2Vlbi5fdGltZSA9IDA7XG4gICAgdHdlZW4uX3RUaW1lID0gdFRpbWU7XG4gICAgcHQgPSB0d2Vlbi5fcHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG5cbiAgICB0b3RhbFRpbWUgPCAwICYmIF9yZXdpbmRTdGFydEF0KHR3ZWVuLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCB0cnVlKTtcbiAgICB0d2Vlbi5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblVwZGF0ZVwiKTtcbiAgICB0VGltZSAmJiB0d2Vlbi5fcmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0d2Vlbi5wYXJlbnQgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uUmVwZWF0XCIpO1xuXG4gICAgaWYgKCh0b3RhbFRpbWUgPj0gdHdlZW4uX3REdXIgfHwgdG90YWxUaW1lIDwgMCkgJiYgdHdlZW4ucmF0aW8gPT09IHJhdGlvKSB7XG4gICAgICByYXRpbyAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0d2VlbiwgMSk7XG5cbiAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgIV9yZXZlcnRpbmcpIHtcbiAgICAgICAgX2NhbGxiYWNrKHR3ZWVuLCByYXRpbyA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICB0d2Vlbi5fcHJvbSAmJiB0d2Vlbi5fcHJvbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICghdHdlZW4uX3pUaW1lKSB7XG4gICAgdHdlZW4uX3pUaW1lID0gdG90YWxUaW1lO1xuICB9XG59LFxuICAgIF9maW5kTmV4dFBhdXNlVHdlZW4gPSBmdW5jdGlvbiBfZmluZE5leHRQYXVzZVR3ZWVuKGFuaW1hdGlvbiwgcHJldlRpbWUsIHRpbWUpIHtcbiAgdmFyIGNoaWxkO1xuXG4gIGlmICh0aW1lID4gcHJldlRpbWUpIHtcbiAgICBjaGlsZCA9IGFuaW1hdGlvbi5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0IDw9IHRpbWUpIHtcbiAgICAgIGlmIChjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPiBwcmV2VGltZSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNoaWxkID0gYW5pbWF0aW9uLl9sYXN0O1xuXG4gICAgd2hpbGUgKGNoaWxkICYmIGNoaWxkLl9zdGFydCA+PSB0aW1lKSB7XG4gICAgICBpZiAoY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIgJiYgY2hpbGQuX3N0YXJ0IDwgcHJldlRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9wcmV2O1xuICAgIH1cbiAgfVxufSxcbiAgICBfc2V0RHVyYXRpb24gPSBmdW5jdGlvbiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBkdXJhdGlvbiwgc2tpcFVuY2FjaGUsIGxlYXZlUGxheWhlYWQpIHtcbiAgdmFyIHJlcGVhdCA9IGFuaW1hdGlvbi5fcmVwZWF0LFxuICAgICAgZHVyID0gX3JvdW5kUHJlY2lzZShkdXJhdGlvbikgfHwgMCxcbiAgICAgIHRvdGFsUHJvZ3Jlc3MgPSBhbmltYXRpb24uX3RUaW1lIC8gYW5pbWF0aW9uLl90RHVyO1xuICB0b3RhbFByb2dyZXNzICYmICFsZWF2ZVBsYXloZWFkICYmIChhbmltYXRpb24uX3RpbWUgKj0gZHVyIC8gYW5pbWF0aW9uLl9kdXIpO1xuICBhbmltYXRpb24uX2R1ciA9IGR1cjtcbiAgYW5pbWF0aW9uLl90RHVyID0gIXJlcGVhdCA/IGR1ciA6IHJlcGVhdCA8IDAgPyAxZTEwIDogX3JvdW5kUHJlY2lzZShkdXIgKiAocmVwZWF0ICsgMSkgKyBhbmltYXRpb24uX3JEZWxheSAqIHJlcGVhdCk7XG4gIHRvdGFsUHJvZ3Jlc3MgPiAwICYmICFsZWF2ZVBsYXloZWFkICYmIF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl90VGltZSA9IGFuaW1hdGlvbi5fdER1ciAqIHRvdGFsUHJvZ3Jlc3MpO1xuICBhbmltYXRpb24ucGFyZW50ICYmIF9zZXRFbmQoYW5pbWF0aW9uKTtcbiAgc2tpcFVuY2FjaGUgfHwgX3VuY2FjaGUoYW5pbWF0aW9uLnBhcmVudCwgYW5pbWF0aW9uKTtcbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX29uVXBkYXRlVG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24gaW5zdGFuY2VvZiBUaW1lbGluZSA/IF91bmNhY2hlKGFuaW1hdGlvbikgOiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBhbmltYXRpb24uX2R1cik7XG59LFxuICAgIF96ZXJvUG9zaXRpb24gPSB7XG4gIF9zdGFydDogMCxcbiAgZW5kVGltZTogX2VtcHR5RnVuYyxcbiAgdG90YWxEdXJhdGlvbjogX2VtcHR5RnVuY1xufSxcbiAgICBfcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24sIHBlcmNlbnRBbmltYXRpb24pIHtcbiAgdmFyIGxhYmVscyA9IGFuaW1hdGlvbi5sYWJlbHMsXG4gICAgICByZWNlbnQgPSBhbmltYXRpb24uX3JlY2VudCB8fCBfemVyb1Bvc2l0aW9uLFxuICAgICAgY2xpcHBlZER1cmF0aW9uID0gYW5pbWF0aW9uLmR1cmF0aW9uKCkgPj0gX2JpZ051bSA/IHJlY2VudC5lbmRUaW1lKGZhbHNlKSA6IGFuaW1hdGlvbi5fZHVyLFxuICAgICAgLy9pbiBjYXNlIHRoZXJlJ3MgYSBjaGlsZCB0aGF0IGluZmluaXRlbHkgcmVwZWF0cywgdXNlcnMgYWxtb3N0IG5ldmVyIGludGVuZCBmb3IgdGhlIGluc2VydGlvbiBwb2ludCBvZiBhIG5ldyBjaGlsZCB0byBiZSBiYXNlZCBvbiBhIFNVUEVSIGxvbmcgdmFsdWUgbGlrZSB0aGF0IHNvIHdlIGNsaXAgaXQgYW5kIGFzc3VtZSB0aGUgbW9zdCByZWNlbnRseS1hZGRlZCBjaGlsZCdzIGVuZFRpbWUgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAgaSxcbiAgICAgIG9mZnNldCxcbiAgICAgIGlzUGVyY2VudDtcblxuICBpZiAoX2lzU3RyaW5nKHBvc2l0aW9uKSAmJiAoaXNOYU4ocG9zaXRpb24pIHx8IHBvc2l0aW9uIGluIGxhYmVscykpIHtcbiAgICAvL2lmIHRoZSBzdHJpbmcgaXMgYSBudW1iZXIgbGlrZSBcIjFcIiwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYSBsYWJlbCB3aXRoIHRoYXQgbmFtZSwgb3RoZXJ3aXNlIGludGVycHJldCBpdCBhcyBhIG51bWJlciAoYWJzb2x1dGUgdmFsdWUpLlxuICAgIG9mZnNldCA9IHBvc2l0aW9uLmNoYXJBdCgwKTtcbiAgICBpc1BlcmNlbnQgPSBwb3NpdGlvbi5zdWJzdHIoLTEpID09PSBcIiVcIjtcbiAgICBpID0gcG9zaXRpb24uaW5kZXhPZihcIj1cIik7XG5cbiAgICBpZiAob2Zmc2V0ID09PSBcIjxcIiB8fCBvZmZzZXQgPT09IFwiPlwiKSB7XG4gICAgICBpID49IDAgJiYgKHBvc2l0aW9uID0gcG9zaXRpb24ucmVwbGFjZSgvPS8sIFwiXCIpKTtcbiAgICAgIHJldHVybiAob2Zmc2V0ID09PSBcIjxcIiA/IHJlY2VudC5fc3RhcnQgOiByZWNlbnQuZW5kVGltZShyZWNlbnQuX3JlcGVhdCA+PSAwKSkgKyAocGFyc2VGbG9hdChwb3NpdGlvbi5zdWJzdHIoMSkpIHx8IDApICogKGlzUGVyY2VudCA/IChpIDwgMCA/IHJlY2VudCA6IHBlcmNlbnRBbmltYXRpb24pLnRvdGFsRHVyYXRpb24oKSAvIDEwMCA6IDEpO1xuICAgIH1cblxuICAgIGlmIChpIDwgMCkge1xuICAgICAgcG9zaXRpb24gaW4gbGFiZWxzIHx8IChsYWJlbHNbcG9zaXRpb25dID0gY2xpcHBlZER1cmF0aW9uKTtcbiAgICAgIHJldHVybiBsYWJlbHNbcG9zaXRpb25dO1xuICAgIH1cblxuICAgIG9mZnNldCA9IHBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KGkgLSAxKSArIHBvc2l0aW9uLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGlzUGVyY2VudCAmJiBwZXJjZW50QW5pbWF0aW9uKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgLyAxMDAgKiAoX2lzQXJyYXkocGVyY2VudEFuaW1hdGlvbikgPyBwZXJjZW50QW5pbWF0aW9uWzBdIDogcGVyY2VudEFuaW1hdGlvbikudG90YWxEdXJhdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiBpID4gMSA/IF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24uc3Vic3RyKDAsIGkgLSAxKSwgcGVyY2VudEFuaW1hdGlvbikgKyBvZmZzZXQgOiBjbGlwcGVkRHVyYXRpb24gKyBvZmZzZXQ7XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb24gPT0gbnVsbCA/IGNsaXBwZWREdXJhdGlvbiA6ICtwb3NpdGlvbjtcbn0sXG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSA9IGZ1bmN0aW9uIF9jcmVhdGVUd2VlblR5cGUodHlwZSwgcGFyYW1zLCB0aW1lbGluZSkge1xuICB2YXIgaXNMZWdhY3kgPSBfaXNOdW1iZXIocGFyYW1zWzFdKSxcbiAgICAgIHZhcnNJbmRleCA9IChpc0xlZ2FjeSA/IDIgOiAxKSArICh0eXBlIDwgMiA/IDAgOiAxKSxcbiAgICAgIHZhcnMgPSBwYXJhbXNbdmFyc0luZGV4XSxcbiAgICAgIGlyVmFycyxcbiAgICAgIHBhcmVudDtcblxuICBpc0xlZ2FjeSAmJiAodmFycy5kdXJhdGlvbiA9IHBhcmFtc1sxXSk7XG4gIHZhcnMucGFyZW50ID0gdGltZWxpbmU7XG5cbiAgaWYgKHR5cGUpIHtcbiAgICBpclZhcnMgPSB2YXJzO1xuICAgIHBhcmVudCA9IHRpbWVsaW5lO1xuXG4gICAgd2hpbGUgKHBhcmVudCAmJiAhKFwiaW1tZWRpYXRlUmVuZGVyXCIgaW4gaXJWYXJzKSkge1xuICAgICAgLy8gaW5oZXJpdGFuY2UgaGFzbid0IGhhcHBlbmVkIHlldCwgYnV0IHNvbWVvbmUgbWF5IGhhdmUgc2V0IGEgZGVmYXVsdCBpbiBhbiBhbmNlc3RvciB0aW1lbGluZS4gV2UgY291bGQgZG8gdmFycy5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZShfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlcikgYnV0IHRoYXQnZCBleGFjdCBhIHNsaWdodCBwZXJmb3JtYW5jZSBwZW5hbHR5IGJlY2F1c2UgX2luaGVyaXREZWZhdWx0cygpIGFsc28gcnVucyBpbiB0aGUgVHdlZW4gY29uc3RydWN0b3IuIFdlJ3JlIHBheWluZyBhIHNtYWxsIGtiIHByaWNlIGhlcmUgdG8gZ2FpbiBzcGVlZC5cbiAgICAgIGlyVmFycyA9IHBhcmVudC52YXJzLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgcGFyZW50ID0gX2lzTm90RmFsc2UocGFyZW50LnZhcnMuaW5oZXJpdCkgJiYgcGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICB2YXJzLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKGlyVmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHR5cGUgPCAyID8gdmFycy5ydW5CYWNrd2FyZHMgPSAxIDogdmFycy5zdGFydEF0ID0gcGFyYW1zW3ZhcnNJbmRleCAtIDFdOyAvLyBcImZyb21cIiB2YXJzXG4gIH1cblxuICByZXR1cm4gbmV3IFR3ZWVuKHBhcmFtc1swXSwgdmFycywgcGFyYW1zW3ZhcnNJbmRleCArIDFdKTtcbn0sXG4gICAgX2NvbmRpdGlvbmFsUmV0dXJuID0gZnVuY3Rpb24gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jKSB7XG4gIHJldHVybiB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IGZ1bmModmFsdWUpIDogZnVuYztcbn0sXG4gICAgX2NsYW1wID0gZnVuY3Rpb24gX2NsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlO1xufSxcbiAgICBnZXRVbml0ID0gZnVuY3Rpb24gZ2V0VW5pdCh2YWx1ZSwgdikge1xuICByZXR1cm4gIV9pc1N0cmluZyh2YWx1ZSkgfHwgISh2ID0gX3VuaXRFeHAuZXhlYyh2YWx1ZSkpID8gXCJcIiA6IHZbMV07XG59LFxuICAgIC8vIG5vdGU6IHByb3RlY3QgYWdhaW5zdCBwYWRkZWQgbnVtYmVycyBhcyBzdHJpbmdzLCBsaWtlIFwiMTAwLjEwMFwiLiBUaGF0IHNob3VsZG4ndCByZXR1cm4gXCIwMFwiIGFzIHRoZSB1bml0LiBJZiBpdCdzIG51bWVyaWMsIHJldHVybiBubyB1bml0LlxuY2xhbXAgPSBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gX2NsYW1wKG1pbiwgbWF4LCB2KTtcbiAgfSk7XG59LFxuICAgIF9zbGljZSA9IFtdLnNsaWNlLFxuICAgIF9pc0FycmF5TGlrZSA9IGZ1bmN0aW9uIF9pc0FycmF5TGlrZSh2YWx1ZSwgbm9uRW1wdHkpIHtcbiAgcmV0dXJuIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZSkgJiYgXCJsZW5ndGhcIiBpbiB2YWx1ZSAmJiAoIW5vbkVtcHR5ICYmICF2YWx1ZS5sZW5ndGggfHwgdmFsdWUubGVuZ3RoIC0gMSBpbiB2YWx1ZSAmJiBfaXNPYmplY3QodmFsdWVbMF0pKSAmJiAhdmFsdWUubm9kZVR5cGUgJiYgdmFsdWUgIT09IF93aW47XG59LFxuICAgIF9mbGF0dGVuID0gZnVuY3Rpb24gX2ZsYXR0ZW4oYXIsIGxlYXZlU3RyaW5ncywgYWNjdW11bGF0b3IpIHtcbiAgaWYgKGFjY3VtdWxhdG9yID09PSB2b2lkIDApIHtcbiAgICBhY2N1bXVsYXRvciA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGFyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIF9hY2N1bXVsYXRvcjtcblxuICAgIHJldHVybiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgfHwgX2lzQXJyYXlMaWtlKHZhbHVlLCAxKSA/IChfYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvcikucHVzaC5hcHBseShfYWNjdW11bGF0b3IsIHRvQXJyYXkodmFsdWUpKSA6IGFjY3VtdWxhdG9yLnB1c2godmFsdWUpO1xuICB9KSB8fCBhY2N1bXVsYXRvcjtcbn0sXG4gICAgLy8gdGFrZXMgYW55IHZhbHVlIGFuZCByZXR1cm5zIGFuIEFycmF5LiBJZiBpdCdzIGEgc3RyaW5nIChhbmQgbGVhdmVTdHJpbmdzIGlzbid0IHRydWUpLCBpdCdsbCB1c2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgpIGFuZCBjb252ZXJ0IHRoYXQgdG8gYW4gYXJyYXkuIEl0J2xsIGFsc28gYWNjZXB0IGl0ZXJhYmxlcyBsaWtlIGpRdWVyeSBvYmplY3RzLlxudG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUsIHNjb3BlLCBsZWF2ZVN0cmluZ3MpIHtcbiAgcmV0dXJuIF9jb250ZXh0ICYmICFzY29wZSAmJiBfY29udGV4dC5zZWxlY3RvciA/IF9jb250ZXh0LnNlbGVjdG9yKHZhbHVlKSA6IF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyAmJiAoX2NvcmVJbml0dGVkIHx8ICFfd2FrZSgpKSA/IF9zbGljZS5jYWxsKChzY29wZSB8fCBfZG9jKS5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlKSwgMCkgOiBfaXNBcnJheSh2YWx1ZSkgPyBfZmxhdHRlbih2YWx1ZSwgbGVhdmVTdHJpbmdzKSA6IF9pc0FycmF5TGlrZSh2YWx1ZSkgPyBfc2xpY2UuY2FsbCh2YWx1ZSwgMCkgOiB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbn0sXG4gICAgc2VsZWN0b3IgPSBmdW5jdGlvbiBzZWxlY3Rvcih2YWx1ZSkge1xuICB2YWx1ZSA9IHRvQXJyYXkodmFsdWUpWzBdIHx8IF93YXJuKFwiSW52YWxpZCBzY29wZVwiKSB8fCB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGVsID0gdmFsdWUuY3VycmVudCB8fCB2YWx1ZS5uYXRpdmVFbGVtZW50IHx8IHZhbHVlO1xuICAgIHJldHVybiB0b0FycmF5KHYsIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgPyBlbCA6IGVsID09PSB2YWx1ZSA/IF93YXJuKFwiSW52YWxpZCBzY29wZVwiKSB8fCBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgOiB2YWx1ZSk7XG4gIH07XG59LFxuICAgIHNodWZmbGUgPSBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgcmV0dXJuIGEuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKTtcbiAgfSk7XG59LFxuICAgIC8vIGFsdGVybmF0aXZlIHRoYXQncyBhIGJpdCBmYXN0ZXIgYW5kIG1vcmUgcmVsaWFibHkgZGl2ZXJzZSBidXQgYmlnZ2VyOiAgIGZvciAobGV0IGosIHYsIGkgPSBhLmxlbmd0aDsgaTsgaiA9IChNYXRoLnJhbmRvbSgpICogaSkgfCAwLCB2ID0gYVstLWldLCBhW2ldID0gYVtqXSwgYVtqXSA9IHYpOyByZXR1cm4gYTtcbi8vIGZvciBkaXN0cmlidXRpbmcgdmFsdWVzIGFjcm9zcyBhbiBBcnJheS4gQ2FuIGFjY2VwdCBhIG51bWJlciwgYSBmdW5jdGlvbiBvciAobW9zdCBjb21tb25seSkgYW4gb2JqZWN0IHdoaWNoIGNhbiBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczoge2Jhc2UsIGFtb3VudCwgZnJvbSwgZWFzZSwgZ3JpZCwgYXhpcywgbGVuZ3RoLCBlYWNofS4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGluZGV4LCB0YXJnZXQsIGFycmF5LlxuZGlzdHJpYnV0ZSA9IGZ1bmN0aW9uIGRpc3RyaWJ1dGUodikge1xuICBpZiAoX2lzRnVuY3Rpb24odikpIHtcbiAgICByZXR1cm4gdjtcbiAgfVxuXG4gIHZhciB2YXJzID0gX2lzT2JqZWN0KHYpID8gdiA6IHtcbiAgICBlYWNoOiB2XG4gIH0sXG4gICAgICAvL246MSBpcyBqdXN0IHRvIGluZGljYXRlIHYgd2FzIGEgbnVtYmVyOyB3ZSBsZXZlcmFnZSB0aGF0IGxhdGVyIHRvIHNldCB2IGFjY29yZGluZyB0byB0aGUgbGVuZ3RoIHdlIGdldC4gSWYgYSBudW1iZXIgaXMgcGFzc2VkIGluLCB3ZSB0cmVhdCBpdCBsaWtlIHRoZSBvbGQgc3RhZ2dlciB2YWx1ZSB3aGVyZSAwLjEsIGZvciBleGFtcGxlLCB3b3VsZCBtZWFuIHRoYXQgdGhpbmdzIHdvdWxkIGJlIGRpc3RyaWJ1dGVkIHdpdGggMC4xIGJldHdlZW4gZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSByYXRoZXIgdGhhbiBhIHRvdGFsIFwiYW1vdW50XCIgdGhhdCdzIGNodW5rZWQgb3V0IGFtb25nIHRoZW0gYWxsLlxuICBlYXNlID0gX3BhcnNlRWFzZSh2YXJzLmVhc2UpLFxuICAgICAgZnJvbSA9IHZhcnMuZnJvbSB8fCAwLFxuICAgICAgYmFzZSA9IHBhcnNlRmxvYXQodmFycy5iYXNlKSB8fCAwLFxuICAgICAgY2FjaGUgPSB7fSxcbiAgICAgIGlzRGVjaW1hbCA9IGZyb20gPiAwICYmIGZyb20gPCAxLFxuICAgICAgcmF0aW9zID0gaXNOYU4oZnJvbSkgfHwgaXNEZWNpbWFsLFxuICAgICAgYXhpcyA9IHZhcnMuYXhpcyxcbiAgICAgIHJhdGlvWCA9IGZyb20sXG4gICAgICByYXRpb1kgPSBmcm9tO1xuXG4gIGlmIChfaXNTdHJpbmcoZnJvbSkpIHtcbiAgICByYXRpb1ggPSByYXRpb1kgPSB7XG4gICAgICBjZW50ZXI6IC41LFxuICAgICAgZWRnZXM6IC41LFxuICAgICAgZW5kOiAxXG4gICAgfVtmcm9tXSB8fCAwO1xuICB9IGVsc2UgaWYgKCFpc0RlY2ltYWwgJiYgcmF0aW9zKSB7XG4gICAgcmF0aW9YID0gZnJvbVswXTtcbiAgICByYXRpb1kgPSBmcm9tWzFdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpLCB0YXJnZXQsIGEpIHtcbiAgICB2YXIgbCA9IChhIHx8IHZhcnMpLmxlbmd0aCxcbiAgICAgICAgZGlzdGFuY2VzID0gY2FjaGVbbF0sXG4gICAgICAgIG9yaWdpblgsXG4gICAgICAgIG9yaWdpblksXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGQsXG4gICAgICAgIGosXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluLFxuICAgICAgICB3cmFwQXQ7XG5cbiAgICBpZiAoIWRpc3RhbmNlcykge1xuICAgICAgd3JhcEF0ID0gdmFycy5ncmlkID09PSBcImF1dG9cIiA/IDAgOiAodmFycy5ncmlkIHx8IFsxLCBfYmlnTnVtXSlbMV07XG5cbiAgICAgIGlmICghd3JhcEF0KSB7XG4gICAgICAgIG1heCA9IC1fYmlnTnVtO1xuXG4gICAgICAgIHdoaWxlIChtYXggPCAobWF4ID0gYVt3cmFwQXQrK10uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgJiYgd3JhcEF0IDwgbCkge31cblxuICAgICAgICB3cmFwQXQgPCBsICYmIHdyYXBBdC0tO1xuICAgICAgfVxuXG4gICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSA9IFtdO1xuICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICBvcmlnaW5ZID0gd3JhcEF0ID09PSBfYmlnTnVtID8gMCA6IHJhdGlvcyA/IGwgKiByYXRpb1kgLyB3cmFwQXQgLSAuNSA6IGZyb20gLyB3cmFwQXQgfCAwO1xuICAgICAgbWF4ID0gMDtcbiAgICAgIG1pbiA9IF9iaWdOdW07XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBsOyBqKyspIHtcbiAgICAgICAgeCA9IGogJSB3cmFwQXQgLSBvcmlnaW5YO1xuICAgICAgICB5ID0gb3JpZ2luWSAtIChqIC8gd3JhcEF0IHwgMCk7XG4gICAgICAgIGRpc3RhbmNlc1tqXSA9IGQgPSAhYXhpcyA/IF9zcXJ0KHggKiB4ICsgeSAqIHkpIDogTWF0aC5hYnMoYXhpcyA9PT0gXCJ5XCIgPyB5IDogeCk7XG4gICAgICAgIGQgPiBtYXggJiYgKG1heCA9IGQpO1xuICAgICAgICBkIDwgbWluICYmIChtaW4gPSBkKTtcbiAgICAgIH1cblxuICAgICAgZnJvbSA9PT0gXCJyYW5kb21cIiAmJiBzaHVmZmxlKGRpc3RhbmNlcyk7XG4gICAgICBkaXN0YW5jZXMubWF4ID0gbWF4IC0gbWluO1xuICAgICAgZGlzdGFuY2VzLm1pbiA9IG1pbjtcbiAgICAgIGRpc3RhbmNlcy52ID0gbCA9IChwYXJzZUZsb2F0KHZhcnMuYW1vdW50KSB8fCBwYXJzZUZsb2F0KHZhcnMuZWFjaCkgKiAod3JhcEF0ID4gbCA/IGwgLSAxIDogIWF4aXMgPyBNYXRoLm1heCh3cmFwQXQsIGwgLyB3cmFwQXQpIDogYXhpcyA9PT0gXCJ5XCIgPyBsIC8gd3JhcEF0IDogd3JhcEF0KSB8fCAwKSAqIChmcm9tID09PSBcImVkZ2VzXCIgPyAtMSA6IDEpO1xuICAgICAgZGlzdGFuY2VzLmIgPSBsIDwgMCA/IGJhc2UgLSBsIDogYmFzZTtcbiAgICAgIGRpc3RhbmNlcy51ID0gZ2V0VW5pdCh2YXJzLmFtb3VudCB8fCB2YXJzLmVhY2gpIHx8IDA7IC8vdW5pdFxuXG4gICAgICBlYXNlID0gZWFzZSAmJiBsIDwgMCA/IF9pbnZlcnRFYXNlKGVhc2UpIDogZWFzZTtcbiAgICB9XG5cbiAgICBsID0gKGRpc3RhbmNlc1tpXSAtIGRpc3RhbmNlcy5taW4pIC8gZGlzdGFuY2VzLm1heCB8fCAwO1xuICAgIHJldHVybiBfcm91bmRQcmVjaXNlKGRpc3RhbmNlcy5iICsgKGVhc2UgPyBlYXNlKGwpIDogbCkgKiBkaXN0YW5jZXMudikgKyBkaXN0YW5jZXMudTsgLy9yb3VuZCBpbiBvcmRlciB0byB3b3JrIGFyb3VuZCBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgfTtcbn0sXG4gICAgX3JvdW5kTW9kaWZpZXIgPSBmdW5jdGlvbiBfcm91bmRNb2RpZmllcih2KSB7XG4gIC8vcGFzcyBpbiAwLjEgZ2V0IGEgZnVuY3Rpb24gdGhhdCdsbCByb3VuZCB0byB0aGUgbmVhcmVzdCB0ZW50aCwgb3IgNSB0byByb3VuZCB0byB0aGUgY2xvc2VzdCA1LCBvciAwLjAwMSB0byB0aGUgY2xvc2VzdCAxMDAwdGgsIGV0Yy5cbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgKCh2ICsgXCJcIikuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aCk7IC8vdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGxpa2UgMjQgKiAwLjEgPT0gMi40MDAwMDAwMDAwMDAwMDA0KSwgd2UgY2hvcCBvZmYgYXQgYSBzcGVjaWZpYyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgKG11Y2ggZmFzdGVyIHRoYW4gdG9GaXhlZCgpKVxuXG4gIHJldHVybiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIG4gPSBfcm91bmRQcmVjaXNlKE1hdGgucm91bmQocGFyc2VGbG9hdChyYXcpIC8gdikgKiB2ICogcCk7XG5cbiAgICByZXR1cm4gKG4gLSBuICUgMSkgLyBwICsgKF9pc051bWJlcihyYXcpID8gMCA6IGdldFVuaXQocmF3KSk7IC8vIG4gLSBuICUgMSByZXBsYWNlcyBNYXRoLmZsb29yKCkgaW4gb3JkZXIgdG8gaGFuZGxlIG5lZ2F0aXZlIHZhbHVlcyBwcm9wZXJseS4gRm9yIGV4YW1wbGUsIE1hdGguZmxvb3IoLTE1MC4wMDAwMDAwMDAwMDAwMykgaXMgMTUxIVxuICB9O1xufSxcbiAgICBzbmFwID0gZnVuY3Rpb24gc25hcChzbmFwVG8sIHZhbHVlKSB7XG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXkoc25hcFRvKSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGlzMkQ7XG5cbiAgaWYgKCFpc0FycmF5ICYmIF9pc09iamVjdChzbmFwVG8pKSB7XG4gICAgcmFkaXVzID0gaXNBcnJheSA9IHNuYXBUby5yYWRpdXMgfHwgX2JpZ051bTtcblxuICAgIGlmIChzbmFwVG8udmFsdWVzKSB7XG4gICAgICBzbmFwVG8gPSB0b0FycmF5KHNuYXBUby52YWx1ZXMpO1xuXG4gICAgICBpZiAoaXMyRCA9ICFfaXNOdW1iZXIoc25hcFRvWzBdKSkge1xuICAgICAgICByYWRpdXMgKj0gcmFkaXVzOyAvL3BlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB3ZSBkb24ndCBoYXZlIHRvIE1hdGguc3FydCgpIGluIHRoZSBsb29wLlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbmFwVG8gPSBfcm91bmRNb2RpZmllcihzbmFwVG8uaW5jcmVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCAhaXNBcnJheSA/IF9yb3VuZE1vZGlmaWVyKHNuYXBUbykgOiBfaXNGdW5jdGlvbihzbmFwVG8pID8gZnVuY3Rpb24gKHJhdykge1xuICAgIGlzMkQgPSBzbmFwVG8ocmF3KTtcbiAgICByZXR1cm4gTWF0aC5hYnMoaXMyRCAtIHJhdykgPD0gcmFkaXVzID8gaXMyRCA6IHJhdztcbiAgfSA6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy54IDogcmF3KSxcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy55IDogMCksXG4gICAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICAgIGNsb3Nlc3QgPSAwLFxuICAgICAgICBpID0gc25hcFRvLmxlbmd0aCxcbiAgICAgICAgZHgsXG4gICAgICAgIGR5O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGlzMkQpIHtcbiAgICAgICAgZHggPSBzbmFwVG9baV0ueCAtIHg7XG4gICAgICAgIGR5ID0gc25hcFRvW2ldLnkgLSB5O1xuICAgICAgICBkeCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHggPSBNYXRoLmFicyhzbmFwVG9baV0gLSB4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGR4IDwgbWluKSB7XG4gICAgICAgIG1pbiA9IGR4O1xuICAgICAgICBjbG9zZXN0ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZXN0ID0gIXJhZGl1cyB8fCBtaW4gPD0gcmFkaXVzID8gc25hcFRvW2Nsb3Nlc3RdIDogcmF3O1xuICAgIHJldHVybiBpczJEIHx8IGNsb3Nlc3QgPT09IHJhdyB8fCBfaXNOdW1iZXIocmF3KSA/IGNsb3Nlc3QgOiBjbG9zZXN0ICsgZ2V0VW5pdChyYXcpO1xuICB9KTtcbn0sXG4gICAgcmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4LCByb3VuZGluZ0luY3JlbWVudCwgcmV0dXJuRnVuY3Rpb24pIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihfaXNBcnJheShtaW4pID8gIW1heCA6IHJvdW5kaW5nSW5jcmVtZW50ID09PSB0cnVlID8gISEocm91bmRpbmdJbmNyZW1lbnQgPSAwKSA6ICFyZXR1cm5GdW5jdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gbWluW35+KE1hdGgucmFuZG9tKCkgKiBtaW4ubGVuZ3RoKV0gOiAocm91bmRpbmdJbmNyZW1lbnQgPSByb3VuZGluZ0luY3JlbWVudCB8fCAxZS01KSAmJiAocmV0dXJuRnVuY3Rpb24gPSByb3VuZGluZ0luY3JlbWVudCA8IDEgPyBNYXRoLnBvdygxMCwgKHJvdW5kaW5nSW5jcmVtZW50ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxKSAmJiBNYXRoLmZsb29yKE1hdGgucm91bmQoKG1pbiAtIHJvdW5kaW5nSW5jcmVtZW50IC8gMiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgcm91bmRpbmdJbmNyZW1lbnQgKiAuOTkpKSAvIHJvdW5kaW5nSW5jcmVtZW50KSAqIHJvdW5kaW5nSW5jcmVtZW50ICogcmV0dXJuRnVuY3Rpb24pIC8gcmV0dXJuRnVuY3Rpb247XG4gIH0pO1xufSxcbiAgICBwaXBlID0gZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmN0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHYsIGYpIHtcbiAgICAgIHJldHVybiBmKHYpO1xuICAgIH0sIHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgdW5pdGl6ZSA9IGZ1bmN0aW9uIHVuaXRpemUoZnVuYywgdW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmMocGFyc2VGbG9hdCh2YWx1ZSkpICsgKHVuaXQgfHwgZ2V0VW5pdCh2YWx1ZSkpO1xuICB9O1xufSxcbiAgICBub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBtYXBSYW5nZShtaW4sIG1heCwgMCwgMSwgdmFsdWUpO1xufSxcbiAgICBfd3JhcEFycmF5ID0gZnVuY3Rpb24gX3dyYXBBcnJheShhLCB3cmFwcGVyLCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gYVt+fndyYXBwZXIoaW5kZXgpXTtcbiAgfSk7XG59LFxuICAgIHdyYXAgPSBmdW5jdGlvbiB3cmFwKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAvLyBOT1RFOiB3cmFwKCkgQ0FOTk9UIGJlIGFuIGFycm93IGZ1bmN0aW9uISBBIHZlcnkgb2RkIGNvbXBpbGluZyBidWcgY2F1c2VzIHByb2JsZW1zICh1bnJlbGF0ZWQgdG8gR1NBUCkuXG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcCgwLCBtaW4ubGVuZ3RoKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIChyYW5nZSArICh2YWx1ZSAtIG1pbikgJSByYW5nZSkgJSByYW5nZSArIG1pbjtcbiAgfSk7XG59LFxuICAgIHdyYXBZb3lvID0gZnVuY3Rpb24gd3JhcFlveW8obWluLCBtYXgsIHZhbHVlKSB7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbixcbiAgICAgIHRvdGFsID0gcmFuZ2UgKiAyO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwWW95bygwLCBtaW4ubGVuZ3RoIC0gMSksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhbHVlID0gKHRvdGFsICsgKHZhbHVlIC0gbWluKSAlIHRvdGFsKSAlIHRvdGFsIHx8IDA7XG4gICAgcmV0dXJuIG1pbiArICh2YWx1ZSA+IHJhbmdlID8gdG90YWwgLSB2YWx1ZSA6IHZhbHVlKTtcbiAgfSk7XG59LFxuICAgIF9yZXBsYWNlUmFuZG9tID0gZnVuY3Rpb24gX3JlcGxhY2VSYW5kb20ocykge1xuICByZXR1cm4gcy5yZXBsYWNlKF9yYW5kb21FeHAsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIC8vcmVwbGFjZXMgYWxsIG9jY3VycmVuY2VzIG9mIHJhbmRvbSguLi4pIGluIGEgc3RyaW5nIHdpdGggdGhlIGNhbGN1bGF0ZWQgcmFuZG9tIHZhbHVlLiBjYW4gYmUgYSByYW5nZSBsaWtlIHJhbmRvbSgtMTAwLCAxMDAsIDUpIG9yIGFuIGFycmF5IGxpa2UgcmFuZG9tKFswLCAxMDAsIDUwMF0pXG4gICAgdmFyIGFySW5kZXggPSBtYXRjaC5pbmRleE9mKFwiW1wiKSArIDEsXG4gICAgICAgIHZhbHVlcyA9IG1hdGNoLnN1YnN0cmluZyhhckluZGV4IHx8IDcsIGFySW5kZXggPyBtYXRjaC5pbmRleE9mKFwiXVwiKSA6IG1hdGNoLmxlbmd0aCAtIDEpLnNwbGl0KF9jb21tYURlbGltRXhwKTtcbiAgICByZXR1cm4gcmFuZG9tKGFySW5kZXggPyB2YWx1ZXMgOiArdmFsdWVzWzBdLCBhckluZGV4ID8gMCA6ICt2YWx1ZXNbMV0sICt2YWx1ZXNbMl0gfHwgMWUtNSk7XG4gIH0pO1xufSxcbiAgICBtYXBSYW5nZSA9IGZ1bmN0aW9uIG1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlKSB7XG4gIHZhciBpblJhbmdlID0gaW5NYXggLSBpbk1pbixcbiAgICAgIG91dFJhbmdlID0gb3V0TWF4IC0gb3V0TWluO1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gb3V0TWluICsgKCh2YWx1ZSAtIGluTWluKSAvIGluUmFuZ2UgKiBvdXRSYW5nZSB8fCAwKTtcbiAgfSk7XG59LFxuICAgIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RhcnQsIGVuZCwgcHJvZ3Jlc3MsIG11dGF0ZSkge1xuICB2YXIgZnVuYyA9IGlzTmFOKHN0YXJ0ICsgZW5kKSA/IDAgOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAoMSAtIHApICogc3RhcnQgKyBwICogZW5kO1xuICB9O1xuXG4gIGlmICghZnVuYykge1xuICAgIHZhciBpc1N0cmluZyA9IF9pc1N0cmluZyhzdGFydCksXG4gICAgICAgIG1hc3RlciA9IHt9LFxuICAgICAgICBwLFxuICAgICAgICBpLFxuICAgICAgICBpbnRlcnBvbGF0b3JzLFxuICAgICAgICBsLFxuICAgICAgICBpbDtcblxuICAgIHByb2dyZXNzID09PSB0cnVlICYmIChtdXRhdGUgPSAxKSAmJiAocHJvZ3Jlc3MgPSBudWxsKTtcblxuICAgIGlmIChpc1N0cmluZykge1xuICAgICAgc3RhcnQgPSB7XG4gICAgICAgIHA6IHN0YXJ0XG4gICAgICB9O1xuICAgICAgZW5kID0ge1xuICAgICAgICBwOiBlbmRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChfaXNBcnJheShzdGFydCkgJiYgIV9pc0FycmF5KGVuZCkpIHtcbiAgICAgIGludGVycG9sYXRvcnMgPSBbXTtcbiAgICAgIGwgPSBzdGFydC5sZW5ndGg7XG4gICAgICBpbCA9IGwgLSAyO1xuXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludGVycG9sYXRvcnMucHVzaChpbnRlcnBvbGF0ZShzdGFydFtpIC0gMV0sIHN0YXJ0W2ldKSk7IC8vYnVpbGQgdGhlIGludGVycG9sYXRvcnMgdXAgZnJvbnQgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gc28gdGhhdCB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgbWFueSB0aW1lcywgaXQgY2FuIGp1c3QgcmV1c2UgdGhlbS5cbiAgICAgIH1cblxuICAgICAgbC0tO1xuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHAgKj0gbDtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihpbCwgfn5wKTtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvcnNbaV0ocCAtIGkpO1xuICAgICAgfTtcblxuICAgICAgcHJvZ3Jlc3MgPSBlbmQ7XG4gICAgfSBlbHNlIGlmICghbXV0YXRlKSB7XG4gICAgICBzdGFydCA9IF9tZXJnZShfaXNBcnJheShzdGFydCkgPyBbXSA6IHt9LCBzdGFydCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnRlcnBvbGF0b3JzKSB7XG4gICAgICBmb3IgKHAgaW4gZW5kKSB7XG4gICAgICAgIF9hZGRQcm9wVHdlZW4uY2FsbChtYXN0ZXIsIHN0YXJ0LCBwLCBcImdldFwiLCBlbmRbcF0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHJldHVybiBfcmVuZGVyUHJvcFR3ZWVucyhwLCBtYXN0ZXIpIHx8IChpc1N0cmluZyA/IHN0YXJ0LnAgOiBzdGFydCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4ocHJvZ3Jlc3MsIGZ1bmMpO1xufSxcbiAgICBfZ2V0TGFiZWxJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRpbWVsaW5lLCBmcm9tVGltZSwgYmFja3dhcmQpIHtcbiAgLy91c2VkIGZvciBuZXh0TGFiZWwoKSBhbmQgcHJldmlvdXNMYWJlbCgpXG4gIHZhciBsYWJlbHMgPSB0aW1lbGluZS5sYWJlbHMsXG4gICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgcCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgbGFiZWw7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGRpc3RhbmNlID0gbGFiZWxzW3BdIC0gZnJvbVRpbWU7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCAwID09PSAhIWJhY2t3YXJkICYmIGRpc3RhbmNlICYmIG1pbiA+IChkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlKSkpIHtcbiAgICAgIGxhYmVsID0gcDtcbiAgICAgIG1pbiA9IGRpc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn0sXG4gICAgX2NhbGxiYWNrID0gZnVuY3Rpb24gX2NhbGxiYWNrKGFuaW1hdGlvbiwgdHlwZSwgZXhlY3V0ZUxhenlGaXJzdCkge1xuICB2YXIgdiA9IGFuaW1hdGlvbi52YXJzLFxuICAgICAgY2FsbGJhY2sgPSB2W3R5cGVdLFxuICAgICAgcHJldkNvbnRleHQgPSBfY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBhbmltYXRpb24uX2N0eCxcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNjb3BlLFxuICAgICAgcmVzdWx0O1xuXG4gIGlmICghY2FsbGJhY2spIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwYXJhbXMgPSB2W3R5cGUgKyBcIlBhcmFtc1wiXTtcbiAgc2NvcGUgPSB2LmNhbGxiYWNrU2NvcGUgfHwgYW5pbWF0aW9uO1xuICBleGVjdXRlTGF6eUZpcnN0ICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uVXBkYXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblxuICBjb250ZXh0ICYmIChfY29udGV4dCA9IGNvbnRleHQpO1xuICByZXN1bHQgPSBwYXJhbXMgPyBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKSA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICBfY29udGV4dCA9IHByZXZDb250ZXh0O1xuICByZXR1cm4gcmVzdWx0O1xufSxcbiAgICBfaW50ZXJydXB0ID0gZnVuY3Rpb24gX2ludGVycnVwdChhbmltYXRpb24pIHtcbiAgX3JlbW92ZUZyb21QYXJlbnQoYW5pbWF0aW9uKTtcblxuICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciAmJiBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5raWxsKCEhX3JldmVydGluZyk7XG4gIGFuaW1hdGlvbi5wcm9ncmVzcygpIDwgMSAmJiBfY2FsbGJhY2soYW5pbWF0aW9uLCBcIm9uSW50ZXJydXB0XCIpO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcXVpY2tUd2VlbixcbiAgICBfcmVnaXN0ZXJQbHVnaW5RdWV1ZSA9IFtdLFxuICAgIF9jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiBfY3JlYXRlUGx1Z2luKGNvbmZpZykge1xuICBpZiAoIWNvbmZpZykgcmV0dXJuO1xuICBjb25maWcgPSAhY29uZmlnLm5hbWUgJiYgY29uZmlnW1wiZGVmYXVsdFwiXSB8fCBjb25maWc7IC8vIFVNRCBwYWNrYWdpbmcgd3JhcHMgdGhpbmdzIG9kZGx5LCBzbyBmb3IgZXhhbXBsZSBNb3Rpb25QYXRoSGVscGVyIGJlY29tZXMge01vdGlvblBhdGhIZWxwZXI6TW90aW9uUGF0aEhlbHBlciwgZGVmYXVsdDpNb3Rpb25QYXRoSGVscGVyfS5cblxuICBpZiAoX3dpbmRvd0V4aXN0cygpIHx8IGNvbmZpZy5oZWFkbGVzcykge1xuICAgIC8vIGVkZ2UgY2FzZTogc29tZSBidWlsZCB0b29scyBtYXkgcGFzcyBpbiBhIG51bGwvdW5kZWZpbmVkIHZhbHVlXG4gICAgdmFyIG5hbWUgPSBjb25maWcubmFtZSxcbiAgICAgICAgaXNGdW5jID0gX2lzRnVuY3Rpb24oY29uZmlnKSxcbiAgICAgICAgUGx1Z2luID0gbmFtZSAmJiAhaXNGdW5jICYmIGNvbmZpZy5pbml0ID8gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fcHJvcHMgPSBbXTtcbiAgICB9IDogY29uZmlnLFxuICAgICAgICAvL2luIGNhc2Ugc29tZW9uZSBwYXNzZXMgaW4gYW4gb2JqZWN0IHRoYXQncyBub3QgYSBwbHVnaW4sIGxpa2UgQ3VzdG9tRWFzZVxuICAgIGluc3RhbmNlRGVmYXVsdHMgPSB7XG4gICAgICBpbml0OiBfZW1wdHlGdW5jLFxuICAgICAgcmVuZGVyOiBfcmVuZGVyUHJvcFR3ZWVucyxcbiAgICAgIGFkZDogX2FkZFByb3BUd2VlbixcbiAgICAgIGtpbGw6IF9raWxsUHJvcFR3ZWVuc09mLFxuICAgICAgbW9kaWZpZXI6IF9hZGRQbHVnaW5Nb2RpZmllcixcbiAgICAgIHJhd1ZhcnM6IDBcbiAgICB9LFxuICAgICAgICBzdGF0aWNzID0ge1xuICAgICAgdGFyZ2V0VGVzdDogMCxcbiAgICAgIGdldDogMCxcbiAgICAgIGdldFNldHRlcjogX2dldFNldHRlcixcbiAgICAgIGFsaWFzZXM6IHt9LFxuICAgICAgcmVnaXN0ZXI6IDBcbiAgICB9O1xuXG4gICAgX3dha2UoKTtcblxuICAgIGlmIChjb25maWcgIT09IFBsdWdpbikge1xuICAgICAgaWYgKF9wbHVnaW5zW25hbWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3NldERlZmF1bHRzKFBsdWdpbiwgX3NldERlZmF1bHRzKF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgaW5zdGFuY2VEZWZhdWx0cyksIHN0YXRpY3MpKTsgLy9zdGF0aWMgbWV0aG9kc1xuXG5cbiAgICAgIF9tZXJnZShQbHVnaW4ucHJvdG90eXBlLCBfbWVyZ2UoaW5zdGFuY2VEZWZhdWx0cywgX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBzdGF0aWNzKSkpOyAvL2luc3RhbmNlIG1ldGhvZHNcblxuXG4gICAgICBfcGx1Z2luc1tQbHVnaW4ucHJvcCA9IG5hbWVdID0gUGx1Z2luO1xuXG4gICAgICBpZiAoY29uZmlnLnRhcmdldFRlc3QpIHtcbiAgICAgICAgX2hhcm5lc3NQbHVnaW5zLnB1c2goUGx1Z2luKTtcblxuICAgICAgICBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIG5hbWUgPSAobmFtZSA9PT0gXCJjc3NcIiA/IFwiQ1NTXCIgOiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSkpICsgXCJQbHVnaW5cIjsgLy9mb3IgdGhlIGdsb2JhbCBuYW1lLiBcIm1vdGlvblBhdGhcIiBzaG91bGQgYmVjb21lIE1vdGlvblBhdGhQbHVnaW5cbiAgICB9XG5cbiAgICBfYWRkR2xvYmFsKG5hbWUsIFBsdWdpbik7XG5cbiAgICBjb25maWcucmVnaXN0ZXIgJiYgY29uZmlnLnJlZ2lzdGVyKGdzYXAsIFBsdWdpbiwgUHJvcFR3ZWVuKTtcbiAgfSBlbHNlIHtcbiAgICBfcmVnaXN0ZXJQbHVnaW5RdWV1ZS5wdXNoKGNvbmZpZyk7XG4gIH1cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ09MT1JTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fMjU1ID0gMjU1LFxuICAgIF9jb2xvckxvb2t1cCA9IHtcbiAgYXF1YTogWzAsIF8yNTUsIF8yNTVdLFxuICBsaW1lOiBbMCwgXzI1NSwgMF0sXG4gIHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuICBibGFjazogWzAsIDAsIDBdLFxuICBtYXJvb246IFsxMjgsIDAsIDBdLFxuICB0ZWFsOiBbMCwgMTI4LCAxMjhdLFxuICBibHVlOiBbMCwgMCwgXzI1NV0sXG4gIG5hdnk6IFswLCAwLCAxMjhdLFxuICB3aGl0ZTogW18yNTUsIF8yNTUsIF8yNTVdLFxuICBvbGl2ZTogWzEyOCwgMTI4LCAwXSxcbiAgeWVsbG93OiBbXzI1NSwgXzI1NSwgMF0sXG4gIG9yYW5nZTogW18yNTUsIDE2NSwgMF0sXG4gIGdyYXk6IFsxMjgsIDEyOCwgMTI4XSxcbiAgcHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuICBncmVlbjogWzAsIDEyOCwgMF0sXG4gIHJlZDogW18yNTUsIDAsIDBdLFxuICBwaW5rOiBbXzI1NSwgMTkyLCAyMDNdLFxuICBjeWFuOiBbMCwgXzI1NSwgXzI1NV0sXG4gIHRyYW5zcGFyZW50OiBbXzI1NSwgXzI1NSwgXzI1NSwgMF1cbn0sXG4gICAgLy8gcG9zc2libGUgZnV0dXJlIGlkZWEgdG8gcmVwbGFjZSB0aGUgaGFyZC1jb2RlZCBjb2xvciBuYW1lIHZhbHVlcyAtIHB1dCB0aGlzIGluIHRoZSB0aWNrZXIud2FrZSgpIHdoZXJlIHdlIHNldCB0aGUgX2RvYzpcbi8vIGxldCBjdHggPSBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuLy8gX2ZvckVhY2hOYW1lKFwiYXF1YSxsaW1lLHNpbHZlcixibGFjayxtYXJvb24sdGVhbCxibHVlLG5hdnksd2hpdGUsb2xpdmUseWVsbG93LG9yYW5nZSxncmF5LHB1cnBsZSxncmVlbixyZWQscGluayxjeWFuXCIsIGNvbG9yID0+IHtjdHguZmlsbFN0eWxlID0gY29sb3I7IF9jb2xvckxvb2t1cFtjb2xvcl0gPSBzcGxpdENvbG9yKGN0eC5maWxsU3R5bGUpfSk7XG5faHVlID0gZnVuY3Rpb24gX2h1ZShoLCBtMSwgbTIpIHtcbiAgaCArPSBoIDwgMCA/IDEgOiBoID4gMSA/IC0xIDogMDtcbiAgcmV0dXJuIChoICogNiA8IDEgPyBtMSArIChtMiAtIG0xKSAqIGggKiA2IDogaCA8IC41ID8gbTIgOiBoICogMyA8IDIgPyBtMSArIChtMiAtIG0xKSAqICgyIC8gMyAtIGgpICogNiA6IG0xKSAqIF8yNTUgKyAuNSB8IDA7XG59LFxuICAgIHNwbGl0Q29sb3IgPSBmdW5jdGlvbiBzcGxpdENvbG9yKHYsIHRvSFNMLCBmb3JjZUFscGhhKSB7XG4gIHZhciBhID0gIXYgPyBfY29sb3JMb29rdXAuYmxhY2sgOiBfaXNOdW1iZXIodikgPyBbdiA+PiAxNiwgdiA+PiA4ICYgXzI1NSwgdiAmIF8yNTVdIDogMCxcbiAgICAgIHIsXG4gICAgICBnLFxuICAgICAgYixcbiAgICAgIGgsXG4gICAgICBzLFxuICAgICAgbCxcbiAgICAgIG1heCxcbiAgICAgIG1pbixcbiAgICAgIGQsXG4gICAgICB3YXNIU0w7XG5cbiAgaWYgKCFhKSB7XG4gICAgaWYgKHYuc3Vic3RyKC0xKSA9PT0gXCIsXCIpIHtcbiAgICAgIC8vc29tZXRpbWVzIGEgdHJhaWxpbmcgY29tbWEgaXMgaW5jbHVkZWQgYW5kIHdlIHNob3VsZCBjaG9wIGl0IG9mZiAodHlwaWNhbGx5IGZyb20gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiB2YWx1ZXMgbGlrZSBhIHRleHRTaGFkb3c6XCIycHggMnB4IDJweCBibHVlLCA1cHggNXB4IDVweCByZ2IoMjU1LDAsMClcIiAtIGluIHRoaXMgZXhhbXBsZSBcImJsdWUsXCIgaGFzIGEgdHJhaWxpbmcgY29tbWEuIFdlIGNvdWxkIHN0cmlwIGl0IG91dCBpbnNpZGUgcGFyc2VDb21wbGV4KCkgYnV0IHdlJ2QgbmVlZCB0byBkbyBpdCB0byB0aGUgYmVnaW5uaW5nIGFuZCBlbmRpbmcgdmFsdWVzIHBsdXMgaXQgd291bGRuJ3QgcHJvdmlkZSBwcm90ZWN0aW9uIGZyb20gb3RoZXIgcG90ZW50aWFsIHNjZW5hcmlvcyBsaWtlIGlmIHRoZSB1c2VyIHBhc3NlcyBpbiBhIHNpbWlsYXIgdmFsdWUuXG4gICAgICB2ID0gdi5zdWJzdHIoMCwgdi5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICBpZiAoX2NvbG9yTG9va3VwW3ZdKSB7XG4gICAgICBhID0gX2NvbG9yTG9va3VwW3ZdO1xuICAgIH0gZWxzZSBpZiAodi5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICBpZiAodi5sZW5ndGggPCA2KSB7XG4gICAgICAgIC8vZm9yIHNob3J0aGFuZCBsaWtlICM5RjAgb3IgIzlGMEYgKGNvdWxkIGhhdmUgYWxwaGEpXG4gICAgICAgIHIgPSB2LmNoYXJBdCgxKTtcbiAgICAgICAgZyA9IHYuY2hhckF0KDIpO1xuICAgICAgICBiID0gdi5jaGFyQXQoMyk7XG4gICAgICAgIHYgPSBcIiNcIiArIHIgKyByICsgZyArIGcgKyBiICsgYiArICh2Lmxlbmd0aCA9PT0gNSA/IHYuY2hhckF0KDQpICsgdi5jaGFyQXQoNCkgOiBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHYubGVuZ3RoID09PSA5KSB7XG4gICAgICAgIC8vIGhleCB3aXRoIGFscGhhLCBsaWtlICNmZDVlNTNmZlxuICAgICAgICBhID0gcGFyc2VJbnQodi5zdWJzdHIoMSwgNiksIDE2KTtcbiAgICAgICAgcmV0dXJuIFthID4+IDE2LCBhID4+IDggJiBfMjU1LCBhICYgXzI1NSwgcGFyc2VJbnQodi5zdWJzdHIoNyksIDE2KSAvIDI1NV07XG4gICAgICB9XG5cbiAgICAgIHYgPSBwYXJzZUludCh2LnN1YnN0cigxKSwgMTYpO1xuICAgICAgYSA9IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV07XG4gICAgfSBlbHNlIGlmICh2LnN1YnN0cigwLCAzKSA9PT0gXCJoc2xcIikge1xuICAgICAgYSA9IHdhc0hTTCA9IHYubWF0Y2goX3N0cmljdE51bUV4cCk7XG5cbiAgICAgIGlmICghdG9IU0wpIHtcbiAgICAgICAgaCA9ICthWzBdICUgMzYwIC8gMzYwO1xuICAgICAgICBzID0gK2FbMV0gLyAxMDA7XG4gICAgICAgIGwgPSArYVsyXSAvIDEwMDtcbiAgICAgICAgZyA9IGwgPD0gLjUgPyBsICogKHMgKyAxKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIHIgPSBsICogMiAtIGc7XG4gICAgICAgIGEubGVuZ3RoID4gMyAmJiAoYVszXSAqPSAxKTsgLy9jYXN0IGFzIG51bWJlclxuXG4gICAgICAgIGFbMF0gPSBfaHVlKGggKyAxIC8gMywgciwgZyk7XG4gICAgICAgIGFbMV0gPSBfaHVlKGgsIHIsIGcpO1xuICAgICAgICBhWzJdID0gX2h1ZShoIC0gMSAvIDMsIHIsIGcpO1xuICAgICAgfSBlbHNlIGlmICh+di5pbmRleE9mKFwiPVwiKSkge1xuICAgICAgICAvL2lmIHJlbGF0aXZlIHZhbHVlcyBhcmUgZm91bmQsIGp1c3QgcmV0dXJuIHRoZSByYXcgc3RyaW5ncyB3aXRoIHRoZSByZWxhdGl2ZSBwcmVmaXhlcyBpbiBwbGFjZS5cbiAgICAgICAgYSA9IHYubWF0Y2goX251bUV4cCk7XG4gICAgICAgIGZvcmNlQWxwaGEgJiYgYS5sZW5ndGggPCA0ICYmIChhWzNdID0gMSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKSB8fCBfY29sb3JMb29rdXAudHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgYSA9IGEubWFwKE51bWJlcik7XG4gIH1cblxuICBpZiAodG9IU0wgJiYgIXdhc0hTTCkge1xuICAgIHIgPSBhWzBdIC8gXzI1NTtcbiAgICBnID0gYVsxXSAvIF8yNTU7XG4gICAgYiA9IGFbMl0gLyBfMjU1O1xuICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAgIGggPSBzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZCA9IG1heCAtIG1pbjtcbiAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgIGggPSBtYXggPT09IHIgPyAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKSA6IG1heCA9PT0gZyA/IChiIC0gcikgLyBkICsgMiA6IChyIC0gZykgLyBkICsgNDtcbiAgICAgIGggKj0gNjA7XG4gICAgfVxuXG4gICAgYVswXSA9IH5+KGggKyAuNSk7XG4gICAgYVsxXSA9IH5+KHMgKiAxMDAgKyAuNSk7XG4gICAgYVsyXSA9IH5+KGwgKiAxMDAgKyAuNSk7XG4gIH1cblxuICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICByZXR1cm4gYTtcbn0sXG4gICAgX2NvbG9yT3JkZXJEYXRhID0gZnVuY3Rpb24gX2NvbG9yT3JkZXJEYXRhKHYpIHtcbiAgLy8gc3RyaXBzIG91dCB0aGUgY29sb3JzIGZyb20gdGhlIHN0cmluZywgZmluZHMgYWxsIHRoZSBudW1lcmljIHNsb3RzICh3aXRoIHVuaXRzKSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aG9zZS4gVGhlIEFycmF5IGFsc28gaGFzIGEgXCJjXCIgcHJvcGVydHkgd2hpY2ggaXMgYW4gQXJyYXkgb2YgdGhlIGluZGV4IHZhbHVlcyB3aGVyZSB0aGUgY29sb3JzIGJlbG9uZy4gVGhpcyBpcyB0byBoZWxwIHdvcmsgYXJvdW5kIGlzc3VlcyB3aGVyZSB0aGVyZSdzIGEgbWlzLW1hdGNoZWQgb3JkZXIgb2YgY29sb3IvbnVtZXJpYyBkYXRhIGxpa2UgZHJvcC1zaGFkb3coI2YwMCAwcHggMXB4IDJweCkgYW5kIGRyb3Atc2hhZG93KDB4IDFweCAycHggI2YwMCkuIFRoaXMgaXMgYmFzaWNhbGx5IGEgaGVscGVyIGZ1bmN0aW9uIHVzZWQgaW4gX2Zvcm1hdENvbG9ycygpXG4gIHZhciB2YWx1ZXMgPSBbXSxcbiAgICAgIGMgPSBbXSxcbiAgICAgIGkgPSAtMTtcbiAgdi5zcGxpdChfY29sb3JFeHApLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgYSA9IHYubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcbiAgICB2YWx1ZXMucHVzaC5hcHBseSh2YWx1ZXMsIGEpO1xuICAgIGMucHVzaChpICs9IGEubGVuZ3RoICsgMSk7XG4gIH0pO1xuICB2YWx1ZXMuYyA9IGM7XG4gIHJldHVybiB2YWx1ZXM7XG59LFxuICAgIF9mb3JtYXRDb2xvcnMgPSBmdW5jdGlvbiBfZm9ybWF0Q29sb3JzKHMsIHRvSFNMLCBvcmRlck1hdGNoRGF0YSkge1xuICB2YXIgcmVzdWx0ID0gXCJcIixcbiAgICAgIGNvbG9ycyA9IChzICsgcmVzdWx0KS5tYXRjaChfY29sb3JFeHApLFxuICAgICAgdHlwZSA9IHRvSFNMID8gXCJoc2xhKFwiIDogXCJyZ2JhKFwiLFxuICAgICAgaSA9IDAsXG4gICAgICBjLFxuICAgICAgc2hlbGwsXG4gICAgICBkLFxuICAgICAgbDtcblxuICBpZiAoIWNvbG9ycykge1xuICAgIHJldHVybiBzO1xuICB9XG5cbiAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICByZXR1cm4gKGNvbG9yID0gc3BsaXRDb2xvcihjb2xvciwgdG9IU0wsIDEpKSAmJiB0eXBlICsgKHRvSFNMID8gY29sb3JbMF0gKyBcIixcIiArIGNvbG9yWzFdICsgXCIlLFwiICsgY29sb3JbMl0gKyBcIiUsXCIgKyBjb2xvclszXSA6IGNvbG9yLmpvaW4oXCIsXCIpKSArIFwiKVwiO1xuICB9KTtcblxuICBpZiAob3JkZXJNYXRjaERhdGEpIHtcbiAgICBkID0gX2NvbG9yT3JkZXJEYXRhKHMpO1xuICAgIGMgPSBvcmRlck1hdGNoRGF0YS5jO1xuXG4gICAgaWYgKGMuam9pbihyZXN1bHQpICE9PSBkLmMuam9pbihyZXN1bHQpKSB7XG4gICAgICBzaGVsbCA9IHMucmVwbGFjZShfY29sb3JFeHAsIFwiMVwiKS5zcGxpdChfbnVtV2l0aFVuaXRFeHApO1xuICAgICAgbCA9IHNoZWxsLmxlbmd0aCAtIDE7XG5cbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSBzaGVsbFtpXSArICh+Yy5pbmRleE9mKGkpID8gY29sb3JzLnNoaWZ0KCkgfHwgdHlwZSArIFwiMCwwLDAsMClcIiA6IChkLmxlbmd0aCA/IGQgOiBjb2xvcnMubGVuZ3RoID8gY29sb3JzIDogb3JkZXJNYXRjaERhdGEpLnNoaWZ0KCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghc2hlbGwpIHtcbiAgICBzaGVsbCA9IHMuc3BsaXQoX2NvbG9yRXhwKTtcbiAgICBsID0gc2hlbGwubGVuZ3RoIC0gMTtcblxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyBjb2xvcnNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCArIHNoZWxsW2xdO1xufSxcbiAgICBfY29sb3JFeHAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzID0gXCIoPzpcXFxcYig/Oig/OnJnYnxyZ2JhfGhzbHxoc2xhKVxcXFwoLis/XFxcXCkpfFxcXFxCIyg/OlswLTlhLWZdezMsNH0pezEsMn1cXFxcYlwiLFxuICAgICAgLy93ZSdsbCBkeW5hbWljYWxseSBidWlsZCB0aGlzIFJlZ3VsYXIgRXhwcmVzc2lvbiB0byBjb25zZXJ2ZSBmaWxlIHNpemUuIEFmdGVyIGJ1aWxkaW5nIGl0LCBpdCB3aWxsIGJlIGFibGUgdG8gZmluZCByZ2IoKSwgcmdiYSgpLCAjIChoZXhhZGVjaW1hbCksIGFuZCBuYW1lZCBjb2xvciB2YWx1ZXMgbGlrZSByZWQsIGJsdWUsIHB1cnBsZSwgZXRjLixcbiAgcDtcblxuICBmb3IgKHAgaW4gX2NvbG9yTG9va3VwKSB7XG4gICAgcyArPSBcInxcIiArIHAgKyBcIlxcXFxiXCI7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChzICsgXCIpXCIsIFwiZ2lcIik7XG59KCksXG4gICAgX2hzbEV4cCA9IC9oc2xbYV0/XFwoLyxcbiAgICBfY29sb3JTdHJpbmdGaWx0ZXIgPSBmdW5jdGlvbiBfY29sb3JTdHJpbmdGaWx0ZXIoYSkge1xuICB2YXIgY29tYmluZWQgPSBhLmpvaW4oXCIgXCIpLFxuICAgICAgdG9IU0w7XG4gIF9jb2xvckV4cC5sYXN0SW5kZXggPSAwO1xuXG4gIGlmIChfY29sb3JFeHAudGVzdChjb21iaW5lZCkpIHtcbiAgICB0b0hTTCA9IF9oc2xFeHAudGVzdChjb21iaW5lZCk7XG4gICAgYVsxXSA9IF9mb3JtYXRDb2xvcnMoYVsxXSwgdG9IU0wpO1xuICAgIGFbMF0gPSBfZm9ybWF0Q29sb3JzKGFbMF0sIHRvSFNMLCBfY29sb3JPcmRlckRhdGEoYVsxXSkpOyAvLyBtYWtlIHN1cmUgdGhlIG9yZGVyIG9mIG51bWJlcnMvY29sb3JzIG1hdGNoIHdpdGggdGhlIEVORCB2YWx1ZS5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRJQ0tFUlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuX3RpY2tlckFjdGl2ZSxcbiAgICBfdGlja2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX2dldFRpbWUgPSBEYXRlLm5vdyxcbiAgICAgIF9sYWdUaHJlc2hvbGQgPSA1MDAsXG4gICAgICBfYWRqdXN0ZWRMYWcgPSAzMyxcbiAgICAgIF9zdGFydFRpbWUgPSBfZ2V0VGltZSgpLFxuICAgICAgX2xhc3RVcGRhdGUgPSBfc3RhcnRUaW1lLFxuICAgICAgX2dhcCA9IDEwMDAgLyAyNDAsXG4gICAgICBfbmV4dFRpbWUgPSBfZ2FwLFxuICAgICAgX2xpc3RlbmVycyA9IFtdLFxuICAgICAgX2lkLFxuICAgICAgX3JlcSxcbiAgICAgIF9yYWYsXG4gICAgICBfc2VsZixcbiAgICAgIF9kZWx0YSxcbiAgICAgIF9pLFxuICAgICAgX3RpY2sgPSBmdW5jdGlvbiBfdGljayh2KSB7XG4gICAgdmFyIGVsYXBzZWQgPSBfZ2V0VGltZSgpIC0gX2xhc3RVcGRhdGUsXG4gICAgICAgIG1hbnVhbCA9IHYgPT09IHRydWUsXG4gICAgICAgIG92ZXJsYXAsXG4gICAgICAgIGRpc3BhdGNoLFxuICAgICAgICB0aW1lLFxuICAgICAgICBmcmFtZTtcblxuICAgIChlbGFwc2VkID4gX2xhZ1RocmVzaG9sZCB8fCBlbGFwc2VkIDwgMCkgJiYgKF9zdGFydFRpbWUgKz0gZWxhcHNlZCAtIF9hZGp1c3RlZExhZyk7XG4gICAgX2xhc3RVcGRhdGUgKz0gZWxhcHNlZDtcbiAgICB0aW1lID0gX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lO1xuICAgIG92ZXJsYXAgPSB0aW1lIC0gX25leHRUaW1lO1xuXG4gICAgaWYgKG92ZXJsYXAgPiAwIHx8IG1hbnVhbCkge1xuICAgICAgZnJhbWUgPSArK19zZWxmLmZyYW1lO1xuICAgICAgX2RlbHRhID0gdGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwO1xuICAgICAgX3NlbGYudGltZSA9IHRpbWUgPSB0aW1lIC8gMTAwMDtcbiAgICAgIF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG4gICAgICBkaXNwYXRjaCA9IDE7XG4gICAgfVxuXG4gICAgbWFudWFsIHx8IChfaWQgPSBfcmVxKF90aWNrKSk7IC8vbWFrZSBzdXJlIHRoZSByZXF1ZXN0IGlzIG1hZGUgYmVmb3JlIHdlIGRpc3BhdGNoIHRoZSBcInRpY2tcIiBldmVudCBzbyB0aGF0IHRpbWluZyBpcyBtYWludGFpbmVkLiBPdGhlcndpc2UsIGlmIHByb2Nlc3NpbmcgdGhlIFwidGlja1wiIHJlcXVpcmVzIGEgYnVuY2ggb2YgdGltZSAobGlrZSAxNW1zKSBhbmQgd2UncmUgdXNpbmcgYSBzZXRUaW1lb3V0KCkgdGhhdCdzIGJhc2VkIG9uIDE2LjdtcywgaXQnZCB0ZWNobmljYWxseSB0YWtlIDMxLjdtcyBiZXR3ZWVuIGZyYW1lcyBvdGhlcndpc2UuXG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIGZvciAoX2kgPSAwOyBfaSA8IF9saXN0ZW5lcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIC8vIHVzZSBfaSBhbmQgY2hlY2sgX2xpc3RlbmVycy5sZW5ndGggaW5zdGVhZCBvZiBhIHZhcmlhYmxlIGJlY2F1c2UgYSBsaXN0ZW5lciBjb3VsZCBnZXQgcmVtb3ZlZCBkdXJpbmcgdGhlIGxvb3AsIGFuZCBpZiB0aGF0IGhhcHBlbnMgdG8gYW4gZWxlbWVudCBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgaW5kZXgsIGl0J2QgdGhyb3cgdGhpbmdzIG9mZiBpbiB0aGUgbG9vcC5cbiAgICAgICAgX2xpc3RlbmVyc1tfaV0odGltZSwgX2RlbHRhLCBmcmFtZSwgdik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9zZWxmID0ge1xuICAgIHRpbWU6IDAsXG4gICAgZnJhbWU6IDAsXG4gICAgdGljazogZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIF90aWNrKHRydWUpO1xuICAgIH0sXG4gICAgZGVsdGFSYXRpbzogZnVuY3Rpb24gZGVsdGFSYXRpbyhmcHMpIHtcbiAgICAgIHJldHVybiBfZGVsdGEgLyAoMTAwMCAvIChmcHMgfHwgNjApKTtcbiAgICB9LFxuICAgIHdha2U6IGZ1bmN0aW9uIHdha2UoKSB7XG4gICAgICBpZiAoX2NvcmVSZWFkeSkge1xuICAgICAgICBpZiAoIV9jb3JlSW5pdHRlZCAmJiBfd2luZG93RXhpc3RzKCkpIHtcbiAgICAgICAgICBfd2luID0gX2NvcmVJbml0dGVkID0gd2luZG93O1xuICAgICAgICAgIF9kb2MgPSBfd2luLmRvY3VtZW50IHx8IHt9O1xuICAgICAgICAgIF9nbG9iYWxzLmdzYXAgPSBnc2FwO1xuICAgICAgICAgIChfd2luLmdzYXBWZXJzaW9ucyB8fCAoX3dpbi5nc2FwVmVyc2lvbnMgPSBbXSkpLnB1c2goZ3NhcC52ZXJzaW9uKTtcblxuICAgICAgICAgIF9pbnN0YWxsKF9pbnN0YWxsU2NvcGUgfHwgX3dpbi5HcmVlblNvY2tHbG9iYWxzIHx8ICFfd2luLmdzYXAgJiYgX3dpbiB8fCB7fSk7XG5cbiAgICAgICAgICBfcmVnaXN0ZXJQbHVnaW5RdWV1ZS5mb3JFYWNoKF9jcmVhdGVQbHVnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3JhZiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgICAgICBfaWQgJiYgX3NlbGYuc2xlZXAoKTtcblxuICAgICAgICBfcmVxID0gX3JhZiB8fCBmdW5jdGlvbiAoZikge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIF9uZXh0VGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwICsgMSB8IDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aWNrZXJBY3RpdmUgPSAxO1xuXG4gICAgICAgIF90aWNrKDIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xlZXA6IGZ1bmN0aW9uIHNsZWVwKCkge1xuICAgICAgKF9yYWYgPyBjYW5jZWxBbmltYXRpb25GcmFtZSA6IGNsZWFyVGltZW91dCkoX2lkKTtcbiAgICAgIF90aWNrZXJBY3RpdmUgPSAwO1xuICAgICAgX3JlcSA9IF9lbXB0eUZ1bmM7XG4gICAgfSxcbiAgICBsYWdTbW9vdGhpbmc6IGZ1bmN0aW9uIGxhZ1Ntb290aGluZyh0aHJlc2hvbGQsIGFkanVzdGVkTGFnKSB7XG4gICAgICBfbGFnVGhyZXNob2xkID0gdGhyZXNob2xkIHx8IEluZmluaXR5OyAvLyB6ZXJvIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBiYXNpY2FsbHkgdW5saW1pdGVkXG5cbiAgICAgIF9hZGp1c3RlZExhZyA9IE1hdGgubWluKGFkanVzdGVkTGFnIHx8IDMzLCBfbGFnVGhyZXNob2xkKTtcbiAgICB9LFxuICAgIGZwczogZnVuY3Rpb24gZnBzKF9mcHMpIHtcbiAgICAgIF9nYXAgPSAxMDAwIC8gKF9mcHMgfHwgMjQwKTtcbiAgICAgIF9uZXh0VGltZSA9IF9zZWxmLnRpbWUgKiAxMDAwICsgX2dhcDtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24gYWRkKGNhbGxiYWNrLCBvbmNlLCBwcmlvcml0aXplKSB7XG4gICAgICB2YXIgZnVuYyA9IG9uY2UgPyBmdW5jdGlvbiAodCwgZCwgZiwgdikge1xuICAgICAgICBjYWxsYmFjayh0LCBkLCBmLCB2KTtcblxuICAgICAgICBfc2VsZi5yZW1vdmUoZnVuYyk7XG4gICAgICB9IDogY2FsbGJhY2s7XG5cbiAgICAgIF9zZWxmLnJlbW92ZShjYWxsYmFjayk7XG5cbiAgICAgIF9saXN0ZW5lcnNbcHJpb3JpdGl6ZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKGZ1bmMpO1xuXG4gICAgICBfd2FrZSgpO1xuXG4gICAgICByZXR1cm4gZnVuYztcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGNhbGxiYWNrLCBpKSB7XG4gICAgICB+KGkgPSBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spKSAmJiBfbGlzdGVuZXJzLnNwbGljZShpLCAxKSAmJiBfaSA+PSBpICYmIF9pLS07XG4gICAgfSxcbiAgICBfbGlzdGVuZXJzOiBfbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBfc2VsZjtcbn0oKSxcbiAgICBfd2FrZSA9IGZ1bmN0aW9uIF93YWtlKCkge1xuICByZXR1cm4gIV90aWNrZXJBY3RpdmUgJiYgX3RpY2tlci53YWtlKCk7XG59LFxuICAgIC8vYWxzbyBlbnN1cmVzIHRoZSBjb3JlIGNsYXNzZXMgYXJlIGluaXRpYWxpemVkLlxuXG4vKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIEVBU0lOR1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuX2Vhc2VNYXAgPSB7fSxcbiAgICBfY3VzdG9tRWFzZUV4cCA9IC9eW1xcZC5cXC1NXVtcXGQuXFwtLFxcc10vLFxuICAgIF9xdW90ZXNFeHAgPSAvW1wiJ10vZyxcbiAgICBfcGFyc2VPYmplY3RJblN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZU9iamVjdEluU3RyaW5nKHZhbHVlKSB7XG4gIC8vdGFrZXMgYSBzdHJpbmcgbGlrZSBcInt3aWdnbGVzOjEwLCB0eXBlOmFudGljaXBhdGV9KVwiIGFuZCB0dXJucyBpdCBpbnRvIGEgcmVhbCBvYmplY3QuIE5vdGljZSBpdCBlbmRzIGluIFwiKVwiIGFuZCBpbmNsdWRlcyB0aGUge30gd3JhcHBlcnMuIFRoaXMgaXMgYmVjYXVzZSB3ZSBvbmx5IHVzZSB0aGlzIGZ1bmN0aW9uIGZvciBwYXJzaW5nIGVhc2UgY29uZmlncyBhbmQgcHJpb3JpdGl6ZWQgb3B0aW1pemF0aW9uIHJhdGhlciB0aGFuIHJldXNhYmlsaXR5LlxuICB2YXIgb2JqID0ge30sXG4gICAgICBzcGxpdCA9IHZhbHVlLnN1YnN0cigxLCB2YWx1ZS5sZW5ndGggLSAzKS5zcGxpdChcIjpcIiksXG4gICAgICBrZXkgPSBzcGxpdFswXSxcbiAgICAgIGkgPSAxLFxuICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcbiAgICAgIGluZGV4LFxuICAgICAgdmFsLFxuICAgICAgcGFyc2VkVmFsO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFsID0gc3BsaXRbaV07XG4gICAgaW5kZXggPSBpICE9PSBsIC0gMSA/IHZhbC5sYXN0SW5kZXhPZihcIixcIikgOiB2YWwubGVuZ3RoO1xuICAgIHBhcnNlZFZhbCA9IHZhbC5zdWJzdHIoMCwgaW5kZXgpO1xuICAgIG9ialtrZXldID0gaXNOYU4ocGFyc2VkVmFsKSA/IHBhcnNlZFZhbC5yZXBsYWNlKF9xdW90ZXNFeHAsIFwiXCIpLnRyaW0oKSA6ICtwYXJzZWRWYWw7XG4gICAga2V5ID0gdmFsLnN1YnN0cihpbmRleCArIDEpLnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF92YWx1ZUluUGFyZW50aGVzZXMgPSBmdW5jdGlvbiBfdmFsdWVJblBhcmVudGhlc2VzKHZhbHVlKSB7XG4gIHZhciBvcGVuID0gdmFsdWUuaW5kZXhPZihcIihcIikgKyAxLFxuICAgICAgY2xvc2UgPSB2YWx1ZS5pbmRleE9mKFwiKVwiKSxcbiAgICAgIG5lc3RlZCA9IHZhbHVlLmluZGV4T2YoXCIoXCIsIG9wZW4pO1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKG9wZW4sIH5uZXN0ZWQgJiYgbmVzdGVkIDwgY2xvc2UgPyB2YWx1ZS5pbmRleE9mKFwiKVwiLCBjbG9zZSArIDEpIDogY2xvc2UpO1xufSxcbiAgICBfY29uZmlnRWFzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBfY29uZmlnRWFzZUZyb21TdHJpbmcobmFtZSkge1xuICAvL25hbWUgY2FuIGJlIGEgc3RyaW5nIGxpa2UgXCJlbGFzdGljLm91dCgxLDAuNSlcIiwgYW5kIHBhc3MgaW4gX2Vhc2VNYXAgYXMgb2JqIGFuZCBpdCdsbCBwYXJzZSBpdCBvdXQgYW5kIGNhbGwgdGhlIGFjdHVhbCBmdW5jdGlvbiBsaWtlIF9lYXNlTWFwLkVsYXN0aWMuZWFzZU91dC5jb25maWcoMSwwLjUpLiBJdCB3aWxsIGFsc28gcGFyc2UgY3VzdG9tIGVhc2Ugc3RyaW5ncyBhcyBsb25nIGFzIEN1c3RvbUVhc2UgaXMgbG9hZGVkIGFuZCByZWdpc3RlcmVkIChpbnRlcm5hbGx5IGFzIF9lYXNlTWFwLl9DRSkuXG4gIHZhciBzcGxpdCA9IChuYW1lICsgXCJcIikuc3BsaXQoXCIoXCIpLFxuICAgICAgZWFzZSA9IF9lYXNlTWFwW3NwbGl0WzBdXTtcbiAgcmV0dXJuIGVhc2UgJiYgc3BsaXQubGVuZ3RoID4gMSAmJiBlYXNlLmNvbmZpZyA/IGVhc2UuY29uZmlnLmFwcGx5KG51bGwsIH5uYW1lLmluZGV4T2YoXCJ7XCIpID8gW19wYXJzZU9iamVjdEluU3RyaW5nKHNwbGl0WzFdKV0gOiBfdmFsdWVJblBhcmVudGhlc2VzKG5hbWUpLnNwbGl0KFwiLFwiKS5tYXAoX251bWVyaWNJZlBvc3NpYmxlKSkgOiBfZWFzZU1hcC5fQ0UgJiYgX2N1c3RvbUVhc2VFeHAudGVzdChuYW1lKSA/IF9lYXNlTWFwLl9DRShcIlwiLCBuYW1lKSA6IGVhc2U7XG59LFxuICAgIF9pbnZlcnRFYXNlID0gZnVuY3Rpb24gX2ludmVydEVhc2UoZWFzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2UoMSAtIHApO1xuICB9O1xufSxcbiAgICBfcGFyc2VFYXNlID0gZnVuY3Rpb24gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICByZXR1cm4gIWVhc2UgPyBkZWZhdWx0RWFzZSA6IChfaXNGdW5jdGlvbihlYXNlKSA/IGVhc2UgOiBfZWFzZU1hcFtlYXNlXSB8fCBfY29uZmlnRWFzZUZyb21TdHJpbmcoZWFzZSkpIHx8IGRlZmF1bHRFYXNlO1xufSxcbiAgICBfaW5zZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnNlcnRFYXNlKG5hbWVzLCBlYXNlSW4sIGVhc2VPdXQsIGVhc2VJbk91dCkge1xuICBpZiAoZWFzZU91dCA9PT0gdm9pZCAwKSB7XG4gICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgICAgcmV0dXJuIDEgLSBlYXNlSW4oMSAtIHApO1xuICAgIH07XG4gIH1cblxuICBpZiAoZWFzZUluT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlSW5PdXQgPSBmdW5jdGlvbiBlYXNlSW5PdXQocCkge1xuICAgICAgcmV0dXJuIHAgPCAuNSA/IGVhc2VJbihwICogMikgLyAyIDogMSAtIGVhc2VJbigoMSAtIHApICogMikgLyAyO1xuICAgIH07XG4gIH1cblxuICB2YXIgZWFzZSA9IHtcbiAgICBlYXNlSW46IGVhc2VJbixcbiAgICBlYXNlT3V0OiBlYXNlT3V0LFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0XG4gIH0sXG4gICAgICBsb3dlcmNhc2VOYW1lO1xuXG4gIF9mb3JFYWNoTmFtZShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfZWFzZU1hcFtuYW1lXSA9IF9nbG9iYWxzW25hbWVdID0gZWFzZTtcbiAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGVhc2VPdXQ7XG5cbiAgICBmb3IgKHZhciBwIGluIGVhc2UpIHtcbiAgICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgKyAocCA9PT0gXCJlYXNlSW5cIiA/IFwiLmluXCIgOiBwID09PSBcImVhc2VPdXRcIiA/IFwiLm91dFwiIDogXCIuaW5PdXRcIildID0gX2Vhc2VNYXBbbmFtZSArIFwiLlwiICsgcF0gPSBlYXNlW3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2U7XG59LFxuICAgIF9lYXNlSW5PdXRGcm9tT3V0ID0gZnVuY3Rpb24gX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gKDEgLSBlYXNlT3V0KDEgLSBwICogMikpIC8gMiA6IC41ICsgZWFzZU91dCgocCAtIC41KSAqIDIpIC8gMjtcbiAgfTtcbn0sXG4gICAgX2NvbmZpZ0VsYXN0aWMgPSBmdW5jdGlvbiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICB2YXIgcDEgPSBhbXBsaXR1ZGUgPj0gMSA/IGFtcGxpdHVkZSA6IDEsXG4gICAgICAvL25vdGU6IGlmIGFtcGxpdHVkZSBpcyA8IDEsIHdlIHNpbXBseSBhZGp1c3QgdGhlIHBlcmlvZCBmb3IgYSBtb3JlIG5hdHVyYWwgZmVlbC4gT3RoZXJ3aXNlIHRoZSBtYXRoIGRvZXNuJ3Qgd29yayByaWdodCBhbmQgdGhlIGN1cnZlIHN0YXJ0cyBhdCAxLlxuICBwMiA9IChwZXJpb2QgfHwgKHR5cGUgPyAuMyA6IC40NSkpIC8gKGFtcGxpdHVkZSA8IDEgPyBhbXBsaXR1ZGUgOiAxKSxcbiAgICAgIHAzID0gcDIgLyBfMlBJICogKE1hdGguYXNpbigxIC8gcDEpIHx8IDApLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwID09PSAxID8gMSA6IHAxICogTWF0aC5wb3coMiwgLTEwICogcCkgKiBfc2luKChwIC0gcDMpICogcDIpICsgMTtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIHAyID0gXzJQSSAvIHAyOyAvL3ByZWNhbGN1bGF0ZSB0byBvcHRpbWl6ZVxuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgcmV0dXJuIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2NvbmZpZ0JhY2sgPSBmdW5jdGlvbiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpIHtcbiAgaWYgKG92ZXJzaG9vdCA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnNob290ID0gMS43MDE1ODtcbiAgfVxuXG4gIHZhciBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPyAtLXAgKiBwICogKChvdmVyc2hvb3QgKyAxKSAqIHAgKyBvdmVyc2hvb3QpICsgMSA6IDA7XG4gIH0sXG4gICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0gOiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KTtcblxuICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChvdmVyc2hvb3QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn07IC8vIGEgY2hlYXBlciAoa2IgYW5kIGNwdSkgYnV0IG1vcmUgbWlsZCB3YXkgdG8gZ2V0IGEgcGFyYW1ldGVyaXplZCB3ZWlnaHRlZCBlYXNlIGJ5IGZlZWRpbmcgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2UgPSByYXRpbyA9PiB7XG4vLyBcdGxldCB5ID0gMC41ICsgcmF0aW8gLyAyO1xuLy8gXHRyZXR1cm4gcCA9PiAoMiAqICgxIC0gcCkgKiBwICogeSArIHAgKiBwKTtcbi8vIH0sXG4vLyBhIHN0cm9uZ2VyIChidXQgbW9yZSBleHBlbnNpdmUga2IvY3B1KSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgdGhhdCBsZXRzIHlvdSBmZWVkIGluIGEgdmFsdWUgYmV0d2VlbiAtMSAoZWFzZUluKSBhbmQgMSAoZWFzZU91dCkgd2hlcmUgMCBpcyBsaW5lYXIuXG4vLyBfd2VpZ2h0ZWRFYXNlU3Ryb25nID0gcmF0aW8gPT4ge1xuLy8gXHRyYXRpbyA9IC41ICsgcmF0aW8gLyAyO1xuLy8gXHRsZXQgbyA9IDEgLyAzICogKHJhdGlvIDwgLjUgPyByYXRpbyA6IDEgLSByYXRpbyksXG4vLyBcdFx0YiA9IHJhdGlvIC0gbyxcbi8vIFx0XHRjID0gcmF0aW8gKyBvO1xuLy8gXHRyZXR1cm4gcCA9PiBwID09PSAxID8gcCA6IDMgKiBiICogKDEgLSBwKSAqICgxIC0gcCkgKiBwICsgMyAqIGMgKiAoMSAtIHApICogcCAqIHAgKyBwICogcCAqIHA7XG4vLyB9O1xuXG5cbl9mb3JFYWNoTmFtZShcIkxpbmVhcixRdWFkLEN1YmljLFF1YXJ0LFF1aW50LFN0cm9uZ1wiLCBmdW5jdGlvbiAobmFtZSwgaSkge1xuICB2YXIgcG93ZXIgPSBpIDwgNSA/IGkgKyAxIDogaTtcblxuICBfaW5zZXJ0RWFzZShuYW1lICsgXCIsUG93ZXJcIiArIChwb3dlciAtIDEpLCBpID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9IDogZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcDtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSBwLCBwb3dlcik7XG4gIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPCAuNSA/IE1hdGgucG93KHAgKiAyLCBwb3dlcikgLyAyIDogMSAtIE1hdGgucG93KCgxIC0gcCkgKiAyLCBwb3dlcikgLyAyO1xuICB9KTtcbn0pO1xuXG5fZWFzZU1hcC5MaW5lYXIuZWFzZU5vbmUgPSBfZWFzZU1hcC5ub25lID0gX2Vhc2VNYXAuTGluZWFyLmVhc2VJbjtcblxuX2luc2VydEVhc2UoXCJFbGFzdGljXCIsIF9jb25maWdFbGFzdGljKFwiaW5cIiksIF9jb25maWdFbGFzdGljKFwib3V0XCIpLCBfY29uZmlnRWxhc3RpYygpKTtcblxuKGZ1bmN0aW9uIChuLCBjKSB7XG4gIHZhciBuMSA9IDEgLyBjLFxuICAgICAgbjIgPSAyICogbjEsXG4gICAgICBuMyA9IDIuNSAqIG4xLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwIDwgbjEgPyBuICogcCAqIHAgOiBwIDwgbjIgPyBuICogTWF0aC5wb3cocCAtIDEuNSAvIGMsIDIpICsgLjc1IDogcCA8IG4zID8gbiAqIChwIC09IDIuMjUgLyBjKSAqIHAgKyAuOTM3NSA6IG4gKiBNYXRoLnBvdyhwIC0gMi42MjUgLyBjLCAyKSArIC45ODQzNzU7XG4gIH07XG5cbiAgX2luc2VydEVhc2UoXCJCb3VuY2VcIiwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9LCBlYXNlT3V0KTtcbn0pKDcuNTYyNSwgMi43NSk7XG5cbl9pbnNlcnRFYXNlKFwiRXhwb1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gTWF0aC5wb3coMiwgMTAgKiAocCAtIDEpKSAqIHAgKyBwICogcCAqIHAgKiBwICogcCAqIHAgKiAoMSAtIHApO1xufSk7IC8vIHByZXZpb3VzbHkgMiAqKiAoMTAgKiAocCAtIDEpKSBidXQgdGhhdCBkb2Vzbid0IGVuZCB1cCB3aXRoIHRoZSB2YWx1ZSBxdWl0ZSBhdCB0aGUgcmlnaHQgc3BvdCBzbyB3ZSBkbyBhIGJsZW5kZWQgZWFzZSB0byBlbnN1cmUgaXQgbGFuZHMgd2hlcmUgaXQgc2hvdWxkIHBlcmZlY3RseS5cblxuXG5faW5zZXJ0RWFzZShcIkNpcmNcIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIC0oX3NxcnQoMSAtIHAgKiBwKSAtIDEpO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiU2luZVwiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcCA9PT0gMSA/IDEgOiAtX2NvcyhwICogX0hBTEZfUEkpICsgMTtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIkJhY2tcIiwgX2NvbmZpZ0JhY2soXCJpblwiKSwgX2NvbmZpZ0JhY2soXCJvdXRcIiksIF9jb25maWdCYWNrKCkpO1xuXG5fZWFzZU1hcC5TdGVwcGVkRWFzZSA9IF9lYXNlTWFwLnN0ZXBzID0gX2dsb2JhbHMuU3RlcHBlZEVhc2UgPSB7XG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHN0ZXBzLCBpbW1lZGlhdGVTdGFydCkge1xuICAgIGlmIChzdGVwcyA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGVwcyA9IDE7XG4gICAgfVxuXG4gICAgdmFyIHAxID0gMSAvIHN0ZXBzLFxuICAgICAgICBwMiA9IHN0ZXBzICsgKGltbWVkaWF0ZVN0YXJ0ID8gMCA6IDEpLFxuICAgICAgICBwMyA9IGltbWVkaWF0ZVN0YXJ0ID8gMSA6IDAsXG4gICAgICAgIG1heCA9IDEgLSBfdGlueU51bTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAoKHAyICogX2NsYW1wKDAsIG1heCwgcCkgfCAwKSArIHAzKSAqIHAxO1xuICAgIH07XG4gIH1cbn07XG5fZGVmYXVsdHMuZWFzZSA9IF9lYXNlTWFwW1wicXVhZC5vdXRcIl07XG5cbl9mb3JFYWNoTmFtZShcIm9uQ29tcGxldGUsb25VcGRhdGUsb25TdGFydCxvblJlcGVhdCxvblJldmVyc2VDb21wbGV0ZSxvbkludGVycnVwdFwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2NhbGxiYWNrTmFtZXMgKz0gbmFtZSArIFwiLFwiICsgbmFtZSArIFwiUGFyYW1zLFwiO1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENBQ0hFXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBHU0NhY2hlID0gZnVuY3Rpb24gR1NDYWNoZSh0YXJnZXQsIGhhcm5lc3MpIHtcbiAgdGhpcy5pZCA9IF9nc0lEKys7XG4gIHRhcmdldC5fZ3NhcCA9IHRoaXM7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB0aGlzLmhhcm5lc3MgPSBoYXJuZXNzO1xuICB0aGlzLmdldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldCA6IF9nZXRQcm9wZXJ0eTtcbiAgdGhpcy5zZXQgPSBoYXJuZXNzID8gaGFybmVzcy5nZXRTZXR0ZXIgOiBfZ2V0U2V0dGVyO1xufTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQU5JTUFUSU9OXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmV4cG9ydCB2YXIgQW5pbWF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQW5pbWF0aW9uKHZhcnMpIHtcbiAgICB0aGlzLnZhcnMgPSB2YXJzO1xuICAgIHRoaXMuX2RlbGF5ID0gK3ZhcnMuZGVsYXkgfHwgMDtcblxuICAgIGlmICh0aGlzLl9yZXBlYXQgPSB2YXJzLnJlcGVhdCA9PT0gSW5maW5pdHkgPyAtMiA6IHZhcnMucmVwZWF0IHx8IDApIHtcbiAgICAgIC8vIFRPRE86IHJlcGVhdDogSW5maW5pdHkgb24gYSB0aW1lbGluZSdzIGNoaWxkcmVuIG11c3QgZmxhZyB0aGF0IHRpbWVsaW5lIGludGVybmFsbHkgYW5kIGFmZmVjdCBpdHMgdG90YWxEdXJhdGlvbiwgb3RoZXJ3aXNlIGl0J2xsIHN0b3AgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiB3aGVuIHJlYWNoaW5nIHRoZSBzdGFydC5cbiAgICAgIHRoaXMuX3JEZWxheSA9IHZhcnMucmVwZWF0RGVsYXkgfHwgMDtcbiAgICAgIHRoaXMuX3lveW8gPSAhIXZhcnMueW95byB8fCAhIXZhcnMueW95b0Vhc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fdHMgPSAxO1xuXG4gICAgX3NldER1cmF0aW9uKHRoaXMsICt2YXJzLmR1cmF0aW9uLCAxLCAxKTtcblxuICAgIHRoaXMuZGF0YSA9IHZhcnMuZGF0YTtcblxuICAgIGlmIChfY29udGV4dCkge1xuICAgICAgdGhpcy5fY3R4ID0gX2NvbnRleHQ7XG5cbiAgICAgIF9jb250ZXh0LmRhdGEucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICBfdGlja2VyQWN0aXZlIHx8IF90aWNrZXIud2FrZSgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEFuaW1hdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuc3RhcnRUaW1lKHRoaXMuX3N0YXJ0ICsgdmFsdWUgLSB0aGlzLl9kZWxheSk7XG4gICAgICB0aGlzLl9kZWxheSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2RlbGF5O1xuICB9O1xuXG4gIF9wcm90by5kdXJhdGlvbiA9IGZ1bmN0aW9uIGR1cmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsRHVyYXRpb24odGhpcy5fcmVwZWF0ID4gMCA/IHZhbHVlICsgKHZhbHVlICsgdGhpcy5fckRlbGF5KSAqIHRoaXMuX3JlcGVhdCA6IHZhbHVlKSA6IHRoaXMudG90YWxEdXJhdGlvbigpICYmIHRoaXMuX2R1cjtcbiAgfTtcblxuICBfcHJvdG8udG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIHRvdGFsRHVyYXRpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90RHVyO1xuICAgIH1cblxuICAgIHRoaXMuX2RpcnR5ID0gMDtcbiAgICByZXR1cm4gX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX3JlcGVhdCA8IDAgPyB2YWx1ZSA6ICh2YWx1ZSAtIHRoaXMuX3JlcGVhdCAqIHRoaXMuX3JEZWxheSkgLyAodGhpcy5fcmVwZWF0ICsgMSkpO1xuICB9O1xuXG4gIF9wcm90by50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBfd2FrZSgpO1xuXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdFRpbWU7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMuX2RwO1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5fdHMpIHtcbiAgICAgIF9hbGlnblBsYXloZWFkKHRoaXMsIF90b3RhbFRpbWUpO1xuXG4gICAgICAhcGFyZW50Ll9kcCB8fCBwYXJlbnQucGFyZW50IHx8IF9wb3N0QWRkQ2hlY2tzKHBhcmVudCwgdGhpcyk7IC8vIGVkZ2UgY2FzZTogaWYgdGhpcyBpcyBhIGNoaWxkIG9mIGEgdGltZWxpbmUgdGhhdCBhbHJlYWR5IGNvbXBsZXRlZCwgZm9yIGV4YW1wbGUsIHdlIG11c3QgcmUtYWN0aXZhdGUgdGhlIHBhcmVudC5cbiAgICAgIC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9yIHRpbWVsaW5lcyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQsIHdlIHNob3VsZCByZXNldCB0aGVpciB0b3RhbFRpbWUoKSB3aGljaCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgdGhleSdyZSBsaW5lZCB1cCBwcm9wZXJseSBhbmQgZW5hYmxlZC4gU2tpcCBmb3IgYW5pbWF0aW9ucyB0aGF0IGFyZSBvbiB0aGUgcm9vdCAod2FzdGVmdWwpLiBFeGFtcGxlOiBhIFRpbWVsaW5lTGl0ZS5leHBvcnRSb290KCkgaXMgcGVyZm9ybWVkIHdoZW4gdGhlcmUncyBhIHBhdXNlZCB0d2VlbiBvbiB0aGUgcm9vdCwgdGhlIGV4cG9ydCB3aWxsIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGF0IHR3ZWVuIGlzIHVucGF1c2VkLCBidXQgaW1hZ2luZSBhIGNoaWxkIGdldHMgcmVzdGFydGVkIGxhdGVyLCBhZnRlciBhbGwgW3VucGF1c2VkXSB0d2VlbnMgaGF2ZSBjb21wbGV0ZWQuIFRoZSBzdGFydCBvZiB0aGF0IGNoaWxkIHdvdWxkIGdldCBwdXNoZWQgb3V0LCBidXQgb25lIG9mIHRoZSBhbmNlc3RvcnMgbWF5IGhhdmUgY29tcGxldGVkLlxuXG4gICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5wYXJlbnQuX3RpbWUgIT09IHBhcmVudC5fc3RhcnQgKyAocGFyZW50Ll90cyA+PSAwID8gcGFyZW50Ll90VGltZSAvIHBhcmVudC5fdHMgOiAocGFyZW50LnRvdGFsRHVyYXRpb24oKSAtIHBhcmVudC5fdFRpbWUpIC8gLXBhcmVudC5fdHMpKSB7XG4gICAgICAgICAgcGFyZW50LnRvdGFsVGltZShwYXJlbnQuX3RUaW1lLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wYXJlbnQgJiYgdGhpcy5fZHAuYXV0b1JlbW92ZUNoaWxkcmVuICYmICh0aGlzLl90cyA+IDAgJiYgX3RvdGFsVGltZSA8IHRoaXMuX3REdXIgfHwgdGhpcy5fdHMgPCAwICYmIF90b3RhbFRpbWUgPiAwIHx8ICF0aGlzLl90RHVyICYmICFfdG90YWxUaW1lKSkge1xuICAgICAgICAvL2lmIHRoZSBhbmltYXRpb24gZG9lc24ndCBoYXZlIGEgcGFyZW50LCBwdXQgaXQgYmFjayBpbnRvIGl0cyBsYXN0IHBhcmVudCAocmVjb3JkZWQgYXMgX2RwIGZvciBleGFjdGx5IGNhc2VzIGxpa2UgdGhpcykuIExpbWl0IHRvIHBhcmVudHMgd2l0aCBhdXRvUmVtb3ZlQ2hpbGRyZW4gKGxpa2UgZ2xvYmFsVGltZWxpbmUpIHNvIHRoYXQgaWYgdGhlIHVzZXIgbWFudWFsbHkgcmVtb3ZlcyBhbiBhbmltYXRpb24gZnJvbSBhIHRpbWVsaW5lIGFuZCB0aGVuIGFsdGVycyBpdHMgcGxheWhlYWQsIGl0IGRvZXNuJ3QgZ2V0IGFkZGVkIGJhY2sgaW4uXG4gICAgICAgIF9hZGRUb1RpbWVsaW5lKHRoaXMuX2RwLCB0aGlzLCB0aGlzLl9zdGFydCAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdFRpbWUgIT09IF90b3RhbFRpbWUgfHwgIXRoaXMuX2R1ciAmJiAhc3VwcHJlc3NFdmVudHMgfHwgdGhpcy5faW5pdHRlZCAmJiBNYXRoLmFicyh0aGlzLl96VGltZSkgPT09IF90aW55TnVtIHx8ICF0aGlzLl9pbml0dGVkICYmIHRoaXMuX2R1ciAmJiBfdG90YWxUaW1lIHx8ICFfdG90YWxUaW1lICYmICF0aGlzLl9pbml0dGVkICYmICh0aGlzLmFkZCB8fCB0aGlzLl9wdExvb2t1cCkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciBfcHRMb29rdXAgb24gYSBUd2VlbiBpbnN0YW5jZSB0byBlbnN1cmUgaXQgaGFzIGFjdHVhbGx5IGZpbmlzaGVkIGJlaW5nIGluc3RhbnRpYXRlZCwgb3RoZXJ3aXNlIGlmIHRoaXMucmV2ZXJzZSgpIGdldHMgY2FsbGVkIGluIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIGl0IGNvdWxkIHRyaWdnZXIgYSByZW5kZXIoKSBoZXJlIGV2ZW4gdGhvdWdoIHRoZSBfdGFyZ2V0cyB3ZXJlbid0IHBvcHVsYXRlZCwgdGh1cyB3aGVuIF9pbml0KCkgaXMgY2FsbGVkIHRoZXJlIHdvbid0IGJlIGFueSBQcm9wVHdlZW5zIChpdCdsbCBhY3QgbGlrZSB0aGUgdHdlZW4gaXMgbm9uLWZ1bmN0aW9uYWwpXG4gICAgICB0aGlzLl90cyB8fCAodGhpcy5fcFRpbWUgPSBfdG90YWxUaW1lKTsgLy8gb3RoZXJ3aXNlLCBpZiBhbiBhbmltYXRpb24gaXMgcGF1c2VkLCB0aGVuIHRoZSBwbGF5aGVhZCBpcyBtb3ZlZCBiYWNrIHRvIHplcm8sIHRoZW4gcmVzdW1lZCwgaXQnZCByZXZlcnQgYmFjayB0byB0aGUgb3JpZ2luYWwgdGltZSBhdCB0aGUgcGF1c2VcbiAgICAgIC8vaWYgKCF0aGlzLl9sb2NrKSB7IC8vIGF2b2lkIGVuZGxlc3MgcmVjdXJzaW9uIChub3Qgc3VyZSB3ZSBuZWVkIHRoaXMgeWV0IG9yIGlmIGl0J3Mgd29ydGggdGhlIHBlcmZvcm1hbmNlIGhpdClcbiAgICAgIC8vICAgdGhpcy5fbG9jayA9IDE7XG5cbiAgICAgIF9sYXp5U2FmZVJlbmRlcih0aGlzLCBfdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cyk7IC8vICAgdGhpcy5fbG9jayA9IDA7XG4gICAgICAvL31cblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by50aW1lID0gZnVuY3Rpb24gdGltZSh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKE1hdGgubWluKHRoaXMudG90YWxEdXJhdGlvbigpLCB2YWx1ZSArIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbih0aGlzKSkgJSAodGhpcy5fZHVyICsgdGhpcy5fckRlbGF5KSB8fCAodmFsdWUgPyB0aGlzLl9kdXIgOiAwKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fdGltZTsgLy8gbm90ZTogaWYgdGhlIG1vZHVsdXMgcmVzdWx0cyBpbiAwLCB0aGUgcGxheWhlYWQgY291bGQgYmUgZXhhY3RseSBhdCB0aGUgZW5kIG9yIHRoZSBiZWdpbm5pbmcsIGFuZCB3ZSBhbHdheXMgZGVmZXIgdG8gdGhlIEVORCB3aXRoIGEgbm9uLXplcm8gdmFsdWUsIG90aGVyd2lzZSBpZiB5b3Ugc2V0IHRoZSB0aW1lKCkgdG8gdGhlIHZlcnkgZW5kIChkdXJhdGlvbigpKSwgaXQgd291bGQgcmVuZGVyIGF0IHRoZSBTVEFSVCFcbiAgfTtcblxuICBfcHJvdG8udG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uIHRvdGFsUHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLnRvdGFsRHVyYXRpb24oKSAqIHZhbHVlLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RUaW1lIC8gdGhpcy5fdER1cikgOiB0aGlzLnJhd1RpbWUoKSA+PSAwICYmIHRoaXMuX2luaXR0ZWQgPyAxIDogMDtcbiAgfTtcblxuICBfcHJvdG8ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuZHVyYXRpb24oKSAqICh0aGlzLl95b3lvICYmICEodGhpcy5pdGVyYXRpb24oKSAmIDEpID8gMSAtIHZhbHVlIDogdmFsdWUpICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLmR1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90aW1lIC8gdGhpcy5fZHVyKSA6IHRoaXMucmF3VGltZSgpID4gMCA/IDEgOiAwO1xuICB9O1xuXG4gIF9wcm90by5pdGVyYXRpb24gPSBmdW5jdGlvbiBpdGVyYXRpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgdmFyIGN5Y2xlRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uKCkgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuX3RpbWUgKyAodmFsdWUgLSAxKSAqIGN5Y2xlRHVyYXRpb24sIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbikgKyAxIDogMTtcbiAgfSAvLyBwb3RlbnRpYWwgZnV0dXJlIGFkZGl0aW9uOlxuICAvLyBpc1BsYXlpbmdCYWNrd2FyZHMoKSB7XG4gIC8vIFx0bGV0IGFuaW1hdGlvbiA9IHRoaXMsXG4gIC8vIFx0XHRvcmllbnRhdGlvbiA9IDE7IC8vIDEgPSBmb3J3YXJkLCAtMSA9IGJhY2t3YXJkXG4gIC8vIFx0d2hpbGUgKGFuaW1hdGlvbikge1xuICAvLyBcdFx0b3JpZW50YXRpb24gKj0gYW5pbWF0aW9uLnJldmVyc2VkKCkgfHwgKGFuaW1hdGlvbi5yZXBlYXQoKSAmJiAhKGFuaW1hdGlvbi5pdGVyYXRpb24oKSAmIDEpKSA/IC0xIDogMTtcbiAgLy8gXHRcdGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5wYXJlbnQ7XG4gIC8vIFx0fVxuICAvLyBcdHJldHVybiBvcmllbnRhdGlvbiA8IDA7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90by50aW1lU2NhbGUgPSBmdW5jdGlvbiB0aW1lU2NhbGUodmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnRzID09PSAtX3RpbnlOdW0gPyAwIDogdGhpcy5fcnRzOyAvLyByZWNvcmRlZCB0aW1lU2NhbGUuIFNwZWNpYWwgY2FzZTogaWYgc29tZW9uZSBjYWxscyByZXZlcnNlKCkgb24gYW4gYW5pbWF0aW9uIHdpdGggdGltZVNjYWxlIG9mIDAsIHdlIGFzc2lnbiBpdCAtX3RpbnlOdW0gdG8gcmVtZW1iZXIgaXQncyByZXZlcnNlZC5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcnRzID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHRUaW1lID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5fdHMgPyBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aGlzLnBhcmVudC5fdGltZSwgdGhpcykgOiB0aGlzLl90VGltZTsgLy8gbWFrZSBzdXJlIHRvIGRvIHRoZSBwYXJlbnRUb0NoaWxkVG90YWxUaW1lKCkgQkVGT1JFIHNldHRpbmcgdGhlIG5ldyBfdHMgYmVjYXVzZSB0aGUgb2xkIG9uZSBtdXN0IGJlIHVzZWQgaW4gdGhhdCBjYWxjdWxhdGlvbi5cbiAgICAvLyBmdXR1cmUgYWRkaXRpb24/IFVwIHNpZGU6IGZhc3QgYW5kIG1pbmltYWwgZmlsZSBzaXplLiBEb3duIHNpZGU6IG9ubHkgd29ya3Mgb24gdGhpcyBhbmltYXRpb247IGlmIGEgdGltZWxpbmUgaXMgcmV2ZXJzZWQsIGZvciBleGFtcGxlLCBpdHMgY2hpbGRyZW5zJyBvblJldmVyc2Ugd291bGRuJ3QgZ2V0IGNhbGxlZC5cbiAgICAvLygrdmFsdWUgPCAwICYmIHRoaXMuX3J0cyA+PSAwKSAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJldmVyc2VcIiwgdHJ1ZSk7XG4gICAgLy8gcHJpb3JpdGl6ZSByZW5kZXJpbmcgd2hlcmUgdGhlIHBhcmVudCdzIHBsYXloZWFkIGxpbmVzIHVwIGluc3RlYWQgb2YgdGhpcy5fdFRpbWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBhIHR3ZWVuIHRoYXQncyBhbmltYXRpbmcgYW5vdGhlciB0d2VlbidzIHRpbWVTY2FsZSBpbiB0aGUgc2FtZSByZW5kZXJpbmcgbG9vcCAoc2FtZSBwYXJlbnQpLCB0aHVzIGlmIHRoZSB0aW1lU2NhbGUgdHdlZW4gcmVuZGVycyBmaXJzdCwgaXQgd291bGQgYWx0ZXIgX3N0YXJ0IEJFRk9SRSBfdFRpbWUgd2FzIHNldCBvbiB0aGF0IHRpY2sgKGluIHRoZSByZW5kZXJpbmcgbG9vcCksIGVmZmVjdGl2ZWx5IGZyZWV6aW5nIGl0IHVudGlsIHRoZSB0aW1lU2NhbGUgdHdlZW4gZmluaXNoZXMuXG5cbiAgICB0aGlzLl9ydHMgPSArdmFsdWUgfHwgMDtcbiAgICB0aGlzLl90cyA9IHRoaXMuX3BzIHx8IHZhbHVlID09PSAtX3RpbnlOdW0gPyAwIDogdGhpcy5fcnRzOyAvLyBfdHMgaXMgdGhlIGZ1bmN0aW9uYWwgdGltZVNjYWxlIHdoaWNoIHdvdWxkIGJlIDAgaWYgdGhlIGFuaW1hdGlvbiBpcyBwYXVzZWQuXG5cbiAgICB0aGlzLnRvdGFsVGltZShfY2xhbXAoLU1hdGguYWJzKHRoaXMuX2RlbGF5KSwgdGhpcy50b3RhbER1cmF0aW9uKCksIHRUaW1lKSwgc3VwcHJlc3NFdmVudHMgIT09IGZhbHNlKTtcblxuICAgIF9zZXRFbmQodGhpcyk7IC8vIGlmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyB3YXMgZmFsc2UsIHRoZSBlbmQgdGltZSBkaWRuJ3QgZ2V0IHVwZGF0ZWQgaW4gdGhlIF9hbGlnblBsYXloZWFkKCkgbWV0aG9kLCBzbyBkbyBpdCBoZXJlLlxuXG5cbiAgICByZXR1cm4gX3JlY2FjaGVBbmNlc3RvcnModGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnBhdXNlZCA9IGZ1bmN0aW9uIHBhdXNlZCh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BzO1xuICAgIH0gLy8gcG9zc2libGUgZnV0dXJlIGFkZGl0aW9uIC0gaWYgYW4gYW5pbWF0aW9uIGlzIHJlbW92ZWQgZnJvbSBpdHMgcGFyZW50IGFuZCB0aGVuIC5yZXN0YXJ0KCkgb3IgLnBsYXkoKSBvciAucmVzdW1lKCkgaXMgY2FsbGVkLCBwZXJoYXBzIHdlIHNob3VsZCBmb3JjZSBpdCBiYWNrIGludG8gdGhlIGdsb2JhbFRpbWVsaW5lIGJ1dCBiZSBjYXJlZnVsIGJlY2F1c2Ugd2hhdCBpZiBpdCdzIGFscmVhZHkgYXQgaXRzIGVuZD8gV2UgZG9uJ3Qgd2FudCBpdCB0byBqdXN0IHBlcnNpc3QgZm9yZXZlciBhbmQgbm90IGdldCByZWxlYXNlZCBmb3IgR0MuXG4gICAgLy8gIXRoaXMucGFyZW50ICYmICF2YWx1ZSAmJiB0aGlzLl90VGltZSA8IHRoaXMuX3REdXIgJiYgdGhpcyAhPT0gX2dsb2JhbFRpbWVsaW5lICYmIF9nbG9iYWxUaW1lbGluZS5hZGQodGhpcyk7XG5cblxuICAgIGlmICh0aGlzLl9wcyAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3BzID0gdmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wVGltZSA9IHRoaXMuX3RUaW1lIHx8IE1hdGgubWF4KC10aGlzLl9kZWxheSwgdGhpcy5yYXdUaW1lKCkpOyAvLyBpZiB0aGUgcGF1c2Ugb2NjdXJzIGR1cmluZyB0aGUgZGVsYXkgcGhhc2UsIG1ha2Ugc3VyZSB0aGF0J3MgZmFjdG9yZWQgaW4gd2hlbiByZXN1bWluZy5cblxuICAgICAgICB0aGlzLl90cyA9IHRoaXMuX2FjdCA9IDA7IC8vIF90cyBpcyB0aGUgZnVuY3Rpb25hbCB0aW1lU2NhbGUsIHNvIGEgcGF1c2VkIHR3ZWVuIHdvdWxkIGVmZmVjdGl2ZWx5IGhhdmUgYSB0aW1lU2NhbGUgb2YgMC4gV2UgcmVjb3JkIHRoZSBcInJlYWxcIiB0aW1lU2NhbGUgYXMgX3J0cyAocmVjb3JkZWQgdGltZSBzY2FsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF93YWtlKCk7XG5cbiAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9ydHM7IC8vb25seSBkZWZlciB0byBfcFRpbWUgKHBhdXNlVGltZSkgaWYgdFRpbWUgaXMgemVyby4gUmVtZW1iZXIsIHNvbWVvbmUgY291bGQgcGF1c2UoKSBhbiBhbmltYXRpb24sIHRoZW4gc2NydWIgdGhlIHBsYXloZWFkIGFuZCByZXN1bWUoKS4gSWYgdGhlIHBhcmVudCBkb2Vzbid0IGhhdmUgc21vb3RoQ2hpbGRUaW1pbmcsIHdlIHJlbmRlciBhdCB0aGUgcmF3VGltZSgpIGJlY2F1c2UgdGhlIHN0YXJ0VGltZSB3b24ndCBnZXQgdXBkYXRlZC5cblxuICAgICAgICB0aGlzLnRvdGFsVGltZSh0aGlzLnBhcmVudCAmJiAhdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgPyB0aGlzLnJhd1RpbWUoKSA6IHRoaXMuX3RUaW1lIHx8IHRoaXMuX3BUaW1lLCB0aGlzLnByb2dyZXNzKCkgPT09IDEgJiYgTWF0aC5hYnModGhpcy5felRpbWUpICE9PSBfdGlueU51bSAmJiAodGhpcy5fdFRpbWUgLT0gX3RpbnlOdW0pKTsgLy8gZWRnZSBjYXNlOiBhbmltYXRpb24ucHJvZ3Jlc3MoMSkucGF1c2UoKS5wbGF5KCkgd291bGRuJ3QgcmVuZGVyIGFnYWluIGJlY2F1c2UgdGhlIHBsYXloZWFkIGlzIGFscmVhZHkgYXQgdGhlIGVuZCwgYnV0IHRoZSBjYWxsIHRvIHRvdGFsVGltZSgpIGJlbG93IHdpbGwgYWRkIGl0IGJhY2sgdG8gaXRzIHBhcmVudC4uLmFuZCBub3QgcmVtb3ZlIGl0IGFnYWluIChzaW5jZSByZW1vdmluZyBvbmx5IGhhcHBlbnMgdXBvbiByZW5kZXJpbmcgYXQgYSBuZXcgdGltZSkuIE9mZnNldHRpbmcgdGhlIF90VGltZSBzbGlnaHRseSBpcyBkb25lIHNpbXBseSB0byBjYXVzZSB0aGUgZmluYWwgcmVuZGVyIGluIHRvdGFsVGltZSgpIHRoYXQnbGwgcG9wIGl0IG9mZiBpdHMgdGltZWxpbmUgKGlmIGF1dG9SZW1vdmVDaGlsZHJlbiBpcyB0cnVlLCBvZiBjb3Vyc2UpLiBDaGVjayB0byBtYWtlIHN1cmUgX3pUaW1lIGlzbid0IC1fdGlueU51bSB0byBhdm9pZCBhbiBlZGdlIGNhc2Ugd2hlcmUgdGhlIHBsYXloZWFkIGlzIHB1c2hlZCB0byB0aGUgZW5kIGJ1dCBJTlNJREUgYSB0d2Vlbi9jYWxsYmFjaywgdGhlIHRpbWVsaW5lIGl0c2VsZiBpcyBwYXVzZWQgdGh1cyBoYWx0aW5nIHJlbmRlcmluZyBhbmQgbGVhdmluZyBhIGZldyB1bnJlbmRlcmVkLiBXaGVuIHJlc3VtaW5nLCBpdCB3b3VsZG4ndCByZW5kZXIgdGhvc2Ugb3RoZXJ3aXNlLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5zdGFydFRpbWUgPSBmdW5jdGlvbiBzdGFydFRpbWUodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKHZhbHVlKTtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDtcbiAgICAgIHBhcmVudCAmJiAocGFyZW50Ll9zb3J0IHx8ICF0aGlzLnBhcmVudCkgJiYgX2FkZFRvVGltZWxpbmUocGFyZW50LCB0aGlzLCB0aGlzLl9zdGFydCAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfTtcblxuICBfcHJvdG8uZW5kVGltZSA9IGZ1bmN0aW9uIGVuZFRpbWUoaW5jbHVkZVJlcGVhdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQgKyAoX2lzTm90RmFsc2UoaW5jbHVkZVJlcGVhdHMpID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLmR1cmF0aW9uKCkpIC8gTWF0aC5hYnModGhpcy5fdHMgfHwgMSk7XG4gIH07XG5cbiAgX3Byb3RvLnJhd1RpbWUgPSBmdW5jdGlvbiByYXdUaW1lKHdyYXBSZXBlYXRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwOyAvLyBfZHAgPSBkZXRhY2hlZCBwYXJlbnRcblxuICAgIHJldHVybiAhcGFyZW50ID8gdGhpcy5fdFRpbWUgOiB3cmFwUmVwZWF0cyAmJiAoIXRoaXMuX3RzIHx8IHRoaXMuX3JlcGVhdCAmJiB0aGlzLl90aW1lICYmIHRoaXMudG90YWxQcm9ncmVzcygpIDwgMSkgPyB0aGlzLl90VGltZSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIDogIXRoaXMuX3RzID8gdGhpcy5fdFRpbWUgOiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnQucmF3VGltZSh3cmFwUmVwZWF0cyksIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5yZXZlcnQgPSBmdW5jdGlvbiByZXZlcnQoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgICBjb25maWcgPSBfcmV2ZXJ0Q29uZmlnO1xuICAgIH1cblxuICAgIHZhciBwcmV2SXNSZXZlcnRpbmcgPSBfcmV2ZXJ0aW5nO1xuICAgIF9yZXZlcnRpbmcgPSBjb25maWc7XG5cbiAgICBpZiAoX2lzUmV2ZXJ0V29ydGh5KHRoaXMpKSB7XG4gICAgICB0aGlzLnRpbWVsaW5lICYmIHRoaXMudGltZWxpbmUucmV2ZXJ0KGNvbmZpZyk7XG4gICAgICB0aGlzLnRvdGFsVGltZSgtMC4wMSwgY29uZmlnLnN1cHByZXNzRXZlbnRzKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgIT09IFwibmVzdGVkXCIgJiYgY29uZmlnLmtpbGwgIT09IGZhbHNlICYmIHRoaXMua2lsbCgpO1xuICAgIF9yZXZlcnRpbmcgPSBwcmV2SXNSZXZlcnRpbmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmdsb2JhbFRpbWUgPSBmdW5jdGlvbiBnbG9iYWxUaW1lKHJhd1RpbWUpIHtcbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcyxcbiAgICAgICAgdGltZSA9IGFyZ3VtZW50cy5sZW5ndGggPyByYXdUaW1lIDogYW5pbWF0aW9uLnJhd1RpbWUoKTtcblxuICAgIHdoaWxlIChhbmltYXRpb24pIHtcbiAgICAgIHRpbWUgPSBhbmltYXRpb24uX3N0YXJ0ICsgdGltZSAvIChNYXRoLmFicyhhbmltYXRpb24uX3RzKSB8fCAxKTtcbiAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5fZHA7XG4gICAgfVxuXG4gICAgcmV0dXJuICF0aGlzLnBhcmVudCAmJiB0aGlzLl9zYXQgPyB0aGlzLl9zYXQuZ2xvYmFsVGltZShyYXdUaW1lKSA6IHRpbWU7IC8vIHRoZSBfc3RhcnRBdCB0d2VlbnMgZm9yIC5mcm9tVG8oKSBhbmQgLmZyb20oKSB0aGF0IGhhdmUgaW1tZWRpYXRlUmVuZGVyIHNob3VsZCBhbHdheXMgYmUgRklSU1QgaW4gdGhlIHRpbWVsaW5lIChpbXBvcnRhbnQgZm9yIGNvbnRleHQucmV2ZXJ0KCkpLiBcIl9zYXRcIiBzdGFuZHMgZm9yIF9zdGFydEF0VHdlZW4sIHJlZmVycmluZyB0byB0aGUgcGFyZW50IHR3ZWVuIHRoYXQgY3JlYXRlZCB0aGUgX3N0YXJ0QXQuIFdlIG11c3QgZGlzY2VybiBpZiB0aGF0IHR3ZWVuIGhhZCBpbW1lZGlhdGVSZW5kZXIgc28gdGhhdCB3ZSBjYW4ga25vdyB3aGV0aGVyIG9yIG5vdCB0byBwcmlvcml0aXplIGl0IGluIHJldmVydCgpLlxuICB9O1xuXG4gIF9wcm90by5yZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVwZWF0ID0gdmFsdWUgPT09IEluZmluaXR5ID8gLTIgOiB2YWx1ZTtcbiAgICAgIHJldHVybiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZXBlYXQgPT09IC0yID8gSW5maW5pdHkgOiB0aGlzLl9yZXBlYXQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24gcmVwZWF0RGVsYXkodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdmFyIHRpbWUgPSB0aGlzLl90aW1lO1xuICAgICAgdGhpcy5fckRlbGF5ID0gdmFsdWU7XG5cbiAgICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG5cbiAgICAgIHJldHVybiB0aW1lID8gdGhpcy50aW1lKHRpbWUpIDogdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fckRlbGF5O1xuICB9O1xuXG4gIF9wcm90by55b3lvID0gZnVuY3Rpb24geW95byh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl95b3lvID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5feW95bztcbiAgfTtcblxuICBfcHJvdG8uc2VlayA9IGZ1bmN0aW9uIHNlZWsocG9zaXRpb24sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoaW5jbHVkZURlbGF5LCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHRoaXMucGxheSgpLnRvdGFsVGltZShpbmNsdWRlRGVsYXkgPyAtdGhpcy5fZGVsYXkgOiAwLCBfaXNOb3RGYWxzZShzdXBwcmVzc0V2ZW50cykpO1xuICAgIHRoaXMuX2R1ciB8fCAodGhpcy5felRpbWUgPSAtX3RpbnlOdW0pOyAvLyBlbnN1cmVzIG9uQ29tcGxldGUgZmlyZXMgb24gYSB6ZXJvLWR1cmF0aW9uIGFuaW1hdGlvbiB0aGF0IGdldHMgcmVzdGFydGVkLlxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnBsYXkgPSBmdW5jdGlvbiBwbGF5KGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tIHx8IHRoaXMudG90YWxEdXJhdGlvbigpLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQodHJ1ZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucGF1c2UgPSBmdW5jdGlvbiBwYXVzZShhdFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgYXRUaW1lICE9IG51bGwgJiYgdGhpcy5zZWVrKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnBhdXNlZCh0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2VkID0gZnVuY3Rpb24gcmV2ZXJzZWQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgISF2YWx1ZSAhPT0gdGhpcy5yZXZlcnNlZCgpICYmIHRoaXMudGltZVNjYWxlKC10aGlzLl9ydHMgfHwgKHZhbHVlID8gLV90aW55TnVtIDogMCkpOyAvLyBpbiBjYXNlIHRpbWVTY2FsZSBpcyB6ZXJvLCByZXZlcnNpbmcgd291bGQgaGF2ZSBubyBlZmZlY3Qgc28gd2UgdXNlIF90aW55TnVtLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcnRzIDwgMDtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdGhpcy5faW5pdHRlZCA9IHRoaXMuX2FjdCA9IDA7XG4gICAgdGhpcy5felRpbWUgPSAtX3RpbnlOdW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwLFxuICAgICAgICBzdGFydCA9IHRoaXMuX3N0YXJ0LFxuICAgICAgICByYXdUaW1lO1xuICAgIHJldHVybiAhISghcGFyZW50IHx8IHRoaXMuX3RzICYmIHRoaXMuX2luaXR0ZWQgJiYgcGFyZW50LmlzQWN0aXZlKCkgJiYgKHJhd1RpbWUgPSBwYXJlbnQucmF3VGltZSh0cnVlKSkgPj0gc3RhcnQgJiYgcmF3VGltZSA8IHRoaXMuZW5kVGltZSh0cnVlKSAtIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8uZXZlbnRDYWxsYmFjayA9IGZ1bmN0aW9uIGV2ZW50Q2FsbGJhY2sodHlwZSwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB2YXJzID0gdGhpcy52YXJzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIGRlbGV0ZSB2YXJzW3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyc1t0eXBlXSA9IGNhbGxiYWNrO1xuICAgICAgICBwYXJhbXMgJiYgKHZhcnNbdHlwZSArIFwiUGFyYW1zXCJdID0gcGFyYW1zKTtcbiAgICAgICAgdHlwZSA9PT0gXCJvblVwZGF0ZVwiICYmICh0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcnNbdHlwZV07XG4gIH07XG5cbiAgX3Byb3RvLnRoZW4gPSBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBwcmV2UHJvbSA9IHNlbGYuX3Byb207XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICB2YXIgZiA9IF9pc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogX3Bhc3NUaHJvdWdoLFxuICAgICAgICAgIF9yZXNvbHZlID0gZnVuY3Rpb24gX3Jlc29sdmUoKSB7XG4gICAgICAgIHZhciBfdGhlbiA9IHNlbGYudGhlbjtcbiAgICAgICAgc2VsZi50aGVuID0gbnVsbDsgLy8gdGVtcG9yYXJpbHkgbnVsbCB0aGUgdGhlbigpIG1ldGhvZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zMjIpXG5cbiAgICAgICAgcHJldlByb20gJiYgcHJldlByb20oKTtcbiAgICAgICAgX2lzRnVuY3Rpb24oZikgJiYgKGYgPSBmKHNlbGYpKSAmJiAoZi50aGVuIHx8IGYgPT09IHNlbGYpICYmIChzZWxmLnRoZW4gPSBfdGhlbik7XG4gICAgICAgIHJlc29sdmUoZik7XG4gICAgICAgIHNlbGYudGhlbiA9IF90aGVuO1xuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGYuX2luaXR0ZWQgJiYgc2VsZi50b3RhbFByb2dyZXNzKCkgPT09IDEgJiYgc2VsZi5fdHMgPj0gMCB8fCAhc2VsZi5fdFRpbWUgJiYgc2VsZi5fdHMgPCAwKSB7XG4gICAgICAgIF9yZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9wcm9tID0gX3Jlc29sdmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmtpbGwgPSBmdW5jdGlvbiBraWxsKCkge1xuICAgIF9pbnRlcnJ1cHQodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIEFuaW1hdGlvbjtcbn0oKTtcblxuX3NldERlZmF1bHRzKEFuaW1hdGlvbi5wcm90b3R5cGUsIHtcbiAgX3RpbWU6IDAsXG4gIF9zdGFydDogMCxcbiAgX2VuZDogMCxcbiAgX3RUaW1lOiAwLFxuICBfdER1cjogMCxcbiAgX2RpcnR5OiAwLFxuICBfcmVwZWF0OiAwLFxuICBfeW95bzogZmFsc2UsXG4gIHBhcmVudDogbnVsbCxcbiAgX2luaXR0ZWQ6IGZhbHNlLFxuICBfckRlbGF5OiAwLFxuICBfdHM6IDEsXG4gIF9kcDogMCxcbiAgcmF0aW86IDAsXG4gIF96VGltZTogLV90aW55TnVtLFxuICBfcHJvbTogMCxcbiAgX3BzOiBmYWxzZSxcbiAgX3J0czogMVxufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElNRUxJTkVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVGltZWxpbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24pIHtcbiAgX2luaGVyaXRzTG9vc2UoVGltZWxpbmUsIF9BbmltYXRpb24pO1xuXG4gIGZ1bmN0aW9uIFRpbWVsaW5lKHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IHt9O1xuICAgIH1cblxuICAgIF90aGlzID0gX0FuaW1hdGlvbi5jYWxsKHRoaXMsIHZhcnMpIHx8IHRoaXM7XG4gICAgX3RoaXMubGFiZWxzID0ge307XG4gICAgX3RoaXMuc21vb3RoQ2hpbGRUaW1pbmcgPSAhIXZhcnMuc21vb3RoQ2hpbGRUaW1pbmc7XG4gICAgX3RoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gISF2YXJzLmF1dG9SZW1vdmVDaGlsZHJlbjtcbiAgICBfdGhpcy5fc29ydCA9IF9pc05vdEZhbHNlKHZhcnMuc29ydENoaWxkcmVuKTtcbiAgICBfZ2xvYmFsVGltZWxpbmUgJiYgX2FkZFRvVGltZWxpbmUodmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgcG9zaXRpb24pO1xuICAgIHZhcnMucmV2ZXJzZWQgJiYgX3RoaXMucmV2ZXJzZSgpO1xuICAgIHZhcnMucGF1c2VkICYmIF90aGlzLnBhdXNlZCh0cnVlKTtcbiAgICB2YXJzLnNjcm9sbFRyaWdnZXIgJiYgX3Njcm9sbFRyaWdnZXIoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHZhcnMuc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUaW1lbGluZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgwLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMSwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZnJvbVRvID0gZnVuY3Rpb24gZnJvbVRvKHRhcmdldHMsIGZyb21WYXJzLCB0b1ZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgyLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICB2YXJzLmltbWVkaWF0ZVJlbmRlciA9ICEhdmFycy5pbW1lZGlhdGVSZW5kZXI7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5jYWxsID0gZnVuY3Rpb24gY2FsbChjYWxsYmFjaywgcGFyYW1zLCBwb3NpdGlvbikge1xuICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjaywgcGFyYW1zKSwgcG9zaXRpb24pO1xuICB9IC8vT05MWSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSEgTWF5YmUgZGVsZXRlP1xuICA7XG5cbiAgX3Byb3RvMi5zdGFnZ2VyVG8gPSBmdW5jdGlvbiBzdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHZhcnMuc3RhZ2dlciA9IHZhcnMuc3RhZ2dlciB8fCBzdGFnZ2VyO1xuICAgIHZhcnMub25Db21wbGV0ZSA9IG9uQ29tcGxldGVBbGw7XG4gICAgdmFycy5vbkNvbXBsZXRlUGFyYW1zID0gb25Db21wbGV0ZUFsbFBhcmFtcztcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zdGFnZ2VyRnJvbSA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHZhcnMucnVuQmFja3dhcmRzID0gMTtcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tVG8gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbVRvKHRhcmdldHMsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHRvVmFycy5zdGFydEF0ID0gZnJvbVZhcnM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh0b1ZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHRvVmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICB0RHVyID0gdGhpcy5fZGlydHkgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0b3RhbFRpbWUgPD0gMCA/IDAgOiBfcm91bmRQcmVjaXNlKHRvdGFsVGltZSksXG4gICAgICAgIC8vIGlmIGEgcGF1c2VkIHRpbWVsaW5lIGlzIHJlc3VtZWQgKG9yIGl0cyBfc3RhcnQgaXMgdXBkYXRlZCBmb3IgYW5vdGhlciByZWFzb24uLi53aGljaCByb3VuZHMgaXQpLCB0aGF0IGNvdWxkIHJlc3VsdCBpbiB0aGUgcGxheWhlYWQgc2hpZnRpbmcgYSAqKnRpbnkqKiBhbW91bnQgYW5kIGEgemVyby1kdXJhdGlvbiBjaGlsZCBhdCB0aGF0IHNwb3QgbWF5IGdldCByZW5kZXJlZCBhdCBhIGRpZmZlcmVudCByYXRpbywgbGlrZSBpdHMgdG90YWxUaW1lIGluIHJlbmRlcigpIG1heSBiZSAxZS0xNyBpbnN0ZWFkIG9mIDAsIGZvciBleGFtcGxlLlxuICAgIGNyb3NzaW5nU3RhcnQgPSB0aGlzLl96VGltZSA8IDAgIT09IHRvdGFsVGltZSA8IDAgJiYgKHRoaXMuX2luaXR0ZWQgfHwgIWR1ciksXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0LFxuICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgIGN5Y2xlRHVyYXRpb24sXG4gICAgICAgIHByZXZQYXVzZWQsXG4gICAgICAgIHBhdXNlVHdlZW4sXG4gICAgICAgIHRpbWVTY2FsZSxcbiAgICAgICAgcHJldlN0YXJ0LFxuICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICB5b3lvLFxuICAgICAgICBpc1lveW87XG4gICAgdGhpcyAhPT0gX2dsb2JhbFRpbWVsaW5lICYmIHRUaW1lID4gdER1ciAmJiB0b3RhbFRpbWUgPj0gMCAmJiAodFRpbWUgPSB0RHVyKTtcblxuICAgIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgZm9yY2UgfHwgY3Jvc3NpbmdTdGFydCkge1xuICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lICYmIGR1cikge1xuICAgICAgICAvL2lmIHRvdGFsRHVyYXRpb24oKSBmaW5kcyBhIGNoaWxkIHdpdGggYSBuZWdhdGl2ZSBzdGFydFRpbWUgYW5kIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHRoaW5ncyBnZXQgc2hpZnRlZCBhcm91bmQgaW50ZXJuYWxseSBzbyB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgdGltZSBhY2NvcmRpbmdseS4gRm9yIGV4YW1wbGUsIGlmIGEgdHdlZW4gc3RhcnRzIGF0IC0zMCB3ZSBtdXN0IHNoaWZ0IEVWRVJZVEhJTkcgZm9yd2FyZCAzMCBzZWNvbmRzIGFuZCBtb3ZlIHRoaXMgdGltZWxpbmUncyBzdGFydFRpbWUgYmFja3dhcmQgYnkgMzAgc2Vjb25kcyBzbyB0aGF0IHRoaW5ncyBhbGlnbiB3aXRoIHRoZSBwbGF5aGVhZCAobm8ganVtcCkuXG4gICAgICAgIHRUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgICAgdG90YWxUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgIH1cblxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgcHJldlN0YXJ0ID0gdGhpcy5fc3RhcnQ7XG4gICAgICB0aW1lU2NhbGUgPSB0aGlzLl90cztcbiAgICAgIHByZXZQYXVzZWQgPSAhdGltZVNjYWxlO1xuXG4gICAgICBpZiAoY3Jvc3NpbmdTdGFydCkge1xuICAgICAgICBkdXIgfHwgKHByZXZUaW1lID0gdGhpcy5felRpbWUpOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHRpbWVsaW5lLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgICAgICh0b3RhbFRpbWUgfHwgIXN1cHByZXNzRXZlbnRzKSAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICB5b3lvID0gdGhpcy5feW95bztcbiAgICAgICAgY3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JEZWxheTtcblxuICAgICAgICBpZiAodGhpcy5fcmVwZWF0IDwgLTEgJiYgdG90YWxUaW1lIDwgMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShjeWNsZUR1cmF0aW9uICogMTAwICsgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZSA9IF9yb3VuZFByZWNpc2UodFRpbWUgJSBjeWNsZUR1cmF0aW9uKTsgLy9yb3VuZCB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnMuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBzb21lIGJyb3dzZXJzIHJlcG9ydCBpdCBhcyAwLjc5OTk5OTk5ISlcblxuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIpIHtcbiAgICAgICAgICAvLyB0aGUgdER1ciA9PT0gdFRpbWUgaXMgZm9yIGVkZ2UgY2FzZXMgd2hlcmUgdGhlcmUncyBhIGxlbmd0aHkgZGVjaW1hbCBvbiB0aGUgZHVyYXRpb24gYW5kIGl0IG1heSByZWFjaCB0aGUgdmVyeSBlbmQgYnV0IHRoZSB0aW1lIGlzIHJlbmRlcmVkIGFzIG5vdC1xdWl0ZS10aGVyZSAocmVtZW1iZXIsIHREdXIgaXMgcm91bmRlZCB0byA0IGRlY2ltYWxzIHdoZXJlYXMgZHVyIGlzbid0KVxuICAgICAgICAgIGl0ZXJhdGlvbiA9IHRoaXMuX3JlcGVhdDtcbiAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZJdGVyYXRpb24gPSBfcm91bmRQcmVjaXNlKHRUaW1lIC8gY3ljbGVEdXJhdGlvbik7IC8vIGZ1bGwgZGVjaW1hbCB2ZXJzaW9uIG9mIGl0ZXJhdGlvbnMsIG5vdCB0aGUgcHJldmlvdXMgaXRlcmF0aW9uICh3ZSdyZSByZXVzaW5nIHByZXZJdGVyYXRpb24gdmFyaWFibGUgZm9yIGVmZmljaWVuY3kpXG5cbiAgICAgICAgICBpdGVyYXRpb24gPSB+fnByZXZJdGVyYXRpb247XG5cbiAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gcHJldkl0ZXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG4gICAgICAgICFwcmV2VGltZSAmJiB0aGlzLl90VGltZSAmJiBwcmV2SXRlcmF0aW9uICE9PSBpdGVyYXRpb24gJiYgdGhpcy5fdFRpbWUgLSBwcmV2SXRlcmF0aW9uICogY3ljbGVEdXJhdGlvbiAtIHRoaXMuX2R1ciA8PSAwICYmIChwcmV2SXRlcmF0aW9uID0gaXRlcmF0aW9uKTsgLy8gZWRnZSBjYXNlIC0gaWYgc29tZW9uZSBkb2VzIGFkZFBhdXNlKCkgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIGEgcmVwZWF0aW5nIHRpbWVsaW5lLCB0aGF0IHBhdXNlIGlzIHRlY2huaWNhbGx5IGF0IHRoZSBzYW1lIHNwb3QgYXMgdGhlIGVuZCB3aGljaCBjYXVzZXMgdGhpcy5fdGltZSB0byBnZXQgc2V0IHRvIDAgd2hlbiB0aGUgdG90YWxUaW1lIHdvdWxkIG5vcm1hbGx5IHBsYWNlIHRoZSBwbGF5aGVhZCBhdCB0aGUgZW5kLiBTZWUgaHR0cHM6Ly9nc2FwLmNvbS9mb3J1bXMvdG9waWMvMjM4MjMtY2xvc2luZy1uYXYtYW5pbWF0aW9uLW5vdC13b3JraW5nLW9uLWllLWFuZC1pcGhvbmUtNi1tYXliZS1vdGhlci1vbGRlci1icm93c2VyLz90YWI9Y29tbWVudHMjY29tbWVudC0xMTMwMDUgYWxzbywgdGhpcy5fdFRpbWUgLSBwcmV2SXRlcmF0aW9uICogY3ljbGVEdXJhdGlvbiAtIHRoaXMuX2R1ciA8PSAwIGp1c3QgY2hlY2tzIHRvIG1ha2Ugc3VyZSBpdCB3YXNuJ3QgcHJldmlvdXNseSBpbiB0aGUgXCJyZXBlYXREZWxheVwiIHBvcnRpb25cblxuICAgICAgICBpZiAoeW95byAmJiBpdGVyYXRpb24gJiAxKSB7XG4gICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgICAgaXNZb3lvID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICBtYWtlIHN1cmUgY2hpbGRyZW4gYXQgdGhlIGVuZC9iZWdpbm5pbmcgb2YgdGhlIHRpbWVsaW5lIGFyZSByZW5kZXJlZCBwcm9wZXJseS4gSWYsIGZvciBleGFtcGxlLFxuICAgICAgICBhIDMtc2Vjb25kIGxvbmcgdGltZWxpbmUgcmVuZGVyZWQgYXQgMi45IHNlY29uZHMgcHJldmlvdXNseSwgYW5kIG5vdyByZW5kZXJzIGF0IDMuMiBzZWNvbmRzICh3aGljaFxuICAgICAgICB3b3VsZCBnZXQgdHJhbnNsYXRlZCB0byAyLjggc2Vjb25kcyBpZiB0aGUgdGltZWxpbmUgeW95b3Mgb3IgMC4yIHNlY29uZHMgaWYgaXQganVzdCByZXBlYXRzKSwgdGhlcmVcbiAgICAgICAgY291bGQgYmUgYSBjYWxsYmFjayBvciBhIHNob3J0IHR3ZWVuIHRoYXQncyBhdCAyLjk1IG9yIDMgc2Vjb25kcyBpbiB3aGljaCB3b3VsZG4ndCByZW5kZXIuIFNvXG4gICAgICAgIHdlIG5lZWQgdG8gcHVzaCB0aGUgdGltZWxpbmUgdG8gdGhlIGVuZCAoYW5kL29yIGJlZ2lubmluZyBkZXBlbmRpbmcgb24gaXRzIHlveW8gdmFsdWUpLiBBbHNvIHdlIG11c3RcbiAgICAgICAgZW5zdXJlIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgVGltZWxpbmUgd29yay5cbiAgICAgICAgKi9cblxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICB2YXIgcmV3aW5kaW5nID0geW95byAmJiBwcmV2SXRlcmF0aW9uICYgMSxcbiAgICAgICAgICAgICAgZG9lc1dyYXAgPSByZXdpbmRpbmcgPT09ICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpO1xuICAgICAgICAgIGl0ZXJhdGlvbiA8IHByZXZJdGVyYXRpb24gJiYgKHJld2luZGluZyA9ICFyZXdpbmRpbmcpO1xuICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gMCA6IHRUaW1lICUgZHVyID8gZHVyIDogdFRpbWU7IC8vIGlmIHRoZSBwbGF5aGVhZCBpcyBsYW5kaW5nIGV4YWN0bHkgYXQgdGhlIGVuZCBvZiBhbiBpdGVyYXRpb24sIHVzZSB0aGF0IHRvdGFsVGltZSByYXRoZXIgdGhhbiBvbmx5IHRoZSBkdXJhdGlvbiwgb3RoZXJ3aXNlIGl0J2xsIHNraXAgdGhlIDJuZCByZW5kZXIgc2luY2UgaXQncyBlZmZlY3RpdmVseSBhdCB0aGUgc2FtZSB0aW1lLlxuXG4gICAgICAgICAgdGhpcy5fbG9jayA9IDE7XG4gICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUgfHwgKGlzWW95byA/IDAgOiBfcm91bmRQcmVjaXNlKGl0ZXJhdGlvbiAqIGN5Y2xlRHVyYXRpb24pKSwgc3VwcHJlc3NFdmVudHMsICFkdXIpLl9sb2NrID0gMDtcbiAgICAgICAgICB0aGlzLl90VGltZSA9IHRUaW1lOyAvLyBpZiBhIHVzZXIgZ2V0cyB0aGUgaXRlcmF0aW9uKCkgaW5zaWRlIHRoZSBvblJlcGVhdCwgZm9yIGV4YW1wbGUsIGl0IHNob3VsZCBiZSBhY2N1cmF0ZS5cblxuICAgICAgICAgICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcblxuICAgICAgICAgIGlmICh0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvKSB7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRhdGUoKS5fbG9jayA9IDE7XG4gICAgICAgICAgICBwcmV2SXRlcmF0aW9uID0gaXRlcmF0aW9uOyAvLyBvdGhlcndpc2UsIHRoZSBvblN0YXJ0KCkgbWF5IGZpcmUgb24gdGhlIDJuZCBpdGVyYXRpb24uXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByZXZUaW1lICYmIHByZXZUaW1lICE9PSB0aGlzLl90aW1lIHx8IHByZXZQYXVzZWQgIT09ICF0aGlzLl90cyB8fCB0aGlzLnZhcnMub25SZXBlYXQgJiYgIXRoaXMucGFyZW50ICYmICF0aGlzLl9hY3QpIHtcbiAgICAgICAgICAgIC8vIGlmIHByZXZUaW1lIGlzIDAgYW5kIHdlIHJlbmRlciBhdCB0aGUgdmVyeSBlbmQsIF90aW1lIHdpbGwgYmUgdGhlIGVuZCwgdGh1cyB3b24ndCBtYXRjaC4gU28gaW4gdGhpcyBlZGdlIGNhc2UsIHByZXZUaW1lIHdvbid0IG1hdGNoIF90aW1lIGJ1dCB0aGF0J3Mgb2theS4gSWYgaXQgZ2V0cyBraWxsZWQgaW4gdGhlIG9uUmVwZWF0LCBlamVjdCBhcyB3ZWxsLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZHVyID0gdGhpcy5fZHVyOyAvLyBpbiBjYXNlIHRoZSBkdXJhdGlvbiBjaGFuZ2VkIGluIHRoZSBvblJlcGVhdFxuXG4gICAgICAgICAgdER1ciA9IHRoaXMuX3REdXI7XG5cbiAgICAgICAgICBpZiAoZG9lc1dyYXApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2sgPSAyO1xuICAgICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyBkdXIgOiAtMC4wMDAxO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiB0aGlzLmludmFsaWRhdGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgICAgICAgIGlmICghdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faGFzUGF1c2UgJiYgIXRoaXMuX2ZvcmNpbmcgJiYgdGhpcy5fbG9jayA8IDIpIHtcbiAgICAgICAgcGF1c2VUd2VlbiA9IF9maW5kTmV4dFBhdXNlVHdlZW4odGhpcywgX3JvdW5kUHJlY2lzZShwcmV2VGltZSksIF9yb3VuZFByZWNpc2UodGltZSkpO1xuXG4gICAgICAgIGlmIChwYXVzZVR3ZWVuKSB7XG4gICAgICAgICAgdFRpbWUgLT0gdGltZSAtICh0aW1lID0gcGF1c2VUd2Vlbi5fc3RhcnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICAgIHRoaXMuX2FjdCA9ICEhdGltZVNjYWxlOyAvLyBhcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICB0aGlzLl9vblVwZGF0ZSA9IHRoaXMudmFycy5vblVwZGF0ZTtcbiAgICAgICAgdGhpcy5faW5pdHRlZCA9IDE7XG4gICAgICAgIHRoaXMuX3pUaW1lID0gdG90YWxUaW1lO1xuICAgICAgICBwcmV2VGltZSA9IDA7IC8vIHVwb24gaW5pdCwgdGhlIHBsYXloZWFkIHNob3VsZCBhbHdheXMgZ28gZm9yd2FyZDsgc29tZW9uZSBjb3VsZCBpbnZhbGlkYXRlKCkgYSBjb21wbGV0ZWQgdGltZWxpbmUgYW5kIHRoZW4gaWYgdGhleSByZXN0YXJ0KCksIHRoYXQgd291bGQgbWFrZSBjaGlsZCB0d2VlbnMgcmVuZGVyIGluIHJldmVyc2Ugb3JkZXIgd2hpY2ggY291bGQgbG9jayBpbiB0aGUgd3Jvbmcgc3RhcnRpbmcgdmFsdWVzIGlmIHRoZXkgYnVpbGQgb24gZWFjaCBvdGhlciwgbGlrZSB0bC50byhvYmosIHt4OiAxMDB9KS50byhvYmosIHt4OiAwfSkuXG4gICAgICB9XG5cbiAgICAgIGlmICghcHJldlRpbWUgJiYgdFRpbWUgJiYgZHVyICYmICFzdXBwcmVzc0V2ZW50cyAmJiAhcHJldkl0ZXJhdGlvbikge1xuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gdFRpbWUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBvblN0YXJ0IHRyaWdnZXJlZCBhIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90LCBlamVjdC4gTGlrZSBpZiBzb21lb25lIGRpZCBhbmltYXRpb24ucGF1c2UoMC41KSBvciBzb21ldGhpbmcgaW5zaWRlIHRoZSBvblN0YXJ0LlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lID49IHByZXZUaW1lICYmIHRvdGFsVGltZSA+PSAwKSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IHRpbWUgPj0gY2hpbGQuX3N0YXJ0KSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/ICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICE9PSB0aGlzLl90aW1lIHx8ICF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgb3Igc2Vla3MgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nLCBsaWtlIGluc2lkZSBvZiBhbiBvblVwZGF0ZS9vbkNvbXBsZXRlXG4gICAgICAgICAgICAgIHBhdXNlVHdlZW4gPSAwO1xuICAgICAgICAgICAgICBuZXh0ICYmICh0VGltZSArPSB0aGlzLl96VGltZSA9IC1fdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBmbGFnIHpUaW1lIGFzIG5lZ2F0aXZlIHNvIHRoYXQgdGhlIG5leHQgdGltZSByZW5kZXIoKSBpcyBjYWxsZWQgaXQnbGwgYmUgZm9yY2VkICh0byByZW5kZXIgYW55IHJlbWFpbmluZyBjaGlsZHJlbilcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fbGFzdDtcbiAgICAgICAgdmFyIGFkanVzdGVkVGltZSA9IHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiB0aW1lOyAvL3doZW4gdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydCBvZiB0aGlzIHRpbWVsaW5lLCB3ZSBtdXN0IHBhc3MgdGhhdCBpbmZvcm1hdGlvbiBkb3duIHRvIHRoZSBjaGlsZCBhbmltYXRpb25zIHNvIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMga25vdyB3aGV0aGVyIHRvIHJlbmRlciB0aGVpciBzdGFydGluZyBvciBlbmRpbmcgdmFsdWVzLlxuXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIG5leHQgPSBjaGlsZC5fcHJldjtcblxuICAgICAgICAgIGlmICgoY2hpbGQuX2FjdCB8fCBhZGp1c3RlZFRpbWUgPD0gY2hpbGQuX2VuZCkgJiYgY2hpbGQuX3RzICYmIHBhdXNlVHdlZW4gIT09IGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJlbWUgZWRnZSBjYXNlIC0gdGhlIGNoaWxkJ3MgcmVuZGVyIGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlIGtpbGwoKSB0aGUgXCJuZXh0XCIgb25lIGluIHRoZSBsaW5rZWQgbGlzdCwgb3IgcmVwYXJlbnQgaXQuIEluIHRoYXQgY2FzZSB3ZSBtdXN0IHJlLWluaXRpYXRlIHRoZSB3aG9sZSByZW5kZXIgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNoaWxkLl90cyA+IDAgPyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlIHx8IF9yZXZlcnRpbmcgJiYgX2lzUmV2ZXJ0V29ydGh5KGNoaWxkKSk7IC8vIGlmIHJldmVydGluZywgd2Ugc2hvdWxkIGFsd2F5cyBmb3JjZSByZW5kZXJzIG9mIGluaXR0ZWQgdHdlZW5zIChidXQgcmVtZW1iZXIgdGhhdCAuZnJvbVRvKCkgb3IgLmZyb20oKSBtYXkgaGF2ZSBhIF9zdGFydEF0IGJ1dCBub3QgX2luaXR0ZWQgeWV0KS4gSWYsIGZvciBleGFtcGxlLCBhIC5mcm9tVG8oKSB0d2VlbiB3aXRoIGEgc3RhZ2dlciAod2hpY2ggY3JlYXRlcyBhbiBpbnRlcm5hbCB0aW1lbGluZSkgZ2V0cyByZXZlcnRlZCBCRUZPUkUgc29tZSBvZiBpdHMgY2hpbGQgdHdlZW5zIHJlbmRlciBmb3IgdGhlIGZpcnN0IHRpbWUsIGl0IG1heSBub3QgcHJvcGVybHkgdHJpZ2dlciB0aGVtIHRvIHJldmVydC5cblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gYWRqdXN0ZWRUaW1lID8gLV90aW55TnVtIDogX3RpbnlOdW0pOyAvLyBpdCBkaWRuJ3QgZmluaXNoIHJlbmRlcmluZywgc28gYWRqdXN0IHpUaW1lIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGF1c2VUd2VlbiAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICBwYXVzZVR3ZWVuLnJlbmRlcih0aW1lID49IHByZXZUaW1lID8gMCA6IC1fdGlueU51bSkuX3pUaW1lID0gdGltZSA+PSBwcmV2VGltZSA/IDEgOiAtMTtcblxuICAgICAgICBpZiAodGhpcy5fdHMpIHtcbiAgICAgICAgICAvL3RoZSBjYWxsYmFjayByZXN1bWVkIHBsYXliYWNrISBTbyBzaW5jZSB3ZSBtYXkgaGF2ZSBoZWxkIGJhY2sgdGhlIHBsYXloZWFkIGR1ZSB0byB3aGVyZSB0aGUgcGF1c2UgaXMgcG9zaXRpb25lZCwgZ28gYWhlYWQgYW5kIGp1bXAgdG8gd2hlcmUgaXQncyBTVVBQT1NFRCB0byBiZSAoaWYgbm8gcGF1c2UgaGFwcGVuZWQpLlxuICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gcHJldlN0YXJ0OyAvL2lmIHRoZSBwYXVzZSB3YXMgYXQgYW4gZWFybGllciB0aW1lIGFuZCB0aGUgdXNlciByZXN1bWVkIGluIHRoZSBjYWxsYmFjaywgaXQgY291bGQgcmVwb3NpdGlvbiB0aGUgdGltZWxpbmUgKGNoYW5naW5nIGl0cyBzdGFydFRpbWUpLCB0aHJvd2luZyB0aGluZ3Mgb2ZmIHNsaWdodGx5LCBzbyB3ZSBtYWtlIHN1cmUgdGhlIF9zdGFydCBkb2Vzbid0IHNoaWZ0LlxuXG4gICAgICAgICAgX3NldEVuZCh0aGlzKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIsIHRydWUpO1xuICAgICAgaWYgKHRUaW1lID09PSB0RHVyICYmIHRoaXMuX3RUaW1lID49IHRoaXMudG90YWxEdXJhdGlvbigpIHx8ICF0VGltZSAmJiBwcmV2VGltZSkgaWYgKHByZXZTdGFydCA9PT0gdGhpcy5fc3RhcnQgfHwgTWF0aC5hYnModGltZVNjYWxlKSAhPT0gTWF0aC5hYnModGhpcy5fdHMpKSBpZiAoIXRoaXMuX2xvY2spIHtcbiAgICAgICAgLy8gcmVtZW1iZXIsIGEgY2hpbGQncyBjYWxsYmFjayBtYXkgYWx0ZXIgdGhpcyB0aW1lbGluZSdzIHBsYXloZWFkIG9yIHRpbWVTY2FsZSB3aGljaCBpcyB3aHkgd2UgbmVlZCB0byBhZGQgc29tZSBvZiB0aGVzZSBjaGVja3MuXG4gICAgICAgICh0b3RhbFRpbWUgfHwgIWR1cikgJiYgKHRUaW1lID09PSB0RHVyICYmIHRoaXMuX3RzID4gMCB8fCAhdFRpbWUgJiYgdGhpcy5fdHMgPCAwKSAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0aGlzLCAxKTsgLy8gZG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUgfHwgIXREdXIpKSB7XG4gICAgICAgICAgX2NhbGxiYWNrKHRoaXMsIHRUaW1lID09PSB0RHVyICYmIHRvdGFsVGltZSA+PSAwID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgICAgdGhpcy5fcHJvbSAmJiAhKHRUaW1lIDwgdER1ciAmJiB0aGlzLnRpbWVTY2FsZSgpID4gMCkgJiYgdGhpcy5fcHJvbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGQgPSBmdW5jdGlvbiBhZGQoY2hpbGQsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBfaXNOdW1iZXIocG9zaXRpb24pIHx8IChwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBjaGlsZCkpO1xuXG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBBbmltYXRpb24pKSB7XG4gICAgICBpZiAoX2lzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuYWRkKG9iaiwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExhYmVsKGNoaWxkLCBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNGdW5jdGlvbihjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcyAhPT0gY2hpbGQgPyBfYWRkVG9UaW1lbGluZSh0aGlzLCBjaGlsZCwgcG9zaXRpb24pIDogdGhpczsgLy9kb24ndCBhbGxvdyBhIHRpbWVsaW5lIHRvIGJlIGFkZGVkIHRvIGl0c2VsZiBhcyBhIGNoaWxkIVxuICB9O1xuXG4gIF9wcm90bzIuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRDaGlsZHJlbihuZXN0ZWQsIHR3ZWVucywgdGltZWxpbmVzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKG5lc3RlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBuZXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0d2VlbnMgPT09IHZvaWQgMCkge1xuICAgICAgdHdlZW5zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGltZWxpbmVzID09PSB2b2lkIDApIHtcbiAgICAgIHRpbWVsaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IC1fYmlnTnVtO1xuICAgIH1cblxuICAgIHZhciBhID0gW10sXG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICAgIHR3ZWVucyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVsaW5lcyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICAgIG5lc3RlZCAmJiBhLnB1c2guYXBwbHkoYSwgY2hpbGQuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHdlZW5zLCB0aW1lbGluZXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0QnlJZCA9IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHRoaXMuZ2V0Q2hpbGRyZW4oMSwgMSwgMSksXG4gICAgICAgIGkgPSBhbmltYXRpb25zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChhbmltYXRpb25zW2ldLnZhcnMuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb25zW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShjaGlsZCkge1xuICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVMYWJlbChjaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRoaXMua2lsbFR3ZWVuc09mKGNoaWxkKTtcbiAgICB9XG5cbiAgICBjaGlsZC5wYXJlbnQgPT09IHRoaXMgJiYgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIGNoaWxkKTtcblxuICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcmVjZW50KSB7XG4gICAgICB0aGlzLl9yZWNlbnQgPSB0aGlzLl9sYXN0O1xuICAgIH1cblxuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsVGltZSA9IGZ1bmN0aW9uIHRvdGFsVGltZShfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90VGltZTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb3JjaW5nID0gMTtcblxuICAgIGlmICghdGhpcy5fZHAgJiYgdGhpcy5fdHMpIHtcbiAgICAgIC8vc3BlY2lhbCBjYXNlIGZvciB0aGUgZ2xvYmFsIHRpbWVsaW5lIChvciBhbnkgb3RoZXIgdGhhdCBoYXMgbm8gcGFyZW50IG9yIGRldGFjaGVkIHBhcmVudCkuXG4gICAgICB0aGlzLl9zdGFydCA9IF9yb3VuZFByZWNpc2UoX3RpY2tlci50aW1lIC0gKHRoaXMuX3RzID4gMCA/IF90b3RhbFRpbWUyIC8gdGhpcy5fdHMgOiAodGhpcy50b3RhbER1cmF0aW9uKCkgLSBfdG90YWxUaW1lMikgLyAtdGhpcy5fdHMpKTtcbiAgICB9XG5cbiAgICBfQW5pbWF0aW9uLnByb3RvdHlwZS50b3RhbFRpbWUuY2FsbCh0aGlzLCBfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpO1xuXG4gICAgdGhpcy5fZm9yY2luZyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRMYWJlbCA9IGZ1bmN0aW9uIGFkZExhYmVsKGxhYmVsLCBwb3NpdGlvbikge1xuICAgIHRoaXMubGFiZWxzW2xhYmVsXSA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwobGFiZWwpIHtcbiAgICBkZWxldGUgdGhpcy5sYWJlbHNbbGFiZWxdO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkUGF1c2UgPSBmdW5jdGlvbiBhZGRQYXVzZShwb3NpdGlvbiwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB0ID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2sgfHwgX2VtcHR5RnVuYywgcGFyYW1zKTtcbiAgICB0LmRhdGEgPSBcImlzUGF1c2VcIjtcbiAgICB0aGlzLl9oYXNQYXVzZSA9IDE7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIHQsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVQYXVzZSA9IGZ1bmN0aW9uIHJlbW92ZVBhdXNlKHBvc2l0aW9uKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgcG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPT09IHBvc2l0aW9uICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiKSB7XG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgdHdlZW5zID0gdGhpcy5nZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSxcbiAgICAgICAgaSA9IHR3ZWVucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiAhPT0gdHdlZW5zW2ldICYmIHR3ZWVuc1tpXS5raWxsKHRhcmdldHMsIHByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmdldFR3ZWVuc09mID0gZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHZhciBhID0gW10sXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBpc0dsb2JhbFRpbWUgPSBfaXNOdW1iZXIob25seUFjdGl2ZSksXG4gICAgICAgIC8vIGEgbnVtYmVyIGlzIGludGVycHJldGVkIGFzIGEgZ2xvYmFsIHRpbWUuIElmIHRoZSBhbmltYXRpb24gc3BhbnNcbiAgICBjaGlsZHJlbjtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgaWYgKF9hcnJheUNvbnRhaW5zQW55KGNoaWxkLl90YXJnZXRzLCBwYXJzZWRUYXJnZXRzKSAmJiAoaXNHbG9iYWxUaW1lID8gKCFfb3ZlcndyaXRpbmdUd2VlbiB8fCBjaGlsZC5faW5pdHRlZCAmJiBjaGlsZC5fdHMpICYmIGNoaWxkLmdsb2JhbFRpbWUoMCkgPD0gb25seUFjdGl2ZSAmJiBjaGlsZC5nbG9iYWxUaW1lKGNoaWxkLnRvdGFsRHVyYXRpb24oKSkgPiBvbmx5QWN0aXZlIDogIW9ubHlBY3RpdmUgfHwgY2hpbGQuaXNBY3RpdmUoKSkpIHtcbiAgICAgICAgICAvLyBub3RlOiBpZiB0aGlzIGlzIGZvciBvdmVyd3JpdGluZywgaXQgc2hvdWxkIG9ubHkgYmUgZm9yIHR3ZWVucyB0aGF0IGFyZW4ndCBwYXVzZWQgYW5kIGFyZSBpbml0dGVkLlxuICAgICAgICAgIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkcmVuID0gY2hpbGQuZ2V0VHdlZW5zT2YocGFyc2VkVGFyZ2V0cywgb25seUFjdGl2ZSkpLmxlbmd0aCkge1xuICAgICAgICBhLnB1c2guYXBwbHkoYSwgY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9IC8vIHBvdGVudGlhbCBmdXR1cmUgZmVhdHVyZSAtIHRhcmdldHMoKSBvbiB0aW1lbGluZXNcbiAgLy8gdGFyZ2V0cygpIHtcbiAgLy8gXHRsZXQgcmVzdWx0ID0gW107XG4gIC8vIFx0dGhpcy5nZXRDaGlsZHJlbih0cnVlLCB0cnVlLCBmYWxzZSkuZm9yRWFjaCh0ID0+IHJlc3VsdC5wdXNoKC4uLnQudGFyZ2V0cygpKSk7XG4gIC8vIFx0cmV0dXJuIHJlc3VsdC5maWx0ZXIoKHYsIGkpID0+IHJlc3VsdC5pbmRleE9mKHYpID09PSBpKTtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvMi50d2VlblRvID0gZnVuY3Rpb24gdHdlZW5Ubyhwb3NpdGlvbiwgdmFycykge1xuICAgIHZhcnMgPSB2YXJzIHx8IHt9O1xuXG4gICAgdmFyIHRsID0gdGhpcyxcbiAgICAgICAgZW5kVGltZSA9IF9wYXJzZVBvc2l0aW9uKHRsLCBwb3NpdGlvbiksXG4gICAgICAgIF92YXJzID0gdmFycyxcbiAgICAgICAgc3RhcnRBdCA9IF92YXJzLnN0YXJ0QXQsXG4gICAgICAgIF9vblN0YXJ0ID0gX3ZhcnMub25TdGFydCxcbiAgICAgICAgb25TdGFydFBhcmFtcyA9IF92YXJzLm9uU3RhcnRQYXJhbXMsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlciA9IF92YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgaW5pdHRlZCxcbiAgICAgICAgdHdlZW4gPSBUd2Vlbi50byh0bCwgX3NldERlZmF1bHRzKHtcbiAgICAgIGVhc2U6IHZhcnMuZWFzZSB8fCBcIm5vbmVcIixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgIHRpbWU6IGVuZFRpbWUsXG4gICAgICBvdmVyd3JpdGU6IFwiYXV0b1wiLFxuICAgICAgZHVyYXRpb246IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKSB8fCBfdGlueU51bSxcbiAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgICAgIHRsLnBhdXNlKCk7XG5cbiAgICAgICAgaWYgKCFpbml0dGVkKSB7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpO1xuICAgICAgICAgIHR3ZWVuLl9kdXIgIT09IGR1cmF0aW9uICYmIF9zZXREdXJhdGlvbih0d2VlbiwgZHVyYXRpb24sIDAsIDEpLnJlbmRlcih0d2Vlbi5fdGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgaW5pdHRlZCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBfb25TdGFydCAmJiBfb25TdGFydC5hcHBseSh0d2Vlbiwgb25TdGFydFBhcmFtcyB8fCBbXSk7IC8vaW4gY2FzZSB0aGUgdXNlciBoYWQgYW4gb25TdGFydCBpbiB0aGUgdmFycyAtIHdlIGRvbid0IHdhbnQgdG8gb3ZlcndyaXRlIGl0LlxuICAgICAgfVxuICAgIH0sIHZhcnMpKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVSZW5kZXIgPyB0d2Vlbi5yZW5kZXIoMCkgOiB0d2VlbjtcbiAgfTtcblxuICBfcHJvdG8yLnR3ZWVuRnJvbVRvID0gZnVuY3Rpb24gdHdlZW5Gcm9tVG8oZnJvbVBvc2l0aW9uLCB0b1Bvc2l0aW9uLCB2YXJzKSB7XG4gICAgcmV0dXJuIHRoaXMudHdlZW5Ubyh0b1Bvc2l0aW9uLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgc3RhcnRBdDoge1xuICAgICAgICB0aW1lOiBfcGFyc2VQb3NpdGlvbih0aGlzLCBmcm9tUG9zaXRpb24pXG4gICAgICB9XG4gICAgfSwgdmFycykpO1xuICB9O1xuXG4gIF9wcm90bzIucmVjZW50ID0gZnVuY3Rpb24gcmVjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNlbnQ7XG4gIH07XG5cbiAgX3Byb3RvMi5uZXh0TGFiZWwgPSBmdW5jdGlvbiBuZXh0TGFiZWwoYWZ0ZXJUaW1lKSB7XG4gICAgaWYgKGFmdGVyVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBhZnRlclRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBhZnRlclRpbWUpKTtcbiAgfTtcblxuICBfcHJvdG8yLnByZXZpb3VzTGFiZWwgPSBmdW5jdGlvbiBwcmV2aW91c0xhYmVsKGJlZm9yZVRpbWUpIHtcbiAgICBpZiAoYmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBiZWZvcmVUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYmVmb3JlVGltZSksIDEpO1xuICB9O1xuXG4gIF9wcm90bzIuY3VycmVudExhYmVsID0gZnVuY3Rpb24gY3VycmVudExhYmVsKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnNlZWsodmFsdWUsIHRydWUpIDogdGhpcy5wcmV2aW91c0xhYmVsKHRoaXMuX3RpbWUgKyBfdGlueU51bSk7XG4gIH07XG5cbiAgX3Byb3RvMi5zaGlmdENoaWxkcmVuID0gZnVuY3Rpb24gc2hpZnRDaGlsZHJlbihhbW91bnQsIGFkanVzdExhYmVscywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgIGlmIChpZ25vcmVCZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGlnbm9yZUJlZm9yZVRpbWUgPSAwO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBsYWJlbHMgPSB0aGlzLmxhYmVscyxcbiAgICAgICAgcDtcbiAgICBhbW91bnQgPSBfcm91bmRQcmVjaXNlKGFtb3VudCk7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBjaGlsZC5fc3RhcnQgKz0gYW1vdW50O1xuICAgICAgICBjaGlsZC5fZW5kICs9IGFtb3VudDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAoYWRqdXN0TGFiZWxzKSB7XG4gICAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICAgIGlmIChsYWJlbHNbcF0gPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICAgIGxhYmVsc1twXSArPSBhbW91bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZShzb2Z0KSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLmludmFsaWRhdGUoc29mdCk7XG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBfQW5pbWF0aW9uLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcywgc29mdCk7XG4gIH07XG5cbiAgX3Byb3RvMi5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKGluY2x1ZGVMYWJlbHMpIHtcbiAgICBpZiAoaW5jbHVkZUxhYmVscyA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmNsdWRlTGFiZWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgbmV4dDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuICAgICAgdGhpcy5yZW1vdmUoY2hpbGQpO1xuICAgICAgY2hpbGQgPSBuZXh0O1xuICAgIH1cblxuICAgIHRoaXMuX2RwICYmICh0aGlzLl90aW1lID0gdGhpcy5fdFRpbWUgPSB0aGlzLl9wVGltZSA9IDApO1xuICAgIGluY2x1ZGVMYWJlbHMgJiYgKHRoaXMubGFiZWxzID0ge30pO1xuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgdmFyIG1heCA9IDAsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBjaGlsZCA9IHNlbGYuX2xhc3QsXG4gICAgICAgIHByZXZTdGFydCA9IF9iaWdOdW0sXG4gICAgICAgIHByZXYsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBwYXJlbnQ7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNlbGYudGltZVNjYWxlKChzZWxmLl9yZXBlYXQgPCAwID8gc2VsZi5kdXJhdGlvbigpIDogc2VsZi50b3RhbER1cmF0aW9uKCkpIC8gKHNlbGYucmV2ZXJzZWQoKSA/IC12YWx1ZSA6IHZhbHVlKSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuX2RpcnR5KSB7XG4gICAgICBwYXJlbnQgPSBzZWxmLnBhcmVudDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHByZXYgPSBjaGlsZC5fcHJldjsgLy9yZWNvcmQgaXQgaGVyZSBpbiBjYXNlIHRoZSB0d2VlbiBjaGFuZ2VzIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS4uLlxuXG4gICAgICAgIGNoaWxkLl9kaXJ0eSAmJiBjaGlsZC50b3RhbER1cmF0aW9uKCk7IC8vY291bGQgY2hhbmdlIHRoZSB0d2Vlbi5fc3RhcnRUaW1lLCBzbyBtYWtlIHN1cmUgdGhlIGFuaW1hdGlvbidzIGNhY2hlIGlzIGNsZWFuIGJlZm9yZSBhbmFseXppbmcgaXQuXG5cbiAgICAgICAgc3RhcnQgPSBjaGlsZC5fc3RhcnQ7XG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gcHJldlN0YXJ0ICYmIHNlbGYuX3NvcnQgJiYgY2hpbGQuX3RzICYmICFzZWxmLl9sb2NrKSB7XG4gICAgICAgICAgLy9pbiBjYXNlIG9uZSBvZiB0aGUgdHdlZW5zIHNoaWZ0ZWQgb3V0IG9mIG9yZGVyLCBpdCBuZWVkcyB0byBiZSByZS1pbnNlcnRlZCBpbnRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZVxuICAgICAgICAgIHNlbGYuX2xvY2sgPSAxOyAvL3ByZXZlbnQgZW5kbGVzcyByZWN1cnNpdmUgY2FsbHMgLSB0aGVyZSBhcmUgbWV0aG9kcyB0aGF0IGdldCB0cmlnZ2VyZWQgdGhhdCBjaGVjayBkdXJhdGlvbi90b3RhbER1cmF0aW9uIHdoZW4gd2UgYWRkKCkuXG5cbiAgICAgICAgICBfYWRkVG9UaW1lbGluZShzZWxmLCBjaGlsZCwgc3RhcnQgLSBjaGlsZC5fZGVsYXksIDEpLl9sb2NrID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2U3RhcnQgPSBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydCA8IDAgJiYgY2hpbGQuX3RzKSB7XG4gICAgICAgICAgLy9jaGlsZHJlbiBhcmVuJ3QgYWxsb3dlZCB0byBoYXZlIG5lZ2F0aXZlIHN0YXJ0VGltZXMgdW5sZXNzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHNvIGFkanVzdCBoZXJlIGlmIG9uZSBpcyBmb3VuZC5cbiAgICAgICAgICBtYXggLT0gc3RhcnQ7XG5cbiAgICAgICAgICBpZiAoIXBhcmVudCAmJiAhc2VsZi5fZHAgfHwgcGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZykge1xuICAgICAgICAgICAgc2VsZi5fc3RhcnQgKz0gX3JvdW5kUHJlY2lzZShzdGFydCAvIHNlbGYuX3RzKTtcbiAgICAgICAgICAgIHNlbGYuX3RpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgICBzZWxmLl90VGltZSAtPSBzdGFydDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLnNoaWZ0Q2hpbGRyZW4oLXN0YXJ0LCBmYWxzZSwgLTFlOTk5KTtcbiAgICAgICAgICBwcmV2U3RhcnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuX2VuZCA+IG1heCAmJiBjaGlsZC5fdHMgJiYgKG1heCA9IGNoaWxkLl9lbmQpO1xuICAgICAgICBjaGlsZCA9IHByZXY7XG4gICAgICB9XG5cbiAgICAgIF9zZXREdXJhdGlvbihzZWxmLCBzZWxmID09PSBfZ2xvYmFsVGltZWxpbmUgJiYgc2VsZi5fdGltZSA+IG1heCA/IHNlbGYuX3RpbWUgOiBtYXgsIDEsIDEpO1xuXG4gICAgICBzZWxmLl9kaXJ0eSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYuX3REdXI7XG4gIH07XG5cbiAgVGltZWxpbmUudXBkYXRlUm9vdCA9IGZ1bmN0aW9uIHVwZGF0ZVJvb3QodGltZSkge1xuICAgIGlmIChfZ2xvYmFsVGltZWxpbmUuX3RzKSB7XG4gICAgICBfbGF6eVNhZmVSZW5kZXIoX2dsb2JhbFRpbWVsaW5lLCBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aW1lLCBfZ2xvYmFsVGltZWxpbmUpKTtcblxuICAgICAgX2xhc3RSZW5kZXJlZEZyYW1lID0gX3RpY2tlci5mcmFtZTtcbiAgICB9XG5cbiAgICBpZiAoX3RpY2tlci5mcmFtZSA+PSBfbmV4dEdDRnJhbWUpIHtcbiAgICAgIF9uZXh0R0NGcmFtZSArPSBfY29uZmlnLmF1dG9TbGVlcCB8fCAxMjA7XG4gICAgICB2YXIgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQuX3RzKSBpZiAoX2NvbmZpZy5hdXRvU2xlZXAgJiYgX3RpY2tlci5fbGlzdGVuZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgd2hpbGUgKGNoaWxkICYmICFjaGlsZC5fdHMpIHtcbiAgICAgICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgfHwgX3RpY2tlci5zbGVlcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVGltZWxpbmU7XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUaW1lbGluZS5wcm90b3R5cGUsIHtcbiAgX2xvY2s6IDAsXG4gIF9oYXNQYXVzZTogMCxcbiAgX2ZvcmNpbmc6IDBcbn0pO1xuXG52YXIgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBudWxsLCBzZXR0ZXIpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydE51bXMsXG4gICAgICBjb2xvcixcbiAgICAgIGVuZE51bSxcbiAgICAgIGNodW5rLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBoYXNSYW5kb20sXG4gICAgICBhO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vZW5zdXJlIHZhbHVlcyBhcmUgc3RyaW5nc1xuXG4gIGVuZCArPSBcIlwiO1xuXG4gIGlmIChoYXNSYW5kb20gPSB+ZW5kLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgfVxuXG4gIGlmIChzdHJpbmdGaWx0ZXIpIHtcbiAgICBhID0gW3N0YXJ0LCBlbmRdO1xuICAgIHN0cmluZ0ZpbHRlcihhLCB0YXJnZXQsIHByb3ApOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuXG5cbiAgICBzdGFydCA9IGFbMF07XG4gICAgZW5kID0gYVsxXTtcbiAgfVxuXG4gIHN0YXJ0TnVtcyA9IHN0YXJ0Lm1hdGNoKF9jb21wbGV4U3RyaW5nTnVtRXhwKSB8fCBbXTtcblxuICB3aGlsZSAocmVzdWx0ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAuZXhlYyhlbmQpKSB7XG4gICAgZW5kTnVtID0gcmVzdWx0WzBdO1xuICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcbiAgICAgIGNvbG9yID0gMTtcbiAgICB9XG5cbiAgICBpZiAoZW5kTnVtICE9PSBzdGFydE51bXNbbWF0Y2hJbmRleCsrXSkge1xuICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0TnVtc1ttYXRjaEluZGV4IC0gMV0pIHx8IDA7IC8vdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuICAgICAgcHQuX3B0ID0ge1xuICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgLy9ub3RlOiBTVkcgc3BlYyBhbGxvd3Mgb21pc3Npb24gb2YgY29tbWEvc3BhY2Ugd2hlbiBhIG5lZ2F0aXZlIHNpZ24gaXMgd2VkZ2VkIGJldHdlZW4gdHdvIG51bWJlcnMsIGxpa2UgMi41LTUuMyBpbnN0ZWFkIG9mIDIuNSwtNS4zIGJ1dCB3aGVuIHR3ZWVuaW5nLCB0aGUgbmVnYXRpdmUgdmFsdWUgbWF5IHN3aXRjaCB0byBwb3NpdGl2ZSwgc28gd2UgaW5zZXJ0IHRoZSBjb21tYSBqdXN0IGluIGNhc2UuXG4gICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICBjOiBlbmROdW0uY2hhckF0KDEpID09PSBcIj1cIiA/IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCBlbmROdW0pIC0gc3RhcnROdW0gOiBwYXJzZUZsb2F0KGVuZE51bSkgLSBzdGFydE51bSxcbiAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0ID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgIH07XG4gICAgICBpbmRleCA9IF9jb21wbGV4U3RyaW5nTnVtRXhwLmxhc3RJbmRleDtcbiAgICB9XG4gIH1cblxuICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG5cbiAgcHQuZnAgPSBmdW5jUGFyYW07XG5cbiAgaWYgKF9yZWxFeHAudGVzdChlbmQpIHx8IGhhc1JhbmRvbSkge1xuICAgIHB0LmUgPSAwOyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcyBvciBkeW5hbWljIHJhbmRvbSguLi4pIHZhbHVlcywgZGVsZXRlIHRoZSBlbmQgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG4gIH1cblxuICB0aGlzLl9wdCA9IHB0OyAvL3N0YXJ0IHRoZSBsaW5rZWQgbGlzdCB3aXRoIHRoaXMgbmV3IFByb3BUd2Vlbi4gUmVtZW1iZXIsIHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFByb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIGluZGV4LCB0YXJnZXRzLCBtb2RpZmllciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0sIG9wdGlvbmFsKSB7XG4gIF9pc0Z1bmN0aW9uKGVuZCkgJiYgKGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQsIHRhcmdldHMpKTtcbiAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRhcmdldFtwcm9wXSxcbiAgICAgIHBhcnNlZFN0YXJ0ID0gc3RhcnQgIT09IFwiZ2V0XCIgPyBzdGFydCA6ICFfaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpID8gY3VycmVudFZhbHVlIDogZnVuY1BhcmFtID8gdGFyZ2V0W3Byb3AuaW5kZXhPZihcInNldFwiKSB8fCAhX2lzRnVuY3Rpb24odGFyZ2V0W1wiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0pID8gcHJvcCA6IFwiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0oZnVuY1BhcmFtKSA6IHRhcmdldFtwcm9wXSgpLFxuICAgICAgc2V0dGVyID0gIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBfc2V0dGVyUGxhaW4gOiBmdW5jUGFyYW0gPyBfc2V0dGVyRnVuY1dpdGhQYXJhbSA6IF9zZXR0ZXJGdW5jLFxuICAgICAgcHQ7XG5cbiAgaWYgKF9pc1N0cmluZyhlbmQpKSB7XG4gICAgaWYgKH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgIGVuZCA9IF9yZXBsYWNlUmFuZG9tKGVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG4gICAgICBwdCA9IF9wYXJzZVJlbGF0aXZlKHBhcnNlZFN0YXJ0LCBlbmQpICsgKGdldFVuaXQocGFyc2VkU3RhcnQpIHx8IDApO1xuXG4gICAgICBpZiAocHQgfHwgcHQgPT09IDApIHtcbiAgICAgICAgLy8gdG8gYXZvaWQgaXNOYU4sIGxpa2UgaWYgc29tZW9uZSBwYXNzZXMgaW4gYSB2YWx1ZSBsaWtlIFwiIT0gd2hhdGV2ZXJcIlxuICAgICAgICBlbmQgPSBwdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIW9wdGlvbmFsIHx8IHBhcnNlZFN0YXJ0ICE9PSBlbmQgfHwgX2ZvcmNlQWxsUHJvcFR3ZWVucykge1xuICAgIGlmICghaXNOYU4ocGFyc2VkU3RhcnQgKiBlbmQpICYmIGVuZCAhPT0gXCJcIikge1xuICAgICAgLy8gZnVuIGZhY3Q6IGFueSBudW1iZXIgbXVsdGlwbGllZCBieSBcIlwiIGlzIGV2YWx1YXRlZCBhcyB0aGUgbnVtYmVyIDAhXG4gICAgICBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldCwgcHJvcCwgK3BhcnNlZFN0YXJ0IHx8IDAsIGVuZCAtIChwYXJzZWRTdGFydCB8fCAwKSwgdHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gXCJib29sZWFuXCIgPyBfcmVuZGVyQm9vbGVhbiA6IF9yZW5kZXJQbGFpbiwgMCwgc2V0dGVyKTtcbiAgICAgIGZ1bmNQYXJhbSAmJiAocHQuZnAgPSBmdW5jUGFyYW0pO1xuICAgICAgbW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHRoaXMsIHRhcmdldCk7XG4gICAgICByZXR1cm4gdGhpcy5fcHQgPSBwdDtcbiAgICB9XG5cbiAgICAhY3VycmVudFZhbHVlICYmICEocHJvcCBpbiB0YXJnZXQpICYmIF9taXNzaW5nUGx1Z2luKHByb3AsIGVuZCk7XG4gICAgcmV0dXJuIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodGhpcywgdGFyZ2V0LCBwcm9wLCBwYXJzZWRTdGFydCwgZW5kLCBzZXR0ZXIsIHN0cmluZ0ZpbHRlciB8fCBfY29uZmlnLnN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKTtcbiAgfVxufSxcbiAgICAvL2NyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2YXJzIG9iamVjdCBhbmQgcHJvY2Vzc2VzIGFueSBmdW5jdGlvbi1iYXNlZCB2YWx1ZXMgKHB1dHRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgZGlyZWN0bHkgaW50byB0aGUgY29weSkgYXMgd2VsbCBhcyBzdHJpbmdzIHdpdGggXCJyYW5kb20oKVwiIGluIHRoZW0uIEl0IGRvZXMgTk9UIHByb2Nlc3MgcmVsYXRpdmUgdmFsdWVzLlxuX3Byb2Nlc3NWYXJzID0gZnVuY3Rpb24gX3Byb2Nlc3NWYXJzKHZhcnMsIGluZGV4LCB0YXJnZXQsIHRhcmdldHMsIHR3ZWVuKSB7XG4gIF9pc0Z1bmN0aW9uKHZhcnMpICYmICh2YXJzID0gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSk7XG5cbiAgaWYgKCFfaXNPYmplY3QodmFycykgfHwgdmFycy5zdHlsZSAmJiB2YXJzLm5vZGVUeXBlIHx8IF9pc0FycmF5KHZhcnMpIHx8IF9pc1R5cGVkQXJyYXkodmFycykpIHtcbiAgICByZXR1cm4gX2lzU3RyaW5nKHZhcnMpID8gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSA6IHZhcnM7XG4gIH1cblxuICB2YXIgY29weSA9IHt9LFxuICAgICAgcDtcblxuICBmb3IgKHAgaW4gdmFycykge1xuICAgIGNvcHlbcF0gPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFyc1twXSwgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIF9jaGVja1BsdWdpbiA9IGZ1bmN0aW9uIF9jaGVja1BsdWdpbihwcm9wZXJ0eSwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIHtcbiAgdmFyIHBsdWdpbiwgcHQsIHB0TG9va3VwLCBpO1xuXG4gIGlmIChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgKHBsdWdpbiA9IG5ldyBfcGx1Z2luc1twcm9wZXJ0eV0oKSkuaW5pdCh0YXJnZXQsIHBsdWdpbi5yYXdWYXJzID8gdmFyc1twcm9wZXJ0eV0gOiBfcHJvY2Vzc1ZhcnModmFyc1twcm9wZXJ0eV0sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMsIHR3ZWVuKSwgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSAhPT0gZmFsc2UpIHtcbiAgICB0d2Vlbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4odHdlZW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBwbHVnaW4ucmVuZGVyLCBwbHVnaW4sIDAsIHBsdWdpbi5wcmlvcml0eSk7XG5cbiAgICBpZiAodHdlZW4gIT09IF9xdWlja1R3ZWVuKSB7XG4gICAgICBwdExvb2t1cCA9IHR3ZWVuLl9wdExvb2t1cFt0d2Vlbi5fdGFyZ2V0cy5pbmRleE9mKHRhcmdldCldOyAvL25vdGU6IHdlIGNhbid0IHVzZSB0d2Vlbi5fcHRMb29rdXBbaW5kZXhdIGJlY2F1c2UgZm9yIHN0YWdnZXJlZCB0d2VlbnMsIHRoZSBpbmRleCBmcm9tIHRoZSBmdWxsVGFyZ2V0cyBhcnJheSB3b24ndCBtYXRjaCB3aGF0IGl0IGlzIGluIGVhY2ggaW5kaXZpZHVhbCB0d2VlbiB0aGF0IHNwYXducyBmcm9tIHRoZSBzdGFnZ2VyLlxuXG4gICAgICBpID0gcGx1Z2luLl9wcm9wcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgcHRMb29rdXBbcGx1Z2luLl9wcm9wc1tpXV0gPSBwdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGx1Z2luO1xufSxcbiAgICBfb3ZlcndyaXRpbmdUd2VlbixcbiAgICAvL3N0b3JlIGEgcmVmZXJlbmNlIHRlbXBvcmFyaWx5IHNvIHdlIGNhbiBhdm9pZCBvdmVyd3JpdGluZyBpdHNlbGYuXG5fZm9yY2VBbGxQcm9wVHdlZW5zLFxuICAgIF9pbml0VHdlZW4gPSBmdW5jdGlvbiBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lLCB0VGltZSkge1xuICB2YXIgdmFycyA9IHR3ZWVuLnZhcnMsXG4gICAgICBlYXNlID0gdmFycy5lYXNlLFxuICAgICAgc3RhcnRBdCA9IHZhcnMuc3RhcnRBdCxcbiAgICAgIGltbWVkaWF0ZVJlbmRlciA9IHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgbGF6eSA9IHZhcnMubGF6eSxcbiAgICAgIG9uVXBkYXRlID0gdmFycy5vblVwZGF0ZSxcbiAgICAgIHJ1bkJhY2t3YXJkcyA9IHZhcnMucnVuQmFja3dhcmRzLFxuICAgICAgeW95b0Vhc2UgPSB2YXJzLnlveW9FYXNlLFxuICAgICAga2V5ZnJhbWVzID0gdmFycy5rZXlmcmFtZXMsXG4gICAgICBhdXRvUmV2ZXJ0ID0gdmFycy5hdXRvUmV2ZXJ0LFxuICAgICAgZHVyID0gdHdlZW4uX2R1cixcbiAgICAgIHByZXZTdGFydEF0ID0gdHdlZW4uX3N0YXJ0QXQsXG4gICAgICB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwYXJlbnQgPSB0d2Vlbi5wYXJlbnQsXG4gICAgICBmdWxsVGFyZ2V0cyA9IHBhcmVudCAmJiBwYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIiA/IHBhcmVudC52YXJzLnRhcmdldHMgOiB0YXJnZXRzLFxuICAgICAgYXV0b092ZXJ3cml0ZSA9IHR3ZWVuLl9vdmVyd3JpdGUgPT09IFwiYXV0b1wiICYmICFfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgICAgdGwgPSB0d2Vlbi50aW1lbGluZSxcbiAgICAgIHJldmVyc2VFYXNlID0gdmFycy5lYXNlUmV2ZXJzZSB8fCB5b3lvRWFzZSxcbiAgICAgIGNsZWFuVmFycyxcbiAgICAgIGksXG4gICAgICBwLFxuICAgICAgcHQsXG4gICAgICB0YXJnZXQsXG4gICAgICBoYXNQcmlvcml0eSxcbiAgICAgIGdzRGF0YSxcbiAgICAgIGhhcm5lc3MsXG4gICAgICBwbHVnaW4sXG4gICAgICBwdExvb2t1cCxcbiAgICAgIGluZGV4LFxuICAgICAgaGFybmVzc1ZhcnMsXG4gICAgICBvdmVyd3JpdHRlbjtcbiAgdGwgJiYgKCFrZXlmcmFtZXMgfHwgIWVhc2UpICYmIChlYXNlID0gXCJub25lXCIpO1xuICB0d2Vlbi5fZWFzZSA9IF9wYXJzZUVhc2UoZWFzZSwgX2RlZmF1bHRzLmVhc2UpO1xuICB0d2Vlbi5fckVhc2UgPSByZXZlcnNlRWFzZSAmJiAoX3BhcnNlRWFzZShyZXZlcnNlRWFzZSkgfHwgdHdlZW4uX2Vhc2UpO1xuICB0d2Vlbi5fZnJvbSA9ICF0bCAmJiAhIXZhcnMucnVuQmFja3dhcmRzOyAvL25lc3RlZCB0aW1lbGluZXMgc2hvdWxkIG5ldmVyIHJ1biBiYWNrd2FyZHMgLSB0aGUgYmFja3dhcmRzLW5lc3MgaXMgaW4gdGhlIGNoaWxkIHR3ZWVucy5cblxuICBpZiAodHdlZW4uX2Zyb20pIHR3ZWVuLnJhdGlvID0gMTtcblxuICBpZiAoIXRsIHx8IGtleWZyYW1lcyAmJiAhdmFycy5zdGFnZ2VyKSB7XG4gICAgLy9pZiB0aGVyZSdzIGFuIGludGVybmFsIHRpbWVsaW5lLCBza2lwIGFsbCB0aGUgcGFyc2luZyBiZWNhdXNlIHdlIHBhc3NlZCB0aGF0IHRhc2sgZG93biB0aGUgY2hhaW4uXG4gICAgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDA7XG4gICAgaGFybmVzc1ZhcnMgPSBoYXJuZXNzICYmIHZhcnNbaGFybmVzcy5wcm9wXTsgLy9zb21lb25lIG1heSBuZWVkIHRvIHNwZWNpZnkgQ1NTLXNwZWNpZmljIHZhbHVlcyBBTkQgbm9uLUNTUyB2YWx1ZXMsIGxpa2UgaWYgdGhlIGVsZW1lbnQgaGFzIGFuIFwieFwiIHByb3BlcnR5IHBsdXMgaXQncyBhIHN0YW5kYXJkIERPTSBlbGVtZW50LiBXZSBhbGxvdyBwZW9wbGUgdG8gZGlzdGluZ3Vpc2ggYnkgd3JhcHBpbmcgcGx1Z2luLXNwZWNpZmljIHN0dWZmIGluIGEgY3NzOnt9IG9iamVjdCBmb3IgZXhhbXBsZS5cblxuICAgIGNsZWFuVmFycyA9IF9jb3B5RXhjbHVkaW5nKHZhcnMsIF9yZXNlcnZlZFByb3BzKTtcblxuICAgIGlmIChwcmV2U3RhcnRBdCkge1xuICAgICAgcHJldlN0YXJ0QXQuX3pUaW1lIDwgMCAmJiBwcmV2U3RhcnRBdC5wcm9ncmVzcygxKTsgLy8gaW4gY2FzZSBpdCdzIGEgbGF6eSBzdGFydEF0IHRoYXQgaGFzbid0IHJlbmRlcmVkIHlldC5cblxuICAgICAgdGltZSA8IDAgJiYgcnVuQmFja3dhcmRzICYmIGltbWVkaWF0ZVJlbmRlciAmJiAhYXV0b1JldmVydCA/IHByZXZTdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSkgOiBwcmV2U3RhcnRBdC5yZXZlcnQocnVuQmFja3dhcmRzICYmIGR1ciA/IF9yZXZlcnRDb25maWdOb0tpbGwgOiBfc3RhcnRBdFJldmVydENvbmZpZyk7IC8vIGlmIGl0J3MgYSBcInN0YXJ0QXRcIiAobm90IFwiZnJvbSgpXCIgb3IgcnVuQmFja3dhcmRzOiB0cnVlKSwgd2Ugb25seSBuZWVkIHRvIGRvIGEgc2hhbGxvdyByZXZlcnQgKGtlZXAgdHJhbnNmb3JtcyBjYWNoZWQgaW4gQ1NTUGx1Z2luKVxuICAgICAgLy8gZG9uJ3QganVzdCBfcmVtb3ZlRnJvbVBhcmVudChwcmV2U3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpKSBiZWNhdXNlIHRoYXQnbGwgbGVhdmUgaW5saW5lIHN0eWxlcy4gV2UncmUgY3JlYXRpbmcgYSBuZXcgX3N0YXJ0QXQgZm9yIFwic3RhcnRBdFwiIHR3ZWVucyB0aGF0IHJlLWNhcHR1cmUgdGhpbmdzIHRvIGVuc3VyZSB0aGF0IGlmIHRoZSBwcmUtdHdlZW4gdmFsdWVzIGNoYW5nZWQgc2luY2UgdGhlIHR3ZWVuIHdhcyBjcmVhdGVkLCB0aGV5J3JlIHJlY29yZGVkLlxuXG4gICAgICBwcmV2U3RhcnRBdC5fbGF6eSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0QXQpIHtcbiAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgIGRhdGE6IFwiaXNTdGFydFwiLFxuICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiB0cnVlLFxuICAgICAgICBsYXp5OiAhcHJldlN0YXJ0QXQgJiYgX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgIHN0YXJ0QXQ6IG51bGwsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBvblVwZGF0ZTogb25VcGRhdGUgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfY2FsbGJhY2sodHdlZW4sIFwib25VcGRhdGVcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YWdnZXI6IDBcbiAgICAgIH0sIHN0YXJ0QXQpKSk7IC8vY29weSB0aGUgcHJvcGVydGllcy92YWx1ZXMgaW50byBhIG5ldyBvYmplY3QgdG8gYXZvaWQgY29sbGlzaW9ucywgbGlrZSB2YXIgdG8gPSB7eDowfSwgZnJvbSA9IHt4OjUwMH07IHRpbWVsaW5lLmZyb21UbyhlLCBmcm9tLCB0bykuZnJvbVRvKGUsIHRvLCBmcm9tKTtcblxuXG4gICAgICB0d2Vlbi5fc3RhcnRBdC5fZHAgPSAwOyAvLyBkb24ndCBhbGxvdyBpdCB0byBnZXQgcHV0IGJhY2sgaW50byByb290IHRpbWVsaW5lISBMaWtlIHdoZW4gcmV2ZXJ0KCkgaXMgY2FsbGVkIGFuZCB0b3RhbFRpbWUoKSBnZXRzIHNldC5cblxuICAgICAgdHdlZW4uX3N0YXJ0QXQuX3NhdCA9IHR3ZWVuOyAvLyB1c2VkIGluIGdsb2JhbFRpbWUoKS4gX3NhdCBzdGFuZHMgZm9yIF9zdGFydEF0VHdlZW5cblxuICAgICAgdGltZSA8IDAgJiYgKF9yZXZlcnRpbmcgfHwgIWltbWVkaWF0ZVJlbmRlciAmJiAhYXV0b1JldmVydCkgJiYgdHdlZW4uX3N0YXJ0QXQucmV2ZXJ0KF9yZXZlcnRDb25maWdOb0tpbGwpOyAvLyByYXJlIGVkZ2UgY2FzZSwgbGlrZSBpZiBhIHJlbmRlciBpcyBmb3JjZWQgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiBhIG5vbi1pbml0dGVkIHR3ZWVuLlxuXG4gICAgICBpZiAoaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgIGlmIChkdXIgJiYgdGltZSA8PSAwICYmIHRUaW1lIDw9IDApIHtcbiAgICAgICAgICAvLyBjaGVjayB0VGltZSBoZXJlIGJlY2F1c2UgaW4gdGhlIGNhc2Ugb2YgYSB5b3lvIHR3ZWVuIHdob3NlIHBsYXloZWFkIGdldHMgcHVzaGVkIHRvIHRoZSBlbmQgbGlrZSB0d2Vlbi5wcm9ncmVzcygxKSwgd2Ugc2hvdWxkIGFsbG93IGl0IHRocm91Z2ggc28gdGhhdCB0aGUgb25Db21wbGV0ZSBnZXRzIGZpcmVkIHByb3Blcmx5LlxuICAgICAgICAgIHRpbWUgJiYgKHR3ZWVuLl96VGltZSA9IHRpbWUpO1xuICAgICAgICAgIHJldHVybjsgLy93ZSBza2lwIGluaXRpYWxpemF0aW9uIGhlcmUgc28gdGhhdCBvdmVyd3JpdGluZyBkb2Vzbid0IG9jY3VyIHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMuIE90aGVyd2lzZSwgaWYgeW91IGNyZWF0ZSBzZXZlcmFsIGltbWVkaWF0ZVJlbmRlcjp0cnVlIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQvcHJvcGVydGllcyB0byBkcm9wIGludG8gYSBUaW1lbGluZSwgdGhlIGxhc3Qgb25lIGNyZWF0ZWQgd291bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmVzIGJlY2F1c2UgdGhleSBkaWRuJ3QgZ2V0IHBsYWNlZCBpbnRvIHRoZSB0aW1lbGluZSB5ZXQgYmVmb3JlIHRoZSBmaXJzdCByZW5kZXIgb2NjdXJzIGFuZCBraWNrcyBpbiBvdmVyd3JpdGluZy5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnVuQmFja3dhcmRzICYmIGR1cikge1xuICAgICAgLy8gZnJvbSgpIHR3ZWVucyBtdXN0IGJlIGhhbmRsZWQgdW5pcXVlbHk6IHRoZWlyIGJlZ2lubmluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZCBidXQgd2UgZG9uJ3Qgd2FudCBvdmVyd3JpdGluZyB0byBvY2N1ciB5ZXQgKHdoZW4gdGltZSBpcyBzdGlsbCAwKS4gV2FpdCB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zIGJlZm9yZSBkb2luZyBhbGwgdGhlIHJvdXRpbmVzIGxpa2Ugb3ZlcndyaXRpbmcuIEF0IHRoYXQgdGltZSwgd2Ugc2hvdWxkIHJlbmRlciBhdCB0aGUgRU5EIG9mIHRoZSB0d2VlbiB0byBlbnN1cmUgdGhhdCB0aGluZ3MgaW5pdGlhbGl6ZSBjb3JyZWN0bHkgKHJlbWVtYmVyLCBmcm9tKCkgdHdlZW5zIGdvIGJhY2t3YXJkcylcbiAgICAgIGlmICghcHJldlN0YXJ0QXQpIHtcbiAgICAgICAgdGltZSAmJiAoaW1tZWRpYXRlUmVuZGVyID0gZmFsc2UpOyAvL2luIHJhcmUgY2FzZXMgKGxpa2UgaWYgYSBmcm9tKCkgdHdlZW4gcnVucyBhbmQgdGhlbiBpcyBpbnZhbGlkYXRlKCktZWQpLCBpbW1lZGlhdGVSZW5kZXIgY291bGQgYmUgdHJ1ZSBidXQgdGhlIGluaXRpYWwgZm9yY2VkLXJlbmRlciBnZXRzIHNraXBwZWQsIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSB0aGUgcmVuZGVyIGluIHRoaXMgY29udGV4dCB3aGVuIHRoZSBfdGltZSBpcyBncmVhdGVyIHRoYW4gMFxuXG4gICAgICAgIHAgPSBfc2V0RGVmYXVsdHMoe1xuICAgICAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICAgICAgZGF0YTogXCJpc0Zyb21TdGFydFwiLFxuICAgICAgICAgIC8vd2UgdGFnIHRoZSB0d2VlbiB3aXRoIGFzIFwiaXNGcm9tU3RhcnRcIiBzbyB0aGF0IGlmIFtpbnNpZGUgYSBwbHVnaW5dIHdlIG5lZWQgdG8gb25seSBkbyBzb21ldGhpbmcgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4sIHdlIGhhdmUgYSB3YXkgb2YgaWRlbnRpZnlpbmcgdGhpcyB0d2VlbiBhcyBtZXJlbHkgdGhlIG9uZSB0aGF0J3Mgc2V0dGluZyB0aGUgYmVnaW5uaW5nIHZhbHVlcyBmb3IgYSBcImZyb20oKVwiIHR3ZWVuLiBGb3IgZXhhbXBsZSwgY2xlYXJQcm9wcyBpbiBDU1NQbHVnaW4gc2hvdWxkIG9ubHkgZ2V0IGFwcGxpZWQgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4gYW5kIHdpdGhvdXQgdGhpcyB0YWcsIGZyb20oLi4ue2hlaWdodDoxMDAsIGNsZWFyUHJvcHM6XCJoZWlnaHRcIiwgZGVsYXk6MX0pIHdvdWxkIHdpcGUgdGhlIGhlaWdodCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0d2VlbiBhbmQgYWZ0ZXIgMSBzZWNvbmQsIGl0J2Qga2ljayBiYWNrIGluLlxuICAgICAgICAgIGxhenk6IGltbWVkaWF0ZVJlbmRlciAmJiAhcHJldlN0YXJ0QXQgJiYgX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiBpbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgICAgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyByZW5kZXIgaW1tZWRpYXRlbHkgYnkgZGVmYXVsdCwgYnV0IGlmIHdlJ3JlIG5vdCBzcGVjaWZpY2FsbHkgaW5zdHJ1Y3RlZCB0byByZW5kZXIgdGhpcyB0d2VlbiBpbW1lZGlhdGVseSwgd2Ugc2hvdWxkIHNraXAgdGhpcyBhbmQgbWVyZWx5IF9pbml0KCkgdG8gcmVjb3JkIHRoZSBzdGFydGluZyB2YWx1ZXMgKHJlbmRlcmluZyB0aGVtIGltbWVkaWF0ZWx5IHdvdWxkIHB1c2ggdGhlbSB0byBjb21wbGV0aW9uIHdoaWNoIGlzIHdhc3RlZnVsIGluIHRoYXQgY2FzZSAtIHdlJ2QgaGF2ZSB0byByZW5kZXIoLTEpIGltbWVkaWF0ZWx5IGFmdGVyKVxuICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQgLy9lbnN1cmVzIHRoYXQgbmVzdGVkIHR3ZWVucyB0aGF0IGhhZCBhIHN0YWdnZXIgYXJlIGhhbmRsZWQgcHJvcGVybHksIGxpa2UgZ3NhcC5mcm9tKFwiLmNsYXNzXCIsIHt5OiBnc2FwLnV0aWxzLndyYXAoWy0xMDAsMTAwXSksIHN0YWdnZXI6IDAuNX0pXG5cbiAgICAgICAgfSwgY2xlYW5WYXJzKTtcbiAgICAgICAgaGFybmVzc1ZhcnMgJiYgKHBbaGFybmVzcy5wcm9wXSA9IGhhcm5lc3NWYXJzKTsgLy8gaW4gY2FzZSBzb21lb25lIGRvZXMgc29tZXRoaW5nIGxpa2UgLmZyb20oLi4uLCB7Y3NzOnt9fSlcblxuICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBwKSk7XG5cbiAgICAgICAgdHdlZW4uX3N0YXJ0QXQuX2RwID0gMDsgLy8gZG9uJ3QgYWxsb3cgaXQgdG8gZ2V0IHB1dCBiYWNrIGludG8gcm9vdCB0aW1lbGluZSFcblxuICAgICAgICB0d2Vlbi5fc3RhcnRBdC5fc2F0ID0gdHdlZW47IC8vIHVzZWQgaW4gZ2xvYmFsVGltZSgpXG5cbiAgICAgICAgdGltZSA8IDAgJiYgKF9yZXZlcnRpbmcgPyB0d2Vlbi5fc3RhcnRBdC5yZXZlcnQoX3JldmVydENvbmZpZ05vS2lsbCkgOiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpKTtcbiAgICAgICAgdHdlZW4uX3pUaW1lID0gdGltZTtcblxuICAgICAgICBpZiAoIWltbWVkaWF0ZVJlbmRlcikge1xuICAgICAgICAgIF9pbml0VHdlZW4odHdlZW4uX3N0YXJ0QXQsIF90aW55TnVtLCBfdGlueU51bSk7IC8vZW5zdXJlcyB0aGF0IHRoZSBpbml0aWFsIHZhbHVlcyBhcmUgcmVjb3JkZWRcblxuICAgICAgICB9IGVsc2UgaWYgKCF0aW1lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHdlZW4uX3B0ID0gdHdlZW4uX3B0Q2FjaGUgPSAwO1xuICAgIGxhenkgPSBkdXIgJiYgX2lzTm90RmFsc2UobGF6eSkgfHwgbGF6eSAmJiAhZHVyO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldHNbaV07XG4gICAgICBnc0RhdGEgPSB0YXJnZXQuX2dzYXAgfHwgX2hhcm5lc3ModGFyZ2V0cylbaV0uX2dzYXA7XG4gICAgICB0d2Vlbi5fcHRMb29rdXBbaV0gPSBwdExvb2t1cCA9IHt9O1xuICAgICAgX2xhenlMb29rdXBbZ3NEYXRhLmlkXSAmJiBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTsgLy9pZiBvdGhlciB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0IGhhdmUgcmVjZW50bHkgaW5pdHRlZCBidXQgaGF2ZW4ndCByZW5kZXJlZCB5ZXQsIHdlJ3ZlIGdvdCB0byBmb3JjZSB0aGUgcmVuZGVyIHNvIHRoYXQgdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcmUgY29ycmVjdCAoaW1hZ2luZSBwb3B1bGF0aW5nIGEgdGltZWxpbmUgd2l0aCBhIGJ1bmNoIG9mIHNlcXVlbnRpYWwgdHdlZW5zIGFuZCB0aGVuIGp1bXBpbmcgdG8gdGhlIGVuZClcblxuICAgICAgaW5kZXggPSBmdWxsVGFyZ2V0cyA9PT0gdGFyZ2V0cyA/IGkgOiBmdWxsVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgIGlmIChoYXJuZXNzICYmIChwbHVnaW4gPSBuZXcgaGFybmVzcygpKS5pbml0KHRhcmdldCwgaGFybmVzc1ZhcnMgfHwgY2xlYW5WYXJzLCB0d2VlbiwgaW5kZXgsIGZ1bGxUYXJnZXRzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwbHVnaW4ubmFtZSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgICAgIHBsdWdpbi5fcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHB0TG9va3VwW25hbWVdID0gcHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXJuZXNzIHx8IGhhcm5lc3NWYXJzKSB7XG4gICAgICAgIGZvciAocCBpbiBjbGVhblZhcnMpIHtcbiAgICAgICAgICBpZiAoX3BsdWdpbnNbcF0gJiYgKHBsdWdpbiA9IF9jaGVja1BsdWdpbihwLCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCBmdWxsVGFyZ2V0cykpKSB7XG4gICAgICAgICAgICBwbHVnaW4ucHJpb3JpdHkgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHB0TG9va3VwW3BdID0gcHQgPSBfYWRkUHJvcFR3ZWVuLmNhbGwodHdlZW4sIHRhcmdldCwgcCwgXCJnZXRcIiwgY2xlYW5WYXJzW3BdLCBpbmRleCwgZnVsbFRhcmdldHMsIDAsIHZhcnMuc3RyaW5nRmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHdlZW4uX29wICYmIHR3ZWVuLl9vcFtpXSAmJiB0d2Vlbi5raWxsKHRhcmdldCwgdHdlZW4uX29wW2ldKTtcblxuICAgICAgaWYgKGF1dG9PdmVyd3JpdGUgJiYgdHdlZW4uX3B0KSB7XG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gdHdlZW47XG5cbiAgICAgICAgX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXQsIHB0TG9va3VwLCB0d2Vlbi5nbG9iYWxUaW1lKHRpbWUpKTsgLy8gbWFrZSBzdXJlIHRoZSBvdmVyd3JpdGluZyBkb2Vzbid0IG92ZXJ3cml0ZSBUSElTIHR3ZWVuISEhXG5cblxuICAgICAgICBvdmVyd3JpdHRlbiA9ICF0d2Vlbi5wYXJlbnQ7XG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICAgIH1cblxuICAgICAgdHdlZW4uX3B0ICYmIGxhenkgJiYgKF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gPSAxKTtcbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHR3ZWVuKTtcbiAgICB0d2Vlbi5fb25Jbml0ICYmIHR3ZWVuLl9vbkluaXQodHdlZW4pOyAvL3BsdWdpbnMgbGlrZSBSb3VuZFByb3BzIG11c3Qgd2FpdCB1bnRpbCBBTEwgb2YgdGhlIFByb3BUd2VlbnMgYXJlIGluc3RhbnRpYXRlZC4gSW4gdGhlIHBsdWdpbidzIGluaXQoKSBmdW5jdGlvbiwgaXQgc2V0cyB0aGUgX29uSW5pdCBvbiB0aGUgdHdlZW4gaW5zdGFuY2UuIE1heSBub3QgYmUgcHJldHR5L2ludHVpdGl2ZSwgYnV0IGl0J3MgZmFzdCBhbmQga2VlcHMgZmlsZSBzaXplIGRvd24uXG4gIH1cblxuICB0d2Vlbi5fb25VcGRhdGUgPSBvblVwZGF0ZTtcbiAgdHdlZW4uX2luaXR0ZWQgPSAoIXR3ZWVuLl9vcCB8fCB0d2Vlbi5fcHQpICYmICFvdmVyd3JpdHRlbjsgLy8gaWYgb3ZlcndyaXR0ZW5Qcm9wcyByZXN1bHRlZCBpbiB0aGUgZW50aXJlIHR3ZWVuIGJlaW5nIGtpbGxlZCwgZG8gTk9UIGZsYWcgaXQgYXMgaW5pdHRlZCBvciBlbHNlIGl0IG1heSByZW5kZXIgZm9yIG9uZSB0aWNrLlxuXG4gIGtleWZyYW1lcyAmJiB0aW1lIDw9IDAgJiYgdGwucmVuZGVyKF9iaWdOdW0sIHRydWUsIHRydWUpOyAvLyBpZiB0aGVyZSdzIGEgMCUga2V5ZnJhbWUsIGl0J2xsIHJlbmRlciBpbiB0aGUgXCJiZWZvcmVcIiBzdGF0ZSBmb3IgYW55IHN0YWdnZXJlZC9kZWxheWVkIGFuaW1hdGlvbnMgdGh1cyB3aGVuIHRoZSBmb2xsb3dpbmcgdHdlZW4gaW5pdGlhbGl6ZXMsIGl0J2xsIHVzZSB0aGUgXCJiZWZvcmVcIiBzdGF0ZSBpbnN0ZWFkIG9mIHRoZSBcImFmdGVyXCIgc3RhdGUgYXMgdGhlIGluaXRpYWwgdmFsdWVzLlxufSxcbiAgICBfdXBkYXRlUHJvcFR3ZWVucyA9IGZ1bmN0aW9uIF91cGRhdGVQcm9wVHdlZW5zKHR3ZWVuLCBwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUsIHJhdGlvLCB0aW1lLCBza2lwUmVjdXJzaW9uKSB7XG4gIHZhciBwdENhY2hlID0gKHR3ZWVuLl9wdCAmJiB0d2Vlbi5fcHRDYWNoZSB8fCAodHdlZW4uX3B0Q2FjaGUgPSB7fSkpW3Byb3BlcnR5XSxcbiAgICAgIHB0LFxuICAgICAgcm9vdFBULFxuICAgICAgbG9va3VwLFxuICAgICAgaTtcblxuICBpZiAoIXB0Q2FjaGUpIHtcbiAgICBwdENhY2hlID0gdHdlZW4uX3B0Q2FjaGVbcHJvcGVydHldID0gW107XG4gICAgbG9va3VwID0gdHdlZW4uX3B0TG9va3VwO1xuICAgIGkgPSB0d2Vlbi5fdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwdCA9IGxvb2t1cFtpXVtwcm9wZXJ0eV07XG5cbiAgICAgIGlmIChwdCAmJiBwdC5kICYmIHB0LmQuX3B0KSB7XG4gICAgICAgIC8vIGl0J3MgYSBwbHVnaW4sIHNvIGZpbmQgdGhlIG5lc3RlZCBQcm9wVHdlZW5cbiAgICAgICAgcHQgPSBwdC5kLl9wdDtcblxuICAgICAgICB3aGlsZSAocHQgJiYgcHQucCAhPT0gcHJvcGVydHkgJiYgcHQuZnAgIT09IHByb3BlcnR5KSB7XG4gICAgICAgICAgLy8gXCJmcFwiIGlzIGZ1bmN0aW9uUGFyYW0gZm9yIHRoaW5ncyBsaWtlIHNldHRpbmcgQ1NTIHZhcmlhYmxlcyB3aGljaCByZXF1aXJlIC5zZXRQcm9wZXJ0eShcIi0tdmFyLW5hbWVcIiwgdmFsdWUpXG4gICAgICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXB0KSB7XG4gICAgICAgIC8vIHRoZXJlIGlzIG5vIFByb3BUd2VlbiBhc3NvY2lhdGVkIHdpdGggdGhhdCBwcm9wZXJ0eSwgc28gd2UgbXVzdCBGT1JDRSBvbmUgdG8gYmUgY3JlYXRlZCBhbmQgZGl0Y2ggb3V0IG9mIHRoaXNcbiAgICAgICAgLy8gaWYgdGhlIHR3ZWVuIGhhcyBvdGhlciBwcm9wZXJ0aWVzIHRoYXQgYWxyZWFkeSByZW5kZXJlZCBhdCBuZXcgcG9zaXRpb25zLCB3ZSdkIG5vcm1hbGx5IGhhdmUgdG8gcmV3aW5kIHRvIHB1dCB0aGVtIGJhY2sgbGlrZSB0d2Vlbi5yZW5kZXIoMCwgdHJ1ZSkgYmVmb3JlIGZvcmNpbmcgYW4gX2luaXRUd2VlbigpLCBidXQgdGhhdCBjYW4gY3JlYXRlIGFub3RoZXIgZWRnZSBjYXNlIGxpa2UgdHdlZW5pbmcgYSB0aW1lbGluZSdzIHByb2dyZXNzIHdvdWxkIHRyaWdnZXIgb25VcGRhdGVzIHRvIGZpcmUgd2hpY2ggY291bGQgbW92ZSBvdGhlciB0aGluZ3MgYXJvdW5kLiBJdCdzIGJldHRlciB0byBqdXN0IGluZm9ybSB1c2VycyB0aGF0IC5yZXNldFRvKCkgc2hvdWxkIE9OTFkgYmUgdXNlZCBmb3IgdHdlZW5zIHRoYXQgYWxyZWFkeSBoYXZlIHRoYXQgcHJvcGVydHkuIEZvciBleGFtcGxlLCB5b3UgY2FuJ3QgZ3NhcC50byguLi57IHk6IDAgfSkgYW5kIHRoZW4gdHdlZW4ucmVzdFRvKFwieFwiLCAyMDApIGZvciBleGFtcGxlLlxuICAgICAgICBfZm9yY2VBbGxQcm9wVHdlZW5zID0gMTsgLy8gb3RoZXJ3aXNlLCB3aGVuIHdlIF9hZGRQcm9wVHdlZW4oKSBhbmQgaXQgZmluZHMgbm8gY2hhbmdlIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgdmFsdWVzLCBpdCBza2lwcyBjcmVhdGluZyBhIFByb3BUd2VlbiAoZm9yIGVmZmljaWVuY3kuLi53aHkgdHdlZW4gd2hlbiB0aGVyZSdzIG5vIGRpZmZlcmVuY2U/KSBidXQgaW4gdGhpcyBjYXNlIHdlIE5FRUQgdGhhdCBQcm9wVHdlZW4gY3JlYXRlZCBzbyB3ZSBjYW4gZWRpdCBpdC5cblxuICAgICAgICB0d2Vlbi52YXJzW3Byb3BlcnR5XSA9IFwiKz0wXCI7XG5cbiAgICAgICAgX2luaXRUd2Vlbih0d2VlbiwgdGltZSk7XG5cbiAgICAgICAgX2ZvcmNlQWxsUHJvcFR3ZWVucyA9IDA7XG4gICAgICAgIHJldHVybiBza2lwUmVjdXJzaW9uID8gX3dhcm4ocHJvcGVydHkgKyBcIiBub3QgZWxpZ2libGUgZm9yIHJlc2V0LiBUcnkgc3BsaXR0aW5nIGludG8gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXCIpIDogMTsgLy8gaWYgc29tZW9uZSB0cmllcyB0byBkbyBhIHF1aWNrVG8oKSBvbiBhIHNwZWNpYWwgcHJvcGVydHkgbGlrZSBib3JkZXJSYWRpdXMgd2hpY2ggbXVzdCBnZXQgc3BsaXQgaW50byA0IGRpZmZlcmVudCBwcm9wZXJ0aWVzLCB0aGF0J3Mgbm90IGVsaWdpYmxlIGZvciAucmVzZXRUbygpLlxuICAgICAgfVxuXG4gICAgICBwdENhY2hlLnB1c2gocHQpO1xuICAgIH1cbiAgfVxuXG4gIGkgPSBwdENhY2hlLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgcm9vdFBUID0gcHRDYWNoZVtpXTtcbiAgICBwdCA9IHJvb3RQVC5fcHQgfHwgcm9vdFBUOyAvLyBjb21wbGV4IHZhbHVlcyBtYXkgaGF2ZSBuZXN0ZWQgUHJvcFR3ZWVucy4gV2Ugb25seSBhY2NvbW1vZGF0ZSB0aGUgRklSU1QgdmFsdWUuXG5cbiAgICBwdC5zID0gKHN0YXJ0IHx8IHN0YXJ0ID09PSAwKSAmJiAhc3RhcnRJc1JlbGF0aXZlID8gc3RhcnQgOiBwdC5zICsgKHN0YXJ0IHx8IDApICsgcmF0aW8gKiBwdC5jO1xuICAgIHB0LmMgPSB2YWx1ZSAtIHB0LnM7XG4gICAgcm9vdFBULmUgJiYgKHJvb3RQVC5lID0gX3JvdW5kKHZhbHVlKSArIGdldFVuaXQocm9vdFBULmUpKTsgLy8gbWFpbmx5IGZvciBDU1NQbHVnaW4gKGVuZCB2YWx1ZSlcblxuICAgIHJvb3RQVC5iICYmIChyb290UFQuYiA9IHB0LnMgKyBnZXRVbml0KHJvb3RQVC5iKSk7IC8vIChiZWdpbm5pbmcgdmFsdWUpXG4gIH1cbn0sXG4gICAgX2FkZEFsaWFzZXNUb1ZhcnMgPSBmdW5jdGlvbiBfYWRkQWxpYXNlc1RvVmFycyh0YXJnZXRzLCB2YXJzKSB7XG4gIHZhciBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMCxcbiAgICAgIHByb3BlcnR5QWxpYXNlcyA9IGhhcm5lc3MgJiYgaGFybmVzcy5hbGlhc2VzLFxuICAgICAgY29weSxcbiAgICAgIHAsXG4gICAgICBpLFxuICAgICAgYWxpYXNlcztcblxuICBpZiAoIXByb3BlcnR5QWxpYXNlcykge1xuICAgIHJldHVybiB2YXJzO1xuICB9XG5cbiAgY29weSA9IF9tZXJnZSh7fSwgdmFycyk7XG5cbiAgZm9yIChwIGluIHByb3BlcnR5QWxpYXNlcykge1xuICAgIGlmIChwIGluIGNvcHkpIHtcbiAgICAgIGFsaWFzZXMgPSBwcm9wZXJ0eUFsaWFzZXNbcF0uc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IGFsaWFzZXMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvcHlbYWxpYXNlc1tpXV0gPSBjb3B5W3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICAvLyBwYXJzZXMgbXVsdGlwbGUgZm9ybWF0cywgbGlrZSB7XCIwJVwiOiB7eDogMTAwfSwge1wiNTAlXCI6IHt4OiAtMjB9fSBhbmQgeyB4OiB7XCIwJVwiOiAxMDAsIFwiNTAlXCI6IC0yMH0gfSwgYW5kIGFuIFwiZWFzZVwiIGNhbiBiZSBzZXQgb24gYW55IG9iamVjdC4gV2UgcG9wdWxhdGUgYW4gXCJhbGxQcm9wc1wiIG9iamVjdCB3aXRoIGFuIEFycmF5IGZvciBlYWNoIHByb3BlcnR5LCBsaWtlIHt4OiBbe30sIHt9XSwgeTpbe30sIHt9XX0gd2l0aCBkYXRhIGZvciBlYWNoIHByb3BlcnR5IHR3ZWVuLiBUaGUgb2JqZWN0cyBoYXZlIGEgXCJ0XCIgKHRpbWUpLCBcInZcIiwgKHZhbHVlKSwgYW5kIFwiZVwiIChlYXNlKSBwcm9wZXJ0eS4gVGhpcyBhbGxvd3MgdXMgdG8gcGllY2UgdG9nZXRoZXIgYSB0aW1lbGluZSBsYXRlci5cbl9wYXJzZUtleWZyYW1lID0gZnVuY3Rpb24gX3BhcnNlS2V5ZnJhbWUocHJvcCwgb2JqLCBhbGxQcm9wcywgZWFzZUVhY2gpIHtcbiAgdmFyIGVhc2UgPSBvYmouZWFzZSB8fCBlYXNlRWFjaCB8fCBcInBvd2VyMS5pbk91dFwiLFxuICAgICAgcCxcbiAgICAgIGE7XG5cbiAgaWYgKF9pc0FycmF5KG9iaikpIHtcbiAgICBhID0gYWxsUHJvcHNbcHJvcF0gfHwgKGFsbFByb3BzW3Byb3BdID0gW10pOyAvLyB0ID0gdGltZSAob3V0IG9mIDEwMCksIHYgPSB2YWx1ZSwgZSA9IGVhc2VcblxuICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgcmV0dXJuIGEucHVzaCh7XG4gICAgICAgIHQ6IGkgLyAob2JqLmxlbmd0aCAtIDEpICogMTAwLFxuICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgZTogZWFzZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChwIGluIG9iaikge1xuICAgICAgYSA9IGFsbFByb3BzW3BdIHx8IChhbGxQcm9wc1twXSA9IFtdKTtcbiAgICAgIHAgPT09IFwiZWFzZVwiIHx8IGEucHVzaCh7XG4gICAgICAgIHQ6IHBhcnNlRmxvYXQocHJvcCksXG4gICAgICAgIHY6IG9ialtwXSxcbiAgICAgICAgZTogZWFzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9wYXJzZUZ1bmNPclN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZUZ1bmNPclN0cmluZyh2YWx1ZSwgdHdlZW4sIGksIHRhcmdldCwgdGFyZ2V0cykge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbCh0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSA6IF9pc1N0cmluZyh2YWx1ZSkgJiYgfnZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpID8gX3JlcGxhY2VSYW5kb20odmFsdWUpIDogdmFsdWU7XG59LFxuICAgIF9zdGFnZ2VyVHdlZW5Qcm9wcyA9IF9jYWxsYmFja05hbWVzICsgXCJyZXBlYXQscmVwZWF0RGVsYXkseW95byxyZXBlYXRSZWZyZXNoLHlveW9FYXNlLGVhc2VSZXZlcnNlLGF1dG9SZXZlcnRcIixcbiAgICBfc3RhZ2dlclByb3BzVG9Ta2lwID0ge307XG5cbl9mb3JFYWNoTmFtZShfc3RhZ2dlclR3ZWVuUHJvcHMgKyBcIixpZCxzdGFnZ2VyLGRlbGF5LGR1cmF0aW9uLHBhdXNlZCxzY3JvbGxUcmlnZ2VyXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfc3RhZ2dlclByb3BzVG9Ta2lwW25hbWVdID0gMTtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUV0VFTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVHdlZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFR3ZWVuLCBfQW5pbWF0aW9uMik7XG5cbiAgZnVuY3Rpb24gVHdlZW4odGFyZ2V0cywgdmFycywgcG9zaXRpb24sIHNraXBJbmhlcml0KSB7XG4gICAgdmFyIF90aGlzMztcblxuICAgIGlmICh0eXBlb2YgdmFycyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcG9zaXRpb24uZHVyYXRpb24gPSB2YXJzO1xuICAgICAgdmFycyA9IHBvc2l0aW9uO1xuICAgICAgcG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIF90aGlzMyA9IF9BbmltYXRpb24yLmNhbGwodGhpcywgc2tpcEluaGVyaXQgPyB2YXJzIDogX2luaGVyaXREZWZhdWx0cyh2YXJzKSkgfHwgdGhpcztcbiAgICB2YXIgX3RoaXMzJHZhcnMgPSBfdGhpczMudmFycyxcbiAgICAgICAgZHVyYXRpb24gPSBfdGhpczMkdmFycy5kdXJhdGlvbixcbiAgICAgICAgZGVsYXkgPSBfdGhpczMkdmFycy5kZWxheSxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3RoaXMzJHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICBzdGFnZ2VyID0gX3RoaXMzJHZhcnMuc3RhZ2dlcixcbiAgICAgICAgb3ZlcndyaXRlID0gX3RoaXMzJHZhcnMub3ZlcndyaXRlLFxuICAgICAgICBrZXlmcmFtZXMgPSBfdGhpczMkdmFycy5rZXlmcmFtZXMsXG4gICAgICAgIGRlZmF1bHRzID0gX3RoaXMzJHZhcnMuZGVmYXVsdHMsXG4gICAgICAgIHNjcm9sbFRyaWdnZXIgPSBfdGhpczMkdmFycy5zY3JvbGxUcmlnZ2VyLFxuICAgICAgICBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSAoX2lzQXJyYXkodGFyZ2V0cykgfHwgX2lzVHlwZWRBcnJheSh0YXJnZXRzKSA/IF9pc051bWJlcih0YXJnZXRzWzBdKSA6IFwibGVuZ3RoXCIgaW4gdmFycykgPyBbdGFyZ2V0c10gOiB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICB0bCxcbiAgICAgICAgaSxcbiAgICAgICAgY29weSxcbiAgICAgICAgbCxcbiAgICAgICAgcCxcbiAgICAgICAgY3VyVGFyZ2V0LFxuICAgICAgICBzdGFnZ2VyRnVuYyxcbiAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlO1xuICAgIF90aGlzMy5fdGFyZ2V0cyA9IHBhcnNlZFRhcmdldHMubGVuZ3RoID8gX2hhcm5lc3MocGFyc2VkVGFyZ2V0cykgOiBfd2FybihcIkdTQVAgdGFyZ2V0IFwiICsgdGFyZ2V0cyArIFwiIG5vdCBmb3VuZC4gaHR0cHM6Ly9nc2FwLmNvbVwiLCAhX2NvbmZpZy5udWxsVGFyZ2V0V2FybikgfHwgW107XG4gICAgX3RoaXMzLl9wdExvb2t1cCA9IFtdOyAvL1Byb3BUd2VlbiBsb29rdXAuIEFuIGFycmF5IGNvbnRhaW5pbmcgYW4gb2JqZWN0IGZvciBlYWNoIHRhcmdldCwgaGF2aW5nIGtleXMgZm9yIGVhY2ggdHdlZW5pbmcgcHJvcGVydHlcblxuICAgIF90aGlzMy5fb3ZlcndyaXRlID0gb3ZlcndyaXRlO1xuXG4gICAgaWYgKGtleWZyYW1lcyB8fCBzdGFnZ2VyIHx8IF9pc0Z1bmNPclN0cmluZyhkdXJhdGlvbikgfHwgX2lzRnVuY09yU3RyaW5nKGRlbGF5KSkge1xuICAgICAgdmFycyA9IF90aGlzMy52YXJzO1xuICAgICAgdmFyIGVhc2VSZXZlcnNlID0gdmFycy5lYXNlUmV2ZXJzZSB8fCB2YXJzLnlveW9FYXNlO1xuICAgICAgdGwgPSBfdGhpczMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgICAgICBkYXRhOiBcIm5lc3RlZFwiLFxuICAgICAgICBkZWZhdWx0czogZGVmYXVsdHMgfHwge30sXG4gICAgICAgIHRhcmdldHM6IHBhcmVudCAmJiBwYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIiA/IHBhcmVudC52YXJzLnRhcmdldHMgOiBwYXJzZWRUYXJnZXRzXG4gICAgICB9KTsgLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgdGFyZ2V0cyBiZWNhdXNlIGZvciBzdGFnZ2VycyBhbmQga2V5ZnJhbWVzLCB3ZSBlbmQgdXAgY3JlYXRpbmcgYW4gaW5kaXZpZHVhbCB0d2VlbiBmb3IgZWFjaCBidXQgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIG5lZWQgdG8ga25vdyB0aGUgaW5kZXggYW5kIHRoZSB3aG9sZSBBcnJheSBvZiB0YXJnZXRzLlxuXG4gICAgICB0bC5raWxsKCk7XG4gICAgICB0bC5wYXJlbnQgPSB0bC5fZHAgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG4gICAgICB0bC5fc3RhcnQgPSAwO1xuXG4gICAgICBpZiAoc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgICAgbCA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuICAgICAgICBzdGFnZ2VyRnVuYyA9IHN0YWdnZXIgJiYgZGlzdHJpYnV0ZShzdGFnZ2VyKTtcblxuICAgICAgICBpZiAoX2lzT2JqZWN0KHN0YWdnZXIpKSB7XG4gICAgICAgICAgLy91c2VycyBjYW4gcGFzcyBpbiBjYWxsYmFja3MgbGlrZSBvblN0YXJ0L29uQ29tcGxldGUgaW4gdGhlIHN0YWdnZXIgb2JqZWN0LiBUaGVzZSBzaG91bGQgZmlyZSB3aXRoIGVhY2ggaW5kaXZpZHVhbCB0d2Vlbi5cbiAgICAgICAgICBmb3IgKHAgaW4gc3RhZ2dlcikge1xuICAgICAgICAgICAgaWYgKH5fc3RhZ2dlclR3ZWVuUHJvcHMuaW5kZXhPZihwKSkge1xuICAgICAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2UgfHwgKHN0YWdnZXJWYXJzVG9NZXJnZSA9IHt9KTtcbiAgICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlW3BdID0gc3RhZ2dlcltwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY29weSA9IF9jb3B5RXhjbHVkaW5nKHZhcnMsIF9zdGFnZ2VyUHJvcHNUb1NraXApO1xuICAgICAgICAgIGNvcHkuc3RhZ2dlciA9IDA7XG4gICAgICAgICAgZWFzZVJldmVyc2UgJiYgKGNvcHkuZWFzZVJldmVyc2UgPSBlYXNlUmV2ZXJzZSk7XG4gICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlICYmIF9tZXJnZShjb3B5LCBzdGFnZ2VyVmFyc1RvTWVyZ2UpO1xuICAgICAgICAgIGN1clRhcmdldCA9IHBhcnNlZFRhcmdldHNbaV07IC8vZG9uJ3QganVzdCBjb3B5IGR1cmF0aW9uIG9yIGRlbGF5IGJlY2F1c2UgaWYgdGhleSdyZSBhIHN0cmluZyBvciBmdW5jdGlvbiwgd2UnZCBlbmQgdXAgaW4gYW4gaW5maW5pdGUgbG9vcCBiZWNhdXNlIF9pc0Z1bmNPclN0cmluZygpIHdvdWxkIGV2YWx1YXRlIGFzIHRydWUgaW4gdGhlIGNoaWxkIHR3ZWVucywgZW50ZXJpbmcgdGhpcyBsb29wLCBldGMuIFNvIHdlIHBhcnNlIHRoZSB2YWx1ZSBzdHJhaWdodCBmcm9tIHZhcnMgYW5kIGRlZmF1bHQgdG8gMC5cblxuICAgICAgICAgIGNvcHkuZHVyYXRpb24gPSArX3BhcnNlRnVuY09yU3RyaW5nKGR1cmF0aW9uLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cyk7XG4gICAgICAgICAgY29weS5kZWxheSA9ICgrX3BhcnNlRnVuY09yU3RyaW5nKGRlbGF5LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cykgfHwgMCkgLSBfdGhpczMuX2RlbGF5O1xuXG4gICAgICAgICAgaWYgKCFzdGFnZ2VyICYmIGwgPT09IDEgJiYgY29weS5kZWxheSkge1xuICAgICAgICAgICAgLy8gaWYgc29tZW9uZSBkb2VzIGRlbGF5OlwicmFuZG9tKDEsIDUpXCIsIHJlcGVhdDotMSwgZm9yIGV4YW1wbGUsIHRoZSBkZWxheSBzaG91bGRuJ3QgYmUgaW5zaWRlIHRoZSByZXBlYXQuXG4gICAgICAgICAgICBfdGhpczMuX2RlbGF5ID0gZGVsYXkgPSBjb3B5LmRlbGF5O1xuICAgICAgICAgICAgX3RoaXMzLl9zdGFydCArPSBkZWxheTtcbiAgICAgICAgICAgIGNvcHkuZGVsYXkgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRsLnRvKGN1clRhcmdldCwgY29weSwgc3RhZ2dlckZ1bmMgPyBzdGFnZ2VyRnVuYyhpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpIDogMCk7XG4gICAgICAgICAgdGwuX2Vhc2UgPSBfZWFzZU1hcC5ub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGwuZHVyYXRpb24oKSA/IGR1cmF0aW9uID0gZGVsYXkgPSAwIDogX3RoaXMzLnRpbWVsaW5lID0gMDsgLy8gaWYgdGhlIHRpbWVsaW5lJ3MgZHVyYXRpb24gaXMgMCwgd2UgZG9uJ3QgbmVlZCBhIHRpbWVsaW5lIGludGVybmFsbHkhXG4gICAgICB9IGVsc2UgaWYgKGtleWZyYW1lcykge1xuICAgICAgICBfaW5oZXJpdERlZmF1bHRzKF9zZXREZWZhdWx0cyh0bC52YXJzLmRlZmF1bHRzLCB7XG4gICAgICAgICAgZWFzZTogXCJub25lXCJcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRsLl9lYXNlID0gX3BhcnNlRWFzZShrZXlmcmFtZXMuZWFzZSB8fCB2YXJzLmVhc2UgfHwgXCJub25lXCIpO1xuICAgICAgICB2YXIgdGltZSA9IDAsXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAga2YsXG4gICAgICAgICAgICB2O1xuXG4gICAgICAgIGlmIChfaXNBcnJheShrZXlmcmFtZXMpKSB7XG4gICAgICAgICAga2V5ZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGwudG8ocGFyc2VkVGFyZ2V0cywgZnJhbWUsIFwiPlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0bC5kdXJhdGlvbigpOyAvLyB0byBlbnN1cmUgdGwuX2R1ciBpcyBjYWNoZWQgYmVjYXVzZSB3ZSB0YXAgaW50byBpdCBmb3IgcGVyZm9ybWFuY2UgcHVycG9zZXMgaW4gdGhlIHJlbmRlcigpIG1ldGhvZC5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3B5ID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4ga2V5ZnJhbWVzKSB7XG4gICAgICAgICAgICBwID09PSBcImVhc2VcIiB8fCBwID09PSBcImVhc2VFYWNoXCIgfHwgX3BhcnNlS2V5ZnJhbWUocCwga2V5ZnJhbWVzW3BdLCBjb3B5LCBrZXlmcmFtZXMuZWFzZUVhY2gpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAocCBpbiBjb3B5KSB7XG4gICAgICAgICAgICBhID0gY29weVtwXS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLnQgLSBiLnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRpbWUgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBrZiA9IGFbaV07XG4gICAgICAgICAgICAgIHYgPSB7XG4gICAgICAgICAgICAgICAgZWFzZToga2YuZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogKGtmLnQgLSAoaSA/IGFbaSAtIDFdLnQgOiAwKSkgLyAxMDAgKiBkdXJhdGlvblxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB2W3BdID0ga2YudjtcbiAgICAgICAgICAgICAgdGwudG8ocGFyc2VkVGFyZ2V0cywgdiwgdGltZSk7XG4gICAgICAgICAgICAgIHRpbWUgKz0gdi5kdXJhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0bC5kdXJhdGlvbigpIDwgZHVyYXRpb24gJiYgdGwudG8oe30sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAtIHRsLmR1cmF0aW9uKClcbiAgICAgICAgICB9KTsgLy8gaW4gY2FzZSBrZXlmcmFtZXMgZGlkbid0IGdvIHRvIDEwMCVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiB8fCBfdGhpczMuZHVyYXRpb24oZHVyYXRpb24gPSB0bC5kdXJhdGlvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMzLnRpbWVsaW5lID0gMDsgLy9zcGVlZCBvcHRpbWl6YXRpb24sIGZhc3RlciBsb29rdXBzIChubyBnb2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluKVxuICAgIH1cblxuICAgIGlmIChvdmVyd3JpdGUgPT09IHRydWUgJiYgIV9zdXBwcmVzc092ZXJ3cml0ZXMpIHtcbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuXG4gICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHBhcnNlZFRhcmdldHMpO1xuXG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUocGFyZW50LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHBvc2l0aW9uKTtcblxuICAgIHZhcnMucmV2ZXJzZWQgJiYgX3RoaXMzLnJldmVyc2UoKTtcbiAgICB2YXJzLnBhdXNlZCAmJiBfdGhpczMucGF1c2VkKHRydWUpO1xuXG4gICAgaWYgKGltbWVkaWF0ZVJlbmRlciB8fCAhZHVyYXRpb24gJiYgIWtleWZyYW1lcyAmJiBfdGhpczMuX3N0YXJ0ID09PSBfcm91bmRQcmVjaXNlKHBhcmVudC5fdGltZSkgJiYgX2lzTm90RmFsc2UoaW1tZWRpYXRlUmVuZGVyKSAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSAmJiBwYXJlbnQuZGF0YSAhPT0gXCJuZXN0ZWRcIikge1xuICAgICAgX3RoaXMzLl90VGltZSA9IC1fdGlueU51bTsgLy9mb3JjZXMgYSByZW5kZXIgd2l0aG91dCBoYXZpbmcgdG8gc2V0IHRoZSByZW5kZXIoKSBcImZvcmNlXCIgcGFyYW1ldGVyIHRvIHRydWUgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IGxhenlpbmcgYnkgZGVmYXVsdCAodXNpbmcgdGhlIFwiZm9yY2VcIiBwYXJhbWV0ZXIgYWx3YXlzIGZvcmNlcyBhbiBpbW1lZGlhdGUgZnVsbCByZW5kZXIpXG5cbiAgICAgIF90aGlzMy5yZW5kZXIoTWF0aC5tYXgoMCwgLWRlbGF5KSB8fCAwKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cbiAgICB9XG5cbiAgICBzY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgaXNOZWdhdGl2ZSA9IHRvdGFsVGltZSA8IDAsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lID4gdER1ciAtIF90aW55TnVtICYmICFpc05lZ2F0aXZlID8gdER1ciA6IHRvdGFsVGltZSA8IF90aW55TnVtID8gMCA6IHRvdGFsVGltZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgcHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgaXNZb3lvLFxuICAgICAgICByYXRpbyxcbiAgICAgICAgdGltZWxpbmU7XG5cbiAgICBpZiAoIWR1cikge1xuICAgICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHRoaXMsIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICB9IGVsc2UgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCAhdG90YWxUaW1lIHx8IGZvcmNlIHx8ICF0aGlzLl9pbml0dGVkICYmIHRoaXMuX3RUaW1lIHx8IHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5felRpbWUgPCAwICE9PSBpc05lZ2F0aXZlIHx8IHRoaXMuX2xhenkpIHtcbiAgICAgIC8vIHRoaXMgc2Vuc2VzIGlmIHdlJ3JlIGNyb3NzaW5nIG92ZXIgdGhlIHN0YXJ0IHRpbWUsIGluIHdoaWNoIGNhc2Ugd2UgbXVzdCByZWNvcmQgX3pUaW1lIGFuZCBmb3JjZSB0aGUgcmVuZGVyLCBidXQgd2UgZG8gaXQgaW4gdGhpcyBsZW5ndGh5IGNvbmRpdGlvbmFsIHdheSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyAodXN1YWxseSB3ZSBjYW4gc2tpcCB0aGUgY2FsY3VsYXRpb25zKTogdGhpcy5faW5pdHRlZCAmJiAodGhpcy5felRpbWUgPCAwKSAhPT0gKHRvdGFsVGltZSA8IDApXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICB0aW1lbGluZSA9IHRoaXMudGltZWxpbmU7XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCA8IC0xICYmIGlzTmVnYXRpdmUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoY3ljbGVEdXJhdGlvbiAqIDEwMCArIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgPSBfcm91bmRQcmVjaXNlKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2SXRlcmF0aW9uID0gX3JvdW5kUHJlY2lzZSh0VGltZSAvIGN5Y2xlRHVyYXRpb24pOyAvLyBmdWxsIGRlY2ltYWwgdmVyc2lvbiBvZiBpdGVyYXRpb25zLCBub3QgdGhlIHByZXZpb3VzIGl0ZXJhdGlvbiAod2UncmUgcmV1c2luZyBwcmV2SXRlcmF0aW9uIHZhcmlhYmxlIGZvciBlZmZpY2llbmN5KVxuXG4gICAgICAgICAgaXRlcmF0aW9uID0gfn5wcmV2SXRlcmF0aW9uO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRpbWUgPiBkdXIpIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaXNZb3lvID0gdGhpcy5feW95byAmJiBpdGVyYXRpb24gJiAxO1xuICAgICAgICBpZiAoaXNZb3lvKSB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKHRpbWUgPT09IHByZXZUaW1lICYmICFmb3JjZSAmJiB0aGlzLl9pbml0dGVkICYmIGl0ZXJhdGlvbiA9PT0gcHJldkl0ZXJhdGlvbikge1xuICAgICAgICAgIC8vY291bGQgYmUgZHVyaW5nIHRoZSByZXBlYXREZWxheSBwYXJ0LiBObyBuZWVkIHRvIHJlbmRlciBhbmQgZmlyZSBjYWxsYmFja3MuXG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICAvL3JlcGVhdFJlZnJlc2ggZnVuY3Rpb25hbGl0eVxuICAgICAgICAgIGlmICh0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmICF0aGlzLl9sb2NrICYmIHRpbWUgIT09IGN5Y2xlRHVyYXRpb24gJiYgdGhpcy5faW5pdHRlZCkge1xuICAgICAgICAgICAgLy8gdGhpcy5fdGltZSB3aWxsID09PSBjeWNsZUR1cmF0aW9uIHdoZW4gd2UgcmVuZGVyIGF0IEVYQUNUTFkgdGhlIGVuZCBvZiBhbiBpdGVyYXRpb24uIFdpdGhvdXQgdGhpcyBjb25kaXRpb24sIGl0J2Qgb2Z0ZW4gZG8gdGhlIHJlcGVhdFJlZnJlc2ggcmVuZGVyIFRXSUNFIChhZ2FpbiBvbiB0aGUgdmVyeSBuZXh0IHRpY2spLlxuICAgICAgICAgICAgdGhpcy5fbG9jayA9IGZvcmNlID0gMTsgLy9mb3JjZSwgb3RoZXJ3aXNlIGlmIGxhenkgaXMgdHJ1ZSwgdGhlIF9hdHRlbXB0SW5pdFR3ZWVuKCkgd2lsbCByZXR1cm4gYW5kIHdlJ2xsIGp1bXAgb3V0IGFuZCBnZXQgY2F1Z2h0IGJvdW5jaW5nIG9uIGVhY2ggdGljay5cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoX3JvdW5kUHJlY2lzZShjeWNsZUR1cmF0aW9uICogaXRlcmF0aW9uKSwgdHJ1ZSkuaW52YWxpZGF0ZSgpLl9sb2NrID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIGlmIChfYXR0ZW1wdEluaXRUd2Vlbih0aGlzLCBpc05lZ2F0aXZlID8gdG90YWxUaW1lIDogdGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzLCB0VGltZSkpIHtcbiAgICAgICAgICB0aGlzLl90VGltZSA9IDA7IC8vIGluIGNvbnN0cnVjdG9yIGlmIGltbWVkaWF0ZVJlbmRlciBpcyB0cnVlLCB3ZSBzZXQgX3RUaW1lIHRvIC1fdGlueU51bSB0byBoYXZlIHRoZSBwbGF5aGVhZCBjcm9zcyB0aGUgc3RhcnRpbmcgcG9pbnQgYnV0IHdlIGNhbid0IGxlYXZlIF90VGltZSBhcyBhIG5lZ2F0aXZlIG51bWJlci5cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lICYmICEoZm9yY2UgJiYgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uKSkge1xuICAgICAgICAgIC8vIHJhcmUgZWRnZSBjYXNlIC0gZHVyaW5nIGluaXRpYWxpemF0aW9uLCBhbiBvblVwZGF0ZSBpbiB0aGUgX3N0YXJ0QXQgKC5mcm9tVG8oKSkgbWlnaHQgZm9yY2UgdGhpcyB0d2VlbiB0byByZW5kZXIgYXQgYSBkaWZmZXJlbnQgc3BvdCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBkaXRjaCB0aGlzIHJlbmRlcigpIGNhbGwgc28gdGhhdCBpdCBkb2Vzbid0IHJldmVydCB0aGUgdmFsdWVzLiBCdXQgd2UgYWxzbyBkb24ndCB3YW50IHRvIGR1bXAgaWYgd2UncmUgZG9pbmcgYSByZXBlYXRSZWZyZXNoIHJlbmRlciFcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkdXIgIT09IHRoaXMuX2R1cikge1xuICAgICAgICAgIC8vIHdoaWxlIGluaXR0aW5nLCBhIHBsdWdpbiBsaWtlIEluZXJ0aWFQbHVnaW4gbWlnaHQgYWx0ZXIgdGhlIGR1cmF0aW9uLCBzbyByZXJ1biBmcm9tIHRoZSBzdGFydCB0byBlbnN1cmUgZXZlcnl0aGluZyByZW5kZXJzIGFzIGl0IHNob3VsZC5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yRWFzZSkge1xuICAgICAgICB2YXIgaW52ID0gdGltZSA8IHByZXZUaW1lO1xuXG4gICAgICAgIGlmIChpbnYgIT09IHRoaXMuX2ludikge1xuICAgICAgICAgIHZhciBzZWdEdXIgPSBpbnYgPyBwcmV2VGltZSA6IGR1ciAtIHByZXZUaW1lO1xuICAgICAgICAgIHRoaXMuX2ludiA9IGludjtcbiAgICAgICAgICBpZiAodGhpcy5fZnJvbSkgdGhpcy5yYXRpbyA9IDEgLSB0aGlzLnJhdGlvO1xuICAgICAgICAgIHRoaXMuX2ludlJhdGlvID0gdGhpcy5yYXRpbztcbiAgICAgICAgICB0aGlzLl9pbnZUaW1lID0gcHJldlRpbWU7XG4gICAgICAgICAgdGhpcy5faW52UmVjaXAgPSBzZWdEdXIgPyAoaW52ID8gLTEgOiAxKSAvIHNlZ0R1ciA6IDA7XG4gICAgICAgICAgdGhpcy5faW52U2NhbGUgPSBpbnYgPyAtdGhpcy5yYXRpbyA6IDEgLSB0aGlzLnJhdGlvO1xuICAgICAgICAgIHRoaXMuX2ludkVhc2UgPSBpbnYgPyB0aGlzLl9yRWFzZSA6IHRoaXMuX2Vhc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSB0aGlzLl9pbnZSYXRpbyArIHRoaXMuX2ludlNjYWxlICogdGhpcy5faW52RWFzZSgodGltZSAtIHRoaXMuX2ludlRpbWUpICogdGhpcy5faW52UmVjaXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gdGhpcy5fZWFzZSh0aW1lIC8gZHVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2Zyb20pIHRoaXMucmF0aW8gPSByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICB0aGlzLl90aW1lID0gdGltZTtcblxuICAgICAgaWYgKCF0aGlzLl9hY3QgJiYgdGhpcy5fdHMpIHtcbiAgICAgICAgdGhpcy5fYWN0ID0gMTsgLy9hcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgICAgdGhpcy5fbGF6eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICghcHJldlRpbWUgJiYgdFRpbWUgJiYgIXN1cHByZXNzRXZlbnRzICYmICFwcmV2SXRlcmF0aW9uKSB7XG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uU3RhcnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RUaW1lICE9PSB0VGltZSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG9uU3RhcnQgdHJpZ2dlcmVkIGEgcmVuZGVyIGF0IGEgZGlmZmVyZW50IHNwb3QsIGVqZWN0LiBMaWtlIGlmIHNvbWVvbmUgZGlkIGFuaW1hdGlvbi5wYXVzZSgwLjUpIG9yIHNvbWV0aGluZyBpbnNpZGUgdGhlIG9uU3RhcnQuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHQgPSB0aGlzLl9wdDtcblxuICAgICAgd2hpbGUgKHB0KSB7XG4gICAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgICAgfVxuXG4gICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5yZW5kZXIodG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6IHRpbWVsaW5lLl9kdXIgKiB0aW1lbGluZS5fZWFzZSh0aW1lIC8gdGhpcy5fZHVyKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB8fCB0aGlzLl9zdGFydEF0ICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG5cbiAgICAgIGlmICh0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgaXNOZWdhdGl2ZSAmJiBfcmV3aW5kU3RhcnRBdCh0aGlzLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7IC8vbm90ZTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIHR1Y2sgdGhpcyBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgbGVzcyB0cmF2ZWxlZCBhcmVhcyAobW9zdCB0d2VlbnMgZG9uJ3QgaGF2ZSBhbiBvblVwZGF0ZSkuIFdlJ2QganVzdCBoYXZlIGl0IGF0IHRoZSBlbmQgYmVmb3JlIHRoZSBvbkNvbXBsZXRlLCBidXQgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCBiZWZvcmUgYW55IG9uVXBkYXRlIGlzIGNhbGxlZCwgc28gd2UgQUxTTyBwdXQgaXQgaGVyZSBhbmQgdGhlbiBpZiBpdCdzIG5vdCBjYWxsZWQsIHdlIGRvIHNvIGxhdGVyIG5lYXIgdGhlIG9uQ29tcGxldGUuXG5cbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcGVhdCAmJiBpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgdGhpcy52YXJzLm9uUmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcblxuICAgICAgaWYgKCh0VGltZSA9PT0gdGhpcy5fdER1ciB8fCAhdFRpbWUpICYmIHRoaXMuX3RUaW1lID09PSB0VGltZSkge1xuICAgICAgICBpc05lZ2F0aXZlICYmICF0aGlzLl9vblVwZGF0ZSAmJiBfcmV3aW5kU3RhcnRBdCh0aGlzLCB0b3RhbFRpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdGhpcy5fdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB3ZSdyZSByZW5kZXJpbmcgYXQgZXhhY3RseSBhIHRpbWUgb2YgMCwgYXMgdGhlcmUgY291bGQgYmUgYXV0b1JldmVydCB2YWx1ZXMgdGhhdCBzaG91bGQgZ2V0IHNldCBvbiB0aGUgbmV4dCB0aWNrIChpZiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0VGltZSwgbmVnYXRpdmUgdG90YWxUaW1lKS4gRG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKGlzTmVnYXRpdmUgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUgfHwgaXNZb3lvKSkge1xuICAgICAgICAgIC8vIGlmIHByZXZUaW1lIGFuZCB0VGltZSBhcmUgemVybywgd2Ugc2hvdWxkbid0IGZpcmUgdGhlIG9uUmV2ZXJzZUNvbXBsZXRlLiBUaGlzIGNvdWxkIGhhcHBlbiBpZiB5b3UgZ3NhcC50byguLi4ge3BhdXNlZDp0cnVlfSkucGxheSgpO1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzMudGFyZ2V0cyA9IGZ1bmN0aW9uIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldHM7XG4gIH07XG5cbiAgX3Byb3RvMy5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZShzb2Z0KSB7XG4gICAgLy8gXCJzb2Z0XCIgZ2l2ZXMgdXMgYSB3YXkgdG8gY2xlYXIgb3V0IGV2ZXJ5dGhpbmcgRVhDRVBUIHRoZSByZWNvcmRlZCBwcmUtXCJmcm9tXCIgcG9ydGlvbiBvZiBmcm9tKCkgdHdlZW5zLiBPdGhlcndpc2UsIGZvciBleGFtcGxlLCBpZiB5b3UgdHdlZW4ucHJvZ3Jlc3MoMSkucmVuZGVyKDAsIHRydWUgdHJ1ZSkuaW52YWxpZGF0ZSgpLCB0aGUgXCJmcm9tXCIgdmFsdWVzIHdvdWxkIHBlcnNpc3QgYW5kIHRoZW4gb24gdGhlIG5leHQgcmVuZGVyLCB0aGUgZnJvbSgpIHR3ZWVucyB3b3VsZCBpbml0aWFsaXplIGFuZCB0aGUgY3VycmVudCB2YWx1ZSB3b3VsZCBtYXRjaCB0aGUgXCJmcm9tXCIgdmFsdWVzLCB0aHVzIGFuaW1hdGUgZnJvbSB0aGUgc2FtZSB2YWx1ZSB0byB0aGUgc2FtZSB2YWx1ZSAobm8gYW5pbWF0aW9uKS4gV2UgdGFwIGludG8gdGhpcyBpbiBTY3JvbGxUcmlnZ2VyJ3MgcmVmcmVzaCgpIHdoZXJlIHdlIG11c3QgcHVzaCBhIHR3ZWVuIHRvIGNvbXBsZXRpb24gYW5kIHRoZW4gYmFjayBhZ2FpbiBidXQgaG9ub3IgaXRzIGluaXQgc3RhdGUgaW4gY2FzZSB0aGUgdHdlZW4gaXMgZGVwZW5kZW50IG9uIGFub3RoZXIgdHdlZW4gZnVydGhlciB1cCBvbiB0aGUgcGFnZS5cbiAgICAoIXNvZnQgfHwgIXRoaXMudmFycy5ydW5CYWNrd2FyZHMpICYmICh0aGlzLl9zdGFydEF0ID0gMCk7XG4gICAgdGhpcy5fcHQgPSB0aGlzLl9vcCA9IHRoaXMuX29uVXBkYXRlID0gdGhpcy5fbGF6eSA9IHRoaXMucmF0aW8gPSAwO1xuICAgIHRoaXMuX3B0TG9va3VwID0gW107XG4gICAgdGhpcy50aW1lbGluZSAmJiB0aGlzLnRpbWVsaW5lLmludmFsaWRhdGUoc29mdCk7XG4gICAgcmV0dXJuIF9BbmltYXRpb24yLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcywgc29mdCk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZXNldFRvID0gZnVuY3Rpb24gcmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUsIHNraXBSZWN1cnNpb24pIHtcbiAgICBfdGlja2VyQWN0aXZlIHx8IF90aWNrZXIud2FrZSgpO1xuICAgIHRoaXMuX3RzIHx8IHRoaXMucGxheSgpO1xuICAgIHZhciB0aW1lID0gTWF0aC5taW4odGhpcy5fZHVyLCAodGhpcy5fZHAuX3RpbWUgLSB0aGlzLl9zdGFydCkgKiB0aGlzLl90cyksXG4gICAgICAgIHJhdGlvO1xuICAgIHRoaXMuX2luaXR0ZWQgfHwgX2luaXRUd2Vlbih0aGlzLCB0aW1lKTtcbiAgICByYXRpbyA9IHRoaXMuX2Vhc2UodGltZSAvIHRoaXMuX2R1cik7IC8vIGRvbid0IGp1c3QgZ2V0IHR3ZWVuLnJhdGlvIGJlY2F1c2UgaXQgbWF5IG5vdCBoYXZlIHJlbmRlcmVkIHlldC5cbiAgICAvLyBwb3NzaWJsZSBmdXR1cmUgYWRkaXRpb24gdG8gYWxsb3cgYW4gb2JqZWN0IHdpdGggbXVsdGlwbGUgdmFsdWVzIHRvIHVwZGF0ZSwgbGlrZSB0d2Vlbi5yZXNldFRvKHt4OiAxMDAsIHk6IDIwMH0pOyBBdCB0aGlzIHBvaW50LCBpdCBkb2Vzbid0IHNlZW0gd29ydGggdGhlIGFkZGVkIGtiIGdpdmVuIHRoZSBmYWN0IHRoYXQgbW9zdCB1c2VycyB3aWxsIGxpa2VseSBvcHQgZm9yIHRoZSBjb252ZW5pZW50IGdzYXAucXVpY2tUbygpIHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIHRoaXMgbWV0aG9kLlxuICAgIC8vIGlmIChfaXNPYmplY3QocHJvcGVydHkpKSB7IC8vIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvblxuICAgIC8vIFx0Zm9yIChwIGluIHByb3BlcnR5KSB7XG4gICAgLy8gXHRcdGlmIChfdXBkYXRlUHJvcFR3ZWVucyh0aGlzLCBwLCBwcm9wZXJ0eVtwXSwgdmFsdWUgPyB2YWx1ZVtwXSA6IG51bGwsIHN0YXJ0LCByYXRpbywgdGltZSkpIHtcbiAgICAvLyBcdFx0XHRyZXR1cm4gdGhpcy5yZXNldFRvKHByb3BlcnR5LCB2YWx1ZSwgc3RhcnQsIHN0YXJ0SXNSZWxhdGl2ZSk7IC8vIGlmIGEgUHJvcFR3ZWVuIHdhc24ndCBmb3VuZCBmb3IgdGhlIHByb3BlcnR5LCBpdCdsbCBnZXQgZm9yY2VkIHdpdGggYSByZS1pbml0aWFsaXphdGlvbiBzbyB3ZSBuZWVkIHRvIGp1bXAgb3V0IGFuZCBzdGFydCBvdmVyIGFnYWluLlxuICAgIC8vIFx0XHR9XG4gICAgLy8gXHR9XG4gICAgLy8gfSBlbHNlIHtcblxuICAgIGlmIChfdXBkYXRlUHJvcFR3ZWVucyh0aGlzLCBwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUsIHJhdGlvLCB0aW1lLCBza2lwUmVjdXJzaW9uKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUsIDEpOyAvLyBpZiBhIFByb3BUd2VlbiB3YXNuJ3QgZm91bmQgZm9yIHRoZSBwcm9wZXJ0eSwgaXQnbGwgZ2V0IGZvcmNlZCB3aXRoIGEgcmUtaW5pdGlhbGl6YXRpb24gc28gd2UgbmVlZCB0byBqdW1wIG91dCBhbmQgc3RhcnQgb3ZlciBhZ2Fpbi5cbiAgICB9IC8vfVxuXG5cbiAgICBfYWxpZ25QbGF5aGVhZCh0aGlzLCAwKTtcblxuICAgIHRoaXMucGFyZW50IHx8IF9hZGRMaW5rZWRMaXN0SXRlbSh0aGlzLl9kcCwgdGhpcywgXCJfZmlyc3RcIiwgXCJfbGFzdFwiLCB0aGlzLl9kcC5fc29ydCA/IFwiX3N0YXJ0XCIgOiAwKTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIoMCk7XG4gIH07XG5cbiAgX3Byb3RvMy5raWxsID0gZnVuY3Rpb24ga2lsbCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IFwiYWxsXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRzICYmICghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSkge1xuICAgICAgdGhpcy5fbGF6eSA9IHRoaXMuX3B0ID0gMDtcbiAgICAgIHRoaXMucGFyZW50ID8gX2ludGVycnVwdCh0aGlzKSA6IHRoaXMuc2Nyb2xsVHJpZ2dlciAmJiB0aGlzLnNjcm9sbFRyaWdnZXIua2lsbCghIV9yZXZlcnRpbmcpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGltZWxpbmUpIHtcbiAgICAgIHZhciB0RHVyID0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCB2YXJzLCBfb3ZlcndyaXRpbmdUd2VlbiAmJiBfb3ZlcndyaXRpbmdUd2Vlbi52YXJzLm92ZXJ3cml0ZSAhPT0gdHJ1ZSkuX2ZpcnN0IHx8IF9pbnRlcnJ1cHQodGhpcyk7IC8vIGlmIG5vdGhpbmcgaXMgbGVmdCB0d2VlbmluZywgaW50ZXJydXB0LlxuXG4gICAgICB0aGlzLnBhcmVudCAmJiB0RHVyICE9PSB0aGlzLnRpbWVsaW5lLnRvdGFsRHVyYXRpb24oKSAmJiBfc2V0RHVyYXRpb24odGhpcywgdGhpcy5fZHVyICogdGhpcy50aW1lbGluZS5fdER1ciAvIHREdXIsIDAsIDEpOyAvLyBpZiBhIG5lc3RlZCB0d2VlbiBpcyBraWxsZWQgdGhhdCBjaGFuZ2VzIHRoZSBkdXJhdGlvbiwgaXQgc2hvdWxkIGFmZmVjdCB0aGlzIHR3ZWVuJ3MgZHVyYXRpb24uIFdlIG11c3QgdXNlIHRoZSByYXRpbywgdGhvdWdoLCBiZWNhdXNlIHNvbWV0aW1lcyB0aGUgaW50ZXJuYWwgdGltZWxpbmUgaXMgc3RyZXRjaGVkIGxpa2UgZm9yIGtleWZyYW1lcyB3aGVyZSB0aGV5IGRvbid0IGFsbCBhZGQgdXAgdG8gd2hhdGV2ZXIgdGhlIHBhcmVudCB0d2VlbidzIGR1cmF0aW9uIHdhcyBzZXQgdG8uXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBwYXJzZWRUYXJnZXRzID0gdGhpcy5fdGFyZ2V0cyxcbiAgICAgICAga2lsbGluZ1RhcmdldHMgPSB0YXJnZXRzID8gdG9BcnJheSh0YXJnZXRzKSA6IHBhcnNlZFRhcmdldHMsXG4gICAgICAgIHByb3BUd2Vlbkxvb2t1cCA9IHRoaXMuX3B0TG9va3VwLFxuICAgICAgICBmaXJzdFBUID0gdGhpcy5fcHQsXG4gICAgICAgIG92ZXJ3cml0dGVuUHJvcHMsXG4gICAgICAgIGN1ckxvb2t1cCxcbiAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMsXG4gICAgICAgIHByb3BzLFxuICAgICAgICBwLFxuICAgICAgICBwdCxcbiAgICAgICAgaTtcblxuICAgIGlmICgoIXZhcnMgfHwgdmFycyA9PT0gXCJhbGxcIikgJiYgX2FycmF5c01hdGNoKHBhcnNlZFRhcmdldHMsIGtpbGxpbmdUYXJnZXRzKSkge1xuICAgICAgdmFycyA9PT0gXCJhbGxcIiAmJiAodGhpcy5fcHQgPSAwKTtcbiAgICAgIHJldHVybiBfaW50ZXJydXB0KHRoaXMpO1xuICAgIH1cblxuICAgIG92ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vcCA9IHRoaXMuX29wIHx8IFtdO1xuXG4gICAgaWYgKHZhcnMgIT09IFwiYWxsXCIpIHtcbiAgICAgIC8vc28gcGVvcGxlIGNhbiBwYXNzIGluIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXNcbiAgICAgIGlmIChfaXNTdHJpbmcodmFycykpIHtcbiAgICAgICAgcCA9IHt9O1xuXG4gICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiBwW25hbWVdID0gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFycyA9IHA7XG4gICAgICB9XG5cbiAgICAgIHZhcnMgPSBfYWRkQWxpYXNlc1RvVmFycyhwYXJzZWRUYXJnZXRzLCB2YXJzKTtcbiAgICB9XG5cbiAgICBpID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAofmtpbGxpbmdUYXJnZXRzLmluZGV4T2YocGFyc2VkVGFyZ2V0c1tpXSkpIHtcbiAgICAgICAgY3VyTG9va3VwID0gcHJvcFR3ZWVuTG9va3VwW2ldO1xuXG4gICAgICAgIGlmICh2YXJzID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IHZhcnM7XG4gICAgICAgICAgcHJvcHMgPSBjdXJMb29rdXA7XG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSB7fTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyA9IG92ZXJ3cml0dGVuUHJvcHNbaV0gPSBvdmVyd3JpdHRlblByb3BzW2ldIHx8IHt9O1xuICAgICAgICAgIHByb3BzID0gdmFycztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocCBpbiBwcm9wcykge1xuICAgICAgICAgIHB0ID0gY3VyTG9va3VwICYmIGN1ckxvb2t1cFtwXTtcblxuICAgICAgICAgIGlmIChwdCkge1xuICAgICAgICAgICAgaWYgKCEoXCJraWxsXCIgaW4gcHQuZCkgfHwgcHQuZC5raWxsKHApID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBjdXJMb29rdXBbcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGN1ck92ZXJ3cml0ZVByb3BzICE9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wc1twXSA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdHRlZCAmJiAhdGhpcy5fcHQgJiYgZmlyc3RQVCAmJiBfaW50ZXJydXB0KHRoaXMpOyAvL2lmIGFsbCB0d2VlbmluZyBwcm9wZXJ0aWVzIGFyZSBraWxsZWQsIGtpbGwgdGhlIHR3ZWVuLiBXaXRob3V0IHRoaXMgbGluZSwgaWYgdGhlcmUncyBhIHR3ZWVuIHdpdGggbXVsdGlwbGUgdGFyZ2V0cyBhbmQgdGhlbiB5b3Uga2lsbFR3ZWVuc09mKCkgZWFjaCB0YXJnZXQgaW5kaXZpZHVhbGx5LCB0aGUgdHdlZW4gd291bGQgdGVjaG5pY2FsbHkgc3RpbGwgcmVtYWluIGFjdGl2ZSBhbmQgZmlyZSBpdHMgb25Db21wbGV0ZSBldmVuIHRob3VnaCB0aGVyZSBhcmVuJ3QgYW55IG1vcmUgcHJvcGVydGllcyB0d2VlbmluZy5cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnRvID0gZnVuY3Rpb24gdG8odGFyZ2V0cywgdmFycykge1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgYXJndW1lbnRzWzJdKTtcbiAgfTtcblxuICBUd2Vlbi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVUd2VlblR5cGUoMSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBUd2Vlbi5kZWxheWVkQ2FsbCA9IGZ1bmN0aW9uIGRlbGF5ZWRDYWxsKGRlbGF5LCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuICAgIHJldHVybiBuZXcgVHdlZW4oY2FsbGJhY2ssIDAsIHtcbiAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICBkZWxheTogZGVsYXksXG4gICAgICBvbkNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgIG9uQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlOiBzY29wZVxuICAgIH0pOyAvLyB3ZSBtdXN0IHVzZSBvblJldmVyc2VDb21wbGV0ZSB0b28gZm9yIHRoaW5ncyBsaWtlIHRpbWVsaW5lLmFkZCgoKSA9PiB7Li4ufSkgd2hpY2ggc2hvdWxkIGJlIHRyaWdnZXJlZCBpbiBCT1RIIGRpcmVjdGlvbnMgKGZvcndhcmQgYW5kIHJldmVyc2UpXG4gIH07XG5cbiAgVHdlZW4uZnJvbVRvID0gZnVuY3Rpb24gZnJvbVRvKHRhcmdldHMsIGZyb21WYXJzLCB0b1ZhcnMpIHtcbiAgICByZXR1cm4gX2NyZWF0ZVR3ZWVuVHlwZSgyLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIFR3ZWVuLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgdmFycy5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMpO1xuICB9O1xuXG4gIFR3ZWVuLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKTtcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUd2Vlbi5wcm90b3R5cGUsIHtcbiAgX3RhcmdldHM6IFtdLFxuICBfbGF6eTogMCxcbiAgX3N0YXJ0QXQ6IDAsXG4gIF9vcDogMCxcbiAgX29uSW5pdDogMFxufSk7IC8vYWRkIHRoZSBwZXJ0aW5lbnQgdGltZWxpbmUgbWV0aG9kcyB0byBUd2VlbiBpbnN0YW5jZXMgc28gdGhhdCB1c2VycyBjYW4gY2hhaW4gY29udmVuaWVudGx5IGFuZCBjcmVhdGUgYSB0aW1lbGluZSBhdXRvbWF0aWNhbGx5LiAocmVtb3ZlZCBkdWUgdG8gY29uY2VybnMgdGhhdCBpdCdkIHVsdGltYXRlbHkgYWRkIHRvIG1vcmUgY29uZnVzaW9uIGVzcGVjaWFsbHkgZm9yIGJlZ2lubmVycylcbi8vIF9mb3JFYWNoTmFtZShcInRvLGZyb20sZnJvbVRvLHNldCxjYWxsLGFkZCxhZGRMYWJlbCxhZGRQYXVzZVwiLCBuYW1lID0+IHtcbi8vIFx0VHdlZW4ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4vLyBcdFx0bGV0IHRsID0gbmV3IFRpbWVsaW5lKCk7XG4vLyBcdFx0cmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRsLCB0aGlzKVtuYW1lXS5hcHBseSh0bCwgdG9BcnJheShhcmd1bWVudHMpKTtcbi8vIFx0fVxuLy8gfSk7XG4vL2ZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LiBMZXZlcmFnZSB0aGUgdGltZWxpbmUgY2FsbHMuXG5cblxuX2ZvckVhY2hOYW1lKFwic3RhZ2dlclRvLHN0YWdnZXJGcm9tLHN0YWdnZXJGcm9tVG9cIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgVHdlZW5bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKCksXG4gICAgICAgIHBhcmFtcyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICBwYXJhbXMuc3BsaWNlKG5hbWUgPT09IFwic3RhZ2dlckZyb21Ub1wiID8gNSA6IDQsIDAsIDApO1xuICAgIHJldHVybiB0bFtuYW1lXS5hcHBseSh0bCwgcGFyYW1zKTtcbiAgfTtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQUk9QVFdFRU5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG52YXIgX3NldHRlclBsYWluID0gZnVuY3Rpb24gX3NldHRlclBsYWluKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJGdW5jID0gZnVuY3Rpb24gX3NldHRlckZ1bmModGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0odmFsdWUpO1xufSxcbiAgICBfc2V0dGVyRnVuY1dpdGhQYXJhbSA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jV2l0aFBhcmFtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldKGRhdGEuZnAsIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9zZXR0ZXJBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX2dldFNldHRlciA9IGZ1bmN0aW9uIF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odGFyZ2V0W3Byb3BlcnR5XSkgPyBfc2V0dGVyRnVuYyA6IF9pc1VuZGVmaW5lZCh0YXJnZXRbcHJvcGVydHldKSAmJiB0YXJnZXQuc2V0QXR0cmlidXRlID8gX3NldHRlckF0dHJpYnV0ZSA6IF9zZXR0ZXJQbGFpbjtcbn0sXG4gICAgX3JlbmRlclBsYWluID0gZnVuY3Rpb24gX3JlbmRlclBsYWluKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDAwMCkgLyAxMDAwMDAwLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckJvb2xlYW4gPSBmdW5jdGlvbiBfcmVuZGVyQm9vbGVhbihyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsICEhKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJDb21wbGV4U3RyaW5nID0gZnVuY3Rpb24gX3JlbmRlckNvbXBsZXhTdHJpbmcocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHB0ID0gZGF0YS5fcHQsXG4gICAgICBzID0gXCJcIjtcblxuICBpZiAoIXJhdGlvICYmIGRhdGEuYikge1xuICAgIC8vYiA9IGJlZ2lubmluZyBzdHJpbmdcbiAgICBzID0gZGF0YS5iO1xuICB9IGVsc2UgaWYgKHJhdGlvID09PSAxICYmIGRhdGEuZSkge1xuICAgIC8vZSA9IGVuZGluZyBzdHJpbmdcbiAgICBzID0gZGF0YS5lO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChwdCkge1xuICAgICAgcyA9IHB0LnAgKyAocHQubSA/IHB0Lm0ocHQucyArIHB0LmMgKiByYXRpbykgOiBNYXRoLnJvdW5kKChwdC5zICsgcHQuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwKSArIHM7IC8vd2UgdXNlIHRoZSBcInBcIiBwcm9wZXJ0eSBmb3IgdGhlIHRleHQgaW5iZXR3ZWVuIChsaWtlIGEgc3VmZml4KS4gQW5kIGluIHRoZSBjb250ZXh0IG9mIGEgY29tcGxleCBzdHJpbmcsIHRoZSBtb2RpZmllciAobSkgaXMgdHlwaWNhbGx5IGp1c3QgTWF0aC5yb3VuZCgpLCBsaWtlIGZvciBSR0IgY29sb3JzLlxuXG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHMgKz0gZGF0YS5jOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgY2h1bmsgb2Ygbm9uLW51bWVyaWMgdGV4dC5cbiAgfVxuXG4gIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBzLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlclByb3BUd2VlbnMgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFR3ZWVucyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG59LFxuICAgIF9hZGRQbHVnaW5Nb2RpZmllciA9IGZ1bmN0aW9uIF9hZGRQbHVnaW5Nb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCwgcHJvcGVydHkpIHtcbiAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICBuZXh0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdC5wID09PSBwcm9wZXJ0eSAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCk7XG4gICAgcHQgPSBuZXh0O1xuICB9XG59LFxuICAgIF9raWxsUHJvcFR3ZWVuc09mID0gZnVuY3Rpb24gX2tpbGxQcm9wVHdlZW5zT2YocHJvcGVydHkpIHtcbiAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcsXG4gICAgICBuZXh0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcblxuICAgIGlmIChwdC5wID09PSBwcm9wZXJ0eSAmJiAhcHQub3AgfHwgcHQub3AgPT09IHByb3BlcnR5KSB7XG4gICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgIH0gZWxzZSBpZiAoIXB0LmRlcCkge1xuICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nID0gMTtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICByZXR1cm4gIWhhc05vbkRlcGVuZGVudFJlbWFpbmluZztcbn0sXG4gICAgX3NldHRlcldpdGhNb2RpZmllciA9IGZ1bmN0aW9uIF9zZXR0ZXJXaXRoTW9kaWZpZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgZGF0YS5tU2V0KHRhcmdldCwgcHJvcGVydHksIGRhdGEubS5jYWxsKGRhdGEudHdlZW4sIHZhbHVlLCBkYXRhLm10KSwgZGF0YSk7XG59LFxuICAgIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkgPSBmdW5jdGlvbiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHBhcmVudCkge1xuICB2YXIgcHQgPSBwYXJlbnQuX3B0LFxuICAgICAgbmV4dCxcbiAgICAgIHB0MixcbiAgICAgIGZpcnN0LFxuICAgICAgbGFzdDsgLy9zb3J0cyB0aGUgUHJvcFR3ZWVuIGxpbmtlZCBsaXN0IGluIG9yZGVyIG9mIHByaW9yaXR5IGJlY2F1c2Ugc29tZSBwbHVnaW5zIG5lZWQgdG8gZG8gdGhlaXIgd29yayBhZnRlciBBTEwgb2YgdGhlIFByb3BUd2VlbnMgd2VyZSBjcmVhdGVkIChsaWtlIFJvdW5kUHJvcHNQbHVnaW4gYW5kIE1vZGlmaWVyc1BsdWdpbilcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG4gICAgcHQyID0gZmlyc3Q7XG5cbiAgICB3aGlsZSAocHQyICYmIHB0Mi5wciA+IHB0LnByKSB7XG4gICAgICBwdDIgPSBwdDIuX25leHQ7XG4gICAgfVxuXG4gICAgaWYgKHB0Ll9wcmV2ID0gcHQyID8gcHQyLl9wcmV2IDogbGFzdCkge1xuICAgICAgcHQuX3ByZXYuX25leHQgPSBwdDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlyc3QgPSBwdDtcbiAgICB9XG5cbiAgICBpZiAocHQuX25leHQgPSBwdDIpIHtcbiAgICAgIHB0Mi5fcHJldiA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gcHQ7XG4gICAgfVxuXG4gICAgcHQgPSBuZXh0O1xuICB9XG5cbiAgcGFyZW50Ll9wdCA9IGZpcnN0O1xufTsgLy9Qcm9wVHdlZW4ga2V5OiB0ID0gdGFyZ2V0LCBwID0gcHJvcCwgciA9IHJlbmRlcmVyLCBkID0gZGF0YSwgcyA9IHN0YXJ0LCBjID0gY2hhbmdlLCBvcCA9IG92ZXJ3cml0ZVByb3BlcnR5IChPTkxZIHBvcHVsYXRlZCB3aGVuIGl0J3MgZGlmZmVyZW50IHRoYW4gcCksIHByID0gcHJpb3JpdHksIF9uZXh0L19wcmV2IGZvciB0aGUgbGlua2VkIGxpc3Qgc2libGluZ3MsIHNldCA9IHNldHRlciwgbSA9IG1vZGlmaWVyLCBtU2V0ID0gbW9kaWZpZXJTZXR0ZXIgKHRoZSBvcmlnaW5hbCBzZXR0ZXIsIGJlZm9yZSBhIG1vZGlmaWVyIHdhcyBhZGRlZClcblxuXG5leHBvcnQgdmFyIFByb3BUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFByb3BUd2VlbihuZXh0LCB0YXJnZXQsIHByb3AsIHN0YXJ0LCBjaGFuZ2UsIHJlbmRlcmVyLCBkYXRhLCBzZXR0ZXIsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgIHRoaXMucyA9IHN0YXJ0O1xuICAgIHRoaXMuYyA9IGNoYW5nZTtcbiAgICB0aGlzLnAgPSBwcm9wO1xuICAgIHRoaXMuciA9IHJlbmRlcmVyIHx8IF9yZW5kZXJQbGFpbjtcbiAgICB0aGlzLmQgPSBkYXRhIHx8IHRoaXM7XG4gICAgdGhpcy5zZXQgPSBzZXR0ZXIgfHwgX3NldHRlclBsYWluO1xuICAgIHRoaXMucHIgPSBwcmlvcml0eSB8fCAwO1xuICAgIHRoaXMuX25leHQgPSBuZXh0O1xuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIG5leHQuX3ByZXYgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG80ID0gUHJvcFR3ZWVuLnByb3RvdHlwZTtcblxuICBfcHJvdG80Lm1vZGlmaWVyID0gZnVuY3Rpb24gbW9kaWZpZXIoZnVuYywgdHdlZW4sIHRhcmdldCkge1xuICAgIHRoaXMubVNldCA9IHRoaXMubVNldCB8fCB0aGlzLnNldDsgLy9pbiBjYXNlIGl0IHdhcyBhbHJlYWR5IHNldCAoYSBQcm9wVHdlZW4gY2FuIG9ubHkgaGF2ZSBvbmUgbW9kaWZpZXIpXG5cbiAgICB0aGlzLnNldCA9IF9zZXR0ZXJXaXRoTW9kaWZpZXI7XG4gICAgdGhpcy5tID0gZnVuYztcbiAgICB0aGlzLm10ID0gdGFyZ2V0OyAvL21vZGlmaWVyIHRhcmdldFxuXG4gICAgdGhpcy50d2VlbiA9IHR3ZWVuO1xuICB9O1xuXG4gIHJldHVybiBQcm9wVHdlZW47XG59KCk7IC8vSW5pdGlhbGl6YXRpb24gdGFza3NcblxuX2ZvckVhY2hOYW1lKF9jYWxsYmFja05hbWVzICsgXCJwYXJlbnQsZHVyYXRpb24sZWFzZSxkZWxheSxvdmVyd3JpdGUscnVuQmFja3dhcmRzLHN0YXJ0QXQseW95byxpbW1lZGlhdGVSZW5kZXIscmVwZWF0LHJlcGVhdERlbGF5LGRhdGEscGF1c2VkLHJldmVyc2VkLGxhenksY2FsbGJhY2tTY29wZSxzdHJpbmdGaWx0ZXIsaWQseW95b0Vhc2Usc3RhZ2dlcixpbmhlcml0LHJlcGVhdFJlZnJlc2gsa2V5ZnJhbWVzLGF1dG9SZXZlcnQsc2Nyb2xsVHJpZ2dlcixlYXNlUmV2ZXJzZVwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xufSk7XG5cbl9nbG9iYWxzLlR3ZWVuTWF4ID0gX2dsb2JhbHMuVHdlZW5MaXRlID0gVHdlZW47XG5fZ2xvYmFscy5UaW1lbGluZUxpdGUgPSBfZ2xvYmFscy5UaW1lbGluZU1heCA9IFRpbWVsaW5lO1xuX2dsb2JhbFRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgc29ydENoaWxkcmVuOiBmYWxzZSxcbiAgZGVmYXVsdHM6IF9kZWZhdWx0cyxcbiAgYXV0b1JlbW92ZUNoaWxkcmVuOiB0cnVlLFxuICBpZDogXCJyb290XCIsXG4gIHNtb290aENoaWxkVGltaW5nOiB0cnVlXG59KTtcbl9jb25maWcuc3RyaW5nRmlsdGVyID0gX2NvbG9yU3RyaW5nRmlsdGVyO1xuXG52YXIgX21lZGlhID0gW10sXG4gICAgX2xpc3RlbmVycyA9IHt9LFxuICAgIF9lbXB0eUFycmF5ID0gW10sXG4gICAgX2xhc3RNZWRpYVRpbWUgPSAwLFxuICAgIF9jb250ZXh0SUQgPSAwLFxuICAgIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIF9kaXNwYXRjaCh0eXBlKSB7XG4gIHJldHVybiAoX2xpc3RlbmVyc1t0eXBlXSB8fCBfZW1wdHlBcnJheSkubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYoKTtcbiAgfSk7XG59LFxuICAgIF9vbk1lZGlhQ2hhbmdlID0gZnVuY3Rpb24gX29uTWVkaWFDaGFuZ2UoKSB7XG4gIHZhciB0aW1lID0gRGF0ZS5ub3coKSxcbiAgICAgIG1hdGNoZXMgPSBbXTtcblxuICBpZiAodGltZSAtIF9sYXN0TWVkaWFUaW1lID4gMikge1xuICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFJbml0XCIpO1xuXG4gICAgX21lZGlhLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIHZhciBxdWVyaWVzID0gYy5xdWVyaWVzLFxuICAgICAgICAgIGNvbmRpdGlvbnMgPSBjLmNvbmRpdGlvbnMsXG4gICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgcCxcbiAgICAgICAgICBhbnlNYXRjaCxcbiAgICAgICAgICB0b2dnbGVkO1xuXG4gICAgICBmb3IgKHAgaW4gcXVlcmllcykge1xuICAgICAgICBtYXRjaCA9IF93aW4ubWF0Y2hNZWRpYShxdWVyaWVzW3BdKS5tYXRjaGVzOyAvLyBGaXJlZm94IGRvZXNuJ3QgdXBkYXRlIHRoZSBcIm1hdGNoZXNcIiBwcm9wZXJ0eSBvZiB0aGUgTWVkaWFRdWVyeUxpc3Qgb2JqZWN0IGNvcnJlY3RseSAtIGl0IG9ubHkgZG9lcyBzbyBhcyBpdCBjYWxscyBpdHMgY2hhbmdlIGhhbmRsZXIgLSBzbyB3ZSBtdXN0IHJlLWNyZWF0ZSBhIG1lZGlhIHF1ZXJ5IGhlcmUgdG8gZW5zdXJlIGl0J3MgYWNjdXJhdGUuXG5cbiAgICAgICAgbWF0Y2ggJiYgKGFueU1hdGNoID0gMSk7XG5cbiAgICAgICAgaWYgKG1hdGNoICE9PSBjb25kaXRpb25zW3BdKSB7XG4gICAgICAgICAgY29uZGl0aW9uc1twXSA9IG1hdGNoO1xuICAgICAgICAgIHRvZ2dsZWQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2dnbGVkKSB7XG4gICAgICAgIGMucmV2ZXJ0KCk7XG4gICAgICAgIGFueU1hdGNoICYmIG1hdGNoZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFSZXZlcnRcIik7XG5cbiAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjLm9uTWF0Y2goYywgZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIGMuYWRkKG51bGwsIGZ1bmMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgX2xhc3RNZWRpYVRpbWUgPSB0aW1lO1xuXG4gICAgX2Rpc3BhdGNoKFwibWF0Y2hNZWRpYVwiKTtcbiAgfVxufTtcblxudmFyIENvbnRleHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb250ZXh0KGZ1bmMsIHNjb3BlKSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNjb3BlICYmIHNlbGVjdG9yKHNjb3BlKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLl9yID0gW107IC8vIHJldHVybmVkL2NsZWFudXAgZnVuY3Rpb25zXG5cbiAgICB0aGlzLmlzUmV2ZXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlkID0gX2NvbnRleHRJRCsrOyAvLyB0byB3b3JrIGFyb3VuZCBpc3N1ZXMgdGhhdCBmcmFtZXdvcmtzIGxpa2UgVnVlIGNhdXNlIGJ5IG1ha2luZyB0aGluZ3MgaW50byBQcm94aWVzIHdoaWNoIG1ha2UgaXQgaW1wb3NzaWJsZSB0byBkbyBzb21ldGhpbmcgbGlrZSBfbWVkaWEuaW5kZXhPZih0aGlzKSBiZWNhdXNlIFwidGhpc1wiIHdvdWxkIG5vIGxvbmdlciByZWZlciB0byB0aGUgQ29udGV4dCBpbnN0YW5jZSBpdHNlbGYgLSBpdCdkIHJlZmVyIHRvIGEgUHJveHkhIFdlIG5lZWRlZCBhIHdheSB0byBpZGVudGlmeSB0aGUgY29udGV4dCB1bmlxdWVseVxuXG4gICAgZnVuYyAmJiB0aGlzLmFkZChmdW5jKTtcbiAgfVxuXG4gIHZhciBfcHJvdG81ID0gQ29udGV4dC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNS5hZGQgPSBmdW5jdGlvbiBhZGQobmFtZSwgZnVuYywgc2NvcGUpIHtcbiAgICAvLyBwb3NzaWJsZSBmdXR1cmUgYWRkaXRpb24gaWYgd2UgbmVlZCB0aGUgYWJpbGl0eSB0byBhZGQoKSBhbiBhbmltYXRpb24gdG8gYSBjb250ZXh0IGFuZCBmb3Igd2hhdGV2ZXIgcmVhc29uIGNhbm5vdCBjcmVhdGUgdGhhdCBhbmltYXRpb24gaW5zaWRlIG9mIGEgY29udGV4dC5hZGQoKCkgPT4gey4uLn0pIGZ1bmN0aW9uLlxuICAgIC8vIGlmIChuYW1lICYmIF9pc0Z1bmN0aW9uKG5hbWUucmV2ZXJ0KSkge1xuICAgIC8vIFx0dGhpcy5kYXRhLnB1c2gobmFtZSk7XG4gICAgLy8gXHRyZXR1cm4gKG5hbWUuX2N0eCA9IHRoaXMpO1xuICAgIC8vIH1cbiAgICBpZiAoX2lzRnVuY3Rpb24obmFtZSkpIHtcbiAgICAgIHNjb3BlID0gZnVuYztcbiAgICAgIGZ1bmMgPSBuYW1lO1xuICAgICAgbmFtZSA9IF9pc0Z1bmN0aW9uO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgZiA9IGZ1bmN0aW9uIGYoKSB7XG4gICAgICB2YXIgcHJldiA9IF9jb250ZXh0LFxuICAgICAgICAgIHByZXZTZWxlY3RvciA9IHNlbGYuc2VsZWN0b3IsXG4gICAgICAgICAgcmVzdWx0O1xuICAgICAgcHJldiAmJiBwcmV2ICE9PSBzZWxmICYmIHByZXYuZGF0YS5wdXNoKHNlbGYpO1xuICAgICAgc2NvcGUgJiYgKHNlbGYuc2VsZWN0b3IgPSBzZWxlY3RvcihzY29wZSkpO1xuICAgICAgX2NvbnRleHQgPSBzZWxmO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgX2lzRnVuY3Rpb24ocmVzdWx0KSAmJiBzZWxmLl9yLnB1c2gocmVzdWx0KTtcbiAgICAgIF9jb250ZXh0ID0gcHJldjtcbiAgICAgIHNlbGYuc2VsZWN0b3IgPSBwcmV2U2VsZWN0b3I7XG4gICAgICBzZWxmLmlzUmV2ZXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHNlbGYubGFzdCA9IGY7XG4gICAgcmV0dXJuIG5hbWUgPT09IF9pc0Z1bmN0aW9uID8gZihzZWxmLCBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgcmV0dXJuIHNlbGYuYWRkKG51bGwsIGZ1bmMpO1xuICAgIH0pIDogbmFtZSA/IHNlbGZbbmFtZV0gPSBmIDogZjtcbiAgfTtcblxuICBfcHJvdG81Lmlnbm9yZSA9IGZ1bmN0aW9uIGlnbm9yZShmdW5jKSB7XG4gICAgdmFyIHByZXYgPSBfY29udGV4dDtcbiAgICBfY29udGV4dCA9IG51bGw7XG4gICAgZnVuYyh0aGlzKTtcbiAgICBfY29udGV4dCA9IHByZXY7XG4gIH07XG5cbiAgX3Byb3RvNS5nZXRUd2VlbnMgPSBmdW5jdGlvbiBnZXRUd2VlbnMoKSB7XG4gICAgdmFyIGEgPSBbXTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBDb250ZXh0ID8gYS5wdXNoLmFwcGx5KGEsIGUuZ2V0VHdlZW5zKCkpIDogZSBpbnN0YW5jZW9mIFR3ZWVuICYmICEoZS5wYXJlbnQgJiYgZS5wYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIikgJiYgYS5wdXNoKGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIF9wcm90bzUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLl9yLmxlbmd0aCA9IHRoaXMuZGF0YS5sZW5ndGggPSAwO1xuICB9O1xuXG4gIF9wcm90bzUua2lsbCA9IGZ1bmN0aW9uIGtpbGwocmV2ZXJ0LCBtYXRjaE1lZGlhKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAocmV2ZXJ0KSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHdlZW5zID0gX3RoaXM0LmdldFR3ZWVucygpLFxuICAgICAgICAgICAgaSA9IF90aGlzNC5kYXRhLmxlbmd0aCxcbiAgICAgICAgICAgIHQ7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIC8vIEZsaXAgcGx1Z2luIHR3ZWVucyBhcmUgdmVyeSBkaWZmZXJlbnQgaW4gdGhhdCB0aGV5IHNob3VsZCBhY3R1YWxseSBiZSBwdXNoZWQgdG8gdGhlaXIgZW5kLiBUaGUgcGx1Z2luIHJlcGxhY2VzIHRoZSB0aW1lbGluZSdzIC5yZXZlcnQoKSBtZXRob2QgdG8gZG8gZXhhY3RseSB0aGF0LiBCdXQgd2UgYWxzbyBuZWVkIHRvIHJlbW92ZSBhbnkgb2YgdGhvc2UgbmVzdGVkIHR3ZWVucyBpbnNpZGUgdGhlIGZsaXAgdGltZWxpbmUgc28gdGhhdCB0aGV5IGRvbid0IGdldCBpbmRpdmlkdWFsbHkgcmV2ZXJ0ZWQuXG4gICAgICAgICAgdCA9IF90aGlzNC5kYXRhW2ldO1xuXG4gICAgICAgICAgaWYgKHQuZGF0YSA9PT0gXCJpc0ZsaXBcIikge1xuICAgICAgICAgICAgdC5yZXZlcnQoKTtcbiAgICAgICAgICAgIHQuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHJ1ZSwgZmFsc2UpLmZvckVhY2goZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0d2VlbnMuc3BsaWNlKHR3ZWVucy5pbmRleE9mKHR3ZWVuKSwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gc2F2ZSBhcyBhbiBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gY2FjaGUgdGhlIGdsb2JhbFRpbWUgZm9yIGVhY2ggdHdlZW4gdG8gb3B0aW1pemUgcGVyZm9ybWFuY2UgZHVyaW5nIHRoZSBzb3J0XG5cblxuICAgICAgICB0d2VlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGc6IHQuX2R1ciB8fCB0Ll9kZWxheSB8fCB0Ll9zYXQgJiYgIXQuX3NhdC52YXJzLmltbWVkaWF0ZVJlbmRlciA/IHQuZ2xvYmFsVGltZSgwKSA6IC1JbmZpbml0eSxcbiAgICAgICAgICAgIHQ6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGIuZyAtIGEuZyB8fCAtSW5maW5pdHk7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICByZXR1cm4gby50LnJldmVydChyZXZlcnQpO1xuICAgICAgICB9KTsgLy8gbm90ZTogYWxsIG9mIHRoZSBfc3RhcnRBdCB0d2VlbnMgc2hvdWxkIGJlIHJldmVydGVkIGluIHJldmVyc2Ugb3JkZXIgdGhhdCB0aGV5IHdlcmUgY3JlYXRlZCwgYW5kIHRoZXknbGwgYWxsIGhhdmUgdGhlIHNhbWUgZ2xvYmFsVGltZSAoLTEpIHNvIHRoZSBcIiB8fCAtMVwiIGluIHRoZSBzb3J0IGtlZXBzIHRoZSBvcmRlciBwcm9wZXJseS5cblxuICAgICAgICBpID0gX3RoaXM0LmRhdGEubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgbG9vcCBiYWNrd2FyZHMgc28gdGhhdCwgZm9yIGV4YW1wbGUsIFNwbGl0VGV4dHMgdGhhdCB3ZXJlIGNyZWF0ZWQgbGF0ZXIgb24gdGhlIHNhbWUgZWxlbWVudCBnZXQgcmV2ZXJ0ZWQgZmlyc3RcbiAgICAgICAgICB0ID0gX3RoaXM0LmRhdGFbaV07XG5cbiAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIFRpbWVsaW5lKSB7XG4gICAgICAgICAgICBpZiAodC5kYXRhICE9PSBcIm5lc3RlZFwiKSB7XG4gICAgICAgICAgICAgIHQuc2Nyb2xsVHJpZ2dlciAmJiB0LnNjcm9sbFRyaWdnZXIucmV2ZXJ0KCk7XG4gICAgICAgICAgICAgIHQua2lsbCgpOyAvLyBkb24ndCByZXZlcnQoKSB0aGUgdGltZWxpbmUgYmVjYXVzZSB0aGF0J3MgZHVwbGljYXRpbmcgZWZmb3J0cyBzaW5jZSB3ZSBhbHJlYWR5IHJldmVydGVkIGFsbCB0aGUgdHdlZW5zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICEodCBpbnN0YW5jZW9mIFR3ZWVuKSAmJiB0LnJldmVydCAmJiB0LnJldmVydChyZXZlcnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzNC5fci5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgcmV0dXJuIGYocmV2ZXJ0LCBfdGhpczQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpczQuaXNSZXZlcnRlZCA9IHRydWU7XG4gICAgICB9KSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5raWxsICYmIGUua2lsbCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKG1hdGNoTWVkaWEpIHtcbiAgICAgIHZhciBpID0gX21lZGlhLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAvLyBwcmV2aW91c2x5LCB3ZSBjaGVja2VkIF9tZWRpYS5pbmRleE9mKHRoaXMpLCBidXQgc29tZSBmcmFtZXdvcmtzIGxpa2UgVnVlIGVuZm9yY2UgUHJveHkgb2JqZWN0cyB0aGF0IG1ha2UgaXQgaW1wb3NzaWJsZSB0byBnZXQgdGhlIHByb3BlciByZXN1bHQgdGhhdCB3YXksIHNvIHdlIG11c3QgdXNlIGEgdW5pcXVlIElEIG51bWJlciBpbnN0ZWFkLlxuICAgICAgICBfbWVkaWFbaV0uaWQgPT09IHRoaXMuaWQgJiYgX21lZGlhLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8ga2lsbFdpdGhDbGVhbnVwKCkge1xuICAvLyBcdHRoaXMua2lsbCgpO1xuICAvLyBcdHRoaXMuX3IuZm9yRWFjaChmID0+IGYoZmFsc2UsIHRoaXMpKTtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvNS5yZXZlcnQgPSBmdW5jdGlvbiByZXZlcnQoY29uZmlnKSB7XG4gICAgdGhpcy5raWxsKGNvbmZpZyB8fCB7fSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRleHQ7XG59KCk7XG5cbnZhciBNYXRjaE1lZGlhID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF0Y2hNZWRpYShzY29wZSkge1xuICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgX2NvbnRleHQgJiYgX2NvbnRleHQuZGF0YS5wdXNoKHRoaXMpO1xuICB9XG5cbiAgdmFyIF9wcm90bzYgPSBNYXRjaE1lZGlhLnByb3RvdHlwZTtcblxuICBfcHJvdG82LmFkZCA9IGZ1bmN0aW9uIGFkZChjb25kaXRpb25zLCBmdW5jLCBzY29wZSkge1xuICAgIF9pc09iamVjdChjb25kaXRpb25zKSB8fCAoY29uZGl0aW9ucyA9IHtcbiAgICAgIG1hdGNoZXM6IGNvbmRpdGlvbnNcbiAgICB9KTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KDAsIHNjb3BlIHx8IHRoaXMuc2NvcGUpLFxuICAgICAgICBjb25kID0gY29udGV4dC5jb25kaXRpb25zID0ge30sXG4gICAgICAgIG1xLFxuICAgICAgICBwLFxuICAgICAgICBhY3RpdmU7XG4gICAgX2NvbnRleHQgJiYgIWNvbnRleHQuc2VsZWN0b3IgJiYgKGNvbnRleHQuc2VsZWN0b3IgPSBfY29udGV4dC5zZWxlY3Rvcik7IC8vIGluIGNhc2UgYSBjb250ZXh0IGlzIGNyZWF0ZWQgaW5zaWRlIGEgY29udGV4dC4gTGlrZSBhIGdzYXAubWF0Y2hNZWRpYSgpIHRoYXQncyBpbnNpZGUgYSBzY29wZWQgZ3NhcC5jb250ZXh0KClcblxuICAgIHRoaXMuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICBmdW5jID0gY29udGV4dC5hZGQoXCJvbk1hdGNoXCIsIGZ1bmMpO1xuICAgIGNvbnRleHQucXVlcmllcyA9IGNvbmRpdGlvbnM7XG5cbiAgICBmb3IgKHAgaW4gY29uZGl0aW9ucykge1xuICAgICAgaWYgKHAgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgYWN0aXZlID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1xID0gX3dpbi5tYXRjaE1lZGlhKGNvbmRpdGlvbnNbcF0pO1xuXG4gICAgICAgIGlmIChtcSkge1xuICAgICAgICAgIF9tZWRpYS5pbmRleE9mKGNvbnRleHQpIDwgMCAmJiBfbWVkaWEucHVzaChjb250ZXh0KTtcbiAgICAgICAgICAoY29uZFtwXSA9IG1xLm1hdGNoZXMpICYmIChhY3RpdmUgPSAxKTtcbiAgICAgICAgICBtcS5hZGRMaXN0ZW5lciA/IG1xLmFkZExpc3RlbmVyKF9vbk1lZGlhQ2hhbmdlKSA6IG1xLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgX29uTWVkaWFDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZlICYmIGZ1bmMoY29udGV4dCwgZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LmFkZChudWxsLCBmKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyByZWZyZXNoKCkge1xuICAvLyBcdGxldCB0aW1lID0gX2xhc3RNZWRpYVRpbWUsXG4gIC8vIFx0XHRtZWRpYSA9IF9tZWRpYTtcbiAgLy8gXHRfbGFzdE1lZGlhVGltZSA9IC0xO1xuICAvLyBcdF9tZWRpYSA9IHRoaXMuY29udGV4dHM7XG4gIC8vIFx0X29uTWVkaWFDaGFuZ2UoKTtcbiAgLy8gXHRfbGFzdE1lZGlhVGltZSA9IHRpbWU7XG4gIC8vIFx0X21lZGlhID0gbWVkaWE7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90bzYucmV2ZXJ0ID0gZnVuY3Rpb24gcmV2ZXJ0KGNvbmZpZykge1xuICAgIHRoaXMua2lsbChjb25maWcgfHwge30pO1xuICB9O1xuXG4gIF9wcm90bzYua2lsbCA9IGZ1bmN0aW9uIGtpbGwocmV2ZXJ0KSB7XG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5raWxsKHJldmVydCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1hdGNoTWVkaWE7XG59KCk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdTQVBcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG52YXIgX2dzYXAgPSB7XG4gIHJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbiByZWdpc3RlclBsdWdpbigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgcmV0dXJuIF9jcmVhdGVQbHVnaW4oY29uZmlnKTtcbiAgICB9KTtcbiAgfSxcbiAgdGltZWxpbmU6IGZ1bmN0aW9uIHRpbWVsaW5lKHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFRpbWVsaW5lKHZhcnMpO1xuICB9LFxuICBnZXRUd2VlbnNPZjogZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSk7XG4gIH0sXG4gIGdldFByb3BlcnR5OiBmdW5jdGlvbiBnZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgX2lzU3RyaW5nKHRhcmdldCkgJiYgKHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KVswXSk7IC8vaW4gY2FzZSBzZWxlY3RvciB0ZXh0IG9yIGFuIGFycmF5IGlzIHBhc3NlZCBpblxuXG4gICAgdmFyIGdldHRlciA9IF9nZXRDYWNoZSh0YXJnZXQgfHwge30pLmdldCxcbiAgICAgICAgZm9ybWF0ID0gdW5pdCA/IF9wYXNzVGhyb3VnaCA6IF9udW1lcmljSWZQb3NzaWJsZTtcblxuICAgIHVuaXQgPT09IFwibmF0aXZlXCIgJiYgKHVuaXQgPSBcIlwiKTtcbiAgICByZXR1cm4gIXRhcmdldCA/IHRhcmdldCA6ICFwcm9wZXJ0eSA/IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gICAgfSA6IGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gIH0sXG4gIHF1aWNrU2V0dGVyOiBmdW5jdGlvbiBxdWlja1NldHRlcih0YXJnZXQsIHByb3BlcnR5LCB1bml0KSB7XG4gICAgdGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpO1xuXG4gICAgaWYgKHRhcmdldC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgc2V0dGVycyA9IHRhcmdldC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGdzYXAucXVpY2tTZXR0ZXIodCwgcHJvcGVydHksIHVuaXQpO1xuICAgICAgfSksXG4gICAgICAgICAgbCA9IHNldHRlcnMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IGw7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHNldHRlcnNbaV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRhcmdldCA9IHRhcmdldFswXSB8fCB7fTtcblxuICAgIHZhciBQbHVnaW4gPSBfcGx1Z2luc1twcm9wZXJ0eV0sXG4gICAgICAgIGNhY2hlID0gX2dldENhY2hlKHRhcmdldCksXG4gICAgICAgIHAgPSBjYWNoZS5oYXJuZXNzICYmIChjYWNoZS5oYXJuZXNzLmFsaWFzZXMgfHwge30pW3Byb3BlcnR5XSB8fCBwcm9wZXJ0eSxcbiAgICAgICAgLy8gaW4gY2FzZSBpdCdzIGFuIGFsaWFzLCBsaWtlIFwicm90YXRlXCIgZm9yIFwicm90YXRpb25cIi5cbiAgICBzZXR0ZXIgPSBQbHVnaW4gPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBwID0gbmV3IFBsdWdpbigpO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ID0gMDtcbiAgICAgIHAuaW5pdCh0YXJnZXQsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgX3F1aWNrVHdlZW4sIDAsIFt0YXJnZXRdKTtcbiAgICAgIHAucmVuZGVyKDEsIHApO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ICYmIF9yZW5kZXJQcm9wVHdlZW5zKDEsIF9xdWlja1R3ZWVuKTtcbiAgICB9IDogY2FjaGUuc2V0KHRhcmdldCwgcCk7XG5cbiAgICByZXR1cm4gUGx1Z2luID8gc2V0dGVyIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2V0dGVyKHRhcmdldCwgcCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBjYWNoZSwgMSk7XG4gICAgfTtcbiAgfSxcbiAgcXVpY2tUbzogZnVuY3Rpb24gcXVpY2tUbyh0YXJnZXQsIHByb3BlcnR5LCB2YXJzKSB7XG4gICAgdmFyIF9zZXREZWZhdWx0czI7XG5cbiAgICB2YXIgdHdlZW4gPSBnc2FwLnRvKHRhcmdldCwgX3NldERlZmF1bHRzKChfc2V0RGVmYXVsdHMyID0ge30sIF9zZXREZWZhdWx0czJbcHJvcGVydHldID0gXCIrPTAuMVwiLCBfc2V0RGVmYXVsdHMyLnBhdXNlZCA9IHRydWUsIF9zZXREZWZhdWx0czIuc3RhZ2dlciA9IDAsIF9zZXREZWZhdWx0czIpLCB2YXJzIHx8IHt9KSksXG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlKSB7XG4gICAgICByZXR1cm4gdHdlZW4ucmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpO1xuICAgIH07XG5cbiAgICBmdW5jLnR3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0sXG4gIGlzVHdlZW5pbmc6IGZ1bmN0aW9uIGlzVHdlZW5pbmcodGFyZ2V0cykge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgdHJ1ZSkubGVuZ3RoID4gMDtcbiAgfSxcbiAgZGVmYXVsdHM6IGZ1bmN0aW9uIGRlZmF1bHRzKHZhbHVlKSB7XG4gICAgdmFsdWUgJiYgdmFsdWUuZWFzZSAmJiAodmFsdWUuZWFzZSA9IF9wYXJzZUVhc2UodmFsdWUuZWFzZSwgX2RlZmF1bHRzLmVhc2UpKTtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfZGVmYXVsdHMsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcodmFsdWUpIHtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfY29uZmlnLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIHJlZ2lzdGVyRWZmZWN0OiBmdW5jdGlvbiByZWdpc3RlckVmZmVjdChfcmVmMykge1xuICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0LFxuICAgICAgICBwbHVnaW5zID0gX3JlZjMucGx1Z2lucyxcbiAgICAgICAgZGVmYXVsdHMgPSBfcmVmMy5kZWZhdWx0cyxcbiAgICAgICAgZXh0ZW5kVGltZWxpbmUgPSBfcmVmMy5leHRlbmRUaW1lbGluZTtcbiAgICAocGx1Z2lucyB8fCBcIlwiKS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xuICAgICAgcmV0dXJuIHBsdWdpbk5hbWUgJiYgIV9wbHVnaW5zW3BsdWdpbk5hbWVdICYmICFfZ2xvYmFsc1twbHVnaW5OYW1lXSAmJiBfd2FybihuYW1lICsgXCIgZWZmZWN0IHJlcXVpcmVzIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbi5cIik7XG4gICAgfSk7XG5cbiAgICBfZWZmZWN0c1tuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCB0bCkge1xuICAgICAgcmV0dXJuIGVmZmVjdCh0b0FycmF5KHRhcmdldHMpLCBfc2V0RGVmYXVsdHModmFycyB8fCB7fSwgZGVmYXVsdHMpLCB0bCk7XG4gICAgfTtcblxuICAgIGlmIChleHRlbmRUaW1lbGluZSkge1xuICAgICAgVGltZWxpbmUucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChfZWZmZWN0c1tuYW1lXSh0YXJnZXRzLCBfaXNPYmplY3QodmFycykgPyB2YXJzIDogKHBvc2l0aW9uID0gdmFycykgJiYge30sIHRoaXMpLCBwb3NpdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgcmVnaXN0ZXJFYXNlOiBmdW5jdGlvbiByZWdpc3RlckVhc2UobmFtZSwgZWFzZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX3BhcnNlRWFzZShlYXNlKTtcbiAgfSxcbiAgcGFyc2VFYXNlOiBmdW5jdGlvbiBwYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIDogX2Vhc2VNYXA7XG4gIH0sXG4gIGdldEJ5SWQ6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldEJ5SWQoaWQpO1xuICB9LFxuICBleHBvcnRSb290OiBmdW5jdGlvbiBleHBvcnRSb290KHZhcnMsIGluY2x1ZGVEZWxheWVkQ2FsbHMpIHtcbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKHZhcnMpLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dDtcbiAgICB0bC5zbW9vdGhDaGlsZFRpbWluZyA9IF9pc05vdEZhbHNlKHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcpO1xuXG4gICAgX2dsb2JhbFRpbWVsaW5lLnJlbW92ZSh0bCk7XG5cbiAgICB0bC5fZHAgPSAwOyAvL290aGVyd2lzZSBpdCdsbCBnZXQgcmUtYWN0aXZhdGVkIHdoZW4gYWRkaW5nIGNoaWxkcmVuIGFuZCBiZSByZS1pbnRyb2R1Y2VkIGludG8gX2dsb2JhbFRpbWVsaW5lJ3MgbGlua2VkIGxpc3QgKHRoZW4gYWRkZWQgdG8gaXRzZWxmKS5cblxuICAgIHRsLl90aW1lID0gdGwuX3RUaW1lID0gX2dsb2JhbFRpbWVsaW5lLl90aW1lO1xuICAgIGNoaWxkID0gX2dsb2JhbFRpbWVsaW5lLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICBpZiAoaW5jbHVkZURlbGF5ZWRDYWxscyB8fCAhKCFjaGlsZC5fZHVyICYmIGNoaWxkIGluc3RhbmNlb2YgVHdlZW4gJiYgY2hpbGQudmFycy5vbkNvbXBsZXRlID09PSBjaGlsZC5fdGFyZ2V0c1swXSkpIHtcbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGwsIGNoaWxkLCBjaGlsZC5fc3RhcnQgLSBjaGlsZC5fZGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUoX2dsb2JhbFRpbWVsaW5lLCB0bCwgMCk7XG5cbiAgICByZXR1cm4gdGw7XG4gIH0sXG4gIGNvbnRleHQ6IGZ1bmN0aW9uIGNvbnRleHQoZnVuYywgc2NvcGUpIHtcbiAgICByZXR1cm4gZnVuYyA/IG5ldyBDb250ZXh0KGZ1bmMsIHNjb3BlKSA6IF9jb250ZXh0O1xuICB9LFxuICBtYXRjaE1lZGlhOiBmdW5jdGlvbiBtYXRjaE1lZGlhKHNjb3BlKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaE1lZGlhKHNjb3BlKTtcbiAgfSxcbiAgbWF0Y2hNZWRpYVJlZnJlc2g6IGZ1bmN0aW9uIG1hdGNoTWVkaWFSZWZyZXNoKCkge1xuICAgIHJldHVybiBfbWVkaWEuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIGNvbmQgPSBjLmNvbmRpdGlvbnMsXG4gICAgICAgICAgZm91bmQsXG4gICAgICAgICAgcDtcblxuICAgICAgZm9yIChwIGluIGNvbmQpIHtcbiAgICAgICAgaWYgKGNvbmRbcF0pIHtcbiAgICAgICAgICBjb25kW3BdID0gZmFsc2U7XG4gICAgICAgICAgZm91bmQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvdW5kICYmIGMucmV2ZXJ0KCk7XG4gICAgfSkgfHwgX29uTWVkaWFDaGFuZ2UoKTtcbiAgfSxcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaykge1xuICAgIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSB8fCAoX2xpc3RlbmVyc1t0eXBlXSA9IFtdKTtcbiAgICB+YS5pbmRleE9mKGNhbGxiYWNrKSB8fCBhLnB1c2goY2FsbGJhY2spO1xuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdLFxuICAgICAgICBpID0gYSAmJiBhLmluZGV4T2YoY2FsbGJhY2spO1xuICAgIGkgPj0gMCAmJiBhLnNwbGljZShpLCAxKTtcbiAgfSxcbiAgdXRpbHM6IHtcbiAgICB3cmFwOiB3cmFwLFxuICAgIHdyYXBZb3lvOiB3cmFwWW95byxcbiAgICBkaXN0cmlidXRlOiBkaXN0cmlidXRlLFxuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNuYXA6IHNuYXAsXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgZ2V0VW5pdDogZ2V0VW5pdCxcbiAgICBjbGFtcDogY2xhbXAsXG4gICAgc3BsaXRDb2xvcjogc3BsaXRDb2xvcixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBtYXBSYW5nZTogbWFwUmFuZ2UsXG4gICAgcGlwZTogcGlwZSxcbiAgICB1bml0aXplOiB1bml0aXplLFxuICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICBzaHVmZmxlOiBzaHVmZmxlXG4gIH0sXG4gIGluc3RhbGw6IF9pbnN0YWxsLFxuICBlZmZlY3RzOiBfZWZmZWN0cyxcbiAgdGlja2VyOiBfdGlja2VyLFxuICB1cGRhdGVSb290OiBUaW1lbGluZS51cGRhdGVSb290LFxuICBwbHVnaW5zOiBfcGx1Z2lucyxcbiAgZ2xvYmFsVGltZWxpbmU6IF9nbG9iYWxUaW1lbGluZSxcbiAgY29yZToge1xuICAgIFByb3BUd2VlbjogUHJvcFR3ZWVuLFxuICAgIGdsb2JhbHM6IF9hZGRHbG9iYWwsXG4gICAgVHdlZW46IFR3ZWVuLFxuICAgIFRpbWVsaW5lOiBUaW1lbGluZSxcbiAgICBBbmltYXRpb246IEFuaW1hdGlvbixcbiAgICBnZXRDYWNoZTogX2dldENhY2hlLFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbTogX3JlbW92ZUxpbmtlZExpc3RJdGVtLFxuICAgIHJldmVydGluZzogZnVuY3Rpb24gcmV2ZXJ0aW5nKCkge1xuICAgICAgcmV0dXJuIF9yZXZlcnRpbmc7XG4gICAgfSxcbiAgICBjb250ZXh0OiBmdW5jdGlvbiBjb250ZXh0KHRvQWRkKSB7XG4gICAgICBpZiAodG9BZGQgJiYgX2NvbnRleHQpIHtcbiAgICAgICAgX2NvbnRleHQuZGF0YS5wdXNoKHRvQWRkKTtcblxuICAgICAgICB0b0FkZC5fY3R4ID0gX2NvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfY29udGV4dDtcbiAgICB9LFxuICAgIHN1cHByZXNzT3ZlcndyaXRlczogZnVuY3Rpb24gc3VwcHJlc3NPdmVyd3JpdGVzKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3N1cHByZXNzT3ZlcndyaXRlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcblxuX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sZGVsYXllZENhbGwsc2V0LGtpbGxUd2VlbnNPZlwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2dzYXBbbmFtZV0gPSBUd2VlbltuYW1lXTtcbn0pO1xuXG5fdGlja2VyLmFkZChUaW1lbGluZS51cGRhdGVSb290KTtcblxuX3F1aWNrVHdlZW4gPSBfZ3NhcC50byh7fSwge1xuICBkdXJhdGlvbjogMFxufSk7IC8vIC0tLS0gRVhUUkEgUExVR0lOUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgX2dldFBsdWdpblByb3BUd2VlbiA9IGZ1bmN0aW9uIF9nZXRQbHVnaW5Qcm9wVHdlZW4ocGx1Z2luLCBwcm9wKSB7XG4gIHZhciBwdCA9IHBsdWdpbi5fcHQ7XG5cbiAgd2hpbGUgKHB0ICYmIHB0LnAgIT09IHByb3AgJiYgcHQub3AgIT09IHByb3AgJiYgcHQuZnAgIT09IHByb3ApIHtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkTW9kaWZpZXJzID0gZnVuY3Rpb24gX2FkZE1vZGlmaWVycyh0d2VlbiwgbW9kaWZpZXJzKSB7XG4gIHZhciB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIHB0O1xuXG4gIGZvciAocCBpbiBtb2RpZmllcnMpIHtcbiAgICBpID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwdCA9IHR3ZWVuLl9wdExvb2t1cFtpXVtwXTtcblxuICAgICAgaWYgKHB0ICYmIChwdCA9IHB0LmQpKSB7XG4gICAgICAgIGlmIChwdC5fcHQpIHtcbiAgICAgICAgICAvLyBpcyBhIHBsdWdpblxuICAgICAgICAgIHB0ID0gX2dldFBsdWdpblByb3BUd2VlbihwdCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdCAmJiBwdC5tb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllcnNbcF0sIHR3ZWVuLCB0YXJnZXRzW2ldLCBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2J1aWxkTW9kaWZpZXJQbHVnaW4gPSBmdW5jdGlvbiBfYnVpbGRNb2RpZmllclBsdWdpbihuYW1lLCBtb2RpZmllcikge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaGVhZGxlc3M6IDEsXG4gICAgcmF3VmFyczogMSxcbiAgICAvL2Rvbid0IHByZS1wcm9jZXNzIGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyBvciBcInJhbmRvbSgpXCIgc3RyaW5ncy5cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4pIHtcbiAgICAgIHR3ZWVuLl9vbkluaXQgPSBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgdmFyIHRlbXAsIHA7XG5cbiAgICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBbbmFtZV0gPSAxO1xuICAgICAgICAgIH0pOyAvL2lmIHRoZSB1c2VyIHBhc3NlcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzIHRvIHJvdW5kUHJvcHMsIGxpa2UgXCJ4LHlcIiwgd2Ugcm91bmQgdG8gd2hvbGUgbnVtYmVycy5cblxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgdGVtcFtwXSA9IG1vZGlmaWVyKHZhcnNbcF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhcnMgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZE1vZGlmaWVycyh0d2VlbiwgdmFycyk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07IC8vcmVnaXN0ZXIgY29yZSBwbHVnaW5zXG5cblxuZXhwb3J0IHZhciBnc2FwID0gX2dzYXAucmVnaXN0ZXJQbHVnaW4oe1xuICBuYW1lOiBcImF0dHJcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgIHZhciBwLCBwdCwgdjtcbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgdiA9IHRhcmdldC5nZXRBdHRyaWJ1dGUocCkgfHwgXCJcIjtcbiAgICAgIHB0ID0gdGhpcy5hZGQodGFyZ2V0LCBcInNldEF0dHJpYnV0ZVwiLCAodiB8fCAwKSArIFwiXCIsIHZhcnNbcF0sIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgIHB0Lm9wID0gcDtcbiAgICAgIHB0LmIgPSB2OyAvLyByZWNvcmQgdGhlIGJlZ2lubmluZyB2YWx1ZSBzbyB3ZSBjYW4gcmV2ZXJ0KClcblxuICAgICAgdGhpcy5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHJhdGlvLCBkYXRhKSB7XG4gICAgdmFyIHB0ID0gZGF0YS5fcHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIF9yZXZlcnRpbmcgPyBwdC5zZXQocHQudCwgcHQucCwgcHQuYiwgcHQpIDogcHQucihyYXRpbywgcHQuZCk7IC8vIGlmIHJldmVydGluZywgZ28gYmFjayB0byB0aGUgb3JpZ2luYWwgKHB0LmIpXG5cbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuICB9XG59LCB7XG4gIG5hbWU6IFwiZW5kQXJyYXlcIixcbiAgaGVhZGxlc3M6IDEsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YWx1ZSkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5hZGQodGFyZ2V0LCBpLCB0YXJnZXRbaV0gfHwgMCwgdmFsdWVbaV0sIDAsIDAsIDAsIDAsIDAsIDEpO1xuICAgIH1cbiAgfVxufSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJyb3VuZFByb3BzXCIsIF9yb3VuZE1vZGlmaWVyKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJtb2RpZmllcnNcIiksIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwic25hcFwiLCBzbmFwKSkgfHwgX2dzYXA7IC8vdG8gcHJldmVudCB0aGUgY29yZSBwbHVnaW5zIGZyb20gYmVpbmcgZHJvcHBlZCB2aWEgYWdncmVzc2l2ZSB0cmVlIHNoYWtpbmcsIHdlIG11c3QgaW5jbHVkZSB0aGVtIGluIHRoZSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBpbiB0aGlzIHdheS5cblxuVHdlZW4udmVyc2lvbiA9IFRpbWVsaW5lLnZlcnNpb24gPSBnc2FwLnZlcnNpb24gPSBcIjMuMTUuMFwiO1xuX2NvcmVSZWFkeSA9IDE7XG5fd2luZG93RXhpc3RzKCkgJiYgX3dha2UoKTtcbnZhciBQb3dlcjAgPSBfZWFzZU1hcC5Qb3dlcjAsXG4gICAgUG93ZXIxID0gX2Vhc2VNYXAuUG93ZXIxLFxuICAgIFBvd2VyMiA9IF9lYXNlTWFwLlBvd2VyMixcbiAgICBQb3dlcjMgPSBfZWFzZU1hcC5Qb3dlcjMsXG4gICAgUG93ZXI0ID0gX2Vhc2VNYXAuUG93ZXI0LFxuICAgIExpbmVhciA9IF9lYXNlTWFwLkxpbmVhcixcbiAgICBRdWFkID0gX2Vhc2VNYXAuUXVhZCxcbiAgICBDdWJpYyA9IF9lYXNlTWFwLkN1YmljLFxuICAgIFF1YXJ0ID0gX2Vhc2VNYXAuUXVhcnQsXG4gICAgUXVpbnQgPSBfZWFzZU1hcC5RdWludCxcbiAgICBTdHJvbmcgPSBfZWFzZU1hcC5TdHJvbmcsXG4gICAgRWxhc3RpYyA9IF9lYXNlTWFwLkVsYXN0aWMsXG4gICAgQmFjayA9IF9lYXNlTWFwLkJhY2ssXG4gICAgU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5TdGVwcGVkRWFzZSxcbiAgICBCb3VuY2UgPSBfZWFzZU1hcC5Cb3VuY2UsXG4gICAgU2luZSA9IF9lYXNlTWFwLlNpbmUsXG4gICAgRXhwbyA9IF9lYXNlTWFwLkV4cG8sXG4gICAgQ2lyYyA9IF9lYXNlTWFwLkNpcmM7XG5leHBvcnQgeyBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTtcbmV4cG9ydCB7IFR3ZWVuIGFzIFR3ZWVuTWF4LCBUd2VlbiBhcyBUd2VlbkxpdGUsIFRpbWVsaW5lIGFzIFRpbWVsaW5lTWF4LCBUaW1lbGluZSBhcyBUaW1lbGluZUxpdGUsIGdzYXAgYXMgZGVmYXVsdCwgd3JhcCwgd3JhcFlveW8sIGRpc3RyaWJ1dGUsIHJhbmRvbSwgc25hcCwgbm9ybWFsaXplLCBnZXRVbml0LCBjbGFtcCwgc3BsaXRDb2xvciwgdG9BcnJheSwgc2VsZWN0b3IsIG1hcFJhbmdlLCBwaXBlLCB1bml0aXplLCBpbnRlcnBvbGF0ZSwgc2h1ZmZsZSB9OyAvL2V4cG9ydCBzb21lIGludGVybmFsIG1ldGhvZHMvb3JvamVjdHMgZm9yIHVzZSBpbiBDU1NQbHVnaW4gc28gdGhhdCB3ZSBjYW4gZXh0ZXJuYWxpemUgdGhhdCBmaWxlIGFuZCBhbGxvdyBjdXN0b20gYnVpbGRzIHRoYXQgZXhjbHVkZSBpdC5cblxuZXhwb3J0IHsgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX3NldERlZmF1bHRzLCBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sIF9mb3JFYWNoTmFtZSwgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSwgX2NvbG9yU3RyaW5nRmlsdGVyLCBfcmVwbGFjZVJhbmRvbSwgX2NoZWNrUGx1Z2luLCBfcGx1Z2lucywgX3RpY2tlciwgX2NvbmZpZywgX3JvdW5kTW9kaWZpZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX2NvbG9yRXhwLCBfcGFyc2VSZWxhdGl2ZSB9OyIsICIvKiFcbiAqIENTU1BsdWdpbiAzLjE1LjBcbiAqIGh0dHBzOi8vZ3NhcC5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDI2LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dzYXAuY29tL3N0YW5kYXJkLWxpY2Vuc2VcbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IGdzYXAsIF9nZXRQcm9wZXJ0eSwgX251bUV4cCwgX251bVdpdGhVbml0RXhwLCBnZXRVbml0LCBfaXNTdHJpbmcsIF9pc1VuZGVmaW5lZCwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIF9yZWxFeHAsIF9mb3JFYWNoTmFtZSwgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSwgX2NvbG9yU3RyaW5nRmlsdGVyLCBfY2hlY2tQbHVnaW4sIF9yZXBsYWNlUmFuZG9tLCBfcGx1Z2lucywgR1NDYWNoZSwgUHJvcFR3ZWVuLCBfY29uZmlnLCBfdGlja2VyLCBfcm91bmQsIF9taXNzaW5nUGx1Z2luLCBfZ2V0U2V0dGVyLCBfZ2V0Q2FjaGUsIF9jb2xvckV4cCwgX3BhcnNlUmVsYXRpdmUsIF9zZXREZWZhdWx0cywgX3JlbW92ZUxpbmtlZExpc3RJdGVtIC8vZm9yIHRoZSBjb21tZW50ZWQtb3V0IGNsYXNzTmFtZSBmZWF0dXJlLlxufSBmcm9tIFwiLi9nc2FwLWNvcmUuanNcIjtcblxudmFyIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWxlbWVudCxcbiAgICBfcGx1Z2luSW5pdHRlZCxcbiAgICBfdGVtcERpdixcbiAgICBfdGVtcERpdlN0eWxlcixcbiAgICBfcmVjZW50U2V0dGVyUGx1Z2luLFxuICAgIF9yZXZlcnRpbmcsXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfdHJhbnNmb3JtUHJvcHMgPSB7fSxcbiAgICBfUkFEMkRFRyA9IDE4MCAvIE1hdGguUEksXG4gICAgX0RFRzJSQUQgPSBNYXRoLlBJIC8gMTgwLFxuICAgIF9hdGFuMiA9IE1hdGguYXRhbjIsXG4gICAgX2JpZ051bSA9IDFlOCxcbiAgICBfY2Fwc0V4cCA9IC8oW0EtWl0pL2csXG4gICAgX2hvcml6b250YWxFeHAgPSAvKGxlZnR8cmlnaHR8d2lkdGh8bWFyZ2lufHBhZGRpbmd8eCkvaSxcbiAgICBfY29tcGxleEV4cCA9IC9bXFxzLFxcKF1cXFMvLFxuICAgIF9wcm9wZXJ0eUFsaWFzZXMgPSB7XG4gIGF1dG9BbHBoYTogXCJvcGFjaXR5LHZpc2liaWxpdHlcIixcbiAgc2NhbGU6IFwic2NhbGVYLHNjYWxlWVwiLFxuICBhbHBoYTogXCJvcGFjaXR5XCJcbn0sXG4gICAgX3JlbmRlckNTU1Byb3AgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlclByb3BXaXRoRW5kID0gZnVuY3Rpb24gX3JlbmRlclByb3BXaXRoRW5kKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPT09IDEgPyBkYXRhLmUgOiBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyhyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID8gTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUgOiBkYXRhLmIsIGRhdGEpO1xufSxcbiAgICAvL2lmIHVuaXRzIGNoYW5nZSwgd2UgbmVlZCBhIHdheSB0byByZW5kZXIgdGhlIG9yaWdpbmFsIHVuaXQvdmFsdWUgd2hlbiB0aGUgdHdlZW4gZ29lcyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcgKHJhdGlvOjApXG5fcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmdBbmRFbmQgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmdBbmRFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA9PT0gMSA/IGRhdGEuZSA6IHJhdGlvID8gTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUgOiBkYXRhLmIsIGRhdGEpO1xufSxcbiAgICAvL2lmIHVuaXRzIGNoYW5nZSwgd2UgbmVlZCBhIHdheSB0byByZW5kZXIgdGhlIG9yaWdpbmFsIHVuaXQvdmFsdWUgd2hlbiB0aGUgdHdlZW4gZ29lcyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcgKHJhdGlvOjApXG5fcmVuZGVyUm91bmRlZENTU1Byb3AgPSBmdW5jdGlvbiBfcmVuZGVyUm91bmRlZENTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHZhbHVlID0gZGF0YS5zICsgZGF0YS5jICogcmF0aW87XG4gIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCB+fih2YWx1ZSArICh2YWx1ZSA8IDAgPyAtLjUgOiAuNSkpICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUgPSBmdW5jdGlvbiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZShyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID8gZGF0YS5lIDogZGF0YS5iLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgPSBmdW5jdGlvbiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvICE9PSAxID8gZGF0YS5iIDogZGF0YS5lLCBkYXRhKTtcbn0sXG4gICAgX3NldHRlckNTU1N0eWxlID0gZnVuY3Rpb24gX3NldHRlckNTU1N0eWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJDU1NQcm9wID0gZnVuY3Rpb24gX3NldHRlckNTU1Byb3AodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xufSxcbiAgICBfc2V0dGVyVHJhbnNmb3JtID0gZnVuY3Rpb24gX3NldHRlclRyYW5zZm9ybSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwW3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyU2NhbGUgPSBmdW5jdGlvbiBfc2V0dGVyU2NhbGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcC5zY2FsZVggPSB0YXJnZXQuX2dzYXAuc2NhbGVZID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIgPSBmdW5jdGlvbiBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhLCByYXRpbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gIGNhY2hlLnNjYWxlWCA9IGNhY2hlLnNjYWxlWSA9IHZhbHVlO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0ocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIgPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICBjYWNoZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wID0gXCJ0cmFuc2Zvcm1cIixcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIixcbiAgICBfc2F2ZVN0eWxlID0gZnVuY3Rpb24gX3NhdmVTdHlsZShwcm9wZXJ0eSwgaXNOb3RDU1MpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQsXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuXG4gIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgc3R5bGUpIHtcbiAgICB0aGlzLnRmbSA9IHRoaXMudGZtIHx8IHt9O1xuXG4gICAgaWYgKHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldIHx8IHByb3BlcnR5O1xuICAgICAgfnByb3BlcnR5LmluZGV4T2YoXCIsXCIpID8gcHJvcGVydHkuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnRmbVthXSA9IF9nZXQodGFyZ2V0LCBhKTtcbiAgICAgIH0pIDogdGhpcy50Zm1bcHJvcGVydHldID0gY2FjaGUueCA/IGNhY2hlW3Byb3BlcnR5XSA6IF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSk7IC8vIG5vdGU6IHNjYWxlIHdvdWxkIG1hcCB0byBcInNjYWxlWCxzY2FsZVlcIiwgdGh1cyB3ZSBsb29wIGFuZCBhcHBseSB0aGVtIGJvdGguXG5cbiAgICAgIHByb3BlcnR5ID09PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGhpcy50Zm0uek9yaWdpbiA9IGNhY2hlLnpPcmlnaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3Byb3BlcnR5QWxpYXNlcy50cmFuc2Zvcm0uc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIF9zYXZlU3R5bGUuY2FsbChfdGhpcywgcCwgaXNOb3RDU1MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaW5kZXhPZihfdHJhbnNmb3JtUHJvcCkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIHRoaXMuc3ZnbyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIik7XG4gICAgICB0aGlzLnByb3BzLnB1c2goX3RyYW5zZm9ybU9yaWdpblByb3AsIGlzTm90Q1NTLCBcIlwiKTtcbiAgICB9XG5cbiAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICB9XG5cbiAgKHN0eWxlIHx8IGlzTm90Q1NTKSAmJiB0aGlzLnByb3BzLnB1c2gocHJvcGVydHksIGlzTm90Q1NTLCBzdHlsZVtwcm9wZXJ0eV0pO1xufSxcbiAgICBfcmVtb3ZlSW5kZXBlbmRlbnRUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbW92ZUluZGVwZW5kZW50VHJhbnNmb3JtcyhzdHlsZSkge1xuICBpZiAoc3R5bGUudHJhbnNsYXRlKSB7XG4gICAgc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2xhdGVcIik7XG4gICAgc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJzY2FsZVwiKTtcbiAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShcInJvdGF0ZVwiKTtcbiAgfVxufSxcbiAgICBfcmV2ZXJ0U3R5bGUgPSBmdW5jdGlvbiBfcmV2ZXJ0U3R5bGUoKSB7XG4gIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICB0YXJnZXQgPSB0aGlzLnRhcmdldCxcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICBpLFxuICAgICAgcDtcblxuICBmb3IgKGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAvLyBzdG9yZWQgbGlrZSB0aGlzOiBwcm9wZXJ0eSwgaXNOb3RDU1MsIHZhbHVlXG4gICAgaWYgKCFwcm9wc1tpICsgMV0pIHtcbiAgICAgIHByb3BzW2kgKyAyXSA/IHN0eWxlW3Byb3BzW2ldXSA9IHByb3BzW2kgKyAyXSA6IHN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BzW2ldLnN1YnN0cigwLCAyKSA9PT0gXCItLVwiID8gcHJvcHNbaV0gOiBwcm9wc1tpXS5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzW2kgKyAxXSA9PT0gMikge1xuICAgICAgLy8gbm9uLUNTUyB2YWx1ZSAoZnVuY3Rpb24tYmFzZWQpXG4gICAgICB0YXJnZXRbcHJvcHNbaV1dKHByb3BzW2kgKyAyXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vbi1DU1MgdmFsdWUgKG5vdCBmdW5jdGlvbi1iYXNlZClcbiAgICAgIHRhcmdldFtwcm9wc1tpXV0gPSBwcm9wc1tpICsgMl07XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMudGZtKSB7XG4gICAgZm9yIChwIGluIHRoaXMudGZtKSB7XG4gICAgICBjYWNoZVtwXSA9IHRoaXMudGZtW3BdO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSgpO1xuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLCB0aGlzLnN2Z28gfHwgXCJcIik7XG4gICAgfVxuXG4gICAgaSA9IF9yZXZlcnRpbmcoKTtcblxuICAgIGlmICgoIWkgfHwgIWkuaXNTdGFydCkgJiYgIXN0eWxlW190cmFuc2Zvcm1Qcm9wXSkge1xuICAgICAgX3JlbW92ZUluZGVwZW5kZW50VHJhbnNmb3JtcyhzdHlsZSk7XG5cbiAgICAgIGlmIChjYWNoZS56T3JpZ2luICYmIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSkge1xuICAgICAgICBzdHlsZVtfdHJhbnNmb3JtT3JpZ2luUHJvcF0gKz0gXCIgXCIgKyBjYWNoZS56T3JpZ2luICsgXCJweFwiOyAvLyBzaW5jZSB3ZSdyZSB1bmNhY2hpbmcsIHdlIG11c3QgcHV0IHRoZSB6T3JpZ2luIGJhY2sgaW50byB0aGUgdHJhbnNmb3JtT3JpZ2luIHNvIHRoYXQgd2UgY2FuIHB1bGwgaXQgb3V0IGFjY3VyYXRlbHkgd2hlbiB3ZSBwYXJzZSBhZ2Fpbi4gT3RoZXJ3aXNlLCB3ZSdkIGxvc2UgdGhlIHogcG9ydGlvbiBvZiB0aGUgb3JpZ2luIHNpbmNlIHdlIGV4dHJhY3QgaXQgdG8gcHJvdGVjdCBmcm9tIFNhZmFyaSBidWdzLlxuXG4gICAgICAgIGNhY2hlLnpPcmlnaW4gPSAwO1xuICAgICAgICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0oKTtcbiAgICAgIH1cblxuICAgICAgY2FjaGUudW5jYWNoZSA9IDE7IC8vIGlmIGl0J3MgYSBzdGFydEF0IHRoYXQncyBiZWluZyByZXZlcnRlZCBpbiB0aGUgX2luaXRUd2VlbigpIG9mIHRoZSBjb3JlLCB3ZSBkb24ndCBuZWVkIHRvIHVuY2FjaGUgdHJhbnNmb3Jtcy4gVGhpcyBpcyBwdXJlbHkgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRTdHlsZVNhdmVyID0gZnVuY3Rpb24gX2dldFN0eWxlU2F2ZXIodGFyZ2V0LCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBzYXZlciA9IHtcbiAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICBwcm9wczogW10sXG4gICAgcmV2ZXJ0OiBfcmV2ZXJ0U3R5bGUsXG4gICAgc2F2ZTogX3NhdmVTdHlsZVxuICB9O1xuICB0YXJnZXQuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKHRhcmdldCk7IC8vIGp1c3QgbWFrZSBzdXJlIHRoZXJlJ3MgYSBfZ3NhcCBjYWNoZSBkZWZpbmVkIGJlY2F1c2Ugd2UgcmVhZCBmcm9tIGl0IGluIF9zYXZlU3R5bGUoKSBhbmQgaXQncyBtb3JlIGVmZmljaWVudCB0byBqdXN0IGNoZWNrIGl0IGhlcmUgb25jZS5cblxuICBwcm9wZXJ0aWVzICYmIHRhcmdldC5zdHlsZSAmJiB0YXJnZXQubm9kZVR5cGUgJiYgcHJvcGVydGllcy5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBzYXZlci5zYXZlKHApO1xuICB9KTsgLy8gbWFrZSBzdXJlIGl0J3MgYSBET00gbm9kZSB0b28uXG5cbiAgcmV0dXJuIHNhdmVyO1xufSxcbiAgICBfc3VwcG9ydHMzRCxcbiAgICBfY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50KHR5cGUsIG5zKSB7XG4gIHZhciBlID0gX2RvYy5jcmVhdGVFbGVtZW50TlMgPyBfZG9jLmNyZWF0ZUVsZW1lbnROUygobnMgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpLnJlcGxhY2UoL15odHRwcy8sIFwiaHR0cFwiKSwgdHlwZSkgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7IC8vc29tZSBzZXJ2ZXJzIHN3YXAgaW4gaHR0cHMgZm9yIGh0dHAgaW4gdGhlIG5hbWVzcGFjZSB3aGljaCBjYW4gYnJlYWsgdGhpbmdzLCBtYWtpbmcgXCJzdHlsZVwiIGluYWNjZXNzaWJsZS5cblxuICByZXR1cm4gZSAmJiBlLnN0eWxlID8gZSA6IF9kb2MuY3JlYXRlRWxlbWVudCh0eXBlKTsgLy9zb21lIGVudmlyb25tZW50cyB3b24ndCBhbGxvdyBhY2Nlc3MgdG8gdGhlIGVsZW1lbnQncyBzdHlsZSB3aGVuIGNyZWF0ZWQgd2l0aCBhIG5hbWVzcGFjZSBpbiB3aGljaCBjYXNlIHdlIGRlZmF1bHQgdG8gdGhlIHN0YW5kYXJkIGNyZWF0ZUVsZW1lbnQoKSB0byB3b3JrIGFyb3VuZCB0aGUgaXNzdWUuIEFsc28gbm90ZSB0aGF0IHdoZW4gR1NBUCBpcyBlbWJlZGRlZCBkaXJlY3RseSBpbnNpZGUgYW4gU1ZHIGZpbGUsIGNyZWF0ZUVsZW1lbnQoKSB3b24ndCBhbGxvdyBhY2Nlc3MgdG8gdGhlIHN0eWxlIG9iamVjdCBpbiBGaXJlZm94IChzZWUgaHR0cHM6Ly9nc2FwLmNvbS9mb3J1bXMvdG9waWMvMjAyMTUtcHJvYmxlbS11c2luZy10d2Vlbm1heC1pbi1zdGFuZGFsb25lLXNlbGYtY29udGFpbmluZy1zdmctZmlsZS1lcnItY2Fubm90LXNldC1wcm9wZXJ0eS1jc3N0ZXh0LW9mLXVuZGVmaW5lZC8pLlxufSxcbiAgICBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHNraXBQcmVmaXhGYWxsYmFjaykge1xuICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gIHJldHVybiBjc1twcm9wZXJ0eV0gfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eS5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKSB8fCBjcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSB8fCAhc2tpcFByZWZpeEZhbGxiYWNrICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSkgfHwgcHJvcGVydHksIDEpIHx8IFwiXCI7IC8vY3NzIHZhcmlhYmxlcyBtYXkgbm90IG5lZWQgY2FwcyBzd2FwcGVkIG91dCBmb3IgZGFzaGVzIGFuZCBsb3dlcmNhc2UuXG59LFxuICAgIF9wcmVmaXhlcyA9IFwiTyxNb3osbXMsTXMsV2Via2l0XCIuc3BsaXQoXCIsXCIpLFxuICAgIF9jaGVja1Byb3BQcmVmaXggPSBmdW5jdGlvbiBfY2hlY2tQcm9wUHJlZml4KHByb3BlcnR5LCBlbGVtZW50LCBwcmVmZXJQcmVmaXgpIHtcbiAgdmFyIGUgPSBlbGVtZW50IHx8IF90ZW1wRGl2LFxuICAgICAgcyA9IGUuc3R5bGUsXG4gICAgICBpID0gNTtcblxuICBpZiAocHJvcGVydHkgaW4gcyAmJiAhcHJlZmVyUHJlZml4KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgcHJvcGVydHkgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnN1YnN0cigxKTtcblxuICB3aGlsZSAoaS0tICYmICEoX3ByZWZpeGVzW2ldICsgcHJvcGVydHkgaW4gcykpIHt9XG5cbiAgcmV0dXJuIGkgPCAwID8gbnVsbCA6IChpID09PSAzID8gXCJtc1wiIDogaSA+PSAwID8gX3ByZWZpeGVzW2ldIDogXCJcIikgKyBwcm9wZXJ0eTtcbn0sXG4gICAgX2luaXRDb3JlID0gZnVuY3Rpb24gX2luaXRDb3JlKCkge1xuICBpZiAoX3dpbmRvd0V4aXN0cygpICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgIF93aW4gPSB3aW5kb3c7XG4gICAgX2RvYyA9IF93aW4uZG9jdW1lbnQ7XG4gICAgX2RvY0VsZW1lbnQgPSBfZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICBfdGVtcERpdiA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpIHx8IHtcbiAgICAgIHN0eWxlOiB7fVxuICAgIH07XG4gICAgX3RlbXBEaXZTdHlsZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBfdHJhbnNmb3JtUHJvcCA9IF9jaGVja1Byb3BQcmVmaXgoX3RyYW5zZm9ybVByb3ApO1xuICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiO1xuICAgIF90ZW1wRGl2LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci13aWR0aDowO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzowXCI7IC8vbWFrZSBzdXJlIHRvIG92ZXJyaWRlIGNlcnRhaW4gcHJvcGVydGllcyB0aGF0IG1heSBjb250YW1pbmF0ZSBtZWFzdXJlbWVudHMsIGluIGNhc2UgdGhlIHVzZXIgaGFzIG92ZXJyZWFjaGluZyBzdHlsZSBzaGVldHMuXG5cbiAgICBfc3VwcG9ydHMzRCA9ICEhX2NoZWNrUHJvcFByZWZpeChcInBlcnNwZWN0aXZlXCIpO1xuICAgIF9yZXZlcnRpbmcgPSBnc2FwLmNvcmUucmV2ZXJ0aW5nO1xuICAgIF9wbHVnaW5Jbml0dGVkID0gMTtcbiAgfVxufSxcbiAgICBfZ2V0UmVwYXJlbnRlZENsb25lQkJveCA9IGZ1bmN0aW9uIF9nZXRSZXBhcmVudGVkQ2xvbmVCQm94KHRhcmdldCkge1xuICAvL3dvcmtzIGFyb3VuZCBpc3N1ZXMgaW4gc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSB0aGF0IGRvbid0IGNvcnJlY3RseSByZXBvcnQgZ2V0QkJveCgpIG9uIFNWRyBlbGVtZW50cyBpbnNpZGUgYSA8ZGVmcz4gZWxlbWVudCBhbmQvb3IgPG1hc2s+LiBXZSB0cnkgY3JlYXRpbmcgYW4gU1ZHLCBhZGRpbmcgaXQgdG8gdGhlIGRvY3VtZW50RWxlbWVudCBhbmQgdG9zcyB0aGUgZWxlbWVudCBpbiB0aGVyZSBzbyB0aGF0IGl0J3MgZGVmaW5pdGVseSBwYXJ0IG9mIHRoZSByZW5kZXJpbmcgdHJlZSwgdGhlbiBncmFiIHRoZSBiYm94IGFuZCBpZiBpdCB3b3Jrcywgd2UgYWN0dWFsbHkgc3dhcCBvdXQgdGhlIG9yaWdpbmFsIGdldEJCb3goKSBtZXRob2QgZm9yIG91ciBvd24gdGhhdCBkb2VzIHRoZXNlIGV4dHJhIHN0ZXBzIHdoZW5ldmVyIGdldEJCb3ggaXMgbmVlZGVkLiBUaGlzIGhlbHBzIGVuc3VyZSB0aGF0IHBlcmZvcm1hbmNlIGlzIG9wdGltYWwgKG9ubHkgZG8gYWxsIHRoZXNlIGV4dHJhIHN0ZXBzIHdoZW4gYWJzb2x1dGVseSBuZWNlc3NhcnkuLi5tb3N0IGVsZW1lbnRzIGRvbid0IG5lZWQgaXQpLlxuICB2YXIgb3duZXIgPSB0YXJnZXQub3duZXJTVkdFbGVtZW50LFxuICAgICAgc3ZnID0gX2NyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgb3duZXIgJiYgb3duZXIuZ2V0QXR0cmlidXRlKFwieG1sbnNcIikgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKSxcbiAgICAgIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSh0cnVlKSxcbiAgICAgIGJib3g7XG5cbiAgY2xvbmUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgc3ZnLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIHRyeSB7XG4gICAgYmJveCA9IGNsb25lLmdldEJCb3goKTtcbiAgfSBjYXRjaCAoZSkge31cblxuICBzdmcucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuXG4gIF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHN2Zyk7XG5cbiAgcmV0dXJuIGJib3g7XG59LFxuICAgIF9nZXRBdHRyaWJ1dGVGYWxsYmFja3MgPSBmdW5jdGlvbiBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgYXR0cmlidXRlc0FycmF5KSB7XG4gIHZhciBpID0gYXR0cmlidXRlc0FycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlc0FycmF5W2ldKSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlc0FycmF5W2ldKTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2dldEJCb3ggPSBmdW5jdGlvbiBfZ2V0QkJveCh0YXJnZXQpIHtcbiAgdmFyIGJvdW5kcywgY2xvbmVkO1xuXG4gIHRyeSB7XG4gICAgYm91bmRzID0gdGFyZ2V0LmdldEJCb3goKTsgLy9GaXJlZm94IHRocm93cyBlcnJvcnMgaWYgeW91IHRyeSBjYWxsaW5nIGdldEJCb3goKSBvbiBhbiBTVkcgZWxlbWVudCB0aGF0J3Mgbm90IHJlbmRlcmVkIChsaWtlIGluIGEgPHN5bWJvbD4gb3IgPGRlZnM+KS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjEyMTE4XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYm91bmRzID0gX2dldFJlcGFyZW50ZWRDbG9uZUJCb3godGFyZ2V0KTtcbiAgICBjbG9uZWQgPSAxO1xuICB9XG5cbiAgYm91bmRzICYmIChib3VuZHMud2lkdGggfHwgYm91bmRzLmhlaWdodCkgfHwgY2xvbmVkIHx8IChib3VuZHMgPSBfZ2V0UmVwYXJlbnRlZENsb25lQkJveCh0YXJnZXQpKTsgLy9zb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIG1pc3JlcG9ydCB0aGUgYm91bmRzIGlmIHRoZSBlbGVtZW50IGhhcyB6ZXJvIHdpZHRoIGFuZCBoZWlnaHQgKGl0IGp1c3QgYXNzdW1lcyBpdCdzIGF0IHg6MCwgeTowKSwgdGh1cyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGdyYWIgdGhlIHBvc2l0aW9uIGluIHRoYXQgY2FzZS5cblxuICByZXR1cm4gYm91bmRzICYmICFib3VuZHMud2lkdGggJiYgIWJvdW5kcy54ICYmICFib3VuZHMueSA/IHtcbiAgICB4OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInhcIiwgXCJjeFwiLCBcIngxXCJdKSB8fCAwLFxuICAgIHk6ICtfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgW1wieVwiLCBcImN5XCIsIFwieTFcIl0pIHx8IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH0gOiBib3VuZHM7XG59LFxuICAgIF9pc1NWRyA9IGZ1bmN0aW9uIF9pc1NWRyhlKSB7XG4gIHJldHVybiAhIShlLmdldENUTSAmJiAoIWUucGFyZW50Tm9kZSB8fCBlLm93bmVyU1ZHRWxlbWVudCkgJiYgX2dldEJCb3goZSkpO1xufSxcbiAgICAvL3JlcG9ydHMgaWYgdGhlIGVsZW1lbnQgaXMgYW4gU1ZHIG9uIHdoaWNoIGdldEJCb3goKSBhY3R1YWxseSB3b3Jrc1xuX3JlbW92ZVByb3BlcnR5ID0gZnVuY3Rpb24gX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgaWYgKHByb3BlcnR5KSB7XG4gICAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICBmaXJzdDJDaGFycztcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB7XG4gICAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgZmlyc3QyQ2hhcnMgPSBwcm9wZXJ0eS5zdWJzdHIoMCwgMik7XG5cbiAgICAgIGlmIChmaXJzdDJDaGFycyA9PT0gXCJtc1wiIHx8IHByb3BlcnR5LnN1YnN0cigwLCA2KSA9PT0gXCJ3ZWJraXRcIikge1xuICAgICAgICAvL01pY3Jvc29mdCBhbmQgc29tZSBXZWJraXQgYnJvd3NlcnMgZG9uJ3QgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgb2YgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBwcmVmaXggY2hhcmFjdGVyLCBzbyB3ZSBhZGp1c3Qgc28gdGhhdCB3aGVuIHdlIHByZWZpeCB0aGUgY2FwcyB3aXRoIGEgZGFzaCwgaXQncyBjb3JyZWN0IChvdGhlcndpc2UgaXQnZCBiZSBcIm1zLXRyYW5zZm9ybVwiIGluc3RlYWQgb2YgXCItbXMtdHJhbnNmb3JtXCIgZm9yIElFOSwgZm9yIGV4YW1wbGUpXG4gICAgICAgIHByb3BlcnR5ID0gXCItXCIgKyBwcm9wZXJ0eTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkoZmlyc3QyQ2hhcnMgPT09IFwiLS1cIiA/IHByb3BlcnR5IDogcHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90ZTogb2xkIHZlcnNpb25zIG9mIElFIHVzZSBcInJlbW92ZUF0dHJpYnV0ZSgpXCIgaW5zdGVhZCBvZiBcInJlbW92ZVByb3BlcnR5KClcIlxuICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQgPSBmdW5jdGlvbiBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGJlZ2lubmluZywgZW5kLCBvbmx5U2V0QXRFbmQpIHtcbiAgdmFyIHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBvbmx5U2V0QXRFbmQgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKTtcbiAgcGx1Z2luLl9wdCA9IHB0O1xuICBwdC5iID0gYmVnaW5uaW5nO1xuICBwdC5lID0gZW5kO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfbm9uQ29udmVydGlibGVVbml0cyA9IHtcbiAgZGVnOiAxLFxuICByYWQ6IDEsXG4gIHR1cm46IDFcbn0sXG4gICAgX25vblN0YW5kYXJkTGF5b3V0cyA9IHtcbiAgZ3JpZDogMSxcbiAgZmxleDogMVxufSxcbiAgICAvL3Rha2VzIGEgc2luZ2xlIHZhbHVlIGxpa2UgMjBweCBhbmQgY29udmVydHMgaXQgdG8gdGhlIHVuaXQgc3BlY2lmaWVkLCBsaWtlIFwiJVwiLCByZXR1cm5pbmcgb25seSB0aGUgbnVtZXJpYyBhbW91bnQuXG5fY29udmVydFRvVW5pdCA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSB7XG4gIHZhciBjdXJWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDAsXG4gICAgICBjdXJVbml0ID0gKHZhbHVlICsgXCJcIikudHJpbSgpLnN1YnN0cigoY3VyVmFsdWUgKyBcIlwiKS5sZW5ndGgpIHx8IFwicHhcIixcbiAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbGVhdmUgZXh0cmEgd2hpdGVzcGFjZSBhdCB0aGUgYmVnaW5uaW5nIG9mIENTUyB2YXJpYWJsZXMsIGhlbmNlIHRoZSBuZWVkIHRvIHRyaW0oKVxuICBzdHlsZSA9IF90ZW1wRGl2LnN0eWxlLFxuICAgICAgaG9yaXpvbnRhbCA9IF9ob3Jpem9udGFsRXhwLnRlc3QocHJvcGVydHkpLFxuICAgICAgaXNSb290U1ZHID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdmdcIixcbiAgICAgIG1lYXN1cmVQcm9wZXJ0eSA9IChpc1Jvb3RTVkcgPyBcImNsaWVudFwiIDogXCJvZmZzZXRcIikgKyAoaG9yaXpvbnRhbCA/IFwiV2lkdGhcIiA6IFwiSGVpZ2h0XCIpLFxuICAgICAgYW1vdW50ID0gMTAwLFxuICAgICAgdG9QaXhlbHMgPSB1bml0ID09PSBcInB4XCIsXG4gICAgICB0b1BlcmNlbnQgPSB1bml0ID09PSBcIiVcIixcbiAgICAgIHB4LFxuICAgICAgcGFyZW50LFxuICAgICAgY2FjaGUsXG4gICAgICBpc1NWRztcblxuICBpZiAodW5pdCA9PT0gY3VyVW5pdCB8fCAhY3VyVmFsdWUgfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbdW5pdF0gfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbY3VyVW5pdF0pIHtcbiAgICByZXR1cm4gY3VyVmFsdWU7XG4gIH1cblxuICBjdXJVbml0ICE9PSBcInB4XCIgJiYgIXRvUGl4ZWxzICYmIChjdXJWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBcInB4XCIpKTtcbiAgaXNTVkcgPSB0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpO1xuXG4gIGlmICgodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSB8fCB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpKSkge1xuICAgIHB4ID0gaXNTVkcgPyB0YXJnZXQuZ2V0QkJveCgpW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA6IHRhcmdldFttZWFzdXJlUHJvcGVydHldO1xuICAgIHJldHVybiBfcm91bmQodG9QZXJjZW50ID8gY3VyVmFsdWUgLyBweCAqIGFtb3VudCA6IGN1clZhbHVlIC8gMTAwICogcHgpO1xuICB9XG5cbiAgc3R5bGVbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdID0gYW1vdW50ICsgKHRvUGl4ZWxzID8gY3VyVW5pdCA6IHVuaXQpO1xuICBwYXJlbnQgPSB1bml0ICE9PSBcInJlbVwiICYmIH5wcm9wZXJ0eS5pbmRleE9mKFwiYWRpdXNcIikgfHwgdW5pdCA9PT0gXCJlbVwiICYmIHRhcmdldC5hcHBlbmRDaGlsZCAmJiAhaXNSb290U1ZHID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgaWYgKGlzU1ZHKSB7XG4gICAgcGFyZW50ID0gKHRhcmdldC5vd25lclNWR0VsZW1lbnQgfHwge30pLnBhcmVudE5vZGU7XG4gIH1cblxuICBpZiAoIXBhcmVudCB8fCBwYXJlbnQgPT09IF9kb2MgfHwgIXBhcmVudC5hcHBlbmRDaGlsZCkge1xuICAgIHBhcmVudCA9IF9kb2MuYm9keTtcbiAgfVxuXG4gIGNhY2hlID0gcGFyZW50Ll9nc2FwO1xuXG4gIGlmIChjYWNoZSAmJiB0b1BlcmNlbnQgJiYgY2FjaGUud2lkdGggJiYgaG9yaXpvbnRhbCAmJiBjYWNoZS50aW1lID09PSBfdGlja2VyLnRpbWUgJiYgIWNhY2hlLnVuY2FjaGUpIHtcbiAgICByZXR1cm4gX3JvdW5kKGN1clZhbHVlIC8gY2FjaGUud2lkdGggKiBhbW91bnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0b1BlcmNlbnQgJiYgKHByb3BlcnR5ID09PSBcImhlaWdodFwiIHx8IHByb3BlcnR5ID09PSBcIndpZHRoXCIpKSB7XG4gICAgICAvLyBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggd2lkdGgvaGVpZ2h0IHRoYXQncyBpbnNpZGUgYSBjb250YWluZXIgd2l0aCBwYWRkaW5nIGFuZC9vciBpdCdzIGEgZmxleGJveC9ncmlkIGNvbnRhaW5lciwgd2UgbXVzdCBhcHBseSBpdCB0byB0aGUgdGFyZ2V0IGl0c2VsZiByYXRoZXIgdGhhbiB0aGUgX3RlbXBEaXYgaW4gb3JkZXIgdG8gZW5zdXJlIGNvbXBsZXRlIGFjY3VyYWN5LCBmYWN0b3JpbmcgaW4gdGhlIHBhcmVudCdzIHBhZGRpbmcuXG4gICAgICB2YXIgdiA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG4gICAgICB0YXJnZXQuc3R5bGVbcHJvcGVydHldID0gYW1vdW50ICsgdW5pdDtcbiAgICAgIHB4ID0gdGFyZ2V0W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgICB2ID8gdGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IHYgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0b1BlcmNlbnQgfHwgY3VyVW5pdCA9PT0gXCIlXCIpICYmICFfbm9uU3RhbmRhcmRMYXlvdXRzW19nZXRDb21wdXRlZFByb3BlcnR5KHBhcmVudCwgXCJkaXNwbGF5XCIpXSAmJiAoc3R5bGUucG9zaXRpb24gPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIFwicG9zaXRpb25cIikpO1xuICAgICAgcGFyZW50ID09PSB0YXJnZXQgJiYgKHN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIik7IC8vIGxpa2UgZm9yIGJvcmRlclJhZGl1cywgaWYgaXQncyBhICUgd2UgbXVzdCBoYXZlIGl0IHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQgaXRzZWxmIGJ1dCB0aGF0IG1heSBub3QgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgb3IgcG9zaXRpb246IGFic29sdXRlIGluIHdoaWNoIGNhc2UgaXQnZCBnbyB1cCB0aGUgY2hhaW4gdW50aWwgaXQgZmluZHMgaXRzIG9mZnNldFBhcmVudCAoYmFkKS4gcG9zaXRpb246IHN0YXRpYyBwcm90ZWN0cyBhZ2FpbnN0IHRoYXQuXG5cbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGVtcERpdik7XG4gICAgICBweCA9IF90ZW1wRGl2W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX3RlbXBEaXYpO1xuICAgICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgfVxuXG4gICAgaWYgKGhvcml6b250YWwgJiYgdG9QZXJjZW50KSB7XG4gICAgICBjYWNoZSA9IF9nZXRDYWNoZShwYXJlbnQpO1xuICAgICAgY2FjaGUudGltZSA9IF90aWNrZXIudGltZTtcbiAgICAgIGNhY2hlLndpZHRoID0gcGFyZW50W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9yb3VuZCh0b1BpeGVscyA/IHB4ICogY3VyVmFsdWUgLyBhbW91bnQgOiBweCAmJiBjdXJWYWx1ZSA/IGFtb3VudCAvIHB4ICogY3VyVmFsdWUgOiAwKTtcbn0sXG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICB2YXIgdmFsdWU7XG4gIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gIGlmIChwcm9wZXJ0eSBpbiBfcHJvcGVydHlBbGlhc2VzICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgcHJvcGVydHkgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcblxuICAgIGlmICh+cHJvcGVydHkuaW5kZXhPZihcIixcIikpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3BsaXQoXCIsXCIpWzBdO1xuICAgIH1cbiAgfVxuXG4gIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgdmFsdWUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB1bmNhY2hlKTtcbiAgICB2YWx1ZSA9IHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybU9yaWdpblwiID8gdmFsdWVbcHJvcGVydHldIDogdmFsdWUuc3ZnID8gdmFsdWUub3JpZ2luIDogX2ZpcnN0VHdvT25seShfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSkgKyBcIiBcIiArIHZhbHVlLnpPcmlnaW4gKyBcInB4XCI7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSB0YXJnZXQuc3R5bGVbcHJvcGVydHldO1xuXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gXCJhdXRvXCIgfHwgdW5jYWNoZSB8fCB+KHZhbHVlICsgXCJcIikuaW5kZXhPZihcImNhbGMoXCIpKSB7XG4gICAgICB2YWx1ZSA9IF9zcGVjaWFsUHJvcHNbcHJvcGVydHldICYmIF9zcGVjaWFsUHJvcHNbcHJvcGVydHldKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHx8IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB8fCAocHJvcGVydHkgPT09IFwib3BhY2l0eVwiID8gMSA6IDApOyAvLyBub3RlOiBzb21lIGJyb3dzZXJzLCBsaWtlIEZpcmVmb3gsIGRvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5ISBJbnN0ZWFkLCBpdCBvbmx5IHJlcG9ydHMgZXZlcnkgY29ybmVyIGxpa2UgIGJvcmRlclRvcExlZnRSYWRpdXNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pdCAmJiAhfih2YWx1ZSArIFwiXCIpLnRyaW0oKS5pbmRleE9mKFwiIFwiKSA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSArIHVuaXQgOiB2YWx1ZTtcbn0sXG4gICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZyA9IGZ1bmN0aW9uIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcodGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kKSB7XG4gIC8vIG5vdGU6IHdlIGNhbGwgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHBsdWdpbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPT09IFwibm9uZVwiKSB7XG4gICAgLy8gc29tZSBicm93c2VycyBsaWtlIFNhZmFyaSBhY3R1YWxseSBQUkVGRVIgdGhlIHByZWZpeGVkIHByb3BlcnR5IGFuZCBtaXMtcmVwb3J0IHRoZSB1bnByZWZpeGVkIHZhbHVlIGxpa2UgY2xpcFBhdGggKEJVRykuIEluIG90aGVyIHdvcmRzLCBldmVuIHRob3VnaCBjbGlwUGF0aCBleGlzdHMgaW4gdGhlIHN0eWxlIChcImNsaXBQYXRoXCIgaW4gdGFyZ2V0LnN0eWxlKSBhbmQgaXQncyBzZXQgaW4gdGhlIENTUyBwcm9wZXJseSAoYWxvbmcgd2l0aCAtd2Via2l0LWNsaXAtcGF0aCksIFNhZmFyaSByZXBvcnRzIGNsaXBQYXRoIGFzIFwibm9uZVwiIHdoZXJlYXMgV2Via2l0Q2xpcFBhdGggcmVwb3J0cyBhY2N1cmF0ZWx5IGxpa2UgXCJlbGxpcHNlKDEwMCUgMCUgYXQgNTAlIDAlKVwiLCBzbyBpbiB0aGlzIGNhc2Ugd2UgbXVzdCBTV0lUQ0ggdG8gdXNpbmcgdGhlIHByZWZpeGVkIHByb3BlcnR5IGluc3RlYWQuIFNlZSBodHRwczovL2dzYXAuY29tL2ZvcnVtcy90b3BpYy8xODMxMC1jbGlwcGF0aC1kb2VzbnQtd29yay1vbi1pb3MvXG4gICAgdmFyIHAgPSBfY2hlY2tQcm9wUHJlZml4KHByb3AsIHRhcmdldCwgMSksXG4gICAgICAgIHMgPSBwICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcCwgMSk7XG5cbiAgICBpZiAocyAmJiBzICE9PSBzdGFydCkge1xuICAgICAgcHJvcCA9IHA7XG4gICAgICBzdGFydCA9IHM7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSBcImJvcmRlckNvbG9yXCIpIHtcbiAgICAgIHN0YXJ0ID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcImJvcmRlclRvcENvbG9yXCIpOyAvLyBGaXJlZm94IGJ1ZzogYWx3YXlzIHJlcG9ydHMgXCJib3JkZXJDb2xvclwiIGFzIFwiXCIsIHNvIHdlIG11c3QgZmFsbCBiYWNrIHRvIGJvcmRlclRvcENvbG9yLiBTZWUgaHR0cHM6Ly9nc2FwLmNvbS9mb3J1bXMvdG9waWMvMjQ1ODMtaG93LXRvLXJldHVybi1jb2xvcnMtdGhhdC1pLWhhZC1hZnRlci1yZXZlcnNlL1xuICAgIH1cbiAgfVxuXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldC5zdHlsZSwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICBhLFxuICAgICAgcmVzdWx0LFxuICAgICAgc3RhcnRWYWx1ZXMsXG4gICAgICBzdGFydE51bSxcbiAgICAgIGNvbG9yLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBlbmRVbml0LFxuICAgICAgc3RhcnRVbml0LFxuICAgICAgZW5kVmFsdWVzO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vIGVuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoZW5kLnN1YnN0cmluZygwLCA2KSA9PT0gXCJ2YXIoLS1cIikge1xuICAgIGVuZCA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgZW5kLnN1YnN0cmluZyg0LCBlbmQuaW5kZXhPZihcIilcIikpKTtcbiAgfVxuXG4gIGlmIChlbmQgPT09IFwiYXV0b1wiKSB7XG4gICAgc3RhcnRWYWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wXTtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBlbmQ7XG4gICAgZW5kID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wKSB8fCBlbmQ7XG4gICAgc3RhcnRWYWx1ZSA/IHRhcmdldC5zdHlsZVtwcm9wXSA9IHN0YXJ0VmFsdWUgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgfVxuXG4gIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpOyAvLyBwYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzIGFuZCBsZXQgdGhlIGZpbHRlciBkbyB3aGF0ZXZlciBpdCBuZWVkcyB0byB0aGUgdmFsdWVzLiBJZiBjb2xvcnMgYXJlIGZvdW5kLCBpdCByZXR1cm5zIHRydWUgYW5kIHRoZW4gd2UgbXVzdCBtYXRjaCB3aGVyZSB0aGUgY29sb3Igc2hvd3MgdXAgb3JkZXItd2lzZSBiZWNhdXNlIGZvciB0aGluZ3MgbGlrZSBib3hTaGFkb3csIHNvbWV0aW1lcyB0aGUgYnJvd3NlciBwcm92aWRlcyB0aGUgY29tcHV0ZWQgdmFsdWVzIHdpdGggdGhlIGNvbG9yIEZJUlNULCBidXQgdGhlIHVzZXIgcHJvdmlkZXMgaXQgd2l0aCB0aGUgY29sb3IgTEFTVCwgc28gZmxpcCB0aGVtIGlmIG5lY2Vzc2FyeS4gU2FtZSBmb3IgZHJvcC1zaGFkb3coKS5cblxuXG4gIHN0YXJ0ID0gYVswXTtcbiAgZW5kID0gYVsxXTtcbiAgc3RhcnRWYWx1ZXMgPSBzdGFydC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICBlbmRWYWx1ZXMgPSBlbmQubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcblxuICBpZiAoZW5kVmFsdWVzLmxlbmd0aCkge1xuICAgIHdoaWxlIChyZXN1bHQgPSBfbnVtV2l0aFVuaXRFeHAuZXhlYyhlbmQpKSB7XG4gICAgICBlbmRWYWx1ZSA9IHJlc3VsdFswXTtcbiAgICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIgfHwgY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJoc2xhKFwiKSB7XG4gICAgICAgIGNvbG9yID0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFZhbHVlICE9PSAoc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWVzW21hdGNoSW5kZXgrK10gfHwgXCJcIikpIHtcbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpIHx8IDA7XG4gICAgICAgIHN0YXJ0VW5pdCA9IHN0YXJ0VmFsdWUuc3Vic3RyKChzdGFydE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgKGVuZFZhbHVlID0gX3BhcnNlUmVsYXRpdmUoc3RhcnROdW0sIGVuZFZhbHVlKSArIHN0YXJ0VW5pdCk7XG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgICBlbmRVbml0ID0gZW5kVmFsdWUuc3Vic3RyKChlbmROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICBpbmRleCA9IF9udW1XaXRoVW5pdEV4cC5sYXN0SW5kZXggLSBlbmRVbml0Lmxlbmd0aDtcblxuICAgICAgICBpZiAoIWVuZFVuaXQpIHtcbiAgICAgICAgICAvL2lmIHNvbWV0aGluZyBsaWtlIFwicGVyc3BlY3RpdmU6MzAwXCIgaXMgcGFzc2VkIGluIGFuZCB3ZSBtdXN0IGFkZCBhIHVuaXQgdG8gdGhlIGVuZFxuICAgICAgICAgIGVuZFVuaXQgPSBlbmRVbml0IHx8IF9jb25maWcudW5pdHNbcHJvcF0gfHwgc3RhcnRVbml0O1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBlbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmQgKz0gZW5kVW5pdDtcbiAgICAgICAgICAgIHB0LmUgKz0gZW5kVW5pdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3AsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpIHx8IDA7XG4gICAgICAgIH0gLy8gdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuXG4gICAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAgIC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuICAgICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICAgIGM6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCB8fCBwcm9wID09PSBcInpJbmRleFwiID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG4gIH0gZWxzZSB7XG4gICAgcHQuciA9IHByb3AgPT09IFwiZGlzcGxheVwiICYmIGVuZCA9PT0gXCJub25lXCIgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlO1xuICB9XG5cbiAgX3JlbEV4cC50ZXN0KGVuZCkgJiYgKHB0LmUgPSAwKTsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhbm90aGVyIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9rZXl3b3JkVG9QZXJjZW50ID0ge1xuICB0b3A6IFwiMCVcIixcbiAgYm90dG9tOiBcIjEwMCVcIixcbiAgbGVmdDogXCIwJVwiLFxuICByaWdodDogXCIxMDAlXCIsXG4gIGNlbnRlcjogXCI1MCVcIlxufSxcbiAgICBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyA9IGZ1bmN0aW9uIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKHZhbHVlKSB7XG4gIHZhciBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcbiAgICAgIHggPSBzcGxpdFswXSxcbiAgICAgIHkgPSBzcGxpdFsxXSB8fCBcIjUwJVwiO1xuXG4gIGlmICh4ID09PSBcInRvcFwiIHx8IHggPT09IFwiYm90dG9tXCIgfHwgeSA9PT0gXCJsZWZ0XCIgfHwgeSA9PT0gXCJyaWdodFwiKSB7XG4gICAgLy90aGUgdXNlciBwcm92aWRlZCB0aGVtIGluIHRoZSB3cm9uZyBvcmRlciwgc28gZmxpcCB0aGVtXG4gICAgdmFsdWUgPSB4O1xuICAgIHggPSB5O1xuICAgIHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHNwbGl0WzBdID0gX2tleXdvcmRUb1BlcmNlbnRbeF0gfHwgeDtcbiAgc3BsaXRbMV0gPSBfa2V5d29yZFRvUGVyY2VudFt5XSB8fCB5O1xuICByZXR1cm4gc3BsaXQuam9pbihcIiBcIik7XG59LFxuICAgIF9yZW5kZXJDbGVhclByb3BzID0gZnVuY3Rpb24gX3JlbmRlckNsZWFyUHJvcHMocmF0aW8sIGRhdGEpIHtcbiAgaWYgKGRhdGEudHdlZW4gJiYgZGF0YS50d2Vlbi5fdGltZSA9PT0gZGF0YS50d2Vlbi5fZHVyKSB7XG4gICAgdmFyIHRhcmdldCA9IGRhdGEudCxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHByb3BzID0gZGF0YS51LFxuICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgY2xlYXJUcmFuc2Zvcm1zLFxuICAgICAgICBpO1xuXG4gICAgaWYgKHByb3BzID09PSBcImFsbFwiIHx8IHByb3BzID09PSB0cnVlKSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgICAgIGNsZWFyVHJhbnNmb3JtcyA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzID0gcHJvcHMuc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgIHByb3AgPSBwcm9wc1tpXTtcblxuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICBwcm9wID0gcHJvcCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IF90cmFuc2Zvcm1PcmlnaW5Qcm9wIDogX3RyYW5zZm9ybVByb3A7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xlYXJUcmFuc2Zvcm1zKSB7XG4gICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgc3R5bGUuc2NhbGUgPSBzdHlsZS5yb3RhdGUgPSBzdHlsZS50cmFuc2xhdGUgPSBcIm5vbmVcIjtcblxuICAgICAgICBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTsgLy8gZm9yY2UgYWxsIHRoZSBjYWNoZWQgdmFsdWVzIGJhY2sgdG8gXCJub3JtYWxcIi9pZGVudGl0eSwgb3RoZXJ3aXNlIGlmIHRoZXJlJ3MgYW5vdGhlciB0d2VlbiB0aGF0J3MgYWxyZWFkeSBzZXQgdG8gcmVuZGVyIHRyYW5zZm9ybXMgb24gdGhpcyBlbGVtZW50LCBpdCBjb3VsZCBkaXNwbGF5IHRoZSB3cm9uZyB2YWx1ZXMuXG5cblxuICAgICAgICBjYWNoZS51bmNhY2hlID0gMTtcblxuICAgICAgICBfcmVtb3ZlSW5kZXBlbmRlbnRUcmFuc2Zvcm1zKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgLy8gbm90ZTogc3BlY2lhbFByb3BzIHNob3VsZCByZXR1cm4gMSBpZiAoYW5kIG9ubHkgaWYpIHRoZXkgaGF2ZSBhIG5vbi16ZXJvIHByaW9yaXR5LiBJdCBpbmRpY2F0ZXMgd2UgbmVlZCB0byBzb3J0IHRoZSBsaW5rZWQgbGlzdC5cbl9zcGVjaWFsUHJvcHMgPSB7XG4gIGNsZWFyUHJvcHM6IGZ1bmN0aW9uIGNsZWFyUHJvcHMocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICBpZiAodHdlZW4uZGF0YSAhPT0gXCJpc0Zyb21TdGFydFwiKSB7XG4gICAgICB2YXIgcHQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAwLCBfcmVuZGVyQ2xlYXJQcm9wcyk7XG4gICAgICBwdC51ID0gZW5kVmFsdWU7XG4gICAgICBwdC5wciA9IC0xMDtcbiAgICAgIHB0LnR3ZWVuID0gdHdlZW47XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICAvKiBjbGFzc05hbWUgZmVhdHVyZSAoYWJvdXQgMC40a2IgZ3ppcHBlZCkuXG4gICwgY2xhc3NOYW1lKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gIFx0bGV0IF9yZW5kZXJDbGFzc05hbWUgPSAocmF0aW8sIGRhdGEpID0+IHtcbiAgXHRcdFx0ZGF0YS5jc3MucmVuZGVyKHJhdGlvLCBkYXRhLmNzcyk7XG4gIFx0XHRcdGlmICghcmF0aW8gfHwgcmF0aW8gPT09IDEpIHtcbiAgXHRcdFx0XHRsZXQgaW5saW5lID0gZGF0YS5ybXYsXG4gIFx0XHRcdFx0XHR0YXJnZXQgPSBkYXRhLnQsXG4gIFx0XHRcdFx0XHRwO1xuICBcdFx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYik7XG4gIFx0XHRcdFx0Zm9yIChwIGluIGlubGluZSkge1xuICBcdFx0XHRcdFx0X3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9LFxuICBcdFx0X2dldEFsbFN0eWxlcyA9ICh0YXJnZXQpID0+IHtcbiAgXHRcdFx0bGV0IHN0eWxlcyA9IHt9LFxuICBcdFx0XHRcdGNvbXB1dGVkID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLFxuICBcdFx0XHRcdHA7XG4gIFx0XHRcdGZvciAocCBpbiBjb21wdXRlZCkge1xuICBcdFx0XHRcdGlmIChpc05hTihwKSAmJiBwICE9PSBcImNzc1RleHRcIiAmJiBwICE9PSBcImxlbmd0aFwiKSB7XG4gIFx0XHRcdFx0XHRzdHlsZXNbcF0gPSBjb21wdXRlZFtwXTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0X3NldERlZmF1bHRzKHN0eWxlcywgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSkpO1xuICBcdFx0XHRyZXR1cm4gc3R5bGVzO1xuICBcdFx0fSxcbiAgXHRcdHN0YXJ0Q2xhc3NMaXN0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLFxuICBcdFx0c3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gIFx0XHRjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dCxcbiAgXHRcdGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICBcdFx0Y2xhc3NQVCA9IGNhY2hlLmNsYXNzUFQsXG4gIFx0XHRpbmxpbmVUb1JlbW92ZUF0RW5kID0ge30sXG4gIFx0XHRkYXRhID0ge3Q6dGFyZ2V0LCBwbHVnaW46cGx1Z2luLCBybXY6aW5saW5lVG9SZW1vdmVBdEVuZCwgYjpzdGFydENsYXNzTGlzdCwgZTooZW5kVmFsdWUuY2hhckF0KDEpICE9PSBcIj1cIikgPyBlbmRWYWx1ZSA6IHN0YXJ0Q2xhc3NMaXN0LnJlcGxhY2UobmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgKyBcIig/IVtcXFxcdy1dKVwiKSwgXCJcIikgKyAoKGVuZFZhbHVlLmNoYXJBdCgwKSA9PT0gXCIrXCIpID8gXCIgXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgOiBcIlwiKX0sXG4gIFx0XHRjaGFuZ2luZ1ZhcnMgPSB7fSxcbiAgXHRcdHN0YXJ0VmFycyA9IF9nZXRBbGxTdHlsZXModGFyZ2V0KSxcbiAgXHRcdHRyYW5zZm9ybVJlbGF0ZWQgPSAvKHRyYW5zZm9ybXxwZXJzcGVjdGl2ZSkvaSxcbiAgXHRcdGVuZFZhcnMsIHA7XG4gIFx0aWYgKGNsYXNzUFQpIHtcbiAgXHRcdGNsYXNzUFQucigxLCBjbGFzc1BULmQpO1xuICBcdFx0X3JlbW92ZUxpbmtlZExpc3RJdGVtKGNsYXNzUFQuZC5wbHVnaW4sIGNsYXNzUFQsIFwiX3B0XCIpO1xuICBcdH1cbiAgXHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGF0YS5lKTtcbiAgXHRlbmRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQsIHRydWUpO1xuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdGFydENsYXNzTGlzdCk7XG4gIFx0Zm9yIChwIGluIGVuZFZhcnMpIHtcbiAgXHRcdGlmIChlbmRWYXJzW3BdICE9PSBzdGFydFZhcnNbcF0gJiYgIXRyYW5zZm9ybVJlbGF0ZWQudGVzdChwKSkge1xuICBcdFx0XHRjaGFuZ2luZ1ZhcnNbcF0gPSBlbmRWYXJzW3BdO1xuICBcdFx0XHRpZiAoIXN0eWxlW3BdICYmIHN0eWxlW3BdICE9PSBcIjBcIikge1xuICBcdFx0XHRcdGlubGluZVRvUmVtb3ZlQXRFbmRbcF0gPSAxO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICBcdGNhY2hlLmNsYXNzUFQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIFwiY2xhc3NOYW1lXCIsIDAsIDAsIF9yZW5kZXJDbGFzc05hbWUsIGRhdGEsIDAsIC0xMSk7XG4gIFx0aWYgKHN0eWxlLmNzc1RleHQgIT09IGNzc1RleHQpIHsgLy9vbmx5IGFwcGx5IGlmIHRoaW5ncyBjaGFuZ2UuIE90aGVyd2lzZSwgaW4gY2FzZXMgbGlrZSBhIGJhY2tncm91bmQtaW1hZ2UgdGhhdCdzIHB1bGxlZCBkeW5hbWljYWxseSwgaXQgY291bGQgY2F1c2UgYSByZWZyZXNoLiBTZWUgaHR0cHM6Ly9nc2FwLmNvbS9mb3J1bXMvdG9waWMvMjAzNjgtcG9zc2libGUtZ3NhcC1idWctc3dpdGNoaW5nLWNsYXNzbmFtZXMtaW4tY2hyb21lLy5cbiAgXHRcdHN0eWxlLmNzc1RleHQgPSBjc3NUZXh0OyAvL3dlIHJlY29yZGVkIGNzc1RleHQgYmVmb3JlIHdlIHN3YXBwZWQgY2xhc3NlcyBhbmQgcmFuIF9nZXRBbGxTdHlsZXMoKSBiZWNhdXNlIGluIGNhc2VzIHdoZW4gYSBjbGFzc05hbWUgdHdlZW4gaXMgb3ZlcndyaXR0ZW4sIHdlIHJlbW92ZSBhbGwgdGhlIHJlbGF0ZWQgdHdlZW5pbmcgcHJvcGVydGllcyBmcm9tIHRoYXQgY2xhc3MgY2hhbmdlIChvdGhlcndpc2UgY2xhc3Mtc3BlY2lmaWMgc3R1ZmYgY2FuJ3Qgb3ZlcnJpZGUgcHJvcGVydGllcyB3ZSd2ZSBkaXJlY3RseSBzZXQgb24gdGhlIHRhcmdldCdzIHN0eWxlIG9iamVjdCBkdWUgdG8gc3BlY2lmaWNpdHkpLlxuICBcdH1cbiAgXHRfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB0cnVlKTsgLy90byBjbGVhciB0aGUgY2FjaGluZyBvZiB0cmFuc2Zvcm1zXG4gIFx0ZGF0YS5jc3MgPSBuZXcgZ3NhcC5wbHVnaW5zLmNzcygpO1xuICBcdGRhdGEuY3NzLmluaXQodGFyZ2V0LCBjaGFuZ2luZ1ZhcnMsIHR3ZWVuKTtcbiAgXHRwbHVnaW4uX3Byb3BzLnB1c2goLi4uZGF0YS5jc3MuX3Byb3BzKTtcbiAgXHRyZXR1cm4gMTtcbiAgfVxuICAqL1xuXG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRSQU5TRk9STVNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl9pZGVudGl0eTJETWF0cml4ID0gWzEsIDAsIDAsIDEsIDAsIDBdLFxuICAgIF9yb3RhdGlvbmFsUHJvcGVydGllcyA9IHt9LFxuICAgIF9pc051bGxUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfaXNOdWxsVHJhbnNmb3JtKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiB8fCB2YWx1ZSA9PT0gXCJub25lXCIgfHwgIXZhbHVlO1xufSxcbiAgICBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpIHtcbiAgdmFyIG1hdHJpeFN0cmluZyA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gIHJldHVybiBfaXNOdWxsVHJhbnNmb3JtKG1hdHJpeFN0cmluZykgPyBfaWRlbnRpdHkyRE1hdHJpeCA6IG1hdHJpeFN0cmluZy5zdWJzdHIoNykubWF0Y2goX251bUV4cCkubWFwKF9yb3VuZCk7XG59LFxuICAgIF9nZXRNYXRyaXggPSBmdW5jdGlvbiBfZ2V0TWF0cml4KHRhcmdldCwgZm9yY2UyRCkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgX2dldENhY2hlKHRhcmdldCksXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIG1hdHJpeCA9IF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KSxcbiAgICAgIHBhcmVudCxcbiAgICAgIG5leHRTaWJsaW5nLFxuICAgICAgdGVtcCxcbiAgICAgIGFkZGVkVG9ET007XG5cbiAgaWYgKGNhY2hlLnN2ZyAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpKSB7XG4gICAgdGVtcCA9IHRhcmdldC50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpLm1hdHJpeDsgLy9lbnN1cmVzIHRoYXQgZXZlbiBjb21wbGV4IHZhbHVlcyBsaWtlIFwidHJhbnNsYXRlKDUwLDYwKSByb3RhdGUoMTM1LDAsMClcIiBhcmUgcGFyc2VkIGJlY2F1c2UgaXQgbWFzaGVzIGl0IGludG8gYSBtYXRyaXguXG5cbiAgICBtYXRyaXggPSBbdGVtcC5hLCB0ZW1wLmIsIHRlbXAuYywgdGVtcC5kLCB0ZW1wLmUsIHRlbXAuZl07XG4gICAgcmV0dXJuIG1hdHJpeC5qb2luKFwiLFwiKSA9PT0gXCIxLDAsMCwxLDAsMFwiID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXg7XG4gIH0gZWxzZSBpZiAobWF0cml4ID09PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAhdGFyZ2V0Lm9mZnNldFBhcmVudCAmJiB0YXJnZXQgIT09IF9kb2NFbGVtZW50ICYmICFjYWNoZS5zdmcpIHtcbiAgICAvL25vdGU6IGlmIG9mZnNldFBhcmVudCBpcyBudWxsLCB0aGF0IG1lYW5zIHRoZSBlbGVtZW50IGlzbid0IGluIHRoZSBub3JtYWwgZG9jdW1lbnQgZmxvdywgbGlrZSBpZiBpdCBoYXMgZGlzcGxheTpub25lIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyBkaXNwbGF5Om5vbmUpLiBGaXJlZm94IHJldHVybnMgbnVsbCBmb3IgZ2V0Q29tcHV0ZWRTdHlsZSgpIGlmIHRoZSBlbGVtZW50IGlzIGluIGFuIGlmcmFtZSB0aGF0IGhhcyBkaXNwbGF5Om5vbmUuIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIC8vYnJvd3NlcnMgZG9uJ3QgcmVwb3J0IHRyYW5zZm9ybXMgYWNjdXJhdGVseSB1bmxlc3MgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIERPTSBhbmQgaGFzIGEgZGlzcGxheSB2YWx1ZSB0aGF0J3Mgbm90IFwibm9uZVwiLiBGaXJlZm94IGFuZCBNaWNyb3NvZnQgYnJvd3NlcnMgaGF2ZSBhIHBhcnRpYWwgYnVnIHdoZXJlIHRoZXknbGwgcmVwb3J0IHRyYW5zZm9ybXMgZXZlbiBpZiBkaXNwbGF5Om5vbmUgQlVUIG5vdCBhbnkgcGVyY2VudGFnZS1iYXNlZCB2YWx1ZXMgbGlrZSB0cmFuc2xhdGUoLTUwJSwgOHB4KSB3aWxsIGJlIHJlcG9ydGVkIGFzIGlmIGl0J3MgdHJhbnNsYXRlKDAsIDhweCkuXG4gICAgdGVtcCA9IHN0eWxlLmRpc3BsYXk7XG4gICAgc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGFyZW50IHx8ICF0YXJnZXQub2Zmc2V0UGFyZW50ICYmICF0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpIHtcbiAgICAgIC8vIG5vdGU6IGluIDMuMy4wIHdlIHN3aXRjaGVkIHRhcmdldC5vZmZzZXRQYXJlbnQgdG8gX2RvYy5ib2R5LmNvbnRhaW5zKHRhcmdldCkgdG8gYXZvaWQgW3NvbWV0aW1lcyB1bm5lY2Vzc2FyeV0gTXV0YXRpb25PYnNlcnZlciBjYWxscyBidXQgdGhhdCB3YXNuJ3QgYWRlcXVhdGUgYmVjYXVzZSB0aGVyZSBhcmUgZWRnZSBjYXNlcyB3aGVyZSBuZXN0ZWQgcG9zaXRpb246IGZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gZ2V0IHJlcGFyZW50ZWQgdG8gYWNjdXJhdGVseSBzZW5zZSB0cmFuc2Zvcm1zLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zODggYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzc1LiBOb3RlOiBwb3NpdGlvbjogZml4ZWQgZWxlbWVudHMgcmVwb3J0IGEgbnVsbCBvZmZzZXRQYXJlbnQgYnV0IHRoZXkgY291bGQgYWxzbyBiZSBpbnZpc2libGUgYmVjYXVzZSB0aGV5J3JlIGluIGFuIGFuY2VzdG9yIHdpdGggZGlzcGxheTogbm9uZSwgc28gd2UgY2hlY2sgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuIFdlIG9ubHkgd2FudCB0byBhbHRlciB0aGUgRE9NIGlmIHdlIGFic29sdXRlbHkgaGF2ZSB0byBiZWNhdXNlIGl0IGNhbiBjYXVzZSBpZnJhbWUgY29udGVudCB0byByZWxvYWQsIGxpa2UgYSBWaW1lbyB2aWRlby5cbiAgICAgIGFkZGVkVG9ET00gPSAxOyAvL2ZsYWdcblxuICAgICAgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZCh0YXJnZXQpOyAvL3dlIG11c3QgYWRkIGl0IHRvIHRoZSBET00gaW4gb3JkZXIgdG8gZ2V0IHZhbHVlcyBwcm9wZXJseVxuXG4gICAgfVxuXG4gICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpO1xuICAgIHRlbXAgPyBzdHlsZS5kaXNwbGF5ID0gdGVtcCA6IF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIFwiZGlzcGxheVwiKTtcblxuICAgIGlmIChhZGRlZFRvRE9NKSB7XG4gICAgICBuZXh0U2libGluZyA/IHBhcmVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LCBuZXh0U2libGluZykgOiBwYXJlbnQgPyBwYXJlbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KSA6IF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcmNlMkQgJiYgbWF0cml4Lmxlbmd0aCA+IDYgPyBbbWF0cml4WzBdLCBtYXRyaXhbMV0sIG1hdHJpeFs0XSwgbWF0cml4WzVdLCBtYXRyaXhbMTJdLCBtYXRyaXhbMTNdXSA6IG1hdHJpeDtcbn0sXG4gICAgX2FwcGx5U1ZHT3JpZ2luID0gZnVuY3Rpb24gX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgb3JpZ2luLCBvcmlnaW5Jc0Fic29sdXRlLCBzbW9vdGgsIG1hdHJpeEFycmF5LCBwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICBtYXRyaXggPSBtYXRyaXhBcnJheSB8fCBfZ2V0TWF0cml4KHRhcmdldCwgdHJ1ZSksXG4gICAgICB4T3JpZ2luT2xkID0gY2FjaGUueE9yaWdpbiB8fCAwLFxuICAgICAgeU9yaWdpbk9sZCA9IGNhY2hlLnlPcmlnaW4gfHwgMCxcbiAgICAgIHhPZmZzZXRPbGQgPSBjYWNoZS54T2Zmc2V0IHx8IDAsXG4gICAgICB5T2Zmc2V0T2xkID0gY2FjaGUueU9mZnNldCB8fCAwLFxuICAgICAgYSA9IG1hdHJpeFswXSxcbiAgICAgIGIgPSBtYXRyaXhbMV0sXG4gICAgICBjID0gbWF0cml4WzJdLFxuICAgICAgZCA9IG1hdHJpeFszXSxcbiAgICAgIHR4ID0gbWF0cml4WzRdLFxuICAgICAgdHkgPSBtYXRyaXhbNV0sXG4gICAgICBvcmlnaW5TcGxpdCA9IG9yaWdpbi5zcGxpdChcIiBcIiksXG4gICAgICB4T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW5TcGxpdFswXSkgfHwgMCxcbiAgICAgIHlPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzFdKSB8fCAwLFxuICAgICAgYm91bmRzLFxuICAgICAgZGV0ZXJtaW5hbnQsXG4gICAgICB4LFxuICAgICAgeTtcblxuICBpZiAoIW9yaWdpbklzQWJzb2x1dGUpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveCh0YXJnZXQpO1xuICAgIHhPcmlnaW4gPSBib3VuZHMueCArICh+b3JpZ2luU3BsaXRbMF0uaW5kZXhPZihcIiVcIikgPyB4T3JpZ2luIC8gMTAwICogYm91bmRzLndpZHRoIDogeE9yaWdpbik7XG4gICAgeU9yaWdpbiA9IGJvdW5kcy55ICsgKH4ob3JpZ2luU3BsaXRbMV0gfHwgb3JpZ2luU3BsaXRbMF0pLmluZGV4T2YoXCIlXCIpID8geU9yaWdpbiAvIDEwMCAqIGJvdW5kcy5oZWlnaHQgOiB5T3JpZ2luKTsgLy8gaWYgKCEoXCJ4T3JpZ2luXCIgaW4gY2FjaGUpICYmICh4T3JpZ2luIHx8IHlPcmlnaW4pKSB7IC8vIGFkZGVkIGluIDMuMTIuMywgcmV2ZXJ0ZWQgaW4gMy4xMi40OyByZXF1aXJlcyBtb3JlIGV4cGxvcmF0aW9uXG4gICAgLy8gXHR4T3JpZ2luIC09IGJvdW5kcy54O1xuICAgIC8vIFx0eU9yaWdpbiAtPSBib3VuZHMueTtcbiAgICAvLyB9XG4gIH0gZWxzZSBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAoZGV0ZXJtaW5hbnQgPSBhICogZCAtIGIgKiBjKSkge1xuICAgIC8vaWYgaXQncyB6ZXJvIChsaWtlIGlmIHNjYWxlWCBhbmQgc2NhbGVZIGFyZSB6ZXJvKSwgc2tpcCBpdCB0byBhdm9pZCBlcnJvcnMgd2l0aCBkaXZpZGluZyBieSB6ZXJvLlxuICAgIHggPSB4T3JpZ2luICogKGQgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKC1jIC8gZGV0ZXJtaW5hbnQpICsgKGMgKiB0eSAtIGQgKiB0eCkgLyBkZXRlcm1pbmFudDtcbiAgICB5ID0geE9yaWdpbiAqICgtYiAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoYSAvIGRldGVybWluYW50KSAtIChhICogdHkgLSBiICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeE9yaWdpbiA9IHg7XG4gICAgeU9yaWdpbiA9IHk7IC8vIHRoZW9yeTogd2Ugb25seSBoYWQgdG8gZG8gdGhpcyBmb3Igc21vb3RoaW5nIGFuZCBpdCBhc3N1bWVzIHRoYXQgdGhlIHByZXZpb3VzIG9uZSB3YXMgbm90IG9yaWdpbklzQWJzb2x1dGUuXG4gIH1cblxuICBpZiAoc21vb3RoIHx8IHNtb290aCAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoKSB7XG4gICAgdHggPSB4T3JpZ2luIC0geE9yaWdpbk9sZDtcbiAgICB0eSA9IHlPcmlnaW4gLSB5T3JpZ2luT2xkO1xuICAgIGNhY2hlLnhPZmZzZXQgPSB4T2Zmc2V0T2xkICsgKHR4ICogYSArIHR5ICogYykgLSB0eDtcbiAgICBjYWNoZS55T2Zmc2V0ID0geU9mZnNldE9sZCArICh0eCAqIGIgKyB0eSAqIGQpIC0gdHk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICB9XG5cbiAgY2FjaGUueE9yaWdpbiA9IHhPcmlnaW47XG4gIGNhY2hlLnlPcmlnaW4gPSB5T3JpZ2luO1xuICBjYWNoZS5zbW9vdGggPSAhIXNtb290aDtcbiAgY2FjaGUub3JpZ2luID0gb3JpZ2luO1xuICBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlID0gISFvcmlnaW5Jc0Fic29sdXRlO1xuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gXCIwcHggMHB4XCI7IC8vb3RoZXJ3aXNlLCBpZiBzb21lb25lIHNldHMgIGFuIG9yaWdpbiB2aWEgQ1NTLCBpdCB3aWxsIGxpa2VseSBpbnRlcmZlcmUgd2l0aCB0aGUgU1ZHIHRyYW5zZm9ybSBhdHRyaWJ1dGUgb25lcyAoYmVjYXVzZSByZW1lbWJlciwgd2UncmUgYmFraW5nIHRoZSBvcmlnaW4gaW50byB0aGUgbWF0cml4KCkgdmFsdWUpLlxuXG4gIGlmIChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T3JpZ2luXCIsIHhPcmlnaW5PbGQsIHhPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPcmlnaW5cIiwgeU9yaWdpbk9sZCwgeU9yaWdpbik7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9mZnNldFwiLCB4T2Zmc2V0T2xkLCBjYWNoZS54T2Zmc2V0KTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T2Zmc2V0XCIsIHlPZmZzZXRPbGQsIGNhY2hlLnlPZmZzZXQpO1xuICB9XG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLCB4T3JpZ2luICsgXCIgXCIgKyB5T3JpZ2luKTtcbn0sXG4gICAgX3BhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgbmV3IEdTQ2FjaGUodGFyZ2V0KTtcblxuICBpZiAoXCJ4XCIgaW4gY2FjaGUgJiYgIXVuY2FjaGUgJiYgIWNhY2hlLnVuY2FjaGUpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH1cblxuICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBpbnZlcnRlZFNjYWxlWCA9IGNhY2hlLnNjYWxlWCA8IDAsXG4gICAgICBweCA9IFwicHhcIixcbiAgICAgIGRlZyA9IFwiZGVnXCIsXG4gICAgICBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KSxcbiAgICAgIG9yaWdpbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApIHx8IFwiMFwiLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB6LFxuICAgICAgc2NhbGVYLFxuICAgICAgc2NhbGVZLFxuICAgICAgcm90YXRpb24sXG4gICAgICByb3RhdGlvblgsXG4gICAgICByb3RhdGlvblksXG4gICAgICBza2V3WCxcbiAgICAgIHNrZXdZLFxuICAgICAgcGVyc3BlY3RpdmUsXG4gICAgICB4T3JpZ2luLFxuICAgICAgeU9yaWdpbixcbiAgICAgIG1hdHJpeCxcbiAgICAgIGFuZ2xlLFxuICAgICAgY29zLFxuICAgICAgc2luLFxuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHQxLFxuICAgICAgdDIsXG4gICAgICB0MyxcbiAgICAgIGExMyxcbiAgICAgIGEyMyxcbiAgICAgIGEzMyxcbiAgICAgIGE0MixcbiAgICAgIGE0MyxcbiAgICAgIGEzMjtcbiAgeCA9IHkgPSB6ID0gcm90YXRpb24gPSByb3RhdGlvblggPSByb3RhdGlvblkgPSBza2V3WCA9IHNrZXdZID0gcGVyc3BlY3RpdmUgPSAwO1xuICBzY2FsZVggPSBzY2FsZVkgPSAxO1xuICBjYWNoZS5zdmcgPSAhISh0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpKTtcblxuICBpZiAoY3MudHJhbnNsYXRlKSB7XG4gICAgLy8gYWNjb21tb2RhdGUgaW5kZXBlbmRlbnQgdHJhbnNmb3JtcyBieSBjb21iaW5pbmcgdGhlbSBpbnRvIG5vcm1hbCBvbmVzLlxuICAgIGlmIChjcy50cmFuc2xhdGUgIT09IFwibm9uZVwiIHx8IGNzLnNjYWxlICE9PSBcIm5vbmVcIiB8fCBjcy5yb3RhdGUgIT09IFwibm9uZVwiKSB7XG4gICAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSAoY3MudHJhbnNsYXRlICE9PSBcIm5vbmVcIiA/IFwidHJhbnNsYXRlM2QoXCIgKyAoY3MudHJhbnNsYXRlICsgXCIgMCAwXCIpLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAzKS5qb2luKFwiLCBcIikgKyBcIikgXCIgOiBcIlwiKSArIChjcy5yb3RhdGUgIT09IFwibm9uZVwiID8gXCJyb3RhdGUoXCIgKyBjcy5yb3RhdGUgKyBcIikgXCIgOiBcIlwiKSArIChjcy5zY2FsZSAhPT0gXCJub25lXCIgPyBcInNjYWxlKFwiICsgY3Muc2NhbGUuc3BsaXQoXCIgXCIpLmpvaW4oXCIsXCIpICsgXCIpIFwiIDogXCJcIikgKyAoY3NbX3RyYW5zZm9ybVByb3BdICE9PSBcIm5vbmVcIiA/IGNzW190cmFuc2Zvcm1Qcm9wXSA6IFwiXCIpO1xuICAgIH1cblxuICAgIHN0eWxlLnNjYWxlID0gc3R5bGUucm90YXRlID0gc3R5bGUudHJhbnNsYXRlID0gXCJub25lXCI7XG4gIH1cblxuICBtYXRyaXggPSBfZ2V0TWF0cml4KHRhcmdldCwgY2FjaGUuc3ZnKTtcblxuICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgaWYgKGNhY2hlLnVuY2FjaGUpIHtcbiAgICAgIC8vIGlmIGNhY2hlLnVuY2FjaGUgaXMgdHJ1ZSAoYW5kIG1heWJlIGlmIG9yaWdpbiBpcyAwLDApLCB3ZSBuZWVkIHRvIHNldCBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IChjYWNoZS54T3JpZ2luIC0gYmJveC54KSArIFwicHggXCIgKyAoY2FjaGUueU9yaWdpbiAtIGJib3gueSkgKyBcInB4XCIuIFByZXZpb3VzbHkgd2UgbGV0IHRoZSBkYXRhLXN2Zy1vcmlnaW4gc3RheSBpbnN0ZWFkLCBidXQgd2hlbiBpbnRyb2R1Y2luZyByZXZlcnQoKSwgaXQgY29tcGxpY2F0ZWQgdGhpbmdzLlxuICAgICAgdDIgPSB0YXJnZXQuZ2V0QkJveCgpO1xuICAgICAgb3JpZ2luID0gY2FjaGUueE9yaWdpbiAtIHQyLnggKyBcInB4IFwiICsgKGNhY2hlLnlPcmlnaW4gLSB0Mi55KSArIFwicHhcIjtcbiAgICAgIHQxID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdDEgPSAhdW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpOyAvLyAgUmVtZW1iZXIsIHRvIHdvcmsgYXJvdW5kIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzIHdlIGFsd2F5cyBmb3JjZSBTVkcgZWxlbWVudHMnIHRyYW5zZm9ybU9yaWdpbiB0byAwLDAgYW5kIG9mZnNldCB0aGUgdHJhbnNsYXRpb24gYWNjb3JkaW5nbHkuXG4gICAgfVxuXG4gICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgdDEgfHwgb3JpZ2luLCAhIXQxIHx8IGNhY2hlLm9yaWdpbklzQWJzb2x1dGUsIGNhY2hlLnNtb290aCAhPT0gZmFsc2UsIG1hdHJpeCk7XG4gIH1cblxuICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICB5T3JpZ2luID0gY2FjaGUueU9yaWdpbiB8fCAwO1xuXG4gIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4KSB7XG4gICAgYSA9IG1hdHJpeFswXTsgLy9hMTFcblxuICAgIGIgPSBtYXRyaXhbMV07IC8vYTIxXG5cbiAgICBjID0gbWF0cml4WzJdOyAvL2EzMVxuXG4gICAgZCA9IG1hdHJpeFszXTsgLy9hNDFcblxuICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgeSA9IGEyMiA9IG1hdHJpeFs1XTsgLy8yRCBtYXRyaXhcblxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSA2KSB7XG4gICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICBzY2FsZVkgPSBNYXRoLnNxcnQoZCAqIGQgKyBjICogYyk7XG4gICAgICByb3RhdGlvbiA9IGEgfHwgYiA/IF9hdGFuMihiLCBhKSAqIF9SQUQyREVHIDogMDsgLy9ub3RlOiBpZiBzY2FsZVggaXMgMCwgd2UgY2Fubm90IGFjY3VyYXRlbHkgbWVhc3VyZSByb3RhdGlvbi4gU2FtZSBmb3Igc2tld1ggd2l0aCBhIHNjYWxlWSBvZiAwLiBUaGVyZWZvcmUsIHdlIGRlZmF1bHQgdG8gdGhlIHByZXZpb3VzbHkgcmVjb3JkZWQgdmFsdWUgKG9yIHplcm8gaWYgdGhhdCBkb2Vzbid0IGV4aXN0KS5cblxuICAgICAgc2tld1ggPSBjIHx8IGQgPyBfYXRhbjIoYywgZCkgKiBfUkFEMkRFRyArIHJvdGF0aW9uIDogMDtcbiAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5hYnMoTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpKTtcblxuICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgIHkgLT0geU9yaWdpbiAtICh4T3JpZ2luICogYiArIHlPcmlnaW4gKiBkKTtcbiAgICAgIH0gLy8zRCBtYXRyaXhcblxuICAgIH0gZWxzZSB7XG4gICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICBhNDIgPSBtYXRyaXhbN107XG4gICAgICBhMTMgPSBtYXRyaXhbOF07XG4gICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICBhMzMgPSBtYXRyaXhbMTBdO1xuICAgICAgYTQzID0gbWF0cml4WzExXTtcbiAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgeSA9IG1hdHJpeFsxM107XG4gICAgICB6ID0gbWF0cml4WzE0XTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgIHJvdGF0aW9uWCA9IGFuZ2xlICogX1JBRDJERUc7IC8vcm90YXRpb25YXG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGExMiAqIGNvcyArIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYTMyICogY29zICsgYTMzICogc2luO1xuICAgICAgICBhMTMgPSBhMTIgKiAtc2luICsgYTEzICogY29zO1xuICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICBhMzMgPSBhMzIgKiAtc2luICsgYTMzICogY29zO1xuICAgICAgICBhNDMgPSBhNDIgKiAtc2luICsgYTQzICogY29zO1xuICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgYTIyID0gdDI7XG4gICAgICAgIGEzMiA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWVxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgcm90YXRpb25ZID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyAtIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICB0MyA9IGMgKiBjb3MgLSBhMzMgKiBzaW47XG4gICAgICAgIGE0MyA9IGQgKiBzaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYiA9IHQyO1xuICAgICAgICBjID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25aXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICByb3RhdGlvbiA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zICsgYiAqIHNpbjtcbiAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgIGIgPSBiICogY29zIC0gYSAqIHNpbjtcbiAgICAgICAgYTIyID0gYTIyICogY29zIC0gYTEyICogc2luO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGExMiA9IHQyO1xuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAvL3doZW4gcm90YXRpb25ZIGlzIHNldCwgaXQgd2lsbCBvZnRlbiBiZSBwYXJzZWQgYXMgMTgwIGRlZ3JlZXMgZGlmZmVyZW50IHRoYW4gaXQgc2hvdWxkIGJlLCBhbmQgcm90YXRpb25YIGFuZCByb3RhdGlvbiBib3RoIGJlaW5nIDE4MCAoaXQgbG9va3MgdGhlIHNhbWUpLCBzbyB3ZSBhZGp1c3QgZm9yIHRoYXQgaGVyZS5cbiAgICAgICAgcm90YXRpb25YID0gcm90YXRpb24gPSAwO1xuICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlWCA9IF9yb3VuZChNYXRoLnNxcnQoYSAqIGEgKyBiICogYiArIGMgKiBjKSk7XG4gICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTEyLCBhMjIpO1xuICAgICAgc2tld1ggPSBNYXRoLmFicyhhbmdsZSkgPiAwLjAwMDIgPyBhbmdsZSAqIF9SQUQyREVHIDogMDtcbiAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIC8vc2Vuc2UgaWYgdGhlcmUgYXJlIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQgb24gYW4gU1ZHIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHdoZW4gcmVuZGVyaW5nLiBUaGUgdHJhbnNmb3JtIGF0dHJpYnV0ZSBpcyBtb3JlIHJlbGlhYmxlIGNyb3NzLWJyb3dzZXIsIGJ1dCB3ZSBjYW4ndCBqdXN0IHJlbW92ZSB0aGUgQ1NTIG9uZXMgYmVjYXVzZSB0aGV5IG1heSBiZSBhcHBsaWVkIGluIGEgQ1NTIHJ1bGUgc29tZXdoZXJlIChub3QganVzdCBpbmxpbmUpLlxuICAgICAgdDEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgIHQxICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdDEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChNYXRoLmFicyhza2V3WCkgPiA5MCAmJiBNYXRoLmFicyhza2V3WCkgPCAyNzApIHtcbiAgICBpZiAoaW52ZXJ0ZWRTY2FsZVgpIHtcbiAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgcm90YXRpb24gKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlWSAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHNrZXdYIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH1cbiAgfVxuXG4gIHVuY2FjaGUgPSB1bmNhY2hlIHx8IGNhY2hlLnVuY2FjaGU7XG4gIGNhY2hlLnggPSB4IC0gKChjYWNoZS54UGVyY2VudCA9IHggJiYgKCF1bmNhY2hlICYmIGNhY2hlLnhQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRXaWR0aCAvIDIpID09PSBNYXRoLnJvdW5kKC14KSA/IC01MCA6IDApKSkgPyB0YXJnZXQub2Zmc2V0V2lkdGggKiBjYWNoZS54UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnkgPSB5IC0gKChjYWNoZS55UGVyY2VudCA9IHkgJiYgKCF1bmNhY2hlICYmIGNhY2hlLnlQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldEhlaWdodCAqIGNhY2hlLnlQZXJjZW50IC8gMTAwIDogMCkgKyBweDtcbiAgY2FjaGUueiA9IHogKyBweDtcbiAgY2FjaGUuc2NhbGVYID0gX3JvdW5kKHNjYWxlWCk7XG4gIGNhY2hlLnNjYWxlWSA9IF9yb3VuZChzY2FsZVkpO1xuICBjYWNoZS5yb3RhdGlvbiA9IF9yb3VuZChyb3RhdGlvbikgKyBkZWc7XG4gIGNhY2hlLnJvdGF0aW9uWCA9IF9yb3VuZChyb3RhdGlvblgpICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblkgPSBfcm91bmQocm90YXRpb25ZKSArIGRlZztcbiAgY2FjaGUuc2tld1ggPSBza2V3WCArIGRlZztcbiAgY2FjaGUuc2tld1kgPSBza2V3WSArIGRlZztcbiAgY2FjaGUudHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZSArIHB4O1xuXG4gIGlmIChjYWNoZS56T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW4uc3BsaXQoXCIgXCIpWzJdKSB8fCAhdW5jYWNoZSAmJiBjYWNoZS56T3JpZ2luIHx8IDApIHtcbiAgICBzdHlsZVtfdHJhbnNmb3JtT3JpZ2luUHJvcF0gPSBfZmlyc3RUd29Pbmx5KG9yaWdpbik7XG4gIH1cblxuICBjYWNoZS54T2Zmc2V0ID0gY2FjaGUueU9mZnNldCA9IDA7XG4gIGNhY2hlLmZvcmNlM0QgPSBfY29uZmlnLmZvcmNlM0Q7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybSA9IGNhY2hlLnN2ZyA/IF9yZW5kZXJTVkdUcmFuc2Zvcm1zIDogX3N1cHBvcnRzM0QgPyBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA6IF9yZW5kZXJOb24zRFRyYW5zZm9ybXM7XG4gIGNhY2hlLnVuY2FjaGUgPSAwO1xuICByZXR1cm4gY2FjaGU7XG59LFxuICAgIF9maXJzdFR3b09ubHkgPSBmdW5jdGlvbiBfZmlyc3RUd29Pbmx5KHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgPSB2YWx1ZS5zcGxpdChcIiBcIikpWzBdICsgXCIgXCIgKyB2YWx1ZVsxXTtcbn0sXG4gICAgLy9mb3IgaGFuZGxpbmcgdHJhbnNmb3JtT3JpZ2luIHZhbHVlcywgc3RyaXBwaW5nIG91dCB0aGUgM3JkIGRpbWVuc2lvblxuX2FkZFB4VHJhbnNsYXRlID0gZnVuY3Rpb24gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgc3RhcnQsIHZhbHVlKSB7XG4gIHZhciB1bml0ID0gZ2V0VW5pdChzdGFydCk7XG4gIHJldHVybiBfcm91bmQocGFyc2VGbG9hdChzdGFydCkgKyBwYXJzZUZsb2F0KF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHZhbHVlICsgXCJweFwiLCB1bml0KSkpICsgdW5pdDtcbn0sXG4gICAgX3JlbmRlck5vbjNEVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIGNhY2hlLnogPSBcIjBweFwiO1xuICBjYWNoZS5yb3RhdGlvblkgPSBjYWNoZS5yb3RhdGlvblggPSBcIjBkZWdcIjtcbiAgY2FjaGUuZm9yY2UzRCA9IDA7XG5cbiAgX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3plcm9EZWcgPSBcIjBkZWdcIixcbiAgICBfemVyb1B4ID0gXCIwcHhcIixcbiAgICBfZW5kUGFyZW50aGVzaXMgPSBcIikgXCIsXG4gICAgX3JlbmRlckNTU1RyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgdmFyIF9yZWYgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgeFBlcmNlbnQgPSBfcmVmLnhQZXJjZW50LFxuICAgICAgeVBlcmNlbnQgPSBfcmVmLnlQZXJjZW50LFxuICAgICAgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnksXG4gICAgICB6ID0gX3JlZi56LFxuICAgICAgcm90YXRpb24gPSBfcmVmLnJvdGF0aW9uLFxuICAgICAgcm90YXRpb25ZID0gX3JlZi5yb3RhdGlvblksXG4gICAgICByb3RhdGlvblggPSBfcmVmLnJvdGF0aW9uWCxcbiAgICAgIHNrZXdYID0gX3JlZi5za2V3WCxcbiAgICAgIHNrZXdZID0gX3JlZi5za2V3WSxcbiAgICAgIHNjYWxlWCA9IF9yZWYuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gX3JlZi5zY2FsZVksXG4gICAgICB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSA9IF9yZWYudHJhbnNmb3JtUGVyc3BlY3RpdmUsXG4gICAgICBmb3JjZTNEID0gX3JlZi5mb3JjZTNELFxuICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQsXG4gICAgICB6T3JpZ2luID0gX3JlZi56T3JpZ2luLFxuICAgICAgdHJhbnNmb3JtcyA9IFwiXCIsXG4gICAgICB1c2UzRCA9IGZvcmNlM0QgPT09IFwiYXV0b1wiICYmIHJhdGlvICYmIHJhdGlvICE9PSAxIHx8IGZvcmNlM0QgPT09IHRydWU7IC8vIFNhZmFyaSBoYXMgYSBidWcgdGhhdCBjYXVzZXMgaXQgbm90IHRvIHJlbmRlciAzRCB0cmFuc2Zvcm0tb3JpZ2luIHZhbHVlcyBwcm9wZXJseSwgc28gd2UgZm9yY2UgdGhlIHogb3JpZ2luIHRvIDAsIHJlY29yZCBpdCBpbiB0aGUgY2FjaGUsIGFuZCB0aGVuIGRvIHRoZSBtYXRoIGhlcmUgdG8gb2Zmc2V0IHRoZSB0cmFuc2xhdGUgdmFsdWVzIGFjY29yZGluZ2x5IChiYXNpY2FsbHkgZG8gdGhlIDNEIHRyYW5zZm9ybS1vcmlnaW4gcGFydCBtYW51YWxseSlcblxuXG4gIGlmICh6T3JpZ2luICYmIChyb3RhdGlvblggIT09IF96ZXJvRGVnIHx8IHJvdGF0aW9uWSAhPT0gX3plcm9EZWcpKSB7XG4gICAgdmFyIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblkpICogX0RFRzJSQUQsXG4gICAgICAgIGExMyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgYTMzID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICBjb3M7XG5cbiAgICBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25YKSAqIF9ERUcyUkFEO1xuICAgIGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICB4ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeCwgYTEzICogY29zICogLXpPcmlnaW4pO1xuICAgIHkgPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB5LCAtTWF0aC5zaW4oYW5nbGUpICogLXpPcmlnaW4pO1xuICAgIHogPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB6LCBhMzMgKiBjb3MgKiAtek9yaWdpbiArIHpPcmlnaW4pO1xuICB9XG5cbiAgaWYgKHRyYW5zZm9ybVBlcnNwZWN0aXZlICE9PSBfemVyb1B4KSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInBlcnNwZWN0aXZlKFwiICsgdHJhbnNmb3JtUGVyc3BlY3RpdmUgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoeFBlcmNlbnQgfHwgeVBlcmNlbnQpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwidHJhbnNsYXRlKFwiICsgeFBlcmNlbnQgKyBcIiUsIFwiICsgeVBlcmNlbnQgKyBcIiUpIFwiO1xuICB9XG5cbiAgaWYgKHVzZTNEIHx8IHggIT09IF96ZXJvUHggfHwgeSAhPT0gX3plcm9QeCB8fCB6ICE9PSBfemVyb1B4KSB7XG4gICAgdHJhbnNmb3JtcyArPSB6ICE9PSBfemVyb1B4IHx8IHVzZTNEID8gXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIFwiICsgeiArIFwiKSBcIiA6IFwidHJhbnNsYXRlKFwiICsgeCArIFwiLCBcIiArIHkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb24gIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZShcIiArIHJvdGF0aW9uICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uWSAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlWShcIiArIHJvdGF0aW9uWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvblggIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVgoXCIgKyByb3RhdGlvblggKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoc2tld1ggIT09IF96ZXJvRGVnIHx8IHNrZXdZICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJza2V3KFwiICsgc2tld1ggKyBcIiwgXCIgKyBza2V3WSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInNjYWxlKFwiICsgc2NhbGVYICsgXCIsIFwiICsgc2NhbGVZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXMgfHwgXCJ0cmFuc2xhdGUoMCwgMClcIjtcbn0sXG4gICAgX3JlbmRlclNWR1RyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyU1ZHVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgdmFyIF9yZWYyID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgIHhQZXJjZW50ID0gX3JlZjIueFBlcmNlbnQsXG4gICAgICB5UGVyY2VudCA9IF9yZWYyLnlQZXJjZW50LFxuICAgICAgeCA9IF9yZWYyLngsXG4gICAgICB5ID0gX3JlZjIueSxcbiAgICAgIHJvdGF0aW9uID0gX3JlZjIucm90YXRpb24sXG4gICAgICBza2V3WCA9IF9yZWYyLnNrZXdYLFxuICAgICAgc2tld1kgPSBfcmVmMi5za2V3WSxcbiAgICAgIHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYyLnNjYWxlWSxcbiAgICAgIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgIHhPcmlnaW4gPSBfcmVmMi54T3JpZ2luLFxuICAgICAgeU9yaWdpbiA9IF9yZWYyLnlPcmlnaW4sXG4gICAgICB4T2Zmc2V0ID0gX3JlZjIueE9mZnNldCxcbiAgICAgIHlPZmZzZXQgPSBfcmVmMi55T2Zmc2V0LFxuICAgICAgZm9yY2VDU1MgPSBfcmVmMi5mb3JjZUNTUyxcbiAgICAgIHR4ID0gcGFyc2VGbG9hdCh4KSxcbiAgICAgIHR5ID0gcGFyc2VGbG9hdCh5KSxcbiAgICAgIGExMSxcbiAgICAgIGEyMSxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHRlbXA7XG5cbiAgcm90YXRpb24gPSBwYXJzZUZsb2F0KHJvdGF0aW9uKTtcbiAgc2tld1ggPSBwYXJzZUZsb2F0KHNrZXdYKTtcbiAgc2tld1kgPSBwYXJzZUZsb2F0KHNrZXdZKTtcblxuICBpZiAoc2tld1kpIHtcbiAgICAvL2ZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSBjb21iaW5lIGFsbCBza2V3aW5nIGludG8gdGhlIHNrZXdYIGFuZCByb3RhdGlvbiB2YWx1ZXMuIFJlbWVtYmVyLCBhIHNrZXdZIG9mIDEwIGRlZ3JlZXMgbG9va3MgdGhlIHNhbWUgYXMgYSByb3RhdGlvbiBvZiAxMCBkZWdyZWVzIHBsdXMgYSBza2V3WCBvZiAxMCBkZWdyZWVzLlxuICAgIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG4gICAgc2tld1ggKz0gc2tld1k7XG4gICAgcm90YXRpb24gKz0gc2tld1k7XG4gIH1cblxuICBpZiAocm90YXRpb24gfHwgc2tld1gpIHtcbiAgICByb3RhdGlvbiAqPSBfREVHMlJBRDtcbiAgICBza2V3WCAqPSBfREVHMlJBRDtcbiAgICBhMTEgPSBNYXRoLmNvcyhyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgYTIxID0gTWF0aC5zaW4ocm90YXRpb24pICogc2NhbGVYO1xuICAgIGExMiA9IE1hdGguc2luKHJvdGF0aW9uIC0gc2tld1gpICogLXNjYWxlWTtcbiAgICBhMjIgPSBNYXRoLmNvcyhyb3RhdGlvbiAtIHNrZXdYKSAqIHNjYWxlWTtcblxuICAgIGlmIChza2V3WCkge1xuICAgICAgc2tld1kgKj0gX0RFRzJSQUQ7XG4gICAgICB0ZW1wID0gTWF0aC50YW4oc2tld1ggLSBza2V3WSk7XG4gICAgICB0ZW1wID0gTWF0aC5zcXJ0KDEgKyB0ZW1wICogdGVtcCk7XG4gICAgICBhMTIgKj0gdGVtcDtcbiAgICAgIGEyMiAqPSB0ZW1wO1xuXG4gICAgICBpZiAoc2tld1kpIHtcbiAgICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdZKTtcbiAgICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgICBhMTEgKj0gdGVtcDtcbiAgICAgICAgYTIxICo9IHRlbXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYTExID0gX3JvdW5kKGExMSk7XG4gICAgYTIxID0gX3JvdW5kKGEyMSk7XG4gICAgYTEyID0gX3JvdW5kKGExMik7XG4gICAgYTIyID0gX3JvdW5kKGEyMik7XG4gIH0gZWxzZSB7XG4gICAgYTExID0gc2NhbGVYO1xuICAgIGEyMiA9IHNjYWxlWTtcbiAgICBhMjEgPSBhMTIgPSAwO1xuICB9XG5cbiAgaWYgKHR4ICYmICF+KHggKyBcIlwiKS5pbmRleE9mKFwicHhcIikgfHwgdHkgJiYgIX4oeSArIFwiXCIpLmluZGV4T2YoXCJweFwiKSkge1xuICAgIHR4ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInhcIiwgeCwgXCJweFwiKTtcbiAgICB0eSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ5XCIsIHksIFwicHhcIik7XG4gIH1cblxuICBpZiAoeE9yaWdpbiB8fCB5T3JpZ2luIHx8IHhPZmZzZXQgfHwgeU9mZnNldCkge1xuICAgIHR4ID0gX3JvdW5kKHR4ICsgeE9yaWdpbiAtICh4T3JpZ2luICogYTExICsgeU9yaWdpbiAqIGExMikgKyB4T2Zmc2V0KTtcbiAgICB0eSA9IF9yb3VuZCh0eSArIHlPcmlnaW4gLSAoeE9yaWdpbiAqIGEyMSArIHlPcmlnaW4gKiBhMjIpICsgeU9mZnNldCk7XG4gIH1cblxuICBpZiAoeFBlcmNlbnQgfHwgeVBlcmNlbnQpIHtcbiAgICAvL1RoZSBTVkcgc3BlYyBkb2Vzbid0IHN1cHBvcnQgcGVyY2VudGFnZS1iYXNlZCB0cmFuc2xhdGlvbiBpbiB0aGUgXCJ0cmFuc2Zvcm1cIiBhdHRyaWJ1dGUsIHNvIHdlIG1lcmdlIGl0IGludG8gdGhlIHRyYW5zbGF0aW9uIHRvIHNpbXVsYXRlIGl0LlxuICAgIHRlbXAgPSB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHR4ID0gX3JvdW5kKHR4ICsgeFBlcmNlbnQgLyAxMDAgKiB0ZW1wLndpZHRoKTtcbiAgICB0eSA9IF9yb3VuZCh0eSArIHlQZXJjZW50IC8gMTAwICogdGVtcC5oZWlnaHQpO1xuICB9XG5cbiAgdGVtcCA9IFwibWF0cml4KFwiICsgYTExICsgXCIsXCIgKyBhMjEgKyBcIixcIiArIGExMiArIFwiLFwiICsgYTIyICsgXCIsXCIgKyB0eCArIFwiLFwiICsgdHkgKyBcIilcIjtcbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0ZW1wKTtcbiAgZm9yY2VDU1MgJiYgKHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0ZW1wKTsgLy9zb21lIGJyb3dzZXJzIHByaW9yaXRpemUgQ1NTIHRyYW5zZm9ybXMgb3ZlciB0aGUgdHJhbnNmb3JtIGF0dHJpYnV0ZS4gV2hlbiB3ZSBzZW5zZSB0aGF0IHRoZSB1c2VyIGhhcyBDU1MgdHJhbnNmb3JtcyBhcHBsaWVkLCB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHRoaXMgd2F5IChvdGhlcndpc2Ugc29tZSBicm93c2VyIHNpbXBseSB3b24ndCByZW5kZXIgdGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUgY2hhbmdlcyEpXG59LFxuICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4ocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgZW5kVmFsdWUpIHtcbiAgdmFyIGNhcCA9IDM2MCxcbiAgICAgIGlzU3RyaW5nID0gX2lzU3RyaW5nKGVuZFZhbHVlKSxcbiAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpICogKGlzU3RyaW5nICYmIH5lbmRWYWx1ZS5pbmRleE9mKFwicmFkXCIpID8gX1JBRDJERUcgOiAxKSxcbiAgICAgIGNoYW5nZSA9IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgZmluYWxWYWx1ZSA9IHN0YXJ0TnVtICsgY2hhbmdlICsgXCJkZWdcIixcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIHB0O1xuXG4gIGlmIChpc1N0cmluZykge1xuICAgIGRpcmVjdGlvbiA9IGVuZFZhbHVlLnNwbGl0KFwiX1wiKVsxXTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwic2hvcnRcIikge1xuICAgICAgY2hhbmdlICU9IGNhcDtcblxuICAgICAgaWYgKGNoYW5nZSAhPT0gY2hhbmdlICUgKGNhcCAvIDIpKSB7XG4gICAgICAgIGNoYW5nZSArPSBjaGFuZ2UgPCAwID8gY2FwIDogLWNhcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImN3XCIgJiYgY2hhbmdlIDwgMCkge1xuICAgICAgY2hhbmdlID0gKGNoYW5nZSArIGNhcCAqIF9iaWdOdW0pICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJjY3dcIiAmJiBjaGFuZ2UgPiAwKSB7XG4gICAgICBjaGFuZ2UgPSAoY2hhbmdlIC0gY2FwICogX2JpZ051bSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgIH1cbiAgfVxuXG4gIHBsdWdpbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGNoYW5nZSwgX3JlbmRlclByb3BXaXRoRW5kKTtcbiAgcHQuZSA9IGZpbmFsVmFsdWU7XG4gIHB0LnUgPSBcImRlZ1wiO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYXNzaWduID0gZnVuY3Rpb24gX2Fzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBkb2Vzbid0IGhhdmUgT2JqZWN0LmFzc2lnbigpLCBzbyB3ZSByZWNyZWF0ZSBpdCBoZXJlLlxuICBmb3IgKHZhciBwIGluIHNvdXJjZSkge1xuICAgIHRhcmdldFtwXSA9IHNvdXJjZVtwXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59LFxuICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHMgPSBmdW5jdGlvbiBfYWRkUmF3VHJhbnNmb3JtUFRzKHBsdWdpbiwgdHJhbnNmb3JtcywgdGFyZ2V0KSB7XG4gIC8vZm9yIGhhbmRsaW5nIGNhc2VzIHdoZXJlIHNvbWVvbmUgcGFzc2VzIGluIGEgd2hvbGUgdHJhbnNmb3JtIHN0cmluZywgbGlrZSB0cmFuc2Zvcm06IFwic2NhbGUoMiwgMykgcm90YXRlKDIwZGVnKSB0cmFuc2xhdGVZKDMwZW0pXCJcbiAgdmFyIHN0YXJ0Q2FjaGUgPSBfYXNzaWduKHt9LCB0YXJnZXQuX2dzYXApLFxuICAgICAgZXhjbHVkZSA9IFwicGVyc3BlY3RpdmUsZm9yY2UzRCx0cmFuc2Zvcm1PcmlnaW4sc3ZnT3JpZ2luXCIsXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIGVuZENhY2hlLFxuICAgICAgcCxcbiAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICBlbmRWYWx1ZSxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgZW5kTnVtLFxuICAgICAgc3RhcnRVbml0LFxuICAgICAgZW5kVW5pdDtcblxuICBpZiAoc3RhcnRDYWNoZS5zdmcpIHtcbiAgICBzdGFydFZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpO1xuICAgIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXM7XG4gICAgZW5kQ2FjaGUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTtcblxuICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgc3RhcnRWYWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnRWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KVtfdHJhbnNmb3JtUHJvcF07XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcztcbiAgICBlbmRDYWNoZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuICAgIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHN0YXJ0VmFsdWU7XG4gIH1cblxuICBmb3IgKHAgaW4gX3RyYW5zZm9ybVByb3BzKSB7XG4gICAgc3RhcnRWYWx1ZSA9IHN0YXJ0Q2FjaGVbcF07XG4gICAgZW5kVmFsdWUgPSBlbmRDYWNoZVtwXTtcblxuICAgIGlmIChzdGFydFZhbHVlICE9PSBlbmRWYWx1ZSAmJiBleGNsdWRlLmluZGV4T2YocCkgPCAwKSB7XG4gICAgICAvL3R3ZWVuaW5nIHRvIG5vIHBlcnNwZWN0aXZlIGdpdmVzIHZlcnkgdW5pbnR1aXRpdmUgcmVzdWx0cyAtIGp1c3Qga2VlcCB0aGUgc2FtZSBwZXJzcGVjdGl2ZSBpbiB0aGF0IGNhc2UuXG4gICAgICBzdGFydFVuaXQgPSBnZXRVbml0KHN0YXJ0VmFsdWUpO1xuICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpO1xuICAgICAgc3RhcnROdW0gPSBzdGFydFVuaXQgIT09IGVuZFVuaXQgPyBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpIDogcGFyc2VGbG9hdChzdGFydFZhbHVlKTtcbiAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgZW5kQ2FjaGUsIHAsIHN0YXJ0TnVtLCBlbmROdW0gLSBzdGFydE51bSwgX3JlbmRlckNTU1Byb3ApO1xuICAgICAgcGx1Z2luLl9wdC51ID0gZW5kVW5pdCB8fCAwO1xuXG4gICAgICBwbHVnaW4uX3Byb3BzLnB1c2gocCk7XG4gICAgfVxuICB9XG5cbiAgX2Fzc2lnbihlbmRDYWNoZSwgc3RhcnRDYWNoZSk7XG59OyAvLyBoYW5kbGUgc3BsaXR0aW5nIGFwYXJ0IHBhZGRpbmcsIG1hcmdpbiwgYm9yZGVyV2lkdGgsIGFuZCBib3JkZXJSYWRpdXMgaW50byB0aGVpciA0IGNvbXBvbmVudHMuIEZpcmVmb3gsIGZvciBleGFtcGxlLCB3b24ndCByZXBvcnQgYm9yZGVyUmFkaXVzIGNvcnJlY3RseSAtIGl0IHdpbGwgb25seSBkbyBib3JkZXJUb3BMZWZ0UmFkaXVzIGFuZCB0aGUgb3RoZXIgY29ybmVycy4gV2UgYWxzbyB3YW50IHRvIGhhbmRsZSBwYWRkaW5nVG9wLCBtYXJnaW5MZWZ0LCBib3JkZXJSaWdodFdpZHRoLCBldGMuXG5cblxuX2ZvckVhY2hOYW1lKFwicGFkZGluZyxtYXJnaW4sV2lkdGgsUmFkaXVzXCIsIGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICB2YXIgdCA9IFwiVG9wXCIsXG4gICAgICByID0gXCJSaWdodFwiLFxuICAgICAgYiA9IFwiQm90dG9tXCIsXG4gICAgICBsID0gXCJMZWZ0XCIsXG4gICAgICBwcm9wcyA9IChpbmRleCA8IDMgPyBbdCwgciwgYiwgbF0gOiBbdCArIGwsIHQgKyByLCBiICsgciwgYiArIGxdKS5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gaW5kZXggPCAyID8gbmFtZSArIHNpZGUgOiBcImJvcmRlclwiICsgc2lkZSArIG5hbWU7XG4gIH0pO1xuXG4gIF9zcGVjaWFsUHJvcHNbaW5kZXggPiAxID8gXCJib3JkZXJcIiArIG5hbWUgOiBuYW1lXSA9IGZ1bmN0aW9uIChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICAgIHZhciBhLCB2YXJzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA0KSB7XG4gICAgICAvLyBnZXR0ZXIsIHBhc3NlZCB0YXJnZXQsIHByb3BlcnR5LCBhbmQgdW5pdCAoZnJvbSBfZ2V0KCkpXG4gICAgICBhID0gcHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KHBsdWdpbiwgcHJvcCwgcHJvcGVydHkpO1xuICAgICAgfSk7XG4gICAgICB2YXJzID0gYS5qb2luKFwiIFwiKTtcbiAgICAgIHJldHVybiB2YXJzLnNwbGl0KGFbMF0pLmxlbmd0aCA9PT0gNSA/IGFbMF0gOiB2YXJzO1xuICAgIH1cblxuICAgIGEgPSAoZW5kVmFsdWUgKyBcIlwiKS5zcGxpdChcIiBcIik7XG4gICAgdmFycyA9IHt9O1xuICAgIHByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3AsIGkpIHtcbiAgICAgIHJldHVybiB2YXJzW3Byb3BdID0gYVtpXSA9IGFbaV0gfHwgYVsoaSAtIDEpIC8gMiB8IDBdO1xuICAgIH0pO1xuICAgIHBsdWdpbi5pbml0KHRhcmdldCwgdmFycywgdHdlZW4pO1xuICB9O1xufSk7XG5cbmV4cG9ydCB2YXIgQ1NTUGx1Z2luID0ge1xuICBuYW1lOiBcImNzc1wiLFxuICByZWdpc3RlcjogX2luaXRDb3JlLFxuICB0YXJnZXRUZXN0OiBmdW5jdGlvbiB0YXJnZXRUZXN0KHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuc3R5bGUgJiYgdGFyZ2V0Lm5vZGVUeXBlO1xuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5fcHJvcHMsXG4gICAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICBzdGFydEF0ID0gdHdlZW4udmFycy5zdGFydEF0LFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgZW5kTnVtLFxuICAgICAgICBzdGFydE51bSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgc3BlY2lhbFByb3AsXG4gICAgICAgIHAsXG4gICAgICAgIHN0YXJ0VW5pdCxcbiAgICAgICAgZW5kVW5pdCxcbiAgICAgICAgcmVsYXRpdmUsXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCxcbiAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLFxuICAgICAgICBjYWNoZSxcbiAgICAgICAgc21vb3RoLFxuICAgICAgICBoYXNQcmlvcml0eSxcbiAgICAgICAgaW5saW5lUHJvcHMsXG4gICAgICAgIGZpbmFsVHJhbnNmb3JtVmFsdWU7XG4gICAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7IC8vIHdlIG1heSBjYWxsIGluaXQoKSBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBwbHVnaW4gaW5zdGFuY2UsIGxpa2Ugd2hlbiBhZGRpbmcgc3BlY2lhbCBwcm9wZXJ0aWVzLCBzbyBtYWtlIHN1cmUgd2UgZG9uJ3Qgb3ZlcndyaXRlIHRoZSByZXZlcnQgZGF0YSBvciBpbmxpbmVQcm9wc1xuXG4gICAgdGhpcy5zdHlsZXMgPSB0aGlzLnN0eWxlcyB8fCBfZ2V0U3R5bGVTYXZlcih0YXJnZXQpO1xuICAgIGlubGluZVByb3BzID0gdGhpcy5zdHlsZXMucHJvcHM7XG4gICAgdGhpcy50d2VlbiA9IHR3ZWVuO1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIGlmIChwID09PSBcImF1dG9Sb3VuZFwiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBlbmRWYWx1ZSA9IHZhcnNbcF07XG5cbiAgICAgIGlmIChfcGx1Z2luc1twXSAmJiBfY2hlY2tQbHVnaW4ocCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKSB7XG4gICAgICAgIC8vIHBsdWdpbnNcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICBzcGVjaWFsUHJvcCA9IF9zcGVjaWFsUHJvcHNbcF07XG5cbiAgICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICAgIGVuZFZhbHVlID0gX3JlcGxhY2VSYW5kb20oZW5kVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3BlY2lhbFByb3ApIHtcbiAgICAgICAgc3BlY2lhbFByb3AodGhpcywgdGFyZ2V0LCBwLCBlbmRWYWx1ZSwgdHdlZW4pICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfSBlbHNlIGlmIChwLnN1YnN0cigwLCAyKSA9PT0gXCItLVwiKSB7XG4gICAgICAgIC8vQ1NTIHZhcmlhYmxlXG4gICAgICAgIHN0YXJ0VmFsdWUgPSAoZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocCkgKyBcIlwiKS50cmltKCk7XG4gICAgICAgIGVuZFZhbHVlICs9IFwiXCI7XG4gICAgICAgIF9jb2xvckV4cC5sYXN0SW5kZXggPSAwO1xuXG4gICAgICAgIGlmICghX2NvbG9yRXhwLnRlc3Qoc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBjb2xvcnMgZG9uJ3QgaGF2ZSB1bml0c1xuICAgICAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpO1xuICAgICAgICAgIGVuZFVuaXQgPyBzdGFydFVuaXQgIT09IGVuZFVuaXQgJiYgKHN0YXJ0VmFsdWUgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpICsgZW5kVW5pdCkgOiBzdGFydFVuaXQgJiYgKGVuZFZhbHVlICs9IHN0YXJ0VW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZChzdHlsZSwgXCJzZXRQcm9wZXJ0eVwiLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgICBwcm9wcy5wdXNoKHApO1xuICAgICAgICBpbmxpbmVQcm9wcy5wdXNoKHAsIDAsIHN0eWxlW3BdKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoc3RhcnRBdCAmJiBwIGluIHN0YXJ0QXQpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHNvbWVvbmUgaGFyZC1jb2RlcyBhIGNvbXBsZXggdmFsdWUgYXMgdGhlIHN0YXJ0LCBsaWtlIHRvcDogXCJjYWxjKDJ2aCAvIDIpXCIuIFdpdGhvdXQgdGhpcywgaXQnZCB1c2UgdGhlIGNvbXB1dGVkIHZhbHVlIChhbHdheXMgaW4gcHgpXG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IHR5cGVvZiBzdGFydEF0W3BdID09PSBcImZ1bmN0aW9uXCIgPyBzdGFydEF0W3BdLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogc3RhcnRBdFtwXTtcbiAgICAgICAgICBfaXNTdHJpbmcoc3RhcnRWYWx1ZSkgJiYgfnN0YXJ0VmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgJiYgKHN0YXJ0VmFsdWUgPSBfcmVwbGFjZVJhbmRvbShzdGFydFZhbHVlKSk7XG4gICAgICAgICAgZ2V0VW5pdChzdGFydFZhbHVlICsgXCJcIikgfHwgc3RhcnRWYWx1ZSA9PT0gXCJhdXRvXCIgfHwgKHN0YXJ0VmFsdWUgKz0gX2NvbmZpZy51bml0c1twXSB8fCBnZXRVbml0KF9nZXQodGFyZ2V0LCBwKSkgfHwgXCJcIik7IC8vIGZvciBjYXNlcyB3aGVuIHNvbWVvbmUgcGFzc2VzIGluIGEgdW5pdGxlc3MgdmFsdWUgbGlrZSB7eDogMTAwfTsgaWYgd2UgdHJ5IHNldHRpbmcgdHJhbnNsYXRlKDEwMCwgMHB4KSBpdCB3b24ndCB3b3JrLlxuXG4gICAgICAgICAgKHN0YXJ0VmFsdWUgKyBcIlwiKS5jaGFyQXQoMSkgPT09IFwiPVwiICYmIChzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApKTsgLy8gY2FuJ3Qgd29yayB3aXRoIHJlbGF0aXZlIHZhbHVlc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXJ0VmFsdWUgPSBfZ2V0KHRhcmdldCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgIHJlbGF0aXZlID0gdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiICYmIGVuZFZhbHVlLnN1YnN0cigwLCAyKTtcbiAgICAgICAgcmVsYXRpdmUgJiYgKGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpKTtcbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHAgaW4gX3Byb3BlcnR5QWxpYXNlcykge1xuICAgICAgICAgIGlmIChwID09PSBcImF1dG9BbHBoYVwiKSB7XG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZSB3aGVyZSB3ZSBjb250cm9sIHRoZSB2aXNpYmlsaXR5IGFsb25nIHdpdGggb3BhY2l0eS4gV2Ugc3RpbGwgYWxsb3cgdGhlIG9wYWNpdHkgdmFsdWUgdG8gcGFzcyB0aHJvdWdoIGFuZCBnZXQgdHdlZW5lZC5cbiAgICAgICAgICAgIGlmIChzdGFydE51bSA9PT0gMSAmJiBfZ2V0KHRhcmdldCwgXCJ2aXNpYmlsaXR5XCIpID09PSBcImhpZGRlblwiICYmIGVuZE51bSkge1xuICAgICAgICAgICAgICAvL2lmIHZpc2liaWxpdHkgaXMgaW5pdGlhbGx5IHNldCB0byBcImhpZGRlblwiLCB3ZSBzaG91bGQgaW50ZXJwcmV0IHRoYXQgYXMgaW50ZW50IHRvIG1ha2Ugb3BhY2l0eSAwIChhIGNvbnZlbmllbmNlKVxuICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlubGluZVByb3BzLnB1c2goXCJ2aXNpYmlsaXR5XCIsIDAsIHN0eWxlLnZpc2liaWxpdHkpO1xuXG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBzdHlsZSwgXCJ2aXNpYmlsaXR5XCIsIHN0YXJ0TnVtID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiLCBlbmROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsICFlbmROdW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwICE9PSBcInNjYWxlXCIgJiYgcCAhPT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgcCA9IF9wcm9wZXJ0eUFsaWFzZXNbcF07XG4gICAgICAgICAgICB+cC5pbmRleE9mKFwiLFwiKSAmJiAocCA9IHAuc3BsaXQoXCIsXCIpWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQgPSBwIGluIF90cmFuc2Zvcm1Qcm9wczsgLy8tLS0gVFJBTlNGT1JNLVJFTEFURUQgLS0tXG5cbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCkge1xuICAgICAgICAgIHRoaXMuc3R5bGVzLnNhdmUocCk7XG4gICAgICAgICAgZmluYWxUcmFuc2Zvcm1WYWx1ZSA9IGVuZFZhbHVlOyAvLyB0aGlzIGlzIGFsd2F5cyB0aGUgc2FtZSBhcyBlbmRWYWx1ZSBleGNlcHQgd2hlbiBpdCdzIGEgdmFyKC0tKSB2YWx1ZSwgaW4gd2hpY2ggY2FzZSB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgZW5kIHZhbHVlLlxuXG4gICAgICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgZW5kVmFsdWUuc3Vic3RyaW5nKDAsIDYpID09PSBcInZhcigtLVwiKSB7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgZW5kVmFsdWUuc3Vic3RyaW5nKDQsIGVuZFZhbHVlLmluZGV4T2YoXCIpXCIpKSk7XG5cbiAgICAgICAgICAgIGlmIChlbmRWYWx1ZS5zdWJzdHJpbmcoMCwgNSkgPT09IFwiY2FsYyhcIikge1xuICAgICAgICAgICAgICB2YXIgb3JpZ1BlcnNwZWN0aXZlID0gdGFyZ2V0LnN0eWxlLnBlcnNwZWN0aXZlO1xuICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUucGVyc3BlY3RpdmUgPSBlbmRWYWx1ZTtcbiAgICAgICAgICAgICAgZW5kVmFsdWUgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIFwicGVyc3BlY3RpdmVcIik7XG4gICAgICAgICAgICAgIG9yaWdQZXJzcGVjdGl2ZSA/IHRhcmdldC5zdHlsZS5wZXJzcGVjdGl2ZSA9IG9yaWdQZXJzcGVjdGl2ZSA6IF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIFwicGVyc3BlY3RpdmVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghdHJhbnNmb3JtUHJvcFR3ZWVuKSB7XG4gICAgICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgICAgICAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSAmJiAhdmFycy5wYXJzZVRyYW5zZm9ybSB8fCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB2YXJzLnBhcnNlVHJhbnNmb3JtKTsgLy8gaWYsIGZvciBleGFtcGxlLCBnc2FwLnNldCguLi4ge3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoNTB2dylcIn0pLCB0aGUgX2dldCgpIGNhbGwgZG9lc24ndCBwYXJzZSB0aGUgdHJhbnNmb3JtLCB0aHVzIGNhY2hlLnJlbmRlclRyYW5zZm9ybSB3b24ndCBiZSBzZXQgeWV0IHNvIGZvcmNlIHRoZSBwYXJzaW5nIG9mIHRoZSB0cmFuc2Zvcm0gaGVyZS5cblxuICAgICAgICAgICAgc21vb3RoID0gdmFycy5zbW9vdGhPcmlnaW4gIT09IGZhbHNlICYmIGNhY2hlLnNtb290aDtcbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2VlbiA9IHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgc3R5bGUsIF90cmFuc2Zvcm1Qcm9wLCAwLCAxLCBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0sIGNhY2hlLCAwLCAtMSk7IC8vdGhlIGZpcnN0IHRpbWUgdGhyb3VnaCwgY3JlYXRlIHRoZSByZW5kZXJpbmcgUHJvcFR3ZWVuIHNvIHRoYXQgaXQgcnVucyBMQVNUIChpbiB0aGUgbGlua2VkIGxpc3QsIHdlIGtlZXAgYWRkaW5nIHRvIHRoZSBiZWdpbm5pbmcpXG5cbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2Vlbi5kZXAgPSAxOyAvL2ZsYWcgaXQgYXMgZGVwZW5kZW50IHNvIHRoYXQgaWYgdGhpbmdzIGdldCBraWxsZWQvb3ZlcndyaXR0ZW4gYW5kIHRoaXMgaXMgdGhlIG9ubHkgUHJvcFR3ZWVuIGxlZnQsIHdlIGNhbiBzYWZlbHkga2lsbCB0aGUgd2hvbGUgdHdlZW4uXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgPT09IFwic2NhbGVcIikge1xuICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBjYWNoZSwgXCJzY2FsZVlcIiwgY2FjaGUuc2NhbGVZLCAocmVsYXRpdmUgPyBfcGFyc2VSZWxhdGl2ZShjYWNoZS5zY2FsZVksIHJlbGF0aXZlICsgZW5kTnVtKSA6IGVuZE51bSkgLSBjYWNoZS5zY2FsZVkgfHwgMCwgX3JlbmRlckNTU1Byb3ApO1xuICAgICAgICAgICAgdGhpcy5fcHQudSA9IDA7XG4gICAgICAgICAgICBwcm9wcy5wdXNoKFwic2NhbGVZXCIsIHApO1xuICAgICAgICAgICAgcCArPSBcIlhcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtT3JpZ2luXCIpIHtcbiAgICAgICAgICAgIGlubGluZVByb3BzLnB1c2goX3RyYW5zZm9ybU9yaWdpblByb3AsIDAsIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSk7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKGVuZFZhbHVlKTsgLy9pbiBjYXNlIHNvbWV0aGluZyBsaWtlIFwibGVmdCB0b3BcIiBvciBcImJvdHRvbSByaWdodFwiIGlzIHBhc3NlZCBpbi4gQ29udmVydCB0byBwZXJjZW50YWdlcy5cblxuICAgICAgICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMCwgc21vb3RoLCAwLCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuZFVuaXQgPSBwYXJzZUZsb2F0KGVuZFZhbHVlLnNwbGl0KFwiIFwiKVsyXSkgfHwgMDsgLy9oYW5kbGUgdGhlIHpPcmlnaW4gc2VwYXJhdGVseSFcblxuICAgICAgICAgICAgICBlbmRVbml0ICE9PSBjYWNoZS56T3JpZ2luICYmIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInpPcmlnaW5cIiwgY2FjaGUuek9yaWdpbiwgZW5kVW5pdCk7XG5cbiAgICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgc3R5bGUsIHAsIF9maXJzdFR3b09ubHkoc3RhcnRWYWx1ZSksIF9maXJzdFR3b09ubHkoZW5kVmFsdWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInN2Z09yaWdpblwiKSB7XG4gICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMSwgc21vb3RoLCAwLCB0aGlzKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwIGluIF9yb3RhdGlvbmFsUHJvcGVydGllcykge1xuICAgICAgICAgICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4odGhpcywgY2FjaGUsIHAsIHN0YXJ0TnVtLCByZWxhdGl2ZSA/IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCByZWxhdGl2ZSArIGVuZFZhbHVlKSA6IGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJzbW9vdGhcIiwgY2FjaGUuc21vb3RoLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgIGNhY2hlW3BdID0gZW5kVmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHModGhpcywgZW5kVmFsdWUsIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcCA9IF9jaGVja1Byb3BQcmVmaXgocCkgfHwgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKGVuZE51bSB8fCBlbmROdW0gPT09IDApICYmIChzdGFydE51bSB8fCBzdGFydE51bSA9PT0gMCkgJiYgIV9jb21wbGV4RXhwLnRlc3QoZW5kVmFsdWUpICYmIHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBzdGFydFVuaXQgPSAoc3RhcnRWYWx1ZSArIFwiXCIpLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7IC8vIHByb3RlY3QgYWdhaW5zdCBOYU5cblxuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKSB8fCAocCBpbiBfY29uZmlnLnVuaXRzID8gX2NvbmZpZy51bml0c1twXSA6IHN0YXJ0VW5pdCk7XG4gICAgICAgICAgc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkpO1xuICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgaXNUcmFuc2Zvcm1SZWxhdGVkID8gY2FjaGUgOiBzdHlsZSwgcCwgc3RhcnROdW0sIChyZWxhdGl2ZSA/IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCByZWxhdGl2ZSArIGVuZE51bSkgOiBlbmROdW0pIC0gc3RhcnROdW0sICFpc1RyYW5zZm9ybVJlbGF0ZWQgJiYgKGVuZFVuaXQgPT09IFwicHhcIiB8fCBwID09PSBcInpJbmRleFwiKSAmJiB2YXJzLmF1dG9Sb3VuZCAhPT0gZmFsc2UgPyBfcmVuZGVyUm91bmRlZENTU1Byb3AgOiBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICAgICAgdGhpcy5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQgJiYgZmluYWxUcmFuc2Zvcm1WYWx1ZSAhPT0gZW5kVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3B0LmIgPSBzdGFydFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcHQuZSA9IGZpbmFsVHJhbnNmb3JtVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9wdC5yID0gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nQW5kRW5kO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIGVuZFVuaXQgIT09IFwiJVwiKSB7XG4gICAgICAgICAgICAvL3doZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nLCB3ZSBuZWVkIHRvIHJldmVydCBpdCB0byB0aGUgT0xEL09SSUdJTkFMIHZhbHVlICh3aXRoIHRob3NlIHVuaXRzKS4gV2UgcmVjb3JkIHRoYXQgYXMgYSBcImJcIiAoYmVnaW5uaW5nKSBwcm9wZXJ0eSBhbmQgcG9pbnQgdG8gYSByZW5kZXIgbWV0aG9kIHRoYXQgaGFuZGxlcyB0aGF0LiAocGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcHQuYiA9IHN0YXJ0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9wdC5yID0gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgaWYgKHAgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAvL21heWJlIGl0J3Mgbm90IGEgc3R5bGUgLSBpdCBjb3VsZCBiZSBhIHByb3BlcnR5IGFkZGVkIGRpcmVjdGx5IHRvIGFuIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSdsbCB0cnkgdG8gYW5pbWF0ZSB0aGF0LlxuICAgICAgICAgICAgdGhpcy5hZGQodGFyZ2V0LCBwLCBzdGFydFZhbHVlIHx8IHRhcmdldFtwXSwgcmVsYXRpdmUgPyByZWxhdGl2ZSArIGVuZFZhbHVlIDogZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgIT09IFwicGFyc2VUcmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgX21pc3NpbmdQbHVnaW4ocCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHRoaXMsIHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgcmVsYXRpdmUgPyByZWxhdGl2ZSArIGVuZFZhbHVlIDogZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkIHx8IChwIGluIHN0eWxlID8gaW5saW5lUHJvcHMucHVzaChwLCAwLCBzdHlsZVtwXSkgOiB0eXBlb2YgdGFyZ2V0W3BdID09PSBcImZ1bmN0aW9uXCIgPyBpbmxpbmVQcm9wcy5wdXNoKHAsIDIsIHRhcmdldFtwXSgpKSA6IGlubGluZVByb3BzLnB1c2gocCwgMSwgc3RhcnRWYWx1ZSB8fCB0YXJnZXRbcF0pKTtcbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHRoaXMpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihyYXRpbywgZGF0YSkge1xuICAgIGlmIChkYXRhLnR3ZWVuLl90aW1lIHx8ICFfcmV2ZXJ0aW5nKCkpIHtcbiAgICAgIHZhciBwdCA9IGRhdGEuX3B0O1xuXG4gICAgICB3aGlsZSAocHQpIHtcbiAgICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuc3R5bGVzLnJldmVydCgpO1xuICAgIH1cbiAgfSxcbiAgZ2V0OiBfZ2V0LFxuICBhbGlhc2VzOiBfcHJvcGVydHlBbGlhc2VzLFxuICBnZXRTZXR0ZXI6IGZ1bmN0aW9uIGdldFNldHRlcih0YXJnZXQsIHByb3BlcnR5LCBwbHVnaW4pIHtcbiAgICAvL3JldHVybnMgYSBzZXR0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRhcmdldCwgcHJvcGVydHksIHZhbHVlIGFuZCBhcHBsaWVzIGl0IGFjY29yZGluZ2x5LiBSZW1lbWJlciwgcHJvcGVydGllcyBsaWtlIFwieFwiIGFyZW4ndCBhcyBzaW1wbGUgYXMgdGFyZ2V0LnN0eWxlLnByb3BlcnR5ID0gdmFsdWUgYmVjYXVzZSB0aGV5J3ZlIGdvdCB0byBiZSBhcHBsaWVkIHRvIGEgcHJveHkgb2JqZWN0IGFuZCB0aGVuIG1lcmdlZCBpbnRvIGEgdHJhbnNmb3JtIHN0cmluZyBpbiBhIHJlbmRlcmVyLlxuICAgIHZhciBwID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV07XG4gICAgcCAmJiBwLmluZGV4T2YoXCIsXCIpIDwgMCAmJiAocHJvcGVydHkgPSBwKTtcbiAgICByZXR1cm4gcHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGFyZ2V0Ll9nc2FwLnggfHwgX2dldCh0YXJnZXQsIFwieFwiKSkgPyBwbHVnaW4gJiYgX3JlY2VudFNldHRlclBsdWdpbiA9PT0gcGx1Z2luID8gcHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZSA6IF9zZXR0ZXJUcmFuc2Zvcm0gOiAoX3JlY2VudFNldHRlclBsdWdpbiA9IHBsdWdpbiB8fCB7fSkgJiYgKHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIDogX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIpIDogdGFyZ2V0LnN0eWxlICYmICFfaXNVbmRlZmluZWQodGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSkgPyBfc2V0dGVyQ1NTU3R5bGUgOiB+cHJvcGVydHkuaW5kZXhPZihcIi1cIikgPyBfc2V0dGVyQ1NTUHJvcCA6IF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gIH0sXG4gIGNvcmU6IHtcbiAgICBfcmVtb3ZlUHJvcGVydHk6IF9yZW1vdmVQcm9wZXJ0eSxcbiAgICBfZ2V0TWF0cml4OiBfZ2V0TWF0cml4XG4gIH1cbn07XG5nc2FwLnV0aWxzLmNoZWNrUHJlZml4ID0gX2NoZWNrUHJvcFByZWZpeDtcbmdzYXAuY29yZS5nZXRTdHlsZVNhdmVyID0gX2dldFN0eWxlU2F2ZXI7XG5cbihmdW5jdGlvbiAocG9zaXRpb25BbmRTY2FsZSwgcm90YXRpb24sIG90aGVycywgYWxpYXNlcykge1xuICB2YXIgYWxsID0gX2ZvckVhY2hOYW1lKHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uICsgXCIsXCIgKyBvdGhlcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX3RyYW5zZm9ybVByb3BzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX2ZvckVhY2hOYW1lKHJvdGF0aW9uLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9jb25maWcudW5pdHNbbmFtZV0gPSBcImRlZ1wiO1xuICAgIF9yb3RhdGlvbmFsUHJvcGVydGllc1tuYW1lXSA9IDE7XG4gIH0pO1xuXG4gIF9wcm9wZXJ0eUFsaWFzZXNbYWxsWzEzXV0gPSBwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbjtcblxuICBfZm9yRWFjaE5hbWUoYWxpYXNlcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3BsaXQgPSBuYW1lLnNwbGl0KFwiOlwiKTtcbiAgICBfcHJvcGVydHlBbGlhc2VzW3NwbGl0WzFdXSA9IGFsbFtzcGxpdFswXV07XG4gIH0pO1xufSkoXCJ4LHkseixzY2FsZSxzY2FsZVgsc2NhbGVZLHhQZXJjZW50LHlQZXJjZW50XCIsIFwicm90YXRpb24scm90YXRpb25YLHJvdGF0aW9uWSxza2V3WCxza2V3WVwiLCBcInRyYW5zZm9ybSx0cmFuc2Zvcm1PcmlnaW4sc3ZnT3JpZ2luLGZvcmNlM0Qsc21vb3RoT3JpZ2luLHRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsIFwiMDp0cmFuc2xhdGVYLDE6dHJhbnNsYXRlWSwyOnRyYW5zbGF0ZVosODpyb3RhdGUsODpyb3RhdGlvblosODpyb3RhdGVaLDk6cm90YXRlWCwxMDpyb3RhdGVZXCIpO1xuXG5fZm9yRWFjaE5hbWUoXCJ4LHkseix0b3AscmlnaHQsYm90dG9tLGxlZnQsd2lkdGgsaGVpZ2h0LGZvbnRTaXplLHBhZGRpbmcsbWFyZ2luLHBlcnNwZWN0aXZlXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIF9jb25maWcudW5pdHNbbmFtZV0gPSBcInB4XCI7XG59KTtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pO1xuZXhwb3J0IHsgQ1NTUGx1Z2luIGFzIGRlZmF1bHQsIF9nZXRCQm94LCBfY3JlYXRlRWxlbWVudCwgX2NoZWNrUHJvcFByZWZpeCBhcyBjaGVja1ByZWZpeCB9OyIsICJpbXBvcnQgeyBnc2FwLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMsIFR3ZWVuTGl0ZSwgVGltZWxpbmVMaXRlLCBUaW1lbGluZU1heCB9IGZyb20gXCIuL2dzYXAtY29yZS5qc1wiO1xuaW1wb3J0IHsgQ1NTUGx1Z2luIH0gZnJvbSBcIi4vQ1NTUGx1Z2luLmpzXCI7XG52YXIgZ3NhcFdpdGhDU1MgPSBnc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1BsdWdpbikgfHwgZ3NhcCxcbiAgICAvLyB0byBwcm90ZWN0IGZyb20gdHJlZSBzaGFraW5nXG5Ud2Vlbk1heFdpdGhDU1MgPSBnc2FwV2l0aENTUy5jb3JlLlR3ZWVuO1xuZXhwb3J0IHsgZ3NhcFdpdGhDU1MgYXMgZ3NhcCwgZ3NhcFdpdGhDU1MgYXMgZGVmYXVsdCwgQ1NTUGx1Z2luLCBUd2Vlbk1heFdpdGhDU1MgYXMgVHdlZW5NYXgsIFR3ZWVuTGl0ZSwgVGltZWxpbmVNYXgsIFRpbWVsaW5lTGl0ZSwgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjIH07IiwgIi8qKlxuICogbmV4dG9yYS9yZWxhdGVkLXBvc3RzIFx1MjAxNCBmcm9udC1lbmQgdmlldyBzY3JpcHQuXG4gKlxuICogTW91c2UtZm9sbG93IGZsb2F0aW5nIHRodW1ibmFpbCBvbiBjYXJkIGhvdmVyLCBwb3dlcmVkIGJ5IEdTQVAgcXVpY2tUby5cbiAqIExpc3QgbGF5b3V0OiB0aHVtYm5haWwgYXBwZWFycyBvbmx5IG9uIGhvdmVyLiBHcmlkIGxheW91dDogZmxvYXRpbmdcbiAqIGVubGFyZ2VkIHRodW1ibmFpbCBvdmVybGF5cyB0aGUgc3RhdGljIGNhcmQgaW1hZ2UuXG4gKlxuICogUmVzcGVjdHMgcHJlZmVycy1yZWR1Y2VkLW1vdGlvbiBcdTIwMTQgZmFsbHMgYmFjayB0byBzdGF0aWMgZGlzcGxheS5cbiAqL1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5cbmV4cG9ydCB7fTtcblxuY29uc3QgSU5JVF9BVFRSID0gJ2RhdGEtbmV4dG9yYS1ycC1pbml0ZWQnO1xuY29uc3QgVEhVTUJfQVRUUiA9ICdkYXRhLW5leHRvcmEtcnAtdGh1bWInO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhlbHBlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBwcmVmZXJzUmVkdWNlZE1vdGlvbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlc1xuICApO1xufVxuXG5mdW5jdGlvbiBpc1RvdWNoRGV2aWNlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwKVxuICApO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZSBmbG9hdGluZyB0aHVtYm5haWwgZWxlbWVudCAoc2luZ2xldG9uLCByZXVzZWQgYWNyb3NzIGNhcmRzKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGNyZWF0ZVRodW1ibmFpbCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsLmNsYXNzTmFtZSA9ICduZXh0b3JhLXJlbGF0ZWQtcG9zdHNfX2Zsb2F0aW5nLXRodW1iJztcbiAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGVsLmlubmVySFRNTCA9ICc8aW1nIGNsYXNzPVwibmV4dG9yYS1yZWxhdGVkLXBvc3RzX19mbG9hdGluZy10aHVtYi1pbWdcIiBzcmM9XCJcIiBhbHQ9XCJcIiAvPic7XG4gIGVsLnN0eWxlLmNzc1RleHQgPVxuICAgICdwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Ojk5OTk7JztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gIHJldHVybiBlbDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDYXJkIGhvdmVyIGhhbmRsZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gYmluZENhcmQoXG4gIGNhcmQ6IEhUTUxFbGVtZW50LFxuICB0aHVtYkVsOiBIVE1MRGl2RWxlbWVudCxcbiAgdGh1bWJJbWc6IEhUTUxJbWFnZUVsZW1lbnQsXG4gIHJlZHVjZU1vdGlvbjogYm9vbGVhbixcbikge1xuICBjb25zdCB0aHVtYlVybCA9IGNhcmQuZ2V0QXR0cmlidXRlKFRIVU1CX0FUVFIpO1xuICBpZiAoIXRodW1iVXJsKSByZXR1cm47XG5cbiAgLy8gR1NBUCBxdWlja1RvIGluc3RhbmNlcyBmb3IgcG9zaXRpb24gdHJhY2tpbmdcbiAgY29uc3QgeFRvID0gZ3NhcC5xdWlja1RvKHRodW1iRWwsICd4JywgeyBkdXJhdGlvbjogMC4xNSwgZWFzZTogJ3Bvd2VyMS5vdXQnIH0pO1xuICBjb25zdCB5VG8gPSBnc2FwLnF1aWNrVG8odGh1bWJFbCwgJ3knLCB7IGR1cmF0aW9uOiAwLjE1LCBlYXNlOiAncG93ZXIxLm91dCcgfSk7XG5cbiAgLy8gVGh1bWJuYWlsIGRpbWVuc2lvbnMgKG1hdGNoZXMgQ1NTOiAyMjBcdTAwRDcxNDBweClcbiAgY29uc3QgVEhVTUJfVyA9IDIyMDtcbiAgY29uc3QgVEhVTUJfSCA9IDE0MDtcbiAgY29uc3QgR0FQID0gMjQ7XG4gIGNvbnN0IEVER0VfUEFEID0gMjA7XG5cbiAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGdldFRodW1iUG9zKGN4OiBudW1iZXIsIGN5OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAvLyBEZWZhdWx0OiB0aHVtYm5haWwgdG8gdGhlIHVwcGVyLXJpZ2h0IG9mIGN1cnNvclxuICAgIGxldCB4ID0gY3ggKyBHQVA7XG4gICAgbGV0IHkgPSBjeSAtIFRIVU1CX0ggLyAyO1xuXG4gICAgLy8gRmxpcCB0byBsZWZ0IHNpZGUgaWYgb3ZlcmZsb3dpbmcgcmlnaHQgZWRnZVxuICAgIGlmICh4ICsgVEhVTUJfVyA+IHZ3IC0gRURHRV9QQUQpIHtcbiAgICAgIHggPSBjeCAtIFRIVU1CX1cgLSBHQVA7XG4gICAgfVxuXG4gICAgLy8gQ2xhbXAgdmVydGljYWwgdG8gdmlld3BvcnRcbiAgICBpZiAoeSA8IEVER0VfUEFEKSB7XG4gICAgICB5ID0gRURHRV9QQUQ7XG4gICAgfSBlbHNlIGlmICh5ICsgVEhVTUJfSCA+IHZoIC0gRURHRV9QQUQpIHtcbiAgICAgIHkgPSB2aCAtIFRIVU1CX0ggLSBFREdFX1BBRDtcbiAgICB9XG5cbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdmUoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gZ2V0VGh1bWJQb3MoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIHhUbyh4KTtcbiAgICB5VG8oeSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkVudGVyKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoYWN0aXZlIHx8IHJlZHVjZU1vdGlvbiB8fCBpc1RvdWNoRGV2aWNlKCkpIHJldHVybjtcbiAgICBhY3RpdmUgPSB0cnVlO1xuXG4gICAgLy8gU2V0IGltYWdlIHNvdXJjZVxuICAgIGlmICh0aHVtYkltZy5zcmMgIT09IHRodW1iVXJsISkge1xuICAgICAgdGh1bWJJbWcuc3JjID0gdGh1bWJVcmwhO1xuICAgIH1cblxuICAgIC8vIFBvc2l0aW9uICsgcmV2ZWFsIGluIGEgc2luZ2xlIHR3ZWVuIChhdm9pZHMgdHJhbnNmb3JtIGNvbmZsaWN0IGJldHdlZW4gc2V0IGFuZCBmcm9tVG8pXG4gICAgY29uc3QgeyB4LCB5IH0gPSBnZXRUaHVtYlBvcyhlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgZ3NhcC5mcm9tVG8oXG4gICAgICB0aHVtYkVsLFxuICAgICAgeyBvcGFjaXR5OiAwLCBzY2FsZTogMC44NSwgeCwgeSB9LFxuICAgICAgeyBvcGFjaXR5OiAxLCBzY2FsZTogMSwgeCwgeSwgZHVyYXRpb246IDAuMjUsIGVhc2U6ICdwb3dlcjIub3V0JyB9LFxuICAgICk7XG5cbiAgICAvLyBDYXJkIGFjY2VudFxuICAgIGdzYXAudG8oY2FyZCwge1xuICAgICAgYm9yZGVyTGVmdENvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLXByaW1hcnksIGN1cnJlbnRDb2xvciknLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjAxNSknLFxuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIGVhc2U6ICdwb3dlcjIub3V0JyxcbiAgICB9KTtcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkxlYXZlKCk6IHZvaWQge1xuICAgIGlmICghYWN0aXZlKSByZXR1cm47XG4gICAgYWN0aXZlID0gZmFsc2U7XG5cbiAgICBjYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW92ZSk7XG5cbiAgICBnc2FwLmtpbGxUd2VlbnNPZih0aHVtYkVsLCAnb3BhY2l0eSxzY2FsZScpO1xuICAgIGdzYXAudG8odGh1bWJFbCwge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHNjYWxlOiAwLjksXG4gICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgZWFzZTogJ3Bvd2VyMi5pbicsXG4gICAgfSk7XG5cbiAgICAvLyBSZXNldCBjYXJkIGFjY2VudFxuICAgIGdzYXAudG8oY2FyZCwge1xuICAgICAgYm9yZGVyTGVmdENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnLFxuICAgIH0pO1xuICB9XG5cbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25FbnRlcik7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG9uTGVhdmUpO1xuXG4gIC8vIFN0b3JlIGNsZWFudXAgcmVmZXJlbmNlXG4gIChjYXJkIGFzIGFueSkuX19ycENsZWFudXAgPSAoKSA9PiB7XG4gICAgY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25FbnRlcik7XG4gICAgY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgb25MZWF2ZSk7XG4gICAgY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdmUpO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEluaXQgcGVyIHJvb3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBpbml0Um9vdChyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBpZiAocm9vdC5nZXRBdHRyaWJ1dGUoSU5JVF9BVFRSKSA9PT0gJzEnKSByZXR1cm47XG4gIHJvb3Quc2V0QXR0cmlidXRlKElOSVRfQVRUUiwgJzEnKTtcblxuICBjb25zdCByZWR1Y2VNb3Rpb24gPSBwcmVmZXJzUmVkdWNlZE1vdGlvbigpO1xuXG4gIC8vIFRvdWNoIC8gcmVkdWNlZC1tb3Rpb246IG5vIGZsb2F0aW5nIHRodW1ibmFpbHMsIGp1c3Qgc3RhdGljIGRpc3BsYXlcbiAgaWYgKGlzVG91Y2hEZXZpY2UoKSB8fCByZWR1Y2VNb3Rpb24pIHtcbiAgICAvLyBFbnN1cmUgY2FyZHMgaGF2ZSBwcm9wZXIgYm9yZGVyIHRyYW5zaXRpb24gdmlhIENTUyBmYWxsYmFja1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHRodW1iRWwgPSBjcmVhdGVUaHVtYm5haWwoKTtcbiAgY29uc3QgdGh1bWJJbWcgPSB0aHVtYkVsLnF1ZXJ5U2VsZWN0b3I8SFRNTEltYWdlRWxlbWVudD4oJy5uZXh0b3JhLXJlbGF0ZWQtcG9zdHNfX2Zsb2F0aW5nLXRodW1iLWltZycpO1xuICBpZiAoIXRodW1iSW1nKSByZXR1cm47XG5cbiAgY29uc3QgY2FyZHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1yZWxhdGVkLXBvc3RzX19jYXJkJyk7XG5cbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gYmluZENhcmQoY2FyZCwgdGh1bWJFbCwgdGh1bWJJbWcsIHJlZHVjZU1vdGlvbikpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJvb3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBib290KCk6IHZvaWQge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtcmVsYXRlZC1wb3N0cycpLmZvckVhY2goaW5pdFJvb3QpO1xufVxuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBib290LCB7IG9uY2U6IHRydWUgfSk7XG59IGVsc2Uge1xuICBib290KCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFBQSxXQUFTLHVCQUF1QixNQUFNO0FBQUUsUUFBSSxTQUFTLFFBQVE7QUFBRSxZQUFNLElBQUksZUFBZSwyREFBMkQ7QUFBQSxJQUFHO0FBQUUsV0FBTztBQUFBLEVBQU07QUFFckssV0FBUyxlQUFlLFVBQVUsWUFBWTtBQUFFLGFBQVMsWUFBWSxPQUFPLE9BQU8sV0FBVyxTQUFTO0FBQUcsYUFBUyxVQUFVLGNBQWM7QUFBVSxhQUFTLFlBQVk7QUFBQSxFQUFZO0FBWXRMLE1BQUksVUFBVTtBQUFBLElBQ1osV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsZ0JBQWdCO0FBQUEsSUFDaEIsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBUEEsTUFRSSxZQUFZO0FBQUEsSUFDZCxVQUFVO0FBQUEsSUFD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LG9CQUFvQixjQUFjLE9BQU87QUFDOUMsV0FBSyxvQkFBb0IsYUFBYSxNQUFNO0FBQUEsSUFDOUM7QUFBQSxFQUNGO0FBTUEsV0FBUyxTQUFTLE1BQXlCO0FBQ3pDLFFBQUksS0FBSyxhQUFhLFNBQVMsTUFBTSxJQUFLO0FBQzFDLFNBQUssYUFBYSxXQUFXLEdBQUc7QUFFaEMsVUFBTSxlQUFlLHFCQUFxQjtBQUcxQyxRQUFJLGNBQWMsS0FBSyxjQUFjO0FBRW5DO0FBQUEsSUFDRjtBQUVBLFVBQU0sVUFBVSxnQkFBZ0I7QUFDaEMsVUFBTSxXQUFXLFFBQVEsY0FBZ0MsNENBQTRDO0FBQ3JHLFFBQUksQ0FBQyxTQUFVO0FBRWYsVUFBTSxRQUFRLEtBQUssaUJBQThCLDhCQUE4QjtBQUUvRSxVQUFNLFFBQVEsQ0FBQyxTQUFTLFNBQVMsTUFBTSxTQUFTLFVBQVUsWUFBWSxDQUFDO0FBQUEsRUFDekU7QUFNQSxXQUFTLE9BQWE7QUFDcEIsYUFBUyxpQkFBOEIsd0JBQXdCLEVBQUUsUUFBUSxRQUFRO0FBQUEsRUFDbkY7QUFFQSxNQUFJLFNBQVMsZUFBZSxXQUFXO0FBQ3JDLGFBQVMsaUJBQWlCLG9CQUFvQixNQUFNLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxFQUNwRSxPQUFPO0FBQ0wsU0FBSztBQUFBLEVBQ1A7IiwKICAibmFtZXMiOiBbIl9pc1N0cmluZyIsICJfaXNGdW5jdGlvbiIsICJfaXNOdW1iZXIiLCAiX2lzVW5kZWZpbmVkIiwgIl9pc09iamVjdCIsICJfaXNOb3RGYWxzZSIsICJfd2luZG93RXhpc3RzIiwgIl9pc0Z1bmNPclN0cmluZyIsICJfaW5zdGFsbCIsICJfbWlzc2luZ1BsdWdpbiIsICJfd2FybiIsICJfYWRkR2xvYmFsIiwgIl9lbXB0eUZ1bmMiLCAiX2hhcm5lc3MiLCAiX2dldENhY2hlIiwgIl9nZXRQcm9wZXJ0eSIsICJfZm9yRWFjaE5hbWUiLCAiX3JvdW5kIiwgIl9yb3VuZFByZWNpc2UiLCAiX3BhcnNlUmVsYXRpdmUiLCAiX2FycmF5Q29udGFpbnNBbnkiLCAiX2xhenlSZW5kZXIiLCAiX2lzUmV2ZXJ0V29ydGh5IiwgIl9sYXp5U2FmZVJlbmRlciIsICJfbnVtZXJpY0lmUG9zc2libGUiLCAiX3Bhc3NUaHJvdWdoIiwgIl9zZXREZWZhdWx0cyIsICJkZWZhdWx0cyIsICJfc2V0S2V5ZnJhbWVEZWZhdWx0cyIsICJfbWVyZ2UiLCAiX21lcmdlRGVlcCIsICJfY29weUV4Y2x1ZGluZyIsICJfaW5oZXJpdERlZmF1bHRzIiwgIl9hcnJheXNNYXRjaCIsICJfYWRkTGlua2VkTGlzdEl0ZW0iLCAiX3JlbW92ZUxpbmtlZExpc3RJdGVtIiwgIl9yZW1vdmVGcm9tUGFyZW50IiwgIl91bmNhY2hlIiwgIl9yZWNhY2hlQW5jZXN0b3JzIiwgIl9yZXdpbmRTdGFydEF0IiwgIl9oYXNOb1BhdXNlZEFuY2VzdG9ycyIsICJfZWxhcHNlZEN5Y2xlRHVyYXRpb24iLCAiX2FuaW1hdGlvbkN5Y2xlIiwgIl9wYXJlbnRUb0NoaWxkVG90YWxUaW1lIiwgIl9zZXRFbmQiLCAiX2FsaWduUGxheWhlYWQiLCAiX3Bvc3RBZGRDaGVja3MiLCAidGltZWxpbmUiLCAiX2FkZFRvVGltZWxpbmUiLCAiX3Njcm9sbFRyaWdnZXIiLCAiX2F0dGVtcHRJbml0VHdlZW4iLCAiX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydCIsICJfaXNGcm9tT3JGcm9tU3RhcnQiLCAiX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuIiwgIl9maW5kTmV4dFBhdXNlVHdlZW4iLCAiX3NldER1cmF0aW9uIiwgIl9vblVwZGF0ZVRvdGFsRHVyYXRpb24iLCAiX3BhcnNlUG9zaXRpb24iLCAiX2NyZWF0ZVR3ZWVuVHlwZSIsICJfY29uZGl0aW9uYWxSZXR1cm4iLCAiX2NsYW1wIiwgImdldFVuaXQiLCAiY2xhbXAiLCAiX2lzQXJyYXlMaWtlIiwgIl9mbGF0dGVuIiwgInRvQXJyYXkiLCAic2VsZWN0b3IiLCAic2h1ZmZsZSIsICJkaXN0cmlidXRlIiwgIl9yb3VuZE1vZGlmaWVyIiwgInNuYXAiLCAicmFuZG9tIiwgInBpcGUiLCAidW5pdGl6ZSIsICJub3JtYWxpemUiLCAiX3dyYXBBcnJheSIsICJ3cmFwIiwgInZhbHVlIiwgIndyYXBZb3lvIiwgIl9yZXBsYWNlUmFuZG9tIiwgIm1hcFJhbmdlIiwgImludGVycG9sYXRlIiwgInAiLCAiZnVuYyIsICJpIiwgIl9nZXRMYWJlbEluRGlyZWN0aW9uIiwgIl9jYWxsYmFjayIsICJjb250ZXh0IiwgIl9pbnRlcnJ1cHQiLCAiX2NyZWF0ZVBsdWdpbiIsICJjb25maWciLCAiX2h1ZSIsICJzcGxpdENvbG9yIiwgIl9jb2xvck9yZGVyRGF0YSIsICJ2IiwgIl9mb3JtYXRDb2xvcnMiLCAiX2NvbG9yU3RyaW5nRmlsdGVyIiwgIl9saXN0ZW5lcnMiLCAiX3RpY2siLCAiX3dha2UiLCAiX3BhcnNlT2JqZWN0SW5TdHJpbmciLCAiX3ZhbHVlSW5QYXJlbnRoZXNlcyIsICJfY29uZmlnRWFzZUZyb21TdHJpbmciLCAiX2ludmVydEVhc2UiLCAiX3BhcnNlRWFzZSIsICJfaW5zZXJ0RWFzZSIsICJlYXNlT3V0IiwgImVhc2VJbk91dCIsICJfZWFzZUluT3V0RnJvbU91dCIsICJfY29uZmlnRWxhc3RpYyIsICJhbXBsaXR1ZGUiLCAicGVyaW9kIiwgIl9jb25maWdCYWNrIiwgIm92ZXJzaG9vdCIsICJHU0NhY2hlIiwgIkFuaW1hdGlvbiIsICJfcmVzb2x2ZSIsICJUaW1lbGluZSIsICJyZW5kZXIiLCAiZ2V0QnlJZCIsICJnZXRUd2VlbnNPZiIsICJfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2VlbiIsICJfYWRkUHJvcFR3ZWVuIiwgIl9wcm9jZXNzVmFycyIsICJfY2hlY2tQbHVnaW4iLCAiX2luaXRUd2VlbiIsICJfdXBkYXRlUHJvcFR3ZWVucyIsICJfYWRkQWxpYXNlc1RvVmFycyIsICJfcGFyc2VLZXlmcmFtZSIsICJfcGFyc2VGdW5jT3JTdHJpbmciLCAiVHdlZW4iLCAiYSIsICJfc2V0dGVyUGxhaW4iLCAiX3NldHRlckZ1bmMiLCAiX3NldHRlckZ1bmNXaXRoUGFyYW0iLCAiX3NldHRlckF0dHJpYnV0ZSIsICJfZ2V0U2V0dGVyIiwgIl9yZW5kZXJQbGFpbiIsICJfcmVuZGVyQm9vbGVhbiIsICJfcmVuZGVyQ29tcGxleFN0cmluZyIsICJfcmVuZGVyUHJvcFR3ZWVucyIsICJfYWRkUGx1Z2luTW9kaWZpZXIiLCAiX2tpbGxQcm9wVHdlZW5zT2YiLCAiX3NldHRlcldpdGhNb2RpZmllciIsICJfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5IiwgIlByb3BUd2VlbiIsICJfZGlzcGF0Y2giLCAiX29uTWVkaWFDaGFuZ2UiLCAiQ29udGV4dCIsICJmIiwgIm1hdGNoTWVkaWEiLCAidCIsICJNYXRjaE1lZGlhIiwgInByb3BlcnR5IiwgInVuaXQiLCAidW5jYWNoZSIsICJfc2V0RGVmYXVsdHMyIiwgIl9nZXRQbHVnaW5Qcm9wVHdlZW4iLCAiX2FkZE1vZGlmaWVycyIsICJfYnVpbGRNb2RpZmllclBsdWdpbiIsICJpbml0IiwgInR3ZWVuIiwgIm5hbWUiLCAiX3dpbiIsICJfZG9jIiwgIl9yZXZlcnRpbmciLCAiX3dpbmRvd0V4aXN0cyIsICJfYmlnTnVtIiwgIl9yZW5kZXJDU1NQcm9wIiwgIl9yZW5kZXJQcm9wV2l0aEVuZCIsICJfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmciLCAiX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nQW5kRW5kIiwgIl9yZW5kZXJSb3VuZGVkQ1NTUHJvcCIsICJfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSIsICJfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCIsICJfc2V0dGVyQ1NTU3R5bGUiLCAiX3NldHRlckNTU1Byb3AiLCAiX3NldHRlclRyYW5zZm9ybSIsICJfc2V0dGVyU2NhbGUiLCAiX3NldHRlclNjYWxlV2l0aFJlbmRlciIsICJfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlciIsICJfc2F2ZVN0eWxlIiwgIl9yZW1vdmVJbmRlcGVuZGVudFRyYW5zZm9ybXMiLCAiX3JldmVydFN0eWxlIiwgIl9nZXRTdHlsZVNhdmVyIiwgIl9jcmVhdGVFbGVtZW50IiwgIl9nZXRDb21wdXRlZFByb3BlcnR5IiwgIl9jaGVja1Byb3BQcmVmaXgiLCAiX2luaXRDb3JlIiwgIl9nZXRSZXBhcmVudGVkQ2xvbmVCQm94IiwgIl9nZXRBdHRyaWJ1dGVGYWxsYmFja3MiLCAiX2dldEJCb3giLCAiX2lzU1ZHIiwgIl9yZW1vdmVQcm9wZXJ0eSIsICJfYWRkTm9uVHdlZW5pbmdQVCIsICJfY29udmVydFRvVW5pdCIsICJfZ2V0IiwgIl90d2VlbkNvbXBsZXhDU1NTdHJpbmciLCAiX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXMiLCAiX3JlbmRlckNsZWFyUHJvcHMiLCAiX2lzTnVsbFRyYW5zZm9ybSIsICJfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5IiwgIl9nZXRNYXRyaXgiLCAiX2FwcGx5U1ZHT3JpZ2luIiwgIl9wYXJzZVRyYW5zZm9ybSIsICJfZmlyc3RUd29Pbmx5IiwgIl9hZGRQeFRyYW5zbGF0ZSIsICJfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zIiwgIl9yZW5kZXJDU1NUcmFuc2Zvcm1zIiwgIl9yZW5kZXJTVkdUcmFuc2Zvcm1zIiwgIl9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuIiwgIl9hc3NpZ24iLCAiX2FkZFJhd1RyYW5zZm9ybVBUcyIsICJpbml0IiwgInJlbmRlciJdCn0K

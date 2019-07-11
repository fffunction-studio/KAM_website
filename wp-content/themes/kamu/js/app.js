/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./theme/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./theme/src/js/vue/app.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/js/vue/app.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: 'Hello World from Vue app'
    };
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./theme/src/js/vue/app.vue?vue&type=template&id=f649df1e&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./theme/src/js/vue/app.vue?vue&type=template&id=f649df1e& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _vm._v("\n\n  " + _vm._s(_vm.message) + "\n\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  _typeof(value) === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val["catch"] === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function no(a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function identity(_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = '__proto__' in {}; // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set =
  /*@__PURE__*/
  function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function warn(msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function repeat(str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function generateComponentTrace(vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function createEmptyVNode(text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child["extends"]) {
      parent = mergeOptions(parent, child["extends"], vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop["default"]; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */


function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

function isExplicable(value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) {
    args[len] = arguments[len];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res["catch"](function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function timerFunc() {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function timerFunc() {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function timerFunc() {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function timerFunc() {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function warnNonPresent(target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function warnReservedPrefix(target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function mark(tag) {
      return perf.mark(tag);
    };

    measure = function measure(name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key]["default"];
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots["default"] || (slots["default"] = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function normalized() {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && _typeof(res) === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function loop(key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) {
        loop(key);
      }
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options["abstract"])) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function merged(a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      "default": children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data["class"])) {
    traverse(data["class"]);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp["default"];
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function forceRender(renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : undefined);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options["abstract"]) {
    while (parent.$options["abstract"] && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options["abstract"]) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function updateComponent() {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function updateComponent() {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function getNow() {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : undefined; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function loop(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) {
    loop(key);
  }

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + _typeof(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor["super"]) {
    var superOptions = resolveConstructorOptions(Ctor["super"]);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var cachedNode = cache[key];

    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];

  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  "abstract": true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  render: function render() {
    var slot = this.$slots["default"];
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue["delete"] = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.10';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data["class"]);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    "class": isDef(child["class"]) ? [child["class"], parent["class"]] : parent["class"]
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps =
/*#__PURE__*/
Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function callInsert() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function blocker(e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data["class"]) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData["class"]))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecesarry `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function setProp(el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (_typeof(def$$1) === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options["abstract"]) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function isNotTextNode(c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function isVShowDirective(d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  "abstract": true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots["default"];

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function performLeave() {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots["default"] || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


/* harmony default export */ __webpack_exports__["default"] = (Vue);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./theme/src/app.js":
/*!**************************!*\
  !*** ./theme/src/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _js_vue_app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/vue/app.vue */ "./theme/src/js/vue/app.vue");


var element = document.querySelector('#app');

if (element) {
  new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    render: function render(h) {
      return h(_js_vue_app_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  }).$mount(element);
}

/***/ }),

/***/ "./theme/src/js/vue/app.vue":
/*!**********************************!*\
  !*** ./theme/src/js/vue/app.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_f649df1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=f649df1e& */ "./theme/src/js/vue/app.vue?vue&type=template&id=f649df1e&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./theme/src/js/vue/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_f649df1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_f649df1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "theme/src/js/vue/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./theme/src/js/vue/app.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./theme/src/js/vue/app.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./theme/src/js/vue/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./theme/src/js/vue/app.vue?vue&type=template&id=f649df1e&":
/*!*****************************************************************!*\
  !*** ./theme/src/js/vue/app.vue?vue&type=template&id=f649df1e& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f649df1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=f649df1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./theme/src/js/vue/app.vue?vue&type=template&id=f649df1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f649df1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_f649df1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3RoZW1lL3NyYy9qcy92dWUvYXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL3RoZW1lL3NyYy9qcy92dWUvYXBwLnZ1ZT8zZGY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3RoZW1lL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvc3JjL2pzL3Z1ZS9hcHAudnVlIiwid2VicGFjazovLy8uL3RoZW1lL3NyYy9qcy92dWUvYXBwLnZ1ZT85NWVkIiwid2VicGFjazovLy8uL3RoZW1lL3NyYy9qcy92dWUvYXBwLnZ1ZT81ZDRmIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZSIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJjYWxsIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJsZW5ndGgiLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwiYXJncyIsIkFycmF5IiwiYXJndW1lbnRzIiwiaSIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZ2xvYmFsIiwidW5kZWZpbmVkIiwic2V0SW1tZWRpYXRlIiwibmV4dEhhbmRsZSIsInRhc2tzQnlIYW5kbGUiLCJjdXJyZW50bHlSdW5uaW5nQVRhc2siLCJkb2MiLCJkb2N1bWVudCIsInJlZ2lzdGVySW1tZWRpYXRlIiwiY2FsbGJhY2siLCJGdW5jdGlvbiIsInRhc2siLCJjbGVhckltbWVkaWF0ZSIsImhhbmRsZSIsInJ1bklmUHJlc2VudCIsImluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uIiwiY2FuVXNlUG9zdE1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzIiwib2xkT25NZXNzYWdlIiwib25tZXNzYWdlIiwiaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24iLCJtZXNzYWdlUHJlZml4IiwiTWF0aCIsInJhbmRvbSIsIm9uR2xvYmFsTWVzc2FnZSIsImV2ZW50Iiwic291cmNlIiwiZGF0YSIsImluZGV4T2YiLCJzbGljZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInRvU3RyaW5nIiwic2VsZiIsInNjb3BlIiwid2luZG93IiwiVGltZW91dCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsb3NlIiwiaWQiLCJjbGVhckZuIiwiX2lkIiwiX2NsZWFyRm4iLCJ1bnJlZiIsInJlZiIsImVucm9sbCIsIml0ZW0iLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwicmVxdWlyZSIsImVtcHR5T2JqZWN0IiwiZnJlZXplIiwiaXNVbmRlZiIsInYiLCJpc0RlZiIsImlzVHJ1ZSIsImlzRmFsc2UiLCJpc1ByaW1pdGl2ZSIsInZhbHVlIiwiaXNPYmplY3QiLCJvYmoiLCJfdG9TdHJpbmciLCJ0b1Jhd1R5cGUiLCJpc1BsYWluT2JqZWN0IiwiaXNSZWdFeHAiLCJpc1ZhbGlkQXJyYXlJbmRleCIsInZhbCIsIm4iLCJwYXJzZUZsb2F0IiwiU3RyaW5nIiwiZmxvb3IiLCJpc0Zpbml0ZSIsImlzUHJvbWlzZSIsInRoZW4iLCJpc0FycmF5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvTnVtYmVyIiwiaXNOYU4iLCJtYWtlTWFwIiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsIm1hcCIsImNyZWF0ZSIsImxpc3QiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiaXNCdWlsdEluVGFnIiwiaXNSZXNlcnZlZEF0dHJpYnV0ZSIsInJlbW92ZSIsImFyciIsImluZGV4Iiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInBvbHlmaWxsQmluZCIsImN0eCIsImJvdW5kRm4iLCJhIiwibCIsIl9sZW5ndGgiLCJuYXRpdmVCaW5kIiwiYmluZCIsInRvQXJyYXkiLCJzdGFydCIsInJldCIsImV4dGVuZCIsInRvIiwiX2Zyb20iLCJ0b09iamVjdCIsInJlcyIsImIiLCJubyIsImlkZW50aXR5IiwibG9vc2VFcXVhbCIsImlzT2JqZWN0QSIsImlzT2JqZWN0QiIsImlzQXJyYXlBIiwiaXNBcnJheUIiLCJldmVyeSIsIkRhdGUiLCJnZXRUaW1lIiwia2V5c0EiLCJrZXlzIiwia2V5c0IiLCJsb29zZUluZGV4T2YiLCJjYWxsZWQiLCJTU1JfQVRUUiIsIkFTU0VUX1RZUEVTIiwiTElGRUNZQ0xFX0hPT0tTIiwiY29uZmlnIiwib3B0aW9uTWVyZ2VTdHJhdGVnaWVzIiwic2lsZW50IiwicHJvZHVjdGlvblRpcCIsImRldnRvb2xzIiwicGVyZm9ybWFuY2UiLCJlcnJvckhhbmRsZXIiLCJ3YXJuSGFuZGxlciIsImlnbm9yZWRFbGVtZW50cyIsImtleUNvZGVzIiwiaXNSZXNlcnZlZFRhZyIsImlzUmVzZXJ2ZWRBdHRyIiwiaXNVbmtub3duRWxlbWVudCIsImdldFRhZ05hbWVzcGFjZSIsInBhcnNlUGxhdGZvcm1UYWdOYW1lIiwibXVzdFVzZVByb3AiLCJhc3luYyIsIl9saWZlY3ljbGVIb29rcyIsInVuaWNvZGVSZWdFeHAiLCJpc1Jlc2VydmVkIiwiY2hhckNvZGVBdCIsImRlZiIsImVudW1lcmFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiYmFpbFJFIiwiUmVnRXhwIiwicGFyc2VQYXRoIiwicGF0aCIsInRlc3QiLCJzZWdtZW50cyIsImhhc1Byb3RvIiwiaW5Ccm93c2VyIiwiaW5XZWV4IiwiV1hFbnZpcm9ubWVudCIsInBsYXRmb3JtIiwid2VleFBsYXRmb3JtIiwiVUEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpc0lFIiwiaXNJRTkiLCJpc0VkZ2UiLCJpc0FuZHJvaWQiLCJpc0lPUyIsImlzQ2hyb21lIiwiaXNQaGFudG9tSlMiLCJpc0ZGIiwibWF0Y2giLCJuYXRpdmVXYXRjaCIsIndhdGNoIiwic3VwcG9ydHNQYXNzaXZlIiwib3B0cyIsImdldCIsIl9pc1NlcnZlciIsImlzU2VydmVyUmVuZGVyaW5nIiwiVlVFX0VOViIsIl9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJpc05hdGl2ZSIsIkN0b3IiLCJoYXNTeW1ib2wiLCJTeW1ib2wiLCJSZWZsZWN0Iiwib3duS2V5cyIsIl9TZXQiLCJTZXQiLCJzZXQiLCJoYXMiLCJhZGQiLCJjbGVhciIsIndhcm4iLCJ0aXAiLCJnZW5lcmF0ZUNvbXBvbmVudFRyYWNlIiwiZm9ybWF0Q29tcG9uZW50TmFtZSIsImhhc0NvbnNvbGUiLCJjb25zb2xlIiwiY2xhc3NpZnlSRSIsImNsYXNzaWZ5IiwibXNnIiwidm0iLCJ0cmFjZSIsImVycm9yIiwiaW5jbHVkZUZpbGUiLCIkcm9vdCIsIm9wdGlvbnMiLCJjaWQiLCJfaXNWdWUiLCIkb3B0aW9ucyIsImNvbnN0cnVjdG9yIiwiX2NvbXBvbmVudFRhZyIsImZpbGUiLCJfX2ZpbGUiLCJyZXBlYXQiLCIkcGFyZW50IiwidHJlZSIsImN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSIsImxhc3QiLCJqb2luIiwidWlkIiwiRGVwIiwic3VicyIsImFkZFN1YiIsInN1YiIsInJlbW92ZVN1YiIsImRlcGVuZCIsInRhcmdldCIsImFkZERlcCIsIm5vdGlmeSIsInNvcnQiLCJ1cGRhdGUiLCJ0YXJnZXRTdGFjayIsInB1c2hUYXJnZXQiLCJwb3BUYXJnZXQiLCJwb3AiLCJWTm9kZSIsInRhZyIsImNoaWxkcmVuIiwidGV4dCIsImVsbSIsImNvbnRleHQiLCJjb21wb25lbnRPcHRpb25zIiwiYXN5bmNGYWN0b3J5IiwibnMiLCJmbkNvbnRleHQiLCJmbk9wdGlvbnMiLCJmblNjb3BlSWQiLCJjb21wb25lbnRJbnN0YW5jZSIsInBhcmVudCIsInJhdyIsImlzU3RhdGljIiwiaXNSb290SW5zZXJ0IiwiaXNDb21tZW50IiwiaXNDbG9uZWQiLCJpc09uY2UiLCJhc3luY01ldGEiLCJpc0FzeW5jUGxhY2Vob2xkZXIiLCJwcm90b3R5cGVBY2Nlc3NvcnMiLCJjaGlsZCIsImRlZmluZVByb3BlcnRpZXMiLCJjcmVhdGVFbXB0eVZOb2RlIiwibm9kZSIsImNyZWF0ZVRleHRWTm9kZSIsImNsb25lVk5vZGUiLCJ2bm9kZSIsImNsb25lZCIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJtZXRob2RzVG9QYXRjaCIsImZvckVhY2giLCJtZXRob2QiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJyZXN1bHQiLCJvYiIsIl9fb2JfXyIsImluc2VydGVkIiwib2JzZXJ2ZUFycmF5IiwiZGVwIiwiYXJyYXlLZXlzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInNob3VsZE9ic2VydmUiLCJ0b2dnbGVPYnNlcnZpbmciLCJPYnNlcnZlciIsInZtQ291bnQiLCJwcm90b0F1Z21lbnQiLCJjb3B5QXVnbWVudCIsIndhbGsiLCJkZWZpbmVSZWFjdGl2ZSQkMSIsIml0ZW1zIiwib2JzZXJ2ZSIsInNyYyIsIl9fcHJvdG9fXyIsImFzUm9vdERhdGEiLCJpc0V4dGVuc2libGUiLCJjdXN0b21TZXR0ZXIiLCJzaGFsbG93IiwicHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJjaGlsZE9iIiwicmVhY3RpdmVHZXR0ZXIiLCJkZXBlbmRBcnJheSIsInJlYWN0aXZlU2V0dGVyIiwibmV3VmFsIiwibWF4IiwiZGVsIiwic3RyYXRzIiwiZWwiLCJwcm9wc0RhdGEiLCJkZWZhdWx0U3RyYXQiLCJtZXJnZURhdGEiLCJmcm9tIiwidG9WYWwiLCJmcm9tVmFsIiwibWVyZ2VEYXRhT3JGbiIsInBhcmVudFZhbCIsImNoaWxkVmFsIiwibWVyZ2VkRGF0YUZuIiwibWVyZ2VkSW5zdGFuY2VEYXRhRm4iLCJpbnN0YW5jZURhdGEiLCJkZWZhdWx0RGF0YSIsIm1lcmdlSG9vayIsImRlZHVwZUhvb2tzIiwiaG9va3MiLCJob29rIiwibWVyZ2VBc3NldHMiLCJhc3NlcnRPYmplY3RUeXBlIiwidHlwZSIsImtleSQxIiwicHJvcHMiLCJtZXRob2RzIiwiaW5qZWN0IiwiY29tcHV0ZWQiLCJwcm92aWRlIiwiY2hlY2tDb21wb25lbnRzIiwiY29tcG9uZW50cyIsInZhbGlkYXRlQ29tcG9uZW50TmFtZSIsIm5vcm1hbGl6ZVByb3BzIiwibm9ybWFsaXplSW5qZWN0Iiwibm9ybWFsaXplZCIsIm5vcm1hbGl6ZURpcmVjdGl2ZXMiLCJkaXJzIiwiZGlyZWN0aXZlcyIsImRlZiQkMSIsIm1lcmdlT3B0aW9ucyIsIl9iYXNlIiwibWl4aW5zIiwibWVyZ2VGaWVsZCIsInN0cmF0IiwicmVzb2x2ZUFzc2V0Iiwid2Fybk1pc3NpbmciLCJhc3NldHMiLCJjYW1lbGl6ZWRJZCIsIlBhc2NhbENhc2VJZCIsInZhbGlkYXRlUHJvcCIsInByb3BPcHRpb25zIiwicHJvcCIsImFic2VudCIsImJvb2xlYW5JbmRleCIsImdldFR5cGVJbmRleCIsIkJvb2xlYW4iLCJzdHJpbmdJbmRleCIsImdldFByb3BEZWZhdWx0VmFsdWUiLCJwcmV2U2hvdWxkT2JzZXJ2ZSIsImFzc2VydFByb3AiLCJfcHJvcHMiLCJnZXRUeXBlIiwicmVxdWlyZWQiLCJ2YWxpZCIsImV4cGVjdGVkVHlwZXMiLCJhc3NlcnRlZFR5cGUiLCJhc3NlcnRUeXBlIiwiZXhwZWN0ZWRUeXBlIiwiZ2V0SW52YWxpZFR5cGVNZXNzYWdlIiwidmFsaWRhdG9yIiwic2ltcGxlQ2hlY2tSRSIsInQiLCJpc1NhbWVUeXBlIiwibWVzc2FnZSIsInJlY2VpdmVkVHlwZSIsImV4cGVjdGVkVmFsdWUiLCJzdHlsZVZhbHVlIiwicmVjZWl2ZWRWYWx1ZSIsImlzRXhwbGljYWJsZSIsImlzQm9vbGVhbiIsIk51bWJlciIsImV4cGxpY2l0VHlwZXMiLCJzb21lIiwiZWxlbSIsImhhbmRsZUVycm9yIiwiZXJyIiwiaW5mbyIsImN1ciIsImVycm9yQ2FwdHVyZWQiLCJjYXB0dXJlIiwiZ2xvYmFsSGFuZGxlRXJyb3IiLCJpbnZva2VXaXRoRXJyb3JIYW5kbGluZyIsImhhbmRsZXIiLCJfaGFuZGxlZCIsImxvZ0Vycm9yIiwiaXNVc2luZ01pY3JvVGFzayIsImNhbGxiYWNrcyIsInBlbmRpbmciLCJmbHVzaENhbGxiYWNrcyIsImNvcGllcyIsInRpbWVyRnVuYyIsIlByb21pc2UiLCJwIiwicmVzb2x2ZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJjb3VudGVyIiwib2JzZXJ2ZXIiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiY2hhcmFjdGVyRGF0YSIsImNiIiwiX3Jlc29sdmUiLCJpbml0UHJveHkiLCJhbGxvd2VkR2xvYmFscyIsIndhcm5Ob25QcmVzZW50Iiwid2FyblJlc2VydmVkUHJlZml4IiwiaGFzUHJveHkiLCJQcm94eSIsImlzQnVpbHRJbk1vZGlmaWVyIiwiaGFzSGFuZGxlciIsImlzQWxsb3dlZCIsIiRkYXRhIiwiZ2V0SGFuZGxlciIsImhhbmRsZXJzIiwicmVuZGVyIiwiX3dpdGhTdHJpcHBlZCIsIl9yZW5kZXJQcm94eSIsInNlZW5PYmplY3RzIiwidHJhdmVyc2UiLCJfdHJhdmVyc2UiLCJzZWVuIiwiaXNBIiwiaXNGcm96ZW4iLCJkZXBJZCIsIm1hcmsiLCJtZWFzdXJlIiwicGVyZiIsImNsZWFyTWFya3MiLCJjbGVhck1lYXN1cmVzIiwic3RhcnRUYWciLCJlbmRUYWciLCJub3JtYWxpemVFdmVudCIsInBhc3NpdmUiLCJvbmNlJCQxIiwiY3JlYXRlRm5JbnZva2VyIiwiZm5zIiwiaW52b2tlciIsImFyZ3VtZW50cyQxIiwidXBkYXRlTGlzdGVuZXJzIiwib2xkT24iLCJyZW1vdmUkJDEiLCJjcmVhdGVPbmNlSGFuZGxlciIsIm9sZCIsInBhcmFtcyIsIm1lcmdlVk5vZGVIb29rIiwiaG9va0tleSIsIm9sZEhvb2siLCJ3cmFwcGVkSG9vayIsIm1lcmdlZCIsImV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEiLCJhdHRycyIsImFsdEtleSIsImtleUluTG93ZXJDYXNlIiwiY2hlY2tQcm9wIiwiaGFzaCIsInByZXNlcnZlIiwic2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVDaGlsZHJlbiIsIm5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4iLCJpc1RleHROb2RlIiwibmVzdGVkSW5kZXgiLCJsYXN0SW5kZXgiLCJzaGlmdCIsIl9pc1ZMaXN0IiwiaW5pdFByb3ZpZGUiLCJfcHJvdmlkZWQiLCJpbml0SW5qZWN0aW9ucyIsInJlc29sdmVJbmplY3QiLCJwcm92aWRlS2V5IiwicHJvdmlkZURlZmF1bHQiLCJyZXNvbHZlU2xvdHMiLCJzbG90cyIsInNsb3QiLCJuYW1lJDEiLCJpc1doaXRlc3BhY2UiLCJub3JtYWxpemVTY29wZWRTbG90cyIsIm5vcm1hbFNsb3RzIiwicHJldlNsb3RzIiwiaGFzTm9ybWFsU2xvdHMiLCJpc1N0YWJsZSIsIiRzdGFibGUiLCIka2V5IiwiX25vcm1hbGl6ZWQiLCIkaGFzTm9ybWFsIiwibm9ybWFsaXplU2NvcGVkU2xvdCIsImtleSQyIiwicHJveHlOb3JtYWxTbG90IiwicHJveHkiLCJyZW5kZXJMaXN0IiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsInJlbmRlclNsb3QiLCJmYWxsYmFjayIsImJpbmRPYmplY3QiLCJzY29wZWRTbG90Rm4iLCIkc2NvcGVkU2xvdHMiLCJub2RlcyIsIiRzbG90cyIsIiRjcmVhdGVFbGVtZW50IiwicmVzb2x2ZUZpbHRlciIsImlzS2V5Tm90TWF0Y2giLCJleHBlY3QiLCJhY3R1YWwiLCJjaGVja0tleUNvZGVzIiwiZXZlbnRLZXlDb2RlIiwiYnVpbHRJbktleUNvZGUiLCJldmVudEtleU5hbWUiLCJidWlsdEluS2V5TmFtZSIsIm1hcHBlZEtleUNvZGUiLCJiaW5kT2JqZWN0UHJvcHMiLCJhc1Byb3AiLCJpc1N5bmMiLCJsb29wIiwiZG9tUHJvcHMiLCJjYW1lbGl6ZWRLZXkiLCJoeXBoZW5hdGVkS2V5IiwiJGV2ZW50IiwicmVuZGVyU3RhdGljIiwiaXNJbkZvciIsIl9zdGF0aWNUcmVlcyIsInN0YXRpY1JlbmRlckZucyIsIm1hcmtTdGF0aWMiLCJtYXJrT25jZSIsIm1hcmtTdGF0aWNOb2RlIiwiYmluZE9iamVjdExpc3RlbmVycyIsImV4aXN0aW5nIiwib3VycyIsInJlc29sdmVTY29wZWRTbG90cyIsImhhc0R5bmFtaWNLZXlzIiwiY29udGVudEhhc2hLZXkiLCJiaW5kRHluYW1pY0tleXMiLCJiYXNlT2JqIiwidmFsdWVzIiwicHJlcGVuZE1vZGlmaWVyIiwic3ltYm9sIiwiaW5zdGFsbFJlbmRlckhlbHBlcnMiLCJfbyIsIl9uIiwiX3MiLCJfbCIsIl90IiwiX3EiLCJfaSIsIl9tIiwiX2YiLCJfayIsIl9iIiwiX3YiLCJfZSIsIl91IiwiX2ciLCJfZCIsIl9wIiwiRnVuY3Rpb25hbFJlbmRlckNvbnRleHQiLCJ0aGlzJDEiLCJjb250ZXh0Vm0iLCJfb3JpZ2luYWwiLCJpc0NvbXBpbGVkIiwiX2NvbXBpbGVkIiwibmVlZE5vcm1hbGl6YXRpb24iLCJpbmplY3Rpb25zIiwic2NvcGVkU2xvdHMiLCJfc2NvcGVJZCIsIl9jIiwiZCIsImNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQiLCJtZXJnZVByb3BzIiwicmVuZGVyQ29udGV4dCIsImNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQiLCJ2bm9kZXMiLCJjbG9uZSIsImRldnRvb2xzTWV0YSIsImNvbXBvbmVudFZOb2RlSG9va3MiLCJpbml0IiwiaHlkcmF0aW5nIiwiX2lzRGVzdHJveWVkIiwia2VlcEFsaXZlIiwibW91bnRlZE5vZGUiLCJwcmVwYXRjaCIsImNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUiLCJhY3RpdmVJbnN0YW5jZSIsIiRtb3VudCIsIm9sZFZub2RlIiwidXBkYXRlQ2hpbGRDb21wb25lbnQiLCJpbnNlcnQiLCJfaXNNb3VudGVkIiwiY2FsbEhvb2siLCJxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCIsImFjdGl2YXRlQ2hpbGRDb21wb25lbnQiLCJkZXN0cm95IiwiJGRlc3Ryb3kiLCJkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQiLCJob29rc1RvTWVyZ2UiLCJjcmVhdGVDb21wb25lbnQiLCJiYXNlQ3RvciIsInJlc29sdmVBc3luY0NvbXBvbmVudCIsImNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIiLCJyZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIiwibW9kZWwiLCJ0cmFuc2Zvcm1Nb2RlbCIsImZ1bmN0aW9uYWwiLCJuYXRpdmVPbiIsImluc3RhbGxDb21wb25lbnRIb29rcyIsIl9pc0NvbXBvbmVudCIsIl9wYXJlbnRWbm9kZSIsImlubGluZVRlbXBsYXRlIiwidG9NZXJnZSIsIl9tZXJnZWQiLCJtZXJnZUhvb2skMSIsImYxIiwiZjIiLCJTSU1QTEVfTk9STUFMSVpFIiwiQUxXQVlTX05PUk1BTElaRSIsIm5vcm1hbGl6YXRpb25UeXBlIiwiYWx3YXlzTm9ybWFsaXplIiwiX2NyZWF0ZUVsZW1lbnQiLCJpcyIsIiR2bm9kZSIsInByZSIsImFwcGx5TlMiLCJyZWdpc3RlckRlZXBCaW5kaW5ncyIsImZvcmNlIiwic3R5bGUiLCJpbml0UmVuZGVyIiwiX3Zub2RlIiwicGFyZW50Vm5vZGUiLCJfcmVuZGVyQ2hpbGRyZW4iLCJwYXJlbnREYXRhIiwiaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50IiwiX3BhcmVudExpc3RlbmVycyIsImN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSIsInJlbmRlck1peGluIiwiVnVlIiwiJG5leHRUaWNrIiwiX3JlbmRlciIsInJlbmRlckVycm9yIiwiZW5zdXJlQ3RvciIsImNvbXAiLCJiYXNlIiwiX19lc01vZHVsZSIsInRvU3RyaW5nVGFnIiwiZmFjdG9yeSIsImVycm9yQ29tcCIsInJlc29sdmVkIiwib3duZXIiLCJvd25lcnMiLCJsb2FkaW5nIiwibG9hZGluZ0NvbXAiLCJzeW5jIiwidGltZXJMb2FkaW5nIiwidGltZXJUaW1lb3V0IiwiJG9uIiwiZm9yY2VSZW5kZXIiLCJyZW5kZXJDb21wbGV0ZWQiLCIkZm9yY2VVcGRhdGUiLCJyZWplY3QiLCJyZWFzb24iLCJjb21wb25lbnQiLCJkZWxheSIsImdldEZpcnN0Q29tcG9uZW50Q2hpbGQiLCJpbml0RXZlbnRzIiwiX2V2ZW50cyIsIl9oYXNIb29rRXZlbnQiLCJ1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMiLCJyZW1vdmUkMSIsIiRvZmYiLCJfdGFyZ2V0Iiwib25jZUhhbmRsZXIiLCJvbGRMaXN0ZW5lcnMiLCJldmVudHNNaXhpbiIsImhvb2tSRSIsIiRvbmNlIiwiaSQxIiwiY2JzIiwiJGVtaXQiLCJsb3dlckNhc2VFdmVudCIsInNldEFjdGl2ZUluc3RhbmNlIiwicHJldkFjdGl2ZUluc3RhbmNlIiwiaW5pdExpZmVjeWNsZSIsIiRjaGlsZHJlbiIsIiRyZWZzIiwiX3dhdGNoZXIiLCJfaW5hY3RpdmUiLCJfZGlyZWN0SW5hY3RpdmUiLCJfaXNCZWluZ0Rlc3Ryb3llZCIsImxpZmVjeWNsZU1peGluIiwiX3VwZGF0ZSIsInByZXZFbCIsIiRlbCIsInByZXZWbm9kZSIsInJlc3RvcmVBY3RpdmVJbnN0YW5jZSIsIl9fcGF0Y2hfXyIsIl9fdnVlX18iLCJ0ZWFyZG93biIsIl93YXRjaGVycyIsIl9kYXRhIiwibW91bnRDb21wb25lbnQiLCJ0ZW1wbGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsIl9uYW1lIiwiX3VpZCIsIldhdGNoZXIiLCJiZWZvcmUiLCJyZW5kZXJDaGlsZHJlbiIsIm5ld1Njb3BlZFNsb3RzIiwib2xkU2NvcGVkU2xvdHMiLCJoYXNEeW5hbWljU2NvcGVkU2xvdCIsIm5lZWRzRm9yY2VVcGRhdGUiLCIkYXR0cnMiLCIkbGlzdGVuZXJzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJpc0luSW5hY3RpdmVUcmVlIiwiZGlyZWN0IiwiaiIsIk1BWF9VUERBVEVfQ09VTlQiLCJhY3RpdmF0ZWRDaGlsZHJlbiIsImNpcmN1bGFyIiwid2FpdGluZyIsImZsdXNoaW5nIiwicmVzZXRTY2hlZHVsZXJTdGF0ZSIsImN1cnJlbnRGbHVzaFRpbWVzdGFtcCIsImdldE5vdyIsIm5vdyIsImNyZWF0ZUV2ZW50IiwidGltZVN0YW1wIiwiZmx1c2hTY2hlZHVsZXJRdWV1ZSIsIndhdGNoZXIiLCJ1c2VyIiwiZXhwcmVzc2lvbiIsImFjdGl2YXRlZFF1ZXVlIiwidXBkYXRlZFF1ZXVlIiwiY2FsbEFjdGl2YXRlZEhvb2tzIiwiY2FsbFVwZGF0ZWRIb29rcyIsInF1ZXVlV2F0Y2hlciIsInVpZCQyIiwiZXhwT3JGbiIsImlzUmVuZGVyV2F0Y2hlciIsImRlZXAiLCJsYXp5IiwiZGlydHkiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImNsZWFudXBEZXBzIiwidG1wIiwib2xkVmFsdWUiLCJldmFsdWF0ZSIsInNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiIsInNvdXJjZUtleSIsInByb3h5R2V0dGVyIiwicHJveHlTZXR0ZXIiLCJpbml0U3RhdGUiLCJpbml0UHJvcHMiLCJpbml0TWV0aG9kcyIsImluaXREYXRhIiwiaW5pdENvbXB1dGVkIiwiaW5pdFdhdGNoIiwicHJvcHNPcHRpb25zIiwiaXNSb290IiwiZ2V0RGF0YSIsImNvbXB1dGVkV2F0Y2hlck9wdGlvbnMiLCJ3YXRjaGVycyIsIl9jb21wdXRlZFdhdGNoZXJzIiwiaXNTU1IiLCJ1c2VyRGVmIiwiZGVmaW5lQ29tcHV0ZWQiLCJzaG91bGRDYWNoZSIsImNyZWF0ZUNvbXB1dGVkR2V0dGVyIiwiY3JlYXRlR2V0dGVySW52b2tlciIsImNvbXB1dGVkR2V0dGVyIiwiY3JlYXRlV2F0Y2hlciIsIiR3YXRjaCIsInN0YXRlTWl4aW4iLCJkYXRhRGVmIiwicHJvcHNEZWYiLCIkc2V0IiwiJGRlbGV0ZSIsImltbWVkaWF0ZSIsInVud2F0Y2hGbiIsInVpZCQzIiwiaW5pdE1peGluIiwiX2luaXQiLCJpbml0SW50ZXJuYWxDb21wb25lbnQiLCJfc2VsZiIsInZub2RlQ29tcG9uZW50T3B0aW9ucyIsInN1cGVyT3B0aW9ucyIsImNhY2hlZFN1cGVyT3B0aW9ucyIsIm1vZGlmaWVkT3B0aW9ucyIsInJlc29sdmVNb2RpZmllZE9wdGlvbnMiLCJleHRlbmRPcHRpb25zIiwibW9kaWZpZWQiLCJsYXRlc3QiLCJzZWFsZWQiLCJzZWFsZWRPcHRpb25zIiwiaW5pdFVzZSIsInVzZSIsInBsdWdpbiIsImluc3RhbGxlZFBsdWdpbnMiLCJfaW5zdGFsbGVkUGx1Z2lucyIsInVuc2hpZnQiLCJpbnN0YWxsIiwiaW5pdE1peGluJDEiLCJtaXhpbiIsImluaXRFeHRlbmQiLCJTdXBlciIsIlN1cGVySWQiLCJjYWNoZWRDdG9ycyIsIl9DdG9yIiwiU3ViIiwiVnVlQ29tcG9uZW50IiwiaW5pdFByb3BzJDEiLCJpbml0Q29tcHV0ZWQkMSIsIkNvbXAiLCJpbml0QXNzZXRSZWdpc3RlcnMiLCJkZWZpbml0aW9uIiwiZ2V0Q29tcG9uZW50TmFtZSIsIm1hdGNoZXMiLCJwYXR0ZXJuIiwicHJ1bmVDYWNoZSIsImtlZXBBbGl2ZUluc3RhbmNlIiwiZmlsdGVyIiwiY2FjaGVkTm9kZSIsInBydW5lQ2FjaGVFbnRyeSIsImN1cnJlbnQiLCJjYWNoZWQkJDEiLCJwYXR0ZXJuVHlwZXMiLCJLZWVwQWxpdmUiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImNyZWF0ZWQiLCJkZXN0cm95ZWQiLCJtb3VudGVkIiwicmVmJDEiLCJwYXJzZUludCIsImJ1aWx0SW5Db21wb25lbnRzIiwiaW5pdEdsb2JhbEFQSSIsImNvbmZpZ0RlZiIsInV0aWwiLCJkZWZpbmVSZWFjdGl2ZSIsIm9ic2VydmFibGUiLCJzc3JDb250ZXh0IiwiYWNjZXB0VmFsdWUiLCJhdHRyIiwiaXNFbnVtZXJhdGVkQXR0ciIsImlzVmFsaWRDb250ZW50RWRpdGFibGVWYWx1ZSIsImNvbnZlcnRFbnVtZXJhdGVkVmFsdWUiLCJpc0ZhbHN5QXR0clZhbHVlIiwiaXNCb29sZWFuQXR0ciIsInhsaW5rTlMiLCJpc1hsaW5rIiwiZ2V0WGxpbmtQcm9wIiwiZ2VuQ2xhc3NGb3JWbm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJtZXJnZUNsYXNzRGF0YSIsInJlbmRlckNsYXNzIiwic3RhdGljQ2xhc3MiLCJkeW5hbWljQ2xhc3MiLCJzdHJpbmdpZnlDbGFzcyIsInN0cmluZ2lmeUFycmF5Iiwic3RyaW5naWZ5T2JqZWN0Iiwic3RyaW5naWZpZWQiLCJuYW1lc3BhY2VNYXAiLCJzdmciLCJtYXRoIiwiaXNIVE1MVGFnIiwiaXNTVkciLCJ1bmtub3duRWxlbWVudENhY2hlIiwiSFRNTFVua25vd25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJpc1RleHRJbnB1dFR5cGUiLCJxdWVyeSIsInNlbGVjdGVkIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQkMSIsInRhZ05hbWUiLCJtdWx0aXBsZSIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWVzcGFjZSIsImNyZWF0ZUNvbW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXdOb2RlIiwicmVmZXJlbmNlTm9kZSIsIm5leHRTaWJsaW5nIiwic2V0VGV4dENvbnRlbnQiLCJ0ZXh0Q29udGVudCIsInNldFN0eWxlU2NvcGUiLCJzY29wZUlkIiwibm9kZU9wcyIsInJlZ2lzdGVyUmVmIiwiaXNSZW1vdmFsIiwicmVmcyIsInJlZkluRm9yIiwiZW1wdHlOb2RlIiwic2FtZVZub2RlIiwic2FtZUlucHV0VHlwZSIsInR5cGVBIiwidHlwZUIiLCJjcmVhdGVLZXlUb09sZElkeCIsImJlZ2luSWR4IiwiZW5kSWR4IiwiY3JlYXRlUGF0Y2hGdW5jdGlvbiIsImJhY2tlbmQiLCJtb2R1bGVzIiwiZW1wdHlOb2RlQXQiLCJjcmVhdGVSbUNiIiwiY2hpbGRFbG0iLCJyZW1vdmVOb2RlIiwiaXNVbmtub3duRWxlbWVudCQkMSIsImluVlByZSIsImlnbm9yZSIsImNyZWF0aW5nRWxtSW5WUHJlIiwiY3JlYXRlRWxtIiwiaW5zZXJ0ZWRWbm9kZVF1ZXVlIiwicGFyZW50RWxtIiwicmVmRWxtIiwibmVzdGVkIiwib3duZXJBcnJheSIsInNldFNjb3BlIiwiY3JlYXRlQ2hpbGRyZW4iLCJpbnZva2VDcmVhdGVIb29rcyIsImlzUmVhY3RpdmF0ZWQiLCJpbml0Q29tcG9uZW50IiwicmVhY3RpdmF0ZUNvbXBvbmVudCIsInBlbmRpbmdJbnNlcnQiLCJpc1BhdGNoYWJsZSIsImlubmVyTm9kZSIsInRyYW5zaXRpb24iLCJhY3RpdmF0ZSIsInJlZiQkMSIsImNoZWNrRHVwbGljYXRlS2V5cyIsImFuY2VzdG9yIiwiYWRkVm5vZGVzIiwic3RhcnRJZHgiLCJpbnZva2VEZXN0cm95SG9vayIsInJlbW92ZVZub2RlcyIsImNoIiwicmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayIsInJtIiwidXBkYXRlQ2hpbGRyZW4iLCJvbGRDaCIsIm5ld0NoIiwicmVtb3ZlT25seSIsIm9sZFN0YXJ0SWR4IiwibmV3U3RhcnRJZHgiLCJvbGRFbmRJZHgiLCJvbGRTdGFydFZub2RlIiwib2xkRW5kVm5vZGUiLCJuZXdFbmRJZHgiLCJuZXdTdGFydFZub2RlIiwibmV3RW5kVm5vZGUiLCJvbGRLZXlUb0lkeCIsImlkeEluT2xkIiwidm5vZGVUb01vdmUiLCJjYW5Nb3ZlIiwicGF0Y2hWbm9kZSIsImZpbmRJZHhJbk9sZCIsInNlZW5LZXlzIiwiZW5kIiwiaHlkcmF0ZSIsInBvc3RwYXRjaCIsImludm9rZUluc2VydEhvb2siLCJpbml0aWFsIiwiaHlkcmF0aW9uQmFpbGVkIiwiaXNSZW5kZXJlZE1vZHVsZSIsImFzc2VydE5vZGVNYXRjaCIsImhhc0NoaWxkTm9kZXMiLCJpbm5lckhUTUwiLCJjaGlsZHJlbk1hdGNoIiwiZmlyc3RDaGlsZCIsImNoaWxkTm9kZXMiLCJmdWxsSW52b2tlIiwibm9kZVR5cGUiLCJwYXRjaCIsImlzSW5pdGlhbFBhdGNoIiwiaXNSZWFsRWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm9sZEVsbSIsIl9sZWF2ZUNiIiwicGF0Y2hhYmxlIiwiaSQyIiwidXBkYXRlRGlyZWN0aXZlcyIsInVuYmluZERpcmVjdGl2ZXMiLCJpc0NyZWF0ZSIsImlzRGVzdHJveSIsIm9sZERpcnMiLCJub3JtYWxpemVEaXJlY3RpdmVzJDEiLCJuZXdEaXJzIiwiZGlyc1dpdGhJbnNlcnQiLCJkaXJzV2l0aFBvc3RwYXRjaCIsIm9sZERpciIsImNhbGxIb29rJDEiLCJvbGRBcmciLCJhcmciLCJjb21wb25lbnRVcGRhdGVkIiwiY2FsbEluc2VydCIsImVtcHR5TW9kaWZpZXJzIiwibW9kaWZpZXJzIiwiZ2V0UmF3RGlyTmFtZSIsInJhd05hbWUiLCJiYXNlTW9kdWxlcyIsInVwZGF0ZUF0dHJzIiwiaW5oZXJpdEF0dHJzIiwib2xkQXR0cnMiLCJzZXRBdHRyIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJiYXNlU2V0QXR0ciIsInNldEF0dHJpYnV0ZU5TIiwiX19pZXBoIiwiYmxvY2tlciIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVDbGFzcyIsIm9sZERhdGEiLCJjbHMiLCJ0cmFuc2l0aW9uQ2xhc3MiLCJfdHJhbnNpdGlvbkNsYXNzZXMiLCJfcHJldkNsYXNzIiwia2xhc3MiLCJSQU5HRV9UT0tFTiIsIkNIRUNLQk9YX1JBRElPX1RPS0VOIiwibm9ybWFsaXplRXZlbnRzIiwiY2hhbmdlIiwidGFyZ2V0JDEiLCJjcmVhdGVPbmNlSGFuZGxlciQxIiwicmVtb3ZlJDIiLCJ1c2VNaWNyb3Rhc2tGaXgiLCJhZGQkMSIsImF0dGFjaGVkVGltZXN0YW1wIiwiX3dyYXBwZXIiLCJjdXJyZW50VGFyZ2V0Iiwib3duZXJEb2N1bWVudCIsInVwZGF0ZURPTUxpc3RlbmVycyIsImV2ZW50cyIsInN2Z0NvbnRhaW5lciIsInVwZGF0ZURPTVByb3BzIiwib2xkUHJvcHMiLCJfdmFsdWUiLCJzdHJDdXIiLCJzaG91bGRVcGRhdGVWYWx1ZSIsImNoZWNrVmFsIiwiY29tcG9zaW5nIiwiaXNOb3RJbkZvY3VzQW5kRGlydHkiLCJpc0RpcnR5V2l0aE1vZGlmaWVycyIsIm5vdEluRm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiX3ZNb2RpZmllcnMiLCJudW1iZXIiLCJ0cmltIiwicGFyc2VTdHlsZVRleHQiLCJjc3NUZXh0IiwibGlzdERlbGltaXRlciIsInByb3BlcnR5RGVsaW1pdGVyIiwibm9ybWFsaXplU3R5bGVEYXRhIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwic3RhdGljU3R5bGUiLCJiaW5kaW5nU3R5bGUiLCJnZXRTdHlsZSIsImNoZWNrQ2hpbGQiLCJzdHlsZURhdGEiLCJjc3NWYXJSRSIsImltcG9ydGFudFJFIiwic2V0UHJvcCIsInNldFByb3BlcnR5Iiwibm9ybWFsaXplZE5hbWUiLCJub3JtYWxpemUiLCJ2ZW5kb3JOYW1lcyIsImVtcHR5U3R5bGUiLCJjYXBOYW1lIiwidXBkYXRlU3R5bGUiLCJvbGRTdGF0aWNTdHlsZSIsIm9sZFN0eWxlQmluZGluZyIsIm5vcm1hbGl6ZWRTdHlsZSIsIm9sZFN0eWxlIiwibmV3U3R5bGUiLCJ3aGl0ZXNwYWNlUkUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwidGFyIiwicmVzb2x2ZVRyYW5zaXRpb24iLCJjc3MiLCJhdXRvQ3NzVHJhbnNpdGlvbiIsImVudGVyQ2xhc3MiLCJlbnRlclRvQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwibGVhdmVDbGFzcyIsImxlYXZlVG9DbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJoYXNUcmFuc2l0aW9uIiwiVFJBTlNJVElPTiIsIkFOSU1BVElPTiIsInRyYW5zaXRpb25Qcm9wIiwidHJhbnNpdGlvbkVuZEV2ZW50IiwiYW5pbWF0aW9uUHJvcCIsImFuaW1hdGlvbkVuZEV2ZW50Iiwib250cmFuc2l0aW9uZW5kIiwib253ZWJraXR0cmFuc2l0aW9uZW5kIiwib25hbmltYXRpb25lbmQiLCJvbndlYmtpdGFuaW1hdGlvbmVuZCIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5leHRGcmFtZSIsImFkZFRyYW5zaXRpb25DbGFzcyIsInRyYW5zaXRpb25DbGFzc2VzIiwicmVtb3ZlVHJhbnNpdGlvbkNsYXNzIiwid2hlblRyYW5zaXRpb25FbmRzIiwiZ2V0VHJhbnNpdGlvbkluZm8iLCJwcm9wQ291bnQiLCJlbmRlZCIsIm9uRW5kIiwidHJhbnNmb3JtUkUiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkRlbGF5cyIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwiaGFzVHJhbnNmb3JtIiwiZGVsYXlzIiwiZHVyYXRpb25zIiwidG9NcyIsInMiLCJlbnRlciIsInRvZ2dsZURpc3BsYXkiLCJjYW5jZWxsZWQiLCJfZW50ZXJDYiIsImFwcGVhckNsYXNzIiwiYXBwZWFyVG9DbGFzcyIsImFwcGVhckFjdGl2ZUNsYXNzIiwiYmVmb3JlRW50ZXIiLCJhZnRlckVudGVyIiwiZW50ZXJDYW5jZWxsZWQiLCJiZWZvcmVBcHBlYXIiLCJhcHBlYXIiLCJhZnRlckFwcGVhciIsImFwcGVhckNhbmNlbGxlZCIsImR1cmF0aW9uIiwidHJhbnNpdGlvbk5vZGUiLCJpc0FwcGVhciIsInN0YXJ0Q2xhc3MiLCJhY3RpdmVDbGFzcyIsInRvQ2xhc3MiLCJiZWZvcmVFbnRlckhvb2siLCJlbnRlckhvb2siLCJhZnRlckVudGVySG9vayIsImVudGVyQ2FuY2VsbGVkSG9vayIsImV4cGxpY2l0RW50ZXJEdXJhdGlvbiIsImNoZWNrRHVyYXRpb24iLCJleHBlY3RzQ1NTIiwidXNlcldhbnRzQ29udHJvbCIsImdldEhvb2tBcmd1bWVudHNMZW5ndGgiLCJzaG93IiwicGVuZGluZ05vZGUiLCJfcGVuZGluZyIsImlzVmFsaWREdXJhdGlvbiIsImxlYXZlIiwiYmVmb3JlTGVhdmUiLCJhZnRlckxlYXZlIiwibGVhdmVDYW5jZWxsZWQiLCJkZWxheUxlYXZlIiwiZXhwbGljaXRMZWF2ZUR1cmF0aW9uIiwicGVyZm9ybUxlYXZlIiwiaW52b2tlckZucyIsIl9lbnRlciIsInBsYXRmb3JtTW9kdWxlcyIsInZtb2RlbCIsInRyaWdnZXIiLCJkaXJlY3RpdmUiLCJfdk9wdGlvbnMiLCJzZXRTZWxlY3RlZCIsImdldFZhbHVlIiwib25Db21wb3NpdGlvblN0YXJ0Iiwib25Db21wb3NpdGlvbkVuZCIsInByZXZPcHRpb25zIiwiY3VyT3B0aW9ucyIsIm8iLCJuZWVkUmVzZXQiLCJoYXNOb01hdGNoaW5nT3B0aW9uIiwiYWN0dWFsbHlTZXRTZWxlY3RlZCIsImlzTXVsdGlwbGUiLCJvcHRpb24iLCJzZWxlY3RlZEluZGV4IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImxvY2F0ZU5vZGUiLCJ0cmFuc2l0aW9uJCQxIiwib3JpZ2luYWxEaXNwbGF5IiwiX192T3JpZ2luYWxEaXNwbGF5IiwiZGlzcGxheSIsInVuYmluZCIsInBsYXRmb3JtRGlyZWN0aXZlcyIsInRyYW5zaXRpb25Qcm9wcyIsIm1vZGUiLCJnZXRSZWFsQ2hpbGQiLCJjb21wT3B0aW9ucyIsImV4dHJhY3RUcmFuc2l0aW9uRGF0YSIsInBsYWNlaG9sZGVyIiwiaCIsInJhd0NoaWxkIiwiaGFzUGFyZW50VHJhbnNpdGlvbiIsImlzU2FtZUNoaWxkIiwib2xkQ2hpbGQiLCJpc05vdFRleHROb2RlIiwiaXNWU2hvd0RpcmVjdGl2ZSIsIlRyYW5zaXRpb24iLCJfbGVhdmluZyIsIm9sZFJhd0NoaWxkIiwiZGVsYXllZExlYXZlIiwibW92ZUNsYXNzIiwiVHJhbnNpdGlvbkdyb3VwIiwiYmVmb3JlTW91bnQiLCJrZXB0IiwicHJldkNoaWxkcmVuIiwicmF3Q2hpbGRyZW4iLCJ0cmFuc2l0aW9uRGF0YSIsInJlbW92ZWQiLCJjJDEiLCJwb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVkIiwiaGFzTW92ZSIsImNhbGxQZW5kaW5nQ2JzIiwicmVjb3JkUG9zaXRpb24iLCJhcHBseVRyYW5zbGF0aW9uIiwiX3JlZmxvdyIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJtb3ZlZCIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIl9tb3ZlQ2IiLCJwcm9wZXJ0eU5hbWUiLCJfaGFzTW92ZSIsImNsb25lTm9kZSIsIm5ld1BvcyIsIm9sZFBvcyIsImR4IiwibGVmdCIsImR5IiwidG9wIiwicGxhdGZvcm1Db21wb25lbnRzIiwiZyIsImVsZW1lbnQiLCJBcHAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQSxNQURBLGtC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QUFrRjtBQUMzQjtBQUNMOzs7QUFHbEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUixFQUFFLDhFQUFNO0FBQ1IsRUFBRSx1RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBK0ssQ0FBZ0IsdU9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGhlbWUvc3JjL2FwcC5qc1wiKTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuXG4gICAge3sgbWVzc2FnZSB9fVxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ0hlbGxvIFdvcmxkIGZyb20gVnVlIGFwcCdcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LCBbXG4gICAgX3ZtLl92KFwiXFxuXFxuICBcIiArIF92bS5fcyhfdm0ubWVzc2FnZSkgKyBcIlxcblxcblwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjEwXG4gKiAoYykgMjAxNC0yMDE5IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qICAqL1xuXG52YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICByZXR1cm4gdiA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gIHJldHVybiB2ID09PSBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKVxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsIGlzIGEgdmFsaWQgYXJyYXkgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KFN0cmluZyh2YWwpKTtcbiAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIChcbiAgICBpc0RlZih2YWwpICYmXG4gICAgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICApXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgIDogU3RyaW5nKHZhbClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGlucHV0IHZhbHVlIHRvIGEgbnVtYmVyIGZvciBwZXJzaXN0ZW5jZS5cbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICovXG5mdW5jdGlvbiB0b051bWJlciAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcCAoXG4gIHN0cixcbiAgZXhwZWN0c0xvd2VyQ2FzZVxuKSB7XG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XG4gICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQnLCB0cnVlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQsXG4gKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICogQnV0IHJlbW92aW5nIGl0IHdvdWxkIG1lYW4gYnJlYWtpbmcgY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpblxuICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG5cbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICByZXR1cm4gYm91bmRGblxufVxuXG5mdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmbi5iaW5kKGN0eClcbn1cblxudmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICA/IG5hdGl2ZUJpbmRcbiAgOiBwb2x5ZmlsbEJpbmQ7XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0pIHtcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKi9cbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaXNPYmplY3RBID0gaXNPYmplY3QoYSk7XG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgbG9vc2VseSBlcXVhbCB2YWx1ZSBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgU1NSX0FUVFIgPSAnZGF0YS1zZXJ2ZXItcmVuZGVyZWQnO1xuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJyxcbiAgJ3NlcnZlclByZWZldGNoJ1xuXTtcblxuLyogICovXG5cblxuXG52YXIgY29uZmlnID0gKHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAqL1xuICBwcm9kdWN0aW9uVGlwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBkZXZ0b29sc1xuICAgKi9cbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcbiAgICovXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAqL1xuICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICovXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1Ncbn0pO1xuXG4vKiAgKi9cblxuLyoqXG4gKiB1bmljb2RlIGxldHRlcnMgdXNlZCBmb3IgcGFyc2luZyBodG1sIHRhZ3MsIGNvbXBvbmVudCBuYW1lcyBhbmQgcHJvcGVydHkgcGF0aHMuXG4gKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICovXG52YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqL1xuZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qICAqL1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaW5XZWV4ID0gdHlwZW9mIFdYRW52aXJvbm1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybTtcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gKFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDApIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdhbmRyb2lkJyk7XG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xudmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG52YXIgaXNQaGFudG9tSlMgPSBVQSAmJiAvcGhhbnRvbWpzLy50ZXN0KFVBKTtcbnZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcblxudmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuaWYgKGluQnJvd3Nlcikge1xuICB0cnkge1xuICAgIHZhciBvcHRzID0ge307XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wdHMsICdwYXNzaXZlJywgKHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8yODVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdC1wYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbi8vIHRoaXMgbmVlZHMgdG8gYmUgbGF6eS1ldmFsZWQgYmVjYXVzZSB2dWUgbWF5IGJlIHJlcXVpcmVkIGJlZm9yZVxuLy8gdnVlLXNlcnZlci1yZW5kZXJlciBjYW4gc2V0IFZVRV9FTlZcbnZhciBfaXNTZXJ2ZXI7XG52YXIgaXNTZXJ2ZXJSZW5kZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChfaXNTZXJ2ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaW5Ccm93c2VyICYmICFpbldlZXggJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGRldGVjdCBwcmVzZW5jZSBvZiB2dWUtc2VydmVyLXJlbmRlcmVyIGFuZCBhdm9pZFxuICAgICAgLy8gV2VicGFjayBzaGltbWluZyB0aGUgcHJvY2Vzc1xuICAgICAgX2lzU2VydmVyID0gZ2xvYmFsWydwcm9jZXNzJ10gJiYgZ2xvYmFsWydwcm9jZXNzJ10uZW52LlZVRV9FTlYgPT09ICdzZXJ2ZXInO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaXNTZXJ2ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9pc1NlcnZlclxufTtcblxuLy8gZGV0ZWN0IGRldnRvb2xzXG52YXIgZGV2dG9vbHMgPSBpbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBpc05hdGl2ZSAoQ3Rvcikge1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KEN0b3IudG9TdHJpbmcoKSlcbn1cblxudmFyIGhhc1N5bWJvbCA9XG4gIHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFN5bWJvbCkgJiZcbiAgdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFJlZmxlY3Qub3duS2V5cyk7XG5cbnZhciBfU2V0O1xuLyogaXN0YW5idWwgaWdub3JlIGlmICovIC8vICRmbG93LWRpc2FibGUtbGluZVxuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFNldCkpIHtcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXG4gIF9TZXQgPSBTZXQ7XG59IGVsc2Uge1xuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXG4gIF9TZXQgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZXQgKCkge1xuICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRba2V5XSA9PT0gdHJ1ZVxuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGtleSkge1xuICAgICAgdGhpcy5zZXRba2V5XSA9IHRydWU7XG4gICAgfTtcbiAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIgKCkge1xuICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2V0O1xuICB9KCkpO1xufVxuXG4vKiAgKi9cblxudmFyIHdhcm4gPSBub29wO1xudmFyIHRpcCA9IG5vb3A7XG52YXIgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IChub29wKTsgLy8gd29yayBhcm91bmQgZmxvdyBjaGVja1xudmFyIGZvcm1hdENvbXBvbmVudE5hbWUgPSAobm9vcCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBoYXNDb25zb2xlID0gdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgY2xhc3NpZnlSRSA9IC8oPzpefFstX10pKFxcdykvZztcbiAgdmFyIGNsYXNzaWZ5ID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoY2xhc3NpZnlSRSwgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudG9VcHBlckNhc2UoKTsgfSlcbiAgICAucmVwbGFjZSgvWy1fXS9nLCAnJyk7IH07XG5cbiAgd2FybiA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgdmFyIHRyYWNlID0gdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnO1xuXG4gICAgaWYgKGNvbmZpZy53YXJuSGFuZGxlcikge1xuICAgICAgY29uZmlnLndhcm5IYW5kbGVyLmNhbGwobnVsbCwgbXNnLCB2bSwgdHJhY2UpO1xuICAgIH0gZWxzZSBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIltWdWUgd2Fybl06IFwiICsgbXNnICsgdHJhY2UpKTtcbiAgICB9XG4gIH07XG5cbiAgdGlwID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbVnVlIHRpcF06IFwiICsgbXNnICsgKFxuICAgICAgICB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJydcbiAgICAgICkpO1xuICAgIH1cbiAgfTtcblxuICBmb3JtYXRDb21wb25lbnROYW1lID0gZnVuY3Rpb24gKHZtLCBpbmNsdWRlRmlsZSkge1xuICAgIGlmICh2bS4kcm9vdCA9PT0gdm0pIHtcbiAgICAgIHJldHVybiAnPFJvb3Q+J1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiB2bSA9PT0gJ2Z1bmN0aW9uJyAmJiB2bS5jaWQgIT0gbnVsbFxuICAgICAgPyB2bS5vcHRpb25zXG4gICAgICA6IHZtLl9pc1Z1ZVxuICAgICAgICA/IHZtLiRvcHRpb25zIHx8IHZtLmNvbnN0cnVjdG9yLm9wdGlvbnNcbiAgICAgICAgOiB2bTtcbiAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSB8fCBvcHRpb25zLl9jb21wb25lbnRUYWc7XG4gICAgdmFyIGZpbGUgPSBvcHRpb25zLl9fZmlsZTtcbiAgICBpZiAoIW5hbWUgJiYgZmlsZSkge1xuICAgICAgdmFyIG1hdGNoID0gZmlsZS5tYXRjaCgvKFteL1xcXFxdKylcXC52dWUkLyk7XG4gICAgICBuYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIChuYW1lID8gKFwiPFwiICsgKGNsYXNzaWZ5KG5hbWUpKSArIFwiPlwiKSA6IFwiPEFub255bW91cz5cIikgK1xuICAgICAgKGZpbGUgJiYgaW5jbHVkZUZpbGUgIT09IGZhbHNlID8gKFwiIGF0IFwiICsgZmlsZSkgOiAnJylcbiAgICApXG4gIH07XG5cbiAgdmFyIHJlcGVhdCA9IGZ1bmN0aW9uIChzdHIsIG4pIHtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgd2hpbGUgKG4pIHtcbiAgICAgIGlmIChuICUgMiA9PT0gMSkgeyByZXMgKz0gc3RyOyB9XG4gICAgICBpZiAobiA+IDEpIHsgc3RyICs9IHN0cjsgfVxuICAgICAgbiA+Pj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9O1xuXG4gIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSBmdW5jdGlvbiAodm0pIHtcbiAgICBpZiAodm0uX2lzVnVlICYmIHZtLiRwYXJlbnQpIHtcbiAgICAgIHZhciB0cmVlID0gW107XG4gICAgICB2YXIgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgIHdoaWxlICh2bSkge1xuICAgICAgICBpZiAodHJlZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIGxhc3QgPSB0cmVlW3RyZWUubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKGxhc3QuY29uc3RydWN0b3IgPT09IHZtLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UrKztcbiAgICAgICAgICAgIHZtID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPiAwKSB7XG4gICAgICAgICAgICB0cmVlW3RyZWUubGVuZ3RoIC0gMV0gPSBbbGFzdCwgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlXTtcbiAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyZWUucHVzaCh2bSk7XG4gICAgICAgIHZtID0gdm0uJHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnXFxuXFxuZm91bmQgaW5cXG5cXG4nICsgdHJlZVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh2bSwgaSkgeyByZXR1cm4gKFwiXCIgKyAoaSA9PT0gMCA/ICctLS0+ICcgOiByZXBlYXQoJyAnLCA1ICsgaSAqIDIpKSArIChBcnJheS5pc0FycmF5KHZtKVxuICAgICAgICAgICAgPyAoKGZvcm1hdENvbXBvbmVudE5hbWUodm1bMF0pKSArIFwiLi4uIChcIiArICh2bVsxXSkgKyBcIiByZWN1cnNpdmUgY2FsbHMpXCIpXG4gICAgICAgICAgICA6IGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSk7IH0pXG4gICAgICAgIC5qb2luKCdcXG4nKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFwiXFxuXFxuKGZvdW5kIGluIFwiICsgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiKVwiKVxuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQgPSAwO1xuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqL1xudmFyIERlcCA9IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrKztcbiAgdGhpcy5zdWJzID0gW107XG59O1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIGFkZFN1YiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIHJlbW92ZVN1YiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgRGVwLnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgLy8gb3JkZXJcbiAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4vLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsO1xudmFyIHRhcmdldFN0YWNrID0gW107XG5cbmZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICB0YXJnZXRTdGFjay5wdXNoKHRhcmdldCk7XG4gIERlcC50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIHRhcmdldFN0YWNrLnBvcCgpO1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2tbdGFyZ2V0U3RhY2subGVuZ3RoIC0gMV07XG59XG5cbi8qICAqL1xuXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGVsbSxcbiAgY29udGV4dCxcbiAgY29tcG9uZW50T3B0aW9ucyxcbiAgYXN5bmNGYWN0b3J5XG4pIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mblNjb3BlSWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzQ2xvbmVkID0gZmFsc2U7XG4gIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICB0aGlzLmFzeW5jTWV0YSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICByZXR1cm4gbm9kZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcodmFsKSlcbn1cblxuLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbi8vIHVzZWQgZm9yIHN0YXRpYyBub2RlcyBhbmQgc2xvdCBub2RlcyBiZWNhdXNlIHRoZXkgbWF5IGJlIHJldXNlZCBhY3Jvc3Ncbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIGNsb25lVk5vZGUgKHZub2RlKSB7XG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgdm5vZGUudGFnLFxuICAgIHZub2RlLmRhdGEsXG4gICAgLy8gIzc5NzVcbiAgICAvLyBjbG9uZSBjaGlsZHJlbiBhcnJheSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBpbiBjYXNlIG9mIGNsb25pbmdcbiAgICAvLyBhIGNoaWxkLlxuICAgIHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLnNsaWNlKCksXG4gICAgdm5vZGUudGV4dCxcbiAgICB2bm9kZS5lbG0sXG4gICAgdm5vZGUuY29udGV4dCxcbiAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgIHZub2RlLmFzeW5jRmFjdG9yeVxuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gIGNsb25lZC5mbkNvbnRleHQgPSB2bm9kZS5mbkNvbnRleHQ7XG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gIGNsb25lZC5hc3luY01ldGEgPSB2bm9kZS5hc3luY01ldGE7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxudmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgIHZhciBpbnNlcnRlZDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gKi9cbnZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICBzaG91bGRPYnNlcnZlID0gdmFsdWU7XG59XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBpcyBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoIHVwZGF0ZXMuXG4gKi9cbnZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICB0aGlzLnZtQ291bnQgPSAwO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICBwcm90b0F1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgfVxufTtcblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICovXG5mdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgYXNSb290RGF0YSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChcbiAgICBzaG91bGRPYnNlcnZlICYmXG4gICAgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiZcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgfVxuICBpZiAoYXNSb290RGF0YSAmJiBvYikge1xuICAgIG9iLnZtQ291bnQrKztcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlJCQxIChcbiAgb2JqLFxuICBrZXksXG4gIHZhbCxcbiAgY3VzdG9tU2V0dGVyLFxuICBzaGFsbG93XG4pIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuICBpZiAoKCFnZXR0ZXIgfHwgc2V0dGVyKSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFsID0gb2JqW2tleV07XG4gIH1cblxuICB2YXIgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUodmFsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpO1xuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlIHx8IChuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGN1c3RvbVNldHRlcikge1xuICAgICAgICBjdXN0b21TZXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIC8vICM3OTgxOiBmb3IgYWNjZXNzb3IgcHJvcGVydGllcyB3aXRob3V0IHNldHRlclxuICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7IHJldHVybiB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKi9cbmZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3Qgc2V0IHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQubGVuZ3RoID0gTWF0aC5tYXgodGFyZ2V0Lmxlbmd0aCwga2V5KTtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSwgdmFsKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKGtleSBpbiB0YXJnZXQgJiYgIShrZXkgaW4gT2JqZWN0LnByb3RvdHlwZSkpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnYXQgcnVudGltZSAtIGRlY2xhcmUgaXQgdXBmcm9udCBpbiB0aGUgZGF0YSBvcHRpb24uJ1xuICAgICk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmICghb2IpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgZGVmaW5lUmVhY3RpdmUkJDEob2IudmFsdWUsIGtleSwgdmFsKTtcbiAgb2IuZGVwLm5vdGlmeSgpO1xuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gZGVsICh0YXJnZXQsIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3QgZGVsZXRlIHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICctIGp1c3Qgc2V0IGl0IHRvIG51bGwuJ1xuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIHRhcmdldFtrZXldO1xuICBpZiAoIW9iKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xufVxuXG4vKipcbiAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gKiB3ZSBjYW5ub3QgaW50ZXJjZXB0IGFycmF5IGVsZW1lbnQgYWNjZXNzIGxpa2UgcHJvcGVydHkgZ2V0dGVycy5cbiAqL1xuZnVuY3Rpb24gZGVwZW5kQXJyYXkgKHZhbHVlKSB7XG4gIGZvciAodmFyIGUgPSAodm9pZCAwKSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBlID0gdmFsdWVbaV07XG4gICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgIGRlcGVuZEFycmF5KGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICogdmFsdWUgaW50byB0aGUgZmluYWwgdmFsdWUuXG4gKi9cbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4vKipcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgaWYgKCF2bSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcbiAgICAgICAgJ2NyZWF0aW9uIHdpdGggdGhlIGBuZXdgIGtleXdvcmQuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRTdHJhdChwYXJlbnQsIGNoaWxkKVxuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEgKHRvLCBmcm9tKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcblxuICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgID8gUmVmbGVjdC5vd25LZXlzKGZyb20pXG4gICAgOiBPYmplY3Qua2V5cyhmcm9tKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIC8vIGluIGNhc2UgdGhlIG9iamVjdCBpcyBhbHJlYWR5IG9ic2VydmVkLi4uXG4gICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XG4gICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRvVmFsICE9PSBmcm9tVmFsICYmXG4gICAgICBpc1BsYWluT2JqZWN0KHRvVmFsKSAmJlxuICAgICAgaXNQbGFpbk9iamVjdChmcm9tVmFsKVxuICAgICkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRGF0YVxuICovXG5mdW5jdGlvbiBtZXJnZURhdGFPckZuIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7XG4gICAgICByZXR1cm4gY2hpbGRWYWxcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4gKCkge1xuICAgICAgcmV0dXJuIG1lcmdlRGF0YShcbiAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxuICAgICAgICB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nID8gcGFyZW50VmFsLmNhbGwodGhpcywgdGhpcykgOiBwYXJlbnRWYWxcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuICgpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogY2hpbGRWYWw7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IHBhcmVudFZhbDtcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICBpZiAoY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSlcbn07XG5cbi8qKlxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2sgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsXG4pIHtcbiAgdmFyIHJlcyA9IGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbDtcbiAgcmV0dXJuIHJlc1xuICAgID8gZGVkdXBlSG9va3MocmVzKVxuICAgIDogcmVzXG59XG5cbmZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkxJRkVDWUNMRV9IT09LUy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gIHN0cmF0c1tob29rXSA9IG1lcmdlSG9vaztcbn0pO1xuXG4vKipcbiAqIEFzc2V0c1xuICpcbiAqIFdoZW4gYSB2bSBpcyBwcmVzZW50IChpbnN0YW5jZSBjcmVhdGlvbiksIHdlIG5lZWQgdG8gZG9cbiAqIGEgdGhyZWUtd2F5IG1lcmdlIGJldHdlZW4gY29uc3RydWN0b3Igb3B0aW9ucywgaW5zdGFuY2VcbiAqIG9wdGlvbnMgYW5kIHBhcmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBtZXJnZUFzc2V0cyAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCk7XG4gIGlmIChjaGlsZFZhbCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgcmV0dXJuIGV4dGVuZChyZXMsIGNoaWxkVmFsKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5BU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xufSk7XG5cbi8qKlxuICogV2F0Y2hlcnMuXG4gKlxuICogV2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cbnN0cmF0cy53YXRjaCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3gncyBPYmplY3QucHJvdG90eXBlLndhdGNoLi4uXG4gIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IHBhcmVudFZhbCA9IHVuZGVmaW5lZDsgfVxuICBpZiAoY2hpbGRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IGNoaWxkVmFsID0gdW5kZWZpbmVkOyB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkVmFsKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKSB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IHt9O1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBmb3IgKHZhciBrZXkkMSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5JDFdO1xuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleSQxXTtcbiAgICBpZiAocGFyZW50ICYmICFBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IFtwYXJlbnRdO1xuICAgIH1cbiAgICByZXRba2V5JDFdID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGQpID8gY2hpbGQgOiBbY2hpbGRdO1xuICB9XG4gIHJldHVybiByZXRcbn07XG5cbi8qKlxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAqL1xuc3RyYXRzLnByb3BzID1cbnN0cmF0cy5tZXRob2RzID1cbnN0cmF0cy5pbmplY3QgPVxuc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgaWYgKGNoaWxkVmFsICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgaWYgKGNoaWxkVmFsKSB7IGV4dGVuZChyZXQsIGNoaWxkVmFsKTsgfVxuICByZXR1cm4gcmV0XG59O1xuc3RyYXRzLnByb3ZpZGUgPSBtZXJnZURhdGFPckZuO1xuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cbnZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZFxuICAgID8gcGFyZW50VmFsXG4gICAgOiBjaGlsZFZhbFxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRzIChvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoa2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbXBvbmVudE5hbWUgKG5hbWUpIHtcbiAgaWYgKCFuZXcgUmVnRXhwKChcIl5bYS16QS1aXVtcXFxcLVxcXFwuMC05X1wiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiXSokXCIpKS50ZXN0KG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGNvbXBvbmVudCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiLiBDb21wb25lbnQgbmFtZXMgJyArXG4gICAgICAnc2hvdWxkIGNvbmZvcm0gdG8gdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZSBpbiBodG1sNSBzcGVjaWZpY2F0aW9uLidcbiAgICApO1xuICB9XG4gIGlmIChpc0J1aWx0SW5UYWcobmFtZSkgfHwgY29uZmlnLmlzUmVzZXJ2ZWRUYWcobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gb3IgcmVzZXJ2ZWQgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAnaWQ6ICcgKyBuYW1lXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmICghcHJvcHMpIHsgcmV0dXJuIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgaSwgdmFsLCBuYW1lO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhbCA9IHByb3BzW2ldO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWUgPSBjYW1lbGl6ZSh2YWwpO1xuICAgICAgICByZXNbbmFtZV0gPSB7IHR5cGU6IG51bGwgfTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKCdwcm9wcyBtdXN0IGJlIHN0cmluZ3Mgd2hlbiB1c2luZyBhcnJheSBzeW50YXguJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YWwgPSBwcm9wc1trZXldO1xuICAgICAgbmFtZSA9IGNhbWVsaXplKGtleSk7XG4gICAgICByZXNbbmFtZV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyB2YWxcbiAgICAgICAgOiB7IHR5cGU6IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJwcm9wc1xcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShwcm9wcykpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYWxsIGluamVjdGlvbnMgaW50byBPYmplY3QtYmFzZWQgZm9ybWF0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUluamVjdCAob3B0aW9ucywgdm0pIHtcbiAgdmFyIGluamVjdCA9IG9wdGlvbnMuaW5qZWN0O1xuICBpZiAoIWluamVjdCkgeyByZXR1cm4gfVxuICB2YXIgbm9ybWFsaXplZCA9IG9wdGlvbnMuaW5qZWN0ID0ge307XG4gIGlmIChBcnJheS5pc0FycmF5KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgbm9ybWFsaXplZFtpbmplY3RbaV1dID0geyBmcm9tOiBpbmplY3RbaV0gfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChpbmplY3QpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGluamVjdCkge1xuICAgICAgdmFyIHZhbCA9IGluamVjdFtrZXldO1xuICAgICAgbm9ybWFsaXplZFtrZXldID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gZXh0ZW5kKHsgZnJvbToga2V5IH0sIHZhbClcbiAgICAgICAgOiB7IGZyb206IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJpbmplY3RcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUoaW5qZWN0KSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSByYXcgZnVuY3Rpb24gZGlyZWN0aXZlcyBpbnRvIG9iamVjdCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMgKG9wdGlvbnMpIHtcbiAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG4gIGlmIChkaXJzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRpcnMpIHtcbiAgICAgIHZhciBkZWYkJDEgPSBkaXJzW2tleV07XG4gICAgICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaXJzW2tleV0gPSB7IGJpbmQ6IGRlZiQkMSwgdXBkYXRlOiBkZWYkJDEgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0VHlwZSAobmFtZSwgdmFsdWUsIHZtKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIlwiICsgbmFtZSArIFwiXFxcIjogZXhwZWN0ZWQgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHZhbHVlKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIHZtXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVja0NvbXBvbmVudHMoY2hpbGQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNoaWxkID0gY2hpbGQub3B0aW9ucztcbiAgfVxuXG4gIG5vcm1hbGl6ZVByb3BzKGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZUluamVjdChjaGlsZCwgdm0pO1xuICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTtcblxuICAvLyBBcHBseSBleHRlbmRzIGFuZCBtaXhpbnMgb24gdGhlIGNoaWxkIG9wdGlvbnMsXG4gIC8vIGJ1dCBvbmx5IGlmIGl0IGlzIGEgcmF3IG9wdGlvbnMgb2JqZWN0IHRoYXQgaXNuJ3RcbiAgLy8gdGhlIHJlc3VsdCBvZiBhbm90aGVyIG1lcmdlT3B0aW9ucyBjYWxsLlxuICAvLyBPbmx5IG1lcmdlZCBvcHRpb25zIGhhcyB0aGUgX2Jhc2UgcHJvcGVydHkuXG4gIGlmICghY2hpbGQuX2Jhc2UpIHtcbiAgICBpZiAoY2hpbGQuZXh0ZW5kcykge1xuICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQuZXh0ZW5kcywgdm0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgbWVyZ2VGaWVsZChrZXkpO1xuICB9XG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgaWYgKCFoYXNPd24ocGFyZW50LCBrZXkpKSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRmllbGQgKGtleSkge1xuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICBvcHRpb25zW2tleV0gPSBzdHJhdChwYXJlbnRba2V5XSwgY2hpbGRba2V5XSwgdm0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIGFzc2V0LlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJlY2F1c2UgY2hpbGQgaW5zdGFuY2VzIG5lZWQgYWNjZXNzXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVBc3NldCAoXG4gIG9wdGlvbnMsXG4gIHR5cGUsXG4gIGlkLFxuICB3YXJuTWlzc2luZ1xuKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xuICAvLyBjaGVjayBsb2NhbCByZWdpc3RyYXRpb24gdmFyaWF0aW9ucyBmaXJzdFxuICBpZiAoaGFzT3duKGFzc2V0cywgaWQpKSB7IHJldHVybiBhc3NldHNbaWRdIH1cbiAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgY2FtZWxpemVkSWQpKSB7IHJldHVybiBhc3NldHNbY2FtZWxpemVkSWRdIH1cbiAgdmFyIFBhc2NhbENhc2VJZCA9IGNhcGl0YWxpemUoY2FtZWxpemVkSWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgUGFzY2FsQ2FzZUlkKSkgeyByZXR1cm4gYXNzZXRzW1Bhc2NhbENhc2VJZF0gfVxuICAvLyBmYWxsYmFjayB0byBwcm90b3R5cGUgY2hhaW5cbiAgdmFyIHJlcyA9IGFzc2V0c1tpZF0gfHwgYXNzZXRzW2NhbWVsaXplZElkXSB8fCBhc3NldHNbUGFzY2FsQ2FzZUlkXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xuICAgIHdhcm4oXG4gICAgICAnRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUuc2xpY2UoMCwgLTEpICsgJzogJyArIGlkLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcCAoXG4gIGtleSxcbiAgcHJvcE9wdGlvbnMsXG4gIHByb3BzRGF0YSxcbiAgdm1cbikge1xuICB2YXIgcHJvcCA9IHByb3BPcHRpb25zW2tleV07XG4gIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgdmFyIHZhbHVlID0gcHJvcHNEYXRhW2tleV07XG4gIC8vIGJvb2xlYW4gY2FzdGluZ1xuICB2YXIgYm9vbGVhbkluZGV4ID0gZ2V0VHlwZUluZGV4KEJvb2xlYW4sIHByb3AudHlwZSk7XG4gIGlmIChib29sZWFuSW5kZXggPiAtMSkge1xuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgLy8gb25seSBjYXN0IGVtcHR5IHN0cmluZyAvIHNhbWUgbmFtZSB0byBib29sZWFuIGlmXG4gICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIHZhciBzdHJpbmdJbmRleCA9IGdldFR5cGVJbmRleChTdHJpbmcsIHByb3AudHlwZSk7XG4gICAgICBpZiAoc3RyaW5nSW5kZXggPCAwIHx8IGJvb2xlYW5JbmRleCA8IHN0cmluZ0luZGV4KSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgZGVmYXVsdCB2YWx1ZVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KTtcbiAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgLy8gbWFrZSBzdXJlIHRvIG9ic2VydmUgaXQuXG4gICAgdmFyIHByZXZTaG91bGRPYnNlcnZlID0gc2hvdWxkT2JzZXJ2ZTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgb2JzZXJ2ZSh2YWx1ZSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHByZXZTaG91bGRPYnNlcnZlKTtcbiAgfVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIC8vIHNraXAgdmFsaWRhdGlvbiBmb3Igd2VleCByZWN5Y2xlLWxpc3QgY2hpbGQgY29tcG9uZW50IHByb3BzXG4gICAgIShmYWxzZSlcbiAgKSB7XG4gICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wRGVmYXVsdFZhbHVlICh2bSwgcHJvcCwga2V5KSB7XG4gIC8vIG5vIGRlZmF1bHQsIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKCFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICB2YXIgZGVmID0gcHJvcC5kZWZhdWx0O1xuICAvLyB3YXJuIGFnYWluc3Qgbm9uLWZhY3RvcnkgZGVmYXVsdHMgZm9yIE9iamVjdCAmIEFycmF5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzT2JqZWN0KGRlZikpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBrZXkgKyAnXCI6ICcgK1xuICAgICAgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgK1xuICAgICAgJ3RvIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZS4nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHRoZSByYXcgcHJvcCB2YWx1ZSB3YXMgYWxzbyB1bmRlZmluZWQgZnJvbSBwcmV2aW91cyByZW5kZXIsXG4gIC8vIHJldHVybiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdhdGNoZXIgdHJpZ2dlclxuICBpZiAodm0gJiYgdm0uJG9wdGlvbnMucHJvcHNEYXRhICYmXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhW2tleV0gPT09IHVuZGVmaW5lZCAmJlxuICAgIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgcmV0dXJuIHZtLl9wcm9wc1trZXldXG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcbiAgICA/IGRlZi5jYWxsKHZtKVxuICAgIDogZGVmXG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiBhc3NlcnRQcm9wIChcbiAgcHJvcCxcbiAgbmFtZSxcbiAgdmFsdWUsXG4gIHZtLFxuICBhYnNlbnRcbikge1xuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICB3YXJuKFxuICAgICAgJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogXCInICsgbmFtZSArICdcIicsXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdHlwZSA9IHByb3AudHlwZTtcbiAgdmFyIHZhbGlkID0gIXR5cGUgfHwgdHlwZSA9PT0gdHJ1ZTtcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcbiAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChhc3NlcnRlZFR5cGUuZXhwZWN0ZWRUeXBlIHx8ICcnKTtcbiAgICAgIHZhbGlkID0gYXNzZXJ0ZWRUeXBlLnZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICB3YXJuKFxuICAgICAgZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdmFsaWRhdG9yID0gcHJvcC52YWxpZGF0b3I7XG4gIGlmICh2YWxpZGF0b3IpIHtcbiAgICBpZiAoIXZhbGlkYXRvcih2YWx1ZSkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBzaW1wbGVDaGVja1JFID0gL14oU3RyaW5nfE51bWJlcnxCb29sZWFufEZ1bmN0aW9ufFN5bWJvbCkkLztcblxuZnVuY3Rpb24gYXNzZXJ0VHlwZSAodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHZhbGlkO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcbiAgaWYgKHNpbXBsZUNoZWNrUkUudGVzdChleHBlY3RlZFR5cGUpKSB7XG4gICAgdmFyIHQgPSB0eXBlb2YgdmFsdWU7XG4gICAgdmFsaWQgPSB0ID09PSBleHBlY3RlZFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBmb3IgcHJpbWl0aXZlIHdyYXBwZXIgb2JqZWN0c1xuICAgIGlmICghdmFsaWQgJiYgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgdmFsaWQgPSBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdBcnJheScpIHtcbiAgICB2YWxpZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWQ6IHZhbGlkLFxuICAgIGV4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlXG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgZnVuY3Rpb24gc3RyaW5nIG5hbWUgdG8gY2hlY2sgYnVpbHQtaW4gdHlwZXMsXG4gKiBiZWNhdXNlIGEgc2ltcGxlIGVxdWFsaXR5IGNoZWNrIHdpbGwgZmFpbCB3aGVuIHJ1bm5pbmdcbiAqIGFjcm9zcyBkaWZmZXJlbnQgdm1zIC8gaWZyYW1lcy5cbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZSAoZm4pIHtcbiAgdmFyIG1hdGNoID0gZm4gJiYgZm4udG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJ1xufVxuXG5mdW5jdGlvbiBpc1NhbWVUeXBlIChhLCBiKSB7XG4gIHJldHVybiBnZXRUeXBlKGEpID09PSBnZXRUeXBlKGIpXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVJbmRleCAodHlwZSwgZXhwZWN0ZWRUeXBlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRUeXBlcykpIHtcbiAgICByZXR1cm4gaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzLCB0eXBlKSA/IDAgOiAtMVxuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZFR5cGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlc1tpXSwgdHlwZSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UgKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSB7XG4gIHZhciBtZXNzYWdlID0gXCJJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIgK1xuICAgIFwiIEV4cGVjdGVkIFwiICsgKGV4cGVjdGVkVHlwZXMubWFwKGNhcGl0YWxpemUpLmpvaW4oJywgJykpO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlc1swXTtcbiAgdmFyIHJlY2VpdmVkVHlwZSA9IHRvUmF3VHlwZSh2YWx1ZSk7XG4gIHZhciBleHBlY3RlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKTtcbiAgdmFyIHJlY2VpdmVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCByZWNlaXZlZFR5cGUpO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgZXhwZWN0ZWQgdmFsdWVcbiAgaWYgKGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICBpc0V4cGxpY2FibGUoZXhwZWN0ZWRUeXBlKSAmJlxuICAgICAgIWlzQm9vbGVhbihleHBlY3RlZFR5cGUsIHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgXCIgKyBleHBlY3RlZFZhbHVlO1xuICB9XG4gIG1lc3NhZ2UgKz0gXCIsIGdvdCBcIiArIHJlY2VpdmVkVHlwZSArIFwiIFwiO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgcmVjZWl2ZWQgdmFsdWVcbiAgaWYgKGlzRXhwbGljYWJsZShyZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBcIndpdGggdmFsdWUgXCIgKyByZWNlaXZlZFZhbHVlICsgXCIuXCI7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuZnVuY3Rpb24gc3R5bGVWYWx1ZSAodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09ICdTdHJpbmcnKSB7XG4gICAgcmV0dXJuIChcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ051bWJlcicpIHtcbiAgICByZXR1cm4gKFwiXCIgKyAoTnVtYmVyKHZhbHVlKSkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcIlwiICsgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFeHBsaWNhYmxlICh2YWx1ZSkge1xuICB2YXIgZXhwbGljaXRUeXBlcyA9IFsnc3RyaW5nJywgJ251bWJlcicsICdib29sZWFuJ107XG4gIHJldHVybiBleHBsaWNpdFR5cGVzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGVsZW07IH0pXG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS50b0xvd2VyQ2FzZSgpID09PSAnYm9vbGVhbic7IH0pXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBoYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICAvLyBEZWFjdGl2YXRlIGRlcHMgdHJhY2tpbmcgd2hpbGUgcHJvY2Vzc2luZyBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHBvc3NpYmxlIGluZmluaXRlIHJlbmRlcmluZy5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVleC9pc3N1ZXMvMTUwNVxuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgaWYgKHZtKSB7XG4gICAgICB2YXIgY3VyID0gdm07XG4gICAgICB3aGlsZSAoKGN1ciA9IGN1ci4kcGFyZW50KSkge1xuICAgICAgICB2YXIgaG9va3MgPSBjdXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtcbiAgICAgICAgaWYgKGhvb2tzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSBob29rc1tpXS5jYWxsKGN1ciwgZXJyLCB2bSwgaW5mbykgPT09IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoY2FwdHVyZSkgeyByZXR1cm4gfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVFcnJvcihlLCBjdXIsICdlcnJvckNhcHR1cmVkIGhvb2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2xvYmFsSGFuZGxlRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcgKFxuICBoYW5kbGVyLFxuICBjb250ZXh0LFxuICBhcmdzLFxuICB2bSxcbiAgaW5mb1xuKSB7XG4gIHZhciByZXM7XG4gIHRyeSB7XG4gICAgcmVzID0gYXJncyA/IGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncykgOiBoYW5kbGVyLmNhbGwoY29udGV4dCk7XG4gICAgaWYgKHJlcyAmJiAhcmVzLl9pc1Z1ZSAmJiBpc1Byb21pc2UocmVzKSAmJiAhcmVzLl9oYW5kbGVkKSB7XG4gICAgICByZXMuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvICsgXCIgKFByb21pc2UvYXN5bmMpXCIpOyB9KTtcbiAgICAgIC8vIGlzc3VlICM5NTExXG4gICAgICAvLyBhdm9pZCBjYXRjaCB0cmlnZ2VyaW5nIG11bHRpcGxlIHRpbWVzIHdoZW4gbmVzdGVkIGNhbGxzXG4gICAgICByZXMuX2hhbmRsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdsb2JhbEhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChjb25maWcuZXJyb3JIYW5kbGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZXJyLCB2bSwgaW5mbylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiB0aGUgdXNlciBpbnRlbnRpb25hbGx5IHRocm93cyB0aGUgb3JpZ2luYWwgZXJyb3IgaW4gdGhlIGhhbmRsZXIsXG4gICAgICAvLyBkbyBub3QgbG9nIGl0IHR3aWNlXG4gICAgICBpZiAoZSAhPT0gZXJyKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUsIG51bGwsICdjb25maWcuZXJyb3JIYW5kbGVyJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvZ0Vycm9yKGVyciwgdm0sIGluZm8pO1xufVxuXG5mdW5jdGlvbiBsb2dFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoKGluQnJvd3NlciB8fCBpbldlZXgpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGlzVXNpbmdNaWNyb1Rhc2sgPSBmYWxzZTtcblxudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIHBlbmRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MgKCkge1xuICBwZW5kaW5nID0gZmFsc2U7XG4gIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gIGNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvcGllc1tpXSgpO1xuICB9XG59XG5cbi8vIEhlcmUgd2UgaGF2ZSBhc3luYyBkZWZlcnJpbmcgd3JhcHBlcnMgdXNpbmcgbWljcm90YXNrcy5cbi8vIEluIDIuNSB3ZSB1c2VkIChtYWNybykgdGFza3MgKGluIGNvbWJpbmF0aW9uIHdpdGggbWljcm90YXNrcykuXG4vLyBIb3dldmVyLCBpdCBoYXMgc3VidGxlIHByb2JsZW1zIHdoZW4gc3RhdGUgaXMgY2hhbmdlZCByaWdodCBiZWZvcmUgcmVwYWludFxuLy8gKGUuZy4gIzY4MTMsIG91dC1pbiB0cmFuc2l0aW9ucykuXG4vLyBBbHNvLCB1c2luZyAobWFjcm8pIHRhc2tzIGluIGV2ZW50IGhhbmRsZXIgd291bGQgY2F1c2Ugc29tZSB3ZWlyZCBiZWhhdmlvcnNcbi8vIHRoYXQgY2Fubm90IGJlIGNpcmN1bXZlbnRlZCAoZS5nLiAjNzEwOSwgIzcxNTMsICM3NTQ2LCAjNzgzNCwgIzgxMDkpLlxuLy8gU28gd2Ugbm93IHVzZSBtaWNyb3Rhc2tzIGV2ZXJ5d2hlcmUsIGFnYWluLlxuLy8gQSBtYWpvciBkcmF3YmFjayBvZiB0aGlzIHRyYWRlb2ZmIGlzIHRoYXQgdGhlcmUgYXJlIHNvbWUgc2NlbmFyaW9zXG4vLyB3aGVyZSBtaWNyb3Rhc2tzIGhhdmUgdG9vIGhpZ2ggYSBwcmlvcml0eSBhbmQgZmlyZSBpbiBiZXR3ZWVuIHN1cHBvc2VkbHlcbi8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCwgd2hpY2ggaGF2ZSB3b3JrYXJvdW5kcylcbi8vIG9yIGV2ZW4gYmV0d2VlbiBidWJibGluZyBvZiB0aGUgc2FtZSBldmVudCAoIzY1NjYpLlxudmFyIHRpbWVyRnVuYztcblxuLy8gVGhlIG5leHRUaWNrIGJlaGF2aW9yIGxldmVyYWdlcyB0aGUgbWljcm90YXNrIHF1ZXVlLCB3aGljaCBjYW4gYmUgYWNjZXNzZWRcbi8vIHZpYSBlaXRoZXIgbmF0aXZlIFByb21pc2UudGhlbiBvciBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXV0YXRpb25PYnNlcnZlciBoYXMgd2lkZXIgc3VwcG9ydCwgaG93ZXZlciBpdCBpcyBzZXJpb3VzbHkgYnVnZ2VkIGluXG4vLyBVSVdlYlZpZXcgaW4gaU9TID49IDkuMy4zIHdoZW4gdHJpZ2dlcmVkIGluIHRvdWNoIGV2ZW50IGhhbmRsZXJzLiBJdFxuLy8gY29tcGxldGVseSBzdG9wcyB3b3JraW5nIGFmdGVyIHRyaWdnZXJpbmcgYSBmZXcgdGltZXMuLi4gc28sIGlmIG5hdGl2ZVxuLy8gUHJvbWlzZSBpcyBhdmFpbGFibGUsIHdlIHdpbGwgdXNlIGl0OlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQsICRmbG93LWRpc2FibGUtbGluZSAqL1xuaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm9taXNlKSkge1xuICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcC50aGVuKGZsdXNoQ2FsbGJhY2tzKTtcbiAgICAvLyBJbiBwcm9ibGVtYXRpYyBVSVdlYlZpZXdzLCBQcm9taXNlLnRoZW4gZG9lc24ndCBjb21wbGV0ZWx5IGJyZWFrLCBidXRcbiAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcbiAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYnV0IHRoZSBxdWV1ZSBpc24ndCBiZWluZyBmbHVzaGVkLCB1bnRpbCB0aGUgYnJvd3NlclxuICAgIC8vIG5lZWRzIHRvIGRvIHNvbWUgb3RoZXIgd29yaywgZS5nLiBoYW5kbGUgYSB0aW1lci4gVGhlcmVmb3JlIHdlIGNhblxuICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxuICAgIGlmIChpc0lPUykgeyBzZXRUaW1lb3V0KG5vb3ApOyB9XG4gIH07XG4gIGlzVXNpbmdNaWNyb1Rhc2sgPSB0cnVlO1xufSBlbHNlIGlmICghaXNJRSAmJiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuICBpc05hdGl2ZShNdXRhdGlvbk9ic2VydmVyKSB8fFxuICAvLyBQaGFudG9tSlMgYW5kIGlPUyA3LnhcbiAgTXV0YXRpb25PYnNlcnZlci50b1N0cmluZygpID09PSAnW29iamVjdCBNdXRhdGlvbk9ic2VydmVyQ29uc3RydWN0b3JdJ1xuKSkge1xuICAvLyBVc2UgTXV0YXRpb25PYnNlcnZlciB3aGVyZSBuYXRpdmUgUHJvbWlzZSBpcyBub3QgYXZhaWxhYmxlLFxuICAvLyBlLmcuIFBoYW50b21KUywgaU9TNywgQW5kcm9pZCA0LjRcbiAgLy8gKCM2NDY2IE11dGF0aW9uT2JzZXJ2ZXIgaXMgdW5yZWxpYWJsZSBpbiBJRTExKVxuICB2YXIgY291bnRlciA9IDE7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZsdXNoQ2FsbGJhY2tzKTtcbiAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGNvdW50ZXIpKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZXh0Tm9kZSwge1xuICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgfSk7XG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb3VudGVyID0gKGNvdW50ZXIgKyAxKSAlIDI7XG4gICAgdGV4dE5vZGUuZGF0YSA9IFN0cmluZyhjb3VudGVyKTtcbiAgfTtcbiAgaXNVc2luZ01pY3JvVGFzayA9IHRydWU7XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKHNldEltbWVkaWF0ZSkpIHtcbiAgLy8gRmFsbGJhY2sgdG8gc2V0SW1tZWRpYXRlLlxuICAvLyBUZWNoaW5pY2FsbHkgaXQgbGV2ZXJhZ2VzIHRoZSAobWFjcm8pIHRhc2sgcXVldWUsXG4gIC8vIGJ1dCBpdCBpcyBzdGlsbCBhIGJldHRlciBjaG9pY2UgdGhhbiBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW1tZWRpYXRlKGZsdXNoQ2FsbGJhY2tzKTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgdmFyIF9yZXNvbHZlO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKGN0eCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIGN0eCwgJ25leHRUaWNrJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUoY3R4KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICB0aW1lckZ1bmMoKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxudmFyIGluaXRQcm94eTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGFsbG93ZWRHbG9iYWxzID0gbWFrZU1hcChcbiAgICAnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICtcbiAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgJ01hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCwnICtcbiAgICAncmVxdWlyZScgLy8gZm9yIFdlYnBhY2svQnJvd3NlcmlmeVxuICApO1xuXG4gIHZhciB3YXJuTm9uUHJlc2VudCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IG9yIG1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgb24gdGhlIGluc3RhbmNlIGJ1dCBcIiArXG4gICAgICAncmVmZXJlbmNlZCBkdXJpbmcgcmVuZGVyLiBNYWtlIHN1cmUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCAnICtcbiAgICAgICdlaXRoZXIgaW4gdGhlIGRhdGEgb3B0aW9uLCBvciBmb3IgY2xhc3MtYmFzZWQgY29tcG9uZW50cywgYnkgJyArXG4gICAgICAnaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eS4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9yZWFjdGl2aXR5Lmh0bWwjRGVjbGFyaW5nLVJlYWN0aXZlLVByb3BlcnRpZXMuJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHdhcm5SZXNlcnZlZFByZWZpeCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBtdXN0IGJlIGFjY2Vzc2VkIHdpdGggXFxcIiRkYXRhLlwiICsga2V5ICsgXCJcXFwiIGJlY2F1c2UgXCIgK1xuICAgICAgJ3Byb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBcIiRcIiBvciBcIl9cIiBhcmUgbm90IHByb3hpZWQgaW4gdGhlIFZ1ZSBpbnN0YW5jZSB0byAnICtcbiAgICAgICdwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIFZ1ZSBpbnRlcm5hbHMnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2FwaS8jZGF0YScsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciBoYXNQcm94eSA9XG4gICAgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm94eSk7XG5cbiAgaWYgKGhhc1Byb3h5KSB7XG4gICAgdmFyIGlzQnVpbHRJbk1vZGlmaWVyID0gbWFrZU1hcCgnc3RvcCxwcmV2ZW50LHNlbGYsY3RybCxzaGlmdCxhbHQsbWV0YSxleGFjdCcpO1xuICAgIGNvbmZpZy5rZXlDb2RlcyA9IG5ldyBQcm94eShjb25maWcua2V5Q29kZXMsIHtcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzQnVpbHRJbk1vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICB3YXJuKChcIkF2b2lkIG92ZXJ3cml0aW5nIGJ1aWx0LWluIG1vZGlmaWVyIGluIGNvbmZpZy5rZXlDb2RlczogLlwiICsga2V5KSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFzSGFuZGxlciA9IHtcbiAgICBoYXM6IGZ1bmN0aW9uIGhhcyAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHZhciBoYXMgPSBrZXkgaW4gdGFyZ2V0O1xuICAgICAgdmFyIGlzQWxsb3dlZCA9IGFsbG93ZWRHbG9iYWxzKGtleSkgfHxcbiAgICAgICAgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleS5jaGFyQXQoMCkgPT09ICdfJyAmJiAhKGtleSBpbiB0YXJnZXQuJGRhdGEpKTtcbiAgICAgIGlmICghaGFzICYmICFpc0FsbG93ZWQpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzIHx8ICFpc0FsbG93ZWRcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldEhhbmRsZXIgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRba2V5XVxuICAgIH1cbiAgfTtcblxuICBpbml0UHJveHkgPSBmdW5jdGlvbiBpbml0UHJveHkgKHZtKSB7XG4gICAgaWYgKGhhc1Byb3h5KSB7XG4gICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJveHkgaGFuZGxlciB0byB1c2VcbiAgICAgIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gICAgICB2YXIgaGFuZGxlcnMgPSBvcHRpb25zLnJlbmRlciAmJiBvcHRpb25zLnJlbmRlci5fd2l0aFN0cmlwcGVkXG4gICAgICAgID8gZ2V0SGFuZGxlclxuICAgICAgICA6IGhhc0hhbmRsZXI7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSBuZXcgUHJveHkodm0sIGhhbmRsZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHNlZW5PYmplY3RzID0gbmV3IF9TZXQoKTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwpIHtcbiAgX3RyYXZlcnNlKHZhbCwgc2Vlbk9iamVjdHMpO1xuICBzZWVuT2JqZWN0cy5jbGVhcigpO1xufVxuXG5mdW5jdGlvbiBfdHJhdmVyc2UgKHZhbCwgc2Vlbikge1xuICB2YXIgaSwga2V5cztcbiAgdmFyIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKTtcbiAgaWYgKCghaXNBICYmICFpc09iamVjdCh2YWwpKSB8fCBPYmplY3QuaXNGcm96ZW4odmFsKSB8fCB2YWwgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2YWwuX19vYl9fKSB7XG4gICAgdmFyIGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWQ7XG4gICAgaWYgKHNlZW4uaGFzKGRlcElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNlZW4uYWRkKGRlcElkKTtcbiAgfVxuICBpZiAoaXNBKSB7XG4gICAgaSA9IHZhbC5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2ldLCBzZWVuKTsgfVxuICB9IGVsc2Uge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxba2V5c1tpXV0sIHNlZW4pOyB9XG4gIH1cbn1cblxudmFyIG1hcms7XG52YXIgbWVhc3VyZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKFxuICAgIHBlcmYgJiZcbiAgICBwZXJmLm1hcmsgJiZcbiAgICBwZXJmLm1lYXN1cmUgJiZcbiAgICBwZXJmLmNsZWFyTWFya3MgJiZcbiAgICBwZXJmLmNsZWFyTWVhc3VyZXNcbiAgKSB7XG4gICAgbWFyayA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHBlcmYubWFyayh0YWcpOyB9O1xuICAgIG1lYXN1cmUgPSBmdW5jdGlvbiAobmFtZSwgc3RhcnRUYWcsIGVuZFRhZykge1xuICAgICAgcGVyZi5tZWFzdXJlKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhlbmRUYWcpO1xuICAgICAgLy8gcGVyZi5jbGVhck1lYXN1cmVzKG5hbWUpXG4gICAgfTtcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIG5vcm1hbGl6ZUV2ZW50ID0gY2FjaGVkKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBwYXNzaXZlID0gbmFtZS5jaGFyQXQoMCkgPT09ICcmJztcbiAgbmFtZSA9IHBhc3NpdmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIG9uY2UkJDEgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJ34nOyAvLyBQcmVmaXhlZCBsYXN0LCBjaGVja2VkIGZpcnN0XG4gIG5hbWUgPSBvbmNlJCQxID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBjYXB0dXJlID0gbmFtZS5jaGFyQXQoMCkgPT09ICchJztcbiAgbmFtZSA9IGNhcHR1cmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIG9uY2U6IG9uY2UkJDEsXG4gICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICBwYXNzaXZlOiBwYXNzaXZlXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVGbkludm9rZXIgKGZucywgdm0pIHtcbiAgZnVuY3Rpb24gaW52b2tlciAoKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZucyA9IGludm9rZXIuZm5zO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZucykpIHtcbiAgICAgIHZhciBjbG9uZWQgPSBmbnMuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNsb25lZFtpXSwgbnVsbCwgYXJndW1lbnRzJDEsIHZtLCBcInYtb24gaGFuZGxlclwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmV0dXJuIGhhbmRsZXIgcmV0dXJuIHZhbHVlIGZvciBzaW5nbGUgaGFuZGxlcnNcbiAgICAgIHJldHVybiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhmbnMsIG51bGwsIGFyZ3VtZW50cywgdm0sIFwidi1vbiBoYW5kbGVyXCIpXG4gICAgfVxuICB9XG4gIGludm9rZXIuZm5zID0gZm5zO1xuICByZXR1cm4gaW52b2tlclxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0ZW5lcnMgKFxuICBvbixcbiAgb2xkT24sXG4gIGFkZCxcbiAgcmVtb3ZlJCQxLFxuICBjcmVhdGVPbmNlSGFuZGxlcixcbiAgdm1cbikge1xuICB2YXIgbmFtZSwgZGVmJCQxLCBjdXIsIG9sZCwgZXZlbnQ7XG4gIGZvciAobmFtZSBpbiBvbikge1xuICAgIGRlZiQkMSA9IGN1ciA9IG9uW25hbWVdO1xuICAgIG9sZCA9IG9sZE9uW25hbWVdO1xuICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgaWYgKGlzVW5kZWYoY3VyKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkludmFsaWQgaGFuZGxlciBmb3IgZXZlbnQgXFxcIlwiICsgKGV2ZW50Lm5hbWUpICsgXCJcXFwiOiBnb3QgXCIgKyBTdHJpbmcoY3VyKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZCkpIHtcbiAgICAgIGlmIChpc1VuZGVmKGN1ci5mbnMpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlRm5JbnZva2VyKGN1ciwgdm0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzVHJ1ZShldmVudC5vbmNlKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZU9uY2VIYW5kbGVyKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSk7XG4gICAgICB9XG4gICAgICBhZGQoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlLCBldmVudC5wYXNzaXZlLCBldmVudC5wYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAoY3VyICE9PSBvbGQpIHtcbiAgICAgIG9sZC5mbnMgPSBjdXI7XG4gICAgICBvbltuYW1lXSA9IG9sZDtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG9sZE9uKSB7XG4gICAgaWYgKGlzVW5kZWYob25bbmFtZV0pKSB7XG4gICAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgICAgcmVtb3ZlJCQxKGV2ZW50Lm5hbWUsIG9sZE9uW25hbWVdLCBldmVudC5jYXB0dXJlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG1lcmdlVk5vZGVIb29rIChkZWYsIGhvb2tLZXksIGhvb2spIHtcbiAgaWYgKGRlZiBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgZGVmID0gZGVmLmRhdGEuaG9vayB8fCAoZGVmLmRhdGEuaG9vayA9IHt9KTtcbiAgfVxuICB2YXIgaW52b2tlcjtcbiAgdmFyIG9sZEhvb2sgPSBkZWZbaG9va0tleV07XG5cbiAgZnVuY3Rpb24gd3JhcHBlZEhvb2sgKCkge1xuICAgIGhvb2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBpbXBvcnRhbnQ6IHJlbW92ZSBtZXJnZWQgaG9vayB0byBlbnN1cmUgaXQncyBjYWxsZWQgb25seSBvbmNlXG4gICAgLy8gYW5kIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICByZW1vdmUoaW52b2tlci5mbnMsIHdyYXBwZWRIb29rKTtcbiAgfVxuXG4gIGlmIChpc1VuZGVmKG9sZEhvb2spKSB7XG4gICAgLy8gbm8gZXhpc3RpbmcgaG9va1xuICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW3dyYXBwZWRIb29rXSk7XG4gIH0gZWxzZSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzRGVmKG9sZEhvb2suZm5zKSAmJiBpc1RydWUob2xkSG9vay5tZXJnZWQpKSB7XG4gICAgICAvLyBhbHJlYWR5IGEgbWVyZ2VkIGludm9rZXJcbiAgICAgIGludm9rZXIgPSBvbGRIb29rO1xuICAgICAgaW52b2tlci5mbnMucHVzaCh3cmFwcGVkSG9vayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGV4aXN0aW5nIHBsYWluIGhvb2tcbiAgICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW29sZEhvb2ssIHdyYXBwZWRIb29rXSk7XG4gICAgfVxuICB9XG5cbiAgaW52b2tlci5tZXJnZWQgPSB0cnVlO1xuICBkZWZbaG9va0tleV0gPSBpbnZva2VyO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YSAoXG4gIGRhdGEsXG4gIEN0b3IsXG4gIHRhZ1xuKSB7XG4gIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxuICAvLyB2YWxpZGF0aW9uIGFuZCBkZWZhdWx0IHZhbHVlcyBhcmUgaGFuZGxlZCBpbiB0aGUgY2hpbGRcbiAgLy8gY29tcG9uZW50IGl0c2VsZi5cbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xuICBpZiAoaXNVbmRlZihwcm9wT3B0aW9ucykpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gIGlmIChpc0RlZihhdHRycykgfHwgaXNEZWYocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIga2V5SW5Mb3dlckNhc2UgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSAhPT0ga2V5SW5Mb3dlckNhc2UgJiZcbiAgICAgICAgICBhdHRycyAmJiBoYXNPd24oYXR0cnMsIGtleUluTG93ZXJDYXNlKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aXAoXG4gICAgICAgICAgICBcIlByb3AgXFxcIlwiICsga2V5SW5Mb3dlckNhc2UgKyBcIlxcXCIgaXMgcGFzc2VkIHRvIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh0YWcgfHwgQ3RvcikpICsgXCIsIGJ1dCB0aGUgZGVjbGFyZWQgcHJvcCBuYW1lIGlzXCIgK1xuICAgICAgICAgICAgXCIgXFxcIlwiICsga2V5ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIGNhbWVsQ2FzZWQgXCIgK1xuICAgICAgICAgICAgXCJwcm9wcyBuZWVkIHRvIHVzZSB0aGVpciBrZWJhYi1jYXNlIGVxdWl2YWxlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIFwiICtcbiAgICAgICAgICAgIFwidGVtcGxhdGVzLiBZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyBhbHRLZXkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICBjaGVja1Byb3AocmVzLCBhdHRycywga2V5LCBhbHRLZXksIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBjaGVja1Byb3AgKFxuICByZXMsXG4gIGhhc2gsXG4gIGtleSxcbiAgYWx0S2V5LFxuICBwcmVzZXJ2ZVxuKSB7XG4gIGlmIChpc0RlZihoYXNoKSkge1xuICAgIGlmIChoYXNPd24oaGFzaCwga2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2tleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoaGFzT3duKGhhc2gsIGFsdEtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFthbHRLZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qICAqL1xuXG4vLyBUaGUgdGVtcGxhdGUgY29tcGlsZXIgYXR0ZW1wdHMgdG8gbWluaW1pemUgdGhlIG5lZWQgZm9yIG5vcm1hbGl6YXRpb24gYnlcbi8vIHN0YXRpY2FsbHkgYW5hbHl6aW5nIHRoZSB0ZW1wbGF0ZSBhdCBjb21waWxlIHRpbWUuXG4vL1xuLy8gRm9yIHBsYWluIEhUTUwgbWFya3VwLCBub3JtYWxpemF0aW9uIGNhbiBiZSBjb21wbGV0ZWx5IHNraXBwZWQgYmVjYXVzZSB0aGVcbi8vIGdlbmVyYXRlZCByZW5kZXIgZnVuY3Rpb24gaXMgZ3VhcmFudGVlZCB0byByZXR1cm4gQXJyYXk8Vk5vZGU+LiBUaGVyZSBhcmVcbi8vIHR3byBjYXNlcyB3aGVyZSBleHRyYSBub3JtYWxpemF0aW9uIGlzIG5lZWRlZDpcblxuLy8gMS4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29tcG9uZW50cyAtIGJlY2F1c2UgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuLy8gbWF5IHJldHVybiBhbiBBcnJheSBpbnN0ZWFkIG9mIGEgc2luZ2xlIHJvb3QuIEluIHRoaXMgY2FzZSwganVzdCBhIHNpbXBsZVxuLy8gbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQgLSBpZiBhbnkgY2hpbGQgaXMgYW4gQXJyYXksIHdlIGZsYXR0ZW4gdGhlIHdob2xlXG4vLyB0aGluZyB3aXRoIEFycmF5LnByb3RvdHlwZS5jb25jYXQuIEl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgb25seSAxLWxldmVsIGRlZXBcbi8vIGJlY2F1c2UgZnVuY3Rpb25hbCBjb21wb25lbnRzIGFscmVhZHkgbm9ybWFsaXplIHRoZWlyIG93biBjaGlsZHJlbi5cbmZ1bmN0aW9uIHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY2hpbGRyZW4pXG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlblxufVxuXG4vLyAyLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb25zdHJ1Y3RzIHRoYXQgYWx3YXlzIGdlbmVyYXRlZCBuZXN0ZWQgQXJyYXlzLFxuLy8gZS5nLiA8dGVtcGxhdGU+LCA8c2xvdD4sIHYtZm9yLCBvciB3aGVuIHRoZSBjaGlsZHJlbiBpcyBwcm92aWRlZCBieSB1c2VyXG4vLyB3aXRoIGhhbmQtd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zIC8gSlNYLiBJbiBzdWNoIGNhc2VzIGEgZnVsbCBub3JtYWxpemF0aW9uXG4vLyBpcyBuZWVkZWQgdG8gY2F0ZXIgdG8gYWxsIHBvc3NpYmxlIHR5cGVzIG9mIGNoaWxkcmVuIHZhbHVlcy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICByZXR1cm4gaXNQcmltaXRpdmUoY2hpbGRyZW4pXG4gICAgPyBbY3JlYXRlVGV4dFZOb2RlKGNoaWxkcmVuKV1cbiAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICA/IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgICA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBpc1RleHROb2RlIChub2RlKSB7XG4gIHJldHVybiBpc0RlZihub2RlKSAmJiBpc0RlZihub2RlLnRleHQpICYmIGlzRmFsc2Uobm9kZS5pc0NvbW1lbnQpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4gKGNoaWxkcmVuLCBuZXN0ZWRJbmRleCkge1xuICB2YXIgcmVzID0gW107XG4gIHZhciBpLCBjLCBsYXN0SW5kZXgsIGxhc3Q7XG4gIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBjaGlsZHJlbltpXTtcbiAgICBpZiAoaXNVbmRlZihjKSB8fCB0eXBlb2YgYyA9PT0gJ2Jvb2xlYW4nKSB7IGNvbnRpbnVlIH1cbiAgICBsYXN0SW5kZXggPSByZXMubGVuZ3RoIC0gMTtcbiAgICBsYXN0ID0gcmVzW2xhc3RJbmRleF07XG4gICAgLy8gIG5lc3RlZFxuICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICBpZiAoYy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGMgPSBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsICgobmVzdGVkSW5kZXggfHwgJycpICsgXCJfXCIgKyBpKSk7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgaWYgKGlzVGV4dE5vZGUoY1swXSkgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIChjWzBdKS50ZXh0KTtcbiAgICAgICAgICBjLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBjKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKGMpKSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBTU1IgaHlkcmF0aW9uIGJlY2F1c2UgdGV4dCBub2RlcyBhcmVcbiAgICAgICAgLy8gZXNzZW50aWFsbHkgbWVyZ2VkIHdoZW4gcmVuZGVyZWQgdG8gSFRNTCBzdHJpbmdzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMpO1xuICAgICAgfSBlbHNlIGlmIChjICE9PSAnJykge1xuICAgICAgICAvLyBjb252ZXJ0IHByaW1pdGl2ZSB0byB2bm9kZVxuICAgICAgICByZXMucHVzaChjcmVhdGVUZXh0Vk5vZGUoYykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShjKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYy50ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlZmF1bHQga2V5IGZvciBuZXN0ZWQgYXJyYXkgY2hpbGRyZW4gKGxpa2VseSBnZW5lcmF0ZWQgYnkgdi1mb3IpXG4gICAgICAgIGlmIChpc1RydWUoY2hpbGRyZW4uX2lzVkxpc3QpICYmXG4gICAgICAgICAgaXNEZWYoYy50YWcpICYmXG4gICAgICAgICAgaXNVbmRlZihjLmtleSkgJiZcbiAgICAgICAgICBpc0RlZihuZXN0ZWRJbmRleCkpIHtcbiAgICAgICAgICBjLmtleSA9IFwiX192bGlzdFwiICsgbmVzdGVkSW5kZXggKyBcIl9cIiArIGkgKyBcIl9fXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRQcm92aWRlICh2bSkge1xuICB2YXIgcHJvdmlkZSA9IHZtLiRvcHRpb25zLnByb3ZpZGU7XG4gIGlmIChwcm92aWRlKSB7XG4gICAgdm0uX3Byb3ZpZGVkID0gdHlwZW9mIHByb3ZpZGUgPT09ICdmdW5jdGlvbidcbiAgICAgID8gcHJvdmlkZS5jYWxsKHZtKVxuICAgICAgOiBwcm92aWRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRJbmplY3Rpb25zICh2bSkge1xuICB2YXIgcmVzdWx0ID0gcmVzb2x2ZUluamVjdCh2bS4kb3B0aW9ucy5pbmplY3QsIHZtKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGFuIGluamVjdGVkIHZhbHVlIGRpcmVjdGx5IHNpbmNlIHRoZSBjaGFuZ2VzIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiaW5qZWN0aW9uIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCBrZXksIHJlc3VsdFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUluamVjdCAoaW5qZWN0LCB2bSkge1xuICBpZiAoaW5qZWN0KSB7XG4gICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgICAgPyBSZWZsZWN0Lm93bktleXMoaW5qZWN0KVxuICAgICAgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIC8vICM2NTc0IGluIGNhc2UgdGhlIGluamVjdCBvYmplY3QgaXMgb2JzZXJ2ZWQuLi5cbiAgICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICAgIHZhciBwcm92aWRlS2V5ID0gaW5qZWN0W2tleV0uZnJvbTtcbiAgICAgIHZhciBzb3VyY2UgPSB2bTtcbiAgICAgIHdoaWxlIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5fcHJvdmlkZWQgJiYgaGFzT3duKHNvdXJjZS5fcHJvdmlkZWQsIHByb3ZpZGVLZXkpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2UuX3Byb3ZpZGVkW3Byb3ZpZGVLZXldO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc291cmNlID0gc291cmNlLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIGluamVjdFtrZXldKSB7XG4gICAgICAgICAgdmFyIHByb3ZpZGVEZWZhdWx0ID0gaW5qZWN0W2tleV0uZGVmYXVsdDtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHR5cGVvZiBwcm92aWRlRGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBwcm92aWRlRGVmYXVsdC5jYWxsKHZtKVxuICAgICAgICAgICAgOiBwcm92aWRlRGVmYXVsdDtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybigoXCJJbmplY3Rpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIG5vdCBmb3VuZFwiKSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyByYXcgY2hpbGRyZW4gVk5vZGVzIGludG8gYSBzbG90IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVNsb3RzIChcbiAgY2hpbGRyZW4sXG4gIGNvbnRleHRcbikge1xuICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICB2YXIgc2xvdHMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICB2YXIgZGF0YSA9IGNoaWxkLmRhdGE7XG4gICAgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxuICAgIGlmIChkYXRhICYmIGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5zbG90KSB7XG4gICAgICBkZWxldGUgZGF0YS5hdHRycy5zbG90O1xuICAgIH1cbiAgICAvLyBuYW1lZCBzbG90cyBzaG91bGQgb25seSBiZSByZXNwZWN0ZWQgaWYgdGhlIHZub2RlIHdhcyByZW5kZXJlZCBpbiB0aGVcbiAgICAvLyBzYW1lIGNvbnRleHQuXG4gICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiZcbiAgICAgIGRhdGEgJiYgZGF0YS5zbG90ICE9IG51bGxcbiAgICApIHtcbiAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xuICAgICAgdmFyIHNsb3QgPSAoc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pKTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsb3QucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChyZXMubGVuZ3RoID09PSAxICYmIHJlc1swXS5pc0NvbW1lbnQpIC8vICM5NjU4XG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKGkgKyAxLCBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGlmIChoYXNTeW1ib2wgJiYgdmFsW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHJldCA9IFtdO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdmFsW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIHJldC5wdXNoKHJlbmRlcihyZXN1bHQudmFsdWUsIHJldC5sZW5ndGgpKTtcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICB9XG4gICAgbm9kZXMgPSBzY29wZWRTbG90Rm4ocHJvcHMpIHx8IGZhbGxiYWNrO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVpY2FsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ21vdW50ZWQnKTtcbiAgICB9XG4gICAgaWYgKHZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICBpZiAoY29udGV4dC5faXNNb3VudGVkKSB7XG4gICAgICAgIC8vIHZ1ZS1yb3V0ZXIjMTIxMlxuICAgICAgICAvLyBEdXJpbmcgdXBkYXRlcywgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCdzIGNoaWxkIGNvbXBvbmVudHMgbWF5XG4gICAgICAgIC8vIGNoYW5nZSwgc28gZGlyZWN0bHkgd2Fsa2luZyB0aGUgdHJlZSBoZXJlIG1heSBjYWxsIGFjdGl2YXRlZCBob29rc1xuICAgICAgICAvLyBvbiBpbmNvcnJlY3QgY2hpbGRyZW4uIEluc3RlYWQgd2UgcHVzaCB0aGVtIGludG8gYSBxdWV1ZSB3aGljaCB3aWxsXG4gICAgICAgIC8vIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgd2hvbGUgcGF0Y2ggcHJvY2VzcyBlbmRlZC5cbiAgICAgICAgcXVldWVBY3RpdmF0ZWRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkKSB7XG4gICAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBob29rc1RvTWVyZ2UgPSBPYmplY3Qua2V5cyhjb21wb25lbnRWTm9kZUhvb2tzKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIGlmIChpc1VuZGVmKEN0b3IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgYmFzZUN0b3IgPSBjb250ZXh0LiRvcHRpb25zLl9iYXNlO1xuXG4gIC8vIHBsYWluIG9wdGlvbnMgb2JqZWN0OiB0dXJuIGl0IGludG8gYSBjb25zdHJ1Y3RvclxuICBpZiAoaXNPYmplY3QoQ3RvcikpIHtcbiAgICBDdG9yID0gYmFzZUN0b3IuZXh0ZW5kKEN0b3IpO1xuICB9XG5cbiAgLy8gaWYgYXQgdGhpcyBzdGFnZSBpdCdzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIGFuIGFzeW5jIGNvbXBvbmVudCBmYWN0b3J5LFxuICAvLyByZWplY3QuXG4gIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKChcIkludmFsaWQgQ29tcG9uZW50IGRlZmluaXRpb246IFwiICsgKFN0cmluZyhDdG9yKSkpLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBhc3luYyBjb21wb25lbnRcbiAgdmFyIGFzeW5jRmFjdG9yeTtcbiAgaWYgKGlzVW5kZWYoQ3Rvci5jaWQpKSB7XG4gICAgYXN5bmNGYWN0b3J5ID0gQ3RvcjtcbiAgICBDdG9yID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGFzeW5jRmFjdG9yeSwgYmFzZUN0b3IpO1xuICAgIGlmIChDdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIG5vZGUgZm9yIGFzeW5jIGNvbXBvbmVudCwgd2hpY2ggaXMgcmVuZGVyZWRcbiAgICAgIC8vIGFzIGEgY29tbWVudCBub2RlIGJ1dCBwcmVzZXJ2ZXMgYWxsIHRoZSByYXcgaW5mb3JtYXRpb24gZm9yIHRoZSBub2RlLlxuICAgICAgLy8gdGhlIGluZm9ybWF0aW9uIHdpbGwgYmUgdXNlZCBmb3IgYXN5bmMgc2VydmVyLXJlbmRlcmluZyBhbmQgaHlkcmF0aW9uLlxuICAgICAgcmV0dXJuIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIoXG4gICAgICAgIGFzeW5jRmFjdG9yeSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHRhZ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gIC8vIHJlc29sdmUgY29uc3RydWN0b3Igb3B0aW9ucyBpbiBjYXNlIGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQgYWZ0ZXJcbiAgLy8gY29tcG9uZW50IGNvbnN0cnVjdG9yIGNyZWF0aW9uXG4gIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvcik7XG5cbiAgLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGRhdGEgaW50byBwcm9wcyAmIGV2ZW50c1xuICBpZiAoaXNEZWYoZGF0YS5tb2RlbCkpIHtcbiAgICB0cmFuc2Zvcm1Nb2RlbChDdG9yLm9wdGlvbnMsIGRhdGEpO1xuICB9XG5cbiAgLy8gZXh0cmFjdCBwcm9wc1xuICB2YXIgcHJvcHNEYXRhID0gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCB0YWcpO1xuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgcGFyZW50IC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKCFkYXRhIHx8ICFkYXRhLnByZSkgJiYgaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIHRhZywgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xuICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7IHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpOyB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2UgPSB0cnVlO1xuICB9XG4gIGlmIChpc0RlZih2bm9kZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoY2hpbGQudGFnKSAmJiAoXG4gICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyByZWYgIzUzMThcbi8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgcGFyZW50IHJlLXJlbmRlciB3aGVuIGRlZXAgYmluZGluZ3MgbGlrZSA6c3R5bGUgYW5kXG4vLyA6Y2xhc3MgYXJlIHVzZWQgb24gc2xvdCBub2Rlc1xuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEuc3R5bGUpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5zdHlsZSk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGRhdGEuY2xhc3MpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5jbGFzcyk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZhciByZW5kZXJDb250ZXh0ID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuY29udGV4dDtcbiAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XG4gIC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXG4gIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG4gIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXG4gIC8vIHVzZXItd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zLlxuICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAvLyB0aGV5IG5lZWQgdG8gYmUgcmVhY3RpdmUgc28gdGhhdCBIT0NzIHVzaW5nIHRoZW0gYXJlIGFsd2F5cyB1cGRhdGVkXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkYXR0cnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRsaXN0ZW5lcnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgdm0uJHNjb3BlZFNsb3RzXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCBwYXJlbnQgdm5vZGUuIHRoaXMgYWxsb3dzIHJlbmRlciBmdW5jdGlvbnMgdG8gaGF2ZSBhY2Nlc3NcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgLy8gcmVuZGVyIHNlbGZcbiAgICB2YXIgdm5vZGU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYWludGFpbiBhIHN0YWNrIGJlY2F1ZXMgYWxsIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gc2VwYXJhdGVseSBmcm9tIG9uZSBhbm90aGVyLiBOZXN0ZWQgY29tcG9uZW50J3MgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IHZtO1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmIHRoZSByZXR1cm5lZCBhcnJheSBjb250YWlucyBvbmx5IGEgc2luZ2xlIG5vZGUsIGFsbG93IGl0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdm5vZGUgPSB2bm9kZVswXTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvclxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3Rvcnkub3duZXJzLnB1c2gob3duZXIpO1xuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGxcblxuICAgIDsob3duZXIpLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUob3duZXJzLCBvd25lcik7IH0pO1xuXG4gICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIChvd25lcnNbaV0pLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXJUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICByZXMuY29tcG9uZW50LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSAmJiBpc1VuZGVmKGZhY3RvcnkuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlcy5kZWxheSB8fCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0FzeW5jUGxhY2Vob2xkZXIgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaXNDb21tZW50ICYmIG5vZGUuYXN5bmNGYWN0b3J5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudENoaWxkIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXZlbnRzICh2bSkge1xuICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xuICAvLyBpbml0IHBhcmVudCBhdHRhY2hlZCBldmVudHNcbiAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gIH1cbn1cblxudmFyIHRhcmdldDtcblxuZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgX3RhcmdldC4kb2ZmKGV2ZW50LCBvbmNlSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gIHZtLFxuICBsaXN0ZW5lcnMsXG4gIG9sZExpc3RlbmVyc1xuKSB7XG4gIHRhcmdldCA9IHZtO1xuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gIHRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIFZ1ZS5wcm90b3R5cGUuJG9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXG4gICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgIHZtLl9oYXNIb29rRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkkMSA8IGw7IGkkMSsrKSB7XG4gICAgICAgIHZtLiRvZmYoZXZlbnRbaSQxXSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2I7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgIHRpcChcbiAgICAgICAgICBcIkV2ZW50IFxcXCJcIiArIGxvd2VyQ2FzZUV2ZW50ICsgXCJcXFwiIGlzIGVtaXR0ZWQgaW4gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgXCJ2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gXCIgK1xuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgaW5mbyA9IFwiZXZlbnQgaGFuZGxlciBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIGFjdGl2ZUluc3RhbmNlID0gbnVsbDtcbnZhciBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgdmFyIHByZXZWbm9kZSA9IHZtLl92bm9kZTtcbiAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gaW52b2tlIGRlc3Ryb3kgaG9va3Mgb24gY3VycmVudCByZW5kZXJlZCB0cmVlXG4gICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xuICAgIGNhbGxIb29rKHZtLCAnZGVzdHJveWVkJyk7XG4gICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICB2bS4kb2ZmKCk7XG4gICAgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgaWYgKHZtLiR2bm9kZSkge1xuICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCAoXG4gIHZtLFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgdm0uJGVsID0gZWw7XG4gIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoKHZtLiRvcHRpb25zLnRlbXBsYXRlICYmIHZtLiRvcHRpb25zLnRlbXBsYXRlLmNoYXJBdCgwKSAhPT0gJyMnKSB8fFxuICAgICAgICB2bS4kb3B0aW9ucy5lbCB8fCBlbCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgYXJlIHVzaW5nIHRoZSBydW50aW1lLW9ubHkgYnVpbGQgb2YgVnVlIHdoZXJlIHRoZSB0ZW1wbGF0ZSAnICtcbiAgICAgICAgICAnY29tcGlsZXIgaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICtcbiAgICAgICAgICAncmVuZGVyIGZ1bmN0aW9ucywgb3IgdXNlIHRoZSBjb21waWxlci1pbmNsdWRlZCBidWlsZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdGYWlsZWQgdG8gbW91bnQgY29tcG9uZW50OiB0ZW1wbGF0ZSBvciByZW5kZXIgZnVuY3Rpb24gbm90IGRlZmluZWQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYWxsSG9vayh2bSwgJ2JlZm9yZU1vdW50Jyk7XG5cbiAgdmFyIHVwZGF0ZUNvbXBvbmVudDtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5hbWUgPSB2bS5fbmFtZTtcbiAgICAgIHZhciBpZCA9IHZtLl91aWQ7XG4gICAgICB2YXIgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgaWQ7XG4gICAgICB2YXIgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyBpZDtcblxuICAgICAgbWFyayhzdGFydFRhZyk7XG4gICAgICB2YXIgdm5vZGUgPSB2bS5fcmVuZGVyKCk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArIG5hbWUgKyBcIiByZW5kZXJcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuXG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICAgIHZtLl91cGRhdGUodm5vZGUsIGh5ZHJhdGluZyk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArIG5hbWUgKyBcIiBwYXRjaFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2bS5fdXBkYXRlKHZtLl9yZW5kZXIoKSwgaHlkcmF0aW5nKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gd2Ugc2V0IHRoaXMgdG8gdm0uX3dhdGNoZXIgaW5zaWRlIHRoZSB3YXRjaGVyJ3MgY29uc3RydWN0b3JcbiAgLy8gc2luY2UgdGhlIHdhdGNoZXIncyBpbml0aWFsIHBhdGNoIG1heSBjYWxsICRmb3JjZVVwZGF0ZSAoZS5nLiBpbnNpZGUgY2hpbGRcbiAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuICBuZXcgV2F0Y2hlcih2bSwgdXBkYXRlQ29tcG9uZW50LCBub29wLCB7XG4gICAgYmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUgKCkge1xuICAgICAgaWYgKHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZVVwZGF0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSAvKiBpc1JlbmRlcldhdGNoZXIgKi8pO1xuICBoeWRyYXRpbmcgPSBmYWxzZTtcblxuICAvLyBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlLCBjYWxsIG1vdW50ZWQgb24gc2VsZlxuICAvLyBtb3VudGVkIGlzIGNhbGxlZCBmb3IgcmVuZGVyLWNyZWF0ZWQgY2hpbGQgY29tcG9uZW50cyBpbiBpdHMgaW5zZXJ0ZWQgaG9va1xuICBpZiAodm0uJHZub2RlID09IG51bGwpIHtcbiAgICB2bS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBjYWxsSG9vayh2bSwgJ21vdW50ZWQnKTtcbiAgfVxuICByZXR1cm4gdm1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRDb21wb25lbnQgKFxuICB2bSxcbiAgcHJvcHNEYXRhLFxuICBsaXN0ZW5lcnMsXG4gIHBhcmVudFZub2RlLFxuICByZW5kZXJDaGlsZHJlblxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGRldGVybWluZSB3aGV0aGVyIGNvbXBvbmVudCBoYXMgc2xvdCBjaGlsZHJlblxuICAvLyB3ZSBuZWVkIHRvIGRvIHRoaXMgYmVmb3JlIG92ZXJ3cml0aW5nICRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbi5cblxuICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZHluYW1pYyBzY29wZWRTbG90cyAoaGFuZC13cml0dGVuIG9yIGNvbXBpbGVkIGJ1dCB3aXRoXG4gIC8vIGR5bmFtaWMgc2xvdCBuYW1lcykuIFN0YXRpYyBzY29wZWQgc2xvdHMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZSBoYXMgdGhlXG4gIC8vIFwiJHN0YWJsZVwiIG1hcmtlci5cbiAgdmFyIG5ld1Njb3BlZFNsb3RzID0gcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cztcbiAgdmFyIG9sZFNjb3BlZFNsb3RzID0gdm0uJHNjb3BlZFNsb3RzO1xuICB2YXIgaGFzRHluYW1pY1Njb3BlZFNsb3QgPSAhIShcbiAgICAobmV3U2NvcGVkU2xvdHMgJiYgIW5ld1Njb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgKG9sZFNjb3BlZFNsb3RzICE9PSBlbXB0eU9iamVjdCAmJiAhb2xkU2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAobmV3U2NvcGVkU2xvdHMgJiYgdm0uJHNjb3BlZFNsb3RzLiRrZXkgIT09IG5ld1Njb3BlZFNsb3RzLiRrZXkpXG4gICk7XG5cbiAgLy8gQW55IHN0YXRpYyBzbG90IGNoaWxkcmVuIGZyb20gdGhlIHBhcmVudCBtYXkgaGF2ZSBjaGFuZ2VkIGR1cmluZyBwYXJlbnQnc1xuICAvLyB1cGRhdGUuIER5bmFtaWMgc2NvcGVkIHNsb3RzIG1heSBhbHNvIGhhdmUgY2hhbmdlZC4gSW4gc3VjaCBjYXNlcywgYSBmb3JjZWRcbiAgLy8gdXBkYXRlIGlzIG5lY2Vzc2FyeSB0byBlbnN1cmUgY29ycmVjdG5lc3MuXG4gIHZhciBuZWVkc0ZvcmNlVXBkYXRlID0gISEoXG4gICAgcmVuZGVyQ2hpbGRyZW4gfHwgICAgICAgICAgICAgICAvLyBoYXMgbmV3IHN0YXRpYyBzbG90c1xuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICBoYXNEeW5hbWljU2NvcGVkU2xvdFxuICApO1xuXG4gIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICB2bS4kdm5vZGUgPSBwYXJlbnRWbm9kZTsgLy8gdXBkYXRlIHZtJ3MgcGxhY2Vob2xkZXIgbm9kZSB3aXRob3V0IHJlLXJlbmRlclxuXG4gIGlmICh2bS5fdm5vZGUpIHsgLy8gdXBkYXRlIGNoaWxkIHRyZWUncyBwYXJlbnRcbiAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gIH1cbiAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuID0gcmVuZGVyQ2hpbGRyZW47XG5cbiAgLy8gdXBkYXRlICRhdHRycyBhbmQgJGxpc3RlbmVycyBoYXNoXG4gIC8vIHRoZXNlIGFyZSBhbHNvIHJlYWN0aXZlIHNvIHRoZXkgbWF5IHRyaWdnZXIgY2hpbGQgdXBkYXRlIGlmIHRoZSBjaGlsZFxuICAvLyB1c2VkIHRoZW0gZHVyaW5nIHJlbmRlclxuICB2bS4kYXR0cnMgPSBwYXJlbnRWbm9kZS5kYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0O1xuICB2bS4kbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuXG4gIC8vIHVwZGF0ZSBwcm9wc1xuICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICB2YXIgcHJvcHMgPSB2bS5fcHJvcHM7XG4gICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgfVxuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAvLyBrZWVwIGEgY29weSBvZiByYXcgcHJvcHNEYXRhXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhID0gcHJvcHNEYXRhO1xuICB9XG5cbiAgLy8gdXBkYXRlIGxpc3RlbmVyc1xuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKTtcblxuICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICBpZiAobmVlZHNGb3JjZVVwZGF0ZSkge1xuICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XG4gICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW5JbmFjdGl2ZVRyZWUgKHZtKSB7XG4gIHdoaWxlICh2bSAmJiAodm0gPSB2bS4kcGFyZW50KSkge1xuICAgIGlmICh2bS5faW5hY3RpdmUpIHsgcmV0dXJuIHRydWUgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBlbHNlIGlmICh2bS5fZGlyZWN0SW5hY3RpdmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodm0uX2luYWN0aXZlIHx8IHZtLl9pbmFjdGl2ZSA9PT0gbnVsbCkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSB0cnVlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGlmICghdm0uX2luYWN0aXZlKSB7XG4gICAgdm0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnZGVhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayAodm0sIGhvb2spIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gIGlmIChoYW5kbGVycykge1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIG51bGwsIHZtLCBpbmZvKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gIH1cbiAgcG9wVGFyZ2V0KCk7XG59XG5cbi8qICAqL1xuXG52YXIgTUFYX1VQREFURV9DT1VOVCA9IDEwMDtcblxudmFyIHF1ZXVlID0gW107XG52YXIgYWN0aXZhdGVkQ2hpbGRyZW4gPSBbXTtcbnZhciBoYXMgPSB7fTtcbnZhciBjaXJjdWxhciA9IHt9O1xudmFyIHdhaXRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIGluZGV4ID0gMDtcblxuLyoqXG4gKiBSZXNldCB0aGUgc2NoZWR1bGVyJ3Mgc3RhdGUuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICBpbmRleCA9IHF1ZXVlLmxlbmd0aCA9IGFjdGl2YXRlZENoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIGhhcyA9IHt9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNpcmN1bGFyID0ge307XG4gIH1cbiAgd2FpdGluZyA9IGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSAjNjU2NiByZXF1aXJlcyBzYXZpbmcgdGhlIHRpbWVzdGFtcCB3aGVuIGV2ZW50IGxpc3RlbmVycyBhcmVcbi8vIGF0dGFjaGVkLiBIb3dldmVyLCBjYWxsaW5nIHBlcmZvcm1hbmNlLm5vdygpIGhhcyBhIHBlcmYgb3ZlcmhlYWQgZXNwZWNpYWxseVxuLy8gaWYgdGhlIHBhZ2UgaGFzIHRob3VzYW5kcyBvZiBldmVudCBsaXN0ZW5lcnMuIEluc3RlYWQsIHdlIHRha2UgYSB0aW1lc3RhbXBcbi8vIGV2ZXJ5IHRpbWUgdGhlIHNjaGVkdWxlciBmbHVzaGVzIGFuZCB1c2UgdGhhdCBmb3IgYWxsIGV2ZW50IGxpc3RlbmVyc1xuLy8gYXR0YWNoZWQgZHVyaW5nIHRoYXQgZmx1c2guXG52YXIgY3VycmVudEZsdXNoVGltZXN0YW1wID0gMDtcblxuLy8gQXN5bmMgZWRnZSBjYXNlIGZpeCByZXF1aXJlcyBzdG9yaW5nIGFuIGV2ZW50IGxpc3RlbmVyJ3MgYXR0YWNoIHRpbWVzdGFtcC5cbnZhciBnZXROb3cgPSBEYXRlLm5vdztcblxuLy8gRGV0ZXJtaW5lIHdoYXQgZXZlbnQgdGltZXN0YW1wIHRoZSBicm93c2VyIGlzIHVzaW5nLiBBbm5veWluZ2x5LCB0aGVcbi8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4vLyAocmVsYXRpdmUgdG8gVU5JWCBlcG9jaCksIHNvIGluIG9yZGVyIHRvIGNvbXBhcmUgdGltZSB3ZSBoYXZlIHRvIHVzZSB0aGVcbi8vIHNhbWUgdGltZXN0YW1wIHR5cGUgd2hlbiBzYXZpbmcgdGhlIGZsdXNoIHRpbWVzdGFtcC5cbi8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuLy8gaW1wbGVtZW50YXRpb25zICgjOTYzMilcbmlmIChpbkJyb3dzZXIgJiYgIWlzSUUpIHtcbiAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICBpZiAoXG4gICAgcGVyZm9ybWFuY2UgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2V0Tm93KCkgPiBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKS50aW1lU3RhbXBcbiAgKSB7XG4gICAgLy8gaWYgdGhlIGV2ZW50IHRpbWVzdGFtcCwgYWx0aG91Z2ggZXZhbHVhdGVkIEFGVEVSIHRoZSBEYXRlLm5vdygpLCBpc1xuICAgIC8vIHNtYWxsZXIgdGhhbiBpdCwgaXQgbWVhbnMgdGhlIGV2ZW50IGlzIHVzaW5nIGEgaGktcmVzIHRpbWVzdGFtcCxcbiAgICAvLyBhbmQgd2UgbmVlZCB0byB1c2UgdGhlIGhpLXJlcyB2ZXJzaW9uIGZvciBldmVudCBsaXN0ZW5lciB0aW1lc3RhbXBzIGFzXG4gICAgLy8gd2VsbC5cbiAgICBnZXROb3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTsgfTtcbiAgfVxufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5mdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlICgpIHtcbiAgY3VycmVudEZsdXNoVGltZXN0YW1wID0gZ2V0Tm93KCk7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgdmFyIHdhdGNoZXIsIGlkO1xuXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgLy8gMS4gQ29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZC4gKGJlY2F1c2UgcGFyZW50IGlzIGFsd2F5c1xuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgLy8gICAgdXNlciB3YXRjaGVycyBhcmUgY3JlYXRlZCBiZWZvcmUgdGhlIHJlbmRlciB3YXRjaGVyKVxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gIHF1ZXVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcblxuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHdhdGNoZXIgPSBxdWV1ZVtpbmRleF07XG4gICAgaWYgKHdhdGNoZXIuYmVmb3JlKSB7XG4gICAgICB3YXRjaGVyLmJlZm9yZSgpO1xuICAgIH1cbiAgICBpZCA9IHdhdGNoZXIuaWQ7XG4gICAgaGFzW2lkXSA9IG51bGw7XG4gICAgd2F0Y2hlci5ydW4oKTtcbiAgICAvLyBpbiBkZXYgYnVpbGQsIGNoZWNrIGFuZCBzdG9wIGNpcmN1bGFyIHVwZGF0ZXMuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaGFzW2lkXSAhPSBudWxsKSB7XG4gICAgICBjaXJjdWxhcltpZF0gPSAoY2lyY3VsYXJbaWRdIHx8IDApICsgMTtcbiAgICAgIGlmIChjaXJjdWxhcltpZF0gPiBNQVhfVVBEQVRFX0NPVU5UKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCAnICsgKFxuICAgICAgICAgICAgd2F0Y2hlci51c2VyXG4gICAgICAgICAgICAgID8gKFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICAgOiBcImluIGEgY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbi5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgd2F0Y2hlci52bVxuICAgICAgICApO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcbiAgdmFyIGFjdGl2YXRlZFF1ZXVlID0gYWN0aXZhdGVkQ2hpbGRyZW4uc2xpY2UoKTtcbiAgdmFyIHVwZGF0ZWRRdWV1ZSA9IHF1ZXVlLnNsaWNlKCk7XG5cbiAgcmVzZXRTY2hlZHVsZXJTdGF0ZSgpO1xuXG4gIC8vIGNhbGwgY29tcG9uZW50IHVwZGF0ZWQgYW5kIGFjdGl2YXRlZCBob29rc1xuICBjYWxsQWN0aXZhdGVkSG9va3MoYWN0aXZhdGVkUXVldWUpO1xuICBjYWxsVXBkYXRlZEhvb2tzKHVwZGF0ZWRRdWV1ZSk7XG5cbiAgLy8gZGV2dG9vbCBob29rXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVXBkYXRlZEhvb2tzIChxdWV1ZSkge1xuICB2YXIgaSA9IHF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciB3YXRjaGVyID0gcXVldWVbaV07XG4gICAgdmFyIHZtID0gd2F0Y2hlci52bTtcbiAgICBpZiAodm0uX3dhdGNoZXIgPT09IHdhdGNoZXIgJiYgdm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICBjYWxsSG9vayh2bSwgJ3VwZGF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gKiBUaGUgcXVldWUgd2lsbCBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIGVudGlyZSB0cmVlIGhhcyBiZWVuIHBhdGNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50ICh2bSkge1xuICAvLyBzZXR0aW5nIF9pbmFjdGl2ZSB0byBmYWxzZSBoZXJlIHNvIHRoYXQgYSByZW5kZXIgZnVuY3Rpb24gY2FuXG4gIC8vIHJlbHkgb24gY2hlY2tpbmcgd2hldGhlciBpdCdzIGluIGFuIGluYWN0aXZlIHRyZWUgKGUuZy4gcm91dGVyLXZpZXcpXG4gIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICBhY3RpdmF0ZWRDaGlsZHJlbi5wdXNoKHZtKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzIChxdWV1ZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHF1ZXVlW2ldLCB0cnVlIC8qIHRydWUgKi8pO1xuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlV2F0Y2hlciAod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgaGFzW2lkXSA9IHRydWU7XG4gICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgcXVldWUucHVzaCh3YXRjaGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgLy8gaWYgYWxyZWFkeSBwYXN0IGl0cyBpZCwgaXQgd2lsbCBiZSBydW4gbmV4dCBpbW1lZGlhdGVseS5cbiAgICAgIHZhciBpID0gcXVldWUubGVuZ3RoIC0gMTtcbiAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgfVxuICAgIC8vIHF1ZXVlIHRoZSBmbHVzaFxuICAgIGlmICghd2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAgICAgZmx1c2hTY2hlZHVsZXJRdWV1ZSgpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG5leHRUaWNrKGZsdXNoU2NoZWR1bGVyUXVldWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbnZhciB1aWQkMiA9IDA7XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKi9cbnZhciBXYXRjaGVyID0gZnVuY3Rpb24gV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBjYixcbiAgb3B0aW9ucyxcbiAgaXNSZW5kZXJXYXRjaGVyXG4pIHtcbiAgdGhpcy52bSA9IHZtO1xuICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgdm0uX3dhdGNoZXIgPSB0aGlzO1xuICB9XG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICAvLyBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgdGhpcy51c2VyID0gISFvcHRpb25zLnVzZXI7XG4gICAgdGhpcy5sYXp5ID0gISFvcHRpb25zLmxhenk7XG4gICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgdGhpcy5iZWZvcmUgPSBvcHRpb25zLmJlZm9yZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgfVxuICB0aGlzLmNiID0gY2I7XG4gIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW107XG4gIHRoaXMubmV3RGVwcyA9IFtdO1xuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5leHByZXNzaW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gZXhwT3JGbi50b1N0cmluZygpXG4gICAgOiAnJztcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKTtcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gIHB1c2hUYXJnZXQodGhpcyk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHZtID0gdGhpcy52bTtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodm0sIHZtKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAoXCJnZXR0ZXIgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAgIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGVhbnVwRGVwcygpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufTtcblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAgKGRlcCkge1xuICB2YXIgaWQgPSBkZXAuaWQ7XG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZCk7XG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgZGVwID0gdGhpcy5kZXBzW2ldO1xuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICB9XG4gIHZhciB0bXAgPSB0aGlzLmRlcElkcztcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKCk7XG4gIHRtcCA9IHRoaXMuZGVwcztcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xuICB0aGlzLm5ld0RlcHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgICB0aGlzLnJ1bigpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY2hlZHVsZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgaXNPYmplY3QodmFsdWUpIHx8XG4gICAgICB0aGlzLmRlZXBcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB0aGlzLnZtLCAoXCJjYWxsYmFjayBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gZXZhbHVhdGUgKCkge1xuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3Vic2NyaWJlciBsaXN0LlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qICAqL1xuXG52YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogbm9vcCxcbiAgc2V0OiBub29wXG59O1xuXG5mdW5jdGlvbiBwcm94eSAodGFyZ2V0LCBzb3VyY2VLZXksIGtleSkge1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzW3NvdXJjZUtleV1ba2V5XVxuICB9O1xuICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgIHRoaXNbc291cmNlS2V5XVtrZXldID0gdmFsO1xuICB9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW107XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnM7XG4gIGlmIChvcHRzLnByb3BzKSB7IGluaXRQcm9wcyh2bSwgb3B0cy5wcm9wcyk7IH1cbiAgaWYgKG9wdHMubWV0aG9kcykgeyBpbml0TWV0aG9kcyh2bSwgb3B0cy5tZXRob2RzKTsgfVxuICBpZiAob3B0cy5kYXRhKSB7XG4gICAgaW5pdERhdGEodm0pO1xuICB9IGVsc2Uge1xuICAgIG9ic2VydmUodm0uX2RhdGEgPSB7fSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbiAgfVxuICBpZiAob3B0cy5jb21wdXRlZCkgeyBpbml0Q29tcHV0ZWQodm0sIG9wdHMuY29tcHV0ZWQpOyB9XG4gIGlmIChvcHRzLndhdGNoICYmIG9wdHMud2F0Y2ggIT09IG5hdGl2ZVdhdGNoKSB7XG4gICAgaW5pdFdhdGNoKHZtLCBvcHRzLndhdGNoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMgKHZtLCBwcm9wc09wdGlvbnMpIHtcbiAgdmFyIHByb3BzRGF0YSA9IHZtLiRvcHRpb25zLnByb3BzRGF0YSB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm0uX3Byb3BzID0ge307XG4gIC8vIGNhY2hlIHByb3Aga2V5cyBzbyB0aGF0IGZ1dHVyZSBwcm9wcyB1cGRhdGVzIGNhbiBpdGVyYXRlIHVzaW5nIEFycmF5XG4gIC8vIGluc3RlYWQgb2YgZHluYW1pYyBvYmplY3Qga2V5IGVudW1lcmF0aW9uLlxuICB2YXIga2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyA9IFtdO1xuICB2YXIgaXNSb290ID0gIXZtLiRwYXJlbnQ7XG4gIC8vIHJvb3QgaW5zdGFuY2UgcHJvcHMgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICBpZiAoIWlzUm9vdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gIH1cbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wc09wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAoaXNSZXNlcnZlZEF0dHJpYnV0ZShoeXBoZW5hdGVkS2V5KSB8fFxuICAgICAgICAgIGNvbmZpZy5pc1Jlc2VydmVkQXR0cihoeXBoZW5hdGVkS2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlxcXCJcIiArIGh5cGhlbmF0ZWRLZXkgKyBcIlxcXCIgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUgYW5kIGNhbm5vdCBiZSB1c2VkIGFzIGNvbXBvbmVudCBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc1Jvb3QgJiYgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGEgcHJvcCBkaXJlY3RseSBzaW5jZSB0aGUgdmFsdWUgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiSW5zdGVhZCwgdXNlIGEgZGF0YSBvciBjb21wdXRlZCBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgcHJvcCdzIFwiICtcbiAgICAgICAgICAgIFwidmFsdWUuIFByb3AgYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHN0YXRpYyBwcm9wcyBhcmUgYWxyZWFkeSBwcm94aWVkIG9uIHRoZSBjb21wb25lbnQncyBwcm90b3R5cGVcbiAgICAvLyBkdXJpbmcgVnVlLmV4dGVuZCgpLiBXZSBvbmx5IG5lZWQgdG8gcHJveHkgcHJvcHMgZGVmaW5lZCBhdFxuICAgIC8vIGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBwcm94eSh2bSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzT3B0aW9ucykgbG9vcCgga2V5ICk7XG4gIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIHZhciBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YTtcbiAgZGF0YSA9IHZtLl9kYXRhID0gdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbidcbiAgICA/IGdldERhdGEoZGF0YSwgdm0pXG4gICAgOiBkYXRhIHx8IHt9O1xuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge307XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0OlxcbicgK1xuICAgICAgJ2h0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNkYXRhLU11c3QtQmUtYS1GdW5jdGlvbicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgdmFyIG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChtZXRob2RzICYmIGhhc093bihtZXRob2RzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBkYXRhIHByb3BlcnR5LlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiVGhlIGRhdGEgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVjbGFyZWQgYXMgYSBwcm9wLiBcIiArXG4gICAgICAgIFwiVXNlIHByb3AgZGVmYXVsdCB2YWx1ZSBpbnN0ZWFkLlwiLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9kYXRhXCIsIGtleSk7XG4gICAgfVxuICB9XG4gIC8vIG9ic2VydmUgZGF0YVxuICBvYnNlcnZlKGRhdGEsIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEgKGRhdGEsIHZtKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBkYXRhIGdldHRlcnNcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIHJldHVybiBkYXRhLmNhbGwodm0sIHZtKVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwiZGF0YSgpXCIpO1xuICAgIHJldHVybiB7fVxuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbnZhciBjb21wdXRlZFdhdGNoZXJPcHRpb25zID0geyBsYXp5OiB0cnVlIH07XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCAodm0sIGNvbXB1dGVkKSB7XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICB2YXIgd2F0Y2hlcnMgPSB2bS5fY29tcHV0ZWRXYXRjaGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGp1c3QgZ2V0dGVycyBkdXJpbmcgU1NSXG4gIHZhciBpc1NTUiA9IGlzU2VydmVyUmVuZGVyaW5nKCk7XG5cbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgdmFyIHVzZXJEZWYgPSBjb21wdXRlZFtrZXldO1xuICAgIHZhciBnZXR0ZXIgPSB0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJyA/IHVzZXJEZWYgOiB1c2VyRGVmLmdldDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiR2V0dGVyIGlzIG1pc3NpbmcgZm9yIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIi5cIiksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghaXNTU1IpIHtcbiAgICAgIC8vIGNyZWF0ZSBpbnRlcm5hbCB3YXRjaGVyIGZvciB0aGUgY29tcHV0ZWQgcHJvcGVydHkuXG4gICAgICB3YXRjaGVyc1trZXldID0gbmV3IFdhdGNoZXIoXG4gICAgICAgIHZtLFxuICAgICAgICBnZXR0ZXIgfHwgbm9vcCxcbiAgICAgICAgbm9vcCxcbiAgICAgICAgY29tcHV0ZWRXYXRjaGVyT3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnQtZGVmaW5lZCBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBhbHJlYWR5IGRlZmluZWQgb24gdGhlXG4gICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcbiAgICAvLyBhdCBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoa2V5IGluIHZtLiRkYXRhKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgaW4gZGF0YS5cIiksIHZtKTtcbiAgICAgIH0gZWxzZSBpZiAodm0uJG9wdGlvbnMucHJvcHMgJiYga2V5IGluIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgYXMgYSBwcm9wLlwiKSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVDb21wdXRlZCAoXG4gIHRhcmdldCxcbiAga2V5LFxuICB1c2VyRGVmXG4pIHtcbiAgdmFyIHNob3VsZENhY2hlID0gIWlzU2VydmVyUmVuZGVyaW5nKCk7XG4gIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxuICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZik7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gIH0gZWxzZSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZi5nZXQpXG4gICAgICA6IG5vb3A7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IHVzZXJEZWYuc2V0IHx8IG5vb3A7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkR2V0dGVyIChrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgdm0sIChcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzXG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICBpbml0UHJvdmlkZSh2bSk7IC8vIHJlc29sdmUgcHJvdmlkZSBhZnRlciBkYXRhL3Byb3BzXG4gICAgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdm0uX25hbWUgPSBmb3JtYXRDb21wb25lbnROYW1lKHZtLCBmYWxzZSk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9XG5cbiAgICBpZiAodm0uJG9wdGlvbnMuZWwpIHtcbiAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQgKHZtLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMpO1xuICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgb3B0cy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcblxuICB2YXIgdm5vZGVDb21wb25lbnRPcHRpb25zID0gcGFyZW50Vm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgb3B0cy5wcm9wc0RhdGEgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhO1xuICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICBvcHRzLl9yZW5kZXJDaGlsZHJlbiA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5jaGlsZHJlbjtcbiAgb3B0cy5fY29tcG9uZW50VGFnID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnRhZztcblxuICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICBvcHRzLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgIG9wdHMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgaWYgKEN0b3Iuc3VwZXIpIHtcbiAgICB2YXIgc3VwZXJPcHRpb25zID0gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yLnN1cGVyKTtcbiAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XG4gICAgaWYgKHN1cGVyT3B0aW9ucyAhPT0gY2FjaGVkU3VwZXJPcHRpb25zKSB7XG4gICAgICAvLyBzdXBlciBvcHRpb24gY2hhbmdlZCxcbiAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cbiAgICAgIEN0b3Iuc3VwZXJPcHRpb25zID0gc3VwZXJPcHRpb25zO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBsYXRlLW1vZGlmaWVkL2F0dGFjaGVkIG9wdGlvbnMgKCM0OTc2KVxuICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XG4gICAgICAvLyB1cGRhdGUgYmFzZSBleHRlbmQgb3B0aW9uc1xuICAgICAgaWYgKG1vZGlmaWVkT3B0aW9ucykge1xuICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhzdXBlck9wdGlvbnMsIEN0b3IuZXh0ZW5kT3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tvcHRpb25zLm5hbWVdID0gQ3RvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgbW9kaWZpZWQ7XG4gIHZhciBsYXRlc3QgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBzZWFsZWQgPSBDdG9yLnNlYWxlZE9wdGlvbnM7XG4gIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICBpZiAoIW1vZGlmaWVkKSB7IG1vZGlmaWVkID0ge307IH1cbiAgICAgIG1vZGlmaWVkW2tleV0gPSBsYXRlc3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkXG59XG5cbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgKSB7XG4gICAgd2FybignVnVlIGlzIGEgY29uc3RydWN0b3IgYW5kIHNob3VsZCBiZSBjYWxsZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZCcpO1xuICB9XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59XG5cbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5yZW5kZXJNaXhpbihWdWUpO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIGluc3RhbGxlZFBsdWdpbnMgPSAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyB8fCAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyA9IFtdKSk7XG4gICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGluc3RhbGxlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV4dGVuZCAoVnVlKSB7XG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG4gIFZ1ZS5jaWQgPSAwO1xuICB2YXIgY2lkID0gMTtcblxuICAvKipcbiAgICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAgICovXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XG4gICAgdmFyIGNhY2hlZEN0b3JzID0gZXh0ZW5kT3B0aW9ucy5fQ3RvciB8fCAoZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IHt9KTtcbiAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgIHJldHVybiBjYWNoZWRDdG9yc1tTdXBlcklkXVxuICAgIH1cblxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBuYW1lKSB7XG4gICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICBTdXBlci5vcHRpb25zLFxuICAgICAgZXh0ZW5kT3B0aW9uc1xuICAgICk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG5cbiAgICAvLyBGb3IgcHJvcHMgYW5kIGNvbXB1dGVkIHByb3BlcnRpZXMsIHdlIGRlZmluZSB0aGUgcHJveHkgZ2V0dGVycyBvblxuICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgLy8gYXZvaWRzIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxscyBmb3IgZWFjaCBpbnN0YW5jZSBjcmVhdGVkLlxuICAgIGlmIChTdWIub3B0aW9ucy5wcm9wcykge1xuICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICB9XG4gICAgaWYgKFN1Yi5vcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgIH1cblxuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uL21peGluL3BsdWdpbiB1c2FnZVxuICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgU3ViLm1peGluID0gU3VwZXIubWl4aW47XG4gICAgU3ViLnVzZSA9IFN1cGVyLnVzZTtcblxuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgfSk7XG4gICAgLy8gZW5hYmxlIHJlY3Vyc2l2ZSBzZWxmLWxvb2t1cFxuICAgIGlmIChuYW1lKSB7XG4gICAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViO1xuICAgIH1cblxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgLy8gbGF0ZXIgYXQgaW5zdGFudGlhdGlvbiB3ZSBjYW4gY2hlY2sgaWYgU3VwZXIncyBvcHRpb25zIGhhdmVcbiAgICAvLyBiZWVuIHVwZGF0ZWQuXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgIFN1Yi5zZWFsZWRPcHRpb25zID0gZXh0ZW5kKHt9LCBTdWIub3B0aW9ucyk7XG5cbiAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgIGNhY2hlZEN0b3JzW1N1cGVySWRdID0gU3ViO1xuICAgIHJldHVybiBTdWJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzJDEgKENvbXApIHtcbiAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBwcm94eShDb21wLnByb3RvdHlwZSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQkMSAoQ29tcCkge1xuICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIGRlZmluZUNvbXB1dGVkKENvbXAucHJvdG90eXBlLCBrZXksIGNvbXB1dGVkW2tleV0pO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAvKipcbiAgICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChcbiAgICAgIGlkLFxuICAgICAgZGVmaW5pdGlvblxuICAgICkge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUgKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChuYW1lKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlIChrZWVwQWxpdmVJbnN0YW5jZSwgZmlsdGVyKSB7XG4gIHZhciBjYWNoZSA9IGtlZXBBbGl2ZUluc3RhbmNlLmNhY2hlO1xuICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gIHZhciBfdm5vZGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5fdm5vZGU7XG4gIGZvciAodmFyIGtleSBpbiBjYWNoZSkge1xuICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcbiAgICBpZiAoY2FjaGVkTm9kZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNhY2hlZE5vZGUuY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5LCBrZXlzLCBfdm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICBjYWNoZSxcbiAga2V5LFxuICBrZXlzLFxuICBjdXJyZW50XG4pIHtcbiAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XG4gIGlmIChjYWNoZWQkJDEgJiYgKCFjdXJyZW50IHx8IGNhY2hlZCQkMS50YWcgIT09IGN1cnJlbnQudGFnKSkge1xuICAgIGNhY2hlZCQkMS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICB9XG4gIGNhY2hlW2tleV0gPSBudWxsO1xuICByZW1vdmUoa2V5cywga2V5KTtcbn1cblxudmFyIHBhdHRlcm5UeXBlcyA9IFtTdHJpbmcsIFJlZ0V4cCwgQXJyYXldO1xuXG52YXIgS2VlcEFsaXZlID0ge1xuICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIGV4Y2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBtYXg6IFtTdHJpbmcsIE51bWJlcl1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgfSxcblxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzLmNhY2hlLCBrZXksIHRoaXMua2V5cyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgc2xvdCA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjb21wb25lbnRPcHRpb25zKTtcbiAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgIHZhciBleGNsdWRlID0gcmVmLmV4Y2x1ZGU7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAoaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpKSB8fFxuICAgICAgICAvLyBleGNsdWRlZFxuICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgICB9XG5cbiAgICAgIHZhciByZWYkMSA9IHRoaXM7XG4gICAgICB2YXIgY2FjaGUgPSByZWYkMS5jYWNoZTtcbiAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXkgPT0gbnVsbFxuICAgICAgICAvLyBzYW1lIGNvbnN0cnVjdG9yIG1heSBnZXQgcmVnaXN0ZXJlZCBhcyBkaWZmZXJlbnQgbG9jYWwgY29tcG9uZW50c1xuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgID8gY29tcG9uZW50T3B0aW9ucy5DdG9yLmNpZCArIChjb21wb25lbnRPcHRpb25zLnRhZyA/IChcIjo6XCIgKyAoY29tcG9uZW50T3B0aW9ucy50YWcpKSA6ICcnKVxuICAgICAgICA6IHZub2RlLmtleTtcbiAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY2FjaGVba2V5XS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgLy8gbWFrZSBjdXJyZW50IGtleSBmcmVzaGVzdFxuICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAvLyBwcnVuZSBvbGRlc3QgZW50cnlcbiAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXlzWzBdLCBrZXlzLCB0aGlzLl92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUgfHwgKHNsb3QgJiYgc2xvdFswXSlcbiAgfVxufTtcblxudmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICBLZWVwQWxpdmU6IEtlZXBBbGl2ZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRHbG9iYWxBUEkgKFZ1ZSkge1xuICAvLyBjb25maWdcbiAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICBjb25maWdEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbmZpZ0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnRG8gbm90IHJlcGxhY2UgdGhlIFZ1ZS5jb25maWcgb2JqZWN0LCBzZXQgaW5kaXZpZHVhbCBmaWVsZHMgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ2NvbmZpZycsIGNvbmZpZ0RlZik7XG5cbiAgLy8gZXhwb3NlZCB1dGlsIG1ldGhvZHMuXG4gIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAvLyB0aGVtIHVubGVzcyB5b3UgYXJlIGF3YXJlIG9mIHRoZSByaXNrLlxuICBWdWUudXRpbCA9IHtcbiAgICB3YXJuOiB3YXJuLFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIG1lcmdlT3B0aW9uczogbWVyZ2VPcHRpb25zLFxuICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSQkMVxuICB9O1xuXG4gIFZ1ZS5zZXQgPSBzZXQ7XG4gIFZ1ZS5kZWxldGUgPSBkZWw7XG4gIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4gIC8vIDIuNiBleHBsaWNpdCBvYnNlcnZhYmxlIEFQSVxuICBWdWUub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBvYnNlcnZlKG9iaik7XG4gICAgcmV0dXJuIG9ialxuICB9O1xuXG4gIFZ1ZS5vcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfSk7XG5cbiAgLy8gdGhpcyBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBcImJhc2VcIiBjb25zdHJ1Y3RvciB0byBleHRlbmQgYWxsIHBsYWluLW9iamVjdFxuICAvLyBjb21wb25lbnRzIHdpdGggaW4gV2VleCdzIG11bHRpLWluc3RhbmNlIHNjZW5hcmlvcy5cbiAgVnVlLm9wdGlvbnMuX2Jhc2UgPSBWdWU7XG5cbiAgZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIGJ1aWx0SW5Db21wb25lbnRzKTtcblxuICBpbml0VXNlKFZ1ZSk7XG4gIGluaXRNaXhpbiQxKFZ1ZSk7XG4gIGluaXRFeHRlbmQoVnVlKTtcbiAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG59XG5cbmluaXRHbG9iYWxBUEkoVnVlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gIGdldDogaXNTZXJ2ZXJSZW5kZXJpbmdcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxuICB9XG59KTtcblxuLy8gZXhwb3NlIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IGZvciBzc3IgcnVudGltZSBoZWxwZXIgaW5zdGFsbGF0aW9uXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnRnVuY3Rpb25hbFJlbmRlckNvbnRleHQnLCB7XG4gIHZhbHVlOiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dFxufSk7XG5cblZ1ZS52ZXJzaW9uID0gJzIuNi4xMCc7XG5cbi8qICAqL1xuXG4vLyB0aGVzZSBhcmUgcmVzZXJ2ZWQgZm9yIHdlYiBiZWNhdXNlIHRoZXkgYXJlIGRpcmVjdGx5IGNvbXBpbGVkIGF3YXlcbi8vIGR1cmluZyB0ZW1wbGF0ZSBjb21waWxhdGlvblxudmFyIGlzUmVzZXJ2ZWRBdHRyID0gbWFrZU1hcCgnc3R5bGUsY2xhc3MnKTtcblxuLy8gYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSB1c2luZyBwcm9wcyBmb3IgYmluZGluZ1xudmFyIGFjY2VwdFZhbHVlID0gbWFrZU1hcCgnaW5wdXQsdGV4dGFyZWEsb3B0aW9uLHNlbGVjdCxwcm9ncmVzcycpO1xudmFyIG11c3RVc2VQcm9wID0gZnVuY3Rpb24gKHRhZywgdHlwZSwgYXR0cikge1xuICByZXR1cm4gKFxuICAgIChhdHRyID09PSAndmFsdWUnICYmIGFjY2VwdFZhbHVlKHRhZykpICYmIHR5cGUgIT09ICdidXR0b24nIHx8XG4gICAgKGF0dHIgPT09ICdzZWxlY3RlZCcgJiYgdGFnID09PSAnb3B0aW9uJykgfHxcbiAgICAoYXR0ciA9PT0gJ2NoZWNrZWQnICYmIHRhZyA9PT0gJ2lucHV0JykgfHxcbiAgICAoYXR0ciA9PT0gJ211dGVkJyAmJiB0YWcgPT09ICd2aWRlbycpXG4gIClcbn07XG5cbnZhciBpc0VudW1lcmF0ZWRBdHRyID0gbWFrZU1hcCgnY29udGVudGVkaXRhYmxlLGRyYWdnYWJsZSxzcGVsbGNoZWNrJyk7XG5cbnZhciBpc1ZhbGlkQ29udGVudEVkaXRhYmxlVmFsdWUgPSBtYWtlTWFwKCdldmVudHMsY2FyZXQsdHlwaW5nLHBsYWludGV4dC1vbmx5Jyk7XG5cbnZhciBjb252ZXJ0RW51bWVyYXRlZFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpIHx8IHZhbHVlID09PSAnZmFsc2UnXG4gICAgPyAnZmFsc2UnXG4gICAgLy8gYWxsb3cgYXJiaXRyYXJ5IHN0cmluZyB2YWx1ZSBmb3IgY29udGVudGVkaXRhYmxlXG4gICAgOiBrZXkgPT09ICdjb250ZW50ZWRpdGFibGUnICYmIGlzVmFsaWRDb250ZW50RWRpdGFibGVWYWx1ZSh2YWx1ZSlcbiAgICAgID8gdmFsdWVcbiAgICAgIDogJ3RydWUnXG59O1xuXG52YXIgaXNCb29sZWFuQXR0ciA9IG1ha2VNYXAoXG4gICdhbGxvd2Z1bGxzY3JlZW4sYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNoZWNrZWQsY29tcGFjdCxjb250cm9scyxkZWNsYXJlLCcgK1xuICAnZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLCcgK1xuICAnZW5hYmxlZCxmb3Jtbm92YWxpZGF0ZSxoaWRkZW4saW5kZXRlcm1pbmF0ZSxpbmVydCxpc21hcCxpdGVtc2NvcGUsbG9vcCxtdWx0aXBsZSwnICtcbiAgJ211dGVkLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vdmFsaWRhdGUsbm93cmFwLG9wZW4scGF1c2VvbmV4aXQscmVhZG9ubHksJyArXG4gICdyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLCcgK1xuICAndHJ1ZXNwZWVkLHR5cGVtdXN0bWF0Y2gsdmlzaWJsZSdcbik7XG5cbnZhciB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuXG52YXIgaXNYbGluayA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLmNoYXJBdCg1KSA9PT0gJzonICYmIG5hbWUuc2xpY2UoMCwgNSkgPT09ICd4bGluaydcbn07XG5cbnZhciBnZXRYbGlua1Byb3AgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gaXNYbGluayhuYW1lKSA/IG5hbWUuc2xpY2UoNiwgbmFtZS5sZW5ndGgpIDogJydcbn07XG5cbnZhciBpc0ZhbHN5QXR0clZhbHVlID0gZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGdlbkNsYXNzRm9yVm5vZGUgKHZub2RlKSB7XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgdmFyIGNoaWxkTm9kZSA9IHZub2RlO1xuICB3aGlsZSAoaXNEZWYoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgaWYgKGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUuZGF0YSkge1xuICAgICAgZGF0YSA9IG1lcmdlQ2xhc3NEYXRhKGNoaWxkTm9kZS5kYXRhLCBkYXRhKTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKGlzRGVmKHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudCkpIHtcbiAgICBpZiAocGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShkYXRhLCBwYXJlbnROb2RlLmRhdGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVuZGVyQ2xhc3MoZGF0YS5zdGF0aWNDbGFzcywgZGF0YS5jbGFzcylcbn1cblxuZnVuY3Rpb24gbWVyZ2VDbGFzc0RhdGEgKGNoaWxkLCBwYXJlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0aWNDbGFzczogY29uY2F0KGNoaWxkLnN0YXRpY0NsYXNzLCBwYXJlbnQuc3RhdGljQ2xhc3MpLFxuICAgIGNsYXNzOiBpc0RlZihjaGlsZC5jbGFzcylcbiAgICAgID8gW2NoaWxkLmNsYXNzLCBwYXJlbnQuY2xhc3NdXG4gICAgICA6IHBhcmVudC5jbGFzc1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNsYXNzIChcbiAgc3RhdGljQ2xhc3MsXG4gIGR5bmFtaWNDbGFzc1xuKSB7XG4gIGlmIChpc0RlZihzdGF0aWNDbGFzcykgfHwgaXNEZWYoZHluYW1pY0NsYXNzKSkge1xuICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDbGFzcyAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeUFycmF5KHZhbHVlKVxuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5T2JqZWN0KHZhbHVlKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBzdHJpbmdpZmllZDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNEZWYoc3RyaW5naWZpZWQgPSBzdHJpbmdpZnlDbGFzcyh2YWx1ZVtpXSkpICYmIHN0cmluZ2lmaWVkICE9PSAnJykge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbnZhciBuYW1lc3BhY2VNYXAgPSB7XG4gIHN2ZzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgbWF0aDogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnXG59O1xuXG52YXIgaXNIVE1MVGFnID0gbWFrZU1hcChcbiAgJ2h0bWwsYm9keSxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLCcgK1xuICAnYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLCcgK1xuICAnZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsJyArXG4gICdhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnksJyArXG4gICdzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbywnICtcbiAgJ2VtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLCcgK1xuICAnY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsJyArXG4gICdidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLCcgK1xuICAnb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSwnICtcbiAgJ2RldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSwnICtcbiAgJ2NvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGUsYmxvY2txdW90ZSxpZnJhbWUsdGZvb3QnXG4pO1xuXG4vLyB0aGlzIG1hcCBpcyBpbnRlbnRpb25hbGx5IHNlbGVjdGl2ZSwgb25seSBjb3ZlcmluZyBTVkcgZWxlbWVudHMgdGhhdCBtYXlcbi8vIGNvbnRhaW4gY2hpbGQgZWxlbWVudHMuXG52YXIgaXNTVkcgPSBtYWtlTWFwKFxuICAnc3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLCcgK1xuICAnZm9yZWlnbk9iamVjdCxnLGdseXBoLGltYWdlLGxpbmUsbWFya2VyLG1hc2ssbWlzc2luZy1nbHlwaCxwYXRoLHBhdHRlcm4sJyArXG4gICdwb2x5Z29uLHBvbHlsaW5lLHJlY3Qsc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRwYXRoLHRzcGFuLHVzZSx2aWV3JyxcbiAgdHJ1ZVxuKTtcblxudmFyIGlzUmVzZXJ2ZWRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHJldHVybiBpc0hUTUxUYWcodGFnKSB8fCBpc1NWRyh0YWcpXG59O1xuXG5mdW5jdGlvbiBnZXRUYWdOYW1lc3BhY2UgKHRhZykge1xuICBpZiAoaXNTVkcodGFnKSkge1xuICAgIHJldHVybiAnc3ZnJ1xuICB9XG4gIC8vIGJhc2ljIHN1cHBvcnQgZm9yIE1hdGhNTFxuICAvLyBub3RlIGl0IGRvZXNuJ3Qgc3VwcG9ydCBvdGhlciBNYXRoTUwgZWxlbWVudHMgYmVpbmcgY29tcG9uZW50IHJvb3RzXG4gIGlmICh0YWcgPT09ICdtYXRoJykge1xuICAgIHJldHVybiAnbWF0aCdcbiAgfVxufVxuXG52YXIgdW5rbm93bkVsZW1lbnRDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBpc1Vua25vd25FbGVtZW50ICh0YWcpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAoaXNSZXNlcnZlZFRhZyh0YWcpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdGFnID0gdGFnLnRvTG93ZXJDYXNlKCk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddICE9IG51bGwpIHtcbiAgICByZXR1cm4gdW5rbm93bkVsZW1lbnRDYWNoZVt0YWddXG4gIH1cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAodGFnLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjgyMTAzNjQvMTA3MDI0NFxuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gKFxuICAgICAgZWwuY29uc3RydWN0b3IgPT09IHdpbmRvdy5IVE1MVW5rbm93bkVsZW1lbnQgfHxcbiAgICAgIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTEVsZW1lbnRcbiAgICApKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gL0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlbC50b1N0cmluZygpKSlcbiAgfVxufVxuXG52YXIgaXNUZXh0SW5wdXRUeXBlID0gbWFrZU1hcCgndGV4dCxudW1iZXIscGFzc3dvcmQsc2VhcmNoLGVtYWlsLHRlbCx1cmwnKTtcblxuLyogICovXG5cbi8qKlxuICogUXVlcnkgYW4gZWxlbWVudCBzZWxlY3RvciBpZiBpdCdzIG5vdCBhbiBlbGVtZW50IGFscmVhZHkuXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5IChlbCkge1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ0Nhbm5vdCBmaW5kIGVsZW1lbnQ6ICcgKyBlbFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZWxcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCQxICh0YWdOYW1lLCB2bm9kZSkge1xuICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgaWYgKHRhZ05hbWUgIT09ICdzZWxlY3QnKSB7XG4gICAgcmV0dXJuIGVsbVxuICB9XG4gIC8vIGZhbHNlIG9yIG51bGwgd2lsbCByZW1vdmUgdGhlIGF0dHJpYnV0ZSBidXQgdW5kZWZpbmVkIHdpbGwgbm90XG4gIGlmICh2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEuYXR0cnMgJiYgdm5vZGUuZGF0YS5hdHRycy5tdWx0aXBsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxtLnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcbiAgfVxuICByZXR1cm4gZWxtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyAobmFtZXNwYWNlLCB0YWdOYW1lKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlTWFwW25hbWVzcGFjZV0sIHRhZ05hbWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlICh0ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50ICh0ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRleHQpXG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZSAocGFyZW50Tm9kZSwgbmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQgKG5vZGUsIGNoaWxkKSB7XG4gIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZCAobm9kZSwgY2hpbGQpIHtcbiAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHBhcmVudE5vZGUgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZVxufVxuXG5mdW5jdGlvbiBuZXh0U2libGluZyAobm9kZSkge1xuICByZXR1cm4gbm9kZS5uZXh0U2libGluZ1xufVxuXG5mdW5jdGlvbiB0YWdOYW1lIChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWVcbn1cblxuZnVuY3Rpb24gc2V0VGV4dENvbnRlbnQgKG5vZGUsIHRleHQpIHtcbiAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlU2NvcGUgKG5vZGUsIHNjb3BlSWQpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoc2NvcGVJZCwgJycpO1xufVxuXG52YXIgbm9kZU9wcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCQxLFxuICBjcmVhdGVFbGVtZW50TlM6IGNyZWF0ZUVsZW1lbnROUyxcbiAgY3JlYXRlVGV4dE5vZGU6IGNyZWF0ZVRleHROb2RlLFxuICBjcmVhdGVDb21tZW50OiBjcmVhdGVDb21tZW50LFxuICBpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG4gIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG4gIG5leHRTaWJsaW5nOiBuZXh0U2libGluZyxcbiAgdGFnTmFtZTogdGFnTmFtZSxcbiAgc2V0VGV4dENvbnRlbnQ6IHNldFRleHRDb250ZW50LFxuICBzZXRTdHlsZVNjb3BlOiBzZXRTdHlsZVNjb3BlXG59KTtcblxuLyogICovXG5cbnZhciByZWYgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlIChfLCB2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGlmIChvbGRWbm9kZS5kYXRhLnJlZiAhPT0gdm5vZGUuZGF0YS5yZWYpIHtcbiAgICAgIHJlZ2lzdGVyUmVmKG9sZFZub2RlLCB0cnVlKTtcbiAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgcmVnaXN0ZXJSZWYodm5vZGUsIHRydWUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiByZWdpc3RlclJlZiAodm5vZGUsIGlzUmVtb3ZhbCkge1xuICB2YXIga2V5ID0gdm5vZGUuZGF0YS5yZWY7XG4gIGlmICghaXNEZWYoa2V5KSkgeyByZXR1cm4gfVxuXG4gIHZhciB2bSA9IHZub2RlLmNvbnRleHQ7XG4gIHZhciByZWYgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSB8fCB2bm9kZS5lbG07XG4gIHZhciByZWZzID0gdm0uJHJlZnM7XG4gIGlmIChpc1JlbW92YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICByZW1vdmUocmVmc1trZXldLCByZWYpO1xuICAgIH0gZWxzZSBpZiAocmVmc1trZXldID09PSByZWYpIHtcbiAgICAgIHJlZnNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZub2RlLmRhdGEucmVmSW5Gb3IpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICAgIHJlZnNba2V5XSA9IFtyZWZdO1xuICAgICAgfSBlbHNlIGlmIChyZWZzW2tleV0uaW5kZXhPZihyZWYpIDwgMCkge1xuICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICAgcmVmc1trZXldLnB1c2gocmVmKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVmc1trZXldID0gcmVmO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFZpcnR1YWwgRE9NIHBhdGNoaW5nIGFsZ29yaXRobSBiYXNlZCBvbiBTbmFiYmRvbSBieVxuICogU2ltb24gRnJpaXMgVmluZHVtIChAcGFsZGVwaW5kKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGFsZGVwaW5kL3NuYWJiZG9tL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBtb2RpZmllZCBieSBFdmFuIFlvdSAoQHl5eDk5MDgwMylcbiAqXG4gKiBOb3QgdHlwZS1jaGVja2luZyB0aGlzIGJlY2F1c2UgdGhpcyBmaWxlIGlzIHBlcmYtY3JpdGljYWwgYW5kIHRoZSBjb3N0XG4gKiBvZiBtYWtpbmcgZmxvdyB1bmRlcnN0YW5kIGl0IGlzIG5vdCB3b3J0aCBpdC5cbiAqL1xuXG52YXIgZW1wdHlOb2RlID0gbmV3IFZOb2RlKCcnLCB7fSwgW10pO1xuXG52YXIgaG9va3MgPSBbJ2NyZWF0ZScsICdhY3RpdmF0ZScsICd1cGRhdGUnLCAncmVtb3ZlJywgJ2Rlc3Ryb3knXTtcblxuZnVuY3Rpb24gc2FtZVZub2RlIChhLCBiKSB7XG4gIHJldHVybiAoXG4gICAgYS5rZXkgPT09IGIua2V5ICYmIChcbiAgICAgIChcbiAgICAgICAgYS50YWcgPT09IGIudGFnICYmXG4gICAgICAgIGEuaXNDb21tZW50ID09PSBiLmlzQ29tbWVudCAmJlxuICAgICAgICBpc0RlZihhLmRhdGEpID09PSBpc0RlZihiLmRhdGEpICYmXG4gICAgICAgIHNhbWVJbnB1dFR5cGUoYSwgYilcbiAgICAgICkgfHwgKFxuICAgICAgICBpc1RydWUoYS5pc0FzeW5jUGxhY2Vob2xkZXIpICYmXG4gICAgICAgIGEuYXN5bmNGYWN0b3J5ID09PSBiLmFzeW5jRmFjdG9yeSAmJlxuICAgICAgICBpc1VuZGVmKGIuYXN5bmNGYWN0b3J5LmVycm9yKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5mdW5jdGlvbiBzYW1lSW5wdXRUeXBlIChhLCBiKSB7XG4gIGlmIChhLnRhZyAhPT0gJ2lucHV0JykgeyByZXR1cm4gdHJ1ZSB9XG4gIHZhciBpO1xuICB2YXIgdHlwZUEgPSBpc0RlZihpID0gYS5kYXRhKSAmJiBpc0RlZihpID0gaS5hdHRycykgJiYgaS50eXBlO1xuICB2YXIgdHlwZUIgPSBpc0RlZihpID0gYi5kYXRhKSAmJiBpc0RlZihpID0gaS5hdHRycykgJiYgaS50eXBlO1xuICByZXR1cm4gdHlwZUEgPT09IHR5cGVCIHx8IGlzVGV4dElucHV0VHlwZSh0eXBlQSkgJiYgaXNUZXh0SW5wdXRUeXBlKHR5cGVCKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlUb09sZElkeCAoY2hpbGRyZW4sIGJlZ2luSWR4LCBlbmRJZHgpIHtcbiAgdmFyIGksIGtleTtcbiAgdmFyIG1hcCA9IHt9O1xuICBmb3IgKGkgPSBiZWdpbklkeDsgaSA8PSBlbmRJZHg7ICsraSkge1xuICAgIGtleSA9IGNoaWxkcmVuW2ldLmtleTtcbiAgICBpZiAoaXNEZWYoa2V5KSkgeyBtYXBba2V5XSA9IGk7IH1cbiAgfVxuICByZXR1cm4gbWFwXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdGNoRnVuY3Rpb24gKGJhY2tlbmQpIHtcbiAgdmFyIGksIGo7XG4gIHZhciBjYnMgPSB7fTtcblxuICB2YXIgbW9kdWxlcyA9IGJhY2tlbmQubW9kdWxlcztcbiAgdmFyIG5vZGVPcHMgPSBiYWNrZW5kLm5vZGVPcHM7XG5cbiAgZm9yIChpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgKytpKSB7XG4gICAgY2JzW2hvb2tzW2ldXSA9IFtdO1xuICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZiAoaXNEZWYobW9kdWxlc1tqXVtob29rc1tpXV0pKSB7XG4gICAgICAgIGNic1tob29rc1tpXV0ucHVzaChtb2R1bGVzW2pdW2hvb2tzW2ldXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW1wdHlOb2RlQXQgKGVsbSkge1xuICAgIHJldHVybiBuZXcgVk5vZGUobm9kZU9wcy50YWdOYW1lKGVsbSkudG9Mb3dlckNhc2UoKSwge30sIFtdLCB1bmRlZmluZWQsIGVsbSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJtQ2IgKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICBmdW5jdGlvbiByZW1vdmUkJDEgKCkge1xuICAgICAgaWYgKC0tcmVtb3ZlJCQxLmxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgICByZW1vdmVOb2RlKGNoaWxkRWxtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlJCQxLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICByZXR1cm4gcmVtb3ZlJCQxXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVOb2RlIChlbCkge1xuICAgIHZhciBwYXJlbnQgPSBub2RlT3BzLnBhcmVudE5vZGUoZWwpO1xuICAgIC8vIGVsZW1lbnQgbWF5IGhhdmUgYWxyZWFkeSBiZWVuIHJlbW92ZWQgZHVlIHRvIHYtaHRtbCAvIHYtdGV4dFxuICAgIGlmIChpc0RlZihwYXJlbnQpKSB7XG4gICAgICBub2RlT3BzLnJlbW92ZUNoaWxkKHBhcmVudCwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVW5rbm93bkVsZW1lbnQkJDEgKHZub2RlLCBpblZQcmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIWluVlByZSAmJlxuICAgICAgIXZub2RlLm5zICYmXG4gICAgICAhKFxuICAgICAgICBjb25maWcuaWdub3JlZEVsZW1lbnRzLmxlbmd0aCAmJlxuICAgICAgICBjb25maWcuaWdub3JlZEVsZW1lbnRzLnNvbWUoZnVuY3Rpb24gKGlnbm9yZSkge1xuICAgICAgICAgIHJldHVybiBpc1JlZ0V4cChpZ25vcmUpXG4gICAgICAgICAgICA/IGlnbm9yZS50ZXN0KHZub2RlLnRhZylcbiAgICAgICAgICAgIDogaWdub3JlID09PSB2bm9kZS50YWdcbiAgICAgICAgfSlcbiAgICAgICkgJiZcbiAgICAgIGNvbmZpZy5pc1Vua25vd25FbGVtZW50KHZub2RlLnRhZylcbiAgICApXG4gIH1cblxuICB2YXIgY3JlYXRpbmdFbG1JblZQcmUgPSAwO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsbSAoXG4gICAgdm5vZGUsXG4gICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLFxuICAgIHBhcmVudEVsbSxcbiAgICByZWZFbG0sXG4gICAgbmVzdGVkLFxuICAgIG93bmVyQXJyYXksXG4gICAgaW5kZXhcbiAgKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLmVsbSkgJiYgaXNEZWYob3duZXJBcnJheSkpIHtcbiAgICAgIC8vIFRoaXMgdm5vZGUgd2FzIHVzZWQgaW4gYSBwcmV2aW91cyByZW5kZXIhXG4gICAgICAvLyBub3cgaXQncyB1c2VkIGFzIGEgbmV3IG5vZGUsIG92ZXJ3cml0aW5nIGl0cyBlbG0gd291bGQgY2F1c2VcbiAgICAgIC8vIHBvdGVudGlhbCBwYXRjaCBlcnJvcnMgZG93biB0aGUgcm9hZCB3aGVuIGl0J3MgdXNlZCBhcyBhbiBpbnNlcnRpb25cbiAgICAgIC8vIHJlZmVyZW5jZSBub2RlLiBJbnN0ZWFkLCB3ZSBjbG9uZSB0aGUgbm9kZSBvbi1kZW1hbmQgYmVmb3JlIGNyZWF0aW5nXG4gICAgICAvLyBhc3NvY2lhdGVkIERPTSBlbGVtZW50IGZvciBpdC5cbiAgICAgIHZub2RlID0gb3duZXJBcnJheVtpbmRleF0gPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgICB9XG5cbiAgICB2bm9kZS5pc1Jvb3RJbnNlcnQgPSAhbmVzdGVkOyAvLyBmb3IgdHJhbnNpdGlvbiBlbnRlciBjaGVja1xuICAgIGlmIChjcmVhdGVDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcbiAgICBpZiAoaXNEZWYodGFnKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5wcmUpIHtcbiAgICAgICAgICBjcmVhdGluZ0VsbUluVlByZSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Vua25vd25FbGVtZW50JCQxKHZub2RlLCBjcmVhdGluZ0VsbUluVlByZSkpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgJ1Vua25vd24gY3VzdG9tIGVsZW1lbnQ6IDwnICsgdGFnICsgJz4gLSBkaWQgeW91ICcgK1xuICAgICAgICAgICAgJ3JlZ2lzdGVyIHRoZSBjb21wb25lbnQgY29ycmVjdGx5PyBGb3IgcmVjdXJzaXZlIGNvbXBvbmVudHMsICcgK1xuICAgICAgICAgICAgJ21ha2Ugc3VyZSB0byBwcm92aWRlIHRoZSBcIm5hbWVcIiBvcHRpb24uJyxcbiAgICAgICAgICAgIHZub2RlLmNvbnRleHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmVsbSA9IHZub2RlLm5zXG4gICAgICAgID8gbm9kZU9wcy5jcmVhdGVFbGVtZW50TlModm5vZGUubnMsIHRhZylcbiAgICAgICAgOiBub2RlT3BzLmNyZWF0ZUVsZW1lbnQodGFnLCB2bm9kZSk7XG4gICAgICBzZXRTY29wZSh2bm9kZSk7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAge1xuICAgICAgICBjcmVhdGVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZGF0YSAmJiBkYXRhLnByZSkge1xuICAgICAgICBjcmVhdGluZ0VsbUluVlByZS0tO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkpIHtcbiAgICAgIHZub2RlLmVsbSA9IG5vZGVPcHMuY3JlYXRlQ29tbWVudCh2bm9kZS50ZXh0KTtcbiAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm5vZGUuZWxtID0gbm9kZU9wcy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KTtcbiAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgdmFyIGkgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihpKSkge1xuICAgICAgdmFyIGlzUmVhY3RpdmF0ZWQgPSBpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaS5rZWVwQWxpdmU7XG4gICAgICBpZiAoaXNEZWYoaSA9IGkuaG9vaykgJiYgaXNEZWYoaSA9IGkuaW5pdCkpIHtcbiAgICAgICAgaSh2bm9kZSwgZmFsc2UgLyogaHlkcmF0aW5nICovKTtcbiAgICAgIH1cbiAgICAgIC8vIGFmdGVyIGNhbGxpbmcgdGhlIGluaXQgaG9vaywgaWYgdGhlIHZub2RlIGlzIGEgY2hpbGQgY29tcG9uZW50XG4gICAgICAvLyBpdCBzaG91bGQndmUgY3JlYXRlZCBhIGNoaWxkIGluc3RhbmNlIGFuZCBtb3VudGVkIGl0LiB0aGUgY2hpbGRcbiAgICAgIC8vIGNvbXBvbmVudCBhbHNvIGhhcyBzZXQgdGhlIHBsYWNlaG9sZGVyIHZub2RlJ3MgZWxtLlxuICAgICAgLy8gaW4gdGhhdCBjYXNlIHdlIGNhbiBqdXN0IHJldHVybiB0aGUgZWxlbWVudCBhbmQgYmUgZG9uZS5cbiAgICAgIGlmIChpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgICAgICBpZiAoaXNUcnVlKGlzUmVhY3RpdmF0ZWQpKSB7XG4gICAgICAgICAgcmVhY3RpdmF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0Q29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLmRhdGEucGVuZGluZ0luc2VydCkpIHtcbiAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoLmFwcGx5KGluc2VydGVkVm5vZGVRdWV1ZSwgdm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0KTtcbiAgICAgIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCA9IG51bGw7XG4gICAgfVxuICAgIHZub2RlLmVsbSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlLiRlbDtcbiAgICBpZiAoaXNQYXRjaGFibGUodm5vZGUpKSB7XG4gICAgICBpbnZva2VDcmVhdGVIb29rcyh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZW1wdHkgY29tcG9uZW50IHJvb3QuXG4gICAgICAvLyBza2lwIGFsbCBlbGVtZW50LXJlbGF0ZWQgbW9kdWxlcyBleGNlcHQgZm9yIHJlZiAoIzM0NTUpXG4gICAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gaW52b2tlIHRoZSBpbnNlcnQgaG9va1xuICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2godm5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWN0aXZhdGVDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSB7XG4gICAgdmFyIGk7XG4gICAgLy8gaGFjayBmb3IgIzQzMzk6IGEgcmVhY3RpdmF0ZWQgY29tcG9uZW50IHdpdGggaW5uZXIgdHJhbnNpdGlvblxuICAgIC8vIGRvZXMgbm90IHRyaWdnZXIgYmVjYXVzZSB0aGUgaW5uZXIgbm9kZSdzIGNyZWF0ZWQgaG9va3MgYXJlIG5vdCBjYWxsZWRcbiAgICAvLyBhZ2Fpbi4gSXQncyBub3QgaWRlYWwgdG8gaW52b2x2ZSBtb2R1bGUtc3BlY2lmaWMgbG9naWMgaW4gaGVyZSBidXRcbiAgICAvLyB0aGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYSBiZXR0ZXIgd2F5IHRvIGRvIGl0LlxuICAgIHZhciBpbm5lck5vZGUgPSB2bm9kZTtcbiAgICB3aGlsZSAoaW5uZXJOb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICBpbm5lck5vZGUgPSBpbm5lck5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKGlzRGVmKGkgPSBpbm5lck5vZGUuZGF0YSkgJiYgaXNEZWYoaSA9IGkudHJhbnNpdGlvbikpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5hY3RpdmF0ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGNicy5hY3RpdmF0ZVtpXShlbXB0eU5vZGUsIGlubmVyTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2goaW5uZXJOb2RlKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdW5saWtlIGEgbmV3bHkgY3JlYXRlZCBjb21wb25lbnQsXG4gICAgLy8gYSByZWFjdGl2YXRlZCBrZWVwLWFsaXZlIGNvbXBvbmVudCBkb2Vzbid0IGluc2VydCBpdHNlbGZcbiAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnQgKHBhcmVudCwgZWxtLCByZWYkJDEpIHtcbiAgICBpZiAoaXNEZWYocGFyZW50KSkge1xuICAgICAgaWYgKGlzRGVmKHJlZiQkMSkpIHtcbiAgICAgICAgaWYgKG5vZGVPcHMucGFyZW50Tm9kZShyZWYkJDEpID09PSBwYXJlbnQpIHtcbiAgICAgICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnQsIGVsbSwgcmVmJCQxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZChwYXJlbnQsIGVsbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRyZW4gKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjaGVja0R1cGxpY2F0ZUtleXMoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICBjcmVhdGVFbG0oY2hpbGRyZW5baV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgdm5vZGUuZWxtLCBudWxsLCB0cnVlLCBjaGlsZHJlbiwgaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZSh2bm9kZS50ZXh0KSkge1xuICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZCh2bm9kZS5lbG0sIG5vZGVPcHMuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKHZub2RlLnRleHQpKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXRjaGFibGUgKHZub2RlKSB7XG4gICAgd2hpbGUgKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICB2bm9kZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRGVmKHZub2RlLnRhZylcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUNyZWF0ZUhvb2tzICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIGkgPSB2bm9kZS5kYXRhLmhvb2s7IC8vIFJldXNlIHZhcmlhYmxlXG4gICAgaWYgKGlzRGVmKGkpKSB7XG4gICAgICBpZiAoaXNEZWYoaS5jcmVhdGUpKSB7IGkuY3JlYXRlKGVtcHR5Tm9kZSwgdm5vZGUpOyB9XG4gICAgICBpZiAoaXNEZWYoaS5pbnNlcnQpKSB7IGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTsgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBzY29wZSBpZCBhdHRyaWJ1dGUgZm9yIHNjb3BlZCBDU1MuXG4gIC8vIHRoaXMgaXMgaW1wbGVtZW50ZWQgYXMgYSBzcGVjaWFsIGNhc2UgdG8gYXZvaWQgdGhlIG92ZXJoZWFkXG4gIC8vIG9mIGdvaW5nIHRocm91Z2ggdGhlIG5vcm1hbCBhdHRyaWJ1dGUgcGF0Y2hpbmcgcHJvY2Vzcy5cbiAgZnVuY3Rpb24gc2V0U2NvcGUgKHZub2RlKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5mblNjb3BlSWQpKSB7XG4gICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFuY2VzdG9yID0gdm5vZGU7XG4gICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgaWYgKGlzRGVmKGkgPSBhbmNlc3Rvci5jb250ZXh0KSAmJiBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZCkpIHtcbiAgICAgICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICAgICAgfVxuICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIHNsb3QgY29udGVudCB0aGV5IHNob3VsZCBhbHNvIGdldCB0aGUgc2NvcGVJZCBmcm9tIHRoZSBob3N0IGluc3RhbmNlLlxuICAgIGlmIChpc0RlZihpID0gYWN0aXZlSW5zdGFuY2UpICYmXG4gICAgICBpICE9PSB2bm9kZS5jb250ZXh0ICYmXG4gICAgICBpICE9PSB2bm9kZS5mbkNvbnRleHQgJiZcbiAgICAgIGlzRGVmKGkgPSBpLiRvcHRpb25zLl9zY29wZUlkKVxuICAgICkge1xuICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkVm5vZGVzIChwYXJlbnRFbG0sIHJlZkVsbSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICBjcmVhdGVFbG0odm5vZGVzW3N0YXJ0SWR4XSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSwgZmFsc2UsIHZub2Rlcywgc3RhcnRJZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZURlc3Ryb3lIb29rICh2bm9kZSkge1xuICAgIHZhciBpLCBqO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5kZXN0cm95KSkgeyBpKHZub2RlKTsgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5kZXN0cm95Lmxlbmd0aDsgKytpKSB7IGNicy5kZXN0cm95W2ldKHZub2RlKTsgfVxuICAgIH1cbiAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNoaWxkcmVuKSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGludm9rZURlc3Ryb3lIb29rKHZub2RlLmNoaWxkcmVuW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVWbm9kZXMgKHBhcmVudEVsbSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgdmFyIGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGNoLnRhZykpIHtcbiAgICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGNoKTtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaCk7XG4gICAgICAgIH0gZWxzZSB7IC8vIFRleHQgbm9kZVxuICAgICAgICAgIHJlbW92ZU5vZGUoY2guZWxtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2sgKHZub2RlLCBybSkge1xuICAgIGlmIChpc0RlZihybSkgfHwgaXNEZWYodm5vZGUuZGF0YSkpIHtcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGNicy5yZW1vdmUubGVuZ3RoICsgMTtcbiAgICAgIGlmIChpc0RlZihybSkpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSBhIHJlY3Vyc2l2ZWx5IHBhc3NlZCBkb3duIHJtIGNhbGxiYWNrXG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBsaXN0ZW5lcnMgY291bnRcbiAgICAgICAgcm0ubGlzdGVuZXJzICs9IGxpc3RlbmVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRpcmVjdGx5IHJlbW92aW5nXG4gICAgICAgIHJtID0gY3JlYXRlUm1DYih2bm9kZS5lbG0sIGxpc3RlbmVycyk7XG4gICAgICB9XG4gICAgICAvLyByZWN1cnNpdmVseSBpbnZva2UgaG9va3Mgb24gY2hpbGQgY29tcG9uZW50IHJvb3Qgbm9kZVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaXNEZWYoaSA9IGkuX3Zub2RlKSAmJiBpc0RlZihpLmRhdGEpKSB7XG4gICAgICAgIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2soaSwgcm0pO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5yZW1vdmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY2JzLnJlbW92ZVtpXSh2bm9kZSwgcm0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5kYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnJlbW92ZSkpIHtcbiAgICAgICAgaSh2bm9kZSwgcm0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm0oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlTm9kZSh2bm9kZS5lbG0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuIChwYXJlbnRFbG0sIG9sZENoLCBuZXdDaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KSB7XG4gICAgdmFyIG9sZFN0YXJ0SWR4ID0gMDtcbiAgICB2YXIgbmV3U3RhcnRJZHggPSAwO1xuICAgIHZhciBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICAgIHZhciBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gICAgdmFyIG9sZEVuZFZub2RlID0gb2xkQ2hbb2xkRW5kSWR4XTtcbiAgICB2YXIgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICAgIHZhciBuZXdFbmRWbm9kZSA9IG5ld0NoW25ld0VuZElkeF07XG4gICAgdmFyIG9sZEtleVRvSWR4LCBpZHhJbk9sZCwgdm5vZGVUb01vdmUsIHJlZkVsbTtcblxuICAgIC8vIHJlbW92ZU9ubHkgaXMgYSBzcGVjaWFsIGZsYWcgdXNlZCBvbmx5IGJ5IDx0cmFuc2l0aW9uLWdyb3VwPlxuICAgIC8vIHRvIGVuc3VyZSByZW1vdmVkIGVsZW1lbnRzIHN0YXkgaW4gY29ycmVjdCByZWxhdGl2ZSBwb3NpdGlvbnNcbiAgICAvLyBkdXJpbmcgbGVhdmluZyB0cmFuc2l0aW9uc1xuICAgIHZhciBjYW5Nb3ZlID0gIXJlbW92ZU9ubHk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKG5ld0NoKTtcbiAgICB9XG5cbiAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgaWYgKGlzVW5kZWYob2xkU3RhcnRWbm9kZSkpIHtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdOyAvLyBWbm9kZSBoYXMgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkRW5kVm5vZGUpKSB7XG4gICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3RW5kSWR4KTtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7IC8vIFZub2RlIG1vdmVkIHJpZ2h0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld0VuZElkeCk7XG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCBsZWZ0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZEVuZFZub2RlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzVW5kZWYob2xkS2V5VG9JZHgpKSB7IG9sZEtleVRvSWR4ID0gY3JlYXRlS2V5VG9PbGRJZHgob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpOyB9XG4gICAgICAgIGlkeEluT2xkID0gaXNEZWYobmV3U3RhcnRWbm9kZS5rZXkpXG4gICAgICAgICAgPyBvbGRLZXlUb0lkeFtuZXdTdGFydFZub2RlLmtleV1cbiAgICAgICAgICA6IGZpbmRJZHhJbk9sZChuZXdTdGFydFZub2RlLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkgeyAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGZhbHNlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZub2RlVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgIGlmIChzYW1lVm5vZGUodm5vZGVUb01vdmUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICBwYXRjaFZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgdm5vZGVUb01vdmUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNhbWUga2V5IGJ1dCBkaWZmZXJlbnQgZWxlbWVudC4gdHJlYXQgYXMgbmV3IGVsZW1lbnRcbiAgICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGZhbHNlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgICAgcmVmRWxtID0gaXNVbmRlZihuZXdDaFtuZXdFbmRJZHggKyAxXSkgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uZWxtO1xuICAgICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgcmVmRWxtLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICB9IGVsc2UgaWYgKG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XG4gICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tEdXBsaWNhdGVLZXlzIChjaGlsZHJlbikge1xuICAgIHZhciBzZWVuS2V5cyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2bm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgdmFyIGtleSA9IHZub2RlLmtleTtcbiAgICAgIGlmIChpc0RlZihrZXkpKSB7XG4gICAgICAgIGlmIChzZWVuS2V5c1trZXldKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIChcIkR1cGxpY2F0ZSBrZXlzIGRldGVjdGVkOiAnXCIgKyBrZXkgKyBcIicuIFRoaXMgbWF5IGNhdXNlIGFuIHVwZGF0ZSBlcnJvci5cIiksXG4gICAgICAgICAgICB2bm9kZS5jb250ZXh0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWVuS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRJZHhJbk9sZCAobm9kZSwgb2xkQ2gsIHN0YXJ0LCBlbmQpIHtcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdmFyIGMgPSBvbGRDaFtpXTtcbiAgICAgIGlmIChpc0RlZihjKSAmJiBzYW1lVm5vZGUobm9kZSwgYykpIHsgcmV0dXJuIGkgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdGNoVm5vZGUgKFxuICAgIG9sZFZub2RlLFxuICAgIHZub2RlLFxuICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICBvd25lckFycmF5LFxuICAgIGluZGV4LFxuICAgIHJlbW92ZU9ubHlcbiAgKSB7XG4gICAgaWYgKG9sZFZub2RlID09PSB2bm9kZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRGVmKHZub2RlLmVsbSkgJiYgaXNEZWYob3duZXJBcnJheSkpIHtcbiAgICAgIC8vIGNsb25lIHJldXNlZCB2bm9kZVxuICAgICAgdm5vZGUgPSBvd25lckFycmF5W2luZGV4XSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICAgIH1cblxuICAgIHZhciBlbG0gPSB2bm9kZS5lbG0gPSBvbGRWbm9kZS5lbG07XG5cbiAgICBpZiAoaXNUcnVlKG9sZFZub2RlLmlzQXN5bmNQbGFjZWhvbGRlcikpIHtcbiAgICAgIGlmIChpc0RlZih2bm9kZS5hc3luY0ZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgIGh5ZHJhdGUob2xkVm5vZGUuZWxtLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlLmlzQXN5bmNQbGFjZWhvbGRlciA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyByZXVzZSBlbGVtZW50IGZvciBzdGF0aWMgdHJlZXMuXG4gICAgLy8gbm90ZSB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIHZub2RlIGlzIGNsb25lZCAtXG4gICAgLy8gaWYgdGhlIG5ldyBub2RlIGlzIG5vdCBjbG9uZWQgaXQgbWVhbnMgdGhlIHJlbmRlciBmdW5jdGlvbnMgaGF2ZSBiZWVuXG4gICAgLy8gcmVzZXQgYnkgdGhlIGhvdC1yZWxvYWQtYXBpIGFuZCB3ZSBuZWVkIHRvIGRvIGEgcHJvcGVyIHJlLXJlbmRlci5cbiAgICBpZiAoaXNUcnVlKHZub2RlLmlzU3RhdGljKSAmJlxuICAgICAgaXNUcnVlKG9sZFZub2RlLmlzU3RhdGljKSAmJlxuICAgICAgdm5vZGUua2V5ID09PSBvbGRWbm9kZS5rZXkgJiZcbiAgICAgIChpc1RydWUodm5vZGUuaXNDbG9uZWQpIHx8IGlzVHJ1ZSh2bm9kZS5pc09uY2UpKVxuICAgICkge1xuICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBpO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkucHJlcGF0Y2gpKSB7XG4gICAgICBpKG9sZFZub2RlLCB2bm9kZSk7XG4gICAgfVxuXG4gICAgdmFyIG9sZENoID0gb2xkVm5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGNoID0gdm5vZGUuY2hpbGRyZW47XG4gICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzUGF0Y2hhYmxlKHZub2RlKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy51cGRhdGUubGVuZ3RoOyArK2kpIHsgY2JzLnVwZGF0ZVtpXShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkudXBkYXRlKSkgeyBpKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICB9XG4gICAgaWYgKGlzVW5kZWYodm5vZGUudGV4dCkpIHtcbiAgICAgIGlmIChpc0RlZihvbGRDaCkgJiYgaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChvbGRDaCAhPT0gY2gpIHsgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaCwgY2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSk7IH1cbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKGNoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHsgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sICcnKTsgfVxuICAgICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBjaCwgMCwgY2gubGVuZ3RoIC0gMSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkQ2gpKSB7XG4gICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHtcbiAgICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sICcnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnRleHQgIT09IHZub2RlLnRleHQpIHtcbiAgICAgIG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCB2bm9kZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkucG9zdHBhdGNoKSkgeyBpKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VJbnNlcnRIb29rICh2bm9kZSwgcXVldWUsIGluaXRpYWwpIHtcbiAgICAvLyBkZWxheSBpbnNlcnQgaG9va3MgZm9yIGNvbXBvbmVudCByb290IG5vZGVzLCBpbnZva2UgdGhlbSBhZnRlciB0aGVcbiAgICAvLyBlbGVtZW50IGlzIHJlYWxseSBpbnNlcnRlZFxuICAgIGlmIChpc1RydWUoaW5pdGlhbCkgJiYgaXNEZWYodm5vZGUucGFyZW50KSkge1xuICAgICAgdm5vZGUucGFyZW50LmRhdGEucGVuZGluZ0luc2VydCA9IHF1ZXVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHF1ZXVlW2ldLmRhdGEuaG9vay5pbnNlcnQocXVldWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBoeWRyYXRpb25CYWlsZWQgPSBmYWxzZTtcbiAgLy8gbGlzdCBvZiBtb2R1bGVzIHRoYXQgY2FuIHNraXAgY3JlYXRlIGhvb2sgZHVyaW5nIGh5ZHJhdGlvbiBiZWNhdXNlIHRoZXlcbiAgLy8gYXJlIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIGNsaWVudCBvciBoYXMgbm8gbmVlZCBmb3IgaW5pdGlhbGl6YXRpb25cbiAgLy8gTm90ZTogc3R5bGUgaXMgZXhjbHVkZWQgYmVjYXVzZSBpdCByZWxpZXMgb24gaW5pdGlhbCBjbG9uZSBmb3IgZnV0dXJlXG4gIC8vIGRlZXAgdXBkYXRlcyAoIzcwNjMpLlxuICB2YXIgaXNSZW5kZXJlZE1vZHVsZSA9IG1ha2VNYXAoJ2F0dHJzLGNsYXNzLHN0YXRpY0NsYXNzLHN0YXRpY1N0eWxlLGtleScpO1xuXG4gIC8vIE5vdGU6IHRoaXMgaXMgYSBicm93c2VyLW9ubHkgZnVuY3Rpb24gc28gd2UgY2FuIGFzc3VtZSBlbG1zIGFyZSBET00gbm9kZXMuXG4gIGZ1bmN0aW9uIGh5ZHJhdGUgKGVsbSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgaW5WUHJlKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgaW5WUHJlID0gaW5WUHJlIHx8IChkYXRhICYmIGRhdGEucHJlKTtcbiAgICB2bm9kZS5lbG0gPSBlbG07XG5cbiAgICBpZiAoaXNUcnVlKHZub2RlLmlzQ29tbWVudCkgJiYgaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5KSkge1xuICAgICAgdm5vZGUuaXNBc3luY1BsYWNlaG9sZGVyID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIGFzc2VydCBub2RlIG1hdGNoXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghYXNzZXJ0Tm9kZU1hdGNoKGVsbSwgdm5vZGUsIGluVlByZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmluaXQpKSB7IGkodm5vZGUsIHRydWUgLyogaHlkcmF0aW5nICovKTsgfVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICAgICAgLy8gY2hpbGQgY29tcG9uZW50LiBpdCBzaG91bGQgaGF2ZSBoeWRyYXRlZCBpdHMgb3duIHRyZWUuXG4gICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZih0YWcpKSB7XG4gICAgICBpZiAoaXNEZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgIC8vIGVtcHR5IGVsZW1lbnQsIGFsbG93IGNsaWVudCB0byBwaWNrIHVwIGFuZCBwb3B1bGF0ZSBjaGlsZHJlblxuICAgICAgICBpZiAoIWVsbS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICBjcmVhdGVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdi1odG1sIGFuZCBkb21Qcm9wczogaW5uZXJIVE1MXG4gICAgICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhKSAmJiBpc0RlZihpID0gaS5kb21Qcm9wcykgJiYgaXNEZWYoaSA9IGkuaW5uZXJIVE1MKSkge1xuICAgICAgICAgICAgaWYgKGkgIT09IGVsbS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgIWh5ZHJhdGlvbkJhaWxlZFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFyZW50OiAnLCBlbG0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2VydmVyIGlubmVySFRNTDogJywgaSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdjbGllbnQgaW5uZXJIVE1MOiAnLCBlbG0uaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaXRlcmF0ZSBhbmQgY29tcGFyZSBjaGlsZHJlbiBsaXN0c1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZSA9IGVsbS5maXJzdENoaWxkO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2hpbGRyZW4ubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSB8fCAhaHlkcmF0ZShjaGlsZE5vZGUsIGNoaWxkcmVuW2kkMV0sIGluc2VydGVkVm5vZGVRdWV1ZSwgaW5WUHJlKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIGNoaWxkTm9kZSBpcyBub3QgbnVsbCwgaXQgbWVhbnMgdGhlIGFjdHVhbCBjaGlsZE5vZGVzIGxpc3QgaXNcbiAgICAgICAgICAgIC8vIGxvbmdlciB0aGFuIHRoZSB2aXJ0dWFsIGNoaWxkcmVuIGxpc3QuXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuTWF0Y2ggfHwgY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICFoeWRyYXRpb25CYWlsZWRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaHlkcmF0aW9uQmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmVudDogJywgZWxtKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01pc21hdGNoaW5nIGNoaWxkTm9kZXMgdnMuIFZOb2RlczogJywgZWxtLmNoaWxkTm9kZXMsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgICB2YXIgZnVsbEludm9rZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIGlmICghaXNSZW5kZXJlZE1vZHVsZShrZXkpKSB7XG4gICAgICAgICAgICBmdWxsSW52b2tlID0gdHJ1ZTtcbiAgICAgICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmdWxsSW52b2tlICYmIGRhdGFbJ2NsYXNzJ10pIHtcbiAgICAgICAgICAvLyBlbnN1cmUgY29sbGVjdGluZyBkZXBzIGZvciBkZWVwIGNsYXNzIGJpbmRpbmdzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICAgIHRyYXZlcnNlKGRhdGFbJ2NsYXNzJ10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbG0uZGF0YSAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgZWxtLmRhdGEgPSB2bm9kZS50ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gYXNzZXJ0Tm9kZU1hdGNoIChub2RlLCB2bm9kZSwgaW5WUHJlKSB7XG4gICAgaWYgKGlzRGVmKHZub2RlLnRhZykpIHtcbiAgICAgIHJldHVybiB2bm9kZS50YWcuaW5kZXhPZigndnVlLWNvbXBvbmVudCcpID09PSAwIHx8IChcbiAgICAgICAgIWlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGluVlByZSkgJiZcbiAgICAgICAgdm5vZGUudGFnLnRvTG93ZXJDYXNlKCkgPT09IChub2RlLnRhZ05hbWUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAodm5vZGUuaXNDb21tZW50ID8gOCA6IDMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHBhdGNoIChvbGRWbm9kZSwgdm5vZGUsIGh5ZHJhdGluZywgcmVtb3ZlT25seSkge1xuICAgIGlmIChpc1VuZGVmKHZub2RlKSkge1xuICAgICAgaWYgKGlzRGVmKG9sZFZub2RlKSkgeyBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7IH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBpc0luaXRpYWxQYXRjaCA9IGZhbHNlO1xuICAgIHZhciBpbnNlcnRlZFZub2RlUXVldWUgPSBbXTtcblxuICAgIGlmIChpc1VuZGVmKG9sZFZub2RlKSkge1xuICAgICAgLy8gZW1wdHkgbW91bnQgKGxpa2VseSBhcyBjb21wb25lbnQpLCBjcmVhdGUgbmV3IHJvb3QgZWxlbWVudFxuICAgICAgaXNJbml0aWFsUGF0Y2ggPSB0cnVlO1xuICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaXNSZWFsRWxlbWVudCA9IGlzRGVmKG9sZFZub2RlLm5vZGVUeXBlKTtcbiAgICAgIGlmICghaXNSZWFsRWxlbWVudCAmJiBzYW1lVm5vZGUob2xkVm5vZGUsIHZub2RlKSkge1xuICAgICAgICAvLyBwYXRjaCBleGlzdGluZyByb290IG5vZGVcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbnVsbCwgbnVsbCwgcmVtb3ZlT25seSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNSZWFsRWxlbWVudCkge1xuICAgICAgICAgIC8vIG1vdW50aW5nIHRvIGEgcmVhbCBlbGVtZW50XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBzZXJ2ZXItcmVuZGVyZWQgY29udGVudCBhbmQgaWYgd2UgY2FuIHBlcmZvcm1cbiAgICAgICAgICAvLyBhIHN1Y2Nlc3NmdWwgaHlkcmF0aW9uLlxuICAgICAgICAgIGlmIChvbGRWbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBvbGRWbm9kZS5oYXNBdHRyaWJ1dGUoU1NSX0FUVFIpKSB7XG4gICAgICAgICAgICBvbGRWbm9kZS5yZW1vdmVBdHRyaWJ1dGUoU1NSX0FUVFIpO1xuICAgICAgICAgICAgaHlkcmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzVHJ1ZShoeWRyYXRpbmcpKSB7XG4gICAgICAgICAgICBpZiAoaHlkcmF0ZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkpIHtcbiAgICAgICAgICAgICAgaW52b2tlSW5zZXJ0SG9vayh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG9sZFZub2RlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgd2FybihcbiAgICAgICAgICAgICAgICAnVGhlIGNsaWVudC1zaWRlIHJlbmRlcmVkIHZpcnR1YWwgRE9NIHRyZWUgaXMgbm90IG1hdGNoaW5nICcgK1xuICAgICAgICAgICAgICAgICdzZXJ2ZXItcmVuZGVyZWQgY29udGVudC4gVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGluY29ycmVjdCAnICtcbiAgICAgICAgICAgICAgICAnSFRNTCBtYXJrdXAsIGZvciBleGFtcGxlIG5lc3RpbmcgYmxvY2stbGV2ZWwgZWxlbWVudHMgaW5zaWRlICcgK1xuICAgICAgICAgICAgICAgICc8cD4sIG9yIG1pc3NpbmcgPHRib2R5Pi4gQmFpbGluZyBoeWRyYXRpb24gYW5kIHBlcmZvcm1pbmcgJyArXG4gICAgICAgICAgICAgICAgJ2Z1bGwgY2xpZW50LXNpZGUgcmVuZGVyLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZWl0aGVyIG5vdCBzZXJ2ZXItcmVuZGVyZWQsIG9yIGh5ZHJhdGlvbiBmYWlsZWQuXG4gICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IG5vZGUgYW5kIHJlcGxhY2UgaXRcbiAgICAgICAgICBvbGRWbm9kZSA9IGVtcHR5Tm9kZUF0KG9sZFZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGxhY2luZyBleGlzdGluZyBlbGVtZW50XG4gICAgICAgIHZhciBvbGRFbG0gPSBvbGRWbm9kZS5lbG07XG4gICAgICAgIHZhciBwYXJlbnRFbG0gPSBub2RlT3BzLnBhcmVudE5vZGUob2xkRWxtKTtcblxuICAgICAgICAvLyBjcmVhdGUgbmV3IG5vZGVcbiAgICAgICAgY3JlYXRlRWxtKFxuICAgICAgICAgIHZub2RlLFxuICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICAgICAgICAvLyBleHRyZW1lbHkgcmFyZSBlZGdlIGNhc2U6IGRvIG5vdCBpbnNlcnQgaWYgb2xkIGVsZW1lbnQgaXMgaW4gYVxuICAgICAgICAgIC8vIGxlYXZpbmcgdHJhbnNpdGlvbi4gT25seSBoYXBwZW5zIHdoZW4gY29tYmluaW5nIHRyYW5zaXRpb24gK1xuICAgICAgICAgIC8vIGtlZXAtYWxpdmUgKyBIT0NzLiAoIzQ1OTApXG4gICAgICAgICAgb2xkRWxtLl9sZWF2ZUNiID8gbnVsbCA6IHBhcmVudEVsbSxcbiAgICAgICAgICBub2RlT3BzLm5leHRTaWJsaW5nKG9sZEVsbSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB1cGRhdGUgcGFyZW50IHBsYWNlaG9sZGVyIG5vZGUgZWxlbWVudCwgcmVjdXJzaXZlbHlcbiAgICAgICAgaWYgKGlzRGVmKHZub2RlLnBhcmVudCkpIHtcbiAgICAgICAgICB2YXIgYW5jZXN0b3IgPSB2bm9kZS5wYXJlbnQ7XG4gICAgICAgICAgdmFyIHBhdGNoYWJsZSA9IGlzUGF0Y2hhYmxlKHZub2RlKTtcbiAgICAgICAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2JzLmRlc3Ryb3kubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgY2JzLmRlc3Ryb3lbaV0oYW5jZXN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5jZXN0b3IuZWxtID0gdm5vZGUuZWxtO1xuICAgICAgICAgICAgaWYgKHBhdGNoYWJsZSkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytpJDEpIHtcbiAgICAgICAgICAgICAgICBjYnMuY3JlYXRlW2kkMV0oZW1wdHlOb2RlLCBhbmNlc3Rvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gIzY1MTNcbiAgICAgICAgICAgICAgLy8gaW52b2tlIGluc2VydCBob29rcyB0aGF0IG1heSBoYXZlIGJlZW4gbWVyZ2VkIGJ5IGNyZWF0ZSBob29rcy5cbiAgICAgICAgICAgICAgLy8gZS5nLiBmb3IgZGlyZWN0aXZlcyB0aGF0IHVzZXMgdGhlIFwiaW5zZXJ0ZWRcIiBob29rLlxuICAgICAgICAgICAgICB2YXIgaW5zZXJ0ID0gYW5jZXN0b3IuZGF0YS5ob29rLmluc2VydDtcbiAgICAgICAgICAgICAgaWYgKGluc2VydC5tZXJnZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFydCBhdCBpbmRleCAxIHRvIGF2b2lkIHJlLWludm9raW5nIGNvbXBvbmVudCBtb3VudGVkIGhvb2tcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDIgPSAxOyBpJDIgPCBpbnNlcnQuZm5zLmxlbmd0aDsgaSQyKyspIHtcbiAgICAgICAgICAgICAgICAgIGluc2VydC5mbnNbaSQyXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJSZWYoYW5jZXN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVzdHJveSBvbGQgbm9kZVxuICAgICAgICBpZiAoaXNEZWYocGFyZW50RWxtKSkge1xuICAgICAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnRFbG0sIFtvbGRWbm9kZV0sIDAsIDApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRhZykpIHtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIGlzSW5pdGlhbFBhdGNoKTtcbiAgICByZXR1cm4gdm5vZGUuZWxtXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBkaXJlY3RpdmVzID0ge1xuICBjcmVhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gIHVwZGF0ZTogdXBkYXRlRGlyZWN0aXZlcyxcbiAgZGVzdHJveTogZnVuY3Rpb24gdW5iaW5kRGlyZWN0aXZlcyAodm5vZGUpIHtcbiAgICB1cGRhdGVEaXJlY3RpdmVzKHZub2RlLCBlbXB0eU5vZGUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVEaXJlY3RpdmVzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKG9sZFZub2RlLmRhdGEuZGlyZWN0aXZlcyB8fCB2bm9kZS5kYXRhLmRpcmVjdGl2ZXMpIHtcbiAgICBfdXBkYXRlKG9sZFZub2RlLCB2bm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3VwZGF0ZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBpc0NyZWF0ZSA9IG9sZFZub2RlID09PSBlbXB0eU5vZGU7XG4gIHZhciBpc0Rlc3Ryb3kgPSB2bm9kZSA9PT0gZW1wdHlOb2RlO1xuICB2YXIgb2xkRGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMShvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMsIG9sZFZub2RlLmNvbnRleHQpO1xuICB2YXIgbmV3RGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMSh2bm9kZS5kYXRhLmRpcmVjdGl2ZXMsIHZub2RlLmNvbnRleHQpO1xuXG4gIHZhciBkaXJzV2l0aEluc2VydCA9IFtdO1xuICB2YXIgZGlyc1dpdGhQb3N0cGF0Y2ggPSBbXTtcblxuICB2YXIga2V5LCBvbGREaXIsIGRpcjtcbiAgZm9yIChrZXkgaW4gbmV3RGlycykge1xuICAgIG9sZERpciA9IG9sZERpcnNba2V5XTtcbiAgICBkaXIgPSBuZXdEaXJzW2tleV07XG4gICAgaWYgKCFvbGREaXIpIHtcbiAgICAgIC8vIG5ldyBkaXJlY3RpdmUsIGJpbmRcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAnYmluZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICBpZiAoZGlyLmRlZiAmJiBkaXIuZGVmLmluc2VydGVkKSB7XG4gICAgICAgIGRpcnNXaXRoSW5zZXJ0LnB1c2goZGlyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXhpc3RpbmcgZGlyZWN0aXZlLCB1cGRhdGVcbiAgICAgIGRpci5vbGRWYWx1ZSA9IG9sZERpci52YWx1ZTtcbiAgICAgIGRpci5vbGRBcmcgPSBvbGREaXIuYXJnO1xuICAgICAgY2FsbEhvb2skMShkaXIsICd1cGRhdGUnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgaWYgKGRpci5kZWYgJiYgZGlyLmRlZi5jb21wb25lbnRVcGRhdGVkKSB7XG4gICAgICAgIGRpcnNXaXRoUG9zdHBhdGNoLnB1c2goZGlyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyc1dpdGhJbnNlcnQubGVuZ3RoKSB7XG4gICAgdmFyIGNhbGxJbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhJbnNlcnRbaV0sICdpbnNlcnRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaXNDcmVhdGUpIHtcbiAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAnaW5zZXJ0JywgY2FsbEluc2VydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxJbnNlcnQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGlyc1dpdGhQb3N0cGF0Y2gubGVuZ3RoKSB7XG4gICAgbWVyZ2VWTm9kZUhvb2sodm5vZGUsICdwb3N0cGF0Y2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhQb3N0cGF0Y2hbaV0sICdjb21wb25lbnRVcGRhdGVkJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICghaXNDcmVhdGUpIHtcbiAgICBmb3IgKGtleSBpbiBvbGREaXJzKSB7XG4gICAgICBpZiAoIW5ld0RpcnNba2V5XSkge1xuICAgICAgICAvLyBubyBsb25nZXIgcHJlc2VudCwgdW5iaW5kXG4gICAgICAgIGNhbGxIb29rJDEob2xkRGlyc1trZXldLCAndW5iaW5kJywgb2xkVm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZW1wdHlNb2RpZmllcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzJDEgKFxuICBkaXJzLFxuICB2bVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoIWRpcnMpIHtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gcmVzXG4gIH1cbiAgdmFyIGksIGRpcjtcbiAgZm9yIChpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICBkaXIgPSBkaXJzW2ldO1xuICAgIGlmICghZGlyLm1vZGlmaWVycykge1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBkaXIubW9kaWZpZXJzID0gZW1wdHlNb2RpZmllcnM7XG4gICAgfVxuICAgIHJlc1tnZXRSYXdEaXJOYW1lKGRpcildID0gZGlyO1xuICAgIGRpci5kZWYgPSByZXNvbHZlQXNzZXQodm0uJG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyLm5hbWUsIHRydWUpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldFJhd0Rpck5hbWUgKGRpcikge1xuICByZXR1cm4gZGlyLnJhd05hbWUgfHwgKChkaXIubmFtZSkgKyBcIi5cIiArIChPYmplY3Qua2V5cyhkaXIubW9kaWZpZXJzIHx8IHt9KS5qb2luKCcuJykpKVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayQxIChkaXIsIGhvb2ssIHZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KSB7XG4gIHZhciBmbiA9IGRpci5kZWYgJiYgZGlyLmRlZltob29rXTtcbiAgaWYgKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKHZub2RlLmVsbSwgZGlyLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm5vZGUuY29udGV4dCwgKFwiZGlyZWN0aXZlIFwiICsgKGRpci5uYW1lKSArIFwiIFwiICsgaG9vayArIFwiIGhvb2tcIikpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgYmFzZU1vZHVsZXMgPSBbXG4gIHJlZixcbiAgZGlyZWN0aXZlc1xuXTtcblxuLyogICovXG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIG9wdHMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBpZiAoaXNEZWYob3B0cykgJiYgb3B0cy5DdG9yLm9wdGlvbnMuaW5oZXJpdEF0dHJzID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEuYXR0cnMpICYmIGlzVW5kZWYodm5vZGUuZGF0YS5hdHRycykpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIga2V5LCBjdXIsIG9sZDtcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgdmFyIG9sZEF0dHJzID0gb2xkVm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcbiAgdmFyIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcbiAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gIGlmIChpc0RlZihhdHRycy5fX29iX18pKSB7XG4gICAgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzID0gZXh0ZW5kKHt9LCBhdHRycyk7XG4gIH1cblxuICBmb3IgKGtleSBpbiBhdHRycykge1xuICAgIGN1ciA9IGF0dHJzW2tleV07XG4gICAgb2xkID0gb2xkQXR0cnNba2V5XTtcbiAgICBpZiAob2xkICE9PSBjdXIpIHtcbiAgICAgIHNldEF0dHIoZWxtLCBrZXksIGN1cik7XG4gICAgfVxuICB9XG4gIC8vICM0MzkxOiBpbiBJRTksIHNldHRpbmcgdHlwZSBjYW4gcmVzZXQgdmFsdWUgZm9yIGlucHV0W3R5cGU9cmFkaW9dXG4gIC8vICM2NjY2OiBJRS9FZGdlIGZvcmNlcyBwcm9ncmVzcyB2YWx1ZSBkb3duIHRvIDEgYmVmb3JlIHNldHRpbmcgYSBtYXhcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICgoaXNJRSB8fCBpc0VkZ2UpICYmIGF0dHJzLnZhbHVlICE9PSBvbGRBdHRycy52YWx1ZSkge1xuICAgIHNldEF0dHIoZWxtLCAndmFsdWUnLCBhdHRycy52YWx1ZSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gb2xkQXR0cnMpIHtcbiAgICBpZiAoaXNVbmRlZihhdHRyc1trZXldKSkge1xuICAgICAgaWYgKGlzWGxpbmsoa2V5KSkge1xuICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgICAgfSBlbHNlIGlmICghaXNFbnVtZXJhdGVkQXR0cihrZXkpKSB7XG4gICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0QXR0ciAoZWwsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGVsLnRhZ05hbWUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuQXR0cihrZXkpKSB7XG4gICAgLy8gc2V0IGF0dHJpYnV0ZSBmb3IgYmxhbmsgdmFsdWVcbiAgICAvLyBlLmcuIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IG9uZTwvb3B0aW9uPlxuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRlY2huaWNhbGx5IGFsbG93ZnVsbHNjcmVlbiBpcyBhIGJvb2xlYW4gYXR0cmlidXRlIGZvciA8aWZyYW1lPixcbiAgICAgIC8vIGJ1dCBGbGFzaCBleHBlY3RzIGEgdmFsdWUgb2YgXCJ0cnVlXCIgd2hlbiB1c2VkIG9uIDxlbWJlZD4gdGFnXG4gICAgICB2YWx1ZSA9IGtleSA9PT0gJ2FsbG93ZnVsbHNjcmVlbicgJiYgZWwudGFnTmFtZSA9PT0gJ0VNQkVEJ1xuICAgICAgICA/ICd0cnVlJ1xuICAgICAgICA6IGtleTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNFbnVtZXJhdGVkQXR0cihrZXkpKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGtleSwgY29udmVydEVudW1lcmF0ZWRWYWx1ZShrZXksIHZhbHVlKSk7XG4gIH0gZWxzZSBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZVNldEF0dHIgKGVsLCBrZXksIHZhbHVlKSB7XG4gIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICB9IGVsc2Uge1xuICAgIC8vICM3MTM4OiBJRTEwICYgMTEgZmlyZXMgaW5wdXQgZXZlbnQgd2hlbiBzZXR0aW5nIHBsYWNlaG9sZGVyIG9uXG4gICAgLy8gPHRleHRhcmVhPi4uLiBibG9jayB0aGUgZmlyc3QgaW5wdXQgZXZlbnQgYW5kIHJlbW92ZSB0aGUgYmxvY2tlclxuICAgIC8vIGltbWVkaWF0ZWx5LlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChcbiAgICAgIGlzSUUgJiYgIWlzSUU5ICYmXG4gICAgICBlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnICYmXG4gICAgICBrZXkgPT09ICdwbGFjZWhvbGRlcicgJiYgdmFsdWUgIT09ICcnICYmICFlbC5fX2llcGhcbiAgICApIHtcbiAgICAgIHZhciBibG9ja2VyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBibG9ja2VyKTtcbiAgICAgIH07XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGJsb2NrZXIpO1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBlbC5fX2llcGggPSB0cnVlOyAvKiBJRSBwbGFjZWhvbGRlciBwYXRjaGVkICovXG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfVxufVxuXG52YXIgYXR0cnMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlQXR0cnMsXG4gIHVwZGF0ZTogdXBkYXRlQXR0cnNcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiB1cGRhdGVDbGFzcyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcbiAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICB2YXIgb2xkRGF0YSA9IG9sZFZub2RlLmRhdGE7XG4gIGlmIChcbiAgICBpc1VuZGVmKGRhdGEuc3RhdGljQ2xhc3MpICYmXG4gICAgaXNVbmRlZihkYXRhLmNsYXNzKSAmJiAoXG4gICAgICBpc1VuZGVmKG9sZERhdGEpIHx8IChcbiAgICAgICAgaXNVbmRlZihvbGREYXRhLnN0YXRpY0NsYXNzKSAmJlxuICAgICAgICBpc1VuZGVmKG9sZERhdGEuY2xhc3MpXG4gICAgICApXG4gICAgKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBjbHMgPSBnZW5DbGFzc0ZvclZub2RlKHZub2RlKTtcblxuICAvLyBoYW5kbGUgdHJhbnNpdGlvbiBjbGFzc2VzXG4gIHZhciB0cmFuc2l0aW9uQ2xhc3MgPSBlbC5fdHJhbnNpdGlvbkNsYXNzZXM7XG4gIGlmIChpc0RlZih0cmFuc2l0aW9uQ2xhc3MpKSB7XG4gICAgY2xzID0gY29uY2F0KGNscywgc3RyaW5naWZ5Q2xhc3ModHJhbnNpdGlvbkNsYXNzKSk7XG4gIH1cblxuICAvLyBzZXQgdGhlIGNsYXNzXG4gIGlmIChjbHMgIT09IGVsLl9wcmV2Q2xhc3MpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xzKTtcbiAgICBlbC5fcHJldkNsYXNzID0gY2xzO1xuICB9XG59XG5cbnZhciBrbGFzcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVDbGFzcyxcbiAgdXBkYXRlOiB1cGRhdGVDbGFzc1xufTtcblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGluIHNvbWUgY2FzZXMsIHRoZSBldmVudCB1c2VkIGhhcyB0byBiZSBkZXRlcm1pbmVkIGF0IHJ1bnRpbWVcbi8vIHNvIHdlIHVzZWQgc29tZSByZXNlcnZlZCB0b2tlbnMgZHVyaW5nIGNvbXBpbGUuXG52YXIgUkFOR0VfVE9LRU4gPSAnX19yJztcbnZhciBDSEVDS0JPWF9SQURJT19UT0tFTiA9ICdfX2MnO1xuXG4vKiAgKi9cblxuLy8gbm9ybWFsaXplIHYtbW9kZWwgZXZlbnQgdG9rZW5zIHRoYXQgY2FuIG9ubHkgYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lLlxuLy8gaXQncyBpbXBvcnRhbnQgdG8gcGxhY2UgdGhlIGV2ZW50IGFzIHRoZSBmaXJzdCBpbiB0aGUgYXJyYXkgYmVjYXVzZVxuLy8gdGhlIHdob2xlIHBvaW50IGlzIGVuc3VyaW5nIHRoZSB2LW1vZGVsIGNhbGxiYWNrIGdldHMgY2FsbGVkIGJlZm9yZVxuLy8gdXNlci1hdHRhY2hlZCBoYW5kbGVycy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50cyAob24pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihvbltSQU5HRV9UT0tFTl0pKSB7XG4gICAgLy8gSUUgaW5wdXRbdHlwZT1yYW5nZV0gb25seSBzdXBwb3J0cyBgY2hhbmdlYCBldmVudFxuICAgIHZhciBldmVudCA9IGlzSUUgPyAnY2hhbmdlJyA6ICdpbnB1dCc7XG4gICAgb25bZXZlbnRdID0gW10uY29uY2F0KG9uW1JBTkdFX1RPS0VOXSwgb25bZXZlbnRdIHx8IFtdKTtcbiAgICBkZWxldGUgb25bUkFOR0VfVE9LRU5dO1xuICB9XG4gIC8vIFRoaXMgd2FzIG9yaWdpbmFsbHkgaW50ZW5kZWQgdG8gZml4ICM0NTIxIGJ1dCBubyBsb25nZXIgbmVjZXNzYXJ5XG4gIC8vIGFmdGVyIDIuNS4gS2VlcGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdCB3aXRoIGdlbmVyYXRlZCBjb2RlIGZyb20gPCAyLjRcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihvbltDSEVDS0JPWF9SQURJT19UT0tFTl0pKSB7XG4gICAgb24uY2hhbmdlID0gW10uY29uY2F0KG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXSwgb24uY2hhbmdlIHx8IFtdKTtcbiAgICBkZWxldGUgb25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dO1xuICB9XG59XG5cbnZhciB0YXJnZXQkMTtcblxuZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIkMSAoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQkMTsgLy8gc2F2ZSBjdXJyZW50IHRhcmdldCBlbGVtZW50IGluIGNsb3N1cmVcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICB2YXIgcmVzID0gaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZSQyKGV2ZW50LCBvbmNlSGFuZGxlciwgY2FwdHVyZSwgX3RhcmdldCk7XG4gICAgfVxuICB9XG59XG5cbi8vICM5NDQ2OiBGaXJlZm94IDw9IDUzIChpbiBwYXJ0aWN1bGFyLCBFU1IgNTIpIGhhcyBpbmNvcnJlY3QgRXZlbnQudGltZVN0YW1wXG4vLyBpbXBsZW1lbnRhdGlvbiBhbmQgZG9lcyBub3QgZmlyZSBtaWNyb3Rhc2tzIGluIGJldHdlZW4gZXZlbnQgcHJvcGFnYXRpb24sIHNvXG4vLyBzYWZlIHRvIGV4Y2x1ZGUuXG52YXIgdXNlTWljcm90YXNrRml4ID0gaXNVc2luZ01pY3JvVGFzayAmJiAhKGlzRkYgJiYgTnVtYmVyKGlzRkZbMV0pIDw9IDUzKTtcblxuZnVuY3Rpb24gYWRkJDEgKFxuICBuYW1lLFxuICBoYW5kbGVyLFxuICBjYXB0dXJlLFxuICBwYXNzaXZlXG4pIHtcbiAgLy8gYXN5bmMgZWRnZSBjYXNlICM2NTY2OiBpbm5lciBjbGljayBldmVudCB0cmlnZ2VycyBwYXRjaCwgZXZlbnQgaGFuZGxlclxuICAvLyBhdHRhY2hlZCB0byBvdXRlciBlbGVtZW50IGR1cmluZyBwYXRjaCwgYW5kIHRyaWdnZXJlZCBhZ2Fpbi4gVGhpc1xuICAvLyBoYXBwZW5zIGJlY2F1c2UgYnJvd3NlcnMgZmlyZSBtaWNyb3Rhc2sgdGlja3MgYmV0d2VlbiBldmVudCBwcm9wYWdhdGlvbi5cbiAgLy8gdGhlIHNvbHV0aW9uIGlzIHNpbXBsZTogd2Ugc2F2ZSB0aGUgdGltZXN0YW1wIHdoZW4gYSBoYW5kbGVyIGlzIGF0dGFjaGVkLFxuICAvLyBhbmQgdGhlIGhhbmRsZXIgd291bGQgb25seSBmaXJlIGlmIHRoZSBldmVudCBwYXNzZWQgdG8gaXQgd2FzIGZpcmVkXG4gIC8vIEFGVEVSIGl0IHdhcyBhdHRhY2hlZC5cbiAgaWYgKHVzZU1pY3JvdGFza0ZpeCkge1xuICAgIHZhciBhdHRhY2hlZFRpbWVzdGFtcCA9IGN1cnJlbnRGbHVzaFRpbWVzdGFtcDtcbiAgICB2YXIgb3JpZ2luYWwgPSBoYW5kbGVyO1xuICAgIGhhbmRsZXIgPSBvcmlnaW5hbC5fd3JhcHBlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vIGJ1YmJsaW5nLCBzaG91bGQgYWx3YXlzIGZpcmUuXG4gICAgICAgIC8vIHRoaXMgaXMganVzdCBhIHNhZmV0eSBuZXQgaW4gY2FzZSBldmVudC50aW1lU3RhbXAgaXMgdW5yZWxpYWJsZSBpblxuICAgICAgICAvLyBjZXJ0YWluIHdlaXJkIGVudmlyb25tZW50cy4uLlxuICAgICAgICBlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0IHx8XG4gICAgICAgIC8vIGV2ZW50IGlzIGZpcmVkIGFmdGVyIGhhbmRsZXIgYXR0YWNobWVudFxuICAgICAgICBlLnRpbWVTdGFtcCA+PSBhdHRhY2hlZFRpbWVzdGFtcCB8fFxuICAgICAgICAvLyBiYWlsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBoYXZlIGJ1Z2d5IGV2ZW50LnRpbWVTdGFtcCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgLy8gIzk0NjIgaU9TIDkgYnVnOiBldmVudC50aW1lU3RhbXAgaXMgMCBhZnRlciBoaXN0b3J5LnB1c2hTdGF0ZVxuICAgICAgICAvLyAjOTY4MSBRdFdlYkVuZ2luZSBldmVudC50aW1lU3RhbXAgaXMgbmVnYXRpdmUgdmFsdWVcbiAgICAgICAgZS50aW1lU3RhbXAgPD0gMCB8fFxuICAgICAgICAvLyAjOTQ0OCBiYWlsIGlmIGV2ZW50IGlzIGZpcmVkIGluIGFub3RoZXIgZG9jdW1lbnQgaW4gYSBtdWx0aS1wYWdlXG4gICAgICAgIC8vIGVsZWN0cm9uL253LmpzIGFwcCwgc2luY2UgZXZlbnQudGltZVN0YW1wIHdpbGwgYmUgdXNpbmcgYSBkaWZmZXJlbnRcbiAgICAgICAgLy8gc3RhcnRpbmcgcmVmZXJlbmNlXG4gICAgICAgIGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHRhcmdldCQxLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgbmFtZSxcbiAgICBoYW5kbGVyLFxuICAgIHN1cHBvcnRzUGFzc2l2ZVxuICAgICAgPyB7IGNhcHR1cmU6IGNhcHR1cmUsIHBhc3NpdmU6IHBhc3NpdmUgfVxuICAgICAgOiBjYXB0dXJlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQyIChcbiAgbmFtZSxcbiAgaGFuZGxlcixcbiAgY2FwdHVyZSxcbiAgX3RhcmdldFxuKSB7XG4gIChfdGFyZ2V0IHx8IHRhcmdldCQxKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgIG5hbWUsXG4gICAgaGFuZGxlci5fd3JhcHBlciB8fCBoYW5kbGVyLFxuICAgIGNhcHR1cmVcbiAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRE9NTGlzdGVuZXJzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5vbikgJiYgaXNVbmRlZih2bm9kZS5kYXRhLm9uKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvbiA9IHZub2RlLmRhdGEub24gfHwge307XG4gIHZhciBvbGRPbiA9IG9sZFZub2RlLmRhdGEub24gfHwge307XG4gIHRhcmdldCQxID0gdm5vZGUuZWxtO1xuICBub3JtYWxpemVFdmVudHMob24pO1xuICB1cGRhdGVMaXN0ZW5lcnMob24sIG9sZE9uLCBhZGQkMSwgcmVtb3ZlJDIsIGNyZWF0ZU9uY2VIYW5kbGVyJDEsIHZub2RlLmNvbnRleHQpO1xuICB0YXJnZXQkMSA9IHVuZGVmaW5lZDtcbn1cblxudmFyIGV2ZW50cyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVET01MaXN0ZW5lcnMsXG4gIHVwZGF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzXG59O1xuXG4vKiAgKi9cblxudmFyIHN2Z0NvbnRhaW5lcjtcblxuZnVuY3Rpb24gdXBkYXRlRE9NUHJvcHMgKG9sZFZub2RlLCB2bm9kZSkge1xuICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLmRvbVByb3BzKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEuZG9tUHJvcHMpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGtleSwgY3VyO1xuICB2YXIgZWxtID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkUHJvcHMgPSBvbGRWbm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xuICB2YXIgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xuICAvLyBjbG9uZSBvYnNlcnZlZCBvYmplY3RzLCBhcyB0aGUgdXNlciBwcm9iYWJseSB3YW50cyB0byBtdXRhdGUgaXRcbiAgaWYgKGlzRGVmKHByb3BzLl9fb2JfXykpIHtcbiAgICBwcm9wcyA9IHZub2RlLmRhdGEuZG9tUHJvcHMgPSBleHRlbmQoe30sIHByb3BzKTtcbiAgfVxuXG4gIGZvciAoa2V5IGluIG9sZFByb3BzKSB7XG4gICAgaWYgKCEoa2V5IGluIHByb3BzKSkge1xuICAgICAgZWxtW2tleV0gPSAnJztcbiAgICB9XG4gIH1cblxuICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgIGN1ciA9IHByb3BzW2tleV07XG4gICAgLy8gaWdub3JlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGhhcyB0ZXh0Q29udGVudCBvciBpbm5lckhUTUwsXG4gICAgLy8gYXMgdGhlc2Ugd2lsbCB0aHJvdyBhd2F5IGV4aXN0aW5nIERPTSBub2RlcyBhbmQgY2F1c2UgcmVtb3ZhbCBlcnJvcnNcbiAgICAvLyBvbiBzdWJzZXF1ZW50IHBhdGNoZXMgKCMzMzYwKVxuICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcgfHwga2V5ID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgaWYgKHZub2RlLmNoaWxkcmVuKSB7IHZub2RlLmNoaWxkcmVuLmxlbmd0aCA9IDA7IH1cbiAgICAgIGlmIChjdXIgPT09IG9sZFByb3BzW2tleV0pIHsgY29udGludWUgfVxuICAgICAgLy8gIzY2MDEgd29yayBhcm91bmQgQ2hyb21lIHZlcnNpb24gPD0gNTUgYnVnIHdoZXJlIHNpbmdsZSB0ZXh0Tm9kZVxuICAgICAgLy8gcmVwbGFjZWQgYnkgaW5uZXJIVE1ML3RleHRDb250ZW50IHJldGFpbnMgaXRzIHBhcmVudE5vZGUgcHJvcGVydHlcbiAgICAgIGlmIChlbG0uY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAndmFsdWUnICYmIGVsbS50YWdOYW1lICE9PSAnUFJPR1JFU1MnKSB7XG4gICAgICAvLyBzdG9yZSB2YWx1ZSBhcyBfdmFsdWUgYXMgd2VsbCBzaW5jZVxuICAgICAgLy8gbm9uLXN0cmluZyB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZFxuICAgICAgZWxtLl92YWx1ZSA9IGN1cjtcbiAgICAgIC8vIGF2b2lkIHJlc2V0dGluZyBjdXJzb3IgcG9zaXRpb24gd2hlbiB2YWx1ZSBpcyB0aGUgc2FtZVxuICAgICAgdmFyIHN0ckN1ciA9IGlzVW5kZWYoY3VyKSA/ICcnIDogU3RyaW5nKGN1cik7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlVmFsdWUoZWxtLCBzdHJDdXIpKSB7XG4gICAgICAgIGVsbS52YWx1ZSA9IHN0ckN1cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2lubmVySFRNTCcgJiYgaXNTVkcoZWxtLnRhZ05hbWUpICYmIGlzVW5kZWYoZWxtLmlubmVySFRNTCkpIHtcbiAgICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBpbm5lckhUTUwgZm9yIFNWRyBlbGVtZW50c1xuICAgICAgc3ZnQ29udGFpbmVyID0gc3ZnQ29udGFpbmVyIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3ZnQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPHN2Zz5cIiArIGN1ciArIFwiPC9zdmc+XCI7XG4gICAgICB2YXIgc3ZnID0gc3ZnQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoZWxtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChzdmcuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoc3ZnLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBza2lwIHRoZSB1cGRhdGUgaWYgb2xkIGFuZCBuZXcgVkRPTSBzdGF0ZSBpcyB0aGUgc2FtZS5cbiAgICAgIC8vIGB2YWx1ZWAgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5IGJlY2F1c2UgdGhlIERPTSB2YWx1ZSBtYXkgYmUgdGVtcG9yYXJpbHlcbiAgICAgIC8vIG91dCBvZiBzeW5jIHdpdGggVkRPTSBzdGF0ZSBkdWUgdG8gZm9jdXMsIGNvbXBvc2l0aW9uIGFuZCBtb2RpZmllcnMuXG4gICAgICAvLyBUaGlzICAjNDUyMSBieSBza2lwcGluZyB0aGUgdW5uZWNlc2FycnkgYGNoZWNrZWRgIHVwZGF0ZS5cbiAgICAgIGN1ciAhPT0gb2xkUHJvcHNba2V5XVxuICAgICkge1xuICAgICAgLy8gc29tZSBwcm9wZXJ0eSB1cGRhdGVzIGNhbiB0aHJvd1xuICAgICAgLy8gZS5nLiBgdmFsdWVgIG9uIDxwcm9ncmVzcz4gdy8gbm9uLWZpbml0ZSB2YWx1ZVxuICAgICAgdHJ5IHtcbiAgICAgICAgZWxtW2tleV0gPSBjdXI7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxufVxuXG4vLyBjaGVjayBwbGF0Zm9ybXMvd2ViL3V0aWwvYXR0cnMuanMgYWNjZXB0VmFsdWVcblxuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVWYWx1ZSAoZWxtLCBjaGVja1ZhbCkge1xuICByZXR1cm4gKCFlbG0uY29tcG9zaW5nICYmIChcbiAgICBlbG0udGFnTmFtZSA9PT0gJ09QVElPTicgfHxcbiAgICBpc05vdEluRm9jdXNBbmREaXJ0eShlbG0sIGNoZWNrVmFsKSB8fFxuICAgIGlzRGlydHlXaXRoTW9kaWZpZXJzKGVsbSwgY2hlY2tWYWwpXG4gICkpXG59XG5cbmZ1bmN0aW9uIGlzTm90SW5Gb2N1c0FuZERpcnR5IChlbG0sIGNoZWNrVmFsKSB7XG4gIC8vIHJldHVybiB0cnVlIHdoZW4gdGV4dGJveCAoLm51bWJlciBhbmQgLnRyaW0pIGxvc2VzIGZvY3VzIGFuZCBpdHMgdmFsdWUgaXNcbiAgLy8gbm90IGVxdWFsIHRvIHRoZSB1cGRhdGVkIHZhbHVlXG4gIHZhciBub3RJbkZvY3VzID0gdHJ1ZTtcbiAgLy8gIzYxNTdcbiAgLy8gd29yayBhcm91bmQgSUUgYnVnIHdoZW4gYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW4gYW4gaWZyYW1lXG4gIHRyeSB7IG5vdEluRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbG07IH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiBub3RJbkZvY3VzICYmIGVsbS52YWx1ZSAhPT0gY2hlY2tWYWxcbn1cblxuZnVuY3Rpb24gaXNEaXJ0eVdpdGhNb2RpZmllcnMgKGVsbSwgbmV3VmFsKSB7XG4gIHZhciB2YWx1ZSA9IGVsbS52YWx1ZTtcbiAgdmFyIG1vZGlmaWVycyA9IGVsbS5fdk1vZGlmaWVyczsgLy8gaW5qZWN0ZWQgYnkgdi1tb2RlbCBydW50aW1lXG4gIGlmIChpc0RlZihtb2RpZmllcnMpKSB7XG4gICAgaWYgKG1vZGlmaWVycy5udW1iZXIpIHtcbiAgICAgIHJldHVybiB0b051bWJlcih2YWx1ZSkgIT09IHRvTnVtYmVyKG5ld1ZhbClcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVycy50cmltKSB7XG4gICAgICByZXR1cm4gdmFsdWUudHJpbSgpICE9PSBuZXdWYWwudHJpbSgpXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZSAhPT0gbmV3VmFsXG59XG5cbnZhciBkb21Qcm9wcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVET01Qcm9wcyxcbiAgdXBkYXRlOiB1cGRhdGVET01Qcm9wc1xufTtcblxuLyogICovXG5cbnZhciBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLy8gbWVyZ2Ugc3RhdGljIGFuZCBkeW5hbWljIHN0eWxlIGRhdGEgb24gdGhlIHNhbWUgdm5vZGVcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlRGF0YSAoZGF0YSkge1xuICB2YXIgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoZGF0YS5zdHlsZSk7XG4gIC8vIHN0YXRpYyBzdHlsZSBpcyBwcmUtcHJvY2Vzc2VkIGludG8gYW4gb2JqZWN0IGR1cmluZyBjb21waWxhdGlvblxuICAvLyBhbmQgaXMgYWx3YXlzIGEgZnJlc2ggb2JqZWN0LCBzbyBpdCdzIHNhZmUgdG8gbWVyZ2UgaW50byBpdFxuICByZXR1cm4gZGF0YS5zdGF0aWNTdHlsZVxuICAgID8gZXh0ZW5kKGRhdGEuc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgIDogc3R5bGVcbn1cblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICByZXR1cm4gYmluZGluZ1N0eWxlXG59XG5cbi8qKlxuICogcGFyZW50IGNvbXBvbmVudCBzdHlsZSBzaG91bGQgYmUgYWZ0ZXIgY2hpbGQnc1xuICogc28gdGhhdCBwYXJlbnQgY29tcG9uZW50J3Mgc3R5bGUgY291bGQgb3ZlcnJpZGUgaXRcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUgKHZub2RlLCBjaGVja0NoaWxkKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIHN0eWxlRGF0YTtcblxuICBpZiAoY2hlY2tDaGlsZCkge1xuICAgIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcbiAgICB3aGlsZSAoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEgJiZcbiAgICAgICAgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShjaGlsZE5vZGUuZGF0YSkpXG4gICAgICApIHtcbiAgICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YSh2bm9kZS5kYXRhKSkpIHtcbiAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICB9XG5cbiAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgd2hpbGUgKChwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHBhcmVudE5vZGUuZGF0YSAmJiAoc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVEYXRhKHBhcmVudE5vZGUuZGF0YSkpKSB7XG4gICAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgY3NzVmFyUkUgPSAvXi0tLztcbnZhciBpbXBvcnRhbnRSRSA9IC9cXHMqIWltcG9ydGFudCQvO1xudmFyIHNldFByb3AgPSBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGNzc1ZhclJFLnRlc3QobmFtZSkpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWwpO1xuICB9IGVsc2UgaWYgKGltcG9ydGFudFJFLnRlc3QodmFsKSkge1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGh5cGhlbmF0ZShuYW1lKSwgdmFsLnJlcGxhY2UoaW1wb3J0YW50UkUsICcnKSwgJ2ltcG9ydGFudCcpO1xuICB9IGVsc2Uge1xuICAgIHZhciBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZShuYW1lKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAvLyBTdXBwb3J0IHZhbHVlcyBhcnJheSBjcmVhdGVkIGJ5IGF1dG9wcmVmaXhlciwgZS5nLlxuICAgICAgLy8ge2Rpc3BsYXk6IFtcIi13ZWJraXQtYm94XCIsIFwiLW1zLWZsZXhib3hcIiwgXCJmbGV4XCJdfVxuICAgICAgLy8gU2V0IHRoZW0gb25lIGJ5IG9uZSwgYW5kIHRoZSBicm93c2VyIHdpbGwgb25seSBzZXQgdGhvc2UgaXQgY2FuIHJlY29nbml6ZVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWxbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlW25vcm1hbGl6ZWROYW1lXSA9IHZhbDtcbiAgICB9XG4gIH1cbn07XG5cbnZhciB2ZW5kb3JOYW1lcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xuXG52YXIgZW1wdHlTdHlsZTtcbnZhciBub3JtYWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHByb3ApIHtcbiAgZW1wdHlTdHlsZSA9IGVtcHR5U3R5bGUgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gIHByb3AgPSBjYW1lbGl6ZShwcm9wKTtcbiAgaWYgKHByb3AgIT09ICdmaWx0ZXInICYmIChwcm9wIGluIGVtcHR5U3R5bGUpKSB7XG4gICAgcmV0dXJuIHByb3BcbiAgfVxuICB2YXIgY2FwTmFtZSA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvck5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSB2ZW5kb3JOYW1lc1tpXSArIGNhcE5hbWU7XG4gICAgaWYgKG5hbWUgaW4gZW1wdHlTdHlsZSkge1xuICAgICAgcmV0dXJuIG5hbWVcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVTdHlsZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIG9sZERhdGEgPSBvbGRWbm9kZS5kYXRhO1xuXG4gIGlmIChpc1VuZGVmKGRhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYoZGF0YS5zdHlsZSkgJiZcbiAgICBpc1VuZGVmKG9sZERhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYob2xkRGF0YS5zdHlsZSlcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3VyLCBuYW1lO1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciBvbGRTdGF0aWNTdHlsZSA9IG9sZERhdGEuc3RhdGljU3R5bGU7XG4gIHZhciBvbGRTdHlsZUJpbmRpbmcgPSBvbGREYXRhLm5vcm1hbGl6ZWRTdHlsZSB8fCBvbGREYXRhLnN0eWxlIHx8IHt9O1xuXG4gIC8vIGlmIHN0YXRpYyBzdHlsZSBleGlzdHMsIHN0eWxlYmluZGluZyBhbHJlYWR5IG1lcmdlZCBpbnRvIGl0IHdoZW4gZG9pbmcgbm9ybWFsaXplU3R5bGVEYXRhXG4gIHZhciBvbGRTdHlsZSA9IG9sZFN0YXRpY1N0eWxlIHx8IG9sZFN0eWxlQmluZGluZztcblxuICB2YXIgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcodm5vZGUuZGF0YS5zdHlsZSkgfHwge307XG5cbiAgLy8gc3RvcmUgbm9ybWFsaXplZCBzdHlsZSB1bmRlciBhIGRpZmZlcmVudCBrZXkgZm9yIG5leHQgZGlmZlxuICAvLyBtYWtlIHN1cmUgdG8gY2xvbmUgaXQgaWYgaXQncyByZWFjdGl2ZSwgc2luY2UgdGhlIHVzZXIgbGlrZWx5IHdhbnRzXG4gIC8vIHRvIG11dGF0ZSBpdC5cbiAgdm5vZGUuZGF0YS5ub3JtYWxpemVkU3R5bGUgPSBpc0RlZihzdHlsZS5fX29iX18pXG4gICAgPyBleHRlbmQoe30sIHN0eWxlKVxuICAgIDogc3R5bGU7XG5cbiAgdmFyIG5ld1N0eWxlID0gZ2V0U3R5bGUodm5vZGUsIHRydWUpO1xuXG4gIGZvciAobmFtZSBpbiBvbGRTdHlsZSkge1xuICAgIGlmIChpc1VuZGVmKG5ld1N0eWxlW25hbWVdKSkge1xuICAgICAgc2V0UHJvcChlbCwgbmFtZSwgJycpO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gbmV3U3R5bGUpIHtcbiAgICBjdXIgPSBuZXdTdHlsZVtuYW1lXTtcbiAgICBpZiAoY3VyICE9PSBvbGRTdHlsZVtuYW1lXSkge1xuICAgICAgLy8gaWU5IHNldHRpbmcgdG8gbnVsbCBoYXMgbm8gZWZmZWN0LCBtdXN0IHVzZSBlbXB0eSBzdHJpbmdcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsIGN1ciA9PSBudWxsID8gJycgOiBjdXIpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc3R5bGUgPSB7XG4gIGNyZWF0ZTogdXBkYXRlU3R5bGUsXG4gIHVwZGF0ZTogdXBkYXRlU3R5bGVcbn07XG5cbi8qICAqL1xuXG52YXIgd2hpdGVzcGFjZVJFID0gL1xccysvO1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgfVxuICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgaWYgKGN1cikge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVUcmFuc2l0aW9uIChkZWYkJDEpIHtcbiAgaWYgKCFkZWYkJDEpIHtcbiAgICByZXR1cm5cbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgaWYgKGRlZiQkMS5jc3MgIT09IGZhbHNlKSB7XG4gICAgICBleHRlbmQocmVzLCBhdXRvQ3NzVHJhbnNpdGlvbihkZWYkJDEubmFtZSB8fCAndicpKTtcbiAgICB9XG4gICAgZXh0ZW5kKHJlcywgZGVmJCQxKTtcbiAgICByZXR1cm4gcmVzXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYXV0b0Nzc1RyYW5zaXRpb24oZGVmJCQxKVxuICB9XG59XG5cbnZhciBhdXRvQ3NzVHJhbnNpdGlvbiA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4ge1xuICAgIGVudGVyQ2xhc3M6IChuYW1lICsgXCItZW50ZXJcIiksXG4gICAgZW50ZXJUb0NsYXNzOiAobmFtZSArIFwiLWVudGVyLXRvXCIpLFxuICAgIGVudGVyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItZW50ZXItYWN0aXZlXCIpLFxuICAgIGxlYXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmVcIiksXG4gICAgbGVhdmVUb0NsYXNzOiAobmFtZSArIFwiLWxlYXZlLXRvXCIpLFxuICAgIGxlYXZlQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtYWN0aXZlXCIpXG4gIH1cbn0pO1xuXG52YXIgaGFzVHJhbnNpdGlvbiA9IGluQnJvd3NlciAmJiAhaXNJRTk7XG52YXIgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcbnZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xudmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbnZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcbmlmIChoYXNUcmFuc2l0aW9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAod2luZG93Lm9udHJhbnNpdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHRyYW5zaXRpb25Qcm9wID0gJ1dlYmtpdFRyYW5zaXRpb24nO1xuICAgIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uRW5kJztcbiAgfVxuICBpZiAod2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBhbmltYXRpb25Qcm9wID0gJ1dlYmtpdEFuaW1hdGlvbic7XG4gICAgYW5pbWF0aW9uRW5kRXZlbnQgPSAnd2Via2l0QW5pbWF0aW9uRW5kJztcbiAgfVxufVxuXG4vLyBiaW5kaW5nIHRvIHdpbmRvdyBpcyBuZWNlc3NhcnkgdG8gbWFrZSBob3QgcmVsb2FkIHdvcmsgaW4gSUUgaW4gc3RyaWN0IG1vZGVcbnZhciByYWYgPSBpbkJyb3dzZXJcbiAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIDogc2V0VGltZW91dFxuICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfTtcblxuZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xuICByYWYoZnVuY3Rpb24gKCkge1xuICAgIHJhZihmbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcbiAgdmFyIHRyYW5zaXRpb25DbGFzc2VzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzIHx8IChlbC5fdHJhbnNpdGlvbkNsYXNzZXMgPSBbXSk7XG4gIGlmICh0cmFuc2l0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XG4gICAgdHJhbnNpdGlvbkNsYXNzZXMucHVzaChjbHMpO1xuICAgIGFkZENsYXNzKGVsLCBjbHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25DbGFzcyAoZWwsIGNscykge1xuICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgcmVtb3ZlKGVsLl90cmFuc2l0aW9uQ2xhc3NlcywgY2xzKTtcbiAgfVxuICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbn1cblxuZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzIChcbiAgZWwsXG4gIGV4cGVjdGVkVHlwZSxcbiAgY2Jcbikge1xuICB2YXIgcmVmID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XG4gIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gIHZhciB0aW1lb3V0ID0gcmVmLnRpbWVvdXQ7XG4gIHZhciBwcm9wQ291bnQgPSByZWYucHJvcENvdW50O1xuICBpZiAoIXR5cGUpIHsgcmV0dXJuIGNiKCkgfVxuICB2YXIgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XG4gIHZhciBlbmRlZCA9IDA7XG4gIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xuICAgIGNiKCk7XG4gIH07XG4gIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH0sIHRpbWVvdXQgKyAxKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xufVxuXG52YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyAoZWwsIGV4cGVjdGVkVHlwZSkge1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAvLyBKU0RPTSBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gIHZhciB0cmFuc2l0aW9uRGVsYXlzID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbnMgPSAoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICB2YXIgYW5pbWF0aW9uRGVsYXlzID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0RlbGF5J10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgYW5pbWF0aW9uRHVyYXRpb25zID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgYW5pbWF0aW9uVGltZW91dCA9IGdldFRpbWVvdXQoYW5pbWF0aW9uRGVsYXlzLCBhbmltYXRpb25EdXJhdGlvbnMpO1xuXG4gIHZhciB0eXBlO1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHZhciBwcm9wQ291bnQgPSAwO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGV4cGVjdGVkVHlwZSA9PT0gVFJBTlNJVElPTikge1xuICAgIGlmICh0cmFuc2l0aW9uVGltZW91dCA+IDApIHtcbiAgICAgIHR5cGUgPSBUUkFOU0lUSU9OO1xuICAgICAgdGltZW91dCA9IHRyYW5zaXRpb25UaW1lb3V0O1xuICAgICAgcHJvcENvdW50ID0gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gQU5JTUFUSU9OKSB7XG4gICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICB0eXBlID0gQU5JTUFUSU9OO1xuICAgICAgdGltZW91dCA9IGFuaW1hdGlvblRpbWVvdXQ7XG4gICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aW1lb3V0ID0gTWF0aC5tYXgodHJhbnNpdGlvblRpbWVvdXQsIGFuaW1hdGlvblRpbWVvdXQpO1xuICAgIHR5cGUgPSB0aW1lb3V0ID4gMFxuICAgICAgPyB0cmFuc2l0aW9uVGltZW91dCA+IGFuaW1hdGlvblRpbWVvdXRcbiAgICAgICAgPyBUUkFOU0lUSU9OXG4gICAgICAgIDogQU5JTUFUSU9OXG4gICAgICA6IG51bGw7XG4gICAgcHJvcENvdW50ID0gdHlwZVxuICAgICAgPyB0eXBlID09PSBUUkFOU0lUSU9OXG4gICAgICAgID8gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGhcbiAgICAgICAgOiBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICA6IDA7XG4gIH1cbiAgdmFyIGhhc1RyYW5zZm9ybSA9XG4gICAgdHlwZSA9PT0gVFJBTlNJVElPTiAmJlxuICAgIHRyYW5zZm9ybVJFLnRlc3Qoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ1Byb3BlcnR5J10pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdGltZW91dDogdGltZW91dCxcbiAgICBwcm9wQ291bnQ6IHByb3BDb3VudCxcbiAgICBoYXNUcmFuc2Zvcm06IGhhc1RyYW5zZm9ybVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVvdXQgKGRlbGF5cywgZHVyYXRpb25zKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdoaWxlIChkZWxheXMubGVuZ3RoIDwgZHVyYXRpb25zLmxlbmd0aCkge1xuICAgIGRlbGF5cyA9IGRlbGF5cy5jb25jYXQoZGVsYXlzKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBkdXJhdGlvbnMubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgcmV0dXJuIHRvTXMoZCkgKyB0b01zKGRlbGF5c1tpXSlcbiAgfSkpXG59XG5cbi8vIE9sZCB2ZXJzaW9ucyBvZiBDaHJvbWl1bSAoYmVsb3cgNjEuMC4zMTYzLjEwMCkgZm9ybWF0cyBmbG9hdGluZyBwb2ludGVyIG51bWJlcnNcbi8vIGluIGEgbG9jYWxlLWRlcGVuZGVudCB3YXksIHVzaW5nIGEgY29tbWEgaW5zdGVhZCBvZiBhIGRvdC5cbi8vIElmIGNvbW1hIGlzIG5vdCByZXBsYWNlZCB3aXRoIGEgZG90LCB0aGUgaW5wdXQgd2lsbCBiZSByb3VuZGVkIGRvd24gKGkuZS4gYWN0aW5nXG4vLyBhcyBhIGZsb29yIGZ1bmN0aW9uKSBjYXVzaW5nIHVuZXhwZWN0ZWQgYmVoYXZpb3JzXG5mdW5jdGlvbiB0b01zIChzKSB7XG4gIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkucmVwbGFjZSgnLCcsICcuJykpICogMTAwMFxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW50ZXIgKHZub2RlLCB0b2dnbGVEaXNwbGF5KSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xuICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XG4gICAgZWwuX2xlYXZlQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBlbC5fbGVhdmVDYigpO1xuICB9XG5cbiAgdmFyIGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbih2bm9kZS5kYXRhLnRyYW5zaXRpb24pO1xuICBpZiAoaXNVbmRlZihkYXRhKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihlbC5fZW50ZXJDYikgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBjc3MgPSBkYXRhLmNzcztcbiAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XG4gIHZhciBlbnRlckNsYXNzID0gZGF0YS5lbnRlckNsYXNzO1xuICB2YXIgZW50ZXJUb0NsYXNzID0gZGF0YS5lbnRlclRvQ2xhc3M7XG4gIHZhciBlbnRlckFjdGl2ZUNsYXNzID0gZGF0YS5lbnRlckFjdGl2ZUNsYXNzO1xuICB2YXIgYXBwZWFyQ2xhc3MgPSBkYXRhLmFwcGVhckNsYXNzO1xuICB2YXIgYXBwZWFyVG9DbGFzcyA9IGRhdGEuYXBwZWFyVG9DbGFzcztcbiAgdmFyIGFwcGVhckFjdGl2ZUNsYXNzID0gZGF0YS5hcHBlYXJBY3RpdmVDbGFzcztcbiAgdmFyIGJlZm9yZUVudGVyID0gZGF0YS5iZWZvcmVFbnRlcjtcbiAgdmFyIGVudGVyID0gZGF0YS5lbnRlcjtcbiAgdmFyIGFmdGVyRW50ZXIgPSBkYXRhLmFmdGVyRW50ZXI7XG4gIHZhciBlbnRlckNhbmNlbGxlZCA9IGRhdGEuZW50ZXJDYW5jZWxsZWQ7XG4gIHZhciBiZWZvcmVBcHBlYXIgPSBkYXRhLmJlZm9yZUFwcGVhcjtcbiAgdmFyIGFwcGVhciA9IGRhdGEuYXBwZWFyO1xuICB2YXIgYWZ0ZXJBcHBlYXIgPSBkYXRhLmFmdGVyQXBwZWFyO1xuICB2YXIgYXBwZWFyQ2FuY2VsbGVkID0gZGF0YS5hcHBlYXJDYW5jZWxsZWQ7XG4gIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XG5cbiAgLy8gYWN0aXZlSW5zdGFuY2Ugd2lsbCBhbHdheXMgYmUgdGhlIDx0cmFuc2l0aW9uPiBjb21wb25lbnQgbWFuYWdpbmcgdGhpc1xuICAvLyB0cmFuc2l0aW9uLiBPbmUgZWRnZSBjYXNlIHRvIGNoZWNrIGlzIHdoZW4gdGhlIDx0cmFuc2l0aW9uPiBpcyBwbGFjZWRcbiAgLy8gYXMgdGhlIHJvb3Qgbm9kZSBvZiBhIGNoaWxkIGNvbXBvbmVudC4gSW4gdGhhdCBjYXNlIHdlIG5lZWQgdG8gY2hlY2tcbiAgLy8gPHRyYW5zaXRpb24+J3MgcGFyZW50IGZvciBhcHBlYXIgY2hlY2suXG4gIHZhciBjb250ZXh0ID0gYWN0aXZlSW5zdGFuY2U7XG4gIHZhciB0cmFuc2l0aW9uTm9kZSA9IGFjdGl2ZUluc3RhbmNlLiR2bm9kZTtcbiAgd2hpbGUgKHRyYW5zaXRpb25Ob2RlICYmIHRyYW5zaXRpb25Ob2RlLnBhcmVudCkge1xuICAgIGNvbnRleHQgPSB0cmFuc2l0aW9uTm9kZS5jb250ZXh0O1xuICAgIHRyYW5zaXRpb25Ob2RlID0gdHJhbnNpdGlvbk5vZGUucGFyZW50O1xuICB9XG5cbiAgdmFyIGlzQXBwZWFyID0gIWNvbnRleHQuX2lzTW91bnRlZCB8fCAhdm5vZGUuaXNSb290SW5zZXJ0O1xuXG4gIGlmIChpc0FwcGVhciAmJiAhYXBwZWFyICYmIGFwcGVhciAhPT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdGFydENsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQ2xhc3NcbiAgICA/IGFwcGVhckNsYXNzXG4gICAgOiBlbnRlckNsYXNzO1xuICB2YXIgYWN0aXZlQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJBY3RpdmVDbGFzc1xuICAgID8gYXBwZWFyQWN0aXZlQ2xhc3NcbiAgICA6IGVudGVyQWN0aXZlQ2xhc3M7XG4gIHZhciB0b0NsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyVG9DbGFzc1xuICAgID8gYXBwZWFyVG9DbGFzc1xuICAgIDogZW50ZXJUb0NsYXNzO1xuXG4gIHZhciBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgID8gKGJlZm9yZUFwcGVhciB8fCBiZWZvcmVFbnRlcilcbiAgICA6IGJlZm9yZUVudGVyO1xuICB2YXIgZW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/ICh0eXBlb2YgYXBwZWFyID09PSAnZnVuY3Rpb24nID8gYXBwZWFyIDogZW50ZXIpXG4gICAgOiBlbnRlcjtcbiAgdmFyIGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/IChhZnRlckFwcGVhciB8fCBhZnRlckVudGVyKVxuICAgIDogYWZ0ZXJFbnRlcjtcbiAgdmFyIGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyXG4gICAgPyAoYXBwZWFyQ2FuY2VsbGVkIHx8IGVudGVyQ2FuY2VsbGVkKVxuICAgIDogZW50ZXJDYW5jZWxsZWQ7XG5cbiAgdmFyIGV4cGxpY2l0RW50ZXJEdXJhdGlvbiA9IHRvTnVtYmVyKFxuICAgIGlzT2JqZWN0KGR1cmF0aW9uKVxuICAgICAgPyBkdXJhdGlvbi5lbnRlclxuICAgICAgOiBkdXJhdGlvblxuICApO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGV4cGxpY2l0RW50ZXJEdXJhdGlvbiAhPSBudWxsKSB7XG4gICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24sICdlbnRlcicsIHZub2RlKTtcbiAgfVxuXG4gIHZhciBleHBlY3RzQ1NTID0gY3NzICE9PSBmYWxzZSAmJiAhaXNJRTk7XG4gIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChlbnRlckhvb2spO1xuXG4gIHZhciBjYiA9IGVsLl9lbnRlckNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIH1cbiAgICAgIGVudGVyQ2FuY2VsbGVkSG9vayAmJiBlbnRlckNhbmNlbGxlZEhvb2soZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlckVudGVySG9vayAmJiBhZnRlckVudGVySG9vayhlbCk7XG4gICAgfVxuICAgIGVsLl9lbnRlckNiID0gbnVsbDtcbiAgfSk7XG5cbiAgaWYgKCF2bm9kZS5kYXRhLnNob3cpIHtcbiAgICAvLyByZW1vdmUgcGVuZGluZyBsZWF2ZSBlbGVtZW50IG9uIGVudGVyIGJ5IGluamVjdGluZyBhbiBpbnNlcnQgaG9va1xuICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAnaW5zZXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICB2YXIgcGVuZGluZ05vZGUgPSBwYXJlbnQgJiYgcGFyZW50Ll9wZW5kaW5nICYmIHBhcmVudC5fcGVuZGluZ1t2bm9kZS5rZXldO1xuICAgICAgaWYgKHBlbmRpbmdOb2RlICYmXG4gICAgICAgIHBlbmRpbmdOb2RlLnRhZyA9PT0gdm5vZGUudGFnICYmXG4gICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYlxuICAgICAgKSB7XG4gICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYigpO1xuICAgICAgfVxuICAgICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gc3RhcnQgZW50ZXIgdHJhbnNpdGlvblxuICBiZWZvcmVFbnRlckhvb2sgJiYgYmVmb3JlRW50ZXJIb29rKGVsKTtcbiAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCB0b0NsYXNzKTtcbiAgICAgICAgaWYgKCF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24pKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdEVudGVyRHVyYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICh2bm9kZS5kYXRhLnNob3cpIHtcbiAgICB0b2dnbGVEaXNwbGF5ICYmIHRvZ2dsZURpc3BsYXkoKTtcbiAgICBlbnRlckhvb2sgJiYgZW50ZXJIb29rKGVsLCBjYik7XG4gIH1cblxuICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICBjYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxlYXZlICh2bm9kZSwgcm0pIHtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuXG4gIC8vIGNhbGwgZW50ZXIgY2FsbGJhY2sgbm93XG4gIGlmIChpc0RlZihlbC5fZW50ZXJDYikpIHtcbiAgICBlbC5fZW50ZXJDYi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgIGVsLl9lbnRlckNiKCk7XG4gIH1cblxuICB2YXIgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKHZub2RlLmRhdGEudHJhbnNpdGlvbik7XG4gIGlmIChpc1VuZGVmKGRhdGEpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIHJtKClcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICB2YXIgbGVhdmVDbGFzcyA9IGRhdGEubGVhdmVDbGFzcztcbiAgdmFyIGxlYXZlVG9DbGFzcyA9IGRhdGEubGVhdmVUb0NsYXNzO1xuICB2YXIgbGVhdmVBY3RpdmVDbGFzcyA9IGRhdGEubGVhdmVBY3RpdmVDbGFzcztcbiAgdmFyIGJlZm9yZUxlYXZlID0gZGF0YS5iZWZvcmVMZWF2ZTtcbiAgdmFyIGxlYXZlID0gZGF0YS5sZWF2ZTtcbiAgdmFyIGFmdGVyTGVhdmUgPSBkYXRhLmFmdGVyTGVhdmU7XG4gIHZhciBsZWF2ZUNhbmNlbGxlZCA9IGRhdGEubGVhdmVDYW5jZWxsZWQ7XG4gIHZhciBkZWxheUxlYXZlID0gZGF0YS5kZWxheUxlYXZlO1xuICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuXG4gIHZhciBleHBlY3RzQ1NTID0gY3NzICE9PSBmYWxzZSAmJiAhaXNJRTk7XG4gIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChsZWF2ZSk7XG5cbiAgdmFyIGV4cGxpY2l0TGVhdmVEdXJhdGlvbiA9IHRvTnVtYmVyKFxuICAgIGlzT2JqZWN0KGR1cmF0aW9uKVxuICAgICAgPyBkdXJhdGlvbi5sZWF2ZVxuICAgICAgOiBkdXJhdGlvblxuICApO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGV4cGxpY2l0TGVhdmVEdXJhdGlvbikpIHtcbiAgICBjaGVja0R1cmF0aW9uKGV4cGxpY2l0TGVhdmVEdXJhdGlvbiwgJ2xlYXZlJywgdm5vZGUpO1xuICB9XG5cbiAgdmFyIGNiID0gZWwuX2xlYXZlQ2IgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLl9wZW5kaW5nKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLl9wZW5kaW5nW3Zub2RlLmtleV0gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGxlYXZlQ2FuY2VsbGVkICYmIGxlYXZlQ2FuY2VsbGVkKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm0oKTtcbiAgICAgIGFmdGVyTGVhdmUgJiYgYWZ0ZXJMZWF2ZShlbCk7XG4gICAgfVxuICAgIGVsLl9sZWF2ZUNiID0gbnVsbDtcbiAgfSk7XG5cbiAgaWYgKGRlbGF5TGVhdmUpIHtcbiAgICBkZWxheUxlYXZlKHBlcmZvcm1MZWF2ZSk7XG4gIH0gZWxzZSB7XG4gICAgcGVyZm9ybUxlYXZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtTGVhdmUgKCkge1xuICAgIC8vIHRoZSBkZWxheWVkIGxlYXZlIG1heSBoYXZlIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gcmVjb3JkIGxlYXZpbmcgZWxlbWVudFxuICAgIGlmICghdm5vZGUuZGF0YS5zaG93ICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIChlbC5wYXJlbnROb2RlLl9wZW5kaW5nIHx8IChlbC5wYXJlbnROb2RlLl9wZW5kaW5nID0ge30pKVsodm5vZGUua2V5KV0gPSB2bm9kZTtcbiAgICB9XG4gICAgYmVmb3JlTGVhdmUgJiYgYmVmb3JlTGVhdmUoZWwpO1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0TGVhdmVEdXJhdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZWF2ZSAmJiBsZWF2ZShlbCwgY2IpO1xuICAgIGlmICghZXhwZWN0c0NTUyAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gb25seSB1c2VkIGluIGRldiBtb2RlXG5mdW5jdGlvbiBjaGVja0R1cmF0aW9uICh2YWwsIG5hbWUsIHZub2RlKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykge1xuICAgIHdhcm4oXG4gICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBub3QgYSB2YWxpZCBudW1iZXIgLSBcIiArXG4gICAgICBcImdvdCBcIiArIChKU09OLnN0cmluZ2lmeSh2YWwpKSArIFwiLlwiLFxuICAgICAgdm5vZGUuY29udGV4dFxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNOYU4odmFsKSkge1xuICAgIHdhcm4oXG4gICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBOYU4gLSBcIiArXG4gICAgICAndGhlIGR1cmF0aW9uIGV4cHJlc3Npb24gbWlnaHQgYmUgaW5jb3JyZWN0LicsXG4gICAgICB2bm9kZS5jb250ZXh0XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24gKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbClcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB0cmFuc2l0aW9uIGhvb2sncyBhcmd1bWVudCBsZW5ndGguIFRoZSBob29rIG1heSBiZTpcbiAqIC0gYSBtZXJnZWQgaG9vayAoaW52b2tlcikgd2l0aCB0aGUgb3JpZ2luYWwgaW4gLmZuc1xuICogLSBhIHdyYXBwZWQgY29tcG9uZW50IG1ldGhvZCAoY2hlY2sgLl9sZW5ndGgpXG4gKiAtIGEgcGxhaW4gZnVuY3Rpb24gKC5sZW5ndGgpXG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tBcmd1bWVudHNMZW5ndGggKGZuKSB7XG4gIGlmIChpc1VuZGVmKGZuKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHZhciBpbnZva2VyRm5zID0gZm4uZm5zO1xuICBpZiAoaXNEZWYoaW52b2tlckZucykpIHtcbiAgICAvLyBpbnZva2VyXG4gICAgcmV0dXJuIGdldEhvb2tBcmd1bWVudHNMZW5ndGgoXG4gICAgICBBcnJheS5pc0FycmF5KGludm9rZXJGbnMpXG4gICAgICAgID8gaW52b2tlckZuc1swXVxuICAgICAgICA6IGludm9rZXJGbnNcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmbi5fbGVuZ3RoIHx8IGZuLmxlbmd0aCkgPiAxXG4gIH1cbn1cblxuZnVuY3Rpb24gX2VudGVyIChfLCB2bm9kZSkge1xuICBpZiAodm5vZGUuZGF0YS5zaG93ICE9PSB0cnVlKSB7XG4gICAgZW50ZXIodm5vZGUpO1xuICB9XG59XG5cbnZhciB0cmFuc2l0aW9uID0gaW5Ccm93c2VyID8ge1xuICBjcmVhdGU6IF9lbnRlcixcbiAgYWN0aXZhdGU6IF9lbnRlcixcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUkJDEgKHZub2RlLCBybSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHZub2RlLmRhdGEuc2hvdyAhPT0gdHJ1ZSkge1xuICAgICAgbGVhdmUodm5vZGUsIHJtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm0oKTtcbiAgICB9XG4gIH1cbn0gOiB7fTtcblxudmFyIHBsYXRmb3JtTW9kdWxlcyA9IFtcbiAgYXR0cnMsXG4gIGtsYXNzLFxuICBldmVudHMsXG4gIGRvbVByb3BzLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvblxuXTtcblxuLyogICovXG5cbi8vIHRoZSBkaXJlY3RpdmUgbW9kdWxlIHNob3VsZCBiZSBhcHBsaWVkIGxhc3QsIGFmdGVyIGFsbFxuLy8gYnVpbHQtaW4gbW9kdWxlcyBoYXZlIGJlZW4gYXBwbGllZC5cbnZhciBtb2R1bGVzID0gcGxhdGZvcm1Nb2R1bGVzLmNvbmNhdChiYXNlTW9kdWxlcyk7XG5cbnZhciBwYXRjaCA9IGNyZWF0ZVBhdGNoRnVuY3Rpb24oeyBub2RlT3BzOiBub2RlT3BzLCBtb2R1bGVzOiBtb2R1bGVzIH0pO1xuXG4vKipcbiAqIE5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBsaWtlIGF0dGFjaGluZ1xuICogcHJvcGVydGllcyB0byBFbGVtZW50cy5cbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmIChpc0lFOSkge1xuICAvLyBodHRwOi8vd3d3Lm1hdHRzNDExLmNvbS9wb3N0L2ludGVybmV0LWV4cGxvcmVyLTktb25pbnB1dC9cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGVsICYmIGVsLnZtb2RlbCkge1xuICAgICAgdHJpZ2dlcihlbCwgJ2lucHV0Jyk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGRpcmVjdGl2ZSA9IHtcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIGluc2VydGVkIChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIC8vICM2OTAzXG4gICAgICBpZiAob2xkVm5vZGUuZWxtICYmICFvbGRWbm9kZS5lbG0uX3ZPcHRpb25zKSB7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpcmVjdGl2ZS5jb21wb25lbnRVcGRhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgfVxuICAgICAgZWwuX3ZPcHRpb25zID0gW10ubWFwLmNhbGwoZWwub3B0aW9ucywgZ2V0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodm5vZGUudGFnID09PSAndGV4dGFyZWEnIHx8IGlzVGV4dElucHV0VHlwZShlbC50eXBlKSkge1xuICAgICAgZWwuX3ZNb2RpZmllcnMgPSBiaW5kaW5nLm1vZGlmaWVycztcbiAgICAgIGlmICghYmluZGluZy5tb2RpZmllcnMubGF6eSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0Jywgb25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgLy8gU2FmYXJpIDwgMTAuMiAmIFVJV2ViVmlldyBkb2Vzbid0IGZpcmUgY29tcG9zaXRpb25lbmQgd2hlblxuICAgICAgICAvLyBzd2l0Y2hpbmcgZm9jdXMgYmVmb3JlIGNvbmZpcm1pbmcgY29tcG9zaXRpb24gY2hvaWNlXG4gICAgICAgIC8vIHRoaXMgYWxzbyBmaXhlcyB0aGUgaXNzdWUgd2hlcmUgc29tZSBicm93c2VycyBlLmcuIGlPUyBDaHJvbWVcbiAgICAgICAgLy8gZmlyZXMgXCJjaGFuZ2VcIiBpbnN0ZWFkIG9mIFwiaW5wdXRcIiBvbiBhdXRvY29tcGxldGUuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGlzSUU5KSB7XG4gICAgICAgICAgZWwudm1vZGVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbiBjb21wb25lbnRVcGRhdGVkIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpZiAodm5vZGUudGFnID09PSAnc2VsZWN0Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgLy8gaW4gY2FzZSB0aGUgb3B0aW9ucyByZW5kZXJlZCBieSB2LWZvciBoYXZlIGNoYW5nZWQsXG4gICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHZhbHVlIGlzIG91dC1vZi1zeW5jIHdpdGggdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gICAgICAvLyBkZXRlY3Qgc3VjaCBjYXNlcyBhbmQgZmlsdGVyIG91dCB2YWx1ZXMgdGhhdCBubyBsb25nZXIgaGFzIGEgbWF0Y2hpbmdcbiAgICAgIC8vIG9wdGlvbiBpbiB0aGUgRE9NLlxuICAgICAgdmFyIHByZXZPcHRpb25zID0gZWwuX3ZPcHRpb25zO1xuICAgICAgdmFyIGN1ck9wdGlvbnMgPSBlbC5fdk9wdGlvbnMgPSBbXS5tYXAuY2FsbChlbC5vcHRpb25zLCBnZXRWYWx1ZSk7XG4gICAgICBpZiAoY3VyT3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvLCBpKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCBwcmV2T3B0aW9uc1tpXSk7IH0pKSB7XG4gICAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50IGlmXG4gICAgICAgIC8vIG5vIG1hdGNoaW5nIG9wdGlvbiBmb3VuZCBmb3IgYXQgbGVhc3Qgb25lIHZhbHVlXG4gICAgICAgIHZhciBuZWVkUmVzZXQgPSBlbC5tdWx0aXBsZVxuICAgICAgICAgID8gYmluZGluZy52YWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7IHJldHVybiBoYXNOb01hdGNoaW5nT3B0aW9uKHYsIGN1ck9wdGlvbnMpOyB9KVxuICAgICAgICAgIDogYmluZGluZy52YWx1ZSAhPT0gYmluZGluZy5vbGRWYWx1ZSAmJiBoYXNOb01hdGNoaW5nT3B0aW9uKGJpbmRpbmcudmFsdWUsIGN1ck9wdGlvbnMpO1xuICAgICAgICBpZiAobmVlZFJlc2V0KSB7XG4gICAgICAgICAgdHJpZ2dlcihlbCwgJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBzZXRTZWxlY3RlZCAoZWwsIGJpbmRpbmcsIHZtKSB7XG4gIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0lFIHx8IGlzRWRnZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYWN0dWFsbHlTZXRTZWxlY3RlZChlbCwgYmluZGluZywgdm0pO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjdHVhbGx5U2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICB2YXIgdmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICB2YXIgaXNNdWx0aXBsZSA9IGVsLm11bHRpcGxlO1xuICBpZiAoaXNNdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIjxzZWxlY3QgbXVsdGlwbGUgdi1tb2RlbD1cXFwiXCIgKyAoYmluZGluZy5leHByZXNzaW9uKSArIFwiXFxcIj4gXCIgK1xuICAgICAgXCJleHBlY3RzIGFuIEFycmF5IHZhbHVlIGZvciBpdHMgYmluZGluZywgYnV0IGdvdCBcIiArIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSksXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHNlbGVjdGVkLCBvcHRpb247XG4gIGZvciAodmFyIGkgPSAwLCBsID0gZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvcHRpb24gPSBlbC5vcHRpb25zW2ldO1xuICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICBzZWxlY3RlZCA9IGxvb3NlSW5kZXhPZih2YWx1ZSwgZ2V0VmFsdWUob3B0aW9uKSkgPiAtMTtcbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgIT09IHNlbGVjdGVkKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobG9vc2VFcXVhbChnZXRWYWx1ZShvcHRpb24pLCB2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGVsLnNlbGVjdGVkSW5kZXggIT09IGkpIHtcbiAgICAgICAgICBlbC5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFpc011bHRpcGxlKSB7XG4gICAgZWwuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc05vTWF0Y2hpbmdPcHRpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChvKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCB2YWx1ZSk7IH0pXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlIChvcHRpb24pIHtcbiAgcmV0dXJuICdfdmFsdWUnIGluIG9wdGlvblxuICAgID8gb3B0aW9uLl92YWx1ZVxuICAgIDogb3B0aW9uLnZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uQ29tcG9zaXRpb25TdGFydCAoZSkge1xuICBlLnRhcmdldC5jb21wb3NpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kIChlKSB7XG4gIC8vIHByZXZlbnQgdHJpZ2dlcmluZyBhbiBpbnB1dCBldmVudCBmb3Igbm8gcmVhc29uXG4gIGlmICghZS50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybiB9XG4gIGUudGFyZ2V0LmNvbXBvc2luZyA9IGZhbHNlO1xuICB0cmlnZ2VyKGUudGFyZ2V0LCAnaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlciAoZWwsIHR5cGUpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICBlLmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKTtcbiAgZWwuZGlzcGF0Y2hFdmVudChlKTtcbn1cblxuLyogICovXG5cbi8vIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgcG9zc2libGUgdHJhbnNpdGlvbiBkZWZpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IHJvb3RcbmZ1bmN0aW9uIGxvY2F0ZU5vZGUgKHZub2RlKSB7XG4gIHJldHVybiB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJiAoIXZub2RlLmRhdGEgfHwgIXZub2RlLmRhdGEudHJhbnNpdGlvbilcbiAgICA/IGxvY2F0ZU5vZGUodm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKVxuICAgIDogdm5vZGVcbn1cblxudmFyIHNob3cgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQgKGVsLCByZWYsIHZub2RlKSB7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICB2YXIgdHJhbnNpdGlvbiQkMSA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgIHZhciBvcmlnaW5hbERpc3BsYXkgPSBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgPVxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJycgOiBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIGlmICh2YWx1ZSAmJiB0cmFuc2l0aW9uJCQxKSB7XG4gICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IG9yaWdpbmFsRGlzcGxheTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBvcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChlbCwgcmVmLCB2bm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcbiAgICB2YXIgb2xkVmFsdWUgPSByZWYub2xkVmFsdWU7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXZhbHVlID09PSAhb2xkVmFsdWUpIHsgcmV0dXJuIH1cbiAgICB2bm9kZSA9IGxvY2F0ZU5vZGUodm5vZGUpO1xuICAgIHZhciB0cmFuc2l0aW9uJCQxID0gdm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLnRyYW5zaXRpb247XG4gICAgaWYgKHRyYW5zaXRpb24kJDEpIHtcbiAgICAgIHZub2RlLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlYXZlKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/IGVsLl9fdk9yaWdpbmFsRGlzcGxheSA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQgKFxuICAgIGVsLFxuICAgIGJpbmRpbmcsXG4gICAgdm5vZGUsXG4gICAgb2xkVm5vZGUsXG4gICAgaXNEZXN0cm95XG4gICkge1xuICAgIGlmICghaXNEZXN0cm95KSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgIH1cbiAgfVxufTtcblxudmFyIHBsYXRmb3JtRGlyZWN0aXZlcyA9IHtcbiAgbW9kZWw6IGRpcmVjdGl2ZSxcbiAgc2hvdzogc2hvd1xufTtcblxuLyogICovXG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSB7XG4gIG5hbWU6IFN0cmluZyxcbiAgYXBwZWFyOiBCb29sZWFuLFxuICBjc3M6IEJvb2xlYW4sXG4gIG1vZGU6IFN0cmluZyxcbiAgdHlwZTogU3RyaW5nLFxuICBlbnRlckNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQ2xhc3M6IFN0cmluZyxcbiAgZW50ZXJUb0NsYXNzOiBTdHJpbmcsXG4gIGxlYXZlVG9DbGFzczogU3RyaW5nLFxuICBlbnRlckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyVG9DbGFzczogU3RyaW5nLFxuICBkdXJhdGlvbjogW051bWJlciwgU3RyaW5nLCBPYmplY3RdXG59O1xuXG4vLyBpbiBjYXNlIHRoZSBjaGlsZCBpcyBhbHNvIGFuIGFic3RyYWN0IGNvbXBvbmVudCwgZS5nLiA8a2VlcC1hbGl2ZT5cbi8vIHdlIHdhbnQgdG8gcmVjdXJzaXZlbHkgcmV0cmlldmUgdGhlIHJlYWwgY29tcG9uZW50IHRvIGJlIHJlbmRlcmVkXG5mdW5jdGlvbiBnZXRSZWFsQ2hpbGQgKHZub2RlKSB7XG4gIHZhciBjb21wT3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIGlmIChjb21wT3B0aW9ucyAmJiBjb21wT3B0aW9ucy5DdG9yLm9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICByZXR1cm4gZ2V0UmVhbENoaWxkKGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoY29tcE9wdGlvbnMuY2hpbGRyZW4pKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUcmFuc2l0aW9uRGF0YSAoY29tcCkge1xuICB2YXIgZGF0YSA9IHt9O1xuICB2YXIgb3B0aW9ucyA9IGNvbXAuJG9wdGlvbnM7XG4gIC8vIHByb3BzXG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLnByb3BzRGF0YSkge1xuICAgIGRhdGFba2V5XSA9IGNvbXBba2V5XTtcbiAgfVxuICAvLyBldmVudHMuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzIGFuZCBwYXNzIHRoZW0gZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24gbWV0aG9kc1xuICB2YXIgbGlzdGVuZXJzID0gb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBmb3IgKHZhciBrZXkkMSBpbiBsaXN0ZW5lcnMpIHtcbiAgICBkYXRhW2NhbWVsaXplKGtleSQxKV0gPSBsaXN0ZW5lcnNba2V5JDFdO1xuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbmZ1bmN0aW9uIHBsYWNlaG9sZGVyIChoLCByYXdDaGlsZCkge1xuICBpZiAoL1xcZC1rZWVwLWFsaXZlJC8udGVzdChyYXdDaGlsZC50YWcpKSB7XG4gICAgcmV0dXJuIGgoJ2tlZXAtYWxpdmUnLCB7XG4gICAgICBwcm9wczogcmF3Q2hpbGQuY29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGFcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhc1BhcmVudFRyYW5zaXRpb24gKHZub2RlKSB7XG4gIHdoaWxlICgodm5vZGUgPSB2bm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHZub2RlLmRhdGEudHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTYW1lQ2hpbGQgKGNoaWxkLCBvbGRDaGlsZCkge1xuICByZXR1cm4gb2xkQ2hpbGQua2V5ID09PSBjaGlsZC5rZXkgJiYgb2xkQ2hpbGQudGFnID09PSBjaGlsZC50YWdcbn1cblxudmFyIGlzTm90VGV4dE5vZGUgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50YWcgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpOyB9O1xuXG52YXIgaXNWU2hvd0RpcmVjdGl2ZSA9IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09ICdzaG93JzsgfTtcblxudmFyIFRyYW5zaXRpb24gPSB7XG4gIG5hbWU6ICd0cmFuc2l0aW9uJyxcbiAgcHJvcHM6IHRyYW5zaXRpb25Qcm9wcyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIG91dCB0ZXh0IG5vZGVzIChwb3NzaWJsZSB3aGl0ZXNwYWNlcylcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihpc05vdFRleHROb2RlKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2FybiBtdWx0aXBsZSBlbGVtZW50c1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICc8dHJhbnNpdGlvbj4gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIHNpbmdsZSBlbGVtZW50LiBVc2UgJyArXG4gICAgICAgICc8dHJhbnNpdGlvbi1ncm91cD4gZm9yIGxpc3RzLicsXG4gICAgICAgIHRoaXMuJHBhcmVudFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgbW9kZSA9IHRoaXMubW9kZTtcblxuICAgIC8vIHdhcm4gaW52YWxpZCBtb2RlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIG1vZGUgJiYgbW9kZSAhPT0gJ2luLW91dCcgJiYgbW9kZSAhPT0gJ291dC1pbidcbiAgICApIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdpbnZhbGlkIDx0cmFuc2l0aW9uPiBtb2RlOiAnICsgbW9kZSxcbiAgICAgICAgdGhpcy4kcGFyZW50XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciByYXdDaGlsZCA9IGNoaWxkcmVuWzBdO1xuXG4gICAgLy8gaWYgdGhpcyBpcyBhIGNvbXBvbmVudCByb290IG5vZGUgYW5kIHRoZSBjb21wb25lbnQnc1xuICAgIC8vIHBhcmVudCBjb250YWluZXIgbm9kZSBhbHNvIGhhcyB0cmFuc2l0aW9uLCBza2lwLlxuICAgIGlmIChoYXNQYXJlbnRUcmFuc2l0aW9uKHRoaXMuJHZub2RlKSkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgLy8gYXBwbHkgdHJhbnNpdGlvbiBkYXRhIHRvIGNoaWxkXG4gICAgLy8gdXNlIGdldFJlYWxDaGlsZCgpIHRvIGlnbm9yZSBhYnN0cmFjdCBjb21wb25lbnRzIGUuZy4ga2VlcC1hbGl2ZVxuICAgIHZhciBjaGlsZCA9IGdldFJlYWxDaGlsZChyYXdDaGlsZCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xlYXZpbmcpIHtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgYSBrZXkgdGhhdCBpcyB1bmlxdWUgdG8gdGhlIHZub2RlIHR5cGUgYW5kIHRvIHRoaXMgdHJhbnNpdGlvblxuICAgIC8vIGNvbXBvbmVudCBpbnN0YW5jZS4gVGhpcyBrZXkgd2lsbCBiZSB1c2VkIHRvIHJlbW92ZSBwZW5kaW5nIGxlYXZpbmcgbm9kZXNcbiAgICAvLyBkdXJpbmcgZW50ZXJpbmcuXG4gICAgdmFyIGlkID0gXCJfX3RyYW5zaXRpb24tXCIgKyAodGhpcy5fdWlkKSArIFwiLVwiO1xuICAgIGNoaWxkLmtleSA9IGNoaWxkLmtleSA9PSBudWxsXG4gICAgICA/IGNoaWxkLmlzQ29tbWVudFxuICAgICAgICA/IGlkICsgJ2NvbW1lbnQnXG4gICAgICAgIDogaWQgKyBjaGlsZC50YWdcbiAgICAgIDogaXNQcmltaXRpdmUoY2hpbGQua2V5KVxuICAgICAgICA/IChTdHJpbmcoY2hpbGQua2V5KS5pbmRleE9mKGlkKSA9PT0gMCA/IGNoaWxkLmtleSA6IGlkICsgY2hpbGQua2V5KVxuICAgICAgICA6IGNoaWxkLmtleTtcblxuICAgIHZhciBkYXRhID0gKGNoaWxkLmRhdGEgfHwgKGNoaWxkLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG4gICAgdmFyIG9sZFJhd0NoaWxkID0gdGhpcy5fdm5vZGU7XG4gICAgdmFyIG9sZENoaWxkID0gZ2V0UmVhbENoaWxkKG9sZFJhd0NoaWxkKTtcblxuICAgIC8vIG1hcmsgdi1zaG93XG4gICAgLy8gc28gdGhhdCB0aGUgdHJhbnNpdGlvbiBtb2R1bGUgY2FuIGhhbmQgb3ZlciB0aGUgY29udHJvbCB0byB0aGUgZGlyZWN0aXZlXG4gICAgaWYgKGNoaWxkLmRhdGEuZGlyZWN0aXZlcyAmJiBjaGlsZC5kYXRhLmRpcmVjdGl2ZXMuc29tZShpc1ZTaG93RGlyZWN0aXZlKSkge1xuICAgICAgY2hpbGQuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvbGRDaGlsZCAmJlxuICAgICAgb2xkQ2hpbGQuZGF0YSAmJlxuICAgICAgIWlzU2FtZUNoaWxkKGNoaWxkLCBvbGRDaGlsZCkgJiZcbiAgICAgICFpc0FzeW5jUGxhY2Vob2xkZXIob2xkQ2hpbGQpICYmXG4gICAgICAvLyAjNjY4NyBjb21wb25lbnQgcm9vdCBpcyBhIGNvbW1lbnQgbm9kZVxuICAgICAgIShvbGRDaGlsZC5jb21wb25lbnRJbnN0YW5jZSAmJiBvbGRDaGlsZC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUuaXNDb21tZW50KVxuICAgICkge1xuICAgICAgLy8gcmVwbGFjZSBvbGQgY2hpbGQgdHJhbnNpdGlvbiBkYXRhIHdpdGggZnJlc2ggb25lXG4gICAgICAvLyBpbXBvcnRhbnQgZm9yIGR5bmFtaWMgdHJhbnNpdGlvbnMhXG4gICAgICB2YXIgb2xkRGF0YSA9IG9sZENoaWxkLmRhdGEudHJhbnNpdGlvbiA9IGV4dGVuZCh7fSwgZGF0YSk7XG4gICAgICAvLyBoYW5kbGUgdHJhbnNpdGlvbiBtb2RlXG4gICAgICBpZiAobW9kZSA9PT0gJ291dC1pbicpIHtcbiAgICAgICAgLy8gcmV0dXJuIHBsYWNlaG9sZGVyIG5vZGUgYW5kIHF1ZXVlIHVwZGF0ZSB3aGVuIGxlYXZlIGZpbmlzaGVzXG4gICAgICAgIHRoaXMuX2xlYXZpbmcgPSB0cnVlO1xuICAgICAgICBtZXJnZVZOb2RlSG9vayhvbGREYXRhLCAnYWZ0ZXJMZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzJDEuX2xlYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzJDEuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdpbi1vdXQnKSB7XG4gICAgICAgIGlmIChpc0FzeW5jUGxhY2Vob2xkZXIoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIG9sZFJhd0NoaWxkXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGF5ZWRMZWF2ZTtcbiAgICAgICAgdmFyIHBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uICgpIHsgZGVsYXllZExlYXZlKCk7IH07XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdhZnRlckVudGVyJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2soZGF0YSwgJ2VudGVyQ2FuY2VsbGVkJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2RlbGF5TGVhdmUnLCBmdW5jdGlvbiAobGVhdmUpIHsgZGVsYXllZExlYXZlID0gbGVhdmU7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByYXdDaGlsZFxuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHByb3BzID0gZXh0ZW5kKHtcbiAgdGFnOiBTdHJpbmcsXG4gIG1vdmVDbGFzczogU3RyaW5nXG59LCB0cmFuc2l0aW9uUHJvcHMpO1xuXG5kZWxldGUgcHJvcHMubW9kZTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IHtcbiAgcHJvcHM6IHByb3BzLFxuXG4gIGJlZm9yZU1vdW50OiBmdW5jdGlvbiBiZWZvcmVNb3VudCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdXBkYXRlID0gdGhpcy5fdXBkYXRlO1xuICAgIHRoaXMuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2UodGhpcyQxKTtcbiAgICAgIC8vIGZvcmNlIHJlbW92aW5nIHBhc3NcbiAgICAgIHRoaXMkMS5fX3BhdGNoX18oXG4gICAgICAgIHRoaXMkMS5fdm5vZGUsXG4gICAgICAgIHRoaXMkMS5rZXB0LFxuICAgICAgICBmYWxzZSwgLy8gaHlkcmF0aW5nXG4gICAgICAgIHRydWUgLy8gcmVtb3ZlT25seSAoIWltcG9ydGFudCwgYXZvaWRzIHVubmVjZXNzYXJ5IG1vdmVzKVxuICAgICAgKTtcbiAgICAgIHRoaXMkMS5fdm5vZGUgPSB0aGlzJDEua2VwdDtcbiAgICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgICAgdXBkYXRlLmNhbGwodGhpcyQxLCB2bm9kZSwgaHlkcmF0aW5nKTtcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRhZyA9IHRoaXMudGFnIHx8IHRoaXMuJHZub2RlLmRhdGEudGFnIHx8ICdzcGFuJztcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgcHJldkNoaWxkcmVuID0gdGhpcy5wcmV2Q2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgIHZhciByYXdDaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW107XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHZhciB0cmFuc2l0aW9uRGF0YSA9IGV4dHJhY3RUcmFuc2l0aW9uRGF0YSh0aGlzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gcmF3Q2hpbGRyZW5baV07XG4gICAgICBpZiAoYy50YWcpIHtcbiAgICAgICAgaWYgKGMua2V5ICE9IG51bGwgJiYgU3RyaW5nKGMua2V5KS5pbmRleE9mKCdfX3ZsaXN0JykgIT09IDApIHtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKGMpO1xuICAgICAgICAgIG1hcFtjLmtleV0gPSBjXG4gICAgICAgICAgOyhjLmRhdGEgfHwgKGMuZGF0YSA9IHt9KSkudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB2YXIgb3B0cyA9IGMuY29tcG9uZW50T3B0aW9ucztcbiAgICAgICAgICB2YXIgbmFtZSA9IG9wdHMgPyAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZyB8fCAnJykgOiBjLnRhZztcbiAgICAgICAgICB3YXJuKChcIjx0cmFuc2l0aW9uLWdyb3VwPiBjaGlsZHJlbiBtdXN0IGJlIGtleWVkOiA8XCIgKyBuYW1lICsgXCI+XCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2Q2hpbGRyZW4pIHtcbiAgICAgIHZhciBrZXB0ID0gW107XG4gICAgICB2YXIgcmVtb3ZlZCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcHJldkNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgdmFyIGMkMSA9IHByZXZDaGlsZHJlbltpJDFdO1xuICAgICAgICBjJDEuZGF0YS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbkRhdGE7XG4gICAgICAgIGMkMS5kYXRhLnBvcyA9IGMkMS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChtYXBbYyQxLmtleV0pIHtcbiAgICAgICAgICBrZXB0LnB1c2goYyQxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVkLnB1c2goYyQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5rZXB0ID0gaCh0YWcsIG51bGwsIGtlcHQpO1xuICAgICAgdGhpcy5yZW1vdmVkID0gcmVtb3ZlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIG51bGwsIGNoaWxkcmVuKVxuICB9LFxuXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uIHVwZGF0ZWQgKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuO1xuICAgIHZhciBtb3ZlQ2xhc3MgPSB0aGlzLm1vdmVDbGFzcyB8fCAoKHRoaXMubmFtZSB8fCAndicpICsgJy1tb3ZlJyk7XG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGggfHwgIXRoaXMuaGFzTW92ZShjaGlsZHJlblswXS5lbG0sIG1vdmVDbGFzcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdlIGRpdmlkZSB0aGUgd29yayBpbnRvIHRocmVlIGxvb3BzIHRvIGF2b2lkIG1peGluZyBET00gcmVhZHMgYW5kIHdyaXRlc1xuICAgIC8vIGluIGVhY2ggaXRlcmF0aW9uIC0gd2hpY2ggaGVscHMgcHJldmVudCBsYXlvdXQgdGhyYXNoaW5nLlxuICAgIGNoaWxkcmVuLmZvckVhY2goY2FsbFBlbmRpbmdDYnMpO1xuICAgIGNoaWxkcmVuLmZvckVhY2gocmVjb3JkUG9zaXRpb24pO1xuICAgIGNoaWxkcmVuLmZvckVhY2goYXBwbHlUcmFuc2xhdGlvbik7XG5cbiAgICAvLyBmb3JjZSByZWZsb3cgdG8gcHV0IGV2ZXJ5dGhpbmcgaW4gcG9zaXRpb25cbiAgICAvLyBhc3NpZ24gdG8gdGhpcyB0byBhdm9pZCBiZWluZyByZW1vdmVkIGluIHRyZWUtc2hha2luZ1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHRoaXMuX3JlZmxvdyA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgaWYgKGMuZGF0YS5tb3ZlZCkge1xuICAgICAgICB2YXIgZWwgPSBjLmVsbTtcbiAgICAgICAgdmFyIHMgPSBlbC5zdHlsZTtcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xuICAgICAgICBzLnRyYW5zZm9ybSA9IHMuV2Via2l0VHJhbnNmb3JtID0gcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIGVsLl9tb3ZlQ2IgPSBmdW5jdGlvbiBjYiAoZSkge1xuICAgICAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBlbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZSB8fCAvdHJhbnNmb3JtJC8udGVzdChlLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBjYik7XG4gICAgICAgICAgICBlbC5fbW92ZUNiID0gbnVsbDtcbiAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYXNNb3ZlOiBmdW5jdGlvbiBoYXNNb3ZlIChlbCwgbW92ZUNsYXNzKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFzVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHRoaXMuX2hhc01vdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc01vdmVcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCB3aGV0aGVyIGFuIGVsZW1lbnQgd2l0aCB0aGUgbW92ZSBjbGFzcyBhcHBsaWVkIGhhc1xuICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zLiBTaW5jZSB0aGUgZWxlbWVudCBtYXkgYmUgaW5zaWRlIGFuIGVudGVyaW5nXG4gICAgICAvLyB0cmFuc2l0aW9uIGF0IHRoaXMgdmVyeSBtb21lbnQsIHdlIG1ha2UgYSBjbG9uZSBvZiBpdCBhbmQgcmVtb3ZlXG4gICAgICAvLyBhbGwgb3RoZXIgdHJhbnNpdGlvbiBjbGFzc2VzIGFwcGxpZWQgdG8gZW5zdXJlIG9ubHkgdGhlIG1vdmUgY2xhc3NcbiAgICAgIC8vIGlzIGFwcGxpZWQuXG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUoKTtcbiAgICAgIGlmIChlbC5fdHJhbnNpdGlvbkNsYXNzZXMpIHtcbiAgICAgICAgZWwuX3RyYW5zaXRpb25DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNscykgeyByZW1vdmVDbGFzcyhjbG9uZSwgY2xzKTsgfSk7XG4gICAgICB9XG4gICAgICBhZGRDbGFzcyhjbG9uZSwgbW92ZUNsYXNzKTtcbiAgICAgIGNsb25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLiRlbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB2YXIgaW5mbyA9IGdldFRyYW5zaXRpb25JbmZvKGNsb25lKTtcbiAgICAgIHRoaXMuJGVsLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgIHJldHVybiAodGhpcy5faGFzTW92ZSA9IGluZm8uaGFzVHJhbnNmb3JtKVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gY2FsbFBlbmRpbmdDYnMgKGMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjLmVsbS5fbW92ZUNiKSB7XG4gICAgYy5lbG0uX21vdmVDYigpO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoYy5lbG0uX2VudGVyQ2IpIHtcbiAgICBjLmVsbS5fZW50ZXJDYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY29yZFBvc2l0aW9uIChjKSB7XG4gIGMuZGF0YS5uZXdQb3MgPSBjLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn1cblxuZnVuY3Rpb24gYXBwbHlUcmFuc2xhdGlvbiAoYykge1xuICB2YXIgb2xkUG9zID0gYy5kYXRhLnBvcztcbiAgdmFyIG5ld1BvcyA9IGMuZGF0YS5uZXdQb3M7XG4gIHZhciBkeCA9IG9sZFBvcy5sZWZ0IC0gbmV3UG9zLmxlZnQ7XG4gIHZhciBkeSA9IG9sZFBvcy50b3AgLSBuZXdQb3MudG9wO1xuICBpZiAoZHggfHwgZHkpIHtcbiAgICBjLmRhdGEubW92ZWQgPSB0cnVlO1xuICAgIHZhciBzID0gYy5lbG0uc3R5bGU7XG4gICAgcy50cmFuc2Zvcm0gPSBzLldlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgZHggKyBcInB4LFwiICsgZHkgKyBcInB4KVwiO1xuICAgIHMudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcbiAgfVxufVxuXG52YXIgcGxhdGZvcm1Db21wb25lbnRzID0ge1xuICBUcmFuc2l0aW9uOiBUcmFuc2l0aW9uLFxuICBUcmFuc2l0aW9uR3JvdXA6IFRyYW5zaXRpb25Hcm91cFxufTtcblxuLyogICovXG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gc3BlY2lmaWMgdXRpbHNcblZ1ZS5jb25maWcubXVzdFVzZVByb3AgPSBtdXN0VXNlUHJvcDtcblZ1ZS5jb25maWcuaXNSZXNlcnZlZFRhZyA9IGlzUmVzZXJ2ZWRUYWc7XG5WdWUuY29uZmlnLmlzUmVzZXJ2ZWRBdHRyID0gaXNSZXNlcnZlZEF0dHI7XG5WdWUuY29uZmlnLmdldFRhZ05hbWVzcGFjZSA9IGdldFRhZ05hbWVzcGFjZTtcblZ1ZS5jb25maWcuaXNVbmtub3duRWxlbWVudCA9IGlzVW5rbm93bkVsZW1lbnQ7XG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcnVudGltZSBkaXJlY3RpdmVzICYgY29tcG9uZW50c1xuZXh0ZW5kKFZ1ZS5vcHRpb25zLmRpcmVjdGl2ZXMsIHBsYXRmb3JtRGlyZWN0aXZlcyk7XG5leHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgcGxhdGZvcm1Db21wb25lbnRzKTtcblxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBwYXRjaCBmdW5jdGlvblxuVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gPSBpbkJyb3dzZXIgPyBwYXRjaCA6IG5vb3A7XG5cbi8vIHB1YmxpYyBtb3VudCBtZXRob2RcblZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24gKFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgZWwgPSBlbCAmJiBpbkJyb3dzZXIgPyBxdWVyeShlbCkgOiB1bmRlZmluZWQ7XG4gIHJldHVybiBtb3VudENvbXBvbmVudCh0aGlzLCBlbCwgaHlkcmF0aW5nKVxufTtcblxuLy8gZGV2dG9vbHMgZ2xvYmFsIGhvb2tcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoaW5Ccm93c2VyKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb25maWcuZGV2dG9vbHMpIHtcbiAgICAgIGlmIChkZXZ0b29scykge1xuICAgICAgICBkZXZ0b29scy5lbWl0KCdpbml0JywgVnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0J1xuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGVbY29uc29sZS5pbmZvID8gJ2luZm8nIDogJ2xvZyddKFxuICAgICAgICAgICdEb3dubG9hZCB0aGUgVnVlIERldnRvb2xzIGV4dGVuc2lvbiBmb3IgYSBiZXR0ZXIgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZTpcXG4nICtcbiAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1kZXZ0b29scydcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgIGNvbmZpZy5wcm9kdWN0aW9uVGlwICE9PSBmYWxzZSAmJlxuICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnXG4gICAgKSB7XG4gICAgICBjb25zb2xlW2NvbnNvbGUuaW5mbyA/ICdpbmZvJyA6ICdsb2cnXShcbiAgICAgICAgXCJZb3UgYXJlIHJ1bm5pbmcgVnVlIGluIGRldmVsb3BtZW50IG1vZGUuXFxuXCIgK1xuICAgICAgICBcIk1ha2Ugc3VyZSB0byB0dXJuIG9uIHByb2R1Y3Rpb24gbW9kZSB3aGVuIGRlcGxveWluZyBmb3IgcHJvZHVjdGlvbi5cXG5cIiArXG4gICAgICAgIFwiU2VlIG1vcmUgdGlwcyBhdCBodHRwczovL3Z1ZWpzLm9yZy9ndWlkZS9kZXBsb3ltZW50Lmh0bWxcIlxuICAgICAgKTtcbiAgICB9XG4gIH0sIDApO1xufVxuXG4vKiAgKi9cblxuZXhwb3J0IGRlZmF1bHQgVnVlO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vanMvdnVlL2FwcC52dWUnXG5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXG5cbmlmIChlbGVtZW50KSB7XG4gICAgbmV3IFZ1ZSh7XG4gICAgICAgIHJlbmRlcjogKGgpID0+IGgoQXBwKVxuICAgIH0pLiRtb3VudChlbGVtZW50KVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2NDlkZjFlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9tYXJrYnJhbmQvRG9ja2VyL2thbXUtc2l0ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjY0OWRmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjY0OWRmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjY0OWRmMWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjY0OWRmMWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRoZW1lL3NyYy9qcy92dWUvYXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2NDlkZjFlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==
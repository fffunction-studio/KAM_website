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
/******/ 	return __webpack_require__(__webpack_require__.s = "./theme/src/head.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/picturefill/dist/picturefill.js":
/*!******************************************************!*\
  !*** ./node_modules/picturefill/dist/picturefill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */

/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function (window) {
  /*jshint eqnull:true */
  var ua = navigator.userAgent;

  if (window.HTMLPictureElement && /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) {
    addEventListener("resize", function () {
      var timer;
      var dummySrc = document.createElement("source");

      var fixRespimg = function fixRespimg(img) {
        var source, sizes;
        var picture = img.parentNode;

        if (picture.nodeName.toUpperCase() === "PICTURE") {
          source = dummySrc.cloneNode();
          picture.insertBefore(source, picture.firstElementChild);
          setTimeout(function () {
            picture.removeChild(source);
          });
        } else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
          img._pfLastSize = img.offsetWidth;
          sizes = img.sizes;
          img.sizes += ",100vw";
          setTimeout(function () {
            img.sizes = sizes;
          });
        }
      };

      var findPictureImgs = function findPictureImgs() {
        var i;
        var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");

        for (i = 0; i < imgs.length; i++) {
          fixRespimg(imgs[i]);
        }
      };

      var onResize = function onResize() {
        clearTimeout(timer);
        timer = setTimeout(findPictureImgs, 99);
      };

      var mq = window.matchMedia && matchMedia("(orientation: landscape)");

      var init = function init() {
        onResize();

        if (mq && mq.addListener) {
          mq.addListener(onResize);
        }
      };

      dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

      if (/^[c|i]|d$/.test(document.readyState || "")) {
        init();
      } else {
        document.addEventListener("DOMContentLoaded", init);
      }

      return onResize;
    }());
  }
})(window);
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */


(function (window, document, undefined) {
  // Enable strict mode
  "use strict"; // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)

  document.createElement("picture");
  var warn, eminpx, alwaysCheckWDescriptor, evalId; // local object for method references and testing exposure

  var pf = {};
  var isSupportTestReady = false;

  var noop = function noop() {};

  var image = document.createElement("img");
  var getImgAttr = image.getAttribute;
  var setImgAttr = image.setAttribute;
  var removeImgAttr = image.removeAttribute;
  var docElem = document.documentElement;
  var types = {};
  var cfg = {
    //resource selection:
    algorithm: ""
  };
  var srcAttr = "data-pfsrc";
  var srcsetAttr = srcAttr + "set"; // ua sniffing is done for undetectable img loading features,
  // to do some non crucial perf optimizations

  var ua = navigator.userAgent;
  var supportAbort = /rident/.test(ua) || /ecko/.test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35;
  var curSrcProp = "currentSrc";
  var regWDesc = /\s+\+?\d+(e\d+)?w/;
  var regSize = /(\([^)]+\))?\s*(.+)/;
  var setOptions = window.picturefillCFG;
  /**
   * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
   */
  // baseStyle also used by getEmValue (i.e.: width: 1em is important)

  var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
  var fsCss = "font-size:100%!important;";
  var isVwDirty = true;
  var cssCache = {};
  var sizeLengthCache = {};
  var DPR = window.devicePixelRatio;
  var units = {
    px: 1,
    "in": 96
  };
  var anchor = document.createElement("a");
  /**
   * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
   * @type {boolean}
   */

  var alreadyRun = false; // Reusable, non-"g" Regexes
  // (Don't use \s, to avoid matching non-breaking space.)

  var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
      regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
      regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
      regexTrailingCommas = /[,]+$/,
      regexNonNegativeInteger = /^\d+$/,
      // ( Positive or negative or unsigned integers or decimals, without or without exponents.
  // Must include at least one digit.
  // According to spec tests any decimal point must be followed by a digit.
  // No leading plus sign is allowed.)
  // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
  regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

  var on = function on(obj, evt, fn, capture) {
    if (obj.addEventListener) {
      obj.addEventListener(evt, fn, capture || false);
    } else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
    }
  };
  /**
   * simple memoize function:
   */


  var memoize = function memoize(fn) {
    var cache = {};
    return function (input) {
      if (!(input in cache)) {
        cache[input] = fn(input);
      }

      return cache[input];
    };
  }; // UTILITY FUNCTIONS
  // Manual is faster than RegEx
  // http://jsperf.com/whitespace-character/5


  function isSpace(c) {
    return c === " " || // space
    c === "\t" || // horizontal tab
    c === "\n" || // new line
    c === "\f" || // form feed
    c === "\r"; // carriage return
  }
  /**
   * gets a mediaquery and returns a boolean or gets a css length and returns a number
   * @param css mediaqueries or css length
   * @returns {boolean|number}
   *
   * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
   */


  var evalCSS = function () {
    var regLength = /^([\d\.]+)(em|vw|px)$/;

    var replace = function replace() {
      var args = arguments,
          index = 0,
          string = args[0];

      while (++index in args) {
        string = string.replace(args[index], args[++index]);
      }

      return string;
    };

    var buildStr = memoize(function (css) {
      return "return " + replace((css || "").toLowerCase(), // interpret `and`
      /\band\b/g, "&&", // interpret `,`
      /,/g, "||", // interpret `min-` as >=
      /min-([a-z-\s]+):/g, "e.$1>=", // interpret `max-` as <=
      /max-([a-z-\s]+):/g, "e.$1<=", //calc value
      /calc([^)]+)/g, "($1)", // interpret css values
      /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", //make eval less evil
      /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
    });
    return function (css, length) {
      var parsedLength;

      if (!(css in cssCache)) {
        cssCache[css] = false;

        if (length && (parsedLength = css.match(regLength))) {
          cssCache[css] = parsedLength[1] * units[parsedLength[2]];
        } else {
          /*jshint evil:true */
          try {
            cssCache[css] = new Function("e", buildStr(css))(units);
          } catch (e) {}
          /*jshint evil:false */

        }
      }

      return cssCache[css];
    };
  }();

  var setResolution = function setResolution(candidate, sizesattr) {
    if (candidate.w) {
      // h = means height: || descriptor.type === 'h' do not handle yet...
      candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
      candidate.res = candidate.w / candidate.cWidth;
    } else {
      candidate.res = candidate.d;
    }

    return candidate;
  };
  /**
   *
   * @param opt
   */


  var picturefill = function picturefill(opt) {
    if (!isSupportTestReady) {
      return;
    }

    var elements, i, plen;
    var options = opt || {};

    if (options.elements && options.elements.nodeType === 1) {
      if (options.elements.nodeName.toUpperCase() === "IMG") {
        options.elements = [options.elements];
      } else {
        options.context = options.elements;
        options.elements = null;
      }
    }

    elements = options.elements || pf.qsa(options.context || document, options.reevaluate || options.reselect ? pf.sel : pf.selShort);

    if (plen = elements.length) {
      pf.setupRun(options);
      alreadyRun = true; // Loop through all elements

      for (i = 0; i < plen; i++) {
        pf.fillImg(elements[i], options);
      }

      pf.teardownRun(options);
    }
  };
  /**
   * outputs a warning for the developer
   * @param {message}
   * @type {Function}
   */


  warn = window.console && console.warn ? function (message) {
    console.warn(message);
  } : noop;

  if (!(curSrcProp in image)) {
    curSrcProp = "src";
  } // Add support for standard mime types.


  types["image/jpeg"] = true;
  types["image/gif"] = true;
  types["image/png"] = true;

  function detectTypeSupport(type, typeUri) {
    // based on Modernizr's lossless img-webp test
    // note: asynchronous
    var image = new window.Image();

    image.onerror = function () {
      types[type] = false;
      picturefill();
    };

    image.onload = function () {
      types[type] = image.width === 1;
      picturefill();
    };

    image.src = typeUri;
    return "pending";
  } // test svg support


  types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
  /**
   * updates the internal vW property with the current viewport width in px
   */

  function updateMetrics() {
    isVwDirty = false;
    DPR = window.devicePixelRatio;
    cssCache = {};
    sizeLengthCache = {};
    pf.DPR = DPR || 1;
    units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
    units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);
    units.vw = units.width / 100;
    units.vh = units.height / 100;
    evalId = [units.height, units.width, DPR].join("-");
    units.em = pf.getEmValue();
    units.rem = units.em;
  }

  function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
    var bonusFactor, tooMuch, bonus, meanDensity; //experimental

    if (cfg.algorithm === "saveData") {
      if (lowerValue > 2.7) {
        meanDensity = dprValue + 1;
      } else {
        tooMuch = higherValue - dprValue;
        bonusFactor = Math.pow(lowerValue - 0.6, 1.5);
        bonus = tooMuch * bonusFactor;

        if (isCached) {
          bonus += 0.1 * bonusFactor;
        }

        meanDensity = lowerValue + bonus;
      }
    } else {
      meanDensity = dprValue > 1 ? Math.sqrt(lowerValue * higherValue) : lowerValue;
    }

    return meanDensity > dprValue;
  }

  function applyBestCandidate(img) {
    var srcSetCandidates;
    var matchingSet = pf.getSet(img);
    var evaluated = false;

    if (matchingSet !== "pending") {
      evaluated = evalId;

      if (matchingSet) {
        srcSetCandidates = pf.setRes(matchingSet);
        pf.applySetCandidate(srcSetCandidates, img);
      }
    }

    img[pf.ns].evaled = evaluated;
  }

  function ascendingSort(a, b) {
    return a.res - b.res;
  }

  function setSrcToCur(img, src, set) {
    var candidate;

    if (!set && src) {
      set = img[pf.ns].sets;
      set = set && set[set.length - 1];
    }

    candidate = getCandidateForSrc(src, set);

    if (candidate) {
      src = pf.makeUrl(src);
      img[pf.ns].curSrc = src;
      img[pf.ns].curCan = candidate;

      if (!candidate.res) {
        setResolution(candidate, candidate.set.sizes);
      }
    }

    return candidate;
  }

  function getCandidateForSrc(src, set) {
    var i, candidate, candidates;

    if (src && set) {
      candidates = pf.parseSet(set);
      src = pf.makeUrl(src);

      for (i = 0; i < candidates.length; i++) {
        if (src === pf.makeUrl(candidates[i].url)) {
          candidate = candidates[i];
          break;
        }
      }
    }

    return candidate;
  }

  function getAllSourceElements(picture, candidates) {
    var i, len, source, srcset; // SPEC mismatch intended for size and perf:
    // actually only source elements preceding the img should be used
    // also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector

    var sources = picture.getElementsByTagName("source");

    for (i = 0, len = sources.length; i < len; i++) {
      source = sources[i];
      source[pf.ns] = true;
      srcset = source.getAttribute("srcset"); // if source does not have a srcset attribute, skip

      if (srcset) {
        candidates.push({
          srcset: srcset,
          media: source.getAttribute("media"),
          type: source.getAttribute("type"),
          sizes: source.getAttribute("sizes")
        });
      }
    }
  }
  /**
   * Srcset Parser
   * By Alex Bell |  MIT License
   *
   * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
   *
   * Based super duper closely on the reference algorithm at:
   * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
   */
  // 1. Let input be the value passed to this algorithm.
  // (TO-DO : Explain what "set" argument is here. Maybe choose a more
  // descriptive & more searchable name.  Since passing the "set" in really has
  // nothing to do with parsing proper, I would prefer this assignment eventually
  // go in an external fn.)


  function parseSrcset(input, set) {
    function collectCharacters(regEx) {
      var chars,
          match = regEx.exec(input.substring(pos));

      if (match) {
        chars = match[0];
        pos += chars.length;
        return chars;
      }
    }

    var inputLength = input.length,
        url,
        descriptors,
        currentDescriptor,
        state,
        c,
        // 2. Let position be a pointer into input, initially pointing at the start
    //    of the string.
    pos = 0,
        // 3. Let candidates be an initially empty source set.
    candidates = [];
    /**
    * Adds descriptor properties to a candidate, pushes to the candidates array
    * @return undefined
    */
    // (Declared outside of the while loop so that it's only created once.
    // (This fn is defined before it is used, in order to pass JSHINT.
    // Unfortunately this breaks the sequencing of the spec comments. :/ )

    function parseDescriptors() {
      // 9. Descriptor parser: Let error be no.
      var pError = false,
          // 10. Let width be absent.
      // 11. Let density be absent.
      // 12. Let future-compat-h be absent. (We're implementing it now as h)
      w,
          d,
          h,
          i,
          candidate = {},
          desc,
          lastChar,
          value,
          intVal,
          floatVal; // 13. For each descriptor in descriptors, run the appropriate set of steps
      // from the following list:

      for (i = 0; i < descriptors.length; i++) {
        desc = descriptors[i];
        lastChar = desc[desc.length - 1];
        value = desc.substring(0, desc.length - 1);
        intVal = parseInt(value, 10);
        floatVal = parseFloat(value); // If the descriptor consists of a valid non-negative integer followed by
        // a U+0077 LATIN SMALL LETTER W character

        if (regexNonNegativeInteger.test(value) && lastChar === "w") {
          // If width and density are not both absent, then let error be yes.
          if (w || d) {
            pError = true;
          } // Apply the rules for parsing non-negative integers to the descriptor.
          // If the result is zero, let error be yes.
          // Otherwise, let width be the result.


          if (intVal === 0) {
            pError = true;
          } else {
            w = intVal;
          } // If the descriptor consists of a valid floating-point number followed by
          // a U+0078 LATIN SMALL LETTER X character

        } else if (regexFloatingPoint.test(value) && lastChar === "x") {
          // If width, density and future-compat-h are not all absent, then let error
          // be yes.
          if (w || d || h) {
            pError = true;
          } // Apply the rules for parsing floating-point number values to the descriptor.
          // If the result is less than zero, let error be yes. Otherwise, let density
          // be the result.


          if (floatVal < 0) {
            pError = true;
          } else {
            d = floatVal;
          } // If the descriptor consists of a valid non-negative integer followed by
          // a U+0068 LATIN SMALL LETTER H character

        } else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
          // If height and density are not both absent, then let error be yes.
          if (h || d) {
            pError = true;
          } // Apply the rules for parsing non-negative integers to the descriptor.
          // If the result is zero, let error be yes. Otherwise, let future-compat-h
          // be the result.


          if (intVal === 0) {
            pError = true;
          } else {
            h = intVal;
          } // Anything else, Let error be yes.

        } else {
          pError = true;
        }
      } // (close step 13 for loop)
      // 15. If error is still no, then append a new image source to candidates whose
      // URL is url, associated with a width width if not absent and a pixel
      // density density if not absent. Otherwise, there is a parse error.


      if (!pError) {
        candidate.url = url;

        if (w) {
          candidate.w = w;
        }

        if (d) {
          candidate.d = d;
        }

        if (h) {
          candidate.h = h;
        }

        if (!h && !d && !w) {
          candidate.d = 1;
        }

        if (candidate.d === 1) {
          set.has1x = true;
        }

        candidate.set = set;
        candidates.push(candidate);
      }
    } // (close parseDescriptors fn)

    /**
    * Tokenizes descriptor properties prior to parsing
    * Returns undefined.
    * (Again, this fn is defined before it is used, in order to pass JSHINT.
    * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
    */


    function tokenize() {
      // 8.1. Descriptor tokeniser: Skip whitespace
      collectCharacters(regexLeadingSpaces); // 8.2. Let current descriptor be the empty string.

      currentDescriptor = ""; // 8.3. Let state be in descriptor.

      state = "in descriptor";

      while (true) {
        // 8.4. Let c be the character at position.
        c = input.charAt(pos); //  Do the following depending on the value of state.
        //  For the purpose of this step, "EOF" is a special character representing
        //  that position is past the end of input.
        // In descriptor

        if (state === "in descriptor") {
          // Do the following, depending on the value of c:
          // Space character
          // If current descriptor is not empty, append current descriptor to
          // descriptors and let current descriptor be the empty string.
          // Set state to after descriptor.
          if (isSpace(c)) {
            if (currentDescriptor) {
              descriptors.push(currentDescriptor);
              currentDescriptor = "";
              state = "after descriptor";
            } // U+002C COMMA (,)
            // Advance position to the next character in input. If current descriptor
            // is not empty, append current descriptor to descriptors. Jump to the step
            // labeled descriptor parser.

          } else if (c === ",") {
            pos += 1;

            if (currentDescriptor) {
              descriptors.push(currentDescriptor);
            }

            parseDescriptors();
            return; // U+0028 LEFT PARENTHESIS (()
            // Append c to current descriptor. Set state to in parens.
          } else if (c === "(") {
            currentDescriptor = currentDescriptor + c;
            state = "in parens"; // EOF
            // If current descriptor is not empty, append current descriptor to
            // descriptors. Jump to the step labeled descriptor parser.
          } else if (c === "") {
            if (currentDescriptor) {
              descriptors.push(currentDescriptor);
            }

            parseDescriptors();
            return; // Anything else
            // Append c to current descriptor.
          } else {
            currentDescriptor = currentDescriptor + c;
          } // (end "in descriptor"
          // In parens

        } else if (state === "in parens") {
          // U+0029 RIGHT PARENTHESIS ())
          // Append c to current descriptor. Set state to in descriptor.
          if (c === ")") {
            currentDescriptor = currentDescriptor + c;
            state = "in descriptor"; // EOF
            // Append current descriptor to descriptors. Jump to the step labeled
            // descriptor parser.
          } else if (c === "") {
            descriptors.push(currentDescriptor);
            parseDescriptors();
            return; // Anything else
            // Append c to current descriptor.
          } else {
            currentDescriptor = currentDescriptor + c;
          } // After descriptor

        } else if (state === "after descriptor") {
          // Do the following, depending on the value of c:
          // Space character: Stay in this state.
          if (isSpace(c)) {// EOF: Jump to the step labeled descriptor parser.
          } else if (c === "") {
            parseDescriptors();
            return; // Anything else
            // Set state to in descriptor. Set position to the previous character in input.
          } else {
            state = "in descriptor";
            pos -= 1;
          }
        } // Advance position to the next character in input.


        pos += 1; // Repeat this step.
      } // (close while true loop)

    } // 4. Splitting loop: Collect a sequence of characters that are space
    //    characters or U+002C COMMA characters. If any U+002C COMMA characters
    //    were collected, that is a parse error.


    while (true) {
      collectCharacters(regexLeadingCommasOrSpaces); // 5. If position is past the end of input, return candidates and abort these steps.

      if (pos >= inputLength) {
        return candidates; // (we're done, this is the sole return path)
      } // 6. Collect a sequence of characters that are not space characters,
      //    and let that be url.


      url = collectCharacters(regexLeadingNotSpaces); // 7. Let descriptors be a new empty list.

      descriptors = []; // 8. If url ends with a U+002C COMMA character (,), follow these substeps:
      //		(1). Remove all trailing U+002C COMMA characters from url. If this removed
      //         more than one character, that is a parse error.

      if (url.slice(-1) === ",") {
        url = url.replace(regexTrailingCommas, ""); // (Jump ahead to step 9 to skip tokenization and just push the candidate).

        parseDescriptors(); //	Otherwise, follow these substeps:
      } else {
        tokenize();
      } // (close else of step 8)
      // 16. Return to the step labeled splitting loop.

    } // (Close of big while loop.)

  }
  /*
   * Sizes Parser
   *
   * By Alex Bell |  MIT License
   *
   * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
   *
   * Reference algorithm at:
   * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
   *
   * Most comments are copied in directly from the spec
   * (except for comments in parens).
   *
   * Grammar is:
   * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
   * <source-size> = <media-condition> <source-size-value>
   * <source-size-value> = <length>
   * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
   *
   * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
   * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
   *
   * Returns the first valid <css-length> with a media condition that evaluates to true,
   * or "100vw" if all valid media conditions evaluate to false.
   *
   */


  function parseSizes(strValue) {
    // (Percentage CSS lengths are not allowed in this case, to avoid confusion:
    // https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
    // CSS allows a single optional plus or minus sign:
    // http://www.w3.org/TR/CSS2/syndata.html#numbers
    // CSS is ASCII case-insensitive:
    // http://www.w3.org/TR/CSS2/syndata.html#characters )
    // Spec allows exponential notation for <number> type:
    // http://dev.w3.org/csswg/css-values/#numbers
    var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i; // (This is a quick and lenient test. Because of optional unlimited-depth internal
    // grouping parens and strict spacing rules, this could get very complicated.)

    var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
    var i;
    var unparsedSizesList;
    var unparsedSizesListLength;
    var unparsedSize;
    var lastComponentValue;
    var size; // UTILITY FUNCTIONS
    //  (Toy CSS parser. The goals here are:
    //  1) expansive test coverage without the weight of a full CSS parser.
    //  2) Avoiding regex wherever convenient.
    //  Quick tests: http://jsfiddle.net/gtntL4gr/3/
    //  Returns an array of arrays.)

    function parseComponentValues(str) {
      var chrctr;
      var component = "";
      var componentArray = [];
      var listArray = [];
      var parenDepth = 0;
      var pos = 0;
      var inComment = false;

      function pushComponent() {
        if (component) {
          componentArray.push(component);
          component = "";
        }
      }

      function pushComponentArray() {
        if (componentArray[0]) {
          listArray.push(componentArray);
          componentArray = [];
        }
      } // (Loop forwards from the beginning of the string.)


      while (true) {
        chrctr = str.charAt(pos);

        if (chrctr === "") {
          // ( End of string reached.)
          pushComponent();
          pushComponentArray();
          return listArray;
        } else if (inComment) {
          if (chrctr === "*" && str[pos + 1] === "/") {
            // (At end of a comment.)
            inComment = false;
            pos += 2;
            pushComponent();
            continue;
          } else {
            pos += 1; // (Skip all characters inside comments.)

            continue;
          }
        } else if (isSpace(chrctr)) {
          // (If previous character in loop was also a space, or if
          // at the beginning of the string, do not add space char to
          // component.)
          if (str.charAt(pos - 1) && isSpace(str.charAt(pos - 1)) || !component) {
            pos += 1;
            continue;
          } else if (parenDepth === 0) {
            pushComponent();
            pos += 1;
            continue;
          } else {
            // (Replace any space character with a plain space for legibility.)
            chrctr = " ";
          }
        } else if (chrctr === "(") {
          parenDepth += 1;
        } else if (chrctr === ")") {
          parenDepth -= 1;
        } else if (chrctr === ",") {
          pushComponent();
          pushComponentArray();
          pos += 1;
          continue;
        } else if (chrctr === "/" && str.charAt(pos + 1) === "*") {
          inComment = true;
          pos += 2;
          continue;
        }

        component = component + chrctr;
        pos += 1;
      }
    }

    function isValidNonNegativeSourceSizeValue(s) {
      if (regexCssLengthWithUnits.test(s) && parseFloat(s) >= 0) {
        return true;
      }

      if (regexCssCalc.test(s)) {
        return true;
      } // ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
      // "-0 is equivalent to 0 and is not a negative number." which means that
      // unitless zero and unitless negative zero must be accepted as special cases.)


      if (s === "0" || s === "-0" || s === "+0") {
        return true;
      }

      return false;
    } // When asked to parse a sizes attribute from an element, parse a
    // comma-separated list of component values from the value of the element's
    // sizes attribute (or the empty string, if the attribute is absent), and let
    // unparsed sizes list be the result.
    // http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values


    unparsedSizesList = parseComponentValues(strValue);
    unparsedSizesListLength = unparsedSizesList.length; // For each unparsed size in unparsed sizes list:

    for (i = 0; i < unparsedSizesListLength; i++) {
      unparsedSize = unparsedSizesList[i]; // 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
      // ( parseComponentValues() already omits spaces outside of parens. )
      // If unparsed size is now empty, that is a parse error; continue to the next
      // iteration of this algorithm.
      // ( parseComponentValues() won't push an empty array. )
      // 2. If the last component value in unparsed size is a valid non-negative
      // <source-size-value>, let size be its value and remove the component value
      // from unparsed size. Any CSS function other than the calc() function is
      // invalid. Otherwise, there is a parse error; continue to the next iteration
      // of this algorithm.
      // http://dev.w3.org/csswg/css-syntax/#parse-component-value

      lastComponentValue = unparsedSize[unparsedSize.length - 1];

      if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
        size = lastComponentValue;
        unparsedSize.pop();
      } else {
        continue;
      } // 3. Remove all consecutive <whitespace-token>s from the end of unparsed
      // size. If unparsed size is now empty, return size and exit this algorithm.
      // If this was not the last item in unparsed sizes list, that is a parse error.


      if (unparsedSize.length === 0) {
        return size;
      } // 4. Parse the remaining component values in unparsed size as a
      // <media-condition>. If it does not parse correctly, or it does parse
      // correctly but the <media-condition> evaluates to false, continue to the
      // next iteration of this algorithm.
      // (Parsing all possible compound media conditions in JS is heavy, complicated,
      // and the payoff is unclear. Is there ever an situation where the
      // media condition parses incorrectly but still somehow evaluates to true?
      // Can we just rely on the browser/polyfill to do it?)


      unparsedSize = unparsedSize.join(" ");

      if (!pf.matchesMedia(unparsedSize)) {
        continue;
      } // 5. Return size and exit this algorithm.


      return size;
    } // If the above algorithm exhausts unparsed sizes list without returning a
    // size value, return 100vw.


    return "100vw";
  } // namespace


  pf.ns = ("pf" + new Date().getTime()).substr(0, 9); // srcset support test

  pf.supSrcset = "srcset" in image;
  pf.supSizes = "sizes" in image;
  pf.supPicture = !!window.HTMLPictureElement; // UC browser does claim to support srcset and picture, but not sizes,
  // this extended test reveals the browser does support nothing

  if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
    (function (image2) {
      image.srcset = "data:,a";
      image2.src = "data:,a";
      pf.supSrcset = image.complete === image2.complete;
      pf.supPicture = pf.supSrcset && pf.supPicture;
    })(document.createElement("img"));
  } // Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute


  if (pf.supSrcset && !pf.supSizes) {
    (function () {
      var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
      var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      var img = document.createElement("img");

      var test = function test() {
        var width = img.width;

        if (width === 2) {
          pf.supSizes = true;
        }

        alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;
        isSupportTestReady = true; // force async

        setTimeout(picturefill);
      };

      img.onload = test;
      img.onerror = test;
      img.setAttribute("sizes", "9px");
      img.srcset = width1 + " 1w," + width2 + " 9w";
      img.src = width1;
    })();
  } else {
    isSupportTestReady = true;
  } // using pf.qsa instead of dom traversing does scale much better,
  // especially on sites mixing responsive and non-responsive images


  pf.selShort = "picture>img,img[srcset]";
  pf.sel = pf.selShort;
  pf.cfg = cfg;
  /**
   * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
   */

  pf.DPR = DPR || 1;
  pf.u = units; // container of supported mime types that one might need to qualify before using

  pf.types = types;
  pf.setSize = noop;
  /**
   * Gets a string and returns the absolute URL
   * @param src
   * @returns {String} absolute URL
   */

  pf.makeUrl = memoize(function (src) {
    anchor.href = src;
    return anchor.href;
  });
  /**
   * Gets a DOM element or document and a selctor and returns the found matches
   * Can be extended with jQuery/Sizzle for IE7 support
   * @param context
   * @param sel
   * @returns {NodeList|Array}
   */

  pf.qsa = function (context, sel) {
    return "querySelector" in context ? context.querySelectorAll(sel) : [];
  };
  /**
   * Shortcut method for matchMedia ( for easy overriding in tests )
   * wether native or pf.mMQ is used will be decided lazy on first call
   * @returns {boolean}
   */


  pf.matchesMedia = function () {
    if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
      pf.matchesMedia = function (media) {
        return !media || matchMedia(media).matches;
      };
    } else {
      pf.matchesMedia = pf.mMQ;
    }

    return pf.matchesMedia.apply(this, arguments);
  };
  /**
   * A simplified matchMedia implementation for IE8 and IE9
   * handles only min-width/max-width with px or em values
   * @param media
   * @returns {boolean}
   */


  pf.mMQ = function (media) {
    return media ? evalCSS(media) : true;
  };
  /**
   * Returns the calculated length in css pixel from the given sourceSizeValue
   * http://dev.w3.org/csswg/css-values-3/#length-value
   * intended Spec mismatches:
   * * Does not check for invalid use of CSS functions
   * * Does handle a computed length of 0 the same as a negative and therefore invalid value
   * @param sourceSizeValue
   * @returns {Number}
   */


  pf.calcLength = function (sourceSizeValue) {
    var value = evalCSS(sourceSizeValue, true) || false;

    if (value < 0) {
      value = false;
    }

    return value;
  };
  /**
   * Takes a type string and checks if its supported
   */


  pf.supportsType = function (type) {
    return type ? types[type] : true;
  };
  /**
   * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
   * @param sourceSizeStr
   * @returns {*}
   */


  pf.parseSize = memoize(function (sourceSizeStr) {
    var match = (sourceSizeStr || "").match(regSize);
    return {
      media: match && match[1],
      length: match && match[2]
    };
  });

  pf.parseSet = function (set) {
    if (!set.cands) {
      set.cands = parseSrcset(set.srcset, set);
    }

    return set.cands;
  };
  /**
   * returns 1em in css px for html/body default size
   * function taken from respondjs
   * @returns {*|number}
   */


  pf.getEmValue = function () {
    var body;

    if (!eminpx && (body = document.body)) {
      var div = document.createElement("div"),
          originalHTMLCSS = docElem.style.cssText,
          originalBodyCSS = body.style.cssText;
      div.style.cssText = baseStyle; // 1em in a media query is the value of the default font size of the browser
      // reset docElem and body to ensure the correct value is returned

      docElem.style.cssText = fsCss;
      body.style.cssText = fsCss;
      body.appendChild(div);
      eminpx = div.offsetWidth;
      body.removeChild(div); //also update eminpx before returning

      eminpx = parseFloat(eminpx, 10); // restore the original values

      docElem.style.cssText = originalHTMLCSS;
      body.style.cssText = originalBodyCSS;
    }

    return eminpx || 16;
  };
  /**
   * Takes a string of sizes and returns the width in pixels as a number
   */


  pf.calcListLength = function (sourceSizeListStr) {
    // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
    //
    //                           or (min-width:30em) calc(30% - 15px)
    if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
      var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));
      sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
    }

    return sizeLengthCache[sourceSizeListStr];
  };
  /**
   * Takes a candidate object with a srcset property in the form of url/
   * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
   *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
   *     "images/pic-small.png"
   * Get an array of image candidates in the form of
   *      {url: "/foo/bar.png", resolution: 1}
   * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
   * If sizes is specified, res is calculated
   */


  pf.setRes = function (set) {
    var candidates;

    if (set) {
      candidates = pf.parseSet(set);

      for (var i = 0, len = candidates.length; i < len; i++) {
        setResolution(candidates[i], set.sizes);
      }
    }

    return candidates;
  };

  pf.setRes.res = setResolution;

  pf.applySetCandidate = function (candidates, img) {
    if (!candidates.length) {
      return;
    }

    var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;
    var imageData = img[pf.ns];
    var dpr = pf.DPR;
    curSrc = imageData.curSrc || img[curSrcProp];
    curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set); // if we have a current source, we might either become lazy or give this source some advantage

    if (curCan && curCan.set === candidates[0].set) {
      // if browser can abort image request and the image has a higher pixel density than needed
      // and this image isn't downloaded yet, we skip next part and try to save bandwidth
      abortCurSrc = supportAbort && !img.complete && curCan.res - 0.1 > dpr;

      if (!abortCurSrc) {
        curCan.cached = true; // if current candidate is "best", "better" or "okay",
        // set it to bestCandidate

        if (curCan.res >= dpr) {
          bestCandidate = curCan;
        }
      }
    }

    if (!bestCandidate) {
      candidates.sort(ascendingSort);
      length = candidates.length;
      bestCandidate = candidates[length - 1];

      for (i = 0; i < length; i++) {
        candidate = candidates[i];

        if (candidate.res >= dpr) {
          j = i - 1; // we have found the perfect candidate,
          // but let's improve this a little bit with some assumptions ;-)

          if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {
            bestCandidate = candidates[j];
          } else {
            bestCandidate = candidate;
          }

          break;
        }
      }
    }

    if (bestCandidate) {
      candidateSrc = pf.makeUrl(bestCandidate.url);
      imageData.curSrc = candidateSrc;
      imageData.curCan = bestCandidate;

      if (candidateSrc !== curSrc) {
        pf.setSrc(img, bestCandidate);
      }

      pf.setSize(img);
    }
  };

  pf.setSrc = function (img, bestCandidate) {
    var origWidth;
    img.src = bestCandidate.url; // although this is a specific Safari issue, we don't want to take too much different code paths

    if (bestCandidate.set.type === "image/svg+xml") {
      origWidth = img.style.width;
      img.style.width = img.offsetWidth + 1 + "px"; // next line only should trigger a repaint
      // if... is only done to trick dead code removal

      if (img.offsetWidth + 1) {
        img.style.width = origWidth;
      }
    }
  };

  pf.getSet = function (img) {
    var i, set, supportsType;
    var match = false;
    var sets = img[pf.ns].sets;

    for (i = 0; i < sets.length && !match; i++) {
      set = sets[i];

      if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
        continue;
      }

      if (supportsType === "pending") {
        set = supportsType;
      }

      match = set;
      break;
    }

    return match;
  };

  pf.parseSets = function (element, parent, options) {
    var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;
    var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
    var imageData = element[pf.ns];

    if (imageData.src === undefined || options.src) {
      imageData.src = getImgAttr.call(element, "src");

      if (imageData.src) {
        setImgAttr.call(element, srcAttr, imageData.src);
      } else {
        removeImgAttr.call(element, srcAttr);
      }
    }

    if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
      srcsetAttribute = getImgAttr.call(element, "srcset");
      imageData.srcset = srcsetAttribute;
      srcsetParsed = true;
    }

    imageData.sets = [];

    if (hasPicture) {
      imageData.pic = true;
      getAllSourceElements(parent, imageData.sets);
    }

    if (imageData.srcset) {
      imageSet = {
        srcset: imageData.srcset,
        sizes: getImgAttr.call(element, "sizes")
      };
      imageData.sets.push(imageSet);
      isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || ""); // add normal src as candidate, if source has no w descriptor

      if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
        imageSet.srcset += ", " + imageData.src;
        imageSet.cands.push({
          url: imageData.src,
          d: 1,
          set: imageSet
        });
      }
    } else if (imageData.src) {
      imageData.sets.push({
        srcset: imageData.src,
        sizes: null
      });
    }

    imageData.curCan = null;
    imageData.curSrc = undefined; // if img has picture or the srcset was removed or has a srcset and does not support srcset at all
    // or has a w descriptor (and does not support sizes) set support to false to evaluate

    imageData.supported = !(hasPicture || imageSet && !pf.supSrcset || isWDescripor && !pf.supSizes);

    if (srcsetParsed && pf.supSrcset && !imageData.supported) {
      if (srcsetAttribute) {
        setImgAttr.call(element, srcsetAttr, srcsetAttribute);
        element.srcset = "";
      } else {
        removeImgAttr.call(element, srcsetAttr);
      }
    }

    if (imageData.supported && !imageData.srcset && (!imageData.src && element.src || element.src !== pf.makeUrl(imageData.src))) {
      if (imageData.src === null) {
        element.removeAttribute("src");
      } else {
        element.src = imageData.src;
      }
    }

    imageData.parsed = true;
  };

  pf.fillImg = function (element, options) {
    var imageData;
    var extreme = options.reselect || options.reevaluate; // expando for caching data on the img

    if (!element[pf.ns]) {
      element[pf.ns] = {};
    }

    imageData = element[pf.ns]; // if the element has already been evaluated, skip it
    // unless `options.reevaluate` is set to true ( this, for example,
    // is set to true when running `picturefill` on `resize` ).

    if (!extreme && imageData.evaled === evalId) {
      return;
    }

    if (!imageData.parsed || options.reevaluate) {
      pf.parseSets(element, element.parentNode, options);
    }

    if (!imageData.supported) {
      applyBestCandidate(element);
    } else {
      imageData.evaled = evalId;
    }
  };

  pf.setupRun = function () {
    if (!alreadyRun || isVwDirty || DPR !== window.devicePixelRatio) {
      updateMetrics();
    }
  }; // If picture is supported, well, that's awesome.


  if (pf.supPicture) {
    picturefill = noop;
    pf.fillImg = noop;
  } else {
    // Set up picture polyfill by polling the document
    (function () {
      var isDomReady;
      var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

      var run = function run() {
        var readyState = document.readyState || "";
        timerId = setTimeout(run, readyState === "loading" ? 200 : 999);

        if (document.body) {
          pf.fillImgs();
          isDomReady = isDomReady || regReady.test(readyState);

          if (isDomReady) {
            clearTimeout(timerId);
          }
        }
      };

      var timerId = setTimeout(run, document.body ? 9 : 99); // Also attach picturefill on resize and readystatechange
      // http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html

      var debounce = function debounce(func, wait) {
        var timeout, timestamp;

        var later = function later() {
          var last = new Date() - timestamp;

          if (last < wait) {
            timeout = setTimeout(later, wait - last);
          } else {
            timeout = null;
            func();
          }
        };

        return function () {
          timestamp = new Date();

          if (!timeout) {
            timeout = setTimeout(later, wait);
          }
        };
      };

      var lastClientWidth = docElem.clientHeight;

      var onResize = function onResize() {
        isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
        lastClientWidth = docElem.clientHeight;

        if (isVwDirty) {
          pf.fillImgs();
        }
      };

      on(window, "resize", debounce(onResize, 99));
      on(document, "readystatechange", run);
    })();
  }

  pf.picturefill = picturefill; //use this internally for easy monkey patching/performance testing

  pf.fillImgs = picturefill;
  pf.teardownRun = noop;
  /* expose methods for testing */

  picturefill._ = pf;
  window.picturefillCFG = {
    pf: pf,
    push: function push(args) {
      var name = args.shift();

      if (typeof pf[name] === "function") {
        pf[name].apply(pf, args);
      } else {
        cfg[name] = args[0];

        if (alreadyRun) {
          pf.fillImgs({
            reselect: true
          });
        }
      }
    }
  };

  while (setOptions && setOptions.length) {
    window.picturefillCFG.push(setOptions.shift());
  }
  /* expose picturefill */


  window.picturefill = picturefill;
  /* expose picturefill */

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // CommonJS, just export
    module.exports = picturefill;
  } else if (true) {
    // AMD support
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return picturefill;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // IE8 evals this sync, so it must be the last thing we do


  if (!pf.supPicture) {
    types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
  }
})(window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/picturefill/dist/plugins/mutation/pf.mutation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/picturefill/dist/plugins/mutation/pf.mutation.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (factory) {
  "use strict";

  var interValId;
  var intervalIndex = 0;

  var run = function run() {
    if (window.picturefill) {
      factory(window.picturefill);
    }

    if (window.picturefill || intervalIndex > 9999) {
      clearInterval(interValId);
    }

    intervalIndex++;
  };

  interValId = setInterval(run, 8);
  run();
})(function (picturefill) {
  "use strict";

  var document = window.document;
  var Element = window.Element;
  var MutationObserver = window.MutationObserver;

  var noop = function noop() {};

  var pfObserver = {
    disconnect: noop,
    take: noop,
    observe: noop,
    start: noop,
    stop: noop,
    connected: false
  };
  var isReady = /^loade|^c|^i/.test(document.readyState || "");
  var pf = picturefill._;
  pf.mutationSupport = false;
  pf.observer = pfObserver;

  if (!Object.keys || !window.HTMLSourceElement || !document.addEventListener) {
    return;
  }

  var matches, observer, allowConnect, addMutation;
  var observeProps = {
    src: 1,
    srcset: 1,
    sizes: 1,
    media: 1
  };
  var attrFilter = Object.keys(observeProps);
  var config = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: attrFilter
  };
  var elemProto = Element && Element.prototype;
  var sup = {};

  var monkeyPatch = function monkeyPatch(name, fn) {
    sup[name] = pf[name];
    pf[name] = fn;
  };

  if (elemProto && !elemProto.matches) {
    elemProto.matches = elemProto.matchesSelector || elemProto.mozMatchesSelector || elemProto.webkitMatchesSelector || elemProto.msMatchesSelector;
  }

  if (elemProto && elemProto.matches) {
    matches = function matches(elem, sel) {
      return elem.matches(sel);
    };

    pf.mutationSupport = !!(Object.create && Object.defineProperties);
  }

  if (!pf.mutationSupport) {
    return;
  }

  pfObserver.observe = function () {
    if (allowConnect) {
      pfObserver.connected = true;

      if (observer) {
        observer.observe(document.documentElement, config);
      }
    }
  };

  pfObserver.disconnect = function () {
    pfObserver.connected = false;

    if (observer) {
      observer.disconnect();
    }
  };

  pfObserver.take = function () {
    if (observer) {
      pf.onMutations(observer.takeRecords());
    } else if (addMutation) {
      addMutation.take();
    }
  };

  pfObserver.start = function () {
    allowConnect = true;
    pfObserver.observe();
  };

  pfObserver.stop = function () {
    allowConnect = false;
    pfObserver.disconnect();
  };

  monkeyPatch("setupRun", function () {
    pfObserver.disconnect();
    return sup.setupRun.apply(this, arguments);
  });
  monkeyPatch("teardownRun", function () {
    var ret = sup.setupRun.apply(this, arguments);
    pfObserver.observe();
    return ret;
  });
  monkeyPatch("setSrc", function () {
    var ret;
    var wasConnected = pfObserver.connected;
    pfObserver.disconnect();
    ret = sup.setSrc.apply(this, arguments);

    if (wasConnected) {
      pfObserver.observe();
    }

    return ret;
  });

  pf.onMutations = function (mutations) {
    var i, len;
    var modifiedImgs = [];

    for (i = 0, len = mutations.length; i < len; i++) {
      if (isReady && mutations[i].type === "childList") {
        pf.onSubtreeChange(mutations[i], modifiedImgs);
      } else if (mutations[i].type === "attributes") {
        pf.onAttrChange(mutations[i], modifiedImgs);
      }
    }

    if (modifiedImgs.length) {
      pf.fillImgs({
        elements: modifiedImgs,
        reevaluate: true
      });
    }
  };

  pf.onSubtreeChange = function (mutations, imgs) {
    pf.findAddedMutations(mutations.addedNodes, imgs);
    pf.findRemovedMutations(mutations.removedNodes, mutations.target, imgs);
  };

  pf.findAddedMutations = function (nodes, imgs) {
    var i, len, node, nodeName;

    for (i = 0, len = nodes.length; i < len; i++) {
      node = nodes[i];

      if (node.nodeType !== 1) {
        continue;
      }

      nodeName = node.nodeName.toUpperCase();

      if (nodeName === "PICTURE") {
        pf.addToElements(node.getElementsByTagName("img")[0], imgs);
      } else if (nodeName === "IMG" && matches(node, pf.selShort)) {
        pf.addToElements(node, imgs);
      } else if (nodeName === "SOURCE") {
        pf.addImgForSource(node, node.parentNode, imgs);
      } else {
        pf.addToElements(pf.qsa(node, pf.selShort), imgs);
      }
    }
  };

  pf.findRemovedMutations = function (nodes, target, imgs) {
    var i, len, node;

    for (i = 0, len = nodes.length; i < len; i++) {
      node = nodes[i];

      if (node.nodeType !== 1) {
        continue;
      }

      if (node.nodeName.toUpperCase() === "SOURCE") {
        pf.addImgForSource(node, target, imgs);
      }
    }
  };

  pf.addImgForSource = function (node, parent, imgs) {
    if (parent && (parent.nodeName || "").toUpperCase() !== "PICTURE") {
      parent = parent.parentNode;

      if (!parent || (parent.nodeName || "").toUpperCase() !== "PICTURE") {
        parent = null;
      }
    }

    if (parent) {
      pf.addToElements(parent.getElementsByTagName("img")[0], imgs);
    }
  };

  pf.addToElements = function (img, imgs) {
    var i, len;

    if (img) {
      if ("length" in img && !img.nodeType) {
        for (i = 0, len = img.length; i < len; i++) {
          pf.addToElements(img[i], imgs);
        }
      } else if (img.parentNode && imgs.indexOf(img) === -1) {
        imgs.push(img);
      }
    }
  };

  pf.onAttrChange = function (mutation, modifiedImgs) {
    var nodeName;
    var riData = mutation.target[pf.ns];

    if (!riData && mutation.attributeName === "srcset" && (nodeName = mutation.target.nodeName.toUpperCase()) === "IMG") {
      pf.addToElements(mutation.target, modifiedImgs);
    } else if (riData) {
      if (!nodeName) {
        nodeName = mutation.target.nodeName.toUpperCase();
      }

      if (nodeName === "IMG") {
        if (mutation.attributeName in riData) {
          riData[mutation.attributeName] = undefined;
        }

        pf.addToElements(mutation.target, modifiedImgs);
      } else if (nodeName === "SOURCE") {
        pf.addImgForSource(mutation.target, mutation.target.parentNode, modifiedImgs);
      }
    }
  };

  if (!pf.supPicture) {
    if (MutationObserver && !pf.testMutationEvents) {
      observer = new MutationObserver(pf.onMutations);
    } else {
      addMutation = function () {
        var running = false;
        var mutations = [];
        var setImmediate = window.setImmediate || window.setTimeout;
        return function (mutation) {
          if (!running) {
            running = true;

            if (!addMutation.take) {
              addMutation.take = function () {
                if (mutations.length) {
                  pf.onMutations(mutations);
                  mutations = [];
                }

                running = false;
              };
            }

            setImmediate(addMutation.take);
          }

          mutations.push(mutation);
        };
      }();

      document.documentElement.addEventListener("DOMNodeInserted", function (e) {
        if (pfObserver.connected && isReady) {
          addMutation({
            type: "childList",
            addedNodes: [e.target],
            removedNodes: []
          });
        }
      }, true);
      document.documentElement.addEventListener("DOMNodeRemoved", function (e) {
        if (pfObserver.connected && isReady && (e.target || {}).nodeName === "SOURCE") {
          addMutation({
            type: "childList",
            addedNodes: [],
            removedNodes: [e.target],
            target: e.target.parentNode
          });
        }
      }, true);
      document.documentElement.addEventListener("DOMAttrModified", function (e) {
        if (pfObserver.connected && observeProps[e.attrName]) {
          addMutation({
            type: "attributes",
            target: e.target,
            attributeName: e.attrName
          });
        }
      }, true);
    }

    if (window.HTMLImageElement && Object.defineProperties) {
      (function () {
        var image = document.createElement("img");
        var imgIdls = [];
        var getImgAttr = image.getAttribute;
        var setImgAttr = image.setAttribute;
        var GETIMGATTRS = {
          src: 1
        };

        if (pf.supSrcset && !pf.supSizes) {
          GETIMGATTRS.srcset = 1;
        }

        Object.defineProperties(HTMLImageElement.prototype, {
          getAttribute: {
            value: function value(attr) {
              var internal;

              if (GETIMGATTRS[attr] && (internal = this[pf.ns]) && internal[attr] !== undefined) {
                return internal[attr];
              }

              return getImgAttr.apply(this, arguments);
            },
            writeable: true,
            enumerable: true,
            configurable: true
          }
        });

        if (!pf.supSrcset) {
          imgIdls.push("srcset");
        }

        if (!pf.supSizes) {
          imgIdls.push("sizes");
        }

        imgIdls.forEach(function (idl) {
          Object.defineProperty(HTMLImageElement.prototype, idl, {
            set: function set(value) {
              setImgAttr.call(this, idl, value);
            },
            get: function get() {
              return getImgAttr.call(this, idl) || "";
            },
            enumerable: true,
            configurable: true
          });
        });

        if (!("currentSrc" in image)) {
          (function () {
            var ascendingSort;

            var updateCurSrc = function updateCurSrc(elem, src) {
              if (src == null) {
                src = elem.src || "";
              }

              Object.defineProperty(elem, "pfCurrentSrc", {
                value: src,
                writable: true
              });
            };

            var baseUpdateCurSrc = updateCurSrc;

            if (pf.supSrcset && window.devicePixelRatio) {
              ascendingSort = function ascendingSort(a, b) {
                var aRes = a.d || a.w || a.res;
                var bRes = b.d || b.w || b.res;
                return aRes - bRes;
              };

              updateCurSrc = function updateCurSrc(elem) {
                var i, cands, length, ret;
                var imageData = elem[pf.ns];

                if (imageData && imageData.supported && imageData.srcset && imageData.sets && (cands = pf.parseSet(imageData.sets[0])) && cands.sort) {
                  cands.sort(ascendingSort);
                  length = cands.length;
                  ret = cands[length - 1];

                  for (i = 0; i < length; i++) {
                    if (cands[i].d >= window.devicePixelRatio) {
                      ret = cands[i];
                      break;
                    }
                  }

                  if (ret) {
                    ret = pf.makeUrl(ret.url);
                  }
                }

                baseUpdateCurSrc(elem, ret);
              };
            }

            document.addEventListener("load", function (e) {
              if (e.target.nodeName.toUpperCase() === "IMG") {
                updateCurSrc(e.target);
              }
            }, true);
            Object.defineProperty(HTMLImageElement.prototype, "currentSrc", {
              set: function set() {
                if (window.console && console.warn) {
                  console.warn("currentSrc can't be set on img element");
                }
              },
              get: function get() {
                if (this.complete) {
                  updateCurSrc(this);
                } //IE is never complete if no src/srcset available


                return !this.src && !this.srcset ? "" : this.pfCurrentSrc || "";
              },
              enumerable: true,
              configurable: true
            });
          })();
        }

        if (window.HTMLSourceElement && !("srcset" in document.createElement("source"))) {
          ["srcset", "sizes"].forEach(function (idl) {
            Object.defineProperty(window.HTMLSourceElement.prototype, idl, {
              set: function set(value) {
                this.setAttribute(idl, value);
              },
              get: function get() {
                return this.getAttribute(idl) || "";
              },
              enumerable: true,
              configurable: true
            });
          });
        }
      })();
    }

    pfObserver.start();
  }

  if (!isReady) {
    document.addEventListener("DOMContentLoaded", function () {
      isReady = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./theme/src/head.js":
/*!***************************!*\
  !*** ./theme/src/head.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picturefill */ "./node_modules/picturefill/dist/picturefill.js");
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var picturefill_dist_plugins_mutation_pf_mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! picturefill/dist/plugins/mutation/pf.mutation */ "./node_modules/picturefill/dist/plugins/mutation/pf.mutation.js");
/* harmony import */ var picturefill_dist_plugins_mutation_pf_mutation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(picturefill_dist_plugins_mutation_pf_mutation__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpY3R1cmVmaWxsL2Rpc3QvcGljdHVyZWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpY3R1cmVmaWxsL2Rpc3QvcGx1Z2lucy9tdXRhdGlvbi9wZi5tdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3RoZW1lL3NyYy9oZWFkLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSFRNTFBpY3R1cmVFbGVtZW50IiwidGVzdCIsIm1hdGNoIiwiUmVnRXhwIiwiJDEiLCJhZGRFdmVudExpc3RlbmVyIiwidGltZXIiLCJkdW1teVNyYyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZpeFJlc3BpbWciLCJpbWciLCJzb3VyY2UiLCJzaXplcyIsInBpY3R1cmUiLCJwYXJlbnROb2RlIiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImNsb25lTm9kZSIsImluc2VydEJlZm9yZSIsImZpcnN0RWxlbWVudENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZUNoaWxkIiwiX3BmTGFzdFNpemUiLCJvZmZzZXRXaWR0aCIsImZpbmRQaWN0dXJlSW1ncyIsImkiLCJpbWdzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIm9uUmVzaXplIiwiY2xlYXJUaW1lb3V0IiwibXEiLCJtYXRjaE1lZGlhIiwiaW5pdCIsImFkZExpc3RlbmVyIiwic3Jjc2V0IiwicmVhZHlTdGF0ZSIsInVuZGVmaW5lZCIsIndhcm4iLCJlbWlucHgiLCJhbHdheXNDaGVja1dEZXNjcmlwdG9yIiwiZXZhbElkIiwicGYiLCJpc1N1cHBvcnRUZXN0UmVhZHkiLCJub29wIiwiaW1hZ2UiLCJnZXRJbWdBdHRyIiwiZ2V0QXR0cmlidXRlIiwic2V0SW1nQXR0ciIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUltZ0F0dHIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkb2NFbGVtIiwiZG9jdW1lbnRFbGVtZW50IiwidHlwZXMiLCJjZmciLCJhbGdvcml0aG0iLCJzcmNBdHRyIiwic3Jjc2V0QXR0ciIsInN1cHBvcnRBYm9ydCIsImN1clNyY1Byb3AiLCJyZWdXRGVzYyIsInJlZ1NpemUiLCJzZXRPcHRpb25zIiwicGljdHVyZWZpbGxDRkciLCJiYXNlU3R5bGUiLCJmc0NzcyIsImlzVndEaXJ0eSIsImNzc0NhY2hlIiwic2l6ZUxlbmd0aENhY2hlIiwiRFBSIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInVuaXRzIiwicHgiLCJhbmNob3IiLCJhbHJlYWR5UnVuIiwicmVnZXhMZWFkaW5nU3BhY2VzIiwicmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMiLCJyZWdleExlYWRpbmdOb3RTcGFjZXMiLCJyZWdleFRyYWlsaW5nQ29tbWFzIiwicmVnZXhOb25OZWdhdGl2ZUludGVnZXIiLCJyZWdleEZsb2F0aW5nUG9pbnQiLCJvbiIsIm9iaiIsImV2dCIsImZuIiwiY2FwdHVyZSIsImF0dGFjaEV2ZW50IiwibWVtb2l6ZSIsImNhY2hlIiwiaW5wdXQiLCJpc1NwYWNlIiwiYyIsImV2YWxDU1MiLCJyZWdMZW5ndGgiLCJyZXBsYWNlIiwiYXJncyIsImFyZ3VtZW50cyIsImluZGV4Iiwic3RyaW5nIiwiYnVpbGRTdHIiLCJjc3MiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlZExlbmd0aCIsIkZ1bmN0aW9uIiwiZSIsInNldFJlc29sdXRpb24iLCJjYW5kaWRhdGUiLCJzaXplc2F0dHIiLCJ3IiwiY1dpZHRoIiwiY2FsY0xpc3RMZW5ndGgiLCJyZXMiLCJkIiwicGljdHVyZWZpbGwiLCJvcHQiLCJlbGVtZW50cyIsInBsZW4iLCJvcHRpb25zIiwibm9kZVR5cGUiLCJjb250ZXh0IiwicXNhIiwicmVldmFsdWF0ZSIsInJlc2VsZWN0Iiwic2VsIiwic2VsU2hvcnQiLCJzZXR1cFJ1biIsImZpbGxJbWciLCJ0ZWFyZG93blJ1biIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZGV0ZWN0VHlwZVN1cHBvcnQiLCJ0eXBlIiwidHlwZVVyaSIsIkltYWdlIiwib25lcnJvciIsIm9ubG9hZCIsIndpZHRoIiwic3JjIiwiaW1wbGVtZW50YXRpb24iLCJoYXNGZWF0dXJlIiwidXBkYXRlTWV0cmljcyIsIk1hdGgiLCJtYXgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInZ3IiwidmgiLCJqb2luIiwiZW0iLCJnZXRFbVZhbHVlIiwicmVtIiwiY2hvb3NlTG93UmVzIiwibG93ZXJWYWx1ZSIsImhpZ2hlclZhbHVlIiwiZHByVmFsdWUiLCJpc0NhY2hlZCIsImJvbnVzRmFjdG9yIiwidG9vTXVjaCIsImJvbnVzIiwibWVhbkRlbnNpdHkiLCJwb3ciLCJzcXJ0IiwiYXBwbHlCZXN0Q2FuZGlkYXRlIiwic3JjU2V0Q2FuZGlkYXRlcyIsIm1hdGNoaW5nU2V0IiwiZ2V0U2V0IiwiZXZhbHVhdGVkIiwic2V0UmVzIiwiYXBwbHlTZXRDYW5kaWRhdGUiLCJucyIsImV2YWxlZCIsImFzY2VuZGluZ1NvcnQiLCJhIiwiYiIsInNldFNyY1RvQ3VyIiwic2V0Iiwic2V0cyIsImdldENhbmRpZGF0ZUZvclNyYyIsIm1ha2VVcmwiLCJjdXJTcmMiLCJjdXJDYW4iLCJjYW5kaWRhdGVzIiwicGFyc2VTZXQiLCJ1cmwiLCJnZXRBbGxTb3VyY2VFbGVtZW50cyIsImxlbiIsInNvdXJjZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInB1c2giLCJtZWRpYSIsInBhcnNlU3Jjc2V0IiwiY29sbGVjdENoYXJhY3RlcnMiLCJyZWdFeCIsImNoYXJzIiwiZXhlYyIsInN1YnN0cmluZyIsInBvcyIsImlucHV0TGVuZ3RoIiwiZGVzY3JpcHRvcnMiLCJjdXJyZW50RGVzY3JpcHRvciIsInN0YXRlIiwicGFyc2VEZXNjcmlwdG9ycyIsInBFcnJvciIsImgiLCJkZXNjIiwibGFzdENoYXIiLCJ2YWx1ZSIsImludFZhbCIsImZsb2F0VmFsIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiaGFzMXgiLCJ0b2tlbml6ZSIsImNoYXJBdCIsInNsaWNlIiwicGFyc2VTaXplcyIsInN0clZhbHVlIiwicmVnZXhDc3NMZW5ndGhXaXRoVW5pdHMiLCJyZWdleENzc0NhbGMiLCJ1bnBhcnNlZFNpemVzTGlzdCIsInVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoIiwidW5wYXJzZWRTaXplIiwibGFzdENvbXBvbmVudFZhbHVlIiwic2l6ZSIsInBhcnNlQ29tcG9uZW50VmFsdWVzIiwic3RyIiwiY2hyY3RyIiwiY29tcG9uZW50IiwiY29tcG9uZW50QXJyYXkiLCJsaXN0QXJyYXkiLCJwYXJlbkRlcHRoIiwiaW5Db21tZW50IiwicHVzaENvbXBvbmVudCIsInB1c2hDb21wb25lbnRBcnJheSIsImlzVmFsaWROb25OZWdhdGl2ZVNvdXJjZVNpemVWYWx1ZSIsInMiLCJwb3AiLCJtYXRjaGVzTWVkaWEiLCJEYXRlIiwiZ2V0VGltZSIsInN1YnN0ciIsInN1cFNyY3NldCIsInN1cFNpemVzIiwic3VwUGljdHVyZSIsImltYWdlMiIsImNvbXBsZXRlIiwid2lkdGgyIiwid2lkdGgxIiwidSIsInNldFNpemUiLCJocmVmIiwibWF0Y2hlcyIsIm1NUSIsImFwcGx5IiwiY2FsY0xlbmd0aCIsInNvdXJjZVNpemVWYWx1ZSIsInN1cHBvcnRzVHlwZSIsInBhcnNlU2l6ZSIsInNvdXJjZVNpemVTdHIiLCJjYW5kcyIsImJvZHkiLCJkaXYiLCJvcmlnaW5hbEhUTUxDU1MiLCJzdHlsZSIsImNzc1RleHQiLCJvcmlnaW5hbEJvZHlDU1MiLCJhcHBlbmRDaGlsZCIsInNvdXJjZVNpemVMaXN0U3RyIiwidVQiLCJ3aW5uaW5nTGVuZ3RoIiwiaiIsImJlc3RDYW5kaWRhdGUiLCJjYW5kaWRhdGVTcmMiLCJhYm9ydEN1clNyYyIsImltYWdlRGF0YSIsImRwciIsImNhY2hlZCIsInNvcnQiLCJzZXRTcmMiLCJvcmlnV2lkdGgiLCJwYXJzZVNldHMiLCJlbGVtZW50IiwicGFyZW50Iiwic3Jjc2V0QXR0cmlidXRlIiwiaW1hZ2VTZXQiLCJpc1dEZXNjcmlwb3IiLCJzcmNzZXRQYXJzZWQiLCJoYXNQaWN0dXJlIiwiY2FsbCIsInBpYyIsInN1cHBvcnRlZCIsInBhcnNlZCIsImV4dHJlbWUiLCJpc0RvbVJlYWR5IiwicmVnUmVhZHkiLCJydW4iLCJ0aW1lcklkIiwiZmlsbEltZ3MiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwidGltZW91dCIsInRpbWVzdGFtcCIsImxhdGVyIiwibGFzdCIsImxhc3RDbGllbnRXaWR0aCIsIl8iLCJuYW1lIiwic2hpZnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmaW5lIiwiZmFjdG9yeSIsImludGVyVmFsSWQiLCJpbnRlcnZhbEluZGV4IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiRWxlbWVudCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwZk9ic2VydmVyIiwiZGlzY29ubmVjdCIsInRha2UiLCJvYnNlcnZlIiwic3RhcnQiLCJzdG9wIiwiY29ubmVjdGVkIiwiaXNSZWFkeSIsIm11dGF0aW9uU3VwcG9ydCIsIm9ic2VydmVyIiwiT2JqZWN0Iiwia2V5cyIsIkhUTUxTb3VyY2VFbGVtZW50IiwiYWxsb3dDb25uZWN0IiwiYWRkTXV0YXRpb24iLCJvYnNlcnZlUHJvcHMiLCJhdHRyRmlsdGVyIiwiY29uZmlnIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJlbGVtUHJvdG8iLCJwcm90b3R5cGUiLCJzdXAiLCJtb25rZXlQYXRjaCIsIm1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZWxlbSIsImNyZWF0ZSIsImRlZmluZVByb3BlcnRpZXMiLCJvbk11dGF0aW9ucyIsInRha2VSZWNvcmRzIiwicmV0Iiwid2FzQ29ubmVjdGVkIiwibXV0YXRpb25zIiwibW9kaWZpZWRJbWdzIiwib25TdWJ0cmVlQ2hhbmdlIiwib25BdHRyQ2hhbmdlIiwiZmluZEFkZGVkTXV0YXRpb25zIiwiYWRkZWROb2RlcyIsImZpbmRSZW1vdmVkTXV0YXRpb25zIiwicmVtb3ZlZE5vZGVzIiwidGFyZ2V0Iiwibm9kZXMiLCJub2RlIiwiYWRkVG9FbGVtZW50cyIsImFkZEltZ0ZvclNvdXJjZSIsImluZGV4T2YiLCJtdXRhdGlvbiIsInJpRGF0YSIsImF0dHJpYnV0ZU5hbWUiLCJ0ZXN0TXV0YXRpb25FdmVudHMiLCJydW5uaW5nIiwic2V0SW1tZWRpYXRlIiwiYXR0ck5hbWUiLCJIVE1MSW1hZ2VFbGVtZW50IiwiaW1nSWRscyIsIkdFVElNR0FUVFJTIiwiYXR0ciIsImludGVybmFsIiwid3JpdGVhYmxlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImZvckVhY2giLCJpZGwiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInVwZGF0ZUN1clNyYyIsIndyaXRhYmxlIiwiYmFzZVVwZGF0ZUN1clNyYyIsImFSZXMiLCJiUmVzIiwicGZDdXJyZW50U3JjIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFD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Q3ZDMEUsZ0JBQVUsRUFBRSxJQUQyQjtBQUV2Q0ssU0FBRyxFQUFFLGVBQVc7QUFDZixlQUFPL0UsTUFBTSxDQUFDMEYsQ0FBZDtBQUNBO0FBSnNDLEtBQXhDO0FBTUF0RSxVQUFNLENBQUMwRCxjQUFQLENBQXNCOUUsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0M7QUFDbkMwRSxnQkFBVSxFQUFFLElBRHVCO0FBRW5DSyxTQUFHLEVBQUUsZUFBVztBQUNmLGVBQU8vRSxNQUFNLENBQUNoUyxDQUFkO0FBQ0E7QUFKa0MsS0FBcEM7QUFNQWdTLFVBQU0sQ0FBQ3NGLGVBQVAsR0FBeUIsQ0FBekI7QUFDQTs7QUFDRCxTQUFPdEYsTUFBUDtBQUNBLENBckJELEM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9oZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90aGVtZS9zcmMvaGVhZC5qc1wiKTtcbiIsIi8qISBwaWN0dXJlZmlsbCAtIHYzLjAuMiAtIDIwMTYtMDItMTJcbiAqIGh0dHBzOi8vc2NvdHRqZWhsLmdpdGh1Yi5pby9waWN0dXJlZmlsbC9cbiAqIENvcHlyaWdodCAoYykgMjAxNiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL2Jsb2IvbWFzdGVyL0F1dGhvcnMudHh0OyBMaWNlbnNlZCBNSVRcbiAqL1xuLyohIEdlY2tvLVBpY3R1cmUgLSB2MS4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRqZWhsL3BpY3R1cmVmaWxsL3RyZWUvMy4wL3NyYy9wbHVnaW5zL2dlY2tvLXBpY3R1cmVcbiAqIEZpcmVmb3gncyBlYXJseSBwaWN0dXJlIGltcGxlbWVudGF0aW9uIChwcmlvciB0byBGRjQxKSBpcyBzdGF0aWMgYW5kIGRvZXNcbiAqIG5vdCByZWFjdCB0byB2aWV3cG9ydCBjaGFuZ2VzLiBUaGlzIHRpbnkgbW9kdWxlIGZpeGVzIHRoaXMuXG4gKi9cbihmdW5jdGlvbih3aW5kb3cpIHtcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuXHRpZiAoIHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA8IDQ1KSApIHtcblx0XHRhZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0aW1lcjtcblxuXHRcdFx0dmFyIGR1bW15U3JjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcblxuXHRcdFx0dmFyIGZpeFJlc3BpbWcgPSBmdW5jdGlvbihpbWcpIHtcblx0XHRcdFx0dmFyIHNvdXJjZSwgc2l6ZXM7XG5cdFx0XHRcdHZhciBwaWN0dXJlID0gaW1nLnBhcmVudE5vZGU7XG5cblx0XHRcdFx0aWYgKHBpY3R1cmUubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJQSUNUVVJFXCIpIHtcblx0XHRcdFx0XHRzb3VyY2UgPSBkdW1teVNyYy5jbG9uZU5vZGUoKTtcblxuXHRcdFx0XHRcdHBpY3R1cmUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgcGljdHVyZS5maXJzdEVsZW1lbnRDaGlsZCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHBpY3R1cmUucmVtb3ZlQ2hpbGQoc291cmNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmICghaW1nLl9wZkxhc3RTaXplIHx8IGltZy5vZmZzZXRXaWR0aCA+IGltZy5fcGZMYXN0U2l6ZSkge1xuXHRcdFx0XHRcdGltZy5fcGZMYXN0U2l6ZSA9IGltZy5vZmZzZXRXaWR0aDtcblx0XHRcdFx0XHRzaXplcyA9IGltZy5zaXplcztcblx0XHRcdFx0XHRpbWcuc2l6ZXMgKz0gXCIsMTAwdndcIjtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aW1nLnNpemVzID0gc2l6ZXM7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHZhciBmaW5kUGljdHVyZUltZ3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGk7XG5cdFx0XHRcdHZhciBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInBpY3R1cmUgPiBpbWcsIGltZ1tzcmNzZXRdW3NpemVzXVwiKTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmaXhSZXNwaW1nKGltZ3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0XHRcdHRpbWVyID0gc2V0VGltZW91dChmaW5kUGljdHVyZUltZ3MsIDk5KTtcblx0XHRcdH07XG5cdFx0XHR2YXIgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSAmJiBtYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpO1xuXHRcdFx0dmFyIGluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0b25SZXNpemUoKTtcblxuXHRcdFx0XHRpZiAobXEgJiYgbXEuYWRkTGlzdGVuZXIpIHtcblx0XHRcdFx0XHRtcS5hZGRMaXN0ZW5lcihvblJlc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGR1bW15U3JjLnNyY3NldCA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblxuXHRcdFx0aWYgKC9eW2N8aV18ZCQvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCBcIlwiKSkge1xuXHRcdFx0XHRpbml0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9uUmVzaXplO1xuXHRcdH0pKCkpO1xuXHR9XG59KSh3aW5kb3cpO1xuXG4vKiEgUGljdHVyZWZpbGwgLSB2My4wLjJcbiAqIGh0dHA6Ly9zY290dGplaGwuZ2l0aHViLmlvL3BpY3R1cmVmaWxsXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0amVobC9waWN0dXJlZmlsbC9ibG9iL21hc3Rlci9BdXRob3JzLnR4dDtcbiAqICBMaWNlbnNlOiBNSVRcbiAqL1xuXG4oZnVuY3Rpb24oIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcblx0Ly8gRW5hYmxlIHN0cmljdCBtb2RlXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8vIEhUTUwgc2hpbXx2IGl0IGZvciBvbGQgSUUgKElFOSB3aWxsIHN0aWxsIG5lZWQgdGhlIEhUTUwgdmlkZW8gdGFnIHdvcmthcm91bmQpXG5cdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwicGljdHVyZVwiICk7XG5cblx0dmFyIHdhcm4sIGVtaW5weCwgYWx3YXlzQ2hlY2tXRGVzY3JpcHRvciwgZXZhbElkO1xuXHQvLyBsb2NhbCBvYmplY3QgZm9yIG1ldGhvZCByZWZlcmVuY2VzIGFuZCB0ZXN0aW5nIGV4cG9zdXJlXG5cdHZhciBwZiA9IHt9O1xuXHR2YXIgaXNTdXBwb3J0VGVzdFJlYWR5ID0gZmFsc2U7XG5cdHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblx0dmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbWdcIiApO1xuXHR2YXIgZ2V0SW1nQXR0ciA9IGltYWdlLmdldEF0dHJpYnV0ZTtcblx0dmFyIHNldEltZ0F0dHIgPSBpbWFnZS5zZXRBdHRyaWJ1dGU7XG5cdHZhciByZW1vdmVJbWdBdHRyID0gaW1hZ2UucmVtb3ZlQXR0cmlidXRlO1xuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0dmFyIHR5cGVzID0ge307XG5cdHZhciBjZmcgPSB7XG5cdFx0Ly9yZXNvdXJjZSBzZWxlY3Rpb246XG5cdFx0YWxnb3JpdGhtOiBcIlwiXG5cdH07XG5cdHZhciBzcmNBdHRyID0gXCJkYXRhLXBmc3JjXCI7XG5cdHZhciBzcmNzZXRBdHRyID0gc3JjQXR0ciArIFwic2V0XCI7XG5cdC8vIHVhIHNuaWZmaW5nIGlzIGRvbmUgZm9yIHVuZGV0ZWN0YWJsZSBpbWcgbG9hZGluZyBmZWF0dXJlcyxcblx0Ly8gdG8gZG8gc29tZSBub24gY3J1Y2lhbCBwZXJmIG9wdGltaXphdGlvbnNcblx0dmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0dmFyIHN1cHBvcnRBYm9ydCA9ICgvcmlkZW50LykudGVzdCh1YSkgfHwgKCgvZWNrby8pLnRlc3QodWEpICYmIHVhLm1hdGNoKC9ydlxcOihcXGQrKS8pICYmIFJlZ0V4cC4kMSA+IDM1ICk7XG5cdHZhciBjdXJTcmNQcm9wID0gXCJjdXJyZW50U3JjXCI7XG5cdHZhciByZWdXRGVzYyA9IC9cXHMrXFwrP1xcZCsoZVxcZCspP3cvO1xuXHR2YXIgcmVnU2l6ZSA9IC8oXFwoW14pXStcXCkpP1xccyooLispLztcblx0dmFyIHNldE9wdGlvbnMgPSB3aW5kb3cucGljdHVyZWZpbGxDRkc7XG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmFwcHNlYy9zcGVjcy9taXhlZGNvbnRlbnQvI3Jlc3RyaWN0cy1taXhlZC1jb250ZW50ICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHQvLyBiYXNlU3R5bGUgYWxzbyB1c2VkIGJ5IGdldEVtVmFsdWUgKGkuZS46IHdpZHRoOiAxZW0gaXMgaW1wb3J0YW50KVxuXHR2YXIgYmFzZVN0eWxlID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpibG9jaztwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7Zm9udC1zaXplOjFlbTt3aWR0aDoxZW07b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwcHgsIDBweCwgMHB4LCAwcHgpXCI7XG5cdHZhciBmc0NzcyA9IFwiZm9udC1zaXplOjEwMCUhaW1wb3J0YW50O1wiO1xuXHR2YXIgaXNWd0RpcnR5ID0gdHJ1ZTtcblxuXHR2YXIgY3NzQ2FjaGUgPSB7fTtcblx0dmFyIHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXHR2YXIgRFBSID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdHZhciB1bml0cyA9IHtcblx0XHRweDogMSxcblx0XHRcImluXCI6IDk2XG5cdH07XG5cdHZhciBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXHQvKipcblx0ICogYWxyZWFkeVJ1biBmbGFnIHVzZWQgZm9yIHNldE9wdGlvbnMuIGlzIGl0IHRydWUgc2V0T3B0aW9ucyB3aWxsIHJlZXZhbHVhdGVcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHR2YXIgYWxyZWFkeVJ1biA9IGZhbHNlO1xuXG5cdC8vIFJldXNhYmxlLCBub24tXCJnXCIgUmVnZXhlc1xuXG5cdC8vIChEb24ndCB1c2UgXFxzLCB0byBhdm9pZCBtYXRjaGluZyBub24tYnJlYWtpbmcgc3BhY2UuKVxuXHR2YXIgcmVnZXhMZWFkaW5nU3BhY2VzID0gL15bIFxcdFxcblxcclxcdTAwMGNdKy8sXG5cdCAgICByZWdleExlYWRpbmdDb21tYXNPclNwYWNlcyA9IC9eWywgXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4TGVhZGluZ05vdFNwYWNlcyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLyxcblx0ICAgIHJlZ2V4VHJhaWxpbmdDb21tYXMgPSAvWyxdKyQvLFxuXHQgICAgcmVnZXhOb25OZWdhdGl2ZUludGVnZXIgPSAvXlxcZCskLyxcblxuXHQgICAgLy8gKCBQb3NpdGl2ZSBvciBuZWdhdGl2ZSBvciB1bnNpZ25lZCBpbnRlZ2VycyBvciBkZWNpbWFscywgd2l0aG91dCBvciB3aXRob3V0IGV4cG9uZW50cy5cblx0ICAgIC8vIE11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgZGlnaXQuXG5cdCAgICAvLyBBY2NvcmRpbmcgdG8gc3BlYyB0ZXN0cyBhbnkgZGVjaW1hbCBwb2ludCBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgZGlnaXQuXG5cdCAgICAvLyBObyBsZWFkaW5nIHBsdXMgc2lnbiBpcyBhbGxvd2VkLilcblx0ICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZnJhc3RydWN0dXJlLmh0bWwjdmFsaWQtZmxvYXRpbmctcG9pbnQtbnVtYmVyXG5cdCAgICByZWdleEZsb2F0aW5nUG9pbnQgPSAvXi0/KD86WzAtOV0rfFswLTldKlxcLlswLTldKykoPzpbZUVdWystXT9bMC05XSspPyQvO1xuXG5cdHZhciBvbiA9IGZ1bmN0aW9uKG9iaiwgZXZ0LCBmbiwgY2FwdHVyZSkge1xuXHRcdGlmICggb2JqLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRvYmouYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZuLCBjYXB0dXJlIHx8IGZhbHNlKTtcblx0XHR9IGVsc2UgaWYgKCBvYmouYXR0YWNoRXZlbnQgKSB7XG5cdFx0XHRvYmouYXR0YWNoRXZlbnQoIFwib25cIiArIGV2dCwgZm4pO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogc2ltcGxlIG1lbW9pemUgZnVuY3Rpb246XG5cdCAqL1xuXG5cdHZhciBtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgY2FjaGUgPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRcdGlmICggIShpbnB1dCBpbiBjYWNoZSkgKSB7XG5cdFx0XHRcdGNhY2hlWyBpbnB1dCBdID0gZm4oaW5wdXQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNhY2hlWyBpbnB1dCBdO1xuXHRcdH07XG5cdH07XG5cblx0Ly8gVVRJTElUWSBGVU5DVElPTlNcblxuXHQvLyBNYW51YWwgaXMgZmFzdGVyIHRoYW4gUmVnRXhcblx0Ly8gaHR0cDovL2pzcGVyZi5jb20vd2hpdGVzcGFjZS1jaGFyYWN0ZXIvNVxuXHRmdW5jdGlvbiBpc1NwYWNlKGMpIHtcblx0XHRyZXR1cm4gKGMgPT09IFwiXFx1MDAyMFwiIHx8IC8vIHNwYWNlXG5cdFx0ICAgICAgICBjID09PSBcIlxcdTAwMDlcIiB8fCAvLyBob3Jpem9udGFsIHRhYlxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBBXCIgfHwgLy8gbmV3IGxpbmVcblx0XHQgICAgICAgIGMgPT09IFwiXFx1MDAwQ1wiIHx8IC8vIGZvcm0gZmVlZFxuXHRcdCAgICAgICAgYyA9PT0gXCJcXHUwMDBEXCIpOyAgLy8gY2FycmlhZ2UgcmV0dXJuXG5cdH1cblxuXHQvKipcblx0ICogZ2V0cyBhIG1lZGlhcXVlcnkgYW5kIHJldHVybnMgYSBib29sZWFuIG9yIGdldHMgYSBjc3MgbGVuZ3RoIGFuZCByZXR1cm5zIGEgbnVtYmVyXG5cdCAqIEBwYXJhbSBjc3MgbWVkaWFxdWVyaWVzIG9yIGNzcyBsZW5ndGhcblx0ICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuXHQgKlxuXHQgKiBiYXNlZCBvbjogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9kYjRmNzcwMDliMTU1ZjA4MzczOFxuXHQgKi9cblx0dmFyIGV2YWxDU1MgPSAoZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgcmVnTGVuZ3RoID0gL14oW1xcZFxcLl0rKShlbXx2d3xweCkkLztcblx0XHR2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMsIGluZGV4ID0gMCwgc3RyaW5nID0gYXJnc1swXTtcblx0XHRcdHdoaWxlICgrK2luZGV4IGluIGFyZ3MpIHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoYXJnc1tpbmRleF0sIGFyZ3NbKytpbmRleF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cmluZztcblx0XHR9O1xuXG5cdFx0dmFyIGJ1aWxkU3RyID0gbWVtb2l6ZShmdW5jdGlvbihjc3MpIHtcblxuXHRcdFx0cmV0dXJuIFwicmV0dXJuIFwiICsgcmVwbGFjZSgoY3NzIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdC8vIGludGVycHJldCBgYW5kYFxuXHRcdFx0XHQvXFxiYW5kXFxiL2csIFwiJiZcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYCxgXG5cdFx0XHRcdC8sL2csIFwifHxcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgYG1pbi1gIGFzID49XG5cdFx0XHRcdC9taW4tKFthLXotXFxzXSspOi9nLCBcImUuJDE+PVwiLFxuXG5cdFx0XHRcdC8vIGludGVycHJldCBgbWF4LWAgYXMgPD1cblx0XHRcdFx0L21heC0oW2Etei1cXHNdKyk6L2csIFwiZS4kMTw9XCIsXG5cblx0XHRcdFx0Ly9jYWxjIHZhbHVlXG5cdFx0XHRcdC9jYWxjKFteKV0rKS9nLCBcIigkMSlcIixcblxuXHRcdFx0XHQvLyBpbnRlcnByZXQgY3NzIHZhbHVlc1xuXHRcdFx0XHQvKFxcZCtbXFwuXSpbXFxkXSopKFthLXpdKykvZywgXCIoJDEgKiBlLiQyKVwiLFxuXHRcdFx0XHQvL21ha2UgZXZhbCBsZXNzIGV2aWxcblx0XHRcdFx0L14oPyEoZS5bYS16XXxbMC05XFwuJj18PjxcXCtcXC1cXCpcXChcXClcXC9dKSkuKi9pZywgXCJcIlxuXHRcdFx0KSArIFwiO1wiO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGNzcywgbGVuZ3RoKSB7XG5cdFx0XHR2YXIgcGFyc2VkTGVuZ3RoO1xuXHRcdFx0aWYgKCEoY3NzIGluIGNzc0NhY2hlKSkge1xuXHRcdFx0XHRjc3NDYWNoZVtjc3NdID0gZmFsc2U7XG5cdFx0XHRcdGlmIChsZW5ndGggJiYgKHBhcnNlZExlbmd0aCA9IGNzcy5tYXRjaCggcmVnTGVuZ3RoICkpKSB7XG5cdFx0XHRcdFx0Y3NzQ2FjaGVbY3NzXSA9IHBhcnNlZExlbmd0aFsgMSBdICogdW5pdHNbcGFyc2VkTGVuZ3RoWyAyIF1dO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8qanNoaW50IGV2aWw6dHJ1ZSAqL1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdGNzc0NhY2hlW2Nzc10gPSBuZXcgRnVuY3Rpb24oXCJlXCIsIGJ1aWxkU3RyKGNzcykpKHVuaXRzKTtcblx0XHRcdFx0XHR9IGNhdGNoKGUpIHt9XG5cdFx0XHRcdFx0Lypqc2hpbnQgZXZpbDpmYWxzZSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY3NzQ2FjaGVbY3NzXTtcblx0XHR9O1xuXHR9KSgpO1xuXG5cdHZhciBzZXRSZXNvbHV0aW9uID0gZnVuY3Rpb24oIGNhbmRpZGF0ZSwgc2l6ZXNhdHRyICkge1xuXHRcdGlmICggY2FuZGlkYXRlLncgKSB7IC8vIGggPSBtZWFucyBoZWlnaHQ6IHx8IGRlc2NyaXB0b3IudHlwZSA9PT0gJ2gnIGRvIG5vdCBoYW5kbGUgeWV0Li4uXG5cdFx0XHRjYW5kaWRhdGUuY1dpZHRoID0gcGYuY2FsY0xpc3RMZW5ndGgoIHNpemVzYXR0ciB8fCBcIjEwMHZ3XCIgKTtcblx0XHRcdGNhbmRpZGF0ZS5yZXMgPSBjYW5kaWRhdGUudyAvIGNhbmRpZGF0ZS5jV2lkdGggO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYW5kaWRhdGUucmVzID0gY2FuZGlkYXRlLmQ7XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH07XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBvcHRcblx0ICovXG5cdHZhciBwaWN0dXJlZmlsbCA9IGZ1bmN0aW9uKCBvcHQgKSB7XG5cblx0XHRpZiAoIWlzU3VwcG9ydFRlc3RSZWFkeSkge3JldHVybjt9XG5cblx0XHR2YXIgZWxlbWVudHMsIGksIHBsZW47XG5cblx0XHR2YXIgb3B0aW9ucyA9IG9wdCB8fCB7fTtcblxuXHRcdGlmICggb3B0aW9ucy5lbGVtZW50cyAmJiBvcHRpb25zLmVsZW1lbnRzLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCBvcHRpb25zLmVsZW1lbnRzLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiSU1HXCIgKSB7XG5cdFx0XHRcdG9wdGlvbnMuZWxlbWVudHMgPSAgWyBvcHRpb25zLmVsZW1lbnRzIF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmVsZW1lbnRzO1xuXHRcdFx0XHRvcHRpb25zLmVsZW1lbnRzID0gIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZWxlbWVudHMgPSBvcHRpb25zLmVsZW1lbnRzIHx8IHBmLnFzYSggKG9wdGlvbnMuY29udGV4dCB8fCBkb2N1bWVudCksICggb3B0aW9ucy5yZWV2YWx1YXRlIHx8IG9wdGlvbnMucmVzZWxlY3QgKSA/IHBmLnNlbCA6IHBmLnNlbFNob3J0ICk7XG5cblx0XHRpZiAoIChwbGVuID0gZWxlbWVudHMubGVuZ3RoKSApIHtcblxuXHRcdFx0cGYuc2V0dXBSdW4oIG9wdGlvbnMgKTtcblx0XHRcdGFscmVhZHlSdW4gPSB0cnVlO1xuXG5cdFx0XHQvLyBMb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBsZW47IGkrKyApIHtcblx0XHRcdFx0cGYuZmlsbEltZyhlbGVtZW50c1sgaSBdLCBvcHRpb25zKTtcblx0XHRcdH1cblxuXHRcdFx0cGYudGVhcmRvd25SdW4oIG9wdGlvbnMgKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIG91dHB1dHMgYSB3YXJuaW5nIGZvciB0aGUgZGV2ZWxvcGVyXG5cdCAqIEBwYXJhbSB7bWVzc2FnZX1cblx0ICogQHR5cGUge0Z1bmN0aW9ufVxuXHQgKi9cblx0d2FybiA9ICggd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuICkgP1xuXHRcdGZ1bmN0aW9uKCBtZXNzYWdlICkge1xuXHRcdFx0Y29uc29sZS53YXJuKCBtZXNzYWdlICk7XG5cdFx0fSA6XG5cdFx0bm9vcFxuXHQ7XG5cblx0aWYgKCAhKGN1clNyY1Byb3AgaW4gaW1hZ2UpICkge1xuXHRcdGN1clNyY1Byb3AgPSBcInNyY1wiO1xuXHR9XG5cblx0Ly8gQWRkIHN1cHBvcnQgZm9yIHN0YW5kYXJkIG1pbWUgdHlwZXMuXG5cdHR5cGVzWyBcImltYWdlL2pwZWdcIiBdID0gdHJ1ZTtcblx0dHlwZXNbIFwiaW1hZ2UvZ2lmXCIgXSA9IHRydWU7XG5cdHR5cGVzWyBcImltYWdlL3BuZ1wiIF0gPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGRldGVjdFR5cGVTdXBwb3J0KCB0eXBlLCB0eXBlVXJpICkge1xuXHRcdC8vIGJhc2VkIG9uIE1vZGVybml6cidzIGxvc3NsZXNzIGltZy13ZWJwIHRlc3Rcblx0XHQvLyBub3RlOiBhc3luY2hyb25vdXNcblx0XHR2YXIgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG5cdFx0aW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGZhbHNlO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dHlwZXNbIHR5cGUgXSA9IGltYWdlLndpZHRoID09PSAxO1xuXHRcdFx0cGljdHVyZWZpbGwoKTtcblx0XHR9O1xuXHRcdGltYWdlLnNyYyA9IHR5cGVVcmk7XG5cdFx0cmV0dXJuIFwicGVuZGluZ1wiO1xuXHR9XG5cblx0Ly8gdGVzdCBzdmcgc3VwcG9ydFxuXHR0eXBlc1sgXCJpbWFnZS9zdmcreG1sXCIgXSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoIFwiaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNJbWFnZVwiLCBcIjEuMVwiICk7XG5cblx0LyoqXG5cdCAqIHVwZGF0ZXMgdGhlIGludGVybmFsIHZXIHByb3BlcnR5IHdpdGggdGhlIGN1cnJlbnQgdmlld3BvcnQgd2lkdGggaW4gcHhcblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZU1ldHJpY3MoKSB7XG5cblx0XHRpc1Z3RGlydHkgPSBmYWxzZTtcblx0XHREUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0XHRjc3NDYWNoZSA9IHt9O1xuXHRcdHNpemVMZW5ndGhDYWNoZSA9IHt9O1xuXG5cdFx0cGYuRFBSID0gRFBSIHx8IDE7XG5cblx0XHR1bml0cy53aWR0aCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lcldpZHRoIHx8IDAsIGRvY0VsZW0uY2xpZW50V2lkdGgpO1xuXHRcdHVuaXRzLmhlaWdodCA9IE1hdGgubWF4KHdpbmRvdy5pbm5lckhlaWdodCB8fCAwLCBkb2NFbGVtLmNsaWVudEhlaWdodCk7XG5cblx0XHR1bml0cy52dyA9IHVuaXRzLndpZHRoIC8gMTAwO1xuXHRcdHVuaXRzLnZoID0gdW5pdHMuaGVpZ2h0IC8gMTAwO1xuXG5cdFx0ZXZhbElkID0gWyB1bml0cy5oZWlnaHQsIHVuaXRzLndpZHRoLCBEUFIgXS5qb2luKFwiLVwiKTtcblxuXHRcdHVuaXRzLmVtID0gcGYuZ2V0RW1WYWx1ZSgpO1xuXHRcdHVuaXRzLnJlbSA9IHVuaXRzLmVtO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hvb3NlTG93UmVzKCBsb3dlclZhbHVlLCBoaWdoZXJWYWx1ZSwgZHByVmFsdWUsIGlzQ2FjaGVkICkge1xuXHRcdHZhciBib251c0ZhY3RvciwgdG9vTXVjaCwgYm9udXMsIG1lYW5EZW5zaXR5O1xuXG5cdFx0Ly9leHBlcmltZW50YWxcblx0XHRpZiAoY2ZnLmFsZ29yaXRobSA9PT0gXCJzYXZlRGF0YVwiICl7XG5cdFx0XHRpZiAoIGxvd2VyVmFsdWUgPiAyLjcgKSB7XG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gZHByVmFsdWUgKyAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9vTXVjaCA9IGhpZ2hlclZhbHVlIC0gZHByVmFsdWU7XG5cdFx0XHRcdGJvbnVzRmFjdG9yID0gTWF0aC5wb3cobG93ZXJWYWx1ZSAtIDAuNiwgMS41KTtcblxuXHRcdFx0XHRib251cyA9IHRvb011Y2ggKiBib251c0ZhY3RvcjtcblxuXHRcdFx0XHRpZiAoaXNDYWNoZWQpIHtcblx0XHRcdFx0XHRib251cyArPSAwLjEgKiBib251c0ZhY3Rvcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lYW5EZW5zaXR5ID0gbG93ZXJWYWx1ZSArIGJvbnVzO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZWFuRGVuc2l0eSA9IChkcHJWYWx1ZSA+IDEpID9cblx0XHRcdFx0TWF0aC5zcXJ0KGxvd2VyVmFsdWUgKiBoaWdoZXJWYWx1ZSkgOlxuXHRcdFx0XHRsb3dlclZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZWFuRGVuc2l0eSA+IGRwclZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlCZXN0Q2FuZGlkYXRlKCBpbWcgKSB7XG5cdFx0dmFyIHNyY1NldENhbmRpZGF0ZXM7XG5cdFx0dmFyIG1hdGNoaW5nU2V0ID0gcGYuZ2V0U2V0KCBpbWcgKTtcblx0XHR2YXIgZXZhbHVhdGVkID0gZmFsc2U7XG5cdFx0aWYgKCBtYXRjaGluZ1NldCAhPT0gXCJwZW5kaW5nXCIgKSB7XG5cdFx0XHRldmFsdWF0ZWQgPSBldmFsSWQ7XG5cdFx0XHRpZiAoIG1hdGNoaW5nU2V0ICkge1xuXHRcdFx0XHRzcmNTZXRDYW5kaWRhdGVzID0gcGYuc2V0UmVzKCBtYXRjaGluZ1NldCApO1xuXHRcdFx0XHRwZi5hcHBseVNldENhbmRpZGF0ZSggc3JjU2V0Q2FuZGlkYXRlcywgaW1nICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltZ1sgcGYubnMgXS5ldmFsZWQgPSBldmFsdWF0ZWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhc2NlbmRpbmdTb3J0KCBhLCBiICkge1xuXHRcdHJldHVybiBhLnJlcyAtIGIucmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0U3JjVG9DdXIoIGltZywgc3JjLCBzZXQgKSB7XG5cdFx0dmFyIGNhbmRpZGF0ZTtcblx0XHRpZiAoICFzZXQgJiYgc3JjICkge1xuXHRcdFx0c2V0ID0gaW1nWyBwZi5ucyBdLnNldHM7XG5cdFx0XHRzZXQgPSBzZXQgJiYgc2V0W3NldC5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHRjYW5kaWRhdGUgPSBnZXRDYW5kaWRhdGVGb3JTcmMoc3JjLCBzZXQpO1xuXG5cdFx0aWYgKCBjYW5kaWRhdGUgKSB7XG5cdFx0XHRzcmMgPSBwZi5tYWtlVXJsKHNyYyk7XG5cdFx0XHRpbWdbIHBmLm5zIF0uY3VyU3JjID0gc3JjO1xuXHRcdFx0aW1nWyBwZi5ucyBdLmN1ckNhbiA9IGNhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCAhY2FuZGlkYXRlLnJlcyApIHtcblx0XHRcdFx0c2V0UmVzb2x1dGlvbiggY2FuZGlkYXRlLCBjYW5kaWRhdGUuc2V0LnNpemVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDYW5kaWRhdGVGb3JTcmMoIHNyYywgc2V0ICkge1xuXHRcdHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZXM7XG5cdFx0aWYgKCBzcmMgJiYgc2V0ICkge1xuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblx0XHRcdHNyYyA9IHBmLm1ha2VVcmwoc3JjKTtcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBzcmMgPT09IHBmLm1ha2VVcmwoY2FuZGlkYXRlc1sgaSBdLnVybCkgKSB7XG5cdFx0XHRcdFx0Y2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgaSBdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRBbGxTb3VyY2VFbGVtZW50cyggcGljdHVyZSwgY2FuZGlkYXRlcyApIHtcblx0XHR2YXIgaSwgbGVuLCBzb3VyY2UsIHNyY3NldDtcblxuXHRcdC8vIFNQRUMgbWlzbWF0Y2ggaW50ZW5kZWQgZm9yIHNpemUgYW5kIHBlcmY6XG5cdFx0Ly8gYWN0dWFsbHkgb25seSBzb3VyY2UgZWxlbWVudHMgcHJlY2VkaW5nIHRoZSBpbWcgc2hvdWxkIGJlIHVzZWRcblx0XHQvLyBhbHNvIG5vdGU6IGRvbid0IHVzZSBxc2EgaGVyZSwgYmVjYXVzZSBJRTggc29tZXRpbWVzIGRvZXNuJ3QgbGlrZSBzb3VyY2UgYXMgdGhlIGtleSBwYXJ0IGluIGEgc2VsZWN0b3Jcblx0XHR2YXIgc291cmNlcyA9IHBpY3R1cmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwic291cmNlXCIgKTtcblxuXHRcdGZvciAoIGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0c291cmNlID0gc291cmNlc1sgaSBdO1xuXHRcdFx0c291cmNlWyBwZi5ucyBdID0gdHJ1ZTtcblx0XHRcdHNyY3NldCA9IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic3Jjc2V0XCIgKTtcblxuXHRcdFx0Ly8gaWYgc291cmNlIGRvZXMgbm90IGhhdmUgYSBzcmNzZXQgYXR0cmlidXRlLCBza2lwXG5cdFx0XHRpZiAoIHNyY3NldCApIHtcblx0XHRcdFx0Y2FuZGlkYXRlcy5wdXNoKCB7XG5cdFx0XHRcdFx0c3Jjc2V0OiBzcmNzZXQsXG5cdFx0XHRcdFx0bWVkaWE6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwibWVkaWFcIiApLFxuXHRcdFx0XHRcdHR5cGU6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICksXG5cdFx0XHRcdFx0c2l6ZXM6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoIFwic2l6ZXNcIiApXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU3Jjc2V0IFBhcnNlclxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogQHJldHVybnMgQXJyYXkgW3t1cmw6IF8sIGQ6IF8sIHc6IF8sIGg6Xywgc2V0Ol8oPz8/Pyl9LCAuLi5dXG5cdCAqXG5cdCAqIEJhc2VkIHN1cGVyIGR1cGVyIGNsb3NlbHkgb24gdGhlIHJlZmVyZW5jZSBhbGdvcml0aG0gYXQ6XG5cdCAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2VtYmVkZGVkLWNvbnRlbnQuaHRtbCNwYXJzZS1hLXNyY3NldC1hdHRyaWJ1dGVcblx0ICovXG5cblx0Ly8gMS4gTGV0IGlucHV0IGJlIHRoZSB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBhbGdvcml0aG0uXG5cdC8vIChUTy1ETyA6IEV4cGxhaW4gd2hhdCBcInNldFwiIGFyZ3VtZW50IGlzIGhlcmUuIE1heWJlIGNob29zZSBhIG1vcmVcblx0Ly8gZGVzY3JpcHRpdmUgJiBtb3JlIHNlYXJjaGFibGUgbmFtZS4gIFNpbmNlIHBhc3NpbmcgdGhlIFwic2V0XCIgaW4gcmVhbGx5IGhhc1xuXHQvLyBub3RoaW5nIHRvIGRvIHdpdGggcGFyc2luZyBwcm9wZXIsIEkgd291bGQgcHJlZmVyIHRoaXMgYXNzaWdubWVudCBldmVudHVhbGx5XG5cdC8vIGdvIGluIGFuIGV4dGVybmFsIGZuLilcblx0ZnVuY3Rpb24gcGFyc2VTcmNzZXQoaW5wdXQsIHNldCkge1xuXG5cdFx0ZnVuY3Rpb24gY29sbGVjdENoYXJhY3RlcnMocmVnRXgpIHtcblx0XHRcdHZhciBjaGFycyxcblx0XHRcdCAgICBtYXRjaCA9IHJlZ0V4LmV4ZWMoaW5wdXQuc3Vic3RyaW5nKHBvcykpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdGNoYXJzID0gbWF0Y2hbIDAgXTtcblx0XHRcdFx0cG9zICs9IGNoYXJzLmxlbmd0aDtcblx0XHRcdFx0cmV0dXJuIGNoYXJzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aCxcblx0XHQgICAgdXJsLFxuXHRcdCAgICBkZXNjcmlwdG9ycyxcblx0XHQgICAgY3VycmVudERlc2NyaXB0b3IsXG5cdFx0ICAgIHN0YXRlLFxuXHRcdCAgICBjLFxuXG5cdFx0ICAgIC8vIDIuIExldCBwb3NpdGlvbiBiZSBhIHBvaW50ZXIgaW50byBpbnB1dCwgaW5pdGlhbGx5IHBvaW50aW5nIGF0IHRoZSBzdGFydFxuXHRcdCAgICAvLyAgICBvZiB0aGUgc3RyaW5nLlxuXHRcdCAgICBwb3MgPSAwLFxuXG5cdFx0ICAgIC8vIDMuIExldCBjYW5kaWRhdGVzIGJlIGFuIGluaXRpYWxseSBlbXB0eSBzb3VyY2Ugc2V0LlxuXHRcdCAgICBjYW5kaWRhdGVzID0gW107XG5cblx0XHQvKipcblx0XHQqIEFkZHMgZGVzY3JpcHRvciBwcm9wZXJ0aWVzIHRvIGEgY2FuZGlkYXRlLCBwdXNoZXMgdG8gdGhlIGNhbmRpZGF0ZXMgYXJyYXlcblx0XHQqIEByZXR1cm4gdW5kZWZpbmVkXG5cdFx0Ki9cblx0XHQvLyAoRGVjbGFyZWQgb3V0c2lkZSBvZiB0aGUgd2hpbGUgbG9vcCBzbyB0aGF0IGl0J3Mgb25seSBjcmVhdGVkIG9uY2UuXG5cdFx0Ly8gKFRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0Ly8gVW5mb3J0dW5hdGVseSB0aGlzIGJyZWFrcyB0aGUgc2VxdWVuY2luZyBvZiB0aGUgc3BlYyBjb21tZW50cy4gOi8gKVxuXHRcdGZ1bmN0aW9uIHBhcnNlRGVzY3JpcHRvcnMoKSB7XG5cblx0XHRcdC8vIDkuIERlc2NyaXB0b3IgcGFyc2VyOiBMZXQgZXJyb3IgYmUgbm8uXG5cdFx0XHR2YXIgcEVycm9yID0gZmFsc2UsXG5cblx0XHRcdC8vIDEwLiBMZXQgd2lkdGggYmUgYWJzZW50LlxuXHRcdFx0Ly8gMTEuIExldCBkZW5zaXR5IGJlIGFic2VudC5cblx0XHRcdC8vIDEyLiBMZXQgZnV0dXJlLWNvbXBhdC1oIGJlIGFic2VudC4gKFdlJ3JlIGltcGxlbWVudGluZyBpdCBub3cgYXMgaClcblx0XHRcdCAgICB3LCBkLCBoLCBpLFxuXHRcdFx0ICAgIGNhbmRpZGF0ZSA9IHt9LFxuXHRcdFx0ICAgIGRlc2MsIGxhc3RDaGFyLCB2YWx1ZSwgaW50VmFsLCBmbG9hdFZhbDtcblxuXHRcdFx0Ly8gMTMuIEZvciBlYWNoIGRlc2NyaXB0b3IgaW4gZGVzY3JpcHRvcnMsIHJ1biB0aGUgYXBwcm9wcmlhdGUgc2V0IG9mIHN0ZXBzXG5cdFx0XHQvLyBmcm9tIHRoZSBmb2xsb3dpbmcgbGlzdDpcblx0XHRcdGZvciAoaSA9IDAgOyBpIDwgZGVzY3JpcHRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVzYyA9IGRlc2NyaXB0b3JzWyBpIF07XG5cblx0XHRcdFx0bGFzdENoYXIgPSBkZXNjWyBkZXNjLmxlbmd0aCAtIDEgXTtcblx0XHRcdFx0dmFsdWUgPSBkZXNjLnN1YnN0cmluZygwLCBkZXNjLmxlbmd0aCAtIDEpO1xuXHRcdFx0XHRpbnRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXHRcdFx0XHRmbG9hdFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG5cdFx0XHRcdC8vIElmIHRoZSBkZXNjcmlwdG9yIGNvbnNpc3RzIG9mIGEgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBVKzAwNzcgTEFUSU4gU01BTEwgTEVUVEVSIFcgY2hhcmFjdGVyXG5cdFx0XHRcdGlmIChyZWdleE5vbk5lZ2F0aXZlSW50ZWdlci50ZXN0KHZhbHVlKSAmJiAobGFzdENoYXIgPT09IFwid1wiKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2lkdGggYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmICh3IHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgbGV0IHdpZHRoIGJlIHRoZSByZXN1bHQuXG5cdFx0XHRcdFx0aWYgKGludFZhbCA9PT0gMCkge3BFcnJvciA9IHRydWU7fSBlbHNlIHt3ID0gaW50VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlciBmb2xsb3dlZCBieVxuXHRcdFx0XHQvLyBhIFUrMDA3OCBMQVRJTiBTTUFMTCBMRVRURVIgWCBjaGFyYWN0ZXJcblx0XHRcdFx0fSBlbHNlIGlmIChyZWdleEZsb2F0aW5nUG9pbnQudGVzdCh2YWx1ZSkgJiYgKGxhc3RDaGFyID09PSBcInhcIikpIHtcblxuXHRcdFx0XHRcdC8vIElmIHdpZHRoLCBkZW5zaXR5IGFuZCBmdXR1cmUtY29tcGF0LWggYXJlIG5vdCBhbGwgYWJzZW50LCB0aGVuIGxldCBlcnJvclxuXHRcdFx0XHRcdC8vIGJlIHllcy5cblx0XHRcdFx0XHRpZiAodyB8fCBkIHx8IGgpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBmbG9hdGluZy1wb2ludCBudW1iZXIgdmFsdWVzIHRvIHRoZSBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdC8vIElmIHRoZSByZXN1bHQgaXMgbGVzcyB0aGFuIHplcm8sIGxldCBlcnJvciBiZSB5ZXMuIE90aGVyd2lzZSwgbGV0IGRlbnNpdHlcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChmbG9hdFZhbCA8IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7ZCA9IGZsb2F0VmFsO31cblxuXHRcdFx0XHQvLyBJZiB0aGUgZGVzY3JpcHRvciBjb25zaXN0cyBvZiBhIHZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGZvbGxvd2VkIGJ5XG5cdFx0XHRcdC8vIGEgVSswMDY4IExBVElOIFNNQUxMIExFVFRFUiBIIGNoYXJhY3RlclxuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZ2V4Tm9uTmVnYXRpdmVJbnRlZ2VyLnRlc3QodmFsdWUpICYmIChsYXN0Q2hhciA9PT0gXCJoXCIpKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBoZWlnaHQgYW5kIGRlbnNpdHkgYXJlIG5vdCBib3RoIGFic2VudCwgdGhlbiBsZXQgZXJyb3IgYmUgeWVzLlxuXHRcdFx0XHRcdGlmIChoIHx8IGQpIHtwRXJyb3IgPSB0cnVlO31cblxuXHRcdFx0XHRcdC8vIEFwcGx5IHRoZSBydWxlcyBmb3IgcGFyc2luZyBub24tbmVnYXRpdmUgaW50ZWdlcnMgdG8gdGhlIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIHJlc3VsdCBpcyB6ZXJvLCBsZXQgZXJyb3IgYmUgeWVzLiBPdGhlcndpc2UsIGxldCBmdXR1cmUtY29tcGF0LWhcblx0XHRcdFx0XHQvLyBiZSB0aGUgcmVzdWx0LlxuXHRcdFx0XHRcdGlmIChpbnRWYWwgPT09IDApIHtwRXJyb3IgPSB0cnVlO30gZWxzZSB7aCA9IGludFZhbDt9XG5cblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSwgTGV0IGVycm9yIGJlIHllcy5cblx0XHRcdFx0fSBlbHNlIHtwRXJyb3IgPSB0cnVlO31cblx0XHRcdH0gLy8gKGNsb3NlIHN0ZXAgMTMgZm9yIGxvb3ApXG5cblx0XHRcdC8vIDE1LiBJZiBlcnJvciBpcyBzdGlsbCBubywgdGhlbiBhcHBlbmQgYSBuZXcgaW1hZ2Ugc291cmNlIHRvIGNhbmRpZGF0ZXMgd2hvc2Vcblx0XHRcdC8vIFVSTCBpcyB1cmwsIGFzc29jaWF0ZWQgd2l0aCBhIHdpZHRoIHdpZHRoIGlmIG5vdCBhYnNlbnQgYW5kIGEgcGl4ZWxcblx0XHRcdC8vIGRlbnNpdHkgZGVuc2l0eSBpZiBub3QgYWJzZW50LiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3IuXG5cdFx0XHRpZiAoIXBFcnJvcikge1xuXHRcdFx0XHRjYW5kaWRhdGUudXJsID0gdXJsO1xuXG5cdFx0XHRcdGlmICh3KSB7IGNhbmRpZGF0ZS53ID0gdzt9XG5cdFx0XHRcdGlmIChkKSB7IGNhbmRpZGF0ZS5kID0gZDt9XG5cdFx0XHRcdGlmIChoKSB7IGNhbmRpZGF0ZS5oID0gaDt9XG5cdFx0XHRcdGlmICghaCAmJiAhZCAmJiAhdykge2NhbmRpZGF0ZS5kID0gMTt9XG5cdFx0XHRcdGlmIChjYW5kaWRhdGUuZCA9PT0gMSkge3NldC5oYXMxeCA9IHRydWU7fVxuXHRcdFx0XHRjYW5kaWRhdGUuc2V0ID0gc2V0O1xuXG5cdFx0XHRcdGNhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gKGNsb3NlIHBhcnNlRGVzY3JpcHRvcnMgZm4pXG5cblx0XHQvKipcblx0XHQqIFRva2VuaXplcyBkZXNjcmlwdG9yIHByb3BlcnRpZXMgcHJpb3IgdG8gcGFyc2luZ1xuXHRcdCogUmV0dXJucyB1bmRlZmluZWQuXG5cdFx0KiAoQWdhaW4sIHRoaXMgZm4gaXMgZGVmaW5lZCBiZWZvcmUgaXQgaXMgdXNlZCwgaW4gb3JkZXIgdG8gcGFzcyBKU0hJTlQuXG5cdFx0KiBVbmZvcnR1bmF0ZWx5IHRoaXMgYnJlYWtzIHRoZSBsb2dpY2FsIHNlcXVlbmNpbmcgb2YgdGhlIHNwZWMgY29tbWVudHMuIDovIClcblx0XHQqL1xuXHRcdGZ1bmN0aW9uIHRva2VuaXplKCkge1xuXG5cdFx0XHQvLyA4LjEuIERlc2NyaXB0b3IgdG9rZW5pc2VyOiBTa2lwIHdoaXRlc3BhY2Vcblx0XHRcdGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ2V4TGVhZGluZ1NwYWNlcyk7XG5cblx0XHRcdC8vIDguMi4gTGV0IGN1cnJlbnQgZGVzY3JpcHRvciBiZSB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXG5cdFx0XHQvLyA4LjMuIExldCBzdGF0ZSBiZSBpbiBkZXNjcmlwdG9yLlxuXHRcdFx0c3RhdGUgPSBcImluIGRlc2NyaXB0b3JcIjtcblxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblxuXHRcdFx0XHQvLyA4LjQuIExldCBjIGJlIHRoZSBjaGFyYWN0ZXIgYXQgcG9zaXRpb24uXG5cdFx0XHRcdGMgPSBpbnB1dC5jaGFyQXQocG9zKTtcblxuXHRcdFx0XHQvLyAgRG8gdGhlIGZvbGxvd2luZyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHN0YXRlLlxuXHRcdFx0XHQvLyAgRm9yIHRoZSBwdXJwb3NlIG9mIHRoaXMgc3RlcCwgXCJFT0ZcIiBpcyBhIHNwZWNpYWwgY2hhcmFjdGVyIHJlcHJlc2VudGluZ1xuXHRcdFx0XHQvLyAgdGhhdCBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQuXG5cblx0XHRcdFx0Ly8gSW4gZGVzY3JpcHRvclxuXHRcdFx0XHRpZiAoc3RhdGUgPT09IFwiaW4gZGVzY3JpcHRvclwiKSB7XG5cdFx0XHRcdFx0Ly8gRG8gdGhlIGZvbGxvd2luZywgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjOlxuXG5cdFx0XHRcdCAgLy8gU3BhY2UgY2hhcmFjdGVyXG5cdFx0XHRcdCAgLy8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHQgIC8vIGRlc2NyaXB0b3JzIGFuZCBsZXQgY3VycmVudCBkZXNjcmlwdG9yIGJlIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHRcdCAgLy8gU2V0IHN0YXRlIHRvIGFmdGVyIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGlzU3BhY2UoYykpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50RGVzY3JpcHRvcikge1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9ycy5wdXNoKGN1cnJlbnREZXNjcmlwdG9yKTtcblx0XHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFwiYWZ0ZXIgZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVSswMDJDIENPTU1BICgsKVxuXHRcdFx0XHRcdC8vIEFkdmFuY2UgcG9zaXRpb24gdG8gdGhlIG5leHQgY2hhcmFjdGVyIGluIGlucHV0LiBJZiBjdXJyZW50IGRlc2NyaXB0b3Jcblx0XHRcdFx0XHQvLyBpcyBub3QgZW1wdHksIGFwcGVuZCBjdXJyZW50IGRlc2NyaXB0b3IgdG8gZGVzY3JpcHRvcnMuIEp1bXAgdG8gdGhlIHN0ZXBcblx0XHRcdFx0XHQvLyBsYWJlbGVkIGRlc2NyaXB0b3IgcGFyc2VyLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnREZXNjcmlwdG9yKSB7XG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI4IExFRlQgUEFSRU5USEVTSVMgKCgpXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLiBTZXQgc3RhdGUgdG8gaW4gcGFyZW5zLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gXCJcXHUwMDI4XCIpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnREZXNjcmlwdG9yID0gY3VycmVudERlc2NyaXB0b3IgKyBjO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImluIHBhcmVuc1wiO1xuXG5cdFx0XHRcdFx0Ly8gRU9GXG5cdFx0XHRcdFx0Ly8gSWYgY3VycmVudCBkZXNjcmlwdG9yIGlzIG5vdCBlbXB0eSwgYXBwZW5kIGN1cnJlbnQgZGVzY3JpcHRvciB0b1xuXHRcdFx0XHRcdC8vIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudERlc2NyaXB0b3IpIHtcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRvcnMucHVzaChjdXJyZW50RGVzY3JpcHRvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gQXBwZW5kIGMgdG8gY3VycmVudCBkZXNjcmlwdG9yLlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8vIChlbmQgXCJpbiBkZXNjcmlwdG9yXCJcblxuXHRcdFx0XHQvLyBJbiBwYXJlbnNcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJpbiBwYXJlbnNcIikge1xuXG5cdFx0XHRcdFx0Ly8gVSswMDI5IFJJR0hUIFBBUkVOVEhFU0lTICgpKVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci4gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuXG5cdFx0XHRcdFx0aWYgKGMgPT09IFwiKVwiKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50RGVzY3JpcHRvciA9IGN1cnJlbnREZXNjcmlwdG9yICsgYztcblx0XHRcdFx0XHRcdHN0YXRlID0gXCJpbiBkZXNjcmlwdG9yXCI7XG5cblx0XHRcdFx0XHQvLyBFT0Zcblx0XHRcdFx0XHQvLyBBcHBlbmQgY3VycmVudCBkZXNjcmlwdG9yIHRvIGRlc2NyaXB0b3JzLiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWRcblx0XHRcdFx0XHQvLyBkZXNjcmlwdG9yIHBhcnNlci5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGMgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3JzLnB1c2goY3VycmVudERlc2NyaXB0b3IpO1xuXHRcdFx0XHRcdFx0cGFyc2VEZXNjcmlwdG9ycygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdC8vIEFwcGVuZCBjIHRvIGN1cnJlbnQgZGVzY3JpcHRvci5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3VycmVudERlc2NyaXB0b3IgPSBjdXJyZW50RGVzY3JpcHRvciArIGM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFmdGVyIGRlc2NyaXB0b3Jcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJhZnRlciBkZXNjcmlwdG9yXCIpIHtcblxuXHRcdFx0XHRcdC8vIERvIHRoZSBmb2xsb3dpbmcsIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYzpcblx0XHRcdFx0XHQvLyBTcGFjZSBjaGFyYWN0ZXI6IFN0YXkgaW4gdGhpcyBzdGF0ZS5cblx0XHRcdFx0XHRpZiAoaXNTcGFjZShjKSkge1xuXG5cdFx0XHRcdFx0Ly8gRU9GOiBKdW1wIHRvIHRoZSBzdGVwIGxhYmVsZWQgZGVzY3JpcHRvciBwYXJzZXIuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRwYXJzZURlc2NyaXB0b3JzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0Ly8gU2V0IHN0YXRlIHRvIGluIGRlc2NyaXB0b3IuIFNldCBwb3NpdGlvbiB0byB0aGUgcHJldmlvdXMgY2hhcmFjdGVyIGluIGlucHV0LlxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiaW4gZGVzY3JpcHRvclwiO1xuXHRcdFx0XHRcdFx0cG9zIC09IDE7XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZHZhbmNlIHBvc2l0aW9uIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBpbiBpbnB1dC5cblx0XHRcdFx0cG9zICs9IDE7XG5cblx0XHRcdC8vIFJlcGVhdCB0aGlzIHN0ZXAuXG5cdFx0XHR9IC8vIChjbG9zZSB3aGlsZSB0cnVlIGxvb3ApXG5cdFx0fVxuXG5cdFx0Ly8gNC4gU3BsaXR0aW5nIGxvb3A6IENvbGxlY3QgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIHNwYWNlXG5cdFx0Ly8gICAgY2hhcmFjdGVycyBvciBVKzAwMkMgQ09NTUEgY2hhcmFjdGVycy4gSWYgYW55IFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzXG5cdFx0Ly8gICAgd2VyZSBjb2xsZWN0ZWQsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29sbGVjdENoYXJhY3RlcnMocmVnZXhMZWFkaW5nQ29tbWFzT3JTcGFjZXMpO1xuXG5cdFx0XHQvLyA1LiBJZiBwb3NpdGlvbiBpcyBwYXN0IHRoZSBlbmQgb2YgaW5wdXQsIHJldHVybiBjYW5kaWRhdGVzIGFuZCBhYm9ydCB0aGVzZSBzdGVwcy5cblx0XHRcdGlmIChwb3MgPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGNhbmRpZGF0ZXM7IC8vICh3ZSdyZSBkb25lLCB0aGlzIGlzIHRoZSBzb2xlIHJldHVybiBwYXRoKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyA2LiBDb2xsZWN0IGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBub3Qgc3BhY2UgY2hhcmFjdGVycyxcblx0XHRcdC8vICAgIGFuZCBsZXQgdGhhdCBiZSB1cmwuXG5cdFx0XHR1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhyZWdleExlYWRpbmdOb3RTcGFjZXMpO1xuXG5cdFx0XHQvLyA3LiBMZXQgZGVzY3JpcHRvcnMgYmUgYSBuZXcgZW1wdHkgbGlzdC5cblx0XHRcdGRlc2NyaXB0b3JzID0gW107XG5cblx0XHRcdC8vIDguIElmIHVybCBlbmRzIHdpdGggYSBVKzAwMkMgQ09NTUEgY2hhcmFjdGVyICgsKSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0Ly9cdFx0KDEpLiBSZW1vdmUgYWxsIHRyYWlsaW5nIFUrMDAyQyBDT01NQSBjaGFyYWN0ZXJzIGZyb20gdXJsLiBJZiB0aGlzIHJlbW92ZWRcblx0XHRcdC8vICAgICAgICAgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoYXQgaXMgYSBwYXJzZSBlcnJvci5cblx0XHRcdGlmICh1cmwuc2xpY2UoLTEpID09PSBcIixcIikge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZShyZWdleFRyYWlsaW5nQ29tbWFzLCBcIlwiKTtcblx0XHRcdFx0Ly8gKEp1bXAgYWhlYWQgdG8gc3RlcCA5IHRvIHNraXAgdG9rZW5pemF0aW9uIGFuZCBqdXN0IHB1c2ggdGhlIGNhbmRpZGF0ZSkuXG5cdFx0XHRcdHBhcnNlRGVzY3JpcHRvcnMoKTtcblxuXHRcdFx0Ly9cdE90aGVyd2lzZSwgZm9sbG93IHRoZXNlIHN1YnN0ZXBzOlxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9rZW5pemUoKTtcblx0XHRcdH0gLy8gKGNsb3NlIGVsc2Ugb2Ygc3RlcCA4KVxuXG5cdFx0Ly8gMTYuIFJldHVybiB0byB0aGUgc3RlcCBsYWJlbGVkIHNwbGl0dGluZyBsb29wLlxuXHRcdH0gLy8gKENsb3NlIG9mIGJpZyB3aGlsZSBsb29wLilcblx0fVxuXG5cdC8qXG5cdCAqIFNpemVzIFBhcnNlclxuXHQgKlxuXHQgKiBCeSBBbGV4IEJlbGwgfCAgTUlUIExpY2Vuc2Vcblx0ICpcblx0ICogTm9uLXN0cmljdCBidXQgYWNjdXJhdGUgYW5kIGxpZ2h0d2VpZ2h0IEpTIFBhcnNlciBmb3IgdGhlIHN0cmluZyB2YWx1ZSA8aW1nIHNpemVzPVwiaGVyZVwiPlxuXHQgKlxuXHQgKiBSZWZlcmVuY2UgYWxnb3JpdGhtIGF0OlxuXHQgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjcGFyc2UtYS1zaXplcy1hdHRyaWJ1dGVcblx0ICpcblx0ICogTW9zdCBjb21tZW50cyBhcmUgY29waWVkIGluIGRpcmVjdGx5IGZyb20gdGhlIHNwZWNcblx0ICogKGV4Y2VwdCBmb3IgY29tbWVudHMgaW4gcGFyZW5zKS5cblx0ICpcblx0ICogR3JhbW1hciBpczpcblx0ICogPHNvdXJjZS1zaXplLWxpc3Q+ID0gPHNvdXJjZS1zaXplPiMgWyAsIDxzb3VyY2Utc2l6ZS12YWx1ZT4gXT8gfCA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZT4gPSA8bWVkaWEtY29uZGl0aW9uPiA8c291cmNlLXNpemUtdmFsdWU+XG5cdCAqIDxzb3VyY2Utc2l6ZS12YWx1ZT4gPSA8bGVuZ3RoPlxuXHQgKiBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9lbWJlZGRlZC1jb250ZW50Lmh0bWwjYXR0ci1pbWctc2l6ZXNcblx0ICpcblx0ICogRS5nLiBcIihtYXgtd2lkdGg6IDMwZW0pIDEwMHZ3LCAobWF4LXdpZHRoOiA1MGVtKSA3MHZ3LCAxMDB2d1wiXG5cdCAqIG9yIFwiKG1pbi13aWR0aDogMzBlbSksIGNhbGMoMzB2dyAtIDE1cHgpXCIgb3IganVzdCBcIjMwdndcIlxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWxpZCA8Y3NzLWxlbmd0aD4gd2l0aCBhIG1lZGlhIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlLFxuXHQgKiBvciBcIjEwMHZ3XCIgaWYgYWxsIHZhbGlkIG1lZGlhIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gZmFsc2UuXG5cdCAqXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIHBhcnNlU2l6ZXMoc3RyVmFsdWUpIHtcblxuXHRcdC8vIChQZXJjZW50YWdlIENTUyBsZW5ndGhzIGFyZSBub3QgYWxsb3dlZCBpbiB0aGlzIGNhc2UsIHRvIGF2b2lkIGNvbmZ1c2lvbjpcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjdmFsaWQtc291cmNlLXNpemUtbGlzdFxuXHRcdC8vIENTUyBhbGxvd3MgYSBzaW5nbGUgb3B0aW9uYWwgcGx1cyBvciBtaW51cyBzaWduOlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIvc3luZGF0YS5odG1sI251bWJlcnNcblx0XHQvLyBDU1MgaXMgQVNDSUkgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNjaGFyYWN0ZXJzIClcblx0XHQvLyBTcGVjIGFsbG93cyBleHBvbmVudGlhbCBub3RhdGlvbiBmb3IgPG51bWJlcj4gdHlwZTpcblx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLyNudW1iZXJzXG5cdFx0dmFyIHJlZ2V4Q3NzTGVuZ3RoV2l0aFVuaXRzID0gL14oPzpbKy1dP1swLTldK3xbMC05XSpcXC5bMC05XSspKD86W2VFXVsrLV0/WzAtOV0rKT8oPzpjaHxjbXxlbXxleHxpbnxtbXxwY3xwdHxweHxyZW18dmh8dm1pbnx2bWF4fHZ3KSQvaTtcblxuXHRcdC8vIChUaGlzIGlzIGEgcXVpY2sgYW5kIGxlbmllbnQgdGVzdC4gQmVjYXVzZSBvZiBvcHRpb25hbCB1bmxpbWl0ZWQtZGVwdGggaW50ZXJuYWxcblx0XHQvLyBncm91cGluZyBwYXJlbnMgYW5kIHN0cmljdCBzcGFjaW5nIHJ1bGVzLCB0aGlzIGNvdWxkIGdldCB2ZXJ5IGNvbXBsaWNhdGVkLilcblx0XHR2YXIgcmVnZXhDc3NDYWxjID0gL15jYWxjXFwoKD86WzAtOWEteiBcXC5cXCtcXC1cXCpcXC9cXChcXCldKylcXCkkL2k7XG5cblx0XHR2YXIgaTtcblx0XHR2YXIgdW5wYXJzZWRTaXplc0xpc3Q7XG5cdFx0dmFyIHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoO1xuXHRcdHZhciB1bnBhcnNlZFNpemU7XG5cdFx0dmFyIGxhc3RDb21wb25lbnRWYWx1ZTtcblx0XHR2YXIgc2l6ZTtcblxuXHRcdC8vIFVUSUxJVFkgRlVOQ1RJT05TXG5cblx0XHQvLyAgKFRveSBDU1MgcGFyc2VyLiBUaGUgZ29hbHMgaGVyZSBhcmU6XG5cdFx0Ly8gIDEpIGV4cGFuc2l2ZSB0ZXN0IGNvdmVyYWdlIHdpdGhvdXQgdGhlIHdlaWdodCBvZiBhIGZ1bGwgQ1NTIHBhcnNlci5cblx0XHQvLyAgMikgQXZvaWRpbmcgcmVnZXggd2hlcmV2ZXIgY29udmVuaWVudC5cblx0XHQvLyAgUXVpY2sgdGVzdHM6IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvZ3RudEw0Z3IvMy9cblx0XHQvLyAgUmV0dXJucyBhbiBhcnJheSBvZiBhcnJheXMuKVxuXHRcdGZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50VmFsdWVzKHN0cikge1xuXHRcdFx0dmFyIGNocmN0cjtcblx0XHRcdHZhciBjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0dmFyIGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHR2YXIgbGlzdEFycmF5ID0gW107XG5cdFx0XHR2YXIgcGFyZW5EZXB0aCA9IDA7XG5cdFx0XHR2YXIgcG9zID0gMDtcblx0XHRcdHZhciBpbkNvbW1lbnQgPSBmYWxzZTtcblxuXHRcdFx0ZnVuY3Rpb24gcHVzaENvbXBvbmVudCgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5LnB1c2goY29tcG9uZW50KTtcblx0XHRcdFx0XHRjb21wb25lbnQgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hDb21wb25lbnRBcnJheSgpIHtcblx0XHRcdFx0aWYgKGNvbXBvbmVudEFycmF5WzBdKSB7XG5cdFx0XHRcdFx0bGlzdEFycmF5LnB1c2goY29tcG9uZW50QXJyYXkpO1xuXHRcdFx0XHRcdGNvbXBvbmVudEFycmF5ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gKExvb3AgZm9yd2FyZHMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcuKVxuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0Y2hyY3RyID0gc3RyLmNoYXJBdChwb3MpO1xuXG5cdFx0XHRcdGlmIChjaHJjdHIgPT09IFwiXCIpIHsgLy8gKCBFbmQgb2Ygc3RyaW5nIHJlYWNoZWQuKVxuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdEFycmF5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGluQ29tbWVudCkge1xuXHRcdFx0XHRcdGlmICgoY2hyY3RyID09PSBcIipcIikgJiYgKHN0cltwb3MgKyAxXSA9PT0gXCIvXCIpKSB7IC8vIChBdCBlbmQgb2YgYSBjb21tZW50Lilcblx0XHRcdFx0XHRcdGluQ29tbWVudCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0cG9zICs9IDI7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cG9zICs9IDE7IC8vIChTa2lwIGFsbCBjaGFyYWN0ZXJzIGluc2lkZSBjb21tZW50cy4pXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTcGFjZShjaHJjdHIpKSB7XG5cdFx0XHRcdFx0Ly8gKElmIHByZXZpb3VzIGNoYXJhY3RlciBpbiBsb29wIHdhcyBhbHNvIGEgc3BhY2UsIG9yIGlmXG5cdFx0XHRcdFx0Ly8gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3RyaW5nLCBkbyBub3QgYWRkIHNwYWNlIGNoYXIgdG9cblx0XHRcdFx0XHQvLyBjb21wb25lbnQuKVxuXHRcdFx0XHRcdGlmICggKHN0ci5jaGFyQXQocG9zIC0gMSkgJiYgaXNTcGFjZSggc3RyLmNoYXJBdChwb3MgLSAxKSApICkgfHwgIWNvbXBvbmVudCApIHtcblx0XHRcdFx0XHRcdHBvcyArPSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJlbkRlcHRoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwdXNoQ29tcG9uZW50KCk7XG5cdFx0XHRcdFx0XHRwb3MgKz0xO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIChSZXBsYWNlIGFueSBzcGFjZSBjaGFyYWN0ZXIgd2l0aCBhIHBsYWluIHNwYWNlIGZvciBsZWdpYmlsaXR5Lilcblx0XHRcdFx0XHRcdGNocmN0ciA9IFwiIFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaHJjdHIgPT09IFwiKFwiKSB7XG5cdFx0XHRcdFx0cGFyZW5EZXB0aCArPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNocmN0ciA9PT0gXCIpXCIpIHtcblx0XHRcdFx0XHRwYXJlbkRlcHRoIC09IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hyY3RyID09PSBcIixcIikge1xuXHRcdFx0XHRcdHB1c2hDb21wb25lbnQoKTtcblx0XHRcdFx0XHRwdXNoQ29tcG9uZW50QXJyYXkoKTtcblx0XHRcdFx0XHRwb3MgKz0gMTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fSBlbHNlIGlmICggKGNocmN0ciA9PT0gXCIvXCIpICYmIChzdHIuY2hhckF0KHBvcyArIDEpID09PSBcIipcIikgKSB7XG5cdFx0XHRcdFx0aW5Db21tZW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRwb3MgKz0gMjtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbXBvbmVudCA9IGNvbXBvbmVudCArIGNocmN0cjtcblx0XHRcdFx0cG9zICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaXNWYWxpZE5vbk5lZ2F0aXZlU291cmNlU2l6ZVZhbHVlKHMpIHtcblx0XHRcdGlmIChyZWdleENzc0xlbmd0aFdpdGhVbml0cy50ZXN0KHMpICYmIChwYXJzZUZsb2F0KHMpID49IDApKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0aWYgKHJlZ2V4Q3NzQ2FsYy50ZXN0KHMpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0Ly8gKCBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyL3N5bmRhdGEuaHRtbCNudW1iZXJzIHNheXM6XG5cdFx0XHQvLyBcIi0wIGlzIGVxdWl2YWxlbnQgdG8gMCBhbmQgaXMgbm90IGEgbmVnYXRpdmUgbnVtYmVyLlwiIHdoaWNoIG1lYW5zIHRoYXRcblx0XHRcdC8vIHVuaXRsZXNzIHplcm8gYW5kIHVuaXRsZXNzIG5lZ2F0aXZlIHplcm8gbXVzdCBiZSBhY2NlcHRlZCBhcyBzcGVjaWFsIGNhc2VzLilcblx0XHRcdGlmICgocyA9PT0gXCIwXCIpIHx8IChzID09PSBcIi0wXCIpIHx8IChzID09PSBcIiswXCIpKSB7cmV0dXJuIHRydWU7fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gYXNrZWQgdG8gcGFyc2UgYSBzaXplcyBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50LCBwYXJzZSBhXG5cdFx0Ly8gY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgY29tcG9uZW50IHZhbHVlcyBmcm9tIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzXG5cdFx0Ly8gc2l6ZXMgYXR0cmlidXRlIChvciB0aGUgZW1wdHkgc3RyaW5nLCBpZiB0aGUgYXR0cmlidXRlIGlzIGFic2VudCksIGFuZCBsZXRcblx0XHQvLyB1bnBhcnNlZCBzaXplcyBsaXN0IGJlIHRoZSByZXN1bHQuXG5cdFx0Ly8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLXN5bnRheC8jcGFyc2UtY29tbWEtc2VwYXJhdGVkLWxpc3Qtb2YtY29tcG9uZW50LXZhbHVlc1xuXG5cdFx0dW5wYXJzZWRTaXplc0xpc3QgPSBwYXJzZUNvbXBvbmVudFZhbHVlcyhzdHJWYWx1ZSk7XG5cdFx0dW5wYXJzZWRTaXplc0xpc3RMZW5ndGggPSB1bnBhcnNlZFNpemVzTGlzdC5sZW5ndGg7XG5cblx0XHQvLyBGb3IgZWFjaCB1bnBhcnNlZCBzaXplIGluIHVucGFyc2VkIHNpemVzIGxpc3Q6XG5cdFx0Zm9yIChpID0gMDsgaSA8IHVucGFyc2VkU2l6ZXNMaXN0TGVuZ3RoOyBpKyspIHtcblx0XHRcdHVucGFyc2VkU2l6ZSA9IHVucGFyc2VkU2l6ZXNMaXN0W2ldO1xuXG5cdFx0XHQvLyAxLiBSZW1vdmUgYWxsIGNvbnNlY3V0aXZlIDx3aGl0ZXNwYWNlLXRva2VuPnMgZnJvbSB0aGUgZW5kIG9mIHVucGFyc2VkIHNpemUuXG5cdFx0XHQvLyAoIHBhcnNlQ29tcG9uZW50VmFsdWVzKCkgYWxyZWFkeSBvbWl0cyBzcGFjZXMgb3V0c2lkZSBvZiBwYXJlbnMuIClcblxuXHRcdFx0Ly8gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHRoYXQgaXMgYSBwYXJzZSBlcnJvcjsgY29udGludWUgdG8gdGhlIG5leHRcblx0XHRcdC8vIGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vICggcGFyc2VDb21wb25lbnRWYWx1ZXMoKSB3b24ndCBwdXNoIGFuIGVtcHR5IGFycmF5LiApXG5cblx0XHRcdC8vIDIuIElmIHRoZSBsYXN0IGNvbXBvbmVudCB2YWx1ZSBpbiB1bnBhcnNlZCBzaXplIGlzIGEgdmFsaWQgbm9uLW5lZ2F0aXZlXG5cdFx0XHQvLyA8c291cmNlLXNpemUtdmFsdWU+LCBsZXQgc2l6ZSBiZSBpdHMgdmFsdWUgYW5kIHJlbW92ZSB0aGUgY29tcG9uZW50IHZhbHVlXG5cdFx0XHQvLyBmcm9tIHVucGFyc2VkIHNpemUuIEFueSBDU1MgZnVuY3Rpb24gb3RoZXIgdGhhbiB0aGUgY2FsYygpIGZ1bmN0aW9uIGlzXG5cdFx0XHQvLyBpbnZhbGlkLiBPdGhlcndpc2UsIHRoZXJlIGlzIGEgcGFyc2UgZXJyb3I7IGNvbnRpbnVlIHRvIHRoZSBuZXh0IGl0ZXJhdGlvblxuXHRcdFx0Ly8gb2YgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHQvLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3Mtc3ludGF4LyNwYXJzZS1jb21wb25lbnQtdmFsdWVcblx0XHRcdGxhc3RDb21wb25lbnRWYWx1ZSA9IHVucGFyc2VkU2l6ZVt1bnBhcnNlZFNpemUubGVuZ3RoIC0gMV07XG5cblx0XHRcdGlmIChpc1ZhbGlkTm9uTmVnYXRpdmVTb3VyY2VTaXplVmFsdWUobGFzdENvbXBvbmVudFZhbHVlKSkge1xuXHRcdFx0XHRzaXplID0gbGFzdENvbXBvbmVudFZhbHVlO1xuXHRcdFx0XHR1bnBhcnNlZFNpemUucG9wKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gMy4gUmVtb3ZlIGFsbCBjb25zZWN1dGl2ZSA8d2hpdGVzcGFjZS10b2tlbj5zIGZyb20gdGhlIGVuZCBvZiB1bnBhcnNlZFxuXHRcdFx0Ly8gc2l6ZS4gSWYgdW5wYXJzZWQgc2l6ZSBpcyBub3cgZW1wdHksIHJldHVybiBzaXplIGFuZCBleGl0IHRoaXMgYWxnb3JpdGhtLlxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgbm90IHRoZSBsYXN0IGl0ZW0gaW4gdW5wYXJzZWQgc2l6ZXMgbGlzdCwgdGhhdCBpcyBhIHBhcnNlIGVycm9yLlxuXHRcdFx0aWYgKHVucGFyc2VkU2l6ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHNpemU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIDQuIFBhcnNlIHRoZSByZW1haW5pbmcgY29tcG9uZW50IHZhbHVlcyBpbiB1bnBhcnNlZCBzaXplIGFzIGFcblx0XHRcdC8vIDxtZWRpYS1jb25kaXRpb24+LiBJZiBpdCBkb2VzIG5vdCBwYXJzZSBjb3JyZWN0bHksIG9yIGl0IGRvZXMgcGFyc2Vcblx0XHRcdC8vIGNvcnJlY3RseSBidXQgdGhlIDxtZWRpYS1jb25kaXRpb24+IGV2YWx1YXRlcyB0byBmYWxzZSwgY29udGludWUgdG8gdGhlXG5cdFx0XHQvLyBuZXh0IGl0ZXJhdGlvbiBvZiB0aGlzIGFsZ29yaXRobS5cblx0XHRcdC8vIChQYXJzaW5nIGFsbCBwb3NzaWJsZSBjb21wb3VuZCBtZWRpYSBjb25kaXRpb25zIGluIEpTIGlzIGhlYXZ5LCBjb21wbGljYXRlZCxcblx0XHRcdC8vIGFuZCB0aGUgcGF5b2ZmIGlzIHVuY2xlYXIuIElzIHRoZXJlIGV2ZXIgYW4gc2l0dWF0aW9uIHdoZXJlIHRoZVxuXHRcdFx0Ly8gbWVkaWEgY29uZGl0aW9uIHBhcnNlcyBpbmNvcnJlY3RseSBidXQgc3RpbGwgc29tZWhvdyBldmFsdWF0ZXMgdG8gdHJ1ZT9cblx0XHRcdC8vIENhbiB3ZSBqdXN0IHJlbHkgb24gdGhlIGJyb3dzZXIvcG9seWZpbGwgdG8gZG8gaXQ/KVxuXHRcdFx0dW5wYXJzZWRTaXplID0gdW5wYXJzZWRTaXplLmpvaW4oXCIgXCIpO1xuXHRcdFx0aWYgKCEocGYubWF0Y2hlc01lZGlhKCB1bnBhcnNlZFNpemUgKSApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gNS4gUmV0dXJuIHNpemUgYW5kIGV4aXQgdGhpcyBhbGdvcml0aG0uXG5cdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgYWJvdmUgYWxnb3JpdGhtIGV4aGF1c3RzIHVucGFyc2VkIHNpemVzIGxpc3Qgd2l0aG91dCByZXR1cm5pbmcgYVxuXHRcdC8vIHNpemUgdmFsdWUsIHJldHVybiAxMDB2dy5cblx0XHRyZXR1cm4gXCIxMDB2d1wiO1xuXHR9XG5cblx0Ly8gbmFtZXNwYWNlXG5cdHBmLm5zID0gKFwicGZcIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKS5zdWJzdHIoMCwgOSk7XG5cblx0Ly8gc3Jjc2V0IHN1cHBvcnQgdGVzdFxuXHRwZi5zdXBTcmNzZXQgPSBcInNyY3NldFwiIGluIGltYWdlO1xuXHRwZi5zdXBTaXplcyA9IFwic2l6ZXNcIiBpbiBpbWFnZTtcblx0cGYuc3VwUGljdHVyZSA9ICEhd2luZG93LkhUTUxQaWN0dXJlRWxlbWVudDtcblxuXHQvLyBVQyBicm93c2VyIGRvZXMgY2xhaW0gdG8gc3VwcG9ydCBzcmNzZXQgYW5kIHBpY3R1cmUsIGJ1dCBub3Qgc2l6ZXMsXG5cdC8vIHRoaXMgZXh0ZW5kZWQgdGVzdCByZXZlYWxzIHRoZSBicm93c2VyIGRvZXMgc3VwcG9ydCBub3RoaW5nXG5cdGlmIChwZi5zdXBTcmNzZXQgJiYgcGYuc3VwUGljdHVyZSAmJiAhcGYuc3VwU2l6ZXMpIHtcblx0XHQoZnVuY3Rpb24oaW1hZ2UyKSB7XG5cdFx0XHRpbWFnZS5zcmNzZXQgPSBcImRhdGE6LGFcIjtcblx0XHRcdGltYWdlMi5zcmMgPSBcImRhdGE6LGFcIjtcblx0XHRcdHBmLnN1cFNyY3NldCA9IGltYWdlLmNvbXBsZXRlID09PSBpbWFnZTIuY29tcGxldGU7XG5cdFx0XHRwZi5zdXBQaWN0dXJlID0gcGYuc3VwU3Jjc2V0ICYmIHBmLnN1cFBpY3R1cmU7XG5cdFx0fSkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSk7XG5cdH1cblxuXHQvLyBTYWZhcmk5IGhhcyBiYXNpYyBzdXBwb3J0IGZvciBzaXplcywgYnV0IGRvZXMndCBleHBvc2UgdGhlIGBzaXplc2AgaWRsIGF0dHJpYnV0ZVxuXHRpZiAocGYuc3VwU3Jjc2V0ICYmICFwZi5zdXBTaXplcykge1xuXG5cdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHdpZHRoMiA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQWdBQkFQQUFBUC8vL3dBQUFDSDVCQUFBQUFBQUxBQUFBQUFDQUFFQUFBSUNCQW9BT3c9PVwiO1xuXHRcdFx0dmFyIHdpZHRoMSA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIjtcblx0XHRcdHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0dmFyIHRlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHdpZHRoID0gaW1nLndpZHRoO1xuXG5cdFx0XHRcdGlmICh3aWR0aCA9PT0gMikge1xuXHRcdFx0XHRcdHBmLnN1cFNpemVzID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFsd2F5c0NoZWNrV0Rlc2NyaXB0b3IgPSBwZi5zdXBTcmNzZXQgJiYgIXBmLnN1cFNpemVzO1xuXG5cdFx0XHRcdGlzU3VwcG9ydFRlc3RSZWFkeSA9IHRydWU7XG5cdFx0XHRcdC8vIGZvcmNlIGFzeW5jXG5cdFx0XHRcdHNldFRpbWVvdXQocGljdHVyZWZpbGwpO1xuXHRcdFx0fTtcblxuXHRcdFx0aW1nLm9ubG9hZCA9IHRlc3Q7XG5cdFx0XHRpbWcub25lcnJvciA9IHRlc3Q7XG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKFwic2l6ZXNcIiwgXCI5cHhcIik7XG5cblx0XHRcdGltZy5zcmNzZXQgPSB3aWR0aDEgKyBcIiAxdyxcIiArIHdpZHRoMiArIFwiIDl3XCI7XG5cdFx0XHRpbWcuc3JjID0gd2lkdGgxO1xuXHRcdH0pKCk7XG5cblx0fSBlbHNlIHtcblx0XHRpc1N1cHBvcnRUZXN0UmVhZHkgPSB0cnVlO1xuXHR9XG5cblx0Ly8gdXNpbmcgcGYucXNhIGluc3RlYWQgb2YgZG9tIHRyYXZlcnNpbmcgZG9lcyBzY2FsZSBtdWNoIGJldHRlcixcblx0Ly8gZXNwZWNpYWxseSBvbiBzaXRlcyBtaXhpbmcgcmVzcG9uc2l2ZSBhbmQgbm9uLXJlc3BvbnNpdmUgaW1hZ2VzXG5cdHBmLnNlbFNob3J0ID0gXCJwaWN0dXJlPmltZyxpbWdbc3Jjc2V0XVwiO1xuXHRwZi5zZWwgPSBwZi5zZWxTaG9ydDtcblx0cGYuY2ZnID0gY2ZnO1xuXG5cdC8qKlxuXHQgKiBTaG9ydGN1dCBwcm9wZXJ0eSBmb3IgYGRldmljZVBpeGVsUmF0aW9gICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqL1xuXHRwZi5EUFIgPSAoRFBSICB8fCAxICk7XG5cdHBmLnUgPSB1bml0cztcblxuXHQvLyBjb250YWluZXIgb2Ygc3VwcG9ydGVkIG1pbWUgdHlwZXMgdGhhdCBvbmUgbWlnaHQgbmVlZCB0byBxdWFsaWZ5IGJlZm9yZSB1c2luZ1xuXHRwZi50eXBlcyA9ICB0eXBlcztcblxuXHRwZi5zZXRTaXplID0gbm9vcDtcblxuXHQvKipcblx0ICogR2V0cyBhIHN0cmluZyBhbmQgcmV0dXJucyB0aGUgYWJzb2x1dGUgVVJMXG5cdCAqIEBwYXJhbSBzcmNcblx0ICogQHJldHVybnMge1N0cmluZ30gYWJzb2x1dGUgVVJMXG5cdCAqL1xuXG5cdHBmLm1ha2VVcmwgPSBtZW1vaXplKGZ1bmN0aW9uKHNyYykge1xuXHRcdGFuY2hvci5ocmVmID0gc3JjO1xuXHRcdHJldHVybiBhbmNob3IuaHJlZjtcblx0fSk7XG5cblx0LyoqXG5cdCAqIEdldHMgYSBET00gZWxlbWVudCBvciBkb2N1bWVudCBhbmQgYSBzZWxjdG9yIGFuZCByZXR1cm5zIHRoZSBmb3VuZCBtYXRjaGVzXG5cdCAqIENhbiBiZSBleHRlbmRlZCB3aXRoIGpRdWVyeS9TaXp6bGUgZm9yIElFNyBzdXBwb3J0XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEBwYXJhbSBzZWxcblx0ICogQHJldHVybnMge05vZGVMaXN0fEFycmF5fVxuXHQgKi9cblx0cGYucXNhID0gZnVuY3Rpb24oY29udGV4dCwgc2VsKSB7XG5cdFx0cmV0dXJuICggXCJxdWVyeVNlbGVjdG9yXCIgaW4gY29udGV4dCApID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbCkgOiBbXTtcblx0fTtcblxuXHQvKipcblx0ICogU2hvcnRjdXQgbWV0aG9kIGZvciBtYXRjaE1lZGlhICggZm9yIGVhc3kgb3ZlcnJpZGluZyBpbiB0ZXN0cyApXG5cdCAqIHdldGhlciBuYXRpdmUgb3IgcGYubU1RIGlzIHVzZWQgd2lsbCBiZSBkZWNpZGVkIGxhenkgb24gZmlyc3QgY2FsbFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggd2luZG93Lm1hdGNoTWVkaWEgJiYgKG1hdGNoTWVkaWEoIFwiKG1pbi13aWR0aDogMC4xZW0pXCIgKSB8fCB7fSkubWF0Y2hlcyApIHtcblx0XHRcdHBmLm1hdGNoZXNNZWRpYSA9IGZ1bmN0aW9uKCBtZWRpYSApIHtcblx0XHRcdFx0cmV0dXJuICFtZWRpYSB8fCAoIG1hdGNoTWVkaWEoIG1lZGlhICkubWF0Y2hlcyApO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGYubWF0Y2hlc01lZGlhID0gcGYubU1RO1xuXHRcdH1cblxuXHRcdHJldHVybiBwZi5tYXRjaGVzTWVkaWEuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBIHNpbXBsaWZpZWQgbWF0Y2hNZWRpYSBpbXBsZW1lbnRhdGlvbiBmb3IgSUU4IGFuZCBJRTlcblx0ICogaGFuZGxlcyBvbmx5IG1pbi13aWR0aC9tYXgtd2lkdGggd2l0aCBweCBvciBlbSB2YWx1ZXNcblx0ICogQHBhcmFtIG1lZGlhXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0cGYubU1RID0gZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdHJldHVybiBtZWRpYSA/IGV2YWxDU1MobWVkaWEpIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgY2FsY3VsYXRlZCBsZW5ndGggaW4gY3NzIHBpeGVsIGZyb20gdGhlIGdpdmVuIHNvdXJjZVNpemVWYWx1ZVxuXHQgKiBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI2xlbmd0aC12YWx1ZVxuXHQgKiBpbnRlbmRlZCBTcGVjIG1pc21hdGNoZXM6XG5cdCAqICogRG9lcyBub3QgY2hlY2sgZm9yIGludmFsaWQgdXNlIG9mIENTUyBmdW5jdGlvbnNcblx0ICogKiBEb2VzIGhhbmRsZSBhIGNvbXB1dGVkIGxlbmd0aCBvZiAwIHRoZSBzYW1lIGFzIGEgbmVnYXRpdmUgYW5kIHRoZXJlZm9yZSBpbnZhbGlkIHZhbHVlXG5cdCAqIEBwYXJhbSBzb3VyY2VTaXplVmFsdWVcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdHBmLmNhbGNMZW5ndGggPSBmdW5jdGlvbiggc291cmNlU2l6ZVZhbHVlICkge1xuXG5cdFx0dmFyIHZhbHVlID0gZXZhbENTUyhzb3VyY2VTaXplVmFsdWUsIHRydWUpIHx8IGZhbHNlO1xuXHRcdGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHZhbHVlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHR5cGUgc3RyaW5nIGFuZCBjaGVja3MgaWYgaXRzIHN1cHBvcnRlZFxuXHQgKi9cblxuXHRwZi5zdXBwb3J0c1R5cGUgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gKCB0eXBlICkgPyB0eXBlc1sgdHlwZSBdIDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogUGFyc2VzIGEgc291cmNlU2l6ZSBpbnRvIG1lZGlhQ29uZGl0aW9uIChtZWRpYSkgYW5kIHNvdXJjZVNpemVWYWx1ZSAobGVuZ3RoKVxuXHQgKiBAcGFyYW0gc291cmNlU2l6ZVN0clxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHBmLnBhcnNlU2l6ZSA9IG1lbW9pemUoZnVuY3Rpb24oIHNvdXJjZVNpemVTdHIgKSB7XG5cdFx0dmFyIG1hdGNoID0gKCBzb3VyY2VTaXplU3RyIHx8IFwiXCIgKS5tYXRjaChyZWdTaXplKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWVkaWE6IG1hdGNoICYmIG1hdGNoWzFdLFxuXHRcdFx0bGVuZ3RoOiBtYXRjaCAmJiBtYXRjaFsyXVxuXHRcdH07XG5cdH0pO1xuXG5cdHBmLnBhcnNlU2V0ID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHRpZiAoICFzZXQuY2FuZHMgKSB7XG5cdFx0XHRzZXQuY2FuZHMgPSBwYXJzZVNyY3NldChzZXQuc3Jjc2V0LCBzZXQpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2V0LmNhbmRzO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiByZXR1cm5zIDFlbSBpbiBjc3MgcHggZm9yIGh0bWwvYm9keSBkZWZhdWx0IHNpemVcblx0ICogZnVuY3Rpb24gdGFrZW4gZnJvbSByZXNwb25kanNcblx0ICogQHJldHVybnMgeyp8bnVtYmVyfVxuXHQgKi9cblx0cGYuZ2V0RW1WYWx1ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBib2R5O1xuXHRcdGlmICggIWVtaW5weCAmJiAoYm9keSA9IGRvY3VtZW50LmJvZHkpICkge1xuXHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRcdFx0b3JpZ2luYWxIVE1MQ1NTID0gZG9jRWxlbS5zdHlsZS5jc3NUZXh0LFxuXHRcdFx0XHRvcmlnaW5hbEJvZHlDU1MgPSBib2R5LnN0eWxlLmNzc1RleHQ7XG5cblx0XHRcdGRpdi5zdHlsZS5jc3NUZXh0ID0gYmFzZVN0eWxlO1xuXG5cdFx0XHQvLyAxZW0gaW4gYSBtZWRpYSBxdWVyeSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRlZmF1bHQgZm9udCBzaXplIG9mIHRoZSBicm93c2VyXG5cdFx0XHQvLyByZXNldCBkb2NFbGVtIGFuZCBib2R5IHRvIGVuc3VyZSB0aGUgY29ycmVjdCB2YWx1ZSBpcyByZXR1cm5lZFxuXHRcdFx0ZG9jRWxlbS5zdHlsZS5jc3NUZXh0ID0gZnNDc3M7XG5cdFx0XHRib2R5LnN0eWxlLmNzc1RleHQgPSBmc0NzcztcblxuXHRcdFx0Ym9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cdFx0XHRlbWlucHggPSBkaXYub2Zmc2V0V2lkdGg7XG5cdFx0XHRib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcblxuXHRcdFx0Ly9hbHNvIHVwZGF0ZSBlbWlucHggYmVmb3JlIHJldHVybmluZ1xuXHRcdFx0ZW1pbnB4ID0gcGFyc2VGbG9hdCggZW1pbnB4LCAxMCApO1xuXG5cdFx0XHQvLyByZXN0b3JlIHRoZSBvcmlnaW5hbCB2YWx1ZXNcblx0XHRcdGRvY0VsZW0uc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsSFRNTENTUztcblx0XHRcdGJvZHkuc3R5bGUuY3NzVGV4dCA9IG9yaWdpbmFsQm9keUNTUztcblxuXHRcdH1cblx0XHRyZXR1cm4gZW1pbnB4IHx8IDE2O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUYWtlcyBhIHN0cmluZyBvZiBzaXplcyBhbmQgcmV0dXJucyB0aGUgd2lkdGggaW4gcGl4ZWxzIGFzIGEgbnVtYmVyXG5cdCAqL1xuXHRwZi5jYWxjTGlzdExlbmd0aCA9IGZ1bmN0aW9uKCBzb3VyY2VTaXplTGlzdFN0ciApIHtcblx0XHQvLyBTcGxpdCB1cCBzb3VyY2Ugc2l6ZSBsaXN0LCBpZSAoIG1heC13aWR0aDogMzBlbSApIDEwMCUsICggbWF4LXdpZHRoOiA1MGVtICkgNTAlLCAzMyVcblx0XHQvL1xuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgKG1pbi13aWR0aDozMGVtKSBjYWxjKDMwJSAtIDE1cHgpXG5cdFx0aWYgKCAhKHNvdXJjZVNpemVMaXN0U3RyIGluIHNpemVMZW5ndGhDYWNoZSkgfHwgY2ZnLnVUICkge1xuXHRcdFx0dmFyIHdpbm5pbmdMZW5ndGggPSBwZi5jYWxjTGVuZ3RoKCBwYXJzZVNpemVzKCBzb3VyY2VTaXplTGlzdFN0ciApICk7XG5cblx0XHRcdHNpemVMZW5ndGhDYWNoZVsgc291cmNlU2l6ZUxpc3RTdHIgXSA9ICF3aW5uaW5nTGVuZ3RoID8gdW5pdHMud2lkdGggOiB3aW5uaW5nTGVuZ3RoO1xuXHRcdH1cblxuXHRcdHJldHVybiBzaXplTGVuZ3RoQ2FjaGVbIHNvdXJjZVNpemVMaXN0U3RyIF07XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIGEgY2FuZGlkYXRlIG9iamVjdCB3aXRoIGEgc3Jjc2V0IHByb3BlcnR5IGluIHRoZSBmb3JtIG9mIHVybC9cblx0ICogZXguIFwiaW1hZ2VzL3BpYy1tZWRpdW0ucG5nIDF4LCBpbWFnZXMvcGljLW1lZGl1bS0yeC5wbmcgMnhcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLW1lZGl1bS5wbmcgNDAwdywgaW1hZ2VzL3BpYy1tZWRpdW0tMngucG5nIDgwMHdcIiBvclxuXHQgKiAgICAgXCJpbWFnZXMvcGljLXNtYWxsLnBuZ1wiXG5cdCAqIEdldCBhbiBhcnJheSBvZiBpbWFnZSBjYW5kaWRhdGVzIGluIHRoZSBmb3JtIG9mXG5cdCAqICAgICAge3VybDogXCIvZm9vL2Jhci5wbmdcIiwgcmVzb2x1dGlvbjogMX1cblx0ICogd2hlcmUgcmVzb2x1dGlvbiBpcyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtdmFsdWVzLTMvI3Jlc29sdXRpb24tdmFsdWVcblx0ICogSWYgc2l6ZXMgaXMgc3BlY2lmaWVkLCByZXMgaXMgY2FsY3VsYXRlZFxuXHQgKi9cblx0cGYuc2V0UmVzID0gZnVuY3Rpb24oIHNldCApIHtcblx0XHR2YXIgY2FuZGlkYXRlcztcblx0XHRpZiAoIHNldCApIHtcblxuXHRcdFx0Y2FuZGlkYXRlcyA9IHBmLnBhcnNlU2V0KCBzZXQgKTtcblxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBsZW4gPSBjYW5kaWRhdGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRzZXRSZXNvbHV0aW9uKCBjYW5kaWRhdGVzWyBpIF0sIHNldC5zaXplcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlcztcblx0fTtcblxuXHRwZi5zZXRSZXMucmVzID0gc2V0UmVzb2x1dGlvbjtcblxuXHRwZi5hcHBseVNldENhbmRpZGF0ZSA9IGZ1bmN0aW9uKCBjYW5kaWRhdGVzLCBpbWcgKSB7XG5cdFx0aWYgKCAhY2FuZGlkYXRlcy5sZW5ndGggKSB7cmV0dXJuO31cblx0XHR2YXIgY2FuZGlkYXRlLFxuXHRcdFx0aSxcblx0XHRcdGosXG5cdFx0XHRsZW5ndGgsXG5cdFx0XHRiZXN0Q2FuZGlkYXRlLFxuXHRcdFx0Y3VyU3JjLFxuXHRcdFx0Y3VyQ2FuLFxuXHRcdFx0Y2FuZGlkYXRlU3JjLFxuXHRcdFx0YWJvcnRDdXJTcmM7XG5cblx0XHR2YXIgaW1hZ2VEYXRhID0gaW1nWyBwZi5ucyBdO1xuXHRcdHZhciBkcHIgPSBwZi5EUFI7XG5cblx0XHRjdXJTcmMgPSBpbWFnZURhdGEuY3VyU3JjIHx8IGltZ1tjdXJTcmNQcm9wXTtcblxuXHRcdGN1ckNhbiA9IGltYWdlRGF0YS5jdXJDYW4gfHwgc2V0U3JjVG9DdXIoaW1nLCBjdXJTcmMsIGNhbmRpZGF0ZXNbMF0uc2V0KTtcblxuXHRcdC8vIGlmIHdlIGhhdmUgYSBjdXJyZW50IHNvdXJjZSwgd2UgbWlnaHQgZWl0aGVyIGJlY29tZSBsYXp5IG9yIGdpdmUgdGhpcyBzb3VyY2Ugc29tZSBhZHZhbnRhZ2Vcblx0XHRpZiAoIGN1ckNhbiAmJiBjdXJDYW4uc2V0ID09PSBjYW5kaWRhdGVzWyAwIF0uc2V0ICkge1xuXG5cdFx0XHQvLyBpZiBicm93c2VyIGNhbiBhYm9ydCBpbWFnZSByZXF1ZXN0IGFuZCB0aGUgaW1hZ2UgaGFzIGEgaGlnaGVyIHBpeGVsIGRlbnNpdHkgdGhhbiBuZWVkZWRcblx0XHRcdC8vIGFuZCB0aGlzIGltYWdlIGlzbid0IGRvd25sb2FkZWQgeWV0LCB3ZSBza2lwIG5leHQgcGFydCBhbmQgdHJ5IHRvIHNhdmUgYmFuZHdpZHRoXG5cdFx0XHRhYm9ydEN1clNyYyA9IChzdXBwb3J0QWJvcnQgJiYgIWltZy5jb21wbGV0ZSAmJiBjdXJDYW4ucmVzIC0gMC4xID4gZHByKTtcblxuXHRcdFx0aWYgKCAhYWJvcnRDdXJTcmMgKSB7XG5cdFx0XHRcdGN1ckNhbi5jYWNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdC8vIGlmIGN1cnJlbnQgY2FuZGlkYXRlIGlzIFwiYmVzdFwiLCBcImJldHRlclwiIG9yIFwib2theVwiLFxuXHRcdFx0XHQvLyBzZXQgaXQgdG8gYmVzdENhbmRpZGF0ZVxuXHRcdFx0XHRpZiAoIGN1ckNhbi5yZXMgPj0gZHByICkge1xuXHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjdXJDYW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFiZXN0Q2FuZGlkYXRlICkge1xuXG5cdFx0XHRjYW5kaWRhdGVzLnNvcnQoIGFzY2VuZGluZ1NvcnQgKTtcblxuXHRcdFx0bGVuZ3RoID0gY2FuZGlkYXRlcy5sZW5ndGg7XG5cdFx0XHRiZXN0Q2FuZGlkYXRlID0gY2FuZGlkYXRlc1sgbGVuZ3RoIC0gMSBdO1xuXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBpIF07XG5cdFx0XHRcdGlmICggY2FuZGlkYXRlLnJlcyA+PSBkcHIgKSB7XG5cdFx0XHRcdFx0aiA9IGkgLSAxO1xuXG5cdFx0XHRcdFx0Ly8gd2UgaGF2ZSBmb3VuZCB0aGUgcGVyZmVjdCBjYW5kaWRhdGUsXG5cdFx0XHRcdFx0Ly8gYnV0IGxldCdzIGltcHJvdmUgdGhpcyBhIGxpdHRsZSBiaXQgd2l0aCBzb21lIGFzc3VtcHRpb25zIDstKVxuXHRcdFx0XHRcdGlmIChjYW5kaWRhdGVzWyBqIF0gJiZcblx0XHRcdFx0XHRcdChhYm9ydEN1clNyYyB8fCBjdXJTcmMgIT09IHBmLm1ha2VVcmwoIGNhbmRpZGF0ZS51cmwgKSkgJiZcblx0XHRcdFx0XHRcdGNob29zZUxvd1JlcyhjYW5kaWRhdGVzWyBqIF0ucmVzLCBjYW5kaWRhdGUucmVzLCBkcHIsIGNhbmRpZGF0ZXNbIGogXS5jYWNoZWQpKSB7XG5cblx0XHRcdFx0XHRcdGJlc3RDYW5kaWRhdGUgPSBjYW5kaWRhdGVzWyBqIF07XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YmVzdENhbmRpZGF0ZSA9IGNhbmRpZGF0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGJlc3RDYW5kaWRhdGUgKSB7XG5cblx0XHRcdGNhbmRpZGF0ZVNyYyA9IHBmLm1ha2VVcmwoIGJlc3RDYW5kaWRhdGUudXJsICk7XG5cblx0XHRcdGltYWdlRGF0YS5jdXJTcmMgPSBjYW5kaWRhdGVTcmM7XG5cdFx0XHRpbWFnZURhdGEuY3VyQ2FuID0gYmVzdENhbmRpZGF0ZTtcblxuXHRcdFx0aWYgKCBjYW5kaWRhdGVTcmMgIT09IGN1clNyYyApIHtcblx0XHRcdFx0cGYuc2V0U3JjKCBpbWcsIGJlc3RDYW5kaWRhdGUgKTtcblx0XHRcdH1cblx0XHRcdHBmLnNldFNpemUoIGltZyApO1xuXHRcdH1cblx0fTtcblxuXHRwZi5zZXRTcmMgPSBmdW5jdGlvbiggaW1nLCBiZXN0Q2FuZGlkYXRlICkge1xuXHRcdHZhciBvcmlnV2lkdGg7XG5cdFx0aW1nLnNyYyA9IGJlc3RDYW5kaWRhdGUudXJsO1xuXG5cdFx0Ly8gYWx0aG91Z2ggdGhpcyBpcyBhIHNwZWNpZmljIFNhZmFyaSBpc3N1ZSwgd2UgZG9uJ3Qgd2FudCB0byB0YWtlIHRvbyBtdWNoIGRpZmZlcmVudCBjb2RlIHBhdGhzXG5cdFx0aWYgKCBiZXN0Q2FuZGlkYXRlLnNldC50eXBlID09PSBcImltYWdlL3N2Zyt4bWxcIiApIHtcblx0XHRcdG9yaWdXaWR0aCA9IGltZy5zdHlsZS53aWR0aDtcblx0XHRcdGltZy5zdHlsZS53aWR0aCA9IChpbWcub2Zmc2V0V2lkdGggKyAxKSArIFwicHhcIjtcblxuXHRcdFx0Ly8gbmV4dCBsaW5lIG9ubHkgc2hvdWxkIHRyaWdnZXIgYSByZXBhaW50XG5cdFx0XHQvLyBpZi4uLiBpcyBvbmx5IGRvbmUgdG8gdHJpY2sgZGVhZCBjb2RlIHJlbW92YWxcblx0XHRcdGlmICggaW1nLm9mZnNldFdpZHRoICsgMSApIHtcblx0XHRcdFx0aW1nLnN0eWxlLndpZHRoID0gb3JpZ1dpZHRoO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwZi5nZXRTZXQgPSBmdW5jdGlvbiggaW1nICkge1xuXHRcdHZhciBpLCBzZXQsIHN1cHBvcnRzVHlwZTtcblx0XHR2YXIgbWF0Y2ggPSBmYWxzZTtcblx0XHR2YXIgc2V0cyA9IGltZyBbIHBmLm5zIF0uc2V0cztcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgc2V0cy5sZW5ndGggJiYgIW1hdGNoOyBpKysgKSB7XG5cdFx0XHRzZXQgPSBzZXRzW2ldO1xuXG5cdFx0XHRpZiAoICFzZXQuc3Jjc2V0IHx8ICFwZi5tYXRjaGVzTWVkaWEoIHNldC5tZWRpYSApIHx8ICEoc3VwcG9ydHNUeXBlID0gcGYuc3VwcG9ydHNUeXBlKCBzZXQudHlwZSApKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3VwcG9ydHNUeXBlID09PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdFx0c2V0ID0gc3VwcG9ydHNUeXBlO1xuXHRcdFx0fVxuXG5cdFx0XHRtYXRjaCA9IHNldDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaDtcblx0fTtcblxuXHRwZi5wYXJzZVNldHMgPSBmdW5jdGlvbiggZWxlbWVudCwgcGFyZW50LCBvcHRpb25zICkge1xuXHRcdHZhciBzcmNzZXRBdHRyaWJ1dGUsIGltYWdlU2V0LCBpc1dEZXNjcmlwb3IsIHNyY3NldFBhcnNlZDtcblxuXHRcdHZhciBoYXNQaWN0dXJlID0gcGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIlBJQ1RVUkVcIjtcblx0XHR2YXIgaW1hZ2VEYXRhID0gZWxlbWVudFsgcGYubnMgXTtcblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyYyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3JjICkge1xuXHRcdFx0aW1hZ2VEYXRhLnNyYyA9IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzcmNcIiApO1xuXHRcdFx0aWYgKCBpbWFnZURhdGEuc3JjICkge1xuXHRcdFx0XHRzZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIHNyY0F0dHIsIGltYWdlRGF0YS5zcmMgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3JjQXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaW1hZ2VEYXRhLnNyY3NldCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuc3Jjc2V0IHx8ICFwZi5zdXBTcmNzZXQgfHwgZWxlbWVudC5zcmNzZXQgKSB7XG5cdFx0XHRzcmNzZXRBdHRyaWJ1dGUgPSBnZXRJbWdBdHRyLmNhbGwoIGVsZW1lbnQsIFwic3Jjc2V0XCIgKTtcblx0XHRcdGltYWdlRGF0YS5zcmNzZXQgPSBzcmNzZXRBdHRyaWJ1dGU7XG5cdFx0XHRzcmNzZXRQYXJzZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5zZXRzID0gW107XG5cblx0XHRpZiAoIGhhc1BpY3R1cmUgKSB7XG5cdFx0XHRpbWFnZURhdGEucGljID0gdHJ1ZTtcblx0XHRcdGdldEFsbFNvdXJjZUVsZW1lbnRzKCBwYXJlbnQsIGltYWdlRGF0YS5zZXRzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpbWFnZURhdGEuc3Jjc2V0ICkge1xuXHRcdFx0aW1hZ2VTZXQgPSB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyY3NldCxcblx0XHRcdFx0c2l6ZXM6IGdldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgXCJzaXplc1wiIClcblx0XHRcdH07XG5cblx0XHRcdGltYWdlRGF0YS5zZXRzLnB1c2goIGltYWdlU2V0ICk7XG5cblx0XHRcdGlzV0Rlc2NyaXBvciA9IChhbHdheXNDaGVja1dEZXNjcmlwdG9yIHx8IGltYWdlRGF0YS5zcmMpICYmIHJlZ1dEZXNjLnRlc3QoaW1hZ2VEYXRhLnNyY3NldCB8fCBcIlwiKTtcblxuXHRcdFx0Ly8gYWRkIG5vcm1hbCBzcmMgYXMgY2FuZGlkYXRlLCBpZiBzb3VyY2UgaGFzIG5vIHcgZGVzY3JpcHRvclxuXHRcdFx0aWYgKCAhaXNXRGVzY3JpcG9yICYmIGltYWdlRGF0YS5zcmMgJiYgIWdldENhbmRpZGF0ZUZvclNyYyhpbWFnZURhdGEuc3JjLCBpbWFnZVNldCkgJiYgIWltYWdlU2V0LmhhczF4ICkge1xuXHRcdFx0XHRpbWFnZVNldC5zcmNzZXQgKz0gXCIsIFwiICsgaW1hZ2VEYXRhLnNyYztcblx0XHRcdFx0aW1hZ2VTZXQuY2FuZHMucHVzaCh7XG5cdFx0XHRcdFx0dXJsOiBpbWFnZURhdGEuc3JjLFxuXHRcdFx0XHRcdGQ6IDEsXG5cdFx0XHRcdFx0c2V0OiBpbWFnZVNldFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoIGltYWdlRGF0YS5zcmMgKSB7XG5cdFx0XHRpbWFnZURhdGEuc2V0cy5wdXNoKCB7XG5cdFx0XHRcdHNyY3NldDogaW1hZ2VEYXRhLnNyYyxcblx0XHRcdFx0c2l6ZXM6IG51bGxcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpbWFnZURhdGEuY3VyQ2FuID0gbnVsbDtcblx0XHRpbWFnZURhdGEuY3VyU3JjID0gdW5kZWZpbmVkO1xuXG5cdFx0Ly8gaWYgaW1nIGhhcyBwaWN0dXJlIG9yIHRoZSBzcmNzZXQgd2FzIHJlbW92ZWQgb3IgaGFzIGEgc3Jjc2V0IGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNyY3NldCBhdCBhbGxcblx0XHQvLyBvciBoYXMgYSB3IGRlc2NyaXB0b3IgKGFuZCBkb2VzIG5vdCBzdXBwb3J0IHNpemVzKSBzZXQgc3VwcG9ydCB0byBmYWxzZSB0byBldmFsdWF0ZVxuXHRcdGltYWdlRGF0YS5zdXBwb3J0ZWQgPSAhKCBoYXNQaWN0dXJlIHx8ICggaW1hZ2VTZXQgJiYgIXBmLnN1cFNyY3NldCApIHx8IChpc1dEZXNjcmlwb3IgJiYgIXBmLnN1cFNpemVzKSApO1xuXG5cdFx0aWYgKCBzcmNzZXRQYXJzZWQgJiYgcGYuc3VwU3Jjc2V0ICYmICFpbWFnZURhdGEuc3VwcG9ydGVkICkge1xuXHRcdFx0aWYgKCBzcmNzZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciwgc3Jjc2V0QXR0cmlidXRlICk7XG5cdFx0XHRcdGVsZW1lbnQuc3Jjc2V0ID0gXCJcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUltZ0F0dHIuY2FsbCggZWxlbWVudCwgc3Jjc2V0QXR0ciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbWFnZURhdGEuc3VwcG9ydGVkICYmICFpbWFnZURhdGEuc3Jjc2V0ICYmICgoIWltYWdlRGF0YS5zcmMgJiYgZWxlbWVudC5zcmMpIHx8ICBlbGVtZW50LnNyYyAhPT0gcGYubWFrZVVybChpbWFnZURhdGEuc3JjKSkpIHtcblx0XHRcdGlmIChpbWFnZURhdGEuc3JjID09PSBudWxsKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zcmMgPSBpbWFnZURhdGEuc3JjO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGltYWdlRGF0YS5wYXJzZWQgPSB0cnVlO1xuXHR9O1xuXG5cdHBmLmZpbGxJbWcgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG5cdFx0dmFyIGltYWdlRGF0YTtcblx0XHR2YXIgZXh0cmVtZSA9IG9wdGlvbnMucmVzZWxlY3QgfHwgb3B0aW9ucy5yZWV2YWx1YXRlO1xuXG5cdFx0Ly8gZXhwYW5kbyBmb3IgY2FjaGluZyBkYXRhIG9uIHRoZSBpbWdcblx0XHRpZiAoICFlbGVtZW50WyBwZi5ucyBdICkge1xuXHRcdFx0ZWxlbWVudFsgcGYubnMgXSA9IHt9O1xuXHRcdH1cblxuXHRcdGltYWdlRGF0YSA9IGVsZW1lbnRbIHBmLm5zIF07XG5cblx0XHQvLyBpZiB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZCwgc2tpcCBpdFxuXHRcdC8vIHVubGVzcyBgb3B0aW9ucy5yZWV2YWx1YXRlYCBpcyBzZXQgdG8gdHJ1ZSAoIHRoaXMsIGZvciBleGFtcGxlLFxuXHRcdC8vIGlzIHNldCB0byB0cnVlIHdoZW4gcnVubmluZyBgcGljdHVyZWZpbGxgIG9uIGByZXNpemVgICkuXG5cdFx0aWYgKCAhZXh0cmVtZSAmJiBpbWFnZURhdGEuZXZhbGVkID09PSBldmFsSWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAhaW1hZ2VEYXRhLnBhcnNlZCB8fCBvcHRpb25zLnJlZXZhbHVhdGUgKSB7XG5cdFx0XHRwZi5wYXJzZVNldHMoIGVsZW1lbnQsIGVsZW1lbnQucGFyZW50Tm9kZSwgb3B0aW9ucyApO1xuXHRcdH1cblxuXHRcdGlmICggIWltYWdlRGF0YS5zdXBwb3J0ZWQgKSB7XG5cdFx0XHRhcHBseUJlc3RDYW5kaWRhdGUoIGVsZW1lbnQgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW1hZ2VEYXRhLmV2YWxlZCA9IGV2YWxJZDtcblx0XHR9XG5cdH07XG5cblx0cGYuc2V0dXBSdW4gPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoICFhbHJlYWR5UnVuIHx8IGlzVndEaXJ0eSB8fCAoRFBSICE9PSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykgKSB7XG5cdFx0XHR1cGRhdGVNZXRyaWNzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIElmIHBpY3R1cmUgaXMgc3VwcG9ydGVkLCB3ZWxsLCB0aGF0J3MgYXdlc29tZS5cblx0aWYgKCBwZi5zdXBQaWN0dXJlICkge1xuXHRcdHBpY3R1cmVmaWxsID0gbm9vcDtcblx0XHRwZi5maWxsSW1nID0gbm9vcDtcblx0fSBlbHNlIHtcblxuXHRcdCAvLyBTZXQgdXAgcGljdHVyZSBwb2x5ZmlsbCBieSBwb2xsaW5nIHRoZSBkb2N1bWVudFxuXHRcdChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpc0RvbVJlYWR5O1xuXHRcdFx0dmFyIHJlZ1JlYWR5ID0gd2luZG93LmF0dGFjaEV2ZW50ID8gL2QkfF5jLyA6IC9kJHxeY3xeaS87XG5cblx0XHRcdHZhciBydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlIHx8IFwiXCI7XG5cblx0XHRcdFx0dGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCByZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIiA/IDIwMCA6ICA5OTkpO1xuXHRcdFx0XHRpZiAoIGRvY3VtZW50LmJvZHkgKSB7XG5cdFx0XHRcdFx0cGYuZmlsbEltZ3MoKTtcblx0XHRcdFx0XHRpc0RvbVJlYWR5ID0gaXNEb21SZWFkeSB8fCByZWdSZWFkeS50ZXN0KHJlYWR5U3RhdGUpO1xuXHRcdFx0XHRcdGlmICggaXNEb21SZWFkeSApIHtcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCggdGltZXJJZCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgdGltZXJJZCA9IHNldFRpbWVvdXQocnVuLCBkb2N1bWVudC5ib2R5ID8gOSA6IDk5KTtcblxuXHRcdFx0Ly8gQWxzbyBhdHRhY2ggcGljdHVyZWZpbGwgb24gcmVzaXplIGFuZCByZWFkeXN0YXRlY2hhbmdlXG5cdFx0XHQvLyBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5jb20vMjAxMy8wOC9idWlsZGluZy1iZXR0ZXItZGVib3VuY2UuaHRtbFxuXHRcdFx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuXHRcdFx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbGFzdCA9IChuZXcgRGF0ZSgpKSAtIHRpbWVzdGFtcDtcblxuXHRcdFx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0XHRmdW5jKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0XHRcdFx0aWYgKCF0aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdHZhciBsYXN0Q2xpZW50V2lkdGggPSBkb2NFbGVtLmNsaWVudEhlaWdodDtcblx0XHRcdHZhciBvblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpc1Z3RGlydHkgPSBNYXRoLm1heCh3aW5kb3cuaW5uZXJXaWR0aCB8fCAwLCBkb2NFbGVtLmNsaWVudFdpZHRoKSAhPT0gdW5pdHMud2lkdGggfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgIT09IGxhc3RDbGllbnRXaWR0aDtcblx0XHRcdFx0bGFzdENsaWVudFdpZHRoID0gZG9jRWxlbS5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdGlmICggaXNWd0RpcnR5ICkge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdG9uKCB3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlKG9uUmVzaXplLCA5OSApICk7XG5cdFx0XHRvbiggZG9jdW1lbnQsIFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBydW4gKTtcblx0XHR9KSgpO1xuXHR9XG5cblx0cGYucGljdHVyZWZpbGwgPSBwaWN0dXJlZmlsbDtcblx0Ly91c2UgdGhpcyBpbnRlcm5hbGx5IGZvciBlYXN5IG1vbmtleSBwYXRjaGluZy9wZXJmb3JtYW5jZSB0ZXN0aW5nXG5cdHBmLmZpbGxJbWdzID0gcGljdHVyZWZpbGw7XG5cdHBmLnRlYXJkb3duUnVuID0gbm9vcDtcblxuXHQvKiBleHBvc2UgbWV0aG9kcyBmb3IgdGVzdGluZyAqL1xuXHRwaWN0dXJlZmlsbC5fID0gcGY7XG5cblx0d2luZG93LnBpY3R1cmVmaWxsQ0ZHID0ge1xuXHRcdHBmOiBwZixcblx0XHRwdXNoOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGFyZ3Muc2hpZnQoKTtcblx0XHRcdGlmICh0eXBlb2YgcGZbbmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRwZltuYW1lXS5hcHBseShwZiwgYXJncyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjZmdbbmFtZV0gPSBhcmdzWzBdO1xuXHRcdFx0XHRpZiAoYWxyZWFkeVJ1bikge1xuXHRcdFx0XHRcdHBmLmZpbGxJbWdzKCB7IHJlc2VsZWN0OiB0cnVlIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAoc2V0T3B0aW9ucyAmJiBzZXRPcHRpb25zLmxlbmd0aCkge1xuXHRcdHdpbmRvdy5waWN0dXJlZmlsbENGRy5wdXNoKHNldE9wdGlvbnMuc2hpZnQoKSk7XG5cdH1cblxuXHQvKiBleHBvc2UgcGljdHVyZWZpbGwgKi9cblx0d2luZG93LnBpY3R1cmVmaWxsID0gcGljdHVyZWZpbGw7XG5cblx0LyogZXhwb3NlIHBpY3R1cmVmaWxsICovXG5cdGlmICggdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Ly8gQ29tbW9uSlMsIGp1c3QgZXhwb3J0XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBwaWN0dXJlZmlsbDtcblx0fSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdFx0Ly8gQU1EIHN1cHBvcnRcblx0XHRkZWZpbmUoIFwicGljdHVyZWZpbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBwaWN0dXJlZmlsbDsgfSApO1xuXHR9XG5cblx0Ly8gSUU4IGV2YWxzIHRoaXMgc3luYywgc28gaXQgbXVzdCBiZSB0aGUgbGFzdCB0aGluZyB3ZSBkb1xuXHRpZiAoICFwZi5zdXBQaWN0dXJlICkge1xuXHRcdHR5cGVzWyBcImltYWdlL3dlYnBcIiBdID0gZGV0ZWN0VHlwZVN1cHBvcnQoXCJpbWFnZS93ZWJwXCIsIFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmtvQUFBQlhSVUpRVmxBNFdBb0FBQUFRQUFBQUFBQUFBQUFBUVV4UVNBd0FBQUFCQnhBUi9ROUVSUDhEQUFCV1VEZ2dHQUFBQURBQkFKMEJLZ0VBQVFBREFEUWxwQUFEY0FEKysvMVFBQT09XCIgKTtcblx0fVxuXG59ICkoIHdpbmRvdywgZG9jdW1lbnQgKTtcbiIsIihmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBpbnRlclZhbElkO1xuXHR2YXIgaW50ZXJ2YWxJbmRleCA9IDA7XG5cdHZhciBydW4gPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIHdpbmRvdy5waWN0dXJlZmlsbCApIHtcblx0XHRcdGZhY3RvcnkoIHdpbmRvdy5waWN0dXJlZmlsbCApO1xuXHRcdH1cblx0XHRpZiAod2luZG93LnBpY3R1cmVmaWxsIHx8IGludGVydmFsSW5kZXggPiA5OTk5KSB7XG5cdFx0XHRjbGVhckludGVydmFsKGludGVyVmFsSWQpO1xuXHRcdH1cblx0XHRpbnRlcnZhbEluZGV4Kys7XG5cdH07XG5cdGludGVyVmFsSWQgPSBzZXRJbnRlcnZhbChydW4sIDgpO1xuXG5cdHJ1bigpO1xuXG59KCBmdW5jdGlvbiggcGljdHVyZWZpbGwgKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblx0dmFyIEVsZW1lbnQgPSB3aW5kb3cuRWxlbWVudDtcblx0dmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcjtcblx0dmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXHR2YXIgcGZPYnNlcnZlciA9IHtcblx0XHRkaXNjb25uZWN0OiBub29wLFxuXHRcdHRha2U6IG5vb3AsXG5cdFx0b2JzZXJ2ZTogbm9vcCxcblx0XHRzdGFydDogbm9vcCxcblx0XHRzdG9wOiBub29wLFxuXHRcdGNvbm5lY3RlZDogZmFsc2Vcblx0fTtcblx0dmFyIGlzUmVhZHkgPSAvXmxvYWRlfF5jfF5pLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUgfHwgXCJcIik7XG5cdHZhciBwZiA9IHBpY3R1cmVmaWxsLl87XG5cdHBmLm11dGF0aW9uU3VwcG9ydCA9IGZhbHNlO1xuXHRwZi5vYnNlcnZlciA9IHBmT2JzZXJ2ZXI7XG5cdGlmICggIU9iamVjdC5rZXlzIHx8ICF3aW5kb3cuSFRNTFNvdXJjZUVsZW1lbnQgfHwgIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG1hdGNoZXMsIG9ic2VydmVyLCBhbGxvd0Nvbm5lY3QsIGFkZE11dGF0aW9uO1xuXG5cdHZhciBvYnNlcnZlUHJvcHMgPSB7IHNyYzogMSwgc3Jjc2V0OiAxLCBzaXplczogMSwgbWVkaWE6IDEgfTtcblx0dmFyIGF0dHJGaWx0ZXIgPSBPYmplY3Qua2V5cyggb2JzZXJ2ZVByb3BzICk7XG5cdHZhciBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBhdHRyRmlsdGVyIH07XG5cdHZhciBlbGVtUHJvdG8gPSBFbGVtZW50ICYmIEVsZW1lbnQucHJvdG90eXBlO1xuXHR2YXIgc3VwID0ge307XG5cdHZhciBtb25rZXlQYXRjaCA9IGZ1bmN0aW9uKCBuYW1lLCBmbiApIHtcblx0XHRzdXBbIG5hbWUgXSA9IHBmWyBuYW1lIF07XG5cdFx0cGZbIG5hbWUgXSA9IGZuO1xuXHR9O1xuXG5cdGlmICggZWxlbVByb3RvICYmICFlbGVtUHJvdG8ubWF0Y2hlcyApIHtcblx0XHRlbGVtUHJvdG8ubWF0Y2hlcyA9IGVsZW1Qcm90by5tYXRjaGVzU2VsZWN0b3IgfHwgZWxlbVByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtUHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1Qcm90by5tc01hdGNoZXNTZWxlY3Rvcjtcblx0fVxuXG5cdGlmICggZWxlbVByb3RvICYmIGVsZW1Qcm90by5tYXRjaGVzICkge1xuXHRcdG1hdGNoZXMgPSBmdW5jdGlvbiggZWxlbSwgc2VsICkge1xuXHRcdFx0cmV0dXJuIGVsZW0ubWF0Y2hlcyggc2VsICk7XG5cdFx0fTtcblx0XHRwZi5tdXRhdGlvblN1cHBvcnQgPSAhISggT2JqZWN0LmNyZWF0ZSAmJiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyApO1xuXHR9XG5cblx0aWYgKCAhcGYubXV0YXRpb25TdXBwb3J0ICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBmT2JzZXJ2ZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggYWxsb3dDb25uZWN0ICkge1xuXHRcdFx0cGZPYnNlcnZlci5jb25uZWN0ZWQgPSB0cnVlO1xuXHRcdFx0aWYgKCBvYnNlcnZlciApIHtcblx0XHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBjb25maWcgKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cGZPYnNlcnZlci5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0cGZPYnNlcnZlci5jb25uZWN0ZWQgPSBmYWxzZTtcblx0XHRpZiAoIG9ic2VydmVyICkge1xuXHRcdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdH1cblx0fTtcblxuXHRwZk9ic2VydmVyLnRha2UgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIG9ic2VydmVyICkge1xuXHRcdFx0cGYub25NdXRhdGlvbnMoIG9ic2VydmVyLnRha2VSZWNvcmRzKCkgKTtcblx0XHR9IGVsc2UgaWYgKCBhZGRNdXRhdGlvbiApIHtcblx0XHRcdGFkZE11dGF0aW9uLnRha2UoKTtcblx0XHR9XG5cdH07XG5cblx0cGZPYnNlcnZlci5zdGFydCA9IGZ1bmN0aW9uKCkge1xuXHRcdGFsbG93Q29ubmVjdCA9IHRydWU7XG5cdFx0cGZPYnNlcnZlci5vYnNlcnZlKCk7XG5cdH07XG5cblx0cGZPYnNlcnZlci5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0YWxsb3dDb25uZWN0ID0gZmFsc2U7XG5cdFx0cGZPYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH07XG5cblx0bW9ua2V5UGF0Y2goIFwic2V0dXBSdW5cIiwgZnVuY3Rpb24oKSB7XG5cdFx0cGZPYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0cmV0dXJuIHN1cC5zZXR1cFJ1bi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdH0pO1xuXG5cdG1vbmtleVBhdGNoKCBcInRlYXJkb3duUnVuXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciByZXQgPSBzdXAuc2V0dXBSdW4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdHBmT2JzZXJ2ZXIub2JzZXJ2ZSgpO1xuXHRcdHJldHVybiByZXQ7XG5cdH0pO1xuXG5cdG1vbmtleVBhdGNoKCBcInNldFNyY1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgcmV0O1xuXHRcdHZhciB3YXNDb25uZWN0ZWQgPSBwZk9ic2VydmVyLmNvbm5lY3RlZDtcblx0XHRwZk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRyZXQgPSBzdXAuc2V0U3JjLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRpZiAoIHdhc0Nvbm5lY3RlZCApIHtcblx0XHRcdHBmT2JzZXJ2ZXIub2JzZXJ2ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9KTtcblxuXHRwZi5vbk11dGF0aW9ucyA9IGZ1bmN0aW9uKCBtdXRhdGlvbnMgKSB7XG5cdFx0dmFyIGksIGxlbjtcblx0XHR2YXIgbW9kaWZpZWRJbWdzID0gW107XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBtdXRhdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICggaXNSZWFkeSAmJiBtdXRhdGlvbnNbaV0udHlwZSA9PT0gXCJjaGlsZExpc3RcIiApIHtcblx0XHRcdFx0cGYub25TdWJ0cmVlQ2hhbmdlKCBtdXRhdGlvbnNbaV0sIG1vZGlmaWVkSW1ncyApO1xuXHRcdFx0fSBlbHNlIGlmICggbXV0YXRpb25zW2ldLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICkge1xuXHRcdFx0XHRwZi5vbkF0dHJDaGFuZ2UoIG11dGF0aW9uc1tpXSwgbW9kaWZpZWRJbWdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBtb2RpZmllZEltZ3MubGVuZ3RoICkge1xuXG5cdFx0XHRwZi5maWxsSW1ncyh7XG5cdFx0XHRcdGVsZW1lbnRzOiBtb2RpZmllZEltZ3MsXG5cdFx0XHRcdHJlZXZhbHVhdGU6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwZi5vblN1YnRyZWVDaGFuZ2UgPSBmdW5jdGlvbiggbXV0YXRpb25zLCBpbWdzICkge1xuXHRcdHBmLmZpbmRBZGRlZE11dGF0aW9ucyggbXV0YXRpb25zLmFkZGVkTm9kZXMsIGltZ3MgKTtcblx0XHRwZi5maW5kUmVtb3ZlZE11dGF0aW9ucyggbXV0YXRpb25zLnJlbW92ZWROb2RlcywgbXV0YXRpb25zLnRhcmdldCwgaW1ncyApO1xuXHR9O1xuXG5cdHBmLmZpbmRBZGRlZE11dGF0aW9ucyA9IGZ1bmN0aW9uKCBub2RlcywgaW1ncyApIHtcblx0XHR2YXIgaSwgbGVuLCBub2RlLCBub2RlTmFtZTtcblx0XHRmb3IgKCBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKXtcblx0XHRcdG5vZGUgPSBub2Rlc1tpXTtcblx0XHRcdGlmICggbm9kZS5ub2RlVHlwZSAhPT0gMSApIHtjb250aW51ZTt9XG5cblx0XHRcdG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIG5vZGVOYW1lID09PSBcIlBJQ1RVUkVcIiApIHtcblx0XHRcdFx0cGYuYWRkVG9FbGVtZW50cyggbm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJpbWdcIiApWzBdLCBpbWdzICk7XG5cdFx0XHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJJTUdcIiAmJiBtYXRjaGVzKCBub2RlLCBwZi5zZWxTaG9ydCApICl7XG5cdFx0XHRcdHBmLmFkZFRvRWxlbWVudHMoIG5vZGUsIGltZ3MgKTtcblx0XHRcdH0gZWxzZSBpZiAoIG5vZGVOYW1lID09PSBcIlNPVVJDRVwiICkge1xuXHRcdFx0XHRwZi5hZGRJbWdGb3JTb3VyY2UoIG5vZGUsIG5vZGUucGFyZW50Tm9kZSwgaW1ncyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGYuYWRkVG9FbGVtZW50cyggcGYucXNhKCBub2RlLCBwZi5zZWxTaG9ydCApLCBpbWdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHBmLmZpbmRSZW1vdmVkTXV0YXRpb25zID0gZnVuY3Rpb24oIG5vZGVzLCB0YXJnZXQsIGltZ3MgKSB7XG5cdFx0dmFyIGksIGxlbiwgbm9kZTtcblx0XHRmb3IgKCBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRub2RlID0gbm9kZXNbaV07XG5cdFx0XHRpZiAoIG5vZGUubm9kZVR5cGUgIT09IDEgKSB7Y29udGludWU7fVxuXHRcdFx0aWYgKCBub2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiU09VUkNFXCIgKSB7XG5cdFx0XHRcdHBmLmFkZEltZ0ZvclNvdXJjZSggbm9kZSwgdGFyZ2V0LCBpbWdzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHBmLmFkZEltZ0ZvclNvdXJjZSA9IGZ1bmN0aW9uKCBub2RlLCBwYXJlbnQsIGltZ3MgKSB7XG5cdFx0aWYgKCBwYXJlbnQgJiYgKCBwYXJlbnQubm9kZU5hbWUgfHwgXCJcIiApLnRvVXBwZXJDYXNlKCkgIT09IFwiUElDVFVSRVwiICkge1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICghcGFyZW50IHx8ICggcGFyZW50Lm5vZGVOYW1lIHx8IFwiXCIgKS50b1VwcGVyQ2FzZSgpICE9PSBcIlBJQ1RVUkVcIiApIHtcblx0XHRcdFx0cGFyZW50ID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRwZi5hZGRUb0VsZW1lbnRzKCBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwiaW1nXCIgKVswXSwgaW1ncyApO1xuXHRcdH1cblx0fTtcblxuXHRwZi5hZGRUb0VsZW1lbnRzID0gZnVuY3Rpb24oIGltZywgaW1ncyApIHtcblx0XHR2YXIgaSwgbGVuO1xuXHRcdGlmICggaW1nICkge1xuXHRcdFx0aWYgKCAoXCJsZW5ndGhcIiBpbiBpbWcpICYmICFpbWcubm9kZVR5cGUgKXtcblx0XHRcdFx0Zm9yICggaSA9IDAsIGxlbiA9IGltZy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRwZi5hZGRUb0VsZW1lbnRzKCBpbWdbaV0sIGltZ3MgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICggaW1nLnBhcmVudE5vZGUgJiYgaW1ncy5pbmRleE9mKGltZykgPT09IC0xICkge1xuXHRcdFx0XHRpbWdzLnB1c2goIGltZyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwZi5vbkF0dHJDaGFuZ2UgPSBmdW5jdGlvbiggbXV0YXRpb24sIG1vZGlmaWVkSW1ncyApIHtcblx0XHR2YXIgbm9kZU5hbWU7XG5cdFx0dmFyIHJpRGF0YSA9IG11dGF0aW9uLnRhcmdldFsgcGYubnMgXTtcblxuXHRcdGlmICggIXJpRGF0YSAmJlxuXHRcdFx0bXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gXCJzcmNzZXRcIiAmJlxuXHRcdFx0KG5vZGVOYW1lID0gbXV0YXRpb24udGFyZ2V0Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpID09PSBcIklNR1wiICkge1xuXHRcdFx0cGYuYWRkVG9FbGVtZW50cyggbXV0YXRpb24udGFyZ2V0LCBtb2RpZmllZEltZ3MgKTtcblx0XHR9IGVsc2UgaWYgKCByaURhdGEgKSB7XG5cdFx0XHRpZiAoIW5vZGVOYW1lKSB7XG5cdFx0XHRcdG5vZGVOYW1lID0gbXV0YXRpb24udGFyZ2V0Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZU5hbWUgPT09IFwiSU1HXCIgKSB7XG5cdFx0XHRcdGlmICggbXV0YXRpb24uYXR0cmlidXRlTmFtZSBpbiByaURhdGEgKSB7XG5cdFx0XHRcdFx0cmlEYXRhWyBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGYuYWRkVG9FbGVtZW50cyggbXV0YXRpb24udGFyZ2V0LCBtb2RpZmllZEltZ3MgKTtcblx0XHRcdH0gZWxzZSBpZiAoIG5vZGVOYW1lID09PSBcIlNPVVJDRVwiICkge1xuXHRcdFx0XHRwZi5hZGRJbWdGb3JTb3VyY2UoIG11dGF0aW9uLnRhcmdldCwgbXV0YXRpb24udGFyZ2V0LnBhcmVudE5vZGUsIG1vZGlmaWVkSW1ncyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRpZiAoICFwZi5zdXBQaWN0dXJlICkge1xuXG5cdFx0aWYgKCBNdXRhdGlvbk9ic2VydmVyICYmICFwZi50ZXN0TXV0YXRpb25FdmVudHMgKSB7XG5cdFx0XHRvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCBwZi5vbk11dGF0aW9ucyApO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGFkZE11dGF0aW9uID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcnVubmluZyA9IGZhbHNlO1xuXHRcdFx0XHR2YXIgbXV0YXRpb25zID0gW107XG5cdFx0XHRcdHZhciBzZXRJbW1lZGlhdGUgPSB3aW5kb3cuc2V0SW1tZWRpYXRlIHx8IHdpbmRvdy5zZXRUaW1lb3V0O1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24obXV0YXRpb24pIHtcblx0XHRcdFx0XHRpZiAoICFydW5uaW5nICkge1xuXHRcdFx0XHRcdFx0cnVubmluZyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAoICFhZGRNdXRhdGlvbi50YWtlICkge1xuXHRcdFx0XHRcdFx0XHRhZGRNdXRhdGlvbi50YWtlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBtdXRhdGlvbnMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGYub25NdXRhdGlvbnMoIG11dGF0aW9ucyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0bXV0YXRpb25zID0gW107XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldEltbWVkaWF0ZSggYWRkTXV0YXRpb24udGFrZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtdXRhdGlvbnMucHVzaCggbXV0YXRpb24gKTtcblx0XHRcdFx0fTtcblx0XHRcdH0pKCk7XG5cblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTU5vZGVJbnNlcnRlZFwiLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0aWYgKCBwZk9ic2VydmVyLmNvbm5lY3RlZCAmJiBpc1JlYWR5ICkge1xuXHRcdFx0XHRcdGFkZE11dGF0aW9uKCB7IHR5cGU6IFwiY2hpbGRMaXN0XCIsIGFkZGVkTm9kZXM6IFsgZS50YXJnZXQgXSwgcmVtb3ZlZE5vZGVzOiBbXSB9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRydWUpO1xuXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Ob2RlUmVtb3ZlZFwiLCBmdW5jdGlvbiggZSApIHtcblxuXHRcdFx0XHRpZiAoIHBmT2JzZXJ2ZXIuY29ubmVjdGVkICYmIGlzUmVhZHkgJiYgKGUudGFyZ2V0IHx8IHt9KS5ub2RlTmFtZSA9PT0gXCJTT1VSQ0VcIikge1xuXHRcdFx0XHRcdGFkZE11dGF0aW9uKCB7IHR5cGU6IFwiY2hpbGRMaXN0XCIsIGFkZGVkTm9kZXM6IFtdLCByZW1vdmVkTm9kZXM6IFsgZS50YXJnZXQgXSwgdGFyZ2V0OiBlLnRhcmdldC5wYXJlbnROb2RlIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSk7XG5cblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTUF0dHJNb2RpZmllZFwiLCBmdW5jdGlvbiggZSApIHtcblx0XHRcdFx0aWYgKCBwZk9ic2VydmVyLmNvbm5lY3RlZCAmJiBvYnNlcnZlUHJvcHNbZS5hdHRyTmFtZV0gKSB7XG5cdFx0XHRcdFx0YWRkTXV0YXRpb24oIHsgdHlwZTogXCJhdHRyaWJ1dGVzXCIsIHRhcmdldDogZS50YXJnZXQsIGF0dHJpYnV0ZU5hbWU6IGUuYXR0ck5hbWUgfSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9XG5cblx0XHRpZiAoIHdpbmRvdy5IVE1MSW1hZ2VFbGVtZW50ICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzICkge1xuXG5cdFx0XHQoZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0dmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbWdcIiApO1xuXHRcdFx0XHR2YXIgaW1nSWRscyA9IFtdO1xuXHRcdFx0XHR2YXIgZ2V0SW1nQXR0ciA9IGltYWdlLmdldEF0dHJpYnV0ZTtcblx0XHRcdFx0dmFyIHNldEltZ0F0dHIgPSBpbWFnZS5zZXRBdHRyaWJ1dGU7XG5cdFx0XHRcdHZhciBHRVRJTUdBVFRSUyA9IHtcblx0XHRcdFx0XHRzcmM6IDFcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRpZiAoIHBmLnN1cFNyY3NldCAmJiAhcGYuc3VwU2l6ZXMgKSB7XG5cdFx0XHRcdFx0R0VUSU1HQVRUUlMuc3Jjc2V0ID0gMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlLCB7XG5cdFx0XHRcdFx0Z2V0QXR0cmlidXRlOiB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogZnVuY3Rpb24oIGF0dHIgKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBpbnRlcm5hbDtcblx0XHRcdFx0XHRcdFx0aWYgKCBHRVRJTUdBVFRSU1sgYXR0ciBdICYmIChpbnRlcm5hbCA9IHRoaXNbIHBmLm5zIF0pICYmICggaW50ZXJuYWxbYXR0cl0gIT09IHVuZGVmaW5lZCApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbFsgYXR0ciBdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBnZXRJbWdBdHRyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR3cml0ZWFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoIXBmLnN1cFNyY3NldCkge1xuXHRcdFx0XHRcdGltZ0lkbHMucHVzaChcInNyY3NldFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghcGYuc3VwU2l6ZXMpIHtcblx0XHRcdFx0XHRpbWdJZGxzLnB1c2goXCJzaXplc1wiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGltZ0lkbHMuZm9yRWFjaChmdW5jdGlvbihpZGwpIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUsIGlkbCwge1xuXHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0XHRcdHNldEltZ0F0dHIuY2FsbCggdGhpcywgaWRsLCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBnZXRJbWdBdHRyLmNhbGwoIHRoaXMsIGlkbCApIHx8IFwiXCI7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoIShcImN1cnJlbnRTcmNcIiBpbiBpbWFnZSkpIHtcblx0XHRcdFx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR2YXIgYXNjZW5kaW5nU29ydDtcblx0XHRcdFx0XHRcdHZhciB1cGRhdGVDdXJTcmMgPSBmdW5jdGlvbihlbGVtLCBzcmMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNyYyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3JjID0gZWxlbS5zcmMgfHwgXCJcIjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtLCBcInBmQ3VycmVudFNyY1wiLCB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHNyYyxcblx0XHRcdFx0XHRcdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR2YXIgYmFzZVVwZGF0ZUN1clNyYyA9IHVwZGF0ZUN1clNyYztcblxuXHRcdFx0XHRcdFx0aWYgKHBmLnN1cFNyY3NldCAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykge1xuXHRcdFx0XHRcdFx0XHRhc2NlbmRpbmdTb3J0ID0gZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGFSZXMgPSBhLmQgfHwgYS53IHx8IGEucmVzO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBiUmVzID0gYi5kIHx8IGIudyB8fCBiLnJlcztcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYVJlcyAtIGJSZXM7XG5cdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0dXBkYXRlQ3VyU3JjID0gZnVuY3Rpb24oZWxlbSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBpLCBjYW5kcywgbGVuZ3RoLCByZXQ7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGltYWdlRGF0YSA9IGVsZW1bIHBmLm5zIF07XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoIGltYWdlRGF0YSAmJiBpbWFnZURhdGEuc3VwcG9ydGVkICYmIGltYWdlRGF0YS5zcmNzZXQgJiYgaW1hZ2VEYXRhLnNldHMgJiYgKGNhbmRzID0gcGYucGFyc2VTZXQoaW1hZ2VEYXRhLnNldHNbMF0pKSAmJiBjYW5kcy5zb3J0KSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNhbmRzLnNvcnQoIGFzY2VuZGluZ1NvcnQgKTtcblx0XHRcdFx0XHRcdFx0XHRcdGxlbmd0aCA9IGNhbmRzLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0XHRcdHJldCA9IGNhbmRzWyBsZW5ndGggLSAxIF07XG5cblx0XHRcdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2FuZHNbaV0uZCA+PSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldCA9IGNhbmRzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0ID0gcGYubWFrZVVybChyZXQudXJsKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YmFzZVVwZGF0ZUN1clNyYyhlbGVtLCByZXQpO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIklNR1wiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlQ3VyU3JjKGUudGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSwgdHJ1ZSk7XG5cblx0XHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MSW1hZ2VFbGVtZW50LnByb3RvdHlwZSwgXCJjdXJyZW50U3JjXCIsIHtcblx0XHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAod2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJjdXJyZW50U3JjIGNhbid0IGJlIHNldCBvbiBpbWcgZWxlbWVudFwiKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuY29tcGxldGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUN1clNyYyh0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ly9JRSBpcyBuZXZlciBjb21wbGV0ZSBpZiBubyBzcmMvc3Jjc2V0IGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoIXRoaXMuc3JjICYmICF0aGlzLnNyY3NldCkgPyBcIlwiIDogdGhpcy5wZkN1cnJlbnRTcmMgfHwgXCJcIjtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHdpbmRvdy5IVE1MU291cmNlRWxlbWVudCAmJiAhKFwic3Jjc2V0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKSkpIHtcblxuXHRcdFx0XHRcdFsgXCJzcmNzZXRcIiwgXCJzaXplc1wiIF0uZm9yRWFjaChmdW5jdGlvbihpZGwpIHtcblx0XHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSFRNTFNvdXJjZUVsZW1lbnQucHJvdG90eXBlLCBpZGwsIHtcblx0XHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIGlkbCwgdmFsdWUgKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoIGlkbCApIHx8IFwiXCI7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSkoKTtcblx0XHR9XG5cblx0XHRwZk9ic2VydmVyLnN0YXJ0KCk7XG5cdH1cblx0aWYgKCAhaXNSZWFkeSApIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdGlzUmVhZHkgPSB0cnVlO1xuXHRcdH0pO1xuXHR9XG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJ3BpY3R1cmVmaWxsJ1xuaW1wb3J0ICdwaWN0dXJlZmlsbC9kaXN0L3BsdWdpbnMvbXV0YXRpb24vcGYubXV0YXRpb24nIl0sInNvdXJjZVJvb3QiOiIifQ==
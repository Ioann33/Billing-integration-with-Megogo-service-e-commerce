/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./resources/js/custom_sticky.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Removing Preloader
setTimeout(function () {
  var preloader = document.getElementById('preloader');

  if (preloader) {
    preloader.classList.add('preloader-hide');
  }
}, 150);


//document.addEventListener('DOMContentLoaded', function () {
  'use strict'; //Global Variables

  var isPWA = true; // Enables or disables the service worker and PWA

  var isAJAX = true; // AJAX transitions. Requires local server or server

  var pwaName = "Sticky"; //Local Storage Names for PWA

  var pwaRemind = 1; //Days to re-remind to add to home

  var pwaNoCache = false; //Requires server and HTTPS/SSL. Will clear cache with each visit
  //Setting Service Worker Locations scope = folder | location = service worker js location

  var pwaScope = "/";
  var pwaLocation = "/_service-worker.js"; //Place all your custom Javascript functions and plugin calls below this line

  function init_template() {
    //Caching Global Variables
    var i, e, el; //https://www.w3schools.com/js/js_performance.asp
    //Attaching Menu Hider

    var menuHider = document.getElementsByClassName('menu-hider');

    if (!menuHider.length) {
      var hider = document.createElement('div');
      hider.setAttribute("class", "menu-hider");
      document.body.insertAdjacentElement('beforebegin', hider);
    }

    setTimeout(function () {
      if (menuHider[0].classList.contains('menu-active')) {
        menuHider[0].classList.remove('menu-active');
      }
    }, 0); //Demo function for programtic creation of Menu
    //menu('menu-settings', 'show', 250);
    //Activating Menus

    document.querySelectorAll('.menu').forEach(function (el) {
      el.style.display = 'block';
    }); //Validator

    var inputField = document.querySelectorAll('input');

    if (inputField.length) {
      var valid = function valid(el) {
        el.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
        el.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
      };

      var invalid = function invalid(el) {
        el.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
        el.parentElement.querySelectorAll('.invalid')[0].classList.remove('disabled');
      };

      var unfilled = function unfilled(el) {
        el.parentElement.querySelectorAll('em')[0].classList.remove('disabled');
        el.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
        el.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
      };

      var mailValidator = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      var phoneValidator = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
      var nameValidator = /^[ ',-\.A-Za-z\xC0-\xCF\xD1-\xD6\xD8-\xDD\xDF-\xE5\xE7-\xF6\xF8-\xFD\xFF\u0104-\u0107\u010C\u010D\u0116-\u0119\u012E\u012F\u0141-\u0144\u0152\u0160\u0161\u016A\u016B\u0172\u0173\u0178-\u017E\u2202]+$/;
      var passwordValidator = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
      var numberValidator = /^(0|[1-9]\d*)$/;
      var linkValidator = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
      var textValidator = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
      var regularField = document.querySelectorAll('.input-style input:not([type="date"])');
      regularField.forEach(function (el) {
        return el.addEventListener('keyup', function (e) {
          if (!el.value == "") {
            el.parentElement.classList.add('input-style-active');
            el.parentElement.querySelector('em').classList.add('disabled');
          } else {
            el.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
            el.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
            el.parentElement.classList.remove('input-style-active');
            el.parentElement.querySelector('em').classList.remove('disabled');
          }
        });
      });
      var regularTextarea = document.querySelectorAll('.input-style textarea');
      regularTextarea.forEach(function (el) {
        return el.addEventListener('keyup', function (e) {
          if (!el.value == "") {
            el.parentElement.classList.add('input-style-active');
            el.parentElement.querySelector('em').classList.add('disabled');
          } else {
            el.parentElement.classList.remove('input-style-active');
            el.parentElement.querySelector('em').classList.remove('disabled');
          }
        });
      });
      var selectField = document.querySelectorAll('.input-style select');
      selectField.forEach(function (el) {
        return el.addEventListener('change', function (e) {
          if (el.value !== "default") {
            el.parentElement.classList.add('input-style-active');
            el.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
            el.parentElement.querySelectorAll('.invalid, em, span')[0].classList.add('disabled');
          }

          if (el.value == "default") {
            el.parentElement.querySelectorAll('span, .valid, em')[0].classList.add('disabled');
            el.parentElement.querySelectorAll('.invalid')[0].classList.remove('disabled');
            el.parentElement.classList.add('input-style-active');
          }
        });
      });
      var dateField = document.querySelectorAll('.input-style input[type="date"]');
      dateField.forEach(function (el) {
        return el.addEventListener('change', function (e) {
          el.parentElement.classList.add('input-style-active');
          el.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
          el.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
        });
      });
      var validateField = document.querySelectorAll('.validate-field input, .validator-field textarea');

      if (validateField.length) {
        validateField.forEach(function (el) {
          return el.addEventListener('keyup', function (e) {
            var getAttribute = el.getAttribute('type');

            switch (getAttribute) {
              case 'name':
                nameValidator.test(el.value) ? valid(el) : invalid(el);
                break;

              case 'number':
                numberValidator.test(el.value) ? valid(el) : invalid(el);
                break;

              case 'email':
                mailValidator.test(el.value) ? valid(el) : invalid(el);
                break;

              case 'text':
                textValidator.test(el.value) ? valid(el) : invalid(el);
                break;

              case 'url':
                linkValidator.test(el.value) ? valid(el) : invalid(el);
                break;

              case 'tel':
                phoneValidator.test(el.value) ? valid(el) : invalid(el);
                break;

              case 'password':
                passwordValidator.test(el.value) ? valid(el) : invalid(el);
                break;
            }

            if (el.value === "") {
              unfilled(el);
            }
          });
        });
      }
    } //Image Sliders


    var splide = document.getElementsByClassName('splide');

    if (splide.length) {
      var singleSlider = document.querySelectorAll('.single-slider');

      if (singleSlider.length) {
        singleSlider.forEach(function (e) {
          var single = new Splide('#' + e.id, {
            type: 'loop',
            autoplay: true,
            interval: 4000,
            perPage: 1
          }).mount();
          var sliderNext = document.querySelectorAll('.slider-next');
          var sliderPrev = document.querySelectorAll('.slider-prev');
          sliderNext.forEach(function (el) {
            return el.addEventListener('click', function (el) {
              single.go('>');
            });
          });
          sliderPrev.forEach(function (el) {
            return el.addEventListener('click', function (el) {
              single.go('<');
            });
          });
        });
      }

      var doubleSlider = document.querySelectorAll('.double-slider');

      if (doubleSlider.length) {
        doubleSlider.forEach(function (e) {
          var _double = new Splide('#' + e.id, {
            type: 'loop',
            autoplay: true,
            interval: 4000,
            arrows: false,
            perPage: 2
          }).mount();
        });
      }

      var trippleSlider = document.querySelectorAll('.tripple-slider');

      if (trippleSlider.length) {
        trippleSlider.forEach(function (e) {
          var tripple = new Splide('#' + e.id, {
            type: 'loop',
            autoplay: true,
            padding: {
              left: '0px',
              right: '80px'
            },
            interval: 4000,
            arrows: false,
            perPage: 2,
            perMove: 1
          }).mount();
        });
      }
    } //Don't jump on Empty Links


    var emptyHref = document.querySelectorAll('a[href="#"]');
    emptyHref.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        e.preventDefault();
        return false;
      });
    }); //Map Page

    var fullMap = document.querySelectorAll('.map-full');

    if (fullMap.length) {
      var mapActivator = document.querySelectorAll('.show-map');
      var mapDisabler = document.querySelectorAll('.hide-map');
      mapActivator[0].addEventListener('click', function (e) {
        document.getElementsByClassName('card-overlay')[0].classList.add('disabled');
        document.getElementsByClassName('card-center')[0].classList.add('disabled');
        document.getElementsByClassName('hide-map')[0].classList.remove('disabled');
      });
      mapDisabler[0].addEventListener('click', function (e) {
        document.getElementsByClassName('card-overlay')[0].classList.remove('disabled');
        document.getElementsByClassName('card-center')[0].classList.remove('disabled');
        document.getElementsByClassName('hide-map')[0].classList.add('disabled');
      });
    } //To Do List


    var toDoList = document.querySelectorAll('.todo-list a');
    toDoList.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        el.classList.toggle('opacity-50');
        el.querySelector('i:last-child').classList.toggle('far');
        el.querySelector('i:last-child').classList.toggle('fa');
        el.querySelector('i:last-child').classList.toggle('fa-check-square');
        el.querySelector('i:last-child').classList.toggle('fa-square');
        el.querySelector('i:last-child').classList.toggle('color-green-dark');
      });
    }); //Setting Sidebar Widths

    var menus = document.querySelectorAll('.menu');

    if (menus.length) {
      var menuSidebar = document.querySelectorAll('.menu-box-left, .menu-box-right');
      menuSidebar.forEach(function (e) {
        if (e.getAttribute('data-menu-width') === "cover") {
          e.style.width = '100%';
        } else {
          e.style.width = e.getAttribute('data-menu-width') + 'px';
        }
      });
      var menuSheets = document.querySelectorAll('.menu-box-bottom, .menu-box-top, .menu-box-modal');
      menuSheets.forEach(function (e) {
        if (e.getAttribute('data-menu-width') === "cover") {
          e.style.width = '100%';
          e.style.height = '100%';
        } else {
          e.style.width = e.getAttribute('data-menu-width') + 'px';
          e.style.height = e.getAttribute('data-menu-height') + 'px';
        }
      }); //Opening Menus

      var menuOpen = document.querySelectorAll('[data-menu]');
      var wrappers = document.querySelectorAll('.header, #footer-bar, .page-content');
      menuOpen.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          //Close Existing Opened Menus
          var activeMenu = document.querySelectorAll('.menu-active');

          for (var _i = 0; _i < activeMenu.length; _i++) {
            activeMenu[_i].classList.remove('menu-active');
          } //Open Clicked Menu


          var menuData = el.getAttribute('data-menu');
          document.getElementById(menuData).classList.add('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.add('menu-active'); //Check and Apply Effects

          var menu = document.getElementById(menuData);
          var menuEffect = menu.getAttribute('data-menu-effect');
          var menuLeft = menu.classList.contains('menu-box-left');
          var menuRight = menu.classList.contains('menu-box-right');
          var menuTop = menu.classList.contains('menu-box-top');
          var menuBottom = menu.classList.contains('menu-box-bottom');
          var menuWidth = menu.offsetWidth;
          var menuHeight = menu.offsetHeight;

          if (menuEffect === "menu-push") {
            var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');

            if (menuLeft) {
              for (var _i2 = 0; _i2 < wrappers.length; _i2++) {
                wrappers[_i2].style.transform = "translateX(" + menuWidth + "px)";
              }
            }

            if (menuRight) {
              for (var _i3 = 0; _i3 < wrappers.length; _i3++) {
                wrappers[_i3].style.transform = "translateX(-" + menuWidth + "px)";
              }
            }

            if (menuBottom) {
              for (var _i4 = 0; _i4 < wrappers.length; _i4++) {
                wrappers[_i4].style.transform = "translateY(-" + menuHeight + "px)";
              }
            }

            if (menuTop) {
              for (var _i5 = 0; _i5 < wrappers.length; _i5++) {
                wrappers[_i5].style.transform = "translateY(" + menuHeight + "px)";
              }
            }
          }

          if (menuEffect === "menu-parallax") {
            var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');

            if (menuLeft) {
              for (var _i6 = 0; _i6 < wrappers.length; _i6++) {
                wrappers[_i6].style.transform = "translateX(" + menuWidth / 10 + "px)";
              }
            }

            if (menuRight) {
              for (var _i7 = 0; _i7 < wrappers.length; _i7++) {
                wrappers[_i7].style.transform = "translateX(-" + menuWidth / 10 + "px)";
              }
            }

            if (menuBottom) {
              for (var _i8 = 0; _i8 < wrappers.length; _i8++) {
                wrappers[_i8].style.transform = "translateY(-" + menuHeight / 5 + "px)";
              }
            }

            if (menuTop) {
              for (var _i9 = 0; _i9 < wrappers.length; _i9++) {
                wrappers[_i9].style.transform = "translateY(" + menuHeight / 5 + "px)";
              }
            }
          }
        });
      }); //Closing Menus

      var menuClose = document.querySelectorAll('.close-menu, .menu-hider');
      menuClose.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          var activeMenu = document.querySelectorAll('.menu-active');

          for (var _i10 = 0; _i10 < activeMenu.length; _i10++) {
            activeMenu[_i10].classList.remove('menu-active');
          }

          for (var _i11 = 0; _i11 < wrappers.length; _i11++) {
            wrappers[_i11].style.transform = "translateX(-" + 0 + "px)";
          }

          var iframes = document.querySelectorAll('iframe');
          iframes.forEach(function (el) {
            var hrefer = el.getAttribute('src');
            el.setAttribute('newSrc', hrefer);
            el.setAttribute('src', '');
            var newSrc = el.getAttribute('newSrc');
            el.setAttribute('src', newSrc);
          });
        });
      });
    } //Back Button


    var backButton = document.querySelectorAll('[data-back-button]');

    if (backButton.length) {
      backButton.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          e.stopPropagation;
          e.preventDefault;
          window.history.go(-1);
        });
      });
    } //Back to Top


    var backToTop = document.querySelectorAll('.back-to-top-icon, .back-to-top-badge, .back-to-top');

    if (backToTop.length) {
      backToTop.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        });
      });
    } //Check iOS Version and add min-ios15 class if higher or equal to iOS15


    function iOSversion() {
      var d, v;

      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        d = {
          status: true,
          version: parseInt(v[1], 10),
          info: parseInt(v[1], 10) + '.' + parseInt(v[2], 10) + '.' + parseInt(v[3] || 0, 10)
        };
      } else {
        d = {
          status: false,
          version: false,
          info: ''
        };
      }

      return d;
    }

    var iosVer = iOSversion();

    if (iosVer.version > 14) {
      document.querySelectorAll('#page')[0].classList.add('min-ios15');
    } //Card Extender


    var cards = document.getElementsByClassName('card');

    function card_extender() {
      var headerHeight, footerHeight, headerOnPage;
      var headerOnPage = document.querySelectorAll('.header:not(.header-transparent)')[0];
      var footerOnPage = document.querySelectorAll('#footer-bar')[0];
      headerOnPage ? headerHeight = document.querySelectorAll('.header')[0].offsetHeight : headerHeight = 0;
      footerOnPage ? footerHeight = document.querySelectorAll('#footer-bar')[0].offsetHeight : footerHeight = 0;

      for (var _i12 = 0; _i12 < cards.length; _i12++) {
        if (cards[_i12].getAttribute('data-card-height') === "cover") {
          if (window.matchMedia('(display-mode: fullscreen)').matches) {
            var windowHeight = window.outerHeight;
          }

          if (!window.matchMedia('(display-mode: fullscreen)').matches) {
            var windowHeight = window.innerHeight;
          } //Fix for iOS 15 pages with data-height="cover"


          var coverHeight = windowHeight + 'px'; // - Remove this for iOS 14 issues - var coverHeight = windowHeight - headerHeight - footerHeight + 'px';
        }

        if (cards[_i12].hasAttribute('data-card-height')) {
          var getHeight = cards[_i12].getAttribute('data-card-height');

          cards[_i12].style.height = getHeight + 'px';

          if (getHeight === "cover") {
            var totalHeight = getHeight;
            cards[_i12].style.height = coverHeight;
          }
        }
      }
    }

    if (cards.length) {
      card_extender();
      window.addEventListener("resize", card_extender);
    } //Page Highlights


    var highlightData = document.querySelectorAll('[data-change-highlight]');
    highlightData.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        var highlight = el.getAttribute('data-change-highlight');
        var pageHighlight = document.querySelectorAll('.page-highlight');

        if (pageHighlight.length) {
          pageHighlight.forEach(function (e) {
            e.remove();
          });
        }

        var loadHighlight = document.createElement("link");
        loadHighlight.rel = "stylesheet";
        loadHighlight.className = "page-highlight";
        loadHighlight.type = "text/css";
        loadHighlight.href = 'styles/highlights/highlight_' + highlight + '.css';
        document.getElementsByTagName("head")[0].appendChild(loadHighlight);
        document.body.setAttribute('data-highlight', 'highlight-' + highlight);
        localStorage.setItem(pwaName + '-Highlight', highlight);
      });
    });
    var rememberHighlight = localStorage.getItem(pwaName + '-Highlight');

    if (rememberHighlight) {
      document.body.setAttribute('data-highlight', rememberHighlight);
      var loadHighlight = document.createElement("link");
      loadHighlight.rel = "stylesheet";
      loadHighlight.className = "page-highlight";
      loadHighlight.type = "text/css";
      loadHighlight.href = 'styles/highlights/highlight_' + rememberHighlight + '.css';

      if (!document.querySelectorAll('.page-highlight').length) {
        document.getElementsByTagName("head")[0].appendChild(loadHighlight);
        document.body.setAttribute('data-highlight', 'highlight-' + rememberHighlight);
      }
    } else {
      var bodyHighlight = document.body.getAttribute('data-highlight');
      var defaultHighlight = bodyHighlight.split("highlight-");
      document.body.setAttribute('data-highlight', defaultHighlight[1]);
      var loadHighlight = document.createElement("link");
      loadHighlight.rel = "stylesheet";
      loadHighlight.className = "page-highlight";
      loadHighlight.type = "text/css";
      loadHighlight.href = 'styles/highlights/highlight_' + defaultHighlight[1] + '.css';

      if (!document.querySelectorAll('.page-highlight').length) {
        document.getElementsByTagName("head")[0].appendChild(loadHighlight);
        document.body.setAttribute('data-highlight', 'highlight-' + defaultHighlight[1]);
        localStorage.setItem(pwaName + '-Highlight', defaultHighlight[1]);
      }
    } //Background Gradient Color


    var gradientData = document.querySelectorAll('[data-change-background]');
    gradientData.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        var gradient = el.getAttribute('data-change-background');
        document.body.setAttribute('data-gradient', 'body-' + gradient + '');
        localStorage.setItem(pwaName + '-Gradient', gradient);
      });
    }); //Set Background and Highlight

    var pageBackground = localStorage.getItem(pwaName + '-Gradient');

    if (pageBackground) {
      document.body.setAttribute('data-gradient', 'body-' + pageBackground + '');
    } //Dark Mode


    var toggleDark = document.querySelectorAll('[data-toggle-theme]');

    function activateDarkMode() {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light', 'detect-theme');

      for (var _i13 = 0; _i13 < toggleDark.length; _i13++) {
        toggleDark[_i13].checked = "checked";
      }

      ;
      localStorage.setItem(pwaName + '-Theme', 'dark-mode');
    }

    function activateLightMode() {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark', 'detect-theme');

      for (var _i14 = 0; _i14 < toggleDark.length; _i14++) {
        toggleDark[_i14].checked = false;
      }

      ;
      localStorage.setItem(pwaName + '-Theme', 'light-mode');
    }

    function removeTransitions() {
      var falseTransitions = document.querySelectorAll('.btn, .header, #footer-bar, .menu-box, .menu-active');

      for (var _i15 = 0; _i15 < falseTransitions.length; _i15++) {
        falseTransitions[_i15].style.transition = "all 0s ease";
      }
    }

    function addTransitions() {
      var trueTransitions = document.querySelectorAll('.btn, .header, #footer-bar, .menu-box, .menu-active');

      for (var _i16 = 0; _i16 < trueTransitions.length; _i16++) {
        trueTransitions[_i16].style.transition = "";
      }
    }

    function setColorScheme() {
      var isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
      var isNoPreference = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
      window.matchMedia("(prefers-color-scheme: dark)").addListener(function (e) {
        return e.matches && activateDarkMode();
      });
      window.matchMedia("(prefers-color-scheme: light)").addListener(function (e) {
        return e.matches && activateLightMode();
      });
      if (isDarkMode) activateDarkMode();
      if (isLightMode) activateLightMode();
    } //Activating Dark Mode


    var darkModeSwitch = document.querySelectorAll('[data-toggle-theme]');
    darkModeSwitch.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        if (document.body.className == "theme-light") {
          removeTransitions();
          activateDarkMode();
        } else if (document.body.className == "theme-dark") {
          removeTransitions();
          activateLightMode();
        }

        setTimeout(function () {
          addTransitions();
        }, 350);
      });
    }); //Set Color Based on Remembered Preference.

    if (localStorage.getItem(pwaName + '-Theme') == "dark-mode") {
      for (var _i17 = 0; _i17 < toggleDark.length; _i17++) {
        toggleDark[_i17].checked = "checked";
      }

      ;
      document.body.className = 'theme-dark';
    }

    if (localStorage.getItem(pwaName + '-Theme') == "light-mode") {
      document.body.className = 'theme-light';
    }

    if (document.body.className == "detect-theme") {
      setColorScheme();
    } //Detect Dark/Light Mode


    var darkModeDetect = document.querySelectorAll('.detect-dark-mode');
    darkModeDetect.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        document.body.classList.remove('theme-light', 'theme-dark');
        document.body.classList.add('detect-theme');
        setTimeout(function () {
          setColorScheme();
        }, 50);
      });
    }); //Accordion Rotate

    var accordionBtn = document.querySelectorAll('.accordion-btn');

    if (accordionBtn.length) {
      accordionBtn.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          el.querySelector('i:last-child').classList.toggle('fa-rotate-180');
        });
      });
    } //File Upload


    var inputArray = document.getElementsByClassName('upload-file');

    if (inputArray.length) {
      var prepareUpload = function prepareUpload(event) {
        if (this.files && this.files[0]) {
          var img = document.getElementById('image-data');
          img.src = URL.createObjectURL(this.files[0]);
        }

        var files = event.target.files;
        var fileName = files[0].name;
        document.getElementsByClassName('file-data')[0].classList.add('disabled');
        document.getElementsByClassName('upload-file-data')[0].classList.remove('disabled');
        document.getElementsByClassName('upload-file-name')[0].innerHTML = files[0].name;
        document.getElementsByClassName('upload-file-modified')[0].innerHTML = files[0].lastModifiedDate;
        document.getElementsByClassName('upload-file-size')[0].innerHTML = files[0].size / 1000 + 'kb';
        document.getElementsByClassName('upload-file-type')[0].innerHTML = files[0].type;
      };

      inputArray[0].addEventListener('change', prepareUpload, false);
    }

    var locationBut = document.querySelectorAll('.get-location');

    if (locationBut.length) {
      var geoLocate = function geoLocate() {
        var locationCoordinates = document.querySelector('.location-coordinates');

        function success(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          locationCoordinates.innerHTML = '<strong>Longitude:</strong> ' + longitude + '<br><strong>Latitude:</strong> ' + latitude;
          var mapL1 = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&center=';
          var mapL2 = latitude + ',';
          var mapL3 = longitude;
          var mapL4 = '&zoom=16&maptype=satellite';
          var mapL5 = '';
          var mapLinkEmbed = mapL1 + mapL2 + mapL3 + mapL4;
          var mapLinkAddress = mapL1 + mapL2 + mapL3 + mapL5;
          var mapLinkNewAPI = 'https://www.google.com/maps/@' + latitude + ',' + longitude + ',15z';
          document.getElementsByClassName('location-map')[0].setAttribute('src', mapLinkEmbed);
          document.getElementsByClassName('location-button')[0].setAttribute('href', mapLinkNewAPI);
          document.getElementsByClassName('location-button')[0].classList.remove('disabled');
        }

        function error() {
          locationCoordinates.textContent = 'Unable to retrieve your location';
        }

        if (!navigator.geolocation) {
          locationCoordinates.textContent = 'Geolocation is not supported by your browser';
        } else {
          locationCoordinates.textContent = 'Locating';
          navigator.geolocation.getCurrentPosition(success, error);
        }
      };

      var locationSupport = document.getElementsByClassName('location-support')[0];

      if (typeof locationSupport != 'undefined' && locationSupport != null) {
        //Geo Location
        if ("geolocation" in navigator) {
          locationSupport.innerHTML = 'Your browser and device <strong class="color-green2-dark">support</strong> Geolocation.';
        } else {
          locationSupport.innerHTML = 'Your browser and device <strong class="color-red2-dark">support</strong> Geolocation.';
        }
      }

      var getLocation = document.getElementsByClassName('get-location')[0];

      if (typeof getLocation != 'undefined' && getLocation != null) {
        getLocation.addEventListener('click', function () {
          this.classList.add('disabled');
          geoLocate();
        });
      }
    } //Card Effects


    var cardScale = document.querySelectorAll('.card-scale');

    if (cardScale.length) {
      cardScale.forEach(function (el) {
        return el.addEventListener('mouseenter', function (event) {
          el.querySelectorAll('img')[0].classList.add('card-scale-image');
        });
      });
      cardScale.forEach(function (el) {
        return el.addEventListener('mouseleave', function (event) {
          el.querySelectorAll('img')[0].classList.remove('card-scale-image');
        });
      });
    }

    var cardHide = document.querySelectorAll('.card-hide');

    if (cardHide.length) {
      cardHide.forEach(function (el) {
        return el.addEventListener('mouseenter', function (event) {
          el.querySelectorAll('.card-center, .card-bottom, .card-top, .card-overlay')[0].classList.add('card-hide-image');
        });
      });
      cardHide.forEach(function (el) {
        return el.addEventListener('mouseleave', function (event) {
          el.querySelectorAll('.card-center, .card-bottom, .card-top, .card-overlay')[0].classList.remove('card-hide-image');
        });
      });
    }

    var cardRotate = document.querySelectorAll('.card-rotate');

    if (cardRotate.length) {
      cardRotate.forEach(function (el) {
        return el.addEventListener('mouseenter', function (event) {
          el.querySelectorAll('img')[0].classList.add('card-rotate-image');
        });
      });
      cardRotate.forEach(function (el) {
        return el.addEventListener('mouseleave', function (event) {
          el.querySelectorAll('img')[0].classList.remove('card-rotate-image');
        });
      });
    }

    var cardGray = document.querySelectorAll('.card-grayscale');

    if (cardGray.length) {
      cardGray.forEach(function (el) {
        return el.addEventListener('mouseenter', function (event) {
          el.querySelectorAll('img')[0].classList.add('card-grayscale-image');
        });
      });
      cardGray.forEach(function (el) {
        return el.addEventListener('mouseleave', function (event) {
          el.querySelectorAll('img')[0].classList.remove('card-grayscale-image');
        });
      });
    }

    var cardBlur = document.querySelectorAll('.card-blur');

    if (cardBlur.length) {
      cardBlur.forEach(function (el) {
        return el.addEventListener('mouseenter', function (event) {
          el.querySelectorAll('img')[0].classList.add('card-blur-image');
        });
      });
      cardBlur.forEach(function (el) {
        return el.addEventListener('mouseleave', function (event) {
          el.querySelectorAll('img')[0].classList.remove('card-blur-image');
        });
      });
    } //Adding Local Storage for Visited Links


    var checkVisited = document.querySelectorAll('.check-visited');

    if (checkVisited.length) {
      var check_visited_links = function check_visited_links() {
        var visited_links = JSON.parse(localStorage.getItem(pwaName + '_Visited_Links')) || [];
        var links = document.querySelectorAll('.check-visited a');

        for (var _i18 = 0; _i18 < links.length; _i18++) {
          var that = links[_i18];
          that.addEventListener('click', function (e) {
            var clicked_url = this.href;

            if (visited_links.indexOf(clicked_url) == -1) {
              visited_links.push(clicked_url);
              localStorage.setItem(pwaName + '_Visited_Links', JSON.stringify(visited_links));
            }
          });

          if (visited_links.indexOf(that.href) !== -1) {
            that.className += ' visited-link';
          }
        }
      };

      check_visited_links();
    } //Scroll Ads


    var scrollItems = document.querySelectorAll('.scroll-ad, .header-auto-show');

    if (scrollItems.length) {
      var scrollAd = document.querySelectorAll('.scroll-ad');
      var scrollHeader = document.querySelectorAll('.header-auto-show');
      window.addEventListener('scroll', function () {
        if (document.querySelectorAll('.scroll-ad, .header-auto-show').length) {
          var showScrollAd = function showScrollAd() {
            scrollAd[0].classList.add('scroll-ad-visible');
          };

          var hideScrollAd = function hideScrollAd() {
            scrollAd[0].classList.remove('scroll-ad-visible');
          };

          var showHeader = function showHeader() {
            scrollHeader[0].classList.add('header-active');
          };

          var hideHeader = function hideHeader() {
            scrollHeader[0].classList.remove('header-active');
          };

          var window_height = window.outerWidth;
          var total_scroll_height = document.documentElement.scrollTop;
          var inside_header = total_scroll_height <= 150;
          var passed_header = total_scroll_height >= 150;
          var inside_footer = window_height - total_scroll_height + 1000 <= 150;

          if (scrollAd.length) {
            inside_header ? hideScrollAd() : null;
            passed_header ? showScrollAd() : null;
            inside_footer ? hideScrollAd() : null;
          }

          if (scrollHeader.length) {
            inside_header ? hideHeader() : null;
            passed_header ? showHeader() : null;
          }
        }
      });
    } //Stepper


    var stepperAdd = document.querySelectorAll('.stepper-add');
    var stepperSub = document.querySelectorAll('.stepper-sub');

    if (stepperAdd.length) {
      stepperAdd.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          var currentValue = el.parentElement.querySelector('input').value;
          el.parentElement.querySelector('input').value = +currentValue + 1;
        });
      });
      stepperSub.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          var currentValue = el.parentElement.querySelector('input').value;
          el.parentElement.querySelector('input').value = +currentValue - 1;
        });
      });
    } //Link List Toggle


    var linkListToggle = document.querySelectorAll('[data-trigger-switch]:not([data-toggle-theme])');

    if (linkListToggle.length) {
      linkListToggle.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          var switchData = el.getAttribute('data-trigger-switch');
          var getCheck = document.getElementById(switchData);
          getCheck.checked ? getCheck.checked = false : getCheck.checked = true;
        });
      });
    } //Classic Toggle


    var classicToggle = document.querySelectorAll('.classic-toggle');

    if (classicToggle.length) {
      classicToggle.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          el.querySelector('i:last-child').classList.toggle('fa-rotate-180');
          el.querySelector('i:last-child').style.transition = "all 250ms ease";
        });
      });
    } //Toasts


    var toastTrigger = document.querySelectorAll('[data-toast]');

    if (toastTrigger.length) {
      toastTrigger.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          var toastData = el.getAttribute('data-toast');
          var notificationToast = document.getElementById(toastData);
          var notificationToast = new bootstrap.Toast(notificationToast);
          notificationToast.show();
        });
      });
    } //Tooltips

    /*Deprecated feature for Mobiles. Requires popper.min.js v2 to work
    var tooltips = document.querySelectorAll('[data-bs-tooltip]');
    if(tooltips.length){
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }
    */
    //Dropdown


    var dropdownElementList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));

    if (dropdownElementList.length) {
      var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
      });
    }

    var workingHours = document.querySelectorAll('.show-business-opened, .show-business-closed, .working-hours');

    if (workingHours.length) {
      //Working Hours
      var d = new Date();
      var n = d.getDay();
      var now = d.getHours() + "." + d.getMinutes();
      var weekdays = [["Sunday"], ["Monday", 9.00, 17.00], ["Tuesday", 9.00, 17.00], ["Wednesday", 9.00, 17.00], ["Thursday", 9.00, 17.00], ["Friday", 9.00, 17.00], ["Saturday", 9.00, 13.00] // we are closed, sorry!
      ];
      var day = weekdays[n];
      var openClass = document.querySelectorAll('.show-business-opened');
      var closeClass = document.querySelectorAll('.show-business-closed');

      if (now > day[1] && now < day[2] || now > day[3] && now < day[4]) {
        openClass.forEach(function (e) {
          e.classList.remove('disabled');
        });
        closeClass.forEach(function (e) {
          e.classList.add('disabled');
        });
      } else {
        openClass.forEach(function (e) {
          e.classList.add('disabled');
        });
        closeClass.forEach(function (e) {
          e.classList.remove('disabled');
        });
      }

      var workingHours = document.querySelectorAll('.working-hours[data-day]');
      workingHours.forEach(function (entry) {
        var matchDay = entry.getAttribute('data-day');

        if (matchDay === day[0]) {
          var matchData = '[data-day="' + day[0] + '"]';

          if (now > day[1] && now < day[2] || now > day[3] && now < day[4]) {
            document.querySelectorAll(matchData)[0].classList.add('bg-green-dark');
            document.querySelectorAll(matchData + ' p').forEach(function (whiteText) {
              whiteText.classList.add('color-white');
            });
          } else {
            document.querySelectorAll(matchData)[0].classList.add('bg-red-dark');
            document.querySelectorAll(matchData + ' p').forEach(function (whiteText) {
              whiteText.classList.add('color-white');
            });
          }
        }
      });
    } //Vibrate API


    var vibrateButton = document.querySelectorAll('[data-vibrate]');

    if (vibrateButton.length) {
      var startVibrating = document.getElementsByClassName('start-vibrating')[0];
      var stopVibrating = document.getElementsByClassName('stop-vibrating')[0];
      startVibrating.addEventListener('click', function () {
        var vibrateTime = document.getElementsByClassName('vibrate-demo')[0].value;
        window.navigator.vibrate(vibrateTime);
      });
      stopVibrating.addEventListener('click', function () {
        window.navigator.vibrate(0);
      });
      vibrateButton.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          var vibrateTime = el.getAttribute('data-vibrate');
          window.navigator.vibrate(vibrateTime);
        });
      });
    } //Time Ads


    var timedAd = document.querySelectorAll('[data-timed-ad]');

    if (timedAd.length) {
      timedAd.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          var timedAdTime = el.getAttribute('data-timed-ad');
          var timedAdData = el.getAttribute('data-menu');
          var timedAdTimer = timedAdTime;
          var timerAdFunction = setInterval(function () {
            if (timedAdTimer <= 1) {
              clearInterval(timerAdFunction);
              document.getElementById(timedAdData).querySelectorAll('.fa-times')[0].classList.remove('disabled');
              document.getElementById(timedAdData).querySelectorAll('.close-menu')[0].classList.remove('no-click');
              document.getElementById(timedAdData).querySelectorAll('span')[0].style.display = "none";
            } else {//console.log(timedAdTimer);
            }

            document.getElementById(timedAdData).querySelectorAll('span')[0].innerHTML = timedAdTimer -= 1;
          }, 1000);
        });
      });
    } //Auto Show Ads


    var autoAd = document.querySelectorAll('[data-auto-show-ad]');

    if (autoAd.length) {
      var autoAdTime = autoAd[0].getAttribute('data-auto-show-ad');
      var timerAdFunction = setInterval(function () {
        if (autoAdTime <= 1) {
          clearInterval(timerAdFunction);
          var autoAdId = autoAd[0].getAttribute('data-menu');
          document.getElementById(autoAdId).classList.add('menu-active');
          var autoAdCloseTime = autoAd[0].getAttribute('data-timed-ad');
          var downloadTimer = setInterval(function () {
            if (autoAdCloseTime <= 0) {
              clearInterval(downloadTimer);
              document.getElementById(autoAdId).querySelectorAll('.fa-times')[0].classList.remove('disabled');
              document.getElementById(autoAdId).querySelectorAll('.close-menu')[0].classList.remove('no-click');
              document.getElementById(autoAdId).querySelectorAll('span')[0].style.display = "none";
            }

            document.getElementById(autoAdId).querySelectorAll('span')[0].innerHTML = autoAdCloseTime -= 1;
          }, 1000);
        }

        autoAdTime -= 1;
      }, 1000);
    } //Reading Time


    var readingTextDiv = document.querySelectorAll('.reading-progress-text');

    if (readingTextDiv.length) {
      var readingWords = readingTextDiv[0].innerHTML.split(' ').length;
      var readingMinutes = Math.floor(readingWords / 250);
      var readingSeconds = readingWords % 60;
      document.getElementsByClassName('reading-progress-words')[0].innerHTML = readingWords;
      document.getElementsByClassName('reading-progress-time')[0].innerHTML = readingMinutes + ':' + readingSeconds;
    } //Text Resizer


    var textSizeChanger = document.querySelectorAll('.text-size-changer');

    if (textSizeChanger.length) {
      var textSizeIncrease = document.querySelectorAll('.text-size-increase');
      var textSizeDecrease = document.querySelectorAll('.text-size-decrease');
      var textSizeDefault = document.querySelectorAll('.text-size-default');
      textSizeIncrease[0].addEventListener('click', function () {
        textSizeChanger[0].querySelectorAll('*').forEach(function (element) {
          var getFontSize = window.getComputedStyle(element).fontSize.split("px", 2)[0];
          element.style.fontSize = +getFontSize + 1 + 'px';
        });
      });
      textSizeDecrease[0].addEventListener('click', function () {
        textSizeChanger[0].querySelectorAll('*').forEach(function (element) {
          var getFontSize = window.getComputedStyle(element).fontSize.split("px", 2)[0];
          element.style.fontSize = +getFontSize - 1 + 'px';
        });
      });
      textSizeDefault[0].addEventListener('click', function () {
        textSizeChanger[0].querySelectorAll('*').forEach(function (element) {
          var getFontSize = window.getComputedStyle(element).fontSize.split("px", 2)[0];
          element.style.fontSize = "";
        });
      });
    } //QR Generator


    var qr_image = document.querySelectorAll('.qr-image');

    if (qr_image.length) {
      var qr_this = window.location.href;
      var qr_auto = document.getElementsByClassName('generate-qr-auto')[0];
      var qr_api_address = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';

      if (qr_auto) {
        qr_auto.setAttribute('src', qr_api_address + qr_this);
      }

      var qr_btn = document.getElementsByClassName('generate-qr-button')[0];

      if (qr_btn) {
        qr_btn.addEventListener('click', function () {
          var get_qr_url = document.getElementsByClassName('qr-url')[0].value;
          var qr_api_address = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
          var qr_img = '<img class="mx-auto polaroid-effect shadow-l mt-4 delete-qr" width="200" src="' + qr_api_address + get_qr_url + '" alt="img"><p class="font-11 text-center mb-0">' + get_qr_url + '</p>';
          document.getElementsByClassName('generate-qr-result')[0].innerHTML = qr_img;
          qr_btn.innerHTML = "Generate New Button";
        });
      }
    }

    if (window.location.protocol === "file:") {
      var linksLocal = document.querySelectorAll('a');
      linksLocal.forEach(function (el) {
        return el.addEventListener('mouseover', function (event) {// console.log("You are seeing these errors because your file is on your local computer. For real life simulations please use a Live Server or a Local Server such as AMPPS or WAMPP or simulate a  Live Preview using a Code Editor like http://brackets.io (it's 100% free) - PWA functions and AJAX Page Transitions will only work in these scenarios.");
        });
      });
    } //Search Page


    var searchField = document.querySelectorAll('[data-search]');

    if (searchField.length) {
      var searchFunction = function searchFunction() {
        var searchStr = searchField[0].value;
        var searchVal = searchStr.toLowerCase();

        if (searchVal != '') {
          clearSearch.classList.remove('disabled');
          searchResults[0].classList.remove('disabled-search-list');
          var searchFilterItem = document.querySelectorAll('[data-filter-item]');

          for (var _i20 = 0; _i20 < searchFilterItem.length; _i20++) {
            var searchData = searchFilterItem[_i20].getAttribute('data-filter-name');

            if (searchData.includes(searchVal)) {
              searchFilterItem[_i20].classList.remove('disabled');

              if (searchTrending.length) {
                searchTrending[0].classList.add('disabled');
              }
            } else {
              searchFilterItem[_i20].classList.add('disabled');

              if (searchTrending.length) {
                searchTrending[0].classList.remove('disabled');
              }
            }

            var disabledResults = document.querySelectorAll(".search-results div")[0].getElementsByClassName("disabled").length;

            if (disabledResults === searchTotal) {
              searchNoResults[0].classList.remove('disabled');

              if (searchTrending.length) {
                searchTrending[0].classList.add('disabled');
              }
            } else {
              searchNoResults[0].classList.add('disabled');

              if (searchTrending.length) {
                searchTrending[0].classList.add('disabled');
              }
            }
          }
        }

        if (searchVal === '') {
          clearSearch.classList.add('disabled');
          searchResults[0].classList.add('disabled-search-list');
          searchNoResults[0].classList.add('disabled');

          if (searchTrending.length) {
            searchTrending[0].classList.remove('disabled');
          }
        }
      };

      var searchResults = document.querySelectorAll('.search-results');
      var searchNoResults = document.querySelectorAll('.search-no-results');
      var searchTotal = document.querySelectorAll(".search-results div")[0].childElementCount;
      var searchTrending = document.querySelectorAll('.search-trending');
      var clearSearch = document.querySelectorAll('.clear-search')[0];
      clearSearch.addEventListener('click', function () {
        searchField[0].value = "";
        clearSearch.classList.add('disabled');
        searchNoResults[0].classList.add('disabled');
        searchResults[0].classList.add('disabled-search-list');

        if (searchTrending[0]) {
          searchTrending[0].classList.remove('disabled');
        }

        var searchFilterItem = document.querySelectorAll('[data-filter-item]');

        for (var _i19 = 0; _i19 < searchFilterItem.length; _i19++) {
          searchFilterItem[_i19].classList.add('disabled');
        }
      });
      ;
      searchField[0].addEventListener('keyup', function () {
        searchFunction();
      });
      searchField[0].addEventListener('click', function () {
        searchFunction();
      });
      var searchClick = document.querySelectorAll('.search-trending a');
      searchClick.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          var trendingResult = el.querySelectorAll('span')[0].textContent.toLowerCase();
          searchField[0].value = trendingResult;
          searchField[0].click();
        });
      });
    } //Search Header


    var searchHeader = document.querySelectorAll('[data-toggle-search]');

    if (searchHeader) {
      searchHeader.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          document.querySelectorAll('.header')[0].classList.toggle('header-search-active');
        });
      });
    }

    ; //Sharing

    var shareTitle = document.title;
    var shareText = document.title;
    var shareLink = window.location.href;

    if (document.querySelectorAll('.shareToFacebook, .shareToTwitter, .shareToLinkedIn')[0]) {
      document.querySelectorAll('.shareToFacebook, .shareToTwitter, .shareToLinkedIn, .shareToWhatsApp, .shareToMail').forEach(function (x) {
        x.setAttribute('target', '_blank');
      });
      document.querySelectorAll('.shareToFacebook').forEach(function (x) {
        return x.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareLink);
      });
      document.querySelectorAll('.shareToTwitter').forEach(function (x) {
        return x.setAttribute("href", "http://twitter.com/share?text=" + shareTitle + "%20" + shareLink);
      });
      document.querySelectorAll('.shareToPinterest').forEach(function (x) {
        return x.setAttribute("href", "https://pinterest.com/pin/create/button/?url=" + shareLink);
      });
      document.querySelectorAll('.shareToWhatsApp').forEach(function (x) {
        return x.setAttribute("href", "whatsapp://send?text=" + shareLink);
      });
      document.querySelectorAll('.shareToMail').forEach(function (x) {
        return x.setAttribute("href", "mailto:?body=" + shareLink);
      });
      document.querySelectorAll('.shareToLinkedIn').forEach(function (x) {
        return x.setAttribute("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + shareLink + "&title=" + shareTitle + "&summary=&source=");
      });
    } //Menu Share Web API


    if (navigator.canShare) {
      var shareData = {
        title: shareTitle,
        text: shareText,
        url: shareLink
      };
      var shareMenu = document.querySelectorAll('[data-menu="menu-share"], [data-show-share]');

      if (shareMenu) {
        shareMenu.forEach(function (el) {
          el.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    menu('menu-share', 'hide', 0);
                    _context.prev = 1;
                    _context.next = 4;
                    return navigator.share(shareData);

                  case 4:
                    _context.next = 8;
                    break;

                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](1);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[1, 6]]);
          })));
        });
      }
    } //Contact Form


    var contactForm = document.querySelectorAll('.contact-form');

    if (contactForm.length) {
      var form = document.getElementById('contactForm');

      form.onsubmit = function (e) {
        // Stop the regular form submission
        e.preventDefault(); //Validate Fields

        var nameField = document.getElementById('contactNameField');
        var mailField = document.getElementById('contactEmailField');
        var textField = document.getElementById('contactMessageTextarea');
        var validateMail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if (nameField.value === '') {
          form.setAttribute('data-form', 'invalid');
          nameField.classList.add('border-red-dark');
          document.getElementById('validator-name').classList.remove('disabled');
        } else {
          form.setAttribute('data-form', 'valid');
          document.getElementById('validator-name').classList.add('disabled');
          nameField.classList.remove('border-red-dark');
        }

        if (mailField.value === '') {
          form.setAttribute('data-form', 'invalid');
          mailField.classList.add('border-red-dark');
          document.getElementById('validator-mail1').classList.remove('disabled');
        } else {
          document.getElementById('validator-mail1').classList.add('disabled');

          if (!validateMail.test(mailField.value)) {
            form.setAttribute('data-form', 'invalid');
            mailField.classList.add('border-red-dark');
            document.getElementById('validator-mail2').classList.remove('disabled');
          } else {
            form.setAttribute('data-form', 'valid');
            document.getElementById('validator-mail2').classList.add('disabled');
            mailField.classList.remove('border-red-dark');
          }
        }

        if (textField.value === '') {
          form.setAttribute('data-form', 'invalid');
          textField.classList.add('border-red-dark');
          document.getElementById('validator-text').classList.remove('disabled');
        } else {
          form.setAttribute('data-form', 'valid');
          document.getElementById('validator-text').classList.add('disabled');
          textField.classList.remove('border-red-dark');
        }

        if (form.getAttribute('data-form') === 'valid') {
          document.querySelectorAll('.form-sent')[0].classList.remove('disabled');
          document.querySelectorAll('.contact-form')[0].classList.add('disabled'); // Collect the form data while iterating over the inputs

          var data = {};

          for (var _i21 = 0, ii = form.length; _i21 < ii; ++_i21) {
            var input = form[_i21];

            if (input.name) {
              data[input.name] = input.value;
            }
          } // Construct an HTTP request


          var xhr = new XMLHttpRequest();
          xhr.open(form.method, form.action, true);
          xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
          xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); // Send the collected data as JSON

          xhr.send(JSON.stringify(data)); // Callback function

          xhr.onloadend = function (response) {
            if (response.target.status === 200) {
              console.log('Form Submitted');
            }
          };
        }
      };
    } //Collapse Flip Icon


    var collapseBtn = document.querySelectorAll('[data-bs-toggle="collapse"]:not(.no-effect)');

    if (collapseBtn.length) {
      collapseBtn.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          if (el.querySelectorAll('i').length) {
            el.querySelector('i').classList.toggle('fa-rotate-180');
          }

          ;
        });
      });
    } //Tabs


    var tabTrigger = document.querySelectorAll('.tab-controls a');

    if (tabTrigger.length) {
      tabTrigger.forEach(function (e) {
        if (e.hasAttribute('data-active')) {
          var highlightColor = e.parentNode.getAttribute('data-highlight');
          e.classList.add(highlightColor);
          e.classList.add('no-click');
        }
      });
      tabTrigger.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          var highlightColor = el.parentNode.getAttribute('data-highlight');
          var tabParentGroup = el.parentNode.querySelectorAll('a');
          tabParentGroup.forEach(function (e) {
            e.classList.remove(highlightColor);
            e.classList.remove('no-click');
          });
          el.classList.add(highlightColor);
          el.classList.add('no-click');
        });
      });
    } //Extending Menu Functions


    function menu(menuName, menuFunction, menuTimeout) {
      setTimeout(function () {
        if (menuFunction === "show") {
          return document.getElementById(menuName).classList.add('menu-active'), document.querySelectorAll('.menu-hider')[0].classList.add('menu-active');
        } else {
          return document.getElementById(menuName).classList.remove('menu-active'), document.querySelectorAll('.menu-hider')[0].classList.remove('menu-active');
        }
      }, menuTimeout);
    }

    var autoActivate = document.querySelectorAll('[data-auto-activate]');

    if (autoActivate.length) {
      setTimeout(function () {
        autoActivate[0].classList.add('menu-active');
        menuHider[0].classList.add('menu-active');
      }, 60);
    } //Copyright Year


    var copyrightYear = document.getElementById('copyright-year');

    if (copyrightYear) {
      var dteNow = new Date();
      var intYear = dteNow.getFullYear();
      copyrightYear.textContent = intYear;
    } //Check Age


    var checkAge = document.querySelectorAll('.check-age');

    if (checkAge.length) {
      checkAge[0].addEventListener('click', function () {
        var dateBirthday = document.querySelectorAll("#date-birth-day")[0].value;
        var dateBirthMonth = document.querySelectorAll("#date-birth-month")[0].value;
        var dateBirthYear = document.querySelectorAll("#date-birth-year")[0].value;
        var age = 18;
        var mydate = new Date();
        mydate.setFullYear(dateBirthYear, dateBirthMonth - 1, dateBirthday);
        var currdate = new Date();
        var setDate = new Date();
        setDate.setFullYear(mydate.getFullYear() + age, dateBirthMonth - 1, dateBirthday);
        var menuAge = document.querySelectorAll('#menu-age');
        var menuAgeFail = document.querySelectorAll('#menu-age-fail');
        var menuAgeOkay = document.querySelectorAll('#menu-age-okay');
        console.log(currdate);
        console.log(setDate);
        console.log(dateBirthMonth);

        if (currdate - setDate > 0) {
          console.log("above 18");
          menuAge[0].classList.remove('menu-active');
          menuAgeOkay[0].classList.add('menu-active');
        } else {
          menuAge[0].classList.remove('menu-active');
          menuAgeFail[0].classList.add('menu-active');
        }

        return true;
      });
    } //Creating Offline Alert Messages


    var addOfflineClasses = document.querySelectorAll('.offline-message');

    if (!addOfflineClasses.length) {
      var offlineAlert = document.createElement('p');
      var onlineAlert = document.createElement('p');
      offlineAlert.className = 'offline-message bg-red-dark color-white';
      offlineAlert.textContent = 'No internet connection detected';
      onlineAlert.className = 'online-message bg-green-dark color-white';
      onlineAlert.textContent = 'You are back online';
      document.getElementsByTagName('body')[0].appendChild(offlineAlert);
      document.getElementsByTagName('body')[0].appendChild(onlineAlert);
    } //Online / Offline Settings
    //Activating and Deactivating Links Based on Online / Offline State


    function offlinePage() {
      //Enable the code below to disable offline mode
      //var anchorsDisabled = document.querySelectorAll('a');
      //anchorsDisabled.forEach(function(e){
      //    var hrefs = e.getAttribute('href');
      //    if(hrefs.match(/.html/)){e.classList.add('show-offline'); e.setAttribute('data-link',hrefs); e.setAttribute('href','#');}
      //});
      var showOffline = document.querySelectorAll('.show-offline');
      showOffline.forEach(function (el) {
        return el.addEventListener('click', function (event) {
          document.getElementsByClassName('offline-message')[0].classList.add('offline-message-active');
          setTimeout(function () {
            document.getElementsByClassName('offline-message')[0].classList.remove('offline-message-active');
          }, 1500);
        });
      });
    }

    function onlinePage() {
      var anchorsEnabled = document.querySelectorAll('[data-link]');
      anchorsEnabled.forEach(function (e) {
        var hrefs = e.getAttribute('data-link');

        if (hrefs.match(/.html/)) {
          e.setAttribute('href', hrefs);
          e.removeAttribute('data-link', '');
        }
      });
    } //Defining Offline/Online Variables


    var offlineMessage = document.getElementsByClassName('offline-message')[0];
    var onlineMessage = document.getElementsByClassName('online-message')[0]; //Online / Offine Status

    function isOnline() {
      onlinePage();
      onlineMessage.classList.add('online-message-active');
      setTimeout(function () {
        onlineMessage.classList.remove('online-message-active');
      }, 2000);
      console.info('Connection: Online');
    }

    function isOffline() {
      offlinePage();
      offlineMessage.classList.add('offline-message-active');
      setTimeout(function () {
        offlineMessage.classList.remove('offline-message-active');
      }, 2000);
      console.info('Connection: Offline');
    }

    var simulateOffline = document.querySelectorAll('.simulate-offline');
    var simulateOnline = document.querySelectorAll('.simulate-online');

    if (simulateOffline.length) {
      simulateOffline[0].addEventListener('click', function () {
        isOffline();
      });
      simulateOnline[0].addEventListener('click', function () {
        isOnline();
      });
    } //Check if Online / Offline


    function updateOnlineStatus(event) {
      var condition = navigator.onLine ? "online" : "offline";
      isOnline();
    }

    function updateOfflineStatus(event) {
      isOffline();
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOfflineStatus); //iOS Badge

    var iOSBadge = document.querySelectorAll('.simulate-iphone-badge');
    iOSBadge.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        document.getElementsByClassName('add-to-home')[0].classList.add('add-to-home-visible', 'add-to-home-ios');
        document.getElementsByClassName('add-to-home')[0].classList.remove('add-to-home-android');
      });
    }); //Android Badge

    var AndroidBadge = document.querySelectorAll('.simulate-android-badge');
    AndroidBadge.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        document.getElementsByClassName('add-to-home')[0].classList.add('add-to-home-visible', 'add-to-home-android');
        document.getElementsByClassName('add-to-home')[0].classList.remove('add-to-home-ios');
      });
    }); //Remove Add to Home Badge

    var addToHomeBadgeClose = document.querySelectorAll('.add-to-home');
    addToHomeBadgeClose.forEach(function (el) {
      return el.addEventListener('click', function (e) {
        document.getElementsByClassName('add-to-home')[0].classList.remove('add-to-home-visible');
      });
    }); //Detecting Mobile OS

    var isMobile = {
      Android: function Android() {
        return navigator.userAgent.match(/Android/i);
      },
      iOS: function iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      any: function any() {
        return isMobile.Android() || isMobile.iOS();
      }
    };
    var androidDev = document.getElementsByClassName('show-android');
    var iOSDev = document.getElementsByClassName('show-ios');
    var noDev = document.getElementsByClassName('show-no-device');

    if (!isMobile.any()) {
      for (var _i22 = 0; _i22 < iOSDev.length; _i22++) {
        iOSDev[_i22].classList.add('disabled');
      }

      for (var _i23 = 0; _i23 < androidDev.length; _i23++) {
        androidDev[_i23].classList.add('disabled');
      }
    }

    if (isMobile.iOS()) {
      document.querySelectorAll('#page')[0].classList.add('device-is-ios');

      for (var _i24 = 0; _i24 < noDev.length; _i24++) {
        noDev[_i24].classList.add('disabled');
      }

      for (var _i25 = 0; _i25 < androidDev.length; _i25++) {
        androidDev[_i25].classList.add('disabled');
      }
    }

    if (isMobile.Android()) {
      document.querySelectorAll('#page')[0].classList.add('device-is-android');

      for (var _i26 = 0; _i26 < iOSDev.length; _i26++) {
        iOSDev[_i26].classList.add('disabled');
      }

      for (var _i27 = 0; _i27 < noDev.length; _i27++) {
        noDev[_i27].classList.add('disabled');
      }
    } //OTP Boxes


    var otp = document.querySelectorAll('.otp');

    if (otp[0]) {
      otp.forEach(function (el) {
        el.addEventListener('focus', function (e) {
          el.value = "";
        });
        el.addEventListener('input', function (e) {
          el.nextElementSibling ? el.nextElementSibling.focus() : el.blur();
        });
      });
    } //PWA Settings


    if (isPWA === true) {
      var checkPWA = document.getElementsByTagName('html')[0];

      if (!checkPWA.classList.contains('isPWA')) {
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function () {
            navigator.serviceWorker.register(pwaLocation, {
              scope: pwaScope
            }).then(function (registration) {
              registration.update();
            });
          });
        } //Setting Timeout Before Prompt Shows Again if Dismissed


        var hours = pwaRemind * 24; // Reset when storage is more than 24hours

        var now = Date.now();
        var setupTime = localStorage.getItem(pwaName + '-PWA-Timeout-Value');

        if (setupTime == null) {
          localStorage.setItem(pwaName + '-PWA-Timeout-Value', now);
        } else if (now - setupTime > hours * 60 * 60 * 1000) {
          localStorage.removeItem(pwaName + '-PWA-Prompt');
          localStorage.setItem(pwaName + '-PWA-Timeout-Value', now);
        }

        var pwaClose = document.querySelectorAll('.pwa-dismiss');
        pwaClose.forEach(function (el) {
          return el.addEventListener('click', function (e) {
            var pwaWindows = document.querySelectorAll('#menu-install-pwa-android, #menu-install-pwa-ios');

            for (var _i28 = 0; _i28 < pwaWindows.length; _i28++) {
              pwaWindows[_i28].classList.remove('menu-active');
            }

            localStorage.setItem(pwaName + '-PWA-Timeout-Value', now);
            localStorage.setItem(pwaName + '-PWA-Prompt', 'install-rejected');
            console.log('PWA Install Rejected. Will Show Again in ' + pwaRemind + ' Days');
          });
        }); //Trigger Install Prompt for Android

        var pwaWindows = document.querySelectorAll('#menu-install-pwa-android, #menu-install-pwa-ios');

        if (pwaWindows.length) {
          if (isMobile.Android()) {
            if (localStorage.getItem(pwaName + '-PWA-Prompt') != "install-rejected") {
              var showInstallPrompt = function showInstallPrompt() {
                setTimeout(function () {
                  if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                    console.log('Triggering PWA Window for Android');
                    document.getElementById('menu-install-pwa-android').classList.add('menu-active');
                    document.querySelectorAll('.menu-hider')[0].classList.add('menu-active');
                  }
                }, 3500);
              };

              var deferredPrompt;
              window.addEventListener('beforeinstallprompt', function (e) {
                e.preventDefault();
                deferredPrompt = e;
                showInstallPrompt();
              });
            }

            var pwaInstall = document.querySelectorAll('.pwa-install');
            pwaInstall.forEach(function (el) {
              return el.addEventListener('click', function (e) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(function (choiceResult) {
                  if (choiceResult.outcome === 'accepted') {
                    console.log('Added');
                  } else {
                    localStorage.setItem(pwaName + '-PWA-Timeout-Value', now);
                    localStorage.setItem(pwaName + '-PWA-Prompt', 'install-rejected');
                    setTimeout(function () {
                      if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                        document.getElementById('menu-install-pwa-android').classList.remove('menu-active');
                        document.querySelectorAll('.menu-hider')[0].classList.remove('menu-active');
                      }
                    }, 50);
                  }

                  deferredPrompt = null;
                });
              });
            });
            window.addEventListener('appinstalled', function (evt) {
              document.getElementById('menu-install-pwa-android').classList.remove('menu-active');
              document.querySelectorAll('.menu-hider')[0].classList.remove('menu-active');
            });
          } //Trigger Install Guide iOS


          if (isMobile.iOS()) {
            if (localStorage.getItem(pwaName + '-PWA-Prompt') != "install-rejected") {
              setTimeout(function () {
                if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                  console.log('Triggering PWA Window for iOS');
                  document.getElementById('menu-install-pwa-ios').classList.add('menu-active');
                  document.querySelectorAll('.menu-hider')[0].classList.add('menu-active');
                }
              }, 3500);
            }
          }
        }
      }

      checkPWA.setAttribute('class', 'isPWA');
    } //End of isPWA


    if (pwaNoCache === true) {
      sessionStorage.clear();
      caches.keys().then(function (cacheNames) {
        cacheNames.forEach(function (cacheName) {
          caches["delete"](cacheName);
        });
      });
    } //Lazy Loading


    var lazyLoad = new LazyLoad(); // Check Documentation folder for detailed explanations on
    // Externally loading Javascript files for better performance.

    var plugIdent, plugClass, plugMain, plugCall;
    var plugLoc = "plugins/";
    var plugins = [{
      id: 'uniqueID',
      // to detect if loaded and unload if needed
      plug: 'pluginName/plugin.js',
      // the main plugin javascript file
      call: 'pluginName/pluginName-call.js',
      // the plugin call functions
      style: 'pluginName/pluginName-style.css',
      // the plugin stylesheet
      trigger: '.pluginTriggerClass' // the trigger that will activate the loading and initializing of the plugin

    }, {
      id: 'charts-js-plugin',
      plug: 'charts/charts.js',
      call: 'charts/charts-call-graphs.js',
      trigger: '.graph'
    }, {
      id: 'count',
      plug: 'countdown/countdown.js',
      trigger: '.countdown'
    }, {
      id: 'gallery',
      plug: 'glightbox/glightbox.js',
      call: 'glightbox/glightbox-call.js',
      style: 'glightbox/glightbox.css',
      trigger: '[data-gallery]'
    }, {
      id: 'gallery-views',
      call: 'galleryViews/gallery-views.js',
      trigger: '.gallery-view-controls'
    }, {
      id: 'filter',
      plug: 'filterizr/filterizr.js',
      call: 'filterizr/filterizr-call.js',
      style: 'filterizr/filterizr.css',
      trigger: '.gallery-filter'
    }, {
      id: 'ba-slider',
      call: 'before-after/before-after.js',
      style: 'before-after/before-after.css',
      trigger: '#before-after-slider'
    }];

    var _loop = function _loop(_i29) {
      //Remove Previous Calls
      if (document.querySelectorAll('.' + plugins[_i29].id + '-c').length) {
        document.querySelectorAll('.' + plugins[_i29].id + '-c')[0].remove();
      } //Load Plugins


      plugTrigger = document.querySelectorAll(plugins[_i29].trigger);

      if (plugTrigger.length) {
        loadScript = document.getElementsByTagName('script')[1];
        loadScriptJS = document.createElement('script');
        loadScriptJS.type = 'text/javascript';
        loadScriptJS.className = plugins[_i29].id + '-p';
        loadScriptJS.src = plugLoc + plugins[_i29].plug;
        loadScriptJS.addEventListener('load', function () {
          //Once plugin is loaded, load the call.
          if (plugins[_i29].call !== undefined) {
            var callFn = document.getElementsByTagName('script')[2],
                callJS = document.createElement('script');
            callJS.type = 'text/javascript';
            callJS.className = plugins[_i29].id + '-c';
            callJS.src = plugLoc + plugins[_i29].call;
            callFn.parentNode.insertBefore(callJS, callFn);
          }
        }); //If plugin doesn't exist, load it

        if (!document.querySelectorAll('.' + plugins[_i29].id + '-p').length && plugins[_i29].plug !== undefined) {
          loadScript.parentNode.insertBefore(loadScriptJS, loadScript);
        } else {
          //If plugin doesn't exist, only load the call function
          setTimeout(function () {
            var loadScript = document.getElementsByTagName('script')[1],
                loadScriptJS = document.createElement('script');
            loadScriptJS.type = 'text/javascript';
            loadScriptJS.className = plugins[_i29].id + '-c';
            loadScriptJS.src = plugLoc + plugins[_i29].call;
            loadScript.parentNode.insertBefore(loadScriptJS, loadScript);
          }, 50);
        } //If Style doesn't exist in array, don't do anything


        if (plugins[_i29].style !== undefined) {
          //if style already exists, don't re-add to page.
          if (!document.querySelectorAll('.' + plugins[_i29].id + '-s').length) {
            loadCSS = document.createElement("link");
            loadCSS.className = plugins[_i29].id + '-s';
            loadCSS.rel = "stylesheet";
            loadCSS.type = "text/css";
            loadCSS.href = plugLoc + plugins[_i29].style;
            document.getElementsByTagName("head")[0].appendChild(loadCSS);
          }
        }
      }
    };

    for (var _i29 = 0; _i29 < plugins.length; _i29++) {
      var plugTrigger;
      var loadScript, loadScriptJS;
      var loadCSS;

      _loop(_i29);
    }
  } //Fix Scroll for AJAX pages.


  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'; //End of Init Template

  if (isAJAX === true) {
    if (window.location.protocol !== "file:") {
      var options = {
        containers: ["#page"],
        cache: false,
        animateHistoryBrowsing: false,
        plugins: [new SwupPreloadPlugin()],
        linkSelector: 'a:not(.external-link):not(.default-link):not([href^="https"]):not([href^="http"]):not([data-gallery])'
      };
      var swup = new Swup(options);
      document.addEventListener('swup:pageView', function (e) {
        init_template();
      });
    }
  }

  init_template();
//});
})();

/******/ })()
;

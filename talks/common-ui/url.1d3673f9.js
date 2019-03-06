// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/@genesys/common-webcomponents/dist/esm/es5/polyfills/url.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPolyfill = applyPolyfill;

function applyPolyfill(window, document) {
  /*!
  url-polyfill, 1.0.14
  https://github.com/lifaon74/url-polyfill
  MIT Licensed
  */
  (function (e) {
    var t = function () {
      try {
        return !!Symbol.iterator;
      } catch (e) {
        return false;
      }
    };

    var n = t();

    var r = function (e) {
      var t = {
        next: function () {
          var t = e.shift();
          return {
            done: t === void 0,
            value: t
          };
        }
      };

      if (n) {
        t[Symbol.iterator] = function () {
          return t;
        };
      }

      return t;
    };

    var i = function (e) {
      return encodeURIComponent(e).replace(/%20/g, "+");
    };

    var o = function (e) {
      return decodeURIComponent(e).replace(/\+/g, " ");
    };

    var a = function () {
      var t = function (e) {
        Object.defineProperty(this, "_entries", {
          value: {}
        });

        if (typeof e === "string") {
          if (e !== "") {
            e = e.replace(/^\?/, "");
            var n = e.split("&");
            var r;

            for (var i = 0; i < n.length; i++) {
              r = n[i].split("=");
              this.append(o(r[0]), r.length > 1 ? o(r[1]) : "");
            }
          }
        } else if (e instanceof t) {
          var a = this;
          e.forEach(function (e, t) {
            a.append(e, t);
          });
        }
      };

      var a = t.prototype;

      a.append = function (e, t) {
        if (e in this._entries) {
          this._entries[e].push(t.toString());
        } else {
          this._entries[e] = [t.toString()];
        }
      };

      a.delete = function (e) {
        delete this._entries[e];
      };

      a.get = function (e) {
        return e in this._entries ? this._entries[e][0] : null;
      };

      a.getAll = function (e) {
        return e in this._entries ? this._entries[e].slice(0) : [];
      };

      a.has = function (e) {
        return e in this._entries;
      };

      a.set = function (e, t) {
        this._entries[e] = [t.toString()];
      };

      a.forEach = function (e, t) {
        var n;

        for (var r in this._entries) {
          if (this._entries.hasOwnProperty(r)) {
            n = this._entries[r];

            for (var i = 0; i < n.length; i++) {
              e.call(t, n[i], r, this);
            }
          }
        }
      };

      a.keys = function () {
        var e = [];
        this.forEach(function (t, n) {
          e.push(n);
        });
        return r(e);
      };

      a.values = function () {
        var e = [];
        this.forEach(function (t) {
          e.push(t);
        });
        return r(e);
      };

      a.entries = function () {
        var e = [];
        this.forEach(function (t, n) {
          e.push([n, t]);
        });
        return r(e);
      };

      if (n) {
        a[Symbol.iterator] = a.entries;
      }

      a.toString = function () {
        var e = [];
        this.forEach(function (t, n) {
          e.push(i(n) + "=" + i(t));
        });
        return e.join("&");
      };

      e.URLSearchParams = t;
    };

    if (!("URLSearchParams" in e) || new URLSearchParams("?a=1").toString() !== "a=1") {
      a();
    }
  })(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : this);

  (function (e) {
    var t = function () {
      try {
        var e = new URL("b", "http://a");
        e.pathname = "c%20d";
        return e.href === "http://a/c%20d" && e.searchParams;
      } catch (e) {
        return false;
      }
    };

    var n = function () {
      var t = e.URL;

      var n = function (e, t) {
        if (typeof e !== "string") e = String(e);
        var n = document.implementation.createHTMLDocument("");
        window.doc = n;

        if (t) {
          var r = n.createElement("base");
          r.href = t;
          n.head.appendChild(r);
        }

        var i = n.createElement("a");
        i.href = e;
        n.body.appendChild(i);
        i.href = i.href;

        if (i.protocol === ":" || !/:/.test(i.href)) {
          throw new TypeError("Invalid URL");
        }

        Object.defineProperty(this, "_anchorElement", {
          value: i
        });
      };

      var r = n.prototype;

      var i = function (e) {
        Object.defineProperty(r, e, {
          get: function () {
            return this._anchorElement[e];
          },
          set: function (t) {
            this._anchorElement[e] = t;
          },
          enumerable: true
        });
      };

      ["hash", "host", "hostname", "port", "protocol", "search"].forEach(function (e) {
        i(e);
      });
      Object.defineProperties(r, {
        toString: {
          get: function () {
            var e = this;
            return function () {
              return e.href;
            };
          }
        },
        href: {
          get: function () {
            return this._anchorElement.href.replace(/\?$/, "");
          },
          set: function (e) {
            this._anchorElement.href = e;
          },
          enumerable: true
        },
        pathname: {
          get: function () {
            return this._anchorElement.pathname.replace(/(^\/?)/, "/");
          },
          set: function (e) {
            this._anchorElement.pathname = e;
          },
          enumerable: true
        },
        origin: {
          get: function () {
            var e = {
              "http:": 80,
              "https:": 443,
              "ftp:": 21
            }[this._anchorElement.protocol];
            var t = this._anchorElement.port != e && this._anchorElement.port !== "";
            return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "");
          },
          enumerable: true
        },
        password: {
          get: function () {
            return "";
          },
          set: function (e) {},
          enumerable: true
        },
        username: {
          get: function () {
            return "";
          },
          set: function (e) {},
          enumerable: true
        },
        searchParams: {
          get: function () {
            var e = new URLSearchParams(this.search);
            var t = this;
            ["append", "delete", "set"].forEach(function (n) {
              var r = e[n];

              e[n] = function () {
                r.apply(e, arguments);
                t.search = e.toString();
              };
            });
            return e;
          },
          enumerable: true
        }
      });

      n.createObjectURL = function (e) {
        return t.createObjectURL.apply(t, arguments);
      };

      n.revokeObjectURL = function (e) {
        return t.revokeObjectURL.apply(t, arguments);
      };

      e.URL = n;
    };

    if (!t()) {
      n();
    }

    if (e.location !== void 0 && !("origin" in e.location)) {
      var r = function () {
        return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "");
      };

      try {
        Object.defineProperty(e.location, "origin", {
          get: r,
          enumerable: true
        });
      } catch (t) {
        setInterval(function () {
          e.location.origin = r();
        }, 100);
      }
    }
  })(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : this);
}
},{}],"../node_modules/parcel-bundler-fork/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46159" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler-fork/src/builtins/hmr-runtime.js","../node_modules/@genesys/common-webcomponents/dist/esm/es5/polyfills/url.js"], null)
//# sourceMappingURL=/url.1d3673f9.js.map
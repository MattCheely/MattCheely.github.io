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
})({"../node_modules/@genesys/common-webcomponents/dist/esm/es5/polyfills/fetch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPolyfill = applyPolyfill;

function applyPolyfill(window, document) {
  /*!
  whatwg-fetch, 2.0.3
  https://github.com/github/fetch
  Copyright (c) 2014-2016 GitHub, Inc. - MIT License
  */
  (function (e) {
    function l(a) {
      "string" !== typeof a && (a = String(a));
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a)) throw new TypeError("Invalid character in header field name");
      return a.toLowerCase();
    }

    function q(a) {
      "string" !== typeof a && (a = String(a));
      return a;
    }

    function n(a) {
      var b = {
        next: function () {
          var b = a.shift();
          return {
            done: void 0 === b,
            value: b
          };
        }
      };
      g.iterable && (b[Symbol.iterator] = function () {
        return b;
      });
      return b;
    }

    function d(a) {
      this.map = {};
      a instanceof d ? a.forEach(function (a, c) {
        this.append(c, a);
      }, this) : Array.isArray(a) ? a.forEach(function (a) {
        this.append(a[0], a[1]);
      }, this) : a && Object.getOwnPropertyNames(a).forEach(function (b) {
        this.append(b, a[b]);
      }, this);
    }

    function p(a) {
      if (a.bodyUsed) return Promise.reject(new TypeError("Already read"));
      a.bodyUsed = !0;
    }

    function r(a) {
      return new Promise(function (b, c) {
        a.onload = function () {
          b(a.result);
        };

        a.onerror = function () {
          c(a.error);
        };
      });
    }

    function w(a) {
      var b = new FileReader(),
          c = r(b);
      b.readAsArrayBuffer(a);
      return c;
    }

    function x(a) {
      a = new Uint8Array(a);

      for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = String.fromCharCode(a[c]);

      return b.join("");
    }

    function t(a) {
      if (a.slice) return a.slice(0);
      var b = new Uint8Array(a.byteLength);
      b.set(new Uint8Array(a));
      return b.buffer;
    }

    function u() {
      this.bodyUsed = !1;

      this._initBody = function (a) {
        if (this._bodyInit = a) {
          if ("string" === typeof a) this._bodyText = a;else if (g.blob && Blob.prototype.isPrototypeOf(a)) this._bodyBlob = a;else if (g.formData && FormData.prototype.isPrototypeOf(a)) this._bodyFormData = a;else if (g.searchParams && URLSearchParams.prototype.isPrototypeOf(a)) this._bodyText = a.toString();else if (g.arrayBuffer && g.blob && y(a)) this._bodyArrayBuffer = t(a.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);else if (g.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(a) || z(a))) this._bodyArrayBuffer = t(a);else throw Error("unsupported BodyInit type");
        } else this._bodyText = "";
        this.headers.get("content-type") || ("string" === typeof a ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : g.searchParams && URLSearchParams.prototype.isPrototypeOf(a) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
      };

      g.blob && (this.blob = function () {
        var a = p(this);
        if (a) return a;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData) throw Error("could not read FormData body as blob");
        return Promise.resolve(new Blob([this._bodyText]));
      }, this.arrayBuffer = function () {
        return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(w);
      });

      this.text = function () {
        var a = p(this);
        if (a) return a;

        if (this._bodyBlob) {
          a = this._bodyBlob;
          var b = new FileReader(),
              c = r(b);
          b.readAsText(a);
          return c;
        }

        if (this._bodyArrayBuffer) return Promise.resolve(x(this._bodyArrayBuffer));
        if (this._bodyFormData) throw Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      };

      g.formData && (this.formData = function () {
        return this.text().then(A);
      });

      this.json = function () {
        return this.text().then(JSON.parse);
      };

      return this;
    }

    function k(a, b) {
      b = b || {};
      var c = b.body;

      if (a instanceof k) {
        if (a.bodyUsed) throw new TypeError("Already read");
        this.url = a.url;
        this.credentials = a.credentials;
        b.headers || (this.headers = new d(a.headers));
        this.method = a.method;
        this.mode = a.mode;
        c || null == a._bodyInit || (c = a._bodyInit, a.bodyUsed = !0);
      } else this.url = String(a);

      this.credentials = b.credentials || this.credentials || "omit";
      if (b.headers || !this.headers) this.headers = new d(b.headers);
      var v = b.method || this.method || "GET",
          g = v.toUpperCase();
      this.method = -1 < B.indexOf(g) ? g : v;
      this.mode = b.mode || this.mode || null;
      this.referrer = null;
      if (("GET" === this.method || "HEAD" === this.method) && c) throw new TypeError("Body not allowed for GET or HEAD requests");

      this._initBody(c);
    }

    function A(a) {
      var b = new FormData();
      a.trim().split("&").forEach(function (a) {
        if (a) {
          var c = a.split("=");
          a = c.shift().replace(/\+/g, " ");
          c = c.join("=").replace(/\+/g, " ");
          b.append(decodeURIComponent(a), decodeURIComponent(c));
        }
      });
      return b;
    }

    function C(a) {
      var b = new d();
      a.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (a) {
        var c = a.split(":");
        if (a = c.shift().trim()) c = c.join(":").trim(), b.append(a, c);
      });
      return b;
    }

    function h(a, b) {
      b || (b = {});
      this.type = "default";
      this.status = void 0 === b.status ? 200 : b.status;
      this.ok = 200 <= this.status && 300 > this.status;
      this.statusText = "statusText" in b ? b.statusText : "OK";
      this.headers = new d(b.headers);
      this.url = b.url || "";

      this._initBody(a);
    }

    if (!e.fetch) {
      var D = "Symbol" in e && "iterator" in Symbol,
          m;
      if (m = "FileReader" in e && "Blob" in e) try {
        new Blob(), m = !0;
      } catch (a) {
        m = !1;
      }
      var g = {
        searchParams: "URLSearchParams" in e,
        iterable: D,
        blob: m,
        formData: "FormData" in e,
        arrayBuffer: "ArrayBuffer" in e
      };

      if (g.arrayBuffer) {
        var E = "[object Int8Array];[object Uint8Array];[object Uint8ClampedArray];[object Int16Array];[object Uint16Array];[object Int32Array];[object Uint32Array];[object Float32Array];[object Float64Array]".split(";");

        var y = function (a) {
          return a && DataView.prototype.isPrototypeOf(a);
        };

        var z = ArrayBuffer.isView || function (a) {
          return a && -1 < E.indexOf(Object.prototype.toString.call(a));
        };
      }

      d.prototype.append = function (a, b) {
        a = l(a);
        b = q(b);
        var c = this.map[a];
        this.map[a] = c ? c + "," + b : b;
      };

      d.prototype["delete"] = function (a) {
        delete this.map[l(a)];
      };

      d.prototype.get = function (a) {
        a = l(a);
        return this.has(a) ? this.map[a] : null;
      };

      d.prototype.has = function (a) {
        return this.map.hasOwnProperty(l(a));
      };

      d.prototype.set = function (a, b) {
        this.map[l(a)] = q(b);
      };

      d.prototype.forEach = function (a, b) {
        for (var c in this.map) this.map.hasOwnProperty(c) && a.call(b, this.map[c], c, this);
      };

      d.prototype.keys = function () {
        var a = [];
        this.forEach(function (b, c) {
          a.push(c);
        });
        return n(a);
      };

      d.prototype.values = function () {
        var a = [];
        this.forEach(function (b) {
          a.push(b);
        });
        return n(a);
      };

      d.prototype.entries = function () {
        var a = [];
        this.forEach(function (b, c) {
          a.push([c, b]);
        });
        return n(a);
      };

      g.iterable && (d.prototype[Symbol.iterator] = d.prototype.entries);
      var B = "DELETE GET HEAD OPTIONS POST PUT".split(" ");

      k.prototype.clone = function () {
        return new k(this, {
          body: this._bodyInit
        });
      };

      u.call(k.prototype);
      u.call(h.prototype);

      h.prototype.clone = function () {
        return new h(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new d(this.headers),
          url: this.url
        });
      };

      h.error = function () {
        var a = new h(null, {
          status: 0,
          statusText: ""
        });
        a.type = "error";
        return a;
      };

      var F = [301, 302, 303, 307, 308];

      h.redirect = function (a, b) {
        if (-1 === F.indexOf(b)) throw new RangeError("Invalid status code");
        return new h(null, {
          status: b,
          headers: {
            location: a
          }
        });
      };

      e.Headers = d;
      e.Request = k;
      e.Response = h;

      e.fetch = function (a, b) {
        return new Promise(function (c, d) {
          var e = new k(a, b),
              f = new XMLHttpRequest();

          f.onload = function () {
            var a = {
              status: f.status,
              statusText: f.statusText,
              headers: C(f.getAllResponseHeaders() || "")
            };
            a.url = "responseURL" in f ? f.responseURL : a.headers.get("X-Request-URL");
            c(new h("response" in f ? f.response : f.responseText, a));
          };

          f.onerror = function () {
            d(new TypeError("Network request failed"));
          };

          f.ontimeout = function () {
            d(new TypeError("Network request failed"));
          };

          f.open(e.method, e.url, !0);
          "include" === e.credentials ? f.withCredentials = !0 : "omit" === e.credentials && (f.withCredentials = !1);
          "responseType" in f && g.blob && (f.responseType = "blob");
          e.headers.forEach(function (a, b) {
            f.setRequestHeader(b, a);
          });
          f.send("undefined" === typeof e._bodyInit ? null : e._bodyInit);
        });
      };

      e.fetch.polyfill = !0;
    }
  })("undefined" !== typeof self ? self : window);
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
},{}]},{},["../node_modules/parcel-bundler-fork/src/builtins/hmr-runtime.js","../node_modules/@genesys/common-webcomponents/dist/esm/es5/polyfills/fetch.js"], null)
//# sourceMappingURL=/fetch.0b475307.js.map
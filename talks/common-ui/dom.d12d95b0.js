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
})({"../node_modules/@genesys/common-webcomponents/dist/esm/es5/polyfills/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPolyfill = applyPolyfill;

function applyPolyfill(window, document) {
  /*! document-register-element, 1.7.0
  https://github.com/WebReflection/document-register-element
  (C) Andrea Giammarchi - @WebReflection - Mit Style License */
  if (!window['s-ce1']) {
    window['s-ce1'] = true;

    (function (e, t) {
      "use strict";

      function Ht() {
        var e = wt.splice(0, wt.length);
        Et = 0;

        while (e.length) e.shift().call(null, e.shift());
      }

      function Bt(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Jt(e[n], t);
      }

      function jt(e) {
        for (var t = 0, n = e.length, r; t < n; t++) r = e[t], Pt(r, A[It(r)]);
      }

      function Ft(e) {
        return function (t) {
          ut(t) && (Jt(t, e), O.length && Bt(t.querySelectorAll(O), e));
        };
      }

      function It(e) {
        var t = ht.call(e, "is"),
            n = e.nodeName.toUpperCase(),
            r = _.call(L, t ? N + t.toUpperCase() : T + n);

        return t && -1 < r && !qt(n, t) ? -1 : r;
      }

      function qt(e, t) {
        return -1 < O.indexOf(e + '[is="' + t + '"]');
      }

      function Rt(e) {
        var t = e.currentTarget,
            n = e.attrChange,
            r = e.attrName,
            i = e.target,
            s = e[y] || 2,
            o = e[w] || 3;
        kt && (!i || i === t) && t[h] && r !== "style" && (e.prevValue !== e.newValue || e.newValue === "" && (n === s || n === o)) && t[h](r, n === s ? null : e.prevValue, n === o ? null : e.newValue);
      }

      function Ut(e) {
        var t = Ft(e);
        return function (e) {
          wt.push(t, e.target), Et && clearTimeout(Et), Et = setTimeout(Ht, 1);
        };
      }

      function zt(e) {
        Ct && (Ct = !1, e.currentTarget.removeEventListener(S, zt)), O.length && Bt((e.target || n).querySelectorAll(O), e.detail === l ? l : a), st && Vt();
      }

      function Wt(e, t) {
        var n = this;
        vt.call(n, e, t), Lt.call(n, {
          target: n
        });
      }

      function Xt(e, t) {
        nt(e, t), Mt ? Mt.observe(e, yt) : (Nt && (e.setAttribute = Wt, e[o] = Ot(e), e[u](x, Lt)), e[u](E, Rt)), e[m] && kt && (e.created = !0, e[m](), e.created = !1);
      }

      function Vt() {
        for (var e, t = 0, n = at.length; t < n; t++) e = at[t], M.contains(e) || (n--, at.splice(t--, 1), Jt(e, l));
      }

      function $t(e) {
        throw new Error("A " + e + " type is already registered");
      }

      function Jt(e, t) {
        var n,
            r = It(e),
            i;
        -1 < r && (Dt(e, A[r]), r = 0, t === a && !e[a] ? (e[l] = !1, e[a] = !0, i = "connected", r = 1, st && _.call(at, e) < 0 && at.push(e)) : t === l && !e[l] && (e[a] = !1, e[l] = !0, i = "disconnected", r = 1), r && (n = e[t + f] || e[i + f]) && n.call(e));
      }

      function Kt() {}

      function Qt(e, t, r) {
        var i = r && r[c] || "",
            o = t.prototype,
            u = tt(o),
            a = t.observedAttributes || j,
            f = {
          prototype: u
        };
        ot(u, m, {
          value: function () {
            if (Q) Q = !1;else if (!this[W]) {
              this[W] = !0, new t(this), o[m] && o[m].call(this);
              var e = G[Z.get(t)];
              (!V || e.create.length > 1) && Zt(this);
            }
          }
        }), ot(u, h, {
          value: function (e) {
            -1 < _.call(a, e) && o[h].apply(this, arguments);
          }
        }), o[d] && ot(u, p, {
          value: o[d]
        }), o[v] && ot(u, g, {
          value: o[v]
        }), i && (f[c] = i), e = e.toUpperCase(), G[e] = {
          constructor: t,
          create: i ? [i, et(e)] : [e]
        }, Z.set(t, e), n[s](e.toLowerCase(), f), en(e), Y[e].r();
      }

      function Gt(e) {
        var t = G[e.toUpperCase()];
        return t && t.constructor;
      }

      function Yt(e) {
        return typeof e == "string" ? e : e && e.is || "";
      }

      function Zt(e) {
        var t = e[h],
            n = t ? e.attributes : j,
            r = n.length,
            i;

        while (r--) i = n[r], t.call(e, i.name || i.nodeName, null, i.value || i.nodeValue);
      }

      function en(e) {
        return e = e.toUpperCase(), e in Y || (Y[e] = {}, Y[e].p = new K(function (t) {
          Y[e].r = t;
        })), Y[e].p;
      }

      function tn() {
        X && delete e.customElements, B(e, "customElements", {
          configurable: !0,
          value: new Kt()
        }), B(e, "CustomElementRegistry", {
          configurable: !0,
          value: Kt
        });

        for (var t = function (t) {
          var r = e[t];

          if (r) {
            e[t] = function (t) {
              var i, s;
              return t || (t = this), t[W] || (Q = !0, i = G[Z.get(t.constructor)], s = V && i.create.length === 1, t = s ? Reflect.construct(r, j, i.constructor) : n.createElement.apply(n, i.create), t[W] = !0, Q = !1, s || Zt(t)), t;
            }, e[t].prototype = r.prototype;

            try {
              r.prototype.constructor = e[t];
            } catch (i) {
              z = !0, B(r, W, {
                value: e[t]
              });
            }
          }
        }, r = i.get(/^HTML[A-Z]*[a-z]/), o = r.length; o--; t(r[o]));

        n.createElement = function (e, t) {
          var n = Yt(t);
          return n ? gt.call(this, e, et(n)) : gt.call(this, e);
        }, St || (Tt = !0, n[s](""));
      }

      var n = e.document,
          r = e.Object,
          i = function (e) {
        var t = /^[A-Z]+[a-z]/,
            n = function (e) {
          var t = [],
              n;

          for (n in s) e.test(n) && t.push(n);

          return t;
        },
            i = function (e, t) {
          t = t.toLowerCase(), t in s || (s[e] = (s[e] || []).concat(t), s[t] = s[t.toUpperCase()] = e);
        },
            s = (r.create || r)(null),
            o = {},
            u,
            a,
            f,
            l;

        for (a in e) for (l in e[a]) {
          f = e[a][l], s[l] = f;

          for (u = 0; u < f.length; u++) s[f[u].toLowerCase()] = s[f[u].toUpperCase()] = l;
        }

        return o.get = function (r) {
          return typeof r == "string" ? s[r] || (t.test(r) ? [] : "") : n(r);
        }, o.set = function (n, r) {
          return t.test(n) ? i(n, r) : i(r, n), o;
        }, o;
      }({
        collections: {
          HTMLAllCollection: ["all"],
          HTMLCollection: ["forms"],
          HTMLFormControlsCollection: ["elements"],
          HTMLOptionsCollection: ["options"]
        },
        elements: {
          Element: ["element"],
          HTMLAnchorElement: ["a"],
          HTMLAppletElement: ["applet"],
          HTMLAreaElement: ["area"],
          HTMLAttachmentElement: ["attachment"],
          HTMLAudioElement: ["audio"],
          HTMLBRElement: ["br"],
          HTMLBaseElement: ["base"],
          HTMLBodyElement: ["body"],
          HTMLButtonElement: ["button"],
          HTMLCanvasElement: ["canvas"],
          HTMLContentElement: ["content"],
          HTMLDListElement: ["dl"],
          HTMLDataElement: ["data"],
          HTMLDataListElement: ["datalist"],
          HTMLDetailsElement: ["details"],
          HTMLDialogElement: ["dialog"],
          HTMLDirectoryElement: ["dir"],
          HTMLDivElement: ["div"],
          HTMLDocument: ["document"],
          HTMLElement: ["element", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "command", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "i", "kbd", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"],
          HTMLEmbedElement: ["embed"],
          HTMLFieldSetElement: ["fieldset"],
          HTMLFontElement: ["font"],
          HTMLFormElement: ["form"],
          HTMLFrameElement: ["frame"],
          HTMLFrameSetElement: ["frameset"],
          HTMLHRElement: ["hr"],
          HTMLHeadElement: ["head"],
          HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
          HTMLHtmlElement: ["html"],
          HTMLIFrameElement: ["iframe"],
          HTMLImageElement: ["img"],
          HTMLInputElement: ["input"],
          HTMLKeygenElement: ["keygen"],
          HTMLLIElement: ["li"],
          HTMLLabelElement: ["label"],
          HTMLLegendElement: ["legend"],
          HTMLLinkElement: ["link"],
          HTMLMapElement: ["map"],
          HTMLMarqueeElement: ["marquee"],
          HTMLMediaElement: ["media"],
          HTMLMenuElement: ["menu"],
          HTMLMenuItemElement: ["menuitem"],
          HTMLMetaElement: ["meta"],
          HTMLMeterElement: ["meter"],
          HTMLModElement: ["del", "ins"],
          HTMLOListElement: ["ol"],
          HTMLObjectElement: ["object"],
          HTMLOptGroupElement: ["optgroup"],
          HTMLOptionElement: ["option"],
          HTMLOutputElement: ["output"],
          HTMLParagraphElement: ["p"],
          HTMLParamElement: ["param"],
          HTMLPictureElement: ["picture"],
          HTMLPreElement: ["pre"],
          HTMLProgressElement: ["progress"],
          HTMLQuoteElement: ["blockquote", "q", "quote"],
          HTMLScriptElement: ["script"],
          HTMLSelectElement: ["select"],
          HTMLShadowElement: ["shadow"],
          HTMLSlotElement: ["slot"],
          HTMLSourceElement: ["source"],
          HTMLSpanElement: ["span"],
          HTMLStyleElement: ["style"],
          HTMLTableCaptionElement: ["caption"],
          HTMLTableCellElement: ["td", "th"],
          HTMLTableColElement: ["col", "colgroup"],
          HTMLTableElement: ["table"],
          HTMLTableRowElement: ["tr"],
          HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
          HTMLTemplateElement: ["template"],
          HTMLTextAreaElement: ["textarea"],
          HTMLTimeElement: ["time"],
          HTMLTitleElement: ["title"],
          HTMLTrackElement: ["track"],
          HTMLUListElement: ["ul"],
          HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"],
          HTMLVideoElement: ["video"]
        },
        nodes: {
          Attr: ["node"],
          Audio: ["audio"],
          CDATASection: ["node"],
          CharacterData: ["node"],
          Comment: ["#comment"],
          Document: ["#document"],
          DocumentFragment: ["#document-fragment"],
          DocumentType: ["node"],
          HTMLDocument: ["#document"],
          Image: ["img"],
          Option: ["option"],
          ProcessingInstruction: ["node"],
          ShadowRoot: ["#shadow-root"],
          Text: ["#text"],
          XMLDocument: ["xml"]
        }
      });

      typeof t != "object" && (t = {
        type: t || "auto"
      });

      var s = "registerElement",
          o = "__" + s + (e.Math.random() * 1e5 >> 0),
          u = "addEventListener",
          a = "attached",
          f = "Callback",
          l = "detached",
          c = "extends",
          h = "attributeChanged" + f,
          p = a + f,
          d = "connected" + f,
          v = "disconnected" + f,
          m = "created" + f,
          g = l + f,
          y = "ADDITION",
          b = "MODIFICATION",
          w = "REMOVAL",
          E = "DOMAttrModified",
          S = "DOMContentLoaded",
          x = "DOMSubtreeModified",
          T = "<",
          N = "=",
          C = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
          k = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
          L = [],
          A = [],
          O = "",
          M = n.documentElement,
          _ = L.indexOf || function (e) {
        for (var t = this.length; t-- && this[t] !== e;);

        return t;
      },
          D = r.prototype,
          P = D.hasOwnProperty,
          H = D.isPrototypeOf,
          B = r.defineProperty,
          j = [],
          F = r.getOwnPropertyDescriptor,
          I = r.getOwnPropertyNames,
          q = r.getPrototypeOf,
          R = r.setPrototypeOf,
          U = !!r.__proto__,
          z = !1,
          W = "__dreCEv1",
          X = e.customElements,
          V = !/^force/.test(t.type) && !!(X && X.define && X.get && X.whenDefined),
          $ = r.create || r,
          J = e.Map || function () {
        var t = [],
            n = [],
            r;
        return {
          get: function (e) {
            return n[_.call(t, e)];
          },
          set: function (e, i) {
            r = _.call(t, e), r < 0 ? n[t.push(e) - 1] = i : n[r] = i;
          }
        };
      },
          K = e.Promise || function (e) {
        function i(e) {
          n = !0;

          while (t.length) t.shift()(e);
        }

        var t = [],
            n = !1,
            r = {
          "catch": function () {
            return r;
          },
          then: function (e) {
            return t.push(e), n && setTimeout(i, 1), r;
          }
        };
        return e(i), r;
      },
          Q = !1,
          G = $(null),
          Y = $(null),
          Z = new J(),
          et = function (e) {
        return e.toLowerCase();
      },
          tt = r.create || function sn(e) {
        return e ? (sn.prototype = e, new sn()) : this;
      },
          nt = R || (U ? function (e, t) {
        return e.__proto__ = t, e;
      } : I && F ? function () {
        function e(e, t) {
          for (var n, r = I(t), i = 0, s = r.length; i < s; i++) n = r[i], P.call(e, n) || B(e, n, F(t, n));
        }

        return function (t, n) {
          do e(t, n); while ((n = q(n)) && !H.call(n, t));

          return t;
        };
      }() : function (e, t) {
        for (var n in t) e[n] = t[n];

        return e;
      }),
          rt = e.MutationObserver || e.WebKitMutationObserver,
          it = (e.HTMLElement || e.Element || e.Node).prototype,
          st = !H.call(it, M),
          ot = st ? function (e, t, n) {
        return e[t] = n.value, e;
      } : B,
          ut = st ? function (e) {
        return e.nodeType === 1;
      } : function (e) {
        return H.call(it, e);
      },
          at = st && [],
          ft = it.attachShadow,
          lt = it.cloneNode,
          ct = it.dispatchEvent,
          ht = it.getAttribute,
          pt = it.hasAttribute,
          dt = it.removeAttribute,
          vt = it.setAttribute,
          mt = n.createElement,
          gt = mt,
          yt = rt && {
        attributes: !0,
        characterData: !0,
        attributeOldValue: !0
      },
          bt = rt || function (e) {
        Nt = !1, M.removeEventListener(E, bt);
      },
          wt,
          Et = 0,
          St = s in n && !/^force-all/.test(t.type),
          xt = !0,
          Tt = !1,
          Nt = !0,
          Ct = !0,
          kt = !0,
          Lt,
          At,
          Ot,
          Mt,
          _t,
          Dt,
          Pt;

      St || (R || U ? (Dt = function (e, t) {
        H.call(t, e) || Xt(e, t);
      }, Pt = Xt) : (Dt = function (e, t) {
        e[o] || (e[o] = r(!0), Xt(e, t));
      }, Pt = Dt), st ? (Nt = !1, function () {
        var e = F(it, u),
            t = e.value,
            n = function (e) {
          var t = new CustomEvent(E, {
            bubbles: !0
          });
          t.attrName = e, t.prevValue = ht.call(this, e), t.newValue = null, t[w] = t.attrChange = 2, dt.call(this, e), ct.call(this, t);
        },
            r = function (e, t) {
          var n = pt.call(this, e),
              r = n && ht.call(this, e),
              i = new CustomEvent(E, {
            bubbles: !0
          });
          vt.call(this, e, t), i.attrName = e, i.prevValue = n ? r : null, i.newValue = t, n ? i[b] = i.attrChange = 1 : i[y] = i.attrChange = 0, ct.call(this, i);
        },
            i = function (e) {
          var t = e.currentTarget,
              n = t[o],
              r = e.propertyName,
              i;
          n.hasOwnProperty(r) && (n = n[r], i = new CustomEvent(E, {
            bubbles: !0
          }), i.attrName = n.name, i.prevValue = n.value || null, i.newValue = n.value = t[r] || null, i.prevValue == null ? i[y] = i.attrChange = 0 : i[b] = i.attrChange = 1, ct.call(t, i));
        };

        e.value = function (e, s, u) {
          e === E && this[h] && this.setAttribute !== r && (this[o] = {
            className: {
              name: "class",
              value: this.className
            }
          }, this.setAttribute = r, this.removeAttribute = n, t.call(this, "propertychange", i)), t.call(this, e, s, u);
        }, B(it, u, e);
      }()) : rt || (M[u](E, bt), M.setAttribute(o, 1), M.removeAttribute(o), Nt && (Lt = function (e) {
        var t = this,
            n,
            r,
            i;

        if (t === e.target) {
          n = t[o], t[o] = r = Ot(t);

          for (i in r) {
            if (!(i in n)) return At(0, t, i, n[i], r[i], y);
            if (r[i] !== n[i]) return At(1, t, i, n[i], r[i], b);
          }

          for (i in n) if (!(i in r)) return At(2, t, i, n[i], r[i], w);
        }
      }, At = function (e, t, n, r, i, s) {
        var o = {
          attrChange: e,
          currentTarget: t,
          attrName: n,
          prevValue: r,
          newValue: i
        };
        o[s] = e, Rt(o);
      }, Ot = function (e) {
        for (var t, n, r = {}, i = e.attributes, s = 0, o = i.length; s < o; s++) t = i[s], n = t.name, n !== "setAttribute" && (r[n] = t.value);

        return r;
      })), n[s] = function (t, r) {
        p = t.toUpperCase(), xt && (xt = !1, rt ? (Mt = function (e, t) {
          function n(e, t) {
            for (var n = 0, r = e.length; n < r; t(e[n++]));
          }

          return new rt(function (r) {
            for (var i, s, o, u = 0, a = r.length; u < a; u++) i = r[u], i.type === "childList" ? (n(i.addedNodes, e), n(i.removedNodes, t)) : (s = i.target, kt && s[h] && i.attributeName !== "style" && (o = ht.call(s, i.attributeName), o !== i.oldValue && s[h](i.attributeName, i.oldValue, o)));
          });
        }(Ft(a), Ft(l)), _t = function (e) {
          return Mt.observe(e, {
            childList: !0,
            subtree: !0
          }), e;
        }, _t(n), ft && (it.attachShadow = function () {
          return _t(ft.apply(this, arguments));
        })) : (wt = [], n[u]("DOMNodeInserted", Ut(a)), n[u]("DOMNodeRemoved", Ut(l))), n[u](S, zt), n[u]("readystatechange", zt), it.cloneNode = function (e) {
          var t = lt.call(this, !!e),
              n = It(t);
          return -1 < n && Pt(t, A[n]), e && O.length && jt(t.querySelectorAll(O)), t;
        });
        if (Tt) return Tt = !1;
        -2 < _.call(L, N + p) + _.call(L, T + p) && $t(t);
        if (!C.test(p) || -1 < _.call(k, p)) throw new Error("The type " + t + " is invalid");

        var i = function () {
          return o ? n.createElement(f, p) : n.createElement(f);
        },
            s = r || D,
            o = P.call(s, c),
            f = o ? r[c].toUpperCase() : p,
            p,
            d;

        return o && -1 < _.call(L, T + f) && $t(f), d = L.push((o ? N : T) + p) - 1, O = O.concat(O.length ? "," : "", o ? f + '[is="' + t.toLowerCase() + '"]' : f), i.prototype = A[d] = P.call(s, "prototype") ? s.prototype : tt(it), O.length && Bt(n.querySelectorAll(O), a), i;
      }, n.createElement = gt = function (e, t) {
        var r = Yt(t),
            i = r ? mt.call(n, e, et(r)) : mt.call(n, e),
            s = "" + e,
            o = _.call(L, (r ? N : T) + (r || s).toUpperCase()),
            u = -1 < o;

        return r && (i.setAttribute("is", r = r.toLowerCase()), u && (u = qt(s.toUpperCase(), r))), kt = !n.createElement.innerHTMLHelper, u && Pt(i, A[o]), i;
      }), Kt.prototype = {
        constructor: Kt,
        define: V ? function (e, t, n) {
          if (n) Qt(e, t, n);else {
            var r = e.toUpperCase();
            G[r] = {
              constructor: t,
              create: [r]
            }, Z.set(t, r), X.define(e, t);
          }
        } : Qt,
        get: V ? function (e) {
          return X.get(e) || Gt(e);
        } : Gt,
        whenDefined: V ? function (e) {
          return K.race([X.whenDefined(e), en(e)]);
        } : en
      };
      if (!X || /^force/.test(t.type)) tn();else if (!t.noBuiltIn) try {
        (function (t, r, i) {
          r[c] = "a", t.prototype = tt(HTMLAnchorElement.prototype), t.prototype.constructor = t, e.customElements.define(i, t, r);
          if (ht.call(n.createElement("a", {
            is: i
          }), "is") !== i || V && ht.call(new t(), "is") !== i) throw r;
        })(function on() {
          return Reflect.construct(HTMLAnchorElement, [], on);
        }, {}, "document-register-element-a");
      } catch (nn) {
        tn();
      }
      if (!t.noBuiltIn) try {
        mt.call(n, "a", "a");
      } catch (rn) {
        et = function (e) {
          return {
            is: e.toLowerCase()
          };
        };
      }
    })(window);
  }
  /*!
  Element.closest and Element.matches
  https://github.com/jonathantneal/closest
  Creative Commons Zero v1.0 Universal
  */


  (function (a) {
    "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function (a) {
      a = (this.document || this.ownerDocument).querySelectorAll(a);

      for (var b = 0; a[b] && a[b] !== this;) ++b;

      return !!a[b];
    });
    "function" !== typeof a.closest && (a.closest = function (a) {
      for (var b = this; b && 1 === b.nodeType;) {
        if (b.matches(a)) return b;
        b = b.parentNode;
      }

      return null;
    });
  })(window.Element.prototype);
  /*!
  Element.remove()
  https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
  */


  (function (b) {
    b.forEach(function (a) {
      a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function () {
          null !== this.parentNode && this.parentNode.removeChild(this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
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
},{}]},{},["../node_modules/parcel-bundler-fork/src/builtins/hmr-runtime.js","../node_modules/@genesys/common-webcomponents/dist/esm/es5/polyfills/dom.js"], null)
//# sourceMappingURL=/dom.d12d95b0.js.map
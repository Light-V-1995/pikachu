// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"VSkgv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "233b808e4205c1e2626631a515185847"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5JlPM":[function(require,module,exports) {
(function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e1) {
        if (!e1.document) throw new Error("jQuery requires a window with a document");
        return t(e1);
    } : t(e);
})("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n1 = [], r = e.document, i1 = Object.getPrototypeOf, o1 = n1.slice, a1 = n1.concat, s1 = n1.push, u1 = n1.indexOf, l1 = {
    }, c1 = l1.toString, f = l1.hasOwnProperty, p = f.toString, d = p.call(Object), h = {
    }, g = function e1(t1) {
        return "function" == typeof t1 && "number" != typeof t1.nodeType;
    }, y = function e2(t1) {
        return null != t1 && t1 === t1.window;
    }, v = {
        type: true,
        src: true,
        noModule: true
    };
    function m(e3, t1, n1) {
        var i1, o1 = (t1 = t1 || r).createElement("script");
        if (o1.text = e3, n1) for(i1 in v)n1[i1] && (o1[i1] = n1[i1]);
        t1.head.appendChild(o1).parentNode.removeChild(o1);
    }
    function x(e3) {
        return null == e3 ? e3 + "" : "object" == typeof e3 || "function" == typeof e3 ? l1[c1.call(e3)] || "object" : typeof e3;
    }
    var b = "3.3.1", w = function(e3, t1) {
        return new w.fn.init(e3, t1);
    }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o1.call(this);
        },
        get: function(e3) {
            return null == e3 ? o1.call(this) : e3 < 0 ? this[e3 + this.length] : this[e3];
        },
        pushStack: function(e3) {
            var t1 = w.merge(this.constructor(), e3);
            return t1.prevObject = this, t1;
        },
        each: function(e3) {
            return w.each(this, e3);
        },
        map: function(e3) {
            return this.pushStack(w.map(this, function(t1, n1) {
                return e3.call(t1, n1, t1);
            }));
        },
        slice: function() {
            return this.pushStack(o1.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e3) {
            var t1 = this.length, n1 = +e3 + (e3 < 0 ? t1 : 0);
            return this.pushStack(n1 >= 0 && n1 < t1 ? [
                this[n1]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: s1,
        sort: n1.sort,
        splice: n1.splice
    }, w.extend = w.fn.extend = function() {
        var e3, t1, n1, r1, i1, o1, a1 = arguments[0] || {
        }, s1 = 1, u1 = arguments.length, l1 = false;
        for("boolean" == typeof a1 && (l1 = a1, a1 = arguments[s1] || {
        }, s1++), "object" == typeof a1 || g(a1) || (a1 = {
        }), s1 === u1 && (a1 = this, s1--); s1 < u1; s1++)if (null != (e3 = arguments[s1])) for(t1 in e3)n1 = a1[t1], a1 !== (r1 = e3[t1]) && (l1 && r1 && (w.isPlainObject(r1) || (i1 = Array.isArray(r1))) ? (i1 ? (i1 = false, o1 = n1 && Array.isArray(n1) ? n1 : []) : o1 = n1 && w.isPlainObject(n1) ? n1 : {
        }, a1[t1] = w.extend(l1, o1, r1)) : (void 0) !== r1 && (a1[t1] = r1));
        return a1;
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(e3) {
            throw new Error(e3);
        },
        noop: function() {
        },
        isPlainObject: function(e3) {
            var t1, n1;
            return !(!e3 || "[object Object]" !== c1.call(e3)) && (!(t1 = i1(e3)) || "function" == typeof (n1 = f.call(t1, "constructor") && t1.constructor) && p.call(n1) === d);
        },
        isEmptyObject: function(e3) {
            var t1;
            for(t1 in e3)return false;
            return true;
        },
        globalEval: function(e3) {
            m(e3);
        },
        each: function(e3, t1) {
            var n1, r1 = 0;
            if (C(e3)) {
                for(n1 = e3.length; r1 < n1; r1++)if (false === t1.call(e3[r1], r1, e3[r1])) break;
            } else for(r1 in e3)if (false === t1.call(e3[r1], r1, e3[r1])) break;
            return e3;
        },
        trim: function(e3) {
            return null == e3 ? "" : (e3 + "").replace(T, "");
        },
        makeArray: function(e3, t1) {
            var n1 = t1 || [];
            return null != e3 && (C(Object(e3)) ? w.merge(n1, "string" == typeof e3 ? [
                e3
            ] : e3) : s1.call(n1, e3)), n1;
        },
        inArray: function(e3, t1, n1) {
            return null == t1 ? -1 : u1.call(t1, e3, n1);
        },
        merge: function(e3, t1) {
            for(var n1 = +t1.length, r1 = 0, i1 = e3.length; r1 < n1; r1++)e3[i1++] = t1[r1];
            return e3.length = i1, e3;
        },
        grep: function(e3, t1, n1) {
            for(var r1, i1 = [], o1 = 0, a1 = e3.length, s1 = !n1; o1 < a1; o1++)(r1 = !t1(e3[o1], o1)) !== s1 && i1.push(e3[o1]);
            return i1;
        },
        map: function(e3, t1, n1) {
            var r1, i1, o1 = 0, s1 = [];
            if (C(e3)) for(r1 = e3.length; o1 < r1; o1++)null != (i1 = t1(e3[o1], o1, n1)) && s1.push(i1);
            else for(o1 in e3)null != (i1 = t1(e3[o1], o1, n1)) && s1.push(i1);
            return a1.apply([], s1);
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n1[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e3, t1) {
        l1["[object " + t1 + "]"] = t1.toLowerCase();
    });
    function C(e3) {
        var t1 = !!e3 && "length" in e3 && e3.length, n1 = x(e3);
        return !g(e3) && !y(e3) && ("array" === n1 || 0 === t1 || "number" == typeof t1 && t1 > 0 && t1 - 1 in e3);
    }
    var E = function(e3) {
        var t1, n1, r1, i1, o1, a1, s1, u1, l1, c1, f1, p1, d1, h1, g1, y1, v1, m1, x1, b1 = "sizzle" + 1 * new Date, w1 = e3.document, T1 = 0, C1 = 0, E1 = ae(), k = ae(), S = ae(), D = function(e4, t2) {
            return e4 === t2 && (f1 = true), 0;
        }, N = {
        }.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e4, t2) {
            for(var n2 = 0, r2 = e4.length; n2 < r2; n2++)if (e4[n2] === t2) return n2;
            return -1;
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + P + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function(e4, t2, n2) {
            var r2 = "0x" + t2 - 65536;
            return r2 !== r2 || n2 ? t2 : r2 < 0 ? String.fromCharCode(r2 + 65536) : String.fromCharCode(r2 >> 10 | 55296, 1023 & r2 | 56320);
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e4, t2) {
            return t2 ? "\0" === e4 ? "\ufffd" : e4.slice(0, -1) + "\\" + e4.charCodeAt(e4.length - 1).toString(16) + " " : "\\" + e4;
        }, re = function() {
            p1();
        }, ie = me(function(e4) {
            return true === e4.disabled && ("form" in e4 || "label" in e4);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(A = H.call(w1.childNodes), w1.childNodes), A[w1.childNodes.length].nodeType;
        } catch (e4) {
            L = {
                apply: A.length ? function(e5, t2) {
                    q.apply(e5, H.call(t2));
                } : function(e5, t2) {
                    var n2 = e5.length, r2 = 0;
                    while(e5[n2++] = t2[r2++]);
                    e5.length = n2 - 1;
                }
            };
        }
        function oe(e4, t2, r2, i2) {
            var o2, s2, l2, c2, f2, h2, v2, m2 = t2 && t2.ownerDocument, T2 = t2 ? t2.nodeType : 9;
            if (r2 = r2 || [], "string" != typeof e4 || !e4 || 1 !== T2 && 9 !== T2 && 11 !== T2) return r2;
            if (!i2 && ((t2 ? t2.ownerDocument || t2 : w1) !== d1 && p1(t2), t2 = t2 || d1, g1)) {
                if (11 !== T2 && (f2 = J.exec(e4))) {
                    if (o2 = f2[1]) {
                        if (9 === T2) {
                            if (!(l2 = t2.getElementById(o2))) return r2;
                            if (l2.id === o2) return r2.push(l2), r2;
                        } else if (m2 && (l2 = m2.getElementById(o2)) && x1(t2, l2) && l2.id === o2) return r2.push(l2), r2;
                    } else {
                        if (f2[2]) return L.apply(r2, t2.getElementsByTagName(e4)), r2;
                        if ((o2 = f2[3]) && n1.getElementsByClassName && t2.getElementsByClassName) return L.apply(r2, t2.getElementsByClassName(o2)), r2;
                    }
                }
                if (n1.qsa && !S[e4 + " "] && (!y1 || !y1.test(e4))) {
                    if (1 !== T2) m2 = t2, v2 = e4;
                    else if ("object" !== t2.nodeName.toLowerCase()) {
                        (c2 = t2.getAttribute("id")) ? c2 = c2.replace(te, ne) : t2.setAttribute("id", c2 = b1), s2 = (h2 = a1(e4)).length;
                        while(s2--)h2[s2] = "#" + c2 + " " + ve(h2[s2]);
                        v2 = h2.join(","), m2 = K.test(e4) && ge(t2.parentNode) || t2;
                    }
                    if (v2) try {
                        return L.apply(r2, m2.querySelectorAll(v2)), r2;
                    } catch (e5) {
                    } finally{
                        c2 === b1 && t2.removeAttribute("id");
                    }
                }
            }
            return u1(e4.replace(B, "$1"), t2, r2, i2);
        }
        function ae() {
            var e4 = [];
            function t2(n2, i2) {
                return e4.push(n2 + " ") > r1.cacheLength && delete t2[e4.shift()], t2[n2 + " "] = i2;
            }
            return t2;
        }
        function se(e4) {
            return e4[b1] = true, e4;
        }
        function ue(e4) {
            var t2 = d1.createElement("fieldset");
            try {
                return !!e4(t2);
            } catch (e5) {
                return false;
            } finally{
                t2.parentNode && t2.parentNode.removeChild(t2), t2 = null;
            }
        }
        function le(e4, t2) {
            var n2 = e4.split("|"), i2 = n2.length;
            while(i2--)r1.attrHandle[n2[i2]] = t2;
        }
        function ce(e4, t2) {
            var n2 = t2 && e4, r2 = n2 && 1 === e4.nodeType && 1 === t2.nodeType && e4.sourceIndex - t2.sourceIndex;
            if (r2) return r2;
            if (n2) while(n2 = n2.nextSibling)if (n2 === t2) return -1;
            return e4 ? 1 : -1;
        }
        function fe(e4) {
            return function(t2) {
                return "input" === t2.nodeName.toLowerCase() && t2.type === e4;
            };
        }
        function pe(e4) {
            return function(t2) {
                var n2 = t2.nodeName.toLowerCase();
                return ("input" === n2 || "button" === n2) && t2.type === e4;
            };
        }
        function de(e4) {
            return function(t2) {
                return "form" in t2 ? t2.parentNode && false === t2.disabled ? "label" in t2 ? "label" in t2.parentNode ? t2.parentNode.disabled === e4 : t2.disabled === e4 : t2.isDisabled === e4 || t2.isDisabled !== !e4 && ie(t2) === e4 : t2.disabled === e4 : "label" in t2 && t2.disabled === e4;
            };
        }
        function he(e4) {
            return se(function(t2) {
                return t2 = +t2, se(function(n2, r2) {
                    var i2, o2 = e4([], n2.length, t2), a2 = o2.length;
                    while(a2--)n2[i2 = o2[a2]] && (n2[i2] = !(r2[i2] = n2[i2]));
                });
            });
        }
        function ge(e4) {
            return e4 && "undefined" != typeof e4.getElementsByTagName && e4;
        }
        n1 = oe.support = {
        }, o1 = oe.isXML = function(e4) {
            var t2 = e4 && (e4.ownerDocument || e4).documentElement;
            return !!t2 && "HTML" !== t2.nodeName;
        }, p1 = oe.setDocument = function(e4) {
            var t2, i2, a2 = e4 ? e4.ownerDocument || e4 : w1;
            return a2 !== d1 && 9 === a2.nodeType && a2.documentElement ? (d1 = a2, h1 = d1.documentElement, g1 = !o1(d1), w1 !== d1 && (i2 = d1.defaultView) && i2.top !== i2 && (i2.addEventListener ? i2.addEventListener("unload", re, false) : i2.attachEvent && i2.attachEvent("onunload", re)), n1.attributes = ue(function(e5) {
                return e5.className = "i", !e5.getAttribute("className");
            }), n1.getElementsByTagName = ue(function(e5) {
                return e5.appendChild(d1.createComment("")), !e5.getElementsByTagName("*").length;
            }), n1.getElementsByClassName = Q.test(d1.getElementsByClassName), n1.getById = ue(function(e5) {
                return h1.appendChild(e5).id = b1, !d1.getElementsByName || !d1.getElementsByName(b1).length;
            }), n1.getById ? (r1.filter.ID = function(e5) {
                var t3 = e5.replace(Z, ee);
                return function(e6) {
                    return e6.getAttribute("id") === t3;
                };
            }, r1.find.ID = function(e5, t3) {
                if ("undefined" != typeof t3.getElementById && g1) {
                    var n2 = t3.getElementById(e5);
                    return n2 ? [
                        n2
                    ] : [];
                }
            }) : (r1.filter.ID = function(e5) {
                var t3 = e5.replace(Z, ee);
                return function(e6) {
                    var n3 = "undefined" != typeof e6.getAttributeNode && e6.getAttributeNode("id");
                    return n3 && n3.value === t3;
                };
            }, r1.find.ID = function(e5, t3) {
                if ("undefined" != typeof t3.getElementById && g1) {
                    var n3, r2, i3, o2 = t3.getElementById(e5);
                    if (o2) {
                        if ((n3 = o2.getAttributeNode("id")) && n3.value === e5) return [
                            o2
                        ];
                        i3 = t3.getElementsByName(e5), r2 = 0;
                        while(o2 = i3[r2++])if ((n3 = o2.getAttributeNode("id")) && n3.value === e5) return [
                            o2
                        ];
                    }
                    return [];
                }
            }), r1.find.TAG = n1.getElementsByTagName ? function(e5, t3) {
                return "undefined" != typeof t3.getElementsByTagName ? t3.getElementsByTagName(e5) : n1.qsa ? t3.querySelectorAll(e5) : void 0;
            } : function(e5, t3) {
                var n4, r3 = [], i4 = 0, o3 = t3.getElementsByTagName(e5);
                if ("*" === e5) {
                    while(n4 = o3[i4++])1 === n4.nodeType && r3.push(n4);
                    return r3;
                }
                return o3;
            }, r1.find.CLASS = n1.getElementsByClassName && function(e5, t3) {
                if ("undefined" != typeof t3.getElementsByClassName && g1) return t3.getElementsByClassName(e5);
            }, v1 = [], y1 = [], (n1.qsa = Q.test(d1.querySelectorAll)) && (ue(function(e5) {
                h1.appendChild(e5).innerHTML = "<a id='" + b1 + "'></a><select id='" + b1 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e5.querySelectorAll("[msallowcapture^='']").length && y1.push("[*^$]=" + M + "*(?:''|\"\")"), e5.querySelectorAll("[selected]").length || y1.push("\\[" + M + "*(?:value|" + P + ")"), e5.querySelectorAll("[id~=" + b1 + "-]").length || y1.push("~="), e5.querySelectorAll(":checked").length || y1.push(":checked"), e5.querySelectorAll("a#" + b1 + "+*").length || y1.push(".#.+[+~]");
            }), ue(function(e5) {
                e5.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t3 = d1.createElement("input");
                t3.setAttribute("type", "hidden"), e5.appendChild(t3).setAttribute("name", "D"), e5.querySelectorAll("[name=d]").length && y1.push("name" + M + "*[*^$|!~]?="), 2 !== e5.querySelectorAll(":enabled").length && y1.push(":enabled", ":disabled"), h1.appendChild(e5).disabled = true, 2 !== e5.querySelectorAll(":disabled").length && y1.push(":enabled", ":disabled"), e5.querySelectorAll("*,:x"), y1.push(",.*:");
            })), (n1.matchesSelector = Q.test(m1 = h1.matches || h1.webkitMatchesSelector || h1.mozMatchesSelector || h1.oMatchesSelector || h1.msMatchesSelector)) && ue(function(e5) {
                n1.disconnectedMatch = m1.call(e5, "*"), m1.call(e5, "[s!='']:x"), v1.push("!=", W);
            }), y1 = y1.length && new RegExp(y1.join("|")), v1 = v1.length && new RegExp(v1.join("|")), t2 = Q.test(h1.compareDocumentPosition), x1 = t2 || Q.test(h1.contains) ? function(e5, t3) {
                var n4 = 9 === e5.nodeType ? e5.documentElement : e5, r3 = t3 && t3.parentNode;
                return e5 === r3 || !(!r3 || 1 !== r3.nodeType || !(n4.contains ? n4.contains(r3) : e5.compareDocumentPosition && 16 & e5.compareDocumentPosition(r3)));
            } : function(e5, t3) {
                if (t3) while(t3 = t3.parentNode)if (t3 === e5) return true;
                return false;
            }, D = t2 ? function(e5, t3) {
                if (e5 === t3) return f1 = true, 0;
                var r3 = !e5.compareDocumentPosition - !t3.compareDocumentPosition;
                return r3 || (1 & (r3 = (e5.ownerDocument || e5) === (t3.ownerDocument || t3) ? e5.compareDocumentPosition(t3) : 1) || !n1.sortDetached && t3.compareDocumentPosition(e5) === r3 ? e5 === d1 || e5.ownerDocument === w1 && x1(w1, e5) ? -1 : t3 === d1 || t3.ownerDocument === w1 && x1(w1, t3) ? 1 : c1 ? O(c1, e5) - O(c1, t3) : 0 : 4 & r3 ? -1 : 1);
            } : function(e5, t3) {
                if (e5 === t3) return f1 = true, 0;
                var n4, r3 = 0, i4 = e5.parentNode, o3 = t3.parentNode, a3 = [
                    e5
                ], s2 = [
                    t3
                ];
                if (!i4 || !o3) return e5 === d1 ? -1 : t3 === d1 ? 1 : i4 ? -1 : o3 ? 1 : c1 ? O(c1, e5) - O(c1, t3) : 0;
                if (i4 === o3) return ce(e5, t3);
                n4 = e5;
                while(n4 = n4.parentNode)a3.unshift(n4);
                n4 = t3;
                while(n4 = n4.parentNode)s2.unshift(n4);
                while(a3[r3] === s2[r3])r3++;
                return r3 ? ce(a3[r3], s2[r3]) : a3[r3] === w1 ? -1 : s2[r3] === w1 ? 1 : 0;
            }, d1) : d1;
        }, oe.matches = function(e4, t2) {
            return oe(e4, null, null, t2);
        }, oe.matchesSelector = function(e4, t2) {
            if ((e4.ownerDocument || e4) !== d1 && p1(e4), t2 = t2.replace(z, "='$1']"), n1.matchesSelector && g1 && !S[t2 + " "] && (!v1 || !v1.test(t2)) && (!y1 || !y1.test(t2))) try {
                var r3 = m1.call(e4, t2);
                if (r3 || n1.disconnectedMatch || e4.document && 11 !== e4.document.nodeType) return r3;
            } catch (e5) {
            }
            return oe(t2, d1, null, [
                e4
            ]).length > 0;
        }, oe.contains = function(e4, t2) {
            return (e4.ownerDocument || e4) !== d1 && p1(e4), x1(e4, t2);
        }, oe.attr = function(e4, t2) {
            (e4.ownerDocument || e4) !== d1 && p1(e4);
            var i2 = r1.attrHandle[t2.toLowerCase()], o3 = i2 && N.call(r1.attrHandle, t2.toLowerCase()) ? i2(e4, t2, !g1) : void 0;
            return (void 0) !== o3 ? o3 : n1.attributes || !g1 ? e4.getAttribute(t2) : (o3 = e4.getAttributeNode(t2)) && o3.specified ? o3.value : null;
        }, oe.escape = function(e4) {
            return (e4 + "").replace(te, ne);
        }, oe.error = function(e4) {
            throw new Error("Syntax error, unrecognized expression: " + e4);
        }, oe.uniqueSort = function(e4) {
            var t2, r3 = [], i2 = 0, o3 = 0;
            if (f1 = !n1.detectDuplicates, c1 = !n1.sortStable && e4.slice(0), e4.sort(D), f1) {
                while(t2 = e4[o3++])t2 === e4[o3] && (i2 = r3.push(o3));
                while(i2--)e4.splice(r3[i2], 1);
            }
            return c1 = null, e4;
        }, i1 = oe.getText = function(e4) {
            var t2, n4 = "", r3 = 0, o3 = e4.nodeType;
            if (o3) {
                if (1 === o3 || 9 === o3 || 11 === o3) {
                    if ("string" == typeof e4.textContent) return e4.textContent;
                    for(e4 = e4.firstChild; e4; e4 = e4.nextSibling)n4 += i1(e4);
                } else if (3 === o3 || 4 === o3) return e4.nodeValue;
            } else while(t2 = e4[r3++])n4 += i1(t2);
            return n4;
        }, (r1 = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {
            },
            find: {
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e4) {
                    return e4[1] = e4[1].replace(Z, ee), e4[3] = (e4[3] || e4[4] || e4[5] || "").replace(Z, ee), "~=" === e4[2] && (e4[3] = " " + e4[3] + " "), e4.slice(0, 4);
                },
                CHILD: function(e4) {
                    return e4[1] = e4[1].toLowerCase(), "nth" === e4[1].slice(0, 3) ? (e4[3] || oe.error(e4[0]), e4[4] = +(e4[4] ? e4[5] + (e4[6] || 1) : 2 * ("even" === e4[3] || "odd" === e4[3])), e4[5] = +(e4[7] + e4[8] || "odd" === e4[3])) : e4[3] && oe.error(e4[0]), e4;
                },
                PSEUDO: function(e4) {
                    var t2, n4 = !e4[6] && e4[2];
                    return V.CHILD.test(e4[0]) ? null : (e4[3] ? e4[2] = e4[4] || e4[5] || "" : n4 && X.test(n4) && (t2 = a1(n4, !0)) && (t2 = n4.indexOf(")", n4.length - t2) - n4.length) && (e4[0] = e4[0].slice(0, t2), e4[2] = n4.slice(0, t2)), e4.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e4) {
                    var t2 = e4.replace(Z, ee).toLowerCase();
                    return "*" === e4 ? function() {
                        return !0;
                    } : function(e5) {
                        return e5.nodeName && e5.nodeName.toLowerCase() === t2;
                    };
                },
                CLASS: function(e4) {
                    var t2 = E1[e4 + " "];
                    return t2 || (t2 = new RegExp("(^|" + M + ")" + e4 + "(" + M + "|$)")) && E1(e4, function(e5) {
                        return t2.test("string" == typeof e5.className && e5.className || "undefined" != typeof e5.getAttribute && e5.getAttribute("class") || "");
                    });
                },
                ATTR: function(e4, t2, n4) {
                    return function(r3) {
                        var i2 = oe.attr(r3, e4);
                        return null == i2 ? "!=" === t2 : !t2 || (i2 += "", "=" === t2 ? i2 === n4 : "!=" === t2 ? i2 !== n4 : "^=" === t2 ? n4 && 0 === i2.indexOf(n4) : "*=" === t2 ? n4 && i2.indexOf(n4) > -1 : "$=" === t2 ? n4 && i2.slice(-n4.length) === n4 : "~=" === t2 ? (" " + i2.replace($, " ") + " ").indexOf(n4) > -1 : "|=" === t2 && (i2 === n4 || i2.slice(0, n4.length + 1) === n4 + "-"));
                    };
                },
                CHILD: function(e4, t2, n4, r3, i2) {
                    var o3 = "nth" !== e4.slice(0, 3), a2 = "last" !== e4.slice(-4), s2 = "of-type" === t2;
                    return 1 === r3 && 0 === i2 ? function(e5) {
                        return !!e5.parentNode;
                    } : function(t3, n5, u2) {
                        var l2, c2, f2, p2, d2, h2, g2 = o3 !== a2 ? "nextSibling" : "previousSibling", y2 = t3.parentNode, v2 = s2 && t3.nodeName.toLowerCase(), m2 = !u2 && !s2, x2 = !1;
                        if (y2) {
                            if (o3) {
                                while(g2){
                                    p2 = t3;
                                    while(p2 = p2[g2])if (s2 ? p2.nodeName.toLowerCase() === v2 : 1 === p2.nodeType) return !1;
                                    h2 = g2 = "only" === e4 && !h2 && "nextSibling";
                                }
                                return !0;
                            }
                            if (h2 = [
                                a2 ? y2.firstChild : y2.lastChild
                            ], a2 && m2) {
                                x2 = (d2 = (l2 = (c2 = (f2 = (p2 = y2)[b1] || (p2[b1] = {
                                }))[p2.uniqueID] || (f2[p2.uniqueID] = {
                                }))[e4] || [])[0] === T1 && l2[1]) && l2[2], p2 = d2 && y2.childNodes[d2];
                                while(p2 = (++d2) && p2 && p2[g2] || (x2 = d2 = 0) || h2.pop())if (1 === p2.nodeType && ++x2 && p2 === t3) {
                                    c2[e4] = [
                                        T1,
                                        d2,
                                        x2
                                    ];
                                    break;
                                }
                            } else if (m2 && (x2 = d2 = (l2 = (c2 = (f2 = (p2 = t3)[b1] || (p2[b1] = {
                            }))[p2.uniqueID] || (f2[p2.uniqueID] = {
                            }))[e4] || [])[0] === T1 && l2[1]), !1 === x2) while(p2 = (++d2) && p2 && p2[g2] || (x2 = d2 = 0) || h2.pop())if ((s2 ? p2.nodeName.toLowerCase() === v2 : 1 === p2.nodeType) && ++x2 && (m2 && ((c2 = (f2 = p2[b1] || (p2[b1] = {
                            }))[p2.uniqueID] || (f2[p2.uniqueID] = {
                            }))[e4] = [
                                T1,
                                x2
                            ]), p2 === t3)) break;
                            return (x2 -= i2) === r3 || x2 % r3 == 0 && x2 / r3 >= 0;
                        }
                    };
                },
                PSEUDO: function(e4, t2) {
                    var n4, i2 = r1.pseudos[e4] || r1.setFilters[e4.toLowerCase()] || oe.error("unsupported pseudo: " + e4);
                    return i2[b1] ? i2(t2) : i2.length > 1 ? (n4 = [
                        e4,
                        e4,
                        "",
                        t2
                    ], r1.setFilters.hasOwnProperty(e4.toLowerCase()) ? se(function(e5, n5) {
                        var r3, o3 = i2(e5, t2), a2 = o3.length;
                        while(a2--)e5[r3 = O(e5, o3[a2])] = !(n5[r3] = o3[a2]);
                    }) : function(e5) {
                        return i2(e5, 0, n4);
                    }) : i2;
                }
            },
            pseudos: {
                not: se(function(e4) {
                    var t2 = [], n4 = [], r3 = s1(e4.replace(B, "$1"));
                    return r3[b1] ? se(function(e5, t3, n5, i2) {
                        var o3, a2 = r3(e5, null, i2, []), s2 = e5.length;
                        while(s2--)(o3 = a2[s2]) && (e5[s2] = !(t3[s2] = o3));
                    }) : function(e5, i2, o3) {
                        return t2[0] = e5, r3(t2, null, o3, n4), t2[0] = null, !n4.pop();
                    };
                }),
                has: se(function(e4) {
                    return function(t2) {
                        return oe(e4, t2).length > 0;
                    };
                }),
                contains: se(function(e4) {
                    return e4 = e4.replace(Z, ee), function(t2) {
                        return (t2.textContent || t2.innerText || i1(t2)).indexOf(e4) > -1;
                    };
                }),
                lang: se(function(e4) {
                    return U.test(e4 || "") || oe.error("unsupported lang: " + e4), e4 = e4.replace(Z, ee).toLowerCase(), function(t2) {
                        var n4;
                        do {
                            if (n4 = g1 ? t2.lang : t2.getAttribute("xml:lang") || t2.getAttribute("lang")) return (n4 = n4.toLowerCase()) === e4 || 0 === n4.indexOf(e4 + "-");
                        }while ((t2 = t2.parentNode) && 1 === t2.nodeType)
                        return !1;
                    };
                }),
                target: function(t2) {
                    var n4 = e3.location && e3.location.hash;
                    return n4 && n4.slice(1) === t2.id;
                },
                root: function(e4) {
                    return e4 === h1;
                },
                focus: function(e4) {
                    return e4 === d1.activeElement && (!d1.hasFocus || d1.hasFocus()) && !!(e4.type || e4.href || ~e4.tabIndex);
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e4) {
                    var t2 = e4.nodeName.toLowerCase();
                    return "input" === t2 && !!e4.checked || "option" === t2 && !!e4.selected;
                },
                selected: function(e4) {
                    return e4.parentNode && e4.parentNode.selectedIndex, !0 === e4.selected;
                },
                empty: function(e4) {
                    for(e4 = e4.firstChild; e4; e4 = e4.nextSibling)if (e4.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e4) {
                    return !r1.pseudos.empty(e4);
                },
                header: function(e4) {
                    return Y.test(e4.nodeName);
                },
                input: function(e4) {
                    return G.test(e4.nodeName);
                },
                button: function(e4) {
                    var t2 = e4.nodeName.toLowerCase();
                    return "input" === t2 && "button" === e4.type || "button" === t2;
                },
                text: function(e4) {
                    var t2;
                    return "input" === e4.nodeName.toLowerCase() && "text" === e4.type && (null == (t2 = e4.getAttribute("type")) || "text" === t2.toLowerCase());
                },
                first: he(function() {
                    return [
                        0
                    ];
                }),
                last: he(function(e4, t2) {
                    return [
                        t2 - 1
                    ];
                }),
                eq: he(function(e4, t2, n4) {
                    return [
                        n4 < 0 ? n4 + t2 : n4
                    ];
                }),
                even: he(function(e4, t2) {
                    for(var n4 = 0; n4 < t2; n4 += 2)e4.push(n4);
                    return e4;
                }),
                odd: he(function(e4, t2) {
                    for(var n4 = 1; n4 < t2; n4 += 2)e4.push(n4);
                    return e4;
                }),
                lt: he(function(e4, t2, n4) {
                    for(var r3 = n4 < 0 ? n4 + t2 : n4; (--r3) >= 0;)e4.push(r3);
                    return e4;
                }),
                gt: he(function(e4, t2, n4) {
                    for(var r3 = n4 < 0 ? n4 + t2 : n4; (++r3) < t2;)e4.push(r3);
                    return e4;
                })
            }
        }).pseudos.nth = r1.pseudos.eq;
        for(t1 in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })r1.pseudos[t1] = fe(t1);
        for(t1 in {
            submit: true,
            reset: true
        })r1.pseudos[t1] = pe(t1);
        function ye() {
        }
        ye.prototype = r1.filters = r1.pseudos, r1.setFilters = new ye, a1 = oe.tokenize = function(e4, t2) {
            var n4, i2, o3, a2, s2, u2, l2, c2 = k[e4 + " "];
            if (c2) return t2 ? 0 : c2.slice(0);
            s2 = e4, u2 = [], l2 = r1.preFilter;
            while(s2){
                n4 && !(i2 = F.exec(s2)) || (i2 && (s2 = s2.slice(i2[0].length) || s2), u2.push(o3 = [])), n4 = false, (i2 = _.exec(s2)) && (n4 = i2.shift(), o3.push({
                    value: n4,
                    type: i2[0].replace(B, " ")
                }), s2 = s2.slice(n4.length));
                for(a2 in r1.filter)!(i2 = V[a2].exec(s2)) || l2[a2] && !(i2 = l2[a2](i2)) || (n4 = i2.shift(), o3.push({
                    value: n4,
                    type: a2,
                    matches: i2
                }), s2 = s2.slice(n4.length));
                if (!n4) break;
            }
            return t2 ? s2.length : s2 ? oe.error(e4) : k(e4, u2).slice(0);
        };
        function ve(e4) {
            for(var t2 = 0, n4 = e4.length, r3 = ""; t2 < n4; t2++)r3 += e4[t2].value;
            return r3;
        }
        function me(e4, t2, n4) {
            var r3 = t2.dir, i2 = t2.next, o3 = i2 || r3, a2 = n4 && "parentNode" === o3, s2 = C1++;
            return t2.first ? function(t3, n5, i4) {
                while(t3 = t3[r3])if (1 === t3.nodeType || a2) return e4(t3, n5, i4);
                return false;
            } : function(t3, n5, u2) {
                var l2, c2, f2, p2 = [
                    T1,
                    s2
                ];
                if (u2) {
                    while(t3 = t3[r3])if ((1 === t3.nodeType || a2) && e4(t3, n5, u2)) return true;
                } else while(t3 = t3[r3])if (1 === t3.nodeType || a2) {
                    if (f2 = t3[b1] || (t3[b1] = {
                    }), c2 = f2[t3.uniqueID] || (f2[t3.uniqueID] = {
                    }), i2 && i2 === t3.nodeName.toLowerCase()) t3 = t3[r3] || t3;
                    else {
                        if ((l2 = c2[o3]) && l2[0] === T1 && l2[1] === s2) return p2[2] = l2[2];
                        if (c2[o3] = p2, p2[2] = e4(t3, n5, u2)) return true;
                    }
                }
                return false;
            };
        }
        function xe(e4) {
            return e4.length > 1 ? function(t2, n4, r3) {
                var i2 = e4.length;
                while(i2--)if (!e4[i2](t2, n4, r3)) return false;
                return true;
            } : e4[0];
        }
        function be(e4, t2, n4) {
            for(var r3 = 0, i2 = t2.length; r3 < i2; r3++)oe(e4, t2[r3], n4);
            return n4;
        }
        function we(e4, t2, n4, r3, i2) {
            for(var o3, a2 = [], s2 = 0, u2 = e4.length, l2 = null != t2; s2 < u2; s2++)(o3 = e4[s2]) && (n4 && !n4(o3, r3, i2) || (a2.push(o3), l2 && t2.push(s2)));
            return a2;
        }
        function Te(e4, t2, n4, r3, i2, o3) {
            return r3 && !r3[b1] && (r3 = Te(r3)), i2 && !i2[b1] && (i2 = Te(i2, o3)), se(function(o4, a2, s2, u2) {
                var l2, c2, f2, p2 = [], d2 = [], h2 = a2.length, g2 = o4 || be(t2 || "*", s2.nodeType ? [
                    s2
                ] : s2, []), y2 = !e4 || !o4 && t2 ? g2 : we(g2, p2, e4, s2, u2), v2 = n4 ? i2 || (o4 ? e4 : h2 || r3) ? [] : a2 : y2;
                if (n4 && n4(y2, v2, s2, u2), r3) {
                    l2 = we(v2, d2), r3(l2, [], s2, u2), c2 = l2.length;
                    while(c2--)(f2 = l2[c2]) && (v2[d2[c2]] = !(y2[d2[c2]] = f2));
                }
                if (o4) {
                    if (i2 || e4) {
                        if (i2) {
                            l2 = [], c2 = v2.length;
                            while(c2--)(f2 = v2[c2]) && l2.push(y2[c2] = f2);
                            i2(null, v2 = [], l2, u2);
                        }
                        c2 = v2.length;
                        while(c2--)(f2 = v2[c2]) && (l2 = i2 ? O(o4, f2) : p2[c2]) > -1 && (o4[l2] = !(a2[l2] = f2));
                    }
                } else v2 = we(v2 === a2 ? v2.splice(h2, v2.length) : v2), i2 ? i2(null, a2, v2, u2) : L.apply(a2, v2);
            });
        }
        function Ce(e4) {
            for(var t2, n4, i2, o3 = e4.length, a2 = r1.relative[e4[0].type], s2 = a2 || r1.relative[" "], u2 = a2 ? 1 : 0, c2 = me(function(e5) {
                return e5 === t2;
            }, s2, true), f2 = me(function(e5) {
                return O(t2, e5) > -1;
            }, s2, true), p2 = [
                function(e5, n5, r3) {
                    var i4 = !a2 && (r3 || n5 !== l1) || ((t2 = n5).nodeType ? c2(e5, n5, r3) : f2(e5, n5, r3));
                    return t2 = null, i4;
                }
            ]; u2 < o3; u2++)if (n4 = r1.relative[e4[u2].type]) p2 = [
                me(xe(p2), n4)
            ];
            else {
                if ((n4 = r1.filter[e4[u2].type].apply(null, e4[u2].matches))[b1]) {
                    for(i2 = ++u2; i2 < o3; i2++)if (r1.relative[e4[i2].type]) break;
                    return Te(u2 > 1 && xe(p2), u2 > 1 && ve(e4.slice(0, u2 - 1).concat({
                        value: " " === e4[u2 - 2].type ? "*" : ""
                    })).replace(B, "$1"), n4, u2 < i2 && Ce(e4.slice(u2, i2)), i2 < o3 && Ce(e4 = e4.slice(i2)), i2 < o3 && ve(e4));
                }
                p2.push(n4);
            }
            return xe(p2);
        }
        function Ee(e4, t2) {
            var n4 = t2.length > 0, i2 = e4.length > 0, o3 = function(o4, a2, s2, u2, c2) {
                var f2, h2, y2, v2 = 0, m2 = "0", x2 = o4 && [], b2 = [], w2 = l1, C2 = o4 || i2 && r1.find.TAG("*", c2), E2 = T1 += null == w2 ? 1 : Math.random() || 0.1, k1 = C2.length;
                for(c2 && (l1 = a2 === d1 || a2 || c2); m2 !== k1 && null != (f2 = C2[m2]); m2++){
                    if (i2 && f2) {
                        h2 = 0, a2 || f2.ownerDocument === d1 || (p1(f2), s2 = !g1);
                        while(y2 = e4[h2++])if (y2(f2, a2 || d1, s2)) {
                            u2.push(f2);
                            break;
                        }
                        c2 && (T1 = E2);
                    }
                    n4 && ((f2 = !y2 && f2) && v2--, o4 && x2.push(f2));
                }
                if (v2 += m2, n4 && m2 !== v2) {
                    h2 = 0;
                    while(y2 = t2[h2++])y2(x2, b2, a2, s2);
                    if (o4) {
                        if (v2 > 0) while(m2--)x2[m2] || b2[m2] || (b2[m2] = j.call(u2));
                        b2 = we(b2);
                    }
                    L.apply(u2, b2), c2 && !o4 && b2.length > 0 && v2 + t2.length > 1 && oe.uniqueSort(u2);
                }
                return c2 && (T1 = E2, l1 = w2), x2;
            };
            return n4 ? se(o3) : o3;
        }
        return s1 = oe.compile = function(e4, t2) {
            var n4, r3 = [], i2 = [], o3 = S[e4 + " "];
            if (!o3) {
                t2 || (t2 = a1(e4)), n4 = t2.length;
                while(n4--)(o3 = Ce(t2[n4]))[b1] ? r3.push(o3) : i2.push(o3);
                (o3 = S(e4, Ee(i2, r3))).selector = e4;
            }
            return o3;
        }, u1 = oe.select = function(e4, t2, n4, i2) {
            var o3, u2, l2, c2, f2, p2 = "function" == typeof e4 && e4, d2 = !i2 && a1(e4 = p2.selector || e4);
            if (n4 = n4 || [], 1 === d2.length) {
                if ((u2 = d2[0] = d2[0].slice(0)).length > 2 && "ID" === (l2 = u2[0]).type && 9 === t2.nodeType && g1 && r1.relative[u2[1].type]) {
                    if (!(t2 = (r1.find.ID(l2.matches[0].replace(Z, ee), t2) || [])[0])) return n4;
                    p2 && (t2 = t2.parentNode), e4 = e4.slice(u2.shift().value.length);
                }
                o3 = V.needsContext.test(e4) ? 0 : u2.length;
                while(o3--){
                    if (l2 = u2[o3], r1.relative[c2 = l2.type]) break;
                    if ((f2 = r1.find[c2]) && (i2 = f2(l2.matches[0].replace(Z, ee), K.test(u2[0].type) && ge(t2.parentNode) || t2))) {
                        if (u2.splice(o3, 1), !(e4 = i2.length && ve(u2))) return L.apply(n4, i2), n4;
                        break;
                    }
                }
            }
            return (p2 || s1(e4, d2))(i2, t2, !g1, n4, !t2 || K.test(e4) && ge(t2.parentNode) || t2), n4;
        }, n1.sortStable = b1.split("").sort(D).join("") === b1, n1.detectDuplicates = !!f1, p1(), n1.sortDetached = ue(function(e4) {
            return 1 & e4.compareDocumentPosition(d1.createElement("fieldset"));
        }), ue(function(e4) {
            return e4.innerHTML = "<a href='#'></a>", "#" === e4.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function(e4, t2, n4) {
            if (!n4) return e4.getAttribute(t2, "type" === t2.toLowerCase() ? 1 : 2);
        }), n1.attributes && ue(function(e4) {
            return e4.innerHTML = "<input/>", e4.firstChild.setAttribute("value", ""), "" === e4.firstChild.getAttribute("value");
        }) || le("value", function(e4, t2, n4) {
            if (!n4 && "input" === e4.nodeName.toLowerCase()) return e4.defaultValue;
        }), ue(function(e4) {
            return null == e4.getAttribute("disabled");
        }) || le(P, function(e4, t2, n4) {
            var r3;
            if (!n4) return true === e4[t2] ? t2.toLowerCase() : (r3 = e4.getAttributeNode(t2)) && r3.specified ? r3.value : null;
        }), oe;
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k1 = function(e3, t1, n1) {
        var r1 = [], i1 = (void 0) !== n1;
        while((e3 = e3[t1]) && 9 !== e3.nodeType)if (1 === e3.nodeType) {
            if (i1 && w(e3).is(n1)) break;
            r1.push(e3);
        }
        return r1;
    }, S = function(e3, t1) {
        for(var n1 = []; e3; e3 = e3.nextSibling)1 === e3.nodeType && e3 !== t1 && n1.push(e3);
        return n1;
    }, D = w.expr.match.needsContext;
    function N(e3, t1) {
        return e3.nodeName && e3.nodeName.toLowerCase() === t1.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e3, t1, n1) {
        return g(t1) ? w.grep(e3, function(e4, r1) {
            return !!t1.call(e4, r1, e4) !== n1;
        }) : t1.nodeType ? w.grep(e3, function(e4) {
            return e4 === t1 !== n1;
        }) : "string" != typeof t1 ? w.grep(e3, function(e4) {
            return u1.call(t1, e4) > -1 !== n1;
        }) : w.filter(t1, e3, n1);
    }
    w.filter = function(e3, t1, n1) {
        var r1 = t1[0];
        return n1 && (e3 = ":not(" + e3 + ")"), 1 === t1.length && 1 === r1.nodeType ? w.find.matchesSelector(r1, e3) ? [
            r1
        ] : [] : w.find.matches(e3, w.grep(t1, function(e4) {
            return 1 === e4.nodeType;
        }));
    }, w.fn.extend({
        find: function(e3) {
            var t1, n1, r1 = this.length, i1 = this;
            if ("string" != typeof e3) return this.pushStack(w(e3).filter(function() {
                for(t1 = 0; t1 < r1; t1++)if (w.contains(i1[t1], this)) return true;
            }));
            for(n1 = this.pushStack([]), t1 = 0; t1 < r1; t1++)w.find(e3, i1[t1], n1);
            return r1 > 1 ? w.uniqueSort(n1) : n1;
        },
        filter: function(e3) {
            return this.pushStack(j(this, e3 || [], false));
        },
        not: function(e3) {
            return this.pushStack(j(this, e3 || [], true));
        },
        is: function(e3) {
            return !!j(this, "string" == typeof e3 && D.test(e3) ? w(e3) : e3 || [], false).length;
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e3, t1, n1) {
        var i1, o1;
        if (!e3) return this;
        if (n1 = n1 || q, "string" == typeof e3) {
            if (!(i1 = "<" === e3[0] && ">" === e3[e3.length - 1] && e3.length >= 3 ? [
                null,
                e3,
                null
            ] : L.exec(e3)) || !i1[1] && t1) return !t1 || t1.jquery ? (t1 || n1).find(e3) : this.constructor(t1).find(e3);
            if (i1[1]) {
                if (t1 = t1 instanceof w ? t1[0] : t1, w.merge(this, w.parseHTML(i1[1], t1 && t1.nodeType ? t1.ownerDocument || t1 : r, !0)), A.test(i1[1]) && w.isPlainObject(t1)) for(i1 in t1)g(this[i1]) ? this[i1](t1[i1]) : this.attr(i1, t1[i1]);
                return this;
            }
            return (o1 = r.getElementById(i1[2])) && (this[0] = o1, this.length = 1), this;
        }
        return e3.nodeType ? (this[0] = e3, this.length = 1, this) : g(e3) ? (void 0) !== n1.ready ? n1.ready(e3) : e3(w) : w.makeArray(e3, this);
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/, O = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    w.fn.extend({
        has: function(e3) {
            var t1 = w(e3, this), n1 = t1.length;
            return this.filter(function() {
                for(var e4 = 0; e4 < n1; e4++)if (w.contains(this, t1[e4])) return true;
            });
        },
        closest: function(e3, t1) {
            var n1, r1 = 0, i1 = this.length, o1 = [], a1 = "string" != typeof e3 && w(e3);
            if (!D.test(e3)) for(; r1 < i1; r1++)for(n1 = this[r1]; n1 && n1 !== t1; n1 = n1.parentNode)if (n1.nodeType < 11 && (a1 ? a1.index(n1) > -1 : 1 === n1.nodeType && w.find.matchesSelector(n1, e3))) {
                o1.push(n1);
                break;
            }
            return this.pushStack(o1.length > 1 ? w.uniqueSort(o1) : o1);
        },
        index: function(e3) {
            return e3 ? "string" == typeof e3 ? u1.call(w(e3), this[0]) : u1.call(this, e3.jquery ? e3[0] : e3) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e3, t1) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e3, t1))));
        },
        addBack: function(e3) {
            return this.add(null == e3 ? this.prevObject : this.prevObject.filter(e3));
        }
    });
    function P(e3, t1) {
        while((e3 = e3[t1]) && 1 !== e3.nodeType);
        return e3;
    }
    w.each({
        parent: function(e3) {
            var t1 = e3.parentNode;
            return t1 && 11 !== t1.nodeType ? t1 : null;
        },
        parents: function(e3) {
            return k1(e3, "parentNode");
        },
        parentsUntil: function(e3, t1, n1) {
            return k1(e3, "parentNode", n1);
        },
        next: function(e3) {
            return P(e3, "nextSibling");
        },
        prev: function(e3) {
            return P(e3, "previousSibling");
        },
        nextAll: function(e3) {
            return k1(e3, "nextSibling");
        },
        prevAll: function(e3) {
            return k1(e3, "previousSibling");
        },
        nextUntil: function(e3, t1, n1) {
            return k1(e3, "nextSibling", n1);
        },
        prevUntil: function(e3, t1, n1) {
            return k1(e3, "previousSibling", n1);
        },
        siblings: function(e3) {
            return S((e3.parentNode || {
            }).firstChild, e3);
        },
        children: function(e3) {
            return S(e3.firstChild);
        },
        contents: function(e3) {
            return N(e3, "iframe") ? e3.contentDocument : (N(e3, "template") && (e3 = e3.content || e3), w.merge([], e3.childNodes));
        }
    }, function(e3, t1) {
        w.fn[e3] = function(n1, r1) {
            var i1 = w.map(this, t1, n1);
            return "Until" !== e3.slice(-5) && (r1 = n1), r1 && "string" == typeof r1 && (i1 = w.filter(r1, i1)), this.length > 1 && (O[e3] || w.uniqueSort(i1), H.test(e3) && i1.reverse()), this.pushStack(i1);
        };
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e3) {
        var t1 = {
        };
        return w.each(e3.match(M) || [], function(e4, n1) {
            t1[n1] = true;
        }), t1;
    }
    w.Callbacks = function(e3) {
        e3 = "string" == typeof e3 ? R(e3) : w.extend({
        }, e3);
        var t1, n1, r1, i1, o1 = [], a1 = [], s1 = -1, u1 = function() {
            for(i1 = i1 || e3.once, r1 = t1 = true; a1.length; s1 = -1){
                n1 = a1.shift();
                while((++s1) < o1.length)false === o1[s1].apply(n1[0], n1[1]) && e3.stopOnFalse && (s1 = o1.length, n1 = false);
            }
            e3.memory || (n1 = false), t1 = false, i1 && (o1 = n1 ? [] : "");
        }, l1 = {
            add: function() {
                return o1 && (n1 && !t1 && (s1 = o1.length - 1, a1.push(n1)), (function t2(n4) {
                    w.each(n4, function(n5, r3) {
                        g(r3) ? e3.unique && l1.has(r3) || o1.push(r3) : r3 && r3.length && "string" !== x(r3) && t2(r3);
                    });
                })(arguments), n1 && !t1 && u1()), this;
            },
            remove: function() {
                return w.each(arguments, function(e4, t2) {
                    var n4;
                    while((n4 = w.inArray(t2, o1, n4)) > -1)o1.splice(n4, 1), n4 <= s1 && s1--;
                }), this;
            },
            has: function(e4) {
                return e4 ? w.inArray(e4, o1) > -1 : o1.length > 0;
            },
            empty: function() {
                return o1 && (o1 = []), this;
            },
            disable: function() {
                return i1 = a1 = [], o1 = n1 = "", this;
            },
            disabled: function() {
                return !o1;
            },
            lock: function() {
                return i1 = a1 = [], n1 || t1 || (o1 = n1 = ""), this;
            },
            locked: function() {
                return !!i1;
            },
            fireWith: function(e4, n4) {
                return i1 || (n4 = [
                    e4,
                    (n4 = n4 || []).slice ? n4.slice() : n4
                ], a1.push(n4), t1 || u1()), this;
            },
            fire: function() {
                return l1.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r1;
            }
        };
        return l1;
    };
    function I(e3) {
        return e3;
    }
    function W(e3) {
        throw e3;
    }
    function $(e3, t1, n1, r1) {
        var i1;
        try {
            e3 && g(i1 = e3.promise) ? i1.call(e3).done(t1).fail(n1) : e3 && g(i1 = e3.then) ? i1.call(e3, t1, n1) : t1.apply(void 0, [
                e3
            ].slice(r1));
        } catch (e4) {
            n1.apply(void 0, [
                e4
            ]);
        }
    }
    w.extend({
        Deferred: function(t1) {
            var n1 = [
                [
                    "notify",
                    "progress",
                    w.Callbacks("memory"),
                    w.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    w.Callbacks("once memory"),
                    w.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    w.Callbacks("once memory"),
                    w.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], r1 = "pending", i1 = {
                state: function() {
                    return r1;
                },
                always: function() {
                    return o3.done(arguments).fail(arguments), this;
                },
                "catch": function(e3) {
                    return i1.then(null, e3);
                },
                pipe: function() {
                    var e3 = arguments;
                    return w.Deferred(function(t2) {
                        w.each(n1, function(n4, r3) {
                            var i2 = g(e3[r3[4]]) && e3[r3[4]];
                            o3[r3[1]](function() {
                                var e4 = i2 && i2.apply(this, arguments);
                                e4 && g(e4.promise) ? e4.promise().progress(t2.notify).done(t2.resolve).fail(t2.reject) : t2[r3[0] + "With"](this, i2 ? [
                                    e4
                                ] : arguments);
                            });
                        }), e3 = null;
                    }).promise();
                },
                then: function(t2, r3, i2) {
                    var o3 = 0;
                    function a1(t3, n4, r4, i4) {
                        return function() {
                            var s1 = this, u1 = arguments, l1 = function() {
                                var e3, l2;
                                if (!(t3 < o3)) {
                                    if ((e3 = r4.apply(s1, u1)) === n4.promise()) throw new TypeError("Thenable self-resolution");
                                    l2 = e3 && ("object" == typeof e3 || "function" == typeof e3) && e3.then, g(l2) ? i4 ? l2.call(e3, a1(o3, n4, I, i4), a1(o3, n4, W, i4)) : (o3++, l2.call(e3, a1(o3, n4, I, i4), a1(o3, n4, W, i4), a1(o3, n4, I, n4.notifyWith))) : (r4 !== I && (s1 = void 0, u1 = [
                                        e3
                                    ]), (i4 || n4.resolveWith)(s1, u1));
                                }
                            }, c1 = i4 ? l1 : function() {
                                try {
                                    l1();
                                } catch (e3) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e3, c1.stackTrace), t3 + 1 >= o3 && (r4 !== W && (s1 = void 0, u1 = [
                                        e3
                                    ]), n4.rejectWith(s1, u1));
                                }
                            };
                            t3 ? c1() : (w.Deferred.getStackHook && (c1.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c1));
                        };
                    }
                    return w.Deferred(function(e3) {
                        n1[0][3].add(a1(0, e3, g(i2) ? i2 : I, e3.notifyWith)), n1[1][3].add(a1(0, e3, g(t2) ? t2 : I)), n1[2][3].add(a1(0, e3, g(r3) ? r3 : W));
                    }).promise();
                },
                promise: function(e3) {
                    return null != e3 ? w.extend(e3, i1) : i1;
                }
            }, o3 = {
            };
            return w.each(n1, function(e3, t2) {
                var a1 = t2[2], s1 = t2[5];
                i1[t2[1]] = a1.add, s1 && a1.add(function() {
                    r1 = s1;
                }, n1[3 - e3][2].disable, n1[3 - e3][3].disable, n1[0][2].lock, n1[0][3].lock), a1.add(t2[3].fire), o3[t2[0]] = function() {
                    return o3[t2[0] + "With"](this === o3 ? void 0 : this, arguments), this;
                }, o3[t2[0] + "With"] = a1.fireWith;
            }), i1.promise(o3), t1 && t1.call(o3, o3), o3;
        },
        when: function(e3) {
            var t1 = arguments.length, n1 = t1, r1 = Array(n1), i1 = o1.call(arguments), a1 = w.Deferred(), s1 = function(e4) {
                return function(n4) {
                    r1[e4] = this, i1[e4] = arguments.length > 1 ? o1.call(arguments) : n4, (--t1) || a1.resolveWith(r1, i1);
                };
            };
            if (t1 <= 1 && ($(e3, a1.done(s1(n1)).resolve, a1.reject, !t1), "pending" === a1.state() || g(i1[n1] && i1[n1].then))) return a1.then();
            while(n1--)$(i1[n1], s1(n1), a1.reject);
            return a1.promise();
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t1, n1) {
        e.console && e.console.warn && t1 && B.test(t1.name) && e.console.warn("jQuery.Deferred exception: " + t1.message, t1.stack, n1);
    }, w.readyException = function(t1) {
        e.setTimeout(function() {
            throw t1;
        });
    };
    var F = w.Deferred();
    w.fn.ready = function(e3) {
        return F.then(e3)["catch"](function(e4) {
            w.readyException(e4);
        }), this;
    }, w.extend({
        isReady: false,
        readyWait: 1,
        ready: function(e3) {
            (true === e3 ? --w.readyWait : w.isReady) || (w.isReady = true, true !== e3 && (--w.readyWait) > 0 || F.resolveWith(r, [
                w
            ]));
        }
    }), w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function(e3, t1, n1, r1, i1, o3, a1) {
        var s1 = 0, u1 = e3.length, l1 = null == n1;
        if ("object" === x(n1)) {
            i1 = true;
            for(s1 in n1)z(e3, t1, s1, n1[s1], true, o3, a1);
        } else if ((void 0) !== r1 && (i1 = true, g(r1) || (a1 = true), l1 && (a1 ? (t1.call(e3, r1), t1 = null) : (l1 = t1, t1 = function(e4, t2, n4) {
            return l1.call(w(e4), n4);
        })), t1)) for(; s1 < u1; s1++)t1(e3[s1], n1, a1 ? r1 : r1.call(e3[s1], s1, t1(e3[s1], n1)));
        return i1 ? e3 : l1 ? t1.call(e3) : u1 ? t1(e3[0], n1) : o3;
    }, X = /^-ms-/, U = /-([a-z])/g;
    function V(e3, t1) {
        return t1.toUpperCase();
    }
    function G(e3) {
        return e3.replace(X, "ms-").replace(U, V);
    }
    var Y = function(e3) {
        return 1 === e3.nodeType || 9 === e3.nodeType || !+e3.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e3) {
            var t1 = e3[this.expando];
            return t1 || (t1 = {
            }, Y(e3) && (e3.nodeType ? e3[this.expando] = t1 : Object.defineProperty(e3, this.expando, {
                value: t1,
                configurable: true
            }))), t1;
        },
        set: function(e3, t1, n1) {
            var r1, i1 = this.cache(e3);
            if ("string" == typeof t1) i1[G(t1)] = n1;
            else for(r1 in t1)i1[G(r1)] = t1[r1];
            return i1;
        },
        get: function(e3, t1) {
            return (void 0) === t1 ? this.cache(e3) : e3[this.expando] && e3[this.expando][G(t1)];
        },
        access: function(e3, t1, n1) {
            return (void 0) === t1 || t1 && "string" == typeof t1 && (void 0) === n1 ? this.get(e3, t1) : (this.set(e3, t1, n1), (void 0) !== n1 ? n1 : t1);
        },
        remove: function(e3, t1) {
            var n1, r1 = e3[this.expando];
            if ((void 0) !== r1) {
                if ((void 0) !== t1) {
                    n1 = (t1 = Array.isArray(t1) ? t1.map(G) : (t1 = G(t1)) in r1 ? [
                        t1
                    ] : t1.match(M) || []).length;
                    while(n1--)delete r1[t1[n1]];
                }
                ((void 0) === t1 || w.isEmptyObject(r1)) && (e3.nodeType ? e3[this.expando] = void 0 : delete e3[this.expando]);
            }
        },
        hasData: function(e3) {
            var t1 = e3[this.expando];
            return (void 0) !== t1 && !w.isEmptyObject(t1);
        }
    };
    var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
    function te(e3) {
        return "true" === e3 || "false" !== e3 && ("null" === e3 ? null : e3 === +e3 + "" ? +e3 : Z.test(e3) ? JSON.parse(e3) : e3);
    }
    function ne(e3, t1, n1) {
        var r1;
        if ((void 0) === n1 && 1 === e3.nodeType) {
            if (r1 = "data-" + t1.replace(ee, "-$&").toLowerCase(), "string" == typeof (n1 = e3.getAttribute(r1))) {
                try {
                    n1 = te(n1);
                } catch (e4) {
                }
                K.set(e3, t1, n1);
            } else n1 = void 0;
        }
        return n1;
    }
    w.extend({
        hasData: function(e3) {
            return K.hasData(e3) || J.hasData(e3);
        },
        data: function(e3, t1, n1) {
            return K.access(e3, t1, n1);
        },
        removeData: function(e3, t1) {
            K.remove(e3, t1);
        },
        _data: function(e3, t1, n1) {
            return J.access(e3, t1, n1);
        },
        _removeData: function(e3, t1) {
            J.remove(e3, t1);
        }
    }), w.fn.extend({
        data: function(e3, t1) {
            var n1, r1, i1, o3 = this[0], a1 = o3 && o3.attributes;
            if ((void 0) === e3) {
                if (this.length && (i1 = K.get(o3), 1 === o3.nodeType && !J.get(o3, "hasDataAttrs"))) {
                    n1 = a1.length;
                    while(n1--)a1[n1] && 0 === (r1 = a1[n1].name).indexOf("data-") && (r1 = G(r1.slice(5)), ne(o3, r1, i1[r1]));
                    J.set(o3, "hasDataAttrs", true);
                }
                return i1;
            }
            return "object" == typeof e3 ? this.each(function() {
                K.set(this, e3);
            }) : z(this, function(t2) {
                var n4;
                if (o3 && (void 0) === t2) {
                    if ((void 0) !== (n4 = K.get(o3, e3))) return n4;
                    if ((void 0) !== (n4 = ne(o3, e3))) return n4;
                } else this.each(function() {
                    K.set(this, e3, t2);
                });
            }, null, t1, arguments.length > 1, null, true);
        },
        removeData: function(e3) {
            return this.each(function() {
                K.remove(this, e3);
            });
        }
    }), w.extend({
        queue: function(e3, t1, n1) {
            var r1;
            if (e3) return t1 = (t1 || "fx") + "queue", r1 = J.get(e3, t1), n1 && (!r1 || Array.isArray(n1) ? r1 = J.access(e3, t1, w.makeArray(n1)) : r1.push(n1)), r1 || [];
        },
        dequeue: function(e3, t1) {
            t1 = t1 || "fx";
            var n1 = w.queue(e3, t1), r1 = n1.length, i1 = n1.shift(), o3 = w._queueHooks(e3, t1), a1 = function() {
                w.dequeue(e3, t1);
            };
            "inprogress" === i1 && (i1 = n1.shift(), r1--), i1 && ("fx" === t1 && n1.unshift("inprogress"), delete o3.stop, i1.call(e3, a1, o3)), !r1 && o3 && o3.empty.fire();
        },
        _queueHooks: function(e3, t1) {
            var n1 = t1 + "queueHooks";
            return J.get(e3, n1) || J.access(e3, n1, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e3, [
                        t1 + "queue",
                        n1
                    ]);
                })
            });
        }
    }), w.fn.extend({
        queue: function(e3, t1) {
            var n1 = 2;
            return "string" != typeof e3 && (t1 = e3, e3 = "fx", n1--), arguments.length < n1 ? w.queue(this[0], e3) : (void 0) === t1 ? this : this.each(function() {
                var n4 = w.queue(this, e3, t1);
                w._queueHooks(this, e3), "fx" === e3 && "inprogress" !== n4[0] && w.dequeue(this, e3);
            });
        },
        dequeue: function(e3) {
            return this.each(function() {
                w.dequeue(this, e3);
            });
        },
        clearQueue: function(e3) {
            return this.queue(e3 || "fx", []);
        },
        promise: function(e3, t1) {
            var n1, r1 = 1, i1 = w.Deferred(), o3 = this, a1 = this.length, s1 = function() {
                (--r1) || i1.resolveWith(o3, [
                    o3
                ]);
            };
            "string" != typeof e3 && (t1 = e3, e3 = void 0), e3 = e3 || "fx";
            while(a1--)(n1 = J.get(o3[a1], e3 + "queueHooks")) && n1.empty && (r1++, n1.empty.add(s1));
            return s1(), i1.promise(t1);
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ], ae = function(e3, t1) {
        return "none" === (e3 = t1 || e3).style.display || "" === e3.style.display && w.contains(e3.ownerDocument, e3) && "none" === w.css(e3, "display");
    }, se = function(e3, t1, n1, r1) {
        var i1, o3, a1 = {
        };
        for(o3 in t1)a1[o3] = e3.style[o3], e3.style[o3] = t1[o3];
        i1 = n1.apply(e3, r1 || []);
        for(o3 in t1)e3.style[o3] = a1[o3];
        return i1;
    };
    function ue(e3, t1, n1, r1) {
        var i1, o3, a1 = 20, s1 = r1 ? function() {
            return r1.cur();
        } : function() {
            return w.css(e3, t1, "");
        }, u1 = s1(), l1 = n1 && n1[3] || (w.cssNumber[t1] ? "" : "px"), c1 = (w.cssNumber[t1] || "px" !== l1 && +u1) && ie.exec(w.css(e3, t1));
        if (c1 && c1[3] !== l1) {
            u1 /= 2, l1 = l1 || c1[3], c1 = +u1 || 1;
            while(a1--)w.style(e3, t1, c1 + l1), (1 - o3) * (1 - (o3 = s1() / u1 || 0.5)) <= 0 && (a1 = 0), c1 /= o3;
            c1 *= 2, w.style(e3, t1, c1 + l1), n1 = n1 || [];
        }
        return n1 && (c1 = +c1 || +u1 || 0, i1 = n1[1] ? c1 + (n1[1] + 1) * n1[2] : +n1[2], r1 && (r1.unit = l1, r1.start = c1, r1.end = i1)), i1;
    }
    var le = {
    };
    function ce(e3) {
        var t1, n1 = e3.ownerDocument, r1 = e3.nodeName, i1 = le[r1];
        return i1 || (t1 = n1.body.appendChild(n1.createElement(r1)), i1 = w.css(t1, "display"), t1.parentNode.removeChild(t1), "none" === i1 && (i1 = "block"), le[r1] = i1, i1);
    }
    function fe(e3, t1) {
        for(var n1, r1, i1 = [], o3 = 0, a1 = e3.length; o3 < a1; o3++)(r1 = e3[o3]).style && (n1 = r1.style.display, t1 ? ("none" === n1 && (i1[o3] = J.get(r1, "display") || null, i1[o3] || (r1.style.display = "")), "" === r1.style.display && ae(r1) && (i1[o3] = ce(r1))) : "none" !== n1 && (i1[o3] = "none", J.set(r1, "display", n1)));
        for(o3 = 0; o3 < a1; o3++)null != i1[o3] && (e3[o3].style.display = i1[o3]);
        return e3;
    }
    w.fn.extend({
        show: function() {
            return fe(this, true);
        },
        hide: function() {
            return fe(this);
        },
        toggle: function(e3) {
            return "boolean" == typeof e3 ? e3 ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide();
            });
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
        option: [
            1,
            "<select multiple='multiple'>",
            "</select>"
        ],
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    function ye(e3, t1) {
        var n1;
        return n1 = "undefined" != typeof e3.getElementsByTagName ? e3.getElementsByTagName(t1 || "*") : "undefined" != typeof e3.querySelectorAll ? e3.querySelectorAll(t1 || "*") : [], (void 0) === t1 || t1 && N(e3, t1) ? w.merge([
            e3
        ], n1) : n1;
    }
    function ve(e3, t1) {
        for(var n1 = 0, r1 = e3.length; n1 < r1; n1++)J.set(e3[n1], "globalEval", !t1 || J.get(t1[n1], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e3, t1, n1, r1, i1) {
        for(var o3, a1, s1, u1, l1, c1, f1 = t1.createDocumentFragment(), p1 = [], d1 = 0, h1 = e3.length; d1 < h1; d1++)if ((o3 = e3[d1]) || 0 === o3) {
            if ("object" === x(o3)) w.merge(p1, o3.nodeType ? [
                o3
            ] : o3);
            else if (me.test(o3)) {
                a1 = a1 || f1.appendChild(t1.createElement("div")), s1 = (de.exec(o3) || [
                    "",
                    ""
                ])[1].toLowerCase(), u1 = ge[s1] || ge._default, a1.innerHTML = u1[1] + w.htmlPrefilter(o3) + u1[2], c1 = u1[0];
                while(c1--)a1 = a1.lastChild;
                w.merge(p1, a1.childNodes), (a1 = f1.firstChild).textContent = "";
            } else p1.push(t1.createTextNode(o3));
        }
        f1.textContent = "", d1 = 0;
        while(o3 = p1[d1++])if (r1 && w.inArray(o3, r1) > -1) i1 && i1.push(o3);
        else if (l1 = w.contains(o3.ownerDocument, o3), a1 = ye(f1.appendChild(o3), "script"), l1 && ve(a1), n1) {
            c1 = 0;
            while(o3 = a1[c1++])he.test(o3.type || "") && n1.push(o3);
        }
        return f1;
    }
    (function() {
        var e3 = r.createDocumentFragment().appendChild(r.createElement("div")), t1 = r.createElement("input");
        t1.setAttribute("type", "radio"), t1.setAttribute("checked", "checked"), t1.setAttribute("name", "t"), e3.appendChild(t1), h.checkClone = e3.cloneNode(true).cloneNode(true).lastChild.checked, e3.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e3.cloneNode(true).lastChild.defaultValue;
    })();
    var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return true;
    }
    function ke() {
        return false;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e3) {
        }
    }
    function De(e3, t1, n1, r1, i1, o3) {
        var a1, s1;
        if ("object" == typeof t1) {
            "string" != typeof n1 && (r1 = r1 || n1, n1 = void 0);
            for(s1 in t1)De(e3, s1, n1, r1, t1[s1], o3);
            return e3;
        }
        if (null == r1 && null == i1 ? (i1 = n1, r1 = n1 = void 0) : null == i1 && ("string" == typeof n1 ? (i1 = r1, r1 = void 0) : (i1 = r1, r1 = n1, n1 = void 0)), false === i1) i1 = ke;
        else if (!i1) return e3;
        return 1 === o3 && (a1 = i1, (i1 = function(e4) {
            return w().off(e4), a1.apply(this, arguments);
        }).guid = a1.guid || (a1.guid = w.guid++)), e3.each(function() {
            w.event.add(this, t1, i1, r1, n1);
        });
    }
    w.event = {
        global: {
        },
        add: function(e3, t1, n1, r1, i1) {
            var o3, a1, s1, u1, l1, c1, f1, p1, d1, h1, g1, y1 = J.get(e3);
            if (y1) {
                n1.handler && (n1 = (o3 = n1).handler, i1 = o3.selector), i1 && w.find.matchesSelector(be, i1), n1.guid || (n1.guid = w.guid++), (u1 = y1.events) || (u1 = y1.events = {
                }), (a1 = y1.handle) || (a1 = y1.handle = function(t2) {
                    return "undefined" != typeof w && w.event.triggered !== t2.type ? w.event.dispatch.apply(e3, arguments) : void 0;
                }), l1 = (t1 = (t1 || "").match(M) || [
                    ""
                ]).length;
                while(l1--)d1 = g1 = (s1 = Ce.exec(t1[l1]) || [])[1], h1 = (s1[2] || "").split(".").sort(), d1 && (f1 = w.event.special[d1] || {
                }, d1 = (i1 ? f1.delegateType : f1.bindType) || d1, f1 = w.event.special[d1] || {
                }, c1 = w.extend({
                    type: d1,
                    origType: g1,
                    data: r1,
                    handler: n1,
                    guid: n1.guid,
                    selector: i1,
                    needsContext: i1 && w.expr.match.needsContext.test(i1),
                    namespace: h1.join(".")
                }, o3), (p1 = u1[d1]) || ((p1 = u1[d1] = []).delegateCount = 0, f1.setup && false !== f1.setup.call(e3, r1, h1, a1) || e3.addEventListener && e3.addEventListener(d1, a1)), f1.add && (f1.add.call(e3, c1), c1.handler.guid || (c1.handler.guid = n1.guid)), i1 ? p1.splice(p1.delegateCount++, 0, c1) : p1.push(c1), w.event.global[d1] = true);
            }
        },
        remove: function(e3, t1, n1, r1, i1) {
            var o3, a1, s1, u1, l1, c1, f1, p1, d1, h1, g1, y1 = J.hasData(e3) && J.get(e3);
            if (y1 && (u1 = y1.events)) {
                l1 = (t1 = (t1 || "").match(M) || [
                    ""
                ]).length;
                while(l1--)if (s1 = Ce.exec(t1[l1]) || [], d1 = g1 = s1[1], h1 = (s1[2] || "").split(".").sort(), d1) {
                    f1 = w.event.special[d1] || {
                    }, p1 = u1[d1 = (r1 ? f1.delegateType : f1.bindType) || d1] || [], s1 = s1[2] && new RegExp("(^|\\.)" + h1.join("\\.(?:.*\\.|)") + "(\\.|$)"), a1 = o3 = p1.length;
                    while(o3--)c1 = p1[o3], !i1 && g1 !== c1.origType || n1 && n1.guid !== c1.guid || s1 && !s1.test(c1.namespace) || r1 && r1 !== c1.selector && ("**" !== r1 || !c1.selector) || (p1.splice(o3, 1), c1.selector && p1.delegateCount--, f1.remove && f1.remove.call(e3, c1));
                    a1 && !p1.length && (f1.teardown && false !== f1.teardown.call(e3, h1, y1.handle) || w.removeEvent(e3, d1, y1.handle), delete u1[d1]);
                } else for(d1 in u1)w.event.remove(e3, d1 + t1[l1], n1, r1, true);
                w.isEmptyObject(u1) && J.remove(e3, "handle events");
            }
        },
        dispatch: function(e3) {
            var t1 = w.event.fix(e3), n1, r1, i1, o3, a1, s1, u1 = new Array(arguments.length), l1 = (J.get(this, "events") || {
            })[t1.type] || [], c1 = w.event.special[t1.type] || {
            };
            for(u1[0] = t1, n1 = 1; n1 < arguments.length; n1++)u1[n1] = arguments[n1];
            if (t1.delegateTarget = this, !c1.preDispatch || false !== c1.preDispatch.call(this, t1)) {
                s1 = w.event.handlers.call(this, t1, l1), n1 = 0;
                while((o3 = s1[n1++]) && !t1.isPropagationStopped()){
                    t1.currentTarget = o3.elem, r1 = 0;
                    while((a1 = o3.handlers[r1++]) && !t1.isImmediatePropagationStopped())t1.rnamespace && !t1.rnamespace.test(a1.namespace) || (t1.handleObj = a1, t1.data = a1.data, (void 0) !== (i1 = ((w.event.special[a1.origType] || {
                    }).handle || a1.handler).apply(o3.elem, u1)) && false === (t1.result = i1) && (t1.preventDefault(), t1.stopPropagation()));
                }
                return c1.postDispatch && c1.postDispatch.call(this, t1), t1.result;
            }
        },
        handlers: function(e3, t1) {
            var n1, r1, i1, o3, a1, s1 = [], u1 = t1.delegateCount, l1 = e3.target;
            if (u1 && l1.nodeType && !("click" === e3.type && e3.button >= 1)) for(; l1 !== this; l1 = l1.parentNode || this)if (1 === l1.nodeType && ("click" !== e3.type || true !== l1.disabled)) {
                for(o3 = [], a1 = {
                }, n1 = 0; n1 < u1; n1++)(void 0) === a1[i1 = (r1 = t1[n1]).selector + " "] && (a1[i1] = r1.needsContext ? w(i1, this).index(l1) > -1 : w.find(i1, this, null, [
                    l1
                ]).length), a1[i1] && o3.push(r1);
                o3.length && s1.push({
                    elem: l1,
                    handlers: o3
                });
            }
            return l1 = this, u1 < t1.length && s1.push({
                elem: l1,
                handlers: t1.slice(u1)
            }), s1;
        },
        addProp: function(e3, t1) {
            Object.defineProperty(w.Event.prototype, e3, {
                enumerable: true,
                configurable: true,
                get: g(t1) ? function() {
                    if (this.originalEvent) return t1(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e3];
                },
                set: function(t2) {
                    Object.defineProperty(this, e3, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: t2
                    });
                }
            });
        },
        fix: function(e3) {
            return e3[w.expando] ? e3 : new w.Event(e3);
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), false;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), false;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), false;
                },
                _default: function(e3) {
                    return N(e3.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e3) {
                    (void 0) !== e3.result && e3.originalEvent && (e3.originalEvent.returnValue = e3.result);
                }
            }
        }
    }, w.removeEvent = function(e3, t1, n1) {
        e3.removeEventListener && e3.removeEventListener(t1, n1);
    }, w.Event = function(e3, t1) {
        if (!(this instanceof w.Event)) return new w.Event(e3, t1);
        e3 && e3.type ? (this.originalEvent = e3, this.type = e3.type, this.isDefaultPrevented = e3.defaultPrevented || (void 0) === e3.defaultPrevented && false === e3.returnValue ? Ee : ke, this.target = e3.target && 3 === e3.target.nodeType ? e3.target.parentNode : e3.target, this.currentTarget = e3.currentTarget, this.relatedTarget = e3.relatedTarget) : this.type = e3, t1 && w.extend(this, t1), this.timeStamp = e3 && e3.timeStamp || Date.now(), this[w.expando] = true;
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: false,
        preventDefault: function() {
            var e3 = this.originalEvent;
            this.isDefaultPrevented = Ee, e3 && !this.isSimulated && e3.preventDefault();
        },
        stopPropagation: function() {
            var e3 = this.originalEvent;
            this.isPropagationStopped = Ee, e3 && !this.isSimulated && e3.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e3 = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e3 && !this.isSimulated && e3.stopImmediatePropagation(), this.stopPropagation();
        }
    }, w.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function(e3) {
            var t1 = e3.button;
            return null == e3.which && we.test(e3.type) ? null != e3.charCode ? e3.charCode : e3.keyCode : !e3.which && (void 0) !== t1 && Te.test(e3.type) ? 1 & t1 ? 1 : 2 & t1 ? 3 : 4 & t1 ? 2 : 0 : e3.which;
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e3, t1) {
        w.event.special[e3] = {
            delegateType: t1,
            bindType: t1,
            handle: function(e4) {
                var n1, r1 = this, i1 = e4.relatedTarget, o3 = e4.handleObj;
                return i1 && (i1 === r1 || w.contains(r1, i1)) || (e4.type = o3.origType, n1 = o3.handler.apply(this, arguments), e4.type = t1), n1;
            }
        };
    }), w.fn.extend({
        on: function(e3, t1, n1, r1) {
            return De(this, e3, t1, n1, r1);
        },
        one: function(e3, t1, n1, r1) {
            return De(this, e3, t1, n1, r1, 1);
        },
        off: function(e3, t1, n1) {
            var r1, i1;
            if (e3 && e3.preventDefault && e3.handleObj) return r1 = e3.handleObj, w(e3.delegateTarget).off(r1.namespace ? r1.origType + "." + r1.namespace : r1.origType, r1.selector, r1.handler), this;
            if ("object" == typeof e3) {
                for(i1 in e3)this.off(i1, t1, e3[i1]);
                return this;
            }
            return false !== t1 && "function" != typeof t1 || (n1 = t1, t1 = void 0), false === n1 && (n1 = ke), this.each(function() {
                w.event.remove(this, e3, n1, t1);
            });
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e3, t1) {
        return N(e3, "table") && N(11 !== t1.nodeType ? t1 : t1.firstChild, "tr") ? w(e3).children("tbody")[0] || e3 : e3;
    }
    function He(e3) {
        return e3.type = (null !== e3.getAttribute("type")) + "/" + e3.type, e3;
    }
    function Oe(e3) {
        return "true/" === (e3.type || "").slice(0, 5) ? e3.type = e3.type.slice(5) : e3.removeAttribute("type"), e3;
    }
    function Pe(e3, t1) {
        var n1, r1, i1, o3, a1, s1, u1, l1;
        if (1 === t1.nodeType) {
            if (J.hasData(e3) && (o3 = J.access(e3), a1 = J.set(t1, o3), l1 = o3.events)) {
                delete a1.handle, a1.events = {
                };
                for(i1 in l1)for(n1 = 0, r1 = l1[i1].length; n1 < r1; n1++)w.event.add(t1, i1, l1[i1][n1]);
            }
            K.hasData(e3) && (s1 = K.access(e3), u1 = w.extend({
            }, s1), K.set(t1, u1));
        }
    }
    function Me(e3, t1) {
        var n1 = t1.nodeName.toLowerCase();
        "input" === n1 && pe.test(e3.type) ? t1.checked = e3.checked : "input" !== n1 && "textarea" !== n1 || (t1.defaultValue = e3.defaultValue);
    }
    function Re(e3, t1, n1, r1) {
        t1 = a1.apply([], t1);
        var i1, o3, s1, u1, l1, c1, f1 = 0, p1 = e3.length, d1 = p1 - 1, y1 = t1[0], v1 = g(y1);
        if (v1 || p1 > 1 && "string" == typeof y1 && !h.checkClone && je.test(y1)) return e3.each(function(i2) {
            var o4 = e3.eq(i2);
            v1 && (t1[0] = y1.call(this, i2, o4.html())), Re(o4, t1, n1, r1);
        });
        if (p1 && (i1 = xe(t1, e3[0].ownerDocument, false, e3, r1), o3 = i1.firstChild, 1 === i1.childNodes.length && (i1 = o3), o3 || r1)) {
            for(u1 = (s1 = w.map(ye(i1, "script"), He)).length; f1 < p1; f1++)l1 = i1, f1 !== d1 && (l1 = w.clone(l1, true, true), u1 && w.merge(s1, ye(l1, "script"))), n1.call(e3[f1], l1, f1);
            if (u1) for(c1 = s1[s1.length - 1].ownerDocument, w.map(s1, Oe), f1 = 0; f1 < u1; f1++)l1 = s1[f1], he.test(l1.type || "") && !J.access(l1, "globalEval") && w.contains(c1, l1) && (l1.src && "module" !== (l1.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l1.src) : m(l1.textContent.replace(qe, ""), c1, l1));
        }
        return e3;
    }
    function Ie(e3, t1, n1) {
        for(var r1, i1 = t1 ? w.filter(t1, e3) : e3, o3 = 0; null != (r1 = i1[o3]); o3++)n1 || 1 !== r1.nodeType || w.cleanData(ye(r1)), r1.parentNode && (n1 && w.contains(r1.ownerDocument, r1) && ve(ye(r1, "script")), r1.parentNode.removeChild(r1));
        return e3;
    }
    w.extend({
        htmlPrefilter: function(e3) {
            return e3.replace(Ne, "<$1></$2>");
        },
        clone: function(e3, t1, n1) {
            var r1, i1, o3, a1, s1 = e3.cloneNode(true), u1 = w.contains(e3.ownerDocument, e3);
            if (!(h.noCloneChecked || 1 !== e3.nodeType && 11 !== e3.nodeType || w.isXMLDoc(e3))) for(a1 = ye(s1), r1 = 0, i1 = (o3 = ye(e3)).length; r1 < i1; r1++)Me(o3[r1], a1[r1]);
            if (t1) {
                if (n1) for(o3 = o3 || ye(e3), a1 = a1 || ye(s1), r1 = 0, i1 = o3.length; r1 < i1; r1++)Pe(o3[r1], a1[r1]);
                else Pe(e3, s1);
            }
            return (a1 = ye(s1, "script")).length > 0 && ve(a1, !u1 && ye(e3, "script")), s1;
        },
        cleanData: function(e3) {
            for(var t1, n1, r1, i1 = w.event.special, o3 = 0; (void 0) !== (n1 = e3[o3]); o3++)if (Y(n1)) {
                if (t1 = n1[J.expando]) {
                    if (t1.events) for(r1 in t1.events)i1[r1] ? w.event.remove(n1, r1) : w.removeEvent(n1, r1, t1.handle);
                    n1[J.expando] = void 0;
                }
                n1[K.expando] && (n1[K.expando] = void 0);
            }
        }
    }), w.fn.extend({
        detach: function(e3) {
            return Ie(this, e3, true);
        },
        remove: function(e3) {
            return Ie(this, e3);
        },
        text: function(e3) {
            return z(this, function(e4) {
                return (void 0) === e4 ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e4);
                });
            }, null, e3, arguments.length);
        },
        append: function() {
            return Re(this, arguments, function(e3) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e3).appendChild(e3);
            });
        },
        prepend: function() {
            return Re(this, arguments, function(e3) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t1 = Le(this, e3);
                    t1.insertBefore(e3, t1.firstChild);
                }
            });
        },
        before: function() {
            return Re(this, arguments, function(e3) {
                this.parentNode && this.parentNode.insertBefore(e3, this);
            });
        },
        after: function() {
            return Re(this, arguments, function(e3) {
                this.parentNode && this.parentNode.insertBefore(e3, this.nextSibling);
            });
        },
        empty: function() {
            for(var e3, t2 = 0; null != (e3 = this[t2]); t2++)1 === e3.nodeType && (w.cleanData(ye(e3, false)), e3.textContent = "");
            return this;
        },
        clone: function(e3, t2) {
            return e3 = null != e3 && e3, t2 = null == t2 ? e3 : t2, this.map(function() {
                return w.clone(this, e3, t2);
            });
        },
        html: function(e3) {
            return z(this, function(e4) {
                var t2 = this[0] || {
                }, n1 = 0, r1 = this.length;
                if ((void 0) === e4 && 1 === t2.nodeType) return t2.innerHTML;
                if ("string" == typeof e4 && !Ae.test(e4) && !ge[(de.exec(e4) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    e4 = w.htmlPrefilter(e4);
                    try {
                        for(; n1 < r1; n1++)1 === (t2 = this[n1] || {
                        }).nodeType && (w.cleanData(ye(t2, false)), t2.innerHTML = e4);
                        t2 = 0;
                    } catch (e5) {
                    }
                }
                t2 && this.empty().append(e4);
            }, null, e3, arguments.length);
        },
        replaceWith: function() {
            var e3 = [];
            return Re(this, arguments, function(t2) {
                var n1 = this.parentNode;
                w.inArray(this, e3) < 0 && (w.cleanData(ye(this)), n1 && n1.replaceChild(t2, this));
            }, e3);
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e3, t2) {
        w.fn[e3] = function(e4) {
            for(var n1, r1 = [], i1 = w(e4), o3 = i1.length - 1, a1 = 0; a1 <= o3; a1++)n1 = a1 === o3 ? this : this.clone(true), w(i1[a1])[t2](n1), s1.apply(r1, n1.get());
            return this.pushStack(r1);
        };
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function(t2) {
        var n1 = t2.ownerDocument.defaultView;
        return n1 && n1.opener || (n1 = e), n1.getComputedStyle(t2);
    }, Be = new RegExp(oe.join("|"), "i");
    (function() {
        function t2() {
            if (c2) {
                l2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l2).appendChild(c2);
                var t3 = e.getComputedStyle(c2);
                i2 = "1%" !== t3.top, u2 = 12 === n4(t3.marginLeft), c2.style.right = "60%", s2 = 36 === n4(t3.right), o3 = 36 === n4(t3.width), c2.style.position = "absolute", a2 = 36 === c2.offsetWidth || "absolute", be.removeChild(l2), c2 = null;
            }
        }
        function n4(e3) {
            return Math.round(parseFloat(e3));
        }
        var i2, o3, a2, s2, u2, l2 = r.createElement("div"), c2 = r.createElement("div");
        c2.style && (c2.style.backgroundClip = "content-box", c2.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c2.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t2(), o3;
            },
            pixelBoxStyles: function() {
                return t2(), s2;
            },
            pixelPosition: function() {
                return t2(), i2;
            },
            reliableMarginLeft: function() {
                return t2(), u2;
            },
            scrollboxSize: function() {
                return t2(), a2;
            }
        }));
    })();
    function Fe(e3, t2, n4) {
        var r1, i2, o3, a2, s2 = e3.style;
        return (n4 = n4 || $e(e3)) && ("" !== (a2 = n4.getPropertyValue(t2) || n4[t2]) || w.contains(e3.ownerDocument, e3) || (a2 = w.style(e3, t2)), !h.pixelBoxStyles() && We.test(a2) && Be.test(t2) && (r1 = s2.width, i2 = s2.minWidth, o3 = s2.maxWidth, s2.minWidth = s2.maxWidth = s2.width = a2, a2 = n4.width, s2.width = r1, s2.minWidth = i2, s2.maxWidth = o3)), (void 0) !== a2 ? a2 + "" : a2;
    }
    function _e(e3, t2) {
        return {
            get: function() {
                if (!e3()) return (this.get = t2).apply(this, arguments);
                delete this.get;
            }
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ge = [
        "Webkit",
        "Moz",
        "ms"
    ], Ye = r.createElement("div").style;
    function Qe(e3) {
        if (e3 in Ye) return e3;
        var t2 = e3[0].toUpperCase() + e3.slice(1), n4 = Ge.length;
        while(n4--)if ((e3 = Ge[n4] + t2) in Ye) return e3;
    }
    function Je(e3) {
        var t2 = w.cssProps[e3];
        return t2 || (t2 = w.cssProps[e3] = Qe(e3) || e3), t2;
    }
    function Ke(e3, t2, n4) {
        var r1 = ie.exec(t2);
        return r1 ? Math.max(0, r1[2] - (n4 || 0)) + (r1[3] || "px") : t2;
    }
    function Ze(e3, t2, n4, r1, i2, o3) {
        var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0;
        if (n4 === (r1 ? "border" : "content")) return 0;
        for(; a2 < 4; a2 += 2)"margin" === n4 && (u2 += w.css(e3, n4 + oe[a2], true, i2)), r1 ? ("content" === n4 && (u2 -= w.css(e3, "padding" + oe[a2], true, i2)), "margin" !== n4 && (u2 -= w.css(e3, "border" + oe[a2] + "Width", true, i2))) : (u2 += w.css(e3, "padding" + oe[a2], true, i2), "padding" !== n4 ? u2 += w.css(e3, "border" + oe[a2] + "Width", true, i2) : s2 += w.css(e3, "border" + oe[a2] + "Width", true, i2));
        return !r1 && o3 >= 0 && (u2 += Math.max(0, Math.ceil(e3["offset" + t2[0].toUpperCase() + t2.slice(1)] - o3 - u2 - s2 - 0.5))), u2;
    }
    function et(e3, t2, n4) {
        var r1 = $e(e3), i2 = Fe(e3, t2, r1), o3 = "border-box" === w.css(e3, "boxSizing", false, r1), a2 = o3;
        if (We.test(i2)) {
            if (!n4) return i2;
            i2 = "auto";
        }
        return a2 = a2 && (h.boxSizingReliable() || i2 === e3.style[t2]), ("auto" === i2 || !parseFloat(i2) && "inline" === w.css(e3, "display", false, r1)) && (i2 = e3["offset" + t2[0].toUpperCase() + t2.slice(1)], a2 = true), (i2 = parseFloat(i2) || 0) + Ze(e3, t2, n4 || (o3 ? "border" : "content"), a2, r1, i2) + "px";
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e3, t2) {
                    if (t2) {
                        var n4 = Fe(e3, "opacity");
                        return "" === n4 ? "1" : n4;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
        },
        style: function(e3, t2, n5, r1) {
            if (e3 && 3 !== e3.nodeType && 8 !== e3.nodeType && e3.style) {
                var i2, o3, a2, s2 = G(t2), u2 = Xe.test(t2), l2 = e3.style;
                if (u2 || (t2 = Je(s2)), a2 = w.cssHooks[t2] || w.cssHooks[s2], (void 0) === n5) return a2 && "get" in a2 && (void 0) !== (i2 = a2.get(e3, false, r1)) ? i2 : l2[t2];
                "string" == (o3 = typeof n5) && (i2 = ie.exec(n5)) && i2[1] && (n5 = ue(e3, t2, i2), o3 = "number"), null != n5 && n5 === n5 && ("number" === o3 && (n5 += i2 && i2[3] || (w.cssNumber[s2] ? "" : "px")), h.clearCloneStyle || "" !== n5 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && (void 0) === (n5 = a2.set(e3, n5, r1)) || (u2 ? l2.setProperty(t2, n5) : l2[t2] = n5));
            }
        },
        css: function(e3, t2, n5, r1) {
            var i4, o4, a3, s3 = G(t2);
            return Xe.test(t2) || (t2 = Je(s3)), (a3 = w.cssHooks[t2] || w.cssHooks[s3]) && "get" in a3 && (i4 = a3.get(e3, true, n5)), (void 0) === i4 && (i4 = Fe(e3, t2, r1)), "normal" === i4 && t2 in Ve && (i4 = Ve[t2]), "" === n5 || n5 ? (o4 = parseFloat(i4), true === n5 || isFinite(o4) ? o4 || 0 : i4) : i4;
        }
    }), w.each([
        "height",
        "width"
    ], function(e3, t2) {
        w.cssHooks[t2] = {
            get: function(e4, n5, r1) {
                if (n5) return !ze.test(w.css(e4, "display")) || e4.getClientRects().length && e4.getBoundingClientRect().width ? et(e4, t2, r1) : se(e4, Ue, function() {
                    return et(e4, t2, r1);
                });
            },
            set: function(e4, n5, r1) {
                var i4, o4 = $e(e4), a3 = "border-box" === w.css(e4, "boxSizing", false, o4), s3 = r1 && Ze(e4, t2, r1, a3, o4);
                return a3 && h.scrollboxSize() === o4.position && (s3 -= Math.ceil(e4["offset" + t2[0].toUpperCase() + t2.slice(1)] - parseFloat(o4[t2]) - Ze(e4, t2, "border", false, o4) - 0.5)), s3 && (i4 = ie.exec(n5)) && "px" !== (i4[3] || "px") && (e4.style[t2] = n5, n5 = w.css(e4, t2)), Ke(e4, n5, s3);
            }
        };
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e3, t2) {
        if (t2) return (parseFloat(Fe(e3, "marginLeft")) || e3.getBoundingClientRect().left - se(e3, {
            marginLeft: 0
        }, function() {
            return e3.getBoundingClientRect().left;
        })) + "px";
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e3, t2) {
        w.cssHooks[e3 + t2] = {
            expand: function(n5) {
                for(var r1 = 0, i4 = {
                }, o4 = "string" == typeof n5 ? n5.split(" ") : [
                    n5
                ]; r1 < 4; r1++)i4[e3 + oe[r1] + t2] = o4[r1] || o4[r1 - 2] || o4[0];
                return i4;
            }
        }, "margin" !== e3 && (w.cssHooks[e3 + t2].set = Ke);
    }), w.fn.extend({
        css: function(e3, t2) {
            return z(this, function(e4, t4, n5) {
                var r1, i4, o4 = {
                }, a3 = 0;
                if (Array.isArray(t4)) {
                    for(r1 = $e(e4), i4 = t4.length; a3 < i4; a3++)o4[t4[a3]] = w.css(e4, t4[a3], false, r1);
                    return o4;
                }
                return (void 0) !== n5 ? w.style(e4, t4, n5) : w.css(e4, t4);
            }, e3, t2, arguments.length > 1);
        }
    });
    function tt(e3, t2, n5, r1, i4) {
        return new tt.prototype.init(e3, t2, n5, r1, i4);
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function(e3, t2, n5, r1, i4, o4) {
            this.elem = e3, this.prop = n5, this.easing = i4 || w.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r1, this.unit = o4 || (w.cssNumber[n5] ? "" : "px");
        },
        cur: function() {
            var e3 = tt.propHooks[this.prop];
            return e3 && e3.get ? e3.get(this) : tt.propHooks._default.get(this);
        },
        run: function(e3) {
            var t2, n5 = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t2 = w.easing[this.easing](e3, this.options.duration * e3, 0, 1, this.options.duration) : this.pos = t2 = e3, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n5 && n5.set ? n5.set(this) : tt.propHooks._default.set(this), this;
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function(e3) {
                var t2;
                return 1 !== e3.elem.nodeType || null != e3.elem[e3.prop] && null == e3.elem.style[e3.prop] ? e3.elem[e3.prop] : (t2 = w.css(e3.elem, e3.prop, "")) && "auto" !== t2 ? t2 : 0;
            },
            set: function(e3) {
                w.fx.step[e3.prop] ? w.fx.step[e3.prop](e3) : 1 !== e3.elem.nodeType || null == e3.elem.style[w.cssProps[e3.prop]] && !w.cssHooks[e3.prop] ? e3.elem[e3.prop] = e3.now : w.style(e3.elem, e3.prop, e3.now + e3.unit);
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e3) {
            e3.elem.nodeType && e3.elem.parentNode && (e3.elem[e3.prop] = e3.now);
        }
    }, w.easing = {
        linear: function(e3) {
            return e3;
        },
        swing: function(e3) {
            return 0.5 - Math.cos(e3 * Math.PI) / 2;
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {
    };
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (false === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }
    function st() {
        return e.setTimeout(function() {
            nt = void 0;
        }), nt = Date.now();
    }
    function ut(e3, t2) {
        var n5, r1 = 0, i4 = {
            height: e3
        };
        for(t2 = t2 ? 1 : 0; r1 < 4; r1 += 2 - t2)i4["margin" + (n5 = oe[r1])] = i4["padding" + n5] = e3;
        return t2 && (i4.opacity = i4.width = e3), i4;
    }
    function lt(e3, t2, n5) {
        for(var r1, i4 = (pt.tweeners[t2] || []).concat(pt.tweeners["*"]), o4 = 0, a3 = i4.length; o4 < a3; o4++)if (r1 = i4[o4].call(n5, t2, e3)) return r1;
    }
    function ct(e3, t2, n5) {
        var r1, i4, o4, a3, s3, u3, l3, c2, f1 = "width" in t2 || "height" in t2, p1 = this, d1 = {
        }, h1 = e3.style, g1 = e3.nodeType && ae(e3), y1 = J.get(e3, "fxshow");
        n5.queue || (null == (a3 = w._queueHooks(e3, "fx")).unqueued && (a3.unqueued = 0, s3 = a3.empty.fire, a3.empty.fire = function() {
            a3.unqueued || s3();
        }), a3.unqueued++, p1.always(function() {
            p1.always(function() {
                a3.unqueued--, w.queue(e3, "fx").length || a3.empty.fire();
            });
        }));
        for(r1 in t2)if (i4 = t2[r1], it.test(i4)) {
            if (delete t2[r1], o4 = o4 || "toggle" === i4, i4 === (g1 ? "hide" : "show")) {
                if ("show" !== i4 || !y1 || (void 0) === y1[r1]) continue;
                g1 = true;
            }
            d1[r1] = y1 && y1[r1] || w.style(e3, r1);
        }
        if ((u3 = !w.isEmptyObject(t2)) || !w.isEmptyObject(d1)) {
            f1 && 1 === e3.nodeType && (n5.overflow = [
                h1.overflow,
                h1.overflowX,
                h1.overflowY
            ], null == (l3 = y1 && y1.display) && (l3 = J.get(e3, "display")), "none" === (c2 = w.css(e3, "display")) && (l3 ? c2 = l3 : (fe([
                e3
            ], true), l3 = e3.style.display || l3, c2 = w.css(e3, "display"), fe([
                e3
            ]))), ("inline" === c2 || "inline-block" === c2 && null != l3) && "none" === w.css(e3, "float") && (u3 || (p1.done(function() {
                h1.display = l3;
            }), null == l3 && (c2 = h1.display, l3 = "none" === c2 ? "" : c2)), h1.display = "inline-block")), n5.overflow && (h1.overflow = "hidden", p1.always(function() {
                h1.overflow = n5.overflow[0], h1.overflowX = n5.overflow[1], h1.overflowY = n5.overflow[2];
            })), u3 = false;
            for(r1 in d1)u3 || (y1 ? "hidden" in y1 && (g1 = y1.hidden) : y1 = J.access(e3, "fxshow", {
                display: l3
            }), o4 && (y1.hidden = !g1), g1 && fe([
                e3
            ], true), p1.done(function() {
                g1 || fe([
                    e3
                ]), J.remove(e3, "fxshow");
                for(r1 in d1)w.style(e3, r1, d1[r1]);
            })), u3 = lt(g1 ? y1[r1] : 0, r1, p1), r1 in y1 || (y1[r1] = u3.start, g1 && (u3.end = u3.start, u3.start = 0));
        }
    }
    function ft(e3, t2) {
        var n5, r1, i4, o4, a3;
        for(n5 in e3)if (r1 = G(n5), i4 = t2[r1], o4 = e3[n5], Array.isArray(o4) && (i4 = o4[1], o4 = e3[n5] = o4[0]), n5 !== r1 && (e3[r1] = o4, delete e3[n5]), (a3 = w.cssHooks[r1]) && "expand" in a3) {
            o4 = a3.expand(o4), delete e3[r1];
            for(n5 in o4)n5 in e3 || (e3[n5] = o4[n5], t2[n5] = i4);
        } else t2[r1] = i4;
    }
    function pt(e3, t2, n5) {
        var r1, i4, o4 = 0, a3 = pt.prefilters.length, s3 = w.Deferred().always(function() {
            delete u3.elem;
        }), u3 = function() {
            if (i4) return false;
            for(var t4 = nt || st(), n6 = Math.max(0, l3.startTime + l3.duration - t4), r3 = 1 - (n6 / l3.duration || 0), o5 = 0, a4 = l3.tweens.length; o5 < a4; o5++)l3.tweens[o5].run(r3);
            return s3.notifyWith(e3, [
                l3,
                r3,
                n6
            ]), r3 < 1 && a4 ? n6 : (a4 || s3.notifyWith(e3, [
                l3,
                1,
                0
            ]), s3.resolveWith(e3, [
                l3
            ]), false);
        }, l3 = s3.promise({
            elem: e3,
            props: w.extend({
            }, t2),
            opts: w.extend(true, {
                specialEasing: {
                },
                easing: w.easing._default
            }, n5),
            originalProperties: t2,
            originalOptions: n5,
            startTime: nt || st(),
            duration: n5.duration,
            tweens: [],
            createTween: function(t4, n6) {
                var r3 = w.Tween(e3, l3.opts, t4, n6, l3.opts.specialEasing[t4] || l3.opts.easing);
                return l3.tweens.push(r3), r3;
            },
            stop: function(t4) {
                var n6 = 0, r3 = t4 ? l3.tweens.length : 0;
                if (i4) return this;
                for(i4 = true; n6 < r3; n6++)l3.tweens[n6].run(1);
                return t4 ? (s3.notifyWith(e3, [
                    l3,
                    1,
                    0
                ]), s3.resolveWith(e3, [
                    l3,
                    t4
                ])) : s3.rejectWith(e3, [
                    l3,
                    t4
                ]), this;
            }
        }), c2 = l3.props;
        for(ft(c2, l3.opts.specialEasing); o4 < a3; o4++)if (r1 = pt.prefilters[o4].call(l3, e3, c2, l3.opts)) return g(r1.stop) && (w._queueHooks(l3.elem, l3.opts.queue).stop = r1.stop.bind(r1)), r1;
        return w.map(c2, lt, l3), g(l3.opts.start) && l3.opts.start.call(e3, l3), l3.progress(l3.opts.progress).done(l3.opts.done, l3.opts.complete).fail(l3.opts.fail).always(l3.opts.always), w.fx.timer(w.extend(u3, {
            elem: e3,
            anim: l3,
            queue: l3.opts.queue
        })), l3;
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function(e3, t2) {
                    var n5 = this.createTween(e3, t2);
                    return ue(n5.elem, e3, ie.exec(t2), n5), n5;
                }
            ]
        },
        tweener: function(e3, t2) {
            g(e3) ? (t2 = e3, e3 = [
                "*"
            ]) : e3 = e3.match(M);
            for(var n5, r1 = 0, i4 = e3.length; r1 < i4; r1++)n5 = e3[r1], pt.tweeners[n5] = pt.tweeners[n5] || [], pt.tweeners[n5].unshift(t2);
        },
        prefilters: [
            ct
        ],
        prefilter: function(e3, t2) {
            t2 ? pt.prefilters.unshift(e3) : pt.prefilters.push(e3);
        }
    }), w.speed = function(e3, t2, n5) {
        var r1 = e3 && "object" == typeof e3 ? w.extend({
        }, e3) : {
            complete: n5 || !n5 && t2 || g(e3) && e3,
            duration: e3,
            easing: n5 && t2 || t2 && !g(t2) && t2
        };
        return w.fx.off ? r1.duration = 0 : "number" != typeof r1.duration && (r1.duration in w.fx.speeds ? r1.duration = w.fx.speeds[r1.duration] : r1.duration = w.fx.speeds._default), null != r1.queue && true !== r1.queue || (r1.queue = "fx"), r1.old = r1.complete, r1.complete = function() {
            g(r1.old) && r1.old.call(this), r1.queue && w.dequeue(this, r1.queue);
        }, r1;
    }, w.fn.extend({
        fadeTo: function(e3, t2, n5, r1) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t2
            }, e3, n5, r1);
        },
        animate: function(e3, t2, n5, r1) {
            var i4 = w.isEmptyObject(e3), o4 = w.speed(t2, n5, r1), a3 = function() {
                var t4 = pt(this, w.extend({
                }, e3), o4);
                (i4 || J.get(this, "finish")) && t4.stop(true);
            };
            return a3.finish = a3, i4 || false === o4.queue ? this.each(a3) : this.queue(o4.queue, a3);
        },
        stop: function(e3, t2, n5) {
            var r1 = function(e4) {
                var t4 = e4.stop;
                delete e4.stop, t4(n5);
            };
            return "string" != typeof e3 && (n5 = t2, t2 = e3, e3 = void 0), t2 && false !== e3 && this.queue(e3 || "fx", []), this.each(function() {
                var t4 = true, i4 = null != e3 && e3 + "queueHooks", o4 = w.timers, a3 = J.get(this);
                if (i4) a3[i4] && a3[i4].stop && r1(a3[i4]);
                else for(i4 in a3)a3[i4] && a3[i4].stop && ot.test(i4) && r1(a3[i4]);
                for(i4 = o4.length; i4--;)o4[i4].elem !== this || null != e3 && o4[i4].queue !== e3 || (o4[i4].anim.stop(n5), t4 = false, o4.splice(i4, 1));
                !t4 && n5 || w.dequeue(this, e3);
            });
        },
        finish: function(e3) {
            return false !== e3 && (e3 = e3 || "fx"), this.each(function() {
                var t2, n5 = J.get(this), r1 = n5[e3 + "queue"], i4 = n5[e3 + "queueHooks"], o4 = w.timers, a3 = r1 ? r1.length : 0;
                for(n5.finish = true, w.queue(this, e3, []), i4 && i4.stop && i4.stop.call(this, true), t2 = o4.length; t2--;)o4[t2].elem === this && o4[t2].queue === e3 && (o4[t2].anim.stop(true), o4.splice(t2, 1));
                for(t2 = 0; t2 < a3; t2++)r1[t2] && r1[t2].finish && r1[t2].finish.call(this);
                delete n5.finish;
            });
        }
    }), w.each([
        "toggle",
        "show",
        "hide"
    ], function(e3, t2) {
        var n5 = w.fn[t2];
        w.fn[t2] = function(e4, r1, i4) {
            return null == e4 || "boolean" == typeof e4 ? n5.apply(this, arguments) : this.animate(ut(t2, true), e4, r1, i4);
        };
    }), w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e3, t2) {
        w.fn[e3] = function(e4, n5, r1) {
            return this.animate(t2, e4, n5, r1);
        };
    }), w.timers = [], w.fx.tick = function() {
        var e3, t2 = 0, n5 = w.timers;
        for(nt = Date.now(); t2 < n5.length; t2++)(e3 = n5[t2])() || n5[t2] !== e3 || n5.splice(t2--, 1);
        n5.length || w.fx.stop(), nt = void 0;
    }, w.fx.timer = function(e3) {
        w.timers.push(e3), w.fx.start();
    }, w.fx.interval = 13, w.fx.start = function() {
        rt || (rt = true, at());
    }, w.fx.stop = function() {
        rt = null;
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t2, n5) {
        return t2 = w.fx ? w.fx.speeds[t2] || t2 : t2, n5 = n5 || "fx", this.queue(n5, function(n6, r1) {
            var i4 = e.setTimeout(n6, t2);
            r1.stop = function() {
                e.clearTimeout(i4);
            };
        });
    }, (function() {
        var e3 = r.createElement("input"), t2 = r.createElement("select").appendChild(r.createElement("option"));
        e3.type = "checkbox", h.checkOn = "" !== e3.value, h.optSelected = t2.selected, (e3 = r.createElement("input")).value = "t", e3.type = "radio", h.radioValue = "t" === e3.value;
    })();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e3, t2) {
            return z(this, w.attr, e3, t2, arguments.length > 1);
        },
        removeAttr: function(e3) {
            return this.each(function() {
                w.removeAttr(this, e3);
            });
        }
    }), w.extend({
        attr: function(e3, t2, n5) {
            var r1, i4, o4 = e3.nodeType;
            if (3 !== o4 && 8 !== o4 && 2 !== o4) return "undefined" == typeof e3.getAttribute ? w.prop(e3, t2, n5) : (1 === o4 && w.isXMLDoc(e3) || (i4 = w.attrHooks[t2.toLowerCase()] || (w.expr.match.bool.test(t2) ? dt : void 0)), (void 0) !== n5 ? null === n5 ? void w.removeAttr(e3, t2) : i4 && "set" in i4 && (void 0) !== (r1 = i4.set(e3, n5, t2)) ? r1 : (e3.setAttribute(t2, n5 + ""), n5) : i4 && "get" in i4 && null !== (r1 = i4.get(e3, t2)) ? r1 : null == (r1 = w.find.attr(e3, t2)) ? void 0 : r1);
        },
        attrHooks: {
            type: {
                set: function(e3, t2) {
                    if (!h.radioValue && "radio" === t2 && N(e3, "input")) {
                        var n5 = e3.value;
                        return e3.setAttribute("type", t2), n5 && (e3.value = n5), t2;
                    }
                }
            }
        },
        removeAttr: function(e3, t2) {
            var n6, r1 = 0, i4 = t2 && t2.match(M);
            if (i4 && 1 === e3.nodeType) while(n6 = i4[r1++])e3.removeAttribute(n6);
        }
    }), dt = {
        set: function(e3, t2, n6) {
            return false === t2 ? w.removeAttr(e3, n6) : e3.setAttribute(n6, n6), n6;
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e3, t2) {
        var n6 = ht[t2] || w.find.attr;
        ht[t2] = function(e4, t4, r1) {
            var i4, o4, a3 = t4.toLowerCase();
            return r1 || (o4 = ht[a3], ht[a3] = i4, i4 = null != n6(e4, t4, r1) ? a3 : null, ht[a3] = o4), i4;
        };
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e3, t2) {
            return z(this, w.prop, e3, t2, arguments.length > 1);
        },
        removeProp: function(e3) {
            return this.each(function() {
                delete this[w.propFix[e3] || e3];
            });
        }
    }), w.extend({
        prop: function(e3, t2, n6) {
            var r1, i4, o4 = e3.nodeType;
            if (3 !== o4 && 8 !== o4 && 2 !== o4) return 1 === o4 && w.isXMLDoc(e3) || (t2 = w.propFix[t2] || t2, i4 = w.propHooks[t2]), (void 0) !== n6 ? i4 && "set" in i4 && (void 0) !== (r1 = i4.set(e3, n6, t2)) ? r1 : e3[t2] = n6 : i4 && "get" in i4 && null !== (r1 = i4.get(e3, t2)) ? r1 : e3[t2];
        },
        propHooks: {
            tabIndex: {
                get: function(e3) {
                    var t2 = w.find.attr(e3, "tabindex");
                    return t2 ? parseInt(t2, 10) : gt.test(e3.nodeName) || yt.test(e3.nodeName) && e3.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e3) {
            var t2 = e3.parentNode;
            return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
        },
        set: function(e3) {
            var t2 = e3.parentNode;
            t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
        }
    }), w.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        w.propFix[this.toLowerCase()] = this;
    });
    function vt(e3) {
        return (e3.match(M) || []).join(" ");
    }
    function mt(e3) {
        return e3.getAttribute && e3.getAttribute("class") || "";
    }
    function xt(e3) {
        return Array.isArray(e3) ? e3 : "string" == typeof e3 ? e3.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function(e3) {
            var t2, n6, r1, i4, o4, a3, s3, u3 = 0;
            if (g(e3)) return this.each(function(t4) {
                w(this).addClass(e3.call(this, t4, mt(this)));
            });
            if ((t2 = xt(e3)).length) while(n6 = this[u3++])if (i4 = mt(n6), r1 = 1 === n6.nodeType && " " + vt(i4) + " ") {
                a3 = 0;
                while(o4 = t2[a3++])r1.indexOf(" " + o4 + " ") < 0 && (r1 += o4 + " ");
                i4 !== (s3 = vt(r1)) && n6.setAttribute("class", s3);
            }
            return this;
        },
        removeClass: function(e3) {
            var t2, n6, r1, i4, o4, a3, s3, u3 = 0;
            if (g(e3)) return this.each(function(t4) {
                w(this).removeClass(e3.call(this, t4, mt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t2 = xt(e3)).length) while(n6 = this[u3++])if (i4 = mt(n6), r1 = 1 === n6.nodeType && " " + vt(i4) + " ") {
                a3 = 0;
                while(o4 = t2[a3++])while(r1.indexOf(" " + o4 + " ") > -1)r1 = r1.replace(" " + o4 + " ", " ");
                i4 !== (s3 = vt(r1)) && n6.setAttribute("class", s3);
            }
            return this;
        },
        toggleClass: function(e3, t2) {
            var n6 = typeof e3, r1 = "string" === n6 || Array.isArray(e3);
            return "boolean" == typeof t2 && r1 ? t2 ? this.addClass(e3) : this.removeClass(e3) : g(e3) ? this.each(function(n7) {
                w(this).toggleClass(e3.call(this, n7, mt(this), t2), t2);
            }) : this.each(function() {
                var t4, i4, o4, a3;
                if (r1) {
                    i4 = 0, o4 = w(this), a3 = xt(e3);
                    while(t4 = a3[i4++])o4.hasClass(t4) ? o4.removeClass(t4) : o4.addClass(t4);
                } else (void 0) !== e3 && "boolean" !== n6 || ((t4 = mt(this)) && J.set(this, "__className__", t4), this.setAttribute && this.setAttribute("class", t4 || false === e3 ? "" : J.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e3) {
            var t2, n6, r1 = 0;
            t2 = " " + e3 + " ";
            while(n6 = this[r1++])if (1 === n6.nodeType && (" " + vt(mt(n6)) + " ").indexOf(t2) > -1) return true;
            return false;
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e3) {
            var t2, n6, r1, i4 = this[0];
            if (arguments.length) return r1 = g(e3), this.each(function(n7) {
                var i5;
                1 === this.nodeType && (null == (i5 = r1 ? e3.call(this, n7, w(this).val()) : e3) ? i5 = "" : "number" == typeof i5 ? i5 += "" : Array.isArray(i5) && (i5 = w.map(i5, function(e4) {
                    return null == e4 ? "" : e4 + "";
                })), (t2 = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t2 && (void 0) !== t2.set(this, i5, "value") || (this.value = i5));
            });
            if (i4) return (t2 = w.valHooks[i4.type] || w.valHooks[i4.nodeName.toLowerCase()]) && "get" in t2 && (void 0) !== (n6 = t2.get(i4, "value")) ? n6 : "string" == typeof (n6 = i4.value) ? n6.replace(bt, "") : null == n6 ? "" : n6;
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e3) {
                    var t2 = w.find.attr(e3, "value");
                    return null != t2 ? t2 : vt(w.text(e3));
                }
            },
            select: {
                get: function(e3) {
                    var t2, n6, r1, i4 = e3.options, o4 = e3.selectedIndex, a3 = "select-one" === e3.type, s3 = a3 ? null : [], u3 = a3 ? o4 + 1 : i4.length;
                    for(r1 = o4 < 0 ? u3 : a3 ? o4 : 0; r1 < u3; r1++)if (((n6 = i4[r1]).selected || r1 === o4) && !n6.disabled && (!n6.parentNode.disabled || !N(n6.parentNode, "optgroup"))) {
                        if (t2 = w(n6).val(), a3) return t2;
                        s3.push(t2);
                    }
                    return s3;
                },
                set: function(e3, t2) {
                    var n6, r1, i4 = e3.options, o4 = w.makeArray(t2), a3 = i4.length;
                    while(a3--)((r1 = i4[a3]).selected = w.inArray(w.valHooks.option.get(r1), o4) > -1) && (n6 = true);
                    return n6 || (e3.selectedIndex = -1), o4;
                }
            }
        }
    }), w.each([
        "radio",
        "checkbox"
    ], function() {
        w.valHooks[this] = {
            set: function(e3, t2) {
                if (Array.isArray(t2)) return e3.checked = w.inArray(w(e3).val(), t2) > -1;
            }
        }, h.checkOn || (w.valHooks[this].get = function(e3) {
            return null === e3.getAttribute("value") ? "on" : e3.value;
        });
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function(e3) {
        e3.stopPropagation();
    };
    w.extend(w.event, {
        trigger: function(t2, n6, i4, o4) {
            var a3, s3, u3, l3, c2, p1, d1, h1, v1 = [
                i4 || r
            ], m1 = f.call(t2, "type") ? t2.type : t2, x1 = f.call(t2, "namespace") ? t2.namespace.split(".") : [];
            if (s3 = h1 = u3 = i4 = i4 || r, 3 !== i4.nodeType && 8 !== i4.nodeType && !wt.test(m1 + w.event.triggered) && (m1.indexOf(".") > -1 && (m1 = (x1 = m1.split(".")).shift(), x1.sort()), c2 = m1.indexOf(":") < 0 && "on" + m1, t2 = t2[w.expando] ? t2 : new w.Event(m1, "object" == typeof t2 && t2), t2.isTrigger = o4 ? 2 : 3, t2.namespace = x1.join("."), t2.rnamespace = t2.namespace ? new RegExp("(^|\\.)" + x1.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t2.result = void 0, t2.target || (t2.target = i4), n6 = null == n6 ? [
                t2
            ] : w.makeArray(n6, [
                t2
            ]), d1 = w.event.special[m1] || {
            }, o4 || !d1.trigger || false !== d1.trigger.apply(i4, n6))) {
                if (!o4 && !d1.noBubble && !y(i4)) {
                    for(l3 = d1.delegateType || m1, wt.test(l3 + m1) || (s3 = s3.parentNode); s3; s3 = s3.parentNode)v1.push(s3), u3 = s3;
                    u3 === (i4.ownerDocument || r) && v1.push(u3.defaultView || u3.parentWindow || e);
                }
                a3 = 0;
                while((s3 = v1[a3++]) && !t2.isPropagationStopped())h1 = s3, t2.type = a3 > 1 ? l3 : d1.bindType || m1, (p1 = (J.get(s3, "events") || {
                })[t2.type] && J.get(s3, "handle")) && p1.apply(s3, n6), (p1 = c2 && s3[c2]) && p1.apply && Y(s3) && (t2.result = p1.apply(s3, n6), false === t2.result && t2.preventDefault());
                return t2.type = m1, o4 || t2.isDefaultPrevented() || d1._default && false !== d1._default.apply(v1.pop(), n6) || !Y(i4) || c2 && g(i4[m1]) && !y(i4) && ((u3 = i4[c2]) && (i4[c2] = null), w.event.triggered = m1, t2.isPropagationStopped() && h1.addEventListener(m1, Tt), i4[m1](), t2.isPropagationStopped() && h1.removeEventListener(m1, Tt), w.event.triggered = void 0, u3 && (i4[c2] = u3)), t2.result;
            }
        },
        simulate: function(e3, t2, n6) {
            var r1 = w.extend(new w.Event, n6, {
                type: e3,
                isSimulated: true
            });
            w.event.trigger(r1, null, t2);
        }
    }), w.fn.extend({
        trigger: function(e3, t2) {
            return this.each(function() {
                w.event.trigger(e3, t2, this);
            });
        },
        triggerHandler: function(e3, t2) {
            var n6 = this[0];
            if (n6) return w.event.trigger(e3, t2, n6, true);
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e3, t2) {
        var n6 = function(e4) {
            w.event.simulate(t2, e4.target, w.event.fix(e4));
        };
        w.event.special[t2] = {
            setup: function() {
                var r1 = this.ownerDocument || this, i4 = J.access(r1, t2);
                i4 || r1.addEventListener(e3, n6, true), J.access(r1, t2, (i4 || 0) + 1);
            },
            teardown: function() {
                var r1 = this.ownerDocument || this, i4 = J.access(r1, t2) - 1;
                i4 ? J.access(r1, t2, i4) : (r1.removeEventListener(e3, n6, true), J.remove(r1, t2));
            }
        };
    });
    var Ct = e.location, Et = Date.now(), kt = /\?/;
    w.parseXML = function(t2) {
        var n6;
        if (!t2 || "string" != typeof t2) return null;
        try {
            n6 = (new e.DOMParser).parseFromString(t2, "text/xml");
        } catch (e3) {
            n6 = void 0;
        }
        return n6 && !n6.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t2), n6;
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
    function jt(e3, t2, n6, r1) {
        var i4;
        if (Array.isArray(t2)) w.each(t2, function(t4, i5) {
            n6 || St.test(e3) ? r1(e3, i5) : jt(e3 + "[" + ("object" == typeof i5 && null != i5 ? t4 : "") + "]", i5, n6, r1);
        });
        else if (n6 || "object" !== x(t2)) r1(e3, t2);
        else for(i4 in t2)jt(e3 + "[" + i4 + "]", t2[i4], n6, r1);
    }
    w.param = function(e3, t2) {
        var n6, r1 = [], i4 = function(e4, t4) {
            var n7 = g(t4) ? t4() : t4;
            r1[r1.length] = encodeURIComponent(e4) + "=" + encodeURIComponent(null == n7 ? "" : n7);
        };
        if (Array.isArray(e3) || e3.jquery && !w.isPlainObject(e3)) w.each(e3, function() {
            i4(this.name, this.value);
        });
        else for(n6 in e3)jt(n6, e3[n6], t2, i4);
        return r1.join("&");
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e3 = w.prop(this, "elements");
                return e3 ? w.makeArray(e3) : this;
            }).filter(function() {
                var e3 = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e3) && (this.checked || !pe.test(e3));
            }).map(function(e3, t2) {
                var n6 = w(this).val();
                return null == n6 ? null : Array.isArray(n6) ? w.map(n6, function(e4) {
                    return {
                        name: t2.name,
                        value: e4.replace(Dt, "\r\n")
                    };
                }) : {
                    name: t2.name,
                    value: n6.replace(Dt, "\r\n")
                };
            }).get();
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {
    }, Wt = {
    }, $t = "*/".concat("*"), Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e3) {
        return function(t2, n6) {
            "string" != typeof t2 && (n6 = t2, t2 = "*");
            var r1, i4 = 0, o4 = t2.toLowerCase().match(M) || [];
            if (g(n6)) while(r1 = o4[i4++])"+" === r1[0] ? (r1 = r1.slice(1) || "*", (e3[r1] = e3[r1] || []).unshift(n6)) : (e3[r1] = e3[r1] || []).push(n6);
        };
    }
    function _t(e3, t2, n6, r1) {
        var i4 = {
        }, o4 = e3 === Wt;
        function a3(s3) {
            var u3;
            return i4[s3] = true, w.each(e3[s3] || [], function(e4, s4) {
                var l3 = s4(t2, n6, r1);
                return "string" != typeof l3 || o4 || i4[l3] ? o4 ? !(u3 = l3) : void 0 : (t2.dataTypes.unshift(l3), a3(l3), false);
            }), u3;
        }
        return a3(t2.dataTypes[0]) || !i4["*"] && a3("*");
    }
    function zt(e3, t2) {
        var n6, r1, i4 = w.ajaxSettings.flatOptions || {
        };
        for(n6 in t2)(void 0) !== t2[n6] && ((i4[n6] ? e3 : r1 || (r1 = {
        }))[n6] = t2[n6]);
        return r1 && w.extend(true, e3, r1), e3;
    }
    function Xt(e3, t2, n6) {
        var r1, i4, o4, a3, s3 = e3.contents, u3 = e3.dataTypes;
        while("*" === u3[0])u3.shift(), (void 0) === r1 && (r1 = e3.mimeType || t2.getResponseHeader("Content-Type"));
        if (r1) for(i4 in s3)if (s3[i4] && s3[i4].test(r1)) {
            u3.unshift(i4);
            break;
        }
        if (u3[0] in n6) o4 = u3[0];
        else {
            for(i4 in n6){
                if (!u3[0] || e3.converters[i4 + " " + u3[0]]) {
                    o4 = i4;
                    break;
                }
                a3 || (a3 = i4);
            }
            o4 = o4 || a3;
        }
        if (o4) return o4 !== u3[0] && u3.unshift(o4), n6[o4];
    }
    function Ut(e3, t2, n6, r1) {
        var i4, o4, a3, s3, u3, l3 = {
        }, c2 = e3.dataTypes.slice();
        if (c2[1]) for(a3 in e3.converters)l3[a3.toLowerCase()] = e3.converters[a3];
        o4 = c2.shift();
        while(o4)if (e3.responseFields[o4] && (n6[e3.responseFields[o4]] = t2), !u3 && r1 && e3.dataFilter && (t2 = e3.dataFilter(t2, e3.dataType)), u3 = o4, o4 = c2.shift()) {
            if ("*" === o4) o4 = u3;
            else if ("*" !== u3 && u3 !== o4) {
                if (!(a3 = l3[u3 + " " + o4] || l3["* " + o4])) for(i4 in l3)if ((s3 = i4.split(" "))[1] === o4 && (a3 = l3[u3 + " " + s3[0]] || l3["* " + s3[0]])) {
                    true === a3 ? a3 = l3[i4] : true !== l3[i4] && (o4 = s3[0], c2.unshift(s3[1]));
                    break;
                }
                if (true !== a3) {
                    if (a3 && e3["throws"]) t2 = a3(t2);
                    else try {
                        t2 = a3(t2);
                    } catch (e4) {
                        return {
                            state: "parsererror",
                            error: a3 ? e4 : "No conversion from " + u3 + " to " + o4
                        };
                    }
                }
            }
        }
        return {
            state: "success",
            data: t2
        };
    }
    w.extend({
        active: 0,
        lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(e3, t2) {
            return t2 ? zt(zt(e3, w.ajaxSettings), t2) : zt(w.ajaxSettings, e3);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t2, n6) {
            "object" == typeof t2 && (n6 = t2, t2 = void 0), n6 = n6 || {
            };
            var i4, o4, a3, s3, u3, l3, c2, f1, p1, d1, h1 = w.ajaxSetup({
            }, n6), g1 = h1.context || h1, y1 = h1.context && (g1.nodeType || g1.jquery) ? w(g1) : w.event, v1 = w.Deferred(), m1 = w.Callbacks("once memory"), x1 = h1.statusCode || {
            }, b1 = {
            }, T1 = {
            }, C1 = "canceled", E1 = {
                readyState: 0,
                getResponseHeader: function(e3) {
                    var t4;
                    if (c2) {
                        if (!s3) {
                            s3 = {
                            };
                            while(t4 = Ot.exec(a3))s3[t4[1].toLowerCase()] = t4[2];
                        }
                        t4 = s3[e3.toLowerCase()];
                    }
                    return null == t4 ? null : t4;
                },
                getAllResponseHeaders: function() {
                    return c2 ? a3 : null;
                },
                setRequestHeader: function(e3, t4) {
                    return null == c2 && (e3 = T1[e3.toLowerCase()] = T1[e3.toLowerCase()] || e3, b1[e3] = t4), this;
                },
                overrideMimeType: function(e3) {
                    return null == c2 && (h1.mimeType = e3), this;
                },
                statusCode: function(e3) {
                    var t4;
                    if (e3) {
                        if (c2) E1.always(e3[E1.status]);
                        else for(t4 in e3)x1[t4] = [
                            x1[t4],
                            e3[t4]
                        ];
                    }
                    return this;
                },
                abort: function(e3) {
                    var t4 = e3 || C1;
                    return i4 && i4.abort(t4), k2(0, t4), this;
                }
            };
            if (v1.promise(E1), h1.url = ((t2 || h1.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h1.type = n6.method || n6.type || h1.method || h1.type, h1.dataTypes = (h1.dataType || "*").toLowerCase().match(M) || [
                ""
            ], null == h1.crossDomain) {
                l3 = r.createElement("a");
                try {
                    l3.href = h1.url, l3.href = l3.href, h1.crossDomain = Bt.protocol + "//" + Bt.host != l3.protocol + "//" + l3.host;
                } catch (e3) {
                    h1.crossDomain = true;
                }
            }
            if (h1.data && h1.processData && "string" != typeof h1.data && (h1.data = w.param(h1.data, h1.traditional)), _t(It, h1, n6, E1), c2) return E1;
            (f1 = w.event && h1.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h1.type = h1.type.toUpperCase(), h1.hasContent = !Mt.test(h1.type), o4 = h1.url.replace(Lt, ""), h1.hasContent ? h1.data && h1.processData && 0 === (h1.contentType || "").indexOf("application/x-www-form-urlencoded") && (h1.data = h1.data.replace(qt, "+")) : (d1 = h1.url.slice(o4.length), h1.data && (h1.processData || "string" == typeof h1.data) && (o4 += (kt.test(o4) ? "&" : "?") + h1.data, delete h1.data), false === h1.cache && (o4 = o4.replace(Ht, "$1"), d1 = (kt.test(o4) ? "&" : "?") + "_=" + Et++ + d1), h1.url = o4 + d1), h1.ifModified && (w.lastModified[o4] && E1.setRequestHeader("If-Modified-Since", w.lastModified[o4]), w.etag[o4] && E1.setRequestHeader("If-None-Match", w.etag[o4])), (h1.data && h1.hasContent && false !== h1.contentType || n6.contentType) && E1.setRequestHeader("Content-Type", h1.contentType), E1.setRequestHeader("Accept", h1.dataTypes[0] && h1.accepts[h1.dataTypes[0]] ? h1.accepts[h1.dataTypes[0]] + ("*" !== h1.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h1.accepts["*"]);
            for(p1 in h1.headers)E1.setRequestHeader(p1, h1.headers[p1]);
            if (h1.beforeSend && (false === h1.beforeSend.call(g1, E1, h1) || c2)) return E1.abort();
            if (C1 = "abort", m1.add(h1.complete), E1.done(h1.success), E1.fail(h1.error), i4 = _t(Wt, h1, n6, E1)) {
                if (E1.readyState = 1, f1 && y1.trigger("ajaxSend", [
                    E1,
                    h1
                ]), c2) return E1;
                h1.async && h1.timeout > 0 && (u3 = e.setTimeout(function() {
                    E1.abort("timeout");
                }, h1.timeout));
                try {
                    c2 = false, i4.send(b1, k2);
                } catch (e3) {
                    if (c2) throw e3;
                    k2(-1, e3);
                }
            } else k2(-1, "No Transport");
            function k2(t4, n7, r1, s4) {
                var l4, p2, d2, b2, T2, C2 = n7;
                c2 || (c2 = true, u3 && e.clearTimeout(u3), i4 = void 0, a3 = s4 || "", E1.readyState = t4 > 0 ? 4 : 0, l4 = t4 >= 200 && t4 < 300 || 304 === t4, r1 && (b2 = Xt(h1, E1, r1)), b2 = Ut(h1, b2, E1, l4), l4 ? (h1.ifModified && ((T2 = E1.getResponseHeader("Last-Modified")) && (w.lastModified[o4] = T2), (T2 = E1.getResponseHeader("etag")) && (w.etag[o4] = T2)), 204 === t4 || "HEAD" === h1.type ? C2 = "nocontent" : 304 === t4 ? C2 = "notmodified" : (C2 = b2.state, p2 = b2.data, l4 = !(d2 = b2.error))) : (d2 = C2, !t4 && C2 || (C2 = "error", t4 < 0 && (t4 = 0))), E1.status = t4, E1.statusText = (n7 || C2) + "", l4 ? v1.resolveWith(g1, [
                    p2,
                    C2,
                    E1
                ]) : v1.rejectWith(g1, [
                    E1,
                    C2,
                    d2
                ]), E1.statusCode(x1), x1 = void 0, f1 && y1.trigger(l4 ? "ajaxSuccess" : "ajaxError", [
                    E1,
                    h1,
                    l4 ? p2 : d2
                ]), m1.fireWith(g1, [
                    E1,
                    C2
                ]), f1 && (y1.trigger("ajaxComplete", [
                    E1,
                    h1
                ]), (--w.active) || w.event.trigger("ajaxStop")));
            }
            return E1;
        },
        getJSON: function(e3, t2, n6) {
            return w.get(e3, t2, n6, "json");
        },
        getScript: function(e3, t2) {
            return w.get(e3, void 0, t2, "script");
        }
    }), w.each([
        "get",
        "post"
    ], function(e3, t2) {
        w[t2] = function(e4, n6, r1, i4) {
            return g(n6) && (i4 = i4 || r1, r1 = n6, n6 = void 0), w.ajax(w.extend({
                url: e4,
                type: t2,
                dataType: i4,
                data: n6,
                success: r1
            }, w.isPlainObject(e4) && e4));
        };
    }), w._evalUrl = function(e3) {
        return w.ajax({
            url: e3,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        });
    }, w.fn.extend({
        wrapAll: function(e3) {
            var t2;
            return this[0] && (g(e3) && (e3 = e3.call(this[0])), t2 = w(e3, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
                var e4 = this;
                while(e4.firstElementChild)e4 = e4.firstElementChild;
                return e4;
            }).append(this)), this;
        },
        wrapInner: function(e3) {
            return g(e3) ? this.each(function(t2) {
                w(this).wrapInner(e3.call(this, t2));
            }) : this.each(function() {
                var t2 = w(this), n6 = t2.contents();
                n6.length ? n6.wrapAll(e3) : t2.append(e3);
            });
        },
        wrap: function(e3) {
            var t2 = g(e3);
            return this.each(function(n6) {
                w(this).wrapAll(t2 ? e3.call(this, n6) : e3);
            });
        },
        unwrap: function(e3) {
            return this.parent(e3).not("body").each(function() {
                w(this).replaceWith(this.childNodes);
            }), this;
        }
    }), w.expr.pseudos.hidden = function(e3) {
        return !w.expr.pseudos.visible(e3);
    }, w.expr.pseudos.visible = function(e3) {
        return !!(e3.offsetWidth || e3.offsetHeight || e3.getClientRects().length);
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest;
        } catch (e3) {
        }
    };
    var Vt = {
        0: 200,
        1223: 204
    }, Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t2) {
        var n6, r1;
        if (h.cors || Gt && !t2.crossDomain) return {
            send: function(i4, o4) {
                var a3, s3 = t2.xhr();
                if (s3.open(t2.type, t2.url, t2.async, t2.username, t2.password), t2.xhrFields) for(a3 in t2.xhrFields)s3[a3] = t2.xhrFields[a3];
                t2.mimeType && s3.overrideMimeType && s3.overrideMimeType(t2.mimeType), t2.crossDomain || i4["X-Requested-With"] || (i4["X-Requested-With"] = "XMLHttpRequest");
                for(a3 in i4)s3.setRequestHeader(a3, i4[a3]);
                n6 = function(e3) {
                    return function() {
                        n6 && (n6 = r1 = s3.onload = s3.onerror = s3.onabort = s3.ontimeout = s3.onreadystatechange = null, "abort" === e3 ? s3.abort() : "error" === e3 ? "number" != typeof s3.status ? o4(0, "error") : o4(s3.status, s3.statusText) : o4(Vt[s3.status] || s3.status, s3.statusText, "text" !== (s3.responseType || "text") || "string" != typeof s3.responseText ? {
                            binary: s3.response
                        } : {
                            text: s3.responseText
                        }, s3.getAllResponseHeaders()));
                    };
                }, s3.onload = n6(), r1 = s3.onerror = s3.ontimeout = n6("error"), (void 0) !== s3.onabort ? s3.onabort = r1 : s3.onreadystatechange = function() {
                    4 === s3.readyState && e.setTimeout(function() {
                        n6 && r1();
                    });
                }, n6 = n6("abort");
                try {
                    s3.send(t2.hasContent && t2.data || null);
                } catch (e3) {
                    if (n6) throw e3;
                }
            },
            abort: function() {
                n6 && n6();
            }
        };
    }), w.ajaxPrefilter(function(e3) {
        e3.crossDomain && (e3.contents.script = false);
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e3) {
                return w.globalEval(e3), e3;
            }
        }
    }), w.ajaxPrefilter("script", function(e3) {
        (void 0) === e3.cache && (e3.cache = false), e3.crossDomain && (e3.type = "GET");
    }), w.ajaxTransport("script", function(e3) {
        if (e3.crossDomain) {
            var t2, n6;
            return {
                send: function(i4, o4) {
                    t2 = w("<script>").prop({
                        charset: e3.scriptCharset,
                        src: e3.url
                    }).on("load error", n6 = function(e4) {
                        t2.remove(), n6 = null, e4 && o4("error" === e4.type ? 404 : 200, e4.type);
                    }), r.head.appendChild(t2[0]);
                },
                abort: function() {
                    n6 && n6();
                }
            };
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e3 = Yt.pop() || w.expando + "_" + Et++;
            return this[e3] = true, e3;
        }
    }), w.ajaxPrefilter("json jsonp", function(t4, n7, r1) {
        var i4, o4, a3, s3 = false !== t4.jsonp && (Qt.test(t4.url) ? "url" : "string" == typeof t4.data && 0 === (t4.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t4.data) && "data");
        if (s3 || "jsonp" === t4.dataTypes[0]) return i4 = t4.jsonpCallback = g(t4.jsonpCallback) ? t4.jsonpCallback() : t4.jsonpCallback, s3 ? t4[s3] = t4[s3].replace(Qt, "$1" + i4) : false !== t4.jsonp && (t4.url += (kt.test(t4.url) ? "&" : "?") + t4.jsonp + "=" + i4), t4.converters["script json"] = function() {
            return a3 || w.error(i4 + " was not called"), a3[0];
        }, t4.dataTypes[0] = "json", o4 = e[i4], e[i4] = function() {
            a3 = arguments;
        }, r1.always(function() {
            (void 0) === o4 ? w(e).removeProp(i4) : e[i4] = o4, t4[i4] && (t4.jsonpCallback = n7.jsonpCallback, Yt.push(i4)), a3 && g(o4) && o4(a3[0]), a3 = o4 = void 0;
        }), "script";
    }), h.createHTMLDocument = (function() {
        var e3 = r.implementation.createHTMLDocument("").body;
        return e3.innerHTML = "<form></form><form></form>", 2 === e3.childNodes.length;
    })(), w.parseHTML = function(e3, t4, n7) {
        if ("string" != typeof e3) return [];
        "boolean" == typeof t4 && (n7 = t4, t4 = false);
        var i4, o4, a3;
        return t4 || (h.createHTMLDocument ? ((i4 = (t4 = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t4.head.appendChild(i4)) : t4 = r), o4 = A.exec(e3), a3 = !n7 && [], o4 ? [
            t4.createElement(o4[1])
        ] : (o4 = xe([
            e3
        ], t4, a3), a3 && a3.length && w(a3).remove(), w.merge([], o4.childNodes));
    }, w.fn.load = function(e3, t4, n7) {
        var r1, i4, o4, a3 = this, s3 = e3.indexOf(" ");
        return s3 > -1 && (r1 = vt(e3.slice(s3)), e3 = e3.slice(0, s3)), g(t4) ? (n7 = t4, t4 = void 0) : t4 && "object" == typeof t4 && (i4 = "POST"), a3.length > 0 && w.ajax({
            url: e3,
            type: i4 || "GET",
            dataType: "html",
            data: t4
        }).done(function(e4) {
            o4 = arguments, a3.html(r1 ? w("<div>").append(w.parseHTML(e4)).find(r1) : e4);
        }).always(n7 && function(e4, t5) {
            a3.each(function() {
                n7.apply(this, o4 || [
                    e4.responseText,
                    t5,
                    e4
                ]);
            });
        }), this;
    }, w.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(e3, t4) {
        w.fn[t4] = function(e4) {
            return this.on(t4, e4);
        };
    }), w.expr.pseudos.animated = function(e3) {
        return w.grep(w.timers, function(t4) {
            return e3 === t4.elem;
        }).length;
    }, w.offset = {
        setOffset: function(e3, t4, n7) {
            var r1, i4, o4, a3, s3, u3, l3, c2 = w.css(e3, "position"), f1 = w(e3), p1 = {
            };
            "static" === c2 && (e3.style.position = "relative"), s3 = f1.offset(), o4 = w.css(e3, "top"), u3 = w.css(e3, "left"), (l3 = ("absolute" === c2 || "fixed" === c2) && (o4 + u3).indexOf("auto") > -1) ? (a3 = (r1 = f1.position()).top, i4 = r1.left) : (a3 = parseFloat(o4) || 0, i4 = parseFloat(u3) || 0), g(t4) && (t4 = t4.call(e3, n7, w.extend({
            }, s3))), null != t4.top && (p1.top = t4.top - s3.top + a3), null != t4.left && (p1.left = t4.left - s3.left + i4), "using" in t4 ? t4.using.call(e3, p1) : f1.css(p1);
        }
    }, w.fn.extend({
        offset: function(e3) {
            if (arguments.length) return (void 0) === e3 ? this : this.each(function(t4) {
                w.offset.setOffset(this, e3, t4);
            });
            var t4, n7, r1 = this[0];
            if (r1) return r1.getClientRects().length ? (t4 = r1.getBoundingClientRect(), n7 = r1.ownerDocument.defaultView, {
                top: t4.top + n7.pageYOffset,
                left: t4.left + n7.pageXOffset
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e3, t4, n7, r1 = this[0], i4 = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r1, "position")) t4 = r1.getBoundingClientRect();
                else {
                    t4 = this.offset(), n7 = r1.ownerDocument, e3 = r1.offsetParent || n7.documentElement;
                    while(e3 && (e3 === n7.body || e3 === n7.documentElement) && "static" === w.css(e3, "position"))e3 = e3.parentNode;
                    e3 && e3 !== r1 && 1 === e3.nodeType && ((i4 = w(e3).offset()).top += w.css(e3, "borderTopWidth", true), i4.left += w.css(e3, "borderLeftWidth", true));
                }
                return {
                    top: t4.top - i4.top - w.css(r1, "marginTop", true),
                    left: t4.left - i4.left - w.css(r1, "marginLeft", true)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e4 = this.offsetParent;
                while(e4 && "static" === w.css(e4, "position"))e4 = e4.offsetParent;
                return e4 || be;
            });
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e4, t5) {
        var n8 = "pageYOffset" === t5;
        w.fn[e4] = function(r3) {
            return z(this, function(e5, r4, i5) {
                var o4;
                if (y(e5) ? o4 = e5 : 9 === e5.nodeType && (o4 = e5.defaultView), (void 0) === i5) return o4 ? o4[t5] : e5[r4];
                o4 ? o4.scrollTo(n8 ? o4.pageXOffset : i5, n8 ? i5 : o4.pageYOffset) : e5[r4] = i5;
            }, e4, r3, arguments.length);
        };
    }), w.each([
        "top",
        "left"
    ], function(e4, t5) {
        w.cssHooks[t5] = _e(h.pixelPosition, function(e5, n8) {
            if (n8) return n8 = Fe(e5, t5), We.test(n8) ? w(e5).position()[t5] + "px" : n8;
        });
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e4, t5) {
        w.each({
            padding: "inner" + e4,
            content: t5,
            "": "outer" + e4
        }, function(n8, r3) {
            w.fn[r3] = function(i5, o4) {
                var a3 = arguments.length && (n8 || "boolean" != typeof i5), s3 = n8 || (true === i5 || true === o4 ? "margin" : "border");
                return z(this, function(t6, n9, i6) {
                    var o5;
                    return y(t6) ? 0 === r3.indexOf("outer") ? t6["inner" + e4] : t6.document.documentElement["client" + e4] : 9 === t6.nodeType ? (o5 = t6.documentElement, Math.max(t6.body["scroll" + e4], o5["scroll" + e4], t6.body["offset" + e4], o5["offset" + e4], o5["client" + e4])) : (void 0) === i6 ? w.css(t6, n9, s3) : w.style(t6, n9, i6, s3);
                }, t5, a3 ? i5 : void 0, a3);
            };
        });
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e4, t5) {
        w.fn[t5] = function(e5, n8) {
            return arguments.length > 0 ? this.on(t5, null, e5, n8) : this.trigger(t5);
        };
    }), w.fn.extend({
        hover: function(e4, t5) {
            return this.mouseenter(e4).mouseleave(t5 || e4);
        }
    }), w.fn.extend({
        bind: function(e4, t5, n8) {
            return this.on(e4, null, t5, n8);
        },
        unbind: function(e4, t5) {
            return this.off(e4, null, t5);
        },
        delegate: function(e4, t5, n8, r3) {
            return this.on(t5, e4, n8, r3);
        },
        undelegate: function(e4, t5, n8) {
            return 1 === arguments.length ? this.off(e4, "**") : this.off(t5, e4 || "**", n8);
        }
    }), w.proxy = function(e4, t5) {
        var n8, r3, i5;
        if ("string" == typeof t5 && (n8 = e4[t5], t5 = e4, e4 = n8), g(e4)) return r3 = o1.call(arguments, 2), i5 = function() {
            return e4.apply(t5 || this, r3.concat(o1.call(arguments)));
        }, i5.guid = e4.guid = e4.guid || w.guid++, i5;
    }, w.holdReady = function(e4) {
        e4 ? w.readyWait++ : w.ready(true);
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e4) {
        var t5 = w.type(e4);
        return ("number" === t5 || "string" === t5) && !isNaN(e4 - parseFloat(e4));
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w;
    });
    var Jt = e.jQuery, Kt = e.$;
    return w.noConflict = function(t5) {
        return e.$ === w && (e.$ = Kt), t5 && e.jQuery === w && (e.jQuery = Jt), w;
    }, t || (e.jQuery = e.$ = w), w;
});

},{}]},["VSkgv","5JlPM"], "5JlPM", "parcelRequire427e")

//# sourceMappingURL=index.15185847.js.map

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
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
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _example1 = require("./examples/Example_1");
var _example1Default = parcelHelpers.interopDefault(_example1);
const element = (0, _example1Default.default)();
document.body.append(element);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./examples/Example_1":"9Jvji"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9Jvji":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HomePage);
var _src = require("../../../src");
const props = (0, _src.createProps)({
    theme: "dark",
    user: undefined
}, [
    // make sure light theme is appropriate
    (0, _src.createEffect)("theme", (p)=>{
        const date = new Date();
        const isNight = date.getHours() < 6 || date.getHours() > 18;
        if (p.theme === "light" && isNight) {
            console.log("Nope");
            p.theme = "dark";
        }
    }),
    // keep the user perpetually signed in
    (0, _src.createEffect)([
        "user"
    ], (p)=>{
        if (!p.user) setTimeout(()=>{
            p.user = {
                username: "snakgoat"
            };
        }, 3000);
    })
]);
function HomePage() {
    return (0, _src.DIV)({
        id: "app"
    }, (0, _src.DIV)(props, (p)=>[
            {
                id: "home-page"
            },
            !p.user ? (0, _src.H2)("Loading Information...") : (0, _src.H1)(`Welcome ${p.user.username}`),
            (0, _src.BUTTON)({
                onclick: ()=>p.theme = "light"
            }, "Change Theme"),
            (0, _src.BUTTON)({
                onclick: ()=>p.user = undefined
            }, "Sign Out")
        ]), (0, _src.H6)("Come Again!"));
}

},{"../../../src":"3KKgB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KKgB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createProps", ()=>(0, _props.createProps));
parcelHelpers.export(exports, "createEffect", ()=>(0, _props.createEffect));
parcelHelpers.export(exports, "createComponent", ()=>(0, _components.createComponent));
parcelHelpers.export(exports, "Component", ()=>(0, _components.Component));
parcelHelpers.export(exports, "css", ()=>(0, _utils.css));
parcelHelpers.export(exports, "html", ()=>(0, _utils.html));
var _props = require("./props");
var _components = require("./components");
var _utils = require("./utils");
var _intrinsics = require("./intrinsics");
parcelHelpers.exportAll(_intrinsics, exports);

},{"./props":"8ZTY6","./components":"wrZ8e","./utils":"6ah4l","./intrinsics":"jIvDV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ZTY6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEffect", ()=>(0, _effects.createEffect));
parcelHelpers.export(exports, "createProps", ()=>createProps);
var _renderMap = require("./renderMap");
var _utils = require("./utils");
var _effects = require("./effects");
function handleModifiers(props, key, modifiers) {
    if (!modifiers) return;
    for (const modifier of modifiers)if ((0, _utils.isModifier)(modifier) && modifier.isRun(key)) {
        const returnObject = modifier.run(props);
        if (returnObject) for(const k in returnObject)props[k] = returnObject[k];
    }
}
function createProps(input, modifiers) {
    // CREATE PROPS
    const props = new Proxy(input, {
        set (target, property, newValue) {
            // set target value
            target[property] = newValue;
            // add to RenderMap
            const renderMap = (0, _renderMap.__PROPS_RENDER_MAP__).get(props);
            // handle modifiers
            handleModifiers(props, property, modifiers);
            // render attached elements
            if (renderMap) renderMap.renderEach(props);
            return true;
        },
        get (target, key) {
            if (key === (0, _utils.isProxySymbol)) return true;
            else return target[key];
        }
    });
    // REASSIGN TO RUN ALL EFFECTS
    Object.assign(props, input);
    // ADD TO RENDER MAP
    (0, _renderMap.__PROPS_RENDER_MAP__).set(props, new (0, _renderMap.RenderMap)());
    return props;
}

},{"./renderMap":"cbfIK","./utils":"hzqlD","./effects":"5BYO9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cbfIK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RenderMap", ()=>RenderMap);
parcelHelpers.export(exports, "__PROPS_RENDER_MAP__", ()=>__PROPS_RENDER_MAP__);
var _utils = require("../intrinsics/utils");
class RenderMap extends Map {
    constructor(){
        super();
    }
    renderEach(props) {
        for (const [element, renderFn] of this){
            const elementProperties = renderFn.call(element, props);
            (0, _utils.setElementProperties)(element, ...elementProperties);
        }
    }
}
const __PROPS_RENDER_MAP__ = new Map();

},{"../intrinsics/utils":"dxAiU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxAiU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setElementAttributes", ()=>setElementAttributes);
parcelHelpers.export(exports, "setElementChildren", ()=>setElementChildren);
parcelHelpers.export(exports, "setElementProperties", ()=>setElementProperties);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "createIntrinsicElement", ()=>createIntrinsicElement);
parcelHelpers.export(exports, "createElementFactory", ()=>createElementFactory);
var _utils = require("../utils");
var _types = require("./types");
var _utils1 = require("../props/utils");
var _renderMap = require("../props/renderMap");
var _config = require("../config");
function setElementAttributes(element, attrs) {
    let attr;
    for(attr in attrs)try {
        let attrValue = attrs[attr];
        if (!(attr in element) && typeof attrValue === "string") element.setAttribute(attr, attrValue);
        else if (attr === "style" && typeof attrValue === "object") {
            const style = Object.entries(attrValue).map(([key, val])=>`${(0, _utils.camelToDashed)(key)}:${val};`).join("\n  ");
            element.style = style;
        } else element[attr] = attrValue;
    } catch (e) {
        console.warn(e);
    }
}
function setElementChildren(element, ...children) {
    for (const _children of children){
        if (Array.isArray(_children)) for (const child of _children)setElementChildren(element, child);
        else if (typeof _children === "string") element.innerHTML = _children;
        else if (_children instanceof HTMLElement) element.append(_children);
        else throw new TypeError("child not of type HTMLChildren");
    }
}
function setElementProperties(element, ...params) {
    const [arg0, ...arg1] = params;
    if ((0, _types.isAttributes)(arg0)) {
        setElementAttributes(element, arg0);
        if ((0, _types.isHTMLChildren)(arg1)) {
            element.innerHTML = "";
            setElementChildren(element, ...arg1);
        }
    } else if ((0, _types.isHTMLChildren)(arg0)) {
        element.innerHTML = "";
        setElementChildren(element, ...arg0);
    } else if ((0, _types.isHTMLChild)(arg0)) {
        element.innerHTML = "";
        setElementChildren(element, arg0);
    }
}
function createElement(tagName) {
    const element = document.createElement(tagName);
    if ((0, _config.Configuration).get().components.autoUpgrade) {
        if (customElements.get(tagName)) customElements.upgrade(element);
    }
    return element;
}
function createIntrinsicElement(tagName, ...params) {
    const element = createElement(tagName);
    if ((0, _utils1.isProps)(params[0]) && typeof params[1] === "function") {
        const [props, renderFn] = params;
        (0, _renderMap.__PROPS_RENDER_MAP__).get(props)?.set(element, renderFn);
        const elementProperties = renderFn.call(element, props);
        setElementProperties(element, ...elementProperties);
    } else setElementProperties(element, ...params);
    return element;
}
function createElementFactory(tagName) {
    return (...params)=>createIntrinsicElement(tagName, ...params);
}

},{"../utils":"6ah4l","./types":"e4Avh","../props/utils":"hzqlD","../props/renderMap":"cbfIK","../config":"9G9r1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ah4l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>(0, _css.css));
parcelHelpers.export(exports, "html", ()=>(0, _html.html));
parcelHelpers.export(exports, "camelToDashed", ()=>camelToDashed);
parcelHelpers.export(exports, "dashedToCamel", ()=>dashedToCamel);
var _css = require("./css");
var _html = require("./html");
function camelToDashed(input) {
    return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function dashedToCamel(input) {
    return input.replace(/-([a-z])/g, (match, group)=>group.toUpperCase());
}

},{"./css":"kBlIB","./html":"1CsvQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBlIB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css);
function css(strs, ...values) {
    return strs.map((s, i)=>s + (values[i] ?? "")).join("");
}
(function(css) {
    function assign(...parameters) {
        const [assignee, styles] = parameters;
        if (assignee instanceof HTMLElement) {
            if (typeof styles === "string") assignee.style = styles;
            else Object.assign(assignee.style, styles);
        } else if (assignee instanceof CSSStyleDeclaration) {
            if (typeof styles === "string") throw new TypeError("assigned styles must be intersection of CSSStyleDeclaration");
            Object.assign(assignee, styles);
        } else throw new TypeError('Invalid assignee parameter. Assignee must be of type "HTMLElement" or "CSSStyleDeclaration"');
    }
    css.assign = assign;
})(css || (css = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CsvQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>html);
function html(strs, ...values) {
    return strs.map((s, i)=>s + (values[i] ?? "")).join("");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4Avh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isHTMLChild", ()=>isHTMLChild);
parcelHelpers.export(exports, "isHTMLChildren", ()=>isHTMLChildren);
parcelHelpers.export(exports, "isAttributes", ()=>isAttributes);
var _utils = require("../props/utils");
function isHTMLChild(params) {
    return typeof params === "string" || params instanceof HTMLElement || Array.isArray(params);
}
function isHTMLChildren(params) {
    return Array.isArray(params);
}
function isAttributes(params) {
    return !!params && !isHTMLChildren(params) && !isHTMLChild(params) && !(0, _utils.isProps)(params);
}

},{"../props/utils":"hzqlD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzqlD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isModifier", ()=>isModifier);
parcelHelpers.export(exports, "isProxySymbol", ()=>isProxySymbol);
parcelHelpers.export(exports, "isProps", ()=>isProps);
var _effects = require("./effects");
const isModifier = (anything)=>{
    return anything instanceof (0, _effects.Effect);
};
const isProxySymbol = Symbol("isProxy");
const isProps = (props)=>{
    return props && props[isProxySymbol];
};

},{"./effects":"5BYO9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5BYO9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Effect", ()=>Effect);
parcelHelpers.export(exports, "createEffect", ()=>createEffect);
class Effect {
    constructor(dependencies, callback){
        this.callback = callback;
        this.dependencies = !Array.isArray(dependencies) ? [
            dependencies
        ] : dependencies;
    }
    isRun(key) {
        return this.dependencies.includes(key);
    }
    run(props) {
        return this.callback.call({}, props);
    }
}
function createEffect(...params) {
    return new Effect(...params);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9G9r1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Configuration", ()=>Configuration);
const CONFIG = {
    components: {
        autoUpgrade: false
    }
};
var Configuration;
(function(Configuration) {
    Configuration.configure = (config)=>{
        let key;
        for(key in config)Object.assign(CONFIG, config[key]);
        return CONFIG;
    };
    Configuration.get = ()=>CONFIG;
})(Configuration || (Configuration = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"wrZ8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component);
/**
 * @description A factory class used for creating a rendering function for you custom elements.
 * @example
    import { createComponent, Component, H1, P } from "domalive";
    const TestApp = createComponent(
        'test-app',
        class extends HTMLElement implements Component {
            connectedCallback(): void {
                this.style.color = "red";
                this.style.background = "blue";
            }
        }
    );

    document.body.append(
        TestApp(
            {id: "root"}, 
            H1('Hello!'),
            P('How do you like my app?')
        )
    )
 */ parcelHelpers.export(exports, "createComponent", ()=>createComponent);
var _utils = require("../intrinsics/utils");
class Component extends HTMLElement {
}
function createComponent(tagName, classDefinition) {
    customElements.define(tagName, classDefinition);
    return (...params)=>(0, _utils.createIntrinsicElement)(tagName, ...params);
}

},{"../intrinsics/utils":"dxAiU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIvDV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A", ()=>A);
parcelHelpers.export(exports, "AREA", ()=>AREA);
parcelHelpers.export(exports, "AUDIO", ()=>AUDIO);
parcelHelpers.export(exports, "ABBR", ()=>ABBR);
parcelHelpers.export(exports, "ADDRESS", ()=>ADDRESS);
parcelHelpers.export(exports, "ARTICLE", ()=>ARTICLE);
parcelHelpers.export(exports, "ASIDE", ()=>ASIDE);
parcelHelpers.export(exports, "BR", ()=>BR);
parcelHelpers.export(exports, "B", ()=>B);
parcelHelpers.export(exports, "BDI", ()=>BDI);
parcelHelpers.export(exports, "BDO", ()=>BDO);
parcelHelpers.export(exports, "BASE", ()=>BASE);
parcelHelpers.export(exports, "BODY", ()=>BODY);
parcelHelpers.export(exports, "BUTTON", ()=>BUTTON);
parcelHelpers.export(exports, "CANVAS", ()=>CANVAS);
parcelHelpers.export(exports, "CITE", ()=>CITE);
parcelHelpers.export(exports, "CODE", ()=>CODE);
parcelHelpers.export(exports, "COLGROUP", ()=>COLGROUP);
parcelHelpers.export(exports, "DD", ()=>DD);
parcelHelpers.export(exports, "DL", ()=>DL);
parcelHelpers.export(exports, "DATA", ()=>DATA);
parcelHelpers.export(exports, "DATALIST", ()=>DATALIST);
parcelHelpers.export(exports, "DETAILS", ()=>DETAILS);
parcelHelpers.export(exports, "DIALOG", ()=>DIALOG);
parcelHelpers.export(exports, "DIV", ()=>DIV);
parcelHelpers.export(exports, "EM", ()=>EM);
parcelHelpers.export(exports, "EMBED", ()=>EMBED);
parcelHelpers.export(exports, "FIELDSET", ()=>FIELDSET);
parcelHelpers.export(exports, "FIGURE", ()=>FIGURE);
parcelHelpers.export(exports, "FOOTER", ()=>FOOTER);
parcelHelpers.export(exports, "FORM", ()=>FORM);
parcelHelpers.export(exports, "HGROUP", ()=>HGROUP);
parcelHelpers.export(exports, "HR", ()=>HR);
parcelHelpers.export(exports, "HEAD", ()=>HEAD);
parcelHelpers.export(exports, "H1", ()=>H1);
parcelHelpers.export(exports, "H2", ()=>H2);
parcelHelpers.export(exports, "H3", ()=>H3);
parcelHelpers.export(exports, "H4", ()=>H4);
parcelHelpers.export(exports, "H5", ()=>H5);
parcelHelpers.export(exports, "H6", ()=>H6);
parcelHelpers.export(exports, "HTML", ()=>HTML);
parcelHelpers.export(exports, "KBD", ()=>KBD);
parcelHelpers.export(exports, "INS", ()=>INS);
parcelHelpers.export(exports, "I", ()=>I);
parcelHelpers.export(exports, "IFRAME", ()=>IFRAME);
parcelHelpers.export(exports, "IMG", ()=>IMG);
parcelHelpers.export(exports, "INPUT", ()=>INPUT);
parcelHelpers.export(exports, "LI", ()=>LI);
parcelHelpers.export(exports, "LABEL", ()=>LABEL);
parcelHelpers.export(exports, "LEGEND", ()=>LEGEND);
parcelHelpers.export(exports, "LINK", ()=>LINK);
parcelHelpers.export(exports, "MAIN", ()=>MAIN);
parcelHelpers.export(exports, "MAP", ()=>MAP);
parcelHelpers.export(exports, "MENU", ()=>MENU);
parcelHelpers.export(exports, "MARK", ()=>MARK);
parcelHelpers.export(exports, "NAV", ()=>NAV);
parcelHelpers.export(exports, "NOSCRIPT", ()=>NOSCRIPT);
parcelHelpers.export(exports, "META", ()=>META);
parcelHelpers.export(exports, "METER", ()=>METER);
parcelHelpers.export(exports, "DEL", ()=>DEL);
parcelHelpers.export(exports, "OL", ()=>OL);
parcelHelpers.export(exports, "OBJECT", ()=>OBJECT);
parcelHelpers.export(exports, "OPTGROUP", ()=>OPTGROUP);
parcelHelpers.export(exports, "OPTION", ()=>OPTION);
parcelHelpers.export(exports, "OUTPUT", ()=>OUTPUT);
parcelHelpers.export(exports, "P", ()=>P);
parcelHelpers.export(exports, "PICTURE", ()=>PICTURE);
parcelHelpers.export(exports, "PRE", ()=>PRE);
parcelHelpers.export(exports, "PROGRESS", ()=>PROGRESS);
parcelHelpers.export(exports, "RT", ()=>RT);
parcelHelpers.export(exports, "RP", ()=>RP);
parcelHelpers.export(exports, "RUBY", ()=>RUBY);
parcelHelpers.export(exports, "SMALL", ()=>SMALL);
parcelHelpers.export(exports, "Q", ()=>Q);
parcelHelpers.export(exports, "BLOCKQUOTE", ()=>BLOCKQUOTE);
parcelHelpers.export(exports, "SCRIPT", ()=>SCRIPT);
parcelHelpers.export(exports, "SELECT", ()=>SELECT);
parcelHelpers.export(exports, "SLOT", ()=>SLOT);
parcelHelpers.export(exports, "SOURCE", ()=>SOURCE);
parcelHelpers.export(exports, "SPAN", ()=>SPAN);
parcelHelpers.export(exports, "STYLE", ()=>STYLE);
parcelHelpers.export(exports, "SUB", ()=>SUB);
parcelHelpers.export(exports, "SUMMARY", ()=>SUMMARY);
parcelHelpers.export(exports, "SEARCH", ()=>SEARCH);
parcelHelpers.export(exports, "SECTION", ()=>SECTION);
parcelHelpers.export(exports, "CAPTION", ()=>CAPTION);
parcelHelpers.export(exports, "TH", ()=>TH);
parcelHelpers.export(exports, "TD", ()=>TD);
parcelHelpers.export(exports, "COL", ()=>COL);
parcelHelpers.export(exports, "TABLE", ()=>TABLE);
parcelHelpers.export(exports, "TR", ()=>TR);
parcelHelpers.export(exports, "THEAD", ()=>THEAD);
parcelHelpers.export(exports, "TFOOT", ()=>TFOOT);
parcelHelpers.export(exports, "TBODY", ()=>TBODY);
parcelHelpers.export(exports, "TEMPLATE", ()=>TEMPLATE);
parcelHelpers.export(exports, "TEXTAREA", ()=>TEXTAREA);
parcelHelpers.export(exports, "TIME", ()=>TIME);
parcelHelpers.export(exports, "TITLE", ()=>TITLE);
parcelHelpers.export(exports, "TRACK", ()=>TRACK);
parcelHelpers.export(exports, "U", ()=>U);
parcelHelpers.export(exports, "UL", ()=>UL);
parcelHelpers.export(exports, "VIDEO", ()=>VIDEO);
parcelHelpers.export(exports, "VAR", ()=>VAR);
parcelHelpers.export(exports, "WBR", ()=>WBR);
var _utils = require("./utils");
const A = (0, _utils.createElementFactory)("a");
const AREA = (0, _utils.createElementFactory)("area");
const AUDIO = (0, _utils.createElementFactory)("audio");
const ABBR = (0, _utils.createElementFactory)("abbr");
const ADDRESS = (0, _utils.createElementFactory)("address");
const ARTICLE = (0, _utils.createElementFactory)("article");
const ASIDE = (0, _utils.createElementFactory)("aside");
const BR = (0, _utils.createElementFactory)("br");
const B = (0, _utils.createElementFactory)("b");
const BDI = (0, _utils.createElementFactory)("bdi");
const BDO = (0, _utils.createElementFactory)("bdo");
const BASE = (0, _utils.createElementFactory)("base");
const BODY = (0, _utils.createElementFactory)("body");
const BUTTON = (0, _utils.createElementFactory)("button");
const CANVAS = (0, _utils.createElementFactory)("canvas");
const CITE = (0, _utils.createElementFactory)("cite");
const CODE = (0, _utils.createElementFactory)("code");
const COLGROUP = (0, _utils.createElementFactory)("colgroup");
const DD = (0, _utils.createElementFactory)("dd");
const DL = (0, _utils.createElementFactory)("dl");
const DATA = (0, _utils.createElementFactory)("data");
const DATALIST = (0, _utils.createElementFactory)("datalist");
const DETAILS = (0, _utils.createElementFactory)("details");
const DIALOG = (0, _utils.createElementFactory)("dialog");
const DIV = (0, _utils.createElementFactory)("div");
const EM = (0, _utils.createElementFactory)("em");
const EMBED = (0, _utils.createElementFactory)("embed");
const FIELDSET = (0, _utils.createElementFactory)("fieldset");
const FIGURE = (0, _utils.createElementFactory)("figure");
const FOOTER = (0, _utils.createElementFactory)("footer");
const FORM = (0, _utils.createElementFactory)("form");
const HGROUP = (0, _utils.createElementFactory)("hgroup");
const HR = (0, _utils.createElementFactory)("hr");
const HEAD = (0, _utils.createElementFactory)("head");
const H1 = (0, _utils.createElementFactory)("h1");
const H2 = (0, _utils.createElementFactory)("h2");
const H3 = (0, _utils.createElementFactory)("h3");
const H4 = (0, _utils.createElementFactory)("h4");
const H5 = (0, _utils.createElementFactory)("h5");
const H6 = (0, _utils.createElementFactory)("h6");
const HTML = (0, _utils.createElementFactory)("html");
const KBD = (0, _utils.createElementFactory)("kbd");
const INS = (0, _utils.createElementFactory)("ins");
const I = (0, _utils.createElementFactory)("i");
const IFRAME = (0, _utils.createElementFactory)("iframe");
const IMG = (0, _utils.createElementFactory)("img");
const INPUT = (0, _utils.createElementFactory)("input");
const LI = (0, _utils.createElementFactory)("li");
const LABEL = (0, _utils.createElementFactory)("label");
const LEGEND = (0, _utils.createElementFactory)("legend");
const LINK = (0, _utils.createElementFactory)("link");
const MAIN = (0, _utils.createElementFactory)("main");
const MAP = (0, _utils.createElementFactory)("map");
const MENU = (0, _utils.createElementFactory)("menu");
const MARK = (0, _utils.createElementFactory)("mark");
const NAV = (0, _utils.createElementFactory)("nav");
const NOSCRIPT = (0, _utils.createElementFactory)("noscript");
const META = (0, _utils.createElementFactory)("meta");
const METER = (0, _utils.createElementFactory)("meter");
const DEL = (0, _utils.createElementFactory)("del");
const OL = (0, _utils.createElementFactory)("ol");
const OBJECT = (0, _utils.createElementFactory)("object");
const OPTGROUP = (0, _utils.createElementFactory)("optgroup");
const OPTION = (0, _utils.createElementFactory)("option");
const OUTPUT = (0, _utils.createElementFactory)("output");
const P = (0, _utils.createElementFactory)("p");
const PICTURE = (0, _utils.createElementFactory)("picture");
const PRE = (0, _utils.createElementFactory)("pre");
const PROGRESS = (0, _utils.createElementFactory)("progress");
const RT = (0, _utils.createElementFactory)("rt");
const RP = (0, _utils.createElementFactory)("rp");
const RUBY = (0, _utils.createElementFactory)("ruby");
const SMALL = (0, _utils.createElementFactory)("small");
const Q = (0, _utils.createElementFactory)("q");
const BLOCKQUOTE = (0, _utils.createElementFactory)("blockquote");
const SCRIPT = (0, _utils.createElementFactory)("script");
const SELECT = (0, _utils.createElementFactory)("select");
const SLOT = (0, _utils.createElementFactory)("slot");
const SOURCE = (0, _utils.createElementFactory)("source");
const SPAN = (0, _utils.createElementFactory)("span");
const STYLE = (0, _utils.createElementFactory)("style");
const SUB = (0, _utils.createElementFactory)("sub");
const SUMMARY = (0, _utils.createElementFactory)("summary");
const SEARCH = (0, _utils.createElementFactory)("search");
const SECTION = (0, _utils.createElementFactory)("section");
const CAPTION = (0, _utils.createElementFactory)("caption");
const TH = (0, _utils.createElementFactory)("th");
const TD = (0, _utils.createElementFactory)("td");
const COL = (0, _utils.createElementFactory)("col");
const TABLE = (0, _utils.createElementFactory)("table");
const TR = (0, _utils.createElementFactory)("tr");
const THEAD = (0, _utils.createElementFactory)("thead");
const TFOOT = (0, _utils.createElementFactory)("tfoot");
const TBODY = (0, _utils.createElementFactory)("tbody");
const TEMPLATE = (0, _utils.createElementFactory)("template");
const TEXTAREA = (0, _utils.createElementFactory)("textarea");
const TIME = (0, _utils.createElementFactory)("time");
const TITLE = (0, _utils.createElementFactory)("title");
const TRACK = (0, _utils.createElementFactory)("track");
const U = (0, _utils.createElementFactory)("u");
const UL = (0, _utils.createElementFactory)("ul");
const VIDEO = (0, _utils.createElementFactory)("video");
const VAR = (0, _utils.createElementFactory)("var");
const WBR = (0, _utils.createElementFactory)("wbr");

},{"./utils":"dxAiU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequire7e85")

//# sourceMappingURL=index.b71e74eb.js.map

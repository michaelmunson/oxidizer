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
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
const app = (0, _appDefault.default)();
document.body.append(app);

},{"./App":"lyqAI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lyqAI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>App);
var _oxidizer = require("oxidizer");
const Counter = ()=>{
    const props = (0, _oxidizer.createProps)({
        count: 0
    }, [
        // keep count greater than or equal to 0
        (0, _oxidizer.createEffect)([
            "count"
        ], ($)=>{
            if ($.count < 0) $.count = 0;
            else if ($.count > 10) $.count = 10;
        })
    ]);
    return (0, _oxidizer.DIV)(props, ($)=>[
            {
                id: "counter-app"
            },
            (0, _oxidizer.H1)("Counter App"),
            (0, _oxidizer.P)({
                id: "count"
            }, "Count: " + $.count),
            (0, _oxidizer.DIV)({
                style: {
                    display: "flex"
                }
            }, (0, _oxidizer.BUTTON)({
                id: "decrement-button",
                onclick: ()=>$.count -= 1
            }, "Decrement"), (0, _oxidizer.BUTTON)({
                id: "increment-button",
                onclick: ()=>$.count += 1
            }, "Increment"))
        ]);
};
const UtilsApp = ()=>{
    const div = (0, _oxidizer.DIV)({
        id: "utils-app"
    });
    const render = (0, _oxidizer.ox)(div);
    return render((0, _oxidizer.H1)({
        id: "utils-app-header"
    }, "Utils App"));
};
const FragmentApp = ()=>{
    const props = (0, _oxidizer.createProps)({
        header: "Fragment App"
    });
    window.props = props;
    return (0, _oxidizer.DIV)(props, ($)=>[
            {
                id: "fragment-app"
            },
            (0, _oxidizer.html)`
                <h1 id="fragment-app-header">${$.header}</h1>
                <h2 id="fragment-app-subheader">Hello World!</h2>
            `,
            (0, _oxidizer.BUTTON)({
                onclick: ()=>$.header = "Fragment App Updated"
            }, "Click to Update Header")
        ]);
};
const apps = [
    Counter,
    UtilsApp,
    FragmentApp
];
function App() {
    return (0, _oxidizer.DIV)({
        id: "app"
    }, "HELLO!", apps.map((app)=>[
            app(),
            (0, _oxidizer.HR)()
        ]));
}

},{"oxidizer":"8bItu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bItu":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ox = exports.Configuration = exports.Component = exports.createShadowComponent = exports.createComponentExtension = exports.createComponent = exports.html = exports.css = exports.createEffect = exports.createProps = void 0;
var props_1 = require("37539d85963ce572");
Object.defineProperty(exports, "createProps", {
    enumerable: true,
    get: function() {
        return props_1.createProps;
    }
});
Object.defineProperty(exports, "createEffect", {
    enumerable: true,
    get: function() {
        return props_1.createEffect;
    }
});
var utils_1 = require("93816504fd2d5b92");
Object.defineProperty(exports, "css", {
    enumerable: true,
    get: function() {
        return utils_1.css;
    }
});
Object.defineProperty(exports, "html", {
    enumerable: true,
    get: function() {
        return utils_1.html;
    }
});
var components_1 = require("2bc990817a4daacf");
Object.defineProperty(exports, "createComponent", {
    enumerable: true,
    get: function() {
        return components_1.createComponent;
    }
});
Object.defineProperty(exports, "createComponentExtension", {
    enumerable: true,
    get: function() {
        return components_1.createComponentExtension;
    }
});
Object.defineProperty(exports, "createShadowComponent", {
    enumerable: true,
    get: function() {
        return components_1.createShadowComponent;
    }
});
Object.defineProperty(exports, "Component", {
    enumerable: true,
    get: function() {
        return components_1.Component;
    }
});
var config_1 = require("4c05f08f626eecf1");
Object.defineProperty(exports, "Configuration", {
    enumerable: true,
    get: function() {
        return config_1.Configuration;
    }
});
__exportStar(require("9d75a45195803233"), exports);
var utils_2 = require("9c2addbba5e78953");
Object.defineProperty(exports, "ox", {
    enumerable: true,
    get: function() {
        return utils_2.ox;
    }
});
__exportStar(require("8e5fd0539dce2685"), exports);

},{"37539d85963ce572":"dxcSx","93816504fd2d5b92":"1lOxP","2bc990817a4daacf":"4cpsF","4c05f08f626eecf1":"2Uf1B","9d75a45195803233":"1ATgT","9c2addbba5e78953":"3gqbj","8e5fd0539dce2685":"juAUj"}],"dxcSx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createEffect = void 0;
exports.createProps = createProps;
const renderMap_1 = require("76255f71da09bd90");
const utils_1 = require("67d70da7b10d342e");
var effects_1 = require("c1d416d8f0ca1e43");
Object.defineProperty(exports, "createEffect", {
    enumerable: true,
    get: function() {
        return effects_1.createEffect;
    }
});
function handleModifiers(props, key, modifiers) {
    if (!modifiers) return;
    for (const modifier of modifiers)if ((0, utils_1.isModifier)(modifier) && modifier.isRun(key)) {
        const returnObject = modifier.run(props);
        if (returnObject) for(const k in returnObject)props[k] = returnObject[k];
    }
}
/**
 * @description creates a props proxy that is used to update the state of a component
 * @example
 * ```typescript
const props = createProps({count: 0});
// update state by simply setting a property value
props.count = 1;
```
 */ function createProps(input, modifiers) {
    // CREATE PROPS
    const props = new Proxy(input, {
        set (target, property, newValue) {
            // set target value
            target[property] = newValue;
            // add to RenderMap
            const renderMap = renderMap_1.__PROPS_RENDER_MAP__.get(props);
            // handle modifiers
            handleModifiers(props, property, modifiers);
            // render attached elements
            if (renderMap) renderMap.renderEach(props);
            return true;
        },
        get (target, key) {
            if (key === utils_1.isProxySymbol) return true;
            else return target[key];
        }
    });
    // REASSIGN TO RUN ALL EFFECTS
    Object.assign(props, input);
    // ADD TO RENDER MAP
    renderMap_1.__PROPS_RENDER_MAP__.set(props, new renderMap_1.RenderMap());
    return props;
}

},{"76255f71da09bd90":"7ZAUU","67d70da7b10d342e":"8wktb","c1d416d8f0ca1e43":"959Hz"}],"7ZAUU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__PROPS_RENDER_MAP__ = exports.RenderMap = void 0;
const utils_1 = require("ff37f281805fb1e6");
class RenderMap extends Map {
    constructor(){
        super();
    }
    renderEach(props) {
        for (const [element, renderFn] of this){
            const elementProperties = renderFn.call(element, props);
            (0, utils_1.setElementProperties)(element, ...elementProperties);
        }
    }
}
exports.RenderMap = RenderMap;
exports.__PROPS_RENDER_MAP__ = new Map();

},{"ff37f281805fb1e6":"3gqbj"}],"3gqbj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setElementAttributes = setElementAttributes;
exports.setElementChildren = setElementChildren;
exports.setElementProperties = setElementProperties;
exports.createElement = createElement;
exports.createIntrinsicElement = createIntrinsicElement;
exports.createFragment = createFragment;
exports.createIntrinsicElementComponent = createIntrinsicElementComponent;
exports.createShadowElement = createShadowElement;
exports.createElementFactory = createElementFactory;
exports.ox = ox;
const _helpers_1 = require("8c48f51a93868967");
const types_1 = require("4ca20562447d3ef4");
const utils_1 = require("df4b87fbf3829d57");
const renderMap_1 = require("cfdc0feee95a4647");
const config_1 = require("654fbc3102858824");
const utils_2 = require("d81f9e71a17c5834");
class RenderError extends TypeError {
    constructor(message){
        super(message);
        this.name = "RenderError";
    }
}
/** GENERAL EXPORTED UTILITIES */ /****** HTML ELEMENTS */ function setElementAttributes(element, attrs) {
    let attr;
    for(attr in attrs)try {
        let attrValue = attrs[attr];
        if (!(attr in element) && typeof attrValue === "string") element.setAttribute(attr, attrValue);
        else if (attr === "style" && typeof attrValue === "object") {
            const style = Object.entries(attrValue).map(([key, val])=>`${(0, _helpers_1.camelToDashed)(key)}:${val};`).join("\n  ");
            element.style = style;
        } else element[attr] = attrValue;
    } catch (e) {
        console.warn(e);
    }
    return element;
}
function setElementChildren(element, ...children) {
    for (const _children of children){
        if ((0, types_1.isHTMLChildren)(_children)) for (const child of [
            ..._children
        ])setElementChildren(element, child);
        else if ((0, types_1.isHTMLPrimitive)(_children)) {
            const htmlString = typeof _children === "boolean" || !_children ? "" : _children.toString();
            const node = (0, utils_2.html)`${htmlString}`;
            element.appendChild(node);
        } else if ((0, types_1.isDOMNode)(_children) || (0, types_1.isDocumentFragment)(_children)) element.appendChild(_children);
        else throw new RenderError("child not of type HTMLChildren");
    }
    return element;
}
function setElementProperties(element, ...params) {
    const [arg0, ...arg1] = params;
    if ((0, types_1.isAttributes)(arg0)) {
        setElementAttributes(element, arg0);
        if ((0, types_1.isHTMLChildren)(arg1)) {
            element.innerHTML = "";
            setElementChildren(element, ...arg1);
        } else if ((0, types_1.isHTMLChild)(arg1)) {
            element.innerHTML = "";
            setElementChildren(element, arg1);
        }
    } else if (params.length >= 0 && (0, types_1.isHTMLChildren)(params)) {
        element.innerHTML = "";
        setElementChildren(element, ...params);
    } else if ((0, types_1.isHTMLChildren)(arg0)) {
        element.innerHTML = "";
        setElementChildren(element, ...arg0);
    } else if ((0, types_1.isHTMLChild)(arg0)) {
        element.innerHTML = "";
        setElementChildren(element, arg0);
    }
    return element;
}
function createElement(tagName, customElementTagName) {
    const element = customElementTagName ? document.createElement(tagName, {
        is: customElementTagName
    }) : document.createElement(tagName);
    if (config_1.Configuration.get().components.autoUpgrade) {
        if (customElements.get(tagName)) customElements.upgrade(element);
    }
    return element;
}
function createIntrinsicElement(tagName, ...params) {
    const element = createElement(tagName);
    ox(element)(...params);
    return element;
}
/****** DOCUMENT FRAGMENTS */ function createFragment(...children) {
    const fragment = document.createDocumentFragment();
    setElementChildren(fragment, ...children);
    return fragment;
}
/** CUSTOM ELEMENTS */ function createIntrinsicElementComponent(tagName, customElementTagName, ...params) {
    const element = createElement(tagName, customElementTagName);
    if ((0, utils_1.isProps)(params[0]) && typeof params[1] === "function") {
        const [props, renderFn] = params;
        renderMap_1.__PROPS_RENDER_MAP__.get(props)?.set(element, renderFn);
        const elementProperties = renderFn.call(element, props);
        setElementProperties(element, ...elementProperties);
    } else setElementProperties(element, ...params);
    return element;
}
function createShadowElement(tagName, options, ...params) {
    const element = createElement(tagName);
    const shadow = element.attachShadow(options);
    if ((0, utils_1.isProps)(params[0]) && typeof params[1] === "function") {
        const [props, renderFn] = params;
        renderMap_1.__PROPS_RENDER_MAP__.get(props)?.set(shadow, renderFn);
        const elementProperties = renderFn.call(shadow, props);
        setElementProperties(shadow, ...elementProperties);
    } else setElementProperties(shadow, ...params);
    return element;
}
function createElementFactory(tagName) {
    return (...params)=>createIntrinsicElement(tagName, ...params);
}
/** LIB EXPORTS */ function ox(element) {
    return (...params)=>{
        if ((0, utils_1.isProps)(params[0]) && typeof params[1] === "function") {
            const [props, renderFn] = params;
            renderMap_1.__PROPS_RENDER_MAP__.get(props)?.set(element, renderFn);
            const elementProperties = renderFn.call(element, props);
            setElementProperties(element, ...elementProperties);
        } else setElementProperties(element, ...params);
        return element;
    };
}

},{"8c48f51a93868967":"dA113","4ca20562447d3ef4":"lFyY0","df4b87fbf3829d57":"8wktb","cfdc0feee95a4647":"7ZAUU","654fbc3102858824":"2Uf1B","d81f9e71a17c5834":"1lOxP"}],"dA113":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.camelToDashed = camelToDashed;
exports.dashedToCamel = dashedToCamel;
function camelToDashed(input) {
    return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function dashedToCamel(input) {
    return input.replace(/-([a-z])/g, (match, group)=>group.toUpperCase());
}

},{}],"lFyY0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAttributes = isAttributes;
exports.isHTMLPrimitive = isHTMLPrimitive;
exports.isHTMLElement = isHTMLElement;
exports.isDocumentFragment = isDocumentFragment;
exports.isHTMLNode = isHTMLNode;
exports.isDOMNode = isDOMNode;
exports.isHTMLChild = isHTMLChild;
exports.isHTMLChildArray = isHTMLChildArray;
exports.isHTMLChildren = isHTMLChildren;
const utils_1 = require("2c9f74bb17a231e3");
function isAttributes(params) {
    return !!params && !isHTMLChildren(params) && !isHTMLChild(params) && !(0, utils_1.isProps)(params);
}
function isHTMLPrimitive(child) {
    return typeof child === "string" || typeof child === "undefined" || typeof child === "number" || typeof child === "boolean" || child === null;
}
function isHTMLElement(element) {
    return element instanceof HTMLElement;
}
function isDocumentFragment(fragment) {
    return fragment instanceof DocumentFragment;
}
function isHTMLNode(node) {
    return isHTMLElement(node) || isDocumentFragment(node);
}
function isDOMNode(node) {
    return isHTMLElement(node) || node instanceof Text || node instanceof Element;
}
function isHTMLChild(params) {
    return isHTMLPrimitive(params) || isDOMNode(params) || isHTMLChildren(params) || isDocumentFragment(params);
}
function isHTMLChildArray(params) {
    return Array.isArray(params) && params.reduce((acc, curr)=>acc && isHTMLChild(curr), true);
}
function isHTMLChildren(params) {
    return isHTMLChildArray(params) || params instanceof NodeList || params instanceof HTMLCollection;
}

},{"2c9f74bb17a231e3":"8wktb"}],"8wktb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isProps = exports.isProxySymbol = exports.isModifier = void 0;
const effects_1 = require("35ea7e27fcd62929");
const isModifier = (anything)=>{
    return anything instanceof effects_1.Effect;
};
exports.isModifier = isModifier;
exports.isProxySymbol = Symbol("isProxy");
const isProps = (props)=>{
    return props && props[exports.isProxySymbol];
};
exports.isProps = isProps;

},{"35ea7e27fcd62929":"959Hz"}],"959Hz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Effect = void 0;
exports.createEffect = createEffect;
class Effect {
    callback;
    dependencies;
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
exports.Effect = Effect;
/**
 * @description
 * * creates an "effect", or a function that will be ran when a props property has been changed.
 * * effect callbacks will be ran immediately upon creation
 * * the return value of the callback will be applied to the props
 * @example
 * ```typescript
    const props = createProps({count: 0}, [
        // keep count >= 0 and <= 100
        createEffect(['count'], $ => {
            if ($.count < 0){
                $.count = 0;
            }
            if ($.count > 100) return {
                count: 100
            }
        })
    ]);
    // props will be set to 0
    props.count = -10;
    // props will be set to 100
    props.count = 110;
```
 */ function createEffect(...params) {
    return new Effect(...params);
}

},{}],"2Uf1B":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Configuration = void 0;
const CONFIG = {
    components: {
        autoUpgrade: false,
        shadowInit: {
            mode: "open"
        }
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
})(Configuration || (exports.Configuration = Configuration = {}));

},{}],"1lOxP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.html = exports.css = void 0;
var css_1 = require("41fdc41949450d57");
Object.defineProperty(exports, "css", {
    enumerable: true,
    get: function() {
        return css_1.css;
    }
});
var html_1 = require("2f07ea2f0a04811b");
Object.defineProperty(exports, "html", {
    enumerable: true,
    get: function() {
        return html_1.html;
    }
});

},{"41fdc41949450d57":"2Xhrd","2f07ea2f0a04811b":"7P0uA"}],"2Xhrd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.css = css;
function css(strs, ...values) {
    return strs.map((s, i)=>s + (values[i] ?? "")).join("");
}
(function(css) {
    // export type Properties = CSSProperties;
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
})(css || (exports.css = css = {}));

},{}],"7P0uA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.html = html;
class HTMLParsingError extends Error {
    constructor(message){
        super(message.join("\n"));
        this.name = "HTMLParsingError";
    }
}
const parseHTMLString = (htmlString)=>{
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    const errorNode = doc.querySelector("parsererror");
    if (errorNode) throw new HTMLParsingError([
        ...errorNode.children
    ].map((child)=>child.textContent ?? ""));
    const nodes = [
        ...doc.body.childNodes
    ];
    if (nodes.length === 1) return nodes[0];
    else {
        const fragment = document.createDocumentFragment();
        for (const node of nodes)fragment.appendChild(node);
        return fragment;
    }
};
function html(strs, ...values) {
    const htmlString = strs.map((s, i)=>s + (values[i] ?? "")).join("");
    return parseHTMLString(htmlString);
}

},{}],"4cpsF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Component = void 0;
exports.createComponent = createComponent;
exports.createComponentExtension = createComponentExtension;
exports.createShadowComponent = createShadowComponent;
const config_1 = require("affc35982935b57b");
const utils_1 = require("bb1bfd74942a925f");
class Component extends HTMLElement {
    /**
     * @description Attributes whose change in value triggers `attributeChangedCallback`
     * @see  */ static observedAttributes;
}
exports.Component = Component;
/**
 * @description A factory class used for creating a rendering function for you custom elements.
 * @example
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
 */ function createComponent(tagName, classDefinition) {
    customElements.define(tagName, classDefinition);
    return (...params)=>(0, utils_1.createIntrinsicElement)(tagName, ...params);
}
function createComponentExtension(tagName, extension, classDefinition) {
    customElements.define(tagName, classDefinition, {
        extends: extension
    });
    return (...params)=>(0, utils_1.createIntrinsicElementComponent)(extension, tagName, ...params);
}
function createShadowComponent(tagName, classDefinition, options) {
    const shadowInit = options ?? config_1.Configuration.get().components.shadowInit;
    customElements.define(tagName, classDefinition);
    return (...params)=>(0, utils_1.createShadowElement)(tagName, shadowInit, ...params);
}

},{"affc35982935b57b":"2Uf1B","bb1bfd74942a925f":"3gqbj"}],"1ATgT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LEGEND = exports.LABEL = exports.LI = exports.INPUT = exports.IMG = exports.IFRAME = exports.I = exports.INS = exports.KBD = exports.HTML = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.HEAD = exports.HR = exports.HGROUP = exports.FORM = exports.FOOTER = exports.FIGURE = exports.FIELDSET = exports.EMBED = exports.EM = exports.DIV = exports.DIALOG = exports.DETAILS = exports.DATALIST = exports.DATA = exports.DL = exports.DD = exports.COLGROUP = exports.CODE = exports.CITE = exports.CANVAS = exports.BUTTON = exports.BODY = exports.BASE = exports.BDO = exports.BDI = exports.B = exports.BR = exports.ASIDE = exports.ARTICLE = exports.ADDRESS = exports.ABBR = exports.AUDIO = exports.AREA = exports.A = void 0;
exports.U = exports.TRACK = exports.TITLE = exports.TIME = exports.TEXTAREA = exports.TEMPLATE = exports.TBODY = exports.TFOOT = exports.THEAD = exports.TR = exports.TABLE = exports.COL = exports.TD = exports.TH = exports.CAPTION = exports.SECTION = exports.SEARCH = exports.SUMMARY = exports.SUB = exports.STYLE = exports.SPAN = exports.SOURCE = exports.SLOT = exports.SELECT = exports.SCRIPT = exports.BLOCKQUOTE = exports.Q = exports.SMALL = exports.RUBY = exports.RP = exports.RT = exports.PROGRESS = exports.PRE = exports.PICTURE = exports.P = exports.OUTPUT = exports.OPTION = exports.OPTGROUP = exports.OBJECT = exports.OL = exports.DEL = exports.METER = exports.META = exports.NOSCRIPT = exports.NAV = exports.MARK = exports.MENU = exports.MAP = exports.MAIN = exports.LINK = void 0;
exports.FRAGMENT = exports.WBR = exports.VAR = exports.VIDEO = exports.UL = void 0;
const utils_1 = require("ce6b4a056d7b02cf");
/**
 * #### HTMLAnchorElement
 * ```html
 * <a>
 * ```
 * @description creates an `HTMLAnchorElement` instance.
 * @example
 * ```typescript
 * const a:HTMLAnchorElement =
 *     A(
 *         {className: 'a'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.A = (0, utils_1.createElementFactory)("a");
/**
 * #### HTMLAreaElement
 * ```html
 * <area>
 * ```
 * @description creates an `HTMLAreaElement` instance.
 * @example ```typescript
 * const areaElement = AREA({className: 'area'});
 * ```
 */ exports.AREA = (0, utils_1.createElementFactory)("area");
/**
 * #### HTMLAudioElement
 * ```html
 * <audio>
 * ```
 * @description creates an `HTMLAudioElement` instance.
 * @example
 * ```typescript
 * const audio:HTMLAudioElement =
 *     AUDIO(
 *         {className: 'audio'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.AUDIO = (0, utils_1.createElementFactory)("audio");
/**
 * #### HTMLElement
 * ```html
 * <abbr>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const abbr:HTMLElement =
 *     ABBR(
 *         {className: 'abbr'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.ABBR = (0, utils_1.createElementFactory)("abbr");
/**
 * #### HTMLElement
 * ```html
 * <address>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const address:HTMLElement =
 *     ADDRESS(
 *         {className: 'address'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.ADDRESS = (0, utils_1.createElementFactory)("address");
/**
 * #### HTMLElement
 * ```html
 * <article>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const article:HTMLElement =
 *     ARTICLE(
 *         {className: 'article'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.ARTICLE = (0, utils_1.createElementFactory)("article");
/**
 * #### HTMLElement
 * ```html
 * <aside>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const aside:HTMLElement =
 *     ASIDE(
 *         {className: 'aside'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.ASIDE = (0, utils_1.createElementFactory)("aside");
/**
 * #### HTMLBRElement
 * ```html
 * <br>
 * ```
 * @description creates an `HTMLBRElement` instance.
 * @example ```typescript
 * const brElement = BR({className: 'br'});
 * ```
 */ exports.BR = (0, utils_1.createElementFactory)("br");
/**
 * #### HTMLElement
 * ```html
 * <b>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const b:HTMLElement =
 *     B(
 *         {className: 'b'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.B = (0, utils_1.createElementFactory)("b");
/**
 * #### HTMLElement
 * ```html
 * <bdi>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const bdi:HTMLElement =
 *     BDI(
 *         {className: 'bdi'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.BDI = (0, utils_1.createElementFactory)("bdi");
/**
 * #### HTMLElement
 * ```html
 * <bdo>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const bdo:HTMLElement =
 *     BDO(
 *         {className: 'bdo'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.BDO = (0, utils_1.createElementFactory)("bdo");
/**
 * #### HTMLBaseElement
 * ```html
 * <base>
 * ```
 * @description creates an `HTMLBaseElement` instance.
 * @example ```typescript
 * const baseElement = BASE({className: 'base'});
 * ```
 */ exports.BASE = (0, utils_1.createElementFactory)("base");
/**
 * #### HTMLBodyElement
 * ```html
 * <body>
 * ```
 * @description creates an `HTMLBodyElement` instance.
 * @example
 * ```typescript
 * const body:HTMLBodyElement =
 *     BODY(
 *         {className: 'body'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.BODY = (0, utils_1.createElementFactory)("body");
/**
 * #### HTMLButtonElement
 * ```html
 * <button>
 * ```
 * @description creates an `HTMLButtonElement` instance.
 * @example
 * ```typescript
 * const button:HTMLButtonElement =
 *     BUTTON(
 *         {className: 'button'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.BUTTON = (0, utils_1.createElementFactory)("button");
/**
 * #### HTMLCanvasElement
 * ```html
 * <canvas>
 * ```
 * @description creates an `HTMLCanvasElement` instance.
 * @example
 * ```typescript
 * const canvas:HTMLCanvasElement =
 *     CANVAS(
 *         {className: 'canvas'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.CANVAS = (0, utils_1.createElementFactory)("canvas");
/**
 * #### HTMLElement
 * ```html
 * <cite>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const cite:HTMLElement =
 *     CITE(
 *         {className: 'cite'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.CITE = (0, utils_1.createElementFactory)("cite");
/**
 * #### HTMLElement
 * ```html
 * <code>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const code:HTMLElement =
 *     CODE(
 *         {className: 'code'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.CODE = (0, utils_1.createElementFactory)("code");
/**
 * #### HTMLElement
 * ```html
 * <colgroup>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const colgroup:HTMLElement =
 *     COLGROUP(
 *         {className: 'colgroup'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.COLGROUP = (0, utils_1.createElementFactory)("colgroup");
/**
 * #### HTMLElement
 * ```html
 * <dd>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const dd:HTMLElement =
 *     DD(
 *         {className: 'dd'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.DD = (0, utils_1.createElementFactory)("dd");
/**
 * #### HTMLDListElement
 * ```html
 * <dl>
 * ```
 * @description creates an `HTMLDListElement` instance.
 * @example
 * ```typescript
 * const dl:HTMLDListElement =
 *     DL(
 *         {className: 'dl'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.DL = (0, utils_1.createElementFactory)("dl");
/**
 * #### HTMLDataElement
 * ```html
 * <data>
 * ```
 * @description creates an `HTMLDataElement` instance.
 * @example
 * ```typescript
 * const data:HTMLDataElement =
 *     DATA(
 *         {className: 'data'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.DATA = (0, utils_1.createElementFactory)("data");
/**
 * #### HTMLDataListElement
 * ```html
 * <datalist>
 * ```
 * @description creates an `HTMLDataListElement` instance.
 * @example
 * ```typescript
 * const datalist:HTMLDataListElement =
 *     DATALIST(
 *         {className: 'datalist'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.DATALIST = (0, utils_1.createElementFactory)("datalist");
/**
 * #### HTMLDetailsElement
 * ```html
 * <details>
 * ```
 * @description creates an `HTMLDetailsElement` instance.
 * @example
 * ```typescript
 * const details:HTMLDetailsElement =
 *     DETAILS(
 *         {className: 'details'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.DETAILS = (0, utils_1.createElementFactory)("details");
/**
 * #### HTMLDialogElement
 * ```html
 * <dialog>
 * ```
 * @description creates an `HTMLDialogElement` instance.
 * @example
 * ```typescript
 * const dialog:HTMLDialogElement =
 *     DIALOG(
 *         {className: 'dialog'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.DIALOG = (0, utils_1.createElementFactory)("dialog");
/**
 * #### HTMLDivElement
 * ```html
 * <div>
 * ```
 * @description creates an `HTMLDivElement` instance.
 * @example
 * ```typescript
 * const div:HTMLDivElement =
 *     DIV(
 *         {className: 'div'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.DIV = (0, utils_1.createElementFactory)("div");
/**
 * #### HTMLElement
 * ```html
 * <em>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const em:HTMLElement =
 *     EM(
 *         {className: 'em'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.EM = (0, utils_1.createElementFactory)("em");
/**
 * #### HTMLEmbedElement
 * ```html
 * <embed>
 * ```
 * @description creates an `HTMLEmbedElement` instance.
 * @example ```typescript
 * const embedElement = EMBED({className: 'embed'});
 * ```
 */ exports.EMBED = (0, utils_1.createElementFactory)("embed");
/**
 * #### HTMLFieldSetElement
 * ```html
 * <fieldset>
 * ```
 * @description creates an `HTMLFieldSetElement` instance.
 * @example
 * ```typescript
 * const fieldset:HTMLFieldSetElement =
 *     FIELDSET(
 *         {className: 'fieldset'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.FIELDSET = (0, utils_1.createElementFactory)("fieldset");
/**
 * #### HTMLElement
 * ```html
 * <figure>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const figure:HTMLElement =
 *     FIGURE(
 *         {className: 'figure'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.FIGURE = (0, utils_1.createElementFactory)("figure");
/**
 * #### HTMLElement
 * ```html
 * <footer>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const footer:HTMLElement =
 *     FOOTER(
 *         {className: 'footer'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.FOOTER = (0, utils_1.createElementFactory)("footer");
/**
 * #### HTMLFormElement
 * ```html
 * <form>
 * ```
 * @description creates an `HTMLFormElement` instance.
 * @example
 * ```typescript
 * const form:HTMLFormElement =
 *     FORM(
 *         {className: 'form'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.FORM = (0, utils_1.createElementFactory)("form");
/**
 * #### HTMLElement
 * ```html
 * <hgroup>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const hgroup:HTMLElement =
 *     HGROUP(
 *         {className: 'hgroup'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.HGROUP = (0, utils_1.createElementFactory)("hgroup");
/**
 * #### HTMLHRElement
 * ```html
 * <hr>
 * ```
 * @description creates an `HTMLHRElement` instance.
 * @example ```typescript
 * const hrElement = HR({className: 'hr'});
 * ```
 */ exports.HR = (0, utils_1.createElementFactory)("hr");
/**
 * #### HTMLHeadElement
 * ```html
 * <head>
 * ```
 * @description creates an `HTMLHeadElement` instance.
 * @example
 * ```typescript
 * const head:HTMLHeadElement =
 *     HEAD(
 *         {className: 'head'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.HEAD = (0, utils_1.createElementFactory)("head");
/**
 * #### HTMLHeadingElement
 * ```html
 * <h1>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h1:HTMLHeadingElement =
 *     H1(
 *         {className: 'h1'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.H1 = (0, utils_1.createElementFactory)("h1");
/**
 * #### HTMLHeadingElement
 * ```html
 * <h2>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h2:HTMLHeadingElement =
 *     H2(
 *         {className: 'h2'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.H2 = (0, utils_1.createElementFactory)("h2");
/**
 * #### HTMLHeadingElement
 * ```html
 * <h3>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h3:HTMLHeadingElement =
 *     H3(
 *         {className: 'h3'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.H3 = (0, utils_1.createElementFactory)("h3");
/**
 * #### HTMLHeadingElement
 * ```html
 * <h4>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h4:HTMLHeadingElement =
 *     H4(
 *         {className: 'h4'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.H4 = (0, utils_1.createElementFactory)("h4");
/**
 * #### HTMLHeadingElement
 * ```html
 * <h5>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h5:HTMLHeadingElement =
 *     H5(
 *         {className: 'h5'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.H5 = (0, utils_1.createElementFactory)("h5");
/**
 * #### HTMLHeadingElement
 * ```html
 * <h6>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h6:HTMLHeadingElement =
 *     H6(
 *         {className: 'h6'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.H6 = (0, utils_1.createElementFactory)("h6");
/**
 * #### HTMLHtmlElement
 * ```html
 * <html>
 * ```
 * @description creates an `HTMLHtmlElement` instance.
 * @example
 * ```typescript
 * const html:HTMLHtmlElement =
 *     HTML(
 *         {className: 'html'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.HTML = (0, utils_1.createElementFactory)("html");
/**
 * #### HTMLElement
 * ```html
 * <kbd>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const kbd:HTMLElement =
 *     KBD(
 *         {className: 'kbd'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.KBD = (0, utils_1.createElementFactory)("kbd");
/**
 * #### HTMLModElement
 * ```html
 * <ins>
 * ```
 * @description creates an `HTMLModElement` instance.
 * @example
 * ```typescript
 * const ins:HTMLModElement =
 *     INS(
 *         {className: 'ins'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.INS = (0, utils_1.createElementFactory)("ins");
/**
 * #### HTMLElement
 * ```html
 * <i>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const i:HTMLElement =
 *     I(
 *         {className: 'i'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.I = (0, utils_1.createElementFactory)("i");
/**
 * #### HTMLIFrameElement
 * ```html
 * <iframe>
 * ```
 * @description creates an `HTMLIFrameElement` instance.
 * @example
 * ```typescript
 * const iframe:HTMLIFrameElement =
 *     IFRAME(
 *         {className: 'iframe'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.IFRAME = (0, utils_1.createElementFactory)("iframe");
/**
 * #### HTMLImageElement
 * ```html
 * <img>
 * ```
 * @description creates an `HTMLImageElement` instance.
 * @example ```typescript
 * const imgElement = IMG({className: 'img'});
 * ```
 */ exports.IMG = (0, utils_1.createElementFactory)("img");
/**
 * #### HTMLInputElement
 * ```html
 * <input>
 * ```
 * @description creates an `HTMLInputElement` instance.
 * @example ```typescript
 * const inputElement = INPUT({className: 'input'});
 * ```
 */ exports.INPUT = (0, utils_1.createElementFactory)("input");
/**
 * #### HTMLLIElement
 * ```html
 * <li>
 * ```
 * @description creates an `HTMLLIElement` instance.
 * @example
 * ```typescript
 * const li:HTMLLIElement =
 *     LI(
 *         {className: 'li'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.LI = (0, utils_1.createElementFactory)("li");
/**
 * #### HTMLLabelElement
 * ```html
 * <label>
 * ```
 * @description creates an `HTMLLabelElement` instance.
 * @example
 * ```typescript
 * const label:HTMLLabelElement =
 *     LABEL(
 *         {className: 'label'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.LABEL = (0, utils_1.createElementFactory)("label");
/**
 * #### HTMLLegendElement
 * ```html
 * <legend>
 * ```
 * @description creates an `HTMLLegendElement` instance.
 * @example
 * ```typescript
 * const legend:HTMLLegendElement =
 *     LEGEND(
 *         {className: 'legend'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.LEGEND = (0, utils_1.createElementFactory)("legend");
/**
 * #### HTMLLinkElement
 * ```html
 * <link>
 * ```
 * @description creates an `HTMLLinkElement` instance.
 * @example ```typescript
 * const linkElement = LINK({className: 'link'});
 * ```
 */ exports.LINK = (0, utils_1.createElementFactory)("link");
/**
 * #### HTMLElement
 * ```html
 * <main>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const main:HTMLElement =
 *     MAIN(
 *         {className: 'main'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.MAIN = (0, utils_1.createElementFactory)("main");
/**
 * #### HTMLMapElement
 * ```html
 * <map>
 * ```
 * @description creates an `HTMLMapElement` instance.
 * @example
 * ```typescript
 * const map:HTMLMapElement =
 *     MAP(
 *         {className: 'map'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.MAP = (0, utils_1.createElementFactory)("map");
/**
 * #### HTMLMenuElement
 * ```html
 * <menu>
 * ```
 * @description creates an `HTMLMenuElement` instance.
 * @example
 * ```typescript
 * const menu:HTMLMenuElement =
 *     MENU(
 *         {className: 'menu'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.MENU = (0, utils_1.createElementFactory)("menu");
/**
 * #### HTMLElement
 * ```html
 * <mark>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const mark:HTMLElement =
 *     MARK(
 *         {className: 'mark'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.MARK = (0, utils_1.createElementFactory)("mark");
/**
 * #### HTMLElement
 * ```html
 * <nav>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const nav:HTMLElement =
 *     NAV(
 *         {className: 'nav'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.NAV = (0, utils_1.createElementFactory)("nav");
/**
 * #### HTMLElement
 * ```html
 * <noscript>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const noscript:HTMLElement =
 *     NOSCRIPT(
 *         {className: 'noscript'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.NOSCRIPT = (0, utils_1.createElementFactory)("noscript");
/**
 * #### HTMLMetaElement
 * ```html
 * <meta>
 * ```
 * @description creates an `HTMLMetaElement` instance.
 * @example ```typescript
 * const metaElement = META({className: 'meta'});
 * ```
 */ exports.META = (0, utils_1.createElementFactory)("meta");
/**
 * #### HTMLMeterElement
 * ```html
 * <meter>
 * ```
 * @description creates an `HTMLMeterElement` instance.
 * @example
 * ```typescript
 * const meter:HTMLMeterElement =
 *     METER(
 *         {className: 'meter'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.METER = (0, utils_1.createElementFactory)("meter");
/**
 * #### HTMLModElement
 * ```html
 * <del>
 * ```
 * @description creates an `HTMLModElement` instance.
 * @example
 * ```typescript
 * const del:HTMLModElement =
 *     DEL(
 *         {className: 'del'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.DEL = (0, utils_1.createElementFactory)("del");
/**
 * #### HTMLOListElement
 * ```html
 * <ol>
 * ```
 * @description creates an `HTMLOListElement` instance.
 * @example
 * ```typescript
 * const ol:HTMLOListElement =
 *     OL(
 *         {className: 'ol'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.OL = (0, utils_1.createElementFactory)("ol");
/**
 * #### HTMLObjectElement
 * ```html
 * <object>
 * ```
 * @description creates an `HTMLObjectElement` instance.
 * @example
 * ```typescript
 * const object:HTMLObjectElement =
 *     OBJECT(
 *         {className: 'object'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.OBJECT = (0, utils_1.createElementFactory)("object");
/**
 * #### HTMLOptGroupElement
 * ```html
 * <optgroup>
 * ```
 * @description creates an `HTMLOptGroupElement` instance.
 * @example
 * ```typescript
 * const optgroup:HTMLOptGroupElement =
 *     OPTGROUP(
 *         {className: 'optgroup'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.OPTGROUP = (0, utils_1.createElementFactory)("optgroup");
/**
 * #### HTMLOptionElement
 * ```html
 * <option>
 * ```
 * @description creates an `HTMLOptionElement` instance.
 * @example
 * ```typescript
 * const option:HTMLOptionElement =
 *     OPTION(
 *         {className: 'option'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.OPTION = (0, utils_1.createElementFactory)("option");
/**
 * #### HTMLOutputElement
 * ```html
 * <output>
 * ```
 * @description creates an `HTMLOutputElement` instance.
 * @example
 * ```typescript
 * const output:HTMLOutputElement =
 *     OUTPUT(
 *         {className: 'output'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.OUTPUT = (0, utils_1.createElementFactory)("output");
/**
 * #### HTMLParagraphElement
 * ```html
 * <p>
 * ```
 * @description creates an `HTMLParagraphElement` instance.
 * @example
 * ```typescript
 * const p:HTMLParagraphElement =
 *     P(
 *         {className: 'p'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.P = (0, utils_1.createElementFactory)("p");
/**
 * #### HTMLPictureElement
 * ```html
 * <picture>
 * ```
 * @description creates an `HTMLPictureElement` instance.
 * @example
 * ```typescript
 * const picture:HTMLPictureElement =
 *     PICTURE(
 *         {className: 'picture'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.PICTURE = (0, utils_1.createElementFactory)("picture");
/**
 * #### HTMLPreElement
 * ```html
 * <pre>
 * ```
 * @description creates an `HTMLPreElement` instance.
 * @example
 * ```typescript
 * const pre:HTMLPreElement =
 *     PRE(
 *         {className: 'pre'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.PRE = (0, utils_1.createElementFactory)("pre");
/**
 * #### HTMLProgressElement
 * ```html
 * <progress>
 * ```
 * @description creates an `HTMLProgressElement` instance.
 * @example
 * ```typescript
 * const progress:HTMLProgressElement =
 *     PROGRESS(
 *         {className: 'progress'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.PROGRESS = (0, utils_1.createElementFactory)("progress");
/**
 * #### HTMLElement
 * ```html
 * <rt>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const rt:HTMLElement =
 *     RT(
 *         {className: 'rt'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.RT = (0, utils_1.createElementFactory)("rt");
/**
 * #### HTMLElement
 * ```html
 * <rp>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const rp:HTMLElement =
 *     RP(
 *         {className: 'rp'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.RP = (0, utils_1.createElementFactory)("rp");
/**
 * #### HTMLElement
 * ```html
 * <ruby>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const ruby:HTMLElement =
 *     RUBY(
 *         {className: 'ruby'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.RUBY = (0, utils_1.createElementFactory)("ruby");
/**
 * #### HTMLElement
 * ```html
 * <small>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const small:HTMLElement =
 *     SMALL(
 *         {className: 'small'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SMALL = (0, utils_1.createElementFactory)("small");
/**
 * #### HTMLQuoteElement
 * ```html
 * <q>
 * ```
 * @description creates an `HTMLQuoteElement` instance.
 * @example
 * ```typescript
 * const q:HTMLQuoteElement =
 *     Q(
 *         {className: 'q'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.Q = (0, utils_1.createElementFactory)("q");
/**
 * #### HTMLQuoteElement
 * ```html
 * <blockquote>
 * ```
 * @description creates an `HTMLQuoteElement` instance.
 * @example
 * ```typescript
 * const blockquote:HTMLQuoteElement =
 *     BLOCKQUOTE(
 *         {className: 'blockquote'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.BLOCKQUOTE = (0, utils_1.createElementFactory)("blockquote");
/**
 * #### HTMLScriptElement
 * ```html
 * <script>
 * ```
 * @description creates an `HTMLScriptElement` instance.
 * @example
 * ```typescript
 * const script:HTMLScriptElement =
 *     SCRIPT(
 *         {className: 'script'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SCRIPT = (0, utils_1.createElementFactory)("script");
/**
 * #### HTMLSelectElement
 * ```html
 * <select>
 * ```
 * @description creates an `HTMLSelectElement` instance.
 * @example
 * ```typescript
 * const select:HTMLSelectElement =
 *     SELECT(
 *         {className: 'select'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SELECT = (0, utils_1.createElementFactory)("select");
/**
 * #### HTMLSlotElement
 * ```html
 * <slot>
 * ```
 * @description creates an `HTMLSlotElement` instance.
 * @example
 * ```typescript
 * const slot:HTMLSlotElement =
 *     SLOT(
 *         {className: 'slot'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SLOT = (0, utils_1.createElementFactory)("slot");
/**
 * #### HTMLSourceElement
 * ```html
 * <source>
 * ```
 * @description creates an `HTMLSourceElement` instance.
 * @example ```typescript
 * const sourceElement = SOURCE({className: 'source'});
 * ```
 */ exports.SOURCE = (0, utils_1.createElementFactory)("source");
/**
 * #### HTMLSpanElement
 * ```html
 * <span>
 * ```
 * @description creates an `HTMLSpanElement` instance.
 * @example
 * ```typescript
 * const span:HTMLSpanElement =
 *     SPAN(
 *         {className: 'span'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SPAN = (0, utils_1.createElementFactory)("span");
/**
 * #### HTMLStyleElement
 * ```html
 * <style>
 * ```
 * @description creates an `HTMLStyleElement` instance.
 * @example
 * ```typescript
 * const stylesheet = STYLE(css`
 *     .my-class {
 *         color: red;
 *     }
 * `);

 * document.head.append(stylesheet)
 * ```
 */ exports.STYLE = (0, utils_1.createElementFactory)("style");
/**
 * #### HTMLElement
 * ```html
 * <sub>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const sub:HTMLElement =
 *     SUB(
 *         {className: 'sub'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SUB = (0, utils_1.createElementFactory)("sub");
/**
 * #### HTMLElement
 * ```html
 * <summary>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const summary:HTMLElement =
 *     SUMMARY(
 *         {className: 'summary'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SUMMARY = (0, utils_1.createElementFactory)("summary");
/**
 * #### HTMLElement
 * ```html
 * <search>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const search:HTMLElement =
 *     SEARCH(
 *         {className: 'search'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SEARCH = (0, utils_1.createElementFactory)("search");
/**
 * #### HTMLElement
 * ```html
 * <section>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const section:HTMLElement =
 *     SECTION(
 *         {className: 'section'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.SECTION = (0, utils_1.createElementFactory)("section");
/**
 * #### HTMLTableCaptionElement
 * ```html
 * <caption>
 * ```
 * @description creates an `HTMLTableCaptionElement` instance.
 * @example
 * ```typescript
 * const caption:HTMLTableCaptionElement =
 *     CAPTION(
 *         {className: 'caption'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.CAPTION = (0, utils_1.createElementFactory)("caption");
/**
 * #### HTMLTableCellElement
 * ```html
 * <th>
 * ```
 * @description creates an `HTMLTableCellElement` instance.
 * @example
 * ```typescript
 * const th:HTMLTableCellElement =
 *     TH(
 *         {className: 'th'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TH = (0, utils_1.createElementFactory)("th");
/**
 * #### HTMLTableCellElement
 * ```html
 * <td>
 * ```
 * @description creates an `HTMLTableCellElement` instance.
 * @example
 * ```typescript
 * const td:HTMLTableCellElement =
 *     TD(
 *         {className: 'td'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TD = (0, utils_1.createElementFactory)("td");
/**
 * #### HTMLTableColElement
 * ```html
 * <col>
 * ```
 * @description creates an `HTMLTableColElement` instance.
 * @example ```typescript
 * const colElement = COL({className: 'col'});
 * ```
 */ exports.COL = (0, utils_1.createElementFactory)("col");
/**
 * #### HTMLTableElement
 * ```html
 * <table>
 * ```
 * @description creates an `HTMLTableElement` instance.
 * @example
 * ```typescript
 * const table:HTMLTableElement =
 *     TABLE(
 *         {className: 'table'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TABLE = (0, utils_1.createElementFactory)("table");
/**
 * #### HTMLTableRowElement
 * ```html
 * <tr>
 * ```
 * @description creates an `HTMLTableRowElement` instance.
 * @example
 * ```typescript
 * const tr:HTMLTableRowElement =
 *     TR(
 *         {className: 'tr'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TR = (0, utils_1.createElementFactory)("tr");
/**
 * #### HTMLTableSectionElement
 * ```html
 * <thead>
 * ```
 * @description creates an `HTMLTableSectionElement` instance.
 * @example
 * ```typescript
 * const thead:HTMLTableSectionElement =
 *     THEAD(
 *         {className: 'thead'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.THEAD = (0, utils_1.createElementFactory)("thead");
/**
 * #### HTMLTableSectionElement
 * ```html
 * <tfoot>
 * ```
 * @description creates an `HTMLTableSectionElement` instance.
 * @example
 * ```typescript
 * const tfoot:HTMLTableSectionElement =
 *     TFOOT(
 *         {className: 'tfoot'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TFOOT = (0, utils_1.createElementFactory)("tfoot");
/**
 * #### HTMLTableSectionElement
 * ```html
 * <tbody>
 * ```
 * @description creates an `HTMLTableSectionElement` instance.
 * @example
 * ```typescript
 * const tbody:HTMLTableSectionElement =
 *     TBODY(
 *         {className: 'tbody'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TBODY = (0, utils_1.createElementFactory)("tbody");
/**
 * #### HTMLTemplateElement
 * ```html
 * <template>
 * ```
 * @description creates an `HTMLTemplateElement` instance.
 * @example
 * ```typescript
 * const template:HTMLTemplateElement =
 *     TEMPLATE(
 *         {className: 'template'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TEMPLATE = (0, utils_1.createElementFactory)("template");
/**
 * #### HTMLTextAreaElement
 * ```html
 * <textarea>
 * ```
 * @description creates an `HTMLTextAreaElement` instance.
 * @example
 * ```typescript
 * const textarea:HTMLTextAreaElement =
 *     TEXTAREA(
 *         {className: 'textarea'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TEXTAREA = (0, utils_1.createElementFactory)("textarea");
/**
 * #### HTMLTimeElement
 * ```html
 * <time>
 * ```
 * @description creates an `HTMLTimeElement` instance.
 * @example
 * ```typescript
 * const time:HTMLTimeElement =
 *     TIME(
 *         {className: 'time'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TIME = (0, utils_1.createElementFactory)("time");
/**
 * #### HTMLTitleElement
 * ```html
 * <title>
 * ```
 * @description creates an `HTMLTitleElement` instance.
 * @example
 * ```typescript
 * const title:HTMLTitleElement =
 *     TITLE(
 *         {className: 'title'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.TITLE = (0, utils_1.createElementFactory)("title");
/**
 * #### HTMLTrackElement
 * ```html
 * <track>
 * ```
 * @description creates an `HTMLTrackElement` instance.
 * @example ```typescript
 * const trackElement = TRACK({className: 'track'});
 * ```
 */ exports.TRACK = (0, utils_1.createElementFactory)("track");
/**
 * #### HTMLElement
 * ```html
 * <u>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const u:HTMLElement =
 *     U(
 *         {className: 'u'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.U = (0, utils_1.createElementFactory)("u");
/**
 * #### HTMLUListElement
 * ```html
 * <ul>
 * ```
 * @description creates an `HTMLUListElement` instance.
 * @example
 * ```typescript
 * const ul:HTMLUListElement =
 *     UL(
 *         {className: 'ul'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.UL = (0, utils_1.createElementFactory)("ul");
/**
 * #### HTMLVideoElement
 * ```html
 * <video>
 * ```
 * @description creates an `HTMLVideoElement` instance.
 * @example
 * ```typescript
 * const video:HTMLVideoElement =
 *     VIDEO(
 *         {className: 'video'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.VIDEO = (0, utils_1.createElementFactory)("video");
/**
 * #### HTMLElement
 * ```html
 * <var>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const var:HTMLElement =
 *     VAR(
 *         {className: 'var'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */ exports.VAR = (0, utils_1.createElementFactory)("var");
/**
 * #### HTMLElement
 * ```html
 * <wbr>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example ```typescript
 * const wbrElement = WBR({className: 'wbr'});
 * ```
 */ exports.WBR = (0, utils_1.createElementFactory)("wbr");
exports.FRAGMENT = utils_1.createFragment;

},{"ce6b4a056d7b02cf":"3gqbj"}],"juAUj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"gkKU3":[function(require,module,exports) {
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

},{}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequire7e85")

//# sourceMappingURL=index.b71e74eb.js.map

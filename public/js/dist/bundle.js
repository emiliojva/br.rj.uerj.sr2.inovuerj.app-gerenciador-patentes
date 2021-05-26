/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/typescript/services/event-manager.ts":
/*!********************************************************!*\
  !*** ./resources/typescript/services/event-manager.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
* Conceito de orientação a eventos(listeners)
*/
var EventManager = /** @class */ (function () {
    function EventManager() {
        /**
         * Indexable Types
         * - Representacao shortHand de um objeto específico(iteravel), com indice associativo(eventName:string) definido.
         * Neste indice comporta SOMENTE, um array com itens do tipo ListernerInterface
         *
         * Qualquer outra representacao de objeto gera um erro
         *
         */
        this.listenersShortHand = {}; // representacao shortHand de um Indexable Types
        this.listeners = {};
    }
    /**
     * Empilha funcoes/procedures para cada ouvinte
     * @param eventName
     * @param callable
     */
    EventManager.prototype.addListener = function (eventName, callable) {
        /**
         * Representacao de um listener
         * Cada posicao associativa/token do objeto recebe um array de funcoes
         * this.listerners['cantar'] = [func1,func2,func3];
         * ex:  {
         *          'mostrar'=>function(){
         *              mostrarAlgo()
         *          }
         *      }
         */
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    };
    /**
     * Executa evento nomeado
     * @param eventName
     */
    EventManager.prototype.runEvent = function (eventName) {
        // console.log(this.listeners[eventName])
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var callable = _a[_i];
            callable();
        }
    };
    return EventManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventManager);


/***/ }),

/***/ "./resources/typescript/services/utils.service.ts":
/*!********************************************************!*\
  !*** ./resources/typescript/services/utils.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.camelize = function (value) {
        var str = value.toLowerCase();
        var re = /(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g;
        return str.replace(re, function (s) { return s.toUpperCase(); });
    };
    return UtilsService;
}());



/***/ }),

/***/ "./resources/typescript lazy recursive ^\\.\\/pages.*$":
/*!*******************************************************************!*\
  !*** ./resources/typescript/ lazy ^\.\/pages.*$ namespace object ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pages/admin.page": [
		"./resources/typescript/pages/admin.page.ts",
		"resources_typescript_pages_admin_page_ts"
	],
	"./pages/admin.page.ts": [
		"./resources/typescript/pages/admin.page.ts",
		"resources_typescript_pages_admin_page_ts"
	],
	"./pages/admin/ativo/_forms/form": [
		"./resources/typescript/pages/admin/ativo/_forms/form.ts",
		"vendors-node_modules_jquery-mask-plugin_dist_jquery_mask_js",
		"resources_typescript_pages_admin_ativo__forms_form_ts"
	],
	"./pages/admin/ativo/_forms/form.ts": [
		"./resources/typescript/pages/admin/ativo/_forms/form.ts",
		"vendors-node_modules_jquery-mask-plugin_dist_jquery_mask_js",
		"resources_typescript_pages_admin_ativo__forms_form_ts"
	],
	"./pages/admin/ativo/create.page": [
		"./resources/typescript/pages/admin/ativo/create.page.ts",
		"vendors-node_modules_jquery-mask-plugin_dist_jquery_mask_js",
		"vendors-node_modules_axios_index_js",
		"resources_typescript_pages_admin_ativo_create_page_ts"
	],
	"./pages/admin/ativo/create.page.ts": [
		"./resources/typescript/pages/admin/ativo/create.page.ts",
		"vendors-node_modules_jquery-mask-plugin_dist_jquery_mask_js",
		"vendors-node_modules_axios_index_js",
		"resources_typescript_pages_admin_ativo_create_page_ts"
	],
	"./pages/home.page": [
		"./resources/typescript/pages/home.page.ts",
		"resources_typescript_pages_home_page_ts"
	],
	"./pages/home.page.ts": [
		"./resources/typescript/pages/home.page.ts",
		"resources_typescript_pages_home_page_ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/typescript lazy recursive ^\\.\\/pages.*$";
module.exports = webpackAsyncContext;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "projeto-gerenciamento-patentes:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./resources/typescript/main.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _services_event_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/event-manager */ "./resources/typescript/services/event-manager.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/utils.service */ "./resources/typescript/services/utils.service.ts");


// import * as $ from "jquery";
// declare var jquery: any;
// declare var $: any;
// export const RegisteredControllers: any = {
//   PublicController
// }
var Main = /** @class */ (function () {
    function Main(eventManager) {
        this.eventManager = eventManager;
        this.init();
    }
    Main.prototype.init = function () {
        var route_current = document.querySelector('html').dataset.activeRoute || null;
        if (route_current) {
            var promiseControllerPage = this.getControllerPage(route_current);
            promiseControllerPage
                .then(function (instanceControllerPage) {
                instanceControllerPage.hello();
            }).catch(function (e) { return console.log(e); });
        }
    };
    /**
     *
     * @param route_current string
     * @returns Promise|null
     */
    Main.prototype.getControllerPage = function (route_current) {
        // document.addEventListener('DOMContentLoaded', (event) => {
        //   console.log('DOM fully loaded and parsed - DOCUMENT');
        // });
        var _this = this;
        /**
         * string caminho completo da Page
         * @exemplo /pages/admin/
         * @param module_path
         */
        var module_path = route_current.replace(/([a-zA-Z]+)$/, '');
        /**
         * Nome da classe do modulo
          @exemplo create.page.ts em /pages/admin/
         * @param module_page string
         */
        var module_page = route_current.match(/[a-zA-Z]+$/)[0] || null;
        if (module_page) {
            var moduleClasseName_1 = _services_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.camelize(module_page) + 'Page';
            module_page += '.page';
            module_path += module_page;
            var page_import = __webpack_require__("./resources/typescript lazy recursive ^\\.\\/pages.*$")("./pages" + module_path);
            return page_import
                .then(function (module) {
                var instance = new module[moduleClasseName_1](_this.eventManager); // new RegisteredControllers[controller]();
                return instance;
            })
                .catch(function (e) { return Promise.reject("Crie uma classe " + moduleClasseName_1 + " no caminho de pasta ./pages" + module_path + " para manipular essa pagina .\n :) " + e); });
        }
    };
    return Main;
}());

new Main(new _services_event_manager__WEBPACK_IMPORTED_MODULE_0__.default());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9zZXJ2aWNlcy9ldmVudC1tYW5hZ2VyLnRzIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy8uL3Jlc291cmNlcy90eXBlc2NyaXB0L3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vcHJvamV0by1nZXJlbmNpYW1lbnRvLXBhdGVudGVzLy4vcmVzb3VyY2VzL3R5cGVzY3JpcHR8bGF6eXwvXlxcLlxcL3BhZ2VzLiokL3xncm91cE9wdGlvbnM6IHt9fG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamV0by1nZXJlbmNpYW1lbnRvLXBhdGVudGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcHJvamV0by1nZXJlbmNpYW1lbnRvLXBhdGVudGVzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamV0by1nZXJlbmNpYW1lbnRvLXBhdGVudGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamV0by1nZXJlbmNpYW1lbnRvLXBhdGVudGVzL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamV0by1nZXJlbmNpYW1lbnRvLXBhdGVudGVzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy8uL3Jlc291cmNlcy90eXBlc2NyaXB0L21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7RUFFRTtBQUNGO0lBQUE7UUFFRTs7Ozs7OztXQU9HO1FBQ0ssdUJBQWtCLEdBQXNELEVBQUUsQ0FBQyxDQUFDLGdEQUFnRDtRQUM1SCxjQUFTLEdBQWMsRUFBRSxDQUFDO0lBMENwQyxDQUFDO0lBeENDOzs7O09BSUc7SUFDSCxrQ0FBVyxHQUFYLFVBQVksU0FBaUIsRUFBRSxRQUEyQjtRQUV0RDs7Ozs7Ozs7O1dBU0c7UUFDSCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtCQUFRLEdBQVIsVUFBUyxTQUFpQjtRQUV0Qix5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtZQUMv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LE9BQU8sQ0FBQyxjQUFjLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFFbkU7Ozs7V0FJRztRQUNILElBQUksV0FBVyxHQUFXLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1FBRXZFLElBQUcsV0FBVyxFQUFFO1lBRWQsSUFBSSxrQkFBZ0IsR0FBRywwRUFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUM7WUFFbkUsV0FBVyxJQUFJLE9BQU8sQ0FBQztZQUN2QixXQUFXLElBQUksV0FBVztZQUUxQixJQUFNLFdBQVcsR0FBRyw2RUFBTyxZQUFVLFdBQWEsQ0FBQyxDQUFDO1lBRXBELE9BQU8sV0FBVztpQkFDZixJQUFJLENBQUUsVUFBQyxNQUFNO2dCQUNaLElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLGtCQUFnQixDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsMkNBQTJDO2dCQUMzRyxPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBRSxxQkFBbUIsa0JBQWdCLG9DQUErQixXQUFXLHdDQUFxQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcks7SUFFSCxDQUFDO0lBRUgsV0FBQztBQUFELENBQUM7O0FBRUQsSUFBSSxJQUFJLENBQUUsSUFBSSw0REFBWSxFQUFFLENBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQ29uY2VpdG8gZGUgb3JpZW50YcOnw6NvIGEgZXZlbnRvcyhsaXN0ZW5lcnMpXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcbiAgXG4gIC8qKlxuICAgKiBJbmRleGFibGUgVHlwZXNcbiAgICogLSBSZXByZXNlbnRhY2FvIHNob3J0SGFuZCBkZSB1bSBvYmpldG8gZXNwZWPDrWZpY28oaXRlcmF2ZWwpLCBjb20gaW5kaWNlIGFzc29jaWF0aXZvKGV2ZW50TmFtZTpzdHJpbmcpIGRlZmluaWRvLlxuICAgKiBOZXN0ZSBpbmRpY2UgY29tcG9ydGEgU09NRU5URSwgdW0gYXJyYXkgY29tIGl0ZW5zIGRvIHRpcG8gTGlzdGVybmVySW50ZXJmYWNlXG4gICAqIFxuICAgKiBRdWFscXVlciBvdXRyYSByZXByZXNlbnRhY2FvIGRlIG9iamV0byBnZXJhIHVtIGVycm9cbiAgICogXG4gICAqL1xuICBwcml2YXRlIGxpc3RlbmVyc1Nob3J0SGFuZDogeyBbZXZlbnROYW1lOiBzdHJpbmddOiBBcnJheTxMaXN0ZW5lckludGVyZmFjZT4gfSA9IHt9OyAvLyByZXByZXNlbnRhY2FvIHNob3J0SGFuZCBkZSB1bSBJbmRleGFibGUgVHlwZXNcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IExpc3RlbmVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBFbXBpbGhhIGZ1bmNvZXMvcHJvY2VkdXJlcyBwYXJhIGNhZGEgb3V2aW50ZVxuICAgKiBAcGFyYW0gZXZlbnROYW1lIFxuICAgKiBAcGFyYW0gY2FsbGFibGUgXG4gICAqL1xuICBhZGRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZywgY2FsbGFibGU6IExpc3RlbmVySW50ZXJmYWNlIClcbiAge1xuICAgICAgLyoqXG4gICAgICAgKiBSZXByZXNlbnRhY2FvIGRlIHVtIGxpc3RlbmVyXG4gICAgICAgKiBDYWRhIHBvc2ljYW8gYXNzb2NpYXRpdmEvdG9rZW4gZG8gb2JqZXRvIHJlY2ViZSB1bSBhcnJheSBkZSBmdW5jb2VzXG4gICAgICAgKiB0aGlzLmxpc3Rlcm5lcnNbJ2NhbnRhciddID0gW2Z1bmMxLGZ1bmMyLGZ1bmMzXTsgXG4gICAgICAgKiBleDogIHtcbiAgICAgICAqICAgICAgICAgICdtb3N0cmFyJz0+ZnVuY3Rpb24oKXsgXG4gICAgICAgKiAgICAgICAgICAgICAgbW9zdHJhckFsZ28oKSBcbiAgICAgICAqICAgICAgICAgIH0gXG4gICAgICAgKiAgICAgIH1cbiAgICAgICAqL1xuICAgICAgaWYoICEodGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSBpbnN0YW5jZW9mIEFycmF5KSApe1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxhYmxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRhIGV2ZW50byBub21lYWRvXG4gICAqIEBwYXJhbSBldmVudE5hbWUgXG4gICAqL1xuICBydW5FdmVudChldmVudE5hbWU6IHN0cmluZylcbiAge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSlcbiAgICAgIGlmKCAhKHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdID0gW107XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvcihsZXQgY2FsbGFibGUgb2YgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSl7XG4gICAgICAgICAgY2FsbGFibGUoKTtcbiAgICAgIH1cbiAgfVxuXG59XG5cblxuXG5pbnRlcmZhY2UgTGlzdGVuZXJJbnRlcmZhY2Uge1xuICAoKTp2b2lkO1xufVxuXG5pbnRlcmZhY2UgTGlzdGVuZXJzIHtcbiAgW2V2ZW50TmFtZTogc3RyaW5nXTogQXJyYXk8TGlzdGVuZXJJbnRlcmZhY2U+IFxufSIsImV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2Uge1xuXG4gIHB1YmxpYyBzdGF0aWMgY2FtZWxpemUodmFsdWU6IHN0cmluZyl7XG4gICAgbGV0IHN0ciA9IHZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICBsZXQgcmUgPSAvKF4oW2EtekEtWlxccHtNfV0pKXwoWyAtXVthLXpBLVpcXHB7TX1dKS9nXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlLCBzID0+IHMudG9VcHBlckNhc2UoKSlcbiAgfVxuXG59IiwidmFyIG1hcCA9IHtcblx0XCIuL3BhZ2VzL2FkbWluLnBhZ2VcIjogW1xuXHRcdFwiLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9hZG1pbi5wYWdlLnRzXCIsXG5cdFx0XCJyZXNvdXJjZXNfdHlwZXNjcmlwdF9wYWdlc19hZG1pbl9wYWdlX3RzXCJcblx0XSxcblx0XCIuL3BhZ2VzL2FkbWluLnBhZ2UudHNcIjogW1xuXHRcdFwiLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9hZG1pbi5wYWdlLnRzXCIsXG5cdFx0XCJyZXNvdXJjZXNfdHlwZXNjcmlwdF9wYWdlc19hZG1pbl9wYWdlX3RzXCJcblx0XSxcblx0XCIuL3BhZ2VzL2FkbWluL2F0aXZvL19mb3Jtcy9mb3JtXCI6IFtcblx0XHRcIi4vcmVzb3VyY2VzL3R5cGVzY3JpcHQvcGFnZXMvYWRtaW4vYXRpdm8vX2Zvcm1zL2Zvcm0udHNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2pxdWVyeS1tYXNrLXBsdWdpbl9kaXN0X2pxdWVyeV9tYXNrX2pzXCIsXG5cdFx0XCJyZXNvdXJjZXNfdHlwZXNjcmlwdF9wYWdlc19hZG1pbl9hdGl2b19fZm9ybXNfZm9ybV90c1wiXG5cdF0sXG5cdFwiLi9wYWdlcy9hZG1pbi9hdGl2by9fZm9ybXMvZm9ybS50c1wiOiBbXG5cdFx0XCIuL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL2FkbWluL2F0aXZvL19mb3Jtcy9mb3JtLnRzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19qcXVlcnktbWFzay1wbHVnaW5fZGlzdF9qcXVlcnlfbWFza19qc1wiLFxuXHRcdFwicmVzb3VyY2VzX3R5cGVzY3JpcHRfcGFnZXNfYWRtaW5fYXRpdm9fX2Zvcm1zX2Zvcm1fdHNcIlxuXHRdLFxuXHRcIi4vcGFnZXMvYWRtaW4vYXRpdm8vY3JlYXRlLnBhZ2VcIjogW1xuXHRcdFwiLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9hZG1pbi9hdGl2by9jcmVhdGUucGFnZS50c1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfanF1ZXJ5LW1hc2stcGx1Z2luX2Rpc3RfanF1ZXJ5X21hc2tfanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2F4aW9zX2luZGV4X2pzXCIsXG5cdFx0XCJyZXNvdXJjZXNfdHlwZXNjcmlwdF9wYWdlc19hZG1pbl9hdGl2b19jcmVhdGVfcGFnZV90c1wiXG5cdF0sXG5cdFwiLi9wYWdlcy9hZG1pbi9hdGl2by9jcmVhdGUucGFnZS50c1wiOiBbXG5cdFx0XCIuL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL2FkbWluL2F0aXZvL2NyZWF0ZS5wYWdlLnRzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19qcXVlcnktbWFzay1wbHVnaW5fZGlzdF9qcXVlcnlfbWFza19qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYXhpb3NfaW5kZXhfanNcIixcblx0XHRcInJlc291cmNlc190eXBlc2NyaXB0X3BhZ2VzX2FkbWluX2F0aXZvX2NyZWF0ZV9wYWdlX3RzXCJcblx0XSxcblx0XCIuL3BhZ2VzL2hvbWUucGFnZVwiOiBbXG5cdFx0XCIuL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL2hvbWUucGFnZS50c1wiLFxuXHRcdFwicmVzb3VyY2VzX3R5cGVzY3JpcHRfcGFnZXNfaG9tZV9wYWdlX3RzXCJcblx0XSxcblx0XCIuL3BhZ2VzL2hvbWUucGFnZS50c1wiOiBbXG5cdFx0XCIuL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL2hvbWUucGFnZS50c1wiLFxuXHRcdFwicmVzb3VyY2VzX3R5cGVzY3JpcHRfcGFnZXNfaG9tZV9wYWdlX3RzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3Jlc291cmNlcy90eXBlc2NyaXB0IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvcGFnZXMuKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJwcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXM6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcHJvamV0b19nZXJlbmNpYW1lbnRvX3BhdGVudGVzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3Byb2pldG9fZ2VyZW5jaWFtZW50b19wYXRlbnRlc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tICcuL3NlcnZpY2VzL2V2ZW50LW1hbmFnZXInXG5pbXBvcnQgeyBDb250cm9sbGVyUGFnZSB9IGZyb20gJy4vbW9kZWxzL2NvbnRyb2xsZXItcGFnZSc7XG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xuXG4vLyBpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbi8vIGRlY2xhcmUgdmFyIGpxdWVyeTogYW55O1xuLy8gZGVjbGFyZSB2YXIgJDogYW55O1xuXG5cbi8vIGV4cG9ydCBjb25zdCBSZWdpc3RlcmVkQ29udHJvbGxlcnM6IGFueSA9IHtcbi8vICAgUHVibGljQ29udHJvbGxlclxuLy8gfVxuXG5leHBvcnQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcilcbiAge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KClcbiAge1xuXG4gICAgbGV0IHJvdXRlX2N1cnJlbnQ6IHN0cmluZyAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuZGF0YXNldC5hY3RpdmVSb3V0ZSB8fCBudWxsO1xuXG4gICAgaWYocm91dGVfY3VycmVudCl7XG5cbiAgICAgIGxldCBwcm9taXNlQ29udHJvbGxlclBhZ2UgPSB0aGlzLmdldENvbnRyb2xsZXJQYWdlKHJvdXRlX2N1cnJlbnQpO1xuXG4gICAgICBwcm9taXNlQ29udHJvbGxlclBhZ2VcbiAgICAgICAgLnRoZW4oIChpbnN0YW5jZUNvbnRyb2xsZXJQYWdlOiBDb250cm9sbGVyUGFnZSkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlQ29udHJvbGxlclBhZ2UuaGVsbG8oKTtcbiAgICAgICAgfSkuY2F0Y2goIGUgPT4gY29uc29sZS5sb2coZSkpXG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSByb3V0ZV9jdXJyZW50IHN0cmluZ1xuICAgKiBAcmV0dXJucyBQcm9taXNlfG51bGxcbiAgICovXG4gIHByaXZhdGUgZ2V0Q29udHJvbGxlclBhZ2Uocm91dGVfY3VycmVudDpzdHJpbmcpe1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ0RPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZCAtIERPQ1VNRU5UJyk7XG4gICAgLy8gfSk7XG5cbiAgICAvKipcbiAgICAgKiBzdHJpbmcgY2FtaW5obyBjb21wbGV0byBkYSBQYWdlXG4gICAgICogQGV4ZW1wbG8gL3BhZ2VzL2FkbWluL1xuICAgICAqIEBwYXJhbSBtb2R1bGVfcGF0aCBcbiAgICAgKi9cbiAgICBsZXQgbW9kdWxlX3BhdGg6c3RyaW5nICA9IHJvdXRlX2N1cnJlbnQucmVwbGFjZSgvKFthLXpBLVpdKykkLywnJyk7XG5cbiAgICAvKipcbiAgICAgKiBOb21lIGRhIGNsYXNzZSBkbyBtb2R1bG9cbiAgICAgIEBleGVtcGxvIGNyZWF0ZS5wYWdlLnRzIGVtIC9wYWdlcy9hZG1pbi8gXG4gICAgICogQHBhcmFtIG1vZHVsZV9wYWdlIHN0cmluZ1xuICAgICAqL1xuICAgIGxldCBtb2R1bGVfcGFnZTpzdHJpbmcgID0gcm91dGVfY3VycmVudC5tYXRjaCgvW2EtekEtWl0rJC8pWzBdIHx8IG51bGw7XG5cbiAgICBpZihtb2R1bGVfcGFnZSkge1xuXG4gICAgICBsZXQgbW9kdWxlQ2xhc3NlTmFtZSA9IFV0aWxzU2VydmljZS5jYW1lbGl6ZShtb2R1bGVfcGFnZSkgKyAnUGFnZSc7XG5cbiAgICAgIG1vZHVsZV9wYWdlICs9ICcucGFnZSc7XG4gICAgICBtb2R1bGVfcGF0aCArPSBtb2R1bGVfcGFnZVxuXG4gICAgICBjb25zdCBwYWdlX2ltcG9ydCA9IGltcG9ydChgLi9wYWdlcyR7bW9kdWxlX3BhdGh9YCk7XG5cbiAgICAgIHJldHVybiBwYWdlX2ltcG9ydFxuICAgICAgICAudGhlbiggKG1vZHVsZSkgPT4ge1xuICAgICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBtb2R1bGVbbW9kdWxlQ2xhc3NlTmFtZV0odGhpcy5ldmVudE1hbmFnZXIpOyAvLyBuZXcgUmVnaXN0ZXJlZENvbnRyb2xsZXJzW2NvbnRyb2xsZXJdKCk7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goIChlKT0+eyByZXR1cm4gUHJvbWlzZS5yZWplY3QoIGBDcmllIHVtYSBjbGFzc2UgJHttb2R1bGVDbGFzc2VOYW1lfSBubyBjYW1pbmhvIGRlIHBhc3RhIC4vcGFnZXMke21vZHVsZV9wYXRofSBwYXJhIG1hbmlwdWxhciBlc3NhIHBhZ2luYSAuXFxuIDopIGAgKyBlKTsgfSk7XG4gICAgfVxuICBcbiAgfVxuIFxufVxuXG5uZXcgTWFpbiggbmV3IEV2ZW50TWFuYWdlcigpICk7Il0sInNvdXJjZVJvb3QiOiIifQ==
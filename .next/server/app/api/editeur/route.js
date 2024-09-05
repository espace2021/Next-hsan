"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/editeur/route";
exports.ids = ["app/api/editeur/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fediteur%2Froute&page=%2Fapi%2Fediteur%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fediteur%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fediteur%2Froute&page=%2Fapi%2Fediteur%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fediteur%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Nextjs2024_ecomlivres_src_app_api_editeur_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/editeur/route.js */ \"(rsc)/./src/app/api/editeur/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/editeur/route\",\n        pathname: \"/api/editeur\",\n        filename: \"route\",\n        bundlePath: \"app/api/editeur/route\"\n    },\n    resolvedPagePath: \"D:\\\\Nextjs2024\\\\ecomlivres\\\\src\\\\app\\\\api\\\\editeur\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Nextjs2024_ecomlivres_src_app_api_editeur_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/editeur/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZlZGl0ZXVyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZlZGl0ZXVyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZWRpdGV1ciUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDTmV4dGpzMjAyNCU1Q2Vjb21saXZyZXMlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNOZXh0anMyMDI0JTVDZWNvbWxpdnJlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDWTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21saXZyZXMvPzIwYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcTmV4dGpzMjAyNFxcXFxlY29tbGl2cmVzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGVkaXRldXJcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2VkaXRldXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9lZGl0ZXVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9lZGl0ZXVyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcTmV4dGpzMjAyNFxcXFxlY29tbGl2cmVzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGVkaXRldXJcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2VkaXRldXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fediteur%2Froute&page=%2Fapi%2Fediteur%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fediteur%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/editeur/route.js":
/*!**************************************!*\
  !*** ./src/app/api/editeur/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/index.js\");\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/connectDB */ \"(rsc)/./src/lib/connectDB.js\");\n/* harmony import */ var _models_Editeur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Editeur */ \"(rsc)/./src/models/Editeur.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await req.json();\n        const editeur = await _models_Editeur__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(body);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            editeur,\n            message: \"Your editor has been created\"\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.Created\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: error\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.BadRequest\n        });\n    }\n}\nasync function GET() {\n    try {\n        await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const editeur = await _models_Editeur__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            editeur\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9lZGl0ZXVyL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNDO0FBQ0Q7QUFDSTtBQUlwQyxlQUFlSSxLQUFLQyxHQUFHO0lBQzFCLElBQUk7UUFDQSxNQUFNSiwwREFBU0E7UUFDZixNQUFNSyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsTUFBTUMsVUFBVSxNQUFNTix1REFBT0EsQ0FBQ08sTUFBTSxDQUFDSDtRQUNyQyxPQUFPSCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUNwQjtZQUFFQztZQUFTRSxTQUFTO1FBQStCLEdBQ25EO1lBQUVDLFFBQVFYLGlEQUFjQSxDQUFDWSxPQUFPO1FBQUM7SUFFekMsRUFBRSxPQUFPQyxPQUFPO1FBQ1osT0FBT1YscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFRyxTQUFTRztRQUFNLEdBQUc7WUFDekNGLFFBQVFYLGlEQUFjQSxDQUFDYyxVQUFVO1FBQ3JDO0lBQ0o7QUFDSjtBQUNPLGVBQWVDO0lBRWxCLElBQUk7UUFDQSxNQUFNZCwwREFBU0E7UUFDZixNQUFNTyxVQUFVLE1BQU1OLHVEQUFPQSxDQUFDYyxJQUFJO1FBQ2xDLE9BQU9iLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUM7UUFBUTtJQUN2QyxFQUFFLE9BQU9LLE9BQU87UUFDWixPQUFPVixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVNO1FBQU07SUFDckM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21saXZyZXMvLi9zcmMvYXBwL2FwaS9lZGl0ZXVyL3JvdXRlLmpzP2JkZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGUgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnQC9saWIvY29ubmVjdERCJztcclxuaW1wb3J0IEVkaXRldXIgZnJvbSAnQC9tb2RlbHMvRWRpdGV1cic7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRldXIgPSBhd2FpdCBFZGl0ZXVyLmNyZWF0ZShib2R5KTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHsgZWRpdGV1ciwgbWVzc2FnZTogJ1lvdXIgZWRpdG9yIGhhcyBiZWVuIGNyZWF0ZWQnIH0sXHJcbiAgICAgICAgICAgIHsgc3RhdHVzOiBIdHRwU3RhdHVzQ29kZS5DcmVhdGVkIH0sXHJcbiAgICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogZXJyb3IgfSwge1xyXG4gICAgICAgICAgICBzdGF0dXM6IEh0dHBTdGF0dXNDb2RlLkJhZFJlcXVlc3RcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdERCKCk7XHJcbiAgICAgICAgY29uc3QgZWRpdGV1ciA9IGF3YWl0IEVkaXRldXIuZmluZCgpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVkaXRldXIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkh0dHBTdGF0dXNDb2RlIiwiY29ubmVjdERCIiwiRWRpdGV1ciIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsImVkaXRldXIiLCJjcmVhdGUiLCJtZXNzYWdlIiwic3RhdHVzIiwiQ3JlYXRlZCIsImVycm9yIiwiQmFkUmVxdWVzdCIsIkdFVCIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/editeur/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/connectDB.js":
/*!******************************!*\
  !*** ./src/lib/connectDB.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DATABASE_URL, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"connexion a la base de donn\\xe9e r\\xe9ussie\");\n    } catch (error) {\n        throw new Error(\"errur de connexion a la base de donn\\xe9es\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2Nvbm5lY3REQi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTUMsWUFBVTtJQUNoQixJQUFHO1FBQ0gsTUFBTUQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFDO1lBQ2hEQyxpQkFBZ0I7WUFDaEJDLG9CQUFtQjtRQUNuQjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDWixFQUFDLE9BQU1DLE9BQU07UUFDYixNQUFNLElBQUlDLE1BQU07SUFDaEI7QUFDQTtBQUNBLGlFQUFlVixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbWxpdnJlcy8uL3NyYy9saWIvY29ubmVjdERCLmpzPzVkMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBjb25uZWN0REI9YXN5bmMoKT0+IHtcclxudHJ5e1xyXG5hd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCx7XHJcbnVzZU5ld1VybFBhcnNlcjp0cnVlLFxyXG51c2VVbmlmaWVkVG9wb2xvZ3k6dHJ1ZVxyXG59KTtcclxuY29uc29sZS5sb2coXCJjb25uZXhpb24gYSBsYSBiYXNlIGRlIGRvbm7DqWUgcsOpdXNzaWVcIilcclxufWNhdGNoKGVycm9yKXtcclxudGhyb3cgbmV3IEVycm9yKFwiZXJydXIgZGUgY29ubmV4aW9uIGEgbGEgYmFzZSBkZSBkb25uw6llc1wiKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/connectDB.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Editeur.js":
/*!*******************************!*\
  !*** ./src/models/Editeur.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar editeurSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    nomediteur: String,\n    email: String,\n    numtel: String\n}, {\n    timestamps: true\n});\nconst Editeur = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Editeur || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Editeur\", editeurSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editeur);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0VkaXRldXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQy9CLElBQUlDLGdCQUFnQkQsc0RBQWUsQ0FBQztJQUNoQ0csWUFBWUM7SUFDWkMsT0FBT0Q7SUFDUEUsUUFBUUY7QUFDWixHQUNJO0lBQ0lHLFlBQVk7QUFDaEI7QUFFSixNQUFNQyxVQUFVUix3REFBZSxDQUFDUSxPQUFPLElBQUlSLHFEQUFjLENBQUMsV0FBV0M7QUFDckUsaUVBQWVPLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbGl2cmVzLy4vc3JjL21vZGVscy9FZGl0ZXVyLmpzPzYyMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXHJcbnZhciBlZGl0ZXVyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5vbWVkaXRldXI6IFN0cmluZyxcclxuICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICBudW10ZWw6IFN0cmluZ1xyXG59LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWVzdGFtcHM6IHRydWVcclxuICAgIH1cclxuKTtcclxuY29uc3QgRWRpdGV1ciA9IG1vbmdvb3NlLm1vZGVscy5FZGl0ZXVyIHx8IG1vbmdvb3NlLm1vZGVsKCdFZGl0ZXVyJywgZWRpdGV1clNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRldXIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJlZGl0ZXVyU2NoZW1hIiwiU2NoZW1hIiwibm9tZWRpdGV1ciIsIlN0cmluZyIsImVtYWlsIiwibnVtdGVsIiwidGltZXN0YW1wcyIsIkVkaXRldXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Editeur.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fediteur%2Froute&page=%2Fapi%2Fediteur%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fediteur%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
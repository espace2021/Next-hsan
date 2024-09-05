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
exports.id = "app/api/auteur/route";
exports.ids = ["app/api/auteur/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauteur%2Froute&page=%2Fapi%2Fauteur%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauteur%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauteur%2Froute&page=%2Fapi%2Fauteur%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauteur%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Nextjs2024_ecomlivres_src_app_api_auteur_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auteur/route.js */ \"(rsc)/./src/app/api/auteur/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auteur/route\",\n        pathname: \"/api/auteur\",\n        filename: \"route\",\n        bundlePath: \"app/api/auteur/route\"\n    },\n    resolvedPagePath: \"D:\\\\Nextjs2024\\\\ecomlivres\\\\src\\\\app\\\\api\\\\auteur\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Nextjs2024_ecomlivres_src_app_api_auteur_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auteur/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRldXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGV1ciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGV1ciUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDTmV4dGpzMjAyNCU1Q2Vjb21saXZyZXMlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNOZXh0anMyMDI0JTVDZWNvbWxpdnJlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDVztBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21saXZyZXMvP2Q1MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcTmV4dGpzMjAyNFxcXFxlY29tbGl2cmVzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGV1clxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0ZXVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0ZXVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRldXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxOZXh0anMyMDI0XFxcXGVjb21saXZyZXNcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0ZXVyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRldXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauteur%2Froute&page=%2Fapi%2Fauteur%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauteur%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auteur/route.js":
/*!*************************************!*\
  !*** ./src/app/api/auteur/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/index.js\");\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/connectDB */ \"(rsc)/./src/lib/connectDB.js\");\n/* harmony import */ var _models_Auteur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Auteur */ \"(rsc)/./src/models/Auteur.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await req.json();\n        const auteur = await _models_Auteur__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(body);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            auteur,\n            message: \"Your author has been created\"\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.Created\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: error\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.BadRequest\n        });\n    }\n}\nasync function GET() {\n    try {\n        await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const auteurs = await _models_Auteur__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            auteurs\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRldXIvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBQ0M7QUFDSDtBQUNNO0FBSXBDLGVBQWVJLEtBQUtDLEdBQUc7SUFDMUIsSUFBSTtRQUNBLE1BQU1KLDBEQUFTQTtRQUNmLE1BQU1LLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNQyxTQUFTLE1BQU1OLHNEQUFNQSxDQUFDTyxNQUFNLENBQUNIO1FBQ25DLE9BQU9ILHFEQUFZQSxDQUFDSSxJQUFJLENBQ3BCO1lBQUVDO1lBQVFFLFNBQVM7UUFBK0IsR0FDbEQ7WUFBRUMsUUFBUVgsaURBQWNBLENBQUNZLE9BQU87UUFBQztJQUV6QyxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFPVixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVHLFNBQVNHO1FBQU0sR0FBRztZQUN6Q0YsUUFBUVgsaURBQWNBLENBQUNjLFVBQVU7UUFDckM7SUFDSjtBQUNKO0FBQ08sZUFBZUM7SUFFbEIsSUFBSTtRQUNBLE1BQU1kLDBEQUFTQTtRQUNmLE1BQU1lLFVBQVUsTUFBTWQsc0RBQU1BLENBQUNlLElBQUk7UUFDakMsT0FBT2QscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFUztRQUFRO0lBQ3ZDLEVBQUUsT0FBT0gsT0FBTztRQUNaLE9BQU9WLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRU07UUFBTTtJQUNyQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbWxpdnJlcy8uL3NyYy9hcHAvYXBpL2F1dGV1ci9yb3V0ZS5qcz8wYjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTdGF0dXNDb2RlIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJ0AvbGliL2Nvbm5lY3REQic7XHJcbmltcG9ydCBBdXRldXIgZnJvbSAnQC9tb2RlbHMvQXV0ZXVyJztcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdERCKCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYXV0ZXVyID0gYXdhaXQgQXV0ZXVyLmNyZWF0ZShib2R5KTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHsgYXV0ZXVyLCBtZXNzYWdlOiAnWW91ciBhdXRob3IgaGFzIGJlZW4gY3JlYXRlZCcgfSxcclxuICAgICAgICAgICAgeyBzdGF0dXM6IEh0dHBTdGF0dXNDb2RlLkNyZWF0ZWQgfSxcclxuICAgICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBlcnJvciB9LCB7XHJcbiAgICAgICAgICAgIHN0YXR1czogSHR0cFN0YXR1c0NvZGUuQmFkUmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuICAgICAgICBjb25zdCBhdXRldXJzID0gYXdhaXQgQXV0ZXVyLmZpbmQoKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBhdXRldXJzIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvciB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJIdHRwU3RhdHVzQ29kZSIsImNvbm5lY3REQiIsIkF1dGV1ciIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsImF1dGV1ciIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJDcmVhdGVkIiwiZXJyb3IiLCJCYWRSZXF1ZXN0IiwiR0VUIiwiYXV0ZXVycyIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auteur/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/connectDB.js":
/*!******************************!*\
  !*** ./src/lib/connectDB.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DATABASE_URL, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"connexion a la base de donn\\xe9e r\\xe9ussie\");\n    } catch (error) {\n        throw new Error(\"errur de connexion a la base de donn\\xe9es\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2Nvbm5lY3REQi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTUMsWUFBVTtJQUNoQixJQUFHO1FBQ0gsTUFBTUQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFDO1lBQ2hEQyxpQkFBZ0I7WUFDaEJDLG9CQUFtQjtRQUNuQjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDWixFQUFDLE9BQU1DLE9BQU07UUFDYixNQUFNLElBQUlDLE1BQU07SUFDaEI7QUFDQTtBQUNBLGlFQUFlVixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbWxpdnJlcy8uL3NyYy9saWIvY29ubmVjdERCLmpzPzVkMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBjb25uZWN0REI9YXN5bmMoKT0+IHtcclxudHJ5e1xyXG5hd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCx7XHJcbnVzZU5ld1VybFBhcnNlcjp0cnVlLFxyXG51c2VVbmlmaWVkVG9wb2xvZ3k6dHJ1ZVxyXG59KTtcclxuY29uc29sZS5sb2coXCJjb25uZXhpb24gYSBsYSBiYXNlIGRlIGRvbm7DqWUgcsOpdXNzaWVcIilcclxufWNhdGNoKGVycm9yKXtcclxudGhyb3cgbmV3IEVycm9yKFwiZXJydXIgZGUgY29ubmV4aW9uIGEgbGEgYmFzZSBkZSBkb25uw6llc1wiKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/connectDB.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Auteur.js":
/*!******************************!*\
  !*** ./src/models/Auteur.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar auteurSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    nomauteur: String,\n    email: String,\n    numtel: String\n}, {\n    timestamps: true\n});\nconst Auteur = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Auteur || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Auteur\", auteurSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auteur);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0F1dGV1ci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDL0IsSUFBSUMsZUFBZUQsc0RBQWUsQ0FBQztJQUMvQkcsV0FBV0M7SUFDZkMsT0FBT0Q7SUFDUEUsUUFBUUY7QUFDUixHQUNBO0lBQ0FHLFlBQVk7QUFDWjtBQUVBLE1BQU1DLFNBQVNSLHdEQUFlLENBQUNRLE1BQU0sSUFBSVIscURBQWMsQ0FBQyxVQUFVQztBQUNsRSxpRUFBZU8sTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21saXZyZXMvLi9zcmMvbW9kZWxzL0F1dGV1ci5qcz9mNWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxyXG52YXIgYXV0ZXVyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5vbWF1dGV1cjogU3RyaW5nLFxyXG5lbWFpbDogU3RyaW5nLFxyXG5udW10ZWw6IFN0cmluZ1xyXG59LFxyXG57XHJcbnRpbWVzdGFtcHM6IHRydWVcclxufVxyXG4pO1xyXG5jb25zdCBBdXRldXIgPSBtb25nb29zZS5tb2RlbHMuQXV0ZXVyIHx8IG1vbmdvb3NlLm1vZGVsKCdBdXRldXInLCBhdXRldXJTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBBdXRldXIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJhdXRldXJTY2hlbWEiLCJTY2hlbWEiLCJub21hdXRldXIiLCJTdHJpbmciLCJlbWFpbCIsIm51bXRlbCIsInRpbWVzdGFtcHMiLCJBdXRldXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Auteur.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauteur%2Froute&page=%2Fapi%2Fauteur%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauteur%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
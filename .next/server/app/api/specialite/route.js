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
exports.id = "app/api/specialite/route";
exports.ids = ["app/api/specialite/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fspecialite%2Froute&page=%2Fapi%2Fspecialite%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fspecialite%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fspecialite%2Froute&page=%2Fapi%2Fspecialite%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fspecialite%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Nextjs2024_ecomlivres_src_app_api_specialite_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/specialite/route.js */ \"(rsc)/./src/app/api/specialite/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/specialite/route\",\n        pathname: \"/api/specialite\",\n        filename: \"route\",\n        bundlePath: \"app/api/specialite/route\"\n    },\n    resolvedPagePath: \"D:\\\\Nextjs2024\\\\ecomlivres\\\\src\\\\app\\\\api\\\\specialite\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Nextjs2024_ecomlivres_src_app_api_specialite_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/specialite/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzcGVjaWFsaXRlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzcGVjaWFsaXRlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3BlY2lhbGl0ZSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDTmV4dGpzMjAyNCU1Q2Vjb21saXZyZXMlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNOZXh0anMyMDI0JTVDZWNvbWxpdnJlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21saXZyZXMvPzc3NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcTmV4dGpzMjAyNFxcXFxlY29tbGl2cmVzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNwZWNpYWxpdGVcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NwZWNpYWxpdGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zcGVjaWFsaXRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zcGVjaWFsaXRlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcTmV4dGpzMjAyNFxcXFxlY29tbGl2cmVzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNwZWNpYWxpdGVcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NwZWNpYWxpdGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fspecialite%2Froute&page=%2Fapi%2Fspecialite%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fspecialite%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/specialite/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/specialite/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/index.js\");\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/connectDB */ \"(rsc)/./src/lib/connectDB.js\");\n/* harmony import */ var _models_Specialite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Specialite */ \"(rsc)/./src/models/Specialite.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await req.json();\n        const specialite = await _models_Specialite__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(body);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            specialite,\n            message: \"Your speciality has been created\"\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.Created\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: error\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.BadRequest\n        });\n    }\n}\nasync function GET() {\n    try {\n        await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const specialite = await _models_Specialite__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            specialite\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zcGVjaWFsaXRlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNDO0FBQ0s7QUFDRjtBQUlwQyxlQUFlSSxLQUFLQyxHQUFHO0lBQzFCLElBQUk7UUFDQSxNQUFNSiwwREFBU0E7UUFDZixNQUFNSyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsTUFBTUMsYUFBYSxNQUFNTiwwREFBVUEsQ0FBQ08sTUFBTSxDQUFDSDtRQUMzQyxPQUFPSCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUNwQjtZQUFFQztZQUFZRSxTQUFTO1FBQW1DLEdBQzFEO1lBQUVDLFFBQVFYLGlEQUFjQSxDQUFDWSxPQUFPO1FBQUM7SUFFekMsRUFBRSxPQUFPQyxPQUFPO1FBQ1osT0FBT1YscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFRyxTQUFTRztRQUFNLEdBQUc7WUFDekNGLFFBQVFYLGlEQUFjQSxDQUFDYyxVQUFVO1FBQ3JDO0lBQ0o7QUFDSjtBQUNPLGVBQWVDO0lBRWxCLElBQUk7UUFDQSxNQUFNZCwwREFBU0E7UUFDZixNQUFNTyxhQUFhLE1BQU1OLDBEQUFVQSxDQUFDYyxJQUFJO1FBQ3hDLE9BQU9iLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUM7UUFBVztJQUMxQyxFQUFFLE9BQU9LLE9BQU87UUFDWixPQUFPVixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVNO1FBQU07SUFDckM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21saXZyZXMvLi9zcmMvYXBwL2FwaS9zcGVjaWFsaXRlL3JvdXRlLmpzP2Y4OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGUgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnQC9saWIvY29ubmVjdERCJztcclxuaW1wb3J0IFNwZWNpYWxpdGUgZnJvbSAnQC9tb2RlbHMvU3BlY2lhbGl0ZSc7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHNwZWNpYWxpdGUgPSBhd2FpdCBTcGVjaWFsaXRlLmNyZWF0ZShib2R5KTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHsgc3BlY2lhbGl0ZSwgbWVzc2FnZTogJ1lvdXIgc3BlY2lhbGl0eSBoYXMgYmVlbiBjcmVhdGVkJyB9LFxyXG4gICAgICAgICAgICB7IHN0YXR1czogSHR0cFN0YXR1c0NvZGUuQ3JlYXRlZCB9LFxyXG4gICAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IGVycm9yIH0sIHtcclxuICAgICAgICAgICAgc3RhdHVzOiBIdHRwU3RhdHVzQ29kZS5CYWRSZXF1ZXN0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgICAgIGNvbnN0IHNwZWNpYWxpdGUgPSBhd2FpdCBTcGVjaWFsaXRlLmZpbmQoKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzcGVjaWFsaXRlIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvciB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJIdHRwU3RhdHVzQ29kZSIsImNvbm5lY3REQiIsIlNwZWNpYWxpdGUiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJzcGVjaWFsaXRlIiwiY3JlYXRlIiwibWVzc2FnZSIsInN0YXR1cyIsIkNyZWF0ZWQiLCJlcnJvciIsIkJhZFJlcXVlc3QiLCJHRVQiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/specialite/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/connectDB.js":
/*!******************************!*\
  !*** ./src/lib/connectDB.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DATABASE_URL, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"connexion a la base de donn\\xe9e r\\xe9ussie\");\n    } catch (error) {\n        throw new Error(\"errur de connexion a la base de donn\\xe9es\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2Nvbm5lY3REQi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTUMsWUFBVTtJQUNoQixJQUFHO1FBQ0gsTUFBTUQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFDO1lBQ2hEQyxpQkFBZ0I7WUFDaEJDLG9CQUFtQjtRQUNuQjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDWixFQUFDLE9BQU1DLE9BQU07UUFDYixNQUFNLElBQUlDLE1BQU07SUFDaEI7QUFDQTtBQUNBLGlFQUFlVixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbWxpdnJlcy8uL3NyYy9saWIvY29ubmVjdERCLmpzPzVkMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBjb25uZWN0REI9YXN5bmMoKT0+IHtcclxudHJ5e1xyXG5hd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCx7XHJcbnVzZU5ld1VybFBhcnNlcjp0cnVlLFxyXG51c2VVbmlmaWVkVG9wb2xvZ3k6dHJ1ZVxyXG59KTtcclxuY29uc29sZS5sb2coXCJjb25uZXhpb24gYSBsYSBiYXNlIGRlIGRvbm7DqWUgcsOpdXNzaWVcIilcclxufWNhdGNoKGVycm9yKXtcclxudGhyb3cgbmV3IEVycm9yKFwiZXJydXIgZGUgY29ubmV4aW9uIGEgbGEgYmFzZSBkZSBkb25uw6llc1wiKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/connectDB.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Specialite.js":
/*!**********************************!*\
  !*** ./src/models/Specialite.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar specialiteSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    nomspecialite: String\n}, {\n    timestamps: true\n});\nconst Specialite = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Specialite || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Specialite\", specialiteSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Specialite);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1NwZWNpYWxpdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQy9CLElBQUlDLG1CQUFtQkQsc0RBQWUsQ0FBQztJQUNuQ0csZUFBZUM7QUFFbkIsR0FDSTtJQUNJQyxZQUFZO0FBQ2hCO0FBRUosTUFBTUMsYUFBYU4sd0RBQWUsQ0FBQ00sVUFBVSxJQUFJTixxREFBYyxDQUFDLGNBQWNDO0FBQzlFLGlFQUFlSyxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbWxpdnJlcy8uL3NyYy9tb2RlbHMvU3BlY2lhbGl0ZS5qcz9hZGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxyXG52YXIgc3BlY2lhbGl0ZVNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBub21zcGVjaWFsaXRlOiBTdHJpbmdcclxuXHJcbn0sXHJcbiAgICB7XHJcbiAgICAgICAgdGltZXN0YW1wczogdHJ1ZVxyXG4gICAgfVxyXG4pO1xyXG5jb25zdCBTcGVjaWFsaXRlID0gbW9uZ29vc2UubW9kZWxzLlNwZWNpYWxpdGUgfHwgbW9uZ29vc2UubW9kZWwoJ1NwZWNpYWxpdGUnLCBzcGVjaWFsaXRlU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgU3BlY2lhbGl0ZSJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNwZWNpYWxpdGVTY2hlbWEiLCJTY2hlbWEiLCJub21zcGVjaWFsaXRlIiwiU3RyaW5nIiwidGltZXN0YW1wcyIsIlNwZWNpYWxpdGUiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Specialite.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fspecialite%2Froute&page=%2Fapi%2Fspecialite%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fspecialite%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
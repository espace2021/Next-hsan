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
exports.id = "app/api/livre/route";
exports.ids = ["app/api/livre/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flivre%2Froute&page=%2Fapi%2Flivre%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flivre%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flivre%2Froute&page=%2Fapi%2Flivre%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flivre%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Nextjs2024_ecomlivres_src_app_api_livre_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/livre/route.js */ \"(rsc)/./src/app/api/livre/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/livre/route\",\n        pathname: \"/api/livre\",\n        filename: \"route\",\n        bundlePath: \"app/api/livre/route\"\n    },\n    resolvedPagePath: \"D:\\\\Nextjs2024\\\\ecomlivres\\\\src\\\\app\\\\api\\\\livre\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Nextjs2024_ecomlivres_src_app_api_livre_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/livre/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXZyZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbGl2cmUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsaXZyZSUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDTmV4dGpzMjAyNCU1Q2Vjb21saXZyZXMlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNOZXh0anMyMDI0JTVDZWNvbWxpdnJlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDVTtBQUN2RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21saXZyZXMvP2YxMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcTmV4dGpzMjAyNFxcXFxlY29tbGl2cmVzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGxpdnJlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9saXZyZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xpdnJlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9saXZyZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXE5leHRqczIwMjRcXFxcZWNvbWxpdnJlc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsaXZyZVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbGl2cmUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flivre%2Froute&page=%2Fapi%2Flivre%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flivre%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/livre/route.js":
/*!************************************!*\
  !*** ./src/app/api/livre/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/index.js\");\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/connectDB */ \"(rsc)/./src/lib/connectDB.js\");\n/* harmony import */ var _models_Livres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Livres */ \"(rsc)/./src/models/Livres.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const body = await req.json();\n        if (body.titre) {\n            const livre = await _models_Livres__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(body);\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                livre,\n                message: \"Your book has been created\"\n            }, {\n                status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.Created\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Title is missing\"\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.BadRequest\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: error\n        }, {\n            status: axios__WEBPACK_IMPORTED_MODULE_3__.HttpStatusCode.BadRequest\n        });\n    }\n}\nasync function GET() {\n    try {\n        await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const livres = await _models_Livres__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({}, null, {\n            sort: {\n                \"_id\": -1\n            }\n        }).populate(\"auteurs\").populate(\"specialite\").populate(\"maised\");\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            livres\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saXZyZS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFDQztBQUNKO0FBQ087QUFFcEMsZUFBZUksS0FBS0MsR0FBRztJQUMxQixJQUFJO1FBQ0EsTUFBTUosMERBQVNBO1FBQ2YsTUFBTUssT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLElBQUlELEtBQUtFLEtBQUssRUFBRTtZQUNaLE1BQU1DLFFBQVEsTUFBTVAsc0RBQUtBLENBQUNRLE1BQU0sQ0FBQ0o7WUFDakMsT0FBT0gscURBQVlBLENBQUNJLElBQUksQ0FDcEI7Z0JBQUVFO2dCQUFPRSxTQUFTO1lBQTZCLEdBQy9DO2dCQUFFQyxRQUFRWixpREFBY0EsQ0FBQ2EsT0FBTztZQUFDO1FBRXpDO1FBQ0EsT0FBT1YscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFSSxTQUFTO1FBQW1CLEdBQUc7WUFDdERDLFFBQ0laLGlEQUFjQSxDQUFDYyxVQUFVO1FBQ2pDO0lBQ0osRUFBRSxPQUFPQyxPQUFPO1FBQ1osT0FBT1oscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFSSxTQUFTSTtRQUFNLEdBQUc7WUFDekNILFFBQ0laLGlEQUFjQSxDQUFDYyxVQUFVO1FBQ2pDO0lBQ0o7QUFDSjtBQUVPLGVBQWVFO0lBQ2xCLElBQUk7UUFDQSxNQUFNZiwwREFBU0E7UUFDZixNQUFNZ0IsU0FBUyxNQUFNZixzREFBS0EsQ0FBQ2dCLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTTtZQUN0Q0MsTUFBTTtnQkFDRixPQUFPLENBQ0g7WUFDUjtRQUNKLEdBQUdDLFFBQVEsQ0FBQyxXQUFXQSxRQUFRLENBQUMsY0FBY0EsUUFBUSxDQUFDO1FBQ3ZELE9BQU9qQixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVVO1FBQU87SUFDdEMsRUFBRSxPQUFPRixPQUFPO1FBQ1osT0FBT1oscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFUSxPQUFPQTtRQUFNO0lBQzVDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbGl2cmVzLy4vc3JjL2FwcC9hcGkvbGl2cmUvcm91dGUuanM/YzBjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU3RhdHVzQ29kZSB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICdAL2xpYi9jb25uZWN0REInO1xyXG5pbXBvcnQgTGl2cmUgZnJvbSAnQC9tb2RlbHMvTGl2cmVzJztcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgIGlmIChib2R5LnRpdHJlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpdnJlID0gYXdhaXQgTGl2cmUuY3JlYXRlKGJvZHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgICAgICB7IGxpdnJlLCBtZXNzYWdlOiAnWW91ciBib29rIGhhcyBiZWVuIGNyZWF0ZWQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogSHR0cFN0YXR1c0NvZGUuQ3JlYXRlZCB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnVGl0bGUgaXMgbWlzc2luZycgfSwge1xyXG4gICAgICAgICAgICBzdGF0dXM6XHJcbiAgICAgICAgICAgICAgICBIdHRwU3RhdHVzQ29kZS5CYWRSZXF1ZXN0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IGVycm9yIH0sIHtcclxuICAgICAgICAgICAgc3RhdHVzOlxyXG4gICAgICAgICAgICAgICAgSHR0cFN0YXR1c0NvZGUuQmFkUmVxdWVzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuICAgICAgICBjb25zdCBsaXZyZXMgPSBhd2FpdCBMaXZyZS5maW5kKHt9LCBudWxsLCB7XHJcbiAgICAgICAgICAgIHNvcnQ6IHtcclxuICAgICAgICAgICAgICAgICdfaWQnOiAtXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkucG9wdWxhdGUoJ2F1dGV1cnMnKS5wb3B1bGF0ZSgnc3BlY2lhbGl0ZScpLnBvcHVsYXRlKCdtYWlzZWQnKVxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGxpdnJlcyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIdHRwU3RhdHVzQ29kZSIsImNvbm5lY3REQiIsIkxpdnJlIiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwidGl0cmUiLCJsaXZyZSIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJDcmVhdGVkIiwiQmFkUmVxdWVzdCIsImVycm9yIiwiR0VUIiwibGl2cmVzIiwiZmluZCIsInNvcnQiLCJwb3B1bGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/livre/route.js\n");

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

/***/ }),

/***/ "(rsc)/./src/models/Editeur.js":
/*!*******************************!*\
  !*** ./src/models/Editeur.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar editeurSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    nomediteur: String,\n    email: String,\n    numtel: String\n}, {\n    timestamps: true\n});\nconst Editeur = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Editeur || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Editeur\", editeurSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editeur);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0VkaXRldXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQy9CLElBQUlDLGdCQUFnQkQsc0RBQWUsQ0FBQztJQUNoQ0csWUFBWUM7SUFDWkMsT0FBT0Q7SUFDUEUsUUFBUUY7QUFDWixHQUNJO0lBQ0lHLFlBQVk7QUFDaEI7QUFFSixNQUFNQyxVQUFVUix3REFBZSxDQUFDUSxPQUFPLElBQUlSLHFEQUFjLENBQUMsV0FBV0M7QUFDckUsaUVBQWVPLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbGl2cmVzLy4vc3JjL21vZGVscy9FZGl0ZXVyLmpzPzYyMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXHJcbnZhciBlZGl0ZXVyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5vbWVkaXRldXI6IFN0cmluZyxcclxuICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICBudW10ZWw6IFN0cmluZ1xyXG59LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWVzdGFtcHM6IHRydWVcclxuICAgIH1cclxuKTtcclxuY29uc3QgRWRpdGV1ciA9IG1vbmdvb3NlLm1vZGVscy5FZGl0ZXVyIHx8IG1vbmdvb3NlLm1vZGVsKCdFZGl0ZXVyJywgZWRpdGV1clNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRldXIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJlZGl0ZXVyU2NoZW1hIiwiU2NoZW1hIiwibm9tZWRpdGV1ciIsIlN0cmluZyIsImVtYWlsIiwibnVtdGVsIiwidGltZXN0YW1wcyIsIkVkaXRldXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Editeur.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Livres.js":
/*!******************************!*\
  !*** ./src/models/Livres.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Editeur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editeur */ \"(rsc)/./src/models/Editeur.js\");\n/* harmony import */ var _Specialite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Specialite */ \"(rsc)/./src/models/Specialite.js\");\n/* harmony import */ var _Auteur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auteur */ \"(rsc)/./src/models/Auteur.js\");\n\n\n\n\nvar livreSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    isbn: String,\n    titre: {\n        type: String,\n        required: true\n    },\n    annedition: Number,\n    prix: Number,\n    qtestock: Number,\n    couverture: String,\n    specialite: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: _Specialite__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    maised: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: _Editeur__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    auteurs: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n            ref: _Auteur__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        }\n    ]\n});\nconst Livre = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Livre || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Livre\", livreSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Livre);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0xpdnJlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFFQTtBQUNNO0FBQ1I7QUFDN0IsSUFBSUksY0FBY0osc0RBQWUsQ0FBQztJQUM5Qk0sTUFBTUM7SUFDTkMsT0FBTztRQUFFQyxNQUFNRjtRQUFRRyxVQUFVO0lBQUs7SUFDdENDLFlBQVlDO0lBQ1pDLE1BQU1EO0lBQ05FLFVBQVVGO0lBQ1ZHLFlBQVlSO0lBQ1pTLFlBQVk7UUFDUlAsTUFBTVQsd0RBQWUsQ0FBQ2lCLEtBQUssQ0FBQ0MsUUFBUTtRQUNwQ0MsS0FBS2pCLG1EQUFVQTtJQUNuQjtJQUNBa0IsUUFBUTtRQUNKWCxNQUFNVCx3REFBZSxDQUFDaUIsS0FBSyxDQUFDQyxRQUFRO1FBQ3BDQyxLQUFLbEIsZ0RBQU9BO0lBQ2hCO0lBQ0FvQixTQUFTO1FBQUM7WUFDTlosTUFBTVQsd0RBQWUsQ0FBQ2lCLEtBQUssQ0FBQ0MsUUFBUTtZQUNwQ0MsS0FBS2hCLCtDQUFNQTtRQUNmO0tBQUU7QUFDTjtBQUNBLE1BQU1tQixRQUFRdEIsd0RBQWUsQ0FBQ3NCLEtBQUssSUFBSXRCLHFEQUFjLENBQUMsU0FBU0k7QUFDL0QsaUVBQWVrQixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbWxpdnJlcy8uL3NyYy9tb2RlbHMvTGl2cmVzLmpzP2MyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXHJcblxyXG5pbXBvcnQgRWRpdGV1ciBmcm9tICcuL0VkaXRldXInXHJcbmltcG9ydCBTcGVjaWFsaXRlIGZyb20gJy4vU3BlY2lhbGl0ZSdcclxuaW1wb3J0IEF1dGV1ciBmcm9tICcuL0F1dGV1cidcclxudmFyIGxpdnJlU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIGlzYm46IFN0cmluZyxcclxuICAgIHRpdHJlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGFubmVkaXRpb246IE51bWJlcixcclxuICAgIHByaXg6IE51bWJlcixcclxuICAgIHF0ZXN0b2NrOiBOdW1iZXIsXHJcbiAgICBjb3V2ZXJ0dXJlOiBTdHJpbmcsXHJcbiAgICBzcGVjaWFsaXRlOiB7XHJcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogU3BlY2lhbGl0ZSxcclxuICAgIH0sXHJcbiAgICBtYWlzZWQ6IHtcclxuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgcmVmOiBFZGl0ZXVyXHJcbiAgICB9LFxyXG4gICAgYXV0ZXVyczogW3tcclxuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgcmVmOiBBdXRldXJcclxuICAgIH1dXHJcbn0pXHJcbmNvbnN0IExpdnJlID0gbW9uZ29vc2UubW9kZWxzLkxpdnJlIHx8IG1vbmdvb3NlLm1vZGVsKCdMaXZyZScsIGxpdnJlU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgTGl2cmUiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJFZGl0ZXVyIiwiU3BlY2lhbGl0ZSIsIkF1dGV1ciIsImxpdnJlU2NoZW1hIiwiU2NoZW1hIiwiaXNibiIsIlN0cmluZyIsInRpdHJlIiwidHlwZSIsInJlcXVpcmVkIiwiYW5uZWRpdGlvbiIsIk51bWJlciIsInByaXgiLCJxdGVzdG9jayIsImNvdXZlcnR1cmUiLCJzcGVjaWFsaXRlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIm1haXNlZCIsImF1dGV1cnMiLCJMaXZyZSIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Livres.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flivre%2Froute&page=%2Fapi%2Flivre%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flivre%2Froute.js&appDir=D%3A%5CNextjs2024%5Cecomlivres%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNextjs2024%5Cecomlivres&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
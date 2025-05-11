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
exports.id = "app/api/auth/me/route";
exports.ids = ["app/api/auth/me/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=C%3A%5CUsers%5Cmigue%5CDesktop%5Cejercicios-react%5Ctool-flow%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmigue%5CDesktop%5Cejercicios-react%5Ctool-flow&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=C%3A%5CUsers%5Cmigue%5CDesktop%5Cejercicios-react%5Ctool-flow%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmigue%5CDesktop%5Cejercicios-react%5Ctool-flow&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_migue_Desktop_ejercicios_react_tool_flow_src_app_api_auth_me_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/me/route.js */ \"(rsc)/./src/app/api/auth/me/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/me/route\",\n        pathname: \"/api/auth/me\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/me/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\migue\\\\Desktop\\\\ejercicios-react\\\\tool-flow\\\\src\\\\app\\\\api\\\\auth\\\\me\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_migue_Desktop_ejercicios_react_tool_flow_src_app_api_auth_me_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/me/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbWUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtaWd1ZSU1Q0Rlc2t0b3AlNUNlamVyY2ljaW9zLXJlYWN0JTVDdG9vbC1mbG93JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNtaWd1ZSU1Q0Rlc2t0b3AlNUNlamVyY2ljaW9zLXJlYWN0JTVDdG9vbC1mbG93JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwcC8/OTY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxtaWd1ZVxcXFxEZXNrdG9wXFxcXGVqZXJjaWNpb3MtcmVhY3RcXFxcdG9vbC1mbG93XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbWVcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL21lXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL21lL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbWlndWVcXFxcRGVza3RvcFxcXFxlamVyY2ljaW9zLXJlYWN0XFxcXHRvb2wtZmxvd1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXG1lXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvbWUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=C%3A%5CUsers%5Cmigue%5CDesktop%5Cejercicios-react%5Ctool-flow%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmigue%5CDesktop%5Cejercicios-react%5Ctool-flow&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/me/route.js":
/*!**************************************!*\
  !*** ./src/app/api/auth/me/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\nconst runtime = \"nodejs\";\n\n\n\n\nconst connectionString = process.env.DATABASE_URL;\nconst JWT_SECRET = process.env.JWT_SECRET;\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_2__.Pool({\n    connectionString\n});\nasync function GET() {\n    let client;\n    try {\n        // Obtener la cookie con el token\n        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_3__.cookies)();\n        const token = cookieStore.get(\"tf_token\")?.value;\n        if (!token) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"No autenticado\"\n            }, {\n                status: 401\n            });\n        }\n        // Verificar el token\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, JWT_SECRET);\n        const userId = decoded.sub;\n        // Obtener información del usuario\n        client = await pool.connect();\n        const { rows } = await client.query(`\r\n      SELECT \r\n        u.id, \r\n        u.username, \r\n        u.rol, \r\n        p.nombre, \r\n        p.apellido, \r\n        p.email\r\n      FROM usuarios u\r\n      JOIN personas p ON u.persona_id = p.id\r\n      WHERE u.id = $1\r\n    `, [\n            userId\n        ]);\n        if (!rows.length) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Usuario no encontrado\"\n            }, {\n                status: 404\n            });\n        }\n        // Devolver datos del usuario (sin información sensible)\n        const userData = rows[0];\n        delete userData.password_hash;\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(userData);\n    } catch (error) {\n        console.error(\"Error en /api/auth/me:\", error);\n        // Si el error es por token expirado o inválido\n        if (error.name === \"JsonWebTokenError\" || error.name === \"TokenExpiredError\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Sesi\\xf3n inv\\xe1lida\"\n            }, {\n                status: 401\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Error interno del servidor\"\n        }, {\n            status: 500\n        });\n    } finally{\n        if (client) client.release();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL21lL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsVUFBVSxTQUFTO0FBRVc7QUFDWjtBQUNMO0FBQ2E7QUFFdkMsTUFBTUssbUJBQW1CQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFDakQsTUFBTUMsYUFBYUgsUUFBUUMsR0FBRyxDQUFDRSxVQUFVO0FBRXpDLE1BQU1DLE9BQU8sSUFBSVAsb0NBQUlBLENBQUM7SUFBRUU7QUFBaUI7QUFFbEMsZUFBZU07SUFDcEIsSUFBSUM7SUFFSixJQUFJO1FBQ0YsaUNBQWlDO1FBQ2pDLE1BQU1DLGNBQWNULHFEQUFPQTtRQUMzQixNQUFNVSxRQUFRRCxZQUFZRSxHQUFHLENBQUMsYUFBYUM7UUFFM0MsSUFBSSxDQUFDRixPQUFPO1lBQ1YsT0FBT2Isa0ZBQVlBLENBQUNnQixJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWlCLEdBQzFCO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxxQkFBcUI7UUFDckIsTUFBTUMsVUFBVWxCLDBEQUFVLENBQUNZLE9BQU9MO1FBQ2xDLE1BQU1hLFNBQVNGLFFBQVFHLEdBQUc7UUFFMUIsa0NBQWtDO1FBQ2xDWCxTQUFTLE1BQU1GLEtBQUtjLE9BQU87UUFDM0IsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNYixPQUFPYyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFXckMsQ0FBQyxFQUFFO1lBQUNKO1NBQU87UUFFWCxJQUFJLENBQUNHLEtBQUtFLE1BQU0sRUFBRTtZQUNoQixPQUFPMUIsa0ZBQVlBLENBQUNnQixJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXdCLEdBQ2pDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSx3REFBd0Q7UUFDeEQsTUFBTVMsV0FBV0gsSUFBSSxDQUFDLEVBQUU7UUFDeEIsT0FBT0csU0FBU0MsYUFBYTtRQUU3QixPQUFPNUIsa0ZBQVlBLENBQUNnQixJQUFJLENBQUNXO0lBRTNCLEVBQUUsT0FBT1YsT0FBTztRQUNkWSxRQUFRWixLQUFLLENBQUMsMEJBQTBCQTtRQUV4QywrQ0FBK0M7UUFDL0MsSUFBSUEsTUFBTWEsSUFBSSxLQUFLLHVCQUF1QmIsTUFBTWEsSUFBSSxLQUFLLHFCQUFxQjtZQUM1RSxPQUFPOUIsa0ZBQVlBLENBQUNnQixJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWtCLEdBQzNCO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPbEIsa0ZBQVlBLENBQUNnQixJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBNkIsR0FDdEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCLFNBQVU7UUFDUixJQUFJUCxRQUFRQSxPQUFPb0IsT0FBTztJQUM1QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWFwcC8uL3NyYy9hcHAvYXBpL2F1dGgvbWUvcm91dGUuanM/ZjViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcnVudGltZSA9ICdub2RlanMnO1xyXG5cclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7IFBvb2wgfSBmcm9tICdwZyc7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvblN0cmluZyA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTDtcclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XHJcblxyXG5jb25zdCBwb29sID0gbmV3IFBvb2woeyBjb25uZWN0aW9uU3RyaW5nIH0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBsZXQgY2xpZW50O1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICAvLyBPYnRlbmVyIGxhIGNvb2tpZSBjb24gZWwgdG9rZW5cclxuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gY29va2llcygpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoJ3RmX3Rva2VuJyk/LnZhbHVlO1xyXG4gICAgXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnTm8gYXV0ZW50aWNhZG8nIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFZlcmlmaWNhciBlbCB0b2tlblxyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgY29uc3QgdXNlcklkID0gZGVjb2RlZC5zdWI7XHJcbiAgICBcclxuICAgIC8vIE9idGVuZXIgaW5mb3JtYWNpw7NuIGRlbCB1c3VhcmlvXHJcbiAgICBjbGllbnQgPSBhd2FpdCBwb29sLmNvbm5lY3QoKTtcclxuICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KGBcclxuICAgICAgU0VMRUNUIFxyXG4gICAgICAgIHUuaWQsIFxyXG4gICAgICAgIHUudXNlcm5hbWUsIFxyXG4gICAgICAgIHUucm9sLCBcclxuICAgICAgICBwLm5vbWJyZSwgXHJcbiAgICAgICAgcC5hcGVsbGlkbywgXHJcbiAgICAgICAgcC5lbWFpbFxyXG4gICAgICBGUk9NIHVzdWFyaW9zIHVcclxuICAgICAgSk9JTiBwZXJzb25hcyBwIE9OIHUucGVyc29uYV9pZCA9IHAuaWRcclxuICAgICAgV0hFUkUgdS5pZCA9ICQxXHJcbiAgICBgLCBbdXNlcklkXSk7XHJcbiAgICBcclxuICAgIGlmICghcm93cy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdVc3VhcmlvIG5vIGVuY29udHJhZG8nIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIERldm9sdmVyIGRhdG9zIGRlbCB1c3VhcmlvIChzaW4gaW5mb3JtYWNpw7NuIHNlbnNpYmxlKVxyXG4gICAgY29uc3QgdXNlckRhdGEgPSByb3dzWzBdO1xyXG4gICAgZGVsZXRlIHVzZXJEYXRhLnBhc3N3b3JkX2hhc2g7XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1c2VyRGF0YSk7XHJcbiAgICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZW4gL2FwaS9hdXRoL21lOicsIGVycm9yKTtcclxuICAgIFxyXG4gICAgLy8gU2kgZWwgZXJyb3IgZXMgcG9yIHRva2VuIGV4cGlyYWRvIG8gaW52w6FsaWRvXHJcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ0pzb25XZWJUb2tlbkVycm9yJyB8fCBlcnJvci5uYW1lID09PSAnVG9rZW5FeHBpcmVkRXJyb3InKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnU2VzacOzbiBpbnbDoWxpZGEnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogJ0Vycm9yIGludGVybm8gZGVsIHNlcnZpZG9yJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGlmIChjbGllbnQpIGNsaWVudC5yZWxlYXNlKCk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInJ1bnRpbWUiLCJOZXh0UmVzcG9uc2UiLCJqd3QiLCJQb29sIiwiY29va2llcyIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwiSldUX1NFQ1JFVCIsInBvb2wiLCJHRVQiLCJjbGllbnQiLCJjb29raWVTdG9yZSIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJkZWNvZGVkIiwidmVyaWZ5IiwidXNlcklkIiwic3ViIiwiY29ubmVjdCIsInJvd3MiLCJxdWVyeSIsImxlbmd0aCIsInVzZXJEYXRhIiwicGFzc3dvcmRfaGFzaCIsImNvbnNvbGUiLCJuYW1lIiwicmVsZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/me/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=C%3A%5CUsers%5Cmigue%5CDesktop%5Cejercicios-react%5Ctool-flow%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmigue%5CDesktop%5Cejercicios-react%5Ctool-flow&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
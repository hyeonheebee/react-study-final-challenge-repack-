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
exports.id = "pages/api/user/login";
exports.ids = ["pages/api/user/login"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/server/client.ts":
/*!******************************!*\
  !*** ./lib/server/client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsaUVBQWUsSUFBSUEsd0RBQVksRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9zZXJ2ZXIvY2xpZW50LnRzPzIxYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcmlzbWFDbGllbnQoKTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/client.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withHandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler(methods, handlerFn) {\n    return async function(req, res) {\n        if (!req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        try {\n            await handlerFn(req, res);\n        } catch (error) {\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNZSxTQUFTQSxXQUFXLENBQ2pDQyxPQUF5QyxFQUN6Q0MsU0FBOEQsRUFDOUQ7SUFDQSxPQUFPLGVBQ0xDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNOO1FBQ2QsSUFBSSxDQUFDRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDSixPQUFPLENBQUNLLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRSxNQUFNLENBQVEsRUFBRTtZQUN2RCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJO1lBQ0YsTUFBTU4sU0FBUyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCLENBQUMsT0FBT0ssS0FBSyxFQUFFO1lBQ2QsT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksQ0FBQztnQkFBRUQsS0FBSzthQUFFLENBQUMsQ0FBQztTQUN4QztLQUNGLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzP2FlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VUeXBlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhhbmRsZXIoXG4gIG1ldGhvZHM6IEFycmF5PFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiREVMRVRFXCI+LFxuICBoYW5kbGVyRm46IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZFxuKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICghcmVxLm1ldGhvZCAmJiAhbWV0aG9kcy5pbmNsdWRlcyhyZXEubWV0aG9kIGFzIGFueSkpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBoYW5kbGVyRm4ocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJtZXRob2RzIiwiaGFuZGxlckZuIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJlbmQiLCJlcnJvciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/user/login.ts":
/*!*********************************!*\
  !*** ./pages/api/user/login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    const { phone , email  } = req.body;\n    const authMethod = email ? {\n        email\n    } : phone ? {\n        phone: +phone\n    } : null;\n    if (!authMethod) return res.status(400).json({\n        success: false\n    });\n    const user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            ...authMethod\n        }\n    });\n    let tokenObj;\n    if (user) {\n        tokenObj = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].token.findUnique({\n            where: {\n                userId: user.id\n            }\n        });\n    }\n    return res.json({\n        success: true,\n        user,\n        token: tokenObj?.token\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n    \"POST\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFZ0Q7QUFDNEI7QUFFNUUsZUFBZUUsT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLEtBQUssR0FBRSxHQUFHSCxHQUFHLENBQUNJLElBQUk7SUFDakMsTUFBTUMsVUFBVSxHQUFHRixLQUFLLEdBQUc7UUFBRUEsS0FBSztLQUFFLEdBQUdELEtBQUssR0FBRztRQUFFQSxLQUFLLEVBQUUsQ0FBQ0EsS0FBSztLQUFFLEdBQUcsSUFBSTtJQUN2RSxJQUFJLENBQUNHLFVBQVUsRUFBRSxPQUFPSixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO0tBQUUsQ0FBQyxDQUFDO0lBQ2pFLE1BQU1DLElBQUksR0FBRyxNQUFNWiwwRUFBc0IsQ0FBQztRQUN4Q2MsS0FBSyxFQUFFO1lBQ0wsR0FBR04sVUFBVTtTQUNkO0tBQ0YsQ0FBQztJQUNGLElBQUlPLFFBQVE7SUFDWixJQUFJSCxJQUFJLEVBQUU7UUFDUkcsUUFBUSxHQUFHLE1BQU1mLDJFQUF1QixDQUFDO1lBQ3ZDYyxLQUFLLEVBQUU7Z0JBQUVHLE1BQU0sRUFBRUwsSUFBSSxDQUFDTSxFQUFFO2FBQUU7U0FDM0IsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPZCxHQUFHLENBQUNNLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUUsSUFBSTtRQUFFQyxJQUFJO1FBQUVJLEtBQUssRUFBRUQsUUFBUSxFQUFFQyxLQUFLO0tBQUUsQ0FBQyxDQUFDO0NBQ2xFO0FBQ0QsaUVBQWVmLG1FQUFXLENBQUM7SUFBQyxNQUFNO0NBQUMsRUFBRUMsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXIvbG9naW4udHM/ZDg4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vbGliL3NlcnZlci9jbGllbnRcIjtcbmltcG9ydCB3aXRoSGFuZGxlciwgeyBSZXNwb25zZVR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3NlcnZlci93aXRoSGFuZGxlclwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XG4pIHtcbiAgY29uc3QgeyBwaG9uZSwgZW1haWwgfSA9IHJlcS5ib2R5O1xuICBjb25zdCBhdXRoTWV0aG9kID0gZW1haWwgPyB7IGVtYWlsIH0gOiBwaG9uZSA/IHsgcGhvbmU6ICtwaG9uZSB9IDogbnVsbDtcbiAgaWYgKCFhdXRoTWV0aG9kKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGNsaWVudC51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICAuLi5hdXRoTWV0aG9kLFxuICAgIH0sXG4gIH0pO1xuICBsZXQgdG9rZW5PYmo7XG4gIGlmICh1c2VyKSB7XG4gICAgdG9rZW5PYmogPSBhd2FpdCBjbGllbnQudG9rZW4uZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHVzZXIsIHRva2VuOiB0b2tlbk9iaj8udG9rZW4gfSk7XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoSGFuZGxlcihbXCJQT1NUXCJdLCBoYW5kbGVyKTtcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJ3aXRoSGFuZGxlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwaG9uZSIsImVtYWlsIiwiYm9keSIsImF1dGhNZXRob2QiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ0b2tlbk9iaiIsInRva2VuIiwidXNlcklkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/login.ts"));
module.exports = __webpack_exports__;

})();
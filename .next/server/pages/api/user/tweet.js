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
exports.id = "pages/api/user/tweet";
exports.ids = ["pages/api/user/tweet"];
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

/***/ "(api)/./pages/api/user/tweet/index.ts":
/*!***************************************!*\
  !*** ./pages/api/user/tweet/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/server/client */ \"(api)/./lib/server/client.ts\");\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const tweets = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tweet.findMany({});\n        return res.json({\n            success: true,\n            tweets\n        });\n    }\n    if (req.method === \"POST\") {\n        const { data: { text  } , user: { id  } ,  } = req.body;\n        let userTweet;\n        if (!id || !text) return res.status(400).json({\n            success: false\n        });\n        const user = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                id\n            }\n        });\n        userTweet = await _lib_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tweet.create({\n            data: {\n                tweet: text,\n                user: {\n                    connect: {\n                        id: user?.id\n                    }\n                }\n            }\n        });\n        return res.json({\n            success: true,\n            userTweet\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n    \"GET\",\n    \"POST\"\n], handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci90d2VldC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFbUQ7QUFDNEI7QUFFL0UsZUFBZUUsT0FBTyxDQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWtDLEVBQ2xDO0lBQ0EsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE1BQU1DLE1BQU0sR0FBRyxNQUFNTix5RUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDOUMsT0FBT0ksR0FBRyxDQUFDSyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLElBQUk7WUFBRUosTUFBTTtTQUFFLENBQUMsQ0FBQztLQUM1QztJQUNELElBQUlILEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNLEVBQ0pNLElBQUksRUFBRSxFQUFFQyxJQUFJLEdBQUUsR0FDZEMsSUFBSSxFQUFFLEVBQUVDLEVBQUUsR0FBRSxLQUNiLEdBQUdYLEdBQUcsQ0FBQ1ksSUFBSTtRQUVaLElBQUlDLFNBQVM7UUFDYixJQUFJLENBQUNGLEVBQUUsSUFBSSxDQUFDRixJQUFJLEVBQUUsT0FBT1IsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNSLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsS0FBSztTQUFFLENBQUMsQ0FBQztRQUNsRSxNQUFNRyxJQUFJLEdBQUcsTUFBTWIsMEVBQXNCLENBQUM7WUFDeENtQixLQUFLLEVBQUU7Z0JBQ0xMLEVBQUU7YUFDSDtTQUNGLENBQUM7UUFDRkUsU0FBUyxHQUFHLE1BQU1oQix1RUFBbUIsQ0FBQztZQUNwQ1csSUFBSSxFQUFFO2dCQUNKSixLQUFLLEVBQUVLLElBQUk7Z0JBQ1hDLElBQUksRUFBRTtvQkFDSlEsT0FBTyxFQUFFO3dCQUNQUCxFQUFFLEVBQUVELElBQUksRUFBRUMsRUFBRTtxQkFDYjtpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsT0FBT1YsR0FBRyxDQUFDSyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLElBQUk7WUFBRU0sU0FBUztTQUFFLENBQUMsQ0FBQztLQUMvQztDQUNGO0FBRUQsaUVBQWVmLG1FQUFXLENBQUM7SUFBQyxLQUFLO0lBQUUsTUFBTTtDQUFDLEVBQUVDLE9BQU8sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS91c2VyL3R3ZWV0L2luZGV4LnRzP2MwNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9zZXJ2ZXIvY2xpZW50XCI7XG5pbXBvcnQgd2l0aEhhbmRsZXIsIHsgUmVzcG9uc2VUeXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlPlxuKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgdHdlZXRzID0gYXdhaXQgY2xpZW50LnR3ZWV0LmZpbmRNYW55KHt9KTtcbiAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB0d2VldHMgfSk7XG4gIH1cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YTogeyB0ZXh0IH0sXG4gICAgICB1c2VyOiB7IGlkIH0sXG4gICAgfSA9IHJlcS5ib2R5O1xuXG4gICAgbGV0IHVzZXJUd2VldDtcbiAgICBpZiAoIWlkIHx8ICF0ZXh0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdXNlclR3ZWV0ID0gYXdhaXQgY2xpZW50LnR3ZWV0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR3ZWV0OiB0ZXh0LFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgY29ubmVjdDoge1xuICAgICAgICAgICAgaWQ6IHVzZXI/LmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdXNlclR3ZWV0IH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhIYW5kbGVyKFtcIkdFVFwiLCBcIlBPU1RcIl0sIGhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbImNsaWVudCIsIndpdGhIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInR3ZWV0cyIsInR3ZWV0IiwiZmluZE1hbnkiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJ0ZXh0IiwidXNlciIsImlkIiwiYm9keSIsInVzZXJUd2VldCIsInN0YXR1cyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/tweet/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/tweet/index.ts"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books",{

/***/ "./src/Component/Books.jsx":
/*!*********************************!*\
  !*** ./src/Component/Books.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Books; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Books() {\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All Books\");\n    const booksData = [\n        {\n            id: 1,\n            title: \"Book 1\",\n            type: \"Type 1\",\n            downloadLink: \"/downloads/book1.pdf\"\n        },\n        {\n            id: 2,\n            title: \"Book 2\",\n            type: \"Type 2\",\n            downloadLink: \"/downloads/book2.pdf\"\n        },\n        {\n            id: 3,\n            title: \"Book 3\",\n            type: \"Type 3\",\n            downloadLink: \"/downloads/book3.pdf\"\n        },\n        {\n            id: 4,\n            title: \"Book 4\",\n            type: \"Type 1\",\n            downloadLink: \"/downloads/book4.pdf\"\n        },\n        {\n            id: 5,\n            title: \"Book 5\",\n            type: \"Type 2\",\n            downloadLink: \"/downloads/book5.pdf\"\n        }\n    ];\n    const tabs = [\n        \"All Books\",\n        \"Type 1\",\n        \"Type 2\",\n        \"Type 3\"\n    ];\n    const filteredBooks = activeTab === \"All Books\" ? booksData : booksData.filter((book)=>book.type === activeTab);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tabs\",\n                children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setActiveTab(tab),\n                        className: \"tabButton \".concat(activeTab === tab ? \"active\" : \"\"),\n                        children: tab\n                    }, tab, false, {\n                        fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"booksContainer\",\n                children: filteredBooks.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bookCard\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: book.title\n                            }, void 0, false, {\n                                fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Read\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: book.downloadLink,\n                                download: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"downloadButton\",\n                                    children: \"Download\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, book.id, true, {\n                        fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"readMoreButton\",\n                children: \"Read More\"\n            }, void 0, false, {\n                fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rohan/Desktop/Ashram_Project/Ashram_Project/src/Component/Books.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Books, \"btRt6u49JUMsK6IT3DN8x9cw/ic=\");\n_c = Books;\nvar _c;\n$RefreshReg$(_c, \"Books\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50L0Jvb2tzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNSSxZQUFZO1FBQ2hCO1lBQ0VDLElBQUk7WUFDSkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLGNBQWM7UUFDaEI7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxjQUFjO1FBQ2hCO1FBQ0E7WUFDRUgsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsY0FBYztRQUNoQjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLGNBQWM7UUFDaEI7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxjQUFjO1FBQ2hCO0tBQ0Q7SUFFRCxNQUFNQyxPQUFPO1FBQUM7UUFBYTtRQUFVO1FBQVU7S0FBUztJQUV4RCxNQUFNQyxnQkFDSlIsY0FBYyxjQUNWRSxZQUNBQSxVQUFVTyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0wsSUFBSSxLQUFLTDtJQUUvQyxxQkFDRSw4REFBQ1c7OzBCQUVDLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDWkwsS0FBS00sR0FBRyxDQUFDLENBQUNDLG9CQUNULDhEQUFDQzt3QkFFQ0MsU0FBUyxJQUFNZixhQUFhYTt3QkFDNUJGLFdBQVcsYUFBK0MsT0FBbENaLGNBQWNjLE1BQU0sV0FBVztrQ0FFdERBO3VCQUpJQTs7Ozs7Ozs7OzswQkFVWCw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ1pKLGNBQWNLLEdBQUcsQ0FBQyxDQUFDSCxxQkFDbEIsOERBQUNDO3dCQUFrQkMsV0FBVTs7MENBQzNCLDhEQUFDSzswQ0FBSVAsS0FBS04sS0FBSzs7Ozs7OzBDQUNmLDhEQUFDVzswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDRztnQ0FBRUMsTUFBTVQsS0FBS0osWUFBWTtnQ0FBRWMsUUFBUTswQ0FDbEMsNEVBQUNMO29DQUFPSCxXQUFVOzhDQUFpQjs7Ozs7Ozs7Ozs7O3VCQUo3QkYsS0FBS1AsRUFBRTs7Ozs7Ozs7OzswQkFXckIsOERBQUNZO2dCQUFPSCxXQUFVOzBCQUFpQjs7Ozs7Ozs7Ozs7O0FBR3pDO0dBM0V3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudC9Cb29rcy5qc3g/NzY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rcygpIHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKFwiQWxsIEJvb2tzXCIpO1xuXG4gIGNvbnN0IGJvb2tzRGF0YSA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcIkJvb2sgMVwiLFxuICAgICAgdHlwZTogXCJUeXBlIDFcIixcbiAgICAgIGRvd25sb2FkTGluazogXCIvZG93bmxvYWRzL2Jvb2sxLnBkZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXRsZTogXCJCb29rIDJcIixcbiAgICAgIHR5cGU6IFwiVHlwZSAyXCIsXG4gICAgICBkb3dubG9hZExpbms6IFwiL2Rvd25sb2Fkcy9ib29rMi5wZGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdGl0bGU6IFwiQm9vayAzXCIsXG4gICAgICB0eXBlOiBcIlR5cGUgM1wiLFxuICAgICAgZG93bmxvYWRMaW5rOiBcIi9kb3dubG9hZHMvYm9vazMucGRmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHRpdGxlOiBcIkJvb2sgNFwiLFxuICAgICAgdHlwZTogXCJUeXBlIDFcIixcbiAgICAgIGRvd25sb2FkTGluazogXCIvZG93bmxvYWRzL2Jvb2s0LnBkZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICB0aXRsZTogXCJCb29rIDVcIixcbiAgICAgIHR5cGU6IFwiVHlwZSAyXCIsXG4gICAgICBkb3dubG9hZExpbms6IFwiL2Rvd25sb2Fkcy9ib29rNS5wZGZcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHRhYnMgPSBbXCJBbGwgQm9va3NcIiwgXCJUeXBlIDFcIiwgXCJUeXBlIDJcIiwgXCJUeXBlIDNcIl07XG5cbiAgY29uc3QgZmlsdGVyZWRCb29rcyA9XG4gICAgYWN0aXZlVGFiID09PSBcIkFsbCBCb29rc1wiXG4gICAgICA/IGJvb2tzRGF0YVxuICAgICAgOiBib29rc0RhdGEuZmlsdGVyKChib29rKSA9PiBib29rLnR5cGUgPT09IGFjdGl2ZVRhYik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIFRhYnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cbiAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0YWIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGFiQnV0dG9uICR7YWN0aXZlVGFiID09PSB0YWIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0YWJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBCb29rcyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va3NDb250YWluZXJcIj5cbiAgICAgICAge2ZpbHRlcmVkQm9va3MubWFwKChib29rKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2Jvb2suaWR9IGNsYXNzTmFtZT1cImJvb2tDYXJkXCI+XG4gICAgICAgICAgICA8aDM+e2Jvb2sudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxidXR0b24+UmVhZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGEgaHJlZj17Ym9vay5kb3dubG9hZExpbmt9IGRvd25sb2FkPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRvd25sb2FkQnV0dG9uXCI+RG93bmxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFJlYWQgTW9yZSBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWRNb3JlQnV0dG9uXCI+UmVhZCBNb3JlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb29rcyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImJvb2tzRGF0YSIsImlkIiwidGl0bGUiLCJ0eXBlIiwiZG93bmxvYWRMaW5rIiwidGFicyIsImZpbHRlcmVkQm9va3MiLCJmaWx0ZXIiLCJib29rIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidGFiIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwiYSIsImhyZWYiLCJkb3dubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Component/Books.jsx\n"));

/***/ })

});
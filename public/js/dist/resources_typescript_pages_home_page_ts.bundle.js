(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages_home_page_ts"],{

/***/ "./resources/typescript/models/controller-page.ts":
/*!********************************************************!*\
  !*** ./resources/typescript/models/controller-page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControllerPage": () => (/* binding */ ControllerPage)
/* harmony export */ });
var ControllerPage = /** @class */ (function () {
    function ControllerPage() {
        // console.log(`ControllerPage constructor ${this.constructor.name}`);
        this.init();
    }
    ControllerPage.prototype.hello = function () {
        console.info(this.constructor.name + ' Loaded');
    };
    return ControllerPage;
}());



/***/ }),

/***/ "./resources/typescript/pages/home.page.ts":
/*!*************************************************!*\
  !*** ./resources/typescript/pages/home.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _models_controller_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/controller-page */ "./resources/typescript/models/controller-page.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super.call(this) || this;
    }
    HomePage.prototype.init = function () {
        console.log(this);
    };
    return HomePage;
}(_models_controller_page__WEBPACK_IMPORTED_MODULE_0__.ControllerPage));



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9tb2RlbHMvY29udHJvbGxlci1wYWdlLnRzIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy8uL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL2hvbWUucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7SUFFRTtRQUNFLHNFQUFzRTtRQUN0RSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBSU0sOEJBQUssR0FBWjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUUsU0FBUyxDQUFDLENBQUU7SUFDbEQsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDBEO0FBRTNEO0lBQThCLDRCQUFjO0lBQzFDO2VBQ0csaUJBQU87SUFDVixDQUFDO0lBRVMsdUJBQUksR0FBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVILGVBQUM7QUFBRCxDQUFDLENBVDZCLG1FQUFjLEdBUzNDIiwiZmlsZSI6InJlc291cmNlc190eXBlc2NyaXB0X3BhZ2VzX2hvbWVfcGFnZV90cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRyb2xsZXJQYWdlXG57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy8gY29uc29sZS5sb2coYENvbnRyb2xsZXJQYWdlIGNvbnN0cnVjdG9yICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQocGFyYW0/OiBvYmplY3QpIDogdm9pZDtcbiAgXG4gIHB1YmxpYyBoZWxsbygpe1xuICAgIGNvbnNvbGUuaW5mbyh0aGlzLmNvbnN0cnVjdG9yLm5hbWUrICcgTG9hZGVkJykgO1xuICB9XG59IiwiaW1wb3J0IHsgQ29udHJvbGxlclBhZ2UgfSBmcm9tICcuLi9tb2RlbHMvY29udHJvbGxlci1wYWdlJztcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQ29udHJvbGxlclBhZ2Uge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gIH1cbiAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
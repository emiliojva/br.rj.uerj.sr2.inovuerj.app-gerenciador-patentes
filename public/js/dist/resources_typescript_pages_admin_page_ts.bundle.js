(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages_admin_page_ts"],{

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

/***/ "./resources/typescript/pages/admin.page.ts":
/*!**************************************************!*\
  !*** ./resources/typescript/pages/admin.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
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

var AdminPage = /** @class */ (function (_super) {
    __extends(AdminPage, _super);
    function AdminPage() {
        return _super.call(this) || this;
    }
    AdminPage.prototype.init = function () {
        console.log(this);
    };
    return AdminPage;
}(_models_controller_page__WEBPACK_IMPORTED_MODULE_0__.ControllerPage));



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9tb2RlbHMvY29udHJvbGxlci1wYWdlLnRzIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy8uL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL2FkbWluLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0lBRUU7UUFDRSxzRUFBc0U7UUFDdEUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUlNLDhCQUFLLEdBQVo7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFFLFNBQVMsQ0FBQyxDQUFFO0lBQ2xELENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QwRDtBQUUzRDtJQUErQiw2QkFBYztJQUMzQztlQUNHLGlCQUFPO0lBQ1YsQ0FBQztJQUVTLHdCQUFJLEdBQWQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFSCxnQkFBQztBQUFELENBQUMsQ0FUOEIsbUVBQWMsR0FTNUMiLCJmaWxlIjoicmVzb3VyY2VzX3R5cGVzY3JpcHRfcGFnZXNfYWRtaW5fcGFnZV90cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRyb2xsZXJQYWdlXG57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy8gY29uc29sZS5sb2coYENvbnRyb2xsZXJQYWdlIGNvbnN0cnVjdG9yICR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQocGFyYW0/OiBvYmplY3QpIDogdm9pZDtcbiAgXG4gIHB1YmxpYyBoZWxsbygpe1xuICAgIGNvbnNvbGUuaW5mbyh0aGlzLmNvbnN0cnVjdG9yLm5hbWUrICcgTG9hZGVkJykgO1xuICB9XG59IiwiaW1wb3J0IHsgQ29udHJvbGxlclBhZ2UgfSBmcm9tICcuLi9tb2RlbHMvY29udHJvbGxlci1wYWdlJztcblxuZXhwb3J0IGNsYXNzIEFkbWluUGFnZSBleHRlbmRzIENvbnRyb2xsZXJQYWdlIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICB9XG4gIFxufSJdLCJzb3VyY2VSb290IjoiIn0=
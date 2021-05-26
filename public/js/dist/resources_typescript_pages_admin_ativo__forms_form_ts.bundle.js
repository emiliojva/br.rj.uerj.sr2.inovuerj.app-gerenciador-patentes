(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages_admin_ativo__forms_form_ts"],{

/***/ "./resources/typescript/pages/admin/ativo/_forms/form.ts":
/*!***************************************************************!*\
  !*** ./resources/typescript/pages/admin/ativo/_forms/form.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0__);

var Form = /** @class */ (function () {
    function Form(boxFormTokenId) {
        this.boxFormTokenId = boxFormTokenId;
        this.init();
    }
    Form.prototype.init = function () {
        this.htmlFormElement = (document.querySelector("#" + this.boxFormTokenId + " form") || document.getElementById(this.boxFormTokenId));
        ;
    };
    Form.prototype.onSubmit = function (callback) {
        this.htmlFormElement.onsubmit = function (e) {
            e.preventDefault();
            callback(e.currentTarget);
        };
    };
    return Form;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9hZG1pbi9hdGl2by9fZm9ybXMvZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJNEI7QUFFNUI7SUFLRSxjQUFZLGNBQXFCO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFUyxtQkFBSSxHQUFkO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsY0FBYyxVQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBcUIsQ0FBQztRQUFDLENBQUM7SUFDeEosQ0FBQztJQUVELHVCQUFRLEdBQVIsVUFBVSxRQUF5QztRQUVqRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxVQUFTLENBQUM7WUFDeEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBZ0MsQ0FBQztRQUM5QyxDQUFDO0lBRUgsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDIiwiZmlsZSI6InJlc291cmNlc190eXBlc2NyaXB0X3BhZ2VzX2FkbWluX2F0aXZvX19mb3Jtc19mb3JtX3RzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBcImpxdWVyeS1tYXNrLXBsdWdpblwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybSAge1xuXG4gIHByaXZhdGUgYm94Rm9ybVRva2VuSWQ6c3RyaW5nO1xuICBwcml2YXRlIGh0bWxGb3JtRWxlbWVudDogSFRNTEZvcm1FbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGJveEZvcm1Ub2tlbklkOnN0cmluZyl7XG4gICAgdGhpcy5ib3hGb3JtVG9rZW5JZCA9IGJveEZvcm1Ub2tlbklkO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIFxuICBwcm90ZWN0ZWQgaW5pdCgpIHtcbiAgICB0aGlzLmh0bWxGb3JtRWxlbWVudCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmJveEZvcm1Ub2tlbklkfSBmb3JtYCkgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3hGb3JtVG9rZW5JZCkgKSBhcyBIVE1MRm9ybUVsZW1lbnQ7IDtcbiAgfVxuXG4gIG9uU3VibWl0KCBjYWxsYmFjazogKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4gdm9pZCApe1xuXG4gICAgdGhpcy5odG1sRm9ybUVsZW1lbnQub25zdWJtaXQgPSBmdW5jdGlvbihlKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNhbGxiYWNrKGUuY3VycmVudFRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpXG4gICAgfVxuXG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=
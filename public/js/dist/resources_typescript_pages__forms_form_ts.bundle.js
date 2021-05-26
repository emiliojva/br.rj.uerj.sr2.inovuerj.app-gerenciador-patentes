(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages__forms_form_ts"],{

/***/ "./resources/typescript/pages/_forms/form.ts":
/*!***************************************************!*\
  !*** ./resources/typescript/pages/_forms/form.ts ***!
  \***************************************************/
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
    Form.prototype.setMethod = function (method) {
        this.method = method;
        this.htmlFormElement.setAttribute('method', method);
        return this;
    };
    Form.prototype.setAction = function (action) {
        this.action = action;
        this.htmlFormElement.setAttribute('action', action);
        return this;
    };
    Form.prototype.setFormData = function (form_data) {
        this.form_data = form_data;
        return this;
    };
    Form.prototype.getInputHiddenId = function () {
        return this.input_hidden_id;
    };
    Form.prototype.getMethod = function () {
        return this.method;
    };
    Form.prototype.getAction = function () {
        return this.action;
    };
    Form.prototype.getFormData = function () {
        return this.form_data;
    };
    Form.prototype.setInputHiddenId = function (input_hidden_id) {
        this.input_hidden_id = input_hidden_id;
        return this;
    };
    Form.prototype.onSubmit = function (callback) {
        var $contextForm = this;
        this.htmlFormElement.onsubmit = function (e) {
            e.preventDefault();
            var formTarget = e.currentTarget;
            var form_data = new FormData(formTarget);
            $contextForm.setFormData(form_data);
            callback(form_data, formTarget);
        };
        return this;
    };
    return Form;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9fZm9ybXMvZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFNEI7QUFFNUI7SUFlRSxjQUFZLGNBQXFCO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFUyxtQkFBSSxHQUFkO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsY0FBYyxVQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBcUIsQ0FBQztRQUFDLENBQUM7SUFDeEosQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLE1BQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLE1BQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDBCQUFXLEdBQWxCLFVBQW1CLFNBQW1CO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLCtCQUFnQixHQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBSVEsd0JBQVMsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwwQkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0sK0JBQWdCLEdBQXZCLFVBQXdCLGVBQXVCO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBaUIsUUFBNEQ7UUFFM0UsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFVBQVMsQ0FBQztZQUN4QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQWdDLENBQUM7WUFDdEQsSUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFM0MsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVwQyxRQUFRLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQztRQUNoQyxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFFZCxDQUFDO0lBRUgsV0FBQztBQUFELENBQUMiLCJmaWxlIjoicmVzb3VyY2VzX3R5cGVzY3JpcHRfcGFnZXNfX2Zvcm1zX2Zvcm1fdHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBcImpxdWVyeS1tYXNrLXBsdWdpblwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybSB7XG5cbiAgcHJpdmF0ZSBib3hGb3JtVG9rZW5JZDpzdHJpbmc7XG4gIHByaXZhdGUgaHRtbEZvcm1FbGVtZW50OiBIVE1MRm9ybUVsZW1lbnQ7XG4gIHByaXZhdGUgbWV0aG9kOiBzdHJpbmc7XG4gIHByaXZhdGUgYWN0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgZm9ybV9kYXRhOkZvcm1EYXRhO1xuICBwcml2YXRlIGlucHV0X2hpZGRlbl9pZDogbnVtYmVyO1xuXG4gICBcblxuXG4gICAgXG5cblxuICBjb25zdHJ1Y3Rvcihib3hGb3JtVG9rZW5JZDpzdHJpbmcpe1xuICAgIHRoaXMuYm94Rm9ybVRva2VuSWQgPSBib3hGb3JtVG9rZW5JZDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBcbiAgcHJvdGVjdGVkIGluaXQoKSB7XG4gICAgdGhpcy5odG1sRm9ybUVsZW1lbnQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5ib3hGb3JtVG9rZW5JZH0gZm9ybWApIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYm94Rm9ybVRva2VuSWQpICkgYXMgSFRNTEZvcm1FbGVtZW50OyA7XG4gIH1cblxuICBwdWJsaWMgc2V0TWV0aG9kKG1ldGhvZDpzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICB0aGlzLmh0bWxGb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsbWV0aG9kKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3Rpb24oYWN0aW9uOnN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMuaHRtbEZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aW9uJyxhY3Rpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldEZvcm1EYXRhKGZvcm1fZGF0YTogRm9ybURhdGEpOiB0aGlzIHtcbiAgICB0aGlzLmZvcm1fZGF0YSA9IGZvcm1fZGF0YTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBcbiAgcHVibGljIGdldElucHV0SGlkZGVuSWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dF9oaWRkZW5faWQ7XG59XG5cblxuXG4gIHB1YmxpYyBnZXRNZXRob2QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRob2Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aW9uKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5hY3Rpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9ybURhdGEoKTogRm9ybURhdGEge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybV9kYXRhO1xuICB9XG5cbiAgcHVibGljIHNldElucHV0SGlkZGVuSWQoaW5wdXRfaGlkZGVuX2lkOiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLmlucHV0X2hpZGRlbl9pZCA9IGlucHV0X2hpZGRlbl9pZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBvblN1Ym1pdCggY2FsbGJhY2s6IChmb3JtRGF0YTogRm9ybURhdGEsZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB2b2lkICk6IHRoaXMge1xuICAgIFxuICAgIGNvbnN0ICRjb250ZXh0Rm9ybSA9IHRoaXM7XG5cbiAgICB0aGlzLmh0bWxGb3JtRWxlbWVudC5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybVRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoZm9ybVRhcmdldCk7XG5cbiAgICAgICRjb250ZXh0Rm9ybS5zZXRGb3JtRGF0YShmb3JtX2RhdGEpO1xuICAgICAgXG4gICAgICBjYWxsYmFjayhmb3JtX2RhdGEsZm9ybVRhcmdldClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9
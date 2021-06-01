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
        this._element = (document.querySelector("#" + this.boxFormTokenId + " form") || document.getElementById(this.boxFormTokenId));
        ;
    };
    Object.defineProperty(Form.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Form.prototype.setMethod = function (method) {
        this.method = method;
        this._element.setAttribute('method', method);
        return this;
    };
    Form.prototype.setAction = function (action) {
        this.action = action;
        this._element.setAttribute('action', action);
        return this;
    };
    Form.prototype.setFormData = function (form_data) {
        this.form_data = form_data;
        return this;
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
    Form.prototype.setInputHiddenId = function (input_name, input_value) {
        if (input_value > 0) {
            this.setInputByName(input_name, input_value.toString());
        }
        else {
            /**
             * Validate if a edit form has value filled
             */
            input_value = Number(this.getInputByName(input_name).value) || null;
        }
        this.input_hidden_id = {
            name: input_name,
            value: input_value || 0,
        };
        return this;
    };
    Form.prototype.getInputHiddenId = function () {
        return this.input_hidden_id;
    };
    Form.prototype.focusIn = function (input_name) {
        var elem = this._element.querySelector("" + input_name);
        elem.focus();
    };
    Form.prototype.setInputByName = function (input_name, input_value) {
        var result = document.getElementsByName(input_name);
        if (result.length == 1) {
            result[0].value = input_value;
        }
        else {
            throw new Error('Duplicidade de elemento input');
        }
        return this;
    };
    Form.prototype.getInputByName = function (input_name) {
        var result = document.getElementsByName(input_name);
        if (result.length == 1) {
            return result[0];
        }
        else {
            throw new Error('Duplicidade de elemento input');
        }
    };
    Form.prototype.onSubmit = function (callback) {
        var $contextForm = this;
        this._element.onsubmit = function (e) {
            e.preventDefault();
            e.stopPropagation();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9fZm9ybXMvZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFNEI7QUFFNUI7SUFTRSxjQUFZLGNBQXFCO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFUyxtQkFBSSxHQUFkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsY0FBYyxVQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBcUIsQ0FBQztRQUFDLENBQUM7SUFDakosQ0FBQztJQUVELHNCQUFJLHlCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFTSx3QkFBUyxHQUFoQixVQUFpQixNQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx3QkFBUyxHQUFoQixVQUFpQixNQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSwwQkFBVyxHQUFsQixVQUFtQixTQUFtQjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU0sd0JBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLDBCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSwrQkFBZ0IsR0FBdkIsVUFBd0IsVUFBaUIsRUFBRyxXQUFvQjtRQUU5RCxJQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUM7WUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUM7U0FDMUQ7YUFBTTtZQUVMOztlQUVHO1lBQ0gsV0FBVyxHQUFHLE1BQU0sQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBRSxJQUFJLElBQUksQ0FBQztTQUV2RTtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckIsSUFBSSxFQUFJLFVBQVU7WUFDbEIsS0FBSyxFQUFHLFdBQVcsSUFBSSxDQUFDO1NBQ3pCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSwrQkFBZ0IsR0FBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVNLHNCQUFPLEdBQWQsVUFBZSxVQUFpQjtRQUU5QixJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBRyxVQUFZLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0sNkJBQWMsR0FBckIsVUFBc0IsVUFBaUIsRUFBRSxXQUFrQjtRQUN6RCxJQUFNLE1BQU0sR0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsSUFBRyxNQUFNLENBQUMsTUFBTSxJQUFFLENBQUMsRUFBQztZQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztTQUMvQjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sNkJBQWMsR0FBckIsVUFBc0IsVUFBaUI7UUFDckMsSUFBTSxNQUFNLEdBQU8sUUFBUSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFELElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQUM7WUFDbEIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFTSx1QkFBUSxHQUFmLFVBQWlCLFFBQTREO1FBRTNFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxVQUFTLENBQUM7WUFDakMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBZ0MsQ0FBQztZQUN0RCxJQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUUzQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXBDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsVUFBVSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVkLENBQUM7SUFFSCxXQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJyZXNvdXJjZXNfdHlwZXNjcmlwdF9wYWdlc19fZm9ybXNfZm9ybV90cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFwianF1ZXJ5LW1hc2stcGx1Z2luXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtIHtcblxuICBwcml2YXRlIGJveEZvcm1Ub2tlbklkOnN0cmluZztcbiAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEZvcm1FbGVtZW50O1xuICBwcml2YXRlIG1ldGhvZDogc3RyaW5nO1xuICBwcml2YXRlIGFjdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIGZvcm1fZGF0YTpGb3JtRGF0YTtcbiAgcHJpdmF0ZSBpbnB1dF9oaWRkZW5faWQ6IEZvcm1JbnB1dFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKGJveEZvcm1Ub2tlbklkOnN0cmluZyl7XG4gICAgdGhpcy5ib3hGb3JtVG9rZW5JZCA9IGJveEZvcm1Ub2tlbklkO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIFxuICBwcm90ZWN0ZWQgaW5pdCgpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuYm94Rm9ybVRva2VuSWR9IGZvcm1gKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJveEZvcm1Ub2tlbklkKSApIGFzIEhUTUxGb3JtRWxlbWVudDsgO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKTogSFRNTEZvcm1FbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRNZXRob2QobWV0aG9kOnN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXRob2QnLG1ldGhvZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aW9uKGFjdGlvbjpzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYWN0aW9uJyxhY3Rpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldEZvcm1EYXRhKGZvcm1fZGF0YTogRm9ybURhdGEpOiB0aGlzIHtcbiAgICB0aGlzLmZvcm1fZGF0YSA9IGZvcm1fZGF0YTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXRob2QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRob2Q7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aW9uKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5hY3Rpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9ybURhdGEoKTogRm9ybURhdGEge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybV9kYXRhO1xuICB9XG5cbiAgcHVibGljIHNldElucHV0SGlkZGVuSWQoaW5wdXRfbmFtZTpzdHJpbmcgLCBpbnB1dF92YWx1ZT86IG51bWJlcik6IHRoaXMge1xuICAgIFxuICAgIGlmKGlucHV0X3ZhbHVlID4gMCl7XG4gICAgICB0aGlzLnNldElucHV0QnlOYW1lKGlucHV0X25hbWUsIGlucHV0X3ZhbHVlLnRvU3RyaW5nKCkgKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvKipcbiAgICAgICAqIFZhbGlkYXRlIGlmIGEgZWRpdCBmb3JtIGhhcyB2YWx1ZSBmaWxsZWRcbiAgICAgICAqL1xuICAgICAgaW5wdXRfdmFsdWUgPSBOdW1iZXIoIHRoaXMuZ2V0SW5wdXRCeU5hbWUoaW5wdXRfbmFtZSkudmFsdWUgKSB8fCBudWxsO1xuXG4gICAgfVxuICAgIFxuICAgIHRoaXMuaW5wdXRfaGlkZGVuX2lkID0ge1xuICAgICAgbmFtZSAgOiBpbnB1dF9uYW1lLFxuICAgICAgdmFsdWUgOiBpbnB1dF92YWx1ZSB8fCAwLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEhpZGRlbklkKCk6IEZvcm1JbnB1dFZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dF9oaWRkZW5faWQ7XG4gIH1cblxuICBwdWJsaWMgZm9jdXNJbihpbnB1dF9uYW1lOnN0cmluZylcbiAge1xuICAgIGNvbnN0IGVsZW06IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAke2lucHV0X25hbWV9YCk7XG4gICAgZWxlbS5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIHNldElucHV0QnlOYW1lKGlucHV0X25hbWU6c3RyaW5nLCBpbnB1dF92YWx1ZTpzdHJpbmcgKXtcbiAgICBjb25zdCByZXN1bHQ6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaW5wdXRfbmFtZSk7XG4gICAgaWYocmVzdWx0Lmxlbmd0aD09MSl7XG4gICAgICByZXN1bHRbMF0udmFsdWUgPSBpbnB1dF92YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNpZGFkZSBkZSBlbGVtZW50byBpbnB1dCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dEJ5TmFtZShpbnB1dF9uYW1lOnN0cmluZyApOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICBjb25zdCByZXN1bHQ6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaW5wdXRfbmFtZSk7XG4gICAgaWYocmVzdWx0Lmxlbmd0aD09MSl7XG4gICAgICByZXR1cm4gcmVzdWx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2lkYWRlIGRlIGVsZW1lbnRvIGlucHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU3VibWl0KCBjYWxsYmFjazogKGZvcm1EYXRhOiBGb3JtRGF0YSxmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHZvaWQgKTogdGhpcyB7XG4gICAgXG4gICAgY29uc3QgJGNvbnRleHRGb3JtID0gdGhpcztcblxuICAgIHRoaXMuX2VsZW1lbnQub25zdWJtaXQgPSBmdW5jdGlvbihlKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBmb3JtVGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgIGNvbnN0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtVGFyZ2V0KTtcblxuICAgICAgJGNvbnRleHRGb3JtLnNldEZvcm1EYXRhKGZvcm1fZGF0YSk7XG4gICAgICBcbiAgICAgIGNhbGxiYWNrKGZvcm1fZGF0YSxmb3JtVGFyZ2V0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUlucHV0VmFsdWUge1xuICBuYW1lOnN0cmluZyx2YWx1ZT86bnVtYmVyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
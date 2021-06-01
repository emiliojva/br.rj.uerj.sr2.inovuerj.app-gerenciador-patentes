(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_models_controller-page_ts-resources_typescript_pages__forms_form_ts-reso-ee75d6"],{

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



/***/ }),

/***/ "./resources/typescript/services/abstract/http-client-request.ts":
/*!***********************************************************************!*\
  !*** ./resources/typescript/services/abstract/http-client-request.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientRequest": () => (/* binding */ HttpClientRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/**
 * http dependency
 */

var HttpClientRequest = /** @class */ (function () {
    function HttpClientRequest() {
        // protected serverUri: string = 'http://inovuerj.sr2.uerj.br/desenvolvimento/secti';
        this.serverUri = "http://127.0.0.1";
        this.apiUriVersion = 'api/v1';
        this.httpOptions = {
            headers: null
        };
        this.http = (axios__WEBPACK_IMPORTED_MODULE_0___default());
        this.initHttpOptions();
    }
    /**
     *  HttpOptions fornecido ao httpClient(get,post,put e etc)
     *
     *  - HttpHeaders
     *  The instances of the new HttpHeader class are immutable objects.
     *  Invoking class methods will return a new instance as result.
     *  So basically, you need to do the following:
     */
    HttpClientRequest.prototype.initHttpOptions = function () {
        // let headers = new Headers({
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json;charset=UTF-8',
        //   'X_REQUESTED_WITH': "xmlhttprequest"
        // });
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'X_REQUESTED_WITH': "xmlhttprequest"
        };
        /**
         * Headers
         */
        this.httpOptions.headers = headers;
        return headers;
    };
    /**
     * Wrapper do metodo GET(verbo http) capturando o endpoint completo
     * @param endpoint
     */
    HttpClientRequest.prototype.get = function (endpoint, params, httpOptions) {
        return this.http.get(endpoint, this.httpOptions).then(function (response) {
            /**
            * Http Response 200
            */
            /**
            * Axios retorna headers, status code and data(with _body server data)
            */
            var dataResponse = response.data;
            /**
            * Modal Alert
            */
            alert(dataResponse.msg); // response default from server
            /**
             * Check error. Prevent flow of execution
             */
            var error = dataResponse.error || false;
            if (error) {
                throw error; // detailed error
            }
            return dataResponse;
        }).catch(function (error) {
            /**
            * HTTP 400 to 500 response errors
            */
            console.log(error);
        });
    };
    /**
     * Wrapper do metodo POST(verbo http) capturando o endpoint completo
     * @param endpoint
     * @param params
     * @param httpOptions
     */
    HttpClientRequest.prototype.post = function (endpoint, params, httpOptions) {
        var options = Object.assign(httpOptions, this.httpOptions);
        return this.http.post(endpoint, params, options).then(function (response) {
            /**
            * Http Response 200
            */
            /**
            * Axios retorna headers, status code and data(with _body server data)
            */
            var dataResponse = response.data;
            /**
            * Modal Alert
            */
            alert(dataResponse.msg); // response default from server
            /**
             * Check error. Prevent flow of execution
             */
            var error = dataResponse.error || false;
            if (error) {
                throw error; // detailed error
            }
            return dataResponse;
        }).catch(function (error) {
            /**
            * HTTP 400 to 500 response errors
            */
            console.log(error);
        });
    };
    HttpClientRequest.prototype.endpoint = function (url, params) {
        var uriParam = '';
        if (params !== undefined) {
            uriParam = '/' + params.join('/');
        }
        return "" + (this.serverUri + '/' + this.apiUriVersion + '/' + url + uriParam);
    };
    HttpClientRequest.prototype.setTokenBearer = function (token) {
        this.httpOptions.headers.set('Authorization', "Bearer " + token);
        return this.httpOptions;
    };
    return HttpClientRequest;
}());



/***/ }),

/***/ "./resources/typescript/services/api.service.ts":
/*!******************************************************!*\
  !*** ./resources/typescript/services/api.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _abstract_http_client_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/http-client-request */ "./resources/typescript/services/abstract/http-client-request.ts");
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

var ApiService = /** @class */ (function (_super) {
    __extends(ApiService, _super);
    function ApiService() {
        /**
         * Dependency Injection Base Construtor
         */
        return _super.call(this) || this;
    }
    ApiService.prototype.postToIntellectualAssetStore = function (form_data) {
        /**
         * Generating data post to server
         */
        var form_data_id = Number(form_data.get('data[intellectual_assets][id]'));
        form_data.set('_ajax', 'true');
        /**
        * URLs with endpoints for post/update
        */
        var form_action_url = (form_data_id == 0) ? '/admin/ativo' : "/admin/ativo/" + form_data_id + "/edit";
        return this.post(form_action_url, form_data, {}).then(function (response) {
            /**
            * Capture data from the API server
            */
            var intellectual_asset = response._body;
            return intellectual_asset;
        });
    };
    ApiService.prototype.postToIntellectualAssetAuthorStore = function (intellectual_asset_id, form) {
        var form_data = form.getFormData();
        /**
         * Generating data post to server
         */
        form_data.set('_ajax', 'true');
        /**
        * URLs with endpoints for post/update
        */
        var form_action_url = form.getAction();
        return this.post(form_action_url, form_data, {}).then(function (response) {
            /**
            * Capture data from the API server
            */
            var author = response._body;
            return author;
        });
    };
    return ApiService;
}(_abstract_http_client_request__WEBPACK_IMPORTED_MODULE_0__.HttpClientRequest));



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9tb2RlbHMvY29udHJvbGxlci1wYWdlLnRzIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy8uL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL19mb3Jtcy9mb3JtLnRzIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy8uL3Jlc291cmNlcy90eXBlc2NyaXB0L3NlcnZpY2VzL2Fic3RyYWN0L2h0dHAtY2xpZW50LXJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vcHJvamV0by1nZXJlbmNpYW1lbnRvLXBhdGVudGVzLy4vcmVzb3VyY2VzL3R5cGVzY3JpcHQvc2VydmljZXMvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0lBRUU7UUFDRSxzRUFBc0U7UUFDdEUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUlNLDhCQUFLLEdBQVo7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFFLFNBQVMsQ0FBQyxDQUFFO0lBQ2xELENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMkI7QUFFNUI7SUFTRSxjQUFZLGNBQXFCO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFUyxtQkFBSSxHQUFkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsY0FBYyxVQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBcUIsQ0FBQztRQUFDLENB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RixTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUMsQ0FBQztRQUU3Qjs7VUFFRTtRQUNGLElBQUksZUFBZSxHQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGtCQUFnQixZQUFZLFVBQU8sQ0FBQztRQUVsRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQyxRQUFZO1lBRWhFOztjQUVFO1lBQ0YsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTFDLE9BQU8sa0JBQWtCLENBQUM7UUFFNUIsQ0FBQyxDQUFDLENBQUM7SUFFTixDQUFDO0lBRUQsdURBQWtDLEdBQWxDLFVBQW1DLHFCQUE0QixFQUFHLElBQVU7UUFFMUUsSUFBTSxTQUFTLEdBQVksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTlDOztXQUVHO1FBQ0gsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0I7O1VBRUU7UUFDRixJQUFJLGVBQWUsR0FBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFFLFVBQUMsUUFBWTtZQUVoRTs7Y0FFRTtZQUNGLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFOUIsT0FBTyxNQUFNLENBQUM7UUFFaEIsQ0FBQyxDQUFDLENBQUM7SUFFTixDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDLENBakUrQiw0RUFBaUIsR0FpRWhEIiwiZmlsZSI6InJlc291cmNlc190eXBlc2NyaXB0X21vZGVsc19jb250cm9sbGVyLXBhZ2VfdHMtcmVzb3VyY2VzX3R5cGVzY3JpcHRfcGFnZXNfX2Zvcm1zX2Zvcm1fdHMtcmVzby1lZTc1ZDYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250cm9sbGVyUGFnZVxue1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vIGNvbnNvbGUubG9nKGBDb250cm9sbGVyUGFnZSBjb25zdHJ1Y3RvciAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0KHBhcmFtPzogb2JqZWN0KSA6IHZvaWQ7XG4gIFxuICBwdWJsaWMgaGVsbG8oKXtcbiAgICBjb25zb2xlLmluZm8odGhpcy5jb25zdHJ1Y3Rvci5uYW1lKyAnIExvYWRlZCcpIDtcbiAgfVxufSIsIlxuXG5pbXBvcnQgXCJqcXVlcnktbWFzay1wbHVnaW5cIjtcblxuZXhwb3J0IGNsYXNzIEZvcm0ge1xuXG4gIHByaXZhdGUgYm94Rm9ybVRva2VuSWQ6c3RyaW5nO1xuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRm9ybUVsZW1lbnQ7XG4gIHByaXZhdGUgbWV0aG9kOiBzdHJpbmc7XG4gIHByaXZhdGUgYWN0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgZm9ybV9kYXRhOkZvcm1EYXRhO1xuICBwcml2YXRlIGlucHV0X2hpZGRlbl9pZDogRm9ybUlucHV0VmFsdWU7XG5cbiAgY29uc3RydWN0b3IoYm94Rm9ybVRva2VuSWQ6c3RyaW5nKXtcbiAgICB0aGlzLmJveEZvcm1Ub2tlbklkID0gYm94Rm9ybVRva2VuSWQ7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgXG4gIHByb3RlY3RlZCBpbml0KCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5ib3hGb3JtVG9rZW5JZH0gZm9ybWApIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYm94Rm9ybVRva2VuSWQpICkgYXMgSFRNTEZvcm1FbGVtZW50OyA7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgcHVibGljIHNldE1ldGhvZChtZXRob2Q6c3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsbWV0aG9kKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3Rpb24oYWN0aW9uOnN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhY3Rpb24nLGFjdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0Rm9ybURhdGEoZm9ybV9kYXRhOiBGb3JtRGF0YSk6IHRoaXMge1xuICAgIHRoaXMuZm9ybV9kYXRhID0gZm9ybV9kYXRhO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGdldE1ldGhvZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb3JtRGF0YSgpOiBGb3JtRGF0YSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtX2RhdGE7XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXRIaWRkZW5JZChpbnB1dF9uYW1lOnN0cmluZyAsIGlucHV0X3ZhbHVlPzogbnVtYmVyKTogdGhpcyB7XG4gICAgXG4gICAgaWYoaW5wdXRfdmFsdWUgPiAwKXtcbiAgICAgIHRoaXMuc2V0SW5wdXRCeU5hbWUoaW5wdXRfbmFtZSwgaW5wdXRfdmFsdWUudG9TdHJpbmcoKSApO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8qKlxuICAgICAgICogVmFsaWRhdGUgaWYgYSBlZGl0IGZvcm0gaGFzIHZhbHVlIGZpbGxlZFxuICAgICAgICovXG4gICAgICBpbnB1dF92YWx1ZSA9IE51bWJlciggdGhpcy5nZXRJbnB1dEJ5TmFtZShpbnB1dF9uYW1lKS52YWx1ZSApIHx8IG51bGw7XG5cbiAgICB9XG4gICAgXG4gICAgdGhpcy5pbnB1dF9oaWRkZW5faWQgPSB7XG4gICAgICBuYW1lICA6IGlucHV0X25hbWUsXG4gICAgICB2YWx1ZSA6IGlucHV0X3ZhbHVlIHx8IDAsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0SGlkZGVuSWQoKTogRm9ybUlucHV0VmFsdWUge1xuICAgIHJldHVybiB0aGlzLmlucHV0X2hpZGRlbl9pZDtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c0luKGlucHV0X25hbWU6c3RyaW5nKVxuICB7XG4gICAgY29uc3QgZWxlbTogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7aW5wdXRfbmFtZX1gKTtcbiAgICBlbGVtLmZvY3VzKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXRCeU5hbWUoaW5wdXRfbmFtZTpzdHJpbmcsIGlucHV0X3ZhbHVlOnN0cmluZyApe1xuICAgIGNvbnN0IHJlc3VsdDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShpbnB1dF9uYW1lKTtcbiAgICBpZihyZXN1bHQubGVuZ3RoPT0xKXtcbiAgICAgIHJlc3VsdFswXS52YWx1ZSA9IGlucHV0X3ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2lkYWRlIGRlIGVsZW1lbnRvIGlucHV0Jyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0QnlOYW1lKGlucHV0X25hbWU6c3RyaW5nICk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIGNvbnN0IHJlc3VsdDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShpbnB1dF9uYW1lKTtcbiAgICBpZihyZXN1bHQubGVuZ3RoPT0xKXtcbiAgICAgIHJldHVybiByZXN1bHRbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljaWRhZGUgZGUgZWxlbWVudG8gaW5wdXQnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQoIGNhbGxiYWNrOiAoZm9ybURhdGE6IEZvcm1EYXRhLGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4gdm9pZCApOiB0aGlzIHtcbiAgICBcbiAgICBjb25zdCAkY29udGV4dEZvcm0gPSB0aGlzO1xuXG4gICAgdGhpcy5fZWxlbWVudC5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGZvcm1UYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgICAgY29uc3QgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1UYXJnZXQpO1xuXG4gICAgICAkY29udGV4dEZvcm0uc2V0Rm9ybURhdGEoZm9ybV9kYXRhKTtcbiAgICAgIFxuICAgICAgY2FsbGJhY2soZm9ybV9kYXRhLGZvcm1UYXJnZXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtSW5wdXRWYWx1ZSB7XG4gIG5hbWU6c3RyaW5nLHZhbHVlPzpudW1iZXJcbn0iLCIvKipcclxuICogaHR0cCBkZXBlbmRlbmN5XHJcbiAqL1xyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc1N0YXRpYyB9IGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBDbGllbnRSZXF1ZXN0IHtcclxuXHJcbiAgLy8gcHJvdGVjdGVkIHNlcnZlclVyaTogc3RyaW5nID0gJ2h0dHA6Ly9pbm92dWVyai5zcjIudWVyai5ici9kZXNlbnZvbHZpbWVudG8vc2VjdGknO1xyXG4gIHNlcnZlclVyaTpzdHJpbmcgPSBcImh0dHA6Ly8xMjcuMC4wLjFcIjtcclxuICBwcm90ZWN0ZWQgYXBpVXJpVmVyc2lvbjogc3RyaW5nID0gJ2FwaS92MSc7XHJcbiAgcHJpdmF0ZSBodHRwOkF4aW9zSW5zdGFuY2U7XHJcbiAgXHJcblxyXG4gIHB1YmxpYyBodHRwT3B0aW9uczogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgaGVhZGVyczogbnVsbFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5odHRwID0gYXhpb3M7XHJcbiAgICB0aGlzLmluaXRIdHRwT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIEh0dHBPcHRpb25zIGZvcm5lY2lkbyBhbyBodHRwQ2xpZW50KGdldCxwb3N0LHB1dCBlIGV0YylcclxuICAgKlxyXG4gICAqICAtIEh0dHBIZWFkZXJzXHJcbiAgICogIFRoZSBpbnN0YW5jZXMgb2YgdGhlIG5ldyBIdHRwSGVhZGVyIGNsYXNzIGFyZSBpbW11dGFibGUgb2JqZWN0cy5cclxuICAgKiAgSW52b2tpbmcgY2xhc3MgbWV0aG9kcyB3aWxsIHJldHVybiBhIG5ldyBpbnN0YW5jZSBhcyByZXN1bHQuXHJcbiAgICogIFNvIGJhc2ljYWxseSwgeW91IG5lZWQgdG8gZG8gdGhlIGZvbGxvd2luZzpcclxuICAgKi9cclxuICBwcml2YXRlIGluaXRIdHRwT3B0aW9ucygpIHtcclxuXHJcbiAgICAvLyBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgIC8vICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIC8vICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnLFxyXG4gICAgLy8gICAnWF9SRVFVRVNURURfV0lUSCc6IFwieG1saHR0cHJlcXVlc3RcIlxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcclxuICAgICAgJ1hfUkVRVUVTVEVEX1dJVEgnOiBcInhtbGh0dHByZXF1ZXN0XCJcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWFkZXJzXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaHR0cE9wdGlvbnMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXR1cm4gaGVhZGVycztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcmFwcGVyIGRvIG1ldG9kbyBHRVQodmVyYm8gaHR0cCkgY2FwdHVyYW5kbyBvIGVuZHBvaW50IGNvbXBsZXRvXHJcbiAgICogQHBhcmFtIGVuZHBvaW50XHJcbiAgICovXHJcbiAgZ2V0KGVuZHBvaW50OnN0cmluZywgcGFyYW1zPzpGb3JtRGF0YSwgaHR0cE9wdGlvbnM/Ont9KTogUHJvbWlzZTxhbnk+e1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGVuZHBvaW50LHRoaXMuaHR0cE9wdGlvbnMpLnRoZW4oIChyZXNwb25zZTphbnkpID0+IHtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAqIEh0dHAgUmVzcG9uc2UgMjAwXHJcbiAgICAgICovXHJcblxyXG4gICAgICAvKipcclxuICAgICAgKiBBeGlvcyByZXRvcm5hIGhlYWRlcnMsIHN0YXR1cyBjb2RlIGFuZCBkYXRhKHdpdGggX2JvZHkgc2VydmVyIGRhdGEpXHJcbiAgICAgICovXHJcbiAgICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgKiBNb2RhbCBBbGVydFxyXG4gICAgICAqL1xyXG4gICAgICBhbGVydChkYXRhUmVzcG9uc2UubXNnKTsgLy8gcmVzcG9uc2UgZGVmYXVsdCBmcm9tIHNlcnZlclxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIENoZWNrIGVycm9yLiBQcmV2ZW50IGZsb3cgb2YgZXhlY3V0aW9uXHJcbiAgICAgICAqL1xyXG4gICAgICBsZXQgZXJyb3IgPSBkYXRhUmVzcG9uc2UuZXJyb3IgfHwgZmFsc2U7XHJcbiAgICAgIGlmKGVycm9yKXtcclxuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gZGV0YWlsZWQgZXJyb3JcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGFSZXNwb25zZTtcclxuXHJcbiAgICAgIFxyXG5cclxuICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+eyBcclxuICAgICAgLyoqXHJcbiAgICAgICogSFRUUCA0MDAgdG8gNTAwIHJlc3BvbnNlIGVycm9yc1xyXG4gICAgICAqL1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV3JhcHBlciBkbyBtZXRvZG8gUE9TVCh2ZXJibyBodHRwKSBjYXB0dXJhbmRvIG8gZW5kcG9pbnQgY29tcGxldG9cclxuICAgKiBAcGFyYW0gZW5kcG9pbnRcclxuICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICogQHBhcmFtIGh0dHBPcHRpb25zXHJcbiAgICovXHJcbiAgcG9zdChlbmRwb2ludDpzdHJpbmcsIHBhcmFtczpGb3JtRGF0YSwgaHR0cE9wdGlvbnM/Ont9KTogUHJvbWlzZTxhbnk+e1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGh0dHBPcHRpb25zLHRoaXMuaHR0cE9wdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChlbmRwb2ludCxwYXJhbXMsb3B0aW9ucykudGhlbiggKHJlc3BvbnNlOmFueSkgPT4ge1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICogSHR0cCBSZXNwb25zZSAyMDBcclxuICAgICAgKi9cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAqIEF4aW9zIHJldG9ybmEgaGVhZGVycywgc3RhdHVzIGNvZGUgYW5kIGRhdGEod2l0aCBfYm9keSBzZXJ2ZXIgZGF0YSlcclxuICAgICAgKi9cclxuICAgICAgY29uc3QgZGF0YVJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAqIE1vZGFsIEFsZXJ0XHJcbiAgICAgICovXHJcbiAgICAgIGFsZXJ0KGRhdGFSZXNwb25zZS5tc2cpOyAvLyByZXNwb25zZSBkZWZhdWx0IGZyb20gc2VydmVyXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQ2hlY2sgZXJyb3IuIFByZXZlbnQgZmxvdyBvZiBleGVjdXRpb25cclxuICAgICAgICovXHJcbiAgICAgIGxldCBlcnJvciA9IGRhdGFSZXNwb25zZS5lcnJvciB8fCBmYWxzZTtcclxuICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IGVycm9yOyAvLyBkZXRhaWxlZCBlcnJvclxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YVJlc3BvbnNlO1xyXG5cclxuICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+eyBcclxuICAgICAgLyoqXHJcbiAgICAgICogSFRUUCA0MDAgdG8gNTAwIHJlc3BvbnNlIGVycm9yc1xyXG4gICAgICAqL1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmRwb2ludCh1cmw6IHN0cmluZywgcGFyYW1zPzogQXJyYXk8YW55Pik6IHN0cmluZyB7XHJcblxyXG4gICAgbGV0IHVyaVBhcmFtID0gJyc7XHJcblxyXG4gICAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHVyaVBhcmFtID0gJy8nICsgcGFyYW1zLmpvaW4oJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7dGhpcy5zZXJ2ZXJVcmkgKyAnLycgKyB0aGlzLmFwaVVyaVZlcnNpb24gKyAnLycgKyB1cmwgKyB1cmlQYXJhbX1gO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRUb2tlbkJlYXJlcih0b2tlbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmh0dHBPcHRpb25zLmhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3Rva2VufWApO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cE9wdGlvbnM7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW50ZXJmYWNlIEh0dHBPcHRpb25zIHtcclxuXHJcbiAgaGVhZGVycz86IHt9IDsgLy8gSGVhZGVyc1xyXG5cclxuICBwYXJhbXM/OiB7fTtcclxuXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi4vcGFnZXMvX2Zvcm1zL2Zvcm0nO1xyXG5pbXBvcnQge0h0dHBDbGllbnRSZXF1ZXN0fSBmcm9tICcuL2Fic3RyYWN0L2h0dHAtY2xpZW50LXJlcXVlc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2UgZXh0ZW5kcyBIdHRwQ2xpZW50UmVxdWVzdCB7XHJcblxyXG4gIHByaXZhdGUgX2lwOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXBlbmRlbmN5IEluamVjdGlvbiBCYXNlIENvbnN0cnV0b3JcclxuICAgICAqL1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgXHJcbiAgcG9zdFRvSW50ZWxsZWN0dWFsQXNzZXRTdG9yZShmb3JtX2RhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRpbmcgZGF0YSBwb3N0IHRvIHNlcnZlclxyXG4gICAgICovXHJcbiAgICBsZXQgZm9ybV9kYXRhX2lkOm51bWJlciA9IE51bWJlciggZm9ybV9kYXRhLmdldCgnZGF0YVtpbnRlbGxlY3R1YWxfYXNzZXRzXVtpZF0nKSApO1xyXG5cclxuICAgIGZvcm1fZGF0YS5zZXQoJ19hamF4JywndHJ1ZScpO1xyXG5cclxuICAgICAvKipcclxuICAgICAqIFVSTHMgd2l0aCBlbmRwb2ludHMgZm9yIHBvc3QvdXBkYXRlXHJcbiAgICAgKi9cclxuICAgICBsZXQgZm9ybV9hY3Rpb25fdXJsICA9IChmb3JtX2RhdGFfaWQgPT0gMCkgPyAnL2FkbWluL2F0aXZvJyA6IGAvYWRtaW4vYXRpdm8vJHtmb3JtX2RhdGFfaWR9L2VkaXRgO1xyXG5cclxuICAgICByZXR1cm4gdGhpcy5wb3N0KGZvcm1fYWN0aW9uX3VybCxmb3JtX2RhdGEse30pLnRoZW4oIChyZXNwb25zZTphbnkpID0+IHtcclxuXHJcbiAgICAgICAvKipcclxuICAgICAgICogQ2FwdHVyZSBkYXRhIGZyb20gdGhlIEFQSSBzZXJ2ZXJcclxuICAgICAgICovXHJcbiAgICAgICBjb25zdCBpbnRlbGxlY3R1YWxfYXNzZXQgPSByZXNwb25zZS5fYm9keTtcclxuXHJcbiAgICAgICByZXR1cm4gaW50ZWxsZWN0dWFsX2Fzc2V0O1xyXG5cclxuICAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBwb3N0VG9JbnRlbGxlY3R1YWxBc3NldEF1dGhvclN0b3JlKGludGVsbGVjdHVhbF9hc3NldF9pZDpudW1iZXIgLCBmb3JtOiBGb3JtKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgXHJcbiAgICBjb25zdCBmb3JtX2RhdGE6Rm9ybURhdGEgPSBmb3JtLmdldEZvcm1EYXRhKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0aW5nIGRhdGEgcG9zdCB0byBzZXJ2ZXJcclxuICAgICAqL1xyXG4gICAgZm9ybV9kYXRhLnNldCgnX2FqYXgnLCd0cnVlJyk7XHJcblxyXG4gICAgIC8qKlxyXG4gICAgICogVVJMcyB3aXRoIGVuZHBvaW50cyBmb3IgcG9zdC91cGRhdGVcclxuICAgICAqL1xyXG4gICAgIGxldCBmb3JtX2FjdGlvbl91cmwgID0gZm9ybS5nZXRBY3Rpb24oKTtcclxuXHJcbiAgICAgcmV0dXJuIHRoaXMucG9zdChmb3JtX2FjdGlvbl91cmwsZm9ybV9kYXRhLHt9KS50aGVuKCAocmVzcG9uc2U6YW55KSA9PiB7XHJcblxyXG4gICAgICAgLyoqXHJcbiAgICAgICAqIENhcHR1cmUgZGF0YSBmcm9tIHRoZSBBUEkgc2VydmVyXHJcbiAgICAgICAqL1xyXG4gICAgICAgY29uc3QgYXV0aG9yID0gcmVzcG9uc2UuX2JvZHk7XHJcblxyXG4gICAgICAgcmV0dXJuIGF1dGhvcjtcclxuXHJcbiAgICAgfSk7XHJcblxyXG4gIH1cclxuICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
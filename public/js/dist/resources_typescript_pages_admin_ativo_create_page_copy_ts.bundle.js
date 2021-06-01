(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages_admin_ativo_create_page_copy_ts"],{

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
        var elem = this.htmlFormElement.querySelector("" + input_name);
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



/***/ }),

/***/ "./resources/typescript/pages/admin/ativo/create.page copy.ts":
/*!********************************************************************!*\
  !*** ./resources/typescript/pages/admin/ativo/create.page copy.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePage": () => (/* binding */ CreatePage)
/* harmony export */ });
/* harmony import */ var _models_controller_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/controller-page */ "./resources/typescript/models/controller-page.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js?e91c");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _forms_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_forms/form */ "./resources/typescript/pages/_forms/form.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api.service */ "./resources/typescript/services/api.service.ts");
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






var CreatePage = /** @class */ (function (_super) {
    __extends(CreatePage, _super);
    function CreatePage() {
        return _super.call(this) || this;
    }
    CreatePage.prototype.init = function () {
        this.apiService = new _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService();
        this.masks();
        /**
         * starter flow instruction for handle "Basic Information" Form
         */
        this.formBasicInformationConstruct();
        /**
         * starter flow instruction for handle "Registration Number" Form
         */
        this.formRegistrationNumberConstruct();
    };
    CreatePage.prototype.formBasicInformationConstruct = function () {
        var _this = this;
        /**
         * Basic Information Form Instance
         */
        this.formBasicInformation = new _forms_form__WEBPACK_IMPORTED_MODULE_4__.Form(CreatePage.boxFormBasicInformationTokenId);
        this.formBasicInformation
            .setMethod('post')
            .setAction('/admin/ativo')
            .onSubmit(function (formData) {
            _this.apiService.postToIntellectualAssetStore(formData).then(function (response) {
                _this.formBasicInformation.setInputHiddenId('data[intellectual_assets][id]', response.id);
                window.location.replace("/admin/ativo/" + response.id + "/edit");
            });
        });
    };
    CreatePage.prototype.formRegistrationNumberConstruct = function () {
        var _this = this;
        /**
         * Registration Number Form Instance
         */
        this.formRegistrationNumber = new _forms_form__WEBPACK_IMPORTED_MODULE_4__.Form(CreatePage.boxFormRegistrationNumberTokenId);
        this.formRegistrationNumber
            .setMethod('post')
            .setAction('/admin/ativo')
            .onSubmit(function (formData) {
            var input_id = _this.formBasicInformation.getInputHiddenId() || null;
            if (!input_id) {
                alert('Form Registration Number required!');
                _this.formBasicInformation.focusIn('#nome_ativo');
                return false;
            }
            /**
             * Setter input[name] and input[value] to Form do update
             */
            formData.set(input_id.name, input_id.value.toString());
            /**
             * Post data to api persister
             */
            _this.apiService.postToIntellectualAssetStore(formData);
        });
    };
    /**
     * Initialize input masks plugin for the current page
     */
    CreatePage.prototype.masks = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.cpf').mask('000.000.000-00', { reverse: true });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.cnpj').mask('00.000.000/0000-00');
    };
    CreatePage.prototype.httpPost = function (url, form_data, options) {
        var OPTIONS = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'X_REQUESTED_WITH': "xmlhttprequest"
            }
        };
        return axios__WEBPACK_IMPORTED_MODULE_1___default().post(url, form_data, OPTIONS).then(function (response) {
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
     * Form Tokens IDs
     */
    CreatePage.boxFormBasicInformationTokenId = 'box-form-basic-information';
    CreatePage.boxFormRegistrationNumberTokenId = 'box-form-registration-number';
    return CreatePage;
}(_models_controller_page__WEBPACK_IMPORTED_MODULE_0__.ControllerPage));



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
    return ApiService;
}(_abstract_http_client_request__WEBPACK_IMPORTED_MODULE_0__.HttpClientRequest));



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9tb2RlbHMvY29udHJvbGxlci1wYWdlLnRzIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy8uL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL19mb3Jtcy9mb3JtLnRzIiwid2VicGFjazovL3Byb2pldG8tZ2VyZW5jaWFtZW50by1wYXRlbnRlcy8uL3Jlc291cmNlcy90eXBlc2NyaXB0L3BhZ2VzL2FkbWluL2F0aXZvL2NyZWF0ZS5wYWdlIGNvcHkudHMiLCJ3ZWJwYWNrOi8vcHJvamV0by1nZXJlbmNpYW1lbnRvLXBhdGVudGVzLy4vcmVzb3VyY2VzL3R5cGVzY3JpcHQvc2VydmljZXMvYWJzdHJhY3QvaHR0cC1jbGllbnQtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7SUFFRTtRQUNFLHNFQUFzRTtRQUN0RSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBSU0sOEJBQUssR0FBWjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUUsU0FBUyxDQUFDLENBQUU7SUFDbEQsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1oyQjtBQUU1QjtJQVNFLGNBQVksY0FBcUI7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVTLG1CQUFJLEdBQWQ7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsUUFBUSxDQUFD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Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0pnRTtBQUVqRTtJQUFnQyw4QkFBaUI7SUFJL0M7UUFDRTs7V0FFRztlQUNILGlCQUFPO0lBQ1QsQ0FBQztJQUVELGlEQUE0QixHQUE1QixVQUE2QixTQUFtQjtRQUU5Qzs7V0FFRztRQUNILElBQUksWUFBWSxHQUFVLE1BQU0sQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUUsQ0FBQztRQUVuRixTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUMsQ0FBQztRQUU3Qjs7VUFFRTtRQUNGLElBQUksZUFBZSxHQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGtCQUFnQixZQUFZLFVBQU8sQ0FBQztRQUVsRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQyxRQUFZO1lBRWhFOztjQUVFO1lBQ0YsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTFDLE9BQU8sa0JBQWtCLENBQUM7UUFFNUIsQ0FBQyxDQUFDLENBQUM7SUFFTixDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDLENBdEMrQiw0RUFBaUIsR0FzQ2hEIiwiZmlsZSI6InJlc291cmNlc190eXBlc2NyaXB0X3BhZ2VzX2FkbWluX2F0aXZvX2NyZWF0ZV9wYWdlX2NvcHlfdHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250cm9sbGVyUGFnZVxue1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vIGNvbnNvbGUubG9nKGBDb250cm9sbGVyUGFnZSBjb25zdHJ1Y3RvciAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0KHBhcmFtPzogb2JqZWN0KSA6IHZvaWQ7XG4gIFxuICBwdWJsaWMgaGVsbG8oKXtcbiAgICBjb25zb2xlLmluZm8odGhpcy5jb25zdHJ1Y3Rvci5uYW1lKyAnIExvYWRlZCcpIDtcbiAgfVxufSIsIlxuXG5pbXBvcnQgXCJqcXVlcnktbWFzay1wbHVnaW5cIjtcblxuZXhwb3J0IGNsYXNzIEZvcm0ge1xuXG4gIHByaXZhdGUgYm94Rm9ybVRva2VuSWQ6c3RyaW5nO1xuICBwcml2YXRlIGh0bWxGb3JtRWxlbWVudDogSFRNTEZvcm1FbGVtZW50O1xuICBwcml2YXRlIG1ldGhvZDogc3RyaW5nO1xuICBwcml2YXRlIGFjdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIGZvcm1fZGF0YTpGb3JtRGF0YTtcbiAgcHJpdmF0ZSBpbnB1dF9oaWRkZW5faWQ6IEZvcm1JbnB1dFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKGJveEZvcm1Ub2tlbklkOnN0cmluZyl7XG4gICAgdGhpcy5ib3hGb3JtVG9rZW5JZCA9IGJveEZvcm1Ub2tlbklkO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIFxuICBwcm90ZWN0ZWQgaW5pdCgpIHtcbiAgICB0aGlzLmh0bWxGb3JtRWxlbWVudCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmJveEZvcm1Ub2tlbklkfSBmb3JtYCkgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3hGb3JtVG9rZW5JZCkgKSBhcyBIVE1MRm9ybUVsZW1lbnQ7IDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRNZXRob2QobWV0aG9kOnN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIHRoaXMuaHRtbEZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnbWV0aG9kJyxtZXRob2QpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGlvbihhY3Rpb246c3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy5odG1sRm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhY3Rpb24nLGFjdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2V0Rm9ybURhdGEoZm9ybV9kYXRhOiBGb3JtRGF0YSk6IHRoaXMge1xuICAgIHRoaXMuZm9ybV9kYXRhID0gZm9ybV9kYXRhO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGdldE1ldGhvZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1ldGhvZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb3JtRGF0YSgpOiBGb3JtRGF0YSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtX2RhdGE7XG4gIH1cblxuICBwdWJsaWMgc2V0SW5wdXRIaWRkZW5JZChpbnB1dF9uYW1lOnN0cmluZyAsIGlucHV0X3ZhbHVlPzogbnVtYmVyKTogdGhpcyB7XG4gICAgXG4gICAgaWYoaW5wdXRfdmFsdWUgPiAwKXtcbiAgICAgIHRoaXMuc2V0SW5wdXRCeU5hbWUoaW5wdXRfbmFtZSwgaW5wdXRfdmFsdWUudG9TdHJpbmcoKSApO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmlucHV0X2hpZGRlbl9pZCA9IHtcbiAgICAgIG5hbWUgIDogaW5wdXRfbmFtZSxcbiAgICAgIHZhbHVlIDogaW5wdXRfdmFsdWUgfHwgMCxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGdldElucHV0SGlkZGVuSWQoKTogRm9ybUlucHV0VmFsdWUge1xuICAgIHJldHVybiB0aGlzLmlucHV0X2hpZGRlbl9pZDtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c0luKGlucHV0X25hbWU6c3RyaW5nKVxuICB7XG4gICAgY29uc3QgZWxlbTogSFRNTEVsZW1lbnQgPSB0aGlzLmh0bWxGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAke2lucHV0X25hbWV9YCk7XG4gICAgZWxlbS5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIHNldElucHV0QnlOYW1lKGlucHV0X25hbWU6c3RyaW5nLCBpbnB1dF92YWx1ZTpzdHJpbmcgKXtcbiAgICBjb25zdCByZXN1bHQ6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaW5wdXRfbmFtZSk7XG4gICAgaWYocmVzdWx0Lmxlbmd0aD09MSl7XG4gICAgICByZXN1bHRbMF0udmFsdWUgPSBpbnB1dF92YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNpZGFkZSBkZSBlbGVtZW50byBpbnB1dCcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBvblN1Ym1pdCggY2FsbGJhY2s6IChmb3JtRGF0YTogRm9ybURhdGEsZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB2b2lkICk6IHRoaXMge1xuICAgIFxuICAgIGNvbnN0ICRjb250ZXh0Rm9ybSA9IHRoaXM7XG5cbiAgICB0aGlzLmh0bWxGb3JtRWxlbWVudC5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZm9ybVRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICBjb25zdCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoZm9ybVRhcmdldCk7XG5cbiAgICAgICRjb250ZXh0Rm9ybS5zZXRGb3JtRGF0YShmb3JtX2RhdGEpO1xuICAgICAgXG4gICAgICBjYWxsYmFjayhmb3JtX2RhdGEsZm9ybVRhcmdldClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1JbnB1dFZhbHVlIHtcbiAgbmFtZTpzdHJpbmcsdmFsdWU/Om51bWJlclxufSIsImltcG9ydCB7IENvbnRyb2xsZXJQYWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbnRyb2xsZXItcGFnZSc7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2V2ZW50LW1hbmFnZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBcImpxdWVyeS1tYXNrLXBsdWdpblwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybUlucHV0VmFsdWUgfSBmcm9tICcuLi8uLi9fZm9ybXMvZm9ybSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuXG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYWdlIGV4dGVuZHMgQ29udHJvbGxlclBhZ2Uge1xuXG4gIC8qKlxuICAgKiBEZXBzXG4gICAqL1xuICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyOyBcbiAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlXG5cbiAgLyoqXG4gICAqIEZvcm1zXG4gICAqL1xuICBwcml2YXRlIGZvcm1CYXNpY0luZm9ybWF0aW9uOkZvcm07XG4gIHByaXZhdGUgZm9ybVJlZ2lzdHJhdGlvbk51bWJlcjpGb3JtO1xuXG4gIC8qKlxuICAgKiBGb3JtIFRva2VucyBJRHNcbiAgICovXG4gIHN0YXRpYyBib3hGb3JtQmFzaWNJbmZvcm1hdGlvblRva2VuSWQ6c3RyaW5nID0gJ2JveC1mb3JtLWJhc2ljLWluZm9ybWF0aW9uJztcbiAgc3RhdGljIGJveEZvcm1SZWdpc3RyYXRpb25OdW1iZXJUb2tlbklkOnN0cmluZyA9ICdib3gtZm9ybS1yZWdpc3RyYXRpb24tbnVtYmVyJztcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdCgpIFxuICB7XG5cbiAgICB0aGlzLmFwaVNlcnZpY2UgPSBuZXcgQXBpU2VydmljZSgpO1xuXG4gICAgdGhpcy5tYXNrcygpO1xuXG4gICAgLyoqXG4gICAgICogc3RhcnRlciBmbG93IGluc3RydWN0aW9uIGZvciBoYW5kbGUgXCJCYXNpYyBJbmZvcm1hdGlvblwiIEZvcm1cbiAgICAgKi9cbiAgICB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uQ29uc3RydWN0KCk7XG5cbiAgICAvKipcbiAgICAgKiBzdGFydGVyIGZsb3cgaW5zdHJ1Y3Rpb24gZm9yIGhhbmRsZSBcIlJlZ2lzdHJhdGlvbiBOdW1iZXJcIiBGb3JtXG4gICAgICovXG4gICAgIHRoaXMuZm9ybVJlZ2lzdHJhdGlvbk51bWJlckNvbnN0cnVjdCgpO1xuICBcbiAgfVxuXG4gIHByaXZhdGUgZm9ybUJhc2ljSW5mb3JtYXRpb25Db25zdHJ1Y3QoKTogdm9pZCBcbiAge1xuICAgIC8qKlxuICAgICAqIEJhc2ljIEluZm9ybWF0aW9uIEZvcm0gSW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uID0gbmV3IEZvcm0oQ3JlYXRlUGFnZS5ib3hGb3JtQmFzaWNJbmZvcm1hdGlvblRva2VuSWQpO1xuICAgIHRoaXMuZm9ybUJhc2ljSW5mb3JtYXRpb25cbiAgICAgIC5zZXRNZXRob2QoJ3Bvc3QnKVxuICAgICAgLnNldEFjdGlvbignL2FkbWluL2F0aXZvJylcbiAgICAgIC5vblN1Ym1pdCggKGZvcm1EYXRhOiBGb3JtRGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UucG9zdFRvSW50ZWxsZWN0dWFsQXNzZXRTdG9yZShmb3JtRGF0YSkudGhlbiggKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtQmFzaWNJbmZvcm1hdGlvbi5zZXRJbnB1dEhpZGRlbklkKCAnZGF0YVtpbnRlbGxlY3R1YWxfYXNzZXRzXVtpZF0nICwgcmVzcG9uc2UuaWQgKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgL2FkbWluL2F0aXZvLyR7cmVzcG9uc2UuaWR9L2VkaXRgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybVJlZ2lzdHJhdGlvbk51bWJlckNvbnN0cnVjdCgpOiB2b2lkIFxuICB7XG4gICAgLyoqXG4gICAgICogUmVnaXN0cmF0aW9uIE51bWJlciBGb3JtIEluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5mb3JtUmVnaXN0cmF0aW9uTnVtYmVyID0gbmV3IEZvcm0oQ3JlYXRlUGFnZS5ib3hGb3JtUmVnaXN0cmF0aW9uTnVtYmVyVG9rZW5JZCk7XG4gICAgdGhpcy5mb3JtUmVnaXN0cmF0aW9uTnVtYmVyXG4gICAgICAuc2V0TWV0aG9kKCdwb3N0JylcbiAgICAgIC5zZXRBY3Rpb24oJy9hZG1pbi9hdGl2bycpXG4gICAgICAub25TdWJtaXQoIChmb3JtRGF0YTogRm9ybURhdGEpID0+IHtcblxuICAgICAgICBjb25zdCBpbnB1dF9pZDogRm9ybUlucHV0VmFsdWUgPSB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLmdldElucHV0SGlkZGVuSWQoKSB8fCBudWxsO1xuXG4gICAgICAgIGlmKCFpbnB1dF9pZCl7XG4gICAgICAgICAgYWxlcnQoJ0Zvcm0gUmVnaXN0cmF0aW9uIE51bWJlciByZXF1aXJlZCEnKTtcbiAgICAgICAgICB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLmZvY3VzSW4oJyNub21lX2F0aXZvJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRlciBpbnB1dFtuYW1lXSBhbmQgaW5wdXRbdmFsdWVdIHRvIEZvcm0gZG8gdXBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICBmb3JtRGF0YS5zZXQoIGlucHV0X2lkLm5hbWUgLCBpbnB1dF9pZC52YWx1ZS50b1N0cmluZygpICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvc3QgZGF0YSB0byBhcGkgcGVyc2lzdGVyIFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3RUb0ludGVsbGVjdHVhbEFzc2V0U3RvcmUoZm9ybURhdGEpO1xuICAgICAgICBcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgaW5wdXQgbWFza3MgcGx1Z2luIGZvciB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBwcml2YXRlIG1hc2tzKCl7XG4gICAgJCgnLmNwZicpLm1hc2soJzAwMC4wMDAuMDAwLTAwJywge3JldmVyc2U6IHRydWV9KTtcbiAgICAkKCcuY25waicpLm1hc2soJzAwLjAwMC4wMDAvMDAwMC0wMCcpO1xuICB9XG5cbiAgcHVibGljIGh0dHBQb3N0KHVybDpzdHJpbmcsIGZvcm1fZGF0YTpGb3JtRGF0YSwgb3B0aW9ucz86e30pXG4gIHtcbiAgICBcbiAgICBjb25zdCBPUFRJT05TID0geyBcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAnWF9SRVFVRVNURURfV0lUSCc6IFwieG1saHR0cHJlcXVlc3RcIlxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsZm9ybV9kYXRhLE9QVElPTlMpLnRoZW4oIChyZXNwb25zZTphbnkpID0+IHtcblxuICAgICAgLyoqXG4gICAgICAqIEh0dHAgUmVzcG9uc2UgMjAwXG4gICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICogQXhpb3MgcmV0b3JuYSBoZWFkZXJzLCBzdGF0dXMgY29kZSBhbmQgZGF0YSh3aXRoIF9ib2R5IHNlcnZlciBkYXRhKVxuICAgICAgKi9cbiAgICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIC8qKlxuICAgICAgKiBNb2RhbCBBbGVydFxuICAgICAgKi9cbiAgICAgIGFsZXJ0KGRhdGFSZXNwb25zZS5tc2cpOyAvLyByZXNwb25zZSBkZWZhdWx0IGZyb20gc2VydmVyXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgZXJyb3IuIFByZXZlbnQgZmxvdyBvZiBleGVjdXRpb25cbiAgICAgICAqL1xuICAgICAgbGV0IGVycm9yID0gZGF0YVJlc3BvbnNlLmVycm9yIHx8IGZhbHNlO1xuICAgICAgaWYoZXJyb3Ipe1xuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gZGV0YWlsZWQgZXJyb3JcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFSZXNwb25zZTtcblxuICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+eyBcbiAgICAgIC8qKlxuICAgICAgKiBIVFRQIDQwMCB0byA1MDAgcmVzcG9uc2UgZXJyb3JzXG4gICAgICAqL1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuIFxuICB9XG4gIFxufSIsIi8qKlxyXG4gKiBodHRwIGRlcGVuZGVuY3lcclxuICovXHJcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zU3RhdGljIH0gZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cENsaWVudFJlcXVlc3Qge1xyXG5cclxuICAvLyBwcm90ZWN0ZWQgc2VydmVyVXJpOiBzdHJpbmcgPSAnaHR0cDovL2lub3Z1ZXJqLnNyMi51ZXJqLmJyL2Rlc2Vudm9sdmltZW50by9zZWN0aSc7XHJcbiAgc2VydmVyVXJpOnN0cmluZyA9IFwiaHR0cDovLzEyNy4wLjAuMVwiO1xyXG4gIHByb3RlY3RlZCBhcGlVcmlWZXJzaW9uOiBzdHJpbmcgPSAnYXBpL3YxJztcclxuICBwcml2YXRlIGh0dHA6QXhpb3NJbnN0YW5jZTtcclxuICBcclxuXHJcbiAgcHVibGljIGh0dHBPcHRpb25zOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICBoZWFkZXJzOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmh0dHAgPSBheGlvcztcclxuICAgIHRoaXMuaW5pdEh0dHBPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgSHR0cE9wdGlvbnMgZm9ybmVjaWRvIGFvIGh0dHBDbGllbnQoZ2V0LHBvc3QscHV0IGUgZXRjKVxyXG4gICAqXHJcbiAgICogIC0gSHR0cEhlYWRlcnNcclxuICAgKiAgVGhlIGluc3RhbmNlcyBvZiB0aGUgbmV3IEh0dHBIZWFkZXIgY2xhc3MgYXJlIGltbXV0YWJsZSBvYmplY3RzLlxyXG4gICAqICBJbnZva2luZyBjbGFzcyBtZXRob2RzIHdpbGwgcmV0dXJuIGEgbmV3IGluc3RhbmNlIGFzIHJlc3VsdC5cclxuICAgKiAgU28gYmFzaWNhbGx5LCB5b3UgbmVlZCB0byBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAqL1xyXG4gIHByaXZhdGUgaW5pdEh0dHBPcHRpb25zKCkge1xyXG5cclxuICAgIC8vIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgLy8gICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgLy8gICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXHJcbiAgICAvLyAgICdYX1JFUVVFU1RFRF9XSVRIJzogXCJ4bWxodHRwcmVxdWVzdFwiXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBsZXQgaGVhZGVycyA9IHtcclxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICAnWF9SRVFVRVNURURfV0lUSCc6IFwieG1saHR0cHJlcXVlc3RcIlxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlYWRlcnNcclxuICAgICAqL1xyXG4gICAgdGhpcy5odHRwT3B0aW9ucy5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyYXBwZXIgZG8gbWV0b2RvIEdFVCh2ZXJibyBodHRwKSBjYXB0dXJhbmRvIG8gZW5kcG9pbnQgY29tcGxldG9cclxuICAgKiBAcGFyYW0gZW5kcG9pbnRcclxuICAgKi9cclxuICBnZXQoZW5kcG9pbnQ6c3RyaW5nLCBwYXJhbXM/OkZvcm1EYXRhLCBodHRwT3B0aW9ucz86e30pOiBQcm9taXNlPGFueT57XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZW5kcG9pbnQsdGhpcy5odHRwT3B0aW9ucykudGhlbiggKHJlc3BvbnNlOmFueSkgPT4ge1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICogSHR0cCBSZXNwb25zZSAyMDBcclxuICAgICAgKi9cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAqIEF4aW9zIHJldG9ybmEgaGVhZGVycywgc3RhdHVzIGNvZGUgYW5kIGRhdGEod2l0aCBfYm9keSBzZXJ2ZXIgZGF0YSlcclxuICAgICAgKi9cclxuICAgICAgY29uc3QgZGF0YVJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAqIE1vZGFsIEFsZXJ0XHJcbiAgICAgICovXHJcbiAgICAgIGFsZXJ0KGRhdGFSZXNwb25zZS5tc2cpOyAvLyByZXNwb25zZSBkZWZhdWx0IGZyb20gc2VydmVyXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQ2hlY2sgZXJyb3IuIFByZXZlbnQgZmxvdyBvZiBleGVjdXRpb25cclxuICAgICAgICovXHJcbiAgICAgIGxldCBlcnJvciA9IGRhdGFSZXNwb25zZS5lcnJvciB8fCBmYWxzZTtcclxuICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIHRocm93IGVycm9yOyAvLyBkZXRhaWxlZCBlcnJvclxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YVJlc3BvbnNlO1xyXG5cclxuICAgICAgXHJcblxyXG4gICAgfSkuY2F0Y2goIChlcnJvcikgPT57IFxyXG4gICAgICAvKipcclxuICAgICAgKiBIVFRQIDQwMCB0byA1MDAgcmVzcG9uc2UgZXJyb3JzXHJcbiAgICAgICovXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG4gXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcmFwcGVyIGRvIG1ldG9kbyBQT1NUKHZlcmJvIGh0dHApIGNhcHR1cmFuZG8gbyBlbmRwb2ludCBjb21wbGV0b1xyXG4gICAqIEBwYXJhbSBlbmRwb2ludFxyXG4gICAqIEBwYXJhbSBwYXJhbXNcclxuICAgKiBAcGFyYW0gaHR0cE9wdGlvbnNcclxuICAgKi9cclxuICBwb3N0KGVuZHBvaW50OnN0cmluZywgcGFyYW1zOkZvcm1EYXRhLCBodHRwT3B0aW9ucz86e30pOiBQcm9taXNlPGFueT57XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oaHR0cE9wdGlvbnMsdGhpcy5odHRwT3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGVuZHBvaW50LHBhcmFtcyxvcHRpb25zKS50aGVuKCAocmVzcG9uc2U6YW55KSA9PiB7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgKiBIdHRwIFJlc3BvbnNlIDIwMFxyXG4gICAgICAqL1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICogQXhpb3MgcmV0b3JuYSBoZWFkZXJzLCBzdGF0dXMgY29kZSBhbmQgZGF0YSh3aXRoIF9ib2R5IHNlcnZlciBkYXRhKVxyXG4gICAgICAqL1xyXG4gICAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICogTW9kYWwgQWxlcnRcclxuICAgICAgKi9cclxuICAgICAgYWxlcnQoZGF0YVJlc3BvbnNlLm1zZyk7IC8vIHJlc3BvbnNlIGRlZmF1bHQgZnJvbSBzZXJ2ZXJcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDaGVjayBlcnJvci4gUHJldmVudCBmbG93IG9mIGV4ZWN1dGlvblxyXG4gICAgICAgKi9cclxuICAgICAgbGV0IGVycm9yID0gZGF0YVJlc3BvbnNlLmVycm9yIHx8IGZhbHNlO1xyXG4gICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7IC8vIGRldGFpbGVkIGVycm9yXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBkYXRhUmVzcG9uc2U7XHJcblxyXG4gICAgfSkuY2F0Y2goIChlcnJvcikgPT57IFxyXG4gICAgICAvKipcclxuICAgICAgKiBIVFRQIDQwMCB0byA1MDAgcmVzcG9uc2UgZXJyb3JzXHJcbiAgICAgICovXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG4gXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuZHBvaW50KHVybDogc3RyaW5nLCBwYXJhbXM/OiBBcnJheTxhbnk+KTogc3RyaW5nIHtcclxuXHJcbiAgICBsZXQgdXJpUGFyYW0gPSAnJztcclxuXHJcbiAgICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdXJpUGFyYW0gPSAnLycgKyBwYXJhbXMuam9pbignLycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHt0aGlzLnNlcnZlclVyaSArICcvJyArIHRoaXMuYXBpVXJpVmVyc2lvbiArICcvJyArIHVybCArIHVyaVBhcmFtfWA7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRva2VuQmVhcmVyKHRva2VuOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaHR0cE9wdGlvbnMuaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7dG9rZW59YCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwT3B0aW9ucztcclxuICB9XHJcblxyXG59XHJcblxyXG5pbnRlcmZhY2UgSHR0cE9wdGlvbnMge1xyXG5cclxuICBoZWFkZXJzPzoge30gOyAvLyBIZWFkZXJzXHJcblxyXG4gIHBhcmFtcz86IHt9O1xyXG5cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7SHR0cENsaWVudFJlcXVlc3R9IGZyb20gJy4vYWJzdHJhY3QvaHR0cC1jbGllbnQtcmVxdWVzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSBleHRlbmRzIEh0dHBDbGllbnRSZXF1ZXN0IHtcclxuXHJcbiAgcHJpdmF0ZSBfaXA6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKipcclxuICAgICAqIERlcGVuZGVuY3kgSW5qZWN0aW9uIEJhc2UgQ29uc3RydXRvclxyXG4gICAgICovXHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBcclxuICBwb3N0VG9JbnRlbGxlY3R1YWxBc3NldFN0b3JlKGZvcm1fZGF0YTogRm9ybURhdGEpOiBQcm9taXNlPGFueT57XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGluZyBkYXRhIHBvc3QgdG8gc2VydmVyXHJcbiAgICAgKi9cclxuICAgIGxldCBmb3JtX2RhdGFfaWQ6bnVtYmVyID0gTnVtYmVyKCBmb3JtX2RhdGEuZ2V0KCdkYXRhW2ludGVsbGVjdHVhbF9hc3NldHNdW2lkXScpICk7XHJcblxyXG4gICAgZm9ybV9kYXRhLnNldCgnX2FqYXgnLCd0cnVlJyk7XHJcblxyXG4gICAgIC8qKlxyXG4gICAgICogVVJMcyB3aXRoIGVuZHBvaW50cyBmb3IgcG9zdC91cGRhdGVcclxuICAgICAqL1xyXG4gICAgIGxldCBmb3JtX2FjdGlvbl91cmwgID0gKGZvcm1fZGF0YV9pZCA9PSAwKSA/ICcvYWRtaW4vYXRpdm8nIDogYC9hZG1pbi9hdGl2by8ke2Zvcm1fZGF0YV9pZH0vZWRpdGA7XHJcblxyXG4gICAgIHJldHVybiB0aGlzLnBvc3QoZm9ybV9hY3Rpb25fdXJsLGZvcm1fZGF0YSx7fSkudGhlbiggKHJlc3BvbnNlOmFueSkgPT4ge1xyXG5cclxuICAgICAgIC8qKlxyXG4gICAgICAgKiBDYXB0dXJlIGRhdGEgZnJvbSB0aGUgQVBJIHNlcnZlclxyXG4gICAgICAgKi9cclxuICAgICAgIGNvbnN0IGludGVsbGVjdHVhbF9hc3NldCA9IHJlc3BvbnNlLl9ib2R5O1xyXG5cclxuICAgICAgIHJldHVybiBpbnRlbGxlY3R1YWxfYXNzZXQ7XHJcblxyXG4gICAgIH0pO1xyXG5cclxuICB9XHJcbiAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
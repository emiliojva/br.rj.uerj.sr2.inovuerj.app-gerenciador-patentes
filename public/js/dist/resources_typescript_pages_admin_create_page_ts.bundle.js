(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages_admin_create_page_ts"],{

/***/ "./resources/typescript/pages/admin/create.page.ts":
/*!*********************************************************!*\
  !*** ./resources/typescript/pages/admin/create.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePage": () => (/* binding */ CreatePage)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../models/controller-page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js?e91c");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../_forms/form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../services/api.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
        this.apiService = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../services/api.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
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
        this.formBasicInformation = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../_forms/form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(CreatePage.boxFormBasicInformationTokenId);
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
        this.formRegistrationNumber = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../_forms/form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(CreatePage.boxFormRegistrationNumberTokenId);
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
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../models/controller-page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9hZG1pbi9jcmVhdGUucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBR3ZDO0FBQ0U7QUFDQTtBQUM2QjtBQUNFO0FBRzNEO0lBQWdDLDhCQUFjO0lBb0I1QztlQUNHLGlCQUFPO0lBQ1YsQ0FBQztJQUVTLHlCQUFJLEdBQWQ7UUFHRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNEpBQVUsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViOztXQUVHO1FBQ0gsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFFckM7O1dBRUc7UUFDRixJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRU8sa0RBQTZCLEdBQXJDO1FBQUEsaUJBZUM7UUFiQzs7V0FFRztRQUNILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLGdKQUFJLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLG9CQUFvQjthQUN0QixTQUFTLENBQUMsTUFBTSxDQUFDO2FBQ2pCLFNBQVMsQ0FBQyxjQUFjLENBQUM7YUFDekIsUUFBUSxDQUFFLFVBQUMsUUFBa0I7WUFDNUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQyxRQUFRO2dCQUNwRSxLQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUUsK0JBQStCLEVBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO2dCQUM1RixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBZ0IsUUFBUSxDQUFDLEVBQUUsVUFBTyxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxvREFBK0IsR0FBdkM7UUFBQSxpQkE4QkM7UUE1QkM7O1dBRUc7UUFDSCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxnSkFBSSxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxzQkFBc0I7YUFDeEIsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUNqQixTQUFTLENBQUMsY0FBYyxDQUFDO2FBQ3pCLFFBQVEsQ0FBRSxVQUFDLFFBQWtCO1lBRTVCLElBQU0sUUFBUSxHQUFtQixLQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUM7WUFFdEYsSUFBRyxDQUFDLFFBQVEsRUFBQztnQkFDWCxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztnQkFDNUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakQsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVEOztlQUVHO1lBQ0gsUUFBUSxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsSUFBSSxFQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQztZQUUxRDs7ZUFFRztZQUNILEtBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSywwQkFBSyxHQUFiO1FBQ0UsbUNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNsRCxtQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSw2QkFBUSxHQUFmLFVBQWdCLEdBQVUsRUFBRSxTQUFrQixFQUFFLE9BQVc7UUFHekQsSUFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsY0FBYyxFQUFFLGdDQUFnQztnQkFDaEQsa0JBQWtCLEVBQUUsZ0JBQWdCO2FBQ3JDO1NBQ0YsQ0FBQztRQUVGLE9BQU8saURBQVUsQ0FBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBRSxVQUFDLFFBQVk7WUFFMUQ7O2NBRUU7WUFFRjs7Y0FFRTtZQUNGLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFbkM7O2NBRUU7WUFDRixLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsK0JBQStCO1lBRXhEOztlQUVHO1lBQ0gsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDeEMsSUFBRyxLQUFLLEVBQUM7Z0JBQ1AsTUFBTSxLQUFLLENBQUMsQ0FBQyxpQkFBaUI7YUFDL0I7WUFFRCxPQUFPLFlBQVksQ0FBQztRQUV0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsVUFBQyxLQUFLO1lBQ2Q7O2NBRUU7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQWxJRDs7T0FFRztJQUNJLHlDQUE4QixHQUFVLDRCQUE0QixDQUFDO0lBQ3JFLDJDQUFnQyxHQUFVLDhCQUE4QixDQUFDO0lBZ0lsRixpQkFBQztDQUFBLENBbEorQiw4SkFBYyxHQWtKN0M7QUFsSnNCIiwiZmlsZSI6InJlc291cmNlc190eXBlc2NyaXB0X3BhZ2VzX2FkbWluX2NyZWF0ZV9wYWdlX3RzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXJQYWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbnRyb2xsZXItcGFnZSc7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2V2ZW50LW1hbmFnZXInO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBcImpxdWVyeS1tYXNrLXBsdWdpblwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybUlucHV0VmFsdWUgfSBmcm9tICcuLi8uLi9fZm9ybXMvZm9ybSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuXG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVQYWdlIGV4dGVuZHMgQ29udHJvbGxlclBhZ2Uge1xuXG4gIC8qKlxuICAgKiBEZXBzXG4gICAqL1xuICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyOyBcbiAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlXG5cbiAgLyoqXG4gICAqIEZvcm1zXG4gICAqL1xuICBwcml2YXRlIGZvcm1CYXNpY0luZm9ybWF0aW9uOkZvcm07XG4gIHByaXZhdGUgZm9ybVJlZ2lzdHJhdGlvbk51bWJlcjpGb3JtO1xuXG4gIC8qKlxuICAgKiBGb3JtIFRva2VucyBJRHNcbiAgICovXG4gIHN0YXRpYyBib3hGb3JtQmFzaWNJbmZvcm1hdGlvblRva2VuSWQ6c3RyaW5nID0gJ2JveC1mb3JtLWJhc2ljLWluZm9ybWF0aW9uJztcbiAgc3RhdGljIGJveEZvcm1SZWdpc3RyYXRpb25OdW1iZXJUb2tlbklkOnN0cmluZyA9ICdib3gtZm9ybS1yZWdpc3RyYXRpb24tbnVtYmVyJztcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdCgpIFxuICB7XG5cbiAgICB0aGlzLmFwaVNlcnZpY2UgPSBuZXcgQXBpU2VydmljZSgpO1xuXG4gICAgdGhpcy5tYXNrcygpO1xuXG4gICAgLyoqXG4gICAgICogc3RhcnRlciBmbG93IGluc3RydWN0aW9uIGZvciBoYW5kbGUgXCJCYXNpYyBJbmZvcm1hdGlvblwiIEZvcm1cbiAgICAgKi9cbiAgICB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uQ29uc3RydWN0KCk7XG5cbiAgICAvKipcbiAgICAgKiBzdGFydGVyIGZsb3cgaW5zdHJ1Y3Rpb24gZm9yIGhhbmRsZSBcIlJlZ2lzdHJhdGlvbiBOdW1iZXJcIiBGb3JtXG4gICAgICovXG4gICAgIHRoaXMuZm9ybVJlZ2lzdHJhdGlvbk51bWJlckNvbnN0cnVjdCgpO1xuICBcbiAgfVxuXG4gIHByaXZhdGUgZm9ybUJhc2ljSW5mb3JtYXRpb25Db25zdHJ1Y3QoKTogdm9pZCBcbiAge1xuICAgIC8qKlxuICAgICAqIEJhc2ljIEluZm9ybWF0aW9uIEZvcm0gSW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uID0gbmV3IEZvcm0oQ3JlYXRlUGFnZS5ib3hGb3JtQmFzaWNJbmZvcm1hdGlvblRva2VuSWQpO1xuICAgIHRoaXMuZm9ybUJhc2ljSW5mb3JtYXRpb25cbiAgICAgIC5zZXRNZXRob2QoJ3Bvc3QnKVxuICAgICAgLnNldEFjdGlvbignL2FkbWluL2F0aXZvJylcbiAgICAgIC5vblN1Ym1pdCggKGZvcm1EYXRhOiBGb3JtRGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UucG9zdFRvSW50ZWxsZWN0dWFsQXNzZXRTdG9yZShmb3JtRGF0YSkudGhlbiggKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtQmFzaWNJbmZvcm1hdGlvbi5zZXRJbnB1dEhpZGRlbklkKCAnZGF0YVtpbnRlbGxlY3R1YWxfYXNzZXRzXVtpZF0nICwgcmVzcG9uc2UuaWQgKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgL2FkbWluL2F0aXZvLyR7cmVzcG9uc2UuaWR9L2VkaXRgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybVJlZ2lzdHJhdGlvbk51bWJlckNvbnN0cnVjdCgpOiB2b2lkIFxuICB7XG4gICAgLyoqXG4gICAgICogUmVnaXN0cmF0aW9uIE51bWJlciBGb3JtIEluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5mb3JtUmVnaXN0cmF0aW9uTnVtYmVyID0gbmV3IEZvcm0oQ3JlYXRlUGFnZS5ib3hGb3JtUmVnaXN0cmF0aW9uTnVtYmVyVG9rZW5JZCk7XG4gICAgdGhpcy5mb3JtUmVnaXN0cmF0aW9uTnVtYmVyXG4gICAgICAuc2V0TWV0aG9kKCdwb3N0JylcbiAgICAgIC5zZXRBY3Rpb24oJy9hZG1pbi9hdGl2bycpXG4gICAgICAub25TdWJtaXQoIChmb3JtRGF0YTogRm9ybURhdGEpID0+IHtcblxuICAgICAgICBjb25zdCBpbnB1dF9pZDogRm9ybUlucHV0VmFsdWUgPSB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLmdldElucHV0SGlkZGVuSWQoKSB8fCBudWxsO1xuXG4gICAgICAgIGlmKCFpbnB1dF9pZCl7XG4gICAgICAgICAgYWxlcnQoJ0Zvcm0gUmVnaXN0cmF0aW9uIE51bWJlciByZXF1aXJlZCEnKTtcbiAgICAgICAgICB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLmZvY3VzSW4oJyNub21lX2F0aXZvJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRlciBpbnB1dFtuYW1lXSBhbmQgaW5wdXRbdmFsdWVdIHRvIEZvcm0gZG8gdXBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICBmb3JtRGF0YS5zZXQoIGlucHV0X2lkLm5hbWUgLCBpbnB1dF9pZC52YWx1ZS50b1N0cmluZygpICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvc3QgZGF0YSB0byBhcGkgcGVyc2lzdGVyIFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3RUb0ludGVsbGVjdHVhbEFzc2V0U3RvcmUoZm9ybURhdGEpO1xuICAgICAgICBcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgaW5wdXQgbWFza3MgcGx1Z2luIGZvciB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBwcml2YXRlIG1hc2tzKCl7XG4gICAgJCgnLmNwZicpLm1hc2soJzAwMC4wMDAuMDAwLTAwJywge3JldmVyc2U6IHRydWV9KTtcbiAgICAkKCcuY25waicpLm1hc2soJzAwLjAwMC4wMDAvMDAwMC0wMCcpO1xuICB9XG5cbiAgcHVibGljIGh0dHBQb3N0KHVybDpzdHJpbmcsIGZvcm1fZGF0YTpGb3JtRGF0YSwgb3B0aW9ucz86e30pXG4gIHtcbiAgICBcbiAgICBjb25zdCBPUFRJT05TID0geyBcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAnWF9SRVFVRVNURURfV0lUSCc6IFwieG1saHR0cHJlcXVlc3RcIlxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsZm9ybV9kYXRhLE9QVElPTlMpLnRoZW4oIChyZXNwb25zZTphbnkpID0+IHtcblxuICAgICAgLyoqXG4gICAgICAqIEh0dHAgUmVzcG9uc2UgMjAwXG4gICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICogQXhpb3MgcmV0b3JuYSBoZWFkZXJzLCBzdGF0dXMgY29kZSBhbmQgZGF0YSh3aXRoIF9ib2R5IHNlcnZlciBkYXRhKVxuICAgICAgKi9cbiAgICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIC8qKlxuICAgICAgKiBNb2RhbCBBbGVydFxuICAgICAgKi9cbiAgICAgIGFsZXJ0KGRhdGFSZXNwb25zZS5tc2cpOyAvLyByZXNwb25zZSBkZWZhdWx0IGZyb20gc2VydmVyXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgZXJyb3IuIFByZXZlbnQgZmxvdyBvZiBleGVjdXRpb25cbiAgICAgICAqL1xuICAgICAgbGV0IGVycm9yID0gZGF0YVJlc3BvbnNlLmVycm9yIHx8IGZhbHNlO1xuICAgICAgaWYoZXJyb3Ipe1xuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gZGV0YWlsZWQgZXJyb3JcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFSZXNwb25zZTtcblxuICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+eyBcbiAgICAgIC8qKlxuICAgICAgKiBIVFRQIDQwMCB0byA1MDAgcmVzcG9uc2UgZXJyb3JzXG4gICAgICAqL1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuIFxuICB9XG4gIFxufSJdLCJzb3VyY2VSb290IjoiIn0=
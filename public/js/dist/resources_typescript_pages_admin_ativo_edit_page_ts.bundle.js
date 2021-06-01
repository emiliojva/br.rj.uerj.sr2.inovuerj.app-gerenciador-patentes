(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages_admin_ativo_edit_page_ts"],{

/***/ "./resources/typescript/pages/admin/ativo/edit.page.ts":
/*!*************************************************************!*\
  !*** ./resources/typescript/pages/admin/ativo/edit.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPage": () => (/* binding */ EditPage)
/* harmony export */ });
/* harmony import */ var _models_controller_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/controller-page */ "./resources/typescript/models/controller-page.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _forms_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_forms/form */ "./resources/typescript/pages/_forms/form.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api.service */ "./resources/typescript/services/api.service.ts");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
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






// You can specify which plugins you need

var EditPage = /** @class */ (function (_super) {
    __extends(EditPage, _super);
    function EditPage() {
        return _super.call(this) || this;
    }
    /**
     * Start Flow
     */
    EditPage.prototype.init = function () {
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
        /**
         * starter flow instruction for handle "Registration Number" Form
         */
        this.formAuthorConstruct();
    };
    EditPage.prototype.formBasicInformationConstruct = function () {
        var _this = this;
        /**
         * Basic Information Form Instance
         */
        this.formBasicInformation = new _forms_form__WEBPACK_IMPORTED_MODULE_4__.Form(EditPage.boxFormBasicInformationTokenId);
        this.formBasicInformation
            .setInputHiddenId(EditPage.formIdToken) // if not passed value will try get value from form filled
            .setMethod('post')
            .setAction('/admin/ativo') //  post to URL localhost/admin/ativo
            .onSubmit(function (formData) {
            _this.apiService.postToIntellectualAssetStore(formData).then(function (response) {
                /***
                 * Set id only create Form
                 */
                if (!_this.formBasicInformation.getInputHiddenId().value) {
                    _this.formBasicInformation.setInputHiddenId('data[intellectual_assets][id]', response.id);
                    window.location.replace("/admin/ativo/" + response.id + "/edit");
                }
            });
        });
    };
    EditPage.prototype.formRegistrationNumberConstruct = function () {
        var _this = this;
        /**
         * Registration Number Form Instance
         */
        this.formRegistrationNumber = new _forms_form__WEBPACK_IMPORTED_MODULE_4__.Form(EditPage.boxFormRegistrationNumberTokenId);
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
    EditPage.prototype.formAuthorConstruct = function () {
        var _this = this;
        var modal = document.querySelector("#" + EditPage.boxFormAuthorModalTokenId);
        /**
         * Registration Number Form Instance
         */
        this.formAuthor = new _forms_form__WEBPACK_IMPORTED_MODULE_4__.Form(EditPage.boxFormAuthorModalTokenId);
        /**
         * capture asset_id of formBasicInformation
         */
        var asset_id = this.formBasicInformation.getInputHiddenId().value;
        this.formAuthor
            .setMethod('post')
            .setAction("/admin/ativo/" + asset_id + "/author")
            .onSubmit(function (formData) {
            var input_id = _this.formBasicInformation.getInputHiddenId() || null;
            if (!input_id) {
                alert('Form Registration Number required!');
                _this.formBasicInformation.focusIn('#nome_ativo');
                return false;
            }
            /**
             * Post data to api persister
             */
            _this.apiService.postToIntellectualAssetAuthorStore(asset_id, _this.formAuthor).then(function (result) {
                console.log(result);
                /**
                 * hide modal
                 */
                jquery__WEBPACK_IMPORTED_MODULE_2__(modal).modal('hide');
            });
        });
        this.modalAttachButtonSave(modal, this.formAuthor);
    };
    /**
     * Attatch button save into Modal Form.
     * To fix submit form modal bootstrap
     * @param modal
     * @param formDom
     */
    EditPage.prototype.modalAttachButtonSave = function (modal, formDom) {
        /**
         * Fetch button save into modal-footer
         */
        var button_save = modal.querySelector('.button-save');
        /**
         * Dynamic creation of the button[class='button-modal-save'] to fire submit form
         */
        var button = document.createElement('button');
        button.setAttribute('class', 'menu button-modal-save');
        button.style.display = 'none';
        /**
         * Insert button node into Modal Form
         */
        formDom.element.append(button);
        /**
         * On Click button in footer, fires hidden button[class='button-modal-save']
         */
        button_save.onclick = function (e) {
            button.click();
        };
    };
    /**
     * Initialize input masks plugin for the current page
     */
    EditPage.prototype.masks = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.cpf').mask('000.000.000-00', { reverse: true });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.cnpj').mask('00.000.000/0000-00');
    };
    EditPage.prototype.httpPost = function (url, form_data, options) {
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
    EditPage.boxFormBasicInformationTokenId = 'box-form-basic-information';
    EditPage.boxFormRegistrationNumberTokenId = 'box-form-registration-number';
    EditPage.boxFormAuthorTokenId = 'box-form-author';
    EditPage.boxFormAuthorModalTokenId = 'box-form-author-modal';
    EditPage.boxFormAuthorAttatchTokenId = 'box-form-author-attatch-modal';
    EditPage.formIdToken = 'data[intellectual_assets][id]';
    return EditPage;
}(_models_controller_page__WEBPACK_IMPORTED_MODULE_0__.ControllerPage));



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9hZG1pbi9hdGl2by9lZGl0LnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFHdkM7QUFDRTtBQUNBO0FBQzZCO0FBQ0U7QUFFM0QseUNBQXlDO0FBQ3RCO0FBR25CO0lBQThCLDRCQUFjO0lBeUIxQztlQUNHLGlCQUFPO0lBQ1YsQ0FBQztJQUVEOztPQUVHO0lBQ08sdUJBQUksR0FBZDtRQUdFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSw2REFBVSxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWI7O1dBRUc7UUFDSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztRQUVyQzs7V0FFRztRQUNGLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO1FBRXhDOztXQUVHO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFFOUIsQ0FBQztJQUVPLGdEQUE2QixHQUFyQztRQUFBLGlCQXlCQztRQXZCQzs7V0FFRztRQUNILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLDZDQUFJLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFHOUUsSUFBSSxDQUFDLG9CQUFvQjthQUN0QixnQkFBZ0IsQ0FBRSxRQUFRLENBQUMsV0FBVyxDQUFFLENBQUMsMERBQTBEO2FBQ25HLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDakIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLHFDQUFxQzthQUMvRCxRQUFRLENBQUUsVUFBQyxRQUFrQjtZQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBRSxVQUFDLFFBQVE7Z0JBRXBFOzttQkFFRztnQkFDSCxJQUFH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O1lBQ0YsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUVuQzs7Y0FFRTtZQUNGLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywrQkFBK0I7WUFFeEQ7O2VBRUc7WUFDSCxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUN4QyxJQUFHLEtBQUssRUFBQztnQkFDUCxNQUFNLEtBQUssQ0FBQyxDQUFDLGlCQUFpQjthQUMvQjtZQUVELE9BQU8sWUFBWSxDQUFDO1FBRXRCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxVQUFDLEtBQUs7WUFDZDs7Y0FFRTtZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBeE9EOztPQUVHO0lBQ0ksdUNBQThCLEdBQVUsNEJBQTRCLENBQUM7SUFDckUseUNBQWdDLEdBQVUsOEJBQThCLENBQUM7SUFDekUsNkJBQW9CLEdBQVUsaUJBQWlCLENBQUM7SUFDaEQsa0NBQXlCLEdBQVUsdUJBQXVCLENBQUM7SUFDM0Qsb0NBQTJCLEdBQVUsK0JBQStCLENBQUM7SUFDckUsb0JBQVcsR0FBVSwrQkFBK0IsQ0FBQztJQWtPOUQsZUFBQztDQUFBLENBelA2QixtRUFBYyxHQXlQM0M7QUF6UG9CIiwiZmlsZSI6InJlc291cmNlc190eXBlc2NyaXB0X3BhZ2VzX2FkbWluX2F0aXZvX2VkaXRfcGFnZV90cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyUGFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jb250cm9sbGVyLXBhZ2UnO1xuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9ldmVudC1tYW5hZ2VyJztcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgXCJqcXVlcnktbWFzay1wbHVnaW5cIjtcbmltcG9ydCB7IEZvcm0sIEZvcm1JbnB1dFZhbHVlIH0gZnJvbSAnLi4vLi4vX2Zvcm1zL2Zvcm0nO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcblxuLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIHBsdWdpbnMgeW91IG5lZWRcbmltcG9ydCAnYm9vdHN0cmFwJztcblxuXG5leHBvcnQgY2xhc3MgRWRpdFBhZ2UgZXh0ZW5kcyBDb250cm9sbGVyUGFnZSB7XG5cbiAgLyoqXG4gICAqIERlcHNcbiAgICovXG4gIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXI7IFxuICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2VcblxuICAvKipcbiAgICogRm9ybXNcbiAgICovXG4gIHByaXZhdGUgZm9ybUJhc2ljSW5mb3JtYXRpb246Rm9ybTtcbiAgcHJpdmF0ZSBmb3JtUmVnaXN0cmF0aW9uTnVtYmVyOkZvcm07XG4gIHByaXZhdGUgZm9ybUF1dGhvcjpGb3JtO1xuXG4gIC8qKlxuICAgKiBGb3JtIFRva2VucyBJRHNcbiAgICovXG4gIHN0YXRpYyBib3hGb3JtQmFzaWNJbmZvcm1hdGlvblRva2VuSWQ6c3RyaW5nID0gJ2JveC1mb3JtLWJhc2ljLWluZm9ybWF0aW9uJztcbiAgc3RhdGljIGJveEZvcm1SZWdpc3RyYXRpb25OdW1iZXJUb2tlbklkOnN0cmluZyA9ICdib3gtZm9ybS1yZWdpc3RyYXRpb24tbnVtYmVyJztcbiAgc3RhdGljIGJveEZvcm1BdXRob3JUb2tlbklkOnN0cmluZyA9ICdib3gtZm9ybS1hdXRob3InO1xuICBzdGF0aWMgYm94Rm9ybUF1dGhvck1vZGFsVG9rZW5JZDpzdHJpbmcgPSAnYm94LWZvcm0tYXV0aG9yLW1vZGFsJztcbiAgc3RhdGljIGJveEZvcm1BdXRob3JBdHRhdGNoVG9rZW5JZDpzdHJpbmcgPSAnYm94LWZvcm0tYXV0aG9yLWF0dGF0Y2gtbW9kYWwnO1xuICBzdGF0aWMgZm9ybUlkVG9rZW46c3RyaW5nID0gJ2RhdGFbaW50ZWxsZWN0dWFsX2Fzc2V0c11baWRdJztcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgRmxvd1xuICAgKi9cbiAgcHJvdGVjdGVkIGluaXQoKSBcbiAge1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlID0gbmV3IEFwaVNlcnZpY2UoKTtcblxuICAgIHRoaXMubWFza3MoKTtcblxuICAgIC8qKlxuICAgICAqIHN0YXJ0ZXIgZmxvdyBpbnN0cnVjdGlvbiBmb3IgaGFuZGxlIFwiQmFzaWMgSW5mb3JtYXRpb25cIiBGb3JtXG4gICAgICovXG4gICAgdGhpcy5mb3JtQmFzaWNJbmZvcm1hdGlvbkNvbnN0cnVjdCgpO1xuXG4gICAgLyoqXG4gICAgICogc3RhcnRlciBmbG93IGluc3RydWN0aW9uIGZvciBoYW5kbGUgXCJSZWdpc3RyYXRpb24gTnVtYmVyXCIgRm9ybVxuICAgICAqL1xuICAgICB0aGlzLmZvcm1SZWdpc3RyYXRpb25OdW1iZXJDb25zdHJ1Y3QoKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBzdGFydGVyIGZsb3cgaW5zdHJ1Y3Rpb24gZm9yIGhhbmRsZSBcIlJlZ2lzdHJhdGlvbiBOdW1iZXJcIiBGb3JtXG4gICAgICovXG4gICAgIHRoaXMuZm9ybUF1dGhvckNvbnN0cnVjdCgpO1xuXG4gIH1cblxuICBwcml2YXRlIGZvcm1CYXNpY0luZm9ybWF0aW9uQ29uc3RydWN0KCk6IHZvaWQgXG4gIHtcbiAgICAvKipcbiAgICAgKiBCYXNpYyBJbmZvcm1hdGlvbiBGb3JtIEluc3RhbmNlXG4gICAgICovXG4gICAgdGhpcy5mb3JtQmFzaWNJbmZvcm1hdGlvbiA9IG5ldyBGb3JtKEVkaXRQYWdlLmJveEZvcm1CYXNpY0luZm9ybWF0aW9uVG9rZW5JZCk7XG4gICAgXG4gICAgXG4gICAgdGhpcy5mb3JtQmFzaWNJbmZvcm1hdGlvblxuICAgICAgLnNldElucHV0SGlkZGVuSWQoIEVkaXRQYWdlLmZvcm1JZFRva2VuICkgLy8gaWYgbm90IHBhc3NlZCB2YWx1ZSB3aWxsIHRyeSBnZXQgdmFsdWUgZnJvbSBmb3JtIGZpbGxlZFxuICAgICAgLnNldE1ldGhvZCgncG9zdCcpXG4gICAgICAuc2V0QWN0aW9uKCcvYWRtaW4vYXRpdm8nKSAvLyAgcG9zdCB0byBVUkwgbG9jYWxob3N0L2FkbWluL2F0aXZvXG4gICAgICAub25TdWJtaXQoIChmb3JtRGF0YTogRm9ybURhdGEpID0+IHsgLy8gc2V0IGZ1bmN0aW9uIHdoZW4gZm9ybSBhY3Rpb24gc3VibWl0dGVkXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0VG9JbnRlbGxlY3R1YWxBc3NldFN0b3JlKGZvcm1EYXRhKS50aGVuKCAocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgIC8qKipcbiAgICAgICAgICAgKiBTZXQgaWQgb25seSBjcmVhdGUgRm9ybVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmKCF0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLmdldElucHV0SGlkZGVuSWQoKS52YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLnNldElucHV0SGlkZGVuSWQoICdkYXRhW2ludGVsbGVjdHVhbF9hc3NldHNdW2lkXScgLCByZXNwb25zZS5pZCApO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9hZG1pbi9hdGl2by8ke3Jlc3BvbnNlLmlkfS9lZGl0YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtUmVnaXN0cmF0aW9uTnVtYmVyQ29uc3RydWN0KCk6IHZvaWQgXG4gIHtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RyYXRpb24gTnVtYmVyIEZvcm0gSW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLmZvcm1SZWdpc3RyYXRpb25OdW1iZXIgPSBuZXcgRm9ybShFZGl0UGFnZS5ib3hGb3JtUmVnaXN0cmF0aW9uTnVtYmVyVG9rZW5JZCk7XG4gICAgdGhpcy5mb3JtUmVnaXN0cmF0aW9uTnVtYmVyXG4gICAgICAuc2V0TWV0aG9kKCdwb3N0JylcbiAgICAgIC5zZXRBY3Rpb24oJy9hZG1pbi9hdGl2bycpXG4gICAgICAub25TdWJtaXQoIChmb3JtRGF0YTogRm9ybURhdGEpID0+IHtcblxuICAgICAgICBjb25zdCBpbnB1dF9pZDogRm9ybUlucHV0VmFsdWUgPSB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLmdldElucHV0SGlkZGVuSWQoKSB8fCBudWxsO1xuXG4gICAgICAgIGlmKCFpbnB1dF9pZCl7XG4gICAgICAgICAgYWxlcnQoJ0Zvcm0gUmVnaXN0cmF0aW9uIE51bWJlciByZXF1aXJlZCEnKTtcbiAgICAgICAgICB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLmZvY3VzSW4oJyNub21lX2F0aXZvJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRlciBpbnB1dFtuYW1lXSBhbmQgaW5wdXRbdmFsdWVdIHRvIEZvcm0gZG8gdXBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICBmb3JtRGF0YS5zZXQoIGlucHV0X2lkLm5hbWUgLCBpbnB1dF9pZC52YWx1ZS50b1N0cmluZygpICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBvc3QgZGF0YSB0byBhcGkgcGVyc2lzdGVyIFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3RUb0ludGVsbGVjdHVhbEFzc2V0U3RvcmUoZm9ybURhdGEpO1xuICAgICAgICBcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtQXV0aG9yQ29uc3RydWN0KCk6IHZvaWQgXG4gIHtcblxuICAgIGNvbnN0IG1vZGFsOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0VkaXRQYWdlLmJveEZvcm1BdXRob3JNb2RhbFRva2VuSWR9YCk7XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZWdpc3RyYXRpb24gTnVtYmVyIEZvcm0gSW5zdGFuY2VcbiAgICAgKi9cbiAgICB0aGlzLmZvcm1BdXRob3IgPSBuZXcgRm9ybSggRWRpdFBhZ2UuYm94Rm9ybUF1dGhvck1vZGFsVG9rZW5JZCApO1xuXG4gICAgLyoqXG4gICAgICogY2FwdHVyZSBhc3NldF9pZCBvZiBmb3JtQmFzaWNJbmZvcm1hdGlvblxuICAgICAqL1xuICAgIGNvbnN0IGFzc2V0X2lkID0gdGhpcy5mb3JtQmFzaWNJbmZvcm1hdGlvbi5nZXRJbnB1dEhpZGRlbklkKCkudmFsdWU7XG5cbiAgICB0aGlzLmZvcm1BdXRob3JcbiAgICAgIC5zZXRNZXRob2QoJ3Bvc3QnKVxuICAgICAgLnNldEFjdGlvbihgL2FkbWluL2F0aXZvLyR7YXNzZXRfaWR9L2F1dGhvcmApXG4gICAgICAub25TdWJtaXQoIChmb3JtRGF0YTogRm9ybURhdGEpID0+IHtcblxuICAgICAgICBjb25zdCBpbnB1dF9pZDogRm9ybUlucHV0VmFsdWUgPSB0aGlzLmZvcm1CYXNpY0luZm9ybWF0aW9uLmdldElucHV0SGlkZGVuSWQoKSB8fCBudWxsO1xuICAgICAgICBpZighaW5wdXRfaWQpe1xuICAgICAgICAgIGFsZXJ0KCdGb3JtIFJlZ2lzdHJhdGlvbiBOdW1iZXIgcmVxdWlyZWQhJyk7XG4gICAgICAgICAgdGhpcy5mb3JtQmFzaWNJbmZvcm1hdGlvbi5mb2N1c0luKCcjbm9tZV9hdGl2bycpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQb3N0IGRhdGEgdG8gYXBpIHBlcnNpc3RlciBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0VG9JbnRlbGxlY3R1YWxBc3NldEF1dGhvclN0b3JlKGFzc2V0X2lkLHRoaXMuZm9ybUF1dGhvcikudGhlbiggKHJlc3VsdCk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIGhpZGUgbW9kYWxcbiAgICAgICAgICAgKi9cbiAgICAgICAgICAkKG1vZGFsKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICB9KTtcblxuICAgIHRoaXMubW9kYWxBdHRhY2hCdXR0b25TYXZlKG1vZGFsLCB0aGlzLmZvcm1BdXRob3IpO1xuICAgIFxuXG4gIH1cblxuICAvKipcbiAgICogQXR0YXRjaCBidXR0b24gc2F2ZSBpbnRvIE1vZGFsIEZvcm0uIFxuICAgKiBUbyBmaXggc3VibWl0IGZvcm0gbW9kYWwgYm9vdHN0cmFwXG4gICAqIEBwYXJhbSBtb2RhbCBcbiAgICogQHBhcmFtIGZvcm1Eb20gXG4gICAqL1xuICBwcml2YXRlIG1vZGFsQXR0YWNoQnV0dG9uU2F2ZShtb2RhbCwgZm9ybURvbTogRm9ybSlcbiAge1xuICAgIC8qKlxuICAgICAqIEZldGNoIGJ1dHRvbiBzYXZlIGludG8gbW9kYWwtZm9vdGVyXG4gICAgICovXG4gICAgY29uc3QgYnV0dG9uX3NhdmUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXNhdmUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIER5bmFtaWMgY3JlYXRpb24gb2YgdGhlIGJ1dHRvbltjbGFzcz0nYnV0dG9uLW1vZGFsLXNhdmUnXSB0byBmaXJlIHN1Ym1pdCBmb3JtXG4gICAgICovXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51IGJ1dHRvbi1tb2RhbC1zYXZlJyk7XG4gICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYnV0dG9uIG5vZGUgaW50byBNb2RhbCBGb3JtXG4gICAgICovXG4gICAgZm9ybURvbS5lbGVtZW50LmFwcGVuZChidXR0b24pO1xuXG5cbiAgICAvKipcbiAgICAgKiBPbiBDbGljayBidXR0b24gaW4gZm9vdGVyLCBmaXJlcyBoaWRkZW4gYnV0dG9uW2NsYXNzPSdidXR0b24tbW9kYWwtc2F2ZSddXG4gICAgICovXG4gICAgYnV0dG9uX3NhdmUub25jbGljayA9IGZ1bmN0aW9uKGUpe1xuICAgICAgYnV0dG9uLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgaW5wdXQgbWFza3MgcGx1Z2luIGZvciB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBwcml2YXRlIG1hc2tzKCl7XG4gICAgJCgnLmNwZicpLm1hc2soJzAwMC4wMDAuMDAwLTAwJywge3JldmVyc2U6IHRydWV9KTtcbiAgICAkKCcuY25waicpLm1hc2soJzAwLjAwMC4wMDAvMDAwMC0wMCcpO1xuICB9XG5cbiAgcHVibGljIGh0dHBQb3N0KHVybDpzdHJpbmcsIGZvcm1fZGF0YTpGb3JtRGF0YSwgb3B0aW9ucz86e30pXG4gIHtcbiAgICBcbiAgICBjb25zdCBPUFRJT05TID0geyBcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAnWF9SRVFVRVNURURfV0lUSCc6IFwieG1saHR0cHJlcXVlc3RcIlxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsZm9ybV9kYXRhLE9QVElPTlMpLnRoZW4oIChyZXNwb25zZTphbnkpID0+IHtcblxuICAgICAgLyoqXG4gICAgICAqIEh0dHAgUmVzcG9uc2UgMjAwXG4gICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICogQXhpb3MgcmV0b3JuYSBoZWFkZXJzLCBzdGF0dXMgY29kZSBhbmQgZGF0YSh3aXRoIF9ib2R5IHNlcnZlciBkYXRhKVxuICAgICAgKi9cbiAgICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIC8qKlxuICAgICAgKiBNb2RhbCBBbGVydFxuICAgICAgKi9cbiAgICAgIGFsZXJ0KGRhdGFSZXNwb25zZS5tc2cpOyAvLyByZXNwb25zZSBkZWZhdWx0IGZyb20gc2VydmVyXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgZXJyb3IuIFByZXZlbnQgZmxvdyBvZiBleGVjdXRpb25cbiAgICAgICAqL1xuICAgICAgbGV0IGVycm9yID0gZGF0YVJlc3BvbnNlLmVycm9yIHx8IGZhbHNlO1xuICAgICAgaWYoZXJyb3Ipe1xuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gZGV0YWlsZWQgZXJyb3JcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFSZXNwb25zZTtcblxuICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+eyBcbiAgICAgIC8qKlxuICAgICAgKiBIVFRQIDQwMCB0byA1MDAgcmVzcG9uc2UgZXJyb3JzXG4gICAgICAqL1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuIFxuICB9XG4gIFxufSJdLCJzb3VyY2VSb290IjoiIn0=
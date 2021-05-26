(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages_admin_ativo__forms_basic-information_form_ts"],{

/***/ "./resources/typescript/pages/admin/ativo/_forms/basic-information.form.ts":
/*!*********************************************************************************!*\
  !*** ./resources/typescript/pages/admin/ativo/_forms/basic-information.form.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1__);


var Form = /** @class */ (function () {
    function Form(boxFormTokenId) {
        this.boxFormTokenId = 'box-form-basic-information';
        this.boxFormTokenId = boxFormTokenId;
        this.init();
    }
    Form.prototype.init = function () {
        this.htmFormElement = (document.querySelector("#" + this.boxFormTokenId + " form") || document.getElementById(this.boxFormTokenId));
        ;
    };
    Form.prototype.setSubmit = function () {
        var form = this.htmFormElement;
        form.onsubmit = function (e) {
            e.preventDefault();
            /**
             * Generating data post to server
             */
            var form_data = new FormData(form);
            var form_data_id = Number(form_data.get('data[intellectual_assets][id]'));
            form_data.set('_ajax', 'true');
            alert(form_data_id);
            /**
             * URLs with endpoints for post/update
             */
            var form_action_url = (form_data_id == 0) ? '/admin/ativo' : "/admin/ativo/" + form_data_id + "/edit";
            var OPTIONS = {
                headers: { 'HTTP_X_REQUESTED_WITH': "TRUE" }
            };
            axios__WEBPACK_IMPORTED_MODULE_0___default().post(form_action_url, form_data, OPTIONS)
                /**
                 * Http Response 200
                 */
                .then(function (response) {
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
                /**
                 * Capture data from the API server
                 */
                var intellectual_asset = dataResponse._body;
                /**
                 * Set new ID IntellectualAsset in the input[hidden]
                 */
                var control_intellectual_id = document.getElementById('intellectual_asset_id');
                control_intellectual_id.value = intellectual_asset.id;
            })
                /**
                 * HTTP 400 to 500 response errors
                 */
                .catch(function (error) {
                console.log(error);
            });
        };
    };
    return Form;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9hZG1pbi9hdGl2by9fZm9ybXMvYmFzaWMtaW5mb3JtYXRpb24uZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUdFO0FBRTVCO0lBS0UsY0FBWSxjQUFxQjtRQUh6QixtQkFBYyxHQUFVLDRCQUE0QixDQUFDO1FBSTNELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFUyxtQkFBSSxHQUFkO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsY0FBYyxVQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBcUIsQ0FBQztRQUFDLENBQUM7SUFDdkosQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBRUUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVMsQ0FBQztZQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkI7O2VBRUc7WUFDSCxJQUFJLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLFlBQVksR0FBVSxNQUFNLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFFLENBQUM7WUFFbkYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXBCOztlQUVHO1lBQ0gsSUFBSSxlQUFlLEdBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsa0JBQWdCLFlBQVksVUFBTyxDQUFDO1lBRWxHLElBQU0sT0FBTyxHQUFHO2dCQUNkLE9BQU8sRUFBRSxFQUFDLHVCQUF1QixFQUFFLE1BQU0sRUFBQzthQUMzQyxDQUFDO1lBQ0YsaURBQVUsQ0FBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQztnQkFFM0M7O21CQUVHO2lCQUNGLElBQUksQ0FBRSxVQUFDLFFBQVk7Z0JBRWxCOzttQkFFRztnQkFDSCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUVuQzs7bUJBRUc7Z0JBQ0YsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtnQkFFeEQ7O21CQUVHO2dCQUNILElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO2dCQUN4QyxJQUFHLEtBQUssRUFBQztvQkFDUCxNQUFNLEtBQUssQ0FBQyxDQUFDLGlCQUFpQjtpQkFDL0I7Z0JBRUY7O21CQUVHO2dCQUNILElBQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFFOUM7O21CQUVHO2dCQUNGLElBQUksdUJBQXVCLEdBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQXFCLENBQUM7Z0JBQ3BILHVCQUF1QixDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7WUFFekQsQ0FBQyxDQUFDO2dCQUVGOzttQkFFRztpQkFDRixLQUFLLENBQUUsVUFBQyxLQUFLO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0lBQ0gsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDIiwiZmlsZSI6InJlc291cmNlc190eXBlc2NyaXB0X3BhZ2VzX2FkbWluX2F0aXZvX19mb3Jtc19iYXNpYy1pbmZvcm1hdGlvbl9mb3JtX3RzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBcImpxdWVyeS1tYXNrLXBsdWdpblwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybSAge1xuXG4gIHByaXZhdGUgYm94Rm9ybVRva2VuSWQ6c3RyaW5nID0gJ2JveC1mb3JtLWJhc2ljLWluZm9ybWF0aW9uJztcbiAgcHJpdmF0ZSBodG1Gb3JtRWxlbWVudDogSFRNTEZvcm1FbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGJveEZvcm1Ub2tlbklkOnN0cmluZyl7XG4gICAgdGhpcy5ib3hGb3JtVG9rZW5JZCA9IGJveEZvcm1Ub2tlbklkO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIFxuICBwcm90ZWN0ZWQgaW5pdCgpIHtcbiAgICB0aGlzLmh0bUZvcm1FbGVtZW50ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuYm94Rm9ybVRva2VuSWR9IGZvcm1gKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJveEZvcm1Ub2tlbklkKSApIGFzIEhUTUxGb3JtRWxlbWVudDsgO1xuICB9XG5cbiAgcHVibGljIHNldFN1Ym1pdCgpe1xuXG4gICAgY29uc3QgZm9ybSA9IHRoaXMuaHRtRm9ybUVsZW1lbnQ7XG4gICAgXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEdlbmVyYXRpbmcgZGF0YSBwb3N0IHRvIHNlcnZlclxuICAgICAgICovXG4gICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgbGV0IGZvcm1fZGF0YV9pZDpudW1iZXIgPSBOdW1iZXIoIGZvcm1fZGF0YS5nZXQoJ2RhdGFbaW50ZWxsZWN0dWFsX2Fzc2V0c11baWRdJykgKTtcblxuICAgICAgZm9ybV9kYXRhLnNldCgnX2FqYXgnLCd0cnVlJyk7XG4gICAgICBhbGVydChmb3JtX2RhdGFfaWQpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFVSTHMgd2l0aCBlbmRwb2ludHMgZm9yIHBvc3QvdXBkYXRlXG4gICAgICAgKi9cbiAgICAgIGxldCBmb3JtX2FjdGlvbl91cmwgID0gKGZvcm1fZGF0YV9pZCA9PSAwKSA/ICcvYWRtaW4vYXRpdm8nIDogYC9hZG1pbi9hdGl2by8ke2Zvcm1fZGF0YV9pZH0vZWRpdGA7XG5cbiAgICAgIGNvbnN0IE9QVElPTlMgPSB7IFxuICAgICAgICBoZWFkZXJzOiB7J0hUVFBfWF9SRVFVRVNURURfV0lUSCc6IFwiVFJVRVwifSAgXG4gICAgICB9O1xuICAgICAgYXhpb3MucG9zdChmb3JtX2FjdGlvbl91cmwsZm9ybV9kYXRhLE9QVElPTlMpXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEh0dHAgUmVzcG9uc2UgMjAwXG4gICAgICAgICAqL1xuICAgICAgICAudGhlbiggKHJlc3BvbnNlOmFueSkgPT4ge1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQXhpb3MgcmV0b3JuYSBoZWFkZXJzLCBzdGF0dXMgY29kZSBhbmQgZGF0YSh3aXRoIF9ib2R5IHNlcnZlciBkYXRhKVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBNb2RhbCBBbGVydFxuICAgICAgICAgICAqL1xuICAgICAgICAgICBhbGVydChkYXRhUmVzcG9uc2UubXNnKTsgLy8gcmVzcG9uc2UgZGVmYXVsdCBmcm9tIHNlcnZlclxuXG4gICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBDaGVjayBlcnJvci4gUHJldmVudCBmbG93IG9mIGV4ZWN1dGlvblxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgbGV0IGVycm9yID0gZGF0YVJlc3BvbnNlLmVycm9yIHx8IGZhbHNlO1xuICAgICAgICAgICBpZihlcnJvcil7XG4gICAgICAgICAgICAgdGhyb3cgZXJyb3I7IC8vIGRldGFpbGVkIGVycm9yXG4gICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENhcHR1cmUgZGF0YSBmcm9tIHRoZSBBUEkgc2VydmVyXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3QgaW50ZWxsZWN0dWFsX2Fzc2V0ID0gZGF0YVJlc3BvbnNlLl9ib2R5O1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU2V0IG5ldyBJRCBJbnRlbGxlY3R1YWxBc3NldCBpbiB0aGUgaW5wdXRbaGlkZGVuXVxuICAgICAgICAgICAqL1xuICAgICAgICAgICBsZXQgY29udHJvbF9pbnRlbGxlY3R1YWxfaWQ6SFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlbGxlY3R1YWxfYXNzZXRfaWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICBjb250cm9sX2ludGVsbGVjdHVhbF9pZC52YWx1ZSA9IGludGVsbGVjdHVhbF9hc3NldC5pZDtcblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhUVFAgNDAwIHRvIDUwMCByZXNwb25zZSBlcnJvcnNcbiAgICAgICAgICovXG4gICAgICAgIC5jYXRjaCggKGVycm9yKSA9PnsgXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkprojeto_gerenciamento_patentes"] = self["webpackChunkprojeto_gerenciamento_patentes"] || []).push([["resources_typescript_pages_admin_ativo__forms_basic-information_ts"],{

/***/ "./resources/typescript/pages/admin/ativo/_forms/basic-information.ts":
/*!****************************************************************************!*\
  !*** ./resources/typescript/pages/admin/ativo/_forms/basic-information.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicInformation": () => (/* binding */ BasicInformation)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1__);


var BasicInformation = /** @class */ (function () {
    function BasicInformation() {
        this.boxFormTokenId = 'box-form-basic-information';
    }
    BasicInformation.prototype.init = function () {
        var form = document.querySelector("#" + this.boxFormTokenId + " form");
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
    return BasicInformation;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXRvLWdlcmVuY2lhbWVudG8tcGF0ZW50ZXMvLi9yZXNvdXJjZXMvdHlwZXNjcmlwdC9wYWdlcy9hZG1pbi9hdGl2by9fZm9ybXMvYmFzaWMtaW5mb3JtYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFHRTtBQUU1QjtJQUFBO1FBRVUsbUJBQWMsR0FBVSw0QkFBNEIsQ0FBQztJQTJFL0QsQ0FBQztJQXpFVywrQkFBSSxHQUFkO1FBRUUsSUFBTSxJQUFJLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsY0FBYyxVQUFPLENBQUMsQ0FBQztRQUVwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVMsQ0FBQztZQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkI7O2VBRUc7WUFDSCxJQUFJLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLFlBQVksR0FBVSxNQUFNLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFFLENBQUM7WUFFbkYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXBCOztlQUVHO1lBQ0gsSUFBSSxlQUFlLEdBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsa0JBQWdCLFlBQVksVUFBTyxDQUFDO1lBRWxHLElBQU0sT0FBTyxHQUFHO2dCQUNkLE9BQU8sRUFBRSxFQUFDLHVCQUF1QixFQUFFLE1BQU0sRUFBQzthQUMzQyxDQUFDO1lBQ0YsaURBQVUsQ0FBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQztnQkFFM0M7O21CQUVHO2lCQUNGLElBQUksQ0FBRSxVQUFDLFFBQVk7Z0JBRWxCOzttQkFFRztnQkFDSCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUVuQzs7bUJBRUc7Z0JBQ0YsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtnQkFFeEQ7O21CQUVHO2dCQUNILElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO2dCQUN4QyxJQUFHLEtBQUssRUFBQztvQkFDUCxNQUFNLEtBQUssQ0FBQyxDQUFDLGlCQUFpQjtpQkFDL0I7Z0JBRUY7O21CQUVHO2dCQUNILElBQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFFOUM7O21CQUVHO2dCQUNGLElBQUksdUJBQXVCLEdBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQXFCLENBQUM7Z0JBQ3BILHVCQUF1QixDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7WUFFekQsQ0FBQyxDQUFDO2dCQUVGOzttQkFFRztpQkFDRixLQUFLLENBQUUsVUFBQyxLQUFLO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0lBRUgsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJyZXNvdXJjZXNfdHlwZXNjcmlwdF9wYWdlc19hZG1pbl9hdGl2b19fZm9ybXNfYmFzaWMtaW5mb3JtYXRpb25fdHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IFwianF1ZXJ5LW1hc2stcGx1Z2luXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNpY0luZm9ybWF0aW9uICB7XG5cbiAgcHJpdmF0ZSBib3hGb3JtVG9rZW5JZDpzdHJpbmcgPSAnYm94LWZvcm0tYmFzaWMtaW5mb3JtYXRpb24nO1xuICBcbiAgcHJvdGVjdGVkIGluaXQoKSB7XG5cbiAgICBjb25zdCBmb3JtOkhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuYm94Rm9ybVRva2VuSWR9IGZvcm1gKTtcbiAgICBcbiAgICBmb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oZSl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogR2VuZXJhdGluZyBkYXRhIHBvc3QgdG8gc2VydmVyXG4gICAgICAgKi9cbiAgICAgIGxldCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICBsZXQgZm9ybV9kYXRhX2lkOm51bWJlciA9IE51bWJlciggZm9ybV9kYXRhLmdldCgnZGF0YVtpbnRlbGxlY3R1YWxfYXNzZXRzXVtpZF0nKSApO1xuXG4gICAgICBmb3JtX2RhdGEuc2V0KCdfYWpheCcsJ3RydWUnKTtcbiAgICAgIGFsZXJ0KGZvcm1fZGF0YV9pZCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogVVJMcyB3aXRoIGVuZHBvaW50cyBmb3IgcG9zdC91cGRhdGVcbiAgICAgICAqL1xuICAgICAgbGV0IGZvcm1fYWN0aW9uX3VybCAgPSAoZm9ybV9kYXRhX2lkID09IDApID8gJy9hZG1pbi9hdGl2bycgOiBgL2FkbWluL2F0aXZvLyR7Zm9ybV9kYXRhX2lkfS9lZGl0YDtcblxuICAgICAgY29uc3QgT1BUSU9OUyA9IHsgXG4gICAgICAgIGhlYWRlcnM6IHsnSFRUUF9YX1JFUVVFU1RFRF9XSVRIJzogXCJUUlVFXCJ9ICBcbiAgICAgIH07XG4gICAgICBheGlvcy5wb3N0KGZvcm1fYWN0aW9uX3VybCxmb3JtX2RhdGEsT1BUSU9OUylcblxuICAgICAgICAvKipcbiAgICAgICAgICogSHR0cCBSZXNwb25zZSAyMDBcbiAgICAgICAgICovXG4gICAgICAgIC50aGVuKCAocmVzcG9uc2U6YW55KSA9PiB7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBeGlvcyByZXRvcm5hIGhlYWRlcnMsIHN0YXR1cyBjb2RlIGFuZCBkYXRhKHdpdGggX2JvZHkgc2VydmVyIGRhdGEpXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3QgZGF0YVJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE1vZGFsIEFsZXJ0XG4gICAgICAgICAgICovXG4gICAgICAgICAgIGFsZXJ0KGRhdGFSZXNwb25zZS5tc2cpOyAvLyByZXNwb25zZSBkZWZhdWx0IGZyb20gc2VydmVyXG5cbiAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIENoZWNrIGVycm9yLiBQcmV2ZW50IGZsb3cgb2YgZXhlY3V0aW9uXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICBsZXQgZXJyb3IgPSBkYXRhUmVzcG9uc2UuZXJyb3IgfHwgZmFsc2U7XG4gICAgICAgICAgIGlmKGVycm9yKXtcbiAgICAgICAgICAgICB0aHJvdyBlcnJvcjsgLy8gZGV0YWlsZWQgZXJyb3JcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQ2FwdHVyZSBkYXRhIGZyb20gdGhlIEFQSSBzZXJ2ZXJcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCBpbnRlbGxlY3R1YWxfYXNzZXQgPSBkYXRhUmVzcG9uc2UuX2JvZHk7XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZXQgbmV3IElEIEludGVsbGVjdHVhbEFzc2V0IGluIHRoZSBpbnB1dFtoaWRkZW5dXG4gICAgICAgICAgICovXG4gICAgICAgICAgIGxldCBjb250cm9sX2ludGVsbGVjdHVhbF9pZDpIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludGVsbGVjdHVhbF9hc3NldF9pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgIGNvbnRyb2xfaW50ZWxsZWN0dWFsX2lkLnZhbHVlID0gaW50ZWxsZWN0dWFsX2Fzc2V0LmlkO1xuXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogSFRUUCA0MDAgdG8gNTAwIHJlc3BvbnNlIGVycm9yc1xuICAgICAgICAgKi9cbiAgICAgICAgLmNhdGNoKCAoZXJyb3IpID0+eyBcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_error-modal_error-modal_module_ts"],{

/***/ 4610:
/*!*****************************************************************!*\
  !*** ./src/app/pages/error-modal/error-modal-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorModalPageRoutingModule": () => (/* binding */ ErrorModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _error_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-modal.page */ 5190);




const routes = [
    {
        path: '',
        component: _error_modal_page__WEBPACK_IMPORTED_MODULE_0__.ErrorModalPage
    }
];
let ErrorModalPageRoutingModule = class ErrorModalPageRoutingModule {
};
ErrorModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ErrorModalPageRoutingModule);



/***/ }),

/***/ 3665:
/*!*********************************************************!*\
  !*** ./src/app/pages/error-modal/error-modal.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorModalPageModule": () => (/* binding */ ErrorModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _error_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-modal-routing.module */ 4610);
/* harmony import */ var _error_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-modal.page */ 5190);







let ErrorModalPageModule = class ErrorModalPageModule {
};
ErrorModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _error_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErrorModalPageRoutingModule
        ],
        declarations: [_error_modal_page__WEBPACK_IMPORTED_MODULE_1__.ErrorModalPage]
    })
], ErrorModalPageModule);



/***/ }),

/***/ 5190:
/*!*******************************************************!*\
  !*** ./src/app/pages/error-modal/error-modal.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorModalPage": () => (/* binding */ ErrorModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _error_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-modal.page.html?ngResource */ 2278);
/* harmony import */ var _error_modal_page_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-modal.page.css?ngResource */ 5583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let ErrorModalPage = class ErrorModalPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goToLogin() {
        console.log("history num ", history.state.num);
        const navigationExtras = {
            state: {
                num: history.state.num,
            },
        };
        this.router.navigate(['/login'], navigationExtras);
    }
    cancel() {
        this.router.navigate(['/forget-password']);
    }
};
ErrorModalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ErrorModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-error-modal',
        template: _error_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error_modal_page_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorModalPage);



/***/ }),

/***/ 5583:
/*!*******************************************************************!*\
  !*** ./src/app/pages/error-modal/error-modal.page.css?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1tb2RhbC5wYWdlLmNzcyJ9 */";

/***/ }),

/***/ 2278:
/*!********************************************************************!*\
  !*** ./src/app/pages/error-modal/error-modal.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n</ion-header>\r\n\r\n\r\n<!--*************** Modal qui montre que le num n'existe pas *************-->\r\n<ion-content class=\"ion-padding center\">\r\n  <div class=\"ion-margin-top ion-text-center\">\r\n      <ion-label>This account does not existe </ion-label>\r\n      <h6>Do you want to register ?</h6>\r\n  </div>\r\n  <div class=\"ion-margin-top ion-text-center\">\r\n      <ion-button (click)=\"goToLogin()\" routerLink=\"/login\" [state]=\"\" type=\"\" color=\"warning\">Register</ion-button>\r\n      <ion-button (click)=\"cancel()\" type=\"\" color=\"light\">Cancel</ion-button>\r\n  </div>\r\n</ion-content>\r\n<!--*************** Modal qui montre que le num n'existe pas *************-->\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_error-modal_error-modal_module_ts.js.map
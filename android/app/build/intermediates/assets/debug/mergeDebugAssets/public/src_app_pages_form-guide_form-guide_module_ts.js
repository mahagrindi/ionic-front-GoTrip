"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_form-guide_form-guide_module_ts"],{

/***/ 7407:
/*!***************************************************************!*\
  !*** ./src/app/pages/form-guide/form-guide-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormGuidePageRoutingModule": () => (/* binding */ FormGuidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _form_guide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-guide.page */ 3823);




const routes = [
    {
        path: '',
        component: _form_guide_page__WEBPACK_IMPORTED_MODULE_0__.FormGuidePage
    }
];
let FormGuidePageRoutingModule = class FormGuidePageRoutingModule {
};
FormGuidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormGuidePageRoutingModule);



/***/ }),

/***/ 2833:
/*!*******************************************************!*\
  !*** ./src/app/pages/form-guide/form-guide.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormGuidePageModule": () => (/* binding */ FormGuidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _form_guide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-guide-routing.module */ 7407);
/* harmony import */ var _form_guide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-guide.page */ 3823);







let FormGuidePageModule = class FormGuidePageModule {
};
FormGuidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_guide_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormGuidePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_form_guide_page__WEBPACK_IMPORTED_MODULE_1__.FormGuidePage],
    })
], FormGuidePageModule);



/***/ }),

/***/ 3823:
/*!*****************************************************!*\
  !*** ./src/app/pages/form-guide/form-guide.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormGuidePage": () => (/* binding */ FormGuidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _form_guide_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-guide.page.html?ngResource */ 5142);
/* harmony import */ var _form_guide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-guide.page.scss?ngResource */ 5059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let FormGuidePage = class FormGuidePage {
    constructor(formBuilder, route, alertController) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.alertController = alertController;
        this.adresse = '';
        this.isSubmitted = false;
        this.errors = [
            { type: 'required', message: 'Champ Obligatoire !' },
            { type: 'pattern', message: 'Vérifier le format du champ' },
        ];
    }
    ngOnInit() {
        this.guidForm = this.formBuilder.group({
            adresse: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    // Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
                ],
            ],
        });
    }
    SubmitRequest() {
        this.isSubmitted = true;
        if (!this.guidForm.valid) {
            const alertMessage = 'Please provide all the required values!';
            const alertHeader = 'Missing Informations!';
            this.presentAlert(alertHeader, alertMessage);
            return false;
        }
        else {
            console.log(this.guidForm.value);
        }
    }
    get errorControl() {
        return this.guidForm.controls;
    }
    // alertMessage: String;
    presentAlert(alertHeader, alertMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: alertHeader,
                subHeader: '',
                message: alertMessage,
                buttons: [{ text: 'OK', cssClass: 'alert-button-confirm' }],
                animated: true,
            });
            yield alert.present();
        });
    }
};
FormGuidePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
FormGuidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-form-guide',
        template: _form_guide_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_form_guide_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormGuidePage);



/***/ }),

/***/ 5059:
/*!******************************************************************!*\
  !*** ./src/app/pages/form-guide/form-guide.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWd1aWRlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5142:
/*!******************************************************************!*\
  !*** ./src/app/pages/form-guide/form-guide.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>FormGuide</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding-horizontal\">\r\n    <h3 class=\"ion-text-center\" color=\"primary\">Welcome Back!</h3>\r\n    <p class=\"ion-text-center\">Join our community🚀</p>\r\n\r\n    <form [formGroup]=\"guidForm\" (ngSubmit)=\"SubmitRequest()\" novalidate>\r\n        <div class=\"form-group\">\r\n            <ion-label position=\"\" class=\"ion-margin-top\">Adresse</ion-label>\r\n            <ion-input formControlName=\"adresse\" [(ngModel)]=\"adresse\" type=\"text\" autofocus=\"true\" placeholder=\"Adresse\" required></ion-input>\r\n            <div *ngFor=\"let er of errors\">\r\n                <ng-container *ngIf=\"guidForm.get('adresse').hasError(er.type) && (guidForm.get('adresse').touched || guidForm.get('adresse').dirty)\">\r\n                    <ion-note color=\"danger\"> {{er.message}} </ion-note>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n        <ion-button class=\"ion-margin-top\" type=\"submit\" color=\"warning\">submit request</ion-button>\r\n        <ion-button class=\"ion-margin-top\" [routerLink]=\"['/tabs']\" type=\"cancel\" color=\"light\">cancel</ion-button>\r\n    </form>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_form-guide_form-guide_module_ts.js.map
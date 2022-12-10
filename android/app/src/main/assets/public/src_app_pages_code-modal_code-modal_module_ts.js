"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_code-modal_code-modal_module_ts"],{

/***/ 1191:
/*!***************************************************************!*\
  !*** ./src/app/pages/code-modal/code-modal-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeModalPageRoutingModule": () => (/* binding */ CodeModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _code_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-modal.page */ 4341);




const routes = [
    {
        path: '',
        component: _code_modal_page__WEBPACK_IMPORTED_MODULE_0__.CodeModalPage
    }
];
let CodeModalPageRoutingModule = class CodeModalPageRoutingModule {
};
CodeModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CodeModalPageRoutingModule);



/***/ }),

/***/ 2462:
/*!*******************************************************!*\
  !*** ./src/app/pages/code-modal/code-modal.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeModalPageModule": () => (/* binding */ CodeModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _code_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-modal-routing.module */ 1191);
/* harmony import */ var _code_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-modal.page */ 4341);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 2981);








let CodeModalPageModule = class CodeModalPageModule {
};
CodeModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _code_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CodeModalPageRoutingModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule
        ],
        declarations: [_code_modal_page__WEBPACK_IMPORTED_MODULE_1__.CodeModalPage]
    })
], CodeModalPageModule);



/***/ }),

/***/ 4341:
/*!*****************************************************!*\
  !*** ./src/app/pages/code-modal/code-modal.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeModalPage": () => (/* binding */ CodeModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _code_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-modal.page.html?ngResource */ 9534);
/* harmony import */ var _code_modal_page_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-modal.page.css?ngResource */ 3049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_verification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/verification.service */ 3387);







let CodeModalPage = class CodeModalPage {
    constructor(router, verificationService, modalCtrl, route) {
        this.router = router;
        this.verificationService = verificationService;
        this.modalCtrl = modalCtrl;
        this.route = route;
        // configuration des inputs du code
        this.configInput = {
            length: 4,
            placeholder: '#',
            allowNumbersOnly: true,
            inputStyles: {
                width: '50px',
                height: '50px',
            },
        };
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.num = this.router.getCurrentNavigation().extras.state.num;
            }
        });
    }
    sendSMS() {
        return this.verificationService.sendSMS(this.num);
    }
    ngOnInit() {
        console.log("hello from code page ");
        this.sendSMS().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.code = yield res['random'];
            console.log('num fel code ', this.num);
            console.log(this.code);
        }), (err) => {
            console.log(err.error);
        });
    }
    //afficher la valeur des input du code dans le console
    //vérifier le code et aller à la page new password
    valueChange(ev) {
        if (ev == this.code) {
            this.verificationService.returnToken(this.num).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const navigationExtras = {
                    state: {
                        num: this.num,
                    },
                };
                yield this.router.navigate(['/change-password'], navigationExtras);
                this.modalCtrl.dismiss();
            }), (err) => {
                console.log(err.error);
            });
        }
    }
};
CodeModalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_verification_service__WEBPACK_IMPORTED_MODULE_2__.VerificationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
CodeModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-code-modal',
        template: _code_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_code_modal_page_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodeModalPage);



/***/ }),

/***/ 3049:
/*!*****************************************************************!*\
  !*** ./src/app/pages/code-modal/code-modal.page.css?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "/*// Ionic Variables and Theming. For more info, please see:\r\n// http://ionicframework.com/docs/theming/ */\r\n\r\n* {\r\n    font-family: \"Montserrat\";\r\n}\r\n\r\n.h1 {\r\n    font-size: 2.19rem;\r\n}\r\n\r\nh2,\r\n.h2 {\r\n    font-size: 1.88rem;\r\n}\r\n\r\nh3,\r\n.h3 {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n}\r\n\r\nh4,\r\n.h4 {\r\n    font-size: 1.13rem;\r\n    font-weight: 600;\r\n}\r\n\r\nh5,\r\n.h5 {\r\n    font-size: 1rem;\r\n}\r\n\r\nh6,\r\n.h6 {\r\n    font-size: 0.9375rem;\r\n}\r\n\r\np {\r\n    font-size: 0.9375rem;\r\n    line-height: 1.5;\r\n    font-weight: 300;\r\n}\r\n\r\nbody {\r\n    font-size: 1rem;\r\n    font-family: \"Montserrat\";\r\n    font-weight: initial;\r\n    line-height: normal;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nion-button {\r\n    --color: white;\r\n    --border-radius: 10px;\r\n    //--box-shadow: 0 2px 6px 0 rgb(252, 210, 64, 0.1);\r\n    --padding-top: 20px;\r\n    --padding-bottom: 20px;\r\n    font-weight: 400;\r\n    text-transform: none;\r\n}\r\n\r\n/** Ionic CSS Variables **/\r\n\r\nion-item {\r\n    margin-left: 24px;\r\n    margin-right: 24px;\r\n}\r\n\r\nion-header {\r\n    padding: 5px;\r\n}\r\n\r\nhr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navb {\r\n    img {\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 10%;\r\n    }\r\n}\r\n\r\n$shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n\r\n$secondary: #1668ff;\r\n\r\n$primary: #041c7a;\r\n\r\n$tertiary: #1b1b1b;\r\n\r\n$success: #20cc89;\r\n\r\n$warning: #fcd240;\r\n\r\n$danger: #fd5b1f;\r\n\r\n$dark: #1b1b1b;\r\n\r\n$medium: #bababa;\r\n\r\n$light: #f3f3f3;\r\n\r\n.starts {\r\n    color: $warning;\r\n}\r\n\r\n:root {\r\n    --ion-color-primary: #041c7a;\r\n    --ion-color-primary-rgb: 4, 28, 122;\r\n    --ion-color-primary-contrast: #ffffff;\r\n    --ion-color-primary-contrast-rgb: 255, 255, 255;\r\n    --ion-color-primary-shade: #04196b;\r\n    --ion-color-primary-tint: #1d3387;\r\n    --ion-color-secondary: #1668ff;\r\n    --ion-color-secondary-rgb: 22, 104, 255;\r\n    --ion-color-secondary-contrast: #ffffff;\r\n    --ion-color-secondary-contrast-rgb: 255, 255, 255;\r\n    --ion-color-secondary-shade: #135ce0;\r\n    --ion-color-secondary-tint: #2d77ff;\r\n    --ion-color-tertiary: #1b1b1b;\r\n    --ion-color-tertiary-rgb: 27, 27, 27;\r\n    --ion-color-tertiary-contrast: #ffffff;\r\n    --ion-color-tertiary-contrast-rgb: 255, 255, 255;\r\n    --ion-color-tertiary-shade: #181818;\r\n    --ion-color-tertiary-tint: #323232;\r\n    --ion-color-success: #20cc89;\r\n    --ion-color-success-rgb: 32, 204, 137;\r\n    --ion-color-success-contrast: #000000;\r\n    --ion-color-success-contrast-rgb: 0, 0, 0;\r\n    --ion-color-success-shade: #1cb479;\r\n    --ion-color-success-tint: #36d195;\r\n    --ion-color-warning: #fcd240;\r\n    --ion-color-warning-rgb: 252, 210, 64;\r\n    --ion-color-warning-contrast: #000000;\r\n    --ion-color-warning-contrast-rgb: 0, 0, 0;\r\n    --ion-color-warning-shade: #deb938;\r\n    --ion-color-warning-tint: #fcd753;\r\n    --ion-color-danger: #fd5b1f;\r\n    --ion-color-danger-rgb: 253, 91, 31;\r\n    --ion-color-danger-contrast: #000000;\r\n    --ion-color-danger-contrast-rgb: 0, 0, 0;\r\n    --ion-color-danger-shade: #df501b;\r\n    --ion-color-danger-tint: #fd6b35;\r\n    --ion-color-medium: #bababa;\r\n    --ion-color-medium-rgb: 186, 186, 186;\r\n    --ion-color-medium-contrast: #000000;\r\n    --ion-color-medium-contrast-rgb: 0, 0, 0;\r\n    --ion-color-medium-shade: #a4a4a4;\r\n    --ion-color-medium-tint: #c1c1c1;\r\n    --ion-color-light: #f3f3f3;\r\n    --ion-color-light-rgb: 243, 243, 243;\r\n    --ion-color-light-contrast: #000000;\r\n    --ion-color-light-contrast-rgb: 0, 0, 0;\r\n    --ion-color-light-shade: #d6d6d6;\r\n    --ion-color-light-tint: #f4f4f4;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n    /*\r\n   * Dark Colors\r\n   * -------------------------------------------\r\n   */\r\n    body {\r\n        --ion-color-primary: #428cff;\r\n        --ion-color-primary-rgb: 66, 140, 255;\r\n        --ion-color-primary-contrast: #ffffff;\r\n        --ion-color-primary-contrast-rgb: 255, 255, 255;\r\n        --ion-color-primary-shade: #3a7be0;\r\n        --ion-color-primary-tint: #5598ff;\r\n        --ion-color-secondary: #50c8ff;\r\n        --ion-color-secondary-rgb: 80, 200, 255;\r\n        --ion-color-secondary-contrast: #ffffff;\r\n        --ion-color-secondary-contrast-rgb: 255, 255, 255;\r\n        --ion-color-secondary-shade: #46b0e0;\r\n        --ion-color-secondary-tint: #62ceff;\r\n        --ion-color-tertiary: #6a64ff;\r\n        --ion-color-tertiary-rgb: 106, 100, 255;\r\n        --ion-color-tertiary-contrast: #ffffff;\r\n        --ion-color-tertiary-contrast-rgb: 255, 255, 255;\r\n        --ion-color-tertiary-shade: #5d58e0;\r\n        --ion-color-tertiary-tint: #7974ff;\r\n        --ion-color-success: #2fdf75;\r\n        --ion-color-success-rgb: 47, 223, 117;\r\n        --ion-color-success-contrast: #000000;\r\n        --ion-color-success-contrast-rgb: 0, 0, 0;\r\n        --ion-color-success-shade: #29c467;\r\n        --ion-color-success-tint: #44e283;\r\n        --ion-color-warning: #ffd534;\r\n        --ion-color-warning-rgb: 255, 213, 52;\r\n        --ion-color-warning-contrast: #000000;\r\n        --ion-color-warning-contrast-rgb: 0, 0, 0;\r\n        --ion-color-warning-shade: #e0bb2e;\r\n        --ion-color-warning-tint: #ffd948;\r\n        --ion-color-danger: #ff4961;\r\n        --ion-color-danger-rgb: 255, 73, 97;\r\n        --ion-color-danger-contrast: #ffffff;\r\n        --ion-color-danger-contrast-rgb: 255, 255, 255;\r\n        --ion-color-danger-shade: #e04055;\r\n        --ion-color-danger-tint: #ff5b71;\r\n        --ion-color-dark: #f4f5f8;\r\n        --ion-color-dark-rgb: 244, 245, 248;\r\n        --ion-color-dark-contrast: #000000;\r\n        --ion-color-dark-contrast-rgb: 0, 0, 0;\r\n        --ion-color-dark-shade: #d7d8da;\r\n        --ion-color-dark-tint: #f5f6f9;\r\n        --ion-color-medium: #989aa2;\r\n        --ion-color-medium-rgb: 152, 154, 162;\r\n        --ion-color-medium-contrast: #000000;\r\n        --ion-color-medium-contrast-rgb: 0, 0, 0;\r\n        --ion-color-medium-shade: #86888f;\r\n        --ion-color-medium-tint: #a2a4ab;\r\n        --ion-color-light: #222428;\r\n        --ion-color-light-rgb: 34, 36, 40;\r\n        --ion-color-light-contrast: #ffffff;\r\n        --ion-color-light-contrast-rgb: 255, 255, 255;\r\n        --ion-color-light-shade: #1e2023;\r\n        --ion-color-light-tint: #383a3e;\r\n    }\r\n    /*\r\n   * iOS Dark Theme\r\n   * -------------------------------------------\r\n   */\r\n    .ios body {\r\n        --ion-background-color: #000000;\r\n        --ion-background-color-rgb: 0, 0, 0;\r\n        --ion-text-color: #ffffff;\r\n        --ion-text-color-rgb: 255, 255, 255;\r\n        --ion-color-step-50: #0d0d0d;\r\n        --ion-color-step-100: #1a1a1a;\r\n        --ion-color-step-150: #262626;\r\n        --ion-color-step-200: #333333;\r\n        --ion-color-step-250: #404040;\r\n        --ion-color-step-300: #4d4d4d;\r\n        --ion-color-step-350: #595959;\r\n        --ion-color-step-400: #666666;\r\n        --ion-color-step-450: #737373;\r\n        --ion-color-step-500: #808080;\r\n        --ion-color-step-550: #8c8c8c;\r\n        --ion-color-step-600: #999999;\r\n        --ion-color-step-650: #a6a6a6;\r\n        --ion-color-step-700: #b3b3b3;\r\n        --ion-color-step-750: #bfbfbf;\r\n        --ion-color-step-800: #cccccc;\r\n        --ion-color-step-850: #d9d9d9;\r\n        --ion-color-step-900: #e6e6e6;\r\n        --ion-color-step-950: #f2f2f2;\r\n        --ion-item-background: #000000;\r\n        --ion-card-background: #1c1c1d;\r\n    }\r\n    .ios ion-modal {\r\n        --ion-background-color: var(--ion-color-step-100);\r\n        --ion-toolbar-background: var(--ion-color-step-150);\r\n        --ion-toolbar-border-color: var(--ion-color-step-250);\r\n    }\r\n    /*\r\n   * Material Design Dark Theme\r\n   * -------------------------------------------\r\n   */\r\n    .md body {\r\n        --ion-background-color: #121212;\r\n        --ion-background-color-rgb: 18, 18, 18;\r\n        --ion-text-color: #ffffff;\r\n        --ion-text-color-rgb: 255, 255, 255;\r\n        --ion-border-color: #222222;\r\n        --ion-color-step-50: #1e1e1e;\r\n        --ion-color-step-100: #2a2a2a;\r\n        --ion-color-step-150: #363636;\r\n        --ion-color-step-200: #414141;\r\n        --ion-color-step-250: #4d4d4d;\r\n        --ion-color-step-300: #595959;\r\n        --ion-color-step-350: #656565;\r\n        --ion-color-step-400: #717171;\r\n        --ion-color-step-450: #7d7d7d;\r\n        --ion-color-step-500: #898989;\r\n        --ion-color-step-550: #949494;\r\n        --ion-color-step-600: #a0a0a0;\r\n        --ion-color-step-650: #acacac;\r\n        --ion-color-step-700: #b8b8b8;\r\n        --ion-color-step-750: #c4c4c4;\r\n        --ion-color-step-800: #d0d0d0;\r\n        --ion-color-step-850: #dbdbdb;\r\n        --ion-color-step-900: #e7e7e7;\r\n        --ion-color-step-950: #f3f3f3;\r\n        --ion-item-background: #1e1e1e;\r\n        --ion-toolbar-background: #1f1f1f;\r\n        --ion-tab-bar-background: #1f1f1f;\r\n        --ion-card-background: #1e1e1e;\r\n    }\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\nion-search,\r\nion-input {\r\n    box-sizing: border-box;\r\n    /* Auto layout */\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 17px 20px;\r\n    gap: 10px;\r\n    /* position: absolute;\r\n    // width: 315px;\r\n    // height: 50px;\r\n    // left: 0px;\r\n    // top: 10px; */\r\n    background: #ffffff;\r\n    border: 1px solid #e8e8e8;\r\n    border-radius: 15px;\r\n}\r\n\r\n.has-focus {\r\n    border: 1px solid $warning !important;\r\n}\r\n\r\nion-label {\r\n    width: 30px;\r\n    height: 25px;\r\n    /* Headline/100 */\r\n    font-style: normal;\r\n    font-weight: 200;\r\n    font-size: 8px;\r\n    line-height: 25px;\r\n    /* identical to box height, or 208% */\r\n    letter-spacing: 0.01em;\r\n    /* Primary/Black/300 */\r\n    color: #bababa;\r\n    /* Inside auto layout */\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\nng-otp-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vdGhlbWUvZm9udC5zY3NzIiwiLi4vLi4vLi4vdGhlbWUvYnV0dG9uLnNjc3MiLCIuLi8uLi8uLi90aGVtZS9pbnB1dC5zY3NzIiwiY29kZS1tb2RhbC5wYWdlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs0Q0FDNEM7O0FDRDVDO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7O0FDL0NBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBRkZBLDBCQUEwQjs7QUFFMUI7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0o7O0FBRUEsOENBQThDOztBQUM5QyxtQkFBbUI7O0FBQ25CLGlCQUFpQjs7QUFDakIsa0JBQWtCOztBQUNsQixpQkFBaUI7O0FBQ2pCLGlCQUFpQjs7QUFDakIsZ0JBQWdCOztBQUNoQixjQUFjOztBQUNkLGdCQUFnQjs7QUFDaEIsZUFBZTs7QUFDZjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQywrQ0FBK0M7SUFDL0Msa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxpREFBaUQ7SUFDakQsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHNDQUFzQztJQUN0QyxnREFBZ0Q7SUFDaEQsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJOzs7SUFHQTtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLHFDQUFxQztRQUNyQyxxQ0FBcUM7UUFDckMsK0NBQStDO1FBQy9DLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLHVDQUF1QztRQUN2Qyx1Q0FBdUM7UUFDdkMsaURBQWlEO1FBQ2pELG9DQUFvQztRQUNwQyxtQ0FBbUM7UUFDbkMsNkJBQTZCO1FBQzdCLHVDQUF1QztRQUN2QyxzQ0FBc0M7UUFDdEMsZ0RBQWdEO1FBQ2hELG1DQUFtQztRQUNuQyxrQ0FBa0M7UUFDbEMsNEJBQTRCO1FBQzVCLHFDQUFxQztRQUNyQyxxQ0FBcUM7UUFDckMseUNBQXlDO1FBQ3pDLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDakMsNEJBQTRCO1FBQzVCLHFDQUFxQztRQUNyQyxxQ0FBcUM7UUFDckMseUNBQXlDO1FBQ3pDLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDakMsMkJBQTJCO1FBQzNCLG1DQUFtQztRQUNuQyxvQ0FBb0M7UUFDcEMsOENBQThDO1FBQzlDLGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMseUJBQXlCO1FBQ3pCLG1DQUFtQztRQUNuQyxrQ0FBa0M7UUFDbEMsc0NBQXNDO1FBQ3RDLCtCQUErQjtRQUMvQiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLHFDQUFxQztRQUNyQyxvQ0FBb0M7UUFDcEMsd0NBQXdDO1FBQ3hDLGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyxtQ0FBbUM7UUFDbkMsNkNBQTZDO1FBQzdDLGdDQUFnQztRQUNoQywrQkFBK0I7SUFDbkM7SUFDQTs7O0lBR0E7SUFDQTtRQUNJLCtCQUErQjtRQUMvQixtQ0FBbUM7UUFDbkMseUJBQXlCO1FBQ3pCLG1DQUFtQztRQUNuQyw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsOEJBQThCO1FBQzlCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksaURBQWlEO1FBQ2pELG1EQUFtRDtRQUNuRCxxREFBcUQ7SUFDekQ7SUFDQTs7O0lBR0E7SUFDQTtRQUNJLCtCQUErQjtRQUMvQixzQ0FBc0M7UUFDdEMseUJBQXlCO1FBQ3pCLG1DQUFtQztRQUNuQywyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QixpQ0FBaUM7UUFDakMsaUNBQWlDO1FBQ2pDLDhCQUE4QjtJQUNsQztBQUNKOztBR3BPQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Q7Ozs7bUJBSWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtBQUNoQjs7QUMzQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiY29kZS1tb2RhbC5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxyXG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy8gKi9cclxuXHJcbkBpbXBvcnQgXCJmb250LnNjc3NcIjtcclxuQGltcG9ydCBcImJ1dHRvbi5zY3NzXCI7XHJcblxyXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubmF2YiB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4kc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xyXG4kc2Vjb25kYXJ5OiAjMTY2OGZmO1xyXG4kcHJpbWFyeTogIzA0MWM3YTtcclxuJHRlcnRpYXJ5OiAjMWIxYjFiO1xyXG4kc3VjY2VzczogIzIwY2M4OTtcclxuJHdhcm5pbmc6ICNmY2QyNDA7XHJcbiRkYW5nZXI6ICNmZDViMWY7XHJcbiRkYXJrOiAjMWIxYjFiO1xyXG4kbWVkaXVtOiAjYmFiYWJhO1xyXG4kbGlnaHQ6ICNmM2YzZjM7XHJcbi5zdGFydHMge1xyXG4gICAgY29sb3I6ICR3YXJuaW5nO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMDQxYzdhO1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDQsIDI4LCAxMjI7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMDQxOTZiO1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjMWQzMzg3O1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTY2OGZmO1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMjIsIDEwNCwgMjU1O1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzEzNWNlMDtcclxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMmQ3N2ZmO1xyXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICMxYjFiMWI7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDI3LCAyNywgMjc7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjMTgxODE4O1xyXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzMyMzIzMjtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyMGNjODk7XHJcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMzIsIDIwNCwgMTM3O1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzFjYjQ3OTtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzM2ZDE5NTtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmY2QyNDA7XHJcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjUyLCAyMTAsIDY0O1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2RlYjkzODtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZjZDc1MztcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZkNWIxZjtcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1MywgOTEsIDMxO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2RmNTAxYjtcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmQ2YjM1O1xyXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjYmFiYWJhO1xyXG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTg2LCAxODYsIDE4NjtcclxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICNhNGE0YTQ7XHJcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2MxYzFjMTtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjNmM2YzO1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDMsIDI0MywgMjQzO1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q2ZDZkNjtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIC8qXHJcbiAgICogRGFyayBDb2xvcnNcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcbiAgICBib2R5IHtcclxuICAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgICAgICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcclxuICAgICAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XHJcbiAgICAgICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcclxuICAgICAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcclxuICAgICAgICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcclxuICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICogaU9TIERhcmsgVGhlbWVcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcbiAgICAuaW9zIGJvZHkge1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xyXG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XHJcbiAgICB9XHJcbiAgICAuaW9zIGlvbi1tb2RhbCB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcclxuICAgICAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XHJcbiAgICAgICAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xyXG4gICAgLm1kIGJvZHkge1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgICAgICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcclxuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XHJcbiAgICAgICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xyXG4gICAgICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcclxuICAgICAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XHJcbiAgICB9XHJcbn0iLCIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxufVxyXG5cclxuLmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi4xOXJlbTtcclxufVxyXG5cclxuaDIsXHJcbi5oMiB7XHJcbiAgICBmb250LXNpemU6IDEuODhyZW07XHJcbn1cclxuXHJcbmgzLFxyXG4uaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5oNCxcclxuLmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmg1LFxyXG4uaDUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5oNixcclxuLmg2IHtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn0iLCJpb24tYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8tLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYigyNTIsIDIxMCwgNjQsIDAuMSk7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbmlvbi1zZWFyY2gsXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogQXV0byBsYXlvdXQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE3cHggMjBweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHdpZHRoOiAzMTVweDtcclxuICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgIC8vIGxlZnQ6IDBweDtcclxuICAgIC8vIHRvcDogMTBweDsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmhhcy1mb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkd2FybmluZyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAvKiBIZWFkbGluZS8xMDAgKi9cclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDIwOCUgKi9cclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICAvKiBQcmltYXJ5L0JsYWNrLzMwMCAqL1xyXG4gICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgICAvKiBJbnNpZGUgYXV0byBsYXlvdXQgKi9cclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICBvcmRlcjogMDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9pbnB1dC5zY3NzXCI7XHJcbm5nLW90cC1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9534:
/*!******************************************************************!*\
  !*** ./src/app/pages/code-modal/code-modal.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n<!---**********Enter code*************-->\r\n\r\n<ion-content class=\"ion-padding center\">\r\n  <ion-grid class=\"centerPage\">\r\n      <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\r\n          <h4 class=\"\">Verification Code</h4>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\r\n          <img src=\"assets/images/intro/forgot-password.svg\" class=\"responsiveImg ion-margin-horizontal\" alt=\"\" />\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\r\n          <p class=\"ion-text-center\">Please enter the verification code</p>\r\n      </ion-row>\r\n      <ng-otp-input (onInputChange)=\"valueChange($event)\" [config]=\"configInput\"></ng-otp-input>\r\n      <br />\r\n      <!-- <ion-button class=\"ion-margin-top\" (click)=\"navig()\" type=\"submit\" expand=\"block\" color=\"warning\">\r\n          Send\r\n      </ion-button> -->\r\n  </ion-grid>\r\n</ion-content>\r\n<!---**********Enter code*************-->\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_code-modal_code-modal_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_intro_intro_module_ts"],{

/***/ 1888:
/*!*****************************************************!*\
  !*** ./src/app/pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageRoutingModule": () => (/* binding */ IntroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 1800);




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ 8557:
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageModule": () => (/* binding */ IntroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 1888);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 1800);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);








let IntroPageModule = class IntroPageModule {
};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage],
    })
], IntroPageModule);



/***/ }),

/***/ 1800:
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page.html?ngResource */ 4013);
/* harmony import */ var _intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss?ngResource */ 3143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/functions.service */ 9806);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);







swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Virtual, swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
let IntroPage = class IntroPage {
    constructor(func, authservice) {
        this.func = func;
        this.authservice = authservice;
        this.config = {
            slidesPerView: 1,
            //spaceBetween: 50,
            pagination: true,
            // centeredSlides: true,
            // centeredSlidesBounds: true,
        };
    }
    ngOnInit() {
        this.func.presentSplash();
        this.func.dismissSplash();
    }
};
IntroPage.ctorParameters = () => [
    { type: src_app_services_functions_service__WEBPACK_IMPORTED_MODULE_3__.FunctionsService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService }
];
IntroPage.propDecorators = {
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['swiper', { static: false },] }]
};
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-intro',
        template: _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.None,
        styles: [_intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroPage);



/***/ }),

/***/ 3143:
/*!********************************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".swiper {\n  width: 100%;\n  height: 100%;\n}\n\n.centerPage {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.responsiveImg {\n  max-width: 80%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9qZXQlMjBJXFxwcm9qZXQlMjBzZW0lMjAxXFxwcm9qZXQtRE1XTVxcc3JjXFxhcHBcXHBhZ2VzXFxpbnRyb1xcaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6ImludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jZW50ZXJQYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZUltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufSIsIi5zd2lwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyUGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJlc3BvbnNpdmVJbWcge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */";

/***/ }),

/***/ 4013:
/*!********************************************************!*\
  !*** ./src/app/pages/intro/intro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Introduction </ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n    <ion-grid class=\"centerPage\">\r\n        <swiper #swiper [config]=\"config\">\r\n            <!-- <ng-template swiperSlide>\r\n                <img src=\"assets/logo/logo.svg\" alt=\"\" />\r\n            </ng-template> -->\r\n            <ng-template swiperSlide>\r\n                <img src=\"assets/images/intro/findDestination.svg\" class=\"responsiveImg ion-margin-horizontal\" alt=\"\" />\r\n                <h4 class=\"ion-margin-top\" color=\"primary\">Find Your Destination</h4>\r\n            </ng-template>\r\n            <ng-template swiperSlide>\r\n                <img src=\"assets/images/intro/selectDate.svg\" class=\"responsiveImg ion-margin-horizontal\" alt=\"\" />\r\n                <h4 class=\"ion-margin-top\" color=\"primary\">\r\n                    Select a guid and the date\r\n                </h4>\r\n            </ng-template>\r\n\r\n            <ng-template swiperSlide>\r\n                <img src=\"assets/images/intro/enjoyTrip.svg\" class=\"responsiveImg ion-margin-horizontal\" alt=\"\" />\r\n                <h4 class=\"ion-margin-top\" color=\"primary\">Enjoy your trip</h4>\r\n                <p class=\"ion-text-center\">\r\n                     sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\r\n                </p>\r\n                <ion-button [routerLink]=\"['/login']\" expand=\"block\" color=\"secondary\" shape=\"round\">Sign In</ion-button>\r\n                <!-- <ion-button [routerLink]=\"['/intr']\" expand=\"block\" shape=\"round\">Login</ion-button> -->\r\n            </ng-template>\r\n        </swiper>\r\n    </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_intro_intro_module_ts.js.map
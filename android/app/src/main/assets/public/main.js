(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auto-login.guard */ 3986);
/* harmony import */ var _guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/intro.guard */ 6893);
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/home.guard */ 3352);







const routes = [
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then((m) => m.LoginPageModule),
        canLoad: [_guards_intro_guard__WEBPACK_IMPORTED_MODULE_2__.IntroGuard, _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_1__.AutoLoginGuard],
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then((m) => m.TabsPageModule),
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_3__.HomeGuard],
    },
    {
        path: 'intro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_intro_intro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/intro/intro.module */ 8557)).then((m) => m.IntroPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
    },
    {
        path: 'forget-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_forget-password_forget-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forget-password/forget-password.module */ 9120)).then((m) => m.ForgetPasswordPageModule),
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/change-password/change-password.module */ 8292)).then((m) => m.ChangePasswordPageModule),
    },
    {
        path: 'intrests',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_intrests_intrests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/intrests/intrests.module */ 6332)).then((m) => m.IntrestsPageModule),
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_3__.HomeGuard],
    },
    {
        path: 'event',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_event_event_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/event/event.module */ 4608)).then((m) => m.EventPageModule),
    },
    {
        path: 'codeModal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_code-modal_code-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/code-modal/code-modal.module */ 2462)).then((m) => m.CodeModalPageModule),
    },
    {
        path: 'errorModal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_error-modal_error-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/error-modal/error-modal.module */ 3665)).then((m) => m.ErrorModalPageModule),
    },
    {
        path: 'form-guide',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_form-guide_form-guide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/form-guide/form-guide.module */ 2833)).then((m) => m.FormGuidePageModule),
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/search/search.module */ 281)).then((m) => m.SearchPageModule),
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then((m) => m.TabsPageModule),
        // canLoad: [AuthGuard],
    },
    {
        path: 'intro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_intro_intro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/intro/intro.module */ 8557)).then((m) => m.IntroPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'forget-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_forget-password_forget-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forget-password/forget-password.module */ 9120)).then((m) => m.ForgetPasswordPageModule),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("default-src_app_pages_home_home_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then((m) => m.HomePageModule),
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/change-password/change-password.module */ 8292)).then((m) => m.ChangePasswordPageModule),
    },
    {
        path: 'intrests',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_intrests_intrests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/intrests/intrests.module */ 6332)).then((m) => m.IntrestsPageModule),
    },
    {
        path: 'event',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_event_event_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/event/event.module */ 4608)).then((m) => m.EventPageModule),
    },
    {
        path: 'codeModal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_code-modal_code-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/code-modal/code-modal.module */ 2462)).then((m) => m.CodeModalPageModule),
    },
    {
        path: 'errorModal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_error-modal_error-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/error-modal/error-modal.module */ 3665)).then((m) => m.ErrorModalPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-otp-input */ 2981);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/splash/splash.component */ 4871);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-lottie */ 8530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _httpConfig_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpConfig.interceptor */ 2294);
/* harmony import */ var _pages_forget_password_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/forget-password/modal/modal.component */ 4889);
/* harmony import */ var _pages_forget_password_code_modal_code_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forget-password/code-modal/code-modal.component */ 2744);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);

















function playerFactory() {
    return __webpack_require__.e(/*! import() */ "node_modules_lottie-web_build_player_lottie_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web */ 9023, 23));
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_2__.SplashComponent,
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent,
            _pages_forget_password_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent,
            _pages_forget_password_code_modal_code_modal_component__WEBPACK_IMPORTED_MODULE_5__.CodeModalComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_13__.NgOtpInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            ngx_lottie__WEBPACK_IMPORTED_MODULE_14__.LottieModule.forRoot({ player: playerFactory }),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__.IonicStorageModule.forRoot(),
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
                useClass: _httpConfig_interceptor__WEBPACK_IMPORTED_MODULE_3__.HttpConfigInterceptor,
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.html?ngResource */ 5287);
/* harmony import */ var _navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss?ngResource */ 8754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NavbarComponent = class NavbarComponent {
    constructor() {
        this.isNotLoginPage = false;
    }
    ngOnInit() { }
};
NavbarComponent.ctorParameters = () => [];
NavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-navbar',
        template: _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavbarComponent);



/***/ }),

/***/ 4871:
/*!*******************************************************!*\
  !*** ./src/app/components/splash/splash.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashComponent": () => (/* binding */ SplashComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _splash_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.component.html?ngResource */ 8361);
/* harmony import */ var _splash_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.component.scss?ngResource */ 9049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let SplashComponent = class SplashComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.options = {
            path: 'assets/splash-location.json',
        };
    }
    onAnimate(animationItem) {
        console.log("hello splash");
    }
    ngOnInit() { }
    dismissComponent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.modalController.dismiss();
        });
    }
};
SplashComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
SplashComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splash',
        template: _splash_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_splash_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashComponent);



/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/functions.service */ 9806);






let AuthGuard = class AuthGuard {
    constructor(func, auth, route) {
        this.func = func;
        this.auth = auth;
        this.route = route;
    }
    canActivate() {
        return this.auth.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((user) => {
            if (!user) {
                //  this.func.dismissSplash();
                return true;
            }
            else {
                //  this.func.dismissSplash();
                this.route.navigate(['/tabs']);
                console.log('auth guard  yes');
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__.FunctionsService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 3986:
/*!********************************************!*\
  !*** ./src/app/guards/auto-login.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoLoginGuard": () => (/* binding */ AutoLoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let AutoLoginGuard = class AutoLoginGuard {
    canLoad(route, segments) {
        return true;
    }
};
AutoLoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], AutoLoginGuard);



/***/ }),

/***/ 3352:
/*!**************************************!*\
  !*** ./src/app/guards/home.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeGuard": () => (/* binding */ HomeGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token.service */ 1622);
/* harmony import */ var _services_functions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/functions.service */ 9806);






let HomeGuard = class HomeGuard {
    constructor(func, tokenService, route) {
        this.func = func;
        this.tokenService = tokenService;
        this.route = route;
    }
    canActivate() {
        return this.tokenService.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(user => {
            if (!user) {
                //  this.func.dismissSplash();
                this.route.navigate(['/intro']);
                return true;
            }
            else {
                //  this.func.dismissSplash();
                console.log("home guard  yes");
            }
        }));
    }
};
HomeGuard.ctorParameters = () => [
    { type: _services_functions_service__WEBPACK_IMPORTED_MODULE_1__.FunctionsService },
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
HomeGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], HomeGuard);



/***/ }),

/***/ 6893:
/*!***************************************!*\
  !*** ./src/app/guards/intro.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroGuard": () => (/* binding */ IntroGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let IntroGuard = class IntroGuard {
    canLoad(route, segments) {
        return true;
    }
};
IntroGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], IntroGuard);



/***/ }),

/***/ 2294:
/*!*******************************************!*\
  !*** ./src/app/httpConfig.interceptor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConfigInterceptor": () => (/* binding */ HttpConfigInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 190);







const TOKEN_KEY = 'token-key';
let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(modalController, storage) {
        this.modalController = modalController;
        this.storage = storage;
        this.loaderToShow = false;
    }
    intercept(request, next) {
        /* this.modalController.getTop().then(hasLoading =>{
            if(!hasLoading){
                this.modalController.create({
                    component: SplashComponent,
                    cssClass: 'my-custom-class',
                }).then(loading => loading.present());
            }
          });*/
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.storage.get(TOKEN_KEY)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((token) => {
            if (token) {
                request = request.clone({
                    headers: request.headers.set('Authorization', 'Bearer ' + token),
                });
            }
            if (!request.headers.has('Content-Type')) {
                request = request.clone({
                    headers: request.headers.set('Content-Type', 'application/json'),
                });
            }
            return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                        // this.modalController.dismiss();
                        default:
                            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
                    }
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
                }
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((event) => {
                return event;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => {
                // this.modalController.dismiss();
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
            }));
        }));
    }
};
HttpConfigInterceptor.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
HttpConfigInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()
], HttpConfigInterceptor);



/***/ }),

/***/ 2744:
/*!**************************************************************************!*\
  !*** ./src/app/pages/forget-password/code-modal/code-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeModalComponent": () => (/* binding */ CodeModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _code_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-modal.component.html?ngResource */ 3737);
/* harmony import */ var _code_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-modal.component.scss?ngResource */ 9844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_verification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/verification.service */ 3387);







const ip = 'localhost';
let CodeModalComponent = class CodeModalComponent {
    constructor(router, verificationService, modalCtrl) {
        this.router = router;
        this.verificationService = verificationService;
        this.modalCtrl = modalCtrl;
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
    }
    sendSMS() {
        return this.verificationService.sendSMS(this.num);
    }
    ngOnInit() {
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
            this.verificationService.returnToken(this.num).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.token = yield res['token'];
                console.log(this.token);
                const navigationExtras = {
                    state: {
                        token: this.token,
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
CodeModalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_verification_service__WEBPACK_IMPORTED_MODULE_2__.VerificationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
CodeModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-code-modal',
        template: _code_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_code_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodeModalComponent);



/***/ }),

/***/ 4889:
/*!****************************************************************!*\
  !*** ./src/app/pages/forget-password/modal/modal.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component.html?ngResource */ 378);
/* harmony import */ var _modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component.scss?ngResource */ 6252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ModalComponent = class ModalComponent {
    constructor(router, modalCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    goToLogin() {
        const navigationExtras = {
            state: {
                num: this.num,
            },
        };
        this.router.navigateByUrl('/login', navigationExtras);
        return this.modalCtrl.dismiss(navigationExtras, 'confirm');
    }
    cancel() {
        return this.modalCtrl.dismiss();
    }
    goToHome() {
        this.router.navigate(['/tabs/home']);
        return this.modalCtrl.dismiss();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modal',
        template: _modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalComponent);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var _ip_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ip.service */ 263);









const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService();
const TOKEN_KEY = 'token-key';
let AuthService = class AuthService {
    constructor(http, storage, plt, ipservice) {
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.ipservice = ipservice;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.storage.create();
        this.loadStoredToken();
    }
    loadStoredToken() {
        let platformObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.plt.ready());
        this.user = platformObs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.storage.get(TOKEN_KEY));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((token) => {
            console.log('token ach', token);
            if (token) {
                let decoded = helper.decodeToken(token);
                this.userData.next(decoded);
                return true;
            }
            else {
                return null;
            }
        }));
    }
    conxGet(credentials) {
        return this.http
            .get(`http://${this.ipservice.ip}:3001/users/signin`, {
            headers: {
                password: credentials.passwordCnx,
                username: credentials.usernameCnx,
            },
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => {
            return res['token'];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((token) => {
            let storageObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.storage.set(TOKEN_KEY, token));
            return storageObs;
        }));
    }
    inscriPost(user) {
        return this.http
            .post(`http://${this.ipservice.ip}:3001/users/signup`, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => {
            return res['token'];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((token) => {
            let storageObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.storage.set(TOKEN_KEY, token));
            return storageObs;
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ip_service__WEBPACK_IMPORTED_MODULE_0__.IpService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 9806:
/*!***********************************************!*\
  !*** ./src/app/services/functions.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionsService": () => (/* binding */ FunctionsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/splash/splash.component */ 4871);




let FunctionsService = class FunctionsService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    presentSplash() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_0__.SplashComponent,
                cssClass: 'my-custom-class',
            });
            return yield modal.present();
        });
    }
    dismissSplash() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => {
                this.modalController.dismiss().catch((err) => console.log(err));
            }, 2000);
        });
    }
};
FunctionsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
FunctionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], FunctionsService);



/***/ }),

/***/ 263:
/*!****************************************!*\
  !*** ./src/app/services/ip.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IpService": () => (/* binding */ IpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let IpService = class IpService {
    constructor() {
        //  192.168.30.253 192.168.1.12
        this.ip = 'localhost';
    }
};
IpService.ctorParameters = () => [];
IpService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], IpService);



/***/ }),

/***/ 1622:
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);







const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService();
const TOKEN_KEY = "token-key";
let TokenService = class TokenService {
    constructor(storage, plt) {
        this.storage = storage;
        this.plt = plt;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.storage.create();
        this.loadStoredToken();
    }
    loadStoredToken() {
        let platformObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.plt.ready());
        this.user = platformObs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.storage.get(TOKEN_KEY));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(token => {
            console.log("token ach", token);
            if (token) {
                let decoded = helper.decodeToken(token);
                this.userData.next(decoded);
                return true;
            }
            else {
                return null;
            }
        }));
    }
};
TokenService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform }
];
TokenService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ 3387:
/*!**************************************************!*\
  !*** ./src/app/services/verification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationService": () => (/* binding */ VerificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);









const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService();
const TOKEN_KEY = "token-key";
let VerificationService = class VerificationService {
    constructor(http, storage, plt, router) {
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.router = router;
        this.ip = '192.168.1.12';
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.storage.create();
    }
    verificationphone(EnterNumber) {
        return this.http.get(`http://${this.ip}:3001/verifications/verificationphone`, {
            headers: { phone: EnterNumber },
        });
    }
    sendSMS(num) {
        console.log("num fil service", num);
        return this.http.get(`http://${this.ip}:3001/verifications/sendsms`, {
            headers: { phone: num },
        });
    }
    returnToken(num) {
        return this.http.get(`http://${this.ip}:3001/verifications/${num}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
            console.log("token auth service", res['token']);
            return res['token'];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(token => {
            let decoded = helper.decodeToken(token);
            console.log("decocded", decoded);
            this.userData.next(decoded);
            let storageObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.storage.set(TOKEN_KEY, token));
            console.log("storageObs", storageObs);
            return storageObs;
        }));
    }
};
VerificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
VerificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], VerificationService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8754:
/*!********************************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9049:
/*!********************************************************************!*\
  !*** ./src/app/components/splash/splash.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.image {\n  width: 50%;\n}\n\n.video {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9qZXQlMjBJXFxwcm9qZXQlMjBzZW0lMjAxXFxwcm9qZXQtRE1XTVxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNwbGFzaFxcc3BsYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3BsYXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udmlkZW8ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufSIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi52aWRlbyB7XG4gIHdpZHRoOiA2MCU7XG59Il19 */";

/***/ }),

/***/ 9844:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/forget-password/code-modal/code-modal.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/*// Ionic Variables and Theming. For more info, please see:\n// http://ionicframework.com/docs/theming/ */\n* {\n  font-family: \"Montserrat\";\n}\n.h1 {\n  font-size: 2.19rem;\n}\nh2,\n.h2 {\n  font-size: 1.88rem;\n}\nh3,\n.h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\nh4,\n.h4 {\n  font-size: 1.13rem;\n  font-weight: 600;\n}\nh5,\n.h5 {\n  font-size: 1rem;\n}\nh6,\n.h6 {\n  font-size: 0.9375rem;\n}\np {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  font-weight: 300;\n}\nbody {\n  font-size: 1rem;\n  font-family: \"Montserrat\";\n  font-weight: initial;\n  line-height: normal;\n  -webkit-font-smoothing: antialiased;\n}\nion-button {\n  --color: white;\n  --border-radius: 10px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  font-weight: 400;\n  text-transform: none;\n}\n/** Ionic CSS Variables **/\nion-item {\n  margin-left: 24px;\n  margin-right: 24px;\n}\nion-header {\n  padding: 5px;\n}\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.navb img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 10%;\n}\n.starts {\n  color: #fcd240;\n}\n:root {\n  --ion-color-primary: #041c7a;\n  --ion-color-primary-rgb: 4, 28, 122;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #04196b;\n  --ion-color-primary-tint: #1d3387;\n  --ion-color-secondary: #1668ff;\n  --ion-color-secondary-rgb: 22, 104, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #135ce0;\n  --ion-color-secondary-tint: #2d77ff;\n  --ion-color-tertiary: #1b1b1b;\n  --ion-color-tertiary-rgb: 27, 27, 27;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #181818;\n  --ion-color-tertiary-tint: #323232;\n  --ion-color-success: #20cc89;\n  --ion-color-success-rgb: 32, 204, 137;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #1cb479;\n  --ion-color-success-tint: #36d195;\n  --ion-color-warning: #fcd240;\n  --ion-color-warning-rgb: 252, 210, 64;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #deb938;\n  --ion-color-warning-tint: #fcd753;\n  --ion-color-danger: #fd5b1f;\n  --ion-color-danger-rgb: 253, 91, 31;\n  --ion-color-danger-contrast: #000000;\n  --ion-color-danger-contrast-rgb: 0, 0, 0;\n  --ion-color-danger-shade: #df501b;\n  --ion-color-danger-tint: #fd6b35;\n  --ion-color-medium: #bababa;\n  --ion-color-medium-rgb: 186, 186, 186;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #a4a4a4;\n  --ion-color-medium-tint: #c1c1c1;\n  --ion-color-light: #f3f3f3;\n  --ion-color-light-rgb: 243, 243, 243;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d6d6d6;\n  --ion-color-light-tint: #f4f4f4;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n  * Dark Colors\n  * -------------------------------------------\n  */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66, 140, 255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255, 255, 255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80, 200, 255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255, 255, 255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106, 100, 255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47, 223, 117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0, 0, 0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255, 213, 52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0, 0, 0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255, 73, 97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255, 255, 255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244, 245, 248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0, 0, 0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152, 154, 162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0, 0, 0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34, 36, 40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255, 255, 255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n  /*\n  * iOS Dark Theme\n  * -------------------------------------------\n  */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0, 0, 0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255, 255, 255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n  /*\n  * Material Design Dark Theme\n  * -------------------------------------------\n  */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18, 18, 18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255, 255, 255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\nion-search,\nion-input {\n  box-sizing: border-box;\n  /* Auto layout */\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 17px 20px;\n  gap: 10px;\n  /* position: absolute;\n  // width: 315px;\n  // height: 50px;\n  // left: 0px;\n  // top: 10px; */\n  background: #ffffff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n}\n.has-focus {\n  border: 1px solid #fcd240 !important;\n}\nion-label {\n  width: 30px;\n  height: 25px;\n  /* Headline/100 */\n  font-style: normal;\n  font-weight: 200;\n  font-size: 8px;\n  line-height: 25px;\n  /* identical to box height, or 208% */\n  letter-spacing: 0.01em;\n  /* Primary/Black/300 */\n  color: #bababa;\n  /* Inside auto layout */\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\nng-otp-input {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aGVtZVxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGhlbWVcXGZvbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamV0JTIwSVxccHJvamV0JTIwc2VtJTIwMVxccHJvamV0LURNV01cXHNyY1xcYXBwXFxwYWdlc1xcZm9yZ2V0LXBhc3N3b3JkXFxjb2RlLW1vZGFsXFxjb2RlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHRoZW1lXFxidXR0b24uc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aGVtZVxcaW5wdXQuc2NzcyIsImNvZGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7NENBQUE7QUNBQTtFQUNJLHlCQUFBO0FDR0o7QURBQTtFQUNJLGtCQUFBO0FDR0o7QURBQTs7RUFFSSxrQkFBQTtBQ0dKO0FEQUE7O0VBRUksaUJBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEQUE7O0VBRUksa0JBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEQUE7O0VBRUksZUFBQTtBQ0dKO0FEQUE7O0VBRUksb0JBQUE7QUNHSjtBREFBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0o7QURBQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQ0dKO0FDakRBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QURtREo7QUZwREEsMEJBQUE7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUVzREo7QUZuREE7RUFDSSxZQUFBO0FFc0RKO0FGbkRBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtBRXNESjtBRmxESTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRXFEUjtBRnZDQTtFQUNJLGNBTk07QUVnRFY7QUZ2Q0E7RUFDSSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUUwQ0o7QUZ2Q0E7RUFDSTs7O0dBQUE7RUFJQTtJQUNJLDRCQUFBO0lBQ0EscUNBQUE7SUFDQSxxQ0FBQTtJQUNBLCtDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsdUNBQUE7SUFDQSx1Q0FBQTtJQUNBLGlEQUFBO0lBQ0Esb0NBQUE7SUFDQSxtQ0FBQTtJQUNBLDZCQUFBO0lBQ0EsdUNBQUE7SUFDQSxzQ0FBQTtJQUNBLGdEQUFBO0lBQ0EsbUNBQUE7SUFDQSxrQ0FBQTtJQUNBLDRCQUFBO0lBQ0EscUNBQUE7SUFDQSxxQ0FBQTtJQUNBLHlDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUNBLDRCQUFBO0lBQ0EscUNBQUE7SUFDQSxxQ0FBQTtJQUNBLHlDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxvQ0FBQTtJQUNBLDhDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsbUNBQUE7SUFDQSxrQ0FBQTtJQUNBLHNDQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtJQUNBLDJCQUFBO0lBQ0EscUNBQUE7SUFDQSxvQ0FBQTtJQUNBLHdDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUNBLDBCQUFBO0lBQ0EsaUNBQUE7SUFDQSxtQ0FBQTtJQUNBLDZDQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtFRTBDTjtFRnhDRTs7O0dBQUE7RUFJQTtJQUNJLCtCQUFBO0lBQ0EsbUNBQUE7SUFDQSx5QkFBQTtJQUNBLG1DQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw4QkFBQTtJQUNBLDhCQUFBO0VFMENOO0VGeENFO0lBQ0ksaURBQUE7SUFDQSxtREFBQTtJQUNBLHFEQUFBO0VFMENOO0VGeENFOzs7R0FBQTtFQUlBO0lBQ0ksK0JBQUE7SUFDQSxzQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsbUNBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7SUFDQSxpQ0FBQTtJQUNBLGlDQUFBO0lBQ0EsOEJBQUE7RUUwQ047QUFDRjtBRTdRQTtFQUNJLHFCQUFBO0FGK1FKO0FFNVFBOztFQUVJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBOzs7O2lCQUFBO0VBS0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FGK1FKO0FFNVFBO0VBQ0ksb0NBQUE7QUYrUUo7QUU1UUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBRitRSjtBR3pUQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUg0VEoiLCJmaWxlIjoiY29kZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxyXG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy8gKi9cclxuXHJcbkBpbXBvcnQgXCJmb250LnNjc3NcIjtcclxuQGltcG9ydCBcImJ1dHRvbi5zY3NzXCI7XHJcblxyXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubmF2YiB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4kc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xyXG4kc2Vjb25kYXJ5OiAjMTY2OGZmO1xyXG4kcHJpbWFyeTogIzA0MWM3YTtcclxuJHRlcnRpYXJ5OiAjMWIxYjFiO1xyXG4kc3VjY2VzczogIzIwY2M4OTtcclxuJHdhcm5pbmc6ICNmY2QyNDA7XHJcbiRkYW5nZXI6ICNmZDViMWY7XHJcbiRkYXJrOiAjMWIxYjFiO1xyXG4kbWVkaXVtOiAjYmFiYWJhO1xyXG4kbGlnaHQ6ICNmM2YzZjM7XHJcbi5zdGFydHMge1xyXG4gICAgY29sb3I6ICR3YXJuaW5nO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMDQxYzdhO1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDQsIDI4LCAxMjI7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMDQxOTZiO1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjMWQzMzg3O1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTY2OGZmO1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMjIsIDEwNCwgMjU1O1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzEzNWNlMDtcclxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMmQ3N2ZmO1xyXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICMxYjFiMWI7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDI3LCAyNywgMjc7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjMTgxODE4O1xyXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzMyMzIzMjtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyMGNjODk7XHJcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMzIsIDIwNCwgMTM3O1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzFjYjQ3OTtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzM2ZDE5NTtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmY2QyNDA7XHJcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjUyLCAyMTAsIDY0O1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2RlYjkzODtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZjZDc1MztcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZkNWIxZjtcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1MywgOTEsIDMxO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2RmNTAxYjtcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmQ2YjM1O1xyXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjYmFiYWJhO1xyXG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTg2LCAxODYsIDE4NjtcclxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICNhNGE0YTQ7XHJcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2MxYzFjMTtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjNmM2YzO1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDMsIDI0MywgMjQzO1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q2ZDZkNjtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIC8qXHJcbiAgICogRGFyayBDb2xvcnNcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcbiAgICBib2R5IHtcclxuICAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgICAgICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcclxuICAgICAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XHJcbiAgICAgICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcclxuICAgICAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcclxuICAgICAgICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcclxuICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICogaU9TIERhcmsgVGhlbWVcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcbiAgICAuaW9zIGJvZHkge1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xyXG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XHJcbiAgICB9XHJcbiAgICAuaW9zIGlvbi1tb2RhbCB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcclxuICAgICAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XHJcbiAgICAgICAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xyXG4gICAgLm1kIGJvZHkge1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgICAgICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcclxuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XHJcbiAgICAgICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xyXG4gICAgICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcclxuICAgICAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XHJcbiAgICB9XHJcbn0iLCIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxufVxyXG5cclxuLmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi4xOXJlbTtcclxufVxyXG5cclxuaDIsXHJcbi5oMiB7XHJcbiAgICBmb250LXNpemU6IDEuODhyZW07XHJcbn1cclxuXHJcbmgzLFxyXG4uaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5oNCxcclxuLmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmg1LFxyXG4uaDUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5oNixcclxuLmg2IHtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn0iLCIvKi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nLyAqL1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cblxuLmgxIHtcbiAgZm9udC1zaXplOiAyLjE5cmVtO1xufVxuXG5oMixcbi5oMiB7XG4gIGZvbnQtc2l6ZTogMS44OHJlbTtcbn1cblxuaDMsXG4uaDMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDQsXG4uaDQge1xuICBmb250LXNpemU6IDEuMTNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg1LFxuLmg1IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5oNixcbi5oNiB7XG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuaW9uLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5hdmIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5zdGFydHMge1xuICBjb2xvcjogI2ZjZDI0MDtcbn1cblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMDQxYzdhO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNCwgMjgsIDEyMjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMwNDE5NmI7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzFkMzM4NztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjMTY2OGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAyMiwgMTA0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMTM1Y2UwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzJkNzdmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICMxYjFiMWI7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjcsIDI3LCAyNztcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICMxODE4MTg7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICMzMjMyMzI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyMGNjODk7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAzMiwgMjA0LCAxMzc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMWNiNDc5O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMzNmQxOTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmY2QyNDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTIsIDIxMCwgNjQ7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZGViOTM4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmY2Q3NTM7XG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZkNWIxZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjUzLCA5MSwgMzE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZGY1MDFiO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZkNmIzNTtcbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjYmFiYWJhO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxODYsIDE4NiwgMTg2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogI2E0YTRhNDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNjMWMxYzE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjNmM2YzO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0MywgMjQzLCAyNDM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDZkNmQ2O1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjRmNGY0O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC8qXG4gICogRGFyayBDb2xvcnNcbiAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG4gIGJvZHkge1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuICAgIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAgIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG4gICAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xuICB9XG4gIC8qXG4gICogaU9TIERhcmsgVGhlbWVcbiAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG4gIC5pb3MgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbiAgfVxuICAuaW9zIGlvbi1tb2RhbCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gICAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIH1cbiAgLypcbiAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cbiAgLm1kIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIH1cbn1cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG5pb24tc2VhcmNoLFxuaW9uLWlucHV0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogQXV0byBsYXlvdXQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTdweCAyMHB4O1xuICBnYXA6IDEwcHg7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gd2lkdGg6IDMxNXB4O1xuICAvLyBoZWlnaHQ6IDUwcHg7XG4gIC8vIGxlZnQ6IDBweDtcbiAgLy8gdG9wOiAxMHB4OyAqL1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uaGFzLWZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjZDI0MCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAvKiBIZWFkbGluZS8xMDAgKi9cbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyMDglICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIC8qIFByaW1hcnkvQmxhY2svMzAwICovXG4gIGNvbG9yOiAjYmFiYWJhO1xuICAvKiBJbnNpZGUgYXV0byBsYXlvdXQgKi9cbiAgZmxleDogbm9uZTtcbiAgb3JkZXI6IDA7XG4gIGZsZXgtZ3JvdzogMDtcbn1cblxubmctb3RwLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59IiwiaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8vLS1ib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2IoMjUyLCAyMTAsIDY0LCAwLjEpO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn0iLCJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG5pb24tc2VhcmNoLFxyXG5pb24taW5wdXQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIEF1dG8gbGF5b3V0ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDIwcHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB3aWR0aDogMzE1cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XHJcbiAgICAvLyBsZWZ0OiAwcHg7XHJcbiAgICAvLyB0b3A6IDEwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5oYXMtZm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHdhcm5pbmcgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgLyogSGVhZGxpbmUvMTAwICovXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyMDglICovXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgLyogUHJpbWFyeS9CbGFjay8zMDAgKi9cclxuICAgIGNvbG9yOiAjYmFiYWJhO1xyXG4gICAgLyogSW5zaWRlIGF1dG8gbGF5b3V0ICovXHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgb3JkZXI6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvaW5wdXQuc2Nzc1wiO1xyXG5uZy1vdHAtaW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 6252:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/forget-password/modal/modal.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9qZXQlMjBJXFxwcm9qZXQlMjBzZW0lMjAxXFxwcm9qZXQtRE1XTVxcc3JjXFxhcHBcXHBhZ2VzXFxmb3JnZXQtcGFzc3dvcmRcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <ion-menu side=\"start\" contentId=\"content\">\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-title class=\"menu-title\">Menu</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-menu-toggle auto-hide=\"true\">\r\n                <ion-item routerLink=\"/tabs/tab1\" routerDirection=\"forward\">\r\n                    <ion-label>Tab 1</ion-label>\r\n                </ion-item>\r\n                <ion-item routerLink=\"/tabs/tab2\" routerDirection=\"forward\">\r\n                    <ion-label>Tab 2</ion-label>\r\n                </ion-item>\r\n                <ion-item routerLink=\"/tabs/tab3\" routerDirection=\"forward\">\r\n                    <ion-label>Tab 3</ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu> -->\r\n<ion-router-outlet id=\"content\"></ion-router-outlet>";

/***/ }),

/***/ 5287:
/*!********************************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <ion-header>\r\n    <ion-toolbar class=\"navb\">\r\n        <ion-row class=\"ion-align-items-center ion-justify-content-between\">\r\n            <div>\r\n                <ion-buttons slot=\"start\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                </ion-buttons>\r\n            </div>\r\n            <img src=\"../../../assets/logo/logo.svg\" alt=\"\" srcset=\"\" />\r\n            <div class=\"\">\r\n                <ion-icon class=\"ion-margin-end\" src=\"../../../assets/icon/add-square.svg\"></ion-icon>\r\n                <ion-icon class=\"ion-margin-end\" src=\"../../../assets/icon/search-normal.svg\"></ion-icon>\r\n            </div>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-header> -->";

/***/ }),

/***/ 8361:
/*!********************************************************************!*\
  !*** ./src/app/components/splash/splash.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"spalsh-animation\">\n    <div class=\"splash-video\">\n        <div class=\"lottie-animation mt-10\">\n            <ion-grid class=\"centerPage\">\n                <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\n                    <img class=\"image\" src=\"assets/logo/logo.svg\" alt=\"\" />\n                </ion-row>\n                <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\n                    <ng-lottie class=\"video\" [options]=\"options\" (animationCreated)=\"onAnimate($event)\">\n                    </ng-lottie>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 3737:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/forget-password/code-modal/code-modal.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!---**********Enter code*************-->\n\n<ion-content class=\"ion-padding center\">\n    <ion-grid class=\"centerPage\">\n        <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\n            <h4 class=\"\">Verification Code</h4>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\n            <img src=\"assets/images/intro/forgot-password.svg\" class=\"responsiveImg ion-margin-horizontal\" alt=\"\" />\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\n            <p class=\"ion-text-center\">Please enter the verification code</p>\n        </ion-row>\n        <ng-otp-input (onInputChange)=\"valueChange($event)\" [config]=\"configInput\"></ng-otp-input>\n        <br />\n        <!-- <ion-button class=\"ion-margin-top\" (click)=\"navig()\" type=\"submit\" expand=\"block\" color=\"warning\">\n            Send\n        </ion-button> -->\n    </ion-grid>\n</ion-content>\n<!---**********Enter code*************-->";

/***/ }),

/***/ 378:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/forget-password/modal/modal.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--*************** Modal qui montre que le num n'existe pas *************-->\n<ion-content class=\"ion-padding center\">\n    <div class=\"ion-margin-top ion-text-center\">\n        <ion-label>This account does not existe </ion-label>\n        <h6>Do you want to register ?</h6>\n    </div>\n    <div class=\"ion-margin-top ion-text-center\">\n        <ion-button (click)=\"goToLogin()\" routerLink=\"/login\" [state]=\"\" type=\"\" color=\"warning\">Register</ion-button>\n        <ion-button (click)=\"cancel()\" type=\"\" color=\"light\">Cancel</ion-button>\n        <ion-button (click)=\"goToHome()\">go to home</ion-button>\n    </div>\n</ion-content>\n<!--*************** Modal qui montre que le num n'existe pas *************-->";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
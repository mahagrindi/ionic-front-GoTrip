"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);









let LoginPage = class LoginPage {
    constructor(formBuilder, route, alertController, authservice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.alertController = alertController;
        this.authservice = authservice;
        this.config = {
            slidesPerView: 1,
            //spaceBetween: 50,
            pagination: false,
        };
        this.user = null;
        this.email = '';
        this.password = '';
        this.username = '';
        this.phone = '';
        this.sexe = '';
        this.usernameCnx = '';
        this.passwordCnx = '';
        this.isSubmitted = false;
        this.errors = [
            { type: 'required', message: 'Champ Obligatoire !' },
            { type: 'pattern', message: 'Vérifier le format du champ' },
        ];
        if (!(0,_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.isPlatform)('capacitor')) {
            _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuth.initialize();
        }
    }
    slideNext() {
        this.swiper.swiperRef.slideNext(100);
    }
    slidePrev() {
        this.swiper.swiperRef.slidePrev(100);
    }
    ngOnInit() {
        this.InscriptionForm = this.formBuilder.group({
            username: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
                ],
            ],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^\\d{8}$')]],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
                ],
            ],
            sexe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.loginForm = this.formBuilder.group({
            usernameCnx: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
                ],
            ],
            passwordCnx: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ionViewDidEnter() {
        console.log('history', history.state.num);
        if (history.state.num) {
            this.swiper.swiperRef.slideNext(0);
            this.phone = history.state.num;
            this.email = '';
            this.password = '';
            this.username = '';
            this.sexe = '';
            this.usernameCnx = '';
            this.passwordCnx = '';
            this.isSubmitted = false;
        }
    }
    get errorControl() {
        return this.loginForm.controls;
    }
    // alertMessage: String;
    presentAlert(alertHeader, alertMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    onSubmitCnx() {
        this.credentials = {
            passwordCnx: this.passwordCnx,
            usernameCnx: this.usernameCnx,
        };
        this.isSubmitted = true;
        if (!this.loginForm.valid) {
            const alertMessage = 'Please provide all the required values!';
            const alertHeader = 'Missing Informations!';
            this.presentAlert(alertHeader, alertMessage);
            // console.log('Please provide all the required values!');
            return false;
        }
        else {
            this.authservice.conxGet(this.credentials).subscribe((res) => {
                this.route.navigate(['/tabs']);
                console.log(res);
            }, (err) => {
                this.presentAlert(err.error, 'please check your information');
                console.log('err login page', err);
            });
        }
    }
    onSubmitInscription() {
        this.isSubmitted = true;
        if (!this.InscriptionForm.valid) {
            const alertMessage = 'Please provide all the required values!';
            const alertHeader = 'Missing Informations!';
            this.presentAlert(alertHeader, alertMessage);
            return false;
        }
        else {
            let user = {
                password: this.password,
                username: this.username,
                email: this.email,
                phone: this.phone,
                sexe: this.sexe,
            };
            this.authservice.inscriPost(user).subscribe((res) => {
                this.route.navigate(['/intrests']);
                console.log(res);
            }, (err) => {
                console.log(err.error);
            });
            console.log(this.InscriptionForm.value);
        }
    }
    loginGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuth.signIn().catch((error) => { });
            console.log(this.user);
            console.log(this.user);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
LoginPage.propDecorators = {
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['swiper', { static: false },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };
  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };
  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };
  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};
const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;
const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;
  const config = webPlugin.config;
  const Plugins = cap.Plugins;
  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  }
  // TODO: add link to upgrade guide
  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};
var ExceptionCode;
(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */
  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
}
const getPlatformId = win => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};
const createCapacitor = win => {
  var _a, _b, _c, _d, _e;
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */
  const capPlatforms = win.CapacitorPlatforms;
  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
  const defaultIsNativePlatform = () => getPlatform() !== 'web';
  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }
    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }
    return false;
  };
  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;
  const defaultGetPluginHeader = pluginName => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };
  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
  const handleError = err => win.console.error(err);
  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };
  const registeredPlugins = new Map();
  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }
        return jsImplementation;
      });
      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = prop => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }
        return p;
      };
      // Some flair ✨
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });
        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();
      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;
          case 'toJSON':
            return () => ({});
          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;
          case 'removeListener':
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };
  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
  // Add in convertFileSrc for web, it will already be available in native context
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  // Deprecated props
  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};
const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);
const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};
    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }
  addListener(eventName, listenerFunc) {
    var _this = this;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listenerFunc);
    // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });
      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();
    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });
        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }
  removeAllListeners() {
    var _this2 = this;
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};
      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }
      _this2.windowListeners = {};
    })();
  }
  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }
  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    var _this3 = this;
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      _this3.listeners[eventName].splice(index, 1);
      // If there are no more listeners for this type of event,
      // remove the window listener
      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
}
const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/
/******** COOKIES PLUGIN ********/
/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */
const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
class CapacitorCookiesPluginWeb extends WebPlugin {
  setCookie(options) {
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        // Clean & sanitize options
        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="
        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"
        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  deleteCookie(options) {
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearCookies() {
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
  clearAllCookies() {
    var _this4 = this;
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }
}
const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
});
// UTILITY FUNCTIONS
/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */
const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        // remove prefix "data:application/pdf;base64,"
        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(blob);
    });
  });
  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */
const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */
const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      // last character will always be "&" so slice it off
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, '');
  // Remove initial "&" from the reduce
  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */
const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra);
  // Get the content-type
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || '';
  // If body is already a string, then pass it through as-is.
  if (typeof options.data === 'string') {
    output.body = options.data;
  }
  // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary
    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
// WEB IMPLEMENTATION
class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || '';
      // Default to 'text' responseType so no parsing happens
      let {
        responseType = 'text'
      } = response.ok ? options : {};
      // If the response content-type is json, force the response to be json
      if (contentType.includes('application/json')) {
        responseType = 'json';
      }
      let data;
      let blob;
      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case 'json':
          data = yield response.json();
          break;
        case 'document':
        case 'text':
        default:
          data = yield response.text();
      }
      // Convert fetch headers to Capacitor HttpHeaders
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    var _this5 = this;
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    var _this6 = this;
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    var _this7 = this;
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    var _this8 = this;
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    var _this9 = this;
    return (0,C_Users_yosra_OneDrive_Bureau_dmwm_2_projet_I_projet_sem_1_projet_DMWM_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }
}
const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 5579:
/*!*************************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/definitions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 1784:
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAuth": () => (/* binding */ GoogleAuth)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5579);

const GoogleAuth = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('GoogleAuth', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_codetrix-studio_capacitor-google-auth_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4707)).then(m => new m.GoogleAuthWeb())
});



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/*// Ionic Variables and Theming. For more info, please see:\n// http://ionicframework.com/docs/theming/ */\n* {\n  font-family: \"Montserrat\";\n}\n.h1 {\n  font-size: 2.19rem;\n}\nh2,\n.h2 {\n  font-size: 1.88rem;\n}\nh3,\n.h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\nh4,\n.h4 {\n  font-size: 1.13rem;\n  font-weight: 600;\n}\nh5,\n.h5 {\n  font-size: 1rem;\n}\nh6,\n.h6 {\n  font-size: 0.9375rem;\n}\np {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  font-weight: 300;\n}\nbody {\n  font-size: 1rem;\n  font-family: \"Montserrat\";\n  font-weight: initial;\n  line-height: normal;\n  -webkit-font-smoothing: antialiased;\n}\nion-button {\n  --color: white;\n  --border-radius: 10px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  font-weight: 400;\n  text-transform: none;\n}\n/** Ionic CSS Variables **/\nion-item {\n  margin-left: 24px;\n  margin-right: 24px;\n}\nion-header {\n  padding: 5px;\n}\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.navb img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 10%;\n}\n.starts {\n  color: #fcd240;\n}\n:root {\n  --ion-color-primary: #041c7a;\n  --ion-color-primary-rgb: 4, 28, 122;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #04196b;\n  --ion-color-primary-tint: #1d3387;\n  --ion-color-secondary: #1668ff;\n  --ion-color-secondary-rgb: 22, 104, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #135ce0;\n  --ion-color-secondary-tint: #2d77ff;\n  --ion-color-tertiary: #1b1b1b;\n  --ion-color-tertiary-rgb: 27, 27, 27;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #181818;\n  --ion-color-tertiary-tint: #323232;\n  --ion-color-success: #20cc89;\n  --ion-color-success-rgb: 32, 204, 137;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #1cb479;\n  --ion-color-success-tint: #36d195;\n  --ion-color-warning: #fcd240;\n  --ion-color-warning-rgb: 252, 210, 64;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #deb938;\n  --ion-color-warning-tint: #fcd753;\n  --ion-color-danger: #fd5b1f;\n  --ion-color-danger-rgb: 253, 91, 31;\n  --ion-color-danger-contrast: #000000;\n  --ion-color-danger-contrast-rgb: 0, 0, 0;\n  --ion-color-danger-shade: #df501b;\n  --ion-color-danger-tint: #fd6b35;\n  --ion-color-medium: #bababa;\n  --ion-color-medium-rgb: 186, 186, 186;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #a4a4a4;\n  --ion-color-medium-tint: #c1c1c1;\n  --ion-color-light: #f3f3f3;\n  --ion-color-light-rgb: 243, 243, 243;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d6d6d6;\n  --ion-color-light-tint: #f4f4f4;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n  * Dark Colors\n  * -------------------------------------------\n  */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66, 140, 255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255, 255, 255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80, 200, 255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255, 255, 255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106, 100, 255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47, 223, 117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0, 0, 0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255, 213, 52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0, 0, 0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255, 73, 97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255, 255, 255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244, 245, 248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0, 0, 0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152, 154, 162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0, 0, 0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34, 36, 40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255, 255, 255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n  /*\n  * iOS Dark Theme\n  * -------------------------------------------\n  */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0, 0, 0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255, 255, 255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n  /*\n  * Material Design Dark Theme\n  * -------------------------------------------\n  */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18, 18, 18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255, 255, 255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\nion-search,\nion-input {\n  box-sizing: border-box;\n  /* Auto layout */\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 17px 20px;\n  gap: 10px;\n  /* position: absolute;\n  // width: 315px;\n  // height: 50px;\n  // left: 0px;\n  // top: 10px; */\n  background: #ffffff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n}\n.has-focus {\n  border: 1px solid #fcd240 !important;\n}\nion-label {\n  width: 30px;\n  height: 25px;\n  /* Headline/100 */\n  font-style: normal;\n  font-weight: 200;\n  font-size: 8px;\n  line-height: 25px;\n  /* identical to box height, or 208% */\n  letter-spacing: 0.01em;\n  /* Primary/Black/300 */\n  color: #bababa;\n  /* Inside auto layout */\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.underlinedButton {\n  border-bottom: 2px solid #fcd240;\n  font-weight: 300;\n}\n.inactiveButton {\n  font-weight: 300;\n}\n.horizontalLine {\n  width: 50%;\n  text-align: center;\n  border-bottom: 1px solid #bababa;\n  line-height: 0.1em;\n  margin: 24px 0 20px;\n}\n.horizontalLine span {\n  padding: 0 10px;\n}\n.swiper {\n  width: 100%;\n  height: 100%;\n}\nion-alert.custom-alert {\n  --backdrop-opacity: 0.7;\n}\n.custom-alert .alert-button-group {\n  padding: 8px;\n}\nbutton.alert-button.alert-button-confirm {\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-secondary-contrast);\n}\n.md button.alert-button.alert-button-confirm {\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRoZW1lXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXHRoZW1lXFxmb250LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamV0JTIwSVxccHJvamV0JTIwc2VtJTIwMVxccHJvamV0LURNV01cXHNyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXHRoZW1lXFxidXR0b24uc2NzcyIsIi4uXFwuLlxcLi5cXHRoZW1lXFxpbnB1dC5zY3NzIiwibG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzRDQUFBO0FDQUE7RUFDSSx5QkFBQTtBQ0dKO0FEQUE7RUFDSSxrQkFBQTtBQ0dKO0FEQUE7O0VBRUksa0JBQUE7QUNHSjtBREFBOztFQUVJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBREFBOztFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBREFBOztFQUVJLGVBQUE7QUNHSjtBREFBOztFQUVJLG9CQUFBO0FDR0o7QURBQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEQUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUNHSjtBQ2pEQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FEbURKO0FGcERBLDBCQUFBO0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FFc0RKO0FGbkRBO0VBQ0ksWUFBQTtBRXNESjtBRm5EQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7QUVzREo7QUZsREk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUVxRFI7QUZ2Q0E7RUFDSSxjQU5NO0FFZ0RWO0FGdkNBO0VBQ0ksNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FFMENKO0FGdkNBO0VBQ0k7OztHQUFBO0VBSUE7SUFDSSw0QkFBQTtJQUNBLHFDQUFBO0lBQ0EscUNBQUE7SUFDQSwrQ0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFDQSw4QkFBQTtJQUNBLHVDQUFBO0lBQ0EsdUNBQUE7SUFDQSxpREFBQTtJQUNBLG9DQUFBO0lBQ0EsbUNBQUE7SUFDQSw2QkFBQTtJQUNBLHVDQUFBO0lBQ0Esc0NBQUE7SUFDQSxnREFBQTtJQUNBLG1DQUFBO0lBQ0Esa0NBQUE7SUFDQSw0QkFBQTtJQUNBLHFDQUFBO0lBQ0EscUNBQUE7SUFDQSx5Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFDQSw0QkFBQTtJQUNBLHFDQUFBO0lBQ0EscUNBQUE7SUFDQSx5Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFDQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0Esb0NBQUE7SUFDQSw4Q0FBQTtJQUNBLGlDQUFBO0lBQ0EsZ0NBQUE7SUFDQSx5QkFBQTtJQUNBLG1DQUFBO0lBQ0Esa0NBQUE7SUFDQSxzQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7SUFDQSwyQkFBQTtJQUNBLHFDQUFBO0lBQ0Esb0NBQUE7SUFDQSx3Q0FBQTtJQUNBLGlDQUFBO0lBQ0EsZ0NBQUE7SUFDQSwwQkFBQTtJQUNBLGlDQUFBO0lBQ0EsbUNBQUE7SUFDQSw2Q0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7RUUwQ047RUZ4Q0U7OztHQUFBO0VBSUE7SUFDSSwrQkFBQTtJQUNBLG1DQUFBO0lBQ0EseUJBQUE7SUFDQSxtQ0FBQTtJQUNBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7SUFDQSw4QkFBQTtFRTBDTjtFRnhDRTtJQUNJLGlEQUFBO0lBQ0EsbURBQUE7SUFDQSxxREFBQTtFRTBDTjtFRnhDRTs7O0dBQUE7RUFJQTtJQUNJLCtCQUFBO0lBQ0Esc0NBQUE7SUFDQSx5QkFBQTtJQUNBLG1DQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDhCQUFBO0lBQ0EsaUNBQUE7SUFDQSxpQ0FBQTtJQUNBLDhCQUFBO0VFMENOO0FBQ0Y7QUU3UUE7RUFDSSxxQkFBQTtBRitRSjtBRTVRQTs7RUFFSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQTs7OztpQkFBQTtFQUtBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRitRSjtBRTVRQTtFQUNJLG9DQUFBO0FGK1FKO0FFNVFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUYrUUo7QUd6VEE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FINFRKO0FHelRBO0VBQ0ksZ0JBQUE7QUg0VEo7QUd6VEE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUg0VEo7QUd6VEE7RUFFSSxlQUFBO0FIMlRKO0FHeFRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUgyVEo7QUd4VEE7RUFDSSx1QkFBQTtBSDJUSjtBR3hUQTtFQUNJLFlBQUE7QUgyVEo7QUd4VEE7RUFDSSw0Q0FBQTtFQUNBLDBDQUFBO0FIMlRKO0FHeFRBO0VBQ0ksa0JBQUE7QUgyVEoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyovLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XHJcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nLyAqL1xyXG5cclxuQGltcG9ydCBcImZvbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiYnV0dG9uLnNjc3NcIjtcclxuXHJcbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiRzaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XHJcbiRzZWNvbmRhcnk6ICMxNjY4ZmY7XHJcbiRwcmltYXJ5OiAjMDQxYzdhO1xyXG4kdGVydGlhcnk6ICMxYjFiMWI7XHJcbiRzdWNjZXNzOiAjMjBjYzg5O1xyXG4kd2FybmluZzogI2ZjZDI0MDtcclxuJGRhbmdlcjogI2ZkNWIxZjtcclxuJGRhcms6ICMxYjFiMWI7XHJcbiRtZWRpdW06ICNiYWJhYmE7XHJcbiRsaWdodDogI2YzZjNmMztcclxuLnN0YXJ0cyB7XHJcbiAgICBjb2xvcjogJHdhcm5pbmc7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICMwNDFjN2E7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNCwgMjgsIDEyMjtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMwNDE5NmI7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICMxZDMzODc7XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxNjY4ZmY7XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAyMiwgMTA0LCAyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMTM1Y2UwO1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyZDc3ZmY7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzFiMWIxYjtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjcsIDI3LCAyNztcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICMxODE4MTg7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjMzIzMjMyO1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2VzczogIzIwY2M4OTtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAzMiwgMjA0LCAxMzc7XHJcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMWNiNDc5O1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMzZkMTk1O1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZjZDI0MDtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTIsIDIxMCwgNjQ7XHJcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZGViOTM4O1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmNkNzUzO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmQ1YjFmO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjUzLCA5MSwgMzE7XHJcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZGY1MDFiO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZDZiMzU7XHJcbiAgICAtLWlvbi1jb2xvci1tZWRpdW06ICNiYWJhYmE7XHJcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxODYsIDE4NiwgMTg2O1xyXG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogI2E0YTRhNDtcclxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYzFjMWMxO1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmM2YzZjM7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0MywgMjQzLCAyNDM7XHJcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDZkNmQ2O1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y0ZjRmNDtcclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgLypcclxuICAgKiBEYXJrIENvbG9yc1xyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cclxuICAgIGJvZHkge1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcclxuICAgICAgICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XHJcbiAgICAgICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgICAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAgICAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XHJcbiAgICAgICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcclxuICAgICAgICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcclxuICAgICAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAgICAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XHJcbiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcclxuICAgICAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgKiBpT1MgRGFyayBUaGVtZVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cclxuICAgIC5pb3MgYm9keSB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XHJcbiAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcclxuICAgIH1cclxuICAgIC5pb3MgaW9uLW1vZGFsIHtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xyXG4gICAgICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcclxuICAgICAgICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcbiAgICAubWQgYm9keSB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gICAgICAgIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcclxuICAgICAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xyXG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcclxuICAgICAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XHJcbiAgICAgICAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xyXG4gICAgICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcclxuICAgIH1cclxufSIsIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG59XHJcblxyXG4uaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjE5cmVtO1xyXG59XHJcblxyXG5oMixcclxuLmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS44OHJlbTtcclxufVxyXG5cclxuaDMsXHJcbi5oMyB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmg0LFxyXG4uaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjEzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaDUsXHJcbi5oNSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmg2LFxyXG4uaDYge1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufSIsIi8qLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuXG4uaDEge1xuICBmb250LXNpemU6IDIuMTlyZW07XG59XG5cbmgyLFxuLmgyIHtcbiAgZm9udC1zaXplOiAxLjg4cmVtO1xufVxuXG5oMyxcbi5oMyB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNCxcbi5oNCB7XG4gIGZvbnQtc2l6ZTogMS4xM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDUsXG4uaDUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmg2LFxuLmg2IHtcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XG59XG5cbnAge1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBmb250LXdlaWdodDogaW5pdGlhbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5pb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmF2YiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwJTtcbn1cblxuLnN0YXJ0cyB7XG4gIGNvbG9yOiAjZmNkMjQwO1xufVxuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMwNDFjN2E7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA0LCAyOCwgMTIyO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzA0MTk2YjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjMWQzMzg3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMxNjY4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDIyLCAxMDQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMxMzVjZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMmQ3N2ZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzFiMWIxYjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyNywgMjcsIDI3O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzE4MTgxODtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzMyMzIzMjtcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzIwY2M4OTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDMyLCAyMDQsIDEzNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMxY2I0Nzk7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzM2ZDE5NTtcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZjZDI0MDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1MiwgMjEwLCA2NDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkZWI5Mzg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZjZDc1MztcbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmQ1YjFmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTMsIDkxLCAzMTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkZjUwMWI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmQ2YjM1O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICNiYWJhYmE7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE4NiwgMTg2LCAxODY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjYTRhNGE0O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2MxYzFjMTtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmM2YzZjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQzLCAyNDMsIDI0MztcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkNmQ2ZDY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNGY0ZjQ7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLypcbiAgKiBEYXJrIENvbG9yc1xuICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cbiAgYm9keSB7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gICAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG4gIH1cbiAgLypcbiAgKiBpT1MgRGFyayBUaGVtZVxuICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cbiAgLmlvcyBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG4gIC5pb3MgaW9uLW1vZGFsIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgfVxuICAvKlxuICAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuICAubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAgIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gICAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbmlvbi1zZWFyY2gsXG5pb24taW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBBdXRvIGxheW91dCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxN3B4IDIwcHg7XG4gIGdhcDogMTBweDtcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAvLyB3aWR0aDogMzE1cHg7XG4gIC8vIGhlaWdodDogNTBweDtcbiAgLy8gbGVmdDogMHB4O1xuICAvLyB0b3A6IDEwcHg7ICovXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5oYXMtZm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmNkMjQwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIC8qIEhlYWRsaW5lLzEwMCAqL1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDIwOCUgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgLyogUHJpbWFyeS9CbGFjay8zMDAgKi9cbiAgY29sb3I6ICNiYWJhYmE7XG4gIC8qIEluc2lkZSBhdXRvIGxheW91dCAqL1xuICBmbGV4OiBub25lO1xuICBvcmRlcjogMDtcbiAgZmxleC1ncm93OiAwO1xufVxuXG4udW5kZXJsaW5lZEJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmNkMjQwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaW5hY3RpdmVCdXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaG9yaXpvbnRhbExpbmUge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmFiYWJhO1xuICBsaW5lLWhlaWdodDogMC4xZW07XG4gIG1hcmdpbjogMjRweCAwIDIwcHg7XG59XG5cbi5ob3Jpem9udGFsTGluZSBzcGFuIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uc3dpcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWFsZXJ0LmN1c3RvbS1hbGVydCB7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMC43O1xufVxuXG4uY3VzdG9tLWFsZXJ0IC5hbGVydC1idXR0b24tZ3JvdXAge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbmJ1dHRvbi5hbGVydC1idXR0b24uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xufVxuXG4ubWQgYnV0dG9uLmFsZXJ0LWJ1dHRvbi5hbGVydC1idXR0b24tY29uZmlybSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iLCJpb24tYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8tLWJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYigyNTIsIDIxMCwgNjQsIDAuMSk7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbmlvbi1zZWFyY2gsXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogQXV0byBsYXlvdXQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE3cHggMjBweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHdpZHRoOiAzMTVweDtcclxuICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgIC8vIGxlZnQ6IDBweDtcclxuICAgIC8vIHRvcDogMTBweDsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmhhcy1mb2N1cyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkd2FybmluZyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAvKiBIZWFkbGluZS8xMDAgKi9cclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDIwOCUgKi9cclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICAvKiBQcmltYXJ5L0JsYWNrLzMwMCAqL1xyXG4gICAgY29sb3I6ICNiYWJhYmE7XHJcbiAgICAvKiBJbnNpZGUgYXV0byBsYXlvdXQgKi9cclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICBvcmRlcjogMDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9pbnB1dC5zY3NzXCI7XHJcbi51bmRlcmxpbmVkQnV0dG9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkd2FybmluZztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZUJ1dHRvbiB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbExpbmUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWVkaXVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMjBweDtcclxufVxyXG5cclxuLmhvcml6b250YWxMaW5lIHNwYW4ge1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLnN3aXBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWFsZXJ0LmN1c3RvbS1hbGVydCB7XHJcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmN1c3RvbS1hbGVydCAuYWxlcnQtYnV0dG9uLWdyb3VwIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuYnV0dG9uLmFsZXJ0LWJ1dHRvbi5hbGVydC1idXR0b24tY29uZmlybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcclxufVxyXG5cclxuLm1kIGJ1dHRvbi5hbGVydC1idXR0b24uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>login</ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n<ion-content>\r\n    <div class=\"ion-margin-horizontal\">\r\n        <swiper #swiper [config]=\"config\">\r\n            <!---******************************************* partie connexion ********************************************************-->\r\n\r\n            <ng-template swiperSlide>\r\n                <div class=\"ion-margin-vertical ion-text-center\">\r\n                    <ion-button fill=\"clear\" class=\"underlinedButton\" color=\"warning\" (click)=\"slidePrev()\">Login</ion-button>\r\n                    <ion-button fill=\"clear\" class=\"inactiveButton\" color=\"dark\" (click)=\"slideNext()\">Register</ion-button>\r\n                </div>\r\n                <h3 color=\"primary\">Welcome Back!</h3>\r\n                <p>Please sign in and start the adventure 🚀</p>\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmitCnx()\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <ion-label position=\"\" class=\"ion-margin-top\">Username</ion-label>\r\n                        <ion-input formControlName=\"usernameCnx\" [(ngModel)]=\"usernameCnx\" type=\"text\" autofocus=\"true\" placeholder=\"Username\" required></ion-input>\r\n                        <div *ngFor=\"let er of errors\">\r\n                            <ng-container *ngIf=\"loginForm.get('usernameCnx').hasError(er.type) && (loginForm.get('usernameCnx').touched || loginForm.get('usernameCnx').dirty)\">\r\n                                <ion-note color=\"danger\"> {{er.message}} </ion-note>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <ion-label position=\"\">Password</ion-label>\r\n                        <ion-input formControlName=\"passwordCnx\" [(ngModel)]=\"passwordCnx\" class=\"\" type=\"password\" required placeholder=\"*******\" required>\r\n                        </ion-input>\r\n                        <div *ngFor=\"let er of errors\">\r\n                            <ng-container *ngIf=\"loginForm.get('passwordCnx').hasError(er.type) && (loginForm.get('passwordCnx').touched || loginForm.get('passwordCnx').dirty)\">\r\n                                <ion-note color=\"danger\"> {{er.message}} </ion-note>\r\n                            </ng-container>\r\n                        </div>\r\n                        <div class=\"ion-text-right ion-margin-top\">\r\n                            <ion-note color=\"secondary\">\r\n                                <a [routerLink]=\"['/forget-password']\" href=\"\">\r\n                  Forgot Password ?</a\r\n                ></ion-note\r\n              >\r\n            </div>\r\n          </div>\r\n\r\n          <ion-button\r\n            class=\"ion-margin-top\"\r\n            type=\"submit\"\r\n            expand=\"block\"\r\n            color=\"warning\"\r\n          >\r\n            Sign Up\r\n          </ion-button>\r\n        </form>\r\n        <p class=\"ion-text-center ion-margin-top\">\r\n          Already Have an account?\r\n          <a (click)=\"slidePrev()\" color=\"warning\">Connexion</a>\r\n                                </p>\r\n\r\n                                <ion-grid class=\"centerPage\">\r\n                                    <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\r\n                                        <hr style=\"width: 45%\" />\r\n                                        <span> or </span>\r\n                                        <hr style=\"width: 45%\" />\r\n                                    </ion-row>\r\n                                </ion-grid>\r\n\r\n                                <ion-button expand=\"block\" color=\"light\">\r\n                                    <ion-icon class=\"ion-margin-horizontal\" name=\"logo-google\" (click)=\"loginGoogle()\"></ion-icon>\r\n                                    Continue with google\r\n                                </ion-button>\r\n            </ng-template>\r\n            <!---******************************************* partie connexion  ********************************************************-->\r\n\r\n            <!---******************************************* partie inscription ********************************************************-->\r\n            <ng-template swiperSlide>\r\n                <div class=\"ion-margin-vertical ion-text-center\">\r\n                    <ion-button fill=\"clear\" class=\"inactiveButton\" color=\"dark\" (click)=\"slidePrev()\">Login</ion-button>\r\n                    <ion-button fill=\"clear\" class=\"underlinedButton\" color=\"warning\" (click)=\"slideNext()\">Register</ion-button>\r\n                </div>\r\n                <h3 color=\"primary\">Welcome !</h3>\r\n                <p>Please sign up and start the adventure 🚀</p>\r\n                <form [formGroup]=\"InscriptionForm\" (ngSubmit)=\"onSubmitInscription()\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <ion-label position=\"\" class=\"ion-margin-top\">Username</ion-label>\r\n                        <ion-input formControlName=\"username\" [(ngModel)]=\"username\" type=\"text\" autofocus=\"true\" placeholder=\"Username\"></ion-input>\r\n                        <div *ngFor=\"let er of errors\">\r\n                            <ng-container *ngIf=\"InscriptionForm.get('username').hasError(er.type) && (InscriptionForm.get('username').touched || InscriptionForm.get('username').dirty)\">\r\n                                <ion-note color=\"danger\"> {{er.message}} </ion-note>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <ion-label position=\"\" class=\"ion-margin-top\">Email</ion-label>\r\n                        <ion-input [ngClass]=\"{'ion-invalid':InscriptionForm.get('email').hasError('required'),'ion-valid':!InscriptionForm.get('email').hasError('required')}\" [(ngModel)]=\"email\" type=\"text\" autofocus=\"true\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\r\n                        <div *ngFor=\"let er of errors\">\r\n                            <ng-container *ngIf=\"InscriptionForm.get('email').hasError(er.type) && (InscriptionForm.get('email').touched || InscriptionForm.get('email').dirty)\">\r\n                                <ion-note color=\"danger\"> {{er.message}} </ion-note>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <ion-label position=\"\">Phone Number</ion-label>\r\n                        <ion-input formControlName=\"phone\" [(ngModel)]=\"phone\" type=\"tel\" required placeholder=\"Phone Number\" [maxlength]=\"8\"></ion-input>\r\n                        <div *ngFor=\"let er of errors\">\r\n                            <ng-container *ngIf=\"InscriptionForm.get('phone').hasError(er.type) && (InscriptionForm.get('phone').touched || InscriptionForm.get('phone').dirty)\">\r\n                                <ion-note color=\"danger\"> {{er.message}} </ion-note>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                    <ion-radio-group formControlName=\"sexe\" [(ngModel)]=\"sexe\">\r\n                        <ion-label class=\"ion-margin-horizontal\" color=\"dark\">Male</ion-label>\r\n                        <ion-radio value=\"male\"></ion-radio>\r\n                        <ion-label class=\"ion-margin-horizontal\" color=\"dark\">Female</ion-label>\r\n                        <ion-radio value=\"female\"></ion-radio>\r\n                    </ion-radio-group>\r\n\r\n                    <div class=\"form-group\">\r\n                        <ion-label position=\"\">Password</ion-label>\r\n                        <ion-input formControlName=\"password\" [(ngModel)]=\"password\" class=\"\" type=\"password\" required placeholder=\"*******\">\r\n                        </ion-input>\r\n                        <div *ngFor=\"let er of errors\">\r\n                            <ng-container *ngIf=\"InscriptionForm.get('password').hasError(er.type) && (InscriptionForm.get('password').touched || InscriptionForm.get('password').dirty)\">\r\n                                <ion-note color=\"danger\"> {{er.message}} </ion-note>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <ion-button class=\"ion-margin-top\" type=\"submit\" expand=\"block\" color=\"warning\">\r\n                        Inscription\r\n                    </ion-button>\r\n                </form>\r\n                <p class=\"ion-text-center ion-margin-top\">\r\n                    Already Have an account?\r\n                    <a (click)=\"slideNext()\" color=\"warning\">Sign In</a>\r\n                </p>\r\n\r\n                <ion-grid class=\"centerPage\">\r\n                    <ion-row class=\"ion-justify-content-center ion-margin-vertical\">\r\n                        <hr style=\"width: 45%\" />\r\n                        <span> or </span>\r\n                        <hr style=\"width: 45%\" />\r\n                    </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-button expand=\"block\" color=\"light\" (click)=\"loginGoogle()\">\r\n                    <ion-icon class=\"ion-margin-horizontal\" name=\"logo-google\"></ion-icon>\r\n                    Continue with google\r\n                </ion-button>\r\n            </ng-template>\r\n\r\n            <!---******************************************* partie inscription ********************************************************-->\r\n        </swiper>\r\n        </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map
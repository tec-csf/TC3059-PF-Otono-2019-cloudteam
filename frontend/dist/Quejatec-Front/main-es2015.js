(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/boxes/boxes.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/boxes/boxes.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <p>Ubicacion</p>\n  <mat-form-field>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-optgroup *ngFor=\"let place of places\" [label]=\"place.name\"\n                  [disabled]=\"place.disabled\">\n      <mat-option *ngFor=\"let placeEvent of place.placeEvents\" [value]=\"placeEvent._id\">\n        {{placeEvent.name}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n</div>\n<div class=\"container\">\n    <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" [formControl]=\"scoreControl\">\n        <mat-button-toggle value=\"0\">Malo</mat-button-toggle>\n        <mat-button-toggle value=\"5\">Regular</mat-button-toggle>\n        <mat-button-toggle value=\"10\">Bueno</mat-button-toggle>\n    </mat-button-toggle-group>\n</div>\n\n<button class=\"miboton\" mat-raised-button color=\"primary\" [disabled]=\"!scoreControl.valid\" (click)=\"postScore()\">Enviar</button>\n\n<p>Indica tu Experiencia</p>\n<p>o</p>\n<p>Inicia sesion y deja un comentario</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <h1>Quejatec</h1>\n    <!-- <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf=\"userIsAuthenticated\"> -->\n      <span class=\"spacer\"></span>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item routerLink=\"/\">\n          <mat-icon>home</mat-icon>\n          <span>Home</span>\n        </button>\n        <button mat-menu-item routerLink=\"/misquejas\" *ngIf=\"isAuth\">\n          <mat-icon>list</mat-icon>\n          <span>Mis Quejas</span>\n        </button>\n        <button mat-menu-item routerLink=\"/queja\" *ngIf=\"isAuth\">\n          <mat-icon>note_add</mat-icon>\n          <span>Nueva Queja</span>\n        </button>\n        <button mat-menu-item *ngIf=\"isAuth\">\n          <mat-icon>exit_to_app</mat-icon>\n          <span>Logout</span>\n        </button>\n      </mat-menu>\n</mat-toolbar>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-boxes></app-boxes>\n<app-login></app-login>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n      <mat-card-title>Login</mat-card-title>\n    </mat-card-header>\n    <!-- <mat-spinner *ngIf=\"isLoading\"></mat-spinner> -->\n    <form #loginForm=\"ngForm\">\n        <mat-form-field>\n            <input\n              matInput\n              type=\"email\"\n              name=\"email\"\n              ngModel\n              required email\n              placeholder=\"Email\"\n              #emailInput=\"ngModel\">\n            <mat-error *ngIf=\"emailInput.invalid\">Ingrese un correo valido</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              type=\"password\"\n              name=\"password\"\n              ngModel\n              required\n              placeholder=\"Password\"\n              #passwordInput=\"ngModel\">\n              <mat-error *ngIf=\"passwordInput.invalid\">Ingrese una contrasena valida</mat-error>\n          </mat-form-field>\n\n          <button\n            mat-raised-button\n            color = \"primary\"\n\n            type=\"submit\" (click)=\"login()\" routerLink=\"/misquejas\">Login\n          </button>\n\n    </form>\n  </mat-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>Ubicacion</p>\n  <mat-form-field>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-optgroup *ngFor=\"let place of places\" [label]=\"place.name\"\n                  [disabled]=\"place.disabled\">\n      <mat-option *ngFor=\"let placeEvent of place.placeEvents\" [value]=\"placeEvent.id\">\n        {{placeEvent.name}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/misquejas/misquejas.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/misquejas/misquejas.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion multi=\"true\" *ngIf=\"quejas.length > 0\">\n    <mat-expansion-panel *ngFor=\"let queja of quejas\">\n      <mat-expansion-panel-header>\n        <h2> {{ queja.registerDate }} </h2>\n      </mat-expansion-panel-header>\n      <h3>Descripcion</h3>\n      <p>{{ queja.description }}</p>\n      <h3>Estado</h3>\n      <p>{{ queja.status }}</p>\n      <mat-action-row>\n        <button mat-button color=\"primary\" routerLink=\"../verqueja/{{ queja._id }}\">ABRIR</button>\n      </mat-action-row>\n    </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nuevaqueja/nuevaqueja.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nuevaqueja/nuevaqueja.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-userinfo></app-userinfo>\n<app-queja></app-queja>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/queja/queja.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/queja/queja.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <!-- <mat-spinner *ngIf=\"isLoading\"></mat-spinner> -->\n    <h2>Nueva Queja</h2>\n    <form #postForm=\"ngForm\" autocomplete=\"off\">\n        <!-- <div class=\"menu\"> -->\n            <p>Ubicacion</p>\n          <mat-form-field>\n            <mat-select [formControl]=\"pokemonControl\">\n              <mat-optgroup *ngFor=\"let place of places\" [label]=\"place.name\"\n                            [disabled]=\"place.disabled\">\n                <mat-option *ngFor=\"let placeEvent of place.placeEvents\" [value]=\"placeEvent._id\">\n                  {{placeEvent.name}}\n                </mat-option>\n              </mat-optgroup>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n              <textarea\n                [formControl]=\"descControl\"\n                matInput\n                rows=\"2\"\n                name=\"description\"\n\n                required\n                placeholder=\"Descripcion\"\n\n                >\n              </textarea>\n          </mat-form-field>\n\n\n\n          <button\n            mat-raised-button\n            color = \"primary\"\n\n            type=\"submit\" (click)=\"postQueja()\">Enviar Queja\n          </button>\n    </form>\n  </mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/userinfo/userinfo.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userinfo/userinfo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Juan José Santos</mat-card-title>\n      <mat-card-subtitle>jjsantos@gmail.com</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/verqueja/verqueja.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verqueja/verqueja.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{ quejas[0].description }}</mat-card-title>\n      <mat-card-subtitle>{{ quejas[0].status }}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <h2>Lugar</h2>\n      <h3>{{ quejas[0].placeEvent.name }}</h3>\n      <h2>Fecha y Hora</h2>\n      <h3>{{ quejas[0].registerDate }}</h3>\n      <h2>User Rate</h2>\n      <h3>{{ quejas[0].userRate }}</h3>\n    </mat-card-content>\n    <!-- <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions> -->\n  </mat-card>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nuevaqueja_nuevaqueja_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevaqueja/nuevaqueja.component */ "./src/app/nuevaqueja/nuevaqueja.component.ts");
/* harmony import */ var _verqueja_verqueja_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verqueja/verqueja.component */ "./src/app/verqueja/verqueja.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _misquejas_misquejas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./misquejas/misquejas.component */ "./src/app/misquejas/misquejas.component.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'queja', component: _nuevaqueja_nuevaqueja_component__WEBPACK_IMPORTED_MODULE_3__["NuevaquejaComponent"] },
    { path: 'verqueja/:id', component: _verqueja_verqueja_component__WEBPACK_IMPORTED_MODULE_4__["VerquejaComponent"] },
    { path: 'misquejas', component: _misquejas_misquejas_component__WEBPACK_IMPORTED_MODULE_6__["MisquejasComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Quejatec-Front';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



let AppConfig = class AppConfig {
    constructor() {
    }
};
AppConfig.isProduction = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production;
AppConfig.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
AppConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppConfig);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _queja_queja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./queja/queja.component */ "./src/app/queja/queja.component.ts");
/* harmony import */ var _nuevaqueja_nuevaqueja_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nuevaqueja/nuevaqueja.component */ "./src/app/nuevaqueja/nuevaqueja.component.ts");
/* harmony import */ var _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./boxes/boxes.component */ "./src/app/boxes/boxes.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./userinfo/userinfo.component */ "./src/app/userinfo/userinfo.component.ts");
/* harmony import */ var _misquejas_misquejas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./misquejas/misquejas.component */ "./src/app/misquejas/misquejas.component.ts");
/* harmony import */ var _verqueja_verqueja_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./verqueja/verqueja.component */ "./src/app/verqueja/verqueja.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/auth-interceptor.ts");














//Material

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
            _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_13__["BoxesComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _queja_queja_component__WEBPACK_IMPORTED_MODULE_11__["QuejaComponent"],
            _nuevaqueja_nuevaqueja_component__WEBPACK_IMPORTED_MODULE_12__["NuevaquejaComponent"],
            _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_24__["UserinfoComponent"],
            _misquejas_misquejas_component__WEBPACK_IMPORTED_MODULE_25__["MisquejasComponent"],
            _verqueja_verqueja_component__WEBPACK_IMPORTED_MODULE_26__["VerquejaComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"]
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_30__["AuthInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/auth-interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        console.log('Entro al intercweptor');
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        console.log(authToken);
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");






const apiUrl = _app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].apiURL;
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getToken() {
        return '5dcc86e89f0d08180f413288';
        //return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    setAuthFlagTrue() {
        this.isAuthenticated = true;
        //Update Subscription
        this.authStatusListener.next(true);
    }
    setAuthFlagFalse() {
        this.isAuthenticated = false;
        //Update Subscription
        this.authStatusListener.next(true);
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getUserId() {
        return this.userId;
    }
    getName() {
        return this.name;
    }
    getLevel() {
        return this.level;
    }
    getEmail() {
        return this.email;
    }
    createUser(email, password, name, level) {
        const authData = { email, password, name, level };
        this.http.post(`${apiUrl}api/users/signup`, authData)
            .subscribe(response => {
            this.router.navigate(['/']);
        });
    }
    loginUser(email, password) {
        const authData = { email, password, name: null, level: null };
        this.http.post(`${apiUrl}api/users/login`, authData)
            .subscribe(response => {
            //Retrieve Token
            const token = response.token;
            this.token = token;
            if (token) {
                //Save Token Duration
                const expiresInDuration = response.expiresIn;
                //Start timer
                this.setAuthTimer(expiresInDuration);
                //Update authStatus
                this.isAuthenticated = true;
                //Save User Data to the frontend
                this.userId = response.userId;
                this.name = response.name;
                this.level = response.level;
                this.email = response.email;
                //Update Subscription
                this.authStatusListener.next(true);
                //Save Data Locally
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                console.log("VAMOS A GUARDAR EMAIL:", this.email);
                console.log("VAMOS A GUARDAR NOMBRE:", this.name);
                this.saveAuthDataLocally(token, expirationDate, this.userId, this.name, this.level, this.email);
                //Redirect User to Home
                this.router.navigate(['/']);
            }
        });
    }
    // Try to auto login if the token is still valid
    autoAuthUser() {
        const authInformation = this.getLocalAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.name = authInformation.name;
            this.level = authInformation.level;
            this.email = authInformation.email;
            this.authStatusListener.next(true);
            this.setAuthTimer(expiresIn / 1000);
        }
    }
    logoutUser() {
        //Reset timer
        clearTimeout(this.tokenTimer);
        //Reset token
        this.token = null;
        //Reset Local Storage
        this.clearAuthDataLocally();
        //Tell the app about authStatus
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        this.name = null;
        this.level = null;
        this.email = null;
        //Redirect User to Login
        this.router.navigate(['/login']);
    }
    setAuthTimer(duration) {
        console.log("Setting timer: " + duration);
        //Logout user when token expires with a timer
        this.tokenTimer = setTimeout(() => {
            this.logoutUser();
        }, duration * 1000);
    }
    saveAuthDataLocally(token, expirationDate, userId, name, level, email) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('name', name);
        localStorage.setItem('level', level);
        localStorage.setItem('email', email);
    }
    clearAuthDataLocally() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('name');
        localStorage.removeItem('level');
        localStorage.removeItem('email');
    }
    getLocalAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        const name = localStorage.getItem('name');
        const level = localStorage.getItem('level');
        const email = localStorage.getItem('email');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            name: name,
            level: level,
            email: email,
        };
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], AuthService);



/***/ }),

/***/ "./src/app/boxes/boxes.component.css":
/*!*******************************************!*\
  !*** ./src/app/boxes/boxes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  width: 100px;\n  height: 100px;\n  display: none;\n  display: inline-block;\n  margin: 1rem;\n}\n\n.container {\n\n  margin-top: 3rem;\n  text-align: center;\n  margin-bottom: 2rem;\n\n}\n\nmat-button-toggle {\n  font-size: 150%;\n}\n\n.miboton {\n  margin-left: 100px;\n  display: block;\n  margin: 0 auto;\n}\n\np {\n  text-align: center;\n}\n\nbutton {\n\n  font-size: 100%;\n  margin:auto 0;\n  text-align: center;\n}\n\n.menu {\n  margin-top: 1rem;\n  margin-left: 100px;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94ZXMvYm94ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ib3hlcy9ib3hlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5jb250YWluZXIge1xuXG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxufVxuXG5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cblxuXG4ubWlib3RvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuXG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luOmF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVudSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/boxes/boxes.component.ts":
/*!******************************************!*\
  !*** ./src/app/boxes/boxes.component.ts ***!
  \******************************************/
/*! exports provided: BoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxesComponent", function() { return BoxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _quejas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quejas.service */ "./src/app/quejas.service.ts");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");





let BoxesComponent = class BoxesComponent {
    constructor(quejasSerivice, placeService) {
        this.quejasSerivice = quejasSerivice;
        this.placeService = placeService;
        this.scoreControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.isLoggedIn = false;
        this.places = [];
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
    ngOnInit() {
        this.placeService.getPlaces();
        this.placesSub = this.placeService.getPlaceUpdateListener()
            .subscribe((places) => {
            console.log("FETCHED");
            this.places = places;
            console.log("Frontend Places: ", this.places);
        });
    }
    postScore() {
        let score = this.scoreControl.value;
        console.log("SCORE: ", score);
        let place = this.pokemonControl.value;
        //place = "5dd5cd9dfcb8f30b2f5c1d68";
        console.log("PLACE: ", place);
        this.quejasSerivice.postScore(null, score, place);
    }
};
BoxesComponent.ctorParameters = () => [
    { type: _quejas_service__WEBPACK_IMPORTED_MODULE_3__["QuejasService"] },
    { type: _place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"] }
];
BoxesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boxes',
        template: __webpack_require__(/*! raw-loader!./boxes.component.html */ "./node_modules/raw-loader/index.js!./src/app/boxes/boxes.component.html"),
        styles: [__webpack_require__(/*! ./boxes.component.css */ "./src/app/boxes/boxes.component.css")]
    })
], BoxesComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  display: inline;\n  margin: 2rem;\n}\n\nh1 {\n  font-size: 150%;\n}\n\nmat-toolbar {\n  height: 6rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.mat-icon-button {\n  position: absolute;\n  right: 10px;\n\n}\n\n.username {\n  position: absolute;\n  right: 75px;\n  top: -3px;\n  -webkit-text-size-adjust: 30%;\n     -moz-text-size-adjust: 30%;\n      -ms-text-size-adjust: 30%;\n          text-size-adjust: 30%;\n}\n\n/* .minimenu {\n  display: inline-block;\n\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXOztBQUViOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsNkJBQXFCO0tBQXJCLDBCQUFxQjtNQUFyQix5QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IDJyZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxNTAlO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogNnJlbTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tYXQtaWNvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuXG59XG5cbi51c2VybmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDc1cHg7XG4gIHRvcDogLTNweDtcbiAgdGV4dC1zaXplLWFkanVzdDogMzAlO1xufVxuXG4vKiAubWluaW1lbnUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.flagUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.isAuth = this.authService.getIsAuth();
        this.authListenerSub = this.authService.getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.isAuth = isAuthenticated;
            console.log("Got in header", this.isAuth);
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-title {\n  margin:0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbjowcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    login() {
        console.log("Got vefore logging in ", this.authService.getIsAuth());
        this.authService.setAuthFlagTrue();
        console.log("Got after logging in ", this.authService.getIsAuth());
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n\n  font-size: 100%;\n  margin:auto 0;\n  text-align: center;\n}\n\ndiv {\n  margin-top: 1rem;\n  margin-left: 100px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuXG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luOmF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");




let MenuComponent = class MenuComponent {
    // pokemonGroups: PokemonGroup[] = [
    //   {
    //     name: 'Grass',
    //     pokemon: [
    //       {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
    //       {value: 'oddish-1', viewValue: 'Oddish'},
    //       {value: 'bellsprout-2', viewValue: 'Bellsprout'}
    //     ]
    //   },
    //   {
    //     name: 'Water',
    //     pokemon: [
    //       {value: 'squirtle-3', viewValue: 'Squirtle'},
    //       {value: 'psyduck-4', viewValue: 'Psyduck'},
    //       {value: 'horsea-5', viewValue: 'Horsea'}
    //     ]
    //   },
    //   {
    //     name: 'Fire',
    //     disabled: true,
    //     pokemon: [
    //       {value: 'charmander-6', viewValue: 'Charmander'},
    //       {value: 'vulpix-7', viewValue: 'Vulpix'},
    //       {value: 'flareon-8', viewValue: 'Flareon'}
    //     ]
    //   },
    //   {
    //     name: 'Psychic',
    //     pokemon: [
    //       {value: 'mew-9', viewValue: 'Mew'},
    //       {value: 'mewtwo-10', viewValue: 'Mewtwo'},
    //     ]
    //   }
    // ];
    constructor(placeService) {
        this.placeService = placeService;
        this.places = [];
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        // this.pokemonControl.valueChanges.subscribe();
        // this.placeService.getPlaces();
        // // console.log(this.placeService.getPlaces());
        // this.placesSub = this.placeService.getPlaceUpdateListener()
        // .subscribe((places: Place[]) => {
        //   console.log("FETCHED");
        //   this.places = places;
        //   console.log("Frontend Places: ",this.places);
        // });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/misquejas/misquejas.component.css":
/*!***************************************************!*\
  !*** ./src/app/misquejas/misquejas.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pc3F1ZWphcy9taXNxdWVqYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/misquejas/misquejas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/misquejas/misquejas.component.ts ***!
  \**************************************************/
/*! exports provided: MisquejasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisquejasComponent", function() { return MisquejasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quejas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quejas.service */ "./src/app/quejas.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




let MisquejasComponent = class MisquejasComponent {
    constructor(quejasSerivice, authService) {
        this.quejasSerivice = quejasSerivice;
        this.authService = authService;
        this.quejas = [];
        this.creatorId = '5dcc86e89f0d08180f413288';
    }
    ngOnInit() {
        console.log("In");
        console.log("Got from mis quejas", this.authService.getIsAuth());
        this.quejasSerivice.getQuejas();
        // console.log(this.quejasSerivice.getQuejas());
        this.quejasSub = this.quejasSerivice.getQuejaUpdateListener()
            .subscribe((quejas) => {
            console.log("FETCHED");
            this.quejas = quejas;
        });
        // this.userIsAuthenticated = this.authService.getIsAuth();
        // this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
        //   this.userIsAuthenticated = isAuthenticated;
        //   this.userId = this.authService.getUserId();
        // });
    }
};
MisquejasComponent.ctorParameters = () => [
    { type: _quejas_service__WEBPACK_IMPORTED_MODULE_2__["QuejasService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MisquejasComponent.prototype, "quejas", void 0);
MisquejasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-misquejas',
        template: __webpack_require__(/*! raw-loader!./misquejas.component.html */ "./node_modules/raw-loader/index.js!./src/app/misquejas/misquejas.component.html"),
        styles: [__webpack_require__(/*! ./misquejas.component.css */ "./src/app/misquejas/misquejas.component.css")]
    })
], MisquejasComponent);



/***/ }),

/***/ "./src/app/nuevaqueja/nuevaqueja.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nuevaqueja/nuevaqueja.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251ZXZhcXVlamEvbnVldmFxdWVqYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nuevaqueja/nuevaqueja.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nuevaqueja/nuevaqueja.component.ts ***!
  \****************************************************/
/*! exports provided: NuevaquejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaquejaComponent", function() { return NuevaquejaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NuevaquejaComponent = class NuevaquejaComponent {
    constructor() { }
    ngOnInit() {
    }
};
NuevaquejaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nuevaqueja',
        template: __webpack_require__(/*! raw-loader!./nuevaqueja.component.html */ "./node_modules/raw-loader/index.js!./src/app/nuevaqueja/nuevaqueja.component.html"),
        styles: [__webpack_require__(/*! ./nuevaqueja.component.css */ "./src/app/nuevaqueja/nuevaqueja.component.css")]
    })
], NuevaquejaComponent);



/***/ }),

/***/ "./src/app/place.service.ts":
/*!**********************************!*\
  !*** ./src/app/place.service.ts ***!
  \**********************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");







const apiUrl = _app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].apiURL;
let PlaceService = class PlaceService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.places = [];
        this.placesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getPlaces() {
        //creatorId = '5dcc86e89f0d08180f413288';
        console.log(`${apiUrl}client/placeEvent/`);
        this.http
            .get(`${apiUrl}client/placeEvent/`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((placeData) => {
            console.log(placeData);
            return placeData;
            //        return quejaData.issues.map(quejaR => {
            /*
            return {
              _id: quejaR._id,
              uId: quejaR.uId,
              placeEvent: quejaR.placeEvent,
              description: quejaR.description,
              status: quejaR.status,
              userRate: quejaR.userRate,
              answers: quejaR.answers,
              finalComment: quejaR.finalComment,
              registerDate: quejaR.registerDate
            };
            */
            //});
        }))
            .subscribe(transformedPlaces => {
            console.log(transformedPlaces);
            this.places = transformedPlaces.placeEventGroups;
            console.log(this.places);
            this.placesUpdated.next([...this.places]);
        });
    }
    getPlaceUpdateListener() {
        return this.placesUpdated.asObservable();
    }
};
PlaceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PlaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PlaceService);



/***/ }),

/***/ "./src/app/queja/queja.component.css":
/*!*******************************************!*\
  !*** ./src/app/queja/queja.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\ntextarea {\n  width: 100%;\n  /* margin-bottom: 0.1rem; */\n}\n\nmat-card {\n  /* margin-bottom: 0.1rem; */\n}\n\nbutton {\n  margin: 1rem;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlamEvcXVlamEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUlBO0VBQ0UsWUFBWTtBQUNkOztBQUdBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcXVlamEvcXVlamEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgLyogbWFyZ2luLWJvdHRvbTogMC4xcmVtOyAqL1xufVxuXG5tYXQtY2FyZCB7XG4gIC8qIG1hcmdpbi1ib3R0b206IDAuMXJlbTsgKi9cbn1cblxuXG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/queja/queja.component.ts":
/*!******************************************!*\
  !*** ./src/app/queja/queja.component.ts ***!
  \******************************************/
/*! exports provided: QuejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejaComponent", function() { return QuejaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");
/* harmony import */ var _quejas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quejas.service */ "./src/app/quejas.service.ts");





let QuejaComponent = class QuejaComponent {
    constructor(placeService, quejasService) {
        this.placeService = placeService;
        this.quejasService = quejasService;
        this.places = [];
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.descControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.placeService.getPlaces();
        this.placesSub = this.placeService.getPlaceUpdateListener()
            .subscribe((places) => {
            console.log("FETCHED");
            this.places = places;
            console.log("Frontend Places: ", this.places);
        });
    }
    postQueja() {
        console.log("Enviando Queja");
        this.description = this.descControl.value;
        console.log("DESC: ", this.description);
        let place = this.pokemonControl.value;
        //place = "5dd5cd9dfcb8f30b2f5c1d68";
        console.log("PLACE: ", place);
        this.quejasService.postQueja(null, this.description, place, null, null, null);
    }
};
QuejaComponent.ctorParameters = () => [
    { type: _place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] },
    { type: _quejas_service__WEBPACK_IMPORTED_MODULE_4__["QuejasService"] }
];
QuejaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-queja',
        template: __webpack_require__(/*! raw-loader!./queja.component.html */ "./node_modules/raw-loader/index.js!./src/app/queja/queja.component.html"),
        styles: [__webpack_require__(/*! ./queja.component.css */ "./src/app/queja/queja.component.css")]
    })
], QuejaComponent);



/***/ }),

/***/ "./src/app/quejas.service.ts":
/*!***********************************!*\
  !*** ./src/app/quejas.service.ts ***!
  \***********************************/
/*! exports provided: QuejasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejasService", function() { return QuejasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");






// import { MatSnackBar } from '@angular/material/snack-bar';

const apiUrl = _app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].apiURL;
let QuejasService = class QuejasService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.quejas = [];
        this.quejasUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getQuejas() {
        //creatorId = '5dcc86e89f0d08180f413288';
        console.log(`${apiUrl}client/issue`);
        this.http
            .get(`${apiUrl}client/issue`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((quejaData) => {
            console.log(quejaData);
            return quejaData;
            //        return quejaData.issues.map(quejaR => {
            /*
            return {
              _id: quejaR._id,
              uId: quejaR.uId,
              placeEvent: quejaR.placeEvent,
              description: quejaR.description,
              status: quejaR.status,
              userRate: quejaR.userRate,
              answers: quejaR.answers,
              finalComment: quejaR.finalComment,
              registerDate: quejaR.registerDate
            };
            */
            //});
        }))
            .subscribe(transformedQuejas => {
            console.log(transformedQuejas);
            this.quejas = transformedQuejas.issues;
            this.quejasUpdated.next([...this.quejas]);
        });
    }
    getQueja(id) {
        console.log(`${apiUrl}client/issue${id}`);
        this.http
            .get(`${apiUrl}client/issue${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((quejaData) => {
            console.log(quejaData);
            return quejaData;
            //        return quejaData.issues.map(quejaR => {
            /*
            return {
              _id: quejaR._id,
              uId: quejaR.uId,
              placeEvent: quejaR.placeEvent,
              description: quejaR.description,
              status: quejaR.status,
              userRate: quejaR.userRate,
              answers: quejaR.answers,
              finalComment: quejaR.finalComment,
              registerDate: quejaR.registerDate
            };
            */
            //});
        }))
            .subscribe(transformedQuejas => {
            console.log(transformedQuejas);
            this.quejas = transformedQuejas;
            //this.quejasUpdated.next([...this.quejas]);
            this.quejasUpdated.next(this.quejas);
        });
    }
    getQuejaUpdateListener() {
        return this.quejasUpdated.asObservable();
    }
    postScore(_id, score, placeEvent) {
        const newScore = { _id, score, placeEvent };
        this.http
            .post(`${apiUrl}client/score`, newScore)
            .subscribe(responseData => {
            // const id = responseData.taskId;
            // task.id = id;
            // this.tasks.push(task);
            // this.tasksUpdated.next([...this.tasks]);
            this.router.navigate(["/"]);
        });
    }
    postQueja(_id, description, placeEvent, status, userRate, registerDate) {
        const newQueja = { _id, description, placeEvent, status, userRate, registerDate };
        this.http
            .post(`${apiUrl}client/issue`, newQueja)
            .subscribe(responseData => {
            // const id = responseData.taskId;
            // task.id = id;
            // this.tasks.push(task);
            // this.tasksUpdated.next([...this.tasks]);
            this.router.navigate(["/"]);
        });
    }
};
QuejasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
QuejasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], QuejasService);



/***/ }),

/***/ "./src/app/userinfo/userinfo.component.css":
/*!*************************************************!*\
  !*** ./src/app/userinfo/userinfo.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmluZm8vdXNlcmluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC91c2VyaW5mby91c2VyaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/userinfo/userinfo.component.ts":
/*!************************************************!*\
  !*** ./src/app/userinfo/userinfo.component.ts ***!
  \************************************************/
/*! exports provided: UserinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoComponent", function() { return UserinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserinfoComponent = class UserinfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userinfo',
        template: __webpack_require__(/*! raw-loader!./userinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/userinfo/userinfo.component.html"),
        styles: [__webpack_require__(/*! ./userinfo.component.css */ "./src/app/userinfo/userinfo.component.css")]
    })
], UserinfoComponent);



/***/ }),

/***/ "./src/app/verqueja/verqueja.component.css":
/*!*************************************************!*\
  !*** ./src/app/verqueja/verqueja.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVycXVlamEvdmVycXVlamEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC92ZXJxdWVqYS92ZXJxdWVqYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/verqueja/verqueja.component.ts":
/*!************************************************!*\
  !*** ./src/app/verqueja/verqueja.component.ts ***!
  \************************************************/
/*! exports provided: VerquejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerquejaComponent", function() { return VerquejaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quejas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quejas.service */ "./src/app/quejas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let VerquejaComponent = class VerquejaComponent {
    constructor(quejasSerivice, activatedRoute) {
        this.quejasSerivice = quejasSerivice;
        this.activatedRoute = activatedRoute;
        this.quejas = [];
    }
    ngOnInit() {
        this.quejaId = this.activatedRoute.snapshot.paramMap.get('id');
        //this.quejaId = "5dcd6fed9baf9b3a9cb10921";
        this.quejasSerivice.getQueja(this.quejaId);
        this.quejasSub = this.quejasSerivice.getQuejaUpdateListener()
            .subscribe((quejas) => {
            console.log("FETCHED", quejas);
            this.quejas = quejas;
        });
    }
};
VerquejaComponent.ctorParameters = () => [
    { type: _quejas_service__WEBPACK_IMPORTED_MODULE_2__["QuejasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
VerquejaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verqueja',
        template: __webpack_require__(/*! raw-loader!./verqueja.component.html */ "./node_modules/raw-loader/index.js!./src/app/verqueja/verqueja.component.html"),
        styles: [__webpack_require__(/*! ./verqueja.component.css */ "./src/app/verqueja/verqueja.component.css")]
    })
], VerquejaComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'http://34.69.131.58:8080/'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/henry/Desktop/ITC-9no/CloudApps/TC3059-PF-Otono-2019-cloudteam/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
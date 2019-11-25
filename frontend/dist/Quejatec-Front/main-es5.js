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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nuevaqueja_nuevaqueja_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevaqueja/nuevaqueja.component */ "./src/app/nuevaqueja/nuevaqueja.component.ts");
/* harmony import */ var _verqueja_verqueja_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verqueja/verqueja.component */ "./src/app/verqueja/verqueja.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _misquejas_misquejas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./misquejas/misquejas.component */ "./src/app/misquejas/misquejas.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'queja', component: _nuevaqueja_nuevaqueja_component__WEBPACK_IMPORTED_MODULE_3__["NuevaquejaComponent"] },
    { path: 'verqueja/:id', component: _verqueja_verqueja_component__WEBPACK_IMPORTED_MODULE_4__["VerquejaComponent"] },
    { path: 'misquejas', component: _misquejas_misquejas_component__WEBPACK_IMPORTED_MODULE_6__["MisquejasComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quejatec-Front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.isProduction = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production;
    AppConfig.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
    AppConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppConfig);
    return AppConfig;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _queja_queja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./queja/queja.component */ "./src/app/queja/queja.component.ts");
/* harmony import */ var _nuevaqueja_nuevaqueja_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nuevaqueja/nuevaqueja.component */ "./src/app/nuevaqueja/nuevaqueja.component.ts");
/* harmony import */ var _boxes_boxes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./boxes/boxes.component */ "./src/app/boxes/boxes.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./userinfo/userinfo.component */ "./src/app/userinfo/userinfo.component.ts");
/* harmony import */ var _misquejas_misquejas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./misquejas/misquejas.component */ "./src/app/misquejas/misquejas.component.ts");
/* harmony import */ var _verqueja_verqueja_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./verqueja/verqueja.component */ "./src/app/verqueja/verqueja.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/auth-interceptor.ts");














//Material

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        console.log('Entro al intercweptor');
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        console.log(authToken);
        return next.handle(authRequest);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");






var apiUrl = _app_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"].apiURL;
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return '5dcc86e89f0d08180f413288';
        //return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.setAuthFlagTrue = function () {
        this.isAuthenticated = true;
        //Update Subscription
        this.authStatusListener.next(true);
    };
    AuthService.prototype.setAuthFlagFalse = function () {
        this.isAuthenticated = false;
        //Update Subscription
        this.authStatusListener.next(true);
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getName = function () {
        return this.name;
    };
    AuthService.prototype.getLevel = function () {
        return this.level;
    };
    AuthService.prototype.getEmail = function () {
        return this.email;
    };
    AuthService.prototype.createUser = function (email, password, name, level) {
        var _this = this;
        var authData = { email: email, password: password, name: name, level: level };
        this.http.post(apiUrl + "api/users/signup", authData)
            .subscribe(function (response) {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.loginUser = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password, name: null, level: null };
        this.http.post(apiUrl + "api/users/login", authData)
            .subscribe(function (response) {
            //Retrieve Token
            var token = response.token;
            _this.token = token;
            if (token) {
                //Save Token Duration
                var expiresInDuration = response.expiresIn;
                //Start timer
                _this.setAuthTimer(expiresInDuration);
                //Update authStatus
                _this.isAuthenticated = true;
                //Save User Data to the frontend
                _this.userId = response.userId;
                _this.name = response.name;
                _this.level = response.level;
                _this.email = response.email;
                //Update Subscription
                _this.authStatusListener.next(true);
                //Save Data Locally
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                console.log("VAMOS A GUARDAR EMAIL:", _this.email);
                console.log("VAMOS A GUARDAR NOMBRE:", _this.name);
                _this.saveAuthDataLocally(token, expirationDate, _this.userId, _this.name, _this.level, _this.email);
                //Redirect User to Home
                _this.router.navigate(['/']);
            }
        });
    };
    // Try to auto login if the token is still valid
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getLocalAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
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
    };
    AuthService.prototype.logoutUser = function () {
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
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log("Setting timer: " + duration);
        //Logout user when token expires with a timer
        this.tokenTimer = setTimeout(function () {
            _this.logoutUser();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthDataLocally = function (token, expirationDate, userId, name, level, email) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('name', name);
        localStorage.setItem('level', level);
        localStorage.setItem('email', email);
    };
    AuthService.prototype.clearAuthDataLocally = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('name');
        localStorage.removeItem('level');
        localStorage.removeItem('email');
    };
    AuthService.prototype.getLocalAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expiration');
        var userId = localStorage.getItem('userId');
        var name = localStorage.getItem('name');
        var level = localStorage.getItem('level');
        var email = localStorage.getItem('email');
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
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], AuthService);
    return AuthService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quejas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quejas.service */ "./src/app/quejas.service.ts");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");





var BoxesComponent = /** @class */ (function () {
    function BoxesComponent(quejasSerivice, placeService) {
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
    BoxesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeService.getPlaces();
        this.placesSub = this.placeService.getPlaceUpdateListener()
            .subscribe(function (places) {
            console.log("FETCHED");
            _this.places = places;
            console.log("Frontend Places: ", _this.places);
        });
    };
    BoxesComponent.prototype.postScore = function () {
        var score = this.scoreControl.value;
        console.log("SCORE: ", score);
        var place = this.pokemonControl.value;
        //place = "5dd5cd9dfcb8f30b2f5c1d68";
        console.log("PLACE: ", place);
        this.quejasSerivice.postScore(null, score, place);
    };
    BoxesComponent.ctorParameters = function () { return [
        { type: _quejas_service__WEBPACK_IMPORTED_MODULE_3__["QuejasService"] },
        { type: _place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"] }
    ]; };
    BoxesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boxes',
            template: __webpack_require__(/*! raw-loader!./boxes.component.html */ "./node_modules/raw-loader/index.js!./src/app/boxes/boxes.component.html"),
            styles: [__webpack_require__(/*! ./boxes.component.css */ "./src/app/boxes/boxes.component.css")]
        })
    ], BoxesComponent);
    return BoxesComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.flagUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuth = this.authService.getIsAuth();
        this.authListenerSub = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.isAuth = isAuthenticated;
            console.log("Got in header", _this.isAuth);
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log("Got vefore logging in ", this.authService.getIsAuth());
        this.authService.setAuthFlagTrue();
        console.log("Got after logging in ", this.authService.getIsAuth());
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");




var MenuComponent = /** @class */ (function () {
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
    function MenuComponent(placeService) {
        this.placeService = placeService;
        this.places = [];
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
        // this.pokemonControl.valueChanges.subscribe();
        // this.placeService.getPlaces();
        // // console.log(this.placeService.getPlaces());
        // this.placesSub = this.placeService.getPlaceUpdateListener()
        // .subscribe((places: Place[]) => {
        //   console.log("FETCHED");
        //   this.places = places;
        //   console.log("Frontend Places: ",this.places);
        // });
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quejas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quejas.service */ "./src/app/quejas.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var MisquejasComponent = /** @class */ (function () {
    function MisquejasComponent(quejasSerivice, authService) {
        this.quejasSerivice = quejasSerivice;
        this.authService = authService;
        this.quejas = [];
        this.creatorId = '5dcc86e89f0d08180f413288';
    }
    MisquejasComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("In");
        console.log("Got from mis quejas", this.authService.getIsAuth());
        this.quejasSerivice.getQuejas();
        // console.log(this.quejasSerivice.getQuejas());
        this.quejasSub = this.quejasSerivice.getQuejaUpdateListener()
            .subscribe(function (quejas) {
            console.log("FETCHED");
            _this.quejas = quejas;
        });
        // this.userIsAuthenticated = this.authService.getIsAuth();
        // this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
        //   this.userIsAuthenticated = isAuthenticated;
        //   this.userId = this.authService.getUserId();
        // });
    };
    MisquejasComponent.ctorParameters = function () { return [
        { type: _quejas_service__WEBPACK_IMPORTED_MODULE_2__["QuejasService"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
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
    return MisquejasComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NuevaquejaComponent = /** @class */ (function () {
    function NuevaquejaComponent() {
    }
    NuevaquejaComponent.prototype.ngOnInit = function () {
    };
    NuevaquejaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nuevaqueja',
            template: __webpack_require__(/*! raw-loader!./nuevaqueja.component.html */ "./node_modules/raw-loader/index.js!./src/app/nuevaqueja/nuevaqueja.component.html"),
            styles: [__webpack_require__(/*! ./nuevaqueja.component.css */ "./src/app/nuevaqueja/nuevaqueja.component.css")]
        })
    ], NuevaquejaComponent);
    return NuevaquejaComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");







var apiUrl = _app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].apiURL;
var PlaceService = /** @class */ (function () {
    function PlaceService(http, router) {
        this.http = http;
        this.router = router;
        this.places = [];
        this.placesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    PlaceService.prototype.getPlaces = function () {
        var _this = this;
        //creatorId = '5dcc86e89f0d08180f413288';
        console.log(apiUrl + "client/placeEvent/");
        this.http
            .get(apiUrl + "client/placeEvent/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (placeData) {
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
            .subscribe(function (transformedPlaces) {
            console.log(transformedPlaces);
            _this.places = transformedPlaces.placeEventGroups;
            console.log(_this.places);
            _this.placesUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.places));
        });
    };
    PlaceService.prototype.getPlaceUpdateListener = function () {
        return this.placesUpdated.asObservable();
    };
    PlaceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    PlaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], PlaceService);
    return PlaceService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");
/* harmony import */ var _quejas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quejas.service */ "./src/app/quejas.service.ts");





var QuejaComponent = /** @class */ (function () {
    function QuejaComponent(placeService, quejasService) {
        this.placeService = placeService;
        this.quejasService = quejasService;
        this.places = [];
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.descControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    QuejaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeService.getPlaces();
        this.placesSub = this.placeService.getPlaceUpdateListener()
            .subscribe(function (places) {
            console.log("FETCHED");
            _this.places = places;
            console.log("Frontend Places: ", _this.places);
        });
    };
    QuejaComponent.prototype.postQueja = function () {
        console.log("Enviando Queja");
        this.description = this.descControl.value;
        console.log("DESC: ", this.description);
        var place = this.pokemonControl.value;
        //place = "5dd5cd9dfcb8f30b2f5c1d68";
        console.log("PLACE: ", place);
        this.quejasService.postQueja(null, this.description, place, null, null, null);
    };
    QuejaComponent.ctorParameters = function () { return [
        { type: _place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] },
        { type: _quejas_service__WEBPACK_IMPORTED_MODULE_4__["QuejasService"] }
    ]; };
    QuejaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-queja',
            template: __webpack_require__(/*! raw-loader!./queja.component.html */ "./node_modules/raw-loader/index.js!./src/app/queja/queja.component.html"),
            styles: [__webpack_require__(/*! ./queja.component.css */ "./src/app/queja/queja.component.css")]
        })
    ], QuejaComponent);
    return QuejaComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");






// import { MatSnackBar } from '@angular/material/snack-bar';

var apiUrl = _app_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"].apiURL;
var QuejasService = /** @class */ (function () {
    function QuejasService(http, router) {
        this.http = http;
        this.router = router;
        this.quejas = [];
        this.quejasUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    QuejasService.prototype.getQuejas = function () {
        var _this = this;
        //creatorId = '5dcc86e89f0d08180f413288';
        console.log(apiUrl + "client/issue");
        this.http
            .get(apiUrl + "client/issue")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (quejaData) {
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
            .subscribe(function (transformedQuejas) {
            console.log(transformedQuejas);
            _this.quejas = transformedQuejas.issues;
            _this.quejasUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.quejas));
        });
    };
    QuejasService.prototype.getQueja = function (id) {
        var _this = this;
        console.log(apiUrl + "client/issue" + id);
        this.http
            .get(apiUrl + "client/issue" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (quejaData) {
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
            .subscribe(function (transformedQuejas) {
            console.log(transformedQuejas);
            _this.quejas = transformedQuejas;
            //this.quejasUpdated.next([...this.quejas]);
            _this.quejasUpdated.next(_this.quejas);
        });
    };
    QuejasService.prototype.getQuejaUpdateListener = function () {
        return this.quejasUpdated.asObservable();
    };
    QuejasService.prototype.postScore = function (_id, score, placeEvent) {
        var _this = this;
        var newScore = { _id: _id, score: score, placeEvent: placeEvent };
        this.http
            .post(apiUrl + "client/score", newScore)
            .subscribe(function (responseData) {
            // const id = responseData.taskId;
            // task.id = id;
            // this.tasks.push(task);
            // this.tasksUpdated.next([...this.tasks]);
            _this.router.navigate(["/"]);
        });
    };
    QuejasService.prototype.postQueja = function (_id, description, placeEvent, status, userRate, registerDate) {
        var _this = this;
        var newQueja = { _id: _id, description: description, placeEvent: placeEvent, status: status, userRate: userRate, registerDate: registerDate };
        this.http
            .post(apiUrl + "client/issue", newQueja)
            .subscribe(function (responseData) {
            // const id = responseData.taskId;
            // task.id = id;
            // this.tasks.push(task);
            // this.tasksUpdated.next([...this.tasks]);
            _this.router.navigate(["/"]);
        });
    };
    QuejasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    QuejasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], QuejasService);
    return QuejasService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserinfoComponent = /** @class */ (function () {
    function UserinfoComponent() {
    }
    UserinfoComponent.prototype.ngOnInit = function () {
    };
    UserinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userinfo',
            template: __webpack_require__(/*! raw-loader!./userinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/userinfo/userinfo.component.html"),
            styles: [__webpack_require__(/*! ./userinfo.component.css */ "./src/app/userinfo/userinfo.component.css")]
        })
    ], UserinfoComponent);
    return UserinfoComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quejas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quejas.service */ "./src/app/quejas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var VerquejaComponent = /** @class */ (function () {
    function VerquejaComponent(quejasSerivice, activatedRoute) {
        this.quejasSerivice = quejasSerivice;
        this.activatedRoute = activatedRoute;
        this.quejas = [];
    }
    VerquejaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quejaId = this.activatedRoute.snapshot.paramMap.get('id');
        //this.quejaId = "5dcd6fed9baf9b3a9cb10921";
        this.quejasSerivice.getQueja(this.quejaId);
        this.quejasSub = this.quejasSerivice.getQuejaUpdateListener()
            .subscribe(function (quejas) {
            console.log("FETCHED", quejas);
            _this.quejas = quejas;
        });
    };
    VerquejaComponent.ctorParameters = function () { return [
        { type: _quejas_service__WEBPACK_IMPORTED_MODULE_2__["QuejasService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    VerquejaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verqueja',
            template: __webpack_require__(/*! raw-loader!./verqueja.component.html */ "./node_modules/raw-loader/index.js!./src/app/verqueja/verqueja.component.html"),
            styles: [__webpack_require__(/*! ./verqueja.component.css */ "./src/app/verqueja/verqueja.component.css")]
        })
    ], VerquejaComponent);
    return VerquejaComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map
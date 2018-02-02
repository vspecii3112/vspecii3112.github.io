webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_user_password_change_user_password_component__ = __webpack_require__("../../../../../src/app/change-user-password/change-user-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__purchase_history_purchase_history_component__ = __webpack_require__("../../../../../src/app/purchase-history/purchase-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__order_confirmation_order_confirmation_component__ = __webpack_require__("../../../../../src/app/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__order_details_order_details_component__ = __webpack_require__("../../../../../src/app/order-details/order-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forgot_user_password_forgot_user_password_component__ = __webpack_require__("../../../../../src/app/forgot-user-password/forgot-user-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_load_coin_info_service__ = __webpack_require__("../../../../../src/app/services/load.coin.info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_check_auth_service__ = __webpack_require__("../../../../../src/app/services/check.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_check_not_auth_service__ = __webpack_require__("../../../../../src/app/services/check.not.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__objects_domain_class__ = __webpack_require__("../../../../../src/app/objects/domain.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_check_not_auth_service__["a" /* isNotAuthGuard */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_check_not_auth_service__["a" /* isNotAuthGuard */]] },
    { path: 'purchase_history/order_details/:id', component: __WEBPACK_IMPORTED_MODULE_15__order_details_order_details_component__["a" /* OrderDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_check_auth_service__["a" /* isAuthGuard */]] },
    { path: 'purchase_history', component: __WEBPACK_IMPORTED_MODULE_11__purchase_history_purchase_history_component__["a" /* PurchaseHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_check_auth_service__["a" /* isAuthGuard */]] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_12__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_check_auth_service__["a" /* isAuthGuard */]] },
    { path: 'change_user_password', component: __WEBPACK_IMPORTED_MODULE_6__change_user_password_change_user_password_component__["a" /* ChangeUserPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_check_auth_service__["a" /* isAuthGuard */]] },
    { path: 'order_confirmation/:id', component: __WEBPACK_IMPORTED_MODULE_14__order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_check_auth_service__["a" /* isAuthGuard */]] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_17__reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_16__forgot_user_password_forgot_user_password_component__["a" /* ForgotUserPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__services_check_not_auth_service__["a" /* isNotAuthGuard */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__change_user_password_change_user_password_component__["a" /* ChangeUserPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__purchase_history_purchase_history_component__["a" /* PurchaseHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__order_details_order_details_component__["a" /* OrderDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__forgot_user_password_forgot_user_password_component__["a" /* ForgotUserPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_17__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__services_shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_21__services_load_coin_info_service__["a" /* LoadCoinInfoService */],
                __WEBPACK_IMPORTED_MODULE_22__services_check_auth_service__["a" /* isAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_23__services_check_not_auth_service__["a" /* isNotAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_24__objects_domain_class__["a" /* Domain */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/change-user-password/change-user-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-user-password/change-user-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-header [totalQuantity] = \"total_qty\"></app-header>\n</div>\n<br><br><br><br>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <ng-container *ngIf=\"successMsg\">\n      <div class=\"alert alert-info text-center\">\n        {{successMsg}}\n      </div>\n    </ng-container>\n  </div>\n</div>\n<div class=\"row\">\n<div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Change Password</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form [formGroup] = \"changePwForm\" (ngSubmit)=\"changePw(changePwForm)\" id=\"changePwForm\" name=\"changePwForm\">\n                <fieldset>\n            <div class=\"form-group\">\n              <label>Current Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"Current Password\" id=\"currentPw\" name=\"currentPw\" formControlName=\"currentPw\" required>\n              <div class=\"text-danger\">\n                {{currentPwMsg}}\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label>New Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" formControlName=\"newPw\" required>\n            <div class=\"text-danger\">\n              {{newPwMsg}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirm New Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"Confirm New Password\" id=\"confirmNewPw\" name=\"confirmNewPw\" formControlName=\"confirmNewPw\" required>\n            <div class=\"text-danger\">\n              {{confirmNewPwMsg}}\n            </div>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Change Password</button>\n        </fieldset>\n      </form>\n      <ng-container *ngIf=\"errorMsg\">\n        <br>\n        <div class=\"alert alert-danger text-center\">\n          {{errorMsg}}\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/change-user-password/change-user-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeUserPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangeUserPasswordComponent = (function () {
    function ChangeUserPasswordComponent(_userService, shoppingCart, _router, fb) {
        this._userService = _userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.fb = fb;
        this.errorMsg = "";
        this.currentPwMsg = "";
        this.newPwMsg = "";
        this.confirmNewPwMsg = "";
        this.successMsg = "";
        this.total_qty = 0;
    }
    ChangeUserPasswordComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getTotalQuantity();
    };
    ChangeUserPasswordComponent.prototype.createForm = function () {
        this.changePwForm = this.fb.group({
            currentPw: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            newPw: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)]],
            confirmNewPw: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)]]
        });
    };
    ChangeUserPasswordComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    ChangeUserPasswordComponent.prototype.clearMsg = function () {
        this.currentPwMsg = "";
        this.newPwMsg = "";
        this.confirmNewPwMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
    };
    ChangeUserPasswordComponent.prototype.changePw = function (_changePwForm) {
        var _this = this;
        console.log(_changePwForm);
        this.clearMsg();
        if (!_changePwForm.valid) {
            if (!_changePwForm.value.currentPw) {
                this.currentPwMsg = "Current password required";
            }
            if (_changePwForm.controls.newPw.errors) {
                if (_changePwForm.controls.newPw.errors.required) {
                    this.newPwMsg = "New password required";
                }
                if (_changePwForm.controls.newPw.errors.minlength) {
                    this.newPwMsg = "Password must contain at least 6 characters";
                }
            }
            if (_changePwForm.controls.confirmNewPw.errors) {
                if (_changePwForm.controls.confirmNewPw.errors.required) {
                    this.confirmNewPwMsg = "Confirm new password required";
                }
                if (_changePwForm.controls.confirmNewPw.errors.minlength) {
                    this.confirmNewPwMsg = "Password must contain at least 6 characters";
                }
            }
        }
        else if (_changePwForm.value.newPw == _changePwForm.value.currentPw) {
            this.errorMsg = "New password must be different than current password";
        }
        else if (_changePwForm.value.newPw !== _changePwForm.value.confirmNewPw) {
            this.errorMsg = "Confirm new password does not match new password";
        }
        else {
            this._userService.changePassword(_changePwForm.value.currentPw, _changePwForm.value.newPw)
                .subscribe(function (data) {
                _this.successMsg = "Password changed successfully";
                _this.changePwForm.reset();
            }, function (err) {
                _this.errorMsg = err.error.msg;
            }, function () { return console.log('update password complete'); });
        }
        /*
        this._userService.changePassword(this.credentials)
            .subscribe(data => {
              if(data.redirect) {
                console.log(data.msg);
              }
            },
            err => {
              console.log(err.msg);
              this.loginMsg = err.msg;
            },
            () => console.log('change password complete')
          )
          */
    };
    ChangeUserPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-user-password',
            template: __webpack_require__("../../../../../src/app/change-user-password/change-user-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-user-password/change-user-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ChangeUserPasswordComponent);
    return ChangeUserPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-bottom-margin {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.border-outline {\r\n    outline: 1px solid #ddd;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<app-header [totalQuantity] = \"total_qty\"></app-header>\n</div>\n<br><br><br><br>\n<div class=\"row\">\n\t<fieldset>\n\t\t<legend>Checkout</legend>\n\t</fieldset>\n\t<form accept-charset=\"UTF-8\" class=\"form-horizontal\" role=\"form\" #shoppingCartCheckoutForm=\"ngForm\" (ngSubmit)=\"createToken()\" id=\"shoppingCartCheckoutForm\">\n\n\t<div class=\"col-sm-7\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<strong>Shipping Address</strong><br><br>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Full Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Full Name\" id=\"cardName\" name=\"cardName\" [(ngModel)]=\"checkoutOrderInfo.name\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Address Line 1</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\"  placeholder=\"Address Line 1\" id=\"addressLine1\" name=\"addressLine1\" [(ngModel)]=\"checkoutOrderInfo.addressLine1\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Address Line 2</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Address Line 2\" id=\"addressLine2\" name=\"addressLine2\" [(ngModel)]=\"checkoutOrderInfo.addressLine2\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"City\" id=\"addressCity\" name=\"addressCity\" [(ngModel)]=\"checkoutOrderInfo.addressCity\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">State/Province</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"State/Province/Region\" id=\"addressState\" name=\"addressState\" [(ngModel)]=\"checkoutOrderInfo.addressState\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Zip/Postal Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Zip/Postal Code\" id=\"addressZip\" name=\"addressZip\" [(ngModel)]=\"checkoutOrderInfo.addressZip\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Country</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Country\" id=\"addressCountry\" name=\"addressCountry\" [(ngModel)]=\"checkoutOrderInfo.addressCountry\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Credit Card</strong><br><br>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tUse stripeJS test card 4242 4242 4242 4242\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardNumber-element\">Card Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardNumber-element\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardExpiry-element\">Card Expiry</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardExpiry-element\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardCvc-element\">CVC</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardCvc-element\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"postalCode-element\">Zip/Postal Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"postalCode-element\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\t\t\t\n\t\t\t\t\n\n\n\n\t</div>\n\n\n\t<div class=\"col-sm-1\"></div>\n\n\n\t<div class=\"col-sm-4\">\n\t\t<div class=\"row\">\n\t\t<div class=\"panel panel-default\">\n\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<strong>Items</strong><br><br>\n\t\t\t\t<table class=\"table table-condensed table-hover no-bottom-margin\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let cartItem of cartItems\"> <!-- loops through the items to be displayed -->\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t{{cartItem.item.title}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t${{cartItem.item.price}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\tQty: {{cartItem.qty}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t\t<div class=\"panel panel-default\">\n\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<strong>Order Details</strong><br><br>\n\t\t\t\t\t\t\t<table class=\"table table-condensed table-hover no-bottom-margin\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\tSubtotal:\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t${{cartTotalPrice}}\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\tShipping:\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t$0\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Grand Total:</strong>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>${{cartTotalPrice + 0}}</strong>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table><br>\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Buy now ${{cartTotalPrice}}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutComponent = (function () {
    function CheckoutComponent(shoppingcart, _router, _fb) {
        this.shoppingcart = shoppingcart;
        this._router = _router;
        this._fb = _fb;
        this.errorMsg = "";
        this.cartItems = []; //this array variable stores the shopping cart item objects
        this.cartTotalPrice = 0; //this variable stores the total price of all the items in the shopping cart
        this.total_qty = 0; //stores the number of items in the variable and this number is shown beside the shopping cart link
        this.checkoutOrderInfo = {
            name: '',
            addressLine1: '',
            addressLine2: '',
            addressCity: '',
            addressState: '',
            addressZip: '',
            addressCountry: ''
        };
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.checkCart();
        this.initCard();
        this.shoppingCartCheckoutForm = this._fb.group({
            'checkoutName': [''],
            'checkoutAddress': [''],
            'checkoutCountry': ['']
        });
    };
    CheckoutComponent.prototype.checkCart = function () {
        var _this = this;
        this.shoppingcart.cartCheckout()
            .subscribe(function (data) {
            if (data.redirect == 'home') {
                _this._router.navigate(['/home']);
                console.log('no items in cart');
            }
            else if (data.redirect == 'login') {
                _this._router.navigate(['/login']);
            }
            else {
                _this.cartItems = data.coins;
                _this.cartTotalPrice = data.totalPrice;
                console.log(_this.cartItems);
            }
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log(err); }, function () { return console.log('checkout done'); });
    };
    CheckoutComponent.prototype.initCard = function () {
        this.stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
        this.elements = this.stripe.elements();
        this.cardNumber = this.elements.create('cardNumber');
        this.cardExpiry = this.elements.create('cardExpiry');
        this.cardCvc = this.elements.create('cardCvc');
        this.postalCode = this.elements.create('postalCode');
        this.cardNumber.mount('#cardNumber-element');
        this.cardExpiry.mount('#cardExpiry-element');
        this.cardCvc.mount('#cardCvc-element');
        this.postalCode.mount('#postalCode-element');
    };
    CheckoutComponent.prototype.stripeTokenHandler = function (token) {
        var _this = this;
        this.shoppingcart.makeCharge(token.id)
            .subscribe(function (data) {
            if (data.success) {
                _this._router.navigate(['/order_confirmation/' + data.orderID]);
                console.log("charge success");
                console.log(data.orderID);
            }
        }, function (err) {
            // if there is no cart session, it will redirect back to the home page
            if (err.msg == 'cart session does not exist') {
                console.log(err.msg);
                _this._router.navigate(['/home']);
            }
            else {
                _this.errorMsg = "There was an error processing your request. Check your account if your order was placed. Otherwise please try again.";
            }
        }, function () { console.log('Checkout complete'); });
    };
    CheckoutComponent.prototype.createToken = function () {
        var _this = this;
        this.stripe.createToken(this.cardNumber, {
            name: this.checkoutOrderInfo.name,
            address_line1: this.checkoutOrderInfo.addressLine1,
            address_line2: this.checkoutOrderInfo.addressLine2,
            address_city: this.checkoutOrderInfo.addressCity,
            address_state: this.checkoutOrderInfo.addressState,
            address_zip: this.checkoutOrderInfo.addressZip,
            address_country: this.checkoutOrderInfo.addressCountry
        })
            .then(function (result) {
            if (result.error) {
                console.log(result.error.message);
            }
            else {
                _this.stripeTokenHandler(result.token);
            }
        });
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    /* Set the fixed height of the footer here */\r\n    height: 30px;\r\n    background-color: #21313F;\r\n    padding-top: 5px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <font color=\"white\">Created by Kenny Leung</font>\n      </div>\n    </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-user-password/forgot-user-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-user-password/forgot-user-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-header></app-header>\n  </div>\n  <br><br><br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <ng-container *ngIf=\"successMsg\">\n        <div class=\"alert alert-info text-center\">\n          {{successMsg}}\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"row\">\n    <ng-container *ngIf=\"errorMsg\">\n      <div class=\"alert alert-danger text-center col-sm-12\">\n        {{errorMsg}}\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Forgot Password</h3>\n       </div>\n        <div class=\"panel-body\">\n          <form [formGroup]=\"forgotPwForm\" (ngSubmit)=\"resetPassword(forgotPwForm)\" id=\"forgotPwForm\" name=\"forgotPwForm\">\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Email\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n                  <div class=\"text-danger\">\n                    {{emailMsg}}\n                  </div>\n            </div>\n            <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </form>\n        </div>\n    </div>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/forgot-user-password/forgot-user-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotUserPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotUserPasswordComponent = (function () {
    function ForgotUserPasswordComponent(userService, _router, fb) {
        this.userService = userService;
        this._router = _router;
        this.fb = fb;
        this.emailMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
    }
    ForgotUserPasswordComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ForgotUserPasswordComponent.prototype.createForm = function () {
        this.forgotPwForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
        });
    };
    ForgotUserPasswordComponent.prototype.clearMsg = function () {
        this.emailMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
    };
    ForgotUserPasswordComponent.prototype.resetPassword = function (_forgotPwForm) {
        var _this = this;
        this.clearMsg();
        console.log(_forgotPwForm);
        if (_forgotPwForm.controls.email.errors) {
            if (_forgotPwForm.controls.email.errors.required) {
                this.emailMsg = "Email is required";
            }
            else {
                this.emailMsg = "Invalid email address";
            }
        }
        else {
            this.userService.forgotPassword(_forgotPwForm.value.email)
                .subscribe(function (data) {
                console.log(data);
                _this.successMsg = "An email has been sent to " + _forgotPwForm.value.email + " to reset your password";
                _this.forgotPwForm.reset();
            }, function (err) {
                _this.errorMsg = err.error.msg;
            }, function () { return console.log('reset password submitted'); });
        }
    };
    ForgotUserPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-user-password',
            template: __webpack_require__("../../../../../src/app/forgot-user-password/forgot-user-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-user-password/forgot-user-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ForgotUserPasswordComponent);
    return ForgotUserPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.buttonlink {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"row\">\n  <div class=\"col-sm-6\">\n      <div class=\"page-header2\">\n          <h1>{{title}}</h1>\n      </div>\n  </div>\n</div> -->\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a routerLink=\"/home\" class=\"navbar-brand\">Bullion Coin Store</a>\n        </div>\n\n        <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a routerLink=\"/home\">Home</a></li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n            <ng-container *ngIf = \"loggedIn\">\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User Account<span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a routerLink=\"/change_user_password\">Change user password</a></li>\n                        <li><a routerLink=\"/purchase_history\">Purchase History</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a class=\"buttonlink\" (click)=\"userLogout()\">Logout</a></li>\n                    </ul>\n                </li>\n            </ng-container>\n            <ng-container *ngIf = \"!loggedIn\">\n                <li><a routerLink=\"/login\">Login</a></li>\n                <li><a routerLink=\"/signup\">Signup</a></li>\n            </ng-container>\n            <li id=\"cartLink\" name=\"cartLink\"><a routerLink=\"/cart\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>({{totalQuantity}})</a></li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.loggedIn = false;
        this.title = 'Bullion Coins Store';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.checkAuthentication();
    };
    HeaderComponent.prototype.checkAuthentication = function () {
        var _this = this;
        this._userService.isLoggedIn()
            .subscribe(function (data) {
            if (data.authenticated) {
                _this.loggedIn = true;
            }
            else {
                _this.loggedIn = false;
            }
        }, function (err) {
            console.log(err.msg);
        }, function () { return console.log('authentication complete'); });
    };
    HeaderComponent.prototype.userLogout = function () {
        var _this = this;
        this._userService.logoutfn()
            .subscribe(function (data) {
            _this.checkAuthentication(); //Checks the authentication of the user to get the latest update so that Angular will re-render the page when it reloads the same URL.
            _this._router.navigate(['/home']);
        }, function (err) { return console.log('Internal server error'); }, function () { return console.log('logout complete'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], HeaderComponent.prototype, "totalQuantity", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<app-header [totalQuantity] = \"total_qty\"></app-header>\n</div>\n<br><br><br><br>\n<div class=\"row\">\n<div *ngFor = \"let coin of coins; let i=index\" id=\"listOfCoins\" name=\"listOfCoins\">\n  <div class=\"thumbnail col-sm-3\">\n    <img src=\"/assets/images/{{coin.imagePath}}\" alt=\"...\" class=\"img-responsive img-thumbnail\" style=\"width:75%\">\n    <div class=\"caption text-center\">\n      <h4>{{coin.title}}</h4>\n      <p>{{coin.description}}</p>\n      <div class=\"clearfix\">\n        <div class=\"price\">\n          <p>${{coin.price}}</p>\n        </div>\n        <input type=\"number\" class=\"text-center\" style=\"width: 4em\" size=\"3\" min = \"1\" max = \"999\" step=\"1\" id = \"itemQty\" name = \"itemQty\" value = \"1\" maxlength = \"3\" #itemQty>\n        <button class=\"btn btn-success\" role=\"button\" id=\"addItemButton\" name=\"addItemButton\" (click)=\"addItemToCart(coin._id, itemQty.value)\">Add</button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_load_coin_info_service__ = __webpack_require__("../../../../../src/app/services/load.coin.info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = (function () {
    function HomepageComponent(loadCoinInfo, shoppingCart) {
        this.loadCoinInfo = loadCoinInfo;
        this.shoppingCart = shoppingCart;
        this.coins = null; //the coins array variable stores the coin objects
        this.total_qty = 0; //stores the number of items in the variable and this number is shown beside the shopping cart link
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.displayAllCoins();
        this.getTotalQuantity();
    };
    //The displayAllCoins function will display the coins available from the mongoDB backend
    HomepageComponent.prototype.displayAllCoins = function () {
        var _this = this;
        this.loadCoinInfo.getCoins() //getCoins observable gets the coins from the mongoDB backend and stores it into the coins array
            .subscribe(function (data) {
            //this.coins=data.msg.map((s:any)=>JSON.parse(JSON.stringify(s)));    //maps the contents of the returned objects to coins[] array. JSON.parse will remove the quotes in the string.
            _this.coins = data.msg;
        }, function (err) { return console.log('error display all coins'); }, function () { return console.log('complete display all coins'); });
    };
    //The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    HomepageComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    // The addItemToCart function handles the button event, when clicked, it will add to the shopping cart and store the number of items in the shopping cart to the variable total_qty
    HomepageComponent.prototype.addItemToCart = function (coinID, itemQty) {
        var _this = this;
        // Checks if the value entered is an integer and greater than 0
        if (Number(itemQty) < 1 || !Number.isInteger(Number(itemQty))) {
            console.log('invalid value');
        }
        else {
            this.shoppingCart.addItem(coinID, itemQty)
                .subscribe(function (data) {
                _this.total_qty = data.msg.totalQty;
            }, function (err) { return console.log('error adding coins to cart'); }, function () { return console.log('complete adding item to cart'); });
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_load_coin_info_service__["a" /* LoadCoinInfoService */], __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-header [totalQuantity] = \"total_qty\"></app-header>\n</div>\n<br><br><br><br>\n<div class=\"row\">\n<div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Please sign in</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\" id=\"loginForm\" name=\"loginForm\">\n            <div class=\"form-group\">\n              <label>Username</label>\n              <input class=\"form-control\" type=\"text\" placeholder=\"Username\" id=\"username\" name=\"username\" formControlName=\"username\" required>\n                <div class=\"text-danger\">\n                  {{usernameMsg}}\n                </div>\n\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" formControlName=\"password\" required>\n              <div class=\"text-danger\">\n                {{passwordMsg}}\n              </div>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Login</button>\n      </form>\n      <ng-container *ngIf=\"errorMsg\">\n        <br>\n        <div class=\"alert alert-danger text-center\">\n          {{errorMsg}}\n        </div>\n      </ng-container>\n      </div>\n  </div>\n</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2 col-sm-offset-4 text-left\">\n    Click <a routerLink=\"/signup\">here</a> to sign up\n  </div>\n  <div class=\"col-sm-2 text-right\">\n    <a routerLink=\"/forgot\">Forgot password?</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, shoppingCart, _router, fb, next) {
        this.userService = userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.fb = fb;
        this.next = next;
        this.usernameMsg = "";
        this.passwordMsg = "";
        this.errorMsg = "";
        this.redirectURL = "";
        this.total_qty = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getTotalQuantity();
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginComponent.prototype.clearMsg = function () {
        this.usernameMsg = "";
        this.passwordMsg = "";
        this.errorMsg = "";
    };
    LoginComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    LoginComponent.prototype.login = function (_loginForm) {
        var _this = this;
        this.clearMsg();
        console.log(_loginForm);
        if (!_loginForm.valid) {
            if (!_loginForm.controls.username.value) {
                this.usernameMsg = "Username is required";
            }
            if (!_loginForm.controls.password.value) {
                this.passwordMsg = "Password is required";
            }
        }
        else {
            this.userService.loginfn(_loginForm.controls.username.value, _loginForm.controls.password.value)
                .subscribe(function (data) {
                _this.redirectURL = sessionStorage.getItem('redirectURL') || "/home";
                _this._router.navigate([_this.redirectURL]);
                sessionStorage.removeItem('redirectURL');
            }, function (err) {
                _this.errorMsg = err.error.msg;
            }, function () { return console.log('login complete'); });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/objects/domain.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Domain; });
var Domain = (function () {
    function Domain() {
        this.url = "https://cstoreapi.herokuapp.com"; // http://localhost:3333 , https://cstoreapi.herokuapp.com;
    }
    return Domain;
}());



/***/ }),

/***/ "../../../../../src/app/order-confirmation/order-confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-confirmation/order-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-header [totalQuantity] = \"total_qty\"></app-header>\n</div>\n<br><br><br><br>\n<div class=\"row\">\n  <fieldset>\n    <legend>Your order has been received.</legend>\n  </fieldset>\n</div>\n<div class=\"row\">\n  Your order ID is {{orderID}}\n</div><br>\n\n<div class=\"row\">\n  <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n          <strong>Shipping Address</strong><br><br>\n          <strong>{{name}}</strong><br>\n          {{shippingAddress.addressLine1}}<br>\n          {{shippingAddress.addressLine2}}<br>\n          {{shippingAddress.addressCity}}, {{shippingAddress.addressState}}, {{shippingAddress.addressZip}}<br>\n          {{shippingAddress.addressCountry}}<br>\n      </div>\n    </div>\n  </div>\n\n<div class=\"row\">\n\n          <table class=\"table table-condensed table-bordered no-margin-bottom\">\n              <thead>\n                  <tr class=\"active\">\n                      <th>Product</th>\n                      <th>Price</th>\n                      <th class=\"text-right\">Quantity</th>\n                      <th class=\"text-right\">Total</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <ng-container *ngFor=\"let order of orders\">\n                    <tr>\n                      <td class=\"col-sm-6\">\n                        {{order.item.title}}\n                      </td>\n                      <td class=\"col-sm-2 text-right\">\n                        ${{order.price}}\n\n                      </td>\n                      <td class=\"col-sm-2 text-right\">\n                        {{order.qty}}\n                      </td>\n                      <td class=\"col-sm-2 text-right\">\n                        ${{order.price * order.qty}}\n                      </td>\n                  </tr>\n                  </ng-container>\n                </tbody>\n              </table>\n  </div>\n\n  <div class=\"row\">\n      <table class=\"table table-condensed table-bordered\">\n        <tbody>\n      \n                  <tr>\n                      <td class=\"text-right col-sm-10\">Subtotal</td>\n                      <td class=\"text-right col-sm-2\">${{subTotal}}</td>\n                  </tr>\n                  <tr>\n                      <td class=\"text-right col-sm-10\">Shipping</td>\n                      <td class=\"text-right col-sm-2\">$0</td>\n                  </tr>\n                  <tr>\n                      <td class=\"text-right col-sm-10\"><strong>Grand Total</strong></td>\n                      <td class=\"text-right col-sm-2\"><strong>${{subTotal + 0}}</strong></td>\n                  </tr>\n              </tbody>\n          </table>\n\n\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/order-confirmation/order-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderConfirmationComponent = (function () {
    function OrderConfirmationComponent(user, shoppingCart, _activatedRoute) {
        var _this = this;
        this.user = user;
        this.shoppingCart = shoppingCart;
        this._activatedRoute = _activatedRoute;
        this.orderID = '';
        this.orders = [];
        this.subTotal = 0;
        this.name = '';
        this.shippingAddress = {
            addressLine1: '',
            addressLine2: '',
            addressCity: '',
            addressState: '',
            addressZip: '',
            addressCountry: ''
        };
        this.date = '';
        this.total_qty = 0; //stores the number of items in the variable and this number is shown beside the shopping cart link
        this._activatedRoute.params.subscribe(function (params) {
            _this.orderID = params.id;
            console.log(_this.orderID);
        });
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
        this.getTotalQuantity();
        this.getOrderDetails(this.orderID);
    };
    OrderConfirmationComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    OrderConfirmationComponent.prototype.getOrderDetails = function (orderID) {
        var _this = this;
        this.user.getOrderDetails(orderID)
            .subscribe(function (data) {
            _this.name = data.orderDetails.name;
            _this.shippingAddress = data.orderDetails.address;
            _this.orders = data.orderDetails.cart.items;
            _this.subTotal = data.orderDetails.cart.totalPrice;
            _this.date = data.orderDetails.date;
            console.log(data.orderDetails);
        }, function (err) { }, function () { return console.log("order details complete"); });
    };
    OrderConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-confirmation',
            template: __webpack_require__("../../../../../src/app/order-confirmation/order-confirmation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/order-confirmation/order-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OrderConfirmationComponent);
    return OrderConfirmationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/order-details/order-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-details/order-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<app-header [totalQuantity] = \"total_qty\"></app-header>\n</div>\n<br><br><br><br>\n\n<div class=\"row\">\n    <fieldset>\n        <legend>Order Details</legend>\n    </fieldset>\n</div>\n\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <strong>Shipping Address</strong><br><br>\n                <strong>{{name}}</strong><br>\n                {{shippingAddress.addressLine1}}<br>\n                {{shippingAddress.addressLine2}}<br>\n                {{shippingAddress.addressCity}}, {{shippingAddress.addressState}}, {{shippingAddress.addressZip}}<br>\n                {{shippingAddress.addressCountry}}<br>\n            </div>\n        </div>\n    </div>\n      \n      <div class=\"row\">\n      \n                <table class=\"table table-condensed table-bordered no-margin-bottom\">\n                    <thead>\n                        <tr class=\"active\">\n                            <th>Product</th>\n                            <th>Price</th>\n                            <th class=\"text-right\">Quantity</th>\n                            <th class=\"text-right\">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container *ngFor=\"let order of orders\">\n                          <tr>\n                            <td class=\"col-sm-6\">\n                              {{order.item.title}}\n                            </td>\n                            <td class=\"col-sm-2 text-right\">\n                              ${{order.price}}\n      \n                            </td>\n                            <td class=\"col-sm-2 text-right\">\n                              {{order.qty}}\n                            </td>\n                            <td class=\"col-sm-2 text-right\">\n                              ${{order.price * order.qty}}\n                            </td>\n                        </tr>\n                        </ng-container>\n                      </tbody>\n                    </table>\n        </div>\n      \n        <div class=\"row\">\n            <table class=\"table table-condensed table-bordered\">\n              <tbody>\n            \n                        <tr>\n                            <td class=\"text-right col-sm-10\">Subtotal</td>\n                            <td class=\"text-right col-sm-2\">${{subTotal}}</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-right col-sm-10\">Shipping</td>\n                            <td class=\"text-right col-sm-2\">$0</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-right col-sm-10\"><strong>Grand Total</strong></td>\n                            <td class=\"text-right col-sm-2\"><strong>${{subTotal + 0}}</strong></td>\n                        </tr>\n                    </tbody>\n                </table>\n      \n      \n        </div>"

/***/ }),

/***/ "../../../../../src/app/order-details/order-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailsComponent = (function () {
    function OrderDetailsComponent(user, shoppingCart, _activatedRoute) {
        var _this = this;
        this.user = user;
        this.shoppingCart = shoppingCart;
        this._activatedRoute = _activatedRoute;
        this.orderID = '';
        this.name = '';
        this.shippingAddress = {
            addressLine1: '',
            addressLine2: '',
            addressCity: '',
            addressState: '',
            addressZip: '',
            addressCountry: ''
        };
        this.orders = [];
        this.subTotal = 0;
        this.date = '';
        this.total_qty = 0; //stores the number of items in the variable and this number is shown beside the shopping cart link
        this._activatedRoute.params.subscribe(function (params) {
            _this.orderID = params.id;
            console.log(_this.orderID);
        });
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        this.getTotalQuantity();
        this.getOrderDetails(this.orderID);
    };
    //The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    OrderDetailsComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    OrderDetailsComponent.prototype.getOrderDetails = function (orderID) {
        var _this = this;
        this.user.getOrderDetails(orderID)
            .subscribe(function (data) {
            _this.name = data.orderDetails.name;
            _this.shippingAddress = data.orderDetails.address;
            _this.orders = data.orderDetails.cart.items;
            _this.subTotal = data.orderDetails.cart.totalPrice;
            _this.date = data.orderDetails.date;
            console.log(data.orderDetails);
        }, function (err) { }, function () { return console.log("order details complete"); });
    };
    OrderDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-details',
            template: __webpack_require__("../../../../../src/app/order-details/order-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/purchase-history/purchase-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-margin {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.borderless td, .borderless th {\r\n    border: none;\r\n}\r\n\r\n.left-border {\r\n    border-left: 1px solid #ddd\r\n}\r\n\r\n.right-border {\r\n    border-right: 1px solid #ddd\r\n}\r\n\r\n.vertical-middle {\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/purchase-history/purchase-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n</div>\r\n<br><br><br><br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"row\">\r\n        <fieldset>\r\n                <legend>Purchase History</legend>\r\n            </fieldset>\r\n    </div>\r\n        <div *ngFor = \"let order of orders\">\r\n            <div class=\"row\">\r\n                <nav><a routerLink=\"/purchase_history/order_details/{{order._id}}\">Order Details</a></nav>\r\n            </div>\r\n            <div class =\"row\">\r\n                        \r\n                            <table class=\"table table-condensed table-bordered\">\r\n                                <thead>\r\n                                    <tr class=\"active\">\r\n                                        <th>Product</th>\r\n                                        <th>Quantity</th>\r\n                                        <th>Price</th>\r\n                                        <th>Date</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <ng-container *ngFor = \"let item of order.cart.items\">\r\n                                    <tr>\r\n                                        <td class=\"col-sm-4\">\r\n                                            {{item.item.title}}\r\n                                        </td>\r\n                                        <td class=\"col-sm-2\">\r\n                                            {{item.qty}}\r\n                                        </td>\r\n                                        <td class=\"col-sm-3\">\r\n                                            ${{item.item.price}}\r\n                                            </td>\r\n                                        <td class=\"col-sm-3\">\r\n                                            {{order.date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    </ng-container>\r\n                                </tbody>\r\n                            </table>\r\n                    </div>\r\n                        \r\n\r\n        </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/purchase-history/purchase-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchaseHistoryComponent = (function () {
    function PurchaseHistoryComponent(shoppingCart, user, _router) {
        this.shoppingCart = shoppingCart;
        this.user = user;
        this._router = _router;
        this.total_qty = 0; //stores the number of items in the variable and this number is shown beside the shopping cart link
        this.orders = [];
        this.itemsInCart = [];
    }
    PurchaseHistoryComponent.prototype.ngOnInit = function () {
        this.getTotalQuantity();
        this.getPurchaseHistory();
    };
    // This function will ge the total quantity of items in the cart to update the badge in the header
    PurchaseHistoryComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    PurchaseHistoryComponent.prototype.getPurchaseHistory = function () {
        var _this = this;
        this.user.getPurchaseHistory()
            .subscribe(function (data) {
            _this.orders = data.customerOrders;
            console.log(data.customerOrders);
            //The below code puts the individual items in the cart in an array to use in Angular ngFor loop in html page
            //****************************************************************** */
            _this.orders.forEach(function (element) {
                var a = [];
                //push the cart items into the array
                for (var i in element.cart.items) {
                    a.push(element.cart.items[i]);
                }
                _this.itemsInCart.push(a);
            });
            //push the cart orders into the orders array
            for (var i in _this.orders) {
                _this.orders[i].cart.items = _this.itemsInCart[i];
            }
            //******************************************************************* */
            console.log(_this.orders);
        }, function (err) {
            _this._router.navigate(['/login']);
        }, function () { return console.log('complete getting purchase history'); });
    };
    PurchaseHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-purchase-history',
            template: __webpack_require__("../../../../../src/app/purchase-history/purchase-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/purchase-history/purchase-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PurchaseHistoryComponent);
    return PurchaseHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "  <br><br><br><br>\n  <ng-container *ngIf=\"tokenValid; else elseBlock\">\n  <div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Reset Password</h3>\n       </div>\n        <div class=\"panel-body\">\n          <form [formGroup]=\"resetPwForm\" (ngSubmit)=\"resetPassword(resetPwForm)\" id=\"resetPwForm\" name=\"resetPwForm\">\n            <div class=\"form-group\">\n              <label>New Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" formControlName=\"newPw\" required>\n              <div class=\"text-danger\">\n                {{newPwMsg}}\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Confirm Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPw\" name=\"confirmPw\" formControlName=\"confirmPw\" required>\n                <div class=\"text-danger\">\n                  {{confirmPwMsg}}\n                </div>\n            </div>\n            <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </form>\n        <ng-container *ngIf=\"errorMsg\">\n          <br>\n          <div class=\"alert alert-danger text-center\">\n            {{errorMsg}}\n          </div>\n        </ng-container>\n        </div>\n    </div>\n  </div>\n  </div>\n  </ng-container>\n  <ng-template #elseBlock>\n    <div class=\"row\">\n    <ng-container *ngIf=\"errorMsg\">\n      <div class=\"alert alert-danger text-center col-sm-12\">\n        {{errorMsg}}\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"successMsg\">\n        <div class=\"alert alert-success text-center col-sm-12\">\n          {{successMsg}}\n        </div>\n      </ng-container>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(userService, activatedRoute, fb) {
        var _this = this;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.tokenValid = false;
        this.token = "";
        this.newPwMsg = "";
        this.confirmPwMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
        activatedRoute.params.subscribe(function (params) {
            _this.token = params.token;
            _this.checkToken(params.token);
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ResetPasswordComponent.prototype.createForm = function () {
        this.resetPwForm = this.fb.group({
            newPw: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)]],
            confirmPw: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)]]
        });
    };
    ResetPasswordComponent.prototype.clearMsg = function () {
        this.newPwMsg = "";
        this.confirmPwMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
    };
    ResetPasswordComponent.prototype.checkToken = function (token) {
        var _this = this;
        this.userService.checkPwToken(token)
            .subscribe(function (data) {
            _this.tokenValid = data.tokenValid;
        }, function (err) {
            _this.errorMsg = err.error.msg;
        }, function () { return console.log('complete checking token'); });
    };
    ResetPasswordComponent.prototype.resetPassword = function (_resetPwForm) {
        var _this = this;
        this.clearMsg();
        if (!_resetPwForm.valid) {
            if (_resetPwForm.controls.newPw.errors) {
                if (_resetPwForm.controls.newPw.errors.required) {
                    this.newPwMsg = "Password is required";
                }
                else {
                    this.newPwMsg = "Password need to be at least 6 characters in length";
                }
            }
            if (_resetPwForm.controls.confirmPw.errors) {
                if (_resetPwForm.controls.confirmPw.errors.required) {
                    this.confirmPwMsg = "Confirm password is required";
                }
                else {
                    this.confirmPwMsg = "Password need to be at least 6 characters in length";
                }
            }
        }
        else if (_resetPwForm.value.newPw !== _resetPwForm.value.confirmPw) {
            this.errorMsg = "Confirm new password does not match new password";
        }
        else {
            this.userService.resetPassword(_resetPwForm.value.newPw, this.token)
                .subscribe(function (data) {
                _this.successMsg = data.msg;
                _this.tokenValid = false;
                _this.resetPwForm.reset();
            }, function (err) {
                _this.errorMsg = err.error.msg;
            }, function () { return console.log('Reset password complete'); });
        }
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/check.auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var isAuthGuard = (function () {
    function isAuthGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    isAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this._userService.isLoggedIn().map(function (res) {
            if (res.authenticated) {
                //if user is logged in
                return true;
            }
            else {
                //if user is not logged in
                sessionStorage.setItem('redirectURL', state.url);
                _this._router.navigate(['/login']);
                return false;
            }
        }).catch(function () {
            _this._router.navigate(['/login']);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of(false);
        });
    };
    isAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], isAuthGuard);
    return isAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/check.not.auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var isNotAuthGuard = (function () {
    function isNotAuthGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    isNotAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this._userService.isLoggedIn().map(function (res) {
            if (!res.authenticated) {
                //if user is not logged in
                return true;
            }
            else {
                //if user is logged in
                _this._router.navigate(['/home']);
                return false;
            }
        }).catch(function () {
            _this._router.navigate(['/home']);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of(false);
        });
    };
    isNotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], isNotAuthGuard);
    return isNotAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/load.coin.info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadCoinInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_domain_class__ = __webpack_require__("../../../../../src/app/objects/domain.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoadCoinInfoService = (function () {
    function LoadCoinInfoService(_http, domain) {
        this._http = _http;
        this.domain = domain;
    }
    LoadCoinInfoService.prototype.getCoins = function () {
        return this._http.get(this.domain.url + '/get_coin_info')
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    LoadCoinInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__objects_domain_class__["a" /* Domain */]])
    ], LoadCoinInfoService);
    return LoadCoinInfoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shopping.cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_domain_class__ = __webpack_require__("../../../../../src/app/objects/domain.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingCartService = (function () {
    function ShoppingCartService(_http, domain) {
        this._http = _http;
        this.domain = domain;
    }
    ShoppingCartService.prototype.getCartItems = function () {
        return this._http.get(this.domain.url + '/shopping_cart', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.getTotalQuantity = function () {
        return this._http.get(this.domain.url + '/get_total_quantity', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.addItem = function (coinID, itemQty) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var bodyString = 'itemQty=' + itemQty;
        return this._http.post(this.domain.url + '/add_to_cart/' + coinID, bodyString, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.reduceOneQuantity = function (coinID) {
        return this._http.get(this.domain.url + '/reduce_one/' + coinID, { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.removeItem = function (coinID) {
        return this._http.get(this.domain.url + '/remove_all/' + coinID, { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.cartCheckout = function () {
        return this._http.get(this.domain.url + '/checkout', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.makeCharge = function (cardToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var token = 'stripeToken=' + cardToken;
        return this._http.post(this.domain.url + '/make_charge', token, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.updateCart = function (updateCart) {
        var bodyString = JSON.stringify(updateCart);
        //console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.domain.url + '/cart_update', bodyString, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__objects_domain_class__["a" /* Domain */]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_domain_class__ = __webpack_require__("../../../../../src/app/objects/domain.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(_http, domain) {
        this._http = _http;
        this.domain = domain;
    }
    UserService.prototype.isLoggedIn = function () {
        return this._http.get(this.domain.url + '/user/isauthenticated', { withCredentials: true });
    };
    UserService.prototype.logoutfn = function () {
        return this._http.get(this.domain.url + '/user/logout', { withCredentials: true });
    };
    UserService.prototype.loginfn = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var creds = 'uname=' + username + '&password=' + password;
        return this._http.post(this.domain.url + '/user/authenticate', creds, { headers: headers, withCredentials: true });
    };
    UserService.prototype.signupfn = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + newUser.fname + '&lname=' + newUser.lname + '&email=' + newUser.email + '&uname=' + newUser.username + '&password=' + newUser.password;
        return this._http.post(this.domain.url + '/user/adduser', creds, { headers: headers, withCredentials: true });
    };
    UserService.prototype.getPurchaseHistory = function () {
        return this._http.get(this.domain.url + '/user/purchase_history', { withCredentials: true });
    };
    UserService.prototype.getOrderDetails = function (orderID) {
        return this._http.get(this.domain.url + '/user/order_details/' + orderID, { withCredentials: true });
    };
    UserService.prototype.changePassword = function (currentPw, newPw) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'currentPassword=' + currentPw + '&newPassword=' + newPw;
        return this._http.post(this.domain.url + '/user/change_password', creds, { headers: headers, withCredentials: true });
    };
    UserService.prototype.forgotPassword = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var body = 'email=' + email;
        return this._http.post(this.domain.url + '/user/forgot_password', body, { headers: headers, withCredentials: true });
    };
    UserService.prototype.checkPwToken = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        return this._http.get(this.domain.url + '/user/check_token/' + token, { headers: headers, withCredentials: true });
    };
    UserService.prototype.resetPassword = function (newPw, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var body = 'newPassword=' + newPw;
        return this._http.post(this.domain.url + '/user/reset_password/' + token, body, { headers: headers, withCredentials: true });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__objects_domain_class__["a" /* Domain */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttonlink {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<app-header [totalQuantity] = \"total_qty\"></app-header>\n</div>\n<br><br><br><br>\n<div class=\"row\">\n<fieldset>\n    <legend>Shopping Cart</legend>\n</fieldset>\n<ng-container *ngIf = \"total_qty!=0\"> <!-- if there are items in shopping cart -->\n<form [formGroup]=\"updateCartForm\" (ngSubmit)=\"updateCart(updateCartForm)\">\n    <div formArrayName=\"carts\">\n    <table class=\"table table-hover table-condensed\">\n        <thead>\n            <tr class=\"active\">\n                <th>Product</th>\n                <th>Quantity</th>\n                <th class=\"text-right\">Price</th>\n                <th class=\"text-right\">Total</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <ng-container *ngFor=\"let cart of updateCartForm.controls.carts.controls; let i=index\"> <!-- loops through the items to be displayed -->\n            <tr [formGroupName]=\"i\">\n                <td class=\"col-sm-5\">\n                    <div class=\"media\">\n                        <div class=\"media-left\">\n                            <img class=\"media-object\" src=\"/assets/images/{{cartItems[i].item.imagePath}}\" style=\"width: 80px; height: 80px;\">\n                        </div>\n                        <div class=\"media-body\">\n                            {{updateCartForm.controls.carts.controls[i].controls.productName.value}}\n                        </div>\n                    </div>\n                </td>\n                <td class=\"col-sm-2\">\n                    <input type=\"number\" min = \"1\" step = \"1\" max=\"999\" siz = \"3\" style=\"width: 5em\" class=\"text-center form-control\" id=\"productQuantity\" name=\"productQuantity\" formControlName=\"productQuantity\" #prdQty required>\n                </td>\n                <td class=\"col-sm-2 text-right\">\n                    ${{updateCartForm.controls.carts.controls[i].controls.productPrice.value}}\n                </td>\n                <td class=\"col-sm-2 text-right\">\n                    ${{prdQty.value * updateCartForm.controls.carts.controls[i].controls.productPrice.value}}\n                </td>\n                <td class=\"col-sm-1\">\n                    <a class=\"buttonlink pull-right\" (click)=\"removeItem(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n                </td>\n\n            </tr>\n            </ng-container>\n\n            <!--\n            <td class=\"col-sm-1 col-md-1\" style=\"text-align: center\">\n                <input type=\"number\" class=\"form-control\" id=\"item_quantity\" value=\"{{cartItem.qty}}\">\n            </td>\n            -->\n            <tr>\n                    <td class=\"col-sm-5\">   </td>\n                    <td class=\"col-sm-2\">   </td>\n                    <td class=\"col-sm-2\">   </td>\n                    <td class=\"col-sm-2\">   </td>\n                    <td class=\"col-sm-1\">   </td>\n            </tr>\n\n            <tr>\n                <td class=\"col-sm-5\">   </td>\n                <td class=\"col-sm-2\">   </td>\n                <td class=\"text-right col-sm-2\"><h5>Subtotal</h5></td>\n                <td class=\"text-right col-sm-2\"><h5><strong>${{cartTotalPrice}}</strong></h5></td>\n                <td class=\"col-sm-1\">   </td>\n            </tr>\n            <tr>\n                <td class=\"col-sm-5\">   </td>\n                <td class=\"col-sm-2\">   </td>\n                <td class=\"text-right col-sm-2\"><h5>Shipping</h5></td>\n                <td class=\"text-right col-sm-2\"><h5><strong>$0</strong></h5></td>\n                <td class=\"col-sm-1\">   </td>\n            </tr>\n            <tr>\n                <td class=\"col-sm-5\">   </td>\n                <td class=\"col-sm-2\">   </td>\n                <td class=\"text-right col-sm-2\"><h3>Grand Total</h3></td>\n                <td class=\"text-right col-sm-2\"><h3><strong>${{cartTotalPrice + 0}}</strong></h3></td>\n                <td class=\"col-sm-1\">   </td>\n            </tr>\n        </tbody>\n    </table>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <a routerLink=\"/checkout\" type=\"button\" class=\"btn btn-success pull-right\">Checkout</a>\n            <button type=\"submit\" class=\"btn btn-default pull-right\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>Update Cart</button>            \n        </div>\n    </div>\n</form>\n\n\n</ng-container>\n<ng-container *ngIf = \"total_qty==0\"> <!-- if there are no items in shopping cart -->\n<div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n        <h2>No Items in Cart</h2>\n    </div>\n</div>\n</ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingcart, _router, _fb) {
        this.shoppingcart = shoppingcart;
        this._router = _router;
        this._fb = _fb;
        this.cartItems = []; //this array variable stores the shopping cart item objects
        this.cartTotalPrice = 0; //this variable stores the total price of all the items in the shopping cart
        this.total_qty = 0; // this variable stores the total quantity
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        //initialize the form
        this.updateCartForm = this._fb.group({
            carts: this._fb.array([
                this.initCartForm(),
            ])
        });
        this.shoppingCartItems();
        this.updateCartForm.valueChanges
            .debounceTime(1500)
            .distinctUntilChanged()
            .subscribe(function (data) {
            _this.cartTotalPrice = 0;
            for (var i = 0; i < data.carts.length; i++) {
                _this.cartTotalPrice = _this.cartTotalPrice + (data.carts[i].productQuantity * data.carts[i].productPrice);
            }
            //console.log(data);
        });
    };
    ShoppingCartComponent.prototype.initCartForm = function () {
        return this._fb.group({
            productName: [''],
            productQuantity: [''],
            productPrice: [''],
            productTotalPrice: ['']
        });
    };
    ShoppingCartComponent.prototype.showCartItems = function (items) {
        var control = this.updateCartForm.controls['carts'];
        for (var i = 0; i < items.length; i++) {
            control.push(this._fb.group({
                productName: [items[i].item.title],
                productQuantity: [items[i].qty],
                productPrice: [items[i].item.price],
                productTotalPrice: ['']
            }));
        }
        ;
    };
    ShoppingCartComponent.prototype.clearCartFirstItem = function () {
        //Clears the first item because its initialized with ''
        var control = this.updateCartForm.controls['carts'];
        control.removeAt(0);
    };
    ShoppingCartComponent.prototype.shoppingCartItems = function () {
        var _this = this;
        this.shoppingcart.getCartItems() //getCartItems observable gets the shopping cart items and stores it into the cartItems array
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins;
                _this.cartTotalPrice = data.totalPrice; //total price of all the items in the shopping cart
                _this.total_qty = data.totalQuantity; //total quantity of items in the shopping cart
                //this.updateCartForm.value.carts[0].productName = this.cartItems[0].item.title;
                _this.clearCartFirstItem();
                _this.showCartItems(_this.cartItems);
                //console.log(this.cartItems);
            }
            else {
                _this.clearCartFirstItem();
                _this.cartItems = null;
                _this.cartTotalPrice = 0;
                _this.total_qty = 0;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Get Cart Items Complete'); });
    };
    ShoppingCartComponent.prototype.removeItem = function (i) {
        // remove address from the list
        var control = this.updateCartForm.controls['carts'];
        control.removeAt(i);
        this.cartItems.splice(i, 1);
    };
    ShoppingCartComponent.prototype.isFormValid = function (cartForm) {
        for (var i = 0; i < cartForm.controls.carts.length; i++) {
            if (Number(cartForm.controls.carts.controls[i].controls.productQuantity.value) < 1 || !Number.isInteger(Number(cartForm.controls.carts.controls[i].controls.productQuantity.value))) {
                return false;
            }
        }
        return true;
    };
    ShoppingCartComponent.prototype.updateCart = function (cartForm) {
        var _this = this;
        //console.log(cartForm);
        if (!this.isFormValid(cartForm)) {
            console.log("Invalid Quantity");
        }
        else {
            for (var i = 0; i < cartForm.controls.carts.length; i++) {
                this.cartItems[i].qty = cartForm.controls.carts.controls[i].controls.productQuantity.value;
                this.cartItems[i].price = cartForm.controls.carts.controls[i].controls.productQuantity.value * cartForm.controls.carts.controls[i].controls.productPrice.value;
            }
            //console.log(this.cartItems);
            this.shoppingcart.updateCart(this.cartItems)
                .subscribe(function (data) {
                if (data.success) {
                    _this.total_qty = data.totalQuantity;
                    _this.cartTotalPrice = data.totalPrice;
                }
            }, function (err) { return console.log(err); }, function () { return console.log('Update cart complete'); });
        }
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-header></app-header>\n</div>\n<div class=\"row\">\n<br><br><br><br>\n<div class=\"col-md-4 col-md-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">User Registration</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm)\" id=\"signupForm\">\n                <fieldset>\n            <div class=\"form-group\">\n              <label>First Name</label>\n              <input class=\"form-control\" type=\"text\" id=\"fname\" name=\"fname\" formControlName=\"fname\" required>\n                <div class=\"text-danger\">\n                  {{fnameMsg}}\n                </div>\n            </div>\n          <div class=\"form-group\">\n            <label>Last Name</label>\n            <input class=\"form-control\" type=\"text\" id=\"lname\" name=\"lname\" formControlName=\"lname\" required>\n              <div class=\"text-danger\">\n                {{lnameMsg}}\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n              <div class=\"text-danger\">\n                {{emailMsg}}\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Username</label>\n            <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" formControlName=\"username\" required>\n              <div class=\"text-danger\">\n                {{usernameMsg}}\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\" required>\n              <div class=\"text-danger\">\n                {{passwordMsg}}\n              </div>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </fieldset>\n          </form>\n      </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(_userService, _router, _fb) {
        this._userService = _userService;
        this._router = _router;
        this._fb = _fb;
        this.fnameMsg = '';
        this.lnameMsg = '';
        this.emailMsg = '';
        this.usernameMsg = '';
        this.passwordMsg = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SignupComponent.prototype.createForm = function () {
        this.signupForm = this._fb.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            lname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)]]
        });
    };
    SignupComponent.prototype.clearMsg = function () {
        this.fnameMsg = '';
        this.lnameMsg = '';
        this.emailMsg = '';
        this.usernameMsg = '';
        this.passwordMsg = '';
    };
    SignupComponent.prototype.signup = function (_signupForm) {
        var _this = this;
        this.clearMsg();
        if (!_signupForm.valid) {
            if (!_signupForm.controls.fname.value) {
                this.fnameMsg = "First name is required";
            }
            if (!_signupForm.controls.lname.value) {
                this.lnameMsg = "Last name is required";
            }
            if (!_signupForm.controls.username.value) {
                this.usernameMsg = "Username is required";
            }
            if (_signupForm.controls.email.errors) {
                if (_signupForm.controls.email.errors.required) {
                    this.emailMsg = "Email is required";
                }
                else {
                    this.emailMsg = "Invalid email address";
                }
            }
            if (_signupForm.controls.password.errors) {
                if (_signupForm.controls.password.errors.required) {
                    this.passwordMsg = "Password is required";
                }
                else {
                    this.passwordMsg = "Password need to be at least 6 characters in length";
                }
            }
        }
        else {
            this._userService.signupfn(_signupForm.value)
                .subscribe(function (data) {
                if (data.authenticated) {
                    console.log('signup is success');
                    _this._router.navigate(['/home']);
                }
            }, function (err) {
                console.log(err.error.msg);
            }, function () { return console.log('signup complete'); });
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
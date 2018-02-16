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

module.exports = "<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
exports.push([module.i, ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-user-password/change-user-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"container padding-top padding-bottom\">\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <ng-container *ngIf=\"successMsg\">\n      <div class=\"alert alert-info text-center\">\n        {{successMsg}}\n      </div>\n    </ng-container>\n  </div>\n</div>\n<div class=\"row\">\n<div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title text-center\">Change Password</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form [formGroup] = \"changePwForm\" (ngSubmit)=\"changePw(changePwForm)\" id=\"changePwForm\" name=\"changePwForm\">\n                <fieldset>\n            <div class=\"form-group\">\n              <label>Current Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"Current Password\" id=\"currentPw\" name=\"currentPw\" formControlName=\"currentPw\" required>\n              <div class=\"text-danger\">\n                {{currentPwMsg}}\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label>New Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" formControlName=\"newPw\" required>\n            <div class=\"text-danger\">\n              {{newPwMsg}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirm New Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"Confirm New Password\" id=\"confirmNewPw\" name=\"confirmNewPw\" formControlName=\"confirmNewPw\" required>\n            <div class=\"text-danger\">\n              {{confirmNewPwMsg}}\n            </div>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Change Password</button>\n        </fieldset>\n      </form>\n      <ng-container *ngIf=\"errorMsg\">\n        <br>\n        <div class=\"alert alert-danger text-center\">\n          {{errorMsg}}\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n"

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
exports.push([module.i, ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-bottom-margin {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.border-outline {\r\n    outline: 1px solid #ddd;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"container padding-top padding-bottom\">\n\t<div class=\"row text-center\">\n\t\t<h3>Checkout</h3>\n\t</div><br>\n\t<form class=\"form-horizontal\" [formGroup]=\"shoppingCartCheckoutForm\" (ngSubmit)=\"createToken(shoppingCartCheckoutForm)\" id=\"shoppingCartCheckoutForm\" name=\"shoppingCartCheckoutForm\">\n\n\t<div class=\"col-sm-7\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<strong>Shipping Address</strong><br><br>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Full Name <font color=\"red\">*</font></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{nameMsg}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<fieldset formGroupName=\"shippingAddress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Address Line 1 <font color=\"red\">*</font></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"addressLine1\" name=\"addressLine1\" formControlName=\"addressLine1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{addressLine1Msg}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Address Line 2</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"addressLine2\" name=\"addressLine2\" formControlName=\"addressLine2\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">City<font color=\"red\">*</font></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"city\" name=\"city\" formControlName=\"city\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{cityMsg}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">State/Province</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"state\" name=\"state\" formControlName=\"state\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Zip/Postal Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"zip\" name=\"zip\" formControlName=\"zip\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Country <font color=\"red\">*</font></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"country\" name=\"country\" formControlName=\"country\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Afghanistan\" title=\"Afghanistan\">Afghanistan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Åland Islands\" title=\"Åland Islands\">Åland Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Albania\" title=\"Albania\">Albania</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Algeria\" title=\"Algeria\">Algeria</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"American Samoa\" title=\"American Samoa\">American Samoa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Andorra\" title=\"Andorra\">Andorra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Angola\" title=\"Angola\">Angola</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Anguilla\" title=\"Anguilla\">Anguilla</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Antarctica\" title=\"Antarctica\">Antarctica</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Antigua and Barbuda\" title=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Argentina\" title=\"Argentina\">Argentina</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Armenia\" title=\"Armenia\">Armenia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Aruba\" title=\"Aruba\">Aruba</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Australia\" title=\"Australia\">Australia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Austria\" title=\"Austria\">Austria</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Azerbaijan\" title=\"Azerbaijan\">Azerbaijan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bahamas\" title=\"Bahamas\">Bahamas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bahrain\" title=\"Bahrain\">Bahrain</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bangladesh\" title=\"Bangladesh\">Bangladesh</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Barbados\" title=\"Barbados\">Barbados</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Belarus\" title=\"Belarus\">Belarus</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Belgium\" title=\"Belgium\">Belgium</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Belize\" title=\"Belize\">Belize</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Benin\" title=\"Benin\">Benin</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bermuda\" title=\"Bermuda\">Bermuda</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bhutan\" title=\"Bhutan\">Bhutan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bolivia, Plurinational State of\" title=\"Bolivia, Plurinational State of\">Bolivia, Plurinational State of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bonaire, Sint Eustatius and Saba\" title=\"Bonaire, Sint Eustatius and Saba\">Bonaire, Sint Eustatius and Saba</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bosnia and Herzegovina\" title=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Botswana\" title=\"Botswana\">Botswana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bouvet Island\" title=\"Bouvet Island\">Bouvet Island</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Brazil\" title=\"Brazil\">Brazil</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"British Indian Ocean Territory\" title=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Brunei Darussalam\" title=\"Brunei Darussalam\">Brunei Darussalam</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Bulgaria\" title=\"Bulgaria\">Bulgaria</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Burkina Faso\" title=\"Burkina Faso\">Burkina Faso</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Burundi\" title=\"Burundi\">Burundi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cambodia\" title=\"Cambodia\">Cambodia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cameroon\" title=\"Cameroon\">Cameroon</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Canada\" title=\"Canada\">Canada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cape Verde\" title=\"Cape Verde\">Cape Verde</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cayman Islands\" title=\"Cayman Islands\">Cayman Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Central African Republic\" title=\"Central African Republic\">Central African Republic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Chad\" title=\"Chad\">Chad</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Chile\" title=\"Chile\">Chile</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"China\" title=\"China\">China</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Christmas Island\" title=\"Christmas Island\">Christmas Island</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cocos (Keeling) Islands\" title=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Colombia\" title=\"Colombia\">Colombia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Comoros\" title=\"Comoros\">Comoros</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Congo\" title=\"Congo\">Congo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Congo, the Democratic Republic of the\" title=\"Congo, the Democratic Republic of the\">Congo, the Democratic Republic of the</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cook Islands\" title=\"Cook Islands\">Cook Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Costa Rica\" title=\"Costa Rica\">Costa Rica</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Côte d'Ivoire\" title=\"Côte d'Ivoire\">Côte d'Ivoire</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Croatia\" title=\"Croatia\">Croatia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cuba\" title=\"Cuba\">Cuba</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Curaçao\" title=\"Curaçao\">Curaçao</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Cyprus\" title=\"Cyprus\">Cyprus</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Czech Republic\" title=\"Czech Republic\">Czech Republic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Denmark\" title=\"Denmark\">Denmark</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Djibouti\" title=\"Djibouti\">Djibouti</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Dominica\" title=\"Dominica\">Dominica</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Dominican Republic\" title=\"Dominican Republic\">Dominican Republic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Ecuador\" title=\"Ecuador\">Ecuador</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Egypt\" title=\"Egypt\">Egypt</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"El Salvador\" title=\"El Salvador\">El Salvador</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Equatorial Guinea\" title=\"Equatorial Guinea\">Equatorial Guinea</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Eritrea\" title=\"Eritrea\">Eritrea</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Estonia\" title=\"Estonia\">Estonia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Ethiopia\" title=\"Ethiopia\">Ethiopia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Falkland Islands (Malvinas)\" title=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Faroe Islands\" title=\"Faroe Islands\">Faroe Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Fiji\" title=\"Fiji\">Fiji</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Finland\" title=\"Finland\">Finland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"France\" title=\"France\">France</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"French Guiana\" title=\"French Guiana\">French Guiana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"French Polynesia\" title=\"French Polynesia\">French Polynesia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"French Southern Territories\" title=\"French Southern Territories\">French Southern Territories</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Gabon\" title=\"Gabon\">Gabon</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Gambia\" title=\"Gambia\">Gambia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Georgia\" title=\"Georgia\">Georgia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Germany\" title=\"Germany\">Germany</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Ghana\" title=\"Ghana\">Ghana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Gibraltar\" title=\"Gibraltar\">Gibraltar</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Greece\" title=\"Greece\">Greece</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Greenland\" title=\"Greenland\">Greenland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Grenada\" title=\"Grenada\">Grenada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Guadeloupe\" title=\"Guadeloupe\">Guadeloupe</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Guam\" title=\"Guam\">Guam</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Guatemala\" title=\"Guatemala\">Guatemala</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Guernsey\" title=\"Guernsey\">Guernsey</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Guinea\" title=\"Guinea\">Guinea</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Guinea-Bissau\" title=\"Guinea-Bissau\">Guinea-Bissau</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Guyana\" title=\"Guyana\">Guyana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Haiti\" title=\"Haiti\">Haiti</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Heard Island and McDonald Islands\" title=\"Heard Island and McDonald Islands\">Heard Island and McDonald Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Holy See (Vatican City State)\" title=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Honduras\" title=\"Honduras\">Honduras</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Hong Kong\" title=\"Hong Kong\">Hong Kong</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Hungary\" title=\"Hungary\">Hungary</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Iceland\" title=\"Iceland\">Iceland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"India\" title=\"India\">India</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Indonesia\" title=\"Indonesia\">Indonesia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Iran, Islamic Republic of\" title=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Iraq\" title=\"Iraq\">Iraq</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Ireland\" title=\"Ireland\">Ireland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Isle of Man\" title=\"Isle of Man\">Isle of Man</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Israel\" title=\"Israel\">Israel</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Italy\" title=\"Italy\">Italy</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Jamaica\" title=\"Jamaica\">Jamaica</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Japan\" title=\"Japan\">Japan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Jersey\" title=\"Jersey\">Jersey</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Jordan\" title=\"Jordan\">Jordan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Kazakhstan\" title=\"Kazakhstan\">Kazakhstan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Kenya\" title=\"Kenya\">Kenya</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Kiribati\" title=\"Kiribati\">Kiribati</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Korea, Democratic People's Republic of\" title=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Korea, Republic of\" title=\"Korea, Republic of\">Korea, Republic of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Kuwait\" title=\"Kuwait\">Kuwait</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Kyrgyzstan\" title=\"Kyrgyzstan\">Kyrgyzstan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Lao People's Democratic Republic\" title=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Latvia\" title=\"Latvia\">Latvia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Lebanon\" title=\"Lebanon\">Lebanon</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Lesotho\" title=\"Lesotho\">Lesotho</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Liberia\" title=\"Liberia\">Liberia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Libya\" title=\"Libya\">Libya</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Liechtenstein\" title=\"Liechtenstein\">Liechtenstein</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Lithuania\" title=\"Lithuania\">Lithuania</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Luxembourg\" title=\"Luxembourg\">Luxembourg</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Macao\" title=\"Macao\">Macao</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Macedonia, the former Yugoslav Republic of\" title=\"Macedonia, the former Yugoslav Republic of\">Macedonia, the former Yugoslav Republic of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Madagascar\" title=\"Madagascar\">Madagascar</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Malawi\" title=\"Malawi\">Malawi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Malaysia\" title=\"Malaysia\">Malaysia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Maldives\" title=\"Maldives\">Maldives</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mali\" title=\"Mali\">Mali</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Malta\" title=\"Malta\">Malta</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Marshall Islands\" title=\"Marshall Islands\">Marshall Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Martinique\" title=\"Martinique\">Martinique</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mauritania\" title=\"Mauritania\">Mauritania</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mauritius\" title=\"Mauritius\">Mauritius</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mayotte\" title=\"Mayotte\">Mayotte</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mexico\" title=\"Mexico\">Mexico</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Micronesia, Federated States of\" title=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Moldova, Republic of\" title=\"Moldova, Republic of\">Moldova, Republic of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Monaco\" title=\"Monaco\">Monaco</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mongolia\" title=\"Mongolia\">Mongolia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Montenegro\" title=\"Montenegro\">Montenegro</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Montserrat\" title=\"Montserrat\">Montserrat</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Morocco\" title=\"Morocco\">Morocco</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mozambique\" title=\"Mozambique\">Mozambique</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Myanmar\" title=\"Myanmar\">Myanmar</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Namibia\" title=\"Namibia\">Namibia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Nauru\" title=\"Nauru\">Nauru</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Nepal\" title=\"Nepal\">Nepal</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Netherlands\" title=\"Netherlands\">Netherlands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"New Caledonia\" title=\"New Caledonia\">New Caledonia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"New Zealand\" title=\"New Zealand\">New Zealand</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Nicaragua\" title=\"Nicaragua\">Nicaragua</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Niger\" title=\"Niger\">Niger</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Nigeria\" title=\"Nigeria\">Nigeria</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Niue\" title=\"Niue\">Niue</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Norfolk Island\" title=\"Norfolk Island\">Norfolk Island</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Northern Mariana Islands\" title=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Norway\" title=\"Norway\">Norway</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Oman\" title=\"Oman\">Oman</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Pakistan\" title=\"Pakistan\">Pakistan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Palau\" title=\"Palau\">Palau</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Palestinian Territory\" title=\"Palestinian Territory\">Palestinian Territory</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Panama\" title=\"Panama\">Panama</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Papua New Guinea\" title=\"Papua New Guinea\">Papua New Guinea</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Paraguay\" title=\"Paraguay\">Paraguay</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Peru\" title=\"Peru\">Peru</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Philippines\" title=\"Philippines\">Philippines</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Pitcairn\" title=\"Pitcairn\">Pitcairn</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Poland\" title=\"Poland\">Poland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Portugal\" title=\"Portugal\">Portugal</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Puerto Rico\" title=\"Puerto Rico\">Puerto Rico</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Qatar\" title=\"Qatar\">Qatar</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Réunion\" title=\"Réunion\">Réunion</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Romania\" title=\"Romania\">Romania</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Russian Federation\" title=\"Russian Federation\">Russian Federation</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Rwanda\" title=\"Rwanda\">Rwanda</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Saint Barthélemy\" title=\"Saint Barthélemy\">Saint Barthélemy</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Saint Helena, Ascension and Tristan da Cunha\" title=\"Saint Helena, Ascension and Tristan da Cunha\">Saint Helena, Ascension and Tristan da Cunha</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Saint Kitts and Nevis\" title=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Saint Lucia\" title=\"Saint Lucia\">Saint Lucia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Saint Martin (French part)\" title=\"Saint Martin (French part)\">Saint Martin (French part)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Saint Pierre and Miquelon\" title=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Saint Vincent and the Grenadines\" title=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Samoa\" title=\"Samoa\">Samoa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"San Marino\" title=\"San Marino\">San Marino</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Sao Tome and Principe\" title=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Saudi Arabia\" title=\"Saudi Arabia\">Saudi Arabia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Senegal\" title=\"Senegal\">Senegal</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Serbia\" title=\"Serbia\">Serbia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Seychelles\" title=\"Seychelles\">Seychelles</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Sierra Leone\" title=\"Sierra Leone\">Sierra Leone</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Singapore\" title=\"Singapore\">Singapore</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Sint Maarten (Dutch part)\" title=\"Sint Maarten (Dutch part)\">Sint Maarten (Dutch part)</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Slovakia\" title=\"Slovakia\">Slovakia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Slovenia\" title=\"Slovenia\">Slovenia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Solomon Islands\" title=\"Solomon Islands\">Solomon Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Somalia\" title=\"Somalia\">Somalia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"South Africa\" title=\"South Africa\">South Africa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"South Georgia and the South Sandwich Islands\" title=\"South Georgia and the South Sandwich Islands\">South Georgia and the South Sandwich Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"South Sudan\" title=\"South Sudan\">South Sudan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Spain\" title=\"Spain\">Spain</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Sri Lanka\" title=\"Sri Lanka\">Sri Lanka</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Sudan\" title=\"Sudan\">Sudan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Suriname\" title=\"Suriname\">Suriname</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Svalbard and Jan Mayen\" title=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Swaziland\" title=\"Swaziland\">Swaziland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Sweden\" title=\"Sweden\">Sweden</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Switzerland\" title=\"Switzerland\">Switzerland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Syrian Arab Republic\" title=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Taiwan, Province of China\" title=\"Taiwan, Province of China\">Taiwan, Province of China</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Tajikistan\" title=\"Tajikistan\">Tajikistan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Tanzania, United Republic of\" title=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Thailand\" title=\"Thailand\">Thailand</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Timor-Leste\" title=\"Timor-Leste\">Timor-Leste</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Togo\" title=\"Togo\">Togo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Tokelau\" title=\"Tokelau\">Tokelau</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Tonga\" title=\"Tonga\">Tonga</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Trinidad and Tobago\" title=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Tunisia\" title=\"Tunisia\">Tunisia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Turkey\" title=\"Turkey\">Turkey</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Turkmenistan\" title=\"Turkmenistan\">Turkmenistan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Turks and Caicos Islands\" title=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Tuvalu\" title=\"Tuvalu\">Tuvalu</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Uganda\" title=\"Uganda\">Uganda</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Ukraine\" title=\"Ukraine\">Ukraine</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"United Arab Emirates\" title=\"United Arab Emirates\">United Arab Emirates</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"United Kingdom\" title=\"United Kingdom\">United Kingdom</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"United States\" title=\"United States\">United States</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"United States Minor Outlying Islands\" title=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Uruguay\" title=\"Uruguay\">Uruguay</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Uzbekistan\" title=\"Uzbekistan\">Uzbekistan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Vanuatu\" title=\"Vanuatu\">Vanuatu</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Venezuela, Bolivarian Republic of\" title=\"Venezuela, Bolivarian Republic of\">Venezuela, Bolivarian Republic of</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Viet Nam\" title=\"Viet Nam\">Viet Nam</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Virgin Islands, British\" title=\"Virgin Islands, British\">Virgin Islands, British</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Virgin Islands, U.S.\" title=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Wallis and Futuna\" title=\"Wallis and Futuna\">Wallis and Futuna</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Western Sahara\" title=\"Western Sahara\">Western Sahara</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Yemen\" title=\"Yemen\">Yemen</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Zambia\" title=\"Zambia\">Zambia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Zimbabwe\" title=\"Zimbabwe\">Zimbabwe</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{countryMsg}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>Credit Card</strong>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cardMsg\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t  {{cardMsg}}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t  </ng-container>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\tUse stripeJS test card 4242 4242 4242 4242\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardNumber-element\">Card Number <font color=\"red\">*</font></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardNumber-element\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{cardNumberMsg}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardExpiry-element\">Card Expiry <font color=\"red\">*</font></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardExpiry-element\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{cardExpiryMsg}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardCvc-element\">CVC <font color=\"red\">*</font></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardCvc-element\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{cardCVCMsg}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"postalCode-element\">Zip/Postal Code <font color=\"red\">*</font></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"postalCode-element\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\t\t\t\n\t\t\t\t\n\n\n\n\t</div>\n\n\n\t<div class=\"col-sm-1\"></div>\n\n\n\t<div class=\"col-sm-4\">\n\t\t<div class=\"row\">\n\t\t<div class=\"panel panel-default\">\n\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<strong>Items</strong><br><br>\n\t\t\t\t<table class=\"table table-condensed table-hover no-bottom-margin\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let cartItem of cartItems\"> <!-- loops through the items to be displayed -->\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <img class=\"media-object\" src=\"/assets/images/{{cartItem.item.imagePath}}\" style=\"width: 80px; height: 80px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t  {{cartItem.item.title}}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t${{cartItem.item.price}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\tQty: {{cartItem.qty}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t\t<div class=\"panel panel-default\">\n\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<strong>Order Details</strong><br><br>\n\t\t\t\t\t\t\t<table class=\"table table-condensed table-hover no-bottom-margin\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\tSubtotal:\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t${{cartTotalPrice}}\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\tShipping:\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t$0\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Grand Total:</strong>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>${{cartTotalPrice + 0}}</strong>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table><br>\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Buy now ${{cartTotalPrice}}</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n</div>\n"

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
        this.cardNumberMsg = "";
        this.cardExpiryMsg = "";
        this.cardCVCMsg = "";
        this.cardMsg = "";
        this.nameMsg = "";
        this.addressLine1Msg = "";
        this.cityMsg = "";
        this.countryMsg = "";
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
        this.createForm();
    };
    CheckoutComponent.prototype.createForm = function () {
        this.shoppingCartCheckoutForm = this._fb.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            shippingAddress: this._fb.group({
                addressLine1: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                addressLine2: [""],
                city: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                state: [""],
                zip: [""],
                country: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
            })
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
                //console.log(this.cartItems);
            }
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log(err); }, function () { return console.log('checkout done'); });
    };
    CheckoutComponent.prototype.initCard = function () {
        this.stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
        this.elements = this.stripe.elements();
        this.cardNumber = this.elements.create('cardNumber', { placeholder: "4242424242424242" });
        this.cardExpiry = this.elements.create('cardExpiry');
        this.cardCvc = this.elements.create('cardCvc');
        //this.postalCode = this.elements.create('postalCode');
        this.cardNumber.mount('#cardNumber-element');
        this.cardExpiry.mount('#cardExpiry-element');
        this.cardCvc.mount('#cardCvc-element');
        //this.postalCode.mount('#postalCode-element');
    };
    CheckoutComponent.prototype.stripeTokenHandler = function (token) {
        var _this = this;
        this.shoppingcart.makeCharge(token.id)
            .subscribe(function (data) {
            if (data.success) {
                _this._router.navigate(['/order_confirmation/' + data.orderID]);
                console.log("charge success");
                //console.log(data.orderID);
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
    CheckoutComponent.prototype.clearMsg = function () {
        this.errorMsg = "";
        this.cardNumberMsg = "";
        this.cardExpiryMsg = "";
        this.cardCVCMsg = "";
        this.cardMsg = "";
        this.nameMsg = "";
        this.addressLine1Msg = "";
        this.cityMsg = "";
        this.countryMsg = "";
    };
    CheckoutComponent.prototype.createToken = function (_shoppingCartCheckoutForm) {
        var _this = this;
        this.clearMsg();
        if (!_shoppingCartCheckoutForm.valid) {
            if (_shoppingCartCheckoutForm.value.name == "") {
                this.nameMsg = "Full Name is required";
            }
            if (_shoppingCartCheckoutForm.value.shippingAddress.addressLine1 == "") {
                this.addressLine1Msg = "Address Line 1 is required";
            }
            if (_shoppingCartCheckoutForm.value.shippingAddress.city == "") {
                this.cityMsg = "City is required";
            }
            if (_shoppingCartCheckoutForm.value.shippingAddress.country == "") {
                this.countryMsg = "Country is required";
            }
        }
        else {
            this.stripe.createToken(this.cardNumber, {
                name: _shoppingCartCheckoutForm.value.name,
                address_line1: _shoppingCartCheckoutForm.value.shippingAddress.addressLine1,
                address_line2: _shoppingCartCheckoutForm.value.shippingAddress.addressLine2,
                address_city: _shoppingCartCheckoutForm.value.shippingAddress.city,
                address_state: _shoppingCartCheckoutForm.value.shippingAddress.state,
                address_zip: _shoppingCartCheckoutForm.value.shippingAddress.zip,
                address_country: _shoppingCartCheckoutForm.value.shippingAddress.country
            })
                .then(function (result) {
                if (result.error) {
                    if (result.error.code == "invalid_number") {
                        _this.cardNumberMsg = result.error.message;
                    }
                    else if (result.error.code == "incorrect_number") {
                        _this.cardNumberMsg = result.error.message;
                    }
                    else if (result.error.code == "incomplete_number") {
                        _this.cardNumberMsg = result.error.message;
                    }
                    else if (result.error.code == "incomplete_expiry") {
                        _this.cardExpiryMsg = result.error.message;
                    }
                    else if (result.error.code == "invalid_expiry_month") {
                        _this.cardExpiryMsg = result.error.message;
                    }
                    else if (result.error.code == "invalid_expiry_year") {
                        _this.cardExpiryMsg = result.error.message;
                    }
                    else if (result.error.code == "invalid_expiry_year_past") {
                        _this.cardExpiryMsg = result.error.message;
                    }
                    else if (result.error.code == "incomplete_cvc") {
                        _this.cardCVCMsg = result.error.message;
                    }
                    else if (result.error.code == "incorrect_cvc") {
                        _this.cardCVCMsg = result.error.message;
                    }
                    else if (result.error.code == "invalid_cvc") {
                        _this.cardCVCMsg = result.error.message;
                    }
                    else if (result.error.code == "expired_card") {
                        _this.cardMsg = result.error.message;
                    }
                    else if (result.error.code == "card_declined") {
                        _this.cardMsg = result.error.message;
                    }
                    else if (result.error.code == "missing") {
                        _this.cardMsg = result.error.message;
                    }
                    else if (result.error.code == "processing_error") {
                        _this.cardMsg = result.error.message;
                    }
                    else if (result.error.code == "invalid_swipe_data") {
                        _this.cardMsg = result.error.message;
                    }
                }
                else {
                    _this.stripeTokenHandler(result.token);
                }
            });
        }
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

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n<div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <font color=\"white\">Created by Kenny Leung.</font>\n      </div>\n</div>\n  </div>\n</footer>\n\n"

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
exports.push([module.i, ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-user-password/forgot-user-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n  <div class=\"container padding-top padding-bottom\">\n    <ng-container *ngIf=\"successMsg\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"alert alert-info text-center\">\n            {{successMsg}}\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"errorMsg\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"alert alert-danger text-center\">\n            {{errorMsg}}\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  <div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title text-center\">Forgot Password</h3>\n       </div>\n        <div class=\"panel-body\">\n          <form [formGroup]=\"forgotPwForm\" (ngSubmit)=\"resetPassword(forgotPwForm)\" id=\"forgotPwForm\" name=\"forgotPwForm\">\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Email\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n                  <div class=\"text-danger\">\n                    {{emailMsg}}\n                  </div>\n            </div>\n            <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </form>\n        </div>\n    </div>\n  </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/forgot-user-password/forgot-user-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotUserPasswordComponent; });
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





var ForgotUserPasswordComponent = (function () {
    function ForgotUserPasswordComponent(userService, shoppingCart, _router, fb) {
        this.userService = userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.fb = fb;
        this.emailMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
        this.total_qty = 0;
    }
    ForgotUserPasswordComponent.prototype.ngOnInit = function () {
        this.getTotalQuantity();
        this.createForm();
    };
    ForgotUserPasswordComponent.prototype.createForm = function () {
        this.forgotPwForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
        });
    };
    //The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    ForgotUserPasswordComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ForgotUserPasswordComponent);
    return ForgotUserPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.buttonlink {\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar {\r\n  min-height: 50px;\r\n  border: 1px solid transparent;\r\n}\r\n.navbar-default {\r\n    background-color: #00aace;\r\n    /* border-color: #00d2e7; */\r\n  }\r\n  .navbar-default .navbar-brand {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-brand:hover,\r\n  .navbar-default .navbar-brand:focus {\r\n    color: #000000;\r\n  }\r\n  .navbar-default .navbar-text {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav > li > a {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav > li > a:hover,\r\n  .navbar-default .navbar-nav > li > a:focus {\r\n    color: #000000;\r\n  }\r\n  .navbar-default .navbar-nav > .active > a,\r\n  .navbar-default .navbar-nav > .active > a:hover,\r\n  .navbar-default .navbar-nav > .active > a:focus {\r\n    color: #000000;\r\n    background-color: #00d2e7;\r\n  }\r\n  .navbar-default .navbar-nav > .open > a,\r\n  .navbar-default .navbar-nav > .open > a:hover,\r\n  .navbar-default .navbar-nav > .open > a:focus {\r\n    color: #000000;\r\n    background-color: #00d2e7;\r\n  }\r\n  .navbar-default .navbar-toggle {\r\n    border-color: #00d2e7;\r\n  }\r\n  .navbar-default .navbar-toggle:hover,\r\n  .navbar-default .navbar-toggle:focus {\r\n    background-color: #00d2e7;\r\n  }\r\n  .navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-collapse,\r\n  .navbar-default .navbar-form {\r\n    border-color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-link {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-link:hover {\r\n    color: #000000;\r\n  }\r\n  \r\n  @media (max-width: 767px) {\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n      color: #ffffff;\r\n    }\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n      color: #000000;\r\n    }\r\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n      color: #000000;\r\n      background-color: #00d2e7;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"row\">\n  <div class=\"col-sm-6\">\n      <div class=\"page-header2\">\n          <h1>{{title}}</h1>\n      </div>\n  </div>\n</div> -->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a routerLink=\"/home\" class=\"navbar-brand\">MEANcart</a>\n        </div>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n            <ng-container *ngIf = \"loggedIn\">\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User Account<span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a routerLink=\"/change_user_password\">Change user password</a></li>\n                        <li><a routerLink=\"/purchase_history\">Purchase History</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a class=\"buttonlink\" (click)=\"userLogout()\">Logout</a></li>\n                    </ul>\n                </li>\n            </ng-container>\n            <ng-container *ngIf = \"!loggedIn\">\n                <li><a routerLink=\"/login\">Login</a></li>\n                <li><a routerLink=\"/signup\">Signup</a></li>\n            </ng-container>\n            <li id=\"cartLink\" name=\"cartLink\"><a routerLink=\"/cart\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>({{totalQuantity}})</a></li>\n        </ul>\n    </div>\n</nav>\n"

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
exports.push([module.i, ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.jumbotron {\r\n    background-color: #00aace;\r\n    color: #ffffff;\r\n    font-family: Montserrat, sans-serif;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n.bg-skyblue {\r\n    background-color: #00aace;\r\n}\r\n\r\n.bg-grey {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\nh2 {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.panel-default {\r\n    border-color: #00aace;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\ncolor: #ffffff;\r\nbackground-color: #00aace;\r\nborder-color: #00aace;\r\n}\r\n\r\n.panel-heading {\r\npadding: 10px 15px;\r\nborder-bottom: 1px solid transparent;\r\nborder-top-left-radius: 3px;\r\nborder-top-right-radius: 3px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.img-thumbnail {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    height: auto;\r\n    padding: 4px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n    transition: all .2s ease-in-out;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n\n<div class=\"container-fluid bg-skyblue\">\n  <div class=\"container bg-skyblue\">\n    <div class=\"jumbotron text-center bg-skyblue\">\n      <h1>MEANcart</h1> \n      <p><img src=\"/assets/images/cart.png\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Cart\" width=\"350\" height=\"350\"></p>\n      <p>A simple MEAN shopping cart</p>\n      <h5>Best viewed with the latest Chrome, Firefox, Opera or Microsoft Edge browsers.</h5>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid padding-top padding-bottom\">\n  <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <h2>About MEANcart</h2>\n      <p>A simple shopping cart developed using MEAN(MongoDB, ExpressJS, Angular, NodeJS) stack.</p>\n    </div>\n  </div><br>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading text-center\">\n          Front End\n        </div>\n        <div class=\"panel-body text-center\">\n          <p>Angular 5</p>\n          <p>Bootstrap 3.3.7</p>\n          <p>HTML 5</p>\n          <p>CSS</p>\n          <p>&nbsp;</p>\n          <p>&nbsp;</p>\n          <p>&nbsp;</p>\n          <p>&nbsp;</p>\n          <p>&nbsp;</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading text-center\">\n          Back End\n        </div>\n        <div class=\"panel-body text-center\">\n          <p>Express JS</p>\n          <p>Node JS (Heroku)</p>\n          <p>MongoDB (mLab)</p>\n          <p>Stripe JS v3 payment processing</p>\n          <p>Passport JS sign-in session</p>\n          <p>Connect-Mongo store session</p>\n          <p>CORS (Cross Origin Resource Sharing)</p>\n          <p>Bcrypt-Node JS password hashing</p>\n          <p>SendGrid email delivery service</p>   \n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading text-center\">\n          Features\n        </div>\n        <div class=\"panel-body text-center\">\n          <p>User signup</p>\n          <p>User Login/Logout</p>\n          <p>Password reset</p>\n          <p>Add to shopping cart</p>\n          <p>Shopping cart auto price update</p>\n          <p>Credit card checkout</p>\n          <p>Purchase history</p>\n          <p>&nbsp;</p>\n          <p>&nbsp;</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-grey padding-top padding-bottom\">\n  <div class=\"container bg-grey\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <h2>Shop</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div *ngFor = \"let coin of coins; let i=index\" id=\"listOfCoins\" name=\"listOfCoins\">\n        <div class=\"col-sm-3\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body text-center\">\n              <img src=\"/assets/images/{{coin.imagePath}}\" alt=\"...\" class=\"img-responsive img-thumbnail\" style=\"width:75%\">\n              <h4>{{coin.title}}</h4>\n              <p>{{coin.description}}</p>\n              <p>${{coin.price}}</p>\n              <input type=\"number\" class=\"text-center\" style=\"width: 4em\" size=\"3\" min = \"1\" max = \"999\" step=\"1\" id = \"itemQty\" name = \"itemQty\" value = \"1\" maxlength = \"3\" #itemQty>\n              <button class=\"btn btn-primary\" role=\"button\" id=\"addItemButton\" name=\"addItemButton\" (click)=\"addItemToCart(coin._id, itemQty.value)\">Add</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.total_price = 0; //stores the total price of the shopping cart and this number is shown beside the shopping cart link
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
                _this.total_qty = data.totalQuantity;
                _this.total_price = data.totalPrice;
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
exports.push([module.i, ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header [totalQuantity] = \"total_qty\"></app-header>\n\n<div class=\"container padding-top padding-bottom\">\n<div class=\"row\">\n<div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title text-center\">Please sign in</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\" id=\"loginForm\" name=\"loginForm\">\n            <div class=\"form-group\">\n              <label>Username</label>\n              <input class=\"form-control\" type=\"text\" placeholder=\"Username\" id=\"username\" name=\"username\" formControlName=\"username\" required>\n                <div class=\"text-danger\">\n                  {{usernameMsg}}\n                </div>\n\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" formControlName=\"password\" required>\n              <div class=\"text-danger\">\n                {{passwordMsg}}\n              </div>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Login</button>\n      </form>\n      <ng-container *ngIf=\"errorMsg\">\n        <br>\n        <div class=\"alert alert-danger text-center\">\n          {{errorMsg}}\n        </div>\n      </ng-container>\n      </div>\n  </div>\n</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-2 col-sm-offset-4 text-left\">\n    Click <a routerLink=\"/signup\">here</a> to sign up\n  </div>\n  <div class=\"col-sm-2 text-right\">\n    <a routerLink=\"/forgot\">Forgot password?</a>\n  </div>\n</div>\n</div>"

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
        //console.log(_loginForm);
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
exports.push([module.i, ".no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-confirmation/order-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"container padding-top padding-bottom\">\n  <fieldset>\n    <legend>Your order has been received.</legend>\n  </fieldset>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      Your order ID is {{orderID}}\n    </div>\n  </div><br>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <strong>Shipping Address</strong><br><br>\n          <strong>{{name}}</strong><br>\n          {{shippingAddress.addressLine1}}<br>\n          {{shippingAddress.addressLine2}}<br>\n          {{shippingAddress.addressCity}}, {{shippingAddress.addressState}}, {{shippingAddress.addressZip}}<br>\n          {{shippingAddress.addressCountry}}<br>\n        </div>\n      </div>\n    </div>\n  </div>\n          <table class=\"table table-condensed table-bordered no-margin-bottom\">\n              <thead>\n                  <tr class=\"active\">\n                      <th>Product</th>\n                      <th class=\"text-right\">Price</th>\n                      <th class=\"text-right\">Quantity</th>\n                      <th class=\"text-right\">Total</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <ng-container *ngFor=\"let order of orders\">\n                    <tr>\n                      <td class=\"col-sm-6\">\n                        <div class=\"media\">\n                          <div class=\"media-left\">\n                            <img class=\"media-object\" src=\"/assets/images/{{order.item.imagePath}}\" style=\"width: 80px; height: 80px;\">\n                          </div>\n                          <div class=\"media-body\">\n                            {{order.item.title}}\n                          </div>\n                        </div>\n                      </td>\n                      <td class=\"col-sm-2 text-right\">\n                        ${{order.item.price}}\n\n                      </td>\n                      <td class=\"col-sm-2 text-right\">\n                        {{order.qty}}\n                      </td>\n                      <td class=\"col-sm-2 text-right\">\n                        ${{order.item.price * order.qty}}\n                      </td>\n                  </tr>\n                  </ng-container>\n                </tbody>\n              </table>\n\n      <table class=\"table table-condensed table-bordered\">\n        <tbody>\n      \n                  <tr>\n                      <td class=\"text-right col-sm-10\">Subtotal</td>\n                      <td class=\"text-right col-sm-2\">${{subTotal}}</td>\n                  </tr>\n                  <tr>\n                      <td class=\"text-right col-sm-10\">Shipping</td>\n                      <td class=\"text-right col-sm-2\">$0</td>\n                  </tr>\n                  <tr>\n                      <td class=\"text-right col-sm-10\"><strong>Grand Total</strong></td>\n                      <td class=\"text-right col-sm-2\"><strong>${{subTotal + 0}}</strong></td>\n                  </tr>\n              </tbody>\n          </table>\n</div>\n"

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
            //console.log(this.orderID);
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
            //console.log(data.orderDetails);
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
exports.push([module.i, ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-details/order-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"container padding-top padding-bottom\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 text-center\">\n            <h3>Order Details</h3>\n        </div>\n    </div><br>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <strong>Shipping Address</strong><br><br>\n                <strong>{{name}}</strong><br>\n                {{shippingAddress.addressLine1}}<br>\n                {{shippingAddress.addressLine2}}<br>\n                {{shippingAddress.addressCity}}, {{shippingAddress.addressState}}, {{shippingAddress.addressZip}}<br>\n                {{shippingAddress.addressCountry}}<br>\n            </div>\n        </div>\n\n      \n                <table class=\"table table-condensed table-bordered no-margin-bottom\">\n                    <thead>\n                        <tr class=\"active\">\n                            <th>Product</th>\n                            <th>Price</th>\n                            <th class=\"text-right\">Quantity</th>\n                            <th class=\"text-right\">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container *ngFor=\"let order of orders\">\n                          <tr>\n                            <td class=\"col-sm-6\">\n                                <div class=\"media\">\n                                    <div class=\"media-left\">\n                                        <img class=\"media-object\" src=\"/assets/images/{{order.item.imagePath}}\" style=\"width: 80px; height: 80px;\">\n                                    </div>\n                                    <div class=\"media-body\">\n                                        {{order.item.title}}\n                                    </div>\n                                </div>\n                            </td>\n                            <td class=\"col-sm-2 text-right\">\n                              ${{order.item.price}}\n      \n                            </td>\n                            <td class=\"col-sm-2 text-right\">\n                              {{order.qty}}\n                            </td>\n                            <td class=\"col-sm-2 text-right\">\n                              ${{order.item.price * order.qty}}\n                            </td>\n                        </tr>\n                        </ng-container>\n                      </tbody>\n                    </table>\n\n            <table class=\"table table-condensed table-bordered\">\n              <tbody>\n            \n                        <tr>\n                            <td class=\"text-right col-sm-10\">Subtotal</td>\n                            <td class=\"text-right col-sm-2\">${{subTotal}}</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-right col-sm-10\">Shipping</td>\n                            <td class=\"text-right col-sm-2\">$0</td>\n                        </tr>\n                        <tr>\n                            <td class=\"text-right col-sm-10\"><strong>Grand Total</strong></td>\n                            <td class=\"text-right col-sm-2\"><strong>${{subTotal + 0}}</strong></td>\n                        </tr>\n                    </tbody>\n                </table>\n</div>"

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
            //console.log(this.orderID);
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
            //console.log(data.orderDetails);
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
exports.push([module.i, ".no-margin {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.borderless td, .borderless th {\r\n    border: none;\r\n}\r\n\r\n.left-border {\r\n    border-left: 1px solid #ddd\r\n}\r\n\r\n.right-border {\r\n    border-right: 1px solid #ddd\r\n}\r\n\r\n.vertical-middle {\r\n    vertical-align: middle;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/purchase-history/purchase-history.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<div class=\"container padding-top padding-bottom\">\r\n        <div class=\"row\">\r\n                <div class=\"col-sm-12 text-center\">\r\n                    <h3>Purchase History</h3>\r\n                </div>\r\n            </div><br>\r\n\r\n        <div *ngFor = \"let order of orders\">\r\n\r\n                <nav><a routerLink=\"/purchase_history/order_details/{{order._id}}\">Order Details</a></nav>\r\n\r\n\r\n                        \r\n                            <table class=\"table table-condensed table-bordered\">\r\n                                <thead>\r\n                                    <tr class=\"active\">\r\n                                        <th>Product</th>\r\n                                        <th>Quantity</th>\r\n                                        <th>Price</th>\r\n                                        <th>Date</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <ng-container *ngFor = \"let item of order.cart.items\">\r\n                                    <tr>\r\n                                        <td class=\"col-sm-4\">\r\n                                            {{item.item.title}}\r\n                                        </td>\r\n                                        <td class=\"col-sm-2\">\r\n                                            {{item.qty}}\r\n                                        </td>\r\n                                        <td class=\"col-sm-3\">\r\n                                            ${{item.item.price}}\r\n                                            </td>\r\n                                        <td class=\"col-sm-3\">\r\n                                            {{order.date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    </ng-container>\r\n                                </tbody>\r\n                            </table>\r\n\r\n                        \r\n\r\n        </div>\r\n</div>\r\n\r\n"

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
            //console.log(data.customerOrders);
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
            //console.log(this.orders);
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
exports.push([module.i, ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top padding-bottom\">\n  <ng-container *ngIf=\"tokenValid; else elseBlock\">\n  <div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Reset Password</h3>\n       </div>\n        <div class=\"panel-body\">\n          <form [formGroup]=\"resetPwForm\" (ngSubmit)=\"resetPassword(resetPwForm)\" id=\"resetPwForm\" name=\"resetPwForm\">\n            <div class=\"form-group\">\n              <label>New Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" formControlName=\"newPw\" required>\n              <div class=\"text-danger\">\n                {{newPwMsg}}\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Confirm Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPw\" name=\"confirmPw\" formControlName=\"confirmPw\" required>\n                <div class=\"text-danger\">\n                  {{confirmPwMsg}}\n                </div>\n            </div>\n            <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </form>\n        <ng-container *ngIf=\"errorMsg\">\n          <br>\n          <div class=\"alert alert-danger text-center\">\n            {{errorMsg}}\n          </div>\n        </ng-container>\n        </div>\n    </div>\n  </div>\n  </div>\n  </ng-container>\n  <ng-template #elseBlock>\n    <div class=\"row\">\n    <ng-container *ngIf=\"errorMsg\">\n      <div class=\"alert alert-danger text-center col-sm-12\">\n        {{errorMsg}}. Click <a routerLink=\"/home\">here</a> to go back to the main page.\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"successMsg\">\n        <div class=\"alert alert-success text-center col-sm-12\">\n          {{successMsg}}. Click <a routerLink=\"/home\">here</a> to go back to the main page.\n        </div>\n      </ng-container>\n    </div>\n  </ng-template>\n</div>\n"

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
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
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
exports.push([module.i, ".buttonlink {\r\n    cursor: pointer;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n\n<ng-container *ngIf = \"total_qty!=0\"> <!-- if there are items in shopping cart -->\n    <div class=\"container padding-top padding-bottom\">\n        <div class=\"row text-center\">\n            <h3>Shopping Cart</h3>\n        </div><br>\n        <form [formGroup]=\"updateCartForm\">\n            <div formArrayName=\"carts\">\n            <table class=\"table table-hover table-condensed\">\n                <thead>\n                    <tr class=\"active\">\n                        <th>Product</th>\n                        <th>Quantity</th>\n                        <th class=\"text-right\">Price</th>\n                        <th class=\"text-right\">Total</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngFor=\"let cart of updateCartForm.controls.carts.controls; let i=index\"> <!-- loops through the items to be displayed -->\n                    <tr [formGroupName]=\"i\">\n                        <td class=\"col-sm-5\">\n                            <div class=\"media\">\n                                <div class=\"media-left\">\n                                    <img class=\"media-object\" src=\"/assets/images/{{cartItems[i].item.imagePath}}\" style=\"width: 80px; height: 80px;\">\n                                </div>\n                                <div class=\"media-body\">\n                                    {{updateCartForm.controls.carts.controls[i].controls.productName.value}}\n                                </div>\n                            </div>\n                        </td>\n                        <td class=\"col-sm-2\">\n                            <input type=\"number\" min = \"1\" step = \"1\" max=\"999\" siz = \"3\" style=\"width: 5em\" class=\"text-center form-control\" id=\"productQuantity\" name=\"productQuantity\" formControlName=\"productQuantity\" #prdQty required>\n                            <div class=\"text-danger\">{{qtyMsg[i]}}</div>\n                        </td>\n                        <td class=\"col-sm-2 text-right\">\n                            ${{updateCartForm.controls.carts.controls[i].controls.productPrice.value}}\n                        </td>\n                        <td class=\"col-sm-2 text-right\">\n                            ${{prdQty.value * updateCartForm.controls.carts.controls[i].controls.productPrice.value}}\n                        </td>\n                        <td class=\"col-sm-1\">\n                            <a class=\"buttonlink pull-right\" (click)=\"removeItem(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n                        </td>\n\n                    </tr>\n                    </ng-container>\n\n                    <!--\n                    <td class=\"col-sm-1 col-md-1\" style=\"text-align: center\">\n                        <input type=\"number\" class=\"form-control\" id=\"item_quantity\" value=\"{{cartItem.qty}}\">\n                    </td>\n                    -->\n                    <tr>\n                            <td class=\"col-sm-5\">   </td>\n                            <td class=\"col-sm-2\">   </td>\n                            <td class=\"col-sm-2\">   </td>\n                            <td class=\"col-sm-2\">   </td>\n                            <td class=\"col-sm-1\">   </td>\n                    </tr>\n\n                    <tr>\n                        <td class=\"col-sm-5\">   </td>\n                        <td class=\"col-sm-2\">   </td>\n                        <td class=\"text-right col-sm-2\"><h5>Subtotal</h5></td>\n                        <td class=\"text-right col-sm-2\"><h5><strong>${{cartTotalPrice}}</strong></h5></td>\n                        <td class=\"col-sm-1\">   </td>\n                    </tr>\n                    <tr>\n                        <td class=\"col-sm-5\">   </td>\n                        <td class=\"col-sm-2\">   </td>\n                        <td class=\"text-right col-sm-2\"><h5>Shipping</h5></td>\n                        <td class=\"text-right col-sm-2\"><h5><strong>$0</strong></h5></td>\n                        <td class=\"col-sm-1\">   </td>\n                    </tr>\n                    <tr>\n                        <td class=\"col-sm-5\">   </td>\n                        <td class=\"col-sm-2\">   </td>\n                        <td class=\"text-right col-sm-2\"><h3>Grand Total</h3></td>\n                        <td class=\"text-right col-sm-2\"><h3><strong>${{cartTotalPrice + 0}}</strong></h3></td>\n                        <td class=\"col-sm-1\">   </td>\n                    </tr>\n                </tbody>\n            </table>\n            </div>\n\n            <ng-container *ngIf=\"qtyMsg===undefined||qtyMsg.length==0; else elseBlock\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <a routerLink=\"/checkout\" type=\"button\" class=\"btn btn-success active pull-right\">Checkout</a>            \n                </div>\n            </div>\n            </ng-container>\n            <ng-template #elseBlock>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <a routerLink=\"/checkout\" type=\"button\" class=\"btn btn-success disabled pull-right\">Checkout</a>            \n                    </div>\n                </div>\n            </ng-template>\n            <br>\n        </form>\n    </div>\n\n</ng-container>\n<ng-container *ngIf = \"total_qty==0\"> <!-- if there are no items in shopping cart -->\n    <div class=\"container padding-top\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n                <h2>No Items in Cart</h2>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n"

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
        this.qtyMsg = [];
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
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (data) {
            var valid = true;
            var totalPrice = 0;
            _this.qtyMsg = [];
            //this will automatically update the total price and the store session
            for (var i = 0; i < data.carts.length; i++) {
                //checks if the quantity value is valid
                if (Number(data.carts[i].productQuantity) < 1 || !Number.isInteger(Number(data.carts[i].productQuantity))) {
                    _this.qtyMsg[i] = "invalid input";
                    valid = false;
                }
                totalPrice = totalPrice + (data.carts[i].productQuantity * data.carts[i].productPrice);
            }
            //console.log(this.updateCartForm);
            //console.log(data);
            if (valid) {
                _this.cartTotalPrice = totalPrice;
                if (_this.total_qty > 0) {
                    _this.updateCart(data);
                }
            }
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
        for (var i = 0; i < cartForm.carts.length; i++) {
            if (Number(cartForm.carts[i].productQuantity) < 1 || !Number.isInteger(Number(cartForm.carts[i].productQuantity))) {
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
            for (var i = 0; i < cartForm.carts.length; i++) {
                this.cartItems[i].qty = cartForm.carts[i].productQuantity;
                this.cartItems[i].price = cartForm.carts[i].productQuantity * cartForm.carts[i].productPrice;
            }
            //console.log(this.cartItems);
            this.shoppingcart.updateCart(this.cartItems)
                .subscribe(function (data) {
                _this.total_qty = data.totalQuantity;
                _this.cartTotalPrice = data.totalPrice;
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
exports.push([module.i, ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"container padding-top padding-bottom\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-sm-offset-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title text-center\">User Registration</h3>\n        </div>\n          <div class=\"panel-body\">\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm)\" id=\"signupForm\">\n                    <fieldset>\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input class=\"form-control\" type=\"text\" id=\"fname\" name=\"fname\" formControlName=\"fname\" required>\n                    <div class=\"text-danger\">\n                      {{fnameMsg}}\n                    </div>\n                </div>\n              <div class=\"form-group\">\n                <label>Last Name</label>\n                <input class=\"form-control\" type=\"text\" id=\"lname\" name=\"lname\" formControlName=\"lname\" required>\n                  <div class=\"text-danger\">\n                    {{lnameMsg}}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n                  <div class=\"text-danger\">\n                    {{emailMsg}}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Username</label>\n                <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" formControlName=\"username\" required>\n                  <div class=\"text-danger\">\n                    {{usernameMsg}}\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\" required>\n                  <div class=\"text-danger\">\n                    {{passwordMsg}}\n                  </div>\n              </div>\n              <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n            </fieldset>\n              </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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





var SignupComponent = (function () {
    function SignupComponent(_userService, shoppingCart, _router, _fb) {
        this._userService = _userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this._fb = _fb;
        this.fnameMsg = '';
        this.lnameMsg = '';
        this.emailMsg = '';
        this.usernameMsg = '';
        this.passwordMsg = '';
        this.total_qty = 0;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getTotalQuantity();
        this.createForm();
    };
    //The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    SignupComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
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
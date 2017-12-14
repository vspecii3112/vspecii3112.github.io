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

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_load_coin_info_service__ = __webpack_require__("../../../../../src/app/services/load.coin.info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'purchase_history', component: __WEBPACK_IMPORTED_MODULE_11__purchase_history_purchase_history_component__["a" /* PurchaseHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__services_route_service__["a" /* RouteService */]] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_12__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'change_user_password', component: __WEBPACK_IMPORTED_MODULE_6__change_user_password_change_user_password_component__["a" /* ChangeUserPasswordComponent */] },
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
                __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15__services_shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_16__services_load_coin_info_service__["a" /* LoadCoinInfoService */],
                __WEBPACK_IMPORTED_MODULE_17__services_route_service__["a" /* RouteService */]
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

module.exports = "<app-header></app-header>\n<div class=\"row\">\n<div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Change Password</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form accept-charset=\"UTF-8\" role=\"form\" #changePwForm=\"ngForm\" (ngSubmit)=\"changePw()\">\n                <fieldset>\n            <div class=\"form-group\">\n              <label>Current Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"Current Password\" id=\"currentPw\" name=\"currentPw\" [(ngModel)]=\"currentPw\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>New Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" [(ngModel)]=\"newPw\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirm New Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"Confirm New Password\" id=\"confirmNewPw\" name=\"confirmNewPw\" [(ngModel)]=\"confirmNewPw\" required>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Change Password</button>\n        </fieldset>\n      </form>\n                <br>{{errorMsg}}\n      </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/change-user-password/change-user-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeUserPasswordComponent; });
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



var ChangeUserPasswordComponent = (function () {
    function ChangeUserPasswordComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.errorMsg = '';
        this.currentPw = '';
        this.newPw = '';
        this.confirmNewPw = '';
    }
    ChangeUserPasswordComponent.prototype.ngOnInit = function () {
    };
    ChangeUserPasswordComponent.prototype.changePw = function () {
        if (this.newPw !== this.confirmNewPw) {
            this.errorMsg = 'Confirm passwords do not match';
            this.newPw = '';
            this.confirmNewPw = '';
        }
        else {
            this._userService.changePassword(this.currentPw, this.newPw)
                .subscribe(function (data) {
                console.log(data.user);
            }, function (err) {
                console.log(err.msg);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ChangeUserPasswordComponent);
    return ChangeUserPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"panel panel-primary\">\n\t<div class=\"panel-heading\">\n\t\tOrder Summary\n\t</div>\n\t<div class=\"panel-body\">\n\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th><h4>Product</h4></th>\n\t\t\t\t\t\t\t<th><h4>Quantity</h4></th>\n\t\t\t\t\t\t\t<th class=\"text-right\"><h4>Price</h4></th>\n\t\t\t\t\t\t\t<th class=\"text-right\"><h4>Total</h4></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<ng-container *ngFor=\"let cartItem of cartItems\"> <!-- loops through the items to be displayed -->\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">{{cartItem.item.title}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">{{cartItem.qty}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"col-sm-2 text-right\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">{{cartItem.item.price}}</label>\n\t\t\t\t\t\t\t\t</div>     \n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"col-sm-2 text-right\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"control-label\">{{cartItem.qty * cartItem.item.price}}</label>\n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"col-sm-6\">   </td>\n\t\t\t\t\t\t\t<td class=\"col-sm-2\">   </td>\n\t\t\t\t\t\t\t<td class=\"text-right col-sm-2\"><h5>Subtotal</h5></td>\n\t\t\t\t\t\t\t<td class=\"text-right col-sm-2\"><h5><strong>${{cartTotalPrice}}</strong></h5></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"col-sm-6\">   </td>\n\t\t\t\t\t\t\t<td class=\"col-sm-2\">   </td>\n\t\t\t\t\t\t\t<td class=\"text-right col-sm-2\"><h5>Shipping</h5></td>\n\t\t\t\t\t\t\t<td class=\"text-right col-sm-2\"><h5><strong>$0</strong></h5></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"col-sm-6\">   </td>\n\t\t\t\t\t\t\t<td class=\"col-sm-2\">   </td>\n\t\t\t\t\t\t\t<td class=\"text-right col-sm-2\"><h3>Total</h3></td>\n\t\t\t\t\t\t\t<td class=\"text-right col-sm-2\"><h3><strong>${{cartTotalPrice}}</strong></h3></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t</div>\n</div>\n    \n\n<div class=\"row\">\n\t<form accept-charset=\"UTF-8\" class=\"form-horizontal\" role=\"form\" #shoppingCartCheckoutForm=\"ngForm\" (ngSubmit)=\"createToken()\" id=\"shoppingCartCheckoutForm\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\tShipping Address\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Full Name</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Full Name\" id=\"cardName\" name=\"cardName\" [(ngModel)]=\"checkoutOrderInfo.name\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Address Line 1</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\"  placeholder=\"Address Line 1\" id=\"addressLine1\" name=\"addressLine1\" [(ngModel)]=\"checkoutOrderInfo.addressLine1\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Address Line 2</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Address Line 2\" id=\"addressLine2\" name=\"addressLine2\" [(ngModel)]=\"checkoutOrderInfo.addressLine2\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">City</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"City\" id=\"addressCity\" name=\"addressCity\" [(ngModel)]=\"checkoutOrderInfo.addressCity\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">State/Province</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"State/Province/Region\" id=\"addressState\" name=\"addressState\" [(ngModel)]=\"checkoutOrderInfo.addressState\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Zip/Postal Code</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Zip/Postal Code\" id=\"addressZip\" name=\"addressZip\" [(ngModel)]=\"checkoutOrderInfo.addressZip\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Country</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Country\" id=\"addressCountry\" name=\"addressCountry\" [(ngModel)]=\"checkoutOrderInfo.addressCountry\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\tCredit Card Details\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardNumber-element\">Card Number</label>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardNumber-element\">\n\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardExpiry-element\">Card Expiry</label>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardExpiry-element\">\n\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardCvc-element\">CVC</label>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardCvc-element\">\n\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"postalCode-element\">Zip/Postal Code</label>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"postalCode-element\">\n\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\tTotal Payment: ${{cartTotalPrice}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Buy now</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</form>\n</div>\n"

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
                _this._router.navigate(['/home']);
                console.log("success charge");
            }
        }, function (err) {
            // if there is no cart session, it will redirect back to the home page
            if (err.msg == 'cart session does not exist') {
                console.log(err.msg);
                _this._router.navigate(['/home']);
            }
            else {
                console.log(err.msg); //error message if theres a error in charging
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CheckoutComponent);
    return CheckoutComponent;
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

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n      <div class=\"page-header2\">\n          <h1>{{title}}</h1>\n      </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-inverse \" role=\"navigation\">\n<div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse navbar-menubuilder\">\n        <ul class=\"nav navbar-nav navbar-left\">\n            <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <ng-container *ngIf = \"loggedIn\">\n            <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">User Account<span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a routerLink=\"/change_user_info\" routerLinkActive=\"active\">Change user info</a></li>\n                        <li><a routerLink=\"/change_user_password\" routerLinkActive=\"active\">Change user password</a></li>\n                        <li><a routerLink=\"/purchase_history\" routerLinkActive=\"active\">Purchase History</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a class=\"buttonlink\" (click)=\"userLogout()\">Logout</a></li>\n                    </ul>\n            </li>\n          </ng-container>\n            <ng-container *ngIf = \"!loggedIn\">\n                  <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n                  <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Signup</a></li>\n            </ng-container>\n            <li><a routerLink=\"/cart\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>Cart ({{totalQuantity}})</a></li>\n        </ul>\n    </div>\n\n</div>\n</nav>"

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
                console.log('logged in');
                _this.loggedIn = true;
            }
            else {
                console.log('not logged in');
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
        }, function (err) { return console.log('error logging out'); }, function () { return console.log('logout complete'); });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div *ngFor = \"let coin of coins; let i=index\" id=\"listOfCoins\" name=\"listOfCoins\">\n  <div class=\"thumbnail col-sm-3\">\n    <img src=\"/assets/images/{{coin.imagePath}}\" alt=\"...\" class=\"img-responsive img-thumbnail\" style=\"width:75%\">\n    <div class=\"caption text-center\">\n      <h4>{{coin.title}}</h4>\n      <p>{{coin.description}}</p>\n      <div class=\"clearfix\">\n        <div class=\"price\">\n          <p>${{coin.price}}</p>\n        </div>\n        <input type=\"text\" class=\"text-center\" size=\"3\" id = \"itemQty\" name = \"itemQty\" [(ngModel)]=\"itemQuantity\" #itemQty>          \n        <button class=\"btn btn-success\" role=\"button\" id=\"addItemButton\" name=\"addItemButton\" (click)=\"addItemToCart(coin._id, itemQty.value)\">Add</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        this.itemQuantity = 1;
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
            }, function (err) { return console.log('error adding coins to cart'); }, function () { return console.log('complete adding coins to cart'); });
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

module.exports = "\n<app-header></app-header>\n<div class=\"row\">\n<div class=\"col-md-4 col-md-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Please sign in</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form accept-charset=\"UTF-8\" role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n                <fieldset>\n            <div class=\"form-group\">\n              <label>Username</label>\n              <input class=\"form-control\" type=\"text\" placeholder=\"Username\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" required>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Login</button>\n        </fieldset>\n      </form>\n      <br>{{errorMsg}}\n      </div>\n  </div>\n  <p>Click <a routerLink=\"/signup\" routerLinkActive=\"active\">here</a> to sign up</p>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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



var LoginComponent = (function () {
    function LoginComponent(authenticate, _router) {
        this.authenticate = authenticate;
        this._router = _router;
        this.username = '';
        this.password = '';
        this.errorMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticate.loginfn(this.username, this.password)
            .subscribe(function (data) {
            _this._router.navigate([data.redirect]);
        }, function (err) {
            _this.errorMsg = err.error.msg;
        }, function () { return console.log('login complete'); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n        Orders\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div *ngFor = \"let order of orders\"> \r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <strong>{{order.date}}</strong>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"col-sm-8 right-border\">\r\n                        <div *ngFor = \"let item of order.cart.items\">\r\n                            <table class=\"table table-bordered no-margin\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td class=\"col-sm-6\">\r\n                                            {{item.item.title}}\r\n                                        </td>\r\n\r\n                                        <td class=\"col-sm-6\">\r\n                                            QTY: {{item.qty}}\r\n                                        </td>\r\n                                            \r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4 left-border\">\r\n                            <table class=\"table borderless no-margin\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td class=\"col-sm-12 text-center\">\r\n                                                Order Details\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td class=\"col-sm-12 text-center\">\r\n                                                Total Price: ${{order.cart.totalPrice}}\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], PurchaseHistoryComponent);
    return PurchaseHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/load.coin.info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadCoinInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
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





var LoadCoinInfoService = (function () {
    function LoadCoinInfoService(_http) {
        this._http = _http;
        this.domain = 'http://localhost:3333'; // http://localhost:3333 , https://cstoreapi.herokuapp.com
    }
    LoadCoinInfoService.prototype.getCoins = function () {
        return this._http.get(this.domain + '/get_coin_info')
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    LoadCoinInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoadCoinInfoService);
    return LoadCoinInfoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteService; });
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




var RouteService = (function () {
    //isLoggedIn:boolean = false;
    function RouteService(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.domain = 'http://localhost:3333'; // http://localhost:3333 , https://cstoreapi.herokuapp.com
    }
    RouteService.prototype.canActivate = function (next, state) {
        var _this = this;
        return this._userService.isLoggedIn().map(function (res) {
            if (res.authenticated) {
                //if user is logged in
                return true;
            }
            else {
                //if user is not logged in
                _this._router.navigate(['/login']);
                return false;
            }
        }).catch(function () {
            _this._router.navigate(['/login']);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of(false);
        });
    };
    RouteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shopping.cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
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





var ShoppingCartService = (function () {
    function ShoppingCartService(_http) {
        this._http = _http;
        this.domain = 'http://localhost:3333'; // http://localhost:3333 , https://cstoreapi.herokuapp.com
    }
    ShoppingCartService.prototype.getCartItems = function () {
        return this._http.get(this.domain + '/shopping_cart', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.getTotalQuantity = function () {
        return this._http.get(this.domain + '/get_total_quantity', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.addItem = function (coinID, itemQty) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var bodyString = 'itemQty=' + itemQty;
        return this._http.post(this.domain + '/add_to_cart/' + coinID, bodyString, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.reduceOneQuantity = function (coinID) {
        return this._http.get(this.domain + '/reduce_one/' + coinID, { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.removeItem = function (coinID) {
        return this._http.get(this.domain + '/remove_all/' + coinID, { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.cartCheckout = function () {
        return this._http.get(this.domain + '/checkout', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.makeCharge = function (cardToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var token = 'stripeToken=' + cardToken;
        return this._http.post(this.domain + '/make_charge', token, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.getPurchaseHistory = function () {
        return this._http.get(this.domain + '/purchase_history', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService.prototype.updateCart = function (updateCart) {
        var bodyString = JSON.stringify(updateCart);
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.domain + '/cart_update', bodyString, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
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
    function UserService(_http) {
        this._http = _http;
        this.domain = 'http://localhost:3333'; // http://localhost:3333 , https://cstoreapi.herokuapp.com
    }
    UserService.prototype.isLoggedIn = function () {
        return this._http.get(this.domain + '/user/isauthenticated', { withCredentials: true });
    };
    UserService.prototype.logoutfn = function () {
        return this._http.get(this.domain + '/user/logout', { withCredentials: true });
    };
    UserService.prototype.loginfn = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var creds = 'uname=' + username + '&password=' + password;
        return this._http.post(this.domain + '/user/authenticate', creds, { headers: headers, withCredentials: true });
    };
    UserService.prototype.signupfn = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + newUser.fname + '&lname=' + newUser.lname + '&email=' + newUser.email + '&uname=' + newUser.username + '&password=' + newUser.password;
        return this._http.post(this.domain + '/user/adduser', creds, { headers: headers, withCredentials: true });
    };
    UserService.prototype.getPurchaseHistory = function () {
        return this._http.get(this.domain + '/user/purchase_history', { withCredentials: true });
    };
    UserService.prototype.changePassword = function (currentPw, newPw) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'currentPassword=' + currentPw + '&newPassword=' + newPw;
        return this._http.post(this.domain + '/user/change_password', creds, { headers: headers, withCredentials: true });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
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

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<ng-container *ngIf = \"total_qty!=0\"> <!-- if there are items in shopping cart -->\n<form [formGroup]=\"updateCartForm\" novalidate (ngSubmit)=\"updateCart(updateCartForm)\">\n    <div formArrayName=\"carts\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th><h4>Product</h4></th>\n                <th><h4>Quantity</h4></th>\n                <th class=\"text-right\"><h4>Price</h4></th>\n                <th class=\"text-right\"><h4>Total</h4></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <ng-container *ngFor=\"let cart of updateCartForm.controls.carts.controls; let i=index\"> <!-- loops through the items to be displayed -->\n            <tr [formGroupName]=\"i\">\n                <td class=\"col-sm-5\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">{{updateCartForm.controls.carts.controls[i].controls.productName.value}}</label>\n                    </div>\n                </td>\n                <td class=\"col-sm-2\">\n                    <div class=\"form-group\">\n                        <input type=\"number\" min = \"1\" step = \"1\" style=\"width: 6em\" class=\"form-control\" formControlName=\"productQuantity\" #prdQty>\n                    </div>\n                </td>\n                <td class=\"col-sm-2 text-right\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">{{updateCartForm.controls.carts.controls[i].controls.productPrice.value}}</label>\n                    </div>     \n                </td>\n                <td class=\"col-sm-2 text-right\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">{{prdQty.value * updateCartForm.controls.carts.controls[i].controls.productPrice.value}}</label>\n                    </div> \n                </td>\n                <td class=\"col-sm-1\">\n                    <a class=\"buttonlink pull-right\" (click)=\"removeAll(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n                </td>\n\n            </tr>\n            </ng-container>\n\n            <!--\n            <td class=\"col-sm-1 col-md-1\" style=\"text-align: center\">\n                <input type=\"number\" class=\"form-control\" id=\"item_quantity\" value=\"{{cartItem.qty}}\">\n            </td>\n            -->\n            <tr>\n                    <td class=\"col-sm-5\">   </td>\n                    <td class=\"col-sm-2\">   </td>\n                    <td class=\"col-sm-2\">   </td>\n                    <td class=\"col-sm-2\">   </td>\n                    <td class=\"col-sm-1\">   </td>\n            </tr>\n\n            <tr>\n                <td class=\"col-sm-5\">   </td>\n                <td class=\"col-sm-2\">   </td>\n                <td class=\"text-right col-sm-2\"><h5>Subtotal</h5></td>\n                <td class=\"text-right col-sm-2\"><h5><strong>${{cartTotalPrice}}</strong></h5></td>\n                <td class=\"col-sm-1\">   </td>\n            </tr>\n            <tr>\n                <td class=\"col-sm-5\">   </td>\n                <td class=\"col-sm-2\">   </td>\n                <td class=\"text-right col-sm-2\"><h5>Shipping</h5></td>\n                <td class=\"text-right col-sm-2\"><h5><strong>$0</strong></h5></td>\n                <td class=\"col-sm-1\">   </td>\n            </tr>\n            <tr>\n                <td class=\"col-sm-5\">   </td>\n                <td class=\"col-sm-2\">   </td>\n                <td class=\"text-right col-sm-2\"><h3>Total</h3></td>\n                <td class=\"text-right col-sm-2\"><h3><strong>${{cartTotalPrice}}</strong></h3></td>\n                <td class=\"col-sm-1\">   </td>\n            </tr>\n        </tbody>\n    </table>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <a routerLink=\"/checkout\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-success pull-right\">Checkout</a>\n            <button type=\"submit\" class=\"btn btn-default pull-right\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>Update Cart</button>            \n        </div>\n    </div>\n</form>\n\n\n</ng-container>\n<ng-container *ngIf = \"total_qty==0\"> <!-- if there are no items in shopping cart -->\n<div class=\"row\">\n    <div class=\"col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3\">\n        <h2>No Items in Cart</h2>\n    </div>\n</div>\n</ng-container>\n"

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
        //initialize the form
        this.updateCartForm = this._fb.group({
            carts: this._fb.array([
                this.initCartForm(),
            ])
        });
        this.shoppingCartItems();
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
                console.log(_this.cartItems);
            }
            else {
                _this.clearCartFirstItem();
                _this.cartItems = null;
                _this.cartTotalPrice = 0;
                _this.total_qty = 0;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Get Cart Items Complete'); });
    };
    ShoppingCartComponent.prototype.removeAll = function (i) {
        // remove address from the list
        var control = this.updateCartForm.controls['carts'];
        control.removeAt(i);
        this.cartItems.splice(i, 1);
    };
    ShoppingCartComponent.prototype.updateCart = function (cartForm) {
        var _this = this;
        console.log(cartForm);
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
                console.log('update success');
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Update cart complete'); });
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
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

module.exports = "<app-header></app-header>\n<div class=\"row\">\n<div class=\"col-md-4 col-md-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">User Registration</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form accept-charset=\"UTF-8\" role=\"form\" #signupForm=\"ngForm\" (ngSubmit)=\"signup()\" id=\"signupForm\">\n                <fieldset>\n            <div class=\"form-group\">\n                        <label>First Name</label>\n              <input class=\"form-control\" type=\"text\" id=\"fname\" name=\"fname\" [(ngModel)]=\"newUser.fname\">\n          </div>\n          <div class=\"form-group\">\n                        <label>Last Name</label>\n            <input class=\"form-control\" type=\"text\" id=\"lname\" name=\"lname\" [(ngModel)]=\"newUser.lname\">\n          </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n            <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"newUser.email\">\n          </div>\n                    <div class=\"form-group\">\n                        <label>Username</label>\n            <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"newUser.username\">\n          </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n            <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"newUser.password\">\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </fieldset>\n          </form>\n      </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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



var SignupComponent = (function () {
    function SignupComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.newUser = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: ''
        };
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this._userService.signupfn(this.newUser)
            .subscribe(function (data) {
            if (data.authenticated) {
                console.log('signup is success');
                _this._router.navigate(['/home']);
            }
        }, function (err) {
            console.log("error signing up");
        }, function () { return console.log('signup complete'); });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
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
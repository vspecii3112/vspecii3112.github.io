webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_invoice_module__ = __webpack_require__("./src/app/invoice/invoice.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__("./src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_module__ = __webpack_require__("./src/app/homepage/homepage.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shopping_cart_shopping_cart_module__ = __webpack_require__("./src/app/shopping-cart/shopping-cart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_module__ = __webpack_require__("./src/app/signup/signup.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_module__ = __webpack_require__("./src/app/store/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkout_checkout_module__ = __webpack_require__("./src/app/checkout/checkout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__password_reset_password_reset_module__ = __webpack_require__("./src/app/password-reset/password-reset.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__purchase_history_purchase_history_module__ = __webpack_require__("./src/app/purchase-history/purchase-history.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_confirmation_order_confirmation_module__ = __webpack_require__("./src/app/order-confirmation/order-confirmation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_profile_user_profile_module__ = __webpack_require__("./src/app/user-profile/user-profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__logout_logout_module__ = __webpack_require__("./src/app/logout/logout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HttpClientModule } from '@angular/common/http';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';














//import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';
//import { CheckoutComponent } from './checkout/checkout.component';
//import { HeaderComponent } from './header/header.component';
//import { HomepageComponent } from './homepage/homepage.component';
//import { LoginComponent } from './login/login.component';
//import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
//import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
//import { SignupComponent } from './signup/signup.component';
//import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
//import { OrderDetailsComponent } from './order-details/order-details.component';
//import { ForgotUserPasswordComponent } from './forgot-user-password/forgot-user-password.component';
//import { ResetPasswordComponent } from './reset-password/reset-password.component';


//import { UserService } from './services/user.service';
//import { ShoppingCartService } from './services/shopping.cart.service';
//import { LoadCoinInfoService } from './services/load.coin.info.service';
//import { isAuthGuard } from './services/check.auth.service';
//import { isNotAuthGuard } from './services/check.not.auth.service';
var appRoutes = [
    //{ path: 'home', component: HomepageComponent},
    //{ path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'signup', component: SignupComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'purchase_history/order_details/:id', component: OrderDetailsComponent, canActivate: [isAuthGuard]},
    //{ path: 'purchase_history', component: PurchaseHistoryComponent, canActivate: [isAuthGuard]},
    //{ path: 'cart', component: ShoppingCartComponent},
    //{ path: 'checkout', component: CheckoutComponent, canActivate: [isAuthGuard]},
    //{ path: 'change_user_password', component: ChangeUserPasswordComponent, canActivate: [isAuthGuard]},
    //{ path: 'order_confirmation/:id', component: OrderConfirmationComponent, canActivate: [isAuthGuard]},
    //{ path: 'reset/:token', component: ResetPasswordComponent},
    //{ path: 'forgot', component: ForgotUserPasswordComponent, canActivate: [isNotAuthGuard]},
    //{ path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_18__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                //ChangeUserPasswordComponent,
                //CheckoutComponent,
                //HeaderComponent,
                //HomepageComponent,
                //LoginComponent,
                //PurchaseHistoryComponent,
                //ShoppingCartComponent,
                //SignupComponent,
                //OrderConfirmationComponent,
                //OrderDetailsComponent,
                //ForgotUserPasswordComponent,
                //ResetPasswordComponent,
                __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                //FormsModule,
                //ReactiveFormsModule,
                //HttpClientModule,
                __WEBPACK_IMPORTED_MODULE_9__store_module__["a" /* StoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_module__["a" /* HomepageModule */],
                __WEBPACK_IMPORTED_MODULE_7__shopping_cart_shopping_cart_module__["a" /* ShoppingCartModule */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_module__["a" /* SignupModule */],
                __WEBPACK_IMPORTED_MODULE_10__checkout_checkout_module__["a" /* CheckoutModule */],
                __WEBPACK_IMPORTED_MODULE_11__password_reset_password_reset_module__["a" /* PasswordResetModule */],
                __WEBPACK_IMPORTED_MODULE_12__purchase_history_purchase_history_module__["a" /* PurchaseHistoryModule */],
                __WEBPACK_IMPORTED_MODULE_13__order_confirmation_order_confirmation_module__["a" /* OrderConfirmationModule */],
                __WEBPACK_IMPORTED_MODULE_14__user_profile_user_profile_module__["a" /* UserProfileModule */],
                __WEBPACK_IMPORTED_MODULE_15__logout_logout_module__["a" /* LogoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout-items/checkout-items.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-bottom-margin {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.border-outline {\r\n    outline: 1px solid #ddd;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/checkout/checkout-items/checkout-items.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n    <strong>Items</strong><br><br>\r\n    <table class=\"table table-condensed table-hover no-bottom-margin\">\r\n      <tbody>\r\n        <ng-container *ngFor=\"let cartItem of cartItemsArray\"> <!-- loops through the items to be displayed -->\r\n          <tr>\r\n            <td class=\"col-sm-6\">\r\n              <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                  <img class=\"media-object\" src=\"/assets/images/{{cartItem.item.imagePath}}\" style=\"width: 80px; height: 80px;\">\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  {{cartItem.item.title}}\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td class=\"col-sm-3\">\r\n              ${{coinPrice(cartItem.item.price)}} {{currency.currency}}\r\n            </td>\r\n            <td class=\"col-sm-3\">\r\n              Qty: {{cartItem.qty}}\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout-items/checkout-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_currency_class__ = __webpack_require__("./src/app/objects/currency.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_round_module__ = __webpack_require__("./src/app/modules/round.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutItemsComponent = /** @class */ (function () {
    function CheckoutItemsComponent() {
    }
    CheckoutItemsComponent.prototype.ngOnInit = function () {
    };
    CheckoutItemsComponent.prototype.coinPrice = function (price, qty) {
        if (qty === void 0) { qty = 1; }
        //console.log(this.round(33 * 1.287168 * 2, 2));
        return (Object(__WEBPACK_IMPORTED_MODULE_2__modules_round_module__["a" /* round */])(price * this.currency.rate, 2) * qty).toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CheckoutItemsComponent.prototype, "cartItemsArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__objects_currency_class__["a" /* currency */])
    ], CheckoutItemsComponent.prototype, "currency", void 0);
    CheckoutItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout-items',
            template: __webpack_require__("./src/app/checkout/checkout-items/checkout-items.component.html"),
            styles: [__webpack_require__("./src/app/checkout/checkout-items/checkout-items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutItemsComponent);
    return CheckoutItemsComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout-orderdetails/checkout-orderdetails.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-bottom-margin {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.border-outline {\r\n    outline: 1px solid #ddd;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/checkout/checkout-orderdetails/checkout-orderdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n    <strong>Order Details</strong><br><br>\r\n    <table class=\"table table-condensed table-hover no-bottom-margin\">\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"col-sm-6\">\r\n            Subtotal:\r\n          </td>\r\n          <td class=\"col-sm-6\">\r\n            ${{coinPriceDisplay(_cartTotalPrice)}} {{currency.currency}}\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"col-sm-6\">\r\n            Shipping:\r\n          </td>\r\n          <td class=\"col-sm-6\">\r\n            $0\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"col-sm-6\">\r\n            <strong>Grand Total:</strong>\r\n          </td>\r\n          <td class=\"col-sm-6\">\r\n            <strong>${{coinPriceDisplay(_cartTotalPrice)}} {{currency.currency}}</strong>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table><br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout-orderdetails/checkout-orderdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutOrderdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_currency_class__ = __webpack_require__("./src/app/objects/currency.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutOrderdetailsComponent = /** @class */ (function () {
    function CheckoutOrderdetailsComponent() {
    }
    CheckoutOrderdetailsComponent.prototype.ngOnInit = function () {
    };
    CheckoutOrderdetailsComponent.prototype.coinPriceDisplay = function (price) {
        return price.toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CheckoutOrderdetailsComponent.prototype, "_cartTotalPrice", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__objects_currency_class__["a" /* currency */])
    ], CheckoutOrderdetailsComponent.prototype, "currency", void 0);
    CheckoutOrderdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout-orderdetails',
            template: __webpack_require__("./src/app/checkout/checkout-orderdetails/checkout-orderdetails.component.html"),
            styles: [__webpack_require__("./src/app/checkout/checkout-orderdetails/checkout-orderdetails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutOrderdetailsComponent);
    return CheckoutOrderdetailsComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-bottom-margin {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.border-outline {\r\n    outline: 1px solid #ddd;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<div class=\"container padding-top padding-bottom\">\r\n\t<div class=\"row text-center\">\r\n\t\t<h3>Checkout</h3>\r\n\t</div><br>\r\n\t<form class=\"form-horizontal\" [formGroup]=\"shoppingCartCheckoutForm\" (ngSubmit)=\"createToken(shoppingCartCheckoutForm)\" id=\"shoppingCartCheckoutForm\" name=\"shoppingCartCheckoutForm\">\r\n\r\n\t<div class=\"col-sm-7\">\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t  <strong>Shipping Address</strong><br><br>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Full Name <font color=\"red\">*</font></label>\r\n\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t  <input class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\">\r\n\t\t\t\t\t\t  <div class=\"text-danger\">\r\n\t\t\t\t\t\t\t{{nameMsg}}\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <fieldset formGroupName=\"shippingAddress\">\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Address Line 1 <font color=\"red\">*</font></label>\r\n\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t  <input class=\"form-control\" type=\"text\" id=\"addressLine1\" name=\"addressLine1\" formControlName=\"addressLine1\">\r\n\t\t\t\t\t\t  <div class=\"text-danger\">\r\n\t\t\t\t\t\t\t{{addressLine1Msg}}\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Address Line 2</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t  <input class=\"form-control\" type=\"text\" id=\"addressLine2\" name=\"addressLine2\" formControlName=\"addressLine2\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">City<font color=\"red\">*</font></label>\r\n\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t  <input class=\"form-control\" type=\"text\" id=\"city\" name=\"city\" formControlName=\"city\">\r\n\t\t\t\t\t\t  <div class=\"text-danger\">\r\n\t\t\t\t\t\t\t{{cityMsg}}\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t  \r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">State/Province</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t  <input class=\"form-control\" type=\"text\" id=\"state\" name=\"state\" formControlName=\"state\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Zip/Postal Code</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t  <input class=\"form-control\" type=\"text\" id=\"zip\" name=\"zip\" formControlName=\"zip\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Country <font color=\"red\">*</font></label>\r\n\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t  <select class=\"form-control\" id=\"country\" name=\"country\" formControlName=\"country\">\r\n\t\t\t\t\t\t\t  <option value=\"Afghanistan\" title=\"Afghanistan\">Afghanistan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Åland Islands\" title=\"Åland Islands\">Åland Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Albania\" title=\"Albania\">Albania</option>\r\n\t\t\t\t\t\t\t  <option value=\"Algeria\" title=\"Algeria\">Algeria</option>\r\n\t\t\t\t\t\t\t  <option value=\"American Samoa\" title=\"American Samoa\">American Samoa</option>\r\n\t\t\t\t\t\t\t  <option value=\"Andorra\" title=\"Andorra\">Andorra</option>\r\n\t\t\t\t\t\t\t  <option value=\"Angola\" title=\"Angola\">Angola</option>\r\n\t\t\t\t\t\t\t  <option value=\"Anguilla\" title=\"Anguilla\">Anguilla</option>\r\n\t\t\t\t\t\t\t  <option value=\"Antarctica\" title=\"Antarctica\">Antarctica</option>\r\n\t\t\t\t\t\t\t  <option value=\"Antigua and Barbuda\" title=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n\t\t\t\t\t\t\t  <option value=\"Argentina\" title=\"Argentina\">Argentina</option>\r\n\t\t\t\t\t\t\t  <option value=\"Armenia\" title=\"Armenia\">Armenia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Aruba\" title=\"Aruba\">Aruba</option>\r\n\t\t\t\t\t\t\t  <option value=\"Australia\" title=\"Australia\">Australia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Austria\" title=\"Austria\">Austria</option>\r\n\t\t\t\t\t\t\t  <option value=\"Azerbaijan\" title=\"Azerbaijan\">Azerbaijan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bahamas\" title=\"Bahamas\">Bahamas</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bahrain\" title=\"Bahrain\">Bahrain</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bangladesh\" title=\"Bangladesh\">Bangladesh</option>\r\n\t\t\t\t\t\t\t  <option value=\"Barbados\" title=\"Barbados\">Barbados</option>\r\n\t\t\t\t\t\t\t  <option value=\"Belarus\" title=\"Belarus\">Belarus</option>\r\n\t\t\t\t\t\t\t  <option value=\"Belgium\" title=\"Belgium\">Belgium</option>\r\n\t\t\t\t\t\t\t  <option value=\"Belize\" title=\"Belize\">Belize</option>\r\n\t\t\t\t\t\t\t  <option value=\"Benin\" title=\"Benin\">Benin</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bermuda\" title=\"Bermuda\">Bermuda</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bhutan\" title=\"Bhutan\">Bhutan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bolivia, Plurinational State of\" title=\"Bolivia, Plurinational State of\">Bolivia, Plurinational State of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bonaire, Sint Eustatius and Saba\" title=\"Bonaire, Sint Eustatius and Saba\">Bonaire, Sint Eustatius and Saba</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bosnia and Herzegovina\" title=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\r\n\t\t\t\t\t\t\t  <option value=\"Botswana\" title=\"Botswana\">Botswana</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bouvet Island\" title=\"Bouvet Island\">Bouvet Island</option>\r\n\t\t\t\t\t\t\t  <option value=\"Brazil\" title=\"Brazil\">Brazil</option>\r\n\t\t\t\t\t\t\t  <option value=\"British Indian Ocean Territory\" title=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\r\n\t\t\t\t\t\t\t  <option value=\"Brunei Darussalam\" title=\"Brunei Darussalam\">Brunei Darussalam</option>\r\n\t\t\t\t\t\t\t  <option value=\"Bulgaria\" title=\"Bulgaria\">Bulgaria</option>\r\n\t\t\t\t\t\t\t  <option value=\"Burkina Faso\" title=\"Burkina Faso\">Burkina Faso</option>\r\n\t\t\t\t\t\t\t  <option value=\"Burundi\" title=\"Burundi\">Burundi</option>\r\n\t\t\t\t\t\t\t  <option value=\"Cambodia\" title=\"Cambodia\">Cambodia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Cameroon\" title=\"Cameroon\">Cameroon</option>\r\n\t\t\t\t\t\t\t  <option value=\"Canada\" title=\"Canada\">Canada</option>\r\n\t\t\t\t\t\t\t  <option value=\"Cape Verde\" title=\"Cape Verde\">Cape Verde</option>\r\n\t\t\t\t\t\t\t  <option value=\"Cayman Islands\" title=\"Cayman Islands\">Cayman Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Central African Republic\" title=\"Central African Republic\">Central African Republic</option>\r\n\t\t\t\t\t\t\t  <option value=\"Chad\" title=\"Chad\">Chad</option>\r\n\t\t\t\t\t\t\t  <option value=\"Chile\" title=\"Chile\">Chile</option>\r\n\t\t\t\t\t\t\t  <option value=\"China\" title=\"China\">China</option>\r\n\t\t\t\t\t\t\t  <option value=\"Christmas Island\" title=\"Christmas Island\">Christmas Island</option>\r\n\t\t\t\t\t\t\t  <option value=\"Cocos (Keeling) Islands\" title=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Colombia\" title=\"Colombia\">Colombia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Comoros\" title=\"Comoros\">Comoros</option>\r\n\t\t\t\t\t\t\t  <option value=\"Congo\" title=\"Congo\">Congo</option>\r\n\t\t\t\t\t\t\t  <option value=\"Congo, the Democratic Republic of the\" title=\"Congo, the Democratic Republic of the\">Congo, the Democratic Republic of the</option>\r\n\t\t\t\t\t\t\t  <option value=\"Cook Islands\" title=\"Cook Islands\">Cook Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Costa Rica\" title=\"Costa Rica\">Costa Rica</option>\r\n\t\t\t\t\t\t\t  <option value=\"Côte d'Ivoire\" title=\"Côte d'Ivoire\">Côte d'Ivoire</option>\r\n\t\t\t\t\t\t\t  <option value=\"Croatia\" title=\"Croatia\">Croatia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Cuba\" title=\"Cuba\">Cuba</option>\r\n\t\t\t\t\t\t\t  <option value=\"Curaçao\" title=\"Curaçao\">Curaçao</option>\r\n\t\t\t\t\t\t\t  <option value=\"Cyprus\" title=\"Cyprus\">Cyprus</option>\r\n\t\t\t\t\t\t\t  <option value=\"Czech Republic\" title=\"Czech Republic\">Czech Republic</option>\r\n\t\t\t\t\t\t\t  <option value=\"Denmark\" title=\"Denmark\">Denmark</option>\r\n\t\t\t\t\t\t\t  <option value=\"Djibouti\" title=\"Djibouti\">Djibouti</option>\r\n\t\t\t\t\t\t\t  <option value=\"Dominica\" title=\"Dominica\">Dominica</option>\r\n\t\t\t\t\t\t\t  <option value=\"Dominican Republic\" title=\"Dominican Republic\">Dominican Republic</option>\r\n\t\t\t\t\t\t\t  <option value=\"Ecuador\" title=\"Ecuador\">Ecuador</option>\r\n\t\t\t\t\t\t\t  <option value=\"Egypt\" title=\"Egypt\">Egypt</option>\r\n\t\t\t\t\t\t\t  <option value=\"El Salvador\" title=\"El Salvador\">El Salvador</option>\r\n\t\t\t\t\t\t\t  <option value=\"Equatorial Guinea\" title=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n\t\t\t\t\t\t\t  <option value=\"Eritrea\" title=\"Eritrea\">Eritrea</option>\r\n\t\t\t\t\t\t\t  <option value=\"Estonia\" title=\"Estonia\">Estonia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Ethiopia\" title=\"Ethiopia\">Ethiopia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Falkland Islands (Malvinas)\" title=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\r\n\t\t\t\t\t\t\t  <option value=\"Faroe Islands\" title=\"Faroe Islands\">Faroe Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Fiji\" title=\"Fiji\">Fiji</option>\r\n\t\t\t\t\t\t\t  <option value=\"Finland\" title=\"Finland\">Finland</option>\r\n\t\t\t\t\t\t\t  <option value=\"France\" title=\"France\">France</option>\r\n\t\t\t\t\t\t\t  <option value=\"French Guiana\" title=\"French Guiana\">French Guiana</option>\r\n\t\t\t\t\t\t\t  <option value=\"French Polynesia\" title=\"French Polynesia\">French Polynesia</option>\r\n\t\t\t\t\t\t\t  <option value=\"French Southern Territories\" title=\"French Southern Territories\">French Southern Territories</option>\r\n\t\t\t\t\t\t\t  <option value=\"Gabon\" title=\"Gabon\">Gabon</option>\r\n\t\t\t\t\t\t\t  <option value=\"Gambia\" title=\"Gambia\">Gambia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Georgia\" title=\"Georgia\">Georgia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Germany\" title=\"Germany\">Germany</option>\r\n\t\t\t\t\t\t\t  <option value=\"Ghana\" title=\"Ghana\">Ghana</option>\r\n\t\t\t\t\t\t\t  <option value=\"Gibraltar\" title=\"Gibraltar\">Gibraltar</option>\r\n\t\t\t\t\t\t\t  <option value=\"Greece\" title=\"Greece\">Greece</option>\r\n\t\t\t\t\t\t\t  <option value=\"Greenland\" title=\"Greenland\">Greenland</option>\r\n\t\t\t\t\t\t\t  <option value=\"Grenada\" title=\"Grenada\">Grenada</option>\r\n\t\t\t\t\t\t\t  <option value=\"Guadeloupe\" title=\"Guadeloupe\">Guadeloupe</option>\r\n\t\t\t\t\t\t\t  <option value=\"Guam\" title=\"Guam\">Guam</option>\r\n\t\t\t\t\t\t\t  <option value=\"Guatemala\" title=\"Guatemala\">Guatemala</option>\r\n\t\t\t\t\t\t\t  <option value=\"Guernsey\" title=\"Guernsey\">Guernsey</option>\r\n\t\t\t\t\t\t\t  <option value=\"Guinea\" title=\"Guinea\">Guinea</option>\r\n\t\t\t\t\t\t\t  <option value=\"Guinea-Bissau\" title=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n\t\t\t\t\t\t\t  <option value=\"Guyana\" title=\"Guyana\">Guyana</option>\r\n\t\t\t\t\t\t\t  <option value=\"Haiti\" title=\"Haiti\">Haiti</option>\r\n\t\t\t\t\t\t\t  <option value=\"Heard Island and McDonald Islands\" title=\"Heard Island and McDonald Islands\">Heard Island and McDonald Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Holy See (Vatican City State)\" title=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\r\n\t\t\t\t\t\t\t  <option value=\"Honduras\" title=\"Honduras\">Honduras</option>\r\n\t\t\t\t\t\t\t  <option value=\"Hong Kong\" title=\"Hong Kong\">Hong Kong</option>\r\n\t\t\t\t\t\t\t  <option value=\"Hungary\" title=\"Hungary\">Hungary</option>\r\n\t\t\t\t\t\t\t  <option value=\"Iceland\" title=\"Iceland\">Iceland</option>\r\n\t\t\t\t\t\t\t  <option value=\"India\" title=\"India\">India</option>\r\n\t\t\t\t\t\t\t  <option value=\"Indonesia\" title=\"Indonesia\">Indonesia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Iran, Islamic Republic of\" title=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Iraq\" title=\"Iraq\">Iraq</option>\r\n\t\t\t\t\t\t\t  <option value=\"Ireland\" title=\"Ireland\">Ireland</option>\r\n\t\t\t\t\t\t\t  <option value=\"Isle of Man\" title=\"Isle of Man\">Isle of Man</option>\r\n\t\t\t\t\t\t\t  <option value=\"Israel\" title=\"Israel\">Israel</option>\r\n\t\t\t\t\t\t\t  <option value=\"Italy\" title=\"Italy\">Italy</option>\r\n\t\t\t\t\t\t\t  <option value=\"Jamaica\" title=\"Jamaica\">Jamaica</option>\r\n\t\t\t\t\t\t\t  <option value=\"Japan\" title=\"Japan\">Japan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Jersey\" title=\"Jersey\">Jersey</option>\r\n\t\t\t\t\t\t\t  <option value=\"Jordan\" title=\"Jordan\">Jordan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Kazakhstan\" title=\"Kazakhstan\">Kazakhstan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Kenya\" title=\"Kenya\">Kenya</option>\r\n\t\t\t\t\t\t\t  <option value=\"Kiribati\" title=\"Kiribati\">Kiribati</option>\r\n\t\t\t\t\t\t\t  <option value=\"Korea, Democratic People's Republic of\" title=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Korea, Republic of\" title=\"Korea, Republic of\">Korea, Republic of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Kuwait\" title=\"Kuwait\">Kuwait</option>\r\n\t\t\t\t\t\t\t  <option value=\"Kyrgyzstan\" title=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Lao People's Democratic Republic\" title=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\r\n\t\t\t\t\t\t\t  <option value=\"Latvia\" title=\"Latvia\">Latvia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Lebanon\" title=\"Lebanon\">Lebanon</option>\r\n\t\t\t\t\t\t\t  <option value=\"Lesotho\" title=\"Lesotho\">Lesotho</option>\r\n\t\t\t\t\t\t\t  <option value=\"Liberia\" title=\"Liberia\">Liberia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Libya\" title=\"Libya\">Libya</option>\r\n\t\t\t\t\t\t\t  <option value=\"Liechtenstein\" title=\"Liechtenstein\">Liechtenstein</option>\r\n\t\t\t\t\t\t\t  <option value=\"Lithuania\" title=\"Lithuania\">Lithuania</option>\r\n\t\t\t\t\t\t\t  <option value=\"Luxembourg\" title=\"Luxembourg\">Luxembourg</option>\r\n\t\t\t\t\t\t\t  <option value=\"Macao\" title=\"Macao\">Macao</option>\r\n\t\t\t\t\t\t\t  <option value=\"Macedonia, the former Yugoslav Republic of\" title=\"Macedonia, the former Yugoslav Republic of\">Macedonia, the former Yugoslav Republic of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Madagascar\" title=\"Madagascar\">Madagascar</option>\r\n\t\t\t\t\t\t\t  <option value=\"Malawi\" title=\"Malawi\">Malawi</option>\r\n\t\t\t\t\t\t\t  <option value=\"Malaysia\" title=\"Malaysia\">Malaysia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Maldives\" title=\"Maldives\">Maldives</option>\r\n\t\t\t\t\t\t\t  <option value=\"Mali\" title=\"Mali\">Mali</option>\r\n\t\t\t\t\t\t\t  <option value=\"Malta\" title=\"Malta\">Malta</option>\r\n\t\t\t\t\t\t\t  <option value=\"Marshall Islands\" title=\"Marshall Islands\">Marshall Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Martinique\" title=\"Martinique\">Martinique</option>\r\n\t\t\t\t\t\t\t  <option value=\"Mauritania\" title=\"Mauritania\">Mauritania</option>\r\n\t\t\t\t\t\t\t  <option value=\"Mauritius\" title=\"Mauritius\">Mauritius</option>\r\n\t\t\t\t\t\t\t  <option value=\"Mayotte\" title=\"Mayotte\">Mayotte</option>\r\n\t\t\t\t\t\t\t  <option value=\"Mexico\" title=\"Mexico\">Mexico</option>\r\n\t\t\t\t\t\t\t  <option value=\"Micronesia, Federated States of\" title=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Moldova, Republic of\" title=\"Moldova, Republic of\">Moldova, Republic of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Monaco\" title=\"Monaco\">Monaco</option>\r\n\t\t\t\t\t\t\t  <option value=\"Mongolia\" title=\"Mongolia\">Mongolia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Montenegro\" title=\"Montenegro\">Montenegro</option>\r\n\t\t\t\t\t\t\t  <option value=\"Montserrat\" title=\"Montserrat\">Montserrat</option>\r\n\t\t\t\t\t\t\t  <option value=\"Morocco\" title=\"Morocco\">Morocco</option>\r\n\t\t\t\t\t\t\t  <option value=\"Mozambique\" title=\"Mozambique\">Mozambique</option>\r\n\t\t\t\t\t\t\t  <option value=\"Myanmar\" title=\"Myanmar\">Myanmar</option>\r\n\t\t\t\t\t\t\t  <option value=\"Namibia\" title=\"Namibia\">Namibia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Nauru\" title=\"Nauru\">Nauru</option>\r\n\t\t\t\t\t\t\t  <option value=\"Nepal\" title=\"Nepal\">Nepal</option>\r\n\t\t\t\t\t\t\t  <option value=\"Netherlands\" title=\"Netherlands\">Netherlands</option>\r\n\t\t\t\t\t\t\t  <option value=\"New Caledonia\" title=\"New Caledonia\">New Caledonia</option>\r\n\t\t\t\t\t\t\t  <option value=\"New Zealand\" title=\"New Zealand\">New Zealand</option>\r\n\t\t\t\t\t\t\t  <option value=\"Nicaragua\" title=\"Nicaragua\">Nicaragua</option>\r\n\t\t\t\t\t\t\t  <option value=\"Niger\" title=\"Niger\">Niger</option>\r\n\t\t\t\t\t\t\t  <option value=\"Nigeria\" title=\"Nigeria\">Nigeria</option>\r\n\t\t\t\t\t\t\t  <option value=\"Niue\" title=\"Niue\">Niue</option>\r\n\t\t\t\t\t\t\t  <option value=\"Norfolk Island\" title=\"Norfolk Island\">Norfolk Island</option>\r\n\t\t\t\t\t\t\t  <option value=\"Northern Mariana Islands\" title=\"Northern Mariana Islands\">Northern Mariana Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Norway\" title=\"Norway\">Norway</option>\r\n\t\t\t\t\t\t\t  <option value=\"Oman\" title=\"Oman\">Oman</option>\r\n\t\t\t\t\t\t\t  <option value=\"Pakistan\" title=\"Pakistan\">Pakistan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Palau\" title=\"Palau\">Palau</option>\r\n\t\t\t\t\t\t\t  <option value=\"Palestinian Territory\" title=\"Palestinian Territory\">Palestinian Territory</option>\r\n\t\t\t\t\t\t\t  <option value=\"Panama\" title=\"Panama\">Panama</option>\r\n\t\t\t\t\t\t\t  <option value=\"Papua New Guinea\" title=\"Papua New Guinea\">Papua New Guinea</option>\r\n\t\t\t\t\t\t\t  <option value=\"Paraguay\" title=\"Paraguay\">Paraguay</option>\r\n\t\t\t\t\t\t\t  <option value=\"Peru\" title=\"Peru\">Peru</option>\r\n\t\t\t\t\t\t\t  <option value=\"Philippines\" title=\"Philippines\">Philippines</option>\r\n\t\t\t\t\t\t\t  <option value=\"Pitcairn\" title=\"Pitcairn\">Pitcairn</option>\r\n\t\t\t\t\t\t\t  <option value=\"Poland\" title=\"Poland\">Poland</option>\r\n\t\t\t\t\t\t\t  <option value=\"Portugal\" title=\"Portugal\">Portugal</option>\r\n\t\t\t\t\t\t\t  <option value=\"Puerto Rico\" title=\"Puerto Rico\">Puerto Rico</option>\r\n\t\t\t\t\t\t\t  <option value=\"Qatar\" title=\"Qatar\">Qatar</option>\r\n\t\t\t\t\t\t\t  <option value=\"Réunion\" title=\"Réunion\">Réunion</option>\r\n\t\t\t\t\t\t\t  <option value=\"Romania\" title=\"Romania\">Romania</option>\r\n\t\t\t\t\t\t\t  <option value=\"Russian Federation\" title=\"Russian Federation\">Russian Federation</option>\r\n\t\t\t\t\t\t\t  <option value=\"Rwanda\" title=\"Rwanda\">Rwanda</option>\r\n\t\t\t\t\t\t\t  <option value=\"Saint Barthélemy\" title=\"Saint Barthélemy\">Saint Barthélemy</option>\r\n\t\t\t\t\t\t\t  <option value=\"Saint Helena, Ascension and Tristan da Cunha\" title=\"Saint Helena, Ascension and Tristan da Cunha\">Saint Helena, Ascension and Tristan da Cunha</option>\r\n\t\t\t\t\t\t\t  <option value=\"Saint Kitts and Nevis\" title=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n\t\t\t\t\t\t\t  <option value=\"Saint Lucia\" title=\"Saint Lucia\">Saint Lucia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Saint Martin (French part)\" title=\"Saint Martin (French part)\">Saint Martin (French part)</option>\r\n\t\t\t\t\t\t\t  <option value=\"Saint Pierre and Miquelon\" title=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\r\n\t\t\t\t\t\t\t  <option value=\"Saint Vincent and the Grenadines\" title=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\r\n\t\t\t\t\t\t\t  <option value=\"Samoa\" title=\"Samoa\">Samoa</option>\r\n\t\t\t\t\t\t\t  <option value=\"San Marino\" title=\"San Marino\">San Marino</option>\r\n\t\t\t\t\t\t\t  <option value=\"Sao Tome and Principe\" title=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n\t\t\t\t\t\t\t  <option value=\"Saudi Arabia\" title=\"Saudi Arabia\">Saudi Arabia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Senegal\" title=\"Senegal\">Senegal</option>\r\n\t\t\t\t\t\t\t  <option value=\"Serbia\" title=\"Serbia\">Serbia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Seychelles\" title=\"Seychelles\">Seychelles</option>\r\n\t\t\t\t\t\t\t  <option value=\"Sierra Leone\" title=\"Sierra Leone\">Sierra Leone</option>\r\n\t\t\t\t\t\t\t  <option value=\"Singapore\" title=\"Singapore\">Singapore</option>\r\n\t\t\t\t\t\t\t  <option value=\"Sint Maarten (Dutch part)\" title=\"Sint Maarten (Dutch part)\">Sint Maarten (Dutch part)</option>\r\n\t\t\t\t\t\t\t  <option value=\"Slovakia\" title=\"Slovakia\">Slovakia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Slovenia\" title=\"Slovenia\">Slovenia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Solomon Islands\" title=\"Solomon Islands\">Solomon Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Somalia\" title=\"Somalia\">Somalia</option>\r\n\t\t\t\t\t\t\t  <option value=\"South Africa\" title=\"South Africa\">South Africa</option>\r\n\t\t\t\t\t\t\t  <option value=\"South Georgia and the South Sandwich Islands\" title=\"South Georgia and the South Sandwich Islands\">South Georgia and the South Sandwich Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"South Sudan\" title=\"South Sudan\">South Sudan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Spain\" title=\"Spain\">Spain</option>\r\n\t\t\t\t\t\t\t  <option value=\"Sri Lanka\" title=\"Sri Lanka\">Sri Lanka</option>\r\n\t\t\t\t\t\t\t  <option value=\"Sudan\" title=\"Sudan\">Sudan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Suriname\" title=\"Suriname\">Suriname</option>\r\n\t\t\t\t\t\t\t  <option value=\"Svalbard and Jan Mayen\" title=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\r\n\t\t\t\t\t\t\t  <option value=\"Swaziland\" title=\"Swaziland\">Swaziland</option>\r\n\t\t\t\t\t\t\t  <option value=\"Sweden\" title=\"Sweden\">Sweden</option>\r\n\t\t\t\t\t\t\t  <option value=\"Switzerland\" title=\"Switzerland\">Switzerland</option>\r\n\t\t\t\t\t\t\t  <option value=\"Syrian Arab Republic\" title=\"Syrian Arab Republic\">Syrian Arab Republic</option>\r\n\t\t\t\t\t\t\t  <option value=\"Taiwan, Province of China\" title=\"Taiwan, Province of China\">Taiwan, Province of China</option>\r\n\t\t\t\t\t\t\t  <option value=\"Tajikistan\" title=\"Tajikistan\">Tajikistan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Tanzania, United Republic of\" title=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Thailand\" title=\"Thailand\">Thailand</option>\r\n\t\t\t\t\t\t\t  <option value=\"Timor-Leste\" title=\"Timor-Leste\">Timor-Leste</option>\r\n\t\t\t\t\t\t\t  <option value=\"Togo\" title=\"Togo\">Togo</option>\r\n\t\t\t\t\t\t\t  <option value=\"Tokelau\" title=\"Tokelau\">Tokelau</option>\r\n\t\t\t\t\t\t\t  <option value=\"Tonga\" title=\"Tonga\">Tonga</option>\r\n\t\t\t\t\t\t\t  <option value=\"Trinidad and Tobago\" title=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n\t\t\t\t\t\t\t  <option value=\"Tunisia\" title=\"Tunisia\">Tunisia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Turkey\" title=\"Turkey\">Turkey</option>\r\n\t\t\t\t\t\t\t  <option value=\"Turkmenistan\" title=\"Turkmenistan\">Turkmenistan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Turks and Caicos Islands\" title=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Tuvalu\" title=\"Tuvalu\">Tuvalu</option>\r\n\t\t\t\t\t\t\t  <option value=\"Uganda\" title=\"Uganda\">Uganda</option>\r\n\t\t\t\t\t\t\t  <option value=\"Ukraine\" title=\"Ukraine\">Ukraine</option>\r\n\t\t\t\t\t\t\t  <option value=\"United Arab Emirates\" title=\"United Arab Emirates\">United Arab Emirates</option>\r\n\t\t\t\t\t\t\t  <option value=\"United Kingdom\" title=\"United Kingdom\">United Kingdom</option>\r\n\t\t\t\t\t\t\t  <option value=\"United States\" title=\"United States\">United States</option>\r\n\t\t\t\t\t\t\t  <option value=\"United States Minor Outlying Islands\" title=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\r\n\t\t\t\t\t\t\t  <option value=\"Uruguay\" title=\"Uruguay\">Uruguay</option>\r\n\t\t\t\t\t\t\t  <option value=\"Uzbekistan\" title=\"Uzbekistan\">Uzbekistan</option>\r\n\t\t\t\t\t\t\t  <option value=\"Vanuatu\" title=\"Vanuatu\">Vanuatu</option>\r\n\t\t\t\t\t\t\t  <option value=\"Venezuela, Bolivarian Republic of\" title=\"Venezuela, Bolivarian Republic of\">Venezuela, Bolivarian Republic of</option>\r\n\t\t\t\t\t\t\t  <option value=\"Viet Nam\" title=\"Viet Nam\">Viet Nam</option>\r\n\t\t\t\t\t\t\t  <option value=\"Virgin Islands, British\" title=\"Virgin Islands, British\">Virgin Islands, British</option>\r\n\t\t\t\t\t\t\t  <option value=\"Virgin Islands, U.S.\" title=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\r\n\t\t\t\t\t\t\t  <option value=\"Wallis and Futuna\" title=\"Wallis and Futuna\">Wallis and Futuna</option>\r\n\t\t\t\t\t\t\t  <option value=\"Western Sahara\" title=\"Western Sahara\">Western Sahara</option>\r\n\t\t\t\t\t\t\t  <option value=\"Yemen\" title=\"Yemen\">Yemen</option>\r\n\t\t\t\t\t\t\t  <option value=\"Zambia\" title=\"Zambia\">Zambia</option>\r\n\t\t\t\t\t\t\t  <option value=\"Zimbabwe\" title=\"Zimbabwe\">Zimbabwe</option>\r\n\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t  <div class=\"text-danger\">\r\n\t\t\t\t\t\t\t{{countryMsg}}\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  </fieldset>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<strong>Credit Card</strong>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"cardMsg\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t  {{cardMsg}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t  </ng-container>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tUse stripeJS test card 4242 4242 4242 4242\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardNumber-element\">Card Number <font color=\"red\">*</font></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardNumber-element\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{cardNumberMsg}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardExpiry-element\">Card Expiry <font color=\"red\">*</font></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardExpiry-element\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{cardExpiryMsg}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"cardCvc-element\">CVC <font color=\"red\">*</font></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"cardCvc-element\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- a Stripe Element will be inserted here. -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{cardCVCMsg}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 control-label\" for=\"postalCode-element\">Zip/Postal Code <font color=\"red\">*</font></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control\" id=\"postalCode-element\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<br>\t\t\t\r\n\t\t\t\t\r\n\r\n\r\n\r\n\t</div>\r\n\r\n\r\n\t<div class=\"col-sm-1\"></div>\r\n\r\n\r\n\t<div class=\"col-sm-4\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<app-checkout-items\r\n\t\t\t[cartItemsArray] = \"cartItems\"\r\n\t\t\t[currency] = \"currency\">\r\n\t\t\t</app-checkout-items>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<app-checkout-orderdetails\r\n\t\t\t[_cartTotalPrice] = \"cartTotalPrice\"\r\n\t\t\t[currency] = \"currency\">\r\n\t\t\t</app-checkout-orderdetails>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"text-center\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Buy now ${{coinPriceDisplay(roundPrice(cartTotalPrice, 2))}} {{currency.currency}}</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"errorMsg\">\r\n\t\t\t<br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t<div class=\"alert alert-danger text-center\">\r\n\t\t\t  {{errorMsg}}\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t  </ng-container>\r\n\t</div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_round_module__ = __webpack_require__("./src/app/modules/round.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(shoppingcart, _router, _fb, ngRedux) {
        this.shoppingcart = shoppingcart;
        this._router = _router;
        this._fb = _fb;
        this.ngRedux = ngRedux;
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
        //private currencyRate: number = 1;
        this.currency = {
            currency: " USD",
            forex: "USD/USD",
            rate: 1
        };
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
        this.createForm();
        this.initCard();
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
    CheckoutComponent.prototype.convertTotalPrice = function () {
        var _this = this;
        if (this.cartItems.length !== 0) {
            if (this.currency.rate == 1) {
                this.cartTotalPrice = 0;
                this.cartItems.map(function (x) {
                    _this.cartTotalPrice = _this.cartTotalPrice + x.price;
                });
            }
            else {
                this.cartTotalPrice = 0;
                this.cartItems.map(function (x) {
                    _this.cartTotalPrice = _this.cartTotalPrice + (Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(x.item.price * _this.currency.rate, 2) * x.qty);
                });
            }
        }
    };
    CheckoutComponent.prototype.getCurrencyRate = function () {
        var _this = this;
        this.currencySubscription = this.ngRedux.select()
            .subscribe(function (newCurrency) {
            //this.currencyRate = newCurrency.switchCurrencyReducer.currency.rate;
            _this.currency = newCurrency.switchCurrencyReducer.currency;
            _this.convertTotalPrice(); //converts the price using the selected currency
        });
    };
    CheckoutComponent.prototype.coinPriceDisplay = function (price) {
        return price.toFixed(2);
    };
    //this function is used so that the html template can access the round function module 
    CheckoutComponent.prototype.roundPrice = function (num, precision) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(num, precision);
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
                //this.cartTotalPrice = data.totalPrice;
                _this.getCurrencyRate();
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
        this.shoppingcart.makeCharge(token.id, this.currency)
            .subscribe(function (data) {
            if (data.success) {
                _this._router.navigate(['/order_confirmation/' + data.orderID]);
                console.log("charge success");
                //console.log(data.orderID);
            }
        }, function (err) {
            console.log(err.error.msg);
            _this.errorMsg = err.error.msg;
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
    CheckoutComponent.prototype.ngOnDestroy = function () {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_checkout_component__ = __webpack_require__("./src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_orderdetails_checkout_orderdetails_component__ = __webpack_require__("./src/app/checkout/checkout-orderdetails/checkout-orderdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkout_items_checkout_items_component__ = __webpack_require__("./src/app/checkout/checkout-items/checkout-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_check_auth_service__ = __webpack_require__("./src/app/services/check.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HeaderComponent } from '../header/header.component';
//import { HomepageComponent } from '../homepage/homepage.component';

//import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';





var checkoutRoutes = [
    //{ path: 'home', component: HomepageComponent},
    //{ path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'signup', component: SignupComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'purchase_history/order_details/:id', component: OrderDetailsComponent, canActivate: [isAuthGuard]},
    //{ path: 'purchase_history', component: PurchaseHistoryComponent, canActivate: [isAuthGuard]},
    //{ path: 'cart', component: ShoppingCartComponent},
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_5__checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_check_auth_service__["a" /* isAuthGuard */]] },
];
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(checkoutRoutes),
                __WEBPACK_IMPORTED_MODULE_10__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__checkout_orderdetails_checkout_orderdetails_component__["a" /* CheckoutOrderdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__checkout_items_checkout_items_component__["a" /* CheckoutItemsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_check_auth_service__["a" /* isAuthGuard */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    /* Set the fixed height of the footer here */\r\n    height: 30px;\r\n    background-color: #21313F;\r\n    padding-top: 5px;\r\n  }"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n<div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <font color=\"white\">Created by Kenny Leung.</font>\n      </div>\n</div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.font-size-really-small {\r\n  font-size: 10px;\r\n}\r\n\r\n.buttonlink {\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar {\r\n  min-height: 50px;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.navbar-default {\r\n    background-color: #00aace;\r\n    /* border-color: #00d2e7; */\r\n  }\r\n\r\n.navbar-default .navbar-brand {\r\n    color: #ffffff;\r\n  }\r\n\r\n.navbar-default .navbar-brand:hover,\r\n  .navbar-default .navbar-brand:focus {\r\n    color: #000000;\r\n  }\r\n\r\n.navbar-default .navbar-text {\r\n    color: #ffffff;\r\n  }\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n    color: #ffffff;\r\n  }\r\n\r\n.navbar-default .navbar-nav > li > a:hover,\r\n  .navbar-default .navbar-nav > li > a:focus {\r\n    color: #000000;\r\n  }\r\n\r\n.navbar-default .navbar-nav > .active > a,\r\n  .navbar-default .navbar-nav > .active > a:hover,\r\n  .navbar-default .navbar-nav > .active > a:focus {\r\n    color: #000000;\r\n    background-color: #00d2e7;\r\n  }\r\n\r\n.navbar-default .navbar-nav > .open > a,\r\n  .navbar-default .navbar-nav > .open > a:hover,\r\n  .navbar-default .navbar-nav > .open > a:focus {\r\n    color: #000000;\r\n    background-color: #00d2e7;\r\n  }\r\n\r\n.navbar-default .navbar-toggle {\r\n    border-color: #00d2e7;\r\n  }\r\n\r\n.navbar-default .navbar-toggle:hover,\r\n  .navbar-default .navbar-toggle:focus {\r\n    background-color: #00d2e7;\r\n  }\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #ffffff;\r\n  }\r\n\r\n.navbar-default .navbar-collapse,\r\n  .navbar-default .navbar-form {\r\n    border-color: #ffffff;\r\n  }\r\n\r\n.navbar-default .navbar-link {\r\n    color: #ffffff;\r\n  }\r\n\r\n.navbar-default .navbar-link:hover {\r\n    color: #000000;\r\n  }\r\n\r\n@media (max-width: 767px) {\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n      color: #ffffff;\r\n    }\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n      color: #000000;\r\n    }\r\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n      color: #000000;\r\n      background-color: #00d2e7;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n      <div class=\"page-header2\">\r\n          <h1>{{title}}</h1>\r\n      </div>\r\n  </div>\r\n</div> -->\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <a routerLink=\"/home\" class=\"navbar-brand\">MEANcart</a>\r\n        </div>\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <ng-container *ngIf = \"loggedIn\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">User Account<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a routerLink=\"/change_user_password\">Change user password</a></li>\r\n                        <li><a routerLink=\"/purchase_history\">Purchase History</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li><a class=\"buttonlink\" (click)=\"userLogout()\">Logout</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ng-container>\r\n            <ng-container *ngIf = \"!loggedIn\">\r\n                <li><a routerLink=\"/login\">Login</a></li>\r\n                <li><a routerLink=\"/signup\">Signup</a></li>\r\n            </ng-container>\r\n            <li class=\"dropdown\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Currency: {{selectedCurrency.currency}} <span class=\"font-size-really-small\">(1 {{selectedCurrency.currency}} = {{selectedCurrency.rate}} USD)</span><span class=\"caret\"></span></a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li><a class=\"buttonlink\" (click)=\"changeCurrency('CAD')\">CAD</a></li>\r\n                    <li><a class=\"buttonlink\" (click)=\"changeCurrency('USD')\">USD</a></li>\r\n                </ul>\r\n            </li>\r\n            <li id=\"cartLink\" name=\"cartLink\"><a routerLink=\"/cart\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>({{totalQuantity}})</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_userService, shoppingCart, _router, ngRedux) {
        this._userService = _userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.ngRedux = ngRedux;
        this.loggedIn = false;
        this.title = 'Bullion Coins Store';
        this.selectedCurrency = {
            currency: "USD",
            forex: "USD/USD",
            rate: 1
        };
        this.outputSelectedCurrency = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.checkAuthentication();
        this.checkCurrency();
    };
    HeaderComponent.prototype.checkCurrency = function () {
        var _this = this;
        this.shoppingCart.checkCurrency()
            .subscribe(function (data) {
            _this.selectedCurrency = data.selectedCurrency;
            _this.outputSelectedCurrency.emit(data.selectedCurrency);
            _this.ngRedux.dispatch({ type: _this.selectedCurrency });
        }, function (err) {
            console.log(err);
        }, function () { return console.log("check currency complete"); });
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
    HeaderComponent.prototype.changeCurrency = function (currency) {
        var _this = this;
        this.shoppingCart.changeCurrency(currency)
            .subscribe(function (data) {
            _this.selectedCurrency = data.selectedCurrency;
            _this.ngRedux.dispatch({ type: _this.selectedCurrency });
        }, function (err) { return console.log(err); }, function () { return console.log('change currency complete'); });
    };
    HeaderComponent.prototype.userLogout = function () {
        var _this = this;
        this._userService.logoutfn()
            .subscribe(function (data) {
            _this.ngRedux.dispatch({ type: "LOGOUT" });
            _this.checkAuthentication(); //Checks the authentication of the user to get the latest update so that Angular will re-render the page when it reloads the same URL.
            //this.checkCurrency();
            _this._router.navigate(["/logout"]);
        }, function (err) { return console.log('Internal server error'); }, function () { return console.log('logout complete'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], HeaderComponent.prototype, "totalQuantity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "outputSelectedCurrency", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["NgRedux"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_check_auth_service__ = __webpack_require__("./src/app/services/check.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_check_not_auth_service__ = __webpack_require__("./src/app/services/check.not.auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HomepageComponent } from '../homepage/homepage.component';
//import { LoginComponent } from '../login/login.component';
//import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
//import { SignupComponent } from '../signup/signup.component';
//import { ChangeUserPasswordComponent } from '../user-profile/change-user-password/change-user-password.component';
//import { LoginModule } from '../login/login.module';
//import { SignupModule } from '../signup/signup.module';



var headerRoutes = [];
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(headerRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__header_component__["a" /* HeaderComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_6__services_check_auth_service__["a" /* isAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_7__services_check_not_auth_service__["a" /* isNotAuthGuard */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage-about/homepage-about.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.jumbotron {\r\n    background-color: #00aace;\r\n    color: #ffffff;\r\n    font-family: Montserrat, sans-serif;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n.bg-skyblue {\r\n    background-color: #00aace;\r\n}\r\n\r\n.bg-grey {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\nh2 {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.panel-default {\r\n    border-color: #00aace;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\ncolor: #ffffff;\r\nbackground-color: #00aace;\r\nborder-color: #00aace;\r\n}\r\n\r\n.panel-heading {\r\npadding: 10px 15px;\r\nborder-bottom: 1px solid transparent;\r\nborder-top-left-radius: 3px;\r\nborder-top-right-radius: 3px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.img-thumbnail {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    height: auto;\r\n    padding: 4px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/homepage/homepage-about/homepage-about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid padding-top padding-bottom\">\r\n  <div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <h2>About MEANcart</h2>\r\n      <p>A simple shopping cart developed using MEAN(MongoDB, ExpressJS, Angular, NodeJS) stack.</p>\r\n    </div>\r\n  </div><br>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading text-center\">\r\n          Front End\r\n        </div>\r\n        <div class=\"panel-body text-center\">\r\n          <p>Angular 5</p>\r\n          <p>Bootstrap 3</p>\r\n          <p>HTML 5</p>\r\n          <p>CSS</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading text-center\">\r\n          Back End\r\n        </div>\r\n        <div class=\"panel-body text-center\">\r\n          <p>Express JS</p>\r\n          <p>Node JS (Heroku)</p>\r\n          <p>MongoDB (mLab)</p>\r\n          <p>REST API</p>\r\n          <p>Stripe JS v3 payment processing</p>\r\n          <p>Passport JS sign-in session</p>\r\n          <p>Connect-Mongo store session</p>\r\n          <p>CORS (Cross Origin Resource Sharing)</p>\r\n          <p>Bcrypt-Node JS password hashing</p>\r\n          <p>SendGrid email delivery service</p>   \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading text-center\">\r\n          Features\r\n        </div>\r\n        <div class=\"panel-body text-center\">\r\n          <p>User signup</p>\r\n          <p>User Login/Logout</p>\r\n          <p>Password reset</p>\r\n          <p>Add to shopping cart</p>\r\n          <p>Shopping cart auto price update</p>\r\n          <p>Credit card checkout</p>\r\n          <p>Purchase history</p>\r\n          <p>Change currency</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage-about/homepage-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageAboutComponent = /** @class */ (function () {
    function HomepageAboutComponent() {
    }
    HomepageAboutComponent.prototype.ngOnInit = function () {
    };
    HomepageAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage-about',
            template: __webpack_require__("./src/app/homepage/homepage-about/homepage-about.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage-about/homepage-about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageAboutComponent);
    return HomepageAboutComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage-intro/homepage-intro.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.jumbotron {\r\n    background-color: #00aace;\r\n    color: #ffffff;\r\n    font-family: Montserrat, sans-serif;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n.bg-skyblue {\r\n    background-color: #00aace;\r\n}\r\n\r\n.bg-grey {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\nh2 {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.panel-default {\r\n    border-color: #00aace;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\ncolor: #ffffff;\r\nbackground-color: #00aace;\r\nborder-color: #00aace;\r\n}\r\n\r\n.panel-heading {\r\npadding: 10px 15px;\r\nborder-bottom: 1px solid transparent;\r\nborder-top-left-radius: 3px;\r\nborder-top-right-radius: 3px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.img-thumbnail {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    height: auto;\r\n    padding: 4px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/homepage/homepage-intro/homepage-intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-skyblue\">\n  <div class=\"container bg-skyblue\">\n    <div class=\"jumbotron text-center bg-skyblue\">\n      <h1>MEANcart</h1> \n      <p><img src=\"/assets/images/cart.png\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Cart\" width=\"350\" height=\"350\"></p>\n      <p>A simple MEAN shopping cart</p>\n      <h5>Best viewed with the latest Chrome, Firefox, Opera or Microsoft Edge browsers.</h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage-intro/homepage-intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageIntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageIntroComponent = /** @class */ (function () {
    function HomepageIntroComponent() {
    }
    HomepageIntroComponent.prototype.ngOnInit = function () {
    };
    HomepageIntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage-intro',
            template: __webpack_require__("./src/app/homepage/homepage-intro/homepage-intro.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage-intro/homepage-intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageIntroComponent);
    return HomepageIntroComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage-shop/homepage-shop.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.jumbotron {\r\n    background-color: #00aace;\r\n    color: #ffffff;\r\n    font-family: Montserrat, sans-serif;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n.bg-skyblue {\r\n    background-color: #00aace;\r\n}\r\n\r\n.bg-grey {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\nh2 {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.panel-default {\r\n    border-color: #00aace;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\ncolor: #ffffff;\r\nbackground-color: #00aace;\r\nborder-color: #00aace;\r\n}\r\n\r\n.panel-heading {\r\npadding: 10px 15px;\r\nborder-bottom: 1px solid transparent;\r\nborder-top-left-radius: 3px;\r\nborder-top-right-radius: 3px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.img-thumbnail {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    height: auto;\r\n    padding: 4px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/homepage/homepage-shop/homepage-shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-grey padding-top padding-bottom\">\r\n  <div class=\"container bg-grey\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <h2>Shop</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div *ngFor = \"let coin of coinsArray; let i=index\" id=\"listOfCoins\" name=\"listOfCoins\">\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-body text-center\">\r\n              <img src=\"/assets/images/{{coin.imagePath}}\" alt=\"...\" class=\"img-responsive img-thumbnail\" style=\"width:75%\">\r\n              <h4>{{coin.title}}</h4>\r\n              <p>{{coin.description}}</p>\r\n              <p>${{coinPrice(coin.price)}} {{currency.currency}}</p>\r\n              <input type=\"number\" class=\"text-center\" style=\"width: 4em\" size=\"3\" min = \"1\" max = \"999\" step=\"1\" id = \"itemQty\" name = \"itemQty\" value = \"1\" maxlength = \"3\" #itemQty>\r\n              <button class=\"btn btn-primary\" role=\"button\" id=\"addItemButton\" name=\"addItemButton\" (click)=\"addItemToCart(coin._id, itemQty.value)\">Add</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage-shop/homepage-shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_coin_class__ = __webpack_require__("./src/app/objects/coin.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_currency_class__ = __webpack_require__("./src/app/objects/currency.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_round_module__ = __webpack_require__("./src/app/modules/round.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageShopComponent = /** @class */ (function () {
    function HomepageShopComponent() {
        this.addItemEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HomepageShopComponent.prototype.ngOnInit = function () {
    };
    //For display purposes this function will round and add 2 decimal places to a number
    HomepageShopComponent.prototype.coinPrice = function (price) {
        return (Object(__WEBPACK_IMPORTED_MODULE_3__modules_round_module__["a" /* round */])(price * this.currency.rate, 2)).toFixed(2);
    };
    HomepageShopComponent.prototype.addItemToCart = function (coinID, itemQty) {
        //emit the change back to the parent component
        this.addItemEmitter.emit({ coinID: coinID, itemQty: itemQty }); //since emit parameter only takes 1 parameter, we must pass parameter back as object
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__objects_coin_class__["a" /* coin */])
    ], HomepageShopComponent.prototype, "coinsArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__objects_currency_class__["a" /* currency */])
    ], HomepageShopComponent.prototype, "currency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HomepageShopComponent.prototype, "addItemEmitter", void 0);
    HomepageShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage-shop',
            template: __webpack_require__("./src/app/homepage/homepage-shop/homepage-shop.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage-shop/homepage-shop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageShopComponent);
    return HomepageShopComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header2 {\r\n    padding-bottom: 9px;\r\n    margin: 40px 0 20px;\r\n    /* border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.jumbotron {\r\n    background-color: #00aace;\r\n    color: #ffffff;\r\n    font-family: Montserrat, sans-serif;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n.bg-skyblue {\r\n    background-color: #00aace;\r\n}\r\n\r\n.bg-grey {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\nh2 {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.panel-default {\r\n    border-color: #00aace;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\ncolor: #ffffff;\r\nbackground-color: #00aace;\r\nborder-color: #00aace;\r\n}\r\n\r\n.panel-heading {\r\npadding: 10px 15px;\r\nborder-bottom: 1px solid transparent;\r\nborder-top-left-radius: 3px;\r\nborder-top-right-radius: 3px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.img-thumbnail {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    height: auto;\r\n    padding: 4px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n\r\n<app-homepage-intro></app-homepage-intro>\r\n\r\n<app-homepage-about></app-homepage-about>\r\n\r\n<app-homepage-shop\r\n[coinsArray] = \"coins\"\r\n[currency] = \"currency\"\r\n(addItemEmitter)=\"addItemToCart($event)\"\r\n></app-homepage-shop>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_load_coin_info_service__ = __webpack_require__("./src/app/services/load.coin.info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(loadCoinInfo, shoppingCart, ngRedux) {
        this.loadCoinInfo = loadCoinInfo;
        this.shoppingCart = shoppingCart;
        this.ngRedux = ngRedux;
        this.coins = null; //the coins array variable stores the coin objects
        this.total_qty = 0; //stores the number of items in the variable and this number is shown beside the shopping cart link
        this.total_price = 0; //stores the total price of the shopping cart and this number is shown beside the shopping cart link
        //private currencyRate: number = 1;
        this.currency = {
            currency: " USD",
            forex: "USD/USD",
            rate: 1
        };
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
            _this.getCurrencyRate();
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
    //this function checks if an input is an integer and greater than 0
    HomepageComponent.prototype.isValidInput = function (input) {
        if (Number(input) < 1 || !Number.isInteger(Number(input))) {
            return false;
        }
        return true;
    };
    HomepageComponent.prototype.getCurrencyRate = function () {
        var _this = this;
        this.currencySubscription = this.ngRedux.select()
            .subscribe(function (newCurrency) {
            _this.currency = newCurrency.switchCurrencyReducer.currency;
        });
    };
    // The addItemToCart function handles the button event, when clicked, it will add to the shopping cart and store the number of items in the shopping cart to the variable total_qty
    HomepageComponent.prototype.addItemToCart = function (event) {
        var _this = this;
        // Checks if the value entered is an integer and greater than 0
        if (!this.isValidInput(event.itemQty)) {
            console.log('invalid value');
        }
        else {
            this.shoppingCart.addItem(event.coinID, event.itemQty)
                .subscribe(function (data) {
                _this.total_qty = data.totalQuantity;
                _this.total_price = data.totalPrice;
            }, function (err) { return console.log('error adding coins to cart'); }, function () { return console.log('complete adding item to cart'); });
        }
    };
    HomepageComponent.prototype.ngOnDestroy = function () {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_load_coin_info_service__["a" /* LoadCoinInfoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_intro_homepage_intro_component__ = __webpack_require__("./src/app/homepage/homepage-intro/homepage-intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_about_homepage_about_component__ = __webpack_require__("./src/app/homepage/homepage-about/homepage-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__homepage_shop_homepage_shop_component__ = __webpack_require__("./src/app/homepage/homepage-shop/homepage-shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_load_coin_info_service__ = __webpack_require__("./src/app/services/load.coin.info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 //this is a container
 //this is a presentation component
 //this is a presentation component
 //this is a presentation component



var homepageRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(homepageRoutes),
                __WEBPACK_IMPORTED_MODULE_10__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__["a" /* HomepageComponent */], __WEBPACK_IMPORTED_MODULE_5__homepage_intro_homepage_intro_component__["a" /* HomepageIntroComponent */], __WEBPACK_IMPORTED_MODULE_6__homepage_about_homepage_about_component__["a" /* HomepageAboutComponent */], __WEBPACK_IMPORTED_MODULE_7__homepage_shop_homepage_shop_component__["a" /* HomepageShopComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_load_coin_info_service__["a" /* LoadCoinInfoService */],
                __WEBPACK_IMPORTED_MODULE_8__services_shopping_cart_service__["a" /* ShoppingCartService */]
            ]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/invoice/invoice-details-products/invoice-details-products.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/invoice/invoice-details-products/invoice-details-products.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-condensed table-bordered no-margin-bottom\">\r\n  <thead>\r\n      <tr class=\"active\">\r\n          <th>Product</th>\r\n          <th>Price</th>\r\n          <th class=\"text-right\">Quantity</th>\r\n          <th class=\"text-right\">Total</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <ng-container *ngFor=\"let order of orderedProducts\">\r\n        <tr>\r\n          <td class=\"col-sm-6\">\r\n              <div class=\"media\">\r\n                  <div class=\"media-left\">\r\n                      <img class=\"media-object\" src=\"/assets/images/{{order.item.imagePath}}\" style=\"width: 80px; height: 80px;\">\r\n                  </div>\r\n                  <div class=\"media-body\">\r\n                      {{order.item.title}}\r\n                  </div>\r\n              </div>\r\n          </td>\r\n          <td class=\"col-sm-2 text-right\">\r\n            ${{coinPriceDisplay(roundPrice(order.item.price, 2))}} {{currency.currency}}\r\n\r\n          </td>\r\n          <td class=\"col-sm-2 text-right\">\r\n            {{order.qty}}\r\n          </td>\r\n          <td class=\"col-sm-2 text-right\">\r\n            ${{coinPriceDisplay(roundPrice(order.item.price * order.qty, 2))}} {{currency.currency}}\r\n          </td>\r\n      </tr>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./src/app/invoice/invoice-details-products/invoice-details-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceDetailsProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_currency_class__ = __webpack_require__("./src/app/objects/currency.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_round_module__ = __webpack_require__("./src/app/modules/round.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceDetailsProductsComponent = /** @class */ (function () {
    function InvoiceDetailsProductsComponent() {
    }
    InvoiceDetailsProductsComponent.prototype.ngOnInit = function () {
    };
    InvoiceDetailsProductsComponent.prototype.coinPriceDisplay = function (price) {
        return price.toFixed(2);
    };
    //this function is used so that the html template can access the round function module 
    InvoiceDetailsProductsComponent.prototype.roundPrice = function (num, precision) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__modules_round_module__["a" /* round */])(num, precision);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InvoiceDetailsProductsComponent.prototype, "orderedProducts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__objects_currency_class__["a" /* currency */])
    ], InvoiceDetailsProductsComponent.prototype, "currency", void 0);
    InvoiceDetailsProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-details-products',
            template: __webpack_require__("./src/app/invoice/invoice-details-products/invoice-details-products.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice-details-products/invoice-details-products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceDetailsProductsComponent);
    return InvoiceDetailsProductsComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n      <strong>Shipping Address</strong><br><br>\r\n      <strong>{{shipToName}}</strong><br>\r\n      {{shipToAddress.addressLine1}}<br>\r\n      {{shipToAddress.addressLine2}}<br>\r\n      {{shipToAddress.addressCity}}, {{shipToAddress.addressState}}, {{shipToAddress.addressZip}}<br>\r\n      {{shipToAddress.addressCountry}}<br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceDetailsShippingaddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_address_class__ = __webpack_require__("./src/app/objects/address.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceDetailsShippingaddressComponent = /** @class */ (function () {
    function InvoiceDetailsShippingaddressComponent() {
    }
    InvoiceDetailsShippingaddressComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__objects_address_class__["a" /* address */])
    ], InvoiceDetailsShippingaddressComponent.prototype, "shipToAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InvoiceDetailsShippingaddressComponent.prototype, "shipToName", void 0);
    InvoiceDetailsShippingaddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-details-shippingaddress',
            template: __webpack_require__("./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceDetailsShippingaddressComponent);
    return InvoiceDetailsShippingaddressComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice-details-total/invoice-details-total.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/invoice/invoice-details-total/invoice-details-total.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-condensed table-bordered\">\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"text-right col-sm-10\">Subtotal</td>\r\n      <td class=\"text-right col-sm-2\">${{coinPriceDisplay(roundPrice(orderSubTotal, 2))}} {{currency.currency}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"text-right col-sm-10\">Shipping</td>\r\n      <td class=\"text-right col-sm-2\">$0</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"text-right col-sm-10\"><strong>Grand Total</strong></td>\r\n      <td class=\"text-right col-sm-2\"><strong>${{coinPriceDisplay(roundPrice(orderSubTotal, 2))}} {{currency.currency}}</strong></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/invoice/invoice-details-total/invoice-details-total.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceDetailsTotalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_currency_class__ = __webpack_require__("./src/app/objects/currency.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_round_module__ = __webpack_require__("./src/app/modules/round.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceDetailsTotalComponent = /** @class */ (function () {
    function InvoiceDetailsTotalComponent() {
    }
    InvoiceDetailsTotalComponent.prototype.ngOnInit = function () {
    };
    InvoiceDetailsTotalComponent.prototype.coinPriceDisplay = function (price) {
        return price.toFixed(2);
    };
    //this function is used so that the html template can access the round function module 
    InvoiceDetailsTotalComponent.prototype.roundPrice = function (num, precision) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__modules_round_module__["a" /* round */])(num, precision);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InvoiceDetailsTotalComponent.prototype, "orderSubTotal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__objects_currency_class__["a" /* currency */])
    ], InvoiceDetailsTotalComponent.prototype, "currency", void 0);
    InvoiceDetailsTotalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-details-total',
            template: __webpack_require__("./src/app/invoice/invoice-details-total/invoice-details-total.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice-details-total/invoice-details-total.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceDetailsTotalComponent);
    return InvoiceDetailsTotalComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_details_shippingaddress_invoice_details_shippingaddress_component__ = __webpack_require__("./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_details_products_invoice_details_products_component__ = __webpack_require__("./src/app/invoice/invoice-details-products/invoice-details-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_details_total_invoice_details_total_component__ = __webpack_require__("./src/app/invoice/invoice-details-total/invoice-details-total.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invoice_details_shippingaddress_invoice_details_shippingaddress_component__["a" /* InvoiceDetailsShippingaddressComponent */],
                __WEBPACK_IMPORTED_MODULE_3__invoice_details_products_invoice_details_products_component__["a" /* InvoiceDetailsProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__invoice_details_total_invoice_details_total_component__["a" /* InvoiceDetailsTotalComponent */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__invoice_details_shippingaddress_invoice_details_shippingaddress_component__["a" /* InvoiceDetailsShippingaddressComponent */],
                __WEBPACK_IMPORTED_MODULE_3__invoice_details_products_invoice_details_products_component__["a" /* InvoiceDetailsProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__invoice_details_total_invoice_details_total_component__["a" /* InvoiceDetailsTotalComponent */]
            ]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ }),

/***/ "./src/app/login/login-form/login-form.component.css":
/***/ (function(module, exports) {

module.exports = ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top padding-bottom\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-4 col-sm-offset-4\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title text-center\">Please sign in</h3>\r\n       </div>\r\n        <div class=\"panel-body\">\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\" id=\"loginForm\" name=\"loginForm\">\r\n              <div class=\"form-group\">\r\n                <label>Username</label>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Username\" id=\"username\" name=\"username\" formControlName=\"username\" required>\r\n                  <div class=\"text-danger\">\r\n                    {{usernameMsg}}\r\n                  </div>\r\n  \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Password</label>\r\n              <input class=\"form-control\" type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" formControlName=\"password\" required>\r\n                <div class=\"text-danger\">\r\n                  {{passwordMsg}}\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Login</button>\r\n        </form>\r\n        <ng-container *ngIf=\"errorMsg\">\r\n          <br>\r\n          <div class=\"alert alert-danger text-center\">\r\n            {{errorMsg}}\r\n          </div>\r\n        </ng-container>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2 col-sm-offset-4 text-left\">\r\n      Click <a routerLink=\"/signup\">here</a> to sign up\r\n    </div>\r\n    <div class=\"col-sm-2 text-right\">\r\n      <a routerLink=\"/forgot\">Forgot password?</a>\r\n    </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(fb) {
        this.fb = fb;
        this.usernameMsg = "";
        this.passwordMsg = "";
        this.loginEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginFormComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginFormComponent.prototype.clearMsg = function () {
        this.usernameMsg = "";
        this.passwordMsg = "";
    };
    LoginFormComponent.prototype.login = function (_loginForm) {
        this.clearMsg();
        this.errorMsg = "";
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
            var username = _loginForm.controls.username.value;
            var password = _loginForm.controls.password.value;
            this.loginEmitter.emit({ username: username, password: password });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoginFormComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "loginEmitter", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("./src/app/login/login-form/login-form.component.html"),
            styles: [__webpack_require__("./src/app/login/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<app-login-form\r\n[errorMsg] = \"errorMsg\"\r\n(loginEmitter)=\"login($event)\"\r\n></app-login-form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, shoppingCart, _router, ngRedux) {
        this.userService = userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.ngRedux = ngRedux;
        this.errorMsg = "";
        this.redirectURL = "";
        this.total_qty = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getTotalQuantity();
    };
    LoginComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        this.errorMsg = "";
        this.userService.loginfn(event.username, event.password)
            .subscribe(function (data) {
            var redirect = "";
            _this.ngRedux.dispatch({ type: "LOGIN" });
            redirect = sessionStorage.getItem('redirectURL') || "/home";
            _this._router.navigate([redirect]);
            sessionStorage.removeItem('redirectURL');
        }, function (err) {
            _this.errorMsg = err.error.msg;
        }, function () { return console.log('login complete'); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["NgRedux"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__ = __webpack_require__("./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__password_reset_forgot_user_password_forgot_user_password_component__ = __webpack_require__("./src/app/password-reset/forgot-user-password/forgot-user-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_check_not_auth_service__ = __webpack_require__("./src/app/services/check.not.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HeaderComponent } from '../header/header.component';
//import { HomepageComponent } from '../homepage/homepage.component';


//import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';

//import { ChangeUserPasswordComponent } from '../change-user-password/change-user-password.component';
//import { OrderDetailsComponent } from '../order-details/order-details.component';
//import { CheckoutComponent } from '../checkout/checkout.component';
//import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';





var loginRoutes = [
    //{ path: 'home', component: HomepageComponent},
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_check_not_auth_service__["a" /* isNotAuthGuard */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_check_not_auth_service__["a" /* isNotAuthGuard */]] },
    //{ path: 'purchase_history/order_details/:id', component: OrderDetailsComponent, canActivate: [isAuthGuard]},
    //{ path: 'purchase_history', component: PurchaseHistoryComponent, canActivate: [isAuthGuard]},
    //{ path: 'cart', component: ShoppingCartComponent},
    //{ path: 'checkout', component: CheckoutComponent, canActivate: [isAuthGuard]},
    //{ path: 'change_user_password', component: ChangeUserPasswordComponent, canActivate: [isAuthGuard]},
    //{ path: 'order_confirmation/:id', component: OrderConfirmationComponent, canActivate: [isAuthGuard]},
    //{ path: 'reset/:token', component: ResetPasswordComponent},
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_8__password_reset_forgot_user_password_forgot_user_password_component__["a" /* ForgotUserPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_check_not_auth_service__["a" /* isNotAuthGuard */]] }
    //{ path: '', redirectTo: '/home', pathMatch: 'full'}
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(loginRoutes),
                __WEBPACK_IMPORTED_MODULE_12__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__["a" /* LoginFormComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__services_shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_11__services_check_not_auth_service__["a" /* isNotAuthGuard */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<div class=\"row\">\r\n  <div class=\"alert alert-success text-center col-sm-12\">\r\n    You are logged out.\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(shoppingCart) {
        this.shoppingCart = shoppingCart;
        this.total_qty = 0;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.getTotalQuantity();
    };
    LogoutComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_check_not_auth_service__ = __webpack_require__("./src/app/services/check.not.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HttpClientModule } from '@angular/common/http';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';




var logoutRoutes = [
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_3__logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_check_not_auth_service__["a" /* isNotAuthGuard */]] }
];
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
    }
    LogoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(logoutRoutes),
                __WEBPACK_IMPORTED_MODULE_6__header_header_module__["a" /* HeaderModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__logout_component__["a" /* LogoutComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_check_not_auth_service__["a" /* isNotAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], LogoutModule);
    return LogoutModule;
}());



/***/ }),

/***/ "./src/app/modules/round.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = round;
//This function rounds a floating point number to 2 decimal places
function round(number, precision) {
    var shift = function (number, precision, reverseShift) {
        if (reverseShift) {
            precision = -precision;
        }
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
}


/***/ }),

/***/ "./src/app/objects/address.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return address; });
var address = /** @class */ (function () {
    function address() {
    }
    return address;
}());



/***/ }),

/***/ "./src/app/objects/coin.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coin; });
var coin = /** @class */ (function () {
    function coin() {
    }
    return coin;
}());



/***/ }),

/***/ "./src/app/objects/currency.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currency; });
var currency = /** @class */ (function () {
    function currency() {
    }
    return currency;
}());



/***/ }),

/***/ "./src/app/objects/domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMAIN; });
var DOMAIN = {
    url: "https://cstoreapi.herokuapp.com" // http://localhost:3333 , https://cstoreapi.herokuapp.com;
};


/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.component.css":
/***/ (function(module, exports) {

module.exports = ".no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<div class=\"container padding-top padding-bottom\">\r\n  <fieldset>\r\n    <legend>Your order has been received.</legend>\r\n  </fieldset>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      Your order ID is {{orderID}}\r\n    </div>\r\n  </div><br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-invoice-details-shippingaddress \r\n      [shipToAddress] = \"shippingAddress\"\r\n      [shipToName] = \"name\"\r\n      ></app-invoice-details-shippingaddress>\r\n    </div>\r\n  </div>\r\n\r\n  <app-invoice-details-products\r\n  [currency] = \"currency\"\r\n  [orderedProducts] = \"orders\">\r\n  </app-invoice-details-products>\r\n\r\n  <app-invoice-details-total\r\n  [currency] = \"currency\"\r\n  [orderSubTotal] = \"subTotal\">\r\n  </app-invoice-details-total>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderConfirmationComponent = /** @class */ (function () {
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
        this.currency = {
            currency: " USD",
            forex: "USD/USD",
            rate: 1
        };
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
            _this.currency = data.orderDetails.currency;
            //console.log(data.orderDetails);
            //console.log(this.currency);
        }, function (err) { }, function () { return console.log("order details complete"); });
    };
    OrderConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-confirmation',
            template: __webpack_require__("./src/app/order-confirmation/order-confirmation.component.html"),
            styles: [__webpack_require__("./src/app/order-confirmation/order-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OrderConfirmationComponent);
    return OrderConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_confirmation_order_confirmation_component__ = __webpack_require__("./src/app/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_check_auth_service__ = __webpack_require__("./src/app/services/check.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__invoice_invoice_module__ = __webpack_require__("./src/app/invoice/invoice.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HeaderComponent } from '../header/header.component';
//import { HomepageComponent } from '../homepage/homepage.component';
//import { LoginComponent } from '../login/login.component';
//import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';
//import { SignupComponent } from '../signup/signup.component';
//import { ChangeUserPasswordComponent } from '../change-user-password/change-user-password.component';
//import { OrderDetailsComponent } from '../order-details/order-details.component';
//import { CheckoutComponent } from '../checkout/checkout.component';

//import { InvoiceDetailsShippingaddressComponent } from '../invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component';
//import { InvoiceDetailsProductsComponent } from '../invoice/invoice-details-products/invoice-details-products.component';
//import { InvoiceDetailsTotalComponent } from '../invoice/invoice-details-total/invoice-details-total.component';
//import { ForgotUserPasswordComponent } from '../password-reset/forgot-user-password/forgot-user-password.component';





var orderConfirmationRoutes = [
    //{ path: 'home', component: HomepageComponent},
    //{ path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'signup', component: SignupComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'purchase_history/order_details/:id', component: OrderDetailsComponent, canActivate: [isAuthGuard]},
    //{ path: 'purchase_history', component: PurchaseHistoryComponent, canActivate: [isAuthGuard]},
    //{ path: 'cart', component: ShoppingCartComponent},
    //{ path: 'checkout', component: CheckoutComponent, canActivate: [isAuthGuard]},
    //{ path: 'change_user_password', component: ChangeUserPasswordComponent, canActivate: [isAuthGuard]},
    { path: 'order_confirmation/:id', component: __WEBPACK_IMPORTED_MODULE_4__order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_check_auth_service__["a" /* isAuthGuard */]] },
];
var OrderConfirmationModule = /** @class */ (function () {
    function OrderConfirmationModule() {
    }
    OrderConfirmationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(orderConfirmationRoutes),
                __WEBPACK_IMPORTED_MODULE_8__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_9__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_6__services_shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_7__services_check_auth_service__["a" /* isAuthGuard */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], OrderConfirmationModule);
    return OrderConfirmationModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Page Not Found\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/password-reset/forgot-user-password/forgot-user-password.component.css":
/***/ (function(module, exports) {

module.exports = ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/password-reset/forgot-user-password/forgot-user-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n  <div class=\"container padding-top padding-bottom\">\n    <ng-container *ngIf=\"successMsg\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"alert alert-info text-center\">\n            {{successMsg}}\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"errorMsg\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"alert alert-danger text-center\">\n            {{errorMsg}}\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  <div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title text-center\">Forgot Password</h3>\n       </div>\n        <div class=\"panel-body\">\n          <form [formGroup]=\"forgotPwForm\" (ngSubmit)=\"resetPassword(forgotPwForm)\" id=\"forgotPwForm\" name=\"forgotPwForm\">\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Email\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n                  <div class=\"text-danger\">\n                    {{emailMsg}}\n                  </div>\n            </div>\n            <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </form>\n        </div>\n    </div>\n  </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/password-reset/forgot-user-password/forgot-user-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotUserPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotUserPasswordComponent = /** @class */ (function () {
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
        //console.log(_forgotPwForm);
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
                //console.log(data);
                _this.successMsg = "An email has been sent to " + _forgotPwForm.value.email + " to reset your password";
                _this.forgotPwForm.reset();
            }, function (err) {
                _this.errorMsg = err.error.msg;
            }, function () { return console.log('reset password submitted'); });
        }
    };
    ForgotUserPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-user-password',
            template: __webpack_require__("./src/app/password-reset/forgot-user-password/forgot-user-password.component.html"),
            styles: [__webpack_require__("./src/app/password-reset/forgot-user-password/forgot-user-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ForgotUserPasswordComponent);
    return ForgotUserPasswordComponent;
}());



/***/ }),

/***/ "./src/app/password-reset/password-reset.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_user_password_forgot_user_password_component__ = __webpack_require__("./src/app/password-reset/forgot-user-password/forgot-user-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__ = __webpack_require__("./src/app/password-reset/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_check_not_auth_service__ = __webpack_require__("./src/app/services/check.not.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HeaderComponent } from '../header/header.component';
//import { HomepageComponent } from '../homepage/homepage.component';
//import { LoginComponent } from '../login/login.component';
//import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';
//import { SignupComponent } from '../signup/signup.component';
//import { ChangeUserPasswordComponent } from '../change-user-password/change-user-password.component';
//import { OrderDetailsComponent } from '../order-details/order-details.component';
//import { CheckoutComponent } from '../checkout/checkout.component';
//import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';






var passwordResetRoutes = [
    //{ path: 'home', component: HomepageComponent},
    //{ path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'signup', component: SignupComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'purchase_history/order_details/:id', component: OrderDetailsComponent, canActivate: [isAuthGuard]},
    //{ path: 'purchase_history', component: PurchaseHistoryComponent, canActivate: [isAuthGuard]},
    //{ path: 'cart', component: ShoppingCartComponent},
    //{ path: 'checkout', component: CheckoutComponent, canActivate: [isAuthGuard]},
    //{ path: 'change_user_password', component: ChangeUserPasswordComponent, canActivate: [isAuthGuard]},
    //{ path: 'order_confirmation/:id', component: OrderConfirmationComponent, canActivate: [isAuthGuard]},
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__["a" /* ResetPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_check_not_auth_service__["a" /* isNotAuthGuard */]] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_5__forgot_user_password_forgot_user_password_component__["a" /* ForgotUserPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_check_not_auth_service__["a" /* isNotAuthGuard */]] },
];
var PasswordResetModule = /** @class */ (function () {
    function PasswordResetModule() {
    }
    PasswordResetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(passwordResetRoutes),
                __WEBPACK_IMPORTED_MODULE_10__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__forgot_user_password_forgot_user_password_component__["a" /* ForgotUserPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_9__services_check_not_auth_service__["a" /* isNotAuthGuard */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], PasswordResetModule);
    return PasswordResetModule;
}());



/***/ }),

/***/ "./src/app/password-reset/reset-password/reset-password.component.css":
/***/ (function(module, exports) {

module.exports = ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/password-reset/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top padding-bottom\">\n  <ng-container *ngIf=\"tokenValid; else elseBlock\">\n  <div class=\"row\">\n  <div class=\"col-sm-4 col-sm-offset-4\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Reset Password</h3>\n       </div>\n        <div class=\"panel-body\">\n          <form [formGroup]=\"resetPwForm\" (ngSubmit)=\"resetPassword(resetPwForm)\" id=\"resetPwForm\" name=\"resetPwForm\">\n            <div class=\"form-group\">\n              <label>New Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" formControlName=\"newPw\" required>\n              <div class=\"text-danger\">\n                {{newPwMsg}}\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Confirm Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPw\" name=\"confirmPw\" formControlName=\"confirmPw\" required>\n                <div class=\"text-danger\">\n                  {{confirmPwMsg}}\n                </div>\n            </div>\n            <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </form>\n        <ng-container *ngIf=\"errorMsg\">\n          <br>\n          <div class=\"alert alert-danger text-center\">\n            {{errorMsg}}\n          </div>\n        </ng-container>\n        </div>\n    </div>\n  </div>\n  </div>\n  </ng-container>\n  <ng-template #elseBlock>\n    <div class=\"row\">\n    <ng-container *ngIf=\"errorMsg\">\n      <div class=\"alert alert-danger text-center col-sm-12\">\n        {{errorMsg}}. Click <a routerLink=\"/home\">here</a> to go back to the main page.\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"successMsg\">\n        <div class=\"alert alert-success text-center col-sm-12\">\n          {{successMsg}}. Click <a routerLink=\"/home\">here</a> to go back to the main page.\n        </div>\n      </ng-container>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/password-reset/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("./src/app/password-reset/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("./src/app/password-reset/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/purchase-history/order-details/order-details.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-primary>.panel-heading {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n\r\n.panel-heading {\r\n    padding: 3px 10px;\r\n    border-bottom: 1px solid transparent;\r\n    border-top-left-radius: 3px;\r\n    border-top-right-radius: 3px;\r\n}\r\n\r\n.no-margin-bottom {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/purchase-history/order-details/order-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<div class=\"container padding-top padding-bottom\"> \r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n            <h3>Order Details</h3>\r\n        </div>\r\n    </div><br>\r\n    <ng-container *ngIf=\"orderExist; else elseBlock\">\r\n        <app-invoice-details-shippingaddress \r\n        [shipToAddress] = \"shippingAddress\"\r\n        [shipToName] = \"name\"\r\n        ></app-invoice-details-shippingaddress>\r\n\r\n        <app-invoice-details-products\r\n        [currency] = \"currency\"\r\n        [orderedProducts] = \"orders\">\r\n        </app-invoice-details-products>\r\n        \r\n        <app-invoice-details-total\r\n        [currency] = \"currency\"\r\n        [orderSubTotal] = \"subTotal\">\r\n        </app-invoice-details-total>\r\n    </ng-container>\r\n    <ng-template #elseBlock>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center text-danger\">\r\n                <p>Order does not exist</p>\r\n            </div>\r\n        </div><br>\r\n    </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/purchase-history/order-details/order-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(user, shoppingCart, _activatedRoute) {
        var _this = this;
        this.user = user;
        this.shoppingCart = shoppingCart;
        this._activatedRoute = _activatedRoute;
        this.orderID = '';
        this.orderExist = true;
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
        this.currency = {
            currency: " USD",
            forex: "USD/USD",
            rate: 1
        };
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
            _this.orderExist = true;
            _this.name = data.orderDetails.name;
            _this.shippingAddress = data.orderDetails.address;
            _this.orders = data.orderDetails.cart.items;
            _this.subTotal = data.orderDetails.cart.totalPrice;
            _this.date = data.orderDetails.date;
            _this.currency = data.orderDetails.currency;
            //console.log(data.orderDetails);
        }, function (err) {
            console.log(err);
            _this.orderExist = false;
        }, function () { return console.log("order details complete"); });
    };
    OrderDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__("./src/app/purchase-history/order-details/order-details.component.html"),
            styles: [__webpack_require__("./src/app/purchase-history/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/purchase-history/purchase-history.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseHistoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchase_history_purchase_history_component__ = __webpack_require__("./src/app/purchase-history/purchase-history/purchase-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details_component__ = __webpack_require__("./src/app/purchase-history/order-details/order-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__ = __webpack_require__("./src/app/services/check.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__invoice_invoice_module__ = __webpack_require__("./src/app/invoice/invoice.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HeaderComponent } from '../header/header.component';
//import { HomepageComponent } from '../homepage/homepage.component';
//import { LoginComponent } from '../login/login.component';

//import { SignupComponent } from '../signup/signup.component';
//import { ChangeUserPasswordComponent } from '../change-user-password/change-user-password.component';

//import { InvoiceDetailsShippingaddressComponent } from '../invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component';
//import { InvoiceDetailsProductsComponent } from '../invoice/invoice-details-products/invoice-details-products.component';
//import { InvoiceDetailsTotalComponent } from '../invoice/invoice-details-total/invoice-details-total.component';
//import { CheckoutComponent } from '../checkout/checkout.component';
//import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';
//import { ForgotUserPasswordComponent } from '../password-reset/forgot-user-password/forgot-user-password.component';





var purchaseHistoryRoutes = [
    //{ path: 'home', component: HomepageComponent},
    //{ path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'signup', component: SignupComponent, canActivate: [isNotAuthGuard]},
    { path: 'purchase_history/order_details/:id', component: __WEBPACK_IMPORTED_MODULE_5__order_details_order_details_component__["a" /* OrderDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__["a" /* isAuthGuard */]] },
    { path: 'purchase_history', component: __WEBPACK_IMPORTED_MODULE_4__purchase_history_purchase_history_component__["a" /* PurchaseHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__["a" /* isAuthGuard */]] },
];
var PurchaseHistoryModule = /** @class */ (function () {
    function PurchaseHistoryModule() {
    }
    PurchaseHistoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(purchaseHistoryRoutes),
                __WEBPACK_IMPORTED_MODULE_9__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_10__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__purchase_history_purchase_history_component__["a" /* PurchaseHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__order_details_order_details_component__["a" /* OrderDetailsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__services_shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__["a" /* isAuthGuard */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], PurchaseHistoryModule);
    return PurchaseHistoryModule;
}());



/***/ }),

/***/ "./src/app/purchase-history/purchase-history/purchase-history.component.css":
/***/ (function(module, exports) {

module.exports = ".no-margin {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.borderless td, .borderless th {\r\n    border: none;\r\n}\r\n\r\n.left-border {\r\n    border-left: 1px solid #ddd\r\n}\r\n\r\n.right-border {\r\n    border-right: 1px solid #ddd\r\n}\r\n\r\n.vertical-middle {\r\n    vertical-align: middle;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/purchase-history/purchase-history/purchase-history.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<div class=\"container padding-top padding-bottom\">\r\n        <div class=\"row\">\r\n                <div class=\"col-sm-12 text-center\">\r\n                    <h3>Purchase History</h3>\r\n                </div>\r\n            </div><br>\r\n\r\n        <div *ngFor = \"let order of orders\">\r\n\r\n                <nav><a routerLink=\"/purchase_history/order_details/{{order._id}}\">Order Details</a></nav>\r\n\r\n\r\n                        \r\n                            <table class=\"table table-condensed table-bordered\">\r\n                                <thead>\r\n                                    <tr class=\"active\">\r\n                                        <th>Product</th>\r\n                                        <th>Quantity</th>\r\n                                        <th>Price</th>\r\n                                        <th>Date</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <ng-container *ngFor = \"let item of order.cart.items\">\r\n                                    <tr>\r\n                                        <td class=\"col-sm-4\">\r\n                                            {{item.item.title}}\r\n                                        </td>\r\n                                        <td class=\"col-sm-2\">\r\n                                            {{item.qty}}\r\n                                        </td>\r\n                                        <td class=\"col-sm-3\">\r\n                                            ${{item.item.price}} {{order.currency.currency}}\r\n                                            </td>\r\n                                        <td class=\"col-sm-3\">\r\n                                            {{order.date}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    </ng-container>\r\n                                </tbody>\r\n                            </table>\r\n\r\n                        \r\n\r\n        </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/purchase-history/purchase-history/purchase-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchaseHistoryComponent = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase-history',
            template: __webpack_require__("./src/app/purchase-history/purchase-history/purchase-history.component.html"),
            styles: [__webpack_require__("./src/app/purchase-history/purchase-history/purchase-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PurchaseHistoryComponent);
    return PurchaseHistoryComponent;
}());



/***/ }),

/***/ "./src/app/services/check.auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var isAuthGuard = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], isAuthGuard);
    return isAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/check.not.auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var isNotAuthGuard = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], isNotAuthGuard);
    return isNotAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/load.coin.info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadCoinInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_domain__ = __webpack_require__("./src/app/objects/domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoadCoinInfoService = /** @class */ (function () {
    function LoadCoinInfoService(_http) {
        this._http = _http;
    }
    LoadCoinInfoService.prototype.getCoins = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/get_coin_info')
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    LoadCoinInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoadCoinInfoService);
    return LoadCoinInfoService;
}());



/***/ }),

/***/ "./src/app/services/shopping.cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_domain__ = __webpack_require__("./src/app/objects/domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(_http) {
        this._http = _http;
    }
    ShoppingCartService.prototype.getCartItems = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/shopping_cart', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.getTotalQuantity = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/get_total_quantity', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.addItem = function (coinID, itemQty) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var bodyString = 'itemQty=' + itemQty;
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/add_to_cart/' + coinID, bodyString, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.reduceOneQuantity = function (coinID) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/reduce_one/' + coinID, { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.removeItem = function (coinID) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/remove_all/' + coinID, { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.cartCheckout = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/checkout', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.makeCharge = function (cardToken, currency) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var bodyString = 'stripeToken=' + cardToken + '&currencySymbol=' + currency.currency + '&currencyForex=' + currency.forex + '&currencyRate=' + currency.rate;
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/make_charge', bodyString, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.updateCart = function (updateCart) {
        var bodyString = JSON.stringify(updateCart);
        //console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/cart_update', bodyString, { headers: headers, withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.changeCurrency = function (currency) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/change_currency/' + currency, { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService.prototype.checkCurrency = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__objects_domain__["a" /* DOMAIN */].url + '/check_currency/', { withCredentials: true })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_domain__ = __webpack_require__("./src/app/objects/domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.isLoggedIn = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/isauthenticated', { withCredentials: true });
    };
    UserService.prototype.logoutfn = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/logout', { withCredentials: true });
    };
    UserService.prototype.loginfn = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var creds = 'uname=' + username + '&password=' + password;
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/authenticate', creds, { headers: headers, withCredentials: true });
    };
    UserService.prototype.signupfn = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + newUser.fname + '&lname=' + newUser.lname + '&email=' + newUser.email + '&uname=' + newUser.username + '&password=' + newUser.password;
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/adduser', creds, { headers: headers, withCredentials: true });
    };
    UserService.prototype.getPurchaseHistory = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/purchase_history', { withCredentials: true });
    };
    UserService.prototype.getOrderDetails = function (orderID) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/order_details/' + orderID, { withCredentials: true });
    };
    UserService.prototype.changePassword = function (currentPw, newPw) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'currentPassword=' + currentPw + '&newPassword=' + newPw;
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/change_password', creds, { headers: headers, withCredentials: true });
    };
    UserService.prototype.forgotPassword = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var body = 'email=' + email;
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/forgot_password', body, { headers: headers, withCredentials: true });
    };
    UserService.prototype.checkPwToken = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/check_token/' + token, { headers: headers, withCredentials: true });
    };
    UserService.prototype.resetPassword = function (newPw, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var body = 'newPassword=' + newPw;
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__objects_domain__["a" /* DOMAIN */].url + '/user/reset_password/' + token, body, { headers: headers, withCredentials: true });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports) {

module.exports = ".buttonlink {\r\n    cursor: pointer;\r\n}\r\n\r\n.padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header\r\n[totalQuantity] = \"total_qty\"\r\n(outputSelectedCurrency) = \"shoppingCartItems($event)\">\r\n</app-header>\r\n\r\n<ng-container *ngIf = \"total_qty!=0\"> <!-- if there are items in shopping cart -->\r\n    <div class=\"container padding-top padding-bottom\">\r\n        <div class=\"row text-center\">\r\n            <h3>Shopping Cart</h3>\r\n        </div><br>\r\n        <form [formGroup]=\"updateCartForm\">\r\n            <div formArrayName=\"carts\">\r\n            <table class=\"table table-hover table-condensed\">\r\n                <thead>\r\n                    <tr class=\"active\">\r\n                        <th>Product</th>\r\n                        <th>Quantity</th>\r\n                        <th class=\"text-right\">Price</th>\r\n                        <th class=\"text-right\">Total</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let cart of updateCartForm.controls.carts.controls; let i=index\"> <!-- loops through the items to be displayed -->\r\n                    <tr [formGroupName]=\"i\">\r\n                        <td class=\"col-sm-5\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left\">\r\n                                    <img class=\"media-object\" src=\"/assets/images/{{cartItems[i].item.imagePath}}\" style=\"width: 80px; height: 80px;\">\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    {{updateCartForm.controls.carts.controls[i].controls.productName.value}}\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-sm-2\">\r\n                            <input type=\"number\" min = \"1\" step = \"1\" max=\"999\" siz = \"3\" style=\"width: 5em\" class=\"text-center form-control\" id=\"productQuantity\" name=\"productQuantity\" formControlName=\"productQuantity\" #prdQty required>\r\n                            <div class=\"text-danger\">{{qtyMsg[i]}}</div>\r\n                        </td>\r\n                        <td class=\"col-sm-2 text-right\">\r\n                            ${{coinPrice(updateCartForm.controls.carts.controls[i].controls.productPrice.value)}} {{currency.currency}}\r\n                        </td>\r\n                        <td class=\"col-sm-2 text-right\">\r\n                            ${{coinPrice(updateCartForm.controls.carts.controls[i].controls.productPrice.value, prdQty.value)}} {{currency.currency}}\r\n                        </td>\r\n                        <td class=\"col-sm-1\">\r\n                            <a class=\"buttonlink pull-right\" (click)=\"removeItem(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                        </td>\r\n\r\n                    </tr>\r\n                    </ng-container>\r\n\r\n                    <!--\r\n                    <td class=\"col-sm-1 col-md-1\" style=\"text-align: center\">\r\n                        <input type=\"number\" class=\"form-control\" id=\"item_quantity\" value=\"{{cartItem.qty}}\">\r\n                    </td>\r\n                    -->\r\n                    <tr>\r\n                            <td class=\"col-sm-5\">   </td>\r\n                            <td class=\"col-sm-2\">   </td>\r\n                            <td class=\"col-sm-2\">   </td>\r\n                            <td class=\"col-sm-2\">   </td>\r\n                            <td class=\"col-sm-1\">   </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td class=\"col-sm-5\">   </td>\r\n                        <td class=\"col-sm-2\">   </td>\r\n                        <td class=\"text-right col-sm-2\"><h5>Subtotal</h5></td>\r\n                        <td class=\"text-right col-sm-2\"><h5><strong>${{coinPriceDisplay(cartTotalPrice)}} {{currency.currency}}</strong></h5></td>\r\n                        <td class=\"col-sm-1\">   </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-sm-5\">   </td>\r\n                        <td class=\"col-sm-2\">   </td>\r\n                        <td class=\"text-right col-sm-2\"><h5>Shipping</h5></td>\r\n                        <td class=\"text-right col-sm-2\"><h5><strong>$0</strong></h5></td>\r\n                        <td class=\"col-sm-1\">   </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"col-sm-5\">   </td>\r\n                        <td class=\"col-sm-2\">   </td>\r\n                        <td class=\"text-right col-sm-2\"><h5><strong>Grand Total</strong></h5></td>\r\n                        <td class=\"text-right col-sm-2\"><h5><strong>${{coinPriceDisplay(cartTotalPrice)}} {{currency.currency}}</strong></h5></td>\r\n                        <td class=\"col-sm-1\">   </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"qtyMsg===undefined||qtyMsg.length==0; else elseBlock\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <a routerLink=\"/checkout\" type=\"button\" class=\"btn btn-success active pull-right\">Checkout</a>            \r\n                </div>\r\n            </div>\r\n            </ng-container>\r\n            <ng-template #elseBlock>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <a routerLink=\"/checkout\" type=\"button\" class=\"btn btn-success disabled pull-right\">Checkout</a>            \r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <br>\r\n        </form>\r\n    </div>\r\n\r\n</ng-container>\r\n<ng-container *ngIf = \"total_qty==0\"> <!-- if there are no items in shopping cart -->\r\n    <div class=\"container padding-top\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center\">\r\n                <h2>No Items in Cart</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_round_module__ = __webpack_require__("./src/app/modules/round.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingcart, _router, _fb, ngRedux) {
        this.shoppingcart = shoppingcart;
        this._router = _router;
        this._fb = _fb;
        this.ngRedux = ngRedux;
        this.cartItems = []; //this array variable stores the shopping cart item objects
        this.qtyMsg = [];
        this.cartTotalPrice = 0; //this variable stores the total price of all the items in the shopping cart
        this.total_qty = 0; // this variable stores the total quantity
        //private currencyRate: number = 1;
        this.currency = {
            currency: " USD",
            forex: "USD/USD",
            rate: 1
        };
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        //initialize the form
        this.updateCartForm = this._fb.group({
            carts: this._fb.array([
                this.initCartForm(),
            ])
        });
        //this.getCurrencyRate();
        //this.shoppingCartItems();
        this.formUpdateEvent();
    };
    ShoppingCartComponent.prototype.formUpdateEvent = function () {
        var _this = this;
        this.updateCartSubscription = this.updateCartForm.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (data) {
            var valid = true;
            var totalPrice = 0;
            _this.qtyMsg = [];
            //this will automatically update the total price and the store session
            data.carts.map(function (x, i) {
                if (Number(x.productQuantity) < 1 || !Number.isInteger(Number(x.productQuantity))) {
                    _this.qtyMsg[i] = "invalid input";
                    valid = false;
                }
                totalPrice = totalPrice + (Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(x.productPrice * _this.currency.rate, 2) * x.productQuantity);
            });
            //console.log(this.updateCartForm);
            //console.log(data);
            if (valid) {
                _this.cartTotalPrice = totalPrice;
                //console.log(this.cartTotalPrice);
                if (_this.total_qty > 0) {
                    _this.updateCart(data);
                }
            }
        });
    };
    //This function is for display purposes to show the price with 2 decimal places
    ShoppingCartComponent.prototype.coinPrice = function (price, qty) {
        if (qty === void 0) { qty = 1; }
        //console.log(this.round(33 * 1.287168 * 2, 2));
        return (Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(price * this.currency.rate, 2) * qty).toFixed(2);
    };
    ShoppingCartComponent.prototype.coinPriceDisplay = function (price) {
        return price.toFixed(2);
    };
    ShoppingCartComponent.prototype.getCurrencyRate = function () {
        var _this = this;
        this.currencySubscription = this.ngRedux.select()
            .subscribe(function (newCurrency) {
            //this.currencyRate = newCurrency.switchCurrencyReducer.currency.rate;
            _this.currency = newCurrency.switchCurrencyReducer.currency;
            if (_this.cartItems.length !== 0) {
                if (_this.currency.rate == 1) {
                    _this.cartTotalPrice = 0;
                    _this.cartItems.map(function (x) {
                        _this.cartTotalPrice = _this.cartTotalPrice + (Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(x.price, 2));
                    });
                }
                else {
                    _this.cartTotalPrice = 0;
                    _this.cartItems.map(function (x) {
                        _this.cartTotalPrice = _this.cartTotalPrice + (Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(x.item.price * _this.currency.rate, 2) * x.qty);
                    });
                }
            }
            //console.log(this.cartTotalPrice);
            //console.log(this.currency.rate);
            //console.log(this.cartItems);
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
    ShoppingCartComponent.prototype.shoppingCartItems = function (cur) {
        var _this = this;
        this.shoppingcart.getCartItems() //getCartItems observable gets the shopping cart items and stores it into the cartItems array
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins;
                if (cur.rate == 1) {
                    _this.cartTotalPrice = Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(data.totalPrice, 2); //total price of all the items in the shopping cart
                }
                else {
                    _this.cartTotalPrice = 0;
                    data.coins.map(function (x) {
                        _this.cartTotalPrice = _this.cartTotalPrice + (Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(x.item.price * cur.rate, 2) * x.qty);
                    });
                }
                _this.total_qty = data.totalQuantity; //total quantity of items in the shopping cart
                //this.updateCartForm.value.carts[0].productName = this.cartItems[0].item.title;
                _this.clearCartFirstItem();
                _this.showCartItems(_this.cartItems);
                _this.getCurrencyRate();
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
                _this.cartTotalPrice = 0;
                //console.log(data.items);
                Object.keys(data.items).map(function (key, index) {
                    _this.cartTotalPrice = _this.cartTotalPrice + (Object(__WEBPACK_IMPORTED_MODULE_5__modules_round_module__["a" /* round */])(data.items[key].item.price * _this.currency.rate, 2) * data.items[key].qty);
                });
            }, function (err) { return console.log(err); }, function () { return console.log('Update cart complete'); });
        }
    };
    // unsubscribe observables
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        if (this.updateCartSubscription) {
            this.updateCartSubscription.unsubscribe(); // <- New
        }
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_checkout_component__ = __webpack_require__("./src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__ = __webpack_require__("./src/app/services/check.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var shoppingCartRoutes = [
    //{ path: 'home', component: HomepageComponent},
    //{ path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'signup', component: SignupComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'purchase_history/order_details/:id', component: OrderDetailsComponent, canActivate: [isAuthGuard]},
    //{ path: 'purchase_history', component: PurchaseHistoryComponent, canActivate: [isAuthGuard]},
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_6__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_5__checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__["a" /* isAuthGuard */]] },
];
var ShoppingCartModule = /** @class */ (function () {
    function ShoppingCartModule() {
    }
    ShoppingCartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(shoppingCartRoutes),
                __WEBPACK_IMPORTED_MODULE_9__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__["a" /* isAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_7__services_shopping_cart_service__["a" /* ShoppingCartService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], ShoppingCartModule);
    return ShoppingCartModule;
}());



/***/ }),

/***/ "./src/app/signup/signup-form/signup-form.component.css":
/***/ (function(module, exports) {

module.exports = ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding-top padding-bottom\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-sm-offset-4\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title text-center\">User Registration</h3>\r\n        </div>\r\n          <div class=\"panel-body\">\r\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm)\" id=\"signupForm\">\r\n                    <fieldset>\r\n                <div class=\"form-group\">\r\n                  <label>First Name</label>\r\n                  <input class=\"form-control\" type=\"text\" id=\"fname\" name=\"fname\" formControlName=\"fname\" required>\r\n                    <div class=\"text-danger\">\r\n                      {{fnameMsg}}\r\n                    </div>\r\n                </div>\r\n              <div class=\"form-group\">\r\n                <label>Last Name</label>\r\n                <input class=\"form-control\" type=\"text\" id=\"lname\" name=\"lname\" formControlName=\"lname\" required>\r\n                  <div class=\"text-danger\">\r\n                    {{lnameMsg}}\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" formControlName=\"email\" required>\r\n                  <div class=\"text-danger\">\r\n                    {{emailMsg}}\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Username</label>\r\n                <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" formControlName=\"username\" required>\r\n                  <div class=\"text-danger\">\r\n                    {{usernameMsg}}\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\" required>\r\n                  <div class=\"text-danger\">\r\n                    {{passwordMsg}}\r\n                  </div>\r\n              </div>\r\n              <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\r\n            </fieldset>\r\n              </form>\r\n\r\n              <ng-container *ngIf=\"errorMsg\">\r\n                <br>\r\n                <div class=\"alert alert-danger text-center\">\r\n                  {{errorMsg}}\r\n                </div>\r\n              </ng-container>\r\n              \r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(_fb) {
        this._fb = _fb;
        this.fnameMsg = '';
        this.lnameMsg = '';
        this.emailMsg = '';
        this.usernameMsg = '';
        this.passwordMsg = '';
        this.formEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SignupFormComponent.prototype.createForm = function () {
        this.signupForm = this._fb.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            lname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)]]
        });
    };
    SignupFormComponent.prototype.clearMsg = function () {
        this.fnameMsg = "";
        this.lnameMsg = "";
        this.emailMsg = "";
        this.usernameMsg = "";
        this.passwordMsg = "";
    };
    SignupFormComponent.prototype.signup = function (_signupForm) {
        this.clearMsg();
        this.errorMsg = "";
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
            this.formEmitter.emit(_signupForm.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SignupFormComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SignupFormComponent.prototype, "formEmitter", void 0);
    SignupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__("./src/app/signup/signup-form/signup-form.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup-form/signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<app-signup-form\r\n[errorMsg] = \"errorMsg\"\r\n(formEmitter)=\"signup($event)\"\r\n></app-signup-form>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(_userService, shoppingCart, _router) {
        this._userService = _userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.total_qty = 0;
        this.errorMsg = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getTotalQuantity();
    };
    //The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    SignupComponent.prototype.getTotalQuantity = function () {
        var _this = this;
        this.shoppingCart.getTotalQuantity()
            .subscribe(function (data) {
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log('error getting item quantity'); }, function () { return console.log('complete getting item quantity'); });
    };
    SignupComponent.prototype.signup = function (event) {
        var _this = this;
        this.errorMsg = "";
        this._userService.signupfn(event)
            .subscribe(function (data) {
            if (data.authenticated) {
                console.log('signup is success');
                _this._router.navigate(['/home']);
            }
        }, function (err) {
            _this.errorMsg = err.error.msg;
        }, function () { return console.log('signup complete'); });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_form_signup_form_component__ = __webpack_require__("./src/app/signup/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_check_not_auth_service__ = __webpack_require__("./src/app/services/check.not.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HeaderComponent } from '../header/header.component';
//import { LoginComponent } from '../login/login.component';
//import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';






var signupRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_check_not_auth_service__["a" /* isNotAuthGuard */]] },
];
var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(signupRoutes),
                __WEBPACK_IMPORTED_MODULE_10__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_6__signup_form_signup_form_component__["a" /* SignupFormComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_check_not_auth_service__["a" /* isNotAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_shopping_cart_service__["a" /* ShoppingCartService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "./src/app/store/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY_INITIAL_STATE; });
var CURRENCY_INITIAL_STATE = {
    currency: "USD",
    forex: "USD/USD",
    rate: 1
};


/***/ }),

/***/ "./src/app/store/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger__ = __webpack_require__("./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_reducers__ = __webpack_require__("./src/app/store/reducers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { LoginActions } from '../login/login.actions';
//import { logoutReducer } from '../header/header.reducers';
//import { LogoutActions } from '../header/header.actions';
var store = Object(__WEBPACK_IMPORTED_MODULE_3_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_3_redux__["combineReducers"])({ loginReducer: __WEBPACK_IMPORTED_MODULE_4__store_reducers__["a" /* loginReducer */], switchCurrencyReducer: __WEBPACK_IMPORTED_MODULE_4__store_reducers__["b" /* switchCurrencyReducer */] }), Object(__WEBPACK_IMPORTED_MODULE_3_redux__["applyMiddleware"])(Object(__WEBPACK_IMPORTED_MODULE_2_redux_logger__["createLogger"])()));
var StoreModule = /** @class */ (function () {
    function StoreModule(ngRedux) {
        this.ngRedux = ngRedux;
        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        ngRedux.provideStore(store);
    }
    StoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgReduxModule"]],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]])
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/app/store/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return switchCurrencyReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_model__ = __webpack_require__("./src/app/store/model.ts");

var loginReducer = function (lastState, action) {
    if (lastState === void 0) { lastState = {}; }
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true
            };
        case "LOGOUT":
            return {
                isLoggedIn: false
            };
        default:
            return lastState;
    }
};
var switchCurrencyReducer = function (lastState, action) {
    if (lastState === void 0) { lastState = __WEBPACK_IMPORTED_MODULE_0__store_model__["a" /* CURRENCY_INITIAL_STATE */]; }
    switch (action.type.currency) {
        case "USD":
            return {
                currency: action.type
            };
        case "CAD":
            return {
                currency: action.type
            };
        default:
            return {
                currency: lastState
            };
    }
};


/***/ }),

/***/ "./src/app/user-profile/change-user-password/change-user-password.component.css":
/***/ (function(module, exports) {

module.exports = ".padding-top {\r\n    padding-top: 25px;\r\n}\r\n\r\n.padding-bottom {\r\n    padding-bottom: 25px;\r\n}"

/***/ }),

/***/ "./src/app/user-profile/change-user-password/change-user-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"container padding-top padding-bottom\">\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <ng-container *ngIf=\"successMsg\">\n      <div class=\"alert alert-info text-center\">\n        {{successMsg}}\n      </div>\n    </ng-container>\n  </div>\n</div>\n<div class=\"row\">\n<div class=\"col-sm-4 col-sm-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title text-center\">Change Password</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form [formGroup] = \"changePwForm\" (ngSubmit)=\"changePw(changePwForm)\" id=\"changePwForm\" name=\"changePwForm\">\n                <fieldset>\n            <div class=\"form-group\">\n              <label>Current Password</label>\n              <input class=\"form-control\" type=\"password\" placeholder=\"Current Password\" id=\"currentPw\" name=\"currentPw\" formControlName=\"currentPw\" required>\n              <div class=\"text-danger\">\n                {{currentPwMsg}}\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label>New Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" formControlName=\"newPw\" required>\n            <div class=\"text-danger\">\n              {{newPwMsg}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirm New Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"Confirm New Password\" id=\"confirmNewPw\" name=\"confirmNewPw\" formControlName=\"confirmNewPw\" required>\n            <div class=\"text-danger\">\n              {{confirmNewPwMsg}}\n            </div>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Change Password</button>\n        </fieldset>\n      </form>\n      <ng-container *ngIf=\"errorMsg\">\n        <br>\n        <div class=\"alert alert-danger text-center\">\n          {{errorMsg}}\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/change-user-password/change-user-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeUserPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangeUserPasswordComponent = /** @class */ (function () {
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
        //console.log(_changePwForm);
        var _this = this;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-user-password',
            template: __webpack_require__("./src/app/user-profile/change-user-password/change-user-password.component.html"),
            styles: [__webpack_require__("./src/app/user-profile/change-user-password/change-user-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ChangeUserPasswordComponent);
    return ChangeUserPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_user_password_change_user_password_component__ = __webpack_require__("./src/app/user-profile/change-user-password/change-user-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__ = __webpack_require__("./src/app/services/check.auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_module__ = __webpack_require__("./src/app/header/header.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HeaderComponent } from '../header/header.component';
//import { HomepageComponent } from '../homepage/homepage.component';
//import { LoginComponent } from '../login/login.component';
//import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';
//import { SignupComponent } from '../signup/signup.component';

//import { OrderDetailsComponent } from '../order-details/order-details.component';
//import { CheckoutComponent } from '../checkout/checkout.component';
//import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';
//import { ForgotUserPasswordComponent } from '../password-reset/forgot-user-password/forgot-user-password.component';




var userProfileRoutes = [
    //{ path: 'home', component: HomepageComponent},
    //{ path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'signup', component: SignupComponent, canActivate: [isNotAuthGuard]},
    //{ path: 'purchase_history/order_details/:id', component: OrderDetailsComponent, canActivate: [isAuthGuard]},
    //{ path: 'purchase_history', component: PurchaseHistoryComponent, canActivate: [isAuthGuard]},
    //{ path: 'cart', component: ShoppingCartComponent},
    //{ path: 'checkout', component: CheckoutComponent, canActivate: [isAuthGuard]},
    { path: 'change_user_password', component: __WEBPACK_IMPORTED_MODULE_5__change_user_password_change_user_password_component__["a" /* ChangeUserPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__["a" /* isAuthGuard */]] },
];
var UserProfileModule = /** @class */ (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(userProfileRoutes),
                __WEBPACK_IMPORTED_MODULE_9__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__change_user_password_change_user_password_component__["a" /* ChangeUserPasswordComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__services_shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_8__services_check_auth_service__["a" /* isAuthGuard */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], UserProfileModule);
    return UserProfileModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
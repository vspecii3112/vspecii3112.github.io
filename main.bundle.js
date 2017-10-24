webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__purchase_history_purchase_history_component__ = __webpack_require__("../../../../../src/app/purchase-history/purchase-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/services/shopping.cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_load_coin_info_service__ = __webpack_require__("../../../../../src/app/services/load.coin.info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__update_cart_update_cart_component__ = __webpack_require__("../../../../../src/app/update-cart/update-cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'purchase_history', component: __WEBPACK_IMPORTED_MODULE_10__purchase_history_purchase_history_component__["a" /* PurchaseHistoryComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_11__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'update_cart', component: __WEBPACK_IMPORTED_MODULE_16__update_cart_update_cart_component__["a" /* UpdateCartComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__purchase_history_purchase_history_component__["a" /* PurchaseHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__update_cart_update_cart_component__["a" /* UpdateCartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_15__services_load_coin_info_service__["a" /* LoadCoinInfoService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n\n<div class=\"row\">\n\t<div class=\"col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3\">\n\t\t<h1>Checkout</h1>\n\t\t<h4>Your Total: ${{totalCartPrice}}</h4>\n\n\t\t<!--\n\t\t<div id=\"charge-error\" class=\"alert alert-danger {{#if noError}}hidden{{/if}}\">\n\t\t\t{{errMsg}}\n\t\t</div>\n\t\t-->\n\n\t\t<form accept-charset=\"UTF-8\" role=\"form\" #shoppingCartCheckoutForm=\"ngForm\" (ngSubmit)=\"createToken()\" id=\"shoppingCartCheckoutForm\">\n\t\t\t<div class=\"row\">\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label>Name on credit card</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"cardName\" name=\"cardName\" [(ngModel)]=\"checkoutOrderInfo.name\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label>Address Line 1</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"addressLine1\" name=\"addressLine1\" [(ngModel)]=\"checkoutOrderInfo.addressLine1\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label>Address Line 2</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"addressLine2\" name=\"addressLine2\" [(ngModel)]=\"checkoutOrderInfo.addressLine2\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label>Address City</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"addressCity\" name=\"addressCity\" [(ngModel)]=\"checkoutOrderInfo.addressCity\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label>Address State</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"addressState\" name=\"addressState\" [(ngModel)]=\"checkoutOrderInfo.addressState\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label>Address Zip</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"addressZip\" name=\"addressZip\" [(ngModel)]=\"checkoutOrderInfo.addressZip\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label>Address Country</label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"addressCountry\" name=\"addressCountry\" [(ngModel)]=\"checkoutOrderInfo.addressCountry\">\n\t\t\t\t\t</div>\n                </div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label for=\"cardNumber-element\">Card Number</label>\n                        <div id=\"cardNumber-element\">\n                            <!-- a Stripe Element will be inserted here. -->\n                        </div>\n\t\t\t\t\t</div>\n                </div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label for=\"cardExpiry-element\">Card Expiry</label>\n                        <div id=\"cardExpiry-element\">\n                            <!-- a Stripe Element will be inserted here. -->\n                        </div>\n\t\t\t\t\t</div>\n                </div>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label for=\"cardCvc-element\">CVC</label>\n                        <div id=\"cardCvc-element\">\n                            <!-- a Stripe Element will be inserted here. -->\n                        </div>\n\t\t\t\t\t</div>\n                </div>\n\t\t\t\t<hr>\n                <div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t        <label for=\"postalCode-element\">Zip Code</label>\n                        <div id=\"postalCode-element\">\n                            <!-- a Stripe Element will be inserted here. -->\n                        </div>\n\t\t\t\t\t</div>\n                </div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-success\">Buy now</button>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
        this.totalCartPrice = 0;
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
                _this.totalCartPrice = data.totalPrice;
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
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], CheckoutComponent);

var _a, _b, _c;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse \" role=\"navigation\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Brand</a>\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-menubuilder\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span>\n          </button>\n      </div>\n      <div class=\"collapse navbar-collapse navbar-menubuilder\">\n          <ul class=\"nav navbar-nav navbar-left\">\n              <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n              <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a routerLink=\"/cart\" routerLinkActive=\"active\">Shopping Cart<span class=\"badge\">{{totalQuantity}}</span></a></li>\n              <li class=\"dropdown\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">User Account<span class=\"caret\"></span></a>\n                      <ul class=\"dropdown-menu\">\n                          <ng-template [ngIf] = \"loggedIn\">\n                          <li><a routerLink=\"/change_user_info\" routerLinkActive=\"active\">Change user info</a></li>\n                          <li><a routerLink=\"/change_user_password\" routerLinkActive=\"active\">Change user password</a></li>\n                          <li><a routerLink=\"/purchase_history\" routerLinkActive=\"active\">Purchase History</a></li>\n                          <li role=\"separator\" class=\"divider\"></li>\n                          <li><a routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"userLogout()\">Logout</a></li>\n                          </ng-template>\n                          <ng-template [ngIf] = \"!loggedIn\">\n                          <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n                          <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Signup</a></li>\n                          </ng-template>\n                      </ul>\n              </li>\n          </ul>\n      </div>\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function HeaderComponent(UserAuthentication, UserLogout, _router) {
        this.UserAuthentication = UserAuthentication;
        this.UserLogout = UserLogout;
        this._router = _router;
        this.loggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.checkAuthentication();
    };
    HeaderComponent.prototype.checkAuthentication = function () {
        var _this = this;
        this.UserAuthentication.isLoggedIn()
            .subscribe(function (data) {
            if (data.msg) {
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
        this.UserLogout.logoutfn()
            .subscribe(function (data) {
            console.log(data.msg);
            _this.checkAuthentication(); //Checks the authentication of the user to get the latest update so that Angular will re-render the page when it reloads the same URL.
        }, function (err) { return console.log('error logging out'); }, function () { return console.log('logout complete'); });
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], HeaderComponent.prototype, "totalQuantity", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

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

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div *ngFor = \"let coin of coins; let i=index\" class=\"col-sm-4\">\n  <div class=\"thumbnail\">\n    <img src=\"/assets/images/{{coin.imagePath}}\" alt=\"...\" class=\"img-responsive\">\n    <div class=\"caption text-center\">\n      <h4>{{coin.title}}</h4>\n      <p>{{coin.description}}</p>\n      <div class=\"clearfix\">\n        <div class=\"price\">\n          <p>${{coin.price}}</p>\n        </div>\n        <input type=\"text\" class=\"text-center\" size=\"3\" id = \"itemQty\" name = \"itemQty\" [(ngModel)]=\"itemQuantity[i]\" #itemQty>          \n        <button class=\"btn btn-success\" role=\"button\" (click)=\"addItemToCart(coin._id, itemQty.value)\">Add</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        this.itemQuantity = [];
        this.coins = []; //the coins array variable stores the coin objects
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
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_load_coin_info_service__["a" /* LoadCoinInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_load_coin_info_service__["a" /* LoadCoinInfoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _b || Object])
], HomepageComponent);

var _a, _b;
//# sourceMappingURL=homepage.component.js.map

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

module.exports = "<app-header></app-header>\n<div class=\"row\">\n<div class=\"col-md-4 col-md-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Please sign in</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form accept-charset=\"UTF-8\" role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n                <fieldset>\n            <div class=\"form-group\">\n                        <label>Username</label>\n              <input class=\"form-control\" type=\"text\" placeholder=\"Username\" id=\"username\" name=\"username\" [(ngModel)]=\"loginUser.username\" required>\n          </div>\n          <div class=\"form-group\">\n                        <label>Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" [(ngModel)]=\"loginUser.password\" required>\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Login</button>\n        </fieldset>\n      </form>\n                {{loginMsg}}\n      </div>\n  </div>\n  <p>Click <a routerLink=\"/signup\" routerLinkActive=\"active\">here</a> to sign up</p>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(authenticate, _router, route) {
        this.authenticate = authenticate;
        this._router = _router;
        this.route = route;
        this.loginUser = {
            username: '',
            password: ''
        };
        this.loginMsg = '';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticate.loginfn(this.loginUser)
            .subscribe(function (data) {
            if (data.redirect) {
                console.log(data.msg);
                _this._router.navigate([data.redirect]);
            }
        }, function (err) {
            console.log(err.msg);
            _this.loginMsg = err.msg;
        }, function () { return console.log('login complete'); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/purchase-history/purchase-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/purchase-history/purchase-history.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n        <h1>Purchase History</h1>\n        <hr>\n        <h2>My Orders</h2>\n        <div *ngFor = \"let order of orders\"> \n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <ul class=\"list-group\">\n                    <div *ngFor = \"let item of order.cart.items\">\n                    <li class=\"list-group-item\">\n                        <span class=\"badge\">{{item.price}}</span>\n                        {{item.item.title}} | {{item.qty}}\n                    </li>\n                    </div>\n                </ul>\n            </div>\n            <div class=\"panel-footer\">\n                <strong>Total Price: ${{order.cart.totalPrice}}</strong>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/purchase-history/purchase-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
            if (err.redirect == '/login') {
                _this._router.navigate([err.redirect]);
            }
        }, function () { return console.log('complete getting purchase history'); });
    };
    return PurchaseHistoryComponent;
}());
PurchaseHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-purchase-history',
        template: __webpack_require__("../../../../../src/app/purchase-history/purchase-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/purchase-history/purchase-history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PurchaseHistoryComponent);

var _a, _b, _c;
//# sourceMappingURL=purchase-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/load.coin.info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadCoinInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
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
        this.domain = 'https://cstoreapi.herokuapp.com'; // http://localhost:3333 , https://cstoreapi.herokuapp.com
    }
    LoadCoinInfoService.prototype.getCoins = function () {
        return this._http.get(this.domain + '/get_coin_info')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    return LoadCoinInfoService;
}());
LoadCoinInfoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoadCoinInfoService);

var _a;
//# sourceMappingURL=load.coin.info.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shopping.cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
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
        this.domain = 'https://cstoreapi.herokuapp.com'; // http://localhost:3333 , https://cstoreapi.herokuapp.com
    }
    ShoppingCartService.prototype.getCartItems = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/shopping_cart', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    ShoppingCartService.prototype.getTotalQuantity = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/get_total_quantity', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    ShoppingCartService.prototype.addItem = function (coinID, itemQty) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            //params: myParams,
            headers: headers,
            withCredentials: true //set to true to send cookie along with the request
        });
        var bodyString = 'itemQty=' + itemQty;
        return this._http.post(this.domain + '/add_to_cart/' + coinID, bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    ShoppingCartService.prototype.reduceOneQuantity = function (coinID) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/reduce_one/' + coinID, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    ShoppingCartService.prototype.removeItem = function (coinID) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/remove_all/' + coinID, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    ShoppingCartService.prototype.cartCheckout = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/checkout', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    ShoppingCartService.prototype.makeCharge = function (cardToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers,
            withCredentials: true //set to true to send cookie along with request
        });
        var token = 'stripeToken=' + cardToken;
        return this._http.post(this.domain + '/make_charge', token, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    ShoppingCartService.prototype.getPurchaseHistory = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/purchase_history', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    ShoppingCartService.prototype.updateCart = function (updateCart) {
        var bodyString = JSON.stringify(updateCart);
        console.log(bodyString);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true,
            headers: headers
        });
        return this._http.post(this.domain + '/cart_update', bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ShoppingCartService);

var _a;
//# sourceMappingURL=shopping.cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
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
        this.domain = 'https://cstoreapi.herokuapp.com'; // http://localhost:3333 , https://cstoreapi.herokuapp.com
    }
    UserService.prototype.isLoggedIn = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/user/isauthenticated', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    UserService.prototype.logoutfn = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/user/logout', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    UserService.prototype.loginfn = function (usercreds) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers,
            withCredentials: true //set to true to send cookie along with request
        });
        var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        return this._http.post(this.domain + '/user/authenticate', creds, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    UserService.prototype.signupfn = function (usercreds) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers,
            withCredentials: true //set to true to send cookie along with request
        });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + usercreds.fname + '&lname=' + usercreds.lname + '&email=' + usercreds.email + '&uname=' + usercreds.username + '&password=' + usercreds.password;
        return this._http.post(this.domain + '/user/adduser', creds, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    UserService.prototype.getPurchaseHistory = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            withCredentials: true //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/user/purchase_history', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<ng-template [ngIf] = \"total_qty!=0\"> <!-- if there are items in shopping cart -->\n<!--\n<div class=\"row\">\n    <div class=\"col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3\">\n        <ul class=\"list-group\">\n            <div *ngFor = \"let cartItem of cartItems\">\n                <li class=\"list-group-item\">\n                    <span class=\"badge\">{{cartItem.qty}}</span>\n                    <strong>{{cartItem.item.title}}</strong>\n                    <span class=\"label label-success\">${{cartItem.item.price}}</span>\n                    <div class=\"btn-group\">\n                        <button class=\"btn btn-primary btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Action <span class=\"caret\"></span></button>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/cart\" routerLinkActive=\"active\" (click)=\"reduceOne(cartItem.item._id)\">Reduce by 1</a></li>\n                            <li><a routerLink=\"/cart\" routerLinkActive=\"active\" (click)=\"removeAll(cartItem.item._id)\">Remove All</a></li>\n                        </ul>\n                 </div>\n                </li>\n            </div>\n            \n        </ul>\n    </div>\n</div>\n-->\n\n<div class=\"container\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th>Product</th>\n                <th>Quantity</th>\n                <th class=\"text-center\">Price</th>\n                <th class=\"text-center\">Total</th>\n                <th> </th>\n            </tr>\n        </thead>\n        <tbody>\n            <ng-container *ngFor = \"let cartItem of cartItems\"> <!-- loops through the items to be displayed -->\n            <tr>\n                <td class=\"col-sm-8 col-md-6\">\n                <div class=\"media\">\n                    <a class=\"thumbnail pull-left\" href=\"#\"> <img class=\"media-object\" src=\"http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png\" style=\"width: 72px; height: 72px;\"> </a>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\"><a href=\"#\">{{cartItem.item.title}}</a></h4>\n                        <h5 class=\"media-heading\"> by <a href=\"#\">Brand name</a></h5>\n                        <span>Status: </span><span class=\"text-success\"><strong>In Stock</strong></span>\n                    </div>\n                </div></td>\n                <td class=\"col-sm-1 col-md-1 text-center\"><strong>{{cartItem.qty}}</strong></td>\n                <td class=\"col-sm-1 col-md-1 text-center\"><strong>${{cartItem.item.price}}</strong></td>\n                <td class=\"col-sm-1 col-md-1 text-center\"><strong>${{cartItem.price}}</strong></td>\n                <td class=\"col-sm-1 col-md-1\"></td>\n            </tr>\n            </ng-container>\n\n            <!--\n            <td class=\"col-sm-1 col-md-1\" style=\"text-align: center\">\n                <input type=\"number\" class=\"form-control\" id=\"item_quantity\" value=\"{{cartItem.qty}}\">\n            </td>\n            -->\n\n            <tr>\n                <td>   </td>\n                <td>   </td>\n                <td>   </td>\n                <td><h5>Subtotal</h5></td>\n                <td class=\"text-right\"><h5><strong>${{cartTotalPrice}}</strong></h5></td>\n            </tr>\n            <tr>\n                <td>   </td>\n                <td>   </td>\n                <td>   </td>\n                <td><h5>Estimated shipping</h5></td>\n                <td class=\"text-right\"><h5><strong>$0</strong></h5></td>\n            </tr>\n            <tr>\n                <td>   </td>\n                <td>   </td>\n                <td>   </td>\n                <td><h3>Total</h3></td>\n                <td class=\"text-right\"><h3><strong>${{cartTotalPrice}}</strong></h3></td>\n            </tr>\n            <tr>\n                <td>   </td>\n                <td>   </td>\n                <td>   \n                <a routerLink=\"/update_cart\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>Update Cart</a>    \n                </td>\n                <td>\n                <a routerLink=\"/home\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>Continue Shopping</a>\n                </td>\n                <td>\n                <a routerLink=\"/checkout\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-success\">Checkout</a>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n  </div>\n\n</ng-template>\n<ng-template [ngIf] = \"total_qty==0\"> <!-- if there are no items in shopping cart -->\n<div class=\"row\">\n    <div class=\"col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3\">\n        <h2>No Items in Cart</h2>\n    </div>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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



var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingcart, _router) {
        this.shoppingcart = shoppingcart;
        this._router = _router;
        this.cartItems = []; //this array variable stores the shopping cart item objects
        this.cartTotalPrice = 0; //this variable stores the total price of all the items in the shopping cart
        this.total_qty = 0; // this variable stores the total quantity
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.shoppingCartItems();
    };
    ShoppingCartComponent.prototype.shoppingCartItems = function () {
        var _this = this;
        this.shoppingcart.getCartItems() //getCartItems observable gets the shopping cart items and stores it into the cartItems array
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins;
                _this.cartTotalPrice = data.totalPrice; //total price of all the items in the shopping cart
                _this.total_qty = data.totalQuantity; //total quantity of items in the shopping cart
            }
            else {
                _this.cartItems = null;
                _this.cartTotalPrice = 0;
                _this.total_qty = 0;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Get Cart Items Complete'); });
    };
    ShoppingCartComponent.prototype.reduceOne = function (id) {
        var _this = this;
        this.shoppingcart.reduceOneQuantity(id)
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins;
                _this.cartTotalPrice = data.totalPrice; //total price of all the items in the shopping cart
                _this.total_qty = data.totalQuantity; //total quantity of items in the shopping cart
            }
            else {
                _this.cartItems = null;
                _this.cartTotalPrice = 0;
                _this.total_qty = 0;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Remove one item complete'); });
    };
    ShoppingCartComponent.prototype.removeAll = function (id) {
        var _this = this;
        this.shoppingcart.removeItem(id)
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins;
                _this.cartTotalPrice = data.totalPrice; //total price of all the items in the shopping cart
                _this.total_qty = data.totalQuantity; //total quantity of items in the shopping cart
            }
            else {
                _this.cartItems = null;
                _this.cartTotalPrice = 0;
                _this.total_qty = 0;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Remove all single item complete'); });
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shopping-cart',
        template: __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ShoppingCartComponent);

var _a, _b;
//# sourceMappingURL=shopping-cart.component.js.map

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

module.exports = "<app-header></app-header>\n<div class=\"row\">\n<div class=\"col-md-4 col-md-offset-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">User Registration</h3>\n     </div>\n      <div class=\"panel-body\">\n        <form accept-charset=\"UTF-8\" role=\"form\" #signupForm=\"ngForm\" (ngSubmit)=\"signup()\" id=\"signupForm\">\n                <fieldset>\n            <div class=\"form-group\">\n                        <label>First Name</label>\n              <input class=\"form-control\" type=\"text\" id=\"fname\" name=\"fname\" [(ngModel)]=\"signupUser.fname\">\n          </div>\n          <div class=\"form-group\">\n                        <label>Last Name</label>\n            <input class=\"form-control\" type=\"text\" id=\"lname\" name=\"lname\" [(ngModel)]=\"signupUser.lname\">\n          </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n            <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"signupUser.email\">\n          </div>\n                    <div class=\"form-group\">\n                        <label>Username</label>\n            <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"signupUser.username\">\n          </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n            <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"signupUser.password\">\n          </div>\n          <button class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Submit</button>\n        </fieldset>\n          </form>\n      </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function SignupComponent(signupserv, _router, route) {
        this.signupserv = signupserv;
        this._router = _router;
        this.route = route;
        this.signupUser = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: ''
        };
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.signupserv.signupfn(this.signupUser)
            .subscribe(function (data) {
            if (data.redirect) {
                console.log('signup is success');
                console.log(data.msg);
                _this._router.navigate([data.redirect]);
            }
        }, function (err) {
            console.log(err.msg);
        }, function () { return console.log('signup complete'); });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/update-cart/update-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-cart/update-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <form [formGroup]=\"updateCartForm\" novalidate (ngSubmit)=\"updateCart(updateCartForm)\">\r\n            <div formArrayName=\"carts\">\r\n            <div *ngFor=\"let cart of updateCartForm.controls.carts.controls; let i=index\">\r\n            <div class=\"row\">\r\n                <div [formGroupName]=\"i\">\r\n                <div class=\"col-sm-3\">\r\n                        <div class=\"form-group\">\r\n                                <label>Product</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"productName\">\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                        <div class=\"form-group\">\r\n                                <label>Quantity</label>\r\n                                <input type=\"number\" class=\"form-control\" formControlName=\"productQuantity\" #prdQty>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                        <div class=\"form-group\">\r\n                                <label>Price</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"productPrice\" #prdPrice>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                        <div class=\"form-group\">\r\n                                <label>Total Price</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"productTotalPrice\" value=\"{{prdQty.value * prdPrice.value}}\">\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                        <div class=\"form-group\">\r\n                        <button class=\"btn btn-danger\" role=\"button\" (click)=\"removeAll(i)\"><span class=\"glyphicon glyphicon-remove\"></span>Remove</button>\r\n                        </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary pull-right\">Update</button>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/update-cart/update-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var UpdateCartComponent = (function () {
    function UpdateCartComponent(shoppingcart, _router, _fb) {
        this.shoppingcart = shoppingcart;
        this._router = _router;
        this._fb = _fb;
        this.cartItems = []; //this array variable stores the shopping cart item objects
        this.cartTest = [0, 1, 2, 3];
    }
    UpdateCartComponent.prototype.ngOnInit = function () {
        //initialize the form
        this.updateCartForm = this._fb.group({
            carts: this._fb.array([
                this.initCartForm(),
            ])
        });
        this.shoppingCartItems();
    };
    UpdateCartComponent.prototype.initCartForm = function () {
        return this._fb.group({
            productName: [''],
            productQuantity: [''],
            productPrice: [''],
            productTotalPrice: ['']
        });
    };
    UpdateCartComponent.prototype.showCartItems = function (items) {
        // add address to the list
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
    UpdateCartComponent.prototype.clearCartFirstItem = function () {
        var control = this.updateCartForm.controls['carts'];
        control.removeAt(0);
    };
    UpdateCartComponent.prototype.shoppingCartItems = function () {
        var _this = this;
        this.shoppingcart.getCartItems() //getCartItems observable gets the shopping cart items and stores it into the cartItems array
            .subscribe(function (data) {
            if (data.coins) {
                _this.cartItems = data.coins;
                //this.updateCartForm.value.carts[0].productName = this.cartItems[0].item.title;
                _this.clearCartFirstItem();
                _this.showCartItems(_this.cartItems);
                console.log(_this.cartItems);
            }
            else {
                _this.clearCartFirstItem();
                _this.cartItems = null;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Get Cart Items Complete'); });
    };
    UpdateCartComponent.prototype.removeAll = function (i) {
        // remove address from the list
        var control = this.updateCartForm.controls['carts'];
        control.removeAt(i);
        this.cartItems.splice(i, 1);
    };
    UpdateCartComponent.prototype.updateCart = function (cartForm) {
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
                _this._router.navigate(['/cart']);
                console.log('update success');
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Update cart complete'); });
    };
    UpdateCartComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    return UpdateCartComponent;
}());
UpdateCartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-update-cart',
        template: __webpack_require__("../../../../../src/app/update-cart/update-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/update-cart/update-cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], UpdateCartComponent);

var _a, _b, _c;
//# sourceMappingURL=update-cart.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
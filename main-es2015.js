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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout-form/checkout-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout-form/checkout-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"checkout\">\n  <div class=\"global-container\">\n    <div class=\"checkout-heading\">Checkout</div><br>\n    <div class=\"checkout-grid-container\">\n      <div class=\"checkout-shipping-payment-item\">\n        <form [formGroup]=\"shoppingCartCheckoutForm\" (ngSubmit)=\"createToken(shoppingCartCheckoutForm)\" id=\"shoppingCartCheckoutForm\" name=\"shoppingCartCheckoutForm\">\n        <div class=\"checkout-form-container\">\n            <div class=\"checkout-form-item\">\n                <div><strong>Shipping Address</strong></div><br>\n\n                <label for=\"name\">Full Name<span style=\"color:red;\">*</span></label>\n                <input type=\"text\" class=\"form-field\" id=\"name\" name=\"name\" formControlName=\"name\">\n                <div class=\"text-danger\">\n                  {{nameMsg}}\n                </div><br>\n\n                <fieldset formGroupName=\"shippingAddress\">\n                  <label for=\"addressLine1\">Address Line 1<span style=\"color:red;\">*</span></label>\n                  <input type=\"text\" class=\"form-field\" id=\"addressLine1\" name=\"addressLine1\" formControlName=\"addressLine1\">\n                  <div class=\"text-danger\">\n                    {{addressLine1Msg}}\n                  </div><br>\n\n                  <label for=\"addressLine2\">Address Line 2</label>\n                  <input type=\"text\" class=\"form-field\" id=\"addressLine2\" name=\"addressLine2\" formControlName=\"addressLine2\"><br>\n\n                  <label for=\"city\">City<span style=\"color:red;\">*</span></label>\n                  <input type=\"text\" class=\"form-field\" id=\"city\" name=\"city\" formControlName=\"city\">\n                  <div class=\"text-danger\">\n                    {{cityMsg}}\n                  </div><br>\n\n                  <label for=\"state\">State/Province</label>\n                  <input type=\"text\" class=\"form-field\" id=\"state\" name=\"state\" formControlName=\"state\"><br>\n\n                  <label for=\"zip\">Zip/Postal Code</label>\n                  <input type=\"text\" class=\"form-field\" id=\"zip\" name=\"zip\" formControlName=\"zip\"><br>\n\n                  <label for=\"country\">Country<span style=\"color:red;\">*</span></label>\n                  <input type=\"text\" class=\"form-field\" id=\"country\" name=\"country\" formControlName=\"country\">\n                  <div class=\"text-danger\">\n                    {{countryMsg}}\n                  </div>\n                </fieldset>\n\n            </div>\n\n            <div class=\"checkout-form-item\">\n              <div><strong>Credit Card</strong></div><br>\n              <label for=\"cardNumber-element\">Card Number<span style=\"color:red;\">*</span></label>\n              <div class=\"form-field\" id=\"cardNumber-element\">\n                <!-- a Stripe Element will be inserted here. -->\n              </div>\n              <div class=\"text-danger\">\n                {{cardNumberMsg}}\n              </div><br>\n              <div class=\"payment-flex-row1\">\n                <div class=\"payment-flex-row1-cardexpiry\">\n                  <label for=\"cardExpiry-element\">Card Expiry<span style=\"color:red;\">*</span></label>\n                  <div class=\"form-field\" id=\"cardExpiry-element\">\n                    <!-- a Stripe Element will be inserted here. -->\n                  </div>\n                  <div class=\"text-danger\">\n                    {{cardExpiryMsg}}\n                  </div>\n                </div>\n                <div class=\"payment-flex-row1-cardcvc\">\n                  <label for=\"cardCvc-element\">CVC<span style=\"color:red;\">*</span></label>\n                  <div class=\"form-field\" id=\"cardCvc-element\">\n                    <!-- a Stripe Element will be inserted here. -->\n                  </div>\n                  <div class=\"text-danger\">\n                    {{cardCVCMsg}}\n                  </div>\n                </div>\n              </div><br>\n              <div>\n                <button type=\"submit\" class=\"global-form-submit-button\">Buy now ${{coinPriceDisplay(roundPrice(cartTotalPrice, 2))}} {{currency.currency}}</button>\n              </div>\n              <ng-container *ngIf=\"errorMsg\">\n                <br>\n                <div class=\"global-warning-highlight global-text-middle\">\n                  {{errorMsg}}\n                </div>\n              </ng-container>\n\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"checkout-order-details-container\">\n        <div class=\"items-container\">\n          <strong>Order Details</strong><br><br>\n          <table class=\"items-table\">\n            <ng-container *ngFor=\"let cartItem of cartItems\">\n              <tr>\n                <td class=\"product-column\">\n                  <div class=\"checkout-media-container\">\n                    <img class=\"media-object\" src=\"/assets/images/{{cartItem.item.imagePath}}\" style=\"width: 80px; height: 80px;\">\n                    <div>\n                      {{cartItem.item.title}}\n                    </div>\n                  </div>\n                </td>\n                <td class=\"quantity-column\">\n                  Qty: {{cartItem.qty}}\n                </td>\n                <td class=\"price-column\">\n                  ${{coinPrice(cartItem.price)}} {{currency.currency}}\n                </td>\n              </tr>\n            </ng-container>\n            <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n            </tr>\n            <tr>\n              <td class=\"checkout-subtotal-title\">\n                Subtotal:\n              </td>\n              <td></td>\n              <td class=\"checkout-subtotal-value\">\n                ${{coinPriceDisplay(cartTotalPrice)}} {{currency.currency}}\n              </td>\n            </tr>\n            <tr>\n              <td class=\"checkout-shipping-title\">\n                Shipping:\n              </td>\n              <td></td>\n              <td class=\"checkout-shipping-value\">\n                $0 {{currency.currency}}\n              </td>\n            </tr>\n            <tr>\n              <td class=\"checkout-grand-total-title\">\n                <strong>Grand Total:</strong>\n              </td>\n              <td></td>\n              <td class=\"checkout-grand-total-value\">\n                <strong>${{coinPriceDisplay(cartTotalPrice)}} {{currency.currency}}</strong>\n              </td>\n            </tr>\n          </table>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<app-checkout-form\n[cartItems] = \"cartItems\"\n[currency] = \"currency\"\n[cartTotalPrice] = \"cartTotalPrice\"\n[errorMsg] = \"errorMsg\"\n(stripeTokenEmitter)=\"stripeTokenHandler($event)\"\n></app-checkout-form>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id =\"footer\">\n    <div class=\"footer-author\">Created by Kenny Leung</div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"successMsg\">\n  <div class=\"global-success-highlight global-text-middle\">\n    {{successMsg}}\n  </div>\n</ng-container>\n<ng-container *ngIf=\"errorMsg\">\n  <div class=\"global-warning-highlight global-text-middle\">\n    {{errorMsg}}\n  </div>\n</ng-container>\n<div class=\"global-form-container\">\n  <div class=\"global-form-header\">Forgot Password</div>\n  <form [formGroup]=\"forgotPwForm\" (ngSubmit)=\"resetPassword(forgotPwForm)\" id=\"forgotPwForm\" name=\"forgotPwForm\">\n\n    <label for=\"email\">Email</label>\n    <input type=\"text\" class=\"global-form-input-field\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n    <div class=\"text-danger\">\n      {{emailMsg}}\n    </div>\n\n    <input type=\"submit\" class=\"global-form-submit-button\" value=\"Submit\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-user-password/forgot-user-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-user-password/forgot-user-password.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<app-forgot-user-password-form\n[errorMsg] = \"errorMsg\"\n[successMsg] = \"successMsg\"\n(forgotPasswordEmitter) = \"resetPassword($event)\"\n></app-forgot-user-password-form>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"topnav\" id=\"myTopnav\">\n      <a class=\"topnav-home-link \"routerLink=\"/home\">MEANcart</a>\n      <a href=\"javascript:void(0);\" id=\"burger\" (click)=\"burgertoggle()\">&#9776;</a>\n\n      <div class=\"mobile-menus-hidden\" id=\"mobile-menus\">\n        <ng-container *ngIf = \"loggedIn\">\n          <div class=\"dropdown\">\n            <a (click)=\"useraccountDropdown()\" class = \"dropbtn\">User Account</a>\n            <div id=\"useraccountDropdown\" class=\"dropdown-content\">\n              <a routerLink=\"/change_user_password\">Change Password</a>\n              <a routerLink=\"/purchase_history\">Purchase History</a>\n              <a class=\"buttonlink\" (click)=\"userLogout()\">Logout</a>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *ngIf = \"!loggedIn\">\n          <a routerLink=\"/login\">Login</a>\n          <a routerLink=\"/signup\">Signup</a>\n        </ng-container>\n        <div class=\"dropdown\">\n          <a (click)=\"currencyDropdown()\" class = \"dropbtn\">Currency: {{selectedCurrency.currency}}</a>\n          <div id=\"currencyDropdown\" class=\"dropdown-content\">\n            <a class=\"buttonlink\" (click)=\"changeCurrency('CAD')\">CAD</a>\n            <a class=\"buttonlink\" (click)=\"changeCurrency('USD')\">USD</a>\n          </div>\n        </div>\n        <a routerLink=\"/cart\">Cart({{totalQuantity}})</a>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage-about/homepage-about.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage-about/homepage-about.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"homepage-about\">\n    <div class=\"global-container\">\n      <div class=\"homepage-about-heading\">About MEANcart</div>\n      <p>A simple shopping cart developed using MEAN stack(MongoDB, ExpressJS, Angular, NodeJS).</p>\n          <div class=\"flexbox\">\n                  <div class=\"panel--container\">\n                    <div class=\"panel--header\">Front End\n                    </div>\n                    <ul>\n                      <li>Angular 8</li><br>\n                      <li>Javascript</li><br>\n                      <li>HTML 5</li><br>\n                      <li>CSS</li><br>\n                      <li>Bootstrap 4</li>\n                    </ul>\n                  </div>\n\n                  <div class=\"panel--container\">\n                    <div class=\"panel--header\">Backend\n                    </div>\n                    <ul>\n                      <li>Express JS</li><br>\n                      <li>Node JS (Heroku)</li><br>\n                      <li>MongoDB (mLab)</li><br>\n                      <li>REST API</li><br>\n                      <li>Stripe JS payment processing</li><br>\n                      <li>Passport JS sign-in session</li><br>\n                      <li>Connect-Mongo store session</li><br>\n                      <li>CORS (Cross Origin Resource Sharing)</li><br>\n                      <li>Bcrypt-Node JS password hashing</li><br>\n                      <li>SendGrid email delivery service</li>\n                    </ul>\n                  </div>\n\n                  <div class=\"panel--container\">\n                    <div class=\"panel--header\">Features\n                    </div>\n                    <ul>\n                      <li>User signup</li><br>\n                      <li>User Login/Logout</li><br>\n                      <li>Password reset</li><br>\n                      <li>Add to shopping cart</li><br>\n                      <li>Shopping cart auto price update</li><br>\n                      <li>Credit card checkout</li><br>\n                      <li>Purchase history</li><br>\n                      <li>Change currency</li>\n                    </ul>\n                  </div>\n              </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage-intro/homepage-intro.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage-intro/homepage-intro.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"homepage-intro\">\n    <div class=\"global-container\">\n      <div class=\"section-title\">\n        MEANcart\n      </div>\n        <p><img src=\"/assets/images/cart.png\" class=\"rounded-circle global-responsive-img\" alt=\"shopping-cart\"></p>\n        <p class=\"homepage-intro-info\">A simple MEAN shopping cart</p>\n      <div>\n        Best viewed with the latest Chrome, Firefox, Opera or Microsoft Edge browsers.\n      </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage-shop/homepage-shop.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage-shop/homepage-shop.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"homepage-shop\">\n    <div class=\"global-container\">\n      <div class=\"homepage-shop-heading\">Shop</div>\n\n\n      <div class=\"flexbox-shop\">\n        <ng-container *ngFor = \"let coin of coinsArray; let i=index\" id=\"listOfCoins\" name=\"listOfCoins\">\n        <div class=\"item--container\">{{coin.title}}<br>\n          <img src=\"/assets/images/{{coin.imagePath}}\" class=\"homepage-shop-coin-img\"><br>\n          {{coin.description}}<br><br>\n          ${{coinPrice(coin.price)}} {{currency.currency}}<br><br>\n          <input type=\"number\" class=\"shop-quantity-input\" id=\"itemQty\" name=\"itemQty\" size=\"3\" min = \"1\" maxlength=\"3\" max = \"999\" step=\"1\" maxlength=\"3\" size=\"3\" value = \"1\" #itemQty>\n          <button type=\"button\" class=\"item-container-button\" id=\"addItemButton\" name=\"addItemButton\" (click)=\"addItemToCart(coin._id, itemQty.value)\">Add</button>\n        </div>\n        </ng-container>\n\n      </div>\n\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<app-homepage-intro></app-homepage-intro>\n<app-homepage-about></app-homepage-about>\n<app-homepage-shop\n[coinsArray] = \"coins\"\n[currency] = \"currency\"\n(addItemEmitter)=\"addItemToCart($event)\"\n></app-homepage-shop>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invoice/invoice-details-products/invoice-details-products.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invoice/invoice-details-products/invoice-details-products.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table-invoice-products\">\n  <thead>\n      <tr>\n          <th class=\"invoice-product-column\">Product</th>\n          <th class=\"invoice-price-column\">Price</th>\n          <th class=\"invoice-quantity-column\">Quantity</th>\n          <th class=\"invoice-total-column\">Total</th>\n      </tr>\n  </thead>\n  <tbody>\n      <ng-container *ngFor=\"let order of orderedProducts\">\n        <tr>\n          <td>\n              <div class=\"media\">\n                  <div class=\"media-left\">\n                      <img class=\"media-object\" src=\"/assets/images/{{order.item.imagePath}}\" style=\"width: 80px; height: 80px;\">\n                  </div>\n                  <div class=\"media-body\">\n                      {{order.item.title}}\n                  </div>\n              </div>\n          </td>\n          <td class=\"text-align-right\">\n            ${{coinPriceDisplay(roundPrice(order.item.price, 2))}} {{currency.currency}}\n\n          </td>\n          <td class=\"text-align-right\">\n            {{order.qty}}\n          </td>\n          <td class=\"text-align-right\">\n            ${{coinPriceDisplay(roundPrice(order.item.price * order.qty, 2))}} {{currency.currency}}\n          </td>\n      </tr>\n      </ng-container>\n    </tbody>\n  </table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invoice-shipping-address\">\n  <strong>Shipping Address</strong><br><br>\n  <strong>{{shipToName}}</strong><br>\n  {{shipToAddress.addressLine1}}<br>\n  {{shipToAddress.addressLine2}}<br>\n  {{shipToAddress.addressCity}}, {{shipToAddress.addressState}}, {{shipToAddress.addressZip}}<br>\n  {{shipToAddress.addressCountry}}<br>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invoice/invoice-details-total/invoice-details-total.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invoice/invoice-details-total/invoice-details-total.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table-invoice-total\">\n  <tbody>\n    <tr>\n      <td class=\"subtotal-title-row text-align-right\">Subtotal</td>\n      <td class=\"subtotal-row text-align-right\">${{coinPriceDisplay(roundPrice(orderSubTotal, 2))}} {{currency.currency}}</td>\n    </tr>\n    <tr>\n      <td class=\"shipping-title-row text-align-right\">Shipping</td>\n      <td class=\"shipping-row text-align-right\">$0 {{currency.currency}}</td>\n    </tr>\n    <tr>\n      <td class=\"grand-total-title-row text-align-right\"><strong>Grand Total</strong></td>\n      <td class=\"grand-total-row text-align-right\"><strong>${{coinPriceDisplay(roundPrice(orderSubTotal, 2))}} {{currency.currency}}</strong></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login-form/login-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login-form/login-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"global-form-container\">\n  <div class=\"global-form-header\">Please sign in</div>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm)\" id=\"loginForm\" name=\"loginForm\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"global-form-input-field\" id=\"username\" name=\"username\" formControlName=\"username\" required>\n    <div class=\"text-danger\">\n      {{usernameMsg}}\n    </div>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"global-form-input-field\" id=\"password\" name=\"password\" formControlName=\"password\" required>\n    <div class=\"text-danger\">\n      {{passwordMsg}}\n    </div>\n\n    <input type=\"submit\" class=\"global-form-submit-button\" value=\"Login\">\n  </form>\n  <ng-container *ngIf=\"errorMsg\">\n    <br>\n    <div class=\"global-warning-highlight global-text-middle\">\n      {{errorMsg}}\n    </div>\n  </ng-container>\n</div><br>\n<div class=\"login-info\">\n  <div class=\"login-info-signup\">\n    Click <a routerLink=\"/signup\">here</a> to sign up\n  </div>\n  <div class=\"login-info-forgot\">\n    <a routerLink=\"/forgot\">Forgot password?</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<app-login-form\n[errorMsg] = \"errorMsg\"\n(loginEmitter)=\"login($event)\"\n></app-login-form>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<div class=\"logout-msg\">\nYou are logged out.\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-confirmation/order-confirmation.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-confirmation/order-confirmation.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<section id=\"order-confirmation\">\n  <div class=\"global-container\">\n    <div>\n    <fieldset>\n      <legend>Your order has been received.</legend>\n    </fieldset>\n    </div>\n    <div>\n      Your order ID is {{orderID}}\n    </div><br>\n    <app-invoice-details-shippingaddress\n    [shipToAddress] = \"shippingAddress\"\n    [shipToName] = \"name\"\n    ></app-invoice-details-shippingaddress><br>\n\n    <app-invoice-details-products\n    [currency] = \"currency\"\n    [orderedProducts] = \"orders\">\n    </app-invoice-details-products>\n\n    <app-invoice-details-total\n    [currency] = \"currency\"\n    [orderSubTotal] = \"subTotal\">\n    </app-invoice-details-total>\n\n  </div>\n</section>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Page Not Found</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"global-form-container\">\n  <div class=\"global-form-header\">Reset Password</div>\n  <form [formGroup]=\"resetPwForm\" (ngSubmit)=\"resetPassword(resetPwForm)\" id=\"resetPwForm\" name=\"resetPwForm\">\n\n    <label>New Password</label>\n    <input class=\"global-form-input-field\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" formControlName=\"newPw\" required>\n    <div class=\"global-warning-red\">\n      {{newPwMsg}}\n    </div>\n\n    <label>Confirm Password</label>\n    <input class=\"global-form-input-field\" type=\"password\" placeholder=\"Confirm Password\" id=\"confirmPw\" name=\"confirmPw\" formControlName=\"confirmPw\" required>\n    <div class=\"global-warning-red\">\n      {{confirmPwMsg}}\n    </div>\n\n    <input type=\"submit\" class=\"global-form-submit-button\" value=\"Submit\">\n    <ng-container *ngIf=\"errorMsg\">\n      <br><br>\n      <div class=\"global-warning-highlight global-text-middle\">\n        {{errorMsg}}\n      </div>\n    </ng-container>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/password-reset/password-reset/password-reset.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/password-reset/password-reset/password-reset.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"password-reset\">\n  <ng-container *ngIf=\"tokenValid; else elseBlock\">\n    <app-password-reset-form\n    [errorMsg] = \"errorMsg\"\n    [successMsg] = \"successMsg\"\n    (resetPasswordEmitter)=\"resetPassword($event)\">\n    </app-password-reset-form>\n  </ng-container>\n  <ng-template #elseBlock>\n    <ng-container *ngIf=\"errorMsg\">\n      <div class=\"global-warning-highlight global-text-middle\">\n        {{errorMsg}}. Click <a routerLink=\"/home\">here</a> to go back to the main page.\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"successMsg\">\n      <div class=\"global-success-highlight global-text-middle\">\n        {{successMsg}}. Click <a routerLink=\"/home\">here</a> to go back to the main page.\n      </div>\n    </ng-container>\n  </ng-template>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/purchase-history/purchase-history-details/purchase-history-details.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/purchase-history/purchase-history-details/purchase-history-details.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n  <section id=\"purchase-history-details\">\n    <div class=\"global-container\">\n      <div class=\"purchase-history-details-heading\">Order History</div><br>\n      <ng-container *ngIf=\"orderExist; else elseBlock\">\n          <app-invoice-details-shippingaddress\n          [shipToAddress] = \"shippingAddress\"\n          [shipToName] = \"name\"\n          ></app-invoice-details-shippingaddress><br>\n\n          <app-invoice-details-products\n          [currency] = \"currency\"\n          [orderedProducts] = \"orders\">\n          </app-invoice-details-products>\n\n          <app-invoice-details-total\n          [currency] = \"currency\"\n          [orderSubTotal] = \"subTotal\">\n          </app-invoice-details-total>\n      </ng-container>\n      <ng-template #elseBlock>\n        <div class=\"purchase-history-details-errormsg\">\n          Order does not exist\n        </div>\n      </ng-template>\n    </div>\n  </section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/purchase-history/purchase-history/purchase-history.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/purchase-history/purchase-history/purchase-history.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<section id=\"purchase-history\">\n  <div class=\"global-container\">\n    <div class=\"purchase-history-heading\">Purchase History</div><br>\n      <table class=\"table-purchase-history\">\n        <thead>\n          <tr>\n            <th class=\"purchase-history-order-date-column\">Order Date</th>\n            <th class=\"purchase-history-status-column\">Status</th>\n            <th class=\"purchase-history-total-price-column\">Total Price</th>\n            <th class=\"purchase-history-order-details-column\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container *ngFor = \"let order of orders\">\n            <tr>\n              <td>\n                {{order.date}}\n              </td>\n              <td>\n                Shipped\n              </td>\n              <td class=\"text-align-right\">\n                ${{order.cart.totalPrice}} {{order.currency.currency}}\n              </td>\n              <td class=\"text-align-right\">\n                <a routerLink=\"/purchase_history/order_details/{{order._id}}\">Order Details</a>\n              </td>\n            </tr>\n          </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"shopping-cart\">\n  <div class=\"global-container\">\n    <div class=\"shopping-cart-heading\">Shopping Cart</div><br>\n    <form [formGroup]=\"updateCartForm\">\n      <div formArrayName=\"carts\" style=\"overflow-x:auto;\">\n        <table class=\"cart\">\n          <tr>\n            <th class=\"cart-product-column\">Product</th>\n            <th class=\"cart-quantity-column\">Quantity</th>\n            <th class=\"cart-price-column\">Price</th>\n            <th class=\"cart-total-column\">Total</th>\n            <th class=\"cart-delete-column\"></th>\n          </tr>\n          <ng-container *ngFor=\"let cart of updateCartForm.controls['carts'].controls; let i=index\"> <!-- loops through the items to be displayed -->\n            <tr [formGroupName]=\"i\">\n              <td>\n                <div class=\"cart-media-container\">\n                    <img class=\"media-object\" src=\"/assets/images/{{cartItems[i].item.imagePath}}\" style=\"width: 80px; height: 80px;\">\n                    <div>\n                      {{updateCartForm.controls['carts'].controls[i].controls.productName.value}}\n                    </div>\n                </div>\n\n              </td>\n              <td>\n                <input type=\"number\" class=\"cart-quantity-input\" min = \"1\" step = \"1\" maxlength=\"3\" max=\"999\" siz = \"3\" style=\"width: 5em\" id=\"productQuantity\" name=\"productQuantity\" formControlName=\"productQuantity\" #prdQty required>\n                <ng-container *ngIf=\"!updateCartForm.controls.carts.controls[i].valid\">\n                  <div class=\"global-warning-red\">Invalid value</div>\n                </ng-container>\n              </td>\n              <td class=\"text-align-right\">\n                ${{coinPrice(updateCartForm.controls['carts'].controls[i].controls.productPrice.value)}} {{currency.currency}}\n              </td>\n              <td class=\"text-align-right\">\n                ${{coinPrice(updateCartForm.controls['carts'].controls[i].controls.productPrice.value, prdQty.value)}} {{currency.currency}}\n              </td>\n              <td class=\"text-align-right\">\n                <a class=\"buttonlink\" (click)=\"removeItem(i)\"><span class=\"fas fa-backspace\"></span></a>\n              </td>\n            </tr>\n          </ng-container>\n          <tr>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td class=\"text-align-right\">Subtotal</td>\n            <td class=\"text-align-right\"><strong>${{coinPriceDisplay(cartTotalPrice)}} {{currency.currency}}</strong></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td class=\"text-align-right\">Shipping</td>\n            <td class=\"text-align-right\"><strong>$0 {{currency.currency}}</strong></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td></td>\n            <td></td>\n            <td class=\"text-align-right\"><h5><strong>Grand Total</strong></h5></td>\n            <td class=\"text-align-right\"><strong>${{coinPriceDisplay(cartTotalPrice)}} {{currency.currency}}</strong></td>\n            <td></td>\n          </tr>\n        </table><br>\n        <div class=\"button-cart-checkout-container\">\n          <ng-container *ngIf=\"updateCartForm.valid; else elseBlock\">\n            <input type=\"button\" class=\"button-cart-checkout\" (click)=\"checkout()\" value=\"Checkout\">\n          </ng-container>\n          <ng-template #elseBlock>\n            <input type=\"button\" class=\"button-cart-checkout button-disabled\" disabled value=\"Checkout\">\n          </ng-template>\n        </div>\n      </div>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-cart/shopping-cart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-cart/shopping-cart.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n\n<ng-container *ngIf = \"total_qty!=0\"> <!-- if there are items in shopping cart -->\n    <app-shopping-cart-form\n    [cartItems] = \"cartItems\"\n    [currency] = \"currency\"\n    [cartTotalPrice] = \"cartTotalPrice\"\n    [formCheck] = \"formCheck\"\n    [totalQuantity] = \"total_qty\"\n    (updateCartEmitter)=\"updateCart($event)\"\n    ></app-shopping-cart-form>\n</ng-container>\n\n<ng-container *ngIf = \"total_qty==0\"> <!-- if there are no items in shopping cart -->\n  <div class=\"empty-cart-heading\">Shopping Cart Empty</div>\n</ng-container>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup-form/signup-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup-form/signup-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"global-form-container\">\n  <div class=\"global-form-header\">User Registration</div>\n  <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm)\" id=\"signupForm\">\n\n    <label for=\"username\">First Name</label>\n    <input type=\"text\" class=\"global-form-input-field\" id=\"fname\" name=\"fname\" formControlName=\"fname\" required>\n    <div class=\"text-danger\">\n      {{fnameMsg}}\n    </div>\n\n    <label for=\"username\">Last Name</label>\n    <input type=\"text\" class=\"global-form-input-field\" id=\"lname\" name=\"lname\" formControlName=\"lname\" required>\n    <div class=\"text-danger\">\n      {{lnameMsg}}\n    </div>\n\n    <label for=\"username\">Email</label>\n    <input type=\"email\" class=\"global-form-input-field\" id=\"email\" name=\"email\" formControlName=\"email\" required>\n    <div class=\"text-danger\">\n      {{emailMsg}}\n    </div>\n\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"global-form-input-field\" id=\"username\" name=\"username\" formControlName=\"username\" required>\n    <div class=\"text-danger\">\n      {{usernameMsg}}\n    </div>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"global-form-input-field\" id=\"password\" name=\"password\" formControlName=\"password\" required>\n    <div class=\"text-danger\">\n      {{passwordMsg}}\n    </div>\n\n    <input type=\"submit\" class=\"global-form-submit-button\" value=\"Submit\">\n  </form>\n  <ng-container *ngIf=\"errorMsg\">\n    <br>\n    <div class=\"global-warning-highlight global-text-middle\">\n      {{errorMsg}}\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<app-signup-form\n[errorMsg] = \"errorMsg\"\n(signupFormEmitter)=\"signup($event)\"\n></app-signup-form>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"changed\">\n  <div class=\"global-success-highlight global-text-middle\">\n    {{successMsg}}\n  </div>\n</ng-container>\n<ng-container *ngIf=\"!changed\">\n  <div class=\"global-form-container\">\n    <div class=\"global-form-header\">Change Password</div>\n    <form [formGroup] = \"changePwForm\" (ngSubmit)=\"changePw(changePwForm)\" id=\"changePwForm\" name=\"changePwForm\">\n\n      <label for=\"currentPw\">Current Password</label>\n      <input class=\"global-form-input-field\" type=\"password\" placeholder=\"Current Password\" id=\"currentPw\" name=\"currentPw\" formControlName=\"currentPw\" required>\n      <div class=\"global-warning-red\">\n        {{currentPwMsg}}\n      </div>\n\n      <label>New Password</label>\n      <input class=\"global-form-input-field\" type=\"password\" placeholder=\"New Password\" id=\"newPw\" name=\"newPw\" formControlName=\"newPw\" required>\n      <div class=\"global-warning-red\">\n        {{newPwMsg}}\n      </div>\n\n      <label>Confirm New Password</label>\n      <input class=\"global-form-input-field\" type=\"password\" placeholder=\"Confirm New Password\" id=\"confirmNewPw\" name=\"confirmNewPw\" formControlName=\"confirmNewPw\" required>\n      <div class=\"global-warning-red\">\n        {{confirmNewPwMsg}}\n      </div>\n\n      <input type=\"submit\" class=\"global-form-submit-button\" value=\"Change Password\">\n      <ng-container *ngIf=\"errorMsg\">\n        <br><br>\n        <div class=\"global-warning-highlight global-text-middle\">\n          {{errorMsg}}\n        </div>\n      </ng-container>\n\n    </form>\n  </div>\n</ng-container>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-profile/change-user-password/change-user-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-profile/change-user-password/change-user-password.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [totalQuantity] = \"total_qty\"></app-header>\n<app-change-user-password-form\n[errorMsg] = \"errorMsg\"\n[successMsg] = \"successMsg\"\n[changed] = \"changed\"\n(changePwEmitter)=\"changePw($event)\"\n></app-change-user-password-form>\n<app-footer></app-footer>\n"

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
        this.title = 'shopping-cart';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _homepage_Homepage_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/Homepage.module */ "./src/app/homepage/Homepage.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _store_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/module */ "./src/app/store/module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.module */ "./src/app/signup/signup.module.ts");
/* harmony import */ var _password_reset_password_reset_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./password-reset/password-reset.module */ "./src/app/password-reset/password-reset.module.ts");
/* harmony import */ var _forgot_user_password_forgot_user_password_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-user-password/forgot-user-password.module */ "./src/app/forgot-user-password/forgot-user-password.module.ts");
/* harmony import */ var _logout_logout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.module */ "./src/app/logout/logout.module.ts");
/* harmony import */ var _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.module */ "./src/app/shopping-cart/shopping-cart.module.ts");
/* harmony import */ var _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkout/checkout.module */ "./src/app/checkout/checkout.module.ts");
/* harmony import */ var _order_confirmation_order_confirmation_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-confirmation/order-confirmation.module */ "./src/app/order-confirmation/order-confirmation.module.ts");
/* harmony import */ var _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./invoice/invoice.module */ "./src/app/invoice/invoice.module.ts");
/* harmony import */ var _purchase_history_purchase_history_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./purchase-history/purchase-history.module */ "./src/app/purchase-history/purchase-history.module.ts");
/* harmony import */ var _user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-profile/user-profile.module */ "./src/app/user-profile/user-profile.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");





















const appRoutes = [
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _homepage_Homepage_module__WEBPACK_IMPORTED_MODULE_5__["HomepageModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
            _store_module__WEBPACK_IMPORTED_MODULE_7__["StoreModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
            _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__["SignupModule"],
            _password_reset_password_reset_module__WEBPACK_IMPORTED_MODULE_10__["PasswordResetModule"],
            _forgot_user_password_forgot_user_password_module__WEBPACK_IMPORTED_MODULE_11__["ForgotUserPasswordModule"],
            _logout_logout_module__WEBPACK_IMPORTED_MODULE_12__["LogoutModule"],
            _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_13__["ShoppingCartModule"],
            _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_14__["CheckoutModule"],
            _order_confirmation_order_confirmation_module__WEBPACK_IMPORTED_MODULE_15__["OrderConfirmationModule"],
            _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_16__["InvoiceModule"],
            _purchase_history_purchase_history_module__WEBPACK_IMPORTED_MODULE_17__["PurchaseHistoryModule"],
            _user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_18__["UserProfileModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/checkout/checkout-form/checkout-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/checkout/checkout-form/checkout-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#checkout {\r\n  width: 100%;\r\n  padding: 20px 0px;\r\n}\r\n\r\n.checkout-heading {\r\n  text-align: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.checkout-grid-container {\r\n  display: grid;\r\n  grid-template-columns: 60% auto;\r\n  grid-gap: 2%;\r\n  /*background-color: #2196F3;*/\r\n  padding: 0px;\r\n  /*border: 1px solid black;*/\r\n}\r\n\r\n/*\r\n.checkout-order-details-container {\r\n  border: 1px solid #ddd;\r\n}\r\n*/\r\n\r\n.checkout-form-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  flex-wrap: wrap;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.checkout-form-container, .checkout-order-details-container {\r\n  padding: 0px;\r\n}\r\n\r\n.form-field {\r\n  display: block;\r\n  width: 100%;\r\n  height: 34px;\r\n  padding: 6px 12px;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: #555;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n}\r\n\r\n.payment-flex-row1 {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.payment-flex-row1-cardexpiry {\r\n  width: 45%;\r\n}\r\n\r\n.payment-flex-row1-cardcvc {\r\n  width: 45%;\r\n}\r\n\r\n.checkout-form-item {\r\n  flex-basis: 50%;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n.items-container {\r\n  border: 1px solid #ddd;\r\n  padding: 20px;\r\n}\r\n\r\n.items-table {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n.items-table td {\r\n  border-top: 1px solid #ddd;\r\n  padding: 8px;\r\n}\r\n\r\n.items-table tr:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.product-column {\r\n  width: 40%;\r\n}\r\n\r\n.price-column {\r\n  width: 40%;\r\n  text-align: right;\r\n}\r\n\r\n.quantity-column {\r\n  width: 20%;\r\n  text-align: right;\r\n}\r\n\r\n.checkout-media-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.checkout-subtotal-title, .checkout-shipping-title, .checkout-grand-total-title {\r\n  text-align: left;\r\n}\r\n\r\n.checkout-subtotal-value, .checkout-shipping-value, .checkout-grand-total-value {\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQtZm9ybS9jaGVja291dC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFJQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC1mb3JtL2NoZWNrb3V0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGVja291dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5jaGVja291dC1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5jaGVja291dC1ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAyJTtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7Ki9cclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xyXG59XHJcblxyXG4vKlxyXG4uY2hlY2tvdXQtb3JkZXItZGV0YWlscy1jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuKi9cclxuXHJcbi5jaGVja291dC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uY2hlY2tvdXQtZm9ybS1jb250YWluZXIsIC5jaGVja291dC1vcmRlci1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICBjb2xvcjogIzU1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5wYXltZW50LWZsZXgtcm93MSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnBheW1lbnQtZmxleC1yb3cxLWNhcmRleHBpcnkge1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5wYXltZW50LWZsZXgtcm93MS1jYXJkY3ZjIHtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uY2hlY2tvdXQtZm9ybS1pdGVtIHtcclxuICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbXMtY29udGFpbmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5pdGVtcy10YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLml0ZW1zLXRhYmxlIHRkIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5pdGVtcy10YWJsZSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLnByb2R1Y3QtY29sdW1uIHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4ucHJpY2UtY29sdW1uIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucXVhbnRpdHktY29sdW1uIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2hlY2tvdXQtbWVkaWEtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja291dC1zdWJ0b3RhbC10aXRsZSwgLmNoZWNrb3V0LXNoaXBwaW5nLXRpdGxlLCAuY2hlY2tvdXQtZ3JhbmQtdG90YWwtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jaGVja291dC1zdWJ0b3RhbC12YWx1ZSwgLmNoZWNrb3V0LXNoaXBwaW5nLXZhbHVlLCAuY2hlY2tvdXQtZ3JhbmQtdG90YWwtdmFsdWUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout-form/checkout-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/checkout/checkout-form/checkout-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: CheckoutFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutFormComponent", function() { return CheckoutFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_round_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/round.module */ "./src/app/modules/round.module.ts");




let CheckoutFormComponent = class CheckoutFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.cardNumberMsg = "";
        this.cardExpiryMsg = "";
        this.cardCVCMsg = "";
        this.cardMsg = "";
        this.nameMsg = "";
        this.addressLine1Msg = "";
        this.cityMsg = "";
        this.countryMsg = "";
        this.stripeTokenEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.createForm();
        this.initCard();
    }
    createForm() {
        this.shoppingCartCheckoutForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shippingAddress: this.fb.group({
                addressLine1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine2: [""],
                city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                state: [""],
                zip: [""],
                country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    }
    initCard() {
        this.stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
        this.elements = this.stripe.elements();
        this.cardNumber = this.elements.create('cardNumber', { placeholder: "Use 4242 4242 4242 4242" });
        this.cardExpiry = this.elements.create('cardExpiry');
        this.cardCvc = this.elements.create('cardCvc');
        // this.postalCode = this.elements.create('postalCode');
        this.cardNumber.mount('#cardNumber-element');
        this.cardExpiry.mount('#cardExpiry-element');
        this.cardCvc.mount('#cardCvc-element');
        // this.postalCode.mount('#postalCode-element');
    }
    clearMsg() {
        this.errorMsg = "";
        this.cardNumberMsg = "";
        this.cardExpiryMsg = "";
        this.cardCVCMsg = "";
        this.cardMsg = "";
        this.nameMsg = "";
        this.addressLine1Msg = "";
        this.cityMsg = "";
        this.countryMsg = "";
    }
    coinPriceDisplay(price) {
        return price.toFixed(2);
    }
    coinPrice(price, qty = 1) {
        // console.log(this.round(33 * 1.287168 * 2, 2));
        return (Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_3__["round"])(price * this.currency.rate, 2) * qty).toFixed(2);
    }
    // this function is used so that the html template can access the round function module
    roundPrice(num, precision) {
        return Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_3__["round"])(num, precision);
    }
    checkCheckoutFormFields(checkoutFormValue) {
        if (checkoutFormValue.name == "") {
            this.nameMsg = "Full Name is required";
        }
        if (checkoutFormValue.shippingAddress.addressLine1 == "") {
            this.addressLine1Msg = "Address Line 1 is required";
        }
        if (checkoutFormValue.shippingAddress.city == "") {
            this.cityMsg = "City is required";
        }
        if (checkoutFormValue.shippingAddress.country == "") {
            this.countryMsg = "Country is required";
        }
    }
    checkStripeTokenError(err) {
        if (err.code == "invalid_number") {
            this.cardNumberMsg = err.message;
        }
        else if (err.code == "incorrect_number") {
            this.cardNumberMsg = err.message;
        }
        else if (err.code == "incomplete_number") {
            this.cardNumberMsg = err.message;
        }
        else if (err.code == "incomplete_expiry") {
            this.cardExpiryMsg = err.message;
        }
        else if (err.code == "invalid_expiry_month") {
            this.cardExpiryMsg = err.message;
        }
        else if (err.code == "invalid_expiry_year") {
            this.cardExpiryMsg = err.message;
        }
        else if (err.code == "invalid_expiry_year_past") {
            this.cardExpiryMsg = err.message;
        }
        else if (err.code == "incomplete_cvc") {
            this.cardCVCMsg = err.message;
        }
        else if (err.code == "incorrect_cvc") {
            this.cardCVCMsg = err.message;
        }
        else if (err.code == "invalid_cvc") {
            this.cardCVCMsg = err.message;
        }
        else if (err.code == "expired_card") {
            this.cardMsg = err.message;
        }
        else if (err.code == "card_declined") {
            this.cardMsg = err.message;
        }
        else if (err.code == "missing") {
            this.cardMsg = err.message;
        }
        else if (err.code == "processing_error") {
            this.cardMsg = err.message;
        }
        else if (err.code == "invalid_swipe_data") {
            this.cardMsg = err.message;
        }
    }
    createToken(checkoutForm) {
        this.clearMsg();
        if (!checkoutForm.valid) {
            this.checkCheckoutFormFields(checkoutForm.value);
        }
        else {
            // console.log(_shoppingCartCheckoutForm.controls.shippingAddress.controls);
            this.stripe.createToken(this.cardNumber, {
                name: checkoutForm.value.name,
                address_line1: checkoutForm.value.shippingAddress.addressLine1,
                address_line2: checkoutForm.value.shippingAddress.addressLine2,
                address_city: checkoutForm.value.shippingAddress.city,
                address_state: checkoutForm.value.shippingAddress.state,
                address_zip: checkoutForm.value.shippingAddress.zip,
                address_country: checkoutForm.value.shippingAddress.country
            })
                .then((result) => {
                if (result.error) {
                    this.checkStripeTokenError(result.error);
                }
                else {
                    this.stripeTokenEmitter.emit(result.token);
                }
            });
        }
    }
};
CheckoutFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckoutFormComponent.prototype, "cartItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckoutFormComponent.prototype, "currency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckoutFormComponent.prototype, "cartTotalPrice", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckoutFormComponent.prototype, "errorMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CheckoutFormComponent.prototype, "stripeTokenEmitter", void 0);
CheckoutFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-form',
        template: __webpack_require__(/*! raw-loader!./checkout-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout-form/checkout-form.component.html"),
        styles: [__webpack_require__(/*! ./checkout-form.component.css */ "./src/app/checkout/checkout-form/checkout-form.component.css")]
    })
], CheckoutFormComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _modules_round_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/round.module */ "./src/app/modules/round.module.ts");






let CheckoutComponent = class CheckoutComponent {
    constructor(shoppingcart, route, ngRedux) {
        this.shoppingcart = shoppingcart;
        this.route = route;
        this.ngRedux = ngRedux;
        this.errorMsg = "";
        this.cartItems = []; // this array variable stores the shopping cart item objects
        this.cartTotalPrice = 0; // this variable stores the total price of all the items in the shopping cart
        this.total_qty = 0; // stores the number of items in the variable and this number is shown beside the shopping cart link
        this.currency = {
            currency: "USD",
            forex: "USD/USD",
            rate: 1
        };
    }
    ngOnInit() {
        this.checkCart();
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    }
    convertTotalPrice() {
        if (this.cartItems.length !== 0) {
            if (this.currency.rate == 1) {
                this.cartTotalPrice = 0;
                this.cartItems.map(x => {
                    this.cartTotalPrice = this.cartTotalPrice + x.price;
                });
            }
            else {
                this.cartTotalPrice = 0;
                this.cartItems.map(x => {
                    this.cartTotalPrice = this.cartTotalPrice + (Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_5__["round"])(x.item.price * this.currency.rate, 2) * x.qty);
                });
            }
        }
    }
    getCurrencyRate() {
        this.currencySubscription = this.ngRedux.select()
            .subscribe(newCurrency => {
            // this.currencyRate = newCurrency.switchCurrencyReducer.currency.rate;
            this.currency = newCurrency.switchCurrencyReducer.currency;
            this.convertTotalPrice(); // converts the price using the selected currency
        });
    }
    checkCart() {
        this.shoppingcart.cartCheckout()
            .subscribe((data) => {
            if (data.redirect == 'home') {
                this.route.navigate(['/home']);
                console.log('no items in cart');
            }
            else if (data.redirect == 'login') {
                this.route.navigate(['/login']);
            }
            else {
                this.cartItems = data.coins;
                console.log(data.coins);
                // this.cartTotalPrice = data.totalPrice;
                this.getCurrencyRate();
                // console.log(this.cartItems);
            }
            this.total_qty = data.totalQuantity;
        }, err => console.log(err), () => console.log('checkout done'));
    }
    stripeTokenHandler(token) {
        this.shoppingcart.makeCharge(token.id, this.currency)
            .subscribe((data) => {
            if (data.success) {
                this.route.navigate(['/order_confirmation/' + data.orderID]);
                console.log("charge success");
                // console.log(data.orderID);
            }
        }, err => {
            console.log(err.error.msg);
            this.errorMsg = err.error.msg;
        }, () => { console.log('Checkout complete'); });
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _checkout_form_checkout_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout-form/checkout-form.component */ "./src/app/checkout/checkout-form/checkout-form.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/check-auth.service */ "./src/app/services/check-auth.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");












const checkoutRoutes = [
    { path: 'checkout', component: _checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"], canActivate: [_services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__["IsAuthGuard"]] }
];
let CheckoutModule = class CheckoutModule {
};
CheckoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"],
            _checkout_form_checkout_form_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutFormComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(checkoutRoutes),
            _header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_11__["FooterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__["IsAuthGuard"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], CheckoutModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    /* Set the fixed height of the footer here */\r\n    background-color: #21313F;\r\n    padding: 20px 0px;\r\n  }\r\n\r\n.footer-author {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMzEzRjtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIH1cclxuXHJcbi5mb290ZXItYXV0aG9yIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");




let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
        ]
    })
], FooterModule);



/***/ }),

/***/ "./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#forgotPwForm {\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXVzZXItcGFzc3dvcmQvZm9yZ290LXVzZXItcGFzc3dvcmQtZm9ybS9mb3Jnb3QtdXNlci1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtdXNlci1wYXNzd29yZC9mb3Jnb3QtdXNlci1wYXNzd29yZC1mb3JtL2ZvcmdvdC11c2VyLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb3Jnb3RQd0Zvcm0ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ForgotUserPasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotUserPasswordFormComponent", function() { return ForgotUserPasswordFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ForgotUserPasswordFormComponent = class ForgotUserPasswordFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.forgotPasswordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emailMsg = '';
    }
    ngOnInit() {
        this.createForm();
    }
    clearMsg() {
        this.emailMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
    }
    createForm() {
        this.forgotPwForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
        });
    }
    resetPassword(_forgotPwForm) {
        this.clearMsg();
        // console.log(_forgotPwForm);
        if (_forgotPwForm.controls.email.errors) {
            if (_forgotPwForm.controls.email.errors.required) {
                this.emailMsg = "Email is required";
            }
            else {
                this.emailMsg = "Invalid email address";
            }
        }
        else {
            let email = _forgotPwForm.controls.email.value;
            this.forgotPasswordEmitter.emit({ email });
            _forgotPwForm.reset();
        }
    }
};
ForgotUserPasswordFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ForgotUserPasswordFormComponent.prototype, "errorMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ForgotUserPasswordFormComponent.prototype, "successMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ForgotUserPasswordFormComponent.prototype, "forgotPasswordEmitter", void 0);
ForgotUserPasswordFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-user-password-form',
        template: __webpack_require__(/*! raw-loader!./forgot-user-password-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.html"),
        styles: [__webpack_require__(/*! ./forgot-user-password-form.component.css */ "./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.css")]
    })
], ForgotUserPasswordFormComponent);



/***/ }),

/***/ "./src/app/forgot-user-password/forgot-user-password.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/forgot-user-password/forgot-user-password.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC11c2VyLXBhc3N3b3JkL2ZvcmdvdC11c2VyLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forgot-user-password/forgot-user-password.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/forgot-user-password/forgot-user-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ForgotUserPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotUserPasswordComponent", function() { return ForgotUserPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");





let ForgotUserPasswordComponent = class ForgotUserPasswordComponent {
    constructor(userService, shoppingCart, _router) {
        this.userService = userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.emailMsg = '';
        this.errorMsg = '';
        this.successMsg = '';
        this.total_qty = 0;
    }
    ngOnInit() {
        this.getTotalQuantity();
    }
    // The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
    clearMsg() {
        this.errorMsg = "";
        this.successMsg = "";
    }
    resetPassword(event) {
        this.clearMsg();
        this.userService.forgotPassword(event.email)
            .subscribe(data => {
            this.successMsg = 'An email has been sent to ' + event.email + ' to reset your password';
        }, err => {
            this.errorMsg = err.error.msg;
        }, () => console.log('reset password submitted'));
    }
};
ForgotUserPasswordComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ForgotUserPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-user-password',
        template: __webpack_require__(/*! raw-loader!./forgot-user-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-user-password/forgot-user-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-user-password.component.css */ "./src/app/forgot-user-password/forgot-user-password.component.css")]
    })
], ForgotUserPasswordComponent);



/***/ }),

/***/ "./src/app/forgot-user-password/forgot-user-password.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/forgot-user-password/forgot-user-password.module.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotUserPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotUserPasswordModule", function() { return ForgotUserPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/check-not-auth.service */ "./src/app/services/check-not-auth.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _forgot_user_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-user-password.component */ "./src/app/forgot-user-password/forgot-user-password.component.ts");
/* harmony import */ var _forgot_user_password_form_forgot_user_password_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-user-password-form/forgot-user-password-form.component */ "./src/app/forgot-user-password/forgot-user-password-form/forgot-user-password-form.component.ts");













const forgotUserPasswordRoutes = [
    { path: 'forgot', component: _forgot_user_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotUserPasswordComponent"], canActivate: [_services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_8__["IsNotAuthGuard"]] }
];
let ForgotUserPasswordModule = class ForgotUserPasswordModule {
};
ForgotUserPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _forgot_user_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotUserPasswordComponent"],
            _forgot_user_password_form_forgot_user_password_form_component__WEBPACK_IMPORTED_MODULE_12__["ForgotUserPasswordFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(forgotUserPasswordRoutes),
            _header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_10__["FooterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"],
            _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_8__["IsNotAuthGuard"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ForgotUserPasswordModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-items-right{\r\n  margin-left: auto;\r\n}\r\n\r\n.topnav {\r\n    background-color: #00aace;\r\n    /*overflow: hidden;*/\r\n    display: -webkit-box;\r\n    display: flex;\r\n    position: fixed;\r\n    width: 100%;\r\n    /*height: 68px;*/\r\n    top: 0px;\r\n}\r\n\r\n#mobile-menus {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin-left: auto;\r\n}\r\n\r\na.topnav-home-link {\r\n  font-weight: bold;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.topnav a {\r\n    /*float: left;*/\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 20px 16px;\r\n    text-decoration: none;\r\n    /*font-size: 17px;*/\r\n}\r\n\r\n/* Add an active class to highlight the current page */\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n\r\n.buttonlink {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Dropdown container - needed to position the dropdown content */\r\n\r\n/*\r\n.dropdown {\r\n    //float: left;\r\n    //overflow: hidden;\r\n}\r\n*/\r\n\r\n/* Style the dropdown button to fit inside the topnav */\r\n\r\n/*\r\n.dropdown .dropbtn {\r\n    font-size: 17px;\r\n    border: none;\r\n    outline: none;\r\n    color: white;\r\n    padding: 14px 16px;\r\n    background-color: inherit;\r\n    font-family: inherit;\r\n    margin: 0;\r\n}\r\n*/\r\n\r\n.dropbtn:hover,\r\n.dropbtn:active {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Style the dropdown content (hidden by default) */\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: fixed;\r\n    top:64px;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 999;\r\n}\r\n\r\n/* Style the links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n    float: none;\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n/* Add a dark background on topnav links and the dropdown button on hover */\r\n\r\n.topnav a:hover{\r\n    background-color: #00aace;\r\n    color: #000000;\r\n}\r\n\r\n/* Add a grey background to dropdown links on hover */\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #ddd;\r\n    color: #000000;\r\n}\r\n\r\n/* Show the dropdown menu when the user moves the mouse over the dropdown button */\r\n\r\n/*\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n*/\r\n\r\n#burger {\r\n  visibility: hidden;\r\n  height: 10px;\r\n}\r\n\r\n.showAccount {\r\n  display:block;\r\n}\r\n\r\n.showCurrency {\r\n  display:block;\r\n}\r\n\r\n@media only screen and (max-width: 823px) {\r\n  .topnav{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n\r\n    .mobile-menus-visible {\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      margin: 0px;\r\n      width: 100%;\r\n      z-index: 999;\r\n\r\n  }\r\n\r\n  .dropdown-content {\r\n    display: none;\r\n    position: static;\r\n    top:48px;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n\r\n  .dropdown-content a {\r\n    float: none;\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n  .dropdown {\r\n    margin: 0px;\r\n  }\r\n\r\n  .showAccount {\r\n    display:block;\r\n  }\r\n\r\n  .showCurrency {\r\n    display:block;\r\n  }\r\n\r\n  #burger {\r\n  visibility: visible;\r\n    display: inline-block;\r\n    position: fixed;\r\n    right: 10px;\r\n    padding: 0px;\r\n    top: 10px;\r\n    font-size: 30px;\r\n  }\r\n\r\n    #burger:hover {\r\n    background-color: #00aace;\r\n    color: white;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 823px) {\r\n  .mobile-menus-hidden a {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsOENBQThDOztBQUM5QztJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQSxzREFBc0Q7O0FBQ3REO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGlFQUFpRTs7QUFFakU7Ozs7O0NBS0M7O0FBR0QsdURBQXVEOztBQUN2RDs7Ozs7Ozs7Ozs7Q0FXQzs7QUFFRDs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBLG1EQUFtRDs7QUFDbkQ7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxZQUFZO0FBQ2hCOztBQUVBLHdDQUF3Qzs7QUFDeEM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSwyRUFBMkU7O0FBQzNFO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUEscURBQXFEOztBQUNyRDtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBLGtGQUFrRjs7QUFDbEY7Ozs7Q0FJQzs7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCOztJQUVFO01BQ0Usb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsV0FBVztNQUNYLFdBQVc7TUFDWCxZQUFZOztFQUVoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztFQUVFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0VBQ0EsbUJBQW1CO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtFQUNqQjs7SUFFRTtJQUNBLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWl0ZW1zLXJpZ2h0e1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4udG9wbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFhY2U7XHJcbiAgICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qaGVpZ2h0OiA2OHB4OyovXHJcbiAgICB0b3A6IDBweDtcclxufVxyXG5cclxuI21vYmlsZS1tZW51cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuYS50b3BuYXYtaG9tZS1saW5rIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuLnRvcG5hdiBhIHtcclxuICAgIC8qZmxvYXQ6IGxlZnQ7Ki9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKmZvbnQtc2l6ZTogMTdweDsqL1xyXG59XHJcblxyXG4vKiBBZGQgYW4gYWN0aXZlIGNsYXNzIHRvIGhpZ2hsaWdodCB0aGUgY3VycmVudCBwYWdlICovXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbmxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRHJvcGRvd24gY29udGFpbmVyIC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcblxyXG4vKlxyXG4uZHJvcGRvd24ge1xyXG4gICAgLy9mbG9hdDogbGVmdDtcclxuICAgIC8vb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4qL1xyXG5cclxuXHJcbi8qIFN0eWxlIHRoZSBkcm9wZG93biBidXR0b24gdG8gZml0IGluc2lkZSB0aGUgdG9wbmF2ICovXHJcbi8qXHJcbi5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiovXHJcblxyXG4uZHJvcGJ0bjpob3ZlcixcclxuLmRyb3BidG46YWN0aXZlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBkcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDo2NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLyogQWRkIGEgZGFyayBiYWNrZ3JvdW5kIG9uIHRvcG5hdiBsaW5rcyBhbmQgdGhlIGRyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAqL1xyXG4udG9wbmF2IGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWNlO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBtb3VzZSBvdmVyIHRoZSBkcm9wZG93biBidXR0b24gKi9cclxuLypcclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiovXHJcbiNidXJnZXIge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zaG93QWNjb3VudCB7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuLnNob3dDdXJyZW5jeSB7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjNweCkge1xyXG4gIC50b3BuYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICAgLm1vYmlsZS1tZW51cy12aXNpYmxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB0b3A6NDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gIC5kcm9wZG93biB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcblxyXG4gIC5zaG93QWNjb3VudCB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnNob3dDdXJyZW5jeSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuXHJcbiAgI2J1cmdlciB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgICAjYnVyZ2VyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyM3B4KSB7XHJcbiAgLm1vYmlsZS1tZW51cy1oaWRkZW4gYSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);






let HeaderComponent = class HeaderComponent {
    constructor(_userService, shoppingCart, _router, ngRedux) {
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
    }
    clickout(event) {
        var ev = event.target;
        if (!ev.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('showAccount')) {
                    openDropdown.classList.remove('showAccount');
                }
                else if (openDropdown.classList.contains('showCurrency')) {
                    openDropdown.classList.remove('showCurrency');
                }
            }
        }
    }
    ngOnInit() {
        this.checkAuthentication();
        this.checkCurrency();
    }
    checkCurrency() {
        this.shoppingCart.checkCurrency()
            .subscribe((data) => {
            this.selectedCurrency = data.selectedCurrency;
            // this.outputSelectedCurrency.emit(data.selectedCurrency);
            this.ngRedux.dispatch({ type: this.selectedCurrency });
        }, err => {
            console.log(err);
        }, () => console.log("check currency complete"));
    }
    checkAuthentication() {
        this._userService.isLoggedIn()
            .subscribe(data => {
            if (data.authenticated) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        }, err => {
            console.log(err.msg);
        }, () => console.log('authentication complete'));
    }
    changeCurrency(currencySymbol) {
        this.shoppingCart.changeCurrency(currencySymbol)
            .subscribe((data) => {
            this.selectedCurrency = data.selectedCurrency;
            this.ngRedux.dispatch({ type: this.selectedCurrency });
        }, err => console.log(err), () => console.log('change currency complete'));
    }
    userLogout() {
        this._userService.logoutfn()
            .subscribe(data => {
            this.ngRedux.dispatch({ type: "LOGOUT" });
            // Checks the authentication of the user to get the latest update so that Angular will re-render the page when it reloads the same URL.
            this.checkAuthentication();
            // this.checkCurrency();
            this._router.navigate(["/logout"]);
        }, err => console.log('Internal server error'), () => console.log('logout complete'));
    }
    /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
    useraccountDropdown() {
        document.getElementById('useraccountDropdown').classList.toggle('showAccount');
        document.getElementById('currencyDropdown').classList.remove('showCurrency');
    }
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    currencyDropdown() {
        if (this.loggedIn) {
            document.getElementById('currencyDropdown').classList.toggle('showCurrency');
            document.getElementById('useraccountDropdown').classList.remove('showAccount');
        }
        else {
            document.getElementById('currencyDropdown').classList.toggle('showCurrency');
        }
    }
    burgertoggle() {
        var x = document.getElementById("mobile-menus");
        if (x.className === "mobile-menus-hidden") {
            x.className = "mobile-menus-visible";
        }
        else {
            x.className = "mobile-menus-hidden";
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "totalQuantity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
], HeaderComponent.prototype, "clickout", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_check_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/check-auth.service */ "./src/app/services/check-auth.service.ts");
/* harmony import */ var _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/check-not-auth.service */ "./src/app/services/check-not-auth.service.ts");









const headerRoutes = [
//{ path: 'home', component: HomepageComponent},
//{ path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
//{ path: 'signup', component: SignupComponent, canActivate: [isNotAuthGuard]},
//{ path: 'cart', component: ShoppingCartComponent},
//{ path: 'change_user_password', component: ChangeUserPasswordComponent, canActivate: [isAuthGuard]}
//{ path: '', redirectTo: '/home', pathMatch: 'full'}
];
let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(headerRoutes)
        ],
        exports: [
            _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_check_auth_service__WEBPACK_IMPORTED_MODULE_7__["IsAuthGuard"],
            _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_8__["IsNotAuthGuard"]
        ]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/homepage/Homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/Homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_intro_homepage_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage-intro/homepage-intro.component */ "./src/app/homepage/homepage-intro/homepage-intro.component.ts");
/* harmony import */ var _homepage_about_homepage_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage-about/homepage-about.component */ "./src/app/homepage/homepage-about/homepage-about.component.ts");
/* harmony import */ var _homepage_shop_homepage_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage-shop/homepage-shop.component */ "./src/app/homepage/homepage-shop/homepage-shop.component.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_load_coin_info_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/load.coin.info.service */ "./src/app/services/load.coin.info.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");





 //this is a container
 //this is a presentation component
 //this is a presentation component
 //this is a presentation component




const homepageRoutes = [
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
let HomepageModule = class HomepageModule {
};
HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
            _homepage_intro_homepage_intro_component__WEBPACK_IMPORTED_MODULE_6__["HomepageIntroComponent"],
            _homepage_about_homepage_about_component__WEBPACK_IMPORTED_MODULE_7__["HomepageAboutComponent"],
            _homepage_shop_homepage_shop_component__WEBPACK_IMPORTED_MODULE_8__["HomepageShopComponent"]
        ],
        providers: [
            _services_load_coin_info_service__WEBPACK_IMPORTED_MODULE_10__["LoadCoinInfoService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartService"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(homepageRoutes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"]
        ],
        exports: [
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]
        ]
    })
], HomepageModule);



/***/ }),

/***/ "./src/app/homepage/homepage-about/homepage-about.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/homepage/homepage-about/homepage-about.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homepage-about {\r\n    width: 100%;\r\n    padding: 20px 0px;\r\n}\r\n\r\n.homepage-about-heading {\r\n  text-align: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.homepage-about-heading + p {\r\n  text-align: center;\r\n}\r\n\r\n.flexbox {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    overflow: hidden;\r\n  }\r\n\r\n.panel--container {\r\n    border: 1px solid;\r\n    border-top: none;\r\n    border-radius: 7px;\r\n    border-color: #00aace;\r\n    flex-basis: 28%;\r\n  }\r\n\r\n.panel--header {\r\n    color: #ffffff;\r\n    background-color: #00aace;\r\n    /*border: 1px solid;\r\n    border-color: #00aace;*/\r\n    text-align: center;\r\n    /*margin-top: 0px;*/\r\n    padding: 10px 0px;\r\n    border-top-left-radius: 7px;\r\n    border-top-right-radius: 7px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.panel--container ul {\r\n    padding: 0px;\r\n    text-align: center;\r\n  }\r\n\r\n.panel--container li {\r\n    list-style-type: none;\r\n  }\r\n\r\n@media only screen and (max-width: 823px){\r\n  .flexbox {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    overflow: hidden;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UtYWJvdXQvaG9tZXBhZ2UtYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDhCQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCOzJCQUN1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUY7RUFDRTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS1hYm91dC9ob21lcGFnZS1hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWVwYWdlLWFib3V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5ob21lcGFnZS1hYm91dC1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5ob21lcGFnZS1hYm91dC1oZWFkaW5nICsgcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleGJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC0tY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwYWFjZTtcclxuICAgIGZsZXgtYmFzaXM6IDI4JTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC0taGVhZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFjZTtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGFhY2U7Ki9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qbWFyZ2luLXRvcDogMHB4OyovXHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC0tY29udGFpbmVyIHVsIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC0tY29udGFpbmVyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyM3B4KXtcclxuICAuZmxleGJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/homepage/homepage-about/homepage-about.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/homepage-about/homepage-about.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomepageAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageAboutComponent", function() { return HomepageAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageAboutComponent = class HomepageAboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage-about',
        template: __webpack_require__(/*! raw-loader!./homepage-about.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage-about/homepage-about.component.html"),
        styles: [__webpack_require__(/*! ./homepage-about.component.css */ "./src/app/homepage/homepage-about/homepage-about.component.css")]
    })
], HomepageAboutComponent);



/***/ }),

/***/ "./src/app/homepage/homepage-intro/homepage-intro.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/homepage/homepage-intro/homepage-intro.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homepage-intro {\r\n    background: #00aace;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.section-title {\r\n    color: white;\r\n    font-size: 64px;\r\n}\r\n\r\n.homepage-intro-info {\r\n  color: white;\r\n  font-size: 24px;\r\n}\r\n\r\n.homepage-intro-info + div {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UtaW50cm8vaG9tZXBhZ2UtaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UtaW50cm8vaG9tZXBhZ2UtaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lcGFnZS1pbnRybyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBhYWNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbn1cclxuXHJcbi5ob21lcGFnZS1pbnRyby1pbmZvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uaG9tZXBhZ2UtaW50cm8taW5mbyArIGRpdiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage-intro/homepage-intro.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/homepage-intro/homepage-intro.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomepageIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageIntroComponent", function() { return HomepageIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageIntroComponent = class HomepageIntroComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage-intro',
        template: __webpack_require__(/*! raw-loader!./homepage-intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage-intro/homepage-intro.component.html"),
        styles: [__webpack_require__(/*! ./homepage-intro.component.css */ "./src/app/homepage/homepage-intro/homepage-intro.component.css")]
    })
], HomepageIntroComponent);



/***/ }),

/***/ "./src/app/homepage/homepage-shop/homepage-shop.component.css":
/*!********************************************************************!*\
  !*** ./src/app/homepage/homepage-shop/homepage-shop.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homepage-shop {\r\n    width: 100%;\r\n    background: #f1f1f1;\r\n    padding: 20px 0px;\r\n}\r\n\r\n.homepage-shop-heading {\r\n  text-align: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.flexbox-shop {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.item--container {\r\n  background: white;\r\n  border: 1px solid;\r\n  border-radius: 7px;\r\n  border-color: #00aace;\r\n  text-align: center;\r\n  flex-basis: 28%;\r\n  margin-top: 10px;\r\n  padding: 10px 0px;\r\n}\r\n\r\n.homepage-shop-coin-img {\r\n  width: 60%;\r\n}\r\n\r\ninput[type=text], select {\r\n  padding: 5px 5px;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  margin: 0px 5px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\n.item-container-button {\r\n  background-color: white;\r\n  color: #00aace;\r\n  border: 1px solid;\r\n  border-color: #00aace;\r\n  border-radius: 5px;\r\n  padding: 5px 10px;\r\n  margin: 0px 5px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n.item-container-button:hover,\r\n.item-container-button:active {\r\n  background-color: #00aace;\r\n  color: white;\r\n  border: 1px solid;\r\n  border-color: #00aace;\r\n  border-radius: 5px;\r\n  padding: 5px 10px;\r\n  margin: 0px 5px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n.item-container-button:focus {\r\n  outline: none;\r\n  border-radius: 5px;\r\n  box-shadow: 0px 0px 8px #007b94;\r\n}\r\n\r\n.shop-quantity-input {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2Utc2hvcC9ob21lcGFnZS1zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS1zaG9wL2hvbWVwYWdlLXNob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lcGFnZS1zaG9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcblxyXG4uaG9tZXBhZ2Utc2hvcC1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5mbGV4Ym94LXNob3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLml0ZW0tLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYWFjZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1iYXNpczogMjglO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5ob21lcGFnZS1zaG9wLWNvaW4taW1nIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMHB4IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0tY29udGFpbmVyLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMwMGFhY2U7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBhYWNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW46IDBweCA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaXRlbS1jb250YWluZXItYnV0dG9uOmhvdmVyLFxyXG4uaXRlbS1jb250YWluZXItYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFjZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBhYWNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW46IDBweCA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaXRlbS1jb250YWluZXItYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjMDA3Yjk0O1xyXG59XHJcblxyXG4uc2hvcC1xdWFudGl0eS1pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage-shop/homepage-shop.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/homepage/homepage-shop/homepage-shop.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomepageShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageShopComponent", function() { return HomepageShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_round_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/round.module */ "./src/app/modules/round.module.ts");



let HomepageShopComponent = class HomepageShopComponent {
    constructor() {
        this.addItemEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    // For display purposes this function will round and add 2 decimal places to a number
    coinPrice(price) {
        return (Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_2__["round"])(price * this.currency.rate, 2)).toFixed(2);
    }
    addItemToCart(coinID, itemQty) {
        // emit the change back to the parent component
        this.addItemEmitter.emit({ coinID, itemQty }); // since emit parameter only takes 1 parameter, we must pass parameter back as object
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomepageShopComponent.prototype, "coinsArray", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomepageShopComponent.prototype, "currency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomepageShopComponent.prototype, "addItemEmitter", void 0);
HomepageShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage-shop',
        template: __webpack_require__(/*! raw-loader!./homepage-shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage-shop/homepage-shop.component.html"),
        styles: [__webpack_require__(/*! ./homepage-shop.component.css */ "./src/app/homepage/homepage-shop/homepage-shop.component.css")]
    })
], HomepageShopComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_load_coin_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.coin.info.service */ "./src/app/services/load.coin.info.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");





let HomepageComponent = class HomepageComponent {
    constructor(loadCoinInfo, shoppingCart, ngRedux) {
        this.loadCoinInfo = loadCoinInfo;
        this.shoppingCart = shoppingCart;
        this.ngRedux = ngRedux;
        this.coins = null; // the coins array variable stores the coin objects
        this.total_qty = 0; // stores the number of items in the variable and this number is shown beside the shopping cart link
        this.total_price = 0; // stores the total price of the shopping cart and this number is shown beside the shopping cart link
        this.currency = {
            currency: "USD",
            forex: "USD/USD",
            rate: 1
        };
    }
    ngOnInit() {
        this.displayAllCoins();
        this.getTotalQuantity();
    }
    // The displayAllCoins function will display the coins available from the mongoDB backend
    displayAllCoins() {
        this.loadCoinInfo.getCoins() // getCoins observable gets the coins from the mongoDB backend and stores it into the coins array
            .subscribe((data) => {
            // maps the contents of the returned objects to coins[] array. JSON.parse will remove the quotes in the string.
            // this.coins=data.msg.map((s:any)=>JSON.parse(JSON.stringify(s)));
            this.coins = data.msg;
            this.getCurrencyRate();
        }, err => console.log('error display all coins'), () => console.log('complete display all coins'));
    }
    // The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
    getCurrencyRate() {
        this.currencySubscription = this.ngRedux.select()
            .subscribe(newCurrency => {
            this.currency = newCurrency.switchCurrencyReducer.currency;
        });
    }
    isValidInput(input) {
        if (Number(input) < 1 || !Number.isInteger(Number(input))) {
            return false;
        }
        return true;
    }
    addItemToCart(event) {
        // Checks if the value entered is an integer and greater than 0
        if (!this.isValidInput(event.itemQty)) {
            console.log('invalid value');
        }
        else {
            this.shoppingCart.addItem(event.coinID, event.itemQty)
                .subscribe((data) => {
                this.total_qty = data.totalQuantity;
                this.total_price = data.totalPrice;
            }, err => console.log('error adding coins to cart'), () => console.log('complete adding item to cart'));
        }
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _services_load_coin_info_service__WEBPACK_IMPORTED_MODULE_3__["LoadCoinInfoService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/invoice/invoice-details-products/invoice-details-products.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/invoice/invoice-details-products/invoice-details-products.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-invoice-products {\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.table-invoice-products th {\r\n  background-color: #f5f5f5;\r\n  border-bottom: 2px solid #ddd;\r\n  padding: 10px;\r\n}\r\n\r\ntd {\r\n  padding: 10px;\r\n}\r\n\r\ntable, th, td {\r\n  border: 1px solid #ddd;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.text-align-right {\r\n  text-align: right;\r\n}\r\n\r\n.invoice-product-column {\r\n  width: 40%;\r\n}\r\n\r\n.invoice-price-column, .invoice-quantity-column, .invoice-total-column {\r\n  text-align: right;\r\n  width: 20%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLWRldGFpbHMtcHJvZHVjdHMvaW52b2ljZS1kZXRhaWxzLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS1kZXRhaWxzLXByb2R1Y3RzL2ludm9pY2UtZGV0YWlscy1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWludm9pY2UtcHJvZHVjdHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbi50YWJsZS1pbnZvaWNlLXByb2R1Y3RzIHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSwgdGgsIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmludm9pY2UtcHJvZHVjdC1jb2x1bW4ge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5pbnZvaWNlLXByaWNlLWNvbHVtbiwgLmludm9pY2UtcXVhbnRpdHktY29sdW1uLCAuaW52b2ljZS10b3RhbC1jb2x1bW4ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/invoice/invoice-details-products/invoice-details-products.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/invoice/invoice-details-products/invoice-details-products.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InvoiceDetailsProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsProductsComponent", function() { return InvoiceDetailsProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_round_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/round.module */ "./src/app/modules/round.module.ts");



let InvoiceDetailsProductsComponent = class InvoiceDetailsProductsComponent {
    constructor() { }
    ngOnInit() {
    }
    coinPriceDisplay(price) {
        return price.toFixed(2);
    }
    // this function is used so that the html template can access the round function module
    roundPrice(num, precision) {
        return Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_2__["round"])(num, precision);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InvoiceDetailsProductsComponent.prototype, "orderedProducts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InvoiceDetailsProductsComponent.prototype, "currency", void 0);
InvoiceDetailsProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-details-products',
        template: __webpack_require__(/*! raw-loader!./invoice-details-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/invoice/invoice-details-products/invoice-details-products.component.html"),
        styles: [__webpack_require__(/*! ./invoice-details-products.component.css */ "./src/app/invoice/invoice-details-products/invoice-details-products.component.css")]
    })
], InvoiceDetailsProductsComponent);



/***/ }),

/***/ "./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice-shipping-address {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLWRldGFpbHMtc2hpcHBpbmdhZGRyZXNzL2ludm9pY2UtZGV0YWlscy1zaGlwcGluZ2FkZHJlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLWRldGFpbHMtc2hpcHBpbmdhZGRyZXNzL2ludm9pY2UtZGV0YWlscy1zaGlwcGluZ2FkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLXNoaXBwaW5nLWFkZHJlc3Mge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: InvoiceDetailsShippingaddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsShippingaddressComponent", function() { return InvoiceDetailsShippingaddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InvoiceDetailsShippingaddressComponent = class InvoiceDetailsShippingaddressComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InvoiceDetailsShippingaddressComponent.prototype, "shipToAddress", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InvoiceDetailsShippingaddressComponent.prototype, "shipToName", void 0);
InvoiceDetailsShippingaddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-details-shippingaddress',
        template: __webpack_require__(/*! raw-loader!./invoice-details-shippingaddress.component.html */ "./node_modules/raw-loader/index.js!./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.html"),
        styles: [__webpack_require__(/*! ./invoice-details-shippingaddress.component.css */ "./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.css")]
    })
], InvoiceDetailsShippingaddressComponent);



/***/ }),

/***/ "./src/app/invoice/invoice-details-total/invoice-details-total.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/invoice/invoice-details-total/invoice-details-total.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-invoice-total {\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\ntd {\r\n  padding: 10px;\r\n}\r\n\r\ntable, td {\r\n  border: 1px solid #ddd;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.text-align-right {\r\n  text-align: right;\r\n}\r\n\r\n.subtotal-title-row, .shipping-title-row, .grand-total-title-row {\r\n  width: 80%;\r\n}\r\n\r\n.subtotal-row, .shipping-row, .grand-total-row {\r\n  width: 20%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLWRldGFpbHMtdG90YWwvaW52b2ljZS1kZXRhaWxzLXRvdGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS1kZXRhaWxzLXRvdGFsL2ludm9pY2UtZGV0YWlscy10b3RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWludm9pY2UtdG90YWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLnRleHQtYWxpZ24tcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc3VidG90YWwtdGl0bGUtcm93LCAuc2hpcHBpbmctdGl0bGUtcm93LCAuZ3JhbmQtdG90YWwtdGl0bGUtcm93IHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uc3VidG90YWwtcm93LCAuc2hpcHBpbmctcm93LCAuZ3JhbmQtdG90YWwtcm93IHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/invoice/invoice-details-total/invoice-details-total.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/invoice/invoice-details-total/invoice-details-total.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InvoiceDetailsTotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsTotalComponent", function() { return InvoiceDetailsTotalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_round_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/round.module */ "./src/app/modules/round.module.ts");



let InvoiceDetailsTotalComponent = class InvoiceDetailsTotalComponent {
    constructor() { }
    ngOnInit() {
    }
    coinPriceDisplay(price) {
        return price.toFixed(2);
    }
    // this function is used so that the html template can access the round function module
    roundPrice(num, precision) {
        return Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_2__["round"])(num, precision);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InvoiceDetailsTotalComponent.prototype, "orderSubTotal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InvoiceDetailsTotalComponent.prototype, "currency", void 0);
InvoiceDetailsTotalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-details-total',
        template: __webpack_require__(/*! raw-loader!./invoice-details-total.component.html */ "./node_modules/raw-loader/index.js!./src/app/invoice/invoice-details-total/invoice-details-total.component.html"),
        styles: [__webpack_require__(/*! ./invoice-details-total.component.css */ "./src/app/invoice/invoice-details-total/invoice-details-total.component.css")]
    })
], InvoiceDetailsTotalComponent);



/***/ }),

/***/ "./src/app/invoice/invoice.module.ts":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _invoice_details_shippingaddress_invoice_details_shippingaddress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-details-shippingaddress/invoice-details-shippingaddress.component */ "./src/app/invoice/invoice-details-shippingaddress/invoice-details-shippingaddress.component.ts");
/* harmony import */ var _invoice_details_products_invoice_details_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-details-products/invoice-details-products.component */ "./src/app/invoice/invoice-details-products/invoice-details-products.component.ts");
/* harmony import */ var _invoice_details_total_invoice_details_total_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-details-total/invoice-details-total.component */ "./src/app/invoice/invoice-details-total/invoice-details-total.component.ts");






let InvoiceModule = class InvoiceModule {
};
InvoiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _invoice_details_shippingaddress_invoice_details_shippingaddress_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailsShippingaddressComponent"],
            _invoice_details_products_invoice_details_products_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceDetailsProductsComponent"],
            _invoice_details_total_invoice_details_total_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceDetailsTotalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _invoice_details_shippingaddress_invoice_details_shippingaddress_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailsShippingaddressComponent"],
            _invoice_details_products_invoice_details_products_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceDetailsProductsComponent"],
            _invoice_details_total_invoice_details_total_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceDetailsTotalComponent"]
        ]
    })
], InvoiceModule);



/***/ }),

/***/ "./src/app/login/login-form/login-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loginForm {\r\n  padding: 20px;\r\n}\r\n\r\n.login-info {\r\n  width: 25%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.login-info-signup {\r\n  display: inline-block;\r\n  width: 50%;\r\n  text-align: left;\r\n}\r\n\r\n.login-info-forgot {\r\n  display: inline-block;\r\n  width: 50%;\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbkZvcm0ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1pbmZvIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmxvZ2luLWluZm8tc2lnbnVwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubG9naW4taW5mby1mb3Jnb3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LoginFormComponent = class LoginFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.usernameMsg = "";
        this.passwordMsg = "";
        this.loginEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    clearMsg() {
        this.usernameMsg = "";
        this.passwordMsg = "";
    }
    login(_loginForm) {
        this.clearMsg();
        this.errorMsg = "";
        // console.log(_loginForm);
        if (!_loginForm.valid) {
            if (!_loginForm.controls.username.value) {
                this.usernameMsg = "Username is required";
            }
            if (!_loginForm.controls.password.value) {
                this.passwordMsg = "Password is required";
            }
        }
        else {
            const username = _loginForm.controls.username.value;
            const password = _loginForm.controls.password.value;
            this.loginEmitter.emit({ username, password });
        }
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginFormComponent.prototype, "errorMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginFormComponent.prototype, "loginEmitter", void 0);
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login-form/login-form.component.html"),
        styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login/login-form/login-form.component.css")]
    })
], LoginFormComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(userService, shoppingCart, _router, ngRedux) {
        this.userService = userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.ngRedux = ngRedux;
        this.errorMsg = "";
        this.redirectURL = "";
        this.total_qty = 0;
    }
    ngOnInit() {
        this.getTotalQuantity();
    }
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
    login(event) {
        this.errorMsg = "";
        this.userService.loginfn(event.username, event.password)
            .subscribe(data => {
            let redirect = "";
            this.ngRedux.dispatch({ type: "LOGIN" });
            redirect = sessionStorage.getItem('redirectURL') || "/home";
            this._router.navigate([redirect]);
            sessionStorage.removeItem('redirectURL');
        }, err => {
            this.errorMsg = err.error.msg;
        }, () => console.log('login complete'));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _forgot_user_password_forgot_user_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forgot-user-password/forgot-user-password.component */ "./src/app/forgot-user-password/forgot-user-password.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/check-not-auth.service */ "./src/app/services/check-not-auth.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");















const loginRoutes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_12__["IsNotAuthGuard"]] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], canActivate: [_services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_12__["IsNotAuthGuard"]] },
    { path: 'forgot', component: _forgot_user_password_forgot_user_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotUserPasswordComponent"], canActivate: [_services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_12__["IsNotAuthGuard"]] }
];
let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_13__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_14__["FooterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(loginRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartService"],
            _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_12__["IsNotAuthGuard"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout-msg {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ291dC1tc2cge1xyXG4gIGNvbG9yOiAjM2M3NjNkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");



let LogoutComponent = class LogoutComponent {
    constructor(shoppingCart) {
        this.shoppingCart = shoppingCart;
        this.total_qty = 0;
    }
    ngOnInit() {
        this.getTotalQuantity();
    }
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/logout/logout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/logout/logout.module.ts ***!
  \*****************************************/
/*! exports provided: LogoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutModule", function() { return LogoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/check-not-auth.service */ "./src/app/services/check-not-auth.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");









const logoutRoutes = [
    { path: 'logout', component: _logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], canActivate: [_services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_6__["IsNotAuthGuard"]] }
];
let LogoutModule = class LogoutModule {
};
LogoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(logoutRoutes),
            _header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"]
        ],
        providers: [
            _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_6__["IsNotAuthGuard"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], LogoutModule);



/***/ }),

/***/ "./src/app/modules/array.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/array.module.ts ***!
  \*****************************************/
/*! exports provided: generateArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateArray", function() { return generateArray; });
//This function turns objects into an array
function generateArray(obj) {
    return Object.values(obj);
}


/***/ }),

/***/ "./src/app/modules/round.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/round.module.ts ***!
  \*****************************************/
/*! exports provided: round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
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

/***/ "./src/app/objects/domain.ts":
/*!***********************************!*\
  !*** ./src/app/objects/domain.ts ***!
  \***********************************/
/*! exports provided: DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
const DOMAIN = {
    url: "https://cstoreapi.herokuapp.com" // http://localhost:3333 , https://cstoreapi.herokuapp.com;
};


/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/order-confirmation/order-confirmation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#order-confirmation {\r\n  width: 100%;\r\n  padding: 20px 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvcmRlci1jb25maXJtYXRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/order-confirmation/order-confirmation.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationComponent", function() { return OrderConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");





let OrderConfirmationComponent = class OrderConfirmationComponent {
    constructor(user, shoppingCart, activatedRoute) {
        this.user = user;
        this.shoppingCart = shoppingCart;
        this.activatedRoute = activatedRoute;
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
        this.total_qty = 0; // stores the number of items in the variable and this number is shown beside the shopping cart link
        this.currency = {
            currency: 'USD',
            forex: 'USD/USD',
            rate: 1
        };
        this.activatedRoute.params.subscribe(params => {
            this.orderID = params.id;
            // console.log(this.orderID);
        });
    }
    ngOnInit() {
        this.getTotalQuantity();
        this.getOrderDetails(this.orderID);
    }
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
    getOrderDetails(orderID) {
        this.user.getOrderDetails(orderID)
            .subscribe((data) => {
            this.name = data.orderDetails.name;
            this.shippingAddress = data.orderDetails.address;
            this.orders = data.orderDetails.cart.items;
            this.subTotal = data.orderDetails.cart.totalPrice;
            this.date = data.orderDetails.date;
            this.currency = data.orderDetails.currency;
            // console.log(data.orderDetails);
            // console.log(this.currency);
        }, err => { }, () => console.log('order details complete'));
    }
};
OrderConfirmationComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OrderConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-confirmation',
        template: __webpack_require__(/*! raw-loader!./order-confirmation.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-confirmation/order-confirmation.component.html"),
        styles: [__webpack_require__(/*! ./order-confirmation.component.css */ "./src/app/order-confirmation/order-confirmation.component.css")]
    })
], OrderConfirmationComponent);



/***/ }),

/***/ "./src/app/order-confirmation/order-confirmation.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/order-confirmation/order-confirmation.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrderConfirmationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationModule", function() { return OrderConfirmationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _order_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-confirmation.component */ "./src/app/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/check-auth.service */ "./src/app/services/check-auth.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../invoice/invoice.module */ "./src/app/invoice/invoice.module.ts");












const orderConfirmationRoutes = [
    { path: 'order_confirmation/:id', component: _order_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationComponent"], canActivate: [_services_check_auth_service__WEBPACK_IMPORTED_MODULE_8__["IsAuthGuard"]] }
];
let OrderConfirmationModule = class OrderConfirmationModule {
};
OrderConfirmationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(orderConfirmationRoutes),
            _header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_10__["FooterModule"],
            _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_11__["InvoiceModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"],
            _services_check_auth_service__WEBPACK_IMPORTED_MODULE_8__["IsAuthGuard"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], OrderConfirmationModule);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/password-reset/password-reset.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/password-reset/password-reset.module.ts ***!
  \*********************************************************/
/*! exports provided: PasswordResetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetModule", function() { return PasswordResetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/check-not-auth.service */ "./src/app/services/check-not-auth.service.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/password-reset/password-reset/password-reset.component.ts");
/* harmony import */ var _password_reset_password_reset_form_password_reset_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./password-reset/password-reset-form/password-reset-form.component */ "./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");













const passwordResetRoutes = [
    { path: 'reset/:token', component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_9__["PasswordResetComponent"], canActivate: [_services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_8__["IsNotAuthGuard"]] }
];
let PasswordResetModule = class PasswordResetModule {
};
PasswordResetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_9__["PasswordResetComponent"],
            _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_9__["PasswordResetComponent"],
            _password_reset_password_reset_form_password_reset_form_component__WEBPACK_IMPORTED_MODULE_10__["PasswordResetFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(passwordResetRoutes),
            _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"],
            _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_8__["IsNotAuthGuard"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PasswordResetModule);



/***/ }),

/***/ "./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#resetPwForm{\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQtZm9ybS9wYXNzd29yZC1yZXNldC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC1mb3JtL3Bhc3N3b3JkLXJlc2V0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXNldFB3Rm9ybXtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PasswordResetFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetFormComponent", function() { return PasswordResetFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PasswordResetFormComponent = class PasswordResetFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.resetPasswordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newPwMsg = "";
        this.confirmPwMsg = "";
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.resetPwForm = this.fb.group({
            newPw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    clearMsg() {
        this.newPwMsg = "";
        this.confirmPwMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
    }
    resetPassword(resetPwForm) {
        this.clearMsg();
        if (!resetPwForm.valid) {
            if (resetPwForm.controls.newPw.errors) {
                if (resetPwForm.controls.newPw.errors.required) {
                    this.newPwMsg = "Password is required";
                }
                else {
                    this.newPwMsg = "Password need to be at least 6 characters in length";
                }
            }
            if (resetPwForm.controls.confirmPw.errors) {
                if (resetPwForm.controls.confirmPw.errors.required) {
                    this.confirmPwMsg = "Confirm password is required";
                }
                else {
                    this.confirmPwMsg = "Password need to be at least 6 characters in length";
                }
            }
        }
        else if (resetPwForm.value.newPw !== resetPwForm.value.confirmPw) {
            this.errorMsg = "Confirm new password does not match new password";
        }
        else {
            const newPw = resetPwForm.controls.newPw.value;
            this.resetPasswordEmitter.emit({ newPw });
        }
    }
};
PasswordResetFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PasswordResetFormComponent.prototype, "errorMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PasswordResetFormComponent.prototype, "successMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PasswordResetFormComponent.prototype, "resetPasswordEmitter", void 0);
PasswordResetFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset-form',
        template: __webpack_require__(/*! raw-loader!./password-reset-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.html"),
        styles: [__webpack_require__(/*! ./password-reset-form.component.css */ "./src/app/password-reset/password-reset/password-reset-form/password-reset-form.component.css")]
    })
], PasswordResetFormComponent);



/***/ }),

/***/ "./src/app/password-reset/password-reset/password-reset.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/password-reset/password-reset/password-reset.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/password-reset/password-reset/password-reset.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/password-reset/password-reset/password-reset.component.ts ***!
  \***************************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




let PasswordResetComponent = class PasswordResetComponent {
    constructor(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.tokenValid = false;
        this.token = "";
        this.errorMsg = "";
        this.successMsg = "";
        activatedRoute.params.subscribe(params => {
            this.token = params.token;
            this.checkToken(params.token);
        });
    }
    ngOnInit() {
    }
    checkToken(token) {
        this.userService.checkPwToken(token)
            .subscribe(data => {
            this.tokenValid = data.tokenValid;
        }, err => {
            this.errorMsg = err.error.msg;
        }, () => console.log('complete checking token'));
    }
    resetPassword(event) {
        this.userService.resetPassword(event.newPw, this.token)
            .subscribe(data => {
            this.successMsg = data.msg;
            this.tokenValid = false;
            console.log(this.successMsg);
        }, err => {
            this.errorMsg = err.error.msg;
        }, () => console.log('Reset password complete'));
    }
};
PasswordResetComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: __webpack_require__(/*! raw-loader!./password-reset.component.html */ "./node_modules/raw-loader/index.js!./src/app/password-reset/password-reset/password-reset.component.html"),
        styles: [__webpack_require__(/*! ./password-reset.component.css */ "./src/app/password-reset/password-reset/password-reset.component.css")]
    })
], PasswordResetComponent);



/***/ }),

/***/ "./src/app/purchase-history/purchase-history-details/purchase-history-details.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/purchase-history/purchase-history-details/purchase-history-details.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#purchase-history-details {\r\n  width: 100%;\r\n  padding: 20px 0px;\r\n}\r\n\r\n.purchase-history-details-heading {\r\n  text-align: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.purchase-history-details-errormsg {\r\n  text-align: center;\r\n  background-color: #f2dede;\r\n  color: #a94442;\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVyY2hhc2UtaGlzdG9yeS9wdXJjaGFzZS1oaXN0b3J5LWRldGFpbHMvcHVyY2hhc2UtaGlzdG9yeS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wdXJjaGFzZS1oaXN0b3J5L3B1cmNoYXNlLWhpc3RvcnktZGV0YWlscy9wdXJjaGFzZS1oaXN0b3J5LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwdXJjaGFzZS1oaXN0b3J5LWRldGFpbHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcblxyXG4ucHVyY2hhc2UtaGlzdG9yeS1kZXRhaWxzLWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLnB1cmNoYXNlLWhpc3RvcnktZGV0YWlscy1lcnJvcm1zZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XHJcbiAgY29sb3I6ICNhOTQ0NDI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/purchase-history/purchase-history-details/purchase-history-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/purchase-history/purchase-history-details/purchase-history-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PurchaseHistoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHistoryDetailsComponent", function() { return PurchaseHistoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");





let PurchaseHistoryDetailsComponent = class PurchaseHistoryDetailsComponent {
    constructor(user, shoppingCart, activatedRoute) {
        this.user = user;
        this.shoppingCart = shoppingCart;
        this.activatedRoute = activatedRoute;
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
        this.total_qty = 0; // stores the number of items in the variable and this number is shown beside the shopping cart link
        this.currency = {
            currency: "USD",
            forex: "USD/USD",
            rate: 1
        };
        this.activatedRoute.params.subscribe(params => {
            this.orderID = params.id;
            // console.log(this.orderID);
        });
    }
    ngOnInit() {
        this.getTotalQuantity();
        this.getOrderDetails(this.orderID);
    }
    // The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
    getOrderDetails(orderID) {
        this.user.getOrderDetails(orderID)
            .subscribe(data => {
            this.orderExist = true;
            this.name = data.orderDetails.name;
            this.shippingAddress = data.orderDetails.address;
            this.orders = data.orderDetails.cart.items;
            this.subTotal = data.orderDetails.cart.totalPrice;
            this.date = data.orderDetails.date;
            this.currency = data.orderDetails.currency;
            // console.log(data.orderDetails);
        }, err => {
            console.log(err);
            this.orderExist = false;
        }, () => console.log('order details complete'));
    }
};
PurchaseHistoryDetailsComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PurchaseHistoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-history-details',
        template: __webpack_require__(/*! raw-loader!./purchase-history-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/purchase-history/purchase-history-details/purchase-history-details.component.html"),
        styles: [__webpack_require__(/*! ./purchase-history-details.component.css */ "./src/app/purchase-history/purchase-history-details/purchase-history-details.component.css")]
    })
], PurchaseHistoryDetailsComponent);



/***/ }),

/***/ "./src/app/purchase-history/purchase-history.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/purchase-history/purchase-history.module.ts ***!
  \*************************************************************/
/*! exports provided: PurchaseHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHistoryModule", function() { return PurchaseHistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-history/purchase-history.component */ "./src/app/purchase-history/purchase-history/purchase-history.component.ts");
/* harmony import */ var _purchase_history_details_purchase_history_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-history-details/purchase-history-details.component */ "./src/app/purchase-history/purchase-history-details/purchase-history-details.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/check-auth.service */ "./src/app/services/check-auth.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../invoice/invoice.module */ "./src/app/invoice/invoice.module.ts");













const purchaseHistoryRoutes = [
    { path: 'purchase_history/order_details/:id', component: _purchase_history_details_purchase_history_details_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseHistoryDetailsComponent"], canActivate: [_services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__["IsAuthGuard"]] },
    { path: 'purchase_history', component: _purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseHistoryComponent"], canActivate: [_services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__["IsAuthGuard"]] }
];
let PurchaseHistoryModule = class PurchaseHistoryModule {
};
PurchaseHistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _purchase_history_purchase_history_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseHistoryComponent"],
            _purchase_history_details_purchase_history_details_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseHistoryDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(purchaseHistoryRoutes),
            _header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_11__["FooterModule"],
            _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_12__["InvoiceModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartService"],
            _services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__["IsAuthGuard"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PurchaseHistoryModule);



/***/ }),

/***/ "./src/app/purchase-history/purchase-history/purchase-history.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/purchase-history/purchase-history/purchase-history.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#purchase-history {\r\n  width: 100%;\r\n  padding: 20px 0px;\r\n}\r\n\r\n.purchase-history-heading {\r\n  text-align: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.table-purchase-history {\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\n\r\n.table-purchase-history th {\r\n  background-color: #f5f5f5;\r\n  border-bottom: 2px solid #ddd;\r\n  padding: 10px;\r\n}\r\n\r\n.table-purchase-history td {\r\n  border-top: 1px solid #ddd;\r\n  padding: 10px;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.table-purchase-history tr:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.purchase-history-order-date-column, .purchase-history-order-details-colum {\r\n  width: 30%;\r\n}\r\n\r\n.purchase-history-status-column {\r\n  width: 10%;\r\n}\r\n\r\n.purchase-history-total-price-column {\r\n  width: 30%;\r\n  text-align: right;\r\n}\r\n\r\n.text-align-right {\r\n  text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVyY2hhc2UtaGlzdG9yeS9wdXJjaGFzZS1oaXN0b3J5L3B1cmNoYXNlLWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3B1cmNoYXNlLWhpc3RvcnkvcHVyY2hhc2UtaGlzdG9yeS9wdXJjaGFzZS1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHVyY2hhc2UtaGlzdG9yeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5wdXJjaGFzZS1oaXN0b3J5LWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLnRhYmxlLXB1cmNoYXNlLWhpc3Rvcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbi50YWJsZS1wdXJjaGFzZS1oaXN0b3J5IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1wdXJjaGFzZS1oaXN0b3J5IHRkIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi50YWJsZS1wdXJjaGFzZS1oaXN0b3J5IHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ucHVyY2hhc2UtaGlzdG9yeS1vcmRlci1kYXRlLWNvbHVtbiwgLnB1cmNoYXNlLWhpc3Rvcnktb3JkZXItZGV0YWlscy1jb2x1bSB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnB1cmNoYXNlLWhpc3Rvcnktc3RhdHVzLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLnB1cmNoYXNlLWhpc3RvcnktdG90YWwtcHJpY2UtY29sdW1uIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGV4dC1hbGlnbi1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/purchase-history/purchase-history/purchase-history.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/purchase-history/purchase-history/purchase-history.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PurchaseHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHistoryComponent", function() { return PurchaseHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





let PurchaseHistoryComponent = class PurchaseHistoryComponent {
    constructor(shoppingCart, user, route) {
        this.shoppingCart = shoppingCart;
        this.user = user;
        this.route = route;
        this.total_qty = 0; // stores the number of items in the variable and this number is shown beside the shopping cart link
        this.orders = [];
        this.itemsInCart = [];
    }
    ngOnInit() {
        this.getTotalQuantity();
        this.getPurchaseHistory();
    }
    // This function will ge the total quantity of items in the cart to update the badge in the header
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
    getPurchaseHistory() {
        this.user.getPurchaseHistory()
            .subscribe(data => {
            this.orders = data.customerOrders;
            // console.log(data.customerOrders);
            // The below code puts the individual items in the cart in an array to use in Angular ngFor loop in html page
            // ****************************************************************** */
            this.orders.forEach((element) => {
                let a = [];
                // push the cart items into the array
                for (var i in element.cart.items) {
                    a.push(element.cart.items[i]);
                }
                this.itemsInCart.push(a);
            });
            // push the cart orders into the orders array
            for (var i in this.orders) {
                this.orders[i].cart.items = this.itemsInCart[i];
            }
            // ******************************************************************* */
            // console.log(this.orders);
        }, err => {
            this.route.navigate(['/login']);
        }, () => console.log('complete getting purchase history'));
    }
};
PurchaseHistoryComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PurchaseHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-history',
        template: __webpack_require__(/*! raw-loader!./purchase-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/purchase-history/purchase-history/purchase-history.component.html"),
        styles: [__webpack_require__(/*! ./purchase-history.component.css */ "./src/app/purchase-history/purchase-history/purchase-history.component.css")]
    })
], PurchaseHistoryComponent);



/***/ }),

/***/ "./src/app/services/check-auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/check-auth.service.ts ***!
  \************************************************/
/*! exports provided: IsAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthGuard", function() { return IsAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let IsAuthGuard = class IsAuthGuard {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    canActivate(next, state) {
        return this._userService.isLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            if (res.authenticated) {
                // if user is not logged in
                return true;
            }
            else {
                // if user is not logged in
                sessionStorage.setItem('redirectURL', state.url);
                this._router.navigate(['/login']);
                return false;
            }
        }));
    }
};
IsAuthGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IsAuthGuard);



/***/ }),

/***/ "./src/app/services/check-not-auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/check-not-auth.service.ts ***!
  \****************************************************/
/*! exports provided: IsNotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotAuthGuard", function() { return IsNotAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let IsNotAuthGuard = class IsNotAuthGuard {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    canActivate() {
        return this._userService.isLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            if (!res.authenticated) {
                // if user is not logged in
                return true;
            }
            else {
                // if user is logged in
                this._router.navigate(['/home']);
                return false;
            }
        }));
    }
};
IsNotAuthGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsNotAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IsNotAuthGuard);



/***/ }),

/***/ "./src/app/services/load.coin.info.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/load.coin.info.service.ts ***!
  \****************************************************/
/*! exports provided: LoadCoinInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCoinInfoService", function() { return LoadCoinInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _objects_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/domain */ "./src/app/objects/domain.ts");



//import { Observable } from 'rxjs';

//import 'rxjs/add/operator/catch';
let LoadCoinInfoService = class LoadCoinInfoService {
    constructor(_http) {
        this._http = _http;
    }
    getCoins() {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/get_coin_info');
    }
};
LoadCoinInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoadCoinInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadCoinInfoService);



/***/ }),

/***/ "./src/app/services/shopping.cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping.cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _objects_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/domain */ "./src/app/objects/domain.ts");




let ShoppingCartService = class ShoppingCartService {
    constructor(_http) {
        this._http = _http;
    }
    getCartItems() {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/shopping_cart', { withCredentials: true });
    }
    getTotalQuantity() {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/get_total_quantity', { withCredentials: true });
    }
    addItem(coinID, itemQty) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        let bodyString = 'itemQty=' + itemQty;
        return this._http.post(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/add_to_cart/' + coinID, bodyString, { headers: headers, withCredentials: true });
    }
    reduceOneQuantity(coinID) {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/reduce_one/' + coinID, { withCredentials: true });
    }
    removeItem(coinID) {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/remove_all/' + coinID, { withCredentials: true });
    }
    cartCheckout() {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/checkout', { withCredentials: true });
    }
    makeCharge(cardToken, currency) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        let bodyString = 'stripeToken=' + cardToken + '&currencySymbol=' + currency.currency
            + '&currencyForex=' + currency.forex + '&currencyRate=' + currency.rate;
        return this._http.post(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/make_charge', bodyString, { headers: headers, withCredentials: true });
    }
    updateCart(updateCart) {
        let bodyString = JSON.stringify(updateCart);
        //console.log(bodyString);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this._http.post(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/cart_update', bodyString, { headers: headers, withCredentials: true });
    }
    changeCurrency(currency) {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/change_currency/' + currency, { withCredentials: true });
    }
    checkCurrency() {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/check_currency/', { withCredentials: true });
    }
};
ShoppingCartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShoppingCartService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _objects_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/domain */ "./src/app/objects/domain.ts");




let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
    }
    isLoggedIn() {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/isauthenticated', { withCredentials: true });
    }
    logoutfn() {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/logout', { withCredentials: true });
    }
    loginfn(username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        var creds = 'uname=' + username + '&password=' + password;
        return this._http.post(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/authenticate', creds, { headers: headers, withCredentials: true });
    }
    signupfn(newUser) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'fname=' + newUser.fname + '&lname=' + newUser.lname + '&email=' + newUser.email + '&uname=' + newUser.username + '&password=' + newUser.password;
        return this._http.post(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/adduser', creds, { headers: headers, withCredentials: true });
    }
    getPurchaseHistory() {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/purchase_history', { withCredentials: true });
    }
    getOrderDetails(orderID) {
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/order_details/' + orderID, { withCredentials: true });
    }
    changePassword(currentPw, newPw) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        //var creds = 'uname=' + usercreds.username + '&password=' + usercreds.password;
        var creds = 'currentPassword=' + currentPw + '&newPassword=' + newPw;
        return this._http.post(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/change_password', creds, { headers: headers, withCredentials: true });
    }
    forgotPassword(email) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        let body = 'email=' + email;
        return this._http.post(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/forgot_password', body, { headers: headers, withCredentials: true });
    }
    checkPwToken(token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        return this._http.get(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/check_token/' + token, { headers: headers, withCredentials: true });
    }
    resetPassword(newPw, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        let body = 'newPassword=' + newPw;
        return this._http.post(_objects_domain__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"].url + '/user/reset_password/' + token, body, { headers: headers, withCredentials: true });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#shopping-cart {\r\n  width: 100%;\r\n  padding: 20px 0px;\r\n}\r\n\r\n.shopping-cart-heading {\r\n  text-align: center;\r\n  font-size: 2em;\r\n}\r\n\r\n.cart {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n.cart th {\r\n  background-color: #f5f5f5;\r\n  border-bottom: 2px solid #ddd;\r\n  padding: 10px;\r\n}\r\n\r\n.cart td {\r\n  border-bottom: 1px solid #ddd;\r\n  padding: 10px;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.cart tr:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.button-cart-checkout-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.button-cart-checkout-container > .button-cart-checkout {\r\n  background-color: #4CAF50;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  color: white;\r\n  font-size: 1rem;\r\n}\r\n\r\n.button-cart-checkout-container > .button-cart-checkout:focus {\r\n  outline: none;\r\n}\r\n\r\n.button-disabled {\r\n  opacity: 0.6;\r\n}\r\n\r\n.cart-product-column {\r\n  width: 40%;\r\n}\r\n\r\n.cart-quantity-column {\r\n  width: 10%;\r\n}\r\n\r\n.cart-price-column, .cart-total-column {\r\n  width: 20%;\r\n  text-align: right;\r\n}\r\n\r\n.cart-delete-column {\r\n  width: 10%;\r\n}\r\n\r\n.text-align-right {\r\n  text-align: right;\r\n}\r\n\r\n.cart-quantity-input {\r\n  text-align: center;\r\n}\r\n\r\n.buttonlink {\r\n  cursor: pointer;\r\n}\r\n\r\n.cart-media-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LWZvcm0vc2hvcHBpbmctY2FydC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBR0E7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHFCQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC1mb3JtL3Nob3BwaW5nLWNhcnQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Nob3BwaW5nLWNhcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcblxyXG4uc2hvcHBpbmctY2FydC1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcblxyXG4uY2FydCB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5jYXJ0IHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uY2FydCB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uY2FydCB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmJ1dHRvbi1jYXJ0LWNoZWNrb3V0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5idXR0b24tY2FydC1jaGVja291dC1jb250YWluZXIgPiAuYnV0dG9uLWNhcnQtY2hlY2tvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbi1jYXJ0LWNoZWNrb3V0LWNvbnRhaW5lciA+IC5idXR0b24tY2FydC1jaGVja291dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uY2FydC1wcm9kdWN0LWNvbHVtbiB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG4uY2FydC1xdWFudGl0eS1jb2x1bW4ge1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5jYXJ0LXByaWNlLWNvbHVtbiwgLmNhcnQtdG90YWwtY29sdW1uIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FydC1kZWxldGUtY29sdW1uIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4udGV4dC1hbGlnbi1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXJ0LXF1YW50aXR5LWlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJ0LW1lZGlhLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ShoppingCartFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartFormComponent", function() { return ShoppingCartFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_round_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/round.module */ "./src/app/modules/round.module.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ShoppingCartFormComponent = class ShoppingCartFormComponent {
    constructor(fb, route) {
        this.fb = fb;
        this.route = route;
        this.updateCartEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createForm();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes["cartItems"]) {
            let items = changes["cartItems"].currentValue;
            this.showCartItems(items);
        }
    }
    ngOnDestroy() {
        if (this.updateCartSubscription) {
            this.updateCartSubscription.unsubscribe(); // <- New
        }
    }
    formUpdateEvent() {
        this.updateCartSubscription = this.updateCartForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
            .subscribe((data) => {
            // this will automatically update the total price and the store session
            if (this.updateCartForm.valid) {
                // console.log(data.carts);
                this.updateCartEmitter.emit(data.carts);
            }
        });
    }
    createForm() {
        // create the form
        this.updateCartForm = this.fb.group({
            carts: this.fb.array([
            // this.initCartForm(),  //initialize the form
            ])
        });
        this.formUpdateEvent();
    }
    /*
    initCartForm() {
      return this._fb.group({
        productName:[''],
        productQuantity: ['', Validators.required, Validators.pattern("^[1-9][0-9]*$")],  //regular expression for positive integers
        productPrice: [''],
        productTotalPrice: ['']
      });
    }
    */
    showCartItems(items) {
        // console.log(items);
        const control = this.updateCartForm.controls['carts'];
        items.map((x, i) => {
            control.insert(i, this.fb.group({
                productName: [x.item.title],
                productQuantity: [x.qty, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[1-9][0-9]*$")]],
                productPrice: [x.item.price],
                productTotalPrice: ['']
            }));
        });
        // console.log(this.updateCartForm);
        // control.removeAt(items.length);
    }
    removeItem(i) {
        // remove address from the list
        const control = this.updateCartForm.controls['carts'];
        control.removeAt(i);
        this.cartItems.splice(i, 1);
    }
    // This function is for display purposes to show the price with 2 decimal places
    coinPrice(price, qty = 1) {
        // console.log(this.round(33 * 1.287168 * 2, 2));
        return (Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_4__["round"])(price * this.currency.rate, 2) * qty).toFixed(2);
    }
    coinPriceDisplay(price) {
        return price.toFixed(2);
    }
    checkout() {
        this.route.navigate(['/checkout']);
    }
};
ShoppingCartFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShoppingCartFormComponent.prototype, "cartItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShoppingCartFormComponent.prototype, "currency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShoppingCartFormComponent.prototype, "cartTotalPrice", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShoppingCartFormComponent.prototype, "formCheck", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShoppingCartFormComponent.prototype, "totalQuantity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShoppingCartFormComponent.prototype, "updateCartEmitter", void 0);
ShoppingCartFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart-form',
        template: __webpack_require__(/*! raw-loader!./shopping-cart-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.html"),
        styles: [__webpack_require__(/*! ./shopping-cart-form.component.css */ "./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.css")]
    })
], ShoppingCartFormComponent);



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-cart-heading {\r\n  text-align: center;\r\n  font-size: 2em;\r\n  margin: 20px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eS1jYXJ0LWhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _modules_round_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/round.module */ "./src/app/modules/round.module.ts");
/* harmony import */ var _modules_array_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/array.module */ "./src/app/modules/array.module.ts");






let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(shoppingcart, ngRedux) {
        this.shoppingcart = shoppingcart;
        this.ngRedux = ngRedux;
        this.cartItems = []; // this array variable stores the shopping cart item objects
        this.qtyMsg = [];
        this.cartTotalPrice = 0; // this variable stores the total price of all the items in the shopping cart
        this.total_qty = 0; // this variable stores the total quantity
        this.currency = {
            currency: "USD",
            forex: "USD/USD",
            rate: 1
        };
    }
    ngOnInit() {
        this.shoppingCartItems();
    }
    getCurrencyRate() {
        this.currencySubscription = this.ngRedux.select()
            .subscribe(newCurrency => {
            // this.currencyRate = newCurrency.switchCurrencyReducer.currency.rate;
            this.currency = newCurrency.switchCurrencyReducer.currency;
            if (this.cartItems.length > 0) {
                if (this.currency.rate == 1) {
                    this.cartTotalPrice = 0;
                    this.cartItems.map(x => {
                        this.cartTotalPrice = this.cartTotalPrice + (Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_4__["round"])(x.price, 2));
                    });
                }
                else {
                    this.cartTotalPrice = 0;
                    this.cartItems.map((x) => {
                        this.cartTotalPrice = this.cartTotalPrice + (Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_4__["round"])(x.item.price * this.currency.rate, 2) * x.qty);
                    });
                }
            }
        });
    }
    shoppingCartItems() {
        this.shoppingcart.getCartItems() // getCartItems observable gets the shopping cart items and stores it into the cartItems array
            .subscribe((data) => {
            if (data.cart) {
                this.total_qty = data.cart.totalQty; // total quantity of items in the shopping cart
                this.cartItems = Object(_modules_array_module__WEBPACK_IMPORTED_MODULE_5__["generateArray"])(data.cart.items);
                this.getCurrencyRate();
            }
        }, err => console.log(err), () => console.log('Get Cart Items Complete'));
    }
    calculateTotalPrice(cartFormArray) {
        let totalPrice = 0;
        cartFormArray.map((x) => {
            totalPrice = totalPrice + (Object(_modules_round_module__WEBPACK_IMPORTED_MODULE_4__["round"])(x.productPrice * this.currency.rate, 2) * x.productQuantity);
        });
        return totalPrice;
    }
    updateCart(cartFormArray) {
        this.cartTotalPrice = this.calculateTotalPrice(cartFormArray);
        cartFormArray.map((x, i) => {
            this.cartItems[i].qty = x.productQuantity;
            this.cartItems[i].price = x.productQuantity * x.productPrice;
        });
        this.updateCartSession(this.cartItems);
    }
    updateCartSession(cartItems) {
        this.shoppingcart.updateCart(cartItems)
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log(err), () => console.log('Update cart complete'));
    }
    ngOnDestroy() {
        if (this.currencySubscription) {
            this.currencySubscription.unsubscribe();
        }
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] }
];
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.module.ts ***!
  \*******************************************************/
/*! exports provided: ShoppingCartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartModule", function() { return ShoppingCartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_cart_form_shopping_cart_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-cart-form/shopping-cart-form.component */ "./src/app/shopping-cart/shopping-cart-form/shopping-cart-form.component.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/check-auth.service */ "./src/app/services/check-auth.service.ts");
/* harmony import */ var _shopping_cart_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-cart.routes */ "./src/app/shopping-cart/shopping-cart.routes.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");













let ShoppingCartModule = class ShoppingCartModule {
};
ShoppingCartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"],
            _shopping_cart_form_shopping_cart_form_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_shopping_cart_routes__WEBPACK_IMPORTED_MODULE_10__["shoppingCartRoutes"]),
            _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_check_auth_service__WEBPACK_IMPORTED_MODULE_9__["IsAuthGuard"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartService"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ShoppingCartModule);



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.routes.ts ***!
  \*******************************************************/
/*! exports provided: shoppingCartRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoppingCartRoutes", function() { return shoppingCartRoutes; });
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _services_check_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/check-auth.service */ "./src/app/services/check-auth.service.ts");



const shoppingCartRoutes = [
    { path: 'cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__["CheckoutComponent"], canActivate: [_services_check_auth_service__WEBPACK_IMPORTED_MODULE_2__["IsAuthGuard"]] }
];


/***/ }),

/***/ "./src/app/signup/signup-form/signup-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/signup/signup-form/signup-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signupForm {\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWdudXBGb3JtIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup-form/signup-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/signup/signup-form/signup-form.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SignupFormComponent = class SignupFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.fnameMsg = '';
        this.lnameMsg = '';
        this.emailMsg = '';
        this.usernameMsg = '';
        this.passwordMsg = '';
        this.signupFormEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.signupForm = this.fb.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    clearMsg() {
        this.fnameMsg = "";
        this.lnameMsg = "";
        this.emailMsg = "";
        this.usernameMsg = "";
        this.passwordMsg = "";
        this.errorMsg = '';
    }
    signup(signupForm) {
        this.clearMsg();
        if (!signupForm.valid) {
            if (!signupForm.controls.fname.value) {
                this.fnameMsg = "First name is required";
            }
            if (!signupForm.controls.lname.value) {
                this.lnameMsg = "Last name is required";
            }
            if (!signupForm.controls.username.value) {
                this.usernameMsg = "Username is required";
            }
            if (signupForm.controls.email.errors) {
                if (signupForm.controls.email.errors.required) {
                    this.emailMsg = "Email is required";
                }
                else {
                    this.emailMsg = "Invalid email address";
                }
            }
            if (signupForm.controls.password.errors) {
                if (signupForm.controls.password.errors.required) {
                    this.passwordMsg = "Password is required";
                }
                else {
                    this.passwordMsg = "Password need to be at least 6 characters in length";
                }
            }
        }
        else {
            this.signupFormEmitter.emit(signupForm.value);
        }
    }
};
SignupFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SignupFormComponent.prototype, "errorMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SignupFormComponent.prototype, "signupFormEmitter", void 0);
SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-form',
        template: __webpack_require__(/*! raw-loader!./signup-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup-form/signup-form.component.html"),
        styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup/signup-form/signup-form.component.css")]
    })
], SignupFormComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");





let SignupComponent = class SignupComponent {
    constructor(_userService, shoppingCart, _router) {
        this._userService = _userService;
        this.shoppingCart = shoppingCart;
        this._router = _router;
        this.total_qty = 0;
        this.errorMsg = "";
    }
    ngOnInit() {
        this.getTotalQuantity();
    }
    // The getTotalQuantity function will get the number of items in the shopping cart and stores it in the variable total_qty
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
    signup(event) {
        this.errorMsg = "";
        this._userService.signupfn(event)
            .subscribe(data => {
            if (data.authenticated) {
                console.log('signup is success');
                this._router.navigate(['/home']);
            }
        }, err => {
            this.errorMsg = err.error.msg;
        }, () => console.log('signup complete'));
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup/signup-form/signup-form.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/check-not-auth.service */ "./src/app/services/check-not-auth.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");













const signupRoutes = [
    { path: 'signup', component: _signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], canActivate: [_services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_10__["IsNotAuthGuard"]] },
];
let SignupModule = class SignupModule {
};
SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_7__["SignupFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(signupRoutes),
            _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_check_not_auth_service__WEBPACK_IMPORTED_MODULE_10__["IsNotAuthGuard"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartService"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SignupModule);



/***/ }),

/***/ "./src/app/store/model.ts":
/*!********************************!*\
  !*** ./src/app/store/model.ts ***!
  \********************************/
/*! exports provided: CURRENCY_INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_INITIAL_STATE", function() { return CURRENCY_INITIAL_STATE; });
const CURRENCY_INITIAL_STATE = {
    currency: "USD",
    forex: "USD/USD",
    rate: 1
};


/***/ }),

/***/ "./src/app/store/module.ts":
/*!*********************************!*\
  !*** ./src/app/store/module.ts ***!
  \*********************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reducers */ "./src/app/store/reducers.ts");







//import { LoginActions } from '../login/login.actions';
//import { logoutReducer } from '../header/header.reducers';
//import { LogoutActions } from '../header/header.actions';
const store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])({ loginReducer: _store_reducers__WEBPACK_IMPORTED_MODULE_6__["loginReducer"], switchCurrencyReducer: _store_reducers__WEBPACK_IMPORTED_MODULE_6__["switchCurrencyReducer"] }), Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(Object(redux_logger__WEBPACK_IMPORTED_MODULE_4__["createLogger"])()));
let StoreModule = class StoreModule {
    constructor(ngRedux) {
        this.ngRedux = ngRedux;
        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        ngRedux.provideStore(store);
    }
};
StoreModule.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
];
StoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgReduxModule"]
        ]
    })
], StoreModule);



/***/ }),

/***/ "./src/app/store/reducers.ts":
/*!***********************************!*\
  !*** ./src/app/store/reducers.ts ***!
  \***********************************/
/*! exports provided: loginReducer, switchCurrencyReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginReducer", function() { return loginReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchCurrencyReducer", function() { return switchCurrencyReducer; });
/* harmony import */ var _store_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/model */ "./src/app/store/model.ts");

const loginReducer = (lastState = {}, action) => {
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
const switchCurrencyReducer = (lastState = _store_model__WEBPACK_IMPORTED_MODULE_0__["CURRENCY_INITIAL_STATE"], action) => {
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

/***/ "./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#changePwForm {\r\n  padding: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL2NoYW5nZS11c2VyLXBhc3N3b3JkL2NoYW5nZS11c2VyLXBhc3N3b3JkLWZvcm0vY2hhbmdlLXVzZXItcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL2NoYW5nZS11c2VyLXBhc3N3b3JkL2NoYW5nZS11c2VyLXBhc3N3b3JkLWZvcm0vY2hhbmdlLXVzZXItcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYW5nZVB3Rm9ybSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ChangeUserPasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUserPasswordFormComponent", function() { return ChangeUserPasswordFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ChangeUserPasswordFormComponent = class ChangeUserPasswordFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.changePwEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentPwMsg = "";
        this.newPwMsg = "";
        this.confirmNewPwMsg = "";
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.changePwForm = this.fb.group({
            currentPw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmNewPw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    clearMsg() {
        this.currentPwMsg = "";
        this.newPwMsg = "";
        this.confirmNewPwMsg = "";
        this.errorMsg = "";
        this.successMsg = "";
    }
    changePw(changePwForm) {
        this.clearMsg();
        if (!changePwForm.valid) {
            if (!changePwForm.value.currentPw) {
                this.currentPwMsg = "Current password required";
            }
            if (changePwForm.controls.newPw.errors) {
                if (changePwForm.controls.newPw.errors.required) {
                    this.newPwMsg = "New password required";
                }
                if (changePwForm.controls.newPw.errors.minlength) {
                    this.newPwMsg = "Password must contain at least 6 characters";
                }
            }
            if (changePwForm.controls.confirmNewPw.errors) {
                if (changePwForm.controls.confirmNewPw.errors.required) {
                    this.confirmNewPwMsg = "Confirm new password required";
                }
                if (changePwForm.controls.confirmNewPw.errors.minlength) {
                    this.confirmNewPwMsg = "Password must contain at least 6 characters";
                }
            }
        }
        else if (changePwForm.value.newPw == changePwForm.value.currentPw) {
            this.errorMsg = "New password must be different than current password";
        }
        else if (changePwForm.value.newPw !== changePwForm.value.confirmNewPw) {
            this.errorMsg = "Confirm new password does not match new password";
        }
        else {
            const currentPw = changePwForm.value.currentPw;
            const newPw = changePwForm.value.newPw;
            this.changePwEmitter.emit({ currentPw, newPw });
        }
    }
};
ChangeUserPasswordFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeUserPasswordFormComponent.prototype, "errorMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeUserPasswordFormComponent.prototype, "successMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeUserPasswordFormComponent.prototype, "changed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChangeUserPasswordFormComponent.prototype, "changePwEmitter", void 0);
ChangeUserPasswordFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-user-password-form',
        template: __webpack_require__(/*! raw-loader!./change-user-password-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.html"),
        styles: [__webpack_require__(/*! ./change-user-password-form.component.css */ "./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.css")]
    })
], ChangeUserPasswordFormComponent);



/***/ }),

/***/ "./src/app/user-profile/change-user-password/change-user-password.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/user-profile/change-user-password/change-user-password.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9jaGFuZ2UtdXNlci1wYXNzd29yZC9jaGFuZ2UtdXNlci1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-profile/change-user-password/change-user-password.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user-profile/change-user-password/change-user-password.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangeUserPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUserPasswordComponent", function() { return ChangeUserPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");




let ChangeUserPasswordComponent = class ChangeUserPasswordComponent {
    constructor(userService, shoppingCart) {
        this.userService = userService;
        this.shoppingCart = shoppingCart;
        this.errorMsg = "";
        this.successMsg = "";
        this.changed = false;
        this.total_qty = 0;
    }
    ngOnInit() {
        this.getTotalQuantity();
    }
    getTotalQuantity() {
        this.shoppingCart.getTotalQuantity()
            .subscribe((data) => {
            this.total_qty = data.totalQuantity;
        }, err => console.log('error getting item quantity'), () => console.log('complete getting item quantity'));
    }
    changePw(event) {
        this.errorMsg = "";
        this.successMsg = "";
        this.userService.changePassword(event.currentPw, event.newPw)
            .subscribe(data => {
            this.successMsg = "Password changed successfully";
            this.changed = true;
            this.errorMsg = "";
        }, err => {
            this.errorMsg = err.error.msg;
            console.log(err);
        }, () => console.log('update password complete'));
    }
};
ChangeUserPasswordComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] }
];
ChangeUserPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-user-password',
        template: __webpack_require__(/*! raw-loader!./change-user-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-profile/change-user-password/change-user-password.component.html"),
        styles: [__webpack_require__(/*! ./change-user-password.component.css */ "./src/app/user-profile/change-user-password/change-user-password.component.css")]
    })
], ChangeUserPasswordComponent);



/***/ }),

/***/ "./src/app/user-profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-user-password/change-user-password.component */ "./src/app/user-profile/change-user-password/change-user-password.component.ts");
/* harmony import */ var _change_user_password_change_user_password_form_change_user_password_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-user-password/change-user-password-form/change-user-password-form.component */ "./src/app/user-profile/change-user-password/change-user-password-form/change-user-password-form.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/shopping.cart.service */ "./src/app/services/shopping.cart.service.ts");
/* harmony import */ var _services_check_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/check-auth.service */ "./src/app/services/check-auth.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");













const userProfileRoutes = [
    { path: 'change_user_password', component: _change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangeUserPasswordComponent"], canActivate: [_services_check_auth_service__WEBPACK_IMPORTED_MODULE_10__["IsAuthGuard"]] }
];
let UserProfileModule = class UserProfileModule {
};
UserProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _change_user_password_change_user_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangeUserPasswordComponent"],
            _change_user_password_change_user_password_form_change_user_password_form_component__WEBPACK_IMPORTED_MODULE_7__["ChangeUserPasswordFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(userProfileRoutes),
            _header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartService"],
            _services_check_auth_service__WEBPACK_IMPORTED_MODULE_10__["IsAuthGuard"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], UserProfileModule);



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

module.exports = __webpack_require__(/*! C:\frontend\mean_app\shopping-cart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
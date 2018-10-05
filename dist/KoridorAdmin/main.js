(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _property_config_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property_config/settings/settings.component */ "./src/app/property_config/settings/settings.component.ts");
/* harmony import */ var _property_config_loyalty_loyalty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property_config/loyalty/loyalty.component */ "./src/app/property_config/loyalty/loyalty.component.ts");
/* harmony import */ var _property_config_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property_config/upgrade/upgrade.component */ "./src/app/property_config/upgrade/upgrade.component.ts");
/* harmony import */ var _reports_requested_rooms_requested_rooms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports/requested-rooms/requested-rooms.component */ "./src/app/reports/requested-rooms/requested-rooms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/*
import {HotelViewComponent} from "./hotel-view/hotel-view.component";
import {SatelliteViewComponent} from "./satellite-view/satellite-view.component";
import {MapViewComponent} from "./map-view/map-view.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {ConfirmSelectionComponent} from "./confirm-selection/confirm-selection.component";
import {ConfirmedComponent} from "./confirmed/confirmed.component";
*/
var routes = [
    {
        path: 'property_config',
        data: { breadcrumb: 'Property Config', icon: 'fas fa-hotel' },
        children: [
            { path: 'settings', component: _property_config_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], data: { breadcrumb: 'Settings' } },
            { path: 'loyalty', component: _property_config_loyalty_loyalty_component__WEBPACK_IMPORTED_MODULE_3__["LoyaltyComponent"], data: { breadcrumb: 'Loyalty' } },
            { path: 'upgrade', component: _property_config_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_4__["UpgradeComponent"], data: { breadcrumb: 'Upgrade' } },
        ],
    },
    { path: 'reports',
        data: { breadcrumb: 'Reports', icon: 'far fa-newspaper' },
        children: [
            { path: 'requested_rooms', component: _reports_requested_rooms_requested_rooms_component__WEBPACK_IMPORTED_MODULE_5__["RequestedRoomsComponent"], data: { breadcrumb: 'Requested Rooms' } },
        ],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!--div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<h2>Here are some pages of the Koridor Admin Consoole: </h2>\n<ul>\n  <li>\n    <h2><a rel=\"noopener\" href=\"/property_config/settings\">Property Config / Settings</a></h2>\n  </li>\n  <li>\n    <h2><a rel=\"noopener\" href=\"/settings\">Settings</a></h2>\n  </li>\n  <li>\n    <h2><a rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _header_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/user-menu/user-menu.component */ "./src/app/header/user-menu/user-menu.component.ts");
/* harmony import */ var _header_hamburger_menu_hamburger_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/hamburger-menu/hamburger-menu.component */ "./src/app/header/hamburger-menu/hamburger-menu.component.ts");
/* harmony import */ var _property_config_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./property_config/settings/settings.component */ "./src/app/property_config/settings/settings.component.ts");
/* harmony import */ var _component_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/toggle/toggle.component */ "./src/app/component/toggle/toggle.component.ts");
/* harmony import */ var _component_blackout_dates_table_blackout_dates_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/blackout-dates-table/blackout-dates-table.component */ "./src/app/component/blackout-dates-table/blackout-dates-table.component.ts");
/* harmony import */ var _property_config_loyalty_loyalty_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./property_config/loyalty/loyalty.component */ "./src/app/property_config/loyalty/loyalty.component.ts");
/* harmony import */ var _component_multi_select_table_multi_select_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/multi-select-table/multi-select-table.component */ "./src/app/component/multi-select-table/multi-select-table.component.ts");
/* harmony import */ var _component_discount_input_field_discount_input_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/discount-input-field/discount-input-field.component */ "./src/app/component/discount-input-field/discount-input-field.component.ts");
/* harmony import */ var _component_restricted_text_input_restricted_text_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/restricted-text-input/restricted-text-input.component */ "./src/app/component/restricted-text-input/restricted-text-input.component.ts");
/* harmony import */ var _property_config_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./property_config/upgrade/upgrade.component */ "./src/app/property_config/upgrade/upgrade.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reports_requested_rooms_requested_rooms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reports/requested-rooms/requested-rooms.component */ "./src/app/reports/requested-rooms/requested-rooms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _header_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_6__["UserMenuComponent"],
                _header_hamburger_menu_hamburger_menu_component__WEBPACK_IMPORTED_MODULE_7__["HamburgerMenuComponent"],
                _property_config_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
                _component_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_9__["ToggleComponent"],
                _component_blackout_dates_table_blackout_dates_table_component__WEBPACK_IMPORTED_MODULE_10__["BlackoutDatesTableComponent"],
                _property_config_loyalty_loyalty_component__WEBPACK_IMPORTED_MODULE_11__["LoyaltyComponent"],
                _component_multi_select_table_multi_select_table_component__WEBPACK_IMPORTED_MODULE_12__["MultiSelectTableComponent"],
                _component_discount_input_field_discount_input_field_component__WEBPACK_IMPORTED_MODULE_13__["DiscountInputFieldComponent"],
                _component_restricted_text_input_restricted_text_input_component__WEBPACK_IMPORTED_MODULE_14__["RestrictedTextInputComponent"],
                _property_config_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_15__["UpgradeComponent"],
                _reports_requested_rooms_requested_rooms_component__WEBPACK_IMPORTED_MODULE_18__["RequestedRoomsComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/blackout-dates-table/blackout-dates-table.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/component/blackout-dates-table/blackout-dates-table.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n.custom-day.range, .custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n.selected_table_row{\n  background-color: #5e9dbc;\n  color:white;\n}\n.blackout-dates-table{\n  border: 1px solid #e0e0e0;\n  border-collapse: separate; /* allow spacing between cell borders */\n  border-spacing: 0 5px;  /*NOTE: syntax is <horizontal value> <vertical value> */\n  margin-left: 15px;\n  margin-bottom: 10px;\n  width: 90%;\n  font-size: 14px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.blackout-dates-table td:nth-child(1){\n  text-align: center;\n}\n.blackout-dates-table td:nth-child(2){\n  text-align: center;\n}\n.blackout-dates-table>tr{\n  margin-bottom: 15px;\n}\n.blackout-dates-table th{\n  border-bottom: 1px solid #e0e0e0;\n  text-align: center;\n}\n.add_dates_btn{\n  border: 1px solid #e0e0e0;\n  color: white;\n  background-color: #5e9dbc;\n  border-radius: 6px;\n  font-size: 14px;\n  width: 147px;\n  margin-bottom:15px;\n  margin-left:15px;\n}\n.delete_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #8f2a41;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:17px;\n}\n.edit_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #4eb47f;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:65px;\n}\n.save_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #5e9dbc;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:17px;\n}\n.popover-background{\n  min-width: 500px;\n}\n.dr-popover-btn-table{\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/component/blackout-dates-table/blackout-dates-table.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/component/blackout-dates-table/blackout-dates-table.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <td>\n      <!--button type=\"button\" class=\"add_dates_btn\" (click)=\"d.toggle()\"-->\n      <button type=\"button\" class=\"add_dates_btn\"\n        (click)=\"onClickAdd($event)\">\n        Add Date Range\n      </button>\n    </td>\n    <td>\n      <!--input type=\"text\"\n        ngbDatepicker #d=\"ngbDatepicker\"\n        (dateSelect)=\"onDateSelection($event)\"\n        [displayMonths]=\"2\"\n        [dayTemplate]=\"day_t\"\n        [autoClose]=\"false\"\n        [startDate]=\"fromDate\"\n        style=\"visibility:hidden\"/-->\n    </td>\n  </tr>\n</table>\n<table class=\"blackout-dates-table\"\n  [ngbPopover]=\"popContent\" popoverTitle=\"Blackout Range\" #ppov=\"ngbPopover\" triggers=\"manual\"\n  container=\"body\" popoverClass=\"popover-background\">\n  <tr>\n    <th>From</th>\n    <th>To</th>\n  </tr>\n  <tr *ngFor=\"let b_dates of blackout_dates; index as i;\" (click)=\"onDateTableLineSelection(i)\" [ngClass]=\"{'selected_table_row': i===selected_table_row}\">\n    <td>{{b_dates[0]}}</td>\n    <td>{{b_dates[1]}}</td>\n  </tr>\n</table>\n<!--button type=\"button\" class=\"edit_btn\" (click)=\"prepareDatesEdit();d.toggle();onClickEdit($event)\">Edit</button-->\n<button type=\"button\" class=\"edit_btn\" (click)=\"onClickEdit($event)\">Edit</button>\n<button type=\"button\" class=\"delete_btn\" (click)=\"onClickDelete($event)\">Delete</button>\n<button type=\"button\" class=\"save_btn\" >Save</button>\n\n\n<!--button (click)=\"d.toggle()\">Toggle</button>\n<pre>From: {{ fromDate | json }} </pre>\n<pre>To: {{ toDate | json }} </pre-->\n\n\n<ng-template #day_t let-date=\"date\" let-focused=\"focused\">\n  <span class=\"custom-day\"\n        [class.focused]=\"focused\"\n        [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\n        [class.faded]=\"isHovered(date) || isInside(date)\"\n        (mouseenter)=\"hoveredDate = date\"\n        (mouseleave)=\"hoveredDate = null\">\n    {{ date.day }}\n  </span>\n</ng-template>\n<ng-template #popContent let-greeting=\"greeting\">\n  <!--{{greeting}}, <b>{{name}}</b>!-->\n  <ngb-datepicker #drpicker (select)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"day_t\" [startDate]=\"startDate\">\n  </ngb-datepicker>\n  <table class=\"dr-popover-btn-table\">\n    <tr>\n      <td>\n          <button type=\"button\" class=\"save_btn\" (click)=\"onClickApply($event)\">Apply</button>\n      </td>\n      <td>\n        <button type=\"button\" class=\"delete_btn\" (click)=\"ppov.close()\">Close</button>\n      </td>\n    </tr>\n  </table>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/component/blackout-dates-table/blackout-dates-table.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/blackout-dates-table/blackout-dates-table.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BlackoutDatesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackoutDatesTableComponent", function() { return BlackoutDatesTableComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var BlackoutDatesTableComponent = /** @class */ (function () {
    /*close_ppover(){
      console.log("Close Btn");
      this.popover.close();
    }*/
    function BlackoutDatesTableComponent(calendar, formatter) {
        var _this = this;
        this.blackout_dates = [['7/15/2018', '7/25/2018'], ['8/15/2018', '8/25/2018'], ['9/15/2018', '9/25/2018']];
        this.selected_table_row = -1;
        this.greeting = {};
        this.name = 'World';
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.today = calendar.getToday();
        this.dateFormatter = formatter;
    }
    BlackoutDatesTableComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    BlackoutDatesTableComponent.prototype.onDateTableLineSelection = function (i) {
        //console.log(i);
        this.selected_table_row = i;
    };
    BlackoutDatesTableComponent.prototype.onDateSelection = function (date) {
        //console.log(date);
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
            /*this.blackout_dates.push(new Array(
              ""+this.fromDate.month+"/"+this.fromDate.day+"/"+this.fromDate.year,
              ""+this.toDate.month+"/"+this.toDate.day+"/"+this.toDate.year));
            //d.close();*/
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    BlackoutDatesTableComponent.prototype.onClickDelete = function (event) {
        if (this.selected_table_row > -1) {
            this.blackout_dates.splice(this.selected_table_row, 1);
            this.selected_table_row = -1;
        }
    };
    BlackoutDatesTableComponent.prototype.prepareDatesEdit = function () {
        if (this.selected_table_row > -1) {
            this.fromDate = this.dateFormatter.parse(this.blackout_dates[this.selected_table_row][0]);
            var fd = this.blackout_dates[this.selected_table_row][0].split("/", 3);
            this.fromDate.day = parseInt(fd[1]);
            this.fromDate.month = parseInt(fd[0]);
            this.fromDate.year = parseInt(fd[2]);
            this.toDate = this.dateFormatter.parse(this.blackout_dates[this.selected_table_row][1]);
            fd = this.blackout_dates[this.selected_table_row][1].split("/", 3);
            this.toDate.day = parseInt(fd[1]);
            this.toDate.month = parseInt(fd[0]);
            this.toDate.year = parseInt(fd[2]);
            //console.log(this.fromDate);console.log(this.toDate);
        }
    };
    BlackoutDatesTableComponent.prototype.onClickEdit = function (event) {
        if (this.selected_table_row > -1) {
            this.prepareDatesEdit();
            this.startDate = this.fromDate;
            this.popover.open();
        }
    };
    BlackoutDatesTableComponent.prototype.onClickAdd = function (event) {
        this.selected_table_row = -1;
        this.startDate = this.today;
        this.fromDate = null;
        this.toDate = null;
        this.popover.open();
    };
    BlackoutDatesTableComponent.prototype.onClickApply = function (event) {
        if (this.fromDate && this.toDate) {
            if (this.selected_table_row > -1) {
                this.blackout_dates[this.selected_table_row][0] =
                    "" + this.fromDate.month + "/" + this.fromDate.day + "/" + this.fromDate.year;
                this.blackout_dates[this.selected_table_row][1] =
                    "" + this.toDate.month + "/" + this.toDate.day + "/" + this.toDate.year;
            }
            else {
                this.blackout_dates.push(new Array("" + this.fromDate.month + "/" + this.fromDate.day + "/" + this.fromDate.year, "" + this.toDate.month + "/" + this.toDate.day + "/" + this.toDate.year));
            }
        }
        this.popover.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ppov'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbPopover"])
    ], BlackoutDatesTableComponent.prototype, "popover", void 0);
    BlackoutDatesTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blackout-dates-table',
            template: __webpack_require__(/*! ./blackout-dates-table.component.html */ "./src/app/component/blackout-dates-table/blackout-dates-table.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./blackout-dates-table.component.css */ "./src/app/component/blackout-dates-table/blackout-dates-table.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateParserFormatter"]])
    ], BlackoutDatesTableComponent);
    return BlackoutDatesTableComponent;
}());



/***/ }),

/***/ "./src/app/component/discount-input-field/discount-input-field.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/component/discount-input-field/discount-input-field.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input_container{\n  width: 90px;\n  height: 46px;\n}\n.input_table{\n  width: 100%;\n  border: 1px solid #cfcfcf;\n  border-collapse: separate;\n  border-spacing: 0;\n  border-radius: 6px;\n}\n.non_active_button{\n  line-height: 1;\n  width: 22px;\n  font-size: 18px;\n  color: #609dba;\n  background-color: #c7ecfe;\n  border-left: 1px solid #cfcfcf;\n  border-top: 1px solid #cfcfcf;\n  cursor: pointer;\n\n  -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.active_button{\n  line-height: 1;\n  width: 22px;\n  font-size: 18px;\n  color: #c7ecfe;\n  background-color: #609dba;\n  border-left: 1px solid #cfcfcf;\n  border-top: 1px solid #cfcfcf;\n  cursor: pointer;\n\n  -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.discount_label{\n  line-height: 1;\n  text-align: center;\n  font-size: 23px;\n  color: #c7ecfe;\n  background-color: white;\n\n  -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.input_table tr:first-child td:last-child{\n  border-top-right-radius: 6px;\n  text-align: center;\n}\n.input_table tr:last-child td:last-child{\n  border-bottom-right-radius: 6px;\n  text-align: center;\n}\n.input_field{\n  width: 42px;\n  font-size: 30px;\n  border: 0px none;\n  outline: none;\n  color: #9c9c9c;\n}\n"

/***/ }),

/***/ "./src/app/component/discount-input-field/discount-input-field.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/component/discount-input-field/discount-input-field.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div class=\"input_container\"-->\n  <table class=\"input_table input_container\">\n    <tr>\n      <td rowspan='2'>\n        <input type=\"text\" class=\"input_field\" (keyup)=\"onKey($event)\" (paste)=\"onPaste($event)\"/>\n      </td>\n      <td rowspan='2' class=\"discount_label\">{{percent_discount?'%':'$'}}\n      </td>\n      <td [ngClass]=\"{'active_button':percent_discount,'non_active_button':!percent_discount}\"\n        (click)=\"set_percent_discount(true)\">%\n      </td>\n    </tr>\n    <tr>\n      <td [ngClass]=\"{'active_button':!percent_discount,'non_active_button':percent_discount}\"\n        (click)=\"set_percent_discount(false)\">$\n      </td>\n    </tr>\n  </table>\n<!--/div-->\n"

/***/ }),

/***/ "./src/app/component/discount-input-field/discount-input-field.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/discount-input-field/discount-input-field.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DiscountInputFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountInputFieldComponent", function() { return DiscountInputFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscountInputFieldComponent = /** @class */ (function () {
    function DiscountInputFieldComponent() {
        this.percent_discount = true;
        this.previous_value = "";
    }
    DiscountInputFieldComponent.prototype.ngOnInit = function () {
    };
    DiscountInputFieldComponent.prototype.set_percent_discount = function (new_val) {
        this.percent_discount = new_val;
    };
    DiscountInputFieldComponent.prototype.onKey = function (event) {
        //console.log(event);
        var regex = /^[0-9]*$/;
        if (!regex.test(event.target.value)) {
            event.target.value = this.previous_value;
        }
        else {
            if (event.target.value.length > 0) {
                event.target.value = parseInt(event.target.value, 10);
            }
            this.previous_value = event.target.value;
        }
    };
    DiscountInputFieldComponent.prototype.onPaste = function (event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value.length);
        console.log(event.target.type);
    };
    DiscountInputFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discount-input-field',
            template: __webpack_require__(/*! ./discount-input-field.component.html */ "./src/app/component/discount-input-field/discount-input-field.component.html"),
            styles: [__webpack_require__(/*! ./discount-input-field.component.css */ "./src/app/component/discount-input-field/discount-input-field.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DiscountInputFieldComponent);
    return DiscountInputFieldComponent;
}());



/***/ }),

/***/ "./src/app/component/multi-select-table/multi-select-table.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/component/multi-select-table/multi-select-table.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select_container{\n  margin-left: 14px;\n  padding-bottom: 35px;\n  width:260px;\n}\n.options_table_container{\n  /* display: block; */\n  overflow: auto;\n  width:260px;\n  height: 100px;\n  border: 1px solid #cfcfcf;\n  margin-bottom: 10px;\n}\n.selected_table_row{\n  background-color: #5e9dbc;\n  color:white;\n}\n.options_table{\n  width: 100%;\n}\n.options_table td {\n  cursor: pointer;\n  padding-left: 10px;\n\n  -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.new_btn{\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #4eb47f;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   float: right;\n   display:block;\n}\n.new_option_field{\n  border: 0px none;\n  outline: none;\n}\n.newOptionTooltip__{\n  background-color: gray;\n}\n:host ::ng-deep .tooltip-inner {\n    background-color: #c896d2;\n    color: #fff;\n    font-size: 12px;\n    line-height:1;\n}\n:host ::ng-deep .bs-tooltip-top .arrow::before {\n    border-top-color: #c896d2;\n}\n:host ::ng-deep .bs-tooltip-bottom .arrow::before {\n    border-bottom-color: #c896d2;\n}\n"

/***/ }),

/***/ "./src/app/component/multi-select-table/multi-select-table.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/component/multi-select-table/multi-select-table.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select_container\">\n  <div #options_table_container class=\"options_table_container\">\n    <table class=\"options_table\">\n      <tr *ngFor=\"let option of options; index as i;\"\n        (click)=\"toggleLineSelection(i)\"\n        [ngClass]=\"{'selected_table_row': optionsMap[i]}\">\n        <td>\n          {{option}}\n        </td>\n      </tr>\n      <!--tr [ngClass]=\"{'d-table-row':newOptionInput,'d-none':!newOptionInput}\"-->\n      <tr class=\"d-none\">\n        <td>\n          <input type=\"text\" class=\"new_option_field\"\n          (keyup.enter)=\"onNewOptionEntered($event)\"\n          [ngbTooltip]=\"newOptionTooltip\" placement=\"bottom\"\n          #newOptionTooltip=\"ngbTooltip\" triggers=\"focus:blur\"\n          (blur)=\"showNewOptionField(false)\"/>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <button type=\"button\" class=\"new_btn\" (click)=\"showNewOptionField(true)\">New</button>\n</div>\n<ng-template #newOptionTooltip>\n  <div class=\"newOptionTooltip\">\n    When done, press <b>Enter</b>.\n    <br/>\n    To cancel, leave empty and press <b>Enter</b> or click somewhere else.\n  </div>\n</ng-template>\n<!-- (blur)=\"showNewOptionField(false)\"-->\n"

/***/ }),

/***/ "./src/app/component/multi-select-table/multi-select-table.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/multi-select-table/multi-select-table.component.ts ***!
  \******************************************************************************/
/*! exports provided: MultiSelectTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectTableComponent", function() { return MultiSelectTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiSelectTableComponent = /** @class */ (function () {
    function MultiSelectTableComponent() {
        this.options = [];
        this.optionsMap = [];
        this.newOptionInput = false;
    }
    MultiSelectTableComponent.prototype.ngOnInit = function () {
    };
    MultiSelectTableComponent.prototype.ngAfterContentInit = function () {
        for (var _i = 0; _i < this.options.length; _i++) {
            this.optionsMap.push(false);
        }
    };
    MultiSelectTableComponent.prototype.ngAfterContentChecked = function () {
    };
    MultiSelectTableComponent.prototype.toggleLineSelection = function (i) {
        this.optionsMap[i] = !this.optionsMap[i];
    };
    MultiSelectTableComponent.prototype.newOption = function () {
        this.showNewOptionField(true);
    };
    MultiSelectTableComponent.prototype.showNewOptionField = function (show) {
        var table = this.ot_container.nativeElement.getElementsByTagName('table')[0];
        var rows = table.getElementsByTagName('tr');
        rows[rows.length - 1].classList.remove(show ? 'd-none' : 'd-table-row');
        rows[rows.length - 1].classList.add(show ? 'd-table-row' : 'd-none');
        this.ot_container.nativeElement.scrollTop =
            this.ot_container.nativeElement.scrollHeight;
        rows[rows.length - 1].getElementsByTagName('td')[0].getElementsByTagName('input')[0].focus();
        /*if(show){
          this.tooltip.open();
        }else{
          this.tooltip.close();
        }*/
    };
    MultiSelectTableComponent.prototype.onNewOptionEntered = function (event) {
        if (event.target.value.length > 0) {
            this.options.push(event.target.value);
            this.optionsMap.push(false);
            event.target.value = "";
        }
        this.showNewOptionField(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MultiSelectTableComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('options_table_container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MultiSelectTableComponent.prototype, "ot_container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newOptionTooltip'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"])
    ], MultiSelectTableComponent.prototype, "tooltip", void 0);
    MultiSelectTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-select-table',
            template: __webpack_require__(/*! ./multi-select-table.component.html */ "./src/app/component/multi-select-table/multi-select-table.component.html"),
            styles: [__webpack_require__(/*! ./multi-select-table.component.css */ "./src/app/component/multi-select-table/multi-select-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiSelectTableComponent);
    return MultiSelectTableComponent;
}());



/***/ }),

/***/ "./src/app/component/restricted-text-input/restricted-text-input.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/restricted-text-input/restricted-text-input.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #input type=\"text\" class=\"restricted-text-input_style\"\n   (input)=\"onInput($event)\" [disabled]=\"disabled\"/>\n"

/***/ }),

/***/ "./src/app/component/restricted-text-input/restricted-text-input.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/restricted-text-input/restricted-text-input.component.ts ***!
  \************************************************************************************/
/*! exports provided: RestrictedTextInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestrictedTextInputComponent", function() { return RestrictedTextInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestrictedTextInputComponent = /** @class */ (function () {
    function RestrictedTextInputComponent() {
        this.disabled = false;
        this.init_value = "";
        this.old_value = "";
    }
    RestrictedTextInputComponent.prototype.ngOnInit = function () {
        this.old_value = this.init_value;
        this.value = this.init_value;
    };
    RestrictedTextInputComponent.prototype.ngAfterViewInit = function () {
        this.input.nativeElement.value = this.init_value;
    };
    Object.defineProperty(RestrictedTextInputComponent.prototype, "regex", {
        set: function (regex) {
            this.regExObj = new RegExp(regex);
        },
        enumerable: true,
        configurable: true
    });
    RestrictedTextInputComponent.prototype.onInput = function (event) {
        if (!this.regExObj.test(event.target.value)) {
            event.target.value = this.old_value;
        }
        else {
            this.old_value = event.target.value;
        }
        this.value = event.target.value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RestrictedTextInputComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RestrictedTextInputComponent.prototype, "init_value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RestrictedTextInputComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], RestrictedTextInputComponent.prototype, "regex", null);
    RestrictedTextInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restricted-text-input',
            template: __webpack_require__(/*! ./restricted-text-input.component.html */ "./src/app/component/restricted-text-input/restricted-text-input.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RestrictedTextInputComponent);
    return RestrictedTextInputComponent;
}());



/***/ }),

/***/ "./src/app/component/toggle/toggle.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/toggle/toggle.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\n  position: relative;\n  display: inline-block;\n}\n.dimensions{\n  width: 43px;\n  height: 22px;\n}\n.switch input {display:none;}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 90%/*20px*/;\n  width: 47%/*20px*/;\n  left: 2.5%/*1px*/;\n  bottom: 5%/*1px*/;\n  background-color: white;\n  transition: .4s;\n}\ninput:checked + .slider {\n  background-color: #5e9dbc;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n  -webkit-transform: translateX(100%/*21px*/);\n  transform: translateX(100%/*21px*/);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius:\n    26% / 46%/*10px*/;\n}\n.slider.round:before {\n  border-radius: 60%;\n}\n"

/***/ }),

/***/ "./src/app/component/toggle/toggle.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/toggle/toggle.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"switch dimensions\">\n  <input type=\"checkbox\" [checked]=\"_checked\"\n    (change)=\"setChecked($event.target.checked)\">\n  <span class=\"slider round\"></span>\n</label>\n"

/***/ }),

/***/ "./src/app/component/toggle/toggle.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/toggle/toggle.component.ts ***!
  \******************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
        this._checked = true;
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ToggleComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ToggleComponent.prototype, "checked", {
        get: function () { return this._checked; },
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    ToggleComponent.prototype.setChecked = function (value) {
        this._checked = value;
        this.checkedChange.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToggleComponent.prototype, "checkedChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ToggleComponent.prototype, "checked", null);
    ToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggle',
            template: __webpack_require__(/*! ./toggle.component.html */ "./src/app/component/toggle/toggle.component.html"),
            styles: [__webpack_require__(/*! ./toggle.component.css */ "./src/app/component/toggle/toggle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "./src/app/header/hamburger-menu/hamburger-menu.component.css":
/*!********************************************************************!*\
  !*** ./src/app/header/hamburger-menu/hamburger-menu.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\n opacity:0.8;\n background-color:#ccc;\n width:100%;\n height:100%;\n position:fixed;\n z-index: 1;\n}\n.user_menu{\n  position:fixed;\n  z-index: 5;\n  background-color: #ffffff;\n  margin-top:6px;\n  padding:2px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n@media (min-width:576px) {\n  .left_margin{\n    left: 90px;\n  }\n}\n@media (max-width:575px) {\n  .left_margin{\n    left: 6px;\n  }\n}\n.image_margin{\n   width:17%;\n   height:17%;\n   margin-right: 15px;\n}\n.user_menu>div{\n  line-height: 60px;\n  font-size: 23px;\n  color: #031a41;\n  padding-left: 25px;\n  padding-right: 20px;\n  width: 320px;\n}\n.user_menu>div:hover{\n  padding-left:25px;\n  padding-right:20px;\n  background-color: #5e9dbc;\n  color: white;\n}\n.angle_button{\n  line-height: 60px;\n}\n.sub_menu>div{\n  line-height: 50px;\n  padding-left: 70px;\n  font-size:18px;\n}\n.sub_menu>div:hover{\n  color: #031a41;\n}\n.sub_menu>a{\n  line-height: 50px;\n  padding-left: 70px;\n  font-size:18px;\n  text-decoration: none;\n}\n.sub_menu>a:hover{\n  color: #031a41;\n}\n.user_icon{\n  font-size: 30px;\n  margin-right: 19px;\n  margin-top: 0px;\n}\n"

/***/ }),

/***/ "./src/app/header/hamburger-menu/hamburger-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/header/hamburger-menu/hamburger-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\" (click)=\"closeMenus($event)\"></div>\n<span class=\"user_menu left_margin\">\n  <div (click)=\"toggleSubMenu($event,0)\">\n    <span class=\"fas fa-tachometer-alt user_icon\" aria-hidden=\"true\"></span>\n    Dashboard\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[0],'fa-angle-up':!showSubMenu[0]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[0]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Dashboard Item 1</div>\n      <div>Dashboard Item 2</div>\n    </div>\n  </div>\n  <div (click)=\"toggleSubMenu($event,1)\">\n    <span class=\"far fa-newspaper user_icon\" aria-hidden=\"true\">\n    </span>\n    Reports\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[1],'fa-angle-up':!showSubMenu[1]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[1]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div [routerLink]=\"['/reports/requested_rooms']\">Requested Rooms</div>\n      <div>Reports Menu Item 2</div>\n    </div>\n  </div>\n  <div (click)=\"toggleSubMenu($event,2)\">\n    <span class=\"fas fa-hotel user_icon\" aria-hidden=\"true\">\n    </span>\n    Property Config\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[2],'fa-angle-up':!showSubMenu[2]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[2]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Pictures</div>\n      <div [routerLink]=\"['/property_config/settings']\">Settings</div>\n      <div [routerLink]=\"['/property_config/loyalty']\">Loyality Settings</div>\n      <div [routerLink]=\"['/property_config/upgrade']\">Upgrade Settings</div>\n      <div>Rooms Import</div>\n      <div>Blackout Rooms</div>\n    </div>\n  </div>\n  <div (click)=\"toggleSubMenu($event,3)\">\n    <span class=\"fas fa-cog user_icon\" aria-hidden=\"true\">\n    </span>\n    Admin\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[3],'fa-angle-up':!showSubMenu[3]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[3]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Admin Menu Item 1</div>\n      <div>Admin Menu Item 2</div>\n    </div>\n  </div>\n  <div (click)=\"toggleSubMenu($event,4)\">\n    <span class=\"far fa-envelope user_icon\" aria-hidden=\"true\">\n    </span>\n    Demo Email\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[4],'fa-angle-up':!showSubMenu[4]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[4]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Demo Email Menu Item 1</div>\n      <div>Demo Email Menu Item 2</div>\n    </div>\n  </div>\n</span>\n"

/***/ }),

/***/ "./src/app/header/hamburger-menu/hamburger-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/header/hamburger-menu/hamburger-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: HamburgerMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerMenuComponent", function() { return HamburgerMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HamburgerMenuComponent = /** @class */ (function () {
    function HamburgerMenuComponent() {
        /*
        showDashboardMenu: boolean = false;
        showReportsMenu: boolean = false;
        showPropertyConfigMenu: boolean = false;
        showAdminMenu: boolean = false;
        showDemoEmailMenu: boolean = false;*/
        this.showSubMenu = [false, false, false, false, false];
        this.parentCloseMenu =
            function () { console.log("Trying to call header's function to close hamburger menu."); };
        this.parentClickHamburgerMenu =
            function () { console.log("Trying to call header's function for click on hamburger menu."); };
    }
    HamburgerMenuComponent.prototype.ngOnInit = function () {
    };
    /**
    * Source: https://stackoverflow.com/a/50585796/10069950
    *
    */
    HamburgerMenuComponent.prototype.closeMenus = function (event) {
        this.parentCloseMenu(event);
    };
    HamburgerMenuComponent.prototype.clickHamburgerMenu = function (event) {
        this.parentClickHamburgerMenu(event);
    };
    /*
    toggleDashboardMenu(event:MouseEvent){
      this.showDashboardMenu = !this.showDashboardMenu;
      this.showReportsMenu = false;
      this.showPropertyConfigMenu = false;
      this.showAdminMenu = false;
      this.showDemoEmailMenu = false;
      event.stopPropagation();
    }
  
    toggleReportsMenu(event:MouseEvent){
      this.showDashboardMenu = false;
      this.showReportsMenu = !this.showReportsMenu;
      this.showPropertyConfigMenu = false;
      this.showAdminMenu = false;
      this.showDemoEmailMenu = false;
      event.stopPropagation();
    }*/
    HamburgerMenuComponent.prototype.toggleSubMenu = function (event, id) {
        var new_val = !this.showSubMenu[id];
        this.showSubMenu = [false, false, false, false, false];
        this.showSubMenu[id] = new_val;
        event.stopPropagation();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], HamburgerMenuComponent.prototype, "parentCloseMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], HamburgerMenuComponent.prototype, "parentClickHamburgerMenu", void 0);
    HamburgerMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hamburger-menu',
            template: __webpack_require__(/*! ./hamburger-menu.component.html */ "./src/app/header/hamburger-menu/hamburger-menu.component.html"),
            styles: [__webpack_require__(/*! ./hamburger-menu.component.css */ "./src/app/header/hamburger-menu/hamburger-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HamburgerMenuComponent);
    return HamburgerMenuComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n  background-color: #031a41;\n  color: white;\n  height: 78px;\n}\n\n.image_margin{\n  margin-top: 3px;\n}\n\n.user_name{\n  font-size:23px;\n  line-height: 1;\n  margin-top:18px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.user_role{\n  font-size: 16px;\n  line-height: 1;\n  margin-top:10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.arrow0 {\n  width: 0;\n  height: 0;\n  border-top: 39px solid #768692;\n  border-bottom: 39px solid #768692;\n  border-left: 20px solid #031a41;\n}\n\n.breadcrumb0 {\n  background-color: #768692;\n  height:100%;\n  line-height: 78px;\n  padding-left: 10px;\n  padding-right: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.breadcrumb0_icon {\n  background-color: #768692;\n  height:100%;\n  line-height: 78px;\n  padding-left: 10px;\n  /*padding-right: 10px;*/\n}\n\n.breadcrumb1 {\n  background-color: #5e9dbc;\n  height:100%;\n  line-height: 78px;\n  padding-left: 15px;\n  padding-right: 15px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.arrow1 {\n  width: 0;\n  height: 0;\n  border-top: 39px solid #5e9dbc;\n  border-bottom: 39px solid #5e9dbc;\n  border-left: 20px solid #768692;\n}\n\n.arrow2 {\n  width: 0;\n  height: 0;\n  border-top: 39px solid #5e9dbc;\n  border-bottom: 39px solid #5e9dbc;\n  border-right: 20px solid #031a41;\n}\n\n/*\n.image_right{\n    float: right;\n}\n*/\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div class=\"container-fluid\"-->\n  <div class=\"header\" (click)=\"closeMenus($event)\">\n    <img src=\"/assets/koridor_logo_left.png\" class=\"image_margin float-left\">\n    <div class=\"fa fa-bars fa-3x mt-3 mx-4 float-left\"\n      (click)=\"toggleHamburgerMenu($event)\">\n    </div>\n    <div *ngIf=\"breadcrumb0\" class=\"float-left d-none d-lg-block\">\n      <div *ngIf=\"breadcrumb0\" class=\"arrow0 float-left\"></div>\n      <div *ngIf=\"breadcrumb0\" [ngClass]=\"breadcrumb0_icon\"\n        class=\"fa-2x breadcrumb0_icon float-left\"></div>\n      <div *ngIf=\"breadcrumb0\" class=\"breadcrumb0 float-left\">\n          {{ breadcrumb0 }}\n      </div>\n      <div *ngIf=\"breadcrumb0\" class=\"arrow1 float-left\"></div>\n      <div *ngIf=\"breadcrumb1\" class=\"breadcrumb1 float-left\">\n          {{ breadcrumb1 }}\n      </div>\n      <div *ngIf=\"breadcrumb1\" class=\"arrow2 float-left\"></div>\n    </div>\n    <!--span class=\"align-middle\">middle</span-->\n    <img src=\"/assets/koridor_logo_right.png\" class=\"image_margin float-right\">\n    <div class=\"mr-5 d-none d-sm-block float-right\"\n      (click)=\"toggleUserMenu($event)\">\n        <div class=\"user_name\">{{ userName }}</div>\n        <div class=\"user_role\">{{ userRole }}</div>\n    </div>\n    <span class=\"fa fa-user-circle fa-2x mt-4 mr-3 float-right\"\n      aria-hidden=\"true\"\n      (click)=\"toggleUserMenu($event)\">\n    </span>\n  </div>\n<!--/div-->\n<!--  The font is Century Gothic\n-->\n  <app-user-menu *ngIf=\"showUserMenu\" [parentCloseMenu]=\"closeMenuFn\"></app-user-menu>\n  <app-hamburger-menu *ngIf=\"showHamburgerMenu\"\n    [parentCloseMenu]=\"closeMenuFn\"\n    [parentClickHamburgerMenu]=\"clickHamburgerMenuFn\">\n  </app-hamburger-menu>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(activatedRoute, location, router) {
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.userName = 'Nikolay Stefanov';
        this.userRole = 'Administrator';
        this.breadcrumb0 = null;
        this.breadcrumb0_icon = null;
        this.breadcrumb1 = null;
        this.showUserMenu = false;
        this.showHamburgerMenu = false;
        //this.closeMenuFn = this.closeMenu;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        /*https://stackoverflow.com/a/45737376/10069950*/
        var _this = this;
        this.subscription = this.router.events.subscribe(function (event) { _this.getRouteData(_this, event); });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.getRouteData = function (_this, event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
            //console.log("Data: " +  JSON.stringify(event.state.root.firstChild.data) );
            //console.log(event);
            //console.log("bread0: " + event.state.root.children[0].data.breadcrumb);
            //console.log("bread1: " + event.state.root.children[0].children[0].data.breadcrumb);
            if (event.state.root.children[0] && event.state.root.children[0].data) {
                _this.breadcrumb0 = event.state.root.children[0].data.breadcrumb;
            }
            else {
                _this.breadcrumb0 = null;
            }
            if (event.state.root.children[0] && event.state.root.children[0].data) {
                _this.breadcrumb0_icon = event.state.root.children[0].data.icon;
            }
            else {
                _this.breadcrumb0_icon = null;
            }
            if (event.state.root.children[0] && event.state.root.children[0].children[0] &&
                event.state.root.children[0].children[0].data) {
                _this.breadcrumb1 = event.state.root.children[0].children[0].data.breadcrumb;
            }
            else {
                _this.breadcrumb1 = null;
            }
        }
    };
    HeaderComponent.prototype.toggleUserMenu = function (event) {
        this.showUserMenu = !this.showUserMenu;
        this.showHamburgerMenu = false;
        event.stopPropagation(); //Source: https://stackoverflow.com/a/35274102/10069950
        //console.log(event);
    };
    HeaderComponent.prototype.toggleHamburgerMenu = function (event) {
        this.showHamburgerMenu = !this.showHamburgerMenu;
        this.showUserMenu = false;
        event.stopPropagation(); //Source: https://stackoverflow.com/a/35274102/10069950
    };
    HeaderComponent.prototype.closeMenus = function (event) {
        this.showUserMenu = false;
        this.showHamburgerMenu = false;
    };
    Object.defineProperty(HeaderComponent.prototype, "closeMenuFn", {
        get: function () {
            return this.closeMenus.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.clickHamburgerMenu = function (event /*:MouseEvent*/) {
        //console.log(event.path[2].childNodes[1].textContent.trim());
        /*this.breadcrumb0 = event.path[2].childNodes[1].textContent.trim();
        this.breadcrumb1 = event.toElement.innerHTML;
        this.setBreadcrumb0Icon();*/
        //this.showUserMenu = false;
        this.showHamburgerMenu = false;
    };
    Object.defineProperty(HeaderComponent.prototype, "clickHamburgerMenuFn", {
        get: function () {
            return this.clickHamburgerMenu.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/user-menu/user-menu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/header/user-menu/user-menu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\n opacity:0.8;\n background-color:#ccc;\n width:100%;\n height:100%;\n position:fixed;\n z-index: 1;\n}\n.user_menu{\n  position:fixed;\n  z-index: 5;\n  background-color: #ffffff;\n  font-size:23px;\n  line-height: 60px;\n  margin-top:6px;\n  padding:2px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n@media (min-width:576px) {\n  .right_margin{\n    right: 120px;\n  }\n}\n@media (max-width:575px) {\n  .right_margin{\n    right: 6px;\n  }\n}\n.image_margin{\n   width:17%;\n   height:17%;\n   margin-right: 15px;\n}\n.user_menu div{\n  padding-left:25px;\n  padding-right:20px;\n  color: #031a41;\n}\n.user_menu div:hover{\n  padding-left:25px;\n  padding-right:20px;\n  background-color: #5e9dbc;\n  color: white;\n}\n.user_icon{\n  font-size: 30px;\n  margin-right: 19px;\n  margin-top: 0px;\n}\n"

/***/ }),

/***/ "./src/app/header/user-menu/user-menu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/header/user-menu/user-menu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\" (click)=\"closeMenus($event)\"></div>\n<span class=\"user_menu right_margin\">\n  <div (click)=\"closeMenus($event)\">\n    <img src=\"/assets/koridor_logo_left.png\" class=\"image_margin\">\n    MyRoom\n  </div>\n  <div (click)=\"closeMenus($event)\">\n    <span class=\"fa fa-user-circle user_icon\" aria-hidden=\"true\">\n    </span>\n    Logout\n  </div>\n</span>\n"

/***/ }),

/***/ "./src/app/header/user-menu/user-menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/header/user-menu/user-menu.component.ts ***!
  \*********************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent() {
        this.parentCloseMenu =
            function () { console.log("Trying to call header's function to close user menu."); };
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    /**
    * Source: https://stackoverflow.com/a/50585796/10069950
    *
    */
    UserMenuComponent.prototype.closeMenus = function (event) {
        this.parentCloseMenu(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], UserMenuComponent.prototype, "parentCloseMenu", void 0);
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/header/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.css */ "./src/app/header/user-menu/user-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/property_config/loyalty/loyalty.component.css":
/*!***************************************************************!*\
  !*** ./src/app/property_config/loyalty/loyalty.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\n  /*background-color: #dddddd;\n  background: repeating-linear-gradient(\n    45deg,\n    #606dbc,\n    #606dbc 1px,\n    #465298 10px,\n    #465298 2px\n  );\n    background:repeating-linear-gradient(\n    45deg,\n    transparent,\n    transparent 10px,\n    #ccc 10px,\n    #ccc 20px\n  ),*/\n  background: url(/assets/bckgr3.png);\n  background-repeat: repeat;\n}\n.tab_container{\n  margin: 0px 0px;\n  padding: 38px 22px 22px 68px;/*top right bottom left*/\n  background-color: white;\n  /*\n  border: 1px solid #cfcfcf;*/\n  border-radius: 6px;\n}\n.panel{\n  background-color: #ffffff;\n  color: #7c7c7c;\n  border: 1px solid #cfcfcf;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  width:290px;\n  margin: 15px 15px;\n}\n.panel-header{\n  background-color: #9c9c9c;\n  color: #ffffff;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  height:38px;\n  line-height:38px;\n  padding-left:15px;\n  margin-bottom: 10px;\n}\n.multi_choice{\n  border: 1px solid #cfcfcf;\n  border-right: 2px solid #cfcfcf;\n  border-bottom: 2px solid #cfcfcf;\n  width:270px;\n  height: 100px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n.row0_table_container{\n  margin: 0px 15px 15px 0px;/*top right bottom left*/\n}\n.row0_table{\n  border-collapse: separate; /* allow spacing between cell borders */\n  border-spacing: 30px 30px; /* NOTE: syntax is <horizontal value> <vertical value> */\n}\n.row0_table td/*:nth-child(1)*/{\n  color: #9c9c9c;\n  font-size: 30px;\n}\n.tab_row{\n  margin: 10px 0px 20px 30px;/*top right bottom left*/\n}\n.lable{\n  color: #7c7c7c;\n  font-size: 18px;\n  text-decoration: underline;\n}\n.toggle{\n  margin: 6px 30px 0px 10px;;\n}\n.tab_row_text{\n  color: #9c9c9c;\n  font-size: 31px;\n  line-height: 1.1;\n  padding-left: 10px;\n}\n.tab_row_text_inactive{\n  color: #cccccc;\n  font-size: 31px;\n  line-height: 1.1;\n  padding-left: 10px;\n}\n.days_left_text{\n  color: #9c9c9c;\n  font-size: 31px;\n  line-height: 1.1;\n\n}\n.days_left_text_inactive{\n  color: #cccccc;\n  font-size: 31px;\n  line-height: 1.1;\n\n}\n.days_left_field{\n  width: 63px;\n  height: 35px;\n  border: 1px solid #cfcfcf;\n  border-radius: 6px;\n  margin-right: 17px;\n  margin-left: 80px;\n}\n#alpha_input,#beta_input{display:none;}\n.checkmark{margin-bottom:0px;}\n.checkmark:after {\n  content: \"\";\n  display: inline-block;\n  /*background: url(\"./assets/radio_button_unchecked.svg\") no-repeat;*/\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='32' width='32'><circle cx='16' cy='16' r='16' stroke='#cfcfcf' stroke-width='1' fill='white' /></svg>\");\n  width: 32px;\n  height: 32px;\n  margin: 0px 15px 0px 15px;\n}\n#alpha_input:checked ~ .checkmark:after,#beta_input:checked ~ .checkmark:after{\n  display: inline-block;\n  /*background: url(\"./assets/radio_button_checked.svg\") no-repeat;*/\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='32' width='32'><circle cx='16' cy='16' r='16' stroke='#cfcfcf' stroke-width='1' fill='white'/><circle cx='16' cy='16' r='11' fill='#cfcfcf'/></svg>\");\n  width: 32px;\n  height: 32px;\n  margin: 0px 15px 0px 15px;\n}\n.invitation_email_table{\n  background-color: #e8ecf3;\n}\n.invitation_email_radio_label{\n  font-size: 26px;\n  color: #c1c1c1;\n}\n@media only screen and (min-width: 1107px) {\n  .tabs{\n    display: flex;\n    margin-top: 27px;\n  }\n  .horiz_tabs{\n    display: none;\n  }\n  .active1{\n    background-color: white;\n    font-size: 28px;\n    color: #9c9c9c;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    background-clip: padding-box;\n    border-left: 13px solid #33a948;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    cursor: pointer;\n\n    -webkit-touch-callout: none;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n  }\n  .non_active1{\n    background-color: #e8ecf3;\n    font-size: 24px;\n    color: #c1c1c1;\n    cursor: pointer;\n    background-clip: padding-box;\n    border-top: 2px solid transparent;\n    border-right: 2px solid transparent;\n    border-left: 13px solid transparent;\n    border-bottom: 2px solid transparent;\n\n    -webkit-touch-callout: none;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n  }\n}\n@media only screen and (max-width: 1106px) {\n  .tabs{\n    display:none;\n  }\n  .horiz_tabs{\n    margin-left: 25px;\n  }\n  .horiz_active1{\n    background-color: white;\n    font-size: 18px;\n    color: #9c9c9c;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    cursor: pointer;\n\n    -webkit-touch-callout: none;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n  }\n  .horiz_non_active1{\n    background-color: #e8ecf3;\n    font-size: 18px;\n    color: #c1c1c1;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    cursor: pointer;\n\n    -webkit-touch-callout: none;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n  }\n}\n.horiz_container{\n  margin: 0px 0px 50px 0px;/*top right bottom left*/\n}\n.reminder_margin{\n  margin-right: 65px;\n}\n:host ::ng-deep .days_left_text .restricted-text-input_style,\n:host ::ng-deep .days_left_text_inactive .restricted-text-input_style{\n  width: 63px;\n  height: 35px;\n  border: 1px solid #cfcfcf;\n  border-radius: 6px;\n  /*margin-left: 80px;*/\n  color: #9c9c9c;\n  font-size: 30px;\n}\n:host ::ng-deep .selection_fee_field .restricted-text-input_style{\n  width: 90px;\n  height: 46px;\n  border: 1px solid #cfcfcf;\n  border-radius: 6px;\n  color: #9c9c9c;\n  font-size: 30px;\n}\n@media only screen and (max-width: 935px){\n  .triangle105x32{\n    display: none;\n  }\n  .invitation_email_days_bgr{\n  }\n  .invitation_email_days_left_margin{\n    padding: 15px 50px 0px 95px;/*top right bottom left*/\n  }\n  .reminder_email_days_left_margin{\n    padding: 5px 50px 0px 95px;/*top right bottom left*/\n  }\n}\n@media only screen and (min-width: 936px){\n  .triangle105x32{\n    display: inline-block;\n    /*background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='105' width='32'><polygon points='0,0 0,105 32,53' stroke-width='0' fill='#e8ecf3'/></svg>\");*/\n    /*background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='105' width='35'><defs><filter id='f3'><feDropShadow dx='0' dy='0' stdDeviation='3'/></filter></defs><polygon points='0,0 0,105 32,53' stroke-width='0' fill='#e8ecf3' filter='url(#f3)'/></svg>\");\n    */background-image: url(\"/assets/triangle105x32.svg\");\n    width: 35px;\n    height: 105px;\n    margin: 0px 0px 0px 0px;\n  }\n  .invitation_email_days_bgr{\n    background-color: #ececec;\n    height: 105px;\n    margin-right: 20px;\n  }\n  .invitation_email_days_left_margin{\n    padding: 0px 32px 0px 45px;/*top right bottom left*/\n  }\n  .reminder_email_days_left_margin{\n    padding: 0px 32px 0px 80px;/*top right bottom left*/\n  }\n}\n.send_button{\n  border: 1px solid #e0e0e0;\n  color: white;\n  background-color: #609dba;\n  border-radius: 6px;\n  font-size: 30px;\n  width: 123px;\n  height: 51px;\n  line-height: 1;\n  padding-bottom: 4px;\n  margin-top:25px;\n}\n.property-panel{\n  background-color: #ffffff;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 500;\n  width:229px;\n  padding-left: 8px;\n  margin: 0 auto;\n  margin: 15px auto 15px;\n}\n.property-select{\n   /*margin-top: 5px;\n   padding-top: 4px;*/\n   width: 117px;\n   height: 37px;\n   text-align: left;\n   font-size: 21px;\n   /*font-weight: 600;*/\n   padding-left: 8px;\n   /* Firefox */\n   -moz-appearance: none;\n   /* Safari and Chrome */\n   -webkit-appearance: none;\n   appearance: none;\n   background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='37px' width='35px'><line x1='0' y1='0' x2='0' y2='37' style='stroke:rgb(255,255,255);stroke-width:2' /><text x='11' y='25' fill='white' font-size='14'>﹀</text></svg>\");\n   /*background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='37px' width='35px'><!--text x='11' y='25' fill='black' font-size='14'>&#xFE40;</text--><line x1='0' y1='0' x2='0' y2='37' style='stroke:rgb(255,255,255);stroke-width:2' /><rect width='35' height='37' style='fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)' /></svg>\");\n   */\n   background-position: right top;\n   background-repeat: no-repeat;\n   background-color: #609dba;\n   border-radius: 4px;\n   color: white;\n   margin: 5px 5px;\n}\n.property-select>option{\n   text-align: left;\n   font-size: 18px;\n   background-color: #609dba;\n   /*background-color: green;*/\n   color: white;\n   /*margin: 5px 5px;*/\n}\n.property{\n  background-color: white;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 26px;\n  font-weight: 500;\n  width:264px;\n  padding-left: 8px;\n  margin: 32px 0px 67px 0px;/*top right bottom left*/\n}\n.property_label{\n  line-height: 1;\n  padding-bottom: 5px;\n}\n:host ::ng-deep .toggle .dimensions{\n  width: 43px;\n  height: 22px;\n}\n"

/***/ }),

/***/ "./src/app/property_config/loyalty/loyalty.component.html":
/*!****************************************************************!*\
  !*** ./src/app/property_config/loyalty/loyalty.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background d-flex flex-column\">\n  <!--ul class=\"nav flex-column\">\n    <li class=\"nav-item\">\n      <span class=\"nav-link active\" href=\"#\">Loyalty</span>\n    </li>\n    <li class=\"nav-item\">\n      <span class=\"nav-link\" href=\"#\">Not<br/>Loyalty</span>\n    </li>\n  </ul-->\n  <!--div class=\"property-panel\">\n    <table>\n      <tr>\n        <td>Property :</td>\n        <td>\n          <div class=\"\">\n            <select class=\"property-select\">\n             <option value=\"ALTH\">ALTH</option>\n             <option value=\"H1551\">H1551</option>\n             <option value=\"regular\">regular</option>\n           </select>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </div-->\n\n  <div class=\"d-flex flex-row justify-content-center align-items-center\">\n    <div class=\"d-flex flex-row justify-content-center align-items-center property\">\n      <div class=\"property_label\">Property :\n      </div>\n      <div class=\"\">\n        <select class=\"property-select\">\n         <option value=\"ALTH\">ALTH</option>\n         <option value=\"H1551\">H1551</option>\n         <option value=\"regular\">regular</option>\n       </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"d-flex flex-row justify-content-center\">\n    <div class=\"tabs\">\n      <ul class=\"nav flex-column\">\n        <li class=\"nav-item\">\n          <div class=\"nav-link\" (click)=\"set_loyalty_members(true)\"\n            [ngClass]=\"{'active1': loyalty_members, 'non_active1': !loyalty_members}\">\n            <div>Loyalty</div><div>Members</div>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <div class=\"nav-link\" (click)=\"set_loyalty_members(false)\"\n            [ngClass]=\"{'active1': !loyalty_members, 'non_active1': loyalty_members}\">\n            <div>Non</div><div>Loyalty</div><div>Members</div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"d-flex flex-column horiz_container\">\n      <div class=\"horiz_tabs\">\n        <ul class=\"nav\">\n          <li class=\"nav-item\">\n            <div class=\"nav-link\" (click)=\"set_loyalty_members(true)\"\n              [ngClass]=\"{'horiz_active1': loyalty_members, 'horiz_non_active1': !loyalty_members}\">\n              Loyalty Members</div>\n          </li>\n          <li class=\"nav-item\">\n            <div class=\"nav-link\" (click)=\"set_loyalty_members(false)\"\n              [ngClass]=\"{'horiz_active1': !loyalty_members, 'horiz_non_active1': loyalty_members}\">\n              Non Loyalty Members</div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"tab_container\">\n        <div class=\"d-flex flex-wrap justify-content-center\">\n          <div class=\"panel\"\n            [ngClass]=\"{'d-block': loyalty_members, 'd-none': !loyalty_members}\">\n            <div class=\"panel-header\">\n              Loyalty Tier Level\n            </div>\n            <!--div class=\"multi_choice\">\n            </div-->\n            <app-multi-select-table [options]=\"['Ala','Bala','Nica','Marsilia','Zaro']\">\n            </app-multi-select-table>\n          </div>\n          <div class=\"row0_table_container\">\n              <table class=\"row0_table\">\n                <tr>\n                  <td>Room selection fee</td>\n                  <td  class=\"selection_fee_field\">\n                    <!-- https://stackoverflow.com/questions/6029674/regex-for-positive-float-numbers -->\n                    <app-restricted-text-input\n                      [regex]=\"'^[0-9]*(?:\\\\.[0-9]*)?$'\" [init_value]=\"''\" [disabled]=\"false\">\n                    </app-restricted-text-input>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Upgrade discount</td>\n                  <td>\n                    <app-discount-input-field></app-discount-input-field>\n                  </td>\n                </tr>\n              </table>\n          </div>\n        </div>\n        <div class=\"d-flex flex-wrap justify-content-start tab_row\">\n          <div class=\"lable\">Enable</div>\n        </div>\n        <!--div class=\"d-flex flex-wrap justify-content-start tab_row\">\n          <div class=\"toggle\"><app-toggle [(checked)]=\"invitation_email\"></app-toggle></div>\n          <div>\n            <table class=\"invitation_email_table text-right\">\n              <tr><td [ngClass]=\"{'tab_row_text':invitation_email, 'tab_row_text_inactive':!invitation_email}\">\n                Send invitation email</td><td></td></tr>\n              <tr><td class=\"invitation_email_radio_label\"><label for=alpha_input>upon reservation</label></td>\n                <td>\n                  <input type=\"radio\" checked=\"checked\" name=\"radio\" id=\"alpha_input\" [disabled]=\"!invitation_email\">\n                  <label for=alpha_input class=\"checkmark\"></label>\n                </td>\n              </tr>\n              <tr><td class=\"invitation_email_radio_label\"><label for=beta_input>at</label></td>\n                <td>\n                  <input type=\"radio\" checked=\"checked\" name=\"radio\" id=\"beta_input\" [disabled]=\"!invitation_email\">\n                  <label for=beta_input class=\"checkmark\"></label>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <div>\n            <table>\n              <tr><td class=\"days_left_text\">&nbsp;</td></tr>\n              <tr>\n                <td class=\"invitation_email_radio_label\">&nbsp;</td>\n                <td rowspan=\"2\"\n                  [ngClass]=\"{'days_left_text':invitation_email, 'days_left_text_inactive':!invitation_email}\">\n                  <app-restricted-text-input\n                    [regex]=\"'^[0-9]*(?:\\\\.[0-9]*)?$'\" [init_value]=\"''\" [disabled]=\"!invitation_email\">\n                  </app-restricted-text-input>\n                  days left\n                </td>\n              </tr>\n              <tr>\n                <td class=\"invitation_email_radio_label\">&nbsp;</td>\n              </tr>\n            </table>\n          </div>\n        </div-->\n\n\n        <div class=\"d-flex flex-wrap justify-content-start tab_row\">\n          <div class=\"toggle\"><app-toggle [(checked)]=\"invitation_email\"></app-toggle></div>\n          <div>\n            <table class=\"invitation_email_table text-right\">\n              <tr><td [ngClass]=\"{'tab_row_text':invitation_email, 'tab_row_text_inactive':!invitation_email}\">\n                Send invitation email</td><td></td></tr>\n              <tr><td class=\"invitation_email_radio_label\"><label for=alpha_input>upon reservation</label></td>\n                <td>\n                  <input type=\"radio\" checked=\"checked\" name=\"radio\" id=\"alpha_input\" [disabled]=\"!invitation_email\">\n                  <label for=alpha_input class=\"checkmark\"></label>\n                </td>\n              </tr>\n              <tr><td class=\"invitation_email_radio_label\"><label for=beta_input>at</label></td>\n                <td>\n                  <input type=\"radio\" checked=\"checked\" name=\"radio\" id=\"beta_input\" [disabled]=\"!invitation_email\">\n                  <label for=beta_input class=\"checkmark\"></label>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"d-flex align-items-center align-self-end invitation_email_days_bgr\"><!---->\n            <span class=\"triangle105x32\"></span>\n            <div [ngClass]=\"{'days_left_text':invitation_email,\n              'days_left_text_inactive':!invitation_email,\n              'invitation_email_days_left_margin':true}\">\n              <app-restricted-text-input\n                [regex]=\"'^(?:.{0}|0|[1-9][0-9]*)$'\" [init_value]=\"''\" [disabled]=\"!invitation_email\">\n              </app-restricted-text-input>\n              days left\n            </div>\n          </div>\n        </div>\n\n\n        <!--div class=\"d-flex flex-wrap justify-content-start tab_row\">\n          <div class=\"d-flex flex-column\" style=\"background-color:pink\">\n              <div class=\"invisible\">Send invitation email</div>\n              <div>\n                <input type=\"radio\" checked=\"checked\" name=\"radio\" id=\"alpha_input\" [disabled]=\"!invitation_email\">\n                <label for=alpha_input class=\"checkmark\"></label>\n              </div>\n              <div>\n                <input type=\"radio\" checked=\"checked\" name=\"radio\" id=\"beta_input\" [disabled]=\"!invitation_email\">\n                <label for=beta_input class=\"checkmark\"></label>\n              </div>\n          </div>\n          <div class=\"align-self-center\">\n            <app-restricted-text-input\n              [regex]=\"'^[0-9]*(?:\\\\.[0-9]*)?$'\" [init_value]=\"''\" [disabled]=\"!invitation_email\">\n            </app-restricted-text-input>\n            days left\n          </div>\n        </div-->\n\n\n        <div class=\"d-flex flex-wrap justify-content-start tab_row\">\n          <div class=\"toggle\"><app-toggle [(checked)]=\"reminder_email\"></app-toggle></div>\n          <div [ngClass]=\"{'tab_row_text':reminder_email, 'tab_row_text_inactive':!reminder_email, 'reminder_margin':true}\">\n            Send reminder email\n          </div>\n          <div [ngClass]=\"{'days_left_text':reminder_email,\n            'days_left_text_inactive':!reminder_email,\n            'reminder_email_days_left_margin':true}\">\n            <app-restricted-text-input\n              [regex]=\"'^(?:.{0}|0|[1-9][0-9]*)$'\" [init_value]=\"''\" [disabled]=\"!reminder_email\">\n            </app-restricted-text-input>\n            days left\n          </div>\n        </div>\n        <div class=\"d-flex flex-wrap justify-content-start tab_row\">\n          <div class=\"toggle\"><app-toggle [(checked)]=\"room_selection\"></app-toggle></div>\n          <div [ngClass]=\"{'tab_row_text':room_selection, 'tab_row_text_inactive':!room_selection}\">\n            Allow room selection\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-end\">\n          <button class=\"send_button\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/property_config/loyalty/loyalty.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/property_config/loyalty/loyalty.component.ts ***!
  \**************************************************************/
/*! exports provided: LoyaltyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyComponent", function() { return LoyaltyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoyaltyComponent = /** @class */ (function () {
    function LoyaltyComponent() {
        this.loyalty_members = true;
        this.invitation_email = true;
        this.reminder_email = true;
        this.room_selection = true;
    }
    LoyaltyComponent.prototype.ngOnInit = function () {
    };
    LoyaltyComponent.prototype.set_loyalty_members = function (new_val) {
        this.loyalty_members = new_val;
    };
    LoyaltyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loyalty',
            template: __webpack_require__(/*! ./loyalty.component.html */ "./src/app/property_config/loyalty/loyalty.component.html"),
            styles: [__webpack_require__(/*! ./loyalty.component.css */ "./src/app/property_config/loyalty/loyalty.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoyaltyComponent);
    return LoyaltyComponent;
}());



/***/ }),

/***/ "./src/app/property_config/settings/settings.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/property_config/settings/settings.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\n  /*background-color: #dddddd;\n  background: repeating-linear-gradient(\n    45deg,\n    #606dbc,\n    #606dbc 1px,\n    #465298 10px,\n    #465298 2px\n  );\n    background:repeating-linear-gradient(\n    45deg,\n    transparent,\n    transparent 10px,\n    #ccc 10px,\n    #ccc 20px\n  ),*/\n  background: url(/assets/bckgr3.png);\n  background-repeat: repeat;\n}\n\n.panel{\n  background-color: #ffffff;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  width:290px;\n  margin: 0 auto;\n  margin: 15px auto 15px;\n}\n\n.panel-header{\n  background-color: #9c9c9c;\n  color: #ffffff;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  height:38px;\n  line-height:38px;\n  padding-left:15px;\n  margin-bottom: 10px;\n}\n\n.panel-table td{\n  padding-left: 40px;\n  padding-right: 10px;\n  line-height: 15px;\n}\n\n.textarea_style{\n  margin-bottom:5px;;\n  margin-left:10px;\n  resize: none;\n  width:93%;\n  /*min-width: 100%;\n  margin-right:10px;*/\n  border-top: 1px solid #e0e0e0;\n  border-left: 1px solid #e0e0e0;\n  border-bottom: 2px solid #e0e0e0;\n  border-right: 2px solid #e0e0e0;\n}\n\n.email_save_btn{\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #5e9dbc;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:220px;\n}\n\n.line-panel-container{\n  background-color: transparent;\n  width:290px;\n  margin: 15px auto 15px;\n}\n\n.line-panel{\n  background-color: white;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  padding-left:15px;\n  width:230px;\n  line-height:20px;\n}\n\n.sms-table td:nth-child(2){\n  padding-left: 5px;\n  padding-top: 0px;\n}\n\n.sms-table td:nth-child(3){\n  position: relative;\n  left: 60px;\n  top: 7px;\n}\n\n.max-room-sel-text{\n  font-size: 12px;\n  padding-left: 16px;\n}\n\n.max-room{\n  margin: 10px 120px 10px;\n}\n\n.num-field{\n  font-size:28px;\n  color:#7c7c7c;\n  line-height: 1;\n  width:45px;\n  border-top: 1px solid #e0e0e0;\n  border-left: 1px solid #e0e0e0;\n  border-bottom: 2px solid #e0e0e0;\n  border-right: 2px solid #e0e0e0;\n  -moz-appearance:textfield !important;\n}\n\n.no-spin::-webkit-inner-spin-button, .no-spin::-webkit-outer-spin-button {\n    -webkit-appearance: none !important;\n    margin: 0 !important;\n    -moz-appearance:textfield !important;\n}\n\n.days-left-field{\n  margin: 10px 0px 10px 50px;\n}\n\n.room-type-table-container{\n  height: 500px;\n  overflow: auto;\n  margin-left: 10px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n}\n\n.room-type-table{\n  border: 1px solid #e0e0e0;\n  border-collapse: separate; /* allow spacing between cell borders */\n  border-spacing: 0 10px;  /*NOTE: syntax is <horizontal value> <vertical value> */\n}\n\n.room-type-table td:nth-child(1){\n  font-size: 15px;\n  padding-left:10px;\n  padding-right:50px;\n}\n\n.room-type-table td:nth-child(2){\n  padding-left:50px;\n}\n\n.room-type-table>tr{\n  margin-bottom: 15px;\n}\n\n.room-type-table th{\n  font-size: 14px;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.room-type-table th:nth-child(1){\n  padding-left: 10px;\n}\n\n.info-icon{\n  color:#266db1;\n  font-size:10px;\n  cursor:default;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */\n}\n\n.info-icon-2{\n  color:#266db1;\n  font-size:10px;\n  background-color: white;\n  border-radius: 6px;\n  margin-left: 20px;\n  cursor:default;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */\n}\n\n:host ::ng-deep .tooltip-inner {\n    background-color: #c896d2;\n    color: #fff;\n    font-size: 12px;\n    line-height:1;\n}\n\n:host ::ng-deep .bs-tooltip-top .arrow::before {\n    border-top-color: #c896d2;\n}\n\n:host ::ng-deep .bs-tooltip-bottom .arrow::before {\n    border-bottom-color: #c896d2;\n}\n\n.property-panel{\n  background-color: #ffffff;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 500;\n  width:229px;\n  padding-left: 8px;\n  margin: 0 auto;\n  margin: 15px auto 15px;\n}\n\n.property-select{\n   /*margin-top: 5px;\n   padding-top: 4px;*/\n   width: 104px;\n   height: 32px;\n   text-align: left;\n   font-size: 18px;\n   padding-left: 8px;\n   /* Firefox */\n   -moz-appearance: none;\n   /* Safari and Chrome */\n   -webkit-appearance: none;\n   appearance: none;\n   background: url('/assets/property_select_background.svg') no-repeat;\n   background-color: #266db1;\n   border-radius: 3px;\n   color: white;\n   margin: 5px 5px;\n}\n\n.property-select>option{\n   text-align: left;\n   font-size: 18px;\n   background-color: #266db1;\n   /*background-color: green;*/\n   color: white;\n   /*margin: 5px 5px;*/\n}\n\n.room-type-table-container2{\n  border: 1px solid #e0e0e0;\n  height: 500px;\n  overflow: auto;\n  margin-left: 10px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n}\n\n.room-type-table2{\n  /*border: 1px solid #e0e0e0;*/\n  border-collapse: separate; /* allow spacing between cell borders */\n  border-spacing: 0 10px;  /*NOTE: syntax is <horizontal value> <vertical value> */\n}\n\n.room-type-table2 td:nth-child(1){\n  font-size: 15px;\n  padding-left:10px;\n  padding-right:50px;\n}\n\n.room-type-table2 td:nth-child(2){\n  padding-left:50px;\n}\n\n.room-type-table2>tr{\n  margin-bottom: 15px;\n}\n\n.room-type-header{\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.room-type-header-table{\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.room-type-header-table td:nth-child(1){\n  text-align: left;\n  padding-left:10px;\n}\n\n.room-type-header-table td:nth-child(2){\n  text-align: right;\n  padding-right:10px;\n}\n\n//for blackout-dates-table\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range, .custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.selected_table_row{\n  background-color: #5e9dbc;\n  color:white;\n}\n\n.blackout-dates-table{\n  border: 1px solid #e0e0e0;\n  border-collapse: separate; /* allow spacing between cell borders */\n  border-spacing: 0 5px;  /*NOTE: syntax is <horizontal value> <vertical value> */\n  margin-left: 15px;\n  margin-bottom: 10px;\n  width: 90%;\n  font-size: 14px;\n}\n\n.blackout-dates-table td:nth-child(1){\n  text-align: center;\n}\n\n.blackout-dates-table td:nth-child(2){\n  text-align: center;\n}\n\n.blackout-dates-table>tr{\n  margin-bottom: 15px;\n}\n\n.blackout-dates-table th{\n  border-bottom: 1px solid #e0e0e0;\n  text-align: center;\n}\n\n.add_dates_btn{\n  border: 1px solid #e0e0e0;\n  color: white;\n  background-color: #5e9dbc;\n  border-radius: 6px;\n  font-size: 14px;\n  width: 147px;\n  margin-bottom:15px;\n  margin-left:15px;\n}\n\n.delete_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #8f2a41;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:17px;\n}\n\n.edit_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #4eb47f;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:65px;\n}\n\n.save_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #5e9dbc;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:17px;\n}\n"

/***/ }),

/***/ "./src/app/property_config/settings/settings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/property_config/settings/settings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"property-panel\">\n        <table>\n          <tr>\n            <td>Property :</td>\n            <td>\n              <div class=\"\">\n                <select class=\"property-select\">\n                 <option value=\"ALTH\">ALTH</option>\n                 <option value=\"H1551\">H1551</option>\n                 <option value=\"regular\">regular</option>\n               </select>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-4\">\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Booking Source\n        </div>\n        <table class=\"text-right panel-table\">\n          <!--colgroup>\n            <col class=\"panel-table-left-column\">\n            <col class=\"panel-table-right-column\">\n          </colgroup-->\n          <tr>\n            <td>GDS</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Brand.com</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Expedia</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Google</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>IDS</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Market Codes\n        </div>\n        <table class=\"text-right panel-table\">\n          <tr>\n            <td>Transient</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Group</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Contract</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by email domain\n          <i class=\"fas fa-info-circle info-icon-2\"\n            placement=\"top\"\n            ngbTooltip=\"Use ';' to separate each domain\"></i>\n        </div>\n        <textarea  class=\"textarea_style\"></textarea>\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div>\n      <div class=\"line-panel-container\">\n        <div class=\"line-panel\">\n          <table class=\"sms-table\">\n            <tr>\n              <td>Allow SMS:</td>\n              <td>\n                <i class=\"fas fa-info-circle info-icon\"\n                  placement=\"top\"\n                  ngbTooltip=\"Allow SMS if email is not available or working.\">\n                </i>\n              </td>\n              <td class=\"position-relative\"><app-toggle></app-toggle></td>\n            </tr>\n          </table>\n          <!--span class=\"sms-text\">\n            Allow SMS:\n          </span>\n          <span class=\"sms-toggle\">\n            <app-toggle></app-toggle>\n          </span-->\n        </div>\n      </div>\n    </div><!-- column 0 end -->\n    <div class=\"col-12 col-md-6 col-lg-4\">\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Max Room Selections\n        </div>\n        <span class=\"max-room-sel-text\">\n          Enter a max room selection per reservation\n        </span>\n        <input type=\"number\" min=\"0\" step=\"1\" class=\"text-center max-room num-field no-spin\">\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div>\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by Days Left\n        </div>\n        <span class=\"max-room-sel-text\">\n          Do not allow room selection less than\n        </span>\n        <!--div class=\"align-middle\">\n          <input type=\"number\" min=\"0\" step=\"1\" class=\"days-left-field num-field no-spin text-center\">\n          <span class=\"max-room-sel-text\">\n            days from arrival\n          </span>\n        </div-->\n        <table>\n          <tr>\n            <td>\n              <input type=\"number\" min=\"0\" step=\"1\" class=\"days-left-field num-field no-spin text-center\">\n            </td>\n            <td class=\"max-room-sel-text\">days from arrival</td>\n          </tr>\n        </table>\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div>\n      <!-- Next code moved to app-blackout-dates-table component.-->\n      <!--div class=\"panel\">\n        <div class=\"panel-header\">\n          Blackout Dates\n        </div>\n        <table>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"add_dates_btn\" (click)=\"d.toggle()\">\n                Add Date Range\n              </button>\n            </td>\n            <td>\n              <input type=\"text\"\n                ngbDatepicker #d=\"ngbDatepicker\"\n                (dateSelect)=\"onDateSelection($event)\"\n                [displayMonths]=\"2\"\n                [dayTemplate]=\"t\"\n                [autoClose]=\"false\"\n                [startDate]=\"fromDate\"\n                style=\"visibility:hidden\"/>\n            </td>\n          </tr>\n        </table>\n        <table class=\"blackout-dates-table\">\n          <tr>\n            <th>From</th>\n            <th>To</th>\n          </tr>\n          <tr *ngFor=\"let b_dates of blackout_dates; index as i;\" (click)=\"onDateTableLineSelection(i)\" [ngClass]=\"{'selected_table_row': i===selected_table_row}\">\n            <td>{{b_dates[0]}}</td>\n            <td>{{b_dates[1]}}</td>\n          </tr>\n        </table>\n        <button type=\"button\" class=\"edit_btn\" (click)=\"prepareDatesEdit();d.toggle();onClickEdit($event)\">Edit</button>\n        <button type=\"button\" class=\"delete_btn\" (click)=\"onClickDelete($event)\">Delete</button>\n        <button type=\"button\" class=\"save_btn\" >Save</button>\n\n\n        <button (click)=\"d.toggle()\">Toggle</button>\n        <pre>From: {{ fromDate | json }} </pre>\n        <pre>To: {{ toDate | json }} </pre>\n      </div-->\n\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Blackout Dates\n        </div>\n        <app-blackout-dates-table></app-blackout-dates-table>\n      </div>\n    </div><!-- column 1 end -->\n    <div class=\"col-12 col-md-6 col-lg-4\">\n      <!--div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by Days Left\n        </div>\n        <div class=\"room-type-table-container\">\n          <table class=\"room-type-table\">\n            <tr>\n              <th>Room Type</th>\n              <th># of emails /week</th>\n            </tr>\n            <tr>\n              <td>DDBL-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>EXST-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ADKT-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>KING-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>CORN-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>VW1D-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>VW1K-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ST01-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>CLBD-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>KING</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>PA-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ADKS-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>GOVE-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>PRES-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n          </table>\n        </div>\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div-->\n\n      <!--div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by Days Left\n        </div>\n        <div class=\"room-type-table-container\">\n          <div>\n              <span class=\"d-table-cell\">Room Type\n              </span>\n              <span class=\"d-table-cell\"># of emails /week\n              </span>\n          </div>\n          <div>\n              <span class=\"d-table-cell\">DDBL-NO</span>\n              <span class=\"d-table-cell\"><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></span>\n          </div>\n          <div>\n              <span>EXST-NO</span>\n              <span><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></span>\n          </div>\n        </div>\n      </div-->\n\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by Days Left\n        </div>\n        <div class=\"room-type-table-container2\">\n          <!--div class=\"room-type-header text-right\">\n              <span class=\"text-left\">Room Type\n              </span>\n              <span class=\"text-right\"># of emails /week\n              </span>\n          </div-->\n          <table class=\"room-type-header-table\">\n            <tr>\n              <td>Room Type</td>\n              <td># of emails /week</td>\n            </tr>\n          </table>\n          <table class=\"room-type-table2\">\n            <!--tr>\n              <th>Room Type</th>\n              <th># of emails /week</th>\n            </tr-->\n            <tr>\n              <td>DDBL-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>EXST-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ADKT-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>KING-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>CORN-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>VW1D-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>VW1K-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ST01-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>CLBD-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>KING</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>PA-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ADKS-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>GOVE-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>PRES-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n          </table>\n        </div>\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div>\n\n    </div><!-- column 2 end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/property_config/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/property_config/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
import {NgbDateStruct, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
*/
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/property_config/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/property_config/settings/settings.component.css")]
        })
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/property_config/upgrade/upgrade.component.css":
/*!***************************************************************!*\
  !*** ./src/app/property_config/upgrade/upgrade.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\n  background: url(/assets/bckgr3.png);\n  background-repeat: repeat;\n}\n.property-panel{\n  background-color: #ffffff;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 500;\n  width:229px;\n  padding-left: 8px;\n  margin: 0 auto;\n  margin: 15px auto 15px;\n}\n.property-select{\n   /*margin-top: 5px;\n   padding-top: 4px;*/\n   width: 117px;\n   height: 37px;\n   text-align: left;\n   font-size: 21px;\n   /*font-weight: 600;*/\n   padding-left: 8px;\n   /* Firefox */\n   -moz-appearance: none;\n   /* Safari and Chrome */\n   -webkit-appearance: none;\n   appearance: none;\n   background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='37px' width='35px'><line x1='0' y1='0' x2='0' y2='37' style='stroke:rgb(255,255,255);stroke-width:2' /><text x='11' y='25' fill='white' font-size='14'>﹀</text></svg>\");\n   /*background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='37px' width='35px'><!--text x='11' y='25' fill='black' font-size='14'>&#xFE40;</text--><line x1='0' y1='0' x2='0' y2='37' style='stroke:rgb(255,255,255);stroke-width:2' /><rect width='35' height='37' style='fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)' /></svg>\");\n   */\n   background-position: right top;\n   background-repeat: no-repeat;\n   background-color: #609dba;\n   border-radius: 4px;\n   color: white;\n   margin: 5px 5px;\n}\n.property-select>option{\n   text-align: left;\n   font-size: 18px;\n   background-color: #609dba;\n   /*background-color: green;*/\n   color: white;\n   /*margin: 5px 5px;*/\n}\n.property{\n  background-color: white;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 26px;\n  font-weight: 500;\n  width:264px;\n  padding-left: 8px;\n  margin: 32px 0px 67px 0px;/*top right bottom left*/\n}\n.property_label{\n  line-height: 1;\n  padding-bottom: 5px;\n}\n.main_panel{\n  background-color: white;\n  /*border-radius: 4px;*/\n  flex-basis: 1142px;\n  max-width: 1142px;\n  padding-bottom: 21px;\n  margin-bottom: 86px;\n  /*border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;*/\n  border-radius: 6px;\n}\n.main_panel_header{\n  flex-basis: 45px;\n  background-color: #9c9c9c;\n  color: white;\n  font-size: 20px;\n  font-weight: 400;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  margin: 0px 0px 0px 0px;/*top right bottom left*/\n  padding: 13px 0px 0px 20px;/*top right bottom left*/\n  line-height: 1;\n}\n.add_new_button_row{\n  flex-basis: 106px;\n  padding: 22px 0px 0px 18px;/*top right bottom left*/\n}\n.add_new_button_box{\n  width: 202px;\n  height: 53px;\n}\n.add_new_button{\n  width: 202px;\n  height: 53px;\n  box-shadow: inset 0 0 6px rgba(144, 144, 144, 0.65);\n  border-radius: 8px;\n  border: 1px solid #cfcfcf;\n\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1;\n  padding: 0px 0px 3px 0px;/*top right bottom left*/\n}\n.color_enabled{\n  background-color: #5e9dbc;\n}\n.color_disabled{\n  background-color: #7ebddc;\n}\n.table_header{\n  height: 49px;\n  background-color: #636363;\n  color:white;\n}\n/*width: 1142px;*/\n.c0{\n  flex-basis: 4.81611208406%/*55px*/;\n}\n.c1{\n  flex-basis: 8.23117338004%/*94px*/;\n}\n.c2{\n  flex-basis: 12.2591943958%/*140px*/;\n}\n.c3{\n  flex-basis: 20.1401050788%/*230px*/;\n}\n.c4{\n  flex-basis: 14.0980735552%/*161px*/;\n}\n.c5{\n  flex-basis: 9.45709281961%/*108px*/;\n}\n.c6{\n  flex-basis: 10.8581436077%/*124px*/;\n}\n.c7{\n  flex-basis: 5.86690017513%/*67px*/;\n  min-width: 50px;\n}\n.c8{\n  flex-basis: 7.00525394046%/*80px*/;\n  min-width: 64px;\n}\n.c9{\n  flex-basis: 7.26795096322%/*83px*/;\n}\n.c0_col{\n  width: 4.81611208406%/*55px*/;\n}\n.c1_col{\n  width: 8.23117338004%/*94px*/;\n}\n.c2_col{\n  width: 5.69176882662%;/*65px*/\n}\n.c3_col{\n  /*width: 12.2591943958%;140px*/\n  width: 10.5078809107%;/*120px*/\n}\n.c4_col{\n  /*width: 20.1401050788%;230px*/;\n  width: 18.3887915937;/*210px*/\n}\n.c5_col{\n  /*width: 14.0980735552%;161px*/;\n  width: 13.6602451839;/*156px*/\n}\n.c6_col{\n  width: 9.45709281961%;/*108px*/;\n}\n.c7_col{\n  /*width: 10.8581436077%;124px*/;\n  width: 10.2451838879;/*117px*/\n}\n.c8_col{\n  width: 5.86690017513%/*67px*/;\n}\n.c9_col{\n  /*width: 7.00525394046%;80px*/;\n  width: 5.86690017513%;/*67px*/\n}\n.c10_col{\n  width: 7.26795096322%/*83px*/;\n}\n.add_button_box{\n  width: 74px;\n  height: 27px;\n}\n.add_button{\n  width: 74px;\n  height: 27px;\n  box-shadow: inset 0 0 6px rgba(144, 144, 144, 0.65);\n  border-radius: 4px;\n  border: 1px solid #cfcfcf;\n  /*background-color: #5e9dbc;*/\n\n  /*width: 33px;\n  height: 13px;*/\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  padding: 0px 0px 2px 0px;/*top right bottom left*/\n}\n.c_room_type{\n  flex-basis: 55.9544658494%/*639px*/\n}\n:host ::ng-deep .toggle_big .dimensions{\n  width: 50px;\n  height: 27px;\n}\n:host ::ng-deep .toggle_small .dimensions{\n  width: 37px;\n  height: 20px;\n}\n.toggle_big{\n  margin: 12px 0px 0px 23px;/*top right bottom left*/\n}\n.toggle_small{\n  margin: 12px 0px 0px 8px;/*top right bottom left*/\n}\n.edit_button{\n  width: 50px;\n  height: 27px;\n  box-shadow: inset 0 0 6px rgba(144, 144, 144, 0.65);\n  border-radius: 4px;\n  border: 1px solid #cfcfcf;\n  /*background-color: #5e9dbc;*/\n\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  padding: 0px 0px 2px 0px;/*top right bottom left*/\n}\n.save_button{\n  width: 50px;\n  height: 27px;\n  box-shadow: inset 0 0 6px rgba(144, 144, 144, 0.65);\n  border-radius: 4px;\n  border: 1px solid #cfcfcf;\n  background-color: #5ebc8c;\n\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  padding: 0px 0px 2px 0px;/*top right bottom left*/\n\n  cursor:pointer;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */\n}\n.save_button_room{\n  width: 74px;\n  height: 27px;\n  box-shadow: inset 0 0 6px rgba(144, 144, 144, 0.65);\n  border-radius: 4px;\n  border: 1px solid #cfcfcf;\n  background-color: #5ebc8c;\n\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  padding: 0px 0px 2px 0px;/*top right bottom left*/\n\n  cursor:pointer;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */\n}\n.delete_button{\n  width: 64px;\n  height: 27px;\n  box-shadow: inset 0 0 6px rgba(144, 144, 144, 0.65);\n  border-radius: 4px;\n  border: 1px solid #cfcfcf;\n  background-color: #99334b;\n\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  padding: 0px 0px 2px 0px;/*top right bottom left*/\n\n  cursor:pointer;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */\n}\n.main_table{\n  width: 100%;\n  table-layout: auto/*fixed*/;\n  /*max-width: 1142px;border: 1px solid black;*/\n}\n/*\n.main_table th{\n  border: 1px solid black;\n}\n.main_table td{\n  border: 1px solid black;\n}*/\n.main_table thead tr{\n  height: 49px;\n  background-color: #636363;\n  color:white;\n}\n.main_table tr{\n  height: 49px;\n  color:black;\n}\n.main_table .upgrade_row{\n  height: 37px;\n  color: #666666;\n}\n.h2_l0{\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 0px 0px 8px;/*top right bottom left*/\n}\n.h2_l1{\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 0px 0px 15px;/*top right bottom left*/\n}\n.h3_l0{\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 0px 0px 11px;/*top right bottom left*/\n}\n.h3_l1{\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 0px 0px 25px;/*top right bottom left*/\n}\n.h4_l0{\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 0px 0px 9px;/*top right bottom left*/\n}\n.h5_l0{\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 0px 0px 7px;/*top right bottom left*/\n}\n.h6_l0{\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 0px 0px 15px;/*top right bottom left*/\n}\n.h6_l1{\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 0px 0px 8px;/*top right bottom left*/\n}\n.h9_l0{\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 25px 0px 0px;/*top right bottom left*/\n  text-align: right;\n}\n.h9_l1{\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1;\n  margin: 0px 6px 0px 0px;/*top right bottom left*/\n  text-align: right;\n}\n.room_type_cell{\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 1;\n  padding: 0px 0px 0px 9px;/*top right bottom left*/\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.upgrade_type_cell{\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1;\n  padding: 0px 0px 0px 31px;/*top right bottom left*/\n\n  width: 20.1401050788%;\n  max-width: 230px;\n  color: #9c9c9c;\n}\n.upgrade_type_cell_field{\n  font-size: 20px;\n  padding: 0px 20px 0px 20px;/*top right bottom left*/\n  width: 20.1401050788%;\n  max-width: 230px;\n  color: #9c9c9c;\n}\n/*:host ::ng-deep .upgrade_type_cell_field .restricted-text-input_style{\n  width: 90%;\n  height: 25px;\n  border: 0px solid;\n  background-color: #eee;\n  color: #777;\n  padding: 0px 0px 0px 10px;/*top right bottom left\n  font-size: 20px;\n}*/\n.upgrade_number_field{\n  font-size: 20px;\n  font-weight: 400;\n  padding: 0px 0px 0px 17px;/*top right bottom left*/\n}\n:host ::ng-deep .upgrade_number_field .restricted-text-input_style{\n  width: 90%;\n  height: 36px;\n  border: 0px solid;\n  background-color: #eee;\n  color: #666666;\n  padding: 0px 0px 0px 0px;/*top right bottom left*/\n}\n:host ::ng-deep .upgrade_number_field_bcgr_transp .restricted-text-input_style{\n  background-color: transparent;\n}\n:host ::ng-deep .upgrade_number_field_bcgr_gray .restricted-text-input_style{\n  background-color: #eee;\n}\n.truncate_text{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.button_behavior{\n  cursor:pointer;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */\n}\n.ng-select.custom ::ng-deep .ng-select-container{\n    border: 0px solid;\n    background-color: #eee;\n    border-radius: 0px;\n}\n.ng-select.custom ::ng-deep .ng-dropdown-panel{\n    border: 0px solid;\n}\n.ng-select.custom.ng-select-disabled ::ng-deep .ng-select-container{\n    background-color: transparent;\n}\n.ng-select.custom.ng-select-disabled ::ng-deep .ng-select-container>.ng-value-container{\n  color:#666666;\n}\n.ng-select.custom.ng-select-disabled ::ng-deep .ng-select-container>.ng-arrow-wrapper>.ng-arrow{\n  border: 0px transparent;\n}\n.ng-select.custom/*.ng-select-disabled*/ ::ng-deep .ng-select-container:hover{\n  box-shadow:0 0px 0 rgba(0,0,0,0.00);\n}\n.ng-select.custom_room ::ng-deep .ng-select-container{\n    border: 0px solid;\n    background-color: #eee;\n    border-radius: 0px;\n}\n.ng-select.custom_room ::ng-deep .ng-dropdown-panel{\n    border: 0px solid;\n}\n.ng-select.custom_room ::ng-deep .ng-select-container>.ng-value-container{\n  color:black;\n  font-size: 24px;\n}\n.ng-select.custom_room.ng-select-disabled ::ng-deep .ng-select-container{\n    background-color: transparent;\n}\n.ng-select.custom_room.ng-select-disabled ::ng-deep .ng-select-container>.ng-arrow-wrapper>.ng-arrow{\n  border: 0px transparent;\n}\n.ng-select.custom_room/*.ng-select-disabled*/ ::ng-deep .ng-select-container:hover{\n  box-shadow:0 0px 0 rgba(0,0,0,0.00);\n}\n.main_table>tbody:nth-child(even){\n  background-color: #f2f2f2;\n}\n.main_table>tbody{\n  border-top: 1px solid #cfcfcf;\n  border-bottom: 1px solid #cfcfcf;\n}\n.main_table>tbody>.upgrade_row{\n  border-top: 1px solid #cfcfcf;\n}\n.main_table>tbody>tr:nth-child(2){\n  border-top: none;\n}\n.main_table>tbody>.upgrade_row>td:nth-child(1),\n.main_table>tbody>.upgrade_row>td:nth-child(11){\n  border-top: 1px solid transparent;\n}\n.trash_button{\n  color: #99334b;\n  font-size: 20px;\n}\n.room_trash_button{\n  color: #99334b;\n  font-size: 24px;\n}\n.pink_tooltip ::ng-deep .tooltip-inner {\n    background-color: #c896d2;\n    color: #fff;\n    font-size: 12px;\n    line-height:1;\n}\n.pink_tooltip ::ng-deep .bs-tooltip-top .arrow::before {\n   border-top-color: #c896d2;\n}\n.pink_tooltip ::ng-deep .bs-tooltip-bottom .arrow::before {\n   border-bottom-color: #c896d2;\n}\n.pink_tooltip ::ng-deep .bs-tooltip-right .arrow::before {\n   border-right-color: #c896d2;\n}\n"

/***/ }),

/***/ "./src/app/property_config/upgrade/upgrade.component.html":
/*!****************************************************************!*\
  !*** ./src/app/property_config/upgrade/upgrade.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background d-flex flex-column pink_tooltip\">\n\n  <div class=\"d-flex flex-row justify-content-center align-items-center\">\n    <div class=\"d-flex flex-row justify-content-center align-items-center property\">\n      <div class=\"property_label\">Property :\n      </div>\n      <div class=\"\"\n        ngbTooltip=\"You must save first.\"\n        placement=\"bottom\"\n        [disableTooltip]=\"!is_edit_from_upgrade_any()\"\n      >\n        <select #property_select\n          (change)=\"onPropertyChange(property_select.selectedIndex)\"\n          [disabled]=\"is_edit_from_upgrade_any()\"\n          [ngClass]=\"{'property-select':true,\n                      'color_enabled':!is_edit_from_upgrade_any(),\n                      'color_disabled':is_edit_from_upgrade_any()}\"\n          >\n         <!--option value=\"ALTH\">ALTH</option>\n         <option value=\"H1551\">H1551</option>\n         <option value=\"regular\">regular</option-->\n         <option *ngFor=\"let upg_data of upgrade_array\"\n         value={{upg_data.property}}>{{upg_data.property}}</option>\n       </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"d-flex flex-row justify-content-center\">\n    <div class=\"d-flex flex-column main_panel\">\n      <div class=\"main_panel_header\">\n        Upgrade Settings\n      </div>\n      <div class=\"add_new_button_row\">\n        <div class=\"add_new_button_box\"\n              [ngbTooltip]=\"add_new_button_tooltip\"\n              placement=\"right\"\n              [disableTooltip]=\"!is_edit_from_any() && hasAvailableFromRooms()\"\n        >\n        <ng-template #add_new_button_tooltip>\n          {{is_edit_from_any()?'You must save first.':'No remaining unused room types'}}\n        </ng-template>\n          <button (click)=\"addRoom()\"\n            [disabled]=\"is_edit_from_any() || !hasAvailableFromRooms()\"\n            [ngClass]=\"{'add_new_button':true,\n                      'color_disabled':is_edit_from_any() || !hasAvailableFromRooms(),\n                      'color_enabled':!is_edit_from_any() && hasAvailableFromRooms(),\n                      'button_behavior':!is_edit_from_any() && hasAvailableFromRooms()}\"\n            >\n            Add new upgrade\n          </button>\n        </div>\n      </div>\n      <!--div class=\"d-flex flex-row justify-content-start table_header\">\n        <div class=\"c0\"></div>\n        <div class=\"c1\"><button class=\"add_button invisible\">Add</button></div>\n        <div class=\"c2\">Room Type</div>\n        <div class=\"c3\">Upgrade Type</div>\n        <div class=\"c4\">Amount</div>\n        <div class=\"c5\">%</div>\n        <div class=\"c6\">Enable Room Type</div>\n        <div class=\"c7\"><button class=\"edit_button invisible\">Edit</button></div>\n        <div class=\"c8\"><button class=\"delete_button invisible\">Delete</button></div>\n        <div class=\"c9\">Enable Upgrade Type</div>\n      </div>\n      <div class=\"d-flex flex-row justify-content-start\">\n        <div class=\"c0\">&#x25B2;</div>\n        <div class=\"c1\"><button class=\"add_button\">Add</button></div>\n        <div class=\"c_room_type\">{{data_array[0].data[0].room_type}}</div>\n        <!--div class=\"c3\">Upgrade Type</div>\n        <div class=\"c4\">Amount</div>\n        <div class=\"c5\">%</div->\n        <div class=\"c6\"><div class=\"toggle_big\"><app-toggle [(checked)]=\"data_array[0].data[0].enabled\"></app-toggle></div></div>\n        <div class=\"c7\"><button class=\"edit_button invisible\">Edit</button></div>\n        <div class=\"c8\"><button class=\"delete_button invisible\">Delete</button></div>\n        <div class=\"c9\"></div>\n      </div>\n      <div class=\"d-flex flex-row justify-content-start\">\n        <div class=\"c0\"></div>\n        <div class=\"c1\"></div>\n        <div class=\"c2\"></div>\n        <div class=\"c3\">{{data_array[0].data[0].upgrades[0].upgrade_type}}</div>\n        <div class=\"c4\">{{data_array[0].data[0].upgrades[0].amount}}</div>\n        <div class=\"c5\">{{data_array[0].data[0].upgrades[0].percent}}</div>\n        <div class=\"c6\"></div>\n        <div class=\"c7\"><button class=\"edit_button\">Edit</button></div>\n        <div class=\"c8\"><button class=\"delete_button\">Delete</button></div>\n        <div class=\"c9\"><div class=\"toggle_small\"><app-toggle [(checked)]=\"data_array[0].data[0].upgrades[0].enabled\"></app-toggle></div></div>\n      </div>\n      <div class=\"d-flex flex-row justify-content-start\">\n        <div style=\"flex-basis: 30%;\">A</div>\n        <div style=\"flex-basis: 20%\">B</div>\n        <div style=\"flex-basis: auto;padding-right: 10px;\">C</div>\n        <div style=\"flex-basis: 20%\">D</div>\n        <div style=\"flex-basis: auto\">E</div>\n        <div style=\"flex-basis: 20%\">F</div>\n      </div-->\n\n      <table class=\"main_table\">\n        <colgroup>\n          <col class=\"c0_col\">\n          <col class=\"c1_col\">\n          <col class=\"c2_col\">\n          <col class=\"c3_col\">\n          <col class=\"c4_col\">\n          <col class=\"c5_col\">\n          <col class=\"c6_col\">\n          <col class=\"c7_col\">\n          <col class=\"c8_col\">\n          <col class=\"c9_col\">\n          <col class=\"c10_col\">\n        </colgroup>\n        <thead>\n          <tr>\n            <th class=\"\"></th>\n            <th class=\"\"><button class=\"add_button invisible\">Add</button></th>\n            <th class=\"\"></th>\n            <th class=\"\"><div class=\"h2_l0\">Room</div><div class=\"h2_l1\">Type</div></th>\n            <th class=\"\"><div class=\"h3_l0\">Upgrade</div><div class=\"h3_l1\">Type</div></th>\n            <th class=\"\"><div class=\"h4_l0\">Amount</div></th>\n            <th class=\"\"><div class=\"h5_l0\">%</div></th>\n            <th class=\"\"><div class=\"h6_l0\">Enable</div><div class=\"h6_l1\">Room&nbsp;Type</div></th>\n            <th class=\"\"></th>\n            <th class=\"\" colspan='2'><!--/th-->\n            <!--th class=\"c9\"--><div class=\"h9_l0\">Enable</div><div class=\"h9_l1\">Upgrade&nbsp;Type</div></th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let from of upgrade_array[property_index].from; let i=index\">\n          <tr>\n            <td class=\"text-center button_behavior\"\n              (click)=\"upgrade_array[property_index].from[i].expanded=!upgrade_array[property_index].from[i].expanded;\">\n              {{upgrade_array[property_index].from[i].expanded?'&#x25B2;':'&#x25BC;'}}\n            </td>\n            <td class=\"text-center\">\n              <span class=\"add_button_box\"\n                      [ngbTooltip]=\"add_button_tooltip\"\n                      placement=\"top\"\n                      [disableTooltip]=\"!upgrade_array[property_index].from[i].edit_child && hasAvailableToRooms(i)\"\n                >\n                <ng-template #add_button_tooltip>\n                  {{upgrade_array[property_index].from[i].edit_child?\n                    'You must save first.':'No remaining unused room types'}}\n                </ng-template>\n                <button (click)=\"addUpgrade(i)\"\n                  [disabled]=\"upgrade_array[property_index].from[i].edit_child || !hasAvailableToRooms(i)\"\n                  [ngClass]=\"{'add_button':true,\n                              'color_disabled':upgrade_array[property_index].from[i].edit_child || !hasAvailableToRooms(i),\n                              'color_enabled':!upgrade_array[property_index].from[i].edit_child && hasAvailableToRooms(i),\n                              'button_behavior':!upgrade_array[property_index].from[i].edit_child && hasAvailableToRooms(i)}\">\n                  Add\n                </button>\n              </span>\n            </td>\n            <td class=\"text-center\" (click)=\"deleteFromUpgrade(i)\">\n              <i class=\"far fa-trash-alt room_trash_button button_behavior\" (click)=\"deleteFromUpgrade(i)\"\n                [ngClass]=\"{'trash_button':true,'button_behavior':true,'far':true,\n                          'fa-trash-alt':!upgrade_array[property_index].from[i].new,\n                          'fa-times-circle':upgrade_array[property_index].from[i].new}\">\n              </i>\n            </td>\n            <!--td *ngIf=\"false & !upgrade_array[property_index].from[i].edit\" class=\"room_type_cell\" colspan='4'>{{from.from_room}}</td-->\n            <td class=\"\" colspan='4'>\n              <ng-select #selRoom [items]=\"upgrade_array[property_index].available_rooms\"\n                  [clearable]='false' class='custom_room' [searchable]='false' (change)=\"changeFromRoomSelect(i)\"\n                  [disabled]='!upgrade_array[property_index].from[i].new' [(ngModel)]=\"from.from_room\">\n              </ng-select>\n            </td>\n            <!--div class=\"c3\">Upgrade Type</div>\n            <div class=\"c4\">Amount</div>\n            <div class=\"c5\">%</div-->\n            <td class=\"align-middle\"><div class=\"toggle_big\"><app-toggle [(checked)]=\"from.enabled\"></app-toggle></div></td>\n            <td class=\"\"><button class=\"edit_button invisible\">Edit</button></td>\n            <td class=\"text-center\"><!--button class=\"delete_button\" (click)=\"deleteFromUpgrade(i)\">Delete</button--></td>\n            <td class=\"\"></td>\n          </tr>\n          <tr *ngFor=\"let to of (upgrade_array[property_index].from[i].expanded?from.to:[]); let j=index\"\n            class=\"upgrade_row\">\n            <td class=\"\"></td>\n            <td class=\"\"></td>\n            <td class=\"\"></td>\n            <td class=\"\"></td>\n            <!--td *ngIf=\"!is_edit_to_room_array[i][j]\" class=\"upgrade_type_cell\">{{to.to_room}}</td-->\n            <td class=\"upgrade_type_cell_field\">\n              <!--app-restricted-text-input #room_name\n                [regex]=\"'^.*$'\" [init_value]=\"to.to_room\" [disabled]=\"!is_edit_to_room_array[i][j]\">\n              </app-restricted-text-input-->\n              <ng-select #sel [items]=\"upgrade_array[property_index].from[i].available_rooms\" [clearable]='false' class='custom' [searchable]='false'\n                  [(ngModel)]=\"upgrade_array[property_index].from[i].to[j].to_room_temp\"\n                  [disabled]='upgrade_array[property_index].from[i].to[j].edit||upgrade_array[property_index].from[i].to[j].new?false:true'>\n              </ng-select><!-- [isOpen]=\"upgrade_array[property_index].from[i].to[j].edit?true:false\" -->\n            </td>\n            <td [ngClass]=\"{'upgrade_number_field_bcgr_transp': !upgrade_array[property_index].from[i].to[j].edit && !upgrade_array[property_index].from[i].to[j].new,\n                            'upgrade_number_field_bcgr_gray': upgrade_array[property_index].from[i].to[j].edit || upgrade_array[property_index].from[i].to[j].new,\n                            'upgrade_number_field':true}\">\n              <app-restricted-text-input #amount\n                [regex]=\"'^[0-9]{0,}\\\\.?[0-9]{0,2}$'\" [init_value]=\"to.amount\"\n                [disabled]=\"!upgrade_array[property_index].from[i].to[j].edit && !upgrade_array[property_index].from[i].to[j].new\">\n              </app-restricted-text-input>\n            </td>\n            <td [ngClass]=\"{'upgrade_number_field_bcgr_transp': !upgrade_array[property_index].from[i].to[j].edit && !upgrade_array[property_index].from[i].to[j].new,\n                            'upgrade_number_field_bcgr_gray': upgrade_array[property_index].from[i].to[j].edit || upgrade_array[property_index].from[i].to[j].new,\n                            'upgrade_number_field':true}\">\n              <app-restricted-text-input #percent\n                [regex]=\"'^(?:.{0}|0|[1-9][0-9]{0,1}|100)$'\" [init_value]=\"to.percent\"\n                [disabled]=\"!upgrade_array[property_index].from[i].to[j].edit && !upgrade_array[property_index].from[i].to[j].new\">\n              </app-restricted-text-input>\n            </td>\n\n            <!--td class=\"amount_cell\">{{to.amount}}</td>\n            <td class=\"percent_cell\">{{to.percent}}</td-->\n            <td class=\"\"></td>\n            <td class=\"text-center\">\n              <span\n                      [ngbTooltip]=\"edit_button_tooltip\"\n                      placement=\"top\"\n                      [disableTooltip]=\"!upgrade_array[property_index].from[i].edit_child || upgrade_array[property_index].from[i].to[j].edit || upgrade_array[property_index].from[i].to[j].new\"\n                >\n                <ng-template #edit_button_tooltip>\n                  {{'You must save first.'}}\n                </ng-template>\n                <button *ngIf=\"!upgrade_array[property_index].from[i].to[j].edit && !upgrade_array[property_index].from[i].to[j].new\"\n                  class=\"edit_button\" (click)=\"editUpgrade(i,j)\"\n                  [disabled]=\"upgrade_array[property_index].from[i].edit_child\"\n                  [ngClass]=\"{'edit_button':true,\n                              'color_disabled':upgrade_array[property_index].from[i].edit_child,\n                              'color_enabled':!upgrade_array[property_index].from[i].edit_child,\n                              'button_behavior':!upgrade_array[property_index].from[i].edit_child}\">\n                        Edit\n                </button>\n                <button *ngIf=\"upgrade_array[property_index].from[i].to[j].edit || upgrade_array[property_index].from[i].to[j].new\"\n                  class=\"save_button\"\n                  (click)=\"saveUpgrade(i,j, amount.value, percent.value)\">Save</button>\n              </span>\n            </td>\n            <td class=\"text-center\">\n              <!--button class=\"delete_button\" (click)=\"deleteUpgrade(i,j)\">Delete</button-->\n              <i (click)=\"delete_cancel_upgrade(i,j)\"\n                [ngClass]=\"{'trash_button':true,'button_behavior':true,'far':true,\n                            'fa-trash-alt':!upgrade_array[property_index].from[i].to[j].edit && !upgrade_array[property_index].from[i].to[j].new && !upgrade_array[property_index].from[i].new && upgrade_array[property_index].from[i].to.length>1,\n                            'fa-times-circle':(upgrade_array[property_index].from[i].to[j].new && !upgrade_array[property_index].from[i].new) || upgrade_array[property_index].from[i].to[j].edit}\">\n              </i>\n            </td>\n            <td class=\"\"><div class=\"toggle_small\"><app-toggle [(checked)]=\"to.enabled\"></app-toggle></div></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/property_config/upgrade/upgrade.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/property_config/upgrade/upgrade.component.ts ***!
  \**************************************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
        this.property_index = -1;
        //is_open_from_room_array:boolean[] = [];
        //is_edit_to_room_array:boolean[][] = [[],[]];
        this.temp_to_room_array = [];
        this.room_types = ['KING', 'DDBL', 'CORN', 'GOVE', 'FOUR', 'AWAY', 'CLBK-NO', 'ADKS', 'KING-NO', 'PRES'];
        this.selectedItems = 'bbbb';
        this.upgrade_array = [
            {
                property: 'ALGTH',
                from: [
                    {
                        from_room: 'KING',
                        to: [
                            {
                                to_room: 'DDBL',
                                amount: 20.01,
                                percent: 0,
                                enabled: true
                            }, {
                                to_room: 'CORN',
                                amount: 100.01,
                                percent: 0,
                                enabled: true
                            }, {
                                to_room: 'GOVE',
                                amount: 350.01,
                                percent: 0,
                                enabled: true
                            },
                        ],
                        enabled: true
                    }, {
                        from_room: 'DDBL',
                        to: [
                            {
                                to_room: 'FOUR',
                                amount: 20.00,
                                percent: 0,
                                enabled: false
                            }, {
                                to_room: 'AWAY',
                                amount: 100.00,
                                percent: 0,
                                enabled: true
                            }
                        ],
                        enabled: false
                    }, {
                        from_room: 'CLBK-NO',
                        to: [
                            {
                                to_room: 'DDBL',
                                amount: 20.01,
                                percent: 0,
                                enabled: true
                            }, {
                                to_room: 'CORN',
                                amount: 100.01,
                                percent: 0,
                                enabled: true
                            }
                        ],
                        enabled: false
                    }, {
                        from_room: 'ADKS',
                        to: [
                            {
                                to_room: 'DDBL',
                                amount: 20.01,
                                percent: 0,
                                enabled: true
                            }
                        ],
                        enabled: false
                    }, {
                        from_room: 'KING-NO',
                        to: [
                            {
                                to_room: 'DDBL',
                                amount: 20.01,
                                percent: 0,
                                enabled: true
                            }
                        ],
                        enabled: false
                    }, {
                        from_room: 'PRES',
                        to: [
                            {
                                to_room: 'DDBL',
                                amount: 20.01,
                                percent: 0,
                                enabled: true
                            }
                        ],
                        enabled: false
                    }
                ],
            }, {
                property: 'H1551',
                from: [
                    {
                        from_room: 'KING',
                        to: [
                            {
                                to_room: 'DDBL',
                                amount: 20.00,
                                percent: 0,
                                enabled: true
                            }, {
                                to_room: 'CORN',
                                amount: 100.00,
                                percent: 0,
                                enabled: true
                            }, {
                                to_room: 'GOVE',
                                amount: 350.00,
                                percent: 0,
                                enabled: true
                            },
                        ],
                        enabled: true
                    }, {
                        from_room: 'DDBL',
                        to: [],
                        enabled: false
                    }, {
                        from_room: 'CLBK-NO',
                        to: [],
                        enabled: false
                    }, {
                        from_room: 'ADKS',
                        to: [],
                        enabled: false
                    }, {
                        from_room: 'KING-NO',
                        to: [],
                        enabled: false
                    }, {
                        from_room: 'PRES',
                        to: [],
                        enabled: false
                    }
                ]
            }
        ];
        if (this.upgrade_array.length > 0) {
            this.property_index = 0;
            //this.init_from_room_array();
            this.init_expanded_property();
            //this.init_edit_to_room_array();
            this.init_edit_property();
            this.init_to_temp_room2();
            //console.log(this.temp_to_room_array.length);
            this.init_available_rooms();
            //console.log(this.upgrade_array);
        }
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent.prototype.onPropertyChange = function (selected_index) {
        //console.log(event);
        this.property_index = selected_index;
        //this.init_from_room_array();
        //this.init_edit_to_room_array();
        //this.init_edit_property();
        //this.init_to_temp_room();
    };
    /*  init_from_room_array(){
        var num:number;
        //console.log(this.upgrade_array[this.property_index]);
        var len:number = this.upgrade_array[this.property_index].from.length;
        //var len = 5;
        for (num = 0; num < len; num++) {
          this.is_open_from_room_array[num] = false;
        }
      }
    
      init_edit_to_room_array(){
        var number_of_from_rooms:number;
        var len:number = this.upgrade_array[this.property_index].from.length;
        for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
          var number_of_to_rooms: number;
          var length_of_to_rooms = this.upgrade_array[this.property_index].from[number_of_from_rooms].to.length;
          for (number_of_to_rooms = 0; number_of_to_rooms < length_of_to_rooms; number_of_to_rooms++) {
            this.is_edit_to_room_array[number_of_from_rooms][number_of_to_rooms] = false;
          }
        }
      }*/
    UpgradeComponent.prototype.deleteFromUpgrade = function (from_index) {
        this.upgrade_array[this.property_index].from =
            this.upgrade_array[this.property_index].from.filter(function (element, index) { return index != from_index; });
        this.upgrade_array[this.property_index].available_rooms = //this.room_types;
            this.getAvailableFromRooms2(this.property_index);
    };
    UpgradeComponent.prototype.saveUpgrade = function (from_room, to_room, amount, percent) {
        //console.log(name);//console.log(amount);console.log(percent);
        this.upgrade_array[this.property_index].from[from_room].to[to_room].to_room =
            this.upgrade_array[this.property_index].from[from_room].to[to_room].to_room_temp;
        this.upgrade_array[this.property_index].from[from_room].to[to_room].amount = amount;
        this.upgrade_array[this.property_index].from[from_room].to[to_room].percent = percent;
        //this.is_edit_to_room_array[from_room][to_room]=false;
        this.upgrade_array[this.property_index].from[from_room].to[to_room].edit = false;
        this.upgrade_array[this.property_index].from[from_room].to[to_room].new = false;
        this.upgrade_array[this.property_index].from[from_room].edit_child = false;
        if (to_room == 0 &&
            this.upgrade_array[this.property_index].from[from_room].new) {
            this.upgrade_array[this.property_index].from[from_room].new = false;
        }
        this.upgrade_array[this.property_index].available_rooms = this.getAvailableFromRooms2(this.property_index);
        this.upgrade_array[this.property_index].from[from_room].available_rooms =
            this.getAvailableToRooms2(this.property_index, from_room);
    };
    UpgradeComponent.prototype.showSelect = function (sel) {
        console.log(sel);
    };
    UpgradeComponent.prototype.onChange = function () {
        console.log(this.selectedItems);
    };
    UpgradeComponent.prototype.init_edit_property = function () {
        var number_of_from_rooms;
        var len = this.upgrade_array[this.property_index].from.length;
        for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
            var number_of_to_rooms;
            var length_of_to_rooms = this.upgrade_array[this.property_index].from[number_of_from_rooms].to.length;
            for (number_of_to_rooms = 0; number_of_to_rooms < length_of_to_rooms; number_of_to_rooms++) {
                //this.is_edit_to_room_array[number_of_from_rooms][number_of_to_rooms] = false;
                this.upgrade_array[this.property_index].from[number_of_from_rooms].to[number_of_to_rooms].edit = false;
                this.upgrade_array[this.property_index].from[number_of_from_rooms].to[number_of_to_rooms].new = false;
            }
            this.upgrade_array[this.property_index].from[number_of_from_rooms].new = false;
            this.upgrade_array[this.property_index].from[number_of_from_rooms].edit_child = false;
        }
    };
    UpgradeComponent.prototype.init_expanded_property = function () {
        var num;
        //console.log(this.upgrade_array[this.property_index]);
        var len = this.upgrade_array[this.property_index].from.length;
        //var len = 5;
        for (num = 0; num < len; num++) {
            //this.is_open_from_room_array[num] = false;
            this.upgrade_array[this.property_index].from[num].expanded = false;
        }
    };
    UpgradeComponent.prototype.addUpgrade = function (number_of_from_rooms) {
        var obj = {
            to_room: this.upgrade_array[this.property_index].from[number_of_from_rooms].available_rooms[0],
            to_room_temp: this.upgrade_array[this.property_index].from[number_of_from_rooms].available_rooms[0],
            amount: 0.00,
            percent: 0,
            enabled: true,
            edit: false,
            new: true
        };
        var new_len = this.upgrade_array[this.property_index].from[number_of_from_rooms].to.push(obj);
        this.upgrade_array[this.property_index].from[number_of_from_rooms].expanded = true;
        this.upgrade_array[this.property_index].from[number_of_from_rooms].edit_child = true;
        //this.temp_to_room_array[number_of_from_rooms][new_len-1] = this.getAvailableToRooms(number_of_from_rooms)[0];
    };
    UpgradeComponent.prototype.editUpgrade = function (number_of_from_rooms, number_of_to_rooms) {
        this.upgrade_array[this.property_index].from[number_of_from_rooms].to[number_of_to_rooms].edit = true;
        this.upgrade_array[this.property_index].from[number_of_from_rooms].edit_child = true;
    };
    UpgradeComponent.prototype.addRoom = function () {
        var new_len = this.upgrade_array[this.property_index].from.push({
            from_room: this.upgrade_array[this.property_index].available_rooms[0],
            to: [],
            enabled: false,
            new: true,
            edit_child: true,
            expanded: true,
            available_rooms: []
        });
        this.upgrade_array[this.property_index].from[new_len - 1].available_rooms =
            this.getAvailableToRooms2(this.property_index, new_len - 1);
        var obj = {
            to_room: this.upgrade_array[this.property_index].from[new_len - 1].available_rooms[0],
            to_room_temp: this.upgrade_array[this.property_index].from[new_len - 1].available_rooms[0],
            amount: 0.00,
            percent: 0,
            enabled: true,
            edit: false,
            new: true
        };
        this.upgrade_array[this.property_index].from[new_len - 1].to.push(obj);
        //console.log(new_len);console.log(this.temp_to_room_array.length);
        this.temp_to_room_array.push([]);
        //this.temp_to_room_array[new_len-1][0] = this.getAvailableToRooms(new_len-1)[0];
    };
    UpgradeComponent.prototype.saveRoom = function (number_of_from_rooms) {
        this.upgrade_array[this.property_index].from[number_of_from_rooms].new = false;
    };
    UpgradeComponent.prototype.is_edit_from_any = function () {
        //var is_disabled_from_any = false;
        var number_of_from_rooms;
        var len = this.upgrade_array[this.property_index].from.length;
        for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
            if (this.upgrade_array[this.property_index].from[number_of_from_rooms].new)
                return true;
        }
        return false;
    };
    UpgradeComponent.prototype.is_edit_from_upgrade_any = function () {
        var number_of_from_rooms;
        var len = this.upgrade_array[this.property_index].from.length;
        for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
            if (this.upgrade_array[this.property_index].from[number_of_from_rooms].new)
                return true;
            if (this.upgrade_array[this.property_index].from[number_of_from_rooms].edit_child)
                return true;
        }
        return false;
    };
    UpgradeComponent.prototype.getAvailableFromRooms = function () {
        console.log('getAvailableFromRooms');
        var unavailable_from_rooms = [];
        var number_of_from_rooms;
        var len = this.upgrade_array[this.property_index].from.length;
        for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
            unavailable_from_rooms.push(this.upgrade_array[this.property_index].from[number_of_from_rooms].from_room);
        }
        return this.room_types.filter(function (item) { return unavailable_from_rooms.indexOf(item) < 0; });
    };
    UpgradeComponent.prototype.hasAvailableFromRooms = function () {
        //return this.getAvailableFromRooms().length > 0;
        return this.upgrade_array[this.property_index].available_rooms.length > 0;
    };
    UpgradeComponent.prototype.getAvailableFromRooms2 = function (prop_number) {
        var unavailable_from_rooms = [];
        var number_of_from_rooms;
        var len = this.upgrade_array[prop_number].from.length;
        for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
            unavailable_from_rooms.push(this.upgrade_array[prop_number].from[number_of_from_rooms].from_room);
        }
        return this.room_types.filter(function (item) { return unavailable_from_rooms.indexOf(item) < 0; });
    };
    UpgradeComponent.prototype.delete_cancel_upgrade = function (from_index, to_index) {
        /*if(!this.upgrade_array[this.property_index].from[from_index].to[to_index].edit &&
            !this.upgrade_array[this.property_index].from[from_index].to[to_index].new &&
            !this.upgrade_array[this.property_index].from[from_index].new && to_index>=1){
              deleteUpgrade(from_index, to_index);
            }
        if((upgrade_array[property_index].from[from_index].to[to_index].new &&
              !upgrade_array[property_index].from[from_index].new)
            || upgrade_array[property_index].from[from_index].to[to_index].edit){
              cancelUpgrade(from_index, to_index);
            }*/
        if (this.upgrade_array[this.property_index].from[from_index].to[to_index].edit) {
            this.cancelUpgrade(from_index, to_index);
        }
        else {
            this.deleteUpgrade(from_index, to_index);
        }
    };
    UpgradeComponent.prototype.deleteUpgrade = function (from_index, to_index) {
        if (this.upgrade_array[this.property_index].from[from_index].to[to_index].edit ||
            this.upgrade_array[this.property_index].from[from_index].to[to_index].new)
            this.upgrade_array[this.property_index].from[from_index].edit_child = false;
        this.upgrade_array[this.property_index].from[from_index].to =
            this.upgrade_array[this.property_index].from[from_index].to.filter(function (element, index) { return index != to_index; });
        this.upgrade_array[this.property_index].from[from_index].available_rooms =
            this.getAvailableToRooms2(this.property_index, from_index);
    };
    UpgradeComponent.prototype.cancelUpgrade = function (from_index, to_index) {
        this.upgrade_array[this.property_index].from[from_index].to[to_index].edit = false;
        this.upgrade_array[this.property_index].from[from_index].edit_child = false;
        this.upgrade_array[this.property_index].from[from_index].to[to_index].to_room_temp =
            this.upgrade_array[this.property_index].from[from_index].to[to_index].to_room;
    };
    UpgradeComponent.prototype.getAvailableToRooms = function (from_index) {
        //console.log('getAvailableToRooms');
        //return ['ADKS','KING','KING-NO'];
        var unavailable_to_rooms = [this.upgrade_array[this.property_index].from[from_index].from_room];
        var number_of_to_rooms;
        var len = this.upgrade_array[this.property_index].from[from_index].to.length;
        console.log(len);
        for (number_of_to_rooms = 0; number_of_to_rooms < len; number_of_to_rooms++) {
            console.log(number_of_to_rooms);
            /*unavailable_to_rooms.push(
              this.upgrade_array[this.property_index].from[from_index].to[number_of_to_rooms].to_room);*/
        }
        //return this.room_types.filter(item => unavailable_to_rooms.indexOf(item) < 0);
        return [];
    };
    UpgradeComponent.prototype.hasAvailableToRooms = function (from_index) {
        //return this.getAvailableToRooms(from_index).length > 0;
        return this.upgrade_array[this.property_index].from[from_index].available_rooms.length > 0;
    };
    UpgradeComponent.prototype.getAvailableToRooms2 = function (prop_number, from_index) {
        var unavailable_to_rooms = [this.upgrade_array[prop_number].from[from_index].from_room];
        var number_of_to_rooms;
        var len = this.upgrade_array[prop_number].from[from_index].to.length;
        //console.log(len);
        for (number_of_to_rooms = 0; number_of_to_rooms < len; number_of_to_rooms++) {
            //console.log(number_of_to_rooms);
            unavailable_to_rooms.push(this.upgrade_array[this.property_index].from[from_index].to[number_of_to_rooms].to_room);
        }
        return this.room_types.filter(function (item) { return unavailable_to_rooms.indexOf(item) < 0; });
    };
    UpgradeComponent.prototype.init_to_temp_room = function () {
        this.temp_to_room_array = [];
        var number_of_from_rooms;
        var len = this.upgrade_array[this.property_index].from.length; //console.log('len'+len);
        for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
            //console.log('from:'+number_of_from_rooms);
            this.temp_to_room_array[number_of_from_rooms] = [];
            var number_of_to_rooms;
            var length_of_to_rooms = this.upgrade_array[this.property_index].from[number_of_from_rooms].to.length;
            //console.log('length_of_to_rooms'+length_of_to_rooms);
            for (number_of_to_rooms = 0; number_of_to_rooms < length_of_to_rooms; number_of_to_rooms++) {
                //console.log('to:'+number_of_to_rooms);
                this.temp_to_room_array[number_of_from_rooms][number_of_to_rooms] =
                    this.upgrade_array[this.property_index].from[number_of_from_rooms].to[number_of_to_rooms].to_room;
                //console.log('from'+number_of_from_rooms);console.log('to'+number_of_to_rooms);
            }
        }
    };
    UpgradeComponent.prototype.init_to_temp_room2 = function () {
        var prop_number;
        var prop_len = this.upgrade_array.length;
        for (prop_number = 0; prop_number < prop_len; prop_number++) {
            var number_of_from_rooms;
            var len = this.upgrade_array[prop_number].from.length; //console.log('len'+len);
            for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
                //console.log('from:'+number_of_from_rooms);
                //this.temp_to_room_array[number_of_from_rooms] = [];
                var number_of_to_rooms;
                var length_of_to_rooms = this.upgrade_array[prop_number].from[number_of_from_rooms].to.length;
                //console.log('length_of_to_rooms'+length_of_to_rooms);
                for (number_of_to_rooms = 0; number_of_to_rooms < length_of_to_rooms; number_of_to_rooms++) {
                    //console.log('to:'+number_of_to_rooms);
                    //this.temp_to_room_array[number_of_from_rooms][number_of_to_rooms]=
                    this.upgrade_array[prop_number].from[number_of_from_rooms].to[number_of_to_rooms].to_room_temp =
                        this.upgrade_array[prop_number].from[number_of_from_rooms].to[number_of_to_rooms].to_room;
                    //console.log('from'+number_of_from_rooms);console.log('to'+number_of_to_rooms);
                }
            }
        }
    };
    UpgradeComponent.prototype.init_available_rooms = function () {
        //console.log("init_available_rooms");
        /*
        for (var property_data in this.upgrade_array) {
            property_data.available_rooms=this.room_types;
            for (var from_room_data in property_data.from) {
                from_room_data.available_rooms=this.room_types;
            }
        }*/
        var prop_number;
        var prop_len = this.upgrade_array.length;
        //console.log(prop_len);
        var from_number;
        var from_len;
        for (prop_number = 0; prop_number < prop_len; prop_number++) {
            this.upgrade_array[prop_number].available_rooms = //this.room_types;
                this.getAvailableFromRooms2(prop_number);
            from_len = this.upgrade_array[prop_number].from.length;
            //console.log(from_len);
            for (from_number = 0; from_number < from_len; from_number++) {
                this.upgrade_array[prop_number].from[from_number].available_rooms = //this.room_types;
                    this.getAvailableToRooms2(prop_number, from_number);
            }
        }
        //console.log(this.upgrade_array);
    };
    UpgradeComponent.prototype.changeFromRoomSelect = function (from_index) {
        this.upgrade_array[this.property_index].from[from_index].available_rooms = //this.room_types;
            this.getAvailableToRooms2(this.property_index, from_index);
        this.upgrade_array[this.property_index].from[from_index].to[0].to_room =
            this.upgrade_array[this.property_index].from[from_index].available_rooms[0];
        this.upgrade_array[this.property_index].from[from_index].to[0].to_room_temp =
            this.upgrade_array[this.property_index].from[from_index].available_rooms[0];
    };
    UpgradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upgrade',
            template: __webpack_require__(/*! ./upgrade.component.html */ "./src/app/property_config/upgrade/upgrade.component.html"),
            styles: [__webpack_require__(/*! ./upgrade.component.css */ "./src/app/property_config/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/reports/requested-rooms/requested-rooms.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/reports/requested-rooms/requested-rooms.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\n  background: url(/assets/bckgr3.png);\n  background-repeat: repeat;\n}\n.property-panel{\n  background-color: #ffffff;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 500;\n  width:229px;\n  padding-left: 8px;\n  margin: 0 auto;\n  margin: 15px auto 15px;\n}\n.property-select{\n   /*margin-top: 5px;\n   padding-top: 4px;*/\n   width: 117px;\n   height: 37px;\n   text-align: left;\n   font-size: 21px;\n   /*font-weight: 600;*/\n   padding-left: 8px;\n   /* Firefox */\n   -moz-appearance: none;\n   /* Safari and Chrome */\n   -webkit-appearance: none;\n   appearance: none;\n   background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='37px' width='35px'><line x1='0' y1='0' x2='0' y2='37' style='stroke:rgb(255,255,255);stroke-width:2' /><text x='11' y='25' fill='white' font-size='14'>﹀</text></svg>\");\n   /*background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='37px' width='35px'><!--text x='11' y='25' fill='black' font-size='14'>&#xFE40;</text--><line x1='0' y1='0' x2='0' y2='37' style='stroke:rgb(255,255,255);stroke-width:2' /><rect width='35' height='37' style='fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)' /></svg>\");\n   */\n   background-position: right top;\n   background-repeat: no-repeat;\n   background-color: #609dba;\n   border-radius: 4px;\n   color: white;\n   margin: 5px 5px;\n}\n.property-select>option{\n   text-align: left;\n   font-size: 18px;\n   background-color: #609dba;\n   /*background-color: green;*/\n   color: white;\n   /*margin: 5px 5px;*/\n}\n.property{\n  background-color: white;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 26px;\n  font-weight: 500;\n  width:264px;\n  padding-left: 8px;\n  margin: 32px 0px 67px 0px;/*top right bottom left*/\n}\n.property_label{\n  line-height: 1;\n  padding-bottom: 5px;\n}\n.main_panel{\n  background-color: white;\n  /*border-radius: 4px;*/\n  flex-basis: 1142px;\n  max-width: 1142px;\n  padding-bottom: 21px;\n  margin-bottom: 86px;\n  /*border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;*/\n  border-radius: 6px;\n}\n.main_panel_header{\n  flex-basis: 45px;\n  background-color: #9c9c9c;\n  color: white;\n  font-size: 20px;\n  font-weight: 400;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  margin: 0px 0px 0px 0px;/*top right bottom left*/\n  padding: 13px 0px 0px 20px;/*top right bottom left*/\n  line-height: 1;\n}\n.add_new_button_row{\n  flex-basis: 106px;\n  padding: 22px 0px 0px 18px;/*top right bottom left*/\n}\ntable>thead>tr>th{\n  height: 49px;\n  background-color: #636363;\n  color:white;\n  text-align: center;\n}\ntable>tbody>tr>td{\n  font-size:14px;\n  /*color: black;*/\n  height: 48px;\n  text-align: center;\n}\ntable>tbody>tr:nth-child(even){\n  background-color: #f2f2f2;\n}\ntable>tbody>tr{\n  border-top: 1px solid #cfcfcf;\n}\ntable>tbody>tr:nth-child(1){\n  border-top: none;\n}\n.red_font{color:red;}\n.green_font{color:green;}\n"

/***/ }),

/***/ "./src/app/reports/requested-rooms/requested-rooms.component.html":
/*!************************************************************************!*\
  !*** ./src/app/reports/requested-rooms/requested-rooms.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background d-flex flex-column pink_tooltip\">\n\n  <div class=\"d-flex flex-row justify-content-center align-items-center\">\n    <div class=\"d-flex flex-row justify-content-center align-items-center property\">\n      <div class=\"property_label\">Property :\n      </div>\n      <select #property_select\n        (change)=\"onPropertyChange(property_select.selectedIndex)\"\n        [disabled]=\"false\"\n        [ngClass]=\"{'property-select':true}\"\n        >\n       <!--option value=\"ALTH\">ALTH</option>\n       <option value=\"H1551\">H1551</option>\n       <option value=\"regular\">regular</option-->\n       <option *ngFor=\"let prop_data of rooms_data\"\n       value={{prop_data.property}}>{{prop_data.property}}</option>\n     </select>\n    </div>\n  </div>\n\n  <div class=\"d-flex flex-row justify-content-center\">\n    <div class=\"d-flex flex-column main_panel\">\n      <div class=\"main_panel_header\">\n        Requested Rooms\n      </div>\n      <div class=\"add_new_button_row\">\n      </div>\n      <table>\n        <thead>\n          <tr>\n            <th><span>Reservation Number</span></th>\n            <th><span>Reservation Date/Time</span></th>\n            <th><span>Arrival Date</span></th>\n            <th><span>LOS</span></th>\n            <th><span>Selected Room</span></th>\n            <th><span>Assigned Room</span></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let room of rooms_data[property_index].rooms\"\n              [ngClass]=\"{'red_font':room.ass_room, 'green_font':!room.ass_room}\"\n          >\n            <td>{{room.number}}</td>\n            <td>{{room.date}}</td>\n            <td>{{room.arr_date}}</td>\n            <td>{{room.los}}</td>\n            <td>{{room.sel_room}}</td>\n            <td>{{room.ass_room}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/requested-rooms/requested-rooms.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reports/requested-rooms/requested-rooms.component.ts ***!
  \**********************************************************************/
/*! exports provided: RequestedRoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestedRoomsComponent", function() { return RequestedRoomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestedRoomsComponent = /** @class */ (function () {
    function RequestedRoomsComponent() {
        this.property_index = 0;
        this.rooms_data = [
            { property: 'ALGTH',
                rooms: [
                    { number: 104467, date: '2018/09/06 07:18', arr_date: '2018/10/05', los: 1, sel_room: 319, },
                    { number: 104965, date: '2018/10/01 09:02', arr_date: '2018/10/06', los: 1, sel_room: 206, },
                    { number: 105215, date: '2018/10/02 07:57', arr_date: '2018/10/10', los: 1, sel_room: 317, },
                    { number: 105216, date: '2018/10/02 08:08', arr_date: '2018/10/11', los: 1, sel_room: 114, },
                    { number: 105217, date: '2018/10/02 13:42', arr_date: '2018/10/11', los: 1, sel_room: 374, },
                    { number: 105218, date: '2018/10/02 13:45', arr_date: '2018/10/17', los: 1, sel_room: 307, },
                    { number: 105220, date: '2018/10/03 14:25', arr_date: '2018/10/19', los: 1, sel_room: 218, },
                    { number: 105224, date: '2018/10/03 14:25', arr_date: '2018/10/25', los: 1, sel_room: 218, },
                    { number: 104467, date: '2018/09/06 07:18', arr_date: '2018/10/05', los: 1, sel_room: 318, ass_room: 318 },
                    { number: 104965, date: '2018/10/01 09:02', arr_date: '2018/10/07', los: 1, sel_room: 205, ass_room: 200 },
                    { number: 105215, date: '2018/10/02 07:57', arr_date: '2018/10/10', los: 1, sel_room: 319, ass_room: 318 },
                    { number: 105216, date: '2018/10/02 08:08', arr_date: '2018/10/11', los: 1, sel_room: 105, ass_room: 105 },
                    { number: 105217, date: '2018/10/02 13:42', arr_date: '2018/10/11', los: 1, sel_room: 305, ass_room: 305 },
                    { number: 105218, date: '2018/10/02 13:45', arr_date: '2018/10/12', los: 1, sel_room: 302, ass_room: 304 },
                    { number: 105220, date: '2018/10/03 14:25', arr_date: '2018/10/13', los: 1, sel_room: 219, ass_room: 219 },
                    { number: 106217, date: '2018/10/02 13:42', arr_date: '2018/10/14', los: 1, sel_room: 505, ass_room: 305 },
                    { number: 106218, date: '2018/10/02 13:45', arr_date: '2018/10/19', los: 1, sel_room: 312, ass_room: 312 },
                    { number: 106220, date: '2018/10/03 14:25', arr_date: '2018/10/22', los: 1, sel_room: 219, ass_room: 219 },
                ]
            }, { property: 'H1551',
                rooms: [
                    { number: 204467, date: '2018/09/06 07:18', arr_date: '2018/10/05', los: 1, sel_room: 319, },
                    { number: 204965, date: '2018/10/01 09:02', arr_date: '2018/10/06', los: 1, sel_room: 206, },
                    { number: 205215, date: '2018/10/02 07:57', arr_date: '2018/10/10', los: 1, sel_room: 317, },
                    { number: 205216, date: '2018/10/02 08:08', arr_date: '2018/10/11', los: 1, sel_room: 114, },
                    { number: 205217, date: '2018/10/02 13:42', arr_date: '2018/10/11', los: 1, sel_room: 374, },
                    { number: 205218, date: '2018/10/02 13:45', arr_date: '2018/10/17', los: 1, sel_room: 307, },
                    { number: 205220, date: '2018/10/03 14:25', arr_date: '2018/10/19', los: 1, sel_room: 218, },
                    { number: 204467, date: '2018/09/06 07:18', arr_date: '2018/10/05', los: 1, sel_room: 318, ass_room: 318 },
                    { number: 204965, date: '2018/10/01 09:02', arr_date: '2018/10/07', los: 1, sel_room: 205, ass_room: 200 },
                    { number: 205215, date: '2018/10/02 07:57', arr_date: '2018/10/10', los: 1, sel_room: 319, ass_room: 318 },
                    { number: 205216, date: '2018/10/02 08:08', arr_date: '2018/10/11', los: 1, sel_room: 105, ass_room: 105 },
                    { number: 205217, date: '2018/10/02 13:42', arr_date: '2018/10/11', los: 1, sel_room: 305, ass_room: 305 },
                    { number: 205218, date: '2018/10/02 13:45', arr_date: '2018/10/12', los: 1, sel_room: 302, ass_room: 304 },
                    { number: 205220, date: '2018/10/03 14:25', arr_date: '2018/10/13', los: 1, sel_room: 219, ass_room: 219 },
                    { number: 206217, date: '2018/10/02 13:42', arr_date: '2018/10/14', los: 1, sel_room: 505, ass_room: 305 },
                    { number: 206218, date: '2018/10/02 13:45', arr_date: '2018/10/19', los: 1, sel_room: 312, ass_room: 312 },
                    { number: 206220, date: '2018/10/03 14:25', arr_date: '2018/10/22', los: 1, sel_room: 219, ass_room: 219 },
                ]
            }, { property: 'DEMO',
                rooms: [
                    { number: 604467, date: '2018/09/06 07:18', arr_date: '2018/10/05', los: 1, sel_room: 319, },
                    { number: 604965, date: '2018/10/01 09:02', arr_date: '2018/10/06', los: 1, sel_room: 206, },
                    { number: 605215, date: '2018/10/02 07:57', arr_date: '2018/10/10', los: 1, sel_room: 317, },
                    { number: 605216, date: '2018/10/02 08:08', arr_date: '2018/10/11', los: 1, sel_room: 114, },
                    { number: 605217, date: '2018/10/02 13:42', arr_date: '2018/10/11', los: 1, sel_room: 374, },
                    { number: 604467, date: '2018/09/06 07:18', arr_date: '2018/10/05', los: 1, sel_room: 318, ass_room: 318 },
                    { number: 604965, date: '2018/10/01 09:02', arr_date: '2018/10/07', los: 1, sel_room: 205, ass_room: 200 },
                    { number: 605215, date: '2018/10/02 07:57', arr_date: '2018/10/10', los: 1, sel_room: 319, ass_room: 318 },
                    { number: 605216, date: '2018/10/02 08:08', arr_date: '2018/10/11', los: 1, sel_room: 105, ass_room: 105 },
                    { number: 605217, date: '2018/10/02 13:42', arr_date: '2018/10/11', los: 1, sel_room: 305, ass_room: 305 },
                    { number: 605218, date: '2018/10/02 13:45', arr_date: '2018/10/12', los: 1, sel_room: 302, ass_room: 304 },
                    { number: 605220, date: '2018/10/03 14:25', arr_date: '2018/10/13', los: 1, sel_room: 219, ass_room: 219 },
                    { number: 606217, date: '2018/10/02 13:42', arr_date: '2018/10/14', los: 1, sel_room: 505, ass_room: 305 },
                    { number: 606218, date: '2018/10/02 13:45', arr_date: '2018/10/19', los: 1, sel_room: 312, ass_room: 312 },
                    { number: 606220, date: '2018/10/03 14:25', arr_date: '2018/10/22', los: 1, sel_room: 219, ass_room: 219 },
                ]
            }
        ];
    }
    RequestedRoomsComponent.prototype.ngOnInit = function () {
    };
    RequestedRoomsComponent.prototype.onPropertyChange = function (selected_index) {
        this.property_index = selected_index;
    };
    RequestedRoomsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requested-rooms',
            template: __webpack_require__(/*! ./requested-rooms.component.html */ "./src/app/reports/requested-rooms/requested-rooms.component.html"),
            styles: [__webpack_require__(/*! ./requested-rooms.component.css */ "./src/app/reports/requested-rooms/requested-rooms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestedRoomsComponent);
    return RequestedRoomsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nikstefanov/Documents/KoridorAdmin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
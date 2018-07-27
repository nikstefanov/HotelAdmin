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
        path: 'property_config', /*component: HotelViewComponent,*/ children: [
            { path: 'settings', component: _property_config_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
        ]
    },
    { path: 'settings', component: _property_config_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
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
                _component_blackout_dates_table_blackout_dates_table_component__WEBPACK_IMPORTED_MODULE_10__["BlackoutDatesTableComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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

module.exports = "<table>\n  <tr>\n    <td>\n      <!--button type=\"button\" class=\"add_dates_btn\" (click)=\"d.toggle()\"-->\n      <button type=\"button\" class=\"add_dates_btn\"\n        (click)=\"onClickAdd($event)\">\n        Add Date Range\n      </button>\n    </td>\n    <td>\n      <!--input type=\"text\"\n        ngbDatepicker #d=\"ngbDatepicker\"\n        (dateSelect)=\"onDateSelection($event)\"\n        [displayMonths]=\"2\"\n        [dayTemplate]=\"day_t\"\n        [autoClose]=\"false\"\n        [startDate]=\"fromDate\"\n        style=\"visibility:hidden\"/-->\n    </td>\n  </tr>\n</table>\n<table class=\"blackout-dates-table\"\n  [ngbPopover]=\"popContent\" popoverTitle=\"Blackout Range\" #ppov=\"ngbPopover\" triggers=\"manual\"\n  container=\"body\" popoverClass=\"popover-background\">\n  <tr>\n    <th>From</th>\n    <th>To</th>\n  </tr>\n  <tr *ngFor=\"let b_dates of blackout_dates; index as i;\" (click)=\"onDateTableLineSelection(i)\" [ngClass]=\"{'selected_table_row': i===selected_table_row}\">\n    <td>{{b_dates[0]}}</td>\n    <td>{{b_dates[1]}}</td>\n  </tr>\n</table>\n<!--button type=\"button\" class=\"edit_btn\" (click)=\"prepareDatesEdit();d.toggle();onClickEdit($event)\">Edit</button-->\n<button type=\"button\" class=\"edit_btn\" (click)=\"onClickEdit($event)\">Edit</button>\n<button type=\"button\" class=\"delete_btn\" (click)=\"onClickDelete($event)\">Delete</button>\n<button type=\"button\" class=\"save_btn\" >Save</button>\n\n\n<!--button (click)=\"d.toggle()\">Toggle</button>\n<pre>From: {{ fromDate | json }} </pre>\n<pre>To: {{ toDate | json }} </pre-->\n\n\n<ng-template #day_t let-date=\"date\" let-focused=\"focused\">\n  <span class=\"custom-day\"\n        [class.focused]=\"focused\"\n        [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\n        [class.faded]=\"isHovered(date) || isInside(date)\"\n        (mouseenter)=\"hoveredDate = date\"\n        (mouseleave)=\"hoveredDate = null\">\n    {{ date.day }}\n  </span>\n</ng-template>\n<ng-template #popContent let-greeting=\"greeting\">\n  <!--{{greeting}}, <b>{{name}}</b>!-->\n  <ngb-datepicker #drpicker (select)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"day_t\" [startDate]=\"fromDate\">\n  </ngb-datepicker>\n  <table class=\"dr-popover-btn-table\">\n    <tr>\n      <td>\n          <button type=\"button\" class=\"save_btn\" (click)=\"onClickApply($event)\">Apply</button>\n      </td>\n      <td>\n        <button type=\"button\" class=\"delete_btn\" (click)=\"ppov.close()\">Close</button>\n      </td>\n    </tr>\n  </table>\n</ng-template>\n"

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
            this.popover.open();
        }
    };
    BlackoutDatesTableComponent.prototype.onClickAdd = function (event) {
        this.selected_table_row = -1;
        this.fromDate = this.today;
        this.toDate = this.today;
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

/***/ "./src/app/component/toggle/toggle.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/toggle/toggle.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\n  position: relative;\n  display: inline-block;\n  width: 43px;\n  height: 22px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #5e9dbc;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(21px);\n  transform: translateX(21px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 10px;\n}\n\n.slider.round:before {\n  border-radius: 60%;\n}\n"

/***/ }),

/***/ "./src/app/component/toggle/toggle.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/toggle/toggle.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"switch\">\n  <input type=\"checkbox\" checked>\n  <span class=\"slider round\"></span>\n</label>\n"

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
    }
    ToggleComponent.prototype.ngOnInit = function () {
    };
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

module.exports = "<div class=\"background\" (click)=\"closeMenus($event)\"></div>\n<span class=\"user_menu left_margin\">\n  <div (click)=\"toggleSubMenu($event,0)\">\n    <span class=\"fas fa-tachometer-alt user_icon\" aria-hidden=\"true\"></span>\n    Dashboard\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[0],'fa-angle-up':!showSubMenu[0]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[0]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Dashboard Item 1</div>\n      <div>Dashboard Item 2</div>\n    </div>\n  </div>\n  <div (click)=\"toggleSubMenu($event,1)\">\n    <span class=\"far fa-newspaper user_icon\" aria-hidden=\"true\">\n    </span>\n    Reports\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[1],'fa-angle-up':!showSubMenu[1]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[1]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Reports Menu Item 1</div>\n      <div>Reports Menu Item 2</div>\n    </div>\n  </div>\n  <div (click)=\"toggleSubMenu($event,2)\">\n    <span class=\"fas fa-hotel user_icon\" aria-hidden=\"true\">\n    </span>\n    Property Config\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[2],'fa-angle-up':!showSubMenu[2]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[2]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Pictures</div>\n      <div routerLink=\"/property_config/settings\">Settings</div>\n      <div>Loyality Settings</div>\n      <div>Upgrade Settings</div>\n      <div>Rooms Import</div>\n      <div>Blackout Rooms</div>\n    </div>\n  </div>\n  <div (click)=\"toggleSubMenu($event,3)\">\n    <span class=\"fas fa-cog user_icon\" aria-hidden=\"true\">\n    </span>\n    Admin\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[3],'fa-angle-up':!showSubMenu[3]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[3]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Admin Menu Item 1</div>\n      <div>Admin Menu Item 2</div>\n    </div>\n  </div>\n  <div (click)=\"toggleSubMenu($event,4)\">\n    <span class=\"far fa-envelope user_icon\" aria-hidden=\"true\">\n    </span>\n    Demo Email\n    <span class=\"fas angle_button float-right\"\n      [ngClass]=\"{'fa-angle-down':showSubMenu[4],'fa-angle-up':!showSubMenu[4]}\">\n    </span>\n    <div *ngIf=\"showSubMenu[4]\" class=\"sub_menu\" (click)=\"clickHamburgerMenu($event)\">\n      <div>Demo Email Menu Item 1</div>\n      <div>Demo Email Menu Item 2</div>\n    </div>\n  </div>\n</span>\n"

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

module.exports = "<!--div class=\"container-fluid\"-->\n  <div class=\"header\" (click)=\"closeMenus($event)\">\n    <img src=\"./assets/koridor_logo_left.png\" class=\"image_margin float-left\">\n    <div class=\"fa fa-bars fa-3x mt-3 mx-4 float-left\"\n      (click)=\"toggleHamburgerMenu($event)\">\n    </div>\n    <div *ngIf=\"breadcrumb0\" class=\"float-left d-none d-lg-block\">\n      <div *ngIf=\"breadcrumb0\" class=\"arrow0 float-left\"></div>\n      <div *ngIf=\"breadcrumb0\" [ngClass]=\"breadcrumb0_icon\"\n        class=\"fa-2x breadcrumb0_icon float-left\"></div>\n      <div *ngIf=\"breadcrumb0\" class=\"breadcrumb0 float-left\">\n          {{ breadcrumb0 }}\n      </div>\n      <div *ngIf=\"breadcrumb0\" class=\"arrow1 float-left\"></div>\n      <div *ngIf=\"breadcrumb1\" class=\"breadcrumb1 float-left\">\n          {{ breadcrumb1 }}\n      </div>\n      <div *ngIf=\"breadcrumb1\" class=\"arrow2 float-left\"></div>\n    </div>\n    <!--span class=\"align-middle\">middle</span-->\n    <img src=\"./assets/koridor_logo_right.png\" class=\"image_margin float-right\">\n    <div class=\"mr-5 d-none d-sm-block float-right\"\n      (click)=\"toggleUserMenu($event)\">\n        <div class=\"user_name\">{{ userName }}</div>\n        <div class=\"user_role\">{{ userRole }}</div>\n    </div>\n    <span class=\"fa fa-user-circle fa-2x mt-4 mr-3 float-right\"\n      aria-hidden=\"true\"\n      (click)=\"toggleUserMenu($event)\">\n    </span>\n  </div>\n<!--/div-->\n<!--  The font is Century Gothic\n-->\n  <app-user-menu *ngIf=\"showUserMenu\" [parentCloseMenu]=\"closeMenuFn\"></app-user-menu>\n  <app-hamburger-menu *ngIf=\"showHamburgerMenu\"\n    [parentCloseMenu]=\"closeMenuFn\"\n    [parentClickHamburgerMenu]=\"clickHamburgerMenuFn\">\n  </app-hamburger-menu>\n"

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
    function HeaderComponent() {
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
        this.breadcrumb0 = event.path[2].childNodes[1].textContent.trim();
        this.breadcrumb1 = event.toElement.innerHTML;
        this.setBreadcrumb0Icon();
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
    HeaderComponent.prototype.setBreadcrumb0Icon = function () {
        switch (this.breadcrumb0) {
            case "Dashboard": {
                this.breadcrumb0_icon = 'fas fa-tachometer-alt';
                break;
            }
            case "Reports": {
                this.breadcrumb0_icon = 'far fa-newspaper';
                break;
            }
            case "Property Config": {
                this.breadcrumb0_icon = 'fas fa-hotel';
                break;
            }
            case "Admin": {
                this.breadcrumb0_icon = 'fas fa-cog';
                break;
            }
            case "Demo Email": {
                this.breadcrumb0_icon = 'far fa-envelope';
                break;
            }
            default: {
                this.breadcrumb0_icon = 'fas fa-hotel';
                break;
            }
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"background\" (click)=\"closeMenus($event)\"></div>\n<span class=\"user_menu right_margin\">\n  <div (click)=\"closeMenus($event)\">\n    <img src=\"./assets/koridor_logo_left.png\" class=\"image_margin\">\n    MyRoom\n  </div>\n  <div (click)=\"closeMenus($event)\">\n    <span class=\"fa fa-user-circle user_icon\" aria-hidden=\"true\">\n    </span>\n    Logout\n  </div>\n</span>\n"

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

/***/ "./src/app/property_config/settings/settings.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/property_config/settings/settings.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\n  /*background-color: #dddddd;\n  background: repeating-linear-gradient(\n    45deg,\n    #606dbc,\n    #606dbc 1px,\n    #465298 10px,\n    #465298 2px\n  );\n    background:repeating-linear-gradient(\n    45deg,\n    transparent,\n    transparent 10px,\n    #ccc 10px,\n    #ccc 20px\n  ),*/\n  background: url(./assets/bckgr3.png);\n  background-repeat: repeat;\n}\n\n.panel{\n  background-color: #ffffff;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  width:290px;\n  margin: 0 auto;\n  margin: 15px auto 15px;\n}\n\n.panel-header{\n  background-color: #9c9c9c;\n  color: #ffffff;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  height:38px;\n  line-height:38px;\n  padding-left:15px;\n  margin-bottom: 10px;\n}\n\n.panel-table td{\n  padding-left: 40px;\n  padding-right: 10px;\n  line-height: 15px;\n}\n\n.textarea_style{\n  margin-bottom:5px;;\n  margin-left:10px;\n  resize: none;\n  width:93%;\n  /*min-width: 100%;\n  margin-right:10px;*/\n  border-top: 1px solid #e0e0e0;\n  border-left: 1px solid #e0e0e0;\n  border-bottom: 2px solid #e0e0e0;\n  border-right: 2px solid #e0e0e0;\n}\n\n.email_save_btn{\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #5e9dbc;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:220px;\n}\n\n.line-panel-container{\n  background-color: transparent;\n  width:290px;\n  margin: 15px auto 15px;\n}\n\n.line-panel{\n  background-color: white;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  padding-left:15px;\n  width:230px;\n  line-height:20px;\n}\n\n.sms-table td:nth-child(2){\n  padding-left: 5px;\n  padding-top: 0px;\n}\n\n.sms-table td:nth-child(3){\n  position: relative;\n  left: 60px;\n  top: 7px;\n}\n\n.max-room-sel-text{\n  font-size: 12px;\n  padding-left: 16px;\n}\n\n.max-room{\n  margin: 10px 120px 10px;\n}\n\n.num-field{\n  font-size:28px;\n  color:#7c7c7c;\n  line-height: 1;\n  width:45px;\n  border-top: 1px solid #e0e0e0;\n  border-left: 1px solid #e0e0e0;\n  border-bottom: 2px solid #e0e0e0;\n  border-right: 2px solid #e0e0e0;\n  -moz-appearance:textfield !important;\n}\n\n.no-spin::-webkit-inner-spin-button, .no-spin::-webkit-outer-spin-button {\n    -webkit-appearance: none !important;\n    margin: 0 !important;\n    -moz-appearance:textfield !important;\n}\n\n.days-left-field{\n  margin: 10px 0px 10px 50px;\n}\n\n.room-type-table-container{\n  height: 500px;\n  overflow: auto;\n  margin-left: 10px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n}\n\n.room-type-table{\n  border: 1px solid #e0e0e0;\n  border-collapse: separate; /* allow spacing between cell borders */\n  border-spacing: 0 10px;  /*NOTE: syntax is <horizontal value> <vertical value> */\n}\n\n.room-type-table td:nth-child(1){\n  font-size: 15px;\n  padding-left:10px;\n  padding-right:50px;\n}\n\n.room-type-table td:nth-child(2){\n  padding-left:50px;\n}\n\n.room-type-table>tr{\n  margin-bottom: 15px;\n}\n\n.room-type-table th{\n  font-size: 14px;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.room-type-table th:nth-child(1){\n  padding-left: 10px;\n}\n\n.info-icon{\n  color:#266db1;\n  font-size:10px;\n}\n\n.info-icon-2{\n  color:#266db1;\n  font-size:10px;\n  background-color: white;\n  border-radius: 6px;\n  margin-left: 20px;\n}\n\n::ng-deep .tooltip-inner {\n    background-color: #c896d2;\n    color: #fff;\n    font-size: 12px;\n    line-height:1;\n}\n\n::ng-deep .bs-tooltip-top .arrow::before {\n    border-top-color: #c896d2;\n}\n\n.property-panel{\n  background-color: #ffffff;\n  color: #7c7c7c;\n  border-radius: 8px;\n  font-size: 22px;\n  font-weight: 500;\n  width:229px;\n  padding-left: 8px;\n  margin: 0 auto;\n  margin: 15px auto 15px;\n}\n\n.property-select{\n   /*margin-top: 5px;\n   padding-top: 4px;*/\n   width: 104px;\n   height: 32px;\n   text-align: left;\n   font-size: 18px;\n   padding-left: 8px;\n   /* Firefox */\n   -moz-appearance: none;\n   /* Safari and Chrome */\n   -webkit-appearance: none;\n   appearance: none;\n   background: url('./assets/property_select_background.svg') no-repeat;\n   background-color: #266db1;\n   border-radius: 3px;\n   color: white;\n   margin: 5px 5px;\n}\n\n.property-select>option{\n   text-align: left;\n   font-size: 18px;\n   background-color: #266db1;\n   /*background-color: green;*/\n   color: white;\n   /*margin: 5px 5px;*/\n}\n\n.room-type-table-container2{\n  border: 1px solid #e0e0e0;\n  height: 500px;\n  overflow: auto;\n  margin-left: 10px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n}\n\n.room-type-table2{\n  /*border: 1px solid #e0e0e0;*/\n  border-collapse: separate; /* allow spacing between cell borders */\n  border-spacing: 0 10px;  /*NOTE: syntax is <horizontal value> <vertical value> */\n}\n\n.room-type-table2 td:nth-child(1){\n  font-size: 15px;\n  padding-left:10px;\n  padding-right:50px;\n}\n\n.room-type-table2 td:nth-child(2){\n  padding-left:50px;\n}\n\n.room-type-table2>tr{\n  margin-bottom: 15px;\n}\n\n.room-type-header{\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.room-type-header-table{\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.room-type-header-table td:nth-child(1){\n  text-align: left;\n  padding-left:10px;\n}\n\n.room-type-header-table td:nth-child(2){\n  text-align: right;\n  padding-right:10px;\n}\n\n//for blackout-dates-table\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range, .custom-day:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.selected_table_row{\n  background-color: #5e9dbc;\n  color:white;\n}\n\n.blackout-dates-table{\n  border: 1px solid #e0e0e0;\n  border-collapse: separate; /* allow spacing between cell borders */\n  border-spacing: 0 5px;  /*NOTE: syntax is <horizontal value> <vertical value> */\n  margin-left: 15px;\n  margin-bottom: 10px;\n  width: 90%;\n  font-size: 14px;\n}\n\n.blackout-dates-table td:nth-child(1){\n  text-align: center;\n}\n\n.blackout-dates-table td:nth-child(2){\n  text-align: center;\n}\n\n.blackout-dates-table>tr{\n  margin-bottom: 15px;\n}\n\n.blackout-dates-table th{\n  border-bottom: 1px solid #e0e0e0;\n  text-align: center;\n}\n\n.add_dates_btn{\n  border: 1px solid #e0e0e0;\n  color: white;\n  background-color: #5e9dbc;\n  border-radius: 6px;\n  font-size: 14px;\n  width: 147px;\n  margin-bottom:15px;\n  margin-left:15px;\n}\n\n.delete_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #8f2a41;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:17px;\n}\n\n.edit_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #4eb47f;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:65px;\n}\n\n.save_btn{\n   display: inline;\n   border: 1px solid #e0e0e0;\n   color: white;\n   background-color: #5e9dbc;\n   border-radius: 6px;\n   font-size: 14px;\n   width: 60px;\n   margin-bottom:10px;\n   margin-left:17px;\n}\n"

/***/ }),

/***/ "./src/app/property_config/settings/settings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/property_config/settings/settings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"property-panel\">\n        <table>\n          <tr>\n            <td>Property :</td>\n            <td>\n              <div class=\"\">\n                <select class=\"property-select\">\n                 <option value=\"ALTH\">ALTH</option>\n                 <option value=\"H1551\">H1551</option>\n                 <option value=\"regular\">regular</option>\n               </select>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-4\">\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Booking Source\n        </div>\n        <table class=\"text-right panel-table\">\n          <!--colgroup>\n            <col class=\"panel-table-left-column\">\n            <col class=\"panel-table-right-column\">\n          </colgroup-->\n          <tr>\n            <td>GDS</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Brand.com</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Expedia</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Google</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>IDS</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Market Codes\n        </div>\n        <table class=\"text-right panel-table\">\n          <tr>\n            <td>Transient</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Group</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n          <tr>\n            <td>Contract</td>\n            <td><app-toggle></app-toggle></td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by email domain\n          <i class=\"fas fa-info-circle info-icon-2\"\n            placement=\"top\"\n            ngbTooltip=\"Use ';' to separate each domain\"></i>\n        </div>\n        <textarea  class=\"textarea_style\"></textarea>\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div>\n      <div class=\"line-panel-container\">\n        <div class=\"line-panel\">\n          <table class=\"sms-table\">\n            <tr>\n              <td>Allow SMS:</td>\n              <td>\n                <i class=\"fas fa-info-circle info-icon\"\n                  placement=\"top\"\n                  ngbTooltip=\"Allow SMS if email is not available or working.\">\n                </i>\n              </td>\n              <td><app-toggle></app-toggle></td>\n            </tr>\n          </table>\n          <!--span class=\"sms-text\">\n            Allow SMS:\n          </span>\n          <span class=\"sms-toggle\">\n            <app-toggle></app-toggle>\n          </span-->\n        </div>\n      </div>\n    </div><!-- column 0 end -->\n    <div class=\"col-12 col-md-6 col-lg-4\">\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Max Room Selections\n        </div>\n        <span class=\"max-room-sel-text\">\n          Enter a max room selection per reservation\n        </span>\n        <input type=\"number\" min=\"0\" step=\"1\" class=\"text-center max-room num-field no-spin\">\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div>\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by Days Left\n        </div>\n        <span class=\"max-room-sel-text\">\n          Do not allow room selection less than\n        </span>\n        <!--div class=\"align-middle\">\n          <input type=\"number\" min=\"0\" step=\"1\" class=\"days-left-field num-field no-spin text-center\">\n          <span class=\"max-room-sel-text\">\n            days from arrival\n          </span>\n        </div-->\n        <table>\n          <tr>\n            <td>\n              <input type=\"number\" min=\"0\" step=\"1\" class=\"days-left-field num-field no-spin text-center\">\n            </td>\n            <td class=\"max-room-sel-text\">days from arrival</td>\n          </tr>\n        </table>\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div>\n      <!-- Next code moved to app-blackout-dates-table component.-->\n      <!--div class=\"panel\">\n        <div class=\"panel-header\">\n          Blackout Dates\n        </div>\n        <table>\n          <tr>\n            <td>\n              <button type=\"button\" class=\"add_dates_btn\" (click)=\"d.toggle()\">\n                Add Date Range\n              </button>\n            </td>\n            <td>\n              <input type=\"text\"\n                ngbDatepicker #d=\"ngbDatepicker\"\n                (dateSelect)=\"onDateSelection($event)\"\n                [displayMonths]=\"2\"\n                [dayTemplate]=\"t\"\n                [autoClose]=\"false\"\n                [startDate]=\"fromDate\"\n                style=\"visibility:hidden\"/>\n            </td>\n          </tr>\n        </table>\n        <table class=\"blackout-dates-table\">\n          <tr>\n            <th>From</th>\n            <th>To</th>\n          </tr>\n          <tr *ngFor=\"let b_dates of blackout_dates; index as i;\" (click)=\"onDateTableLineSelection(i)\" [ngClass]=\"{'selected_table_row': i===selected_table_row}\">\n            <td>{{b_dates[0]}}</td>\n            <td>{{b_dates[1]}}</td>\n          </tr>\n        </table>\n        <button type=\"button\" class=\"edit_btn\" (click)=\"prepareDatesEdit();d.toggle();onClickEdit($event)\">Edit</button>\n        <button type=\"button\" class=\"delete_btn\" (click)=\"onClickDelete($event)\">Delete</button>\n        <button type=\"button\" class=\"save_btn\" >Save</button>\n\n\n        <button (click)=\"d.toggle()\">Toggle</button>\n        <pre>From: {{ fromDate | json }} </pre>\n        <pre>To: {{ toDate | json }} </pre>\n      </div-->\n\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Blackout Dates\n        </div>\n        <app-blackout-dates-table></app-blackout-dates-table>\n      </div>\n    </div><!-- column 1 end -->\n    <div class=\"col-12 col-md-6 col-lg-4\">\n      <!--div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by Days Left\n        </div>\n        <div class=\"room-type-table-container\">\n          <table class=\"room-type-table\">\n            <tr>\n              <th>Room Type</th>\n              <th># of emails /week</th>\n            </tr>\n            <tr>\n              <td>DDBL-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>EXST-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ADKT-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>KING-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>CORN-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>VW1D-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>VW1K-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ST01-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>CLBD-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>KING</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>PA-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ADKS-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>GOVE-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>PRES-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n          </table>\n        </div>\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div-->\n\n      <!--div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by Days Left\n        </div>\n        <div class=\"room-type-table-container\">\n          <div>\n              <span class=\"d-table-cell\">Room Type\n              </span>\n              <span class=\"d-table-cell\"># of emails /week\n              </span>\n          </div>\n          <div>\n              <span class=\"d-table-cell\">DDBL-NO</span>\n              <span class=\"d-table-cell\"><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></span>\n          </div>\n          <div>\n              <span>EXST-NO</span>\n              <span><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></span>\n          </div>\n        </div>\n      </div-->\n\n      <div class=\"panel\">\n        <div class=\"panel-header\">\n          Restrict by Days Left\n        </div>\n        <div class=\"room-type-table-container2\">\n          <!--div class=\"room-type-header text-right\">\n              <span class=\"text-left\">Room Type\n              </span>\n              <span class=\"text-right\"># of emails /week\n              </span>\n          </div-->\n          <table class=\"room-type-header-table\">\n            <tr>\n              <td>Room Type</td>\n              <td># of emails /week</td>\n            </tr>\n          </table>\n          <table class=\"room-type-table2\">\n            <!--tr>\n              <th>Room Type</th>\n              <th># of emails /week</th>\n            </tr-->\n            <tr>\n              <td>DDBL-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>EXST-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ADKT-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>KING-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>CORN-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>VW1D-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>VW1K-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ST01-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>CLBD-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>KING</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>PA-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>ADKS-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>GOVE-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n            <tr>\n              <td>PRES-NO</td>\n              <td><input type=\"number\" min=\"0\" step=\"1\" class=\"num-field no-spin text-center\"></td>\n            </tr>\n          </table>\n        </div>\n        <button type=\"button\" class=\"email_save_btn\">Save</button>\n      </div>\n\n    </div><!-- column 2 end -->\n  </div>\n</div>\n"

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

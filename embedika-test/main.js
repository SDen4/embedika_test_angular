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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");
/* harmony import */ var _total_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total.service */ "./src/app/total.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/filters/filters.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _searchUsers_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchUsers.pipe */ "./src/app/searchUsers.pipe.ts");












function AppComponent_app_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("outToParent", function AppComponent_app_item_5_Template_app_item_outToParent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.receiveFromChild($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r2);
} }
const _c0 = function (a0) { return { "pagination__item_active": a0 }; };
function AppComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_10_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const idx_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.pageChange(idx_r6, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, num_r5 == ctx_r1.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r5);
} }
const _c1 = function (a0) { return { "marked": a0 }; };
const _c2 = function (a0) { return { "markedCard": a0 }; };
class AppComponent {
    constructor(usersService, totalService) {
        this.usersService = usersService;
        this.totalService = totalService;
        this.title = 'embedika-test';
        this.active = '';
        this.searchStr = '';
        this.usersTotalLength = [];
        this.page = 1;
        this.pages = [];
        this.users = [];
        this.itemsPerPage = 5;
        this.searchUsersValue = [];
        this.idx = 1;
        this.loadPage();
    }
    onPageChanged(e) {
        this.loadPage();
    }
    loadPage() {
        this.users = this.usersService.users;
        this.usersService.getUsers(this.page, this.itemsPerPage).subscribe(page => {
            this.users = page.rows;
            this.usersLength = page.totalCount;
        });
    }
    receiveFromChild(e) {
        this.active = e[0];
        this.index = e[1] - this.itemsPerPage * (this.page - 1);
    }
    receiveChosenUsers(e) {
        this.searchUsersValue = e;
        this.loadPage();
    }
    // pagination's buttons actoins
    pageChange(idx, event) {
        event.preventDefault();
        this.idx = idx + 1;
        this.page = idx + 1;
        this.loadPage();
    }
    pageChangeNext(event) {
        event.preventDefault();
        if (this.page < this.pages.length) {
            this.page = this.page + 1;
            this.loadPage();
        }
    }
    pageChangePrev(event) {
        event.preventDefault();
        if (this.page > 1) {
            this.page = this.page - 1;
            this.loadPage();
        }
    }
    ngOnInit() {
        this.totalService.getTotalUsers().subscribe(l => {
            this.usersTotalLength = l;
            this.numsOfPages = Math.ceil(this.usersTotalLength.length / this.itemsPerPage);
            for (let i = 1; i <= this.numsOfPages; i++) {
                this.pages.push(i);
            }
        });
        this.loadPage();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_service__WEBPACK_IMPORTED_MODULE_2__["TotalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _total_service__WEBPACK_IMPORTED_MODULE_2__["TotalService"]])], decls: 15, vars: 18, consts: [[1, "wrapper"], [1, "main", 3, "ngClass"], [1, "main__title"], [1, "main__invisible", 3, "ngModel", "ngModelChange"], [3, "user", "outToParent", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination__arrow", 3, "click"], ["class", "pagination__item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "filters__component", 3, "ngClass", "usersTotalLength", "outToParentChosenUsers"], [1, "card", 3, "ngClass", "index", "users", "outToParent"], [3, "user", "outToParent"], [1, "pagination__item", 3, "ngClass", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchUsersValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_item_5_Template, 1, 1, "app-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "searchUsers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_8_listener($event) { return ctx.pageChangePrev($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_a_10_Template, 2, 4, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener($event) { return ctx.pageChangeNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-filters", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("outToParentChosenUsers", function AppComponent_Template_app_filters_outToParentChosenUsers_13_listener($event) { return ctx.receiveChosenUsers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("outToParent", function AppComponent_Template_app_card_outToParent_14_listener($event) { return ctx.receiveFromChild($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchUsersValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx.users, ctx.searchUsersValue));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.active))("usersTotalLength", ctx.usersTotalLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx.active))("index", ctx.index)("users", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__["FiltersComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"]], pipes: [_searchUsers_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchUsers"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  position: relative;\n  width: 100%;\n  height: 100vh;\n}\n\n.main[_ngcontent-%COMP%] {\n  background: #E5E5E5;\n  width: 65%;\n  min-height: 100%;\n  position: relative;\n}\n\n.main__title[_ngcontent-%COMP%] {\n  margin: 64px 0;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 32px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.main__invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.filters__component[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100vh;\n}\n\n.marked[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.markedCard[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.pagination__arrow[_ngcontent-%COMP%] {\n  color: #2962FF;\n  margin-right: 20px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.pagination__arrow[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.pagination__arrow[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.pagination__item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 20px;\n  transition: 0.2s;\n}\n\n.pagination__item[_ngcontent-%COMP%]:hover {\n  color: #2962FF;\n  font-weight: bold;\n}\n\n.pagination__item_active[_ngcontent-%COMP%] {\n  color: #2962FF;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUZKOztBQUtBO0VBQ0ksY0FuRU87RUFvRVAsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFJSTtFQUNJLGVBQUE7QUFGUjs7QUFLSTtFQUNJLGlCQUFBO0FBSFI7O0FBT0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpKOztBQUtJO0VBQ0ksY0F0Rkc7RUF1RkgsaUJBQUE7QUFIUjs7QUFPQTtFQUNJLGNBNUZPO0VBNkZQLGlCQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXJzXG4kbWFpbkJsdWU6ICMyOTYyRkY7XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZDogI0U1RTVFNTtcbiAgICB3aWR0aDogNjUlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbl9fdGl0bGUge1xuICAgIG1hcmdpbjogNjRweCAwO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWFpbl9faW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsdGVyc19fY29tcG9uZW50IHtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1hcmtlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hcmtlZENhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5wYWdpbmF0aW9uX19hcnJvdyB7XG4gICAgY29sb3I6ICRtYWluQmx1ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4ycztcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLnBhZ2luYXRpb25fX2l0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJG1haW5CbHVlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5wYWdpbmF0aW9uX19pdGVtX2FjdGl2ZSB7XG4gICAgY29sb3I6ICRtYWluQmx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                providers: [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _total_service__WEBPACK_IMPORTED_MODULE_2__["TotalService"]]
            }]
    }], function () { return [{ type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _total_service__WEBPACK_IMPORTED_MODULE_2__["TotalService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/filters/filters.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _searchUsers_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchUsers.pipe */ "./src/app/searchUsers.pipe.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"],
        _filters_filters_component__WEBPACK_IMPORTED_MODULE_6__["FiltersComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"],
        _searchUsers_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchUsers"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"],
                    _filters_filters_component__WEBPACK_IMPORTED_MODULE_6__["FiltersComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                    _search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"],
                    _searchUsers_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchUsers"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardComponent {
    constructor() {
        this.outToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        var _a, _b, _c, _d, _e, _f, _g;
        this.title = ((_a = this.users[this.index]) === null || _a === void 0 ? void 0 : _a.first_name) + " " + ((_b = this.users[this.index]) === null || _b === void 0 ? void 0 : _b.last_name);
        this.id = (_c = this.users[this.index]) === null || _c === void 0 ? void 0 : _c.id;
        this.email = (_d = this.users[this.index]) === null || _d === void 0 ? void 0 : _d.email;
        this.firstName = (_e = this.users[this.index]) === null || _e === void 0 ? void 0 : _e.first_name;
        this.lastName = (_f = this.users[this.index]) === null || _f === void 0 ? void 0 : _f.last_name;
        this.avatar = (_g = this.users[this.index]) === null || _g === void 0 ? void 0 : _g.avatar;
    }
    closeCard() {
        this.isOpened = false;
        this.outToParent.emit(this.isOpened);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { users: "users", index: "index", isOpened: "isOpened" }, outputs: { outToParent: "outToParent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 36, vars: 6, consts: [[1, "itemCard"], [1, "itemCard__back", 3, "click"], [1, "item__title_arrow_container", "itemCard__arrow"], [1, "item__title_arrow"], [1, "item__link"], [1, "itemCard__back_text"], [1, "itemCard__title"], [1, "item__attr"], [1, "item__attr_unit"], [1, "item__attr_name"], [1, "item__attr_info"], [1, "itemCard__attr_unit"], [1, "itemCard__attr_avatar", 3, "src"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_div_click_1_listener() { return ctx.closeCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".itemCard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  height: 90vh;\n}\n\n.itemCard__back[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 22px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n\n.itemCard__back[_ngcontent-%COMP%]:hover {\n  font-weight: 500;\n}\n\n.itemCard__back[_ngcontent-%COMP%]:hover   .item__title_arrow[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 17px;\n}\n\n.itemCard__arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  margin-right: 8px;\n}\n\n.itemCard__back_text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #2962FF;\n}\n\n.itemCard__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 33px;\n  color: rgba(0, 0, 0, 0.87);\n  margin-bottom: 53px;\n}\n\n.itemCard__attr_unit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 33%;\n}\n\n.itemCard__attr_avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7QUFISjs7QUFJSTtFQUNJLGdCQUFBO0FBRlI7O0FBSUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUZSOztBQU1BO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FoQ087QUE2Qlg7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQXRDUTtFQXVDUixtQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhcnMgb2YgY29sb3JzXG4kbWFpbkJsdWU6ICMyOTYyRkY7XG4kdGV4dENvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuXG4uaXRlbUNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTB2aDtcbn1cblxuLml0ZW1DYXJkX19iYWNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgJjpob3ZlciAuaXRlbV9fdGl0bGVfYXJyb3cge1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgfVxufVxuXG4uaXRlbUNhcmRfX2Fycm93IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uaXRlbUNhcmRfX2JhY2tfdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAkbWFpbkJsdWU7XG59XG5cbi5pdGVtQ2FyZF9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xuICAgIG1hcmdpbi1ib3R0b206IDUzcHg7XG59XG5cbi5pdGVtQ2FyZF9fYXR0cl91bml0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDMzJTtcbn1cblxuLml0ZW1DYXJkX19hdHRyX2F2YXRhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */", ".item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n}\n\n.item__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 29px;\n}\n\n.item__title_name[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 23px;\n  margin-right: 23px;\n}\n\n.item__title_arrow_container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 16px;\n}\n\n.item__title_arrow_container[_ngcontent-%COMP%]:hover   .item__title_arrow[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 17px;\n}\n\n.item__title_arrow[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 2px;\n  background: #2962FF;\n  position: relative;\n}\n\n.item__title_arrow[_ngcontent-%COMP%]:after, .item__title_arrow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 8px;\n  height: inherit;\n  background: inherit;\n  position: absolute;\n  left: 8px;\n}\n\n.item__title_arrow[_ngcontent-%COMP%]:after {\n  top: -4px;\n  transform: rotate(45deg);\n}\n\n.item__title_arrow[_ngcontent-%COMP%]:before {\n  top: 4px;\n  transform: rotate(-45deg);\n}\n\n.item__link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  z-index: 10;\n  cursor: pointer;\n}\n\n.item__attr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-bottom: 29px;\n}\n\n.item__attr_unit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 33%;\n}\n\n.item__attr_name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: rgba(0, 0, 0, 0.87);\n  width: 25%;\n}\n\n.item__attr_info[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: #2962FF;\n}\n\n.item__line[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background: #A5A5A5;\n}\n\n.marked[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBRlI7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQXZDTztFQXdDUCxrQkFBQTtBQUhKOztBQUlJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRlI7O0FBSUk7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7QUFGUjs7QUFJSTtFQUNJLFFBQUE7RUFDQSx5QkFBQTtBQUZSOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQTdGTztBQTBGWDs7QUFNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBbEdPO0FBK0ZYOztBQU1BO0VBQ0ksYUFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyc1xuJG1haW5CbHVlOiAjMjk2MkZGO1xuJGxpbmVHcmF5OiAjQTVBNUE1O1xuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5pdGVtX190aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XG59XG5cbi5pdGVtX190aXRsZV9uYW1lIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG59XG5cbi5pdGVtX190aXRsZV9hcnJvd19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgICY6aG92ZXIgLml0ZW1fX3RpdGxlX2Fycm93IHtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIHdpZHRoOiAxN3B4O1xuICAgIH1cbn1cblxuLml0ZW1fX3RpdGxlX2Fycm93IHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbkJsdWU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA4cHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG59XG5cbi5pdGVtX19saW5rIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW1fX2F0dHIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XG59XG5cbi5pdGVtX19hdHRyX3VuaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAzMyU7XG59XG5cbi5pdGVtX19hdHRyX25hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uaXRlbV9fYXR0cl9pbmZvIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICRtYWluQmx1ZTtcbn1cblxuLml0ZW1fX2xpbmUge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRsaW5lR3JheTtcbn1cblxuLm1hcmtlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss', '../item/item.component.scss']
            }]
    }], function () { return []; }, { users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outToParent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
;


/***/ }),

/***/ "./src/app/filters/filters.component.ts":
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _total_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../total.service */ "./src/app/total.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search.pipe */ "./src/app/search.pipe.ts");






function FiltersComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_label_11_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const email_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.checked(email_r2.email, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r2 = ctx.$implicit;
    const id_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", email_r2)("index", id_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r2.email);
} }
function FiltersComponent_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.first_name + " " + item_r6.last_name);
} }
class FiltersComponent {
    constructor(totalService) {
        this.totalService = totalService;
        this.searchStr = "";
        this.chosenArrs = [];
        this.count = 0;
        this.outToParentChosenUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    ngOnInit() {
        this.usersTotalLength = this.totalService.totalCount['email'];
    }
    checked(email, event) {
        // array of chosen emails
        this.chosenArrs.push(email);
        if (this.chosenArrs.length > 1) {
            for (let i = 0; i < this.chosenArrs.length - 1; i++) {
                if (this.chosenArrs[i] === email) {
                    this.chosenArrs.splice(i, 1);
                    this.chosenArrs.splice(this.chosenArrs.length - 1, 1);
                }
                ;
            }
            ;
        }
        ;
        this.outToParentChosenUsers.emit(this.chosenArrs);
        // counting chosen checkboxes
        let arrOfEmails = document.getElementsByClassName('filters__choose');
        this.count = Array.prototype.filter.call(arrOfEmails, function (check) {
            return check.checked;
        }).length;
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_service__WEBPACK_IMPORTED_MODULE_1__["TotalService"])); };
FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltersComponent, selectors: [["app-filters"]], inputs: { usersTotalLength: "usersTotalLength", item: "item" }, outputs: { outToParentChosenUsers: "outToParentChosenUsers" }, decls: 19, vars: 10, consts: [[1, "filters"], [1, "filters__wrapper"], [1, "filters__title"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A \u043F\u043E e-mail", 1, "filters__input", 3, "ngModel", "ngModelChange"], [1, "filters__unit"], [1, "filters__subtitle"], [1, "filters__choosen"], [1, "filters__items"], ["class", "filters__choose_label", 3, "email", "index", 4, "ngFor", "ngForOf"], ["class", "filters__choose_label", 3, "item", 4, "ngFor", "ngForOf"], [1, "filters__choose_label", 3, "email", "index"], ["type", "checkbox", 1, "filters__choose", 3, "click"], [1, "filters__choose_text"], [1, "filters__choose_label", 3, "item"], ["type", "radio", "name", "name", 1, "filters__choose"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FiltersComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchStr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FiltersComponent_label_11_Template, 4, 3, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FiltersComponent_label_17_Template, 4, 2, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0412\u044B\u0431\u0440\u0430\u043D\u044B ", ctx.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 4, ctx.usersTotalLength, ctx.searchStr));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 7, ctx.usersTotalLength, ctx.searchStr));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"]], styles: [".filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background: #FFFFFF;\n  border-left: 1px solid #A5A5A5;\n  width: 100%;\n  height: 100vh;\n}\n\n.filters__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 52px;\n  width: 90%;\n}\n\n.filters__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 32px;\n  color: rgba(0, 0, 0, 0.87);\n  margin-bottom: 48px;\n}\n\n.filters__input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 19px;\n  color: rgba(0, 0, 0, 0.4);\n  border: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 41px;\n  outline: none;\n}\n\n.filters__subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.filters__choosen[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 19px;\n  color: rgba(0, 0, 0, 0.87);\n  margin-bottom: 6px;\n}\n\n.filters__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 24px;\n  height: 180px;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.filters__items[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23), 0px 3px 6px rgba(0, 0, 0, 0.16);\n  overflow-y: scroll;\n}\n\n.filters__choose_label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.filters__choose_label[_ngcontent-%COMP%]:first-child {\n  margin-top: 16px;\n}\n\n.filters__choose[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBTlU7RUFPViw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQUlJO0VBQ0ksNEVBQUE7RUFDQSxrQkFBQTtBQUZSOztBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFJSTtFQUNJLGdCQUFBO0FBRlI7O0FBTUE7RUFDSSxjQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhcnMgb2YgY29sb3JcbiRmaWx0ZXJzQmNrZzogI0ZGRkZGRjtcbiRmaWx0ZXJzQm9yZGVyQ29sb3I6ICNBNUE1QTU7XG5cbi5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICRmaWx0ZXJzQmNrZztcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRmaWx0ZXJzQm9yZGVyQ29sb3I7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmZpbHRlcnNfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogNTJweDtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uZmlsdGVyc19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuXG4uZmlsdGVyc19faW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1hcmdpbi1ib3R0b206IDQxcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZpbHRlcnNfX3N1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmZpbHRlcnNfX2Nob29zZW4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5maWx0ZXJzX19pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyksIDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG59XG5cbi5maWx0ZXJzX19jaG9vc2VfbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbn1cblxuLmZpbHRlcnNfX2Nob29zZSB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filters',
                templateUrl: './filters.component.html',
                styleUrls: ['./filters.component.scss']
            }]
    }], function () { return [{ type: _total_service__WEBPACK_IMPORTED_MODULE_1__["TotalService"] }]; }, { usersTotalLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outToParentChosenUsers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ItemComponent {
    constructor() {
        this.isOpened = false;
        this.obj = [];
        this.outToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    openItem() {
        this.id = this.user.id - 1;
        this.isOpened = true;
        this.obj = [this.isOpened, this.id];
        this.outToParent.emit(this.obj);
    }
    ngOnInit() { }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], inputs: { user: "user" }, outputs: { outToParent: "outToParent" }, decls: 19, vars: 4, consts: [[1, "item"], [1, "item__title"], [1, "item__title_name"], [1, "item__title_arrow_container"], [1, "item__title_arrow"], [1, "item__link", 3, "click"], [1, "item__attr"], [1, "item__attr_unit"], [1, "item__attr_name"], [1, "item__attr_info"], [1, "item__line"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_a_click_6_listener() { return ctx.openItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.first_name, " ", ctx.user.last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
    } }, styles: [".item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n}\n\n.item__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 29px;\n}\n\n.item__title_name[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 23px;\n  margin-right: 23px;\n}\n\n.item__title_arrow_container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 16px;\n}\n\n.item__title_arrow_container[_ngcontent-%COMP%]:hover   .item__title_arrow[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 17px;\n}\n\n.item__title_arrow[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 2px;\n  background: #2962FF;\n  position: relative;\n}\n\n.item__title_arrow[_ngcontent-%COMP%]:after, .item__title_arrow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 8px;\n  height: inherit;\n  background: inherit;\n  position: absolute;\n  left: 8px;\n}\n\n.item__title_arrow[_ngcontent-%COMP%]:after {\n  top: -4px;\n  transform: rotate(45deg);\n}\n\n.item__title_arrow[_ngcontent-%COMP%]:before {\n  top: 4px;\n  transform: rotate(-45deg);\n}\n\n.item__link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  z-index: 10;\n  cursor: pointer;\n}\n\n.item__attr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-bottom: 29px;\n}\n\n.item__attr_unit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 33%;\n}\n\n.item__attr_name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: rgba(0, 0, 0, 0.87);\n  width: 25%;\n}\n\n.item__attr_info[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: #2962FF;\n}\n\n.item__line[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background: #A5A5A5;\n}\n\n.marked[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBRlI7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQXZDTztFQXdDUCxrQkFBQTtBQUhKOztBQUlJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRlI7O0FBSUk7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7QUFGUjs7QUFJSTtFQUNJLFFBQUE7RUFDQSx5QkFBQTtBQUZSOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQTdGTztBQTBGWDs7QUFNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBbEdPO0FBK0ZYOztBQU1BO0VBQ0ksYUFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyc1xuJG1haW5CbHVlOiAjMjk2MkZGO1xuJGxpbmVHcmF5OiAjQTVBNUE1O1xuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5pdGVtX190aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XG59XG5cbi5pdGVtX190aXRsZV9uYW1lIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG59XG5cbi5pdGVtX190aXRsZV9hcnJvd19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgICY6aG92ZXIgLml0ZW1fX3RpdGxlX2Fycm93IHtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIHdpZHRoOiAxN3B4O1xuICAgIH1cbn1cblxuLml0ZW1fX3RpdGxlX2Fycm93IHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbkJsdWU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA4cHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG59XG5cbi5pdGVtX19saW5rIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0ZW1fX2F0dHIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XG59XG5cbi5pdGVtX19hdHRyX3VuaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAzMyU7XG59XG5cbi5pdGVtX19hdHRyX25hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4uaXRlbV9fYXR0cl9pbmZvIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICRtYWluQmx1ZTtcbn1cblxuLml0ZW1fX2xpbmUge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRsaW5lR3JheTtcbn1cblxuLm1hcmtlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outToParent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
;


/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchPipe {
    transform(users, value) {
        return users === null || users === void 0 ? void 0 : users.filter(user => {
            return user.email.includes(value);
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "search"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/searchUsers.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/searchUsers.pipe.ts ***!
  \*************************************/
/*! exports provided: SearchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsers", function() { return SearchUsers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchUsers {
    transform(users, value) {
        let arrTotal = [];
        if (value.length !== 0) {
            for (let i = 0; i < (users === null || users === void 0 ? void 0 : users.length); i++) {
                for (let j = 0; j < value.length; j++) {
                    if (users[i].email === value[j]) {
                        arrTotal.push(users[i]);
                    }
                }
            }
            ;
            return arrTotal;
        }
        else {
            arrTotal.length = 0; //?
            return users;
        }
    }
    ;
}
SearchUsers.ɵfac = function SearchUsers_Factory(t) { return new (t || SearchUsers)(); };
SearchUsers.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchUsers", type: SearchUsers, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchUsers, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "searchUsers"
            }]
    }], null, null); })();
;


/***/ }),

/***/ "./src/app/table-page.ts":
/*!*******************************!*\
  !*** ./src/app/table-page.ts ***!
  \*******************************/
/*! exports provided: TablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePage", function() { return TablePage; });
class TablePage {
    constructor(totalCount, rows) {
        this.totalCount = totalCount;
        this.rows = rows;
    }
}


/***/ }),

/***/ "./src/app/total.service.ts":
/*!**********************************!*\
  !*** ./src/app/total.service.ts ***!
  \**********************************/
/*! exports provided: TotalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalService", function() { return TotalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TotalService {
    constructor(http) {
        this.http = http;
        this.usersUrl = 'https://reqres.in/api/users/';
    }
    getTotalUsers() {
        this.totalCount = this.http.get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result['data']));
        return this.totalCount;
    }
}
TotalService.ɵfac = function TotalService_Factory(t) { return new (t || TotalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TotalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TotalService, factory: TotalService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _table_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-page */ "./src/app/table-page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UsersService {
    constructor(http) {
        this.http = http;
        this.usersUrl = 'https://reqres.in/api/users/';
    }
    getUsers(page, itemsPerPage) {
        var users = this.http.get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res['data']));
        return this.getPageItems(users, page, itemsPerPage);
    }
    getPageItems(users, page, itemsPerPage) {
        return users.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(u => {
            var startIndex = itemsPerPage * (page - 1);
            return new _table_page__WEBPACK_IMPORTED_MODULE_2__["TablePage"](u.length, u.slice(startIndex, startIndex + itemsPerPage));
        }));
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/den/HardDrive2/test/embedika_test_angular/embedika-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
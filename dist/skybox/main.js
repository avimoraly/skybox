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
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/table.service */ "./src/app/services/table.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cell_zone_cell_zone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell-zone/cell-zone.component */ "./src/app/cell-zone/cell-zone.component.ts");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell/cell.component */ "./src/app/cell/cell.component.ts");






function AppComponent_tr_4_td_1_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cellData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cellData_r5.name, "");
} }
function AppComponent_tr_4_td_1_span_1_app_cell_zone_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cell-zone", 10);
} if (rf & 2) {
    const cellData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", cellData_r5);
} }
function AppComponent_tr_4_td_1_span_1_app_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cell", 11);
} if (rf & 2) {
    const cellData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("section", cellData_r5);
} }
function AppComponent_tr_4_td_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_4_td_1_span_1_span_1_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_tr_4_td_1_span_1_app_cell_zone_2_Template, 1, 1, "app-cell-zone", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_tr_4_td_1_span_1_app_cell_3_Template, 1, 1, "app-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isFirstCol_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().first;
    const isFirstRow_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isFirstRow_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isFirstCol_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isFirstRow_r2 && !isFirstCol_r6);
} }
function AppComponent_tr_4_td_1_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_tr_4_td_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_tr_4_td_1_ng_template_2_div_0_Template, 5, 0, "div", 12);
} if (rf & 2) {
    const isFirstCol_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().first;
    const isFirstRow_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isFirstRow_r2 && isFirstCol_r6);
} }
const _c0 = function (a0, a1, a2, a3) { return { "firstRow": a0, "relatedHover": a1, "withDiagonal": a2, "middleCell": a3 }; };
function AppComponent_tr_4_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_tr_4_td_1_Template_td_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const col_r7 = ctx.index; const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r22.hoverRow = row_r3; return ctx_r22.hoverCol = col_r7; })("mouseleave", function AppComponent_tr_4_td_1_Template_td_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r25.hoverRow = null; return ctx_r25.hoverCol = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_4_td_1_span_1_Template, 4, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_tr_4_td_1_ng_template_2_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cellData_r5 = ctx.$implicit;
    const isFirstCol_r6 = ctx.first;
    const col_r7 = ctx.index;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const isFirstRow_r2 = ctx_r26.first;
    const row_r3 = ctx_r26.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, isFirstRow_r2, ctx_r4.isRelatedHover(row_r3, col_r7), isFirstRow_r2 && isFirstCol_r6, !isFirstRow_r2 && !isFirstCol_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cellData_r5)("ngIfElse", _r9);
} }
function AppComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_tr_4_td_1_Template, 4, 8, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rowData_r1);
} }
class AppComponent {
    constructor(tableService) {
        this.tableService = tableService;
        this.hoverRow = null;
        this.hoverCol = null;
        this.dataMatrix = tableService.matrixdData;
    }
    ngOnInit() {
        console.log();
    }
    isRelatedHover(currRow, currCol) {
        if ((currRow < this.hoverRow && currCol === this.hoverCol && this.hoverCol !== 0) ||
            currCol < this.hoverCol && currRow === this.hoverRow && this.hoverRow !== 0) {
            return true;
        }
        return false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_table_service__WEBPACK_IMPORTED_MODULE_1__["TableService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["ngif", "this.dataMatrix && this.dataMatrix[0]"], [4, "ngFor", "ngForOf"], [3, "ngClass", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "ngClass", "mouseenter", "mouseleave"], [4, "ngIf", "ngIfElse"], ["empty", ""], ["class", "colName", 4, "ngIf"], [3, "zone", 4, "ngIf"], [3, "section", 4, "ngIf"], [1, "colName"], [3, "zone"], [3, "section"], ["class", "corner", 4, "ngIf"], [1, "corner"], [1, "destination"], [1, "source"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NIST- Access Policy Compliance Matrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_tr_4_Template, 2, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataMatrix);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _cell_zone_cell_zone_component__WEBPACK_IMPORTED_MODULE_3__["CellZoneComponent"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__["CellComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: Helvetica, Arial, sans-serif;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  border: 2px solid #cfd0d1;\n  padding: 0;\n}\n[_nghost-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f7f8fa;\n  color: #607d98;\n  table-layout: fixed;\n}\n[_nghost-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  background-color: #f7f8fa;\n  border: 1px solid #cfd0d1;\n  padding: 5px;\n  margin-bottom: 2px;\n}\n[_nghost-%COMP%]   table[_ngcontent-%COMP%], [_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #cfd0d1;\n  border-collapse: collapse;\n}\n[_nghost-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 47px;\n  padding: 3px;\n  line-height: 15px;\n  text-align: left;\n  font-size: 13px;\n}\n[_nghost-%COMP%]   td.relatedHover[_ngcontent-%COMP%] {\n  background-color: rgba(43, 204, 174, 0.35);\n}\n[_nghost-%COMP%]   td.firstRow[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n  height: 45px;\n}\n[_nghost-%COMP%]   td.middleCell[_ngcontent-%COMP%]:hover {\n  background-color: rgba(43, 204, 174, 0.7);\n}\n[_nghost-%COMP%]   .withDiagonal[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: italic;\n  position: relative;\n  background: linear-gradient(to top right, #f7f8fa calc(50% - 1px), #aaa, #f7f8fa calc(50% + 1px));\n}\n[_nghost-%COMP%]   .destination[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  font-weight: 900;\n  font-size: 11px;\n}\n[_nghost-%COMP%]   .source[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  font-weight: 900;\n  font-size: 11px;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUVKO0FBREk7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR047QUFBRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQ0U7RUFDRSwwQ0FBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUFKO0FBSUk7RUFFRSx5Q0FBQTtBQUhOO0FBUUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlHQUFBO0FBTko7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQSjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gID5kaXYge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NmZDBkMTtcclxuICAgIHBhZGRpbmc6MFxyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjdmOGZhO1xyXG4gICAgY29sb3I6IzYwN2Q5ODtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBjYXB0aW9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjdmOGZhO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2ZkMGQxO1xyXG4gICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICB0YWJsZSwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NmZDBkMTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgfVxyXG4gIHRkIHtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIHRkLnJlbGF0ZWRIb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLDIwNCwxNzQsMC4zNSk7XHJcbiAgfVxyXG5cclxuICB0ZC5maXJzdFJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgdGQubWlkZGxlQ2VsbCB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLy9cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywyMDQsMTc0LDAuNyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndpdGhEaWFnb25hbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjZjdmOGZhIGNhbGMoNTAlIC0gMXB4KSwgI2FhYSwgI2Y3ZjhmYSBjYWxjKDUwJSArIDFweCkpO1xyXG4gIH1cclxuXHJcbiAgLmRlc3RpbmF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLnNvdXJjZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_table_service__WEBPACK_IMPORTED_MODULE_1__["TableService"] }]; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell/cell.component */ "./src/app/cell/cell.component.ts");
/* harmony import */ var _cell_zone_cell_zone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell-zone/cell-zone.component */ "./src/app/cell-zone/cell-zone.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__["CellComponent"],
        _cell_zone_cell_zone_component__WEBPACK_IMPORTED_MODULE_4__["CellZoneComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _cell_cell_component__WEBPACK_IMPORTED_MODULE_3__["CellComponent"],
                    _cell_zone_cell_zone_component__WEBPACK_IMPORTED_MODULE_4__["CellZoneComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cell-zone/cell-zone.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cell-zone/cell-zone.component.ts ***!
  \**************************************************/
/*! exports provided: CellZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellZoneComponent", function() { return CellZoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CellZoneComponent {
    constructor() { }
    ngOnInit() {
    }
}
CellZoneComponent.ɵfac = function CellZoneComponent_Factory(t) { return new (t || CellZoneComponent)(); };
CellZoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CellZoneComponent, selectors: [["app-cell-zone"]], inputs: { zone: "zone" }, decls: 6, vars: 2, consts: [[1, "sky-documentAdd"]], template: function CellZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.zone.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.zone.complianceLevel || 0, "%");
    } }, styles: ["[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsbC16b25lL2NlbGwtem9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jZWxsLXpvbmUvY2VsbC16b25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellZoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cell-zone',
                templateUrl: './cell-zone.component.html',
                styleUrls: ['./cell-zone.component.scss']
            }]
    }], function () { return []; }, { zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cell/cell.component.ts":
/*!****************************************!*\
  !*** ./src/app/cell/cell.component.ts ***!
  \****************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CellComponent {
    constructor() { }
    ngOnInit() {
    }
}
CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(); };
CellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CellComponent, selectors: [["app-cell"]], inputs: { section: "section" }, decls: 8, vars: 4, consts: [[1, "section"], [1, "meter"], [1, "sky-documentAdd"], [1, "sky-toxic"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.section.complianceLevel, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.section.complianceLevel || 0, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.section.violationsCount, "\n");
    } }, styles: [".meter[_ngcontent-%COMP%] {\n  height: 9px;\n  position: relative;\n  background: #c52f2e;\n  margin: 3px 0px;\n}\n\n.meter[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background-color: #86d882;\n}\n\n.section[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsbC9jZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NlbGwvY2VsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRlciB7XHJcblx0aGVpZ2h0OiA5cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNjNTJmMmU7XHJcbiAgbWFyZ2luOiAzcHggMHB4O1xyXG59XHJcblxyXG4ubWV0ZXIgPiBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZDg4MjtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMCA0cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cell',
                templateUrl: './cell.component.html',
                styleUrls: ['./cell.component.scss']
            }]
    }], function () { return []; }, { section: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/table.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/table.service.ts ***!
  \*******************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _zones_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zones.json */ "./src/app/services/zones.json");
var _zones_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./zones.json */ "./src/app/services/zones.json", 1);



class TableService {
    constructor() {
        this.tableData = _zones_json__WEBPACK_IMPORTED_MODULE_1__;
        this.matrixdData = [];
        this.mapper = {};
        // mainly  creating data structure do use in html
        this.matrixdData[0] = [];
        this.tableData.zones.forEach((zone, i) => {
            this.matrixdData[i + 1] = [];
            this.tableData.zones.forEach((_, j) => {
                this.matrixdData[i][j + 1] = null;
            });
            this.matrixdData[0][i + 1] = zone;
            this.matrixdData[i + 1][0] = zone;
            this.mapper[zone.guid] = i + 1;
        });
        this.tableData.sections.forEach((section) => {
            const source = this.mapper[section.sourceGuid];
            const dest = this.mapper[section.destinationGuid];
            this.matrixdData[source][dest] = section;
        });
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(); };
TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/zones.json":
/*!*************************************!*\
  !*** ./src/app/services/zones.json ***!
  \*************************************/
/*! exports provided: viewId, policyId, zones, sections, sectionsWithNetworkEntitiesCount, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"viewId\":5463,\"policyId\":3035,\"zones\":[{\"guid\":\"U1466212029\",\"name\":\"App\",\"complianceLevel\":97},{\"guid\":\"U1466212035\",\"name\":\"DB\"},{\"guid\":\"P2\",\"name\":\"DMZ\",\"complianceLevel\":97},{\"guid\":\"P3\",\"name\":\"External\",\"complianceLevel\":67},{\"guid\":\"P4\",\"name\":\"Internal\",\"complianceLevel\":80},{\"guid\":\"P5\",\"name\":\"Partner\",\"complianceLevel\":95}],\"sections\":[{\"sectionId\":3037,\"sourceGuid\":\"P3\",\"destinationGuid\":\"P5\",\"complianceLevel\":100,\"violationsCount\":0,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3038,\"sourceGuid\":\"P3\",\"destinationGuid\":\"P2\",\"complianceLevel\":65,\"violationsCount\":50,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3039,\"sourceGuid\":\"P3\",\"destinationGuid\":\"P4\",\"complianceLevel\":62,\"violationsCount\":72,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3041,\"sourceGuid\":\"P5\",\"destinationGuid\":\"P3\",\"complianceLevel\":100,\"violationsCount\":0,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3042,\"sourceGuid\":\"P5\",\"destinationGuid\":\"P5\",\"complianceLevel\":75,\"violationsCount\":2,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3043,\"sourceGuid\":\"P5\",\"destinationGuid\":\"P2\",\"complianceLevel\":90,\"violationsCount\":25,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3044,\"sourceGuid\":\"P5\",\"destinationGuid\":\"P4\",\"complianceLevel\":98,\"violationsCount\":3,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3046,\"sourceGuid\":\"P2\",\"destinationGuid\":\"P3\",\"complianceLevel\":94,\"violationsCount\":6,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3047,\"sourceGuid\":\"P2\",\"destinationGuid\":\"P5\",\"complianceLevel\":91,\"violationsCount\":2,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3048,\"sourceGuid\":\"P2\",\"destinationGuid\":\"P2\",\"complianceLevel\":99,\"violationsCount\":1,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3049,\"sourceGuid\":\"P2\",\"destinationGuid\":\"P4\",\"complianceLevel\":96,\"violationsCount\":17,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3051,\"sourceGuid\":\"P4\",\"destinationGuid\":\"P3\",\"complianceLevel\":50,\"violationsCount\":52,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3052,\"sourceGuid\":\"P4\",\"destinationGuid\":\"P5\",\"complianceLevel\":71,\"violationsCount\":6,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3053,\"sourceGuid\":\"P4\",\"destinationGuid\":\"P2\",\"complianceLevel\":78,\"violationsCount\":90,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3054,\"sourceGuid\":\"P4\",\"destinationGuid\":\"P4\",\"complianceLevel\":90,\"violationsCount\":32,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false},{\"sectionId\":3108,\"sourceGuid\":\"U1466212029\",\"destinationGuid\":\"U1466212035\",\"complianceLevel\":97,\"violationsCount\":13,\"hasMultipleSections\":false,\"hasUncomputedResults\":false,\"hasErrors\":false}],\"sectionsWithNetworkEntitiesCount\":0}");

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

module.exports = __webpack_require__(/*! C:\repos\skybox\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
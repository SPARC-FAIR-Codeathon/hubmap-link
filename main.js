(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/hubmap-link/hubmap-link/website/src/main.ts */"zUnb");


/***/ }),

/***/ "4CIt":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/asctb-compare/asctb-table-view/asctb-table-view.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AsctbTableViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsctbTableViewComponent", function() { return AsctbTableViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/asctb-compare.service */ "HyX0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");









function AsctbTableViewComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsctbTableViewComponent_th_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.sortByColumn("id"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organ_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getOrganIdReadable(organ_r14.id), " ");
} }
function AsctbTableViewComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsctbTableViewComponent_th_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.sortByColumn("name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organ_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", organ_r17.name, " ");
} }
function AsctbTableViewComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_10_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_10_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsctbTableViewComponent_td_10_mat_icon_1_Template, 2, 0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AsctbTableViewComponent_td_10_mat_icon_2_Template, 2, 0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organ_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", organ_r18.hubmapResident);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !organ_r18.hubmapResident);
} }
function AsctbTableViewComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_13_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_13_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsctbTableViewComponent_td_13_mat_icon_1_Template, 2, 0, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AsctbTableViewComponent_td_13_mat_icon_2_Template, 2, 0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organ_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", organ_r21.sparcResident);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !organ_r21.sparcResident);
} }
function AsctbTableViewComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cell Types ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AsctbTableViewComponent_td_16_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const celltype_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", celltype_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", celltype_r27.name, " ");
} }
function AsctbTableViewComponent_td_16_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organ_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", organ_r24.hubmapCellTypes.length - 6, " more... ");
} }
function AsctbTableViewComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AsctbTableViewComponent_td_16_mat_chip_2_Template, 2, 2, "mat-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AsctbTableViewComponent_td_16_mat_chip_4_Template, 2, 1, "mat-chip", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organ_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 2, organ_r24.hubmapCellTypes, 0, 6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", organ_r24.hubmapCellTypes.length > 6);
} }
function AsctbTableViewComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
} }
const _c0 = function (a0, a1) { return { "background-sparc": a0, "background-hubmap": a1 }; };
function AsctbTableViewComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, row_r30.sparcResident && !row_r30.hubmapResident, !row_r30.sparcResident && row_r30.hubmapResident));
} }
class AsctbTableViewComponent {
    constructor(asctbCompareService) {
        this.asctbCompareService = asctbCompareService;
        this.displayedColumns = ['id', 'name', 'hubmap', 'sparc', 'cellTypes']; //'sharedCellTypes', 'hubmapCellTypes', 'sparcCellTypes', 'label'
    }
    ngOnInit() {
    }
    sortByColumn(columnName) {
        this.asctbCompareService.mergedTableArr.sort((a, b) => (a[columnName] > b[columnName]) ? 1 : ((b[columnName] > a[columnName]) ? -1 : 0));
    }
    getOrganIdReadable(id) {
        return (id.indexOf('SURROGATE_ID') > -1) ? '<NONE>' : id;
    }
}
AsctbTableViewComponent.ɵfac = function AsctbTableViewComponent_Factory(t) { return new (t || AsctbTableViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_1__["AsctbCompareService"])); };
AsctbTableViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsctbTableViewComponent, selectors: [["app-asctb-table-view"]], decls: 19, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "start start", "fxFlex", "", 1, "fixed-stage-height"], ["mat-table", "", "fxFlex", "", 3, "dataSource"], ["matColumnDef", "id"], ["class", "header-font w-m175", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["class", "header-font w-m75", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "hubmap"], ["class", "header-font w-m75 center-text", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "center-text", 4, "matCellDef"], ["matColumnDef", "sparc"], ["class", "header-font-small w-m75 center-text", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "cellTypes"], ["class", "header-font w-m275 center-text", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "header-font", "w-m175"], [3, "click"], ["mat-cell", ""], ["mat-header-cell", "", 1, "header-font", "w-m75"], ["mat-header-cell", "", 1, "header-font", "w-m75", "center-text"], ["width", "50px", "src", "assets/img/hubmap-logo.svg", 1, "hubmap-logo"], ["mat-cell", "", 1, "center-text"], ["class", "color-green font-size-32 pointer", "matTooltip", "This anatomical structure is present in HuBMAP", 4, "ngIf"], ["class", "color-maroon font-size-32 pointer", "matTooltip", "This anatomical structure is not present in HuBMAP", 4, "ngIf"], ["matTooltip", "This anatomical structure is present in HuBMAP", 1, "color-green", "font-size-32", "pointer"], ["matTooltip", "This anatomical structure is not present in HuBMAP", 1, "color-maroon", "font-size-32", "pointer"], ["mat-header-cell", "", 1, "header-font-small", "w-m75", "center-text"], ["width", "50px", "src", "assets/img/sparc-logo.svg", 1, "sparc-logo"], ["class", "color-green font-size-32 pointer", "matTooltip", "This anatomical structure is present in SPARC", 4, "ngIf"], ["class", "color-maroon font-size-32 pointer", "matTooltip", "This anatomical structure is not present in SPARC", 4, "ngIf"], ["matTooltip", "This anatomical structure is present in SPARC", 1, "color-green", "font-size-32", "pointer"], ["matTooltip", "This anatomical structure is not present in SPARC", 1, "color-maroon", "font-size-32", "pointer"], ["mat-header-cell", "", 1, "header-font", "w-m275", "center-text"], [3, "matTooltip", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "matTooltip"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass"]], template: function AsctbTableViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AsctbTableViewComponent_th_3_Template, 3, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AsctbTableViewComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AsctbTableViewComponent_th_6_Template, 3, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AsctbTableViewComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AsctbTableViewComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AsctbTableViewComponent_td_10_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AsctbTableViewComponent_th_12_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AsctbTableViewComponent_td_13_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AsctbTableViewComponent_th_15_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AsctbTableViewComponent_td_16_Template, 5, 6, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AsctbTableViewComponent_tr_17_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AsctbTableViewComponent_tr_18_Template, 1, 4, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.asctbCompareService.mergedTableArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".full-width[_ngcontent-%COMP%]{ width: 100%; }\n.center-text[_ngcontent-%COMP%]{ text-align: center; }\n.w-m275[_ngcontent-%COMP%]{ min-width: 275px;}\n.w-m175[_ngcontent-%COMP%]{ min-width: 175px;}\n.w-m75[_ngcontent-%COMP%]{ min-width: 75px;}\n.background-sparc[_ngcontent-%COMP%]{ background-color:rgb(69, 59, 134); }\n.background-hubmap[_ngcontent-%COMP%]{ background-color:rgb(144, 158, 121); }\n.color-green[_ngcontent-%COMP%]{color:green;}\n.color-maroon[_ngcontent-%COMP%]{color:rgb(156, 3, 3);}\n.font-size-32[_ngcontent-%COMP%]{ font-size:32px;}\n.pointer[_ngcontent-%COMP%]{ cursor: pointer; }\n.header-font[_ngcontent-%COMP%]{ \n    font-size: 18px !important; \n    color: #fff;\n}\n.header-font-small[_ngcontent-%COMP%]{ \n    font-size: 12px !important; \n    color: #fff;\n}\n.sparc-logo[_ngcontent-%COMP%]{\n    background-color:#fff; \n    padding: 5px 5px 5px 5px; \n    border-radius: 5px;\n}\n.hubmap-logo[_ngcontent-%COMP%]{\n    background-color:#000; \n    padding: 12px 5px 12px 5px; \n    border-radius: 5px;\n}\nmat-chip[_ngcontent-%COMP%] { padding: 4px 9px !important; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY3RiLXRhYmxlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLFdBQVcsRUFBRTtBQUMxQixjQUFjLGtCQUFrQixFQUFFO0FBQ2xDLFNBQVMsZ0JBQWdCLENBQUM7QUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQztBQUMxQixRQUFRLGVBQWUsQ0FBQztBQUN4QixtQkFBbUIsaUNBQWlDLEVBQUU7QUFDdEQsb0JBQW9CLG1DQUFtQyxFQUFFO0FBQ3pELGFBQWEsV0FBVyxDQUFDO0FBQ3pCLGNBQWMsb0JBQW9CLENBQUM7QUFDbkMsZUFBZSxjQUFjLENBQUM7QUFDOUIsVUFBVSxlQUFlLEVBQUU7QUFDM0I7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztBQUNmO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7QUFFQSxXQUFXLDJCQUEyQixFQUFFIiwiZmlsZSI6ImFzY3RiLXRhYmxlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoeyB3aWR0aDogMTAwJTsgfVxuLmNlbnRlci10ZXh0eyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbi53LW0yNzV7IG1pbi13aWR0aDogMjc1cHg7fVxuLnctbTE3NXsgbWluLXdpZHRoOiAxNzVweDt9XG4udy1tNzV7IG1pbi13aWR0aDogNzVweDt9XG4uYmFja2dyb3VuZC1zcGFyY3sgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNjksIDU5LCAxMzQpOyB9XG4uYmFja2dyb3VuZC1odWJtYXB7IGJhY2tncm91bmQtY29sb3I6cmdiKDE0NCwgMTU4LCAxMjEpOyB9XG4uY29sb3ItZ3JlZW57Y29sb3I6Z3JlZW47fVxuLmNvbG9yLW1hcm9vbntjb2xvcjpyZ2IoMTU2LCAzLCAzKTt9XG4uZm9udC1zaXplLTMyeyBmb250LXNpemU6MzJweDt9XG4ucG9pbnRlcnsgY3Vyc29yOiBwb2ludGVyOyB9XG4uaGVhZGVyLWZvbnR7IFxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50OyBcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItZm9udC1zbWFsbHsgXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7IFxuICAgIGNvbG9yOiAjZmZmO1xufVxuLnNwYXJjLWxvZ297XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmOyBcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5odWJtYXAtbG9nb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7IFxuICAgIHBhZGRpbmc6IDEycHggNXB4IDEycHggNXB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbm1hdC1jaGlwIHsgcGFkZGluZzogNHB4IDlweCAhaW1wb3J0YW50OyB9Il19 */"] });


/***/ }),

/***/ "9c4+":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mast_mast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mast/mast.component */ "h/Un");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'hubmap-sparc';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_mast_mast_component__WEBPACK_IMPORTED_MODULE_1__["MastComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "EpjL":
/*!***************************************************************************************!*\
  !*** ./src/app/components/asctb-compare/asctb-tree-view/asctb-tree-view.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AsctbTreeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsctbTreeViewComponent", function() { return AsctbTreeViewComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/asctb-compare.service */ "HyX0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");




class AsctbTreeViewComponent {
    constructor(asctbCompareService) {
        this.asctbCompareService = asctbCompareService;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.generateTree();
    }
    generateTree() {
        //Short-circuit when no data is available
        if (!this.asTree)
            return;
        // Set the dimensions and margins of the diagram
        var element = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#treeview-div').node();
        let wWidth = element.getBoundingClientRect().width;
        let wHeight = element.getBoundingClientRect().height;
        let heightDynamicScale = Math.ceil((this.asctbCompareService.countTotalAS / 50) * element.getBoundingClientRect().height);
        wHeight = (wHeight > heightDynamicScale) ? wHeight : heightDynamicScale;
        this.margin = { top: 20, right: 90, bottom: 20, left: 90 };
        this.width = wWidth - this.margin.right - this.margin.left;
        this.height = wHeight - this.margin.top - this.margin.bottom;
        this.barHeight = 20;
        this.barWidth = this.width * .8;
        this.i = 0;
        this.duration = 750;
        this.tree = d3__WEBPACK_IMPORTED_MODULE_0__["tree"]().size([this.width, this.height]);
        // this.tree = tree().nodeSize([0, 30]);
        this.tree = d3__WEBPACK_IMPORTED_MODULE_0__["tree"]().nodeSize([0, 30]);
        this.root = this.tree(d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](this.asTree, function (d) {
            return d.asAcyclicalChildren;
            //return new Set([...d.asHubmapChildren, ...d.asSparcChildren, ...d.asSharedChildren]);
        }));
        this.root.each((d) => {
            d.name = d.id; //transferring name to a name variable
            d.id = this.i; //Assigning numerical Ids
            this.i++;
        });
        this.root.x0 = this.root.x;
        this.root.y0 = this.root.y;
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]("#treeview-div > *").remove();
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#treeview-div').append('svg')
            .attr('width', this.width + this.margin.right + this.margin.left)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        let connector = function (d) {
            //curved 
            /*return "M" + d.y + "," + d.x +
                "C" + (d.y + d.parent.y) / 2 + "," + d.x +
                " " + (d.y + d.parent.y) / 2 + "," + d.parent.x +
                " " + d.parent.y + "," + d.parent.x;*/
            //straight
            return "M" + d.parent.y + "," + d.parent.x
                + "V" + d.x + "H" + d.y;
        };
        let collapse = (d) => {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        };
        let click = (d) => {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            }
            else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
        };
        var update = (source) => {
            this.width = 800;
            // Compute the new tree layout.
            let nodes = this.tree(this.root);
            let nodesSort = [];
            nodes.eachBefore(function (n) {
                nodesSort.push(n);
            });
            this.height = Math.max(500, nodesSort.length * this.barHeight + this.margin.top + this.margin.bottom);
            let links = nodesSort.slice(1);
            // Compute the "layout".
            nodesSort.forEach((n, i) => {
                n.x = i * this.barHeight;
            });
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg').transition()
                .duration(this.duration)
                .attr("height", this.height);
            // Update the nodes…
            let node = this.svg.selectAll('g.node')
                .data(nodesSort, function (d) {
                return d.id || (d.id = ++this.i);
            });
            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr('transform', function () {
                return 'translate(' + source.y0 + ',' + source.x0 + ')';
            })
                .on('click', click);
            // Shared = white
            // Hubmap = blue
            // Sparc = olive
            let nodeFillColor = (node) => {
                if (node.data.sparcResident && node.data.hubmapResident) {
                    return "#fff";
                }
                else if (!node.data.sparcResident && node.data.hubmapResident) {
                    return "rgb(144, 158, 121)";
                }
                else {
                    return "rgb(69, 59, 134)";
                }
            };
            nodeEnter.append('circle')
                .attr('class', (d) => {
                let classStr = 'node';
                if (!d.data.sparcResident && d.data.hubmapResident) {
                    classStr += " hubmap";
                }
                else if (d.data.sparcResident && !d.data.hubmapResident) {
                    classStr += " sparc";
                }
                return classStr;
            })
                .attr('r', 1e-6)
                .style("fill", function (d) {
                return nodeFillColor(d);
            });
            nodeEnter.append('text')
                .attr('x', function (d) {
                return d.children || d._children ? 10 : 10;
            })
                .attr('dy', '.35em')
                .attr('text-anchor', function (d) {
                return d.children || d._children ? 'start' : 'start';
            })
                .text(function (d) {
                let id = (d.data.id.indexOf('SURROGATE') > -1) ? '<NONE>' : d.data.id;
                return d.data.name + ' (' + id + ')';
            })
                .style('fill-opacity', 1e-6);
            nodeEnter.append('svg:title').text(function (d) {
                return d.data.name;
            });
            // Transition nodes to their new position.
            let nodeUpdate = node.merge(nodeEnter)
                .transition()
                .duration(this.duration);
            nodeUpdate
                .attr('transform', function (d) {
                return 'translate(' + d.y + ',' + d.x + ')';
            });
            nodeUpdate.select('circle')
                .attr('r', 4.5)
                .style("fill", function (d) {
                return nodeFillColor(d);
            });
            nodeUpdate.select('text')
                .style('fill-opacity', 1);
            // Transition exiting nodes to the parent's new position (and remove the nodes)
            var nodeExit = node.exit().transition()
                .duration(this.duration);
            nodeExit
                .attr('transform', function (d) {
                return 'translate(' + source.y + ',' + source.x + ')';
            })
                .remove();
            nodeExit.select('circle')
                .attr('r', 1e-6);
            nodeExit.select('text')
                .style('fill-opacity', 1e-6);
            // Update the links…
            var link = this.svg.selectAll('path.link')
                .data(links, function (d) {
                // return d.target.id;
                var id = d.id + '->' + d.parent.id;
                return id;
            });
            // Enter any new links at the parent's previous position.
            let linkEnter = link.enter().insert('path', 'g')
                .attr('class', function (d) {
                let classesStr = "link";
                if (d.parent.data.asSparcChildren.has(d.data)) {
                    classesStr += " sparc";
                }
                if (d.parent.data.asHubmapChildren.has(d.data)) {
                    classesStr += " hubmap";
                }
                return classesStr;
            })
                .attr('d', (d) => {
                var o = { x: source.x0, y: source.y0, parent: { x: source.x0, y: source.y0 } };
                return connector(o);
            });
            // Transition links to their new position.
            link.merge(linkEnter).transition()
                .duration(this.duration)
                .attr('d', connector);
            // // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(this.duration)
                .attr('d', (d) => {
                var o = { x: source.x, y: source.y, parent: { x: source.x, y: source.y } };
                return connector(o);
            })
                .remove();
            // Stash the old positions for transition.
            nodesSort.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        };
        // this.root.children.forEach(this.collapse);
        update(this.root);
    }
}
AsctbTreeViewComponent.ɵfac = function AsctbTreeViewComponent_Factory(t) { return new (t || AsctbTreeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_2__["AsctbCompareService"])); };
AsctbTreeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AsctbTreeViewComponent, selectors: [["app-asctb-tree-view"]], inputs: { asTree: "asTree" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "treeview-div", "fxFlex", "", 1, "fixed-stage-height", "background-white"]], template: function AsctbTreeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], styles: [".background-white[_ngcontent-%COMP%]{background:#fff;}\n\n.graph-height[_ngcontent-%COMP%]{\n    min-height:calc(100vh - 64px);\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY3RiLXRyZWUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixlQUFlLENBQUM7O0FBRWxDO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhc2N0Yi10cmVlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLXdoaXRle2JhY2tncm91bmQ6I2ZmZjt9XG5cbi5ncmFwaC1oZWlnaHR7XG4gICAgbWluLWhlaWdodDpjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ "HyX0":
/*!***************************************************!*\
  !*** ./src/app/services/asctb-compare.service.ts ***!
  \***************************************************/
/*! exports provided: AsctbCompareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsctbCompareService", function() { return AsctbCompareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ajax_sparc_asctb_ajax_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax/sparc-asctb-ajax.service */ "ONHi");


/*******************************************************************************************
 * @Author Samuel O'Blenes
 * @Date 7/15/21
 * This service maintains UI state, data, and associated business logic for the ASCT+B
 * comparison views
 *******************************************************************************************/
class AsctbCompareService {
    constructor(sparcAsctbAjaxService) {
        this.sparcAsctbAjaxService = sparcAsctbAjaxService;
        //Organ type currently selected by the user
        this.selectedOrganType = 'UBERON:0000948';
        //Human-readable data status string ['Not ready'|'Loading'|'Ready']
        this.dataLoadStatus = 'Not ready';
        //Selectable organ types in the UI control (@TODO: Externalize this to a resource file)
        this.organTypes = [
            {
                name: 'Heart',
                id: 'UBERON:0000948',
                sparcUri: 'assets/data/sparc_heart.json',
                hubmapUri: 'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1240281363'
            }, {
                name: 'Brain',
                id: 'UBERON:0000955',
                sparcUri: 'assets/data/sparc_brain.json',
                hubmapUri: 'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/345174398'
            }, {
                name: 'Kidney',
                id: 'UBERON:0002113',
                sparcUri: 'assets/data/sparc_kidney.json',
                hubmapUri: 'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1760639962'
            }, {
                name: 'Large intestine',
                id: 'UBERON:0000059',
                sparcUri: 'assets/data/sparc_large-intestine.json',
                hubmapUri: 'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/1687995716'
            }, {
                name: 'Lymph nodes',
                id: 'UBERON:0000029',
                sparcUri: 'assets/data/sparc_lymph-nodes.json',
                hubmapUri: 'https://asctb-api.herokuapp.com/v2/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/272157091'
            }
        ];
        //Organ hierarchial data
        this.sparcRawOrganData = null;
        this.hubmapRawOrganData = null;
        //Dataset summary statistics
        this.countTotalAS = 0;
        this.countSparcAS = 0;
        this.countHubmapAS = 0;
        this.countSharedAS = 0;
        this.countSparcASLinks = 0;
        this.countHubmapASLinks = 0;
        this.countSharedASLinks = 0;
        /*************************************************************************************
         * Data tree structure representing organ data from both sparc and hubmap.
         *************************************************************************************/
        this.mergedOrganData = null;
        this.mergedOrganIdx = {}; //id:Organ index
        this.mergedCellTypeIdx = {}; //id:CellType index
        /*************************************************************************************
         * Data structure suitable for table presentation
         *************************************************************************************/
        this.mergedTableArr = [];
        /*************************************************************************************
         * Data structure for D3 force-directed graph presentation
         *************************************************************************************/
        this.fdNodes = []; // {id: "UBERON:00012345", group: 1, organ:{...}}
        this.fdEdges = []; // {source: "UBERON:00012345", target: "UBERON:00012346", value: 1}
    }
    /*************************************************************************************
     * Fetch data for the selected organ from SPARC and HuBMAP. After data has been
     * loaded from both sources, execute a merge to construct the consolidated object
     * for presentation.
     *************************************************************************************/
    loadOrganData() {
        //Get the selected organ type object
        let selectedOrganObj = this.organTypes.find((t) => { return t.id === this.selectedOrganType; });
        //Reset the data references
        this.sparcRawOrganData = null;
        this.hubmapRawOrganData = null;
        this.mergedOrganData = null;
        this.mergedOrganIdx = {};
        this.countTotalAS = 0;
        this.countSparcAS = 0;
        this.countHubmapAS = 0;
        this.countSharedAS = 0;
        this.countSparcASLinks = 0;
        this.countHubmapASLinks = 0;
        this.countSharedASLinks = 0;
        //Update the data loading status
        this.dataLoadStatus = 'Loading';
        //Fetch sparc data if a data uri is available
        if (selectedOrganObj.sparcUri) {
            this.sparcAsctbAjaxService.fetchGenericJson(selectedOrganObj.sparcUri).subscribe({
                next: (response) => {
                    this.sparcRawOrganData = response;
                    if (this.hubmapRawOrganData != null) {
                        this.restructureRawOrganData(); // Execute merge only if hubmap data is also ready
                    }
                },
                error: (error) => { console.error(error); }
            });
        }
        //Fetch HuBMAP data if a data uri is available
        if (selectedOrganObj.hubmapUri) {
            this.sparcAsctbAjaxService.fetchGenericJson(selectedOrganObj.hubmapUri).subscribe({
                next: (response) => {
                    this.hubmapRawOrganData = response;
                    if (this.sparcRawOrganData != null) {
                        this.restructureRawOrganData(); // Execute merge only if sparc data is also ready
                    }
                },
                error: (error) => { console.error(error); }
            });
        }
    }
    /*************************************************************************************
     * Restructure sparc, hubmap data into forms useful for presentation
     *************************************************************************************/
    restructureRawOrganData() {
        //Create one consolidated merged object that conforms to the Organ interface
        this.mergeRawOrganData();
        //Create a derivative data structure suitable for table presentation
        this.generateTableArr();
        //Create node and edge datastructures for a force directed view
        this.generateForcedDirectedDatasets();
        //Update the data loading status
        this.dataLoadStatus = 'Ready';
        //Render data to console for inspection
        console.log("mergedOrganData:");
        console.dir(this.mergedOrganData);
        console.log("mergedOrganIndex:");
        console.dir(this.mergedOrganIdx);
        console.log("mergedTableArr:");
        console.dir(this.mergedTableArr);
    }
    /*************************************************************************************
     * Merge raw data objects from SPARC and HuBMAP into a consolidated reportable format
     *************************************************************************************/
    mergeRawOrganData() {
        /*************************************************************************************
         * Step 1: Initialize and index merged organ objects without edge data
         *************************************************************************************/
        //Construct an index on id:node for each sparc organ
        let sparcOrganIdx = {};
        this.indexSparcOrganTree(sparcOrganIdx, this.sparcRawOrganData);
        //Construct an index on id:node for each hubmap organ
        //Iterate over hubmap organs and initialize any that do not already exist
        //Hubmap data is represented as rows of objects with an anatomical structures array
        let hubmapOrganIdx = {};
        this.hubmapRawOrganData.data.forEach((rowObj) => {
            rowObj.anatomical_structures.forEach(organ => {
                //Hubmap anatomical structures have form {id: "UBERON:0000948", name: "heart", rdfs_label: "heart"}
                //Some Hubmap organs do not have an ID but do have a name. When this occurs, create a surrogate "smart" ID
                if (!organ.id || organ.id == '') {
                    organ.id = 'SURROGATE_ID:' + organ.name.toUpperCase();
                }
                hubmapOrganIdx[organ.id] = organ;
            });
        });
        //Iterate over sparc organs and initialize merged organ objects
        Object.values(sparcOrganIdx).forEach((sparcOrgan) => {
            let mergedOrgan = this.initializeMergedOrgan(sparcOrgan.id, sparcOrgan.name, sparcOrgan.label, true, (sparcOrgan.id in hubmapOrganIdx));
            this.mergedOrganIdx[mergedOrgan.id] = mergedOrgan;
        });
        //Iterate over hubmap organs and initialize any that do not already exist
        //Hubmap data is represented as rows of objects with an anatomical structures array
        Object.values(hubmapOrganIdx).forEach((hubmapOrgan) => {
            //If organ does not exist yet in the merged index, add it
            if (!this.mergedOrganIdx[hubmapOrgan.id]) {
                let mergedOrgan = this.initializeMergedOrgan(hubmapOrgan.id, hubmapOrgan.name, hubmapOrgan.rdfs_label, false, true);
                this.mergedOrganIdx[mergedOrgan.id] = mergedOrgan;
            }
        });
        //Point mergedOrganData at the root node
        this.mergedOrganData = this.mergedOrganIdx[this.sparcRawOrganData.id];
        /*************************************************************************************
         * Step 2: Add edge data to mergedOrganData
         *************************************************************************************/
        //Iterate over all merged organs and look up child references
        Object.values(this.mergedOrganIdx).forEach((mergedOrgan) => {
            //Add child references from sparc data if the organ is in the sparc set
            if (mergedOrgan.id in sparcOrganIdx) {
                let sparcOrgan = sparcOrganIdx[mergedOrgan.id];
                if (sparcOrgan.children && sparcOrgan.children.length > 0) {
                    sparcOrgan.children.forEach(childSparcOrgan => {
                        mergedOrgan.asSparcChildren.add(this.mergedOrganIdx[childSparcOrgan.id]);
                    });
                }
            }
            //Add child references from hubmap data
            this.hubmapRawOrganData.data.forEach((rowObj) => {
                //We need to walk the array c-style because children require index look-ahead
                for (let i = 0; i < rowObj.anatomical_structures.length; i++) {
                    let hubmapOrgan = rowObj.anatomical_structures[i];
                    //For each hubmap organ encountered, determine if there is a cell to the right of it, which contains the child
                    if (mergedOrgan.id === hubmapOrgan.id && i + 1 < rowObj.anatomical_structures.length) {
                        let hubmapChildOrgan = rowObj.anatomical_structures[i + 1];
                        mergedOrgan.asHubmapChildren.add(this.mergedOrganIdx[hubmapChildOrgan.id]);
                    }
                    //Add Cell types to the merged Organ from Hubmap
                    if (mergedOrgan.id === hubmapOrgan.id && rowObj.cell_types) {
                        rowObj.cell_types.forEach((hubmapCt) => {
                            //Pull the celltype reference from the index if it exists, otherwise initialize it
                            //Assign a surrogate id if it is missing
                            let ctId = hubmapCt.id || 'SURROGATE_ID:' + hubmapCt.name;
                            let cellType = (ctId in this.mergedCellTypeIdx) ?
                                this.mergedCellTypeIdx[ctId] :
                                this.initializeMergedCellType(ctId, hubmapCt.name, hubmapCt.rfs_label);
                            this.mergedCellTypeIdx[ctId] = cellType;
                            mergedOrgan.ctHubmapChildren.add(cellType);
                        });
                    }
                }
            });
            /*************************************************************************************
            * Step 3:At this point, asHubmapChildren and asSparcChildren are now populated with
            * the respective children of the two datasets. However, we need to populate
            * asSharedChildren with the intersection of these two sets, and subtract shared
            * children from each of the source-specific sets.
            **************************************************************************************/
            mergedOrgan.asAllChildren = new Set([...mergedOrgan.asHubmapChildren, ...mergedOrgan.asSparcChildren]);
            //Calculate intersection of the two sets and assign to sharedChildren
            mergedOrgan.asSharedChildren = new Set([...mergedOrgan.asHubmapChildren].filter(x => mergedOrgan.asSparcChildren.has(x)));
            //Calculate subtraction of sharedChildren from hubmapChildren 
            mergedOrgan.asHubmapChildren = new Set([...mergedOrgan.asHubmapChildren].filter(x => !mergedOrgan.asSharedChildren.has(x)));
            //Calculate subtraction of sharedChildren from sparcChildren 
            mergedOrgan.asSparcChildren = new Set([...mergedOrgan.asSparcChildren].filter(x => !mergedOrgan.asSharedChildren.has(x)));
            //Object.values(this.mergedOrganIdx).forEach((mergedOrgan:Organ) =>{
            //Update summary statistics
            this.countSparcASLinks += mergedOrgan.asSparcChildren.size;
            this.countHubmapASLinks += mergedOrgan.asHubmapChildren.size;
            this.countSharedASLinks += mergedOrgan.asSharedChildren.size;
            //TODO: construct cell-type sets
            //console.dir(mergedOrgan.asSparcChildren);
        });
        /*************************************************************************************
         * Step 4: Walk the merged organ tree and populate maxDepth, parents,
         * asAcyclicalChildren
         *************************************************************************************/
        this.augmentMergedOrganNode(this.mergedOrganData, null, new Set());
        //How many nodes have multiple parents?
        let multiParentArr = Object.values(this.mergedOrganIdx).filter((organ) => {
            return organ.asParents.size > 1;
        });
        console.log('multiple parents? ' + multiParentArr.length);
        console.dir(multiParentArr);
        //console.dir(this.countSparcASLinks)
        this.countTotalAS = Object.keys(this.mergedOrganIdx).length;
        this.countSparcAS = Object.values(this.mergedOrganIdx).filter((organ) => organ.sparcResident && !organ.hubmapResident).length;
        this.countHubmapAS = Object.values(this.mergedOrganIdx).filter((organ) => !organ.sparcResident && organ.hubmapResident).length;
        this.countSharedAS = Object.values(this.mergedOrganIdx).filter((organ) => organ.sparcResident && organ.hubmapResident).length;
    }
    /*************************************************************************************
     * Structure merged index data to table-ready array for UI presentation
     * Table will have the following columns:
     * ID | Name | Label | Shared Cell Types | HuBMAP Cell Types | Sparc Cell Types
     *************************************************************************************/
    generateTableArr() {
        this.mergedTableArr = [];
        Object.values(this.mergedOrganIdx).forEach((organ) => {
            this.mergedTableArr.push({
                id: organ.id,
                name: organ.name,
                label: organ.label,
                sharedCellTypes: [],
                hubmapCellTypes: Array.from(organ.ctHubmapChildren),
                sparcCellTypes: [],
                sparcResident: organ.sparcResident,
                hubmapResident: organ.hubmapResident
            });
        });
        //Sort by 1) HubmapResident, 2) SparcResident, 3) Name
        this.mergedTableArr.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.mergedTableArr.sort((a, b) => (a.sparcResident > b.sparcResident) ? -1 : ((b.sparcResident > a.sparcResident) ? 1 : 0));
        this.mergedTableArr.sort((a, b) => (a.hubmapResident > b.hubmapResident) ? -1 : ((b.hubmapResident > a.hubmapResident) ? 1 : 0));
    }
    /*************************************************************************************
     * Structure merged index data to force directed graph arrays for UI presentation
     *************************************************************************************/
    generateForcedDirectedDatasets() {
        this.fdNodes = []; // {id: "UBERON:00012345", group: 1, organ:{...}}
        this.fdEdges = []; // {source: "UBERON:00012345", target: "UBERON:00012346", value: 1}
        Object.values(this.mergedOrganIdx).forEach((organ) => {
            this.fdNodes.push({ id: organ.id, group: ((organ.sparcResident && organ.hubmapResident) ? 1 : (!organ.sparcResident && organ.hubmapResident) ? 2 : 3), organ: organ });
            organ.asAllChildren.forEach((childOrgan) => {
                this.fdEdges.push({ source: childOrgan.id, target: organ.id, value: 1 });
            });
        });
    }
    /*************************************************************************************
     * Depth-first walk of sparc organ tree datastructure to construct an id:organ index
     *************************************************************************************/
    indexSparcOrganTree(idx, node) {
        idx[node.id] = node;
        if (node.children && node.children.length > 0) {
            node.children.forEach(organ => {
                this.indexSparcOrganTree(idx, organ);
            });
        }
    }
    /*************************************************************************************
     * Depth-first walk of merged organ tree to populate maxDepth, asParents, and
     * asAcyclicalChildren
     *************************************************************************************/
    augmentMergedOrganNode(node, parent, visitedSet) {
        visitedSet.add(node); //Add this node to the visited set so that we do not revisit
        if (parent) {
            //Find parent with maximum depth. Add as child of that parent. Remove from children of other parents
            let deepestParent = Array.from(node.asParents).reduce(function (prev, current) {
                return (prev.maxDepth > current.maxDepth) ? prev : current;
            });
            //Only deepest parent may claim this node as its child
            deepestParent.asAcyclicalChildren.add(node);
            node.asParents.forEach((parent) => {
                if (parent !== deepestParent) {
                    parent.asAcyclicalChildren.delete(node);
                }
            });
            node.maxDepth = deepestParent.maxDepth + 1;
        }
        else { //Root node gets depth 0
            node.maxDepth = 0;
        }
        //Iterate on next node
        node.asAllChildren.forEach((child) => {
            child.asParents.add(node);
            if (!visitedSet.has(child)) {
                this.augmentMergedOrganNode(child, node, visitedSet);
            }
        });
    }
    /*************************************************************************************
     * Utility function to create an object conforming to the Organ interface
     *************************************************************************************/
    initializeMergedOrgan(id, name, label, sparcResident, hubmapResident) {
        return {
            id: id,
            name: name,
            label: label,
            maxDepth: -1,
            sparcResident: sparcResident,
            hubmapResident: hubmapResident,
            //Initialize, but do not assign the children sets yet
            asParents: new Set(),
            asAcyclicalChildren: new Set(),
            asAllChildren: new Set(),
            asSparcChildren: new Set(),
            asHubmapChildren: new Set(),
            asSharedChildren: new Set(),
            ctSparcChildren: new Set(),
            ctHubmapChildren: new Set(),
            ctSharedChildren: new Set()
        };
    }
    /*************************************************************************************
     * Utility function to create an object conforming to the CellType interface
     *************************************************************************************/
    initializeMergedCellType(id, name, label) {
        return {
            id: id,
            name: name,
            label: label
        };
    }
}
AsctbCompareService.ɵfac = function AsctbCompareService_Factory(t) { return new (t || AsctbCompareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ajax_sparc_asctb_ajax_service__WEBPACK_IMPORTED_MODULE_1__["SparcAsctbAjaxService"])); };
AsctbCompareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AsctbCompareService, factory: AsctbCompareService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JWFI":
/*!*********************************************************************!*\
  !*** ./src/app/components/asctb-compare/asctb-compare.component.ts ***!
  \*********************************************************************/
/*! exports provided: AsctbCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsctbCompareComponent", function() { return AsctbCompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/asctb-compare.service */ "HyX0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _asctb_compare_sidebar_asctb_compare_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asctb-compare-sidebar/asctb-compare-sidebar.component */ "uR3k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _asctb_scatterplot_view_asctb_scatterplot_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asctb-scatterplot-view/asctb-scatterplot-view.component */ "duBh");
/* harmony import */ var _asctb_table_view_asctb_table_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asctb-table-view/asctb-table-view.component */ "4CIt");
/* harmony import */ var _asctb_tree_view_asctb_tree_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asctb-tree-view/asctb-tree-view.component */ "EpjL");
/* harmony import */ var _asctb_treemap_view_asctb_treemap_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asctb-treemap-view/asctb-treemap-view.component */ "R+5e");









function AsctbCompareComponent_app_asctb_scatterplot_view_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-asctb-scatterplot-view", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fdNodes", ctx_r0.asctbCompareService.fdNodes)("fdEdges", ctx_r0.asctbCompareService.fdEdges);
} }
function AsctbCompareComponent_app_asctb_table_view_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-asctb-table-view");
} }
function AsctbCompareComponent_app_asctb_tree_view_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-asctb-tree-view", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("asTree", ctx_r2.asctbCompareService.mergedOrganData);
} }
function AsctbCompareComponent_app_asctb_treemap_view_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-asctb-treemap-view", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("asTree", ctx_r3.asctbCompareService.mergedOrganData);
} }
class AsctbCompareComponent {
    constructor(asctbCompareService) {
        this.asctbCompareService = asctbCompareService;
    }
    ngOnInit() {
    }
}
AsctbCompareComponent.ɵfac = function AsctbCompareComponent_Factory(t) { return new (t || AsctbCompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_1__["AsctbCompareService"])); };
AsctbCompareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsctbCompareComponent, selectors: [["app-asctb-compare"]], decls: 7, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "start start"], ["fxFlex", ""], [3, "fdNodes", "fdEdges", 4, "ngIf"], [4, "ngIf"], [3, "asTree", 4, "ngIf"], [3, "fdNodes", "fdEdges"], [3, "asTree"]], template: function AsctbCompareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-asctb-compare-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AsctbCompareComponent_app_asctb_scatterplot_view_3_Template, 1, 2, "app-asctb-scatterplot-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AsctbCompareComponent_app_asctb_table_view_4_Template, 1, 0, "app-asctb-table-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AsctbCompareComponent_app_asctb_tree_view_5_Template, 1, 1, "app-asctb-tree-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AsctbCompareComponent_app_asctb_treemap_view_6_Template, 1, 1, "app-asctb-treemap-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asctbCompareService.selectedViewType == "graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asctbCompareService.selectedViewType == "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asctbCompareService.selectedViewType == "tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asctbCompareService.selectedViewType == "treemap");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _asctb_compare_sidebar_asctb_compare_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["AsctbCompareSidebarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _asctb_scatterplot_view_asctb_scatterplot_view_component__WEBPACK_IMPORTED_MODULE_5__["AsctbScatterplotViewComponent"], _asctb_table_view_asctb_table_view_component__WEBPACK_IMPORTED_MODULE_6__["AsctbTableViewComponent"], _asctb_tree_view_asctb_tree_view_component__WEBPACK_IMPORTED_MODULE_7__["AsctbTreeViewComponent"], _asctb_treemap_view_asctb_treemap_view_component__WEBPACK_IMPORTED_MODULE_8__["AsctbTreemapViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2N0Yi1jb21wYXJlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ONHi":
/*!***********************************************************!*\
  !*** ./src/app/services/ajax/sparc-asctb-ajax.service.ts ***!
  \***********************************************************/
/*! exports provided: SparcAsctbAjaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparcAsctbAjaxService", function() { return SparcAsctbAjaxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


/*******************************************************************************************
 * @Author Samuel O'Blenes
 * @Date 7/15/21
 * This service retrieves data from remote sources.
 *******************************************************************************************/
class SparcAsctbAjaxService {
    constructor(http) {
        this.http = http;
    }
    /**********************************************************************
     * Returns a promise on the ajax call response
     **********************************************************************/
    fetchGenericJson(uri) {
        return this.http.get(uri, { responseType: 'json' });
    }
    /***************************************************************************************************
     * Execute a request against scigraph for partonomy data in relationship to the provided identifier
     * Returns a promise on the ajax call response
     * relationshipType: http://purl.obolibrary.org/obo/BFO_0000050
     ***************************************************************************************************/
    fetchSparcPartonomy(organIdentifier, relationshipType) {
        let uri = 'https://scicrunch.org/api/1/scigraph/graph/neighbors/'
            + organIdentifier
            + '?depth=8&blankNodes=false&relationshipType='
            + relationshipType
            + '&direction=INCOMING&entail=false'
            + 'key=SB5jsflPjsQcmfPqB1zS3XuDNx3sfd19';
        return this.http.get(uri, { responseType: 'json' });
    }
}
SparcAsctbAjaxService.ɵfac = function SparcAsctbAjaxService_Factory(t) { return new (t || SparcAsctbAjaxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SparcAsctbAjaxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SparcAsctbAjaxService, factory: SparcAsctbAjaxService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "R+5e":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/asctb-compare/asctb-treemap-view/asctb-treemap-view.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AsctbTreemapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsctbTreemapViewComponent", function() { return AsctbTreemapViewComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/asctb-compare.service */ "HyX0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");




class AsctbTreemapViewComponent {
    constructor(asctbCompareService) {
        this.asctbCompareService = asctbCompareService;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.generateTreemap();
    }
    generateTreemap() {
        //Short-circuit when no data is available
        if (!this.asTree)
            return;
        // Set the dimensions and margins of the diagram
        var element = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#treemap-div').node();
        let wWidth = element.getBoundingClientRect().width;
        let wHeight = element.getBoundingClientRect().height;
        let heightDynamicScale = Math.ceil((this.asctbCompareService.countTotalAS / 50) * element.getBoundingClientRect().height);
        wHeight = (wHeight > heightDynamicScale) ? wHeight : heightDynamicScale;
        var margin = { top: 0, right: 90, bottom: 0, left: 90 }, width = wWidth - margin.left - margin.right, height = wHeight - margin.top - margin.bottom;
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]("#treemap-div > *").remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#treemap-div").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate("
            + margin.left + "," + margin.top + ")");
        var i = 0, duration = 750, root;
        // declares a tree layout and assigns the size
        var treemap = d3__WEBPACK_IMPORTED_MODULE_0__["tree"]().size([height, width]);
        // Assigns parent, children, height, depth
        root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](this.asTree, function (d) {
            return d.asAcyclicalChildren;
            //return new Set([...d.asHubmapChildren, ...d.asSparcChildren, ...d.asSharedChildren]);
        });
        root.x0 = height / 2;
        root.y0 = 0;
        update(root);
        function update(source) {
            // Assigns the x and y position for the nodes
            var treeData = treemap(root);
            // Compute the new tree layout.
            var nodes = treeData.descendants(), links = treeData.descendants().slice(1);
            // Normalize for fixed-depth.
            nodes.forEach(function (d) { d.y = d.depth * 180; });
            // ****************** Nodes section ***************************
            // Update the nodes...
            var node = svg.selectAll('g.node')
                .data(nodes, function (d) { return d.id || (d.id = ++i); });
            // Enter any new modes at the parent's previous position.
            var nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
                .on('click', click);
            // Shared = white
            // Hubmap = blue
            // Sparc = olive
            let nodeFillColor = (node) => {
                if (node.data.sparcResident && node.data.hubmapResident) {
                    return "#fff";
                }
                else if (!node.data.sparcResident && node.data.hubmapResident) {
                    return "rgb(144, 158, 121)";
                }
                else {
                    return "rgb(69, 59, 134)";
                }
            };
            // Add Circle for the nodes
            nodeEnter.append('circle')
                .attr('class', (d) => {
                let classStr = 'node';
                if (!d.data.sparcResident && d.data.hubmapResident) {
                    classStr += " hubmap";
                }
                else if (d.data.sparcResident && !d.data.hubmapResident) {
                    classStr += " sparc";
                }
                return classStr;
            })
                .attr('r', 1e-6)
                .style("fill", function (d) {
                return nodeFillColor(d);
            });
            // Add labels for the nodes
            nodeEnter.append('text')
                .attr("dy", ".35em")
                .attr("x", function (d) {
                return d.children || d._children ? -13 : 13;
            })
                .attr("text-anchor", function (d) {
                return d.children || d._children ? "end" : "start";
            })
                .text(function (d) { return d.data.name; });
            // UPDATE
            var nodeUpdate = nodeEnter.merge(node);
            // Transition to the proper position for the node
            nodeUpdate.transition()
                .duration(duration)
                .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });
            // Update the node attributes and style
            nodeUpdate.select('circle.node')
                .attr('r', 10)
                .style("fill", function (d) {
                return nodeFillColor(d);
            })
                .attr('cursor', 'pointer');
            // Remove any exiting nodes
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
                .remove();
            // On exit reduce the node circles size to 0
            nodeExit.select('circle')
                .attr('r', 1e-6);
            // On exit reduce the opacity of text labels
            nodeExit.select('text')
                .style('fill-opacity', 1e-6);
            // ****************** links section ***************************
            console.log('links');
            console.dir(links);
            var expandedLinks = [];
            links.forEach(node => {
                if (node.data.asParents.size > 1) {
                    console.log('look for: ' + node.data.name + ", " + node.data.id);
                }
                node.data.asParents.forEach(parent => {
                    let nextNode = Object.assign({}, node);
                    nextNode.parent = parent;
                    expandedLinks.push(node);
                });
            });
            console.log("expandedLinks");
            console.dir(expandedLinks);
            // Update the links...
            var link = svg.selectAll('path.link')
                .data(expandedLinks, function (d) { return d.id; });
            var linkEnter = link.enter().insert('path', "g")
                .attr("class", function (d) {
                let classesStr = "link";
                if (d.parent.data.asSparcChildren.has(d.data)) {
                    classesStr += " sparc";
                }
                if (d.parent.data.asHubmapChildren.has(d.data)) {
                    classesStr += " hubmap";
                }
                return classesStr;
            })
                .attr('d', function (d) {
                var o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            });
            // Update the links...
            /*
            var link = svg.selectAll('path.link')
              .data(links, function(d) { return d.id; });
      
            var linkEnter = link.enter().insert('path', "g")
              .attr("class", function(d){
                let classesStr = "link";
                if(d.parent.data.asSparcChildren.has(d.data)){ classesStr += " sparc" }
                if(d.parent.data.asHubmapChildren.has(d.data)){ classesStr += " hubmap" }
                return classesStr;
              })
              .attr('d', function(d){
                var o = {x: source.x0, y: source.y0}
                return diagonal(o, o)
              });
            */
            // UPDATE
            var linkUpdate = linkEnter.merge(link);
            // Transition back to the parent element position
            linkUpdate.transition()
                .duration(duration)
                .attr('d', function (d) { return diagonal(d, d.parent); });
            // Remove any exiting links
            var linkExit = link.exit().transition()
                .duration(duration)
                .attr('d', function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
                .remove();
            // Store the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
            // Creates a curved (diagonal) path from parent to the child nodes
            function diagonal(s, d) {
                let path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`;
                return path;
            }
            // Toggle children on click.
            function click(event, d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                }
                else {
                    d.children = d._children;
                    d._children = null;
                }
                update(d);
            }
        }
    }
}
AsctbTreemapViewComponent.ɵfac = function AsctbTreemapViewComponent_Factory(t) { return new (t || AsctbTreemapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_2__["AsctbCompareService"])); };
AsctbTreemapViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AsctbTreemapViewComponent, selectors: [["app-asctb-treemap-view"]], inputs: { asTree: "asTree" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "treemap-div", "fxFlex", "", 1, "fixed-stage-height", "background-white"]], template: function AsctbTreemapViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], styles: [".background-white[_ngcontent-%COMP%]{background:#fff;}\n\n.graph-height[_ngcontent-%COMP%]{\n    min-height:calc(100vh - 64px);\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY3RiLXRyZWVtYXAtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixlQUFlLENBQUM7O0FBRWxDO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhc2N0Yi10cmVlbWFwLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLXdoaXRle2JhY2tncm91bmQ6I2ZmZjt9XG5cbi5ncmFwaC1oZWlnaHR7XG4gICAgbWluLWhlaWdodDpjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/app.component */ "9c4+");
/* harmony import */ var _components_mast_mast_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/mast/mast.component */ "h/Un");
/* harmony import */ var _components_asctb_compare_asctb_compare_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/asctb-compare/asctb-compare.component */ "JWFI");
/* harmony import */ var _components_asctb_compare_asctb_compare_sidebar_asctb_compare_sidebar_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/asctb-compare/asctb-compare-sidebar/asctb-compare-sidebar.component */ "uR3k");
/* harmony import */ var _components_asctb_compare_asctb_table_view_asctb_table_view_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/asctb-compare/asctb-table-view/asctb-table-view.component */ "4CIt");
/* harmony import */ var _components_asctb_compare_asctb_tree_view_asctb_tree_view_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/asctb-compare/asctb-tree-view/asctb-tree-view.component */ "EpjL");
/* harmony import */ var _components_asctb_compare_asctb_scatterplot_view_asctb_scatterplot_view_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/asctb-compare/asctb-scatterplot-view/asctb-scatterplot-view.component */ "duBh");
/* harmony import */ var _components_asctb_compare_asctb_treemap_view_asctb_treemap_view_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/asctb-compare/asctb-treemap-view/asctb-treemap-view.component */ "R+5e");
/* harmony import */ var _components_asctb_compare_color_legend_color_legend_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/asctb-compare/color-legend/color-legend.component */ "nRCt");
/* harmony import */ var _components_asctb_generate_asctb_generate_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/asctb-generate/asctb-generate.component */ "oj/f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/core */ "fXoL");




/* Directives */
//import { VegaliteDirective } from './directives/vegalite.directive';
/* Material components */











































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_35__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            /* Material modules */
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_36__["AppComponent"],
        _components_mast_mast_component__WEBPACK_IMPORTED_MODULE_37__["MastComponent"],
        _components_asctb_compare_asctb_compare_component__WEBPACK_IMPORTED_MODULE_38__["AsctbCompareComponent"],
        _components_asctb_compare_asctb_compare_sidebar_asctb_compare_sidebar_component__WEBPACK_IMPORTED_MODULE_39__["AsctbCompareSidebarComponent"],
        _components_asctb_compare_asctb_table_view_asctb_table_view_component__WEBPACK_IMPORTED_MODULE_40__["AsctbTableViewComponent"],
        _components_asctb_compare_asctb_tree_view_asctb_tree_view_component__WEBPACK_IMPORTED_MODULE_41__["AsctbTreeViewComponent"],
        _components_asctb_compare_asctb_scatterplot_view_asctb_scatterplot_view_component__WEBPACK_IMPORTED_MODULE_42__["AsctbScatterplotViewComponent"],
        _components_asctb_compare_asctb_treemap_view_asctb_treemap_view_component__WEBPACK_IMPORTED_MODULE_43__["AsctbTreemapViewComponent"],
        _components_asctb_compare_color_legend_color_legend_component__WEBPACK_IMPORTED_MODULE_44__["ColorLegendComponent"],
        _components_asctb_generate_asctb_generate_component__WEBPACK_IMPORTED_MODULE_45__["AsctbGenerateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_35__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        /* Material modules */
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"]] }); })();


/***/ }),

/***/ "duBh":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/asctb-compare/asctb-scatterplot-view/asctb-scatterplot-view.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AsctbScatterplotViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsctbScatterplotViewComponent", function() { return AsctbScatterplotViewComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/asctb-compare.service */ "HyX0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");




class AsctbScatterplotViewComponent {
    constructor(asctbCompareService) {
        this.asctbCompareService = asctbCompareService;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.generateForceDirected();
    }
    generateForceDirected() {
        //Short-circuit when no data is available
        if (!this.fdNodes || !this.fdEdges || !this.asctbCompareService)
            return;
        // Set the dimensions and margins of the diagram
        var element = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#forcedirected-div').node();
        let wWidth = element.getBoundingClientRect().width;
        let wHeight = element.getBoundingClientRect().height;
        //let heightDynamicScale = Math.ceil((this.asctbCompareService.countTotalAS / 50) * element.getBoundingClientRect().height);
        //wHeight = (wHeight > heightDynamicScale)?wHeight: heightDynamicScale;
        this.margin = { top: 80, right: 90, bottom: 60, left: 90 };
        this.width = wWidth - this.margin.right - this.margin.left;
        this.height = wHeight - this.margin.top - this.margin.bottom;
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]("#forcedirected-div > *").remove();
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#forcedirected-div').append('svg')
            .attr('width', this.width + this.margin.right + this.margin.left)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        var simulation = d3__WEBPACK_IMPORTED_MODULE_0__["forceSimulation"]()
            .force("link", d3__WEBPACK_IMPORTED_MODULE_0__["forceLink"]().id(function (d) { return d.id; }))
            .force("charge", d3__WEBPACK_IMPORTED_MODULE_0__["forceManyBody"]())
            .force("center", d3__WEBPACK_IMPORTED_MODULE_0__["forceCenter"](this.width / 2, this.height / 2));
        var edgeColor = (node) => {
            if (node.group == 1) {
                return "#ccc";
            } //Both
            if (node.group == 2) {
                return "rgb(144, 158, 121)";
            } //Hubmap
            if (node.group == 3) {
                return "darkslateblue";
            } //Sparc
        };
        /*
            .attr("class", "links")
            .attr('class', function(d){
              let classesStr = "link";
              if(d.parent.data.asSparcChildren.has(d.data)){ classesStr += " sparc" }
              if(d.parent.data.asHubmapChildren.has(d.data)){ classesStr += " hubmap" }
              return classesStr;
            })
            .attr('class', function(d){
                console.dir(d);
                let parentOrgan = this.asctbCompareService.mergedOrganIdx[d.target];
                let childOrgan = this.asctbCompareService.mergedOrganIdx[d.source];
                let classesStr = "link";
                if(parentOrgan.asSparcChildren.has(childOrgan)){ classesStr += " sparc" }
                if(parentOrgan.asHubmapChildren.has(childOrgan)){ classesStr += " hubmap" }
                return classesStr;
              })
          */
        var link = this.svg.append("g")
            .attr("class", "link")
            .selectAll("line")
            .data(this.fdEdges)
            .enter().append("line")
            .attr("stroke-width", function (d) { return Math.sqrt(d.value); });
        var nodeColor = (node) => {
            if (node.group == 1) {
                return "#ccc";
            } //Both
            if (node.group == 2) {
                return "rgb(144, 158, 121)";
            } //Hubmap
            if (node.group == 3) {
                return "darkslateblue";
            } //Sparc
        };
        var g = this.svg.append("g")
            .attr("class", "nodes");
        var node_g = g
            .selectAll("circle")
            .data(this.fdNodes)
            .enter().append("g");
        var node = node_g.append("circle")
            .attr("r", 5)
            .attr("fill", function (d) { return nodeColor(d); });
        //this.svg.selectAll("g.nodes")
        node_g
            .append("text")
            .text(function (d) { return d.organ.name; })
            .attr('class', 'fd-text')
            .attr('x', 6)
            .attr('y', 3);
        node.append("title")
            .text(function (d) { return d.id; });
        simulation
            .nodes(this.fdNodes)
            .on("tick", ticked);
        simulation.force("link")
            .links(this.fdEdges);
        function ticked() {
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node_g.attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        }
        //add zoom capabilities 
        var zoom_handler = d3__WEBPACK_IMPORTED_MODULE_0__["zoom"]()
            .on("zoom", (event, d) => {
            this.svg.attr("transform", event.transform);
        });
        zoom_handler(d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#forcedirected-div'));
        //Node dragging
        node_g.call(d3__WEBPACK_IMPORTED_MODULE_0__["drag"]()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
        function dragstarted(event, d) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).classed("fixed", d.fixed = true);
            if (!event.active)
                simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }
        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }
        function dragended(event) {
            if (!event.active)
                simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
    }
}
AsctbScatterplotViewComponent.ɵfac = function AsctbScatterplotViewComponent_Factory(t) { return new (t || AsctbScatterplotViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_2__["AsctbCompareService"])); };
AsctbScatterplotViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AsctbScatterplotViewComponent, selectors: [["app-asctb-scatterplot-view"]], inputs: { fdNodes: "fdNodes", fdEdges: "fdEdges" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["id", "forcedirected-div", "fxFlex", "", 1, "fixed-stage-height", "noscroll", "background-white"]], template: function AsctbScatterplotViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], styles: [".background-white[_ngcontent-%COMP%]{background:#fff;}\n\n.graph-height[_ngcontent-%COMP%]{\n    height:calc(100vh - 70px);\n    overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY3RiLXNjYXR0ZXJwbG90LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsZUFBZSxDQUFDOztBQUVsQztJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXNjdGItc2NhdHRlcnBsb3Qtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtd2hpdGV7YmFja2dyb3VuZDojZmZmO31cblxuLmdyYXBoLWhlaWdodHtcbiAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn0iXX0= */"] });


/***/ }),

/***/ "h/Un":
/*!***************************************************!*\
  !*** ./src/app/components/mast/mast.component.ts ***!
  \***************************************************/
/*! exports provided: MastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastComponent", function() { return MastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");








const _c0 = function (a0) { return { "selected": a0 }; };
class MastComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
MastComponent.ɵfac = function MastComponent_Factory(t) { return new (t || MastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MastComponent, selectors: [["app-mast"]], decls: 13, vars: 6, consts: [["mat-raised-button", "", "routerLink", "asctb-compare", 1, "margin-left-100", 3, "ngClass"], ["mat-raised-button", "", "routerLink", "asctb-generate", 1, "margin-left-15", 3, "ngClass"], ["fxFlex", ""]], template: function MastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HuBMAP-SPARC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "collections_bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Partonomy Comparison ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " ASCT+B File Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.router.url === "/asctb-compare" || ctx.router.url === "/"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.router.url === "/asctb-generate"));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"]], styles: [".margin-left-100[_ngcontent-%COMP%]{margin-left: 100px;}\n.margin-left-15[_ngcontent-%COMP%]{margin-left: 15px;}\n.selected[_ngcontent-%COMP%]{background: rgba(0, 139, 139, 0.7);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsa0JBQWtCLENBQUM7QUFDcEMsZ0JBQWdCLGlCQUFpQixDQUFDO0FBRWxDLFVBQVUsa0NBQWtDLENBQUMiLCJmaWxlIjoibWFzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1sZWZ0LTEwMHttYXJnaW4tbGVmdDogMTAwcHg7fVxuLm1hcmdpbi1sZWZ0LTE1e21hcmdpbi1sZWZ0OiAxNXB4O31cblxuLnNlbGVjdGVke2JhY2tncm91bmQ6IHJnYmEoMCwgMTM5LCAxMzksIDAuNyk7fSJdfQ== */"] });


/***/ }),

/***/ "nRCt":
/*!*********************************************************************************!*\
  !*** ./src/app/components/asctb-compare/color-legend/color-legend.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ColorLegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorLegendComponent", function() { return ColorLegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


class ColorLegendComponent {
    constructor() { }
    ngOnInit() {
    }
}
ColorLegendComponent.ɵfac = function ColorLegendComponent_Factory(t) { return new (t || ColorLegendComponent)(); };
ColorLegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorLegendComponent, selectors: [["app-color-legend"]], decls: 15, vars: 0, consts: [["fxLayout", "column", "fxLayoutAlign", "start start"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "full-width"], [1, "big-text", "bold"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "margin-left-15", "margin-top-5"], [1, "sparc-box", "color-box"], ["width", "50px", "src", "assets/img/sparc-logo.svg", 1, "sparc-logo", "margin-left-5"], [1, "hubmap-box", "color-box"], ["width", "50px", "src", "assets/img/hubmap-logo.svg", 1, "hubmap-logo", "margin-left-5"], [1, "shared-box", "color-box"], ["width", "50px", "src", "assets/img/sparc-logo.svg", 1, "sparc-logo"]], template: function ColorLegendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: [".big-text[_ngcontent-%COMP%]{ font-size: 18px; }\n.margin-left-5[_ngcontent-%COMP%]{ margin-left: 5px; }\n.margin-left-15[_ngcontent-%COMP%]{ margin-left: 15px; }\n.margin-top-5[_ngcontent-%COMP%]{ margin-top:5px; }\n.bold[_ngcontent-%COMP%]{font-weight:bold;}\n.full-width[_ngcontent-%COMP%]{width:100%;}\n.color-box[_ngcontent-%COMP%]{\n    width:20px;\n    height:20px;\n}\n.shared-box[_ngcontent-%COMP%]{ \n    width:14px;\n    height:14px;\n    background-color: #ccc; \n    border: 3px solid steelblue;\n}\n.sparc-box[_ngcontent-%COMP%]{ background-color: darkslateblue; }\n.hubmap-box[_ngcontent-%COMP%]{ background-color: rgb(144, 158, 121); }\n.sparc-logo[_ngcontent-%COMP%]{\n    background-color:#fff; \n    padding: 5px 5px 5px 5px; \n    border-radius: 5px;\n}\n.hubmap-logo[_ngcontent-%COMP%]{\n    background-color:#000; \n    padding: 12px 5px 12px 5px; \n    border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLWxlZ2VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsZUFBZSxFQUFFO0FBQzVCLGdCQUFnQixnQkFBZ0IsRUFBRTtBQUNsQyxpQkFBaUIsaUJBQWlCLEVBQUU7QUFDcEMsZUFBZSxjQUFjLEVBQUU7QUFDL0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QixZQUFZLFVBQVUsQ0FBQztBQUV2QjtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUNBLFlBQVksK0JBQStCLEVBQUU7QUFDN0MsYUFBYSxvQ0FBb0MsRUFBRTtBQUduRDtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjb2xvci1sZWdlbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWctdGV4dHsgZm9udC1zaXplOiAxOHB4OyB9XG4ubWFyZ2luLWxlZnQtNXsgbWFyZ2luLWxlZnQ6IDVweDsgfVxuLm1hcmdpbi1sZWZ0LTE1eyBtYXJnaW4tbGVmdDogMTVweDsgfVxuLm1hcmdpbi10b3AtNXsgbWFyZ2luLXRvcDo1cHg7IH1cbi5ib2xke2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuLmZ1bGwtd2lkdGh7d2lkdGg6MTAwJTt9XG5cbi5jb2xvci1ib3h7XG4gICAgd2lkdGg6MjBweDtcbiAgICBoZWlnaHQ6MjBweDtcbn1cblxuLnNoYXJlZC1ib3h7IFxuICAgIHdpZHRoOjE0cHg7XG4gICAgaGVpZ2h0OjE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgXG4gICAgYm9yZGVyOiAzcHggc29saWQgc3RlZWxibHVlO1xufVxuLnNwYXJjLWJveHsgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTsgfVxuLmh1Ym1hcC1ib3h7IGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDE1OCwgMTIxKTsgfVxuXG5cbi5zcGFyYy1sb2dve1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjsgXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaHVibWFwLWxvZ297XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDAwOyBcbiAgICBwYWRkaW5nOiAxMnB4IDVweCAxMnB4IDVweDsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "oj/f":
/*!***********************************************************************!*\
  !*** ./src/app/components/asctb-generate/asctb-generate.component.ts ***!
  \***********************************************************************/
/*! exports provided: AsctbGenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsctbGenerateComponent", function() { return AsctbGenerateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/asctb-compare.service */ "HyX0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function AsctbGenerateComponent_mat_form_field_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sparc Organ Identifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsctbGenerateComponent_mat_form_field_15_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selections.inputOrganIdentifier = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selections.inputOrganIdentifier);
} }
function AsctbGenerateComponent_mat_form_field_16_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", organType_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", organType_r5.name, " ");
} }
function AsctbGenerateComponent_mat_form_field_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select an organ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsctbGenerateComponent_mat_form_field_16_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selections.selectedOrgan = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AsctbGenerateComponent_mat_form_field_16_mat_option_4_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selections.selectedOrgan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.asctbCompareService.organTypes);
} }
class AsctbGenerateComponent {
    constructor(asctbCompareService) {
        this.asctbCompareService = asctbCompareService;
        this.selections = {
            chooseFromList: true,
            inputOrganIdentifier: null,
            selectedOrgan: null //Organ chosen from the select control
        };
    }
    ngOnInit() {
        if (this.asctbCompareService.organTypes && this.asctbCompareService.organTypes.length > 0) {
            this.selections.selectedOrgan = this.asctbCompareService.organTypes[0];
        }
    }
    exportClick() {
        console.log('export click event');
        let organIdentifier = (this.selections.chooseFromList) ?
            this.selections.selectedOrgan.id : this.selections.inputOrganIdentifier;
        let fileName = organIdentifier + ".csv";
        //Short circuit if nothing was selected
        if (!organIdentifier)
            return;
        //@TODO
        this.downloadFile(fileName);
    }
    /**************************************************************************************************************************
     * Utility function to download a file. Adapted from:
     * https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
     **************************************************************************************************************************/
    downloadFile(fileName) {
        const rows = [
            ["name1", "city1", "some other info"],
            ["name2", "city2", "more info"]
        ];
        let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_data.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
    }
}
AsctbGenerateComponent.ɵfac = function AsctbGenerateComponent_Factory(t) { return new (t || AsctbGenerateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_1__["AsctbCompareService"])); };
AsctbGenerateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsctbGenerateComponent, selectors: [["app-asctb-generate"]], decls: 21, vars: 3, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around center"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "margin-top-25", "half-screen"], ["target", "_new", "href", "https://hubmapconsortium.github.io/ccf-asct-reporter/"], ["fxLayout", "row", "fxLayoutAlign", "start start"], ["name", "chooseFromList", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["appearance", "outline", 4, "ngIf"], ["appearance", "fill", "appearance", "outline", "class", "margin-top-10", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "margin-left-10", 3, "click"], ["appearance", "outline"], ["matInput", "", "placeholder", "Ex. UBERON:0000948", "name", "inputOrganIdentifier", "required", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", "appearance", "outline", 1, "margin-top-10"], ["name", "selectOrgan", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AsctbGenerateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ASCT+B File Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " HuBMAP Anatomical Structures, Cell Types, and Biomarkers (ASCT+B) tables express the hierarchy of the anatomical human body structures, resident cell types, and identification biomarkers. This module facilitates exporting SPARC partonomy data into the interoperable ASCT+B format which is compatible with HuBMAP consortium infrastructure, such as the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ASCT+B Reporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsctbGenerateComponent_Template_mat_checkbox_ngModelChange_12_listener($event) { return ctx.selections.chooseFromList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Choose organ from list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AsctbGenerateComponent_mat_form_field_15_Template, 4, 1, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AsctbGenerateComponent_mat_form_field_16_Template, 5, 2, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsctbGenerateComponent_Template_button_click_17_listener() { return ctx.exportClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selections.chooseFromList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selections.chooseFromList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selections.chooseFromList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: [".margin-top-25[_ngcontent-%COMP%]{ margin-top:25px; }\n.margin-top-10[_ngcontent-%COMP%]{ margin-top:10px; }\n.margin-left-10[_ngcontent-%COMP%]{ margin-left:10px;}\n.half-screen[_ngcontent-%COMP%]{ width: 50vw;}\n.mat-card[_ngcontent-%COMP%]{ background-color: #666;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY3RiLWdlbmVyYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGVBQWUsRUFBRTtBQUNqQyxnQkFBZ0IsZUFBZSxFQUFFO0FBQ2pDLGlCQUFpQixnQkFBZ0IsQ0FBQztBQUVsQyxjQUFjLFdBQVcsQ0FBQztBQUUxQixXQUFXLHNCQUFzQixDQUFDIiwiZmlsZSI6ImFzY3RiLWdlbmVyYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXRvcC0yNXsgbWFyZ2luLXRvcDoyNXB4OyB9XG4ubWFyZ2luLXRvcC0xMHsgbWFyZ2luLXRvcDoxMHB4OyB9XG4ubWFyZ2luLWxlZnQtMTB7IG1hcmdpbi1sZWZ0OjEwcHg7fVxuXG4uaGFsZi1zY3JlZW57IHdpZHRoOiA1MHZ3O31cblxuLm1hdC1jYXJkeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O30iXX0= */"] });


/***/ }),

/***/ "uR3k":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/asctb-compare/asctb-compare-sidebar/asctb-compare-sidebar.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AsctbCompareSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsctbCompareSidebarComponent", function() { return AsctbCompareSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/asctb-compare.service */ "HyX0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _color_legend_color_legend_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../color-legend/color-legend.component */ "nRCt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");














function AsctbCompareSidebarComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organ_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", organ_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organ_r2.name);
} }
function AsctbCompareSidebarComponent_mat_spinner_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 16);
} }
const _c0 = function (a0, a1) { return { "color-green": a0, "color-maroon": a1 }; };
class AsctbCompareSidebarComponent {
    constructor(asctbCompareService) {
        this.asctbCompareService = asctbCompareService;
    }
    ngOnInit() {
        //Execute initial load after render
        this.asctbCompareService.loadOrganData();
    }
}
AsctbCompareSidebarComponent.ɵfac = function AsctbCompareSidebarComponent_Factory(t) { return new (t || AsctbCompareSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_asctb_compare_service__WEBPACK_IMPORTED_MODULE_1__["AsctbCompareService"])); };
AsctbCompareSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsctbCompareSidebarComponent, selectors: [["app-asctb-compare-sidebar"]], decls: 81, vars: 22, consts: [["fxLayout", "column", "fxLayoutAlign", "start center", "fxFlex", "", 1, "sidebar"], ["appearance", "outline"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "full-width", 3, "ngModel", "multiple", "ngModelChange"], ["selected", "", 3, "value"], ["matListIcon", ""], [3, "value"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "sidebar-card"], [1, "sidebar-table"], ["colspan", "2"], [1, "border-bottom"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "bold"], ["fxFlex", ""], ["diameter", "15", 4, "ngIf"], ["diameter", "15"]], template: function AsctbCompareSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Organ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsctbCompareSidebarComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.asctbCompareService.selectedOrganType = $event; })("ngModelChange", function AsctbCompareSidebarComponent_Template_mat_select_ngModelChange_4_listener() { return ctx.asctbCompareService.loadOrganData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AsctbCompareSidebarComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-selection-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsctbCompareSidebarComponent_Template_mat_selection_list_ngModelChange_6_listener($event) { return ctx.asctbCompareService.selectedViewType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Table view ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Tree view ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "scatter_plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Graph view ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Treemap view ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Organ statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Data status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AsctbCompareSidebarComponent_mat_spinner_43_Template, 1, 0, "mat-spinner", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Anatomical structures:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "HuBMAP-only AS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "SPARC-only AS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Shared AS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "HuBMAP-only AS links:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "SPARC-only AS links:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Shared AS links:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "app-color-legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.asctbCompareService.selectedOrganType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asctbCompareService.organTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.asctbCompareService.selectedViewType)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "treemap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx.asctbCompareService.dataLoadStatus === "Ready", ctx.asctbCompareService.dataLoadStatus !== "Ready"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.asctbCompareService.dataLoadStatus, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asctbCompareService.dataLoadStatus === "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asctbCompareService.countTotalAS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asctbCompareService.countHubmapAS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asctbCompareService.countSparcAS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asctbCompareService.countSharedAS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asctbCompareService.countHubmapASLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asctbCompareService.countSparcASLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asctbCompareService.countSharedASLinks);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatSelectionList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _color_legend_color_legend_component__WEBPACK_IMPORTED_MODULE_11__["ColorLegendComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], styles: [".full-width[_ngcontent-%COMP%]{width:100%;}\n.right-divider[_ngcontent-%COMP%]{border-right: 1px solid #505050;}\nmat-list-option[aria-selected=\"true\"][_ngcontent-%COMP%] {\n    background: rgba(0, 139, 139, 0.7);\n}\n.color-green[_ngcontent-%COMP%]{color:green;}\n.color-maroon[_ngcontent-%COMP%]{color:rgb(156, 3, 3);}\n.bold[_ngcontent-%COMP%]{font-weight: bold;}\n.sidebar-card[_ngcontent-%COMP%]{\n    width: 98%;\n    background-color: #212121;\n    margin-top: 25px;\n    padding: 8px 5px 5px 5px;\n}\n.sidebar-table[_ngcontent-%COMP%]{ width: 100%; }\n.sidebar-table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]{font-size:12px;}\n.sidebar-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\n    padding-right: 5px;\n}\n.border-bottom[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY3RiLWNvbXBhcmUtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksVUFBVSxDQUFDO0FBQ3ZCLGVBQWUsK0JBQStCLENBQUM7QUFFL0M7SUFDSSxrQ0FBa0M7QUFDdEM7QUFFQSxhQUFhLFdBQVcsQ0FBQztBQUN6QixjQUFjLG9CQUFvQixDQUFDO0FBQ25DLE1BQU0saUJBQWlCLENBQUM7QUFFeEI7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7QUFDQSxnQkFBZ0IsV0FBVyxFQUFFO0FBQzdCLHVCQUF1QixjQUFjLENBQUM7QUFDdEM7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJhc2N0Yi1jb21wYXJlLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoe3dpZHRoOjEwMCU7fVxuLnJpZ2h0LWRpdmlkZXJ7Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzUwNTA1MDt9XG5cbm1hdC1saXN0LW9wdGlvblthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMzksIDEzOSwgMC43KTtcbn1cblxuLmNvbG9yLWdyZWVue2NvbG9yOmdyZWVuO31cbi5jb2xvci1tYXJvb257Y29sb3I6cmdiKDE1NiwgMywgMyk7fVxuLmJvbGR7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxuXG4uc2lkZWJhci1jYXJke1xuICAgIHdpZHRoOiA5OCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmc6IDhweCA1cHggNXB4IDVweDtcbn1cbi5zaWRlYmFyLXRhYmxleyB3aWR0aDogMTAwJTsgfVxuLnNpZGViYXItdGFibGUgPiB0Ym9keXtmb250LXNpemU6MTJweDt9XG4uc2lkZWJhci10YWJsZSB0cntcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_asctb_compare_asctb_compare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/asctb-compare/asctb-compare.component */ "JWFI");
/* harmony import */ var _components_asctb_generate_asctb_generate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/asctb-generate/asctb-generate.component */ "oj/f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'asctb-compare', component: _components_asctb_compare_asctb_compare_component__WEBPACK_IMPORTED_MODULE_1__["AsctbCompareComponent"] },
    { path: 'asctb-generate', component: _components_asctb_generate_asctb_generate_component__WEBPACK_IMPORTED_MODULE_2__["AsctbGenerateComponent"] },
    { path: '**', component: _components_asctb_compare_asctb_compare_component__WEBPACK_IMPORTED_MODULE_1__["AsctbCompareComponent"] } //default
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
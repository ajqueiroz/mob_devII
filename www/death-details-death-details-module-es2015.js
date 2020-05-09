(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["death-details-death-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-details/death-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-details/death-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/death\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title color=\"secondary\"><strong>Deaths Details </strong></ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<strong>Season: {{ death.season}},  <p> Number of Deaths:{{ death.episode}} </p></strong>\n\t\t</ion-card-content> \n        </ion-card>\n\t<ion-card *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<strong>Responsible of Death: {{ death.responsible}},  <p>Death Cause:{{ death.cause}} </p></strong>\n\t\t</ion-card-content> \n\t</ion-card>\n    <ion-card *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<strong>Death Count: {{ death.number_of_deaths}}, <p> Name of Deceased: </p>{{ death.death}} </strong>\n\t\t</ion-card-content> \n    </ion-card>\n    <img class=\"custom-class\" src=\"https://68.media.tumblr.com/5c84ccc74e2048fb025ece8bf373e733/tumblr_muxwcnkFsG1qzpxx1o4_r1_1280.jpg\" width=\"500\">\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/death-details/death-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/death-details/death-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DeathDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathDetailsPageRoutingModule", function() { return DeathDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _death_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./death-details.page */ "./src/app/pages/death-details/death-details.page.ts");




const routes = [
    {
        path: '',
        component: _death_details_page__WEBPACK_IMPORTED_MODULE_3__["DeathDetailsPage"]
    }
];
let DeathDetailsPageRoutingModule = class DeathDetailsPageRoutingModule {
};
DeathDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/death-details/death-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/death-details/death-details.module.ts ***!
  \*************************************************************/
/*! exports provided: DeathDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathDetailsPageModule", function() { return DeathDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _death_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./death-details-routing.module */ "./src/app/pages/death-details/death-details-routing.module.ts");
/* harmony import */ var _death_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./death-details.page */ "./src/app/pages/death-details/death-details.page.ts");







let DeathDetailsPageModule = class DeathDetailsPageModule {
};
DeathDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _death_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathDetailsPageRoutingModule"]
        ],
        declarations: [_death_details_page__WEBPACK_IMPORTED_MODULE_6__["DeathDetailsPage"]]
    })
], DeathDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/death-details/death-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/death-details/death-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRoLWRldGFpbHMvZGVhdGgtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/death-details/death-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/death-details/death-details.page.ts ***!
  \***********************************************************/
/*! exports provided: DeathDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathDetailsPage", function() { return DeathDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let DeathDetailsPage = class DeathDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.deathCount = null;
    }
    ngOnInit() {
        this.deathCount = this.activatedRoute.snapshot.paramMap.get('count');
        this.api.getDeath(this.deathCount).subscribe(res => {
            this.death = res[0];
        });
    }
};
DeathDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"] }
];
DeathDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-death-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./death-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-details/death-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./death-details.page.scss */ "./src/app/pages/death-details/death-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])
], DeathDetailsPage);



/***/ })

}]);
//# sourceMappingURL=death-details-death-details-module-es2015.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-episodes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEpisodesEpisodesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Episodes</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-searchbar  color=\"white\" (ionInput)=\"getItems($event)\"></ion-searchbar>\n<ion-list>\n  <ion-item *ngFor=\"let item of items\"> {{ item }}</ion-item>\n</ion-list>\n<ion-item lines=\"none\" padding=\"\">\n\t\t<img src=\"http://cdn.breathecast.com/data/images/full/24300/breaking-bad-title-card.png\" width=\"500\">\n\t\t</ion-item>\n        <ion-button ion-button full (click)=\"goToCharacters()\" ion-button hover color=\"secondary\" align-center><strong>Switch to Characters</strong></ion-button>\n   <ion-button ion-button full (click)=\"goToDeath()\" ion-button color=\"secondary\" ><strong> Back to Death</strong></ion-button>\n    <ion-item ion-button full (click)=\"toggleInfiniteScroll()\" ></ion-item>\n\t<ion-list>\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let episode of episodes | async\" (click)=\"openDetails(episode)\">\n\t\t\t{{ episode.title }}\n\t\t</ion-item>\n\t</ion-list>\n     <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/episodes/episodes-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EpisodesPageRoutingModule */

  /***/
  function srcAppPagesEpisodesEpisodesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPageRoutingModule", function () {
      return EpisodesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _episodes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episodes.page */
    "./src/app/pages/episodes/episodes.page.ts");

    var routes = [{
      path: '',
      component: _episodes_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesPage"]
    }];

    var EpisodesPageRoutingModule = function EpisodesPageRoutingModule() {
      _classCallCheck(this, EpisodesPageRoutingModule);
    };

    EpisodesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EpisodesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/episodes/episodes.module.ts ***!
    \***************************************************/

  /*! exports provided: EpisodesPageModule */

  /***/
  function srcAppPagesEpisodesEpisodesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPageModule", function () {
      return EpisodesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./episodes-routing.module */
    "./src/app/pages/episodes/episodes-routing.module.ts");
    /* harmony import */


    var _episodes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episodes.page */
    "./src/app/pages/episodes/episodes.page.ts");

    var EpisodesPageModule = function EpisodesPageModule() {
      _classCallCheck(this, EpisodesPageModule);
    };

    EpisodesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesPageRoutingModule"]],
      declarations: [_episodes_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesPage"]]
    })], EpisodesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/episodes/episodes.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEpisodesEpisodesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-image {\n  background-image: url(\"/mob_devII/mob_devII/src/assets/background_image/breaking_bad_background.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iX2RldklJL21vYl9kZXZJSS9zcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXBpc29kZXMvZXBpc29kZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUdBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvbW9iX2RldklJL21vYl9kZXZJSS9zcmMvYXNzZXRzL2JhY2tncm91bmRfaW1hZ2UvYnJlYWtpbmdfYmFkX2JhY2tncm91bmQuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufSIsIi5iZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9tb2JfZGV2SUkvbW9iX2RldklJL3NyYy9hc3NldHMvYmFja2dyb3VuZF9pbWFnZS9icmVha2luZ19iYWRfYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/episodes/episodes.page.ts ***!
    \*************************************************/

  /*! exports provided: EpisodesPage */

  /***/
  function srcAppPagesEpisodesEpisodesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPage", function () {
      return EpisodesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EpisodesPage = /*#__PURE__*/function () {
      function EpisodesPage(navController, router, api) {
        _classCallCheck(this, EpisodesPage);

        this.navController = navController;
        this.router = router;
        this.api = api;
        this.searchQuery = '';
      }

      _createClass(EpisodesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.episodes = this.api.getEpisodes();
          this.episodes.subscribe(function (data) {
            console.log('my data', data);
          });
        }
      }, {
        key: "constructor2",
        value: function constructor2() {
          this.initializeItems();
        }
      }, {
        key: "initializeItems",
        value: function initializeItems() {
          this.items = ['Pilot', 'Cat/s/ in the Bag', '...And the Bag in the River', 'Cancer Man', 'Gray Matter'];
        }
      }, {
        key: "getItems",
        value: function getItems(ev) {
          // Reset items back to all of the items
          this.initializeItems(); // set val to the value of the searchbar

          var val = ev.target.value; // if the value is an empty string don't filter the items

          if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
              return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          }
        }
      }, {
        key: "openDetails",
        value: function openDetails(episode) {
          var episodeId = episode.episode_id;
          this.router.navigateByUrl("/tabs/episodes/".concat(episodeId));
        }
      }, {
        key: "goToCharacters",
        value: function goToCharacters() {
          this.navController.navigateRoot("/tabs/characters");
        }
      }, {
        key: "goToDeath",
        value: function goToDeath() {
          this.navController.navigateRoot("/tabs/deaths");
        }
      }]);

      return EpisodesPage;
    }();

    EpisodesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    EpisodesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-episodes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./episodes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./episodes.page.scss */
      "./src/app/pages/episodes/episodes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], EpisodesPage);
    /***/
  }
}]);
//# sourceMappingURL=episodes-episodes-module-es5.js.map
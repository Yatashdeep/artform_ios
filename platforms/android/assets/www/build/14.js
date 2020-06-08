webpackJsonp([14],{

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionspPageModule", function() { return CompetitionspPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competitionsp__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompetitionspPageModule = (function () {
    function CompetitionspPageModule() {
    }
    CompetitionspPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__competitionsp__["a" /* CompetitionspPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__competitionsp__["a" /* CompetitionspPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__competitionsp__["a" /* CompetitionspPage */]
            ]
        })
    ], CompetitionspPageModule);
    return CompetitionspPageModule;
}());

//# sourceMappingURL=competitionsp.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionspPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CompetitionspPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompetitionspPage = (function () {
    function CompetitionspPage(security, navCtrl, navParams) {
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.competitionsarray = [1, 2, 3, 4, 5, 6];
        this.competitiondatafake = new Array(6);
    }
    CompetitionspPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.boxshow = true;
        console.log('ionViewDidLoad CompetitionspPage');
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.Competitionapi(); }).subscribe(function (data) {
            _this.boxshow = false;
            _this.competitiondata = data.competitions;
        });
    };
    CompetitionspPage.prototype.detailpage = function (i) {
        this.navCtrl.push('CompetitiondetailpagePage', { competition_id: this.competitiondata[i].Competitions.competition_id });
    };
    CompetitionspPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-competitionsp',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/competitionsp/competitionsp.html"*/`<!--\n  Generated template for the CompetitionspPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left style="    width: 19px;">\n          <button ion-button menuToggle>\n          <ion-icon item-start>\n            <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n          </ion-icon>\n           </button>\n      </ion-buttons>\n    <ion-title style="text-align: center;    margin-left: -13px;">Competitions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <ion-grid style="padding: 10px;" *ngIf="boxshow==true">\n        <ion-row  >\n          <!-- <ion-col class="div-parent"  style="padding: 7px 7px 11px;" *ngFor="let value of competitiondatafake;let i=index" col-6   >\n       <div class="img-back div-left" > \n          \n            <ion-row style="margin-top: 84px;">\n      <p class="comp-title"></p>\n      \n      </ion-row>\n      <ion-row style="margin-top: -10px;" class="animate-imagebox">\n        <ion-col col-3>\n          <ion-icon style="margin-left:4px;color:#fff" ios="ios-calendar" md="md-calendar"></ion-icon>\n        </ion-col>\n        <ion-col col-9><p class="p-cal p-text p-points-text"></p></ion-col>\n      </ion-row>\n      </div>\n          </ion-col> -->\n          <ion-col col-6 *ngFor="let fake of competitiondatafake">\n              <div  class="div-parent"   >\n                \n                <div   class="div-left" >\n              \n                  <div class="animate-imagebox" width="80"  ></div>\n                  </div>\n                  <div class="div-right" >\n                    <div class="div-right-inner" >\n                      <p class="p-text p-points-text" style="font-size:1.2rem"></p>\n                      <p class="p-text p-points-text"></p>\n                    </div>\n                    </div>\n                    <div class="div-text">\n              \n                    </div>\n                   \n                  \n               \n               \n                  </div>\n          </ion-col> \n        </ion-row>\n        \n      </ion-grid>  \n\n\n\n\n<ion-grid style="padding: 10px;" *ngIf="boxshow==false">\n  <ion-row  >\n    <ion-col style="padding: 7px 7px 11px;" *ngFor="let value of competitiondata;let i=index" col-6  (click)="detailpage(i)" >\n <div class="img-back" [style.backgroundImage]="\'url(\'+value.Competitions.media.featured.CompetitionsMedia.url+\')\'"> \n    \n      <ion-row style="margin-top: 84px;">\n<p class="comp-title">{{value.Competitions.title}}</p>\n\n</ion-row>\n<ion-row style="margin-top: -10px;">\n  <ion-col col-3>\n    <ion-icon style="margin-left:4px;color:#fff" ios="ios-calendar" md="md-calendar"></ion-icon>\n  </ion-col>\n  <ion-col col-9><p class="p-cal">{{value.Competitions.started}}</p></ion-col>\n</ion-row>\n</div>\n    </ion-col>\n  </ion-row>\n  \n</ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/competitionsp/competitionsp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CompetitionspPage);
    return CompetitionspPage;
}());

//# sourceMappingURL=competitionsp.js.map

/***/ })

});
//# sourceMappingURL=14.js.map
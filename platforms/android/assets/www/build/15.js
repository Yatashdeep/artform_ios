webpackJsonp([15],{

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitiondetailpagePageModule", function() { return CompetitiondetailpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competitiondetailpage__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompetitiondetailpagePageModule = (function () {
    function CompetitiondetailpagePageModule() {
    }
    CompetitiondetailpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__competitiondetailpage__["a" /* CompetitiondetailpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__competitiondetailpage__["a" /* CompetitiondetailpagePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__competitiondetailpage__["a" /* CompetitiondetailpagePage */]
            ]
        })
    ], CompetitiondetailpagePageModule);
    return CompetitiondetailpagePageModule;
}());

//# sourceMappingURL=competitiondetailpage.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitiondetailpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(106);
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
 * Generated class for the CompetitiondetailpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompetitiondetailpagePage = (function () {
    function CompetitiondetailpagePage(iab, document, security, navCtrl, navParams) {
        this.iab = iab;
        this.document = document;
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.competitionsarray = [1, 2, 3, 4, 5, 6];
        this.competition_id = this.navParams.get('competition_id');
        console.log(this.competition_id);
    }
    CompetitiondetailpagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadingtext = true;
        console.log('ionViewDidLoad CompetitionspPage');
        this.carouselshow = true;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.getcompetition(_this.competition_id); }).subscribe(function (data) {
            _this.loadingtext = false;
            _this.competitiondata = data.competitions.Competitions.content;
            console.log('carousel', data.competitions.Competitions.media.carousel);
            _this.CompetitionsMediaurl = data.competitions.Competitions.media.featured.CompetitionsMedia.url;
            _this.carousel = data.competitions.Competitions.media.carousel;
            _this.gallery = data.competitions.Competitions.media.gallery;
            _this.attachments = data.competitions.Competitions.media.attachments;
            console.log('gallery', _this.gallery);
            console.log('attachements', _this.attachments);
            if (!_this.carousel) {
                _this.carouselshow = false;
            }
            // this.CompetitionsCoverMediaurl=data.competitions.Competitions.media.carousel.CompetitionsMedia.url
            // this.CompetitionsMediaurl=data.competitions.Competitions.media.featured.CompetitionsMedia.url
            _this.titlecompetition = data.competitions.Competitions.title;
            console.log(_this.titlecompetition);
            console.log('competitionsmedia' + _this.CompetitionsMediaurl);
            console.log('competitionscover' + _this.CompetitionsCoverMediaurl);
        });
    };
    CompetitiondetailpagePage.prototype.openpdf = function (pdf) {
        //  alert(pdf)
        var browser = this.iab.create(pdf, '_system', 'location=no');
        // const options: DocumentViewerOptions = {
        //   title: 'My PDF'
        // }
        // this.document.viewDocument(pdf, 'application/pdf', options)
        // window.open(pdf)
    };
    CompetitiondetailpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-competitiondetailpage',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/competitiondetailpage/competitiondetailpage.html"*/`<!--\n  Generated template for the CompetitiondetailpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n  <ion-title style="text-align: center;    margin-left: -13px;">{{titlecompetition}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <div class="cover-img" [style.backgroundImage]="\'url(\'+CompetitionsCoverMediaurl+\')\'">\n    \n<div>\n  <img style="height: 155px;" src="{{CompetitionsMediaurl}}">\n</div>\n  </div> -->\n \n    <div *ngIf="loadingtext==true" style="text-align: center;">\n    <p>Data Loading...</p>\n    <ion-spinner></ion-spinner>\n  </div>\n      <ion-slides *ngIf="carouselshow==true" pager class="slide-class">\n       <ion-slide *ngFor="let slide of carousel">\n        <div class="featured-image"  [style.backgroundImage]="\'url(\'+slide.CompetitionsMedia.url+\')\'">\n        <img  src="{{CompetitionsMediaurl}}" class="slide-image"/>\n        </div>\n      </ion-slide>\n      \n      </ion-slides>\n      <div *ngIf="carouselshow==false">\n        <img  src="{{CompetitionsMediaurl}}">\n      </div>\n    <!-- <div *ngFor="let slide of carousel">\n    <p>{{slide.CompetitionsMedia.url}}</p>\n    </div> -->\n  <div style="margin-top: 27px;" [innerHTML]="competitiondata">\n\n  </div>\n\n  <p *ngIf="gallery" style="font-size: 2rem;margin-bottom: -23PX;">Gallery</p>\n  <ion-slides *ngIf="gallery" pager class="slide-class">\n    <ion-slide *ngFor="let slide of gallery">\n     <div class="featured-image"  [style.backgroundImage]="\'url(\'+slide.CompetitionsMedia.url+\')\'">\n     </div>\n   </ion-slide>\n   \n   </ion-slides>\n\n   <p *ngIf="attachments" style="font-size:2rem;margin-bottom: -23PX;">Attachments</p>\n   <ion-slides *ngIf="attachments" pager class="slide-class">\n    <ion-slide *ngFor="let slide of attachments">\n      <!-- <p>{{slide.CompetitionsMedia.url}}</p> -->\n      <div *ngIf="slide.CompetitionsMedia.meta.type==\'audio/mpeg\'">\n        <audio controls>\n           \n            <source src="{{slide.CompetitionsMedia.url}}" type="audio/mpeg">\n         \n          </audio> \n      </div>\n      <div *ngIf="slide.CompetitionsMedia.meta.type==\'video/mp4\'">\n        <video width="320" height="240" controls>\n            <source src="{{slide.CompetitionsMedia.url}}" type="video/mp4">\n          </video> \n      </div>\n      <div *ngIf="slide.CompetitionsMedia.meta.type==\'application/pdf\'">\n        <button ion-button icon-only clear (click)="openpdf(slide.CompetitionsMedia.url)">\n            <ion-icon name="document"></ion-icon>\n          </button>\n      </div>\n     <!-- <div class="featured-image"  [style.backgroundImage]="\'url(\'+slide.CompetitionsMedia.url+\')\'">\n     </div> -->\n   </ion-slide>\n   \n   </ion-slides>\n\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/competitiondetailpage/competitiondetailpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CompetitiondetailpagePage);
    return CompetitiondetailpagePage;
}());

//# sourceMappingURL=competitiondetailpage.js.map

/***/ })

});
//# sourceMappingURL=15.js.map
webpackJsonp([17],{

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcattabpagePageModule", function() { return ChildcattabpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__childcattabpage__ = __webpack_require__(820);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChildcattabpagePageModule = (function () {
    function ChildcattabpagePageModule() {
    }
    ChildcattabpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__childcattabpage__["a" /* ChildcattabpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__childcattabpage__["a" /* ChildcattabpagePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__childcattabpage__["a" /* ChildcattabpagePage */]
            ]
        })
    ], ChildcattabpagePageModule);
    return ChildcattabpagePageModule;
}());

//# sourceMappingURL=childcattabpage.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildcattabpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choosecatpagetab_choosecatpagetab__ = __webpack_require__(396);
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
 * Generated class for the ChildcattabpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChildcattabpagePage = (function () {
    function ChildcattabpagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categorydata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.subcat = this.navParams.get('subcat');
        this.id = this.navParams.get('id');
        this.subsub = this.subcat[this.id].Childrens;
        this.title = this.subcat[this.id].Subcategory.subcategory_short_name;
        console.log('subcat', this.subcat);
        console.log('subsub', this.subcat[this.id]);
        console.log('length', this.subcat[this.id].Childrens.length);
        //  alert('hiii')
        // if(this.subcat[this.id].Childrens.length==0)
        // {
        //   this.navCtrl.push(ChoosecatpagetabPage,{type:'top_performers',title:this.title,subsub:this.subcat,id:this.id,choiceofintrest:this.choiceofintrest})    
        // }
    }
    ChildcattabpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildcattabpagePage');
    };
    ChildcattabpagePage.prototype.navigatetochoose = function (i, title) {
        this.choiceofintrest = 1;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choosecatpagetab_choosecatpagetab__["a" /* ChoosecatpagetabPage */], { title: title, subsub: this.subsub, id: i, choiceofintrest: this.choiceofintrest });
    };
    ChildcattabpagePage.prototype.onSegmentChanged = function (ev) {
        this.choiceofintrest = 2;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choosecatpagetab_choosecatpagetab__["a" /* ChoosecatpagetabPage */], { type: ev.value, title: this.title, subsub: this.subcat, id: this.id, choiceofintrest: this.choiceofintrest });
    };
    ChildcattabpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-childcattabpage',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/childcattabpage/childcattabpage.html"*/`<!--\n  Generated template for the ChildcattabpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" style="text-align: center;">\n    <span style="color: #fff; margin-top: -20px;">{{title}}</span>\n    <!-- <ion-row no-padding>\n      \n      <ion-col style="text-align:center"  no-padding> -->\n    <!-- <p style="color:#fff">{{title}}</p> -->\n    <!-- </ion-col>\n     </ion-row> -->\n    <ion-row no-padding>\n      <div class="segment-class">\n        <ion-segment [(ngModel)]="pet" (ionChange)="onSegmentChanged($event)">\n          <ion-segment-button class="seg-tab" value="Recent_Uploads">\n            Recent Uploads\n          </ion-segment-button>\n          <hr class="divider-seg" />\n          <ion-segment-button class="seg-tab" value="top_performers">\n            Top Performers\n          </ion-segment-button>\n          <hr class="divider-seg" />\n          <ion-segment-button class="seg-tab" value="Trending_Items">\n            Trending Items\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style="padding: 10px;">\n    <ion-row>\n      <ion-col\n        col-6\n        *ngFor="let value of subsub;let i=index"\n        (click)="navigatetochoose(i,value.Subsubcategory.subsubcategory_class)"\n      >\n        <div\n          class="back-image"\n          [style.backgroundImage]="\'url(\'+ value.Subsubcategory.subsubcategory_image_url +\')\'"\n        ></div>\n        <div class="back-black">\n          <ion-row class="img-tag">\n            <img\n              style="height: 30px; margin-top: 21px;"\n              [src]="value.Subsubcategory.subsubcategory_small_image_url"\n            />\n          </ion-row>\n          <ion-row class="tag-text">\n            <p style="color: #fff; margin-top: 9px;">\n              {{value.Subsubcategory.subsubcategory_class}}\n            </p>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/childcattabpage/childcattabpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ChildcattabpagePage);
    return ChildcattabpagePage;
}());

//# sourceMappingURL=childcattabpage.js.map

/***/ })

});
//# sourceMappingURL=17.js.map
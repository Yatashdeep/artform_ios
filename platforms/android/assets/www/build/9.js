webpackJsonp([9],{

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcattabpPageModule", function() { return SubcattabpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcattabp__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubcattabpPageModule = (function () {
    function SubcattabpPageModule() {
    }
    SubcattabpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subcattabp__["a" /* SubcattabpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subcattabp__["a" /* SubcattabpPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__subcattabp__["a" /* SubcattabpPage */]
            ]
        })
    ], SubcattabpPageModule);
    return SubcattabpPageModule;
}());

//# sourceMappingURL=subcattabp.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcattabpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choosecatpagetab_choosecatpagetab__ = __webpack_require__(394);
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
 * Generated class for the SubcattabpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubcattabpPage = (function () {
    function SubcattabpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categorydata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.choiceofintrest = 3;
    }
    SubcattabpPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SubcattabpPage");
        this.id = this.navParams.get("id");
        this.category = this.navParams.get("category");
        console.log("category", this.category);
        this.title = this.category[this.id].Category.category_name;
        console.log("title" + this.title);
        this.subcat = this.category[this.id].Childrens;
    };
    SubcattabpPage.prototype.navigatetosubcat = function (i, text) {
        if (this.subcat[i].Childrens.length == 0) {
            this.choiceofintrest = 2;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choosecatpagetab_choosecatpagetab__["a" /* ChoosecatpagetabPage */], {
                type: "top_performers",
                title: text,
                subsub: this.subcat,
                id: i,
                choiceofintrest: this.choiceofintrest,
            });
        }
        else {
            this.navCtrl.push("ChildcattabpagePage", { subcat: this.subcat, id: i });
        }
    };
    SubcattabpPage.prototype.onSegmentChanged = function (ev) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choosecatpagetab_choosecatpagetab__["a" /* ChoosecatpagetabPage */], {
            type: ev.value,
            title: this.title,
            subcat: this.category,
            id: this.id,
            choiceofintrest: this.choiceofintrest,
        });
    };
    SubcattabpPage.prototype.CloseBtn = function () {
        this.navCtrl.pop();
    };
    SubcattabpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-subcattabp",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/subcattabp/subcattabp.html"*/`<!--\n  Generated template for the SubcattabpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" style="text-align: center;">\n    <!-- <ion-row style="height: 53px;" no-padding>\n      <ion-col col-3 no-padding>\n        <ion-buttons left style="width: 19px;">\n          <button ion-button menuToggle>\n            <ion-icon item-start>\n              <img class="navbar-icon" item-left src="assets/Menu/navbar.png" />\n            </ion-icon>\n          </button>\n        </ion-buttons> -->\n    <!-- <ion-buttons left>\n          <button\n            ion-button\n            icon-only\n            (click)="CloseBtn()"\n            class="my-style-for-modal"\n          >\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons> -->\n    <!-- </ion-col>\n      <ion-col style="text-align: center;" col-9 no-padding> -->\n    <span style="color: #fff; color: #fff; margin-top: -20px;">{{title}}</span>\n    <!-- </ion-col>\n    </ion-row> -->\n    <ion-row no-padding>\n      <div class="segment-class">\n        <ion-segment [(ngModel)]="pet" (ionChange)="onSegmentChanged($event)">\n          <ion-segment-button class="seg-tab" value="Recent_Uploads">\n            Recent Uploads\n          </ion-segment-button>\n          <hr class="divider-seg" />\n          <ion-segment-button class="seg-tab" value="top_performers">\n            Top Performers\n          </ion-segment-button>\n          <hr class="divider-seg" />\n          <ion-segment-button class="seg-tab" value="Trending_Items">\n            Trending Items\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style="padding: 10px;">\n    <ion-row>\n      <ion-col\n        col-6\n        *ngFor="let value of subcat;let i=index"\n        (click)="navigatetosubcat(i,value.Subcategory.subcategory_class)"\n      >\n        <div\n          class="back-image"\n          [style.backgroundImage]="\'url(\'+ value.Subcategory.subcategory_image_url +\')\'"\n        >\n          <ion-row class="img-tag">\n            <img\n              style="height: 30px; margin-top: 21px;"\n              [src]="value.Subcategory.subcategory_small_image_url"\n            />\n          </ion-row>\n          <ion-row class="tag-text">\n            <p style="color: #fff; margin-top: 9px;">\n              {{value.Subcategory.subcategory_class}}\n            </p>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/subcattabp/subcattabp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SubcattabpPage);
    return SubcattabpPage;
}());

//# sourceMappingURL=subcattabp.js.map

/***/ })

});
//# sourceMappingURL=9.js.map
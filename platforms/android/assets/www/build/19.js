webpackJsonp([19],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorytabpagePageModule", function() { return CategorytabpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorytabpage__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategorytabpagePageModule = (function () {
    function CategorytabpagePageModule() {
    }
    CategorytabpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categorytabpage__["a" /* CategorytabpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorytabpage__["a" /* CategorytabpagePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__categorytabpage__["a" /* CategorytabpagePage */]
            ]
        })
    ], CategorytabpagePageModule);
    return CategorytabpagePageModule;
}());

//# sourceMappingURL=categorytabpage.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorytabpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_security_security__ = __webpack_require__(27);
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
 * Generated class for the CategorytabpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategorytabpagePage = (function () {
    function CategorytabpagePage(navCtrl, navParams, security) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.security = security;
        this.fakeUsers = new Array(7);
        this.id = this.navParams.get('id');
    }
    CategorytabpagePage.prototype.ionViewDidLoad = function () {
        this.loadingdata = 'on';
        console.log('ionViewDidLoad CategorytabpagePage');
        //   this.catsound=[
        //     {
        //      'category':'Music',
        //     'img':'assets/tree-cat/music.png',
        //   'artform':'assets/profile/02_1_music.png'
        //  },
        //   {
        //    'category':'Dance',
        //    'img':'assets/tree-cat/dance.png',
        //     // 'form':['Hip Hop','Body Pop','BBoy/Breakdance','Irish','Salsa','Ballet','Trap Dance','Jazz','Modern','Swing','Belly','Country','Others'],
        //     'artform':'assets/profile/dance.png'
        //  },
        //   {
        //    'category':'Film',
        //    'img':'assets/tree-cat/film.png',
        //   //  'form':['Show Reel','Documentary','Movie Script','TV Script','Unreleases Films','Others'],
        //    'artform':'assets/profile/film.png'
        //   },
        //   {
        //    'category':'Photography',
        //    'img':'assets/tree-cat/camera.png',
        //   //  'form':['Aerial','Action','Animal','Architecture','Black and White','Commercial','Panoramic','Sports','Nature','Potrait','Long Exposure','Others'],
        //    'artform':'assets/profile/photography.png'
        //   },
        //   {
        //    'category':'Literature',
        //    'img':'assets/tree-cat/literature.png',
        //   //  'form':['Novel','Movie Script','TV Script','Comedy','Journalistic','Factual','Education','Poetry','Others'],
        //    'artform':'assets/profile/literature.png'
        //   },
        //   {
        //    'category':'Art',
        //    'img':'assets/tree-cat/art.png',
        //   //  'form':['Art','Design','Crafts','Others'],
        //    'artform':'assets/profile/art.png'
        //   },
        //   {
        //    'category':'Freestyle',
        //    'img':'assets/tree-cat/freestyle.png',
        //   //  'form':['Breakdance','Body Pop','BMX','Skateboarding','juggling','Parkour','Graffiti','Beatbox','Watersports','Rap','Skiing','Turntabilism','Football','Others'],
        //    'artform':'assets/profile/freestyle.png'
        //   },
        //   {
        //    'category':'Personality',
        //    'img':'assets/tree-cat/personality.png',
        //   //  'form':['Presenter','TV Presenter','Comedian','Radio Presenter','Event Presenter','Commentator','Impersonator','Mime','Others'],
        //    'artform':'assets/profile/personality.png'
        //   },
        //   {
        //    'category':'Other',
        //    'img':'assets/tree-cat/others.png',
        //   //  'form':['Animal Trick','Street Perform','Synchronised Act','Magician','Mime','Modeling','Others'],
        //    'artform':'assets/profile/others_bg.png'
        //   }
        //  ]
        //  this.loadcat()
        console.log('hicategory', localStorage['category']);
        // this.category=JSON.parse(localStorage['category'])
        this.category = JSON.parse(localStorage['categories']);
    };
    //   loadcat()
    // {
    //   Observable.of(null)
    //   .flatMap(()=>this.security.getcategory()).subscribe(data=>{
    // this.category=data.categories
    // console.log('cat',this.category)
    // this.loadingdata='off'
    // })
    // }
    CategorytabpagePage.prototype.cattap = function (i) {
        this.navCtrl.push('SubcattabpPage', { id: i, category: this.category });
    };
    CategorytabpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categorytabpage',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/categorytabpage/categorytabpage.html"*/`<!--\n  Generated template for the CategorytabpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n   \n          <ion-buttons left style="    width: 19px;">\n              <button ion-button menuToggle>\n              <ion-icon item-start>\n                <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n              </ion-icon>\n               </button>\n          </ion-buttons>\n\n    <ion-title [style.marginRight] = "id ==1 ? \'77px\' :\'0px\'" style="text-align:center">Categories</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <div *ngIf="loadingdata==\'on\'" >\n    <div *ngFor="let fake of fakeUsers">\n        <div  class="div-parent"   >\n          \n          <div   class="div-left" >\n        \n            <div class="animate-imagebox" width="80"  ></div>\n            </div>\n            <div class="div-right" >\n           \n              </div>\n              \n             \n            \n         \n         \n            </div>\n          </div> \n          </div> -->\n    <ion-list style="    height: 100%;">\n        <div style="    margin-bottom: 13px;" *ngFor="let value of category;let i=index">\n       <div [style.backgroundImage]="\'url(\'+ value.Category.category_image_url +\')\'" class="row-image"  (click)="cattap(i)">\n      <ion-row style="height: 77px;">\n        <ion-col class="col-style" col-2>\n          <img class="img-size" [src]="value.Category.category_small_image_url">\n        </ion-col>\n        <ion-col class="col-cat" col-7>\n          <p class="p-cat">{{value.Category.category_class}}</p>\n          <img id="tickshow4" class="tree-img" src="assets/tree-cat/chevron.png">\n        </ion-col>\n        \n      </ion-row>\n      \n       </div>\n      \n        </div>\n      \n      \n      \n      </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/categorytabpage/categorytabpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_security_security__["a" /* SecurityProvider */]])
    ], CategorytabpagePage);
    return CategorytabpagePage;
}());

//# sourceMappingURL=categorytabpage.js.map

/***/ })

});
//# sourceMappingURL=19.js.map
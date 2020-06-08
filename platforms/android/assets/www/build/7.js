webpackJsonp([7],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutuspPageModule", function() { return AboutuspPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutusp__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutuspPageModule = (function () {
    function AboutuspPageModule() {
    }
    AboutuspPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aboutusp__["a" /* AboutuspPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutusp__["a" /* AboutuspPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__aboutusp__["a" /* AboutuspPage */],
            ]
        })
    ], AboutuspPageModule);
    return AboutuspPageModule;
}());

//# sourceMappingURL=aboutusp.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabspagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadmedia_uploadmedia__ = __webpack_require__(102);
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


//import { DashboardPage } from '../dashboard/dashboard';
//import { ArtprofilePage } from '../artprofile/artprofile';


/**
 * Generated class for the TabspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabspagePage = (function () {
    function TabspagePage(event, security, navCtrl, navParams) {
        this.event = event;
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.custompropic1 = 'https://www.artformplatform.com/images/user-comment.png';
        // tab1Root: any = "DashboardPage"
        this.DashboardPage = 'DashboardPage';
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__uploadmedia_uploadmedia__["a" /* UploadmediaPage */];
        this.tab3Root = 'CategorytabpagePage';
        this.tab4Root = 'CompetitionspPage';
        this.tab5Root = 'ArtprofilePage';
        this.custompropic12 = 'https://i.stack.imgur.com/S0qie.png';
        // this.profile_pic=localStorage['profile_pic']
        // let tabbar = this.tabRef._tabbar.nativeElement;
        // let element = tabbar.childNodes[tabbar.childElementCount-1];
        // if(element) {
        //   element.removeChild(element.childNodes[1]);
        //   let img = document.createElement("img");
        //   img.setAttribute("class", "tab-icon-custom");
        //   img.setAttribute("src",this.profile_pic );
        //   element.insertBefore(img, element.childNodes[1]);
        // } 
    }
    TabspagePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.tabRef.select(2);
        this.event.subscribe('user:image', function (profile_pic, firtsname, time) {
            console.log('firstname', firtsname);
            _this.profile_pic = profile_pic;
            localStorage['profile_pic'] = profile_pic;
            console.log('profile_pic', _this.profile_pic);
            var tabbar = _this.tabRef._tabbar.nativeElement;
            var element = tabbar.childNodes[tabbar.childElementCount - 1];
            if (element) {
                element.removeChild(element.childNodes[1]);
                var img = document.createElement("img");
                img.setAttribute("class", "tab-icon-custom");
                img.setAttribute("src", _this.profile_pic);
                element.insertBefore(img, element.childNodes[1]);
            }
        });
        //this.navCtrl.setRoot(TabspagePage,{id:4})
        // if(localStorage['status']=='true')
        // {
        //     this.id=4
        // }
        // else
        // {
        // this.id=this.navParams.get('id')
        // }
        this.id = 4;
        //alert('status'+localStorage['status'])
        console.log(this.id);
        //  alert('id'+this.id)
        this.tabRef.select(this.id);
        console.log('ionViewDidLoad TabspagePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Tabs */])
    ], TabspagePage.prototype, "tabRef", void 0);
    TabspagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabspage',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/tabspage/tabspage.html"*/`<!--\n  Generated template for the TabspagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs #myTabs >\n  <!-- <div style="height:10px;width:40px;background-color:red" ></div> -->\n  <ion-tab [root]="DashboardPage"   tabTitle="Home" tabIcon="custom-home" ></ion-tab>\n  <ion-tab  [root]="tab2Root" tabTitle="Upload" tabIcon="custom-upload"></ion-tab>\n  <ion-tab  [root]="tab3Root" tabTitle="Categories" tabIcon="custom-category" ></ion-tab>\n  <ion-tab style="font-size:1.2rem " [root]="tab4Root"  tabTitle="Competitions" tabIcon="custom-price"></ion-tab>\n   <ion-tab  [root]="tab5Root"   tabTitle="Profile" tabIcon="custom-propic" tabsHideOnSubPages="true"></ion-tab>\n  <!-- <ion-tab   [root]="tab5Root" tabTitle="Profile" tabIcon="custom-propic" tabsHideOnSubPages="true"></ion-tab> -->\n</ion-tabs>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/tabspage/tabspage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TabspagePage);
    return TabspagePage;
}());

//# sourceMappingURL=tabspage.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutuspPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__ = __webpack_require__(814);
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
 * Generated class for the AboutuspPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutuspPage = (function () {
    function AboutuspPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutuspPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutuspPage');
    };
    AboutuspPage.prototype.navigatetotab = function (id) {
        console.log(id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__["a" /* TabspagePage */], { id: id });
    };
    AboutuspPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aboutusp',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/aboutusp/aboutusp.html"*/`<!--\n  Generated template for the AboutuspPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left style="    width: 19px;">\n          <button ion-button menuToggle>\n          <ion-icon item-start>\n            <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n          </ion-icon>\n           </button>\n      </ion-buttons>\n    <ion-title style="text-align:center;    margin-left: -25px;">About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="    background-color: #141414;">\n<div class="cover-p">\n <p class="art-bold"> FOR THE ARTIST</p>\n\n <p class="p-para"> Whether you are a musician, dancer, painter, author, actor, freestyler, magician, DJ, film maker, script writer, comedian, photographer, journalist, model, tattoo artist, personality, or something we just have not discovered yet, then Artform Platform is the place for you.</p>\n  \n   \n  \n <p class="art-bold"> IT’S ORGANISED</p>\n  \n<p class="p-para"> Every artform is different and every different artform can have a different platform, in the form of many categories and sub categories.\n  \n  Look for yourself, there are over 100 different music sub categories, so the end user can find what they really want, and the artist is where they need to be.\n  \n  This applies to every Artform.\n  \n  This is a place where break dancer can compete with the painter\n  \n  There are no boundaries!\n</p>\n   \n  \n  <p class="art-bold">THE CLIMB</p>\n  <p class="p-para">\n  Each artist has their own page to showcase their work, and on this page is a chart.\n  \n  The more votes your work gets on your page, the higher it will rank in your personal chart.\n  \n  This is a good indicator for an artist on which direction, they should be heading.\n  </p>\n   \n  \n  <p class="art-bold">THE COMPETITION</p>\n  <p class="p-para">\n  Perhaps some or all of your work is so good, it accumulates enough votes to make it into your sub category chart, and before you know it, you are in the main category chart.\n  \n  You can’t stop now though, imagine, just imagine making it into the Artform Platform Top 100.\n  \n  And remember, somebody has to be number one….Is that someone you?\n  </p>\n   \n  \n  <p class="art-bold">THE END USER</p>\n  <p class="p-para">\n  Without you Artform Platform doesn’t exist.\n  \n  Use Artform Platform as a place to discover new talent and be the first to bring this talent to the surface.\n  \n  Register with detail, the art types you are interested in, and only this art will be brought to your attention.\n  \n  Create or be part of communities that share your passion of all things art, and share what you have discovered.\n  </p>\n <p class="p-para" style="margin-top: 0px;margin-bottom: 62px;"> Vote to encourage, or comment to discourage, it’s up to you.\n  </p>\n</div>\n</ion-content>\n<ion-footer>\n  \n    <ion-row class="div-icon">\n      <ion-col (click)="navigatetotab(0)" >\n        <div class="img-box">\n      <img class="img-style1" src="assets/tabsicon/home.png">\n      </div>\n     \n      <p class="p-tag">Home</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(1)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/uploaded.png">\n        </div>\n        <p class="p-tag">Upload</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(2)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/categories.png">\n        </div>\n        <p class="p-tag">Categories</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(3)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/price.png">\n        </div>\n        <p class="p-tag">Competitions</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(4)">\n        <div class="img-box">\n        <img style=" border-radius: 34px;\n        height: 24px;\n        width: 24px;margin-top: 3px;" class="img-style1" src="assets/tabsicon/propic.jpg">\n        </div>\n        <p class="p-tag">Profile</p>\n      </ion-col>\n    </ion-row>\n \n</ion-footer>\n\n\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/aboutusp/aboutusp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], AboutuspPage);
    return AboutuspPage;
}());

//# sourceMappingURL=aboutusp.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
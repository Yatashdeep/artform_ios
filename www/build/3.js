webpackJsonp([3],{

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtouploadpagesidemenuPageModule", function() { return HowtouploadpagesidemenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__howtouploadpagesidemenu__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HowtouploadpagesidemenuPageModule = (function () {
    function HowtouploadpagesidemenuPageModule() {
    }
    HowtouploadpagesidemenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__howtouploadpagesidemenu__["a" /* HowtouploadpagesidemenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__howtouploadpagesidemenu__["a" /* HowtouploadpagesidemenuPage */]),
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__howtouploadpagesidemenu__["a" /* HowtouploadpagesidemenuPage */],
            ]
        })
    ], HowtouploadpagesidemenuPageModule);
    return HowtouploadpagesidemenuPageModule;
}());

//# sourceMappingURL=howtouploadpagesidemenu.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabspagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtouploadpagesidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__ = __webpack_require__(816);
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
 * Generated class for the HowtouploadpagesidemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HowtouploadpagesidemenuPage = (function () {
    function HowtouploadpagesidemenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "1. Register Using your email or Social Media",
                description: "1) Register as an artist – only artists can upload media.<br>2) Use Social media to login <br>3) or use an email password combination",
                image: 'assets/howtoupload/register.jpg',
            },
            {
                title: "2. In Your Profile Page, Select Upload",
                description: "1) You can upload Original Files or Youtube Links  <br>2) Original Files can be Images ,Audio or Video <br>3) For Youtube Upload, just paste your link, then press submit <br>4)For original files, select add file. You can also have an optional cover image for original files",
                image: 'assets/howtoupload/upload.jpg',
            },
            {
                title: "3. Select Your Categories",
                description: "1) Enter the Category: Sub Category: and if relevant, Sub Sub Category of your work <br>2)Then Press Upload ",
                image: 'assets/howtoupload/category.jpg'
            },
            {
                title: "4. Share Your media on Facebook & to your Google Contacts",
                description: "Now time to get those votes – remember the most votes wins. So get everybody you know to vote.",
                image: 'assets/howtoupload/icon-128x128.png'
            }
        ];
    }
    HowtouploadpagesidemenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowtouploadpagesidemenuPage');
    };
    HowtouploadpagesidemenuPage.prototype.skippage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__["a" /* TabspagePage */]);
    };
    HowtouploadpagesidemenuPage.prototype.navigatetotab = function (id) {
        console.log(id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__["a" /* TabspagePage */], { id: id });
    };
    HowtouploadpagesidemenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-howtouploadpagesidemenu',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/howtouploadpagesidemenu/howtouploadpagesidemenu.html"*/`<!--\n  Generated template for the HowtouploadpagesidemenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left style="    width: 19px;">\n          <button ion-button menuToggle>\n          <ion-icon item-start>\n            <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n          </ion-icon>\n           </button>\n      </ion-buttons>   \n    <ion-title style="text-align:center;    margin-left: -9px;">How to upload</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page" >\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <!-- <ion-toolbar>\n        <ion-buttons end>\n          <button (click)="skippage()" ion-button color="primary">Skip</button>\n        </ion-buttons>\n      </ion-toolbar> -->\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/howtoupload/step1.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button (click)="skippage()" ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n<ion-footer>\n  \n    <ion-row class="div-icon">\n      <ion-col (click)="navigatetotab(0)" >\n        <div class="img-box">\n      <img class="img-style1" src="assets/tabsicon/home.png">\n      </div>\n     \n      <p class="p-tag">Home</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(1)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/uploaded.png">\n        </div>\n        <p class="p-tag">Upload</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(2)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/categories.png">\n        </div>\n        <p class="p-tag">Categories</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(3)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/price.png">\n        </div>\n        <p class="p-tag">Competitions</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(4)">\n        <div class="img-box">\n        <img style=" border-radius: 34px;\n        height: 24px;\n        width: 24px;margin-top: 3px;" class="img-style1" src="assets/tabsicon/propic.jpg">\n        </div>\n        <p class="p-tag">Profile</p>\n      </ion-col>\n    </ion-row>\n \n</ion-footer>\n  \n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/howtouploadpagesidemenu/howtouploadpagesidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], HowtouploadpagesidemenuPage);
    return HowtouploadpagesidemenuPage;
}());

//# sourceMappingURL=howtouploadpagesidemenu.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
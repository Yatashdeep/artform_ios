webpackJsonp([1],{

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsandconditionsPageModule", function() { return TermsandconditionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termsandconditions__ = __webpack_require__(829);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsandconditionsPageModule = (function () {
    function TermsandconditionsPageModule() {
    }
    TermsandconditionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__termsandconditions__["a" /* TermsandconditionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termsandconditions__["a" /* TermsandconditionsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__termsandconditions__["a" /* TermsandconditionsPage */]
            ]
        })
    ], TermsandconditionsPageModule);
    return TermsandconditionsPageModule;
}());

//# sourceMappingURL=termsandconditions.module.js.map

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

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandconditionsPage; });
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
 * Generated class for the TermsandconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsandconditionsPage = (function () {
    function TermsandconditionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsandconditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsandconditionsPage');
    };
    TermsandconditionsPage.prototype.navigatetotab = function (id) {
        console.log(id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__["a" /* TabspagePage */], { id: id });
    };
    TermsandconditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-termsandconditions',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/termsandconditions/termsandconditions.html"*/`<!--\n  Generated template for the TermsandconditionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left style="    width: 19px;">\n          <button ion-button menuToggle>\n          <ion-icon item-start>\n            <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n          </ion-icon>\n           </button>\n      </ion-buttons>\n    <ion-title style="text-align:center">Terms and Conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <p class="welcome-style"> Welcome to the Artform Platform website. Whether you are an advertiser or another user of this website, access to or use of this website www.artformplatform.com and the provision of our advertising services on the website are subject to you accepting the Agreement (defined below).</p>\n\n   <p class="head-bar" >1.Definitions</p> \n  <div style="    opacity: .4;">\n   <p>These defined terms will have the following meanings:</p>\n   <p>Artform Platform means the company Artform Platform Ltd.</p>\n   <p>Content/Your Content means the submissions, uploads and posts of audio, text, photographs, pictures, graphics, comments, and other content, data or information put on our Website Registered Users and Uploaders.</p>\n   <p>Data/Personal Data/Personal Sensitive Data has the meaning given in national laws of EU Member State implementing the European Data Protection Directive 95/46/EC, as may be updated, amended and/or replaced from time-to-time.</p>\n   <p>Registered Users/Uploader means any person who has uploaded content onto the Website via an Artform Platform profile, be it their own or one belonging to another.</p>\n  <p>Terms means the Artform Platform Terms of Service.</p>\n   <p>Third Party Services means databases, networks, websites, servers, information, software, programs, systems, directories, applications, products or services, not operated by Artform Platform but may contain information to Artform Platform Content.</p>\n  <p> Website means all of the content contained on www.artformplatform.com including but not limited to individual user profiles.</p>\n</div>\n\n  <p  class="head-bar" > 2.The Agreement and Components of Terms of Service </p>\n  <div style="    opacity: .4;">\n  <p> Your use of the Website and the services provided to you on or from or through the Website, is subject to the terms of a legal agreement between you and Artform Platform.</p>\n \n   <p> 2.1 Components of the Agreement.</p> \n  <p>  The Agreement is comprised of the following:\n    <br>\n   Terms of Service;\n   <br>\n   Community Guidelines;\n   <br>\n   Privacy Policy;\n   </p>\n   <p>2.2 Condtition of Use.</p>\n    <p> Before you access or use the Website, please read the documents comprising the Agreement carefully and make sure you understand them. If you disagree with any aspect of the Agreement, you do not have our permission to, and you must not, access or use Artform Platform.</p>\n  </div>\n  </ion-content>\n  <ion-footer>\n  \n      <ion-row class="div-icon">\n        <ion-col (click)="navigatetotab(0)" >\n          <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/home.png">\n        </div>\n       \n        <p class="p-tag">Home</p>\n        </ion-col>\n        <ion-col (click)="navigatetotab(1)">\n          <div class="img-box">\n          <img class="img-style1" src="assets/tabsicon/uploaded.png">\n          </div>\n          <p class="p-tag">Upload</p>\n        </ion-col>\n        <ion-col (click)="navigatetotab(2)">\n          <div class="img-box">\n          <img class="img-style1" src="assets/tabsicon/categories.png">\n          </div>\n          <p class="p-tag">Categories</p>\n        </ion-col>\n        <ion-col (click)="navigatetotab(3)">\n          <div class="img-box">\n          <img class="img-style1" src="assets/tabsicon/price.png">\n          </div>\n          <p class="p-tag">Competitions</p>\n        </ion-col>\n        <ion-col (click)="navigatetotab(4)">\n          <div class="img-box">\n          <img style=" border-radius: 34px;\n          height: 24px;\n          width: 24px;margin-top: 3px;" class="img-style1" src="assets/tabsicon/propic.jpg">\n          </div>\n          <p class="p-tag">Profile</p>\n        </ion-col>\n      </ion-row>\n   \n  </ion-footer>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/termsandconditions/termsandconditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TermsandconditionsPage);
    return TermsandconditionsPage;
}());

//# sourceMappingURL=termsandconditions.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
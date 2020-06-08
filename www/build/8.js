webpackJsonp([8],{

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabspagePageModule", function() { return TabspagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabspage__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabspagePageModule = (function () {
    function TabspagePageModule() {
    }
    TabspagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabspage__["a" /* TabspagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabspage__["a" /* TabspagePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabspage__["a" /* TabspagePage */]
            ]
        })
    ], TabspagePageModule);
    return TabspagePageModule;
}());

//# sourceMappingURL=tabspage.module.js.map

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

/***/ })

});
//# sourceMappingURL=8.js.map
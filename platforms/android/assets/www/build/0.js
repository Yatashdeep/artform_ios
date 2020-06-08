webpackJsonp([0],{

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetintouchPageModule", function() { return GetintouchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getintouch__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GetintouchPageModule = (function () {
    function GetintouchPageModule() {
    }
    GetintouchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__getintouch__["a" /* GetintouchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__getintouch__["a" /* GetintouchPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__getintouch__["a" /* GetintouchPage */]
            ]
        })
    ], GetintouchPageModule);
    return GetintouchPageModule;
}());

//# sourceMappingURL=getintouch.module.js.map

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

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypPage; });
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
 * Generated class for the PrivacypPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacypPage = (function () {
    function PrivacypPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacypPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacypPage');
    };
    PrivacypPage.prototype.navigatetotab = function (id) {
        console.log(id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabspage_tabspage__["a" /* TabspagePage */], { id: id });
    };
    PrivacypPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacyp',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/privacyp/privacyp.html"*/`<!--\n  Generated template for the PrivacypPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left style="    width: 19px;">\n          <button ion-button menuToggle>\n          <ion-icon item-start>\n            <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n          </ion-icon>\n           </button>\n      </ion-buttons>\n    <ion-title style="text-align:center;    margin-left: -9px;">Privacy Policy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n   <p style="font-family: AvenirLTStd-Heavy;"> When you use Artform Platform, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully. And remember, you can find controls to manage your information and protect your privacy and security through the individual settings options which are accessible anytime you log into your profile.\n    </p>\n    <p style="font-family: AvenirLTStd-Heavy;">\n    There are many different ways you can use our services to search for and share information, to communicate with other people or to create new content. As you use our services, we want you to be clear how we’re using information and the ways in which you can protect your privacy.\n    </p>\n    <p style="font-family: AvenirLTStd-Heavy;">\n    Our Privacy Policy explains:\n    </p>\n    <p style="font-family: AvenirLTStd-Heavy;">\n    -What information we collect and why we collect it.\n    </p>\n    <p style="font-family: AvenirLTStd-Heavy;">\n    -How we use that information.\n    </p>\n    <p style="font-family: AvenirLTStd-Heavy;">\n    -The choices we offer, including how to access and update information.\n    </p>\n    <p style="font-family: AvenirLTStd-Heavy;">Artform Platform endeavours to be compliant with Data Protection laws and policies contained in the European Data Protection Directive 95/46/EC, as may be updated, amended and/or replaced from time-to-time.</p>\n    \n    <p style="font-family: AvenirLTStd-Heavy;">Your privacy matters to Artform Platform. Please take the time to get to know our practices and if you have any questions contact us in writing or by email.</p>\n    \n    <p style="font-family: AvenirLTStd-Heavy;">Information we collect</p>\n    <p style=" font-family: AvenirLTStd-Book;    opacity: .6;"> We collect information to provide better services to all of our users from figuring out basic stuff like which language you speak, to more complex things like identifying which Artform Platform accounts you might like.</p>\n    \n    <p style=" font-family: AvenirLTStd-Book;    opacity: .6;"> We collect information in the following ways:Information you give us:  For example, our service requires you to sign up to register an Artform Platform account. When you do, we’ll ask for personal information, like your name, email address, country of nationality/residence and credit/debit card information. If you want to take full advantage of the sharing features we offer you should create a publicly visible Artform Platform, which may include your name and photo.\n    Information we get from your use of our services:  We collect information about the services that you use and how you use them, like when you engage with Artform Platform content, visit a website that uses our advertising services, or view and interact with our ads and content. This information includes:\n    Device information: We collect device-specific information (such as your hardware model, operating system version and unique device identifiers. Artform Platform may associate your device identifiers with your Artform Platform Account.</p>\n</ion-content>\n<ion-footer>\n  \n    <ion-row class="div-icon">\n      <ion-col (click)="navigatetotab(0)" >\n        <div class="img-box">\n      <img class="img-style1" src="assets/tabsicon/home.png">\n      </div>\n     \n      <p class="p-tag">Home</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(1)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/uploaded.png">\n        </div>\n        <p class="p-tag">Upload</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(2)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/categories.png">\n        </div>\n        <p class="p-tag">Categories</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(3)">\n        <div class="img-box">\n        <img class="img-style1" src="assets/tabsicon/price.png">\n        </div>\n        <p class="p-tag">Competitions</p>\n      </ion-col>\n      <ion-col (click)="navigatetotab(4)">\n        <div class="img-box">\n        <img style=" border-radius: 34px;\n        height: 24px;\n        width: 24px;margin-top: 3px;" class="img-style1" src="assets/tabsicon/propic.jpg">\n        </div>\n        <p class="p-tag">Profile</p>\n      </ion-col>\n    </ion-row>\n \n</ion-footer>`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/privacyp/privacyp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], PrivacypPage);
    return PrivacypPage;
}());

//# sourceMappingURL=privacyp.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetintouchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacyp_privacyp__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabspage_tabspage__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_security_security__ = __webpack_require__(27);
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
 * Generated class for the GetintouchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetintouchPage = (function () {
    function GetintouchPage(alertCtrl, service, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = 'Get in Touch';
    }
    GetintouchPage.prototype.save = function () {
        var _this = this;
        if (this.checkremember == true) {
            this.status = 'Sending..';
            __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.service.getinTouch(_this.Name, _this.Email, _this.Message); }).subscribe(function (data) {
                _this.status = 'Get in Touch';
                // this.navCtrl.setRoot(SecuritypanelPage)
                var alert = _this.alertCtrl.create({
                    title: data.message,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                            }
                        }
                    ]
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Please Accept the Privacy Policy !',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    GetintouchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetintouchPage');
    };
    GetintouchPage.prototype.navigatetopolicy = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__privacyp_privacyp__["a" /* PrivacypPage */]);
    };
    GetintouchPage.prototype.navigatetotab = function (id) {
        console.log(id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabspage_tabspage__["a" /* TabspagePage */], { id: id });
    };
    GetintouchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-getintouch',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/getintouch/getintouch.html"*/`<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons left style="    width: 19px;">\n        <button ion-button menuToggle>\n        <ion-icon item-start>\n          <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n        </ion-icon>\n         </button>\n    </ion-buttons>\n  <ion-title style="text-align:center;margin-left: -9px;">{{status}}</ion-title>\n    <!-- <ion-buttons  right style="    width: 34px;    margin-right: 12px;" >\n      <button style="font-size: 22px;" ion-button (click)="save()">\n       \n\n     <img src="assets/welcome/006-tick.png">\n     </button>\n  </ion-buttons> -->\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item class="item-input">\n      <img class="icon-img" src="assets/welcome/user.png" item-left primary>\n      <ion-input [(ngModel)]="Name" placeholder="Enter Name"></ion-input>\n     </ion-item>\n     <ion-item class="item-input">\n      <img  class="icon-img" src="assets/welcome/mail.png" item-left primary>\n      <ion-input [(ngModel)]="Email" placeholder="Enter Email"></ion-input>\n     </ion-item>\n     <ion-item class="item-input">\n      <img class="icon-img" src="assets/create_conversation/message.png" item-left primary>\n      <ion-textarea [(ngModel)]="Message" rows="3" placeholder="Enter Message"></ion-textarea>\n     </ion-item>\n     <div>\n      <ion-row>\n      <!-- <ion-col col-1><img class="check-style1" src="assets/welcome/check.png"></ion-col> -->\n\n      <ion-checkbox [(ngModel)]="checkremember" style="    margin-top: 5px;" class="check" color="primary" checked="true"></ion-checkbox> \n     <ion-col col-11>  <p style="    margin-top: -1px;">By submitting your details you consent to our <u (click)="navigatetopolicy()" style="font-family: AvenirLTStd-Heavy;">Privacy Policy</u></p></ion-col>\n    </ion-row> \n    </div>\n    <ion-row style="justify-content: center;">\n    <button style="width: 43%;" ion-button color="primary" round  (click)="save()">Send</button>\n     </ion-row>\n  </ion-content>\n<ion-footer>\n\n  <ion-row class="div-icon">\n    <ion-col (click)="navigatetotab(0)" >\n      <div class="img-box">\n    <img class="img-style1" src="assets/tabsicon/home.png">\n    </div>\n   \n    <p class="p-tag">Home</p>\n    </ion-col>\n    <ion-col (click)="navigatetotab(1)">\n      <div class="img-box">\n      <img class="img-style1" src="assets/tabsicon/uploaded.png">\n      </div>\n      <p class="p-tag">Upload</p>\n    </ion-col>\n    <ion-col (click)="navigatetotab(2)">\n      <div class="img-box">\n      <img class="img-style1" src="assets/tabsicon/categories.png">\n      </div>\n      <p class="p-tag">Categories</p>\n    </ion-col>\n    <ion-col (click)="navigatetotab(3)">\n      <div class="img-box">\n      <img class="img-style1" src="assets/tabsicon/price.png">\n      </div>\n      <p class="p-tag">Competitions</p>\n    </ion-col>\n    <ion-col (click)="navigatetotab(4)">\n      <div class="img-box">\n      <img style=" border-radius: 34px;\n      height: 24px;\n      width: 24px;margin-top: 3px;" class="img-style1" src="assets/tabsicon/propic.jpg">\n      </div>\n      <p class="p-tag">Profile</p>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/getintouch/getintouch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], GetintouchPage);
    return GetintouchPage;
}());

//# sourceMappingURL=getintouch.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
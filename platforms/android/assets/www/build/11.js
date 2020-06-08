webpackJsonp([11],{

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(823);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(397);
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






// Import Auth0Cordova and auth0.js
// import Auth0Cordova from '@auth0/cordova';
// import * as auth0 from 'auth0-js';
// const AUTH_CONFIG = {
//   // Needed for Auth0 (capitalization: ID):
//   clientID: 'KdbXm2xuxPuYK5hzTprGNRlbyEDtXbC0',
//   // Needed for Auth0Cordova (capitalization: Id):
//   clientId: 'KdbXm2xuxPuYK5hzTprGNRlbyEDtXbC0',
//   domain: 'dev-r3ooelc9.auth0.com',
//   callbackURL: location.href,
//   packageIdentifier: 'io.ionic.starter' // config.xml widget ID
// };
//import { Pinterest, PinterestUser, PinterestPin, PinterestBoard } from '@ionic-native/pinterest';
var HomePage = (function () {
    function HomePage(iab, document, zone, 
        //public pinterest:Pinterest,
        http, storage, event, navCtrl) {
        this.iab = iab;
        this.document = document;
        this.zone = zone;
        this.http = http;
        this.storage = storage;
        this.event = event;
        this.navCtrl = navCtrl;
        // checkremember='false'
        this.authenticated = false;
        this.message = "";
        this.loading = true;
        this.id = "qDuKsiwS5xw";
        this.playerVars = {
            cc_lang_pref: "en",
        };
        localStorage.removeItem("usermedia");
        localStorage.removeItem("getbranchstatus");
        // this.event.publish('user:created',this.checkremember,Date.now())
        // this.scopes=[
        //   this.pinterest.SCOPES.READ_PUBLIC
        // ]
        // this.storage.get('profile').then(user => this.user = user);
        // this.storage.get('access_token').then(token => this.accessToken = token);
        // this.storage.get('expires_at').then(exp => {
        //   this.loggedIn = Date.now() < JSON.parse(exp);
        //   this.loading = false;
        // });
        // this.getSuccessful()
        // this.iab.create('https://www.youtube.com/embed/xxCVVQUBWTo');
        // window.open('https://www.youtube.com/watch?v=xxCVVQUBWTo')
    }
    HomePage.prototype.login = function () {
        // this.loading = true;
        // const options = {
        //   scope: 'openid profile offline_access'
        // };
        // // Authorize login request with Auth0: open login page and get auth results
        // this.Client.authorize(options, (err, authResult) => {
        //   if (err) {
        //     throw err;
        //   }
        //   // Set Access Token
        //   this.storage.set('access_token', authResult.accessToken);
        //   this.accessToken = authResult.accessToken;
        //   // Set Access Token expiration
        //   const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        //   this.storage.set('expires_at', expiresAt);
        //   // Set logged in
        //   this.loading = false;
        //   this.loggedIn = true;
        //   // Fetch user's profile info
        //   this.Auth0.client.userInfo(this.accessToken, (err, profile) => {
        //     if (err) {
        //       throw err;
        //     }
        //     this.storage.set('profile', profile).then(val =>
        //       this.zone.run(() => this.user = profile)
        //     );
        //   });
        // });
    };
    HomePage.prototype.logout = function () {
        //  var pdf='https://people.csail.mit.edu/virgi/whowins.pdf'
        //  const browser = this.iab.create(pdf,'_system', 'location=no');
        // const options: DocumentViewerOptions = {
        //   title: 'My PDF'
        // }
        // this.document.viewDocument(pdf, 'application/pdf', options)
        // this.storage.remove('profile');
        // this.storage.remove('access_token');
        // this.storage.remove('expires_at');
        // this.accessToken = null;
        // this.user = null;
        // this.loggedIn = false;
    };
    HomePage.prototype.getmypins = function () {
        // this.pinterest.getMyPins()
        // .then((pins: Array<PinterestPin>) => alert(JSON.stringify(pins)))
        // .catch(err => alert(JSON.stringify(err)))
    };
    HomePage.prototype.getme = function () {
        // this.pinterest.getMe()
        // .then((user: PinterestUser) => alert(JSON.stringify(user)))
        // .catch(err => alert(JSON.stringify((err))))
    };
    HomePage.prototype.getmyboards = function () {
        // this.pinterest.getMyBoards()
        // .then((boards: Array<PinterestBoard>) =>
        //  alert(JSON.stringify((boards))))
        // .catch(err => alert(JSON.stringify((err))))
    };
    HomePage.prototype.createpin = function () {
        // var note='artform platform check out this work on'
        // var link='https://i.pinimg.com/236x/d5/21/5b/d5215b329fbb6833c0a78dce025fbe42.jpg'
        // var weblink='https://ionicframework.com/docs/v3/native/pinterest/#createPin'
        // var boardId='656470151872803217'
        // var createboard='Hope'
        // var desc='detail description'
        //   this.pinterest.createBoard(createboard, desc)
        //   .then((data)=>{
        // alert(JSON.stringify((data)))
        // this.pinterest.createPin(note, data.id, link, weblink).then((data)=>{
        //   alert(JSON.stringify(data))
        // })
        // .catch(err=>{
        //   alert(JSON.stringify(err))
        // })
        //   })
        //   .catch(err => alert(JSON.stringify((err))))
    };
    HomePage.prototype.navigatetoSecurity = function () {
        this.navCtrl.setRoot("SecuritypanelPage");
    };
    HomePage.prototype.setAuthState = function (authenticated) {
        var _this = this;
        if (authenticated) {
            this.storage.set("my_token", "myspecialheadertoken").then(function () {
                _this.authenticated = true;
            });
        }
        else {
            this.storage.remove("my_token").then(function () {
                _this.authenticated = false;
            });
        }
    };
    HomePage.prototype.getSuccessful = function () {
        this.http
            .get("http://staging15api.bigcityexperiences.co.in/v1/user/home?program_id=1")
            .subscribe(function (res) {
            alert(JSON.stringify(res));
        });
    };
    HomePage.prototype.getFail = function () {
        var _this = this;
        this.http.get("https://notvalid.xy").subscribe(function (res) { }, function (err) {
            _this.message = err.message;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/home/home.html"*/`\n\n<ion-content class="content-color">\n  <!-- https://www.youtube.com/embed/xxCVVQUBWTo -->\n     <!-- <iframe allow="encrypted-media" src="https://www.youtube.com/embed/xxCVVQUBWTo"></iframe>     -->\n       \n     <!-- <script>\n      // Load the IFrame Player API code asynchronously.\n      var tag = document.createElement(\'script\');\n      tag.src = "https://www.youtube.com/player_api";\n      var firstScriptTag = document.getElementsByTagName(\'script\')[0];\n      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n    \n      // Replace the \'ytplayer\' element with an <iframe> and\n      // YouTube player after the API code downloads.\n      var player;\n      function onYouTubePlayerAPIReady() {\n        player = new YT.Player(\'ytplayer\', {\n          height: \'360\',\n          width: \'640\',\n          videoId: \'M7lc1UVf-VE\'\n        });\n      }\n    </script> -->\n<ion-grid no-padding>\n  <ion-row no-padding (click)="logout()">\n  <p class="p-head">\n    <!-- <div id="ytplayer"></div> -->\n\n\nWelcome to\n  </p>\n  </ion-row>\n  <ion-row no-padding (click)="login()"> \n  <p class="p-headbold">\nArtform Platform\n  </p>\n  </ion-row>\n  <ion-row class="img-row">\n<div class="img-art" >\n  <div class="img-shadow">\n    </div>\n  <img src="assets/welcome/logoart.png">\n\n</div>\n  </ion-row>\n\n  <ion-row class="navigate-bar">\n      <button style="width: 43%;" ion-button color="dark" round outline (click)="navigatetoSecurity()">Get Started</button>\n\n\n   \n  </ion-row>\n</ion-grid> \n<!-- <vg-player>\n  <video [vgMedia]="media" #media id="singleVideo" preload="auto" controls>\n    <source src="https://www.youtube.com/embed/xxCVVQUBWTo" type="youtube">\n  </video>\n</vg-player> -->\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
webpackJsonp([10],{

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxpagePageModule", function() { return InboxpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inboxpage__ = __webpack_require__(829);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InboxpagePageModule = (function () {
    function InboxpagePageModule() {
    }
    InboxpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inboxpage__["a" /* InboxpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inboxpage__["a" /* InboxpagePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__inboxpage__["a" /* InboxpagePage */]
            ]
        })
    ], InboxpagePageModule);
    return InboxpagePageModule;
}());

//# sourceMappingURL=inboxpage.module.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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




/**
 * Generated class for the InboxpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InboxpagePage = (function () {
    function InboxpagePage(modalCtrl, security, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakedata = [1, 2, 3, 4];
        this.page = 1;
        this.inboxdata2 = [];
        this.inboxdata = [];
        this.fakeUsers = new Array(4);
        this.loader = true;
    }
    InboxpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InboxpagePage');
        this.flag = 2;
        this.loaddata();
    };
    InboxpagePage.prototype.loaddata = function (infiniteScroll) {
        var _this = this;
        console.log('hii');
        if (this.flag == 1) {
            this.loading = true;
            console.log('loading' + this.loading);
        }
        {
            this.loading = false;
        }
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.inboxapi(_this.page); }).subscribe(function (data) {
            console.log('data', data.status);
            if (data.status == 'fail') {
                _this.message = 'Welcome To Inbox';
                _this.messageactive = true;
            }
            _this.loading = true;
            _this.inboxdata1 = data.conversations;
            // this.inboxdata2.push(this.inboxdata1)
            // this.inboxdata=this.inboxdata2[0]
            _this.totalpages = data.totalPages;
            if (_this.totalpages == _this.page) {
                _this.loader = false;
                _this.text = 'No More Data';
            }
            _this.inboxdata = _this.inboxdatatest(data.conversations);
            console.log('inboxdata', _this.inboxdata);
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        });
    };
    InboxpagePage.prototype.inboxdatatest = function (conversations) {
        for (var i = 0; i < conversations.length; i++) {
            // conversations[7].LastMessage.Messages.message
            this.messagefilter = conversations[i].LastMessage.Messages.message;
            this.messagefilter2 = this.messagefilter.substring(1, this.messagefilter.length - 1);
            this.titletrim = conversations[i].Conversations.title;
            this.titletrim2 = this.titletrim.substring(1, this.titletrim.length - 1);
            this.inboxdata2.push({
                user_profile_avatar: conversations[i].Users.user_profile_avatar,
                user_display_name: conversations[i].Users.user_display_name,
                title: this.titletrim2,
                last_message: conversations[i].Conversations.last_message,
                message: this.messagefilter2,
                conversation_id: conversations[i].Conversations.conversation_id,
                messageCount: conversations[i][0].messageCount
            });
        }
        return this.inboxdata2;
    };
    InboxpagePage.prototype.loadMore = function (infiniteScroll) {
        this.loading = true;
        this.page++;
        this.flag = 1;
        console.log(this.page);
        console.log(this.totalpages);
        this.loaddata(infiniteScroll);
        //   if(this.totalpages>=this.page)
        //   {
        //     this.loaddata(infiniteScroll)
        //   }
        //   else
        //   {
        //     this.loader=false
        //  console.log('falsee')
        //   }
    };
    InboxpagePage.prototype.openmsg = function (id) {
        this.navCtrl.push('ChatinboxreplyPage', { id: id });
    };
    InboxpagePage.prototype.tapshow = function () {
        this.navCtrl.push('CreateconversationpagePage');
    };
    InboxpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inboxpage',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/inboxpage/inboxpage.html"*/`<!--\n  Generated template for the InboxpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title style="text-align:center;    margin-left: -19px;">Inbox</ion-title>\n    <ion-buttons right  style="    margin-right: 14px;" >\n      <button ion-button (click)="tapshow()">\n        <ion-icon name="add"></ion-icon>\n   </button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-list *ngIf="loading==false" style="padding:21px;">\n        <div *ngFor="let fake of fakeUsers" style="    margin-bottom: 12px;">\n        \n            \n           \n             \n                <div class="div-right-inner" >\n                  <p class="p-text p-points-text" style="font-size:1.2rem"></p>\n               \n                </div>\n              \n                \n                \n      </div>\n      </ion-list>\n<ion-list style="    margin-top: 11px;">\n\n  <div style="text-align: center;" *ngIf="messageactive==true">\n    <p>{{message}}</p>\n    </div>\n  <ion-row *ngFor="let value of inboxdata" style="padding: 5px;">\n    <ion-col col-2>\n      <ion-avatar item-start>\n        <img class="img-design" [src]="value.user_profile_avatar">\n      </ion-avatar> \n    </ion-col>\n    <ion-col col-9 style="    margin-top: -9px;">\n     <div class="grid">\n    <div>\n      <p class="p-text">{{value.user_display_name}}</p> \n      <p    class="p1-text">{{value.title}}</p>\n    </div>\n    <div>\n      <p class="date-style">{{ value.last_message | date:format }}</p>\n    </div>\n     </div>\n     <ion-row class="msg-box">\n     \n       <div  >\n           <p>{{value.message}}</p>\n       </div>\n     </ion-row>\n    </ion-col>\n    <ion-col col-1 (click)="openmsg(value.conversation_id)">\n      <ion-icon  item-start style="    margin-top: 19px;">\n        <img class="icon-arrow" src="assets/inbox/arrow.png">\n      </ion-icon>\n      <ion-badge style="margin: -78px;">{{value.messageCount}}</ion-badge>\n    </ion-col>\n    <hr class="hr-style">\n    \n  </ion-row>\n  <p style="    text-align: center;">{{text}}</p>\n  <ion-infinite-scroll *ngIf="loader==true" (ionInfinite)="loadMore($event)" loadingSpinner="bubbles" loadingText="Loading data...">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/inboxpage/inboxpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], InboxpagePage);
    return InboxpagePage;
}());

//# sourceMappingURL=inboxpage.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
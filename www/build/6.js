webpackJsonp([6],{

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorytabpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportprob_reportprob__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commentsbox_commentsbox__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popoverpageshare_popoverpageshare__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categorytabpage_categorytabpage__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__artistprofilepage_artistprofilepage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewtalent_viewtalent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__followedartist_followedartist__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_page_transitions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewvideoplay_viewvideoplay__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_dashboardservice_dashboardservice__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__viewvideotopperformers_viewvideotopperformers__ = __webpack_require__(184);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(events, dashboard, service, loadingCtrl, nativePageTransitions, popoverCtrl, modalCtrl, navCtrl, navParams) {
        var _this = this;
        this.events = events;
        this.dashboard = dashboard;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakedata = [1, 2, 3, 4];
        this.count = 1;
        this.categorytag = "All Category";
        this.countload = 0;
        this.page = 0;
        this.link = "recentMedia";
        this.tag = 0;
        this.catid = null;
        this.disablescroll = true;
        this.showbutton = false;
        this.showcat = true;
        this.catshow = true;
        events.subscribe("star-rating:changed", function (starRating) {
            _this.rate = starRating;
        });
    }
    DashboardPage.prototype.doRefresh = function (event) {
        console.log("tiles", this.tiles);
        if (this.tiles == "Recent Media") {
            console.log("Pull Event Triggered!");
            this.recentdata = [];
            this.catshow = true;
            this.dashboard.recentdataarray = [];
            this.categorytag = "All Category";
            this.link = "recentMedia";
            this.countload = 0;
            this.tiles = "Recent Media";
            this.page = 0;
            this.tag = 0;
            this.showbutton = false;
            this.loaddata();
            event.complete();
        }
        else {
            event.complete();
        }
    };
    DashboardPage.prototype.refreshpage = function () {
        // this.catid=6
        // this.tiles='Recent Media'
        // this.loaddata()
        // this.topperformers()
        // this.user_display_name=localStorage['firstname']
        // this.refreshtext='recentuploads'
        this.recentdata = [];
        this.catshow = true;
        this.dashboard.recentdataarray = [];
        this.categorytag = "All Category";
        this.link = "recentMedia";
        this.countload = 0;
        this.tiles = "Recent Uploads";
        this.page = 0;
        this.tag = 0;
        this.showbutton = false;
        this.loaddata();
    };
    DashboardPage.prototype.songtype = function (id) {
        this.showbutton = true;
        this.tag = 1;
        this.page = 0;
        this.recentdata = [];
        this.dashboard.recentdataarray = [];
        this.countload = 0;
        if (id == 1) {
            this.categorytag = "Music";
            this.catid = 1;
        }
        else if (id == 2) {
            this.categorytag = "Dance";
            this.catid = 2;
        }
        else if (id == 3) {
            this.categorytag = "Film";
            this.catid = 3;
        }
        else if (id == 4) {
            this.categorytag = "Photography";
            this.catid = 4;
        }
        else if (id == 7) {
            this.categorytag = "Literature";
            this.catid = 7;
        }
        else if (id == 8) {
            this.categorytag = "Art";
            this.catid = 8;
        }
        else if (id == 5) {
            this.categorytag = "Freestyle";
            this.catid = 5;
        }
        else if (id == 9) {
            this.categorytag = "Personality";
            this.catid = 9;
        }
        else if (id == 6) {
            this.categorytag = "Others";
            this.catid = 6;
        }
        this.loaddata();
        // if(id==1)
        // {
        //   this.categorytag='Music'
        //   this.catid=1
        // }
        // else if(id==2)
        // {
        //   this.categorytag='Dance'
        //   this.catid=2
        // }
        // else if(id==3)
        // {
        //   this.categorytag='Film'
        //   this.catid=3
        // }
        // else if(id==4)
        // {
        //   this.categorytag='Photography'
        //   this.catid=4
        // }
        // else if(id==7)
        // {
        //   this.categorytag='Literature'
        //   this.catid=7
        // }
        // else if(id==8)
        // {
        //   this.categorytag='Art'
        //   this.catid=8
        // } else if(id==5)
        // {
        //   this.categorytag='Freestyle'
        //   this.catid=5
        // }
        // else if(id==9)
        // {
        //   this.categorytag='Personality'
        //   this.catid=9
        // }
        // else if(id==6)
        // {
        //   this.categorytag='Others'
        //   this.catid=6
        // }
        //  this.dashboard.sortcat(id)
        //  this.recentdata=this.dashboard.recentdataarray
    };
    DashboardPage.prototype.updateUrl = function () {
        this.src =
            "https://www.lincolnlawsj.edu/wp-content/uploads/2016/07/1920x1080-video-play-overlay.png";
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        // ionViewWillEnter(){
        this.tiles = "Recent Media";
        this.loaddata();
        this.topperformers();
        this.user_display_name = localStorage["firstname"];
    };
    DashboardPage.prototype.ionViewWillEnter = function () { };
    DashboardPage.prototype.loaddata = function (infiniteScroll) {
        var _this = this;
        this.completedata = "";
        if (this.countload == 0) {
            this.loadingdata = "on";
        }
        this.countload++;
        __WEBPACK_IMPORTED_MODULE_12_rxjs__["Observable"].of(this.loadingdata)
            .flatMap(function () {
            return _this.service.loadmore(_this.page, _this.link, _this.tag, _this.catid);
        })
            .subscribe(function (data) {
            if (data.status == "fail") {
                _this.completedata = "No More Data";
            }
            else {
                _this.completedata = "";
                _this.recentdatafull = data;
                _this.recentdata = _this.dashboard.recentdataarray;
                _this.PermanentArray = _this.dashboard.recentdataarray;
                _this.dashboard.recentdata(data.media);
            }
            _this.loadingdata = "off";
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        });
        this.pet = "recentuploads";
    };
    DashboardPage.prototype.searchMagazines = function (ev) {
        if (ev.target.value != "") {
            this.disablescroll = false;
            var messagearray = this.PermanentArray;
            this.recentdata = messagearray.filter(function (item) {
                return (item.usermedia_name
                    .toLowerCase()
                    .indexOf(ev.target.value.toLowerCase()) > -1 ||
                    item.user_display_name
                        .toLowerCase()
                        .indexOf(ev.target.value.toLowerCase()) > -1 ||
                    item.artforms.toLowerCase().indexOf(ev.target.value.toLowerCase()) >
                        -1);
            });
        }
        if (ev.target.value == "" || ev.target.value == undefined) {
            this.recentdata = this.PermanentArray;
            this.disablescroll = true;
            this.searchMagazineString = "";
        }
    };
    DashboardPage.prototype.loadMore = function (infiniteScroll) {
        this.page++;
        this.loaddata(infiniteScroll);
    };
    DashboardPage.prototype.navigatetomsg = function (id) {
        localStorage.removeItem("usermedia");
        var options = {
            direction: "up",
            duration: 500,
            slowdownfactor: 2,
        };
        this.nativePageTransitions.slide(options);
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__commentsbox_commentsbox__["a" /* CommentsboxPage */], {
            usermediaid: this.recentdata[id].usermediaid,
            mediapic: this.recentdata[id].category_image_url,
            medianame: this.recentdata[id].usermedia_name,
            artforms: this.recentdata[id].artforms,
            id: id,
            user_display_name: this.recentdata[id].user_display_name,
            user_avatar: this.recentdata[id].user_avatar,
            small_image_url: this.recentdata[id].small_image_url,
            totalrating: this.recentdata[id].totalrating,
            userurl: this.recentdata[id].user_url,
            artist_id: this.recentdata[id].artist_id,
            rate: this.recentdata[id].rating,
            idstatus: 0,
        });
        commentsbox.present();
        // this.navCtrl.push(CommentsboxPage)
    };
    DashboardPage.prototype.navigatetomsgtop = function (id) {
        // alert(id)
        var options = {
            direction: "up",
            duration: 500,
            slowdownfactor: 2,
        };
        this.nativePageTransitions.slide(options);
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__commentsbox_commentsbox__["a" /* CommentsboxPage */], {
            usermediaid: this.playerlist[id].usermedia_id,
            mediapic: this.playerlist[id].usermedia_path,
            medianame: this.playerlist[id].usermedia_name,
            artforms: this.playerlist[id].toptype,
            id: id,
            user_display_name: this.playerlist[id].user_display_name,
            user_avatar: this.playerlist[id].user_avatar,
            small_image_url: this.playerlist[id].covermediathumbnail,
            totalrating: this.playerlist[id].totalrating,
            userurl: this.playerlist[id].usermedia_url,
            artist_id: this.playerlist[id].artist_id,
            rate: this.playerlist[id].rate,
            idstatus: 1,
        });
        commentsbox.present();
    };
    DashboardPage.prototype.followartist = function (artist_id, user_display_name) {
        var _this = this;
        if (this.user_display_name == user_display_name) {
        }
        else {
            __WEBPACK_IMPORTED_MODULE_12_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.service.artistfollowed(artist_id); })
                .subscribe(function (data) {
                _this.followingpoints = data.user.user_following.length;
                localStorage["following"] = _this.followingpoints + 1;
                _this.events.publish("user:following", _this.followingpoints);
                var modalfollow = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__followedartist_followedartist__["a" /* FollowedartistPage */], {
                    msg: data.status,
                });
                modalfollow.present();
                //  this.navCtrl.setRoot(ArtprofilePage,{id:4})
            });
        }
    };
    DashboardPage.prototype.showcatevent = function (id) {
        if (id == 1) {
            this.showcat = false;
            // document.getElementById('categorylist').style.height='334px'
        }
        else {
            this.showcat = true;
            // document.getElementById("categorylist").style.height = "130px";
        }
    };
    DashboardPage.prototype.artistfollowed = function () { };
    DashboardPage.prototype.onSegmentChanged = function (ev) {
        if (ev.value == "recentuploads") {
            this.recentdata = [];
            this.catshow = true;
            this.dashboard.recentdataarray = [];
            this.categorytag = "All Category";
            this.link = "recentMedia";
            this.countload = 0;
            this.tiles = "Recent Media";
            this.page = 0;
            this.tag = 0;
            this.loaddata();
        }
        else if (ev.value == "trending_items") {
            this.categorytag = "All Category";
            this.recentdata = [];
            this.catshow = true;
            this.dashboard.recentdataarray = [];
            this.link = "trendingMedia";
            this.tiles = "Trending Items";
            this.countload = 0;
            this.page = 0;
            this.tag = 0;
            this.loaddata();
        }
        else {
            this.catshow = false;
            // this.loadingdata='on'
            //  Observable.of(this.loadingdata)
            //  .flatMap(()=>this.service.topperformers()).subscribe(data=>{
            //   this.dashboard.topperformers(data.playerList)
            //   //  this.dashboard.topperformers(data.data.playerList)
            // this.playerlist=this.dashboard.topperformersdata
            // this.userid=localStorage['userid']
            //  this.loadingdata='off'
            //  })
            //this.topperformers()
        }
    };
    DashboardPage.prototype.topperformers = function () {
        var _this = this;
        this.loadingdata = "on";
        __WEBPACK_IMPORTED_MODULE_12_rxjs__["Observable"].of(this.loadingdata)
            .flatMap(function () { return _this.service.topperformers(); })
            .subscribe(function (data) {
            _this.dashboard.topperformers(data.playerList);
            //  this.dashboard.topperformers(data.data.playerList)
            _this.playerlist = _this.dashboard.topperformersdata;
            _this.userid = localStorage["userid"];
            _this.loadingdata = "off";
        });
    };
    DashboardPage.prototype.reportnavigate = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__reportprob_reportprob__["a" /* ReportprobPage */], {
            usermediaid: this.recentdata[id].usermediaid,
        });
        modal.present();
    };
    DashboardPage.prototype.tapshow = function (i) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], {
            image: this.recentdata[i].category_image_url,
            artistname: this.recentdata[i].usermedia_name,
            user_url: this.recentdata[i].user_url,
            usermediaid: this.recentdata[i].usermediaid,
        });
        popover.present({
            ev: event,
        });
    };
    DashboardPage.prototype.tapshowtop = function (i) {
        //  alert(this.playerlist[i].usermedia_id)
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], {
            image: this.playerlist[i].category_image_url,
            artistname: this.playerlist[i].user_display_name,
            user_url: this.playerlist[i].usermedia_url,
            usermediaid: this.playerlist[i].usermedia_id,
        });
        popover.present({
            ev: event,
        });
    };
    DashboardPage.prototype.filtercat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categorytabpage_categorytabpage__["a" /* CategorytabpagePage */], { id: 1 });
    };
    DashboardPage.prototype.authtap = function (i, user_display_name) {
        if (this.user_display_name == user_display_name) {
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */], {
                id: i,
                rcentdata: this.recentdata,
                topid: 4,
            });
        }
    };
    DashboardPage.prototype.authtap1 = function (i, user_display_name) {
        if (this.user_display_name == user_display_name) {
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */], {
                id: i,
                rcentdata: this.playerlist,
                topid: 1,
            });
        }
    };
    DashboardPage.prototype.openstar = function (usermedia_id) {
        var _this = this;
        if (usermedia_id) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__viewtalent_viewtalent__["a" /* ViewtalentPage */], { rate: this.rate });
            modal.present();
            __WEBPACK_IMPORTED_MODULE_12_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.service.starmedia(_this.rate, usermedia_id); })
                .subscribe(function (data) { });
        }
    };
    DashboardPage.prototype.viewvideo = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__viewvideoplay_viewvideoplay__["a" /* ViewvideoplayPage */], {
            data: this.recentdata,
            id: id,
        });
        modal.present();
    };
    DashboardPage.prototype.viewvideotop = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__viewvideotopperformers_viewvideotopperformers__["a" /* ViewvideotopperformersPage */], {
            data: this.playerlist,
            id: id,
        });
        modal.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-dashboard",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/dashboard/dashboard.html"*/`<!-- \n<ion-header>\n\n  <ion-navbar color="primary">\n    \n   <ion-row no-padding>\n    <ion-col col-3 no-padding>\n        <ion-buttons left style="    width: 19px;">\n            <button ion-button menuToggle>\n            <ion-icon item-start>\n              <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n            </ion-icon>\n             </button>\n        </ion-buttons>\n    </ion-col>\n    <ion-col style="text-align:center" col-9 no-padding>\n        <img  class="img-style"   item-centred src="assets/welcome/logoart.png">\n    </ion-col>\n   </ion-row>\n   <ion-row no-padding>\n      <div class="segment-class">\n          <ion-segment  [(ngModel)]="pet" (ionChange)=onSegmentChanged($event)>\n              <ion-segment-button  class="seg-tab" value="recentuploads" >\n          Recent Uploads\n              </ion-segment-button>\n              <hr class="divider-seg">\n              <ion-segment-button class="seg-tab" value="top_performers" >\n           Top Performers\n              </ion-segment-button>\n              <hr class="divider-seg">\n              <ion-segment-button class="seg-tab" value="trending_items" >\n                  Trending Items\n                      </ion-segment-button>\n            </ion-segment>\n          </div>\n   </ion-row>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n   \n    <div *ngIf="catshow==true" id="categorylist" class="category-list" >\n        <ion-row style="    padding: 6px;">\n       <ion-col style="font-weight: 500;    font-weight: bold;font-size: 1.6rem;">Categories</ion-col>\n       <ion-col *ngIf="showcat==true" (click)="showcatevent(1)" class="prop-see" >See All</ion-col>\n       <ion-col *ngIf="showcat==false" (click)="showcatevent(2)" class="prop-see" >Close</ion-col>\n     </ion-row>\n     <ion-row  *ngIf="showcat==true"  style="margin-top: -8px;">\n       <ion-col class="col-cat" (click)="songtype(1)">\n         <img class="img-cat" src="assets/category/categories1.png">\n         <p class="cat-types">Music</p>\n     </ion-col>\n     <ion-col  class="col-cat" (click)="songtype(2)">\n         <img class="img-cat" src="assets/category/categories2.png">\n   <p class="cat-types">Dance</p>\n       </ion-col>\n     <ion-col  class="col-cat" (click)="songtype(3)">\n         <img class="img-cat" src="assets/category/categories3.png">\n    <p class="cat-types">Film</p>\n       </ion-col>\n     <ion-col  class="col-cat" (click)="songtype(4)">\n         <img class="img-cat" src="assets/category/categories4.png">\n         <p class="cat-types">Photography</p>\n     </ion-col>\n     <ion-col  class="col-cat" (click)="songtype(7)">\n         <img class="img-cat" src="assets/category/categories5.png">\n         <p class="cat-types">Litreature</p>\n     </ion-col>\n     </ion-row>\n    <div *ngIf="showcat==false" >\n      <ion-row>\n        <ion-col class="col-cat" (click)="songtype(1)">\n            <img class="img-cat" src="assets/category/categories1.png">\n            <p class="cat-types">Music</p>\n        </ion-col>\n        <ion-col  class="col-cat" (click)="songtype(2)">\n            <img class="img-cat" src="assets/category/categories2.png">\n      <p class="cat-types">Dance</p>\n          </ion-col>\n        <ion-col  class="col-cat" (click)="songtype(3)">\n            <img class="img-cat" src="assets/category/categories3.png">\n       <p class="cat-types">Film</p>\n          </ion-col>\n        <ion-col  class="col-cat" (click)="songtype(4)">\n            <img class="img-cat" src="assets/category/categories4.png">\n            <p class="cat-types">Photography</p>\n        </ion-col>\n       \n        </ion-row>\n        <ion-row>\n           \n            <ion-col  class="col-cat" (click)="songtype(7)">\n                <img class="img-cat" src="assets/category/categories5.png">\n          <p class="cat-types">Litreature</p>\n              </ion-col>\n            <ion-col  class="col-cat" (click)="songtype(8)">\n                <img class="img-cat" src="assets/category/categories6.png">\n           <p class="cat-types">Art</p>\n              </ion-col>\n            <ion-col  class="col-cat" (click)="songtype(5)">\n                <img class="img-cat" src="assets/category/categories7.png">\n                <p class="cat-types">Freestyle</p>\n            </ion-col>\n            <ion-col  class="col-cat" (click)="songtype(9)">\n                <img class="img-cat" src="assets/category/categories8.png">\n                <p class="cat-types">Personality</p>\n            </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col  class="col-cat" (click)="songtype(6)">\n                    <img class="img-cat" src="assets/category/categories9.png">\n                    <p class="cat-types">Other</p>\n                </ion-col>\n            </ion-row>\n      </div>\n      </div>\n    \n    <div [ngSwitch]="pet">\n       \n      <div  *ngSwitchCase="\'recentuploads\'">\n        <loaderdata *ngIf="loadingdata==\'on\'" ></loaderdata>\n     \n        <ion-list  class="recent-upload"  >\n   <ion-row padding>\n   <p class="head-p"><span class="span-head">Recent Uploads </span> in {{categorytag}}</p>    \n  </ion-row>   \n \n  \n    <ion-row *ngFor="let value of recentdata;let i=index"  style="    margin-top: -10px;    margin-bottom: 26px;">\n   \n  \n      <div  class="image-tag">\n       \n        <img  style="width: 89%;" [src]="value.category_image_url">\n       </div>\n   \n      \n      \n    \n      <div class="img-box" >\n      <div class="img-content">\n        <div class="cat-div" (click)="viewvideo(i)"> \n        \n          <img class="cat-icon" [src]="value.small_image_url">\n        </div>\n       \n        <div class="detail-grid">\n          \n        <div  style="margin-top: 6px;" class="detail-div">\n           \n           <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n           <p class="title-type" style="    width: 80%;\n          \n           text-overflow: ellipsis;\n           white-space: nowrap;\n           overflow: hidden;">{{value.artforms}} </p>\n           <div class="star-div" (click)="openstar(value.usermediaid)"> <ionic3-star-rating \n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "rgb(228, 215, 38)" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="value.rating">\n        </ionic3-star-rating></div>\n        </div>\n        \n        <div style="text-align:right; " class="detail-div1">\n          <div class="author-box" (click)="authtap(i)">\n       \n          <p style="    height: 0px;font-weight: bold">{{value.user_display_name}}</p>\n          <p>{{value.usermedia_posted}}</p>\n          </div>\n        </div>\n        <div   class="detail-div userpic">\n        \n          <img style="border-radius: 35px;" class="cat-icon" [src]="value.user_avatar">\n        </div>\n        </div>\n\n      </div>\n      </div>\n      <div class="post-img">\n   <div class="social-img">\n     \n     <div class="header1" >\n        <img class="img-post" src="assets/Dashboard/share-gray.png">\n        <div class="share-div" (click)="tapshow(i)"></div>\n      </div>\n      <div class="header1" (click)="followartist(value.artist_id)">\n          <img class="img-post" src="assets/Dashboard/user.png">\n        </div>\n        <div class="header1" (click)="navigatetomsg(i)">\n            <img class="img-post" src="assets/Dashboard/msg.png">\n          </div>\n          <div class="header1" (click)="reportnavigate(i)">\n              <img class="img-post" src="assets/Dashboard/error.png">\n            </div>\n\n      </div>\n    </div>\n   \n    </ion-row>\n    <p style="text-align: center;">{{completedata}}</p>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)" loadingSpinner="bubbles" loadingText="Loading data...">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n    </div>\n      <ion-list *ngSwitchCase="\'top_performers\'">\n        <div class="cat-style">\n         <button (click)="filtercat()" class="category-style" ion-button fulll color="primary">FILTER BY CATEGORIES</button>\n       </div> \n       <loaderdata *ngIf="loadingdata==\'on\'" ></loaderdata>\n       <ion-row style="    margin-top: -20px;" padding>\n          <p class="head-p"><span class="span-head">Top Performers </span> in All categories</p>    \n         </ion-row>  \n         \n       <div>\n       <ion-row *ngFor="let value of playerlist;let i=index"  style="    margin-top: -10px;    margin-bottom: 26px;">\n          <div class="image-tag">\n             \n              <img style="    width: 89%;" src="{{value.usermedia_path}}">\n             \n            </div>\n            <div class="img-box" >\n            <div class="img-content">\n             \n               <ion-row style="height: 105px;" (click)="viewvideotop(i)">\n                 <ion-col class="cols-style">\n                  0{{i+1}}\n                 </ion-col>\n               <ion-col style="text-align:end">\n                  <img class="\n                cat-icon1" [src]="value.covermediathumbnail">\n               </ion-col>\n                </ion-row>\n\n\n              <div class="detail-grid1">\n                \n              <div class="detail-div">\n                 <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n                 <p class="title-type1">{{value.toptype}}</p>\n                 <ion-row class="star-div"> \n                 <ion-col  col-2>\n                  <img style="height:13px;    margin: 4px 1px 2px -3px;" src="assets/Dashboard/rating.png">\n                </ion-col>\n                <ion-col col-10>\n                 <p class="count-like">{{value.totalrating}}</p>\n                </ion-col>\n                </ion-row>\n              </div>\n              <div class="image-box" >\n                <ion-row (click)="authtap1(i)">\n                  <ion-col class="user_name_topperformers" col-8 style="    text-align: end;">\n                    <p> {{value.user_display_name}}</p></ion-col>\n                  <ion-col col-3 style="margin-top: -2px;">\n                   \n                      <img  class="userimage1" src="{{value.user_avatar}}">\n                     \n                    </ion-col>\n                  </ion-row> \n                <ion-row style="    margin-top: -32px;" (click)="openstar(value.usermedia_id)" >\n                  <ion-col col-3>\n                        <p style="       margin-left: 9px;\n                        display: inline-block;    font-size: 1.5rem;\n                        position: absolute; right: -14px;">Vote</p>\n                  </ion-col>\n                  <ion-col col-9 style="padding: 9px;margin-top: 3px;display: flex;\n                  justify-content: center;">\n                      <ionic3-star-rating  \n                      activeIcon = "ios-star"\n                      defaultIcon = "ios-star-outline"\n                      activeColor = "rgb(228, 215, 38)" \n                      defaultColor = "rgb(228, 215, 38)"\n                      readonly="false"\n                      [rating]="value.rate" >\n                  </ionic3-star-rating>\n                    </ion-col>\n                  </ion-row>\n              </div>\n              \n              </div>\n      \n            </div>\n            </div>\n            <div class="post-img">\n         <div class="social-img">\n           \n           <div class="header1" >\n              <img class="img-post" src="assets/Dashboard/share-gray.png">\n              <div class="share-div" (click)="tapshowtop(i)"></div>\n            </div>\n            <div class="header1" (click)="followartist(value.artist_id)">\n                <img class="img-post" src="assets/Dashboard/user.png">\n              </div>\n              <div class="header1" (click)="navigatetomsgtop(i)">\n                  <img class="img-post" src="assets/Dashboard/msg.png">\n                </div>\n                <div class="header1" (click)="reportnavigate(i)">\n                    <img class="img-post" src="assets/Dashboard/error.png">\n                  </div>\n      \n            </div>\n          </div>\n          </ion-row>\n        </div>\n        \n        \n      </ion-list>\n      <ion-list *ngSwitchCase="\'trending_items\'">\n        \n        <div  *ngSwitchCase="\'trending_items\'">\n          <loaderdata *ngIf="loadingdata==\'on\'" ></loaderdata>\n          \n        <ion-list *ngIf="loadingdata==\'off\'" class="recent-upload"  >\n           \n     <ion-row padding>\n     <p class="head-p"><span class="span-head">Trending Items </span> in {{categorytag}}</p>    \n    </ion-row>   \n   \n  \n      <ion-row *ngFor="let value of recentdata;let i=index"  style="    margin-top: -10px;    margin-bottom: 26px;">\n   \n  \n        <div  class="image-tag">\n         \n          <img  style="width: 89%;" [src]="value.category_image_url">\n         </div>\n     \n        \n        \n      \n        <div class="img-box" >\n        <div class="img-content">\n          <div class="cat-div" (click)="viewvideo(i)"> \n          \n            <img class="cat-icon" [src]="value.small_image_url">\n          </div>\n         \n          <div class="detail-grid">\n            \n          <div  style="margin-top: 6px;" class="detail-div" (click)="openstar(value.usermediaid)">\n            \n             <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n             <p class="title-type" style="width:100%; ">{{value.artforms}}</p>\n             <div class="star-div"> <ionic3-star-rating \n              activeIcon = "ios-star"\n              defaultIcon = "ios-star-outline"\n              activeColor = "rgb(228, 215, 38)" \n              defaultColor = "#f4f4f4"\n              readonly="false"\n              [rating]="value.rating">\n          </ionic3-star-rating></div>\n          </div>\n          \n          <div style="text-align:right; " class="detail-div1">\n            <div class="author-box" (click)="authtap(i)">\n            \n            <p style="    height: 0px;font-weight: bold">{{value.user_display_name}}</p>\n            <p>{{value.usermedia_posted}}</p>\n            </div>\n          </div>\n          <div   class="detail-div userpic">\n          \n            <img style="border-radius: 35px;" class="cat-icon" [src]="value.user_avatar">\n          </div>\n          </div>\n  \n        </div>\n        </div>\n        <div class="post-img">\n     <div class="social-img">\n       \n       <div class="header1" >\n          <img class="img-post" src="assets/Dashboard/share-gray.png">\n          <div class="share-div" (click)="tapshow(value.artist_id)"></div>\n        </div>\n        <div class="header1" (click)="followartist(value.artist_id)">\n            <img class="img-post" src="assets/Dashboard/user.png">\n          </div>\n          <div class="header1" (click)="navigatetomsg()">\n              <img class="img-post" src="assets/Dashboard/msg.png">\n            </div>\n            <div class="header1" (click)="reportnavigate(i)">\n                <img class="img-post" src="assets/Dashboard/error.png">\n              </div>\n  \n        </div>\n      </div>\n     \n      </ion-row>\n      <p style="text-align: center;">{{completedata}}</p>\n      <ion-infinite-scroll (ionInfinite)="loadMore($event)" loadingSpinner="bubbles" loadingText="Loading data...">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n      </div>\n        \n        </ion-list>\n      </div>\n     \n</ion-content> -->\n<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-row no-padding>\n      <ion-col col-3 no-padding>\n        <ion-buttons left style="width: 19px;">\n          <button ion-button menuToggle>\n            <ion-icon item-start>\n              <img class="navbar-icon" item-left src="assets/Menu/navbar.png" />\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col style="text-align: center;" col-9 no-padding>\n        <img class="img-style" item-centred src="assets/welcome/logoart.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <div class="segment-class">\n        <ion-segment\n          mode="md"\n          [(ngModel)]="pet"\n          (ionChange)="onSegmentChanged($event)"\n        >\n          <ion-segment-button class="seg-tab" value="recentuploads">\n            Recent Uploads\n          </ion-segment-button>\n          <hr class="divider-seg" />\n          <ion-segment-button class="seg-tab" value="top_performers">\n            Top Performers\n          </ion-segment-button>\n          <hr class="divider-seg" />\n          <ion-segment-button class="seg-tab" value="trending_items">\n            Trending Items\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="catshow==true" id="categorylist" class="category-list">\n    <div class="inline-div">\n      <ion-row>\n        <ion-col style="font-weight: 500; font-weight: bold; font-size: 1.6rem;"\n          >Categories</ion-col\n        >\n\n        <ion-col\n          *ngIf="showbutton==true"\n          style="font-weight: 500; font-weight: bold; font-size: 1.6rem;"\n          (click)="refreshpage()"\n          >Back</ion-col\n        >\n        <ion-col\n          *ngIf="showcat==true"\n          (click)="showcatevent(1)"\n          class="prop-see"\n          >See All</ion-col\n        >\n        <ion-col\n          *ngIf="showcat==false"\n          (click)="showcatevent(2)"\n          class="prop-see"\n          >Close</ion-col\n        >\n      </ion-row>\n      <ion-row *ngIf="showcat==true" style="margin-top: -8px;">\n        <ion-col class="col-cat" (click)="songtype(8)">\n          <img class="img-cat" src="assets/category/categories6.png" />\n          <p class="cat-types">Art</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(1)">\n          <img class="img-cat" src="assets/category/categories1.png" />\n          <p class="cat-types">Music</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(2)">\n          <img class="img-cat" src="assets/category/categories2.png" />\n          <p class="cat-types">Dance</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(3)">\n          <img class="img-cat" src="assets/category/categories3.png" />\n          <p class="cat-types">Film</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(4)">\n          <img class="img-cat" src="assets/category/categories4.png" />\n          <p class="cat-types">Photography</p>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="showcat==false">\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(8)">\n            <img class="img-cat" src="assets/category/categories6.png" />\n            <p class="cat-types">Art</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(1)">\n            <img class="img-cat" src="assets/category/categories1.png" />\n            <p class="cat-types">Music</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(2)">\n            <img class="img-cat" src="assets/category/categories2.png" />\n            <p class="cat-types">Dance</p>\n          </ion-col>\n\n          <ion-col class="col-cat" (click)="songtype(4)">\n            <img class="img-cat" src="assets/category/categories4.png" />\n            <p class="cat-types">Photography</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(7)">\n            <img class="img-cat" src="assets/category/categories5.png" />\n            <p class="cat-types">Litreature</p>\n          </ion-col>\n\n          <ion-col class="col-cat" (click)="songtype(5)">\n            <img class="img-cat" src="assets/category/categories7.png" />\n            <p class="cat-types">Freestyle</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(9)">\n            <img class="img-cat" src="assets/category/categories8.png" />\n            <p class="cat-types">Personality</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(3)">\n            <img class="img-cat" src="assets/category/categories3.png" />\n            <p class="cat-types">Film</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(6)">\n            <img class="img-cat" src="assets/category/categories9.png" />\n            <p class="cat-types">Other</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."\n    ></ion-refresher-content>\n  </ion-refresher>\n  <div [ngSwitch]="pet">\n    <div *ngSwitchCase="\'recentuploads\'">\n      <!-- <loaderdata *ngIf="loadingdata==\'on\'" ></loaderdata> -->\n      <!-- <ion-list *ngIf="loadingdata==\'off\'" class="recent-upload"  > -->\n      <ion-list class="recent-upload">\n        <!-- <ion-row no-padding no-margin style="width: 90%; margin-left: 20px;">\n          <ion-col no-padding no-margin style="margin-top: 14px;">\n            <ion-searchbar\n              [(ngModel)]="searchMagazineString"\n              (input)="searchMagazines($event)"\n              placeholder="Search"\n              no-shadow\n              no-border\n              no-margin\n              no-padding\n              mode="md"\n            >\n            </ion-searchbar>\n          </ion-col>\n        </ion-row> -->\n\n        <ion-row padding>\n          <!-- <p class="head-p"><span class="span-head">Recent Upload </span> in {{categorytag}}</p>     -->\n          <p class="head-p">\n            <span class="span-head">{{tiles}} </span> in {{categorytag}}\n          </p>\n        </ion-row>\n\n        <ion-row\n          *ngFor="let value of recentdata;let i=index"\n          style="margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              [src]="value.category_image_url"\n            />\n          </div>\n\n          <div class="img-box">\n            <div class="img-content">\n              <div class="cat-div" (click)="viewvideo(i)">\n                <ion-row>\n                  <ion-col col-8>\n                    <img\n                      *ngIf="value.media_type==\'video/mp4\'||value.media_type==\'youtube\' || value.media_type==\'audio/mpeg\' || value.media_type==\'audio/mp3\'"\n                      class="play-style"\n                      src="assets/play.png"\n                    />\n                  </ion-col>\n                  <ion-col col-4>\n                    <img class="cat-icon" [src]="value.small_image_url" />\n                  </ion-col>\n                </ion-row>\n              </div>\n\n              <div class="details">\n                <ion-row>\n                  <ion-col col-5>\n                    <div class="details-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.artforms}}</p>\n                      <!-- <div *ngIf="user_display_name!=value.user_display_name" class="stars" (click)="openstar(value.rating,value.usermediaid,value.user_display_name)"> <ionic3-star-rating  -->\n                      <div\n                        *ngIf="user_display_name!=value.user_display_name"\n                        class="stars"\n                        (click)="openstar(value.usermediaid)"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="false"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n\n                      <div\n                        *ngIf="user_display_name==value.user_display_name"\n                        class="stars"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="true"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n                    </div>\n                  </ion-col>\n\n                  <!-- <ion-col  col-1>\n             <img src="assets/Dashboard/rating.png" class="star-img-1">\n           </ion-col>\n           <ion-col col-2>\n            <p class="count-like">{{value.totalrating}}</p>\n           </ion-col> -->\n\n                  <ion-col col-4>\n                    <div class="details-2">\n                      <p class="author-name">{{value.user_display_name}}</p>\n                      <!-- <p class="post-time">{{value.usermedia_posted}}</p> -->\n                    </div>\n                  </ion-col>\n                  <ion-col col-3>\n                    <figure class="author-img">\n                      <img\n                        (click)="authtap(i,value.user_display_name)"\n                        style="border-radius: 35px;"\n                        class="custom-cat-icon"\n                        [src]="value.user_avatar"\n                      />\n                    </figure>\n                  </ion-col>\n                </ion-row>\n              </div>\n\n              <!-- <div class="detail-grid">\n          \n        <div  style="margin-top: 6px;" class="detail-div">\n           \n           <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n           <p class="title-type" style="    width: 80%;\n          \n           text-overflow: ellipsis;\n           white-space: nowrap;\n           overflow: hidden;">{{value.artforms}} </p>\n\n           \n           <div *ngIf="user_display_name!=value.user_display_name" class="star-div" (click)="openstar(value.rating,value.usermediaid,value.user_display_name)"> <ionic3-star-rating \n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "rgb(228, 215, 38)" \n            defaultColor = "#f4f4f4"\n            readonly="false"\n            [rating]="value.rating">\n        </ionic3-star-rating></div>\n      \n        <div *ngIf="user_display_name==value.user_display_name" class="star-div" > <ionic3-star-rating \n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "rgb(228, 215, 38)" \n          defaultColor = "#f4f4f4"\n          readonly="true"\n          [rating]="value.rating">\n      </ionic3-star-rating></div>\n      </div>\n        \n        <div style="text-align:right; " class="detail-div1">\n          <div class="author-box" >\n           \n          <p  style="    height: 0px;font-weight: bold">{{value.user_display_name}}</p>\n          <p>{{value.usermedia_posted}}</p>\n          </div>\n        </div>\n        <div   class="detail-div userpic">\n        \n          <img (click)="authtap(i,value.user_display_name)" style="border-radius: 35px;" class="cat-icon" [src]="value.user_avatar">\n        </div>\n        </div> -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshow(i)"></div>\n              </div>\n              <div\n                class="header1"\n                (click)="followartist(value.artist_id,value.user_display_name)"\n              >\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetomsg(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate(i)">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n            </div>\n          </div>\n        </ion-row>\n        <p style="text-align: center;">{{completedata}}</p>\n        <ion-infinite-scroll\n          (ionInfinite)="loadMore($event)"\n          loadingSpinner="bubbles"\n          loadingText="Loading data..."\n        >\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n    </div>\n    <ion-list class="top_performers" *ngSwitchCase="\'top_performers\'">\n      <div class="cat-style">\n        <button\n          (click)="filtercat()"\n          class="category-style"\n          ion-button\n          fulll\n          color="primary"\n        >\n          FILTER BY CATEGORIES\n        </button>\n      </div>\n      <!-- <loaderdata *ngIf="loadingdata==\'on\'" ></loaderdata> -->\n      <ion-row style="margin-top: -20px;" padding>\n        <p class="head-p">\n          <span class="span-head">Top Performers </span> in All categories\n        </p>\n      </ion-row>\n\n      <div>\n        <ion-row\n          *ngFor="let value of playerlist;let i=index"\n          style="margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              src="{{value.usermedia_path}}"\n            />\n            <!-- <img style="    width: 89%;" src="{{value.media_thumbnail_url}}"> -->\n          </div>\n          <div class="img-box">\n            <div class="img-content">\n              <ion-row style="height: 105px;" (click)="viewvideotop(i)">\n                <ion-col class="cols-style">\n                  0{{i+1}}\n                </ion-col>\n                <ion-col style="text-align: end;">\n                  <ion-row>\n                    <ion-col>\n                      <img\n                        style="\n                          height: 47px;\n                          position: absolute;\n                          top: 100%;\n\n                          right: 79%;\n                        "\n                        *ngIf="value.usermedia_type==\'video/mp4\'||value.usermedia_type==\'youtube\' || value.usermedia_type==\'audio/mpeg\' || value.usermedia_type==\'audio/mp3\' "\n                        src="assets/play.png"\n                      />\n                    </ion-col>\n                    <ion-col>\n                      <img\n                        class="cat-icon1"\n                        [src]="value.covermediathumbnail"\n                      />\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n\n              <!-- DETAILS-TOP -->\n              <div class="details-top">\n                <ion-row>\n                  <ion-col col-6>\n                    <div class="details-top-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.toptype}}</p>\n                      <ion-row class="number-star">\n                        <ion-col col-2>\n                          <img\n                            src="assets/Dashboard/rating.png"\n                            class="star-img-1"\n                          />\n                        </ion-col>\n                        <ion-col col-10>\n                          <p class="count-like">{{value.totalrating}}</p>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                  </ion-col>\n                  <ion-col col-6>\n                    <div class="details-top-2">\n                      <ion-row>\n                        <ion-col col-12>\n                          <p class="author-name">{{value.user_display_name}}</p>\n                          <figure class="author-img">\n                            <img\n                              (click)="authtap1(i,value.user_display_name)"\n                              style="border-radius: 35px;"\n                              class="custom-cat-icon-1"\n                              [src]="value.user_avatar"\n                            />\n                          </figure>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row (click)="openstar(value.usermedia_id)">\n                        <ion-col col-3>\n                          <p>Vote</p>\n                        </ion-col>\n                        <ion-col col-9>\n                          <div class="stars-1">\n                            <ionic3-star-rating\n                              *ngIf="user_display_name!=value.user_display_name"\n                              activeIcon="ios-star"\n                              defaultIcon="ios-star-outline"\n                              activeColor="rgb(228, 215, 38)"\n                              defaultColor="rgb(228, 215, 38)"\n                              readonly="false"\n                              [rating]="value.rate"\n                            >\n                            </ionic3-star-rating>\n\n                            <ionic3-star-rating\n                              *ngIf="user_display_name==value.user_display_name"\n                              activeIcon="ios-star"\n                              defaultIcon="ios-star-outline"\n                              activeColor="rgb(228, 215, 38)"\n                              defaultColor="rgb(228, 215, 38)"\n                              readonly="true"\n                              [rating]="value.rate"\n                            >\n                            </ionic3-star-rating>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- End DETAILS-TOP -->\n\n              <!-- <div class="detail-grid1">\n                \n              <div class="detail-div">\n                 <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n                 <p class="title-type1">{{value.toptype}}</p>\n                 <ion-row class="star-div"> \n                 <ion-col  col-2>\n                  <img style="height:13px;    margin: 4px 1px 2px -3px;" src="assets/Dashboard/rating.png">\n                </ion-col>\n                <ion-col col-10>\n                 <p class="count-like">{{value.totalrating}}</p>\n                </ion-col>\n                </ion-row>\n              </div>\n              <div class="image-box" >\n                <ion-row (click)="authtap1(i,value.user_display_name)">\n                  <ion-col class="user_name_topperformers" col-8 style="    text-align: end;">\n                    <p> {{value.user_display_name}}</p></ion-col>\n                  <ion-col col-3 style="margin-top: -2px;">\n                   \n                      <img  class="userimage1" src="{{value.user_avatar}}">\n                     \n                    </ion-col>\n                  </ion-row> \n                <ion-row style="    margin-top: -32px;" (click)="openstar(value.usermedia_id)" >\n                  <ion-col col-3>\n                        <p style="       margin-left: 9px;\n                        display: inline-block;    font-size: 1.5rem;\n                        position: absolute; right: -14px;">Vote</p>\n                  </ion-col>\n                  <ion-col col-9 style="padding: 9px;margin-top: 3px;display: flex;\n                  justify-content: center;">\n                      <ionic3-star-rating *ngIf="user_display_name!=value.user_display_name" \n                      activeIcon = "ios-star"\n                      defaultIcon = "ios-star-outline"\n                      activeColor = "rgb(228, 215, 38)" \n                      defaultColor = "rgb(228, 215, 38)"\n                      readonly="false"\n                      [rating]="value.rate" >\n                  </ionic3-star-rating>\n                   \n                  <ionic3-star-rating *ngIf="user_display_name==value.user_display_name" \n                      activeIcon = "ios-star"\n                      defaultIcon = "ios-star-outline"\n                      activeColor = "rgb(228, 215, 38)" \n                      defaultColor = "rgb(228, 215, 38)"\n                      readonly="true"\n                      [rating]="value.rate" >\n                  </ionic3-star-rating>\n\n                    </ion-col>\n                  </ion-row>\n              </div>\n              \n              </div>  -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshowtop(i)"></div>\n              </div>\n              <div\n                class="header1"\n                (click)="followartist(value.artist_id,value.user_display_name)"\n              >\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetomsgtop(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate(i)">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n            </div>\n          </div>\n        </ion-row>\n      </div>\n      <!-- <loaderdata></loaderdata> -->\n    </ion-list>\n    <ion-list *ngSwitchCase="\'trending_items\'">\n      <div *ngSwitchCase="\'trending_items\'">\n        <!-- <loaderdata *ngIf="loadingdata==\'on\'" ></loaderdata> -->\n\n        <ion-list *ngIf="loadingdata==\'off\'" class="recent-upload">\n          <ion-row padding>\n            <p class="head-p">\n              <span class="span-head">Trending Items </span> in {{categorytag}}\n            </p>\n          </ion-row>\n\n          <!-- <ion-row *ngFor="let value of fakedata"  style="    margin-top: -10px;    margin-bottom: 26px;">\n      <div class="image-tag">\n         \n          <img style="    width: 89%;" src="assets/Dashboard/thumbnail.png">\n         \n        </div>\n        <div class="img-box" >\n        <div class="img-content">\n          <div class="cat-div" (click)="viewvideo()"> \n            <img class="\n            cat-icon" src="assets/Dashboard/artist_profile1.png">\n          </div>\n         \n          <div class="detail-grid">\n            \n          <div style="margin-top: 6px;" class="detail-div">\n             <p style="font-weight: bold;" class="music-type">King Cay Music</p>\n             <p class="title-type">Music / Hip Hop/ Rap</p>\n             <div class="star-div"> <ionic3-star-rating \n              activeIcon = "ios-star"\n              defaultIcon = "ios-star-outline"\n              activeColor = "rgb(228, 215, 38)" \n              defaultColor = "#f4f4f4"\n              readonly="true"\n              [rating]="5">\n          </ionic3-star-rating></div>\n          </div>\n          \n          <div style="text-align:right; " class="detail-div1">\n            <div class="author-box" (click)="authtap()">\n            <p style="    height: 0px;font-weight: bold">King Cay</p>\n            <p>10 mins ago</p>\n            </div>\n          </div>\n          <div   class="detail-div userpic">\n            <img class="userimage" src="assets/tabsicon/propic.jpg">\n          </div>\n          </div>\n  \n        </div>\n        </div>\n        <div class="post-img">\n     <div class="social-img">\n       \n       <div class="header1" >\n          <img class="img-post" src="assets/Dashboard/share-gray.png">\n          <div class="share-div" (click)="tapshow()"></div>\n        </div>\n        <div class="header1" (click)="followartist()">\n            <img class="img-post" src="assets/Dashboard/user.png">\n          </div>\n          <div class="header1" (click)="navigatetomsg()">\n              <img class="img-post" src="assets/Dashboard/msg.png">\n            </div>\n            <div class="header1" (click)="reportnavigate()">\n                <img class="img-post" src="assets/Dashboard/error.png">\n              </div>\n  \n        </div>\n      </div>\n      </ion-row> -->\n          <ion-row\n            *ngFor="let value of recentdata;let i=index"\n            style="margin-top: -10px; margin-bottom: 26px;"\n          >\n            <div class="image-tag">\n              <img\n                style="\n                  width: 89%;\n                  object-fit: cover;\n                  background-color: #2e2e2e;\n                "\n                [src]="value.category_image_url"\n              />\n            </div>\n\n            <div class="img-box">\n              <div class="img-content">\n                <div class="cat-div" (click)="viewvideo(i)">\n                  <img class="cat-icon" [src]="value.small_image_url" />\n                </div>\n\n                <div class="detail-grid">\n                  <div\n                    style="margin-top: 6px;"\n                    class="detail-div"\n                    (click)="openstar(value.usermediaid)"\n                  >\n                    <!-- <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n             <p class="title-type">{{value.artforms}}</p> -->\n                    <p style="font-weight: bold;" class="music-type">\n                      {{value.usermedia_name}}\n                    </p>\n                    <p class="title-type" style="width: 100%;">\n                      {{value.artforms}}\n                    </p>\n                    <div\n                      *ngIf="user_display_name!=value.user_display_name"\n                      class="star-div"\n                    >\n                      <ionic3-star-rating\n                        activeIcon="ios-star"\n                        defaultIcon="ios-star-outline"\n                        activeColor="rgb(228, 215, 38)"\n                        defaultColor="#f4f4f4"\n                        readonly="false"\n                        [rating]="value.rating"\n                      >\n                      </ionic3-star-rating>\n                    </div>\n\n                    <div\n                      *ngIf="user_display_name==value.user_display_name"\n                      class="star-div"\n                    >\n                      <ionic3-star-rating\n                        activeIcon="ios-star"\n                        defaultIcon="ios-star-outline"\n                        activeColor="rgb(228, 215, 38)"\n                        defaultColor="#f4f4f4"\n                        readonly="true"\n                        [rating]="value.rating"\n                      >\n                      </ionic3-star-rating>\n                    </div>\n                  </div>\n\n                  <div style="text-align: right;" class="detail-div1">\n                    <div class="author-box">\n                      <!-- <p style="    height: 0px;font-weight: bold">{{value.user_display_name}}</p>\n            <p>{{value.postedtime}}</p> -->\n                      <p style="height: 0px; font-weight: bold;">\n                        {{value.user_display_name}}\n                      </p>\n                      <p>{{value.usermedia_posted}}</p>\n                    </div>\n                  </div>\n                  <div class="detail-div userpic">\n                    <img\n                      (click)="authtap(i,value.user_display_name)"\n                      style="border-radius: 35px;"\n                      class="cat-icon"\n                      [src]="value.user_avatar"\n                    />\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="post-img">\n              <div class="social-img">\n                <div class="header1">\n                  <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                  <div\n                    class="share-div"\n                    (click)="tapshow(value.artist_id)"\n                  ></div>\n                </div>\n                <div\n                  class="header1"\n                  (click)="followartist(value.artist_id,user_display_name)"\n                >\n                  <img class="img-post" src="assets/Dashboard/user.png" />\n                </div>\n                <div class="header1" (click)="navigatetomsg()">\n                  <img class="img-post" src="assets/Dashboard/msg.png" />\n                </div>\n                <div class="header1" (click)="reportnavigate(i)">\n                  <img class="img-post" src="assets/Dashboard/error.png" />\n                </div>\n              </div>\n            </div>\n          </ion-row>\n          <p style="text-align: center;">{{completedata}}</p>\n          <ion-infinite-scroll\n            (ionInfinite)="loadMore($event)"\n            loadingSpinner="bubbles"\n            loadingText="Loading data..."\n          >\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n        </ion-list>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__providers_dashboardservice_dashboardservice__["a" /* DashboardserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
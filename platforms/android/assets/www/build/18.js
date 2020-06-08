webpackJsonp([18],{

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatinboxreplyPageModule", function() { return ChatinboxreplyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatinboxreply__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatinboxreplyPageModule = (function () {
    function ChatinboxreplyPageModule() {
    }
    ChatinboxreplyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatinboxreply__["a" /* ChatinboxreplyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatinboxreply__["a" /* ChatinboxreplyPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chatinboxreply__["a" /* ChatinboxreplyPage */]
            ]
        })
    ], ChatinboxreplyPageModule);
    return ChatinboxreplyPageModule;
}());

//# sourceMappingURL=chatinboxreply.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatinboxreplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChatinboxreplyPage = (function () {
    function ChatinboxreplyPage(file, toastCtrl, filetransfer, camera, filechoose, actionsheetCtrl, actionsheet, security, navCtrl, navParams) {
        this.file = file;
        this.toastCtrl = toastCtrl;
        this.filetransfer = filetransfer;
        this.camera = camera;
        this.filechoose = filechoose;
        this.actionsheetCtrl = actionsheetCtrl;
        this.actionsheet = actionsheet;
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.page = 1;
        this.messagedata = [];
    }
    ChatinboxreplyPage.prototype.ionViewDidLoad = function () {
        this.mediatype = 1;
        this.loading = true;
        this.loader = true;
        this.loaderspinner = false;
        this.loaddata();
        this.createconversation();
        // this.contentArea.scrollToBottom();
        // this.pageTop.scrollToTop();
        //   this.mutationObserver = new MutationObserver((mutations) => {
        //     this.contentArea.scrollToBottom();
        // });
    };
    ChatinboxreplyPage.prototype.loaddata = function () {
        var _this = this;
        this.id = this.navParams.get('id');
        console.log('ionViewDidLoad ChatinboxreplyPage');
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.markasread(_this.id); }).subscribe(function (data) {
            _this.loading = false;
        });
    };
    ChatinboxreplyPage.prototype.loadMore = function (infiniteScroll) {
        this.page++;
        console.log(this.page);
        console.log(this.totalpages);
        if (this.totalpages >= this.page) {
            this.createconversation(infiniteScroll);
        }
        else {
            this.loader = false;
            console.log('falsee');
        }
    };
    ChatinboxreplyPage.prototype.createconversation = function (infiniteScroll) {
        var _this = this;
        this.imgsrc = '';
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.createconversation(_this.id, _this.page); }).subscribe(function (data) {
            _this.totalpages = data.totalPages;
            if (data.conversation.Conversations.conversation_id) {
                _this.conversationid = data.conversation.Conversations.conversation_id;
            }
            //  this.conversationid=data.conversation.Conversations.conversation_id 
            // this.username=data.user.user_display_name
            _this.message = _this.getconvdata(data.messages);
            console.log('message', _this.message);
            if (data.user.user_profile_avatar) {
                _this.img = data.user.user_profile_avatar;
            }
            // this.img=data.user.user_profile_avatar
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        });
    };
    ChatinboxreplyPage.prototype.getconvdata = function (data) {
        for (var i = 0; i < data.length; i++) {
            this.messagefilter = data[i].Messages.message;
            this.messagefilter2 = this.messagefilter.substring(1, this.messagefilter.length - 1);
            console.log('message' + this.messagefilter);
            this.messagedata.push({ user_profile_avatar: data[i].Users.user_profile_avatar,
                user_display_name: data[i].Users.user_display_name,
                message: this.messagefilter2,
                file_name: data[i].Messages.file_name,
                status: data[i].MessageStatus.status,
                file_url: data[i].Messages.file_url,
                file_type: data[i].Messages.file_type,
                message_id: data[i].Messages.message_id,
                created: data[i].Messages.created
            });
        }
        console.log('messagedata' + this.messagedata);
        this.messagedata.reverse();
        return this.messagedata;
    };
    ChatinboxreplyPage.prototype.replytomessage = function () {
        var _this = this;
        if (this.comments) {
            this.loaderspinner = true;
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.security.replytoconv(_this.conversationid, _this.comments); }).subscribe(function (data) {
                _this.loaderspinner = false;
                _this.comments = '';
                _this.messagedata = [];
                _this.page = 1;
                console.log('messageid' + data.messageId);
                if (_this.imgsrc) {
                    if (_this.mediatype == 2) {
                        _this.uploadvideosecond(data.messageId);
                    }
                    else {
                        _this.imageupload(data.messageId);
                    }
                }
                else {
                    _this.createconversation();
                }
            });
        }
        else {
            this.toastCtrl.create({ message: "Message Can not be blank", duration: 4000, position: 'top' }).present();
        }
    };
    ChatinboxreplyPage.prototype.fileadd = function () {
        this.filechoose.open()
            .then(function (uri) {
            // alert('uri'+JSON.stringify(uri))
        })
            .catch(function (e) {
            // alert('error'+JSON.stringify(e))
        });
    };
    ChatinboxreplyPage.prototype.mediaoption = function () {
        var _this = this;
        console.log('messagei' + this.messagedata[this.messagedata.length - 1].message_id);
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Choose Upload Option!',
            buttons: [{
                    text: 'Upload Images',
                    handler: function () {
                        _this.capturecamera();
                    },
                },
                {
                    text: 'Upload Video',
                    handler: function () {
                        _this.UploadVideoFromGallery();
                    }
                }]
        });
        actionsheet.present();
    };
    ChatinboxreplyPage.prototype.UploadVideoFromGallery = function () {
        var _this = this;
        this.toastCtrl.create({ message: "Upload File below then 5mb.", duration: 4000, position: 'top' }).present();
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            mediaType: this.camera.MediaType.VIDEO
        })
            .then(function (fileuri) {
            fileuri = 'file:///' + fileuri;
            // alert('fileuri'+fileuri)
            // this.imgsrc=fileuri
            // this.uploadvideosecond()
            _this.file.resolveLocalFilesystemUrl(fileuri).then(function (fileEntry) {
                // alert('hii')
                // alert(fileuri)
                fileEntry.getMetadata(function (metadata) {
                    //metadata.size is the size in bytes
                    //  alert('size'+metadata.size)
                    if (metadata.size < 25224) {
                        _this.imgsrc = fileuri;
                        _this.mediatype = 2;
                        _this.toastCtrl.create({ message: "Image uploaded successfully.", duration: 4000, position: 'top' }).present();
                        //this.eleRef.nativeElement.querySelector('#imgfile').dispatchEvent(new Event('click')); 
                    }
                    else if (metadata.size > 25224) {
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                    else {
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                });
            });
        }, function (err) {
            alert(err);
        });
    };
    ChatinboxreplyPage.prototype.uploadvideosecond = function (messageId) {
        var _this = this;
        var sessionId = localStorage['sessionId'];
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({
            'enctype': 'multipart/form-data;',
            // 'Content-Type': 'application/json', 
            // 'Content-Type': 'multipart/form-data',
            'X-Cookie': 'CAKEPHP=' + sessionId,
            'Access-Control-Allow-Origion': '*',
            'Connection': 'close',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie'
        });
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: 'messageFile',
            fileName: 'filename.mp4',
            chunkedMode: false,
            mimeType: "video/mp4",
            headers: headers,
            httpMethod: 'POST',
            params: { "messageId": messageId }
            // params: {"messageId": this.messagedata[this.messagedata.length-1].message_id}
        };
        // alert('videodata'+this.imgsrc)
        filetransfers.upload(this.imgsrc, 'https://www.artformplatform.com/api/upload/message.json', options)
            .then(function (data) {
            //     alert('hi')
            // alert('DATA'+JSON.stringify(data))
            _this.messagedata = [];
            _this.createconversation();
        }, function (err) {
            alert('bi');
            alert('erro34' + JSON.stringify(err));
        });
    };
    ChatinboxreplyPage.prototype.capturecamera = function () {
        var _this = this;
        console.log('messagei' + this.messagedata[this.messagedata.length - 1].message_id);
        this.toastCtrl.create({ message: "Upload File below then 5mb.", duration: 4000, position: 'top' }).present();
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Image Upload!',
            buttons: [{
                    text: 'Upload From Gallery',
                    handler: function () {
                        _this.gallery();
                    },
                },
                {
                    text: 'Take A Snap',
                    handler: function () {
                        _this.camera1();
                    }
                }]
        });
        actionsheet.present();
    };
    ChatinboxreplyPage.prototype.camera1 = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false,
            correctOrientation: true
        }).then(function (imageData) {
            // alert('imagedata'+imageData)
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (fileEntry) {
                // alert('hii')
                // alert(imageData)
                fileEntry.getMetadata(function (metadata) {
                    //metadata.size is the size in bytes
                    //  alert('size'+metadata.size)
                    if (metadata.size < 25224) {
                        _this.imgsrc = imageData;
                        _this.toastCtrl.create({ message: "Image uploaded successfully.", duration: 4000, position: 'top' }).present();
                        //this.eleRef.nativeElement.querySelector('#imgfile').dispatchEvent(new Event('click')); 
                    }
                    else if (metadata.size > 25224) {
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                    else {
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                });
            });
            // this.imgsrc = "data:image/jpeg;base64," + imageData;
            // this.imageupload()
        }, function (err) {
        });
    };
    ChatinboxreplyPage.prototype.gallery = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false,
            correctOrientation: true
        }).then(function (imageData) {
            // alert('imagedata'+imageData)
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (fileEntry) {
                // alert('hii')
                // alert(imageData)
                fileEntry.getMetadata(function (metadata) {
                    //metadata.size is the size in bytes
                    //  alert('size'+metadata.size)
                    if (metadata.size < 25224) {
                        _this.imgsrc = imageData;
                        _this.toastCtrl.create({ message: "Image uploaded successfully.", duration: 4000, position: 'top' }).present();
                        //this.eleRef.nativeElement.querySelector('#imgfile').dispatchEvent(new Event('click')); 
                    }
                    else if (metadata.size > 25224) {
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                    else {
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                });
            });
            //  this.imgsrc = "data:image/jpeg;base64," + imageData;
            // this.imageupload()
        }, function (err) {
        });
    };
    ChatinboxreplyPage.prototype.imageupload = function (messageId) {
        var _this = this;
        var sessionId = localStorage['sessionId'];
        // alert(sessionId)
        // alert('imgsrc'+this.imgsrc)
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({
            'enctype': 'multipart/form-data;',
            // 'Content-Type': 'application/json', 
            // 'Content-Type': 'multipart/form-data',
            'X-Cookie': 'CAKEPHP=' + sessionId,
            'Access-Control-Allow-Origion': '*',
            'Connection': 'close',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie'
        });
        // let headers = new Headers({ 'Content-Type': 'multipart/form-data','X-Cookie': 'CAKEPHP='+sessionId ,'Access-Control-Allow-Origion':'*','Accept':'application/json','Access-Control-Allow-Credentials': true})
        // headers.append('Content-Type','application/json');
        // headers.append('Accept','application/json');
        // headers.append('Access-Control-Allow-Origion','*');
        // alert('msg_id'+messageId)
        // alert(headers)
        // alert(JSON.stringify(headers))
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: 'messageFile',
            fileName: 'filename.jpg',
            chunkedMode: false,
            headers: headers,
            httpMethod: 'POST',
            mimeType: "image/jpeg",
            params: { "messageId": messageId },
        };
        // filetransfers.upload(this.imgsrc,'https://www.demo.artformplatform.com/api/messages/upload.json', options)
        filetransfers.upload(this.imgsrc, 'https://www.artformplatform.com/api/upload/message.json', options)
            .then(function (data) {
            //       alert('upload')
            // alert('data11'+JSON.stringify(data))
            _this.messagedata = [];
            _this.createconversation();
        }, function (err) {
            alert('bii' + err);
            alert('error4' + JSON.stringify(err));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ChatinboxreplyPage.prototype, "pageTop", void 0);
    ChatinboxreplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatinboxreply',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/chatinboxreply/chatinboxreply.html"*/`<!--\n  Generated template for the ChatinboxreplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title style="text-align:center;    margin-left: -20px;">{{username}}</ion-title>\n    <ion-buttons  right style="    width: 19px;    margin-right: 12px;">\n       \n      <ion-icon >\n        <img *ngIf="loading==false" style="margin-right: 16px;      border-radius: 50%;\n        \n        height: 18px;width:18px " class="navbar-icon" item-left [src]="img">\n      </ion-icon>\n  \n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding #pageTop>\n  <ion-list *ngIf="loading==true">\n    <p style="    text-align: center;">Loading messages..</p>\n  </ion-list>\n <ion-list *ngIf="loading==false">\n    <ion-infinite-scroll *ngIf="loader==true" (ionInfinite)="loadMore($event)" loadingSpinner="bubbles" loadingText="Loading data...">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n<div *ngFor="let value of message" style="    margin-bottom: 19px;">\n   \n  <img style="    height: 30px;\n  border-radius: 50%;\n  width: 30px;" [src]="value.user_profile_avatar">\n  <div class="bubble-box">\n    <p class="p-name">{{value.user_display_name}}</p>\n    <div [innerHTML]="value.message" >\n      <!-- <div> -->\n      <!-- <p>{{value.message}}</p> -->\n    </div>\n\n    </div>\n    <div style="padding: 28px;" *ngIf="value.file_type==\'image\'">\n<img [src]="value.file_url" >\n    </div>\n    <div style="padding: 28px;" *ngIf="value.file_type==\'video\'">\n      <video  width="300" controls>\n        <source [src]="value.file_url" type="video/mp4">\n      </video>\n          </div>\n    <div style="text-align: end;">{{value.status}}</div>\n    <div style="text-align:start">{{value.created | date:format}}</div>\n</div>\n\n </ion-list>\n\n\n\n\n</ion-content>\n\n<ion-footer class="footer-style">\n    \n    <ion-spinner *ngIf="loaderspinner==true"></ion-spinner>\n  <ion-item *ngIf="loaderspinner==false"  class="item-input"  >\n       \n    <img   style="    height: 35px;" (click)="replytomessage()" class="icon-img" src="assets/commentsbox/gps.png" item-right primary>  \n \n   \n    <img  class="icon-img" (click)="mediaoption()" src="assets/create_conversation/attachment.png" item-left primary>\n    <ion-input *ngIf="imgsrc"  [(ngModel)]="imgsrc" class="input-font-family" placeholder="Upload File"></ion-input>\n    <ion-input  [(ngModel)]="comments" class="input-font-family" placeholder="Enter Comment"></ion-input>\n        \n        </ion-item>\n</ion-footer>`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/chatinboxreply/chatinboxreply.html"*/,
            queries: {
                content: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"](__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ChatinboxreplyPage);
    return ChatinboxreplyPage;
}());

//# sourceMappingURL=chatinboxreply.js.map

/***/ })

});
//# sourceMappingURL=18.js.map
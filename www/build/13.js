webpackJsonp([13],{

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateconversationpagePageModule", function() { return CreateconversationpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createconversationpage__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_tag_input__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_tag_input__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateconversationpagePageModule = (function () {
    function CreateconversationpagePageModule() {
    }
    CreateconversationpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__createconversationpage__["a" /* CreateconversationpagePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createconversationpage__["a" /* CreateconversationpagePage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_tag_input__["RlTagInputModule"],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__createconversationpage__["a" /* CreateconversationpagePage */]],
        })
    ], CreateconversationpagePageModule);
    return CreateconversationpagePageModule;
}());

//# sourceMappingURL=createconversationpage.module.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateconversationpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(183);
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
 * Generated class for the CreateconversationpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateconversationpagePage = (function () {
    function CreateconversationpagePage(toastCtrl, file, app, filetransfer, camera, actionsheetCtrl, alertCtrl, security, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.app = app;
        this.filetransfer = filetransfer;
        this.camera = camera;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.topics = [];
        this.talks = [];
        this.preparedTags = [];
        this.preparedTags1 = [];
        this.idtags = [];
        this.preparetags2 = [];
        this.idatags2 = [];
        this.loader = false;
        this.searching = false;
        this.searchingtext = false;
        this.mediatype = 1;
    }
    CreateconversationpagePage.prototype.addTalk = function () {
        var _this = this;
        console.log('fgf', this.topics);
        if (this.topics.length != 0) {
            console.log('hi');
            console.log('value', this.topics);
            console.log('preparedtags', this.preparedTags);
            console.log(this.preparedTags.length);
            for (var i = 0; i < this.preparedTags1.length; i++) {
                console.log('text', this.topics.indexOf(this.preparedTags1[i].text));
                if (this.topics.indexOf(this.preparedTags1[i].text) > -1) {
                    this.idtags.push(this.preparedTags1[i].id);
                    console.log('idatags', this.idtags);
                }
            }
            for (i = 0; i < this.idtags.length; i++) {
                if (this.idatags2.indexOf(this.idtags[i]) === -1) {
                    this.idatags2.push(this.idtags[i]);
                }
            }
            console.log('idtags222', this.idatags2);
            // console.log('idtags',this.idtags)
            this.loader = true;
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.security.conversation(_this.idatags2, _this.title, _this.Message); }).subscribe(function (data) {
                if (_this.attachedsrc) {
                    if (_this.mediatype == 2) {
                        // alert('imageload')
                        _this.uploadvideosecond(data.messageId);
                    }
                    else {
                        // alert('dataload')
                        _this.imageupload(data.messageId);
                    }
                }
                else {
                    _this.loader = false;
                    // this.navCtrl.setRoot(TabspagePage,{id:4})
                    _this.app.getActiveNav().popToRoot();
                }
                // this.navCtrl.pop()
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Please Enter Aleast One Valid Recipient',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    CreateconversationpagePage.prototype.ionViewDidLoad = function () {
        this.titlevalid = false;
        console.log('ionViewDidLoad CreateconversationpagePage');
        // this.createconv()
    };
    CreateconversationpagePage.prototype.createconv = function (event) {
        var _this = this;
        console.log('ev', event.target.value);
        console.log('lenghth', event.target.value.length);
        if (event.target.value.length > 3) {
            this.titlevalid = false;
            this.searching = true;
            this.searchingtext = false;
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.security.getrecipients(event.target.value); }).subscribe(function (data) {
                console.log(data);
                if (data.status != 'fail') {
                    _this.searching = false;
                    _this.preparetags2 = data.results;
                    console.log('prepare 2', _this.preparetags2);
                    for (var i = 0; i < data.results.length; i++) {
                        if (_this.preparedTags.indexOf(data.results[i].text) === -1) {
                            _this.preparedTags.push(data.results[i].text);
                        }
                    }
                    for (var i = 0; i < data.results.length; i++) {
                        if (_this.preparedTags1.indexOf(data.results[i].text) === -1) {
                            _this.preparedTags1.push({ text: data.results[i].text, id: data.results[i].id });
                        }
                    }
                }
                else {
                    _this.searching = false;
                    _this.searchingtext = true;
                }
                // for(var i=0;i<this.preparedTags1.length;i++)
                // {
                // this.preparedTags.push(this.preparedTags1[i].text)
                // }
                //  for(var i=0;i<data.results.length;i++)
                //  {
                //      this.preparedTags.push({
                //       text:data.results[i].text,
                //       id:data.results[i].id})
                //  } 
                console.log('preparedTags', _this.preparedTags);
            });
        }
        else {
            this.titlevalid = true;
        }
    };
    CreateconversationpagePage.prototype.uploadattachedfile = function () {
        var _this = this;
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
    CreateconversationpagePage.prototype.camera1 = function () {
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
            // this.attachedsrc=imageData
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (fileEntry) {
                // alert('hii')
                // alert(imageData)
                fileEntry.getMetadata(function (metadata) {
                    //metadata.size is the size in bytes
                    //  alert('size'+metadata.size)
                    _this.size = metadata.size;
                    if (metadata.size < 25224) {
                        _this.flag = 1;
                        _this.attachedsrc = imageData;
                        _this.toastCtrl.create({ message: "Image uploaded successfully.", duration: 4000, position: 'top' }).present();
                        //this.eleRef.nativeElement.querySelector('#imgfile').dispatchEvent(new Event('click')); 
                    }
                    else if (metadata.size > 25224) {
                        _this.flag = 0;
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                    else {
                        _this.flag = 0;
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                });
            });
            // alert('imagedata'+imageData)
            // this.file.resolveLocalFilesystemUrl(imageData).then(fileEntry => { 
            //   // alert('hii')
            //   // alert(imageData)
            //   fileEntry.getMetadata((metadata) => {
            //          //metadata.size is the size in bytes
            //         //  alert('size'+metadata.size)
            //       if(metadata.size < 59099){ 
            //         this.attachedsrc=imageData
            //   this.toastCtrl.create({ message: `Image uploaded successfully.`, duration: 4000, position: 'top'}).present();  
            //         //this.eleRef.nativeElement.querySelector('#imgfile').dispatchEvent(new Event('click')); 
            //       }
            //       else{ 
            //         this.toastCtrl.create({ message: `Please upload file less than 5mb. Thanks!!`, duration: 4000, position: 'top' }).present();
            //       }
            //   })
            // })
            // this.imgsrc = "data:image/jpeg;base64," + imageData;
        }, function (err) {
        });
    };
    CreateconversationpagePage.prototype.gallery = function () {
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
            // this.attachedsrc=imageData
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (fileEntry) {
                // alert('hii')
                // alert(imageData)
                fileEntry.getMetadata(function (metadata) {
                    //metadata.size is the size in bytes
                    //  alert('size'+metadata.size)
                    _this.size = metadata.size;
                    if (metadata.size < 25224) {
                        _this.flag = 1;
                        _this.attachedsrc = imageData;
                        _this.toastCtrl.create({ message: "Image uploaded successfully.", duration: 4000, position: 'top' }).present();
                        //this.eleRef.nativeElement.querySelector('#imgfile').dispatchEvent(new Event('click')); 
                    }
                    else if (metadata.size > 25224) {
                        _this.flag = 0;
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                    else {
                        _this.flag = 0;
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                });
            });
            //  this.imgsrc = "data:image/jpeg;base64," + imageData;
        }, function (err) {
        });
    };
    CreateconversationpagePage.prototype.imageupload = function (messageId) {
        var _this = this;
        var sessionId = localStorage['sessionId'];
        // alert(sessionId)
        // alert('imgsrc'+this.attachedsrc)
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({
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
        // // alert(headers)
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
        filetransfers.upload(this.attachedsrc, 'https://www.artformplatform.com/api/upload/message.json', options)
            .then(function (data) {
            //       alert('upload')
            // alert('data11'+JSON.stringify(data))
            _this.app.getActiveNav().popToRoot();
        }, function (err) {
            //   alert('bii'+err)
            //  alert('error4'+JSON.stringify(err))   
            _this.app.getActiveNav().popToRoot();
        });
    };
    CreateconversationpagePage.prototype.mediaoption = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Choose Upload Option!',
            buttons: [{
                    text: 'Upload Images',
                    handler: function () {
                        _this.uploadattachedfile();
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
    CreateconversationpagePage.prototype.UploadVideoFromGallery = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            mediaType: this.camera.MediaType.VIDEO
        })
            .then(function (fileuri) {
            fileuri = 'file:///' + fileuri;
            //  alert('fileuri'+fileuri)
            // this.attachedsrc=fileuri
            // this.mediatype=2
            _this.file.resolveLocalFilesystemUrl(fileuri).then(function (fileEntry) {
                // alert('hii')
                // alert(fileuri)
                fileEntry.getMetadata(function (metadata) {
                    //metadata.size is the size in bytes
                    //  alert('size'+metadata.size)
                    _this.size = metadata.size;
                    if (metadata.size < 25224) {
                        _this.flag = 1;
                        _this.attachedsrc = fileuri;
                        _this.mediatype = 2;
                        _this.toastCtrl.create({ message: "Image uploaded successfully.", duration: 4000, position: 'top' }).present();
                        //this.eleRef.nativeElement.querySelector('#imgfile').dispatchEvent(new Event('click')); 
                    }
                    else if (metadata.size > 25224) {
                        _this.flag = 0;
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                    else {
                        _this.flag = 0;
                        _this.toastCtrl.create({ message: "Please upload file less than 5mb. Thanks!!", duration: 4000, position: 'top' }).present();
                    }
                });
            }, function (err) {
                alert('err' + JSON.stringify(err));
            });
        }, function (err) {
            alert(err);
        });
    };
    CreateconversationpagePage.prototype.uploadvideosecond = function (messageId) {
        var _this = this;
        var sessionId = localStorage['sessionId'];
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({
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
        };
        // alert('videodata'+this.attachedsrc)
        filetransfers.upload(this.attachedsrc, 'https://www.artformplatform.com/api/upload/message.json', options)
            .then(function (data) {
            //     alert('hi')
            // alert('DATA'+JSON.stringify(data))
            _this.app.getActiveNav().popToRoot();
        }, function (err) {
            // alert('bi')
            //  alert('erro34' + JSON.stringify(err))
            _this.app.getActiveNav().popToRoot();
        });
    };
    CreateconversationpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-createconversationpage',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/createconversationpage/createconversationpage.html"*/`<!--\n  Generated template for the CreateconversationpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title style="text-align:center;    margin-left: -20px;">Create Conversation</ion-title>\n    <ion-buttons  right style="    width: 19px;    margin-right: 12px; " >\n      \n  \n      <button ion-button icon-only (click)="addTalk()">\n          <ion-icon  *ngIf="loader==false">\n              <img style="margin-right: 16px;" class="navbar-icon" item-left src="assets/create_conversation/tick.png">\n            </ion-icon>\n            <ion-spinner *ngIf="loader==true"></ion-spinner>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n  <div class="item-input">\n    <img class="icon-img-suggest" src="assets/create_conversation/user.png" item-left primary>\n    <!-- <ion-input placeholder="Invite Users"></ion-input> -->\n    <rl-tag-input (keyup)="createconv($event)" style="    margin-left: 54px;"\n    [(ngModel)]="topics"\n    [addOnBlur]="false"\n    [autocomplete]="true"\n    [autocompleteItems]="preparedTags"\n    placeholder="Invite Users">\n  </rl-tag-input>\n  </div>\n  <ion-item *ngIf="titlevalid==true">\n    <p style="color:red">Please enter atleast 3 words</p>\n  </ion-item>\n  <ion-item *ngIf="searching==true">\n      <p>Searching...</p>\n    </ion-item>\n    <ion-item *ngIf="searchingtext==true">\n        <p>No Recipient Found</p>\n      </ion-item>\n   <ion-item class="item-input">\n    <img  class="icon-img" src="assets/create_conversation/write.png" item-left primary>\n    <ion-input [(ngModel)]="title" placeholder="Enter title"></ion-input>\n   </ion-item>\n   \n   <ion-item class="item-input">\n    <img class="icon-img" src="assets/create_conversation/message.png" item-left primary>\n    <ion-textarea [(ngModel)]="Message" rows="3" placeholder="Enter Message"></ion-textarea>\n   </ion-item>\n   <ion-item class="item-input">\n    <img  class="icon-img" src="assets/create_conversation/attachment.png" item-left primary>\n    <ion-input [(ngModel)]="attachedsrc" style="width:10%" placeholder="Attach file"></ion-input>\n    \n   </ion-item>\n<div class="button-style" (click)="mediaoption()">\n  <button class="but-style" ion-button color="primary" round>Browse</button>\n</div>\n<div>\n  <p style="text-align:center">Please Upload file less than 5 mb</p>\n</div>\n<!-- <ion-item no-padding>\n  <ion-input [(ngModel)]="name" placeholder="My Awesome Talk"></ion-input>\n  </ion-item>\n    <rl-tag-input\n      [(ngModel)]="topics"\n      [addOnBlur]="false"\n      [autocomplete]="true"\n      [autocompleteItems]="preparedTags"\n      placeholder="Topics">\n    </rl-tag-input>\n  <button ion-button full (click)="addTalk()">Add Talk!</button>\n  <br><hr>\n   \n  <ion-list>\n    <ion-item *ngFor="let talk of talks">\n      {{ talk.name }}\n      <p>\n        {{ talk.topics.join(\' \') }}\n      </p>\n    </ion-item>\n  </ion-list>\n   \n  <ion-card *ngIf="talks.length === 0">\n    <ion-card-content>No Talk found.</ion-card-content>\n  </ion-card> -->\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/createconversationpage/createconversationpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CreateconversationpagePage);
    return CreateconversationpagePage;
}());

//# sourceMappingURL=createconversationpage.js.map

/***/ })

});
//# sourceMappingURL=13.js.map
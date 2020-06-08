webpackJsonp([12],{

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilepagePageModule", function() { return EditprofilepagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofilepage__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilepagePageModule = (function () {
    function EditprofilepagePageModule() {
    }
    EditprofilepagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editprofilepage__["a" /* EditprofilepagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofilepage__["a" /* EditprofilepagePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__editprofilepage__["a" /* EditprofilepagePage */]
            ]
        })
    ], EditprofilepagePageModule);
    return EditprofilepagePageModule;
}());

//# sourceMappingURL=editprofilepage.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_cropperjs__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular_cropperjs__);
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
 * Generated class for the EditprofilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilepagePage = (function () {
    function EditprofilepagePage(app, event, menu, toastCtrl, filetransfer, camera, actionsheetCtrl, security, viewCtrl, navCtrl, navParams) {
        this.app = app;
        this.event = event;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.filetransfer = filetransfer;
        this.camera = camera;
        this.actionsheetCtrl = actionsheetCtrl;
        this.security = security;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.croppedImage = null;
        this.myImage = null;
        this.scaleValX = 1;
        this.scaleValY = 1;
        this.count = -1;
        this.coordinates = { x: 0 };
        this.status = "Save";
        this.imageuploadactive = true;
        this.cropperOptions = {
            dragMode: "crop",
            aspectRatio: 1,
            autoCrop: true,
            movable: true,
            zoomable: true,
            scalable: true,
            autoCropArea: 0.8,
        };
    }
    EditprofilepagePage.prototype.captureImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myImage = "data:image/jpeg;base64," + imageData;
        });
    };
    EditprofilepagePage.prototype.reset = function () {
        this.angularCropper.cropper.reset();
    };
    EditprofilepagePage.prototype.clear = function () {
        this.angularCropper.cropper.clear();
    };
    EditprofilepagePage.prototype.rotate = function () {
        this.angularCropper.cropper.rotate(90);
        this.count++;
        if (this.count == 0) {
            this.rotatebox = 90;
        }
        else if (this.count == 1) {
            this.rotatebox = 180;
        }
        else if (this.count == 2) {
            this.rotatebox = 270;
        }
        else if (this.count == 3) {
            this.rotatebox = 360;
        }
        else if (this.count == 4) {
            this.rotatebox = 0;
            this.count = 0;
        }
        alert(this.rotatebox);
    };
    EditprofilepagePage.prototype.zoom = function (zoomIn) {
        var factor = zoomIn ? 0.1 : -0.1;
        this.angularCropper.cropper.zoom(factor);
    };
    EditprofilepagePage.prototype.scaleX = function () {
        this.scaleValX = this.scaleValX * -1;
        this.angularCropper.cropper.scaleX(this.scaleValX);
        alert(this.angularCropper.cropper.scaleX());
    };
    EditprofilepagePage.prototype.scaleY = function () {
        this.scaleValY = this.scaleValY * -1;
        this.angularCropper.cropper.scaleY(this.scaleValY);
    };
    EditprofilepagePage.prototype.move = function (x, y) {
        this.angularCropper.cropper.move(x, y);
    };
    EditprofilepagePage.prototype.savecrop = function () {
        alert("COORDINATES" + JSON.stringify(this.coordinates));
        var croppedImgB64String = this.angularCropper.cropper
            .getCroppedCanvas()
            .toDataURL("image/jpeg", 100 / 100);
        this.croppedImage = croppedImgB64String;
        var myImg = document.querySelector("#sky");
        var realWidth = myImg.naturalWidth;
        var realHeight = myImg.naturalHeight;
        alert("Original width=" + realWidth + ", " + "Original height=" + realHeight);
    };
    EditprofilepagePage.prototype.imgSize = function () {
        var myImg = document.querySelector("#sky");
        var realWidth = myImg.naturalWidth;
        var realHeight = myImg.naturalHeight;
        alert("Original width=" + realWidth + ", " + "Original height=" + realHeight);
    };
    EditprofilepagePage.prototype.ionViewDidLoad = function () {
        var usertype = localStorage["usertype"];
        if (usertype == 3) {
            this.artistprop = "inactive";
        }
        else {
            this.artistprop = "active";
        }
        this.banner = true;
        this.user = this.navParams.get("user");
        // this.profile=localStorage.getItem('image1')
        if (localStorage.getItem("image1") != null) {
            this.profile = localStorage.getItem("image1");
        }
        else {
            this.profile = this.user.user_profile_avatar;
        }
        console.log("this", this.profile);
        if (localStorage["firstname"] != null) {
            this.user_display_name = localStorage["firstname"];
        }
        else {
            this.user_display_name = this.user.user_display_name;
        }
        // this.user_display_name=this.user.user_display_name
        this.user_fname = this.user.user_fname;
        this.user_lname = this.user.user_lname;
        this.user_biography = this.user.user_biography;
        this.user_city = this.user.user_city;
        this.user_nationality = this.user.user_nationality;
        this.user_sex = this.user.user_sex;
        this.user_mobileno = this.user.user_mobileno;
        this.user_birth = this.user.user_birth;
        // this.bannerimgsrc=this.user.user_banner
        this.bannerimgsrc = localStorage["banner"];
        console.log("ionViewDidLoad EditprofilepagePage", this.user);
    };
    EditprofilepagePage.prototype.tapshow = function () {
        this.viewCtrl.dismiss();
    };
    EditprofilepagePage.prototype.category = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    EditprofilepagePage.prototype.save = function () {
        var _this = this;
        this.status = "Saving Profile...";
        __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(null)
            .flatMap(function () {
            return _this.security.editprofile(_this.user_fname, _this.user_lname, _this.user_display_name, _this.user_mobileno, _this.user_nationality, _this.user_city, _this.user_sex, _this.user_biography, _this.user_birth);
        })
            .subscribe(function (data) {
            _this.status = "Save";
            _this.viewCtrl.dismiss();
            localStorage["firstname"] = _this.user_display_name;
            // this.menu.enable(false);
            // this.app.getActiveNav().popToRoot()
            _this.event.publish("user:image", _this.profile, _this.user_display_name, Date.now());
            // this.navCtrl.setRoot(TabspagePage,{id:4})
            // this.navCtrl.popToRoot();
        });
    };
    EditprofilepagePage.prototype.capturecamera = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: "Image Upload!",
            buttons: [
                {
                    text: "Upload From Gallery",
                    handler: function () {
                        _this.gallery();
                    },
                },
                {
                    text: "Take A Snap",
                    handler: function () {
                        _this.camera1();
                    },
                },
            ],
        });
        actionsheet.present();
    };
    EditprofilepagePage.prototype.camera1 = function () {
        var _this = this;
        this.camera
            .getPicture({
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        })
            .then(function (imageData) {
            // alert('imagedata'+imageData)
            _this.imgsrc = imageData;
            _this.profile = imageData;
            // this.imgsrc = "data:image/jpeg;base64," + imageData;
            _this.imageupload();
        }, function (err) { });
    };
    EditprofilepagePage.prototype.gallery = function () {
        var _this = this;
        alert("gallery");
        this.camera
            .getPicture({
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        })
            .then(function (imageData) {
            alert("imagedata" + imageData);
            _this.imgsrc = imageData;
            _this.profile = imageData;
            //  this.imgsrc = "data:image/jpeg;base64," + imageData;
            _this.imageupload();
        }, function (err) { });
    };
    EditprofilepagePage.prototype.imageupload = function () {
        var _this = this;
        alert("newbuild");
        this.imageuploadactive = false;
        var sessionId = localStorage["sessionId"];
        // alert(sessionId)
        alert("imgsrc" + this.imgsrc);
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({
            enctype: "multipart/form-data;",
            // 'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
            "X-Cookie": "CAKEPHP=" + sessionId,
            "Access-Control-Allow-Origion": "*",
            Connection: "close",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie",
        });
        // let headers = new Headers({ 'Content-Type': 'multipart/form-data','X-Cookie': 'CAKEPHP='+sessionId ,'Access-Control-Allow-Origion':'*','Accept':'application/json','Access-Control-Allow-Credentials': true})
        // headers.append('Content-Type','application/json');
        // headers.append('Accept','application/json');
        // headers.append('Access-Control-Allow-Origion','*');
        // alert(headers)
        // alert(JSON.stringify(headers))
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: "userAvatar",
            fileName: "filename.jpg",
            chunkedMode: false,
            headers: headers,
            httpMethod: "POST",
            mimeType: "image/jpeg",
        };
        // filetransfers.upload(this.imgsrc,'https://www.demo.artformplatform.com/api/messages/upload.json', options)
        filetransfers
            .upload(this.imgsrc, "https://www.artformplatform.com/api/user/uploadAvatar.json", options)
            .then(function (data) {
            _this.imageuploadactive = true;
            //alert(data.user.user_avatar);
            //alert(data["user"]);
            //  this.profile = data["user"].user_avatar;
            //       alert('upload')
            alert("changddddddddde");
            alert("data11" + JSON.stringify(data));
            alert(JSON.parse(data.response));
            alert(JSON.parse(data.response).user.user_avatar);
            _this.profile = JSON.parse(data.response).user.user_avatar;
            _this.event.publish("user:image", _this.profile, _this.user_fname, Date.now());
            localStorage.setItem("image1", _this.imgsrc);
            localStorage["image1"] = _this.imgsrc;
        }, function (err) {
            alert("bii" + err);
            alert("error4" + JSON.stringify(err));
        });
    };
    EditprofilepagePage.prototype.uploadbanner = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: "Image Upload!",
            buttons: [
                {
                    text: "Upload From Gallery",
                    handler: function () {
                        _this.bannergallery();
                    },
                },
                {
                    text: "Take A Snap",
                    handler: function () {
                        _this.bannercamera1();
                    },
                },
            ],
        });
        actionsheet.present();
    };
    EditprofilepagePage.prototype.bannercamera1 = function () {
        var _this = this;
        this.camera
            .getPicture({
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        })
            .then(function (imageData) {
            // alert('imagedata'+imageData)
            _this.bannerimgsrc = imageData;
            // this.imgsrc = "data:image/jpeg;base64," + imageData;
            _this.bannnerimageupload();
        }, function (err) { });
    };
    EditprofilepagePage.prototype.bannergallery = function () {
        var _this = this;
        this.camera
            .getPicture({
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        })
            .then(function (imageData) {
            // alert('imagedata'+imageData)
            _this.bannerimgsrc = imageData;
            //  this.imgsrc = "data:image/jpeg;base64," + imageData;
            _this.bannnerimageupload();
        }, function (err) { });
    };
    EditprofilepagePage.prototype.bannnerimageupload = function () {
        var _this = this;
        this.banner = false;
        var sessionId = localStorage["sessionId"];
        // alert(sessionId)
        // alert('imgsrc'+this.bannerimgsrc)
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({
            enctype: "multipart/form-data;",
            // 'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
            "X-Cookie": "CAKEPHP=" + sessionId,
            "Access-Control-Allow-Origion": "*",
            Connection: "close",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie",
        });
        // let headers = new Headers({ 'Content-Type': 'multipart/form-data','X-Cookie': 'CAKEPHP='+sessionId ,'Access-Control-Allow-Origion':'*','Accept':'application/json','Access-Control-Allow-Credentials': true})
        // headers.append('Content-Type','application/json');
        // headers.append('Accept','application/json');
        // headers.append('Access-Control-Allow-Origion','*');
        // alert(headers)
        // alert(JSON.stringify(headers))
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: "userBanner",
            fileName: "filename.jpg",
            chunkedMode: false,
            headers: headers,
            httpMethod: "POST",
            mimeType: "image/jpeg",
        };
        // filetransfers.upload(this.imgsrc,'https://www.demo.artformplatform.com/api/messages/upload.json', options)
        filetransfers
            .upload(this.bannerimgsrc, "https://www.artformplatform.com/api/user/uploadBanner.json", options)
            .then(function (data) {
            alert(JSON.parse(data.response).user.user_banner);
            _this.banner = true;
            _this.bannerimgsrc = JSON.parse(data.response).user.user_banner;
            _this.event.publish("user:banner", _this.bannerimgsrc, _this.user_fname, Date.now());
            localStorage["banner"] = _this.bannerimgsrc;
            localStorage.setItem("banner", _this.bannerimgsrc);
            var toast = _this.toastCtrl.create({
                message: "Image Uploaded successfully",
                duration: 3000,
                position: "top",
            });
            toast.onDidDismiss(function () {
                console.log("Dismissed toast");
            });
            toast.present();
        }, function (err) {
            alert("bii" + err);
            alert("error4" + JSON.stringify(err));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("angularCropper"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_cropperjs__["AngularCropperjsComponent"])
    ], EditprofilepagePage.prototype, "angularCropper", void 0);
    EditprofilepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-editprofilepage",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/editprofilepage/editprofilepage.html"*/`<!--\n  Generated template for the EditprofilepagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <!-- <ion-buttons start>\n          <button ion-button color="danger" (click)="reset()">\n            Reset\n          </button>\n        </ion-buttons> -->\n    <ion-title style="text-align:center;margin-left: 45px;">Edit Profile</ion-title>\n    <!-- <ion-buttons end>\n        <button ion-button icon-only color="danger" (click)="imgSize()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button ion-button icon-only color="secondary" (click)="savecrop()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons> -->\n    <ion-buttons right style="    width: 14px;margin-right: 28px;"  >\n      <button style="    width: 52px;" ion-button (click)="tapshow()">\n        <ion-icon style="font-size: 2.5rem;" name="close"></ion-icon>\n   </button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <!-- <div (click)="imgSize()">\n  <img class="sky" id="sky" src="assets/welcome/facebook.png"> \n  </div> -->\n\n  <!-- <button ion-button full (click)="captureImage()" *ngIf="!myImage">Capture Image</button>\n  \n    <angular-cropper class="sky" #angularCropper [cropperOptions]="cropperOptions" [imageUrl]="myImage" *ngIf="myImage"></angular-cropper>\n  \n    <ion-row *ngIf="myImage">\n      <ion-col col-4>\n        <button ion-button outline icon-left color="primary" (click)="zoom(true)">\n          <ion-icon name="add"></ion-icon> Zoom\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button outline icon-left color="primary" (click)="zoom(false)">\n          <ion-icon name="remove"></ion-icon> Zoom\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button outline icon-left (click)="rotate()">\n          <ion-icon name="refresh"></ion-icon> 90 deg\n        </button>\n      </ion-col>\n  \n      <ion-col col-2>\n        <button ion-button clear (click)="scaleX()">\n          Flip X\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear (click)="scaleY()">\n          Flip Y\n        </button>\n      </ion-col>\n  \n      <ion-col col-2>\n        <button ion-button clear icon-only (click)="move(0, -10)">\n          <ion-icon name="arrow-round-up"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear icon-only (click)="move(0, 10)">\n          <ion-icon name="arrow-round-down"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear icon-only (click)="move(-10, 0)">\n          <ion-icon name="arrow-round-back"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear icon-only (click)="move(10, 0)">\n          <ion-icon name="arrow-round-forward"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  \n    <ion-card *ngIf="croppedImage">\n      <ion-card-header>My Result</ion-card-header>\n      <ion-card-content>\n        <img   [src]="croppedImage">\n      </ion-card-content>\n    </ion-card> -->\n    <div >  \n  <div class="img-back" [ngStyle]="{\'background-image\':\'url(\'+bannerimgsrc+\')\'}">\n\n  \n  </div>\n</div>\n  <ion-row class="row-style">\n  <ion-avatar style="    z-index: 1;" >\n      <img class="img-pro" [src]="profile">\n  </ion-avatar>\n\n\n</ion-row>\n\n<ion-row (click)="capturecamera()"  class="but-style">\n  <button *ngIf="imageuploadactive==true"  class="butt" ion-button color="primary">Update Image</button>\n   <button *ngIf="imageuploadactive==false" class="butt" ion-button color="primary">Updating Image...</button>\n</ion-row>\n<ion-row (click)="uploadbanner()"   style="    margin-top: 8px;" class="but-style" >\n \n  <button *ngIf="banner==true" class="butt" ion-button color="primary">Update Banner</button>\n  <button *ngIf="banner==false" class="butt" ion-button color="primary">Uploading Banner....</button>\n</ion-row>\n<ion-label>Display Name</ion-label>\n<ion-item class="item-input">\n\n  <ion-input [(ngModel)]="user_display_name" placeholder="Enter name"></ion-input>\n </ion-item>\n <ion-label>User Message</ion-label>\n <ion-item class="item-input">\n \n  <ion-input [(ngModel)]="user_message" placeholder="Enter your message"></ion-input>\n </ion-item>\n<ion-row style=" margin-top: -14px;">\n<ion-col col-6>\n  <ion-label>First Name</ion-label>\n  <ion-item  style="    margin-left: -3px;" class="item-input">\n  \n   <ion-input [(ngModel)]="user_fname" placeholder="Enter First Name"></ion-input>\n  </ion-item>\n</ion-col>\n<ion-col col-6>\n  <ion-label>Last Name</ion-label>\n  <ion-item  style="    margin-left: 3px;"   class="item-input">\n  \n   <ion-input [(ngModel)]="user_lname" placeholder="Enter Last Name"></ion-input>\n  </ion-item>\n</ion-col>\n</ion-row>\n<ion-row style=" margin-top: -14px;">\n<ion-col col-6>\n  <ion-label>Country</ion-label>\n  <ion-item  style="    margin-left: -3px;"  class="item-input">\n  \n   <ion-input [(ngModel)]="user_nationality" placeholder="Enter Country"></ion-input>\n    <!-- <ion-icon  name="arrow-dropdown" item-right></ion-icon>  -->\n  </ion-item>\n</ion-col>\n<ion-col col-6>\n  <ion-label>City</ion-label>\n  <ion-item style="    margin-left: 3px;"  class="item-input">\n  \n   <ion-input  [(ngModel)]="user_city" placeholder="Enter City"></ion-input>\n\n  </ion-item>\n</ion-col>\n</ion-row>\n\n<ion-label style="    margin-top: -5px;">Biography</ion-label>\n<ion-item class="item-input">\n\n  <ion-textarea [(ngModel)]="user_biography" placeholder="Tell the world about yourself.The shorter the better."></ion-textarea>\n </ion-item>\n\n <ion-row style="    margin-top: -11px;">\n  <ion-col style="    margin-left: -3px;" >\n    <ion-label>Birth Date</ion-label>\n    <ion-item class="item-input">\n    \n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="user_birth"></ion-datetime>\n    \n    </ion-item>\n  </ion-col>\n  <!-- <ion-col style="    margin-left: 3px;" >\n    <ion-label>Sex</ion-label>\n    <ion-item class="item-input" style="    padding-left: 2px;">\n        <ion-select  style="    padding: 0px;margin-left: 25px;" [(ngModel)]="user_sex">\n            <ion-option value="Male">Male</ion-option>\n            <ion-option value="Female">Female</ion-option>\n     </ion-select> \n     \n    </ion-item>\n  </ion-col> -->\n  </ion-row>\n  <ion-label style="    margin-top: -7px;">Phone</ion-label>\n  <ion-item class="item-input">\n  \n    <ion-input type="number" [(ngModel)]="user_mobileno" placeholder="Enter Mobile number"></ion-input>\n   </ion-item>\n   <div class="select-style" style="    margin-bottom: -21px;">\n      <button (click)="save()" style="width: 61%;    height: 40px;" ion-button round>{{status}}</button>\n    </div>\n\n<div class="select-style" *ngIf="artistprop==\'inactive\'" >\n  <button (click)="category()" style="width: 61%;    height: 40px;" ion-button round>SELECT CATEGORIES</button>\n</div>\n\n\n\n\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/editprofilepage/editprofilepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], EditprofilepagePage);
    return EditprofilepagePage;
}());

//# sourceMappingURL=editprofilepage.js.map

/***/ })

});
//# sourceMappingURL=12.js.map
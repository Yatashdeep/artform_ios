webpackJsonp([36],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadmediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_securitypanel_securitypanel__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__artprofile_artprofile__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_picker__ = __webpack_require__(347);
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
 *
 * Generated class for the UploadmediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadmediaPage = (function () {
    function UploadmediaPage(filpath, fileChooser, app, _zone, formBuilder, filetransfer, file, camera, actionsheetCtrl, alertCtrl, service, navCtrl, navParams, filePicker) {
        this.filpath = filpath;
        this.fileChooser = fileChooser;
        this.app = app;
        this._zone = _zone;
        this.formBuilder = formBuilder;
        this.filetransfer = filetransfer;
        this.file = file;
        this.camera = camera;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filePicker = filePicker;
        this.id = 0;
        this.loadProgress = 0;
        this.categories = [];
        this.id = this.navParams.get("id");
        var linkregex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
        this.uploadform = formBuilder.group({
            youtubeinput: [
                "",
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].pattern(linkregex),
                    __WEBPACK_IMPORTED_MODULE_9__angular_forms__["Validators"].required,
                ]),
            ],
        });
        if (localStorage["usertype"] != 2) {
            this.changetypeshow = true;
            // let alert = this.alertCtrl.create({
            //   title: 'You have created a User profile. In order to upload, please change to Artist profile. Would you like to change to Artist Profile and enable upload?',
            //   buttons: [
            //     {
            //       text: 'Ok',
            //       handler: data => {
            //         this.changetype()
            //       }
            //     },
            //     {
            //       text: 'Cancel',
            //       handler: data => {
            //         this.navCtrl.setRoot(ArtprofilePage,{id:4})
            //       }
            //     }
            //   ]
            // });
            // alert.present();
        }
        else {
            this.changetypeshow = false;
        }
    }
    UploadmediaPage.prototype.filepic = function () {
        var _this = this;
        this.filePicker
            .pickFile()
            .then(function (result) {
            //  alert("ur" + result);
            // this.filpath.resolveNativePath(uri).then((result) => {
            //  alert("r" + result);
            _this.imgsrc = result;
            _this.imgsrc1 = result;
            var n = _this.imgsrc.search("mp3");
            if (n != -1) {
                _this.uploadvideosecond1();
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: "UnSupported",
                    subTitle: "Your File is not supported",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function (data) { },
                        },
                    ],
                });
                alert_1.present();
            }
            // });
        })
            .catch(function (e) {
            alert("e" + e);
        });
    };
    UploadmediaPage.prototype.filepic1 = function () {
        var _this = this;
        //  alert("filepicker");
        this.filePicker
            .pickFile()
            .then(function (result) {
            //   alert("res" + result);
            // this.filpath.resolveNativePath(uri).then((result) => {
            _this.imgsrc = result;
            _this.imgsrc1 = result;
            var n = _this.imgsrc.search("pdf");
            if (n != -1) {
                //   alert("pdf");
                _this.fileName = "filename.pdf";
                _this.mimeType = "application/pdf";
                _this.uploadvideosecond2();
            }
            else {
                //   alert("doc");
                var n1 = _this.imgsrc.search("docx");
                if (n1 != -1) {
                    _this.fileName = "filename.docx";
                    _this.mimeType =
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                    _this.uploadvideosecond2();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: "UnSupported",
                        subTitle: "Your File is not supported",
                        buttons: [
                            {
                                text: "Ok",
                                handler: function (data) { },
                            },
                        ],
                    });
                    alert_2.present();
                }
            }
            // });
        })
            .catch(function (e) {
            alert("e" + e);
        });
    };
    UploadmediaPage.prototype.uploadvideosecond2 = function () {
        var _this = this;
        //  alert("doctak");
        this.Cover = true;
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
            enctype: "multipart/form-data;",
            // 'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
            // 'HTTP_X_JSON_WEB_TOKEN':'CAKEPHP='+sessionId,
            "X-Cookie": "CAKEPHP=" + sessionId,
            "X-JSON-WEB-TOKEN": userToken,
            "Access-Control-Allow-Origion": "*",
            Connection: "close",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie,X-JSON-WEB-TOKEN",
        });
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: "files",
            fileName: this.fileName,
            chunkedMode: false,
            mimeType: this.mimeType,
            headers: headers,
            httpMethod: "POST",
        };
        // this.uploadstatus='Upload Status:'+this.loadProgress
        this.upload = true;
        filetransfers.onProgress(function (e) {
            _this._zone.run(function () {
                _this.loadProgress = e.lengthComputable
                    ? Math.round((e.loaded / e.total) * 100)
                    : -1;
            });
        });
        filetransfers
            .upload(this.imgsrc, "https://www.artformplatform.com/api/upload/media.json", options)
            .then(function (data) {
            //      alert("data" + JSON.stringify(data));
            _this.uploadstatus = "Succesfully Uploaded";
            _this.upload = false;
            //  alert('data'+JSON.stringify(data))
            _this.youTubeuploadactive = false;
            _this.coverdata = JSON.parse(data.response);
            _this.categoryId = _this.coverdata.user.category_id;
            _this.subcategoryId = _this.coverdata.user.subcategory_id;
            _this.subsubcategoryId = _this.coverdata.user.subsubcategory_id;
            _this.usermediaId = _this.coverdata.files[0].id;
            //alert('usermediaId'+this.usermediaId)
            // alert(this.usermediaId)
        }, function (err) {
            //  alert('test1')
            alert("error=>" + JSON.stringify(err));
        });
    };
    UploadmediaPage.prototype.trytest = function () {
        var str1 = "abc/pd";
        var n1 = str1.search("pdf");
        //  alert("search" + n1);
    };
    UploadmediaPage.prototype.uploadvideosecond1 = function () {
        var _this = this;
        // alert("video");
        this.Cover = true;
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
            enctype: "multipart/form-data;",
            // 'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
            // 'HTTP_X_JSON_WEB_TOKEN':'CAKEPHP='+sessionId,
            "X-Cookie": "CAKEPHP=" + sessionId,
            "X-JSON-WEB-TOKEN": userToken,
            "Access-Control-Allow-Origion": "*",
            Connection: "close",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie,X-JSON-WEB-TOKEN",
        });
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: "files",
            fileName: "filename.mp3",
            chunkedMode: false,
            mimeType: "audio/mpeg",
            headers: headers,
            httpMethod: "POST",
        };
        // this.uploadstatus='Upload Status:'+this.loadProgress
        this.upload = true;
        filetransfers.onProgress(function (e) {
            _this._zone.run(function () {
                _this.loadProgress = e.lengthComputable
                    ? Math.round((e.loaded / e.total) * 100)
                    : -1;
            });
        });
        filetransfers
            .upload(this.imgsrc, "https://www.artformplatform.com/api/upload/media.json", options)
            .then(function (data) {
            //     alert("mp3");
            _this.uploadstatus = "Succesfully Uploaded";
            _this.upload = false;
            //  alert('data'+JSON.stringify(data))
            _this.youTubeuploadactive = false;
            _this.coverdata = JSON.parse(data.response);
            _this.categoryId = _this.coverdata.user.category_id;
            _this.subcategoryId = _this.coverdata.user.subcategory_id;
            _this.subsubcategoryId = _this.coverdata.user.subsubcategory_id;
            _this.usermediaId = _this.coverdata.files[0].id;
            // alert(this.usermediaId)
        }, function (err) {
            //  alert('test1')
            alert("erro34" + JSON.stringify(err));
        });
    };
    UploadmediaPage.prototype.ionViewDidLoad = function () {
        this.Cover = false;
        console.log("ionViewDidLoad UploadmediaPage");
        this.categoryloading = false;
        this.submit = true;
        this.hidefileinput = false;
        this.uploadactive = false;
        this.toggleswitch = true;
        this.youTubeuploadactive = true;
        this.loader = false;
        this.loader1 = false;
    };
    UploadmediaPage.prototype.tap = function () {
        if (this.uploadform.valid == true) {
            this.submit = true;
        }
    };
    UploadmediaPage.prototype.gettogglevalue = function () {
        console.log("toggle", this.toggleswitch);
        if (this.toggleswitch == true) {
            this.uploadactive = false;
        }
        else {
            this.uploadactive = true;
        }
    };
    UploadmediaPage.prototype.submityoutube = function () {
        var _this = this;
        if (localStorage["usertype"] == 2) {
            this.loader1 = true;
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
                .flatMap(function () {
                return _this.service.youtubeshare(_this.uploadform.get("youtubeinput").value);
            })
                .subscribe(function (data) {
                //  alert('data'+JSON.stringify(data))
                _this.loader1 = false;
                _this.Cover = false;
                _this.toggleswitch = false;
                _this.usermediaId = data.last_id;
                _this.categoryId = data.user.category_id;
                _this.subcategoryId = data.user.subcategory_id;
                _this.subsubcategoryId = data.user.subsubcategory_id;
                _this.submit = false;
                _this.hidefileinput = true;
            });
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: "You have created a User profile. In order to upload, please change to Artist profile. Would you like to change to Artist Profile and enable upload?",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            _this.changetype();
                        },
                    },
                    {
                        text: "Cancel",
                        handler: function (data) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__artprofile_artprofile__["a" /* ArtprofilePage */], { id: 4 });
                        },
                    },
                ],
            });
            alert_3.present();
        }
    };
    UploadmediaPage.prototype.uploadmediadetails = function (medianame) {
        var _this = this;
        //  alert(medianame)
        //  alert(localStorage['category'])
        //  alert(localStorage['subcategory'])
        //  alert(localStorage['subsubcategory'])
        // alert(this.usermediaId)
        if (this.toggleswitch == true) {
            if (this.imgsrc2) {
                this.loader = true;
                __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
                    .flatMap(function () {
                    return _this.service.uploadmedia(medianame, _this.categoryid, _this.subcategoryid, _this.subsubcategoryid, _this.usermediaId);
                })
                    .subscribe(function (data) {
                    _this.loader = false;
                    console.log("hiiiiitest33");
                    _this.submit = true;
                    _this.hidefileinput = false;
                    _this.uploadactive = false;
                    _this.toggleswitch = true;
                    _this.youTubeuploadactive = true;
                    _this.loader = false;
                    _this.loader1 = false;
                    _this.alertpopup();
                    // this.navCtrl.setRoot(UploadmediaPage,{id:1})
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__artprofile_artprofile__["a" /* ArtprofilePage */], { id: 4 });
                });
            }
            else {
                var alert_4 = this.alertCtrl.create({
                    title: "Please attach cover image or deselect cover image option",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function (data) { },
                        },
                        {
                            text: "Cancel",
                            handler: function (data) { },
                        },
                    ],
                });
                alert_4.present();
            }
        }
        else {
            this.loader = true;
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
                .flatMap(function () {
                return _this.service.uploadmedia(medianame, _this.categoryid, _this.subcategoryid, _this.subsubcategoryid, _this.usermediaId);
            })
                .subscribe(function (data) {
                console.log("hiiiiitest");
                _this.loader = false;
                _this.submit = true;
                _this.hidefileinput = false;
                _this.uploadactive = false;
                _this.toggleswitch = true;
                _this.youTubeuploadactive = true;
                _this.loader = false;
                _this.loader1 = false;
                // this.checkevent()
                _this.alertpopup();
                //  this.navCtrl.setRoot(UploadmediaPage,{id:1})
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__artprofile_artprofile__["a" /* ArtprofilePage */], { id: 4 });
            }, function (err) {
                alert(err);
            });
        }
    };
    UploadmediaPage.prototype.alertpopup = function () {
        var alert = this.alertCtrl.create({
            title: "File uploaded Sucessfully!!",
            subTitle: "Your File will shortly be updated",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) { },
                },
            ],
        });
        alert.present();
    };
    UploadmediaPage.prototype.checkevent = function () {
        // alert('hi')
    };
    UploadmediaPage.prototype.uploadcover = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () {
            return _this.service.uploadcovercrop(_this.coverimgsrc, _this.usermediaId);
        })
            .subscribe(function (data) {
            // alert(JSON.stringify(data))
        });
    };
    UploadmediaPage.prototype.changeusertype = function () {
        var _this = this;
        if (localStorage["usertype"] == 2) {
            var alert_5 = this.alertCtrl.create({
                title: "Upload",
                inputs: [
                    {
                        name: "medianame",
                        placeholder: "Enter media name",
                    },
                ],
                buttons: [
                    {
                        text: "Send",
                        handler: function (data) {
                            _this.uploadmediadetails(data.medianame);
                        },
                    },
                ],
            });
            alert_5.present();
        }
        else {
            var alert_6 = this.alertCtrl.create({
                title: "You have created a User profile. In order to upload, please change to Artist profile. Would you like to change to Artist Profile and enable upload?",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            _this.changetype();
                        },
                    },
                    {
                        text: "Cancel",
                        handler: function (data) { },
                    },
                ],
            });
            alert_6.present();
        }
    };
    UploadmediaPage.prototype.changetype = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.service.changeusertype(); })
            .subscribe(function (data) {
            localStorage["usertype"] = 2;
            // this.navCtrl.setRoot(SecuritypanelPage)
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_securitypanel_securitypanel__["a" /* SecuritypanelPage */]);
            // this.navCtrl.setRoot(ArtprofilePage,{id:4})
        });
    };
    UploadmediaPage.prototype.mediaoption = function () {
        var _this = this;
        console.log("hi");
        var actionsheet = this.actionsheetCtrl.create({
            title: "Choose Upload Option!",
            buttons: [
                {
                    text: "Upload Images",
                    handler: function () {
                        _this.capturecamera();
                    },
                },
                {
                    text: "Upload Video",
                    handler: function () {
                        _this.UploadVideoFromGallery();
                    },
                },
                {
                    text: "Upload Audio",
                    handler: function () {
                        _this.filepic();
                    },
                },
                {
                    text: "Upload Documents",
                    handler: function () {
                        _this.filepic1();
                    },
                },
            ],
        });
        actionsheet.present();
    };
    UploadmediaPage.prototype.UploadVideoFromGallery = function () {
        var _this = this;
        // alert("upload");
        this.camera
            .getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            mediaType: this.camera.MediaType.VIDEO,
        })
            .then(function (fileuri) {
            fileuri = fileuri;
            // fileuri='file:///'+fileuri
            _this.imgsrc = fileuri;
            _this.imgsrc1 = fileuri;
            // this.uploadvideosecond()
            // this.file.resolveLocalFilesystemUrl(fileuri).then((fileEntry) => {
            //  alert("new");
            // alert(fileuri)
            // fileEntry.getMetadata((metadata) => {
            //metadata.size is the size in bytes
            //  alert('size'+metadata.size)
            _this.uploadvideosecond();
            //   });
            // });
        }, function (err) {
            alert(err);
        });
    };
    UploadmediaPage.prototype.uploadvideosecond = function () {
        var _this = this;
        //  alert("hope");
        this.Cover = true;
        //  alert("covers" + this.Cover);
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
            enctype: "multipart/form-data;",
            // 'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
            // 'HTTP_X_JSON_WEB_TOKEN':'CAKEPHP='+sessionId,
            "X-Cookie": "CAKEPHP=" + sessionId,
            "X-JSON-WEB-TOKEN": userToken,
            //   "Access-Control-Allow-Origion": "*",
            Connection: "close",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie,X-JSON-WEB-TOKEN",
        });
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: "files",
            fileName: "filename.mp4",
            chunkedMode: false,
            // mimeType: "video/mp4",
            mimeType: "multipart/form-data",
            headers: headers,
            httpMethod: "POST",
        };
        // this.uploadstatus='Upload Status:'+this.loadProgress
        this.upload = true;
        filetransfers.onProgress(function (e) {
            _this._zone.run(function () {
                _this.loadProgress = e.lengthComputable
                    ? Math.round((e.loaded / e.total) * 100)
                    : -1;
            });
        });
        filetransfers
            .upload(this.imgsrc, "https://www.artformplatform.com/api/upload/media.json", options)
            .then(function (data) {
            //   alert("data" + data);
            _this.uploadstatus = "Succesfully Uploaded";
            _this.upload = false;
            //  alert('data'+JSON.stringify(data))
            _this.youTubeuploadactive = false;
            _this.coverdata = JSON.parse(data.response);
            _this.categoryId = _this.coverdata.user.category_id;
            _this.subcategoryId = _this.coverdata.user.subcategory_id;
            _this.subsubcategoryId = _this.coverdata.user.subsubcategory_id;
            _this.usermediaId = _this.coverdata.files[0].id;
            // alert(this.usermediaId)
        }, function (err) {
            //  alert('test1')
            alert("error=>" + JSON.stringify(err));
        });
    };
    UploadmediaPage.prototype.capturecamera = function (id) {
        var _this = this;
        console.log(id);
        this.cameraid = id;
        console.log(this.cameraid);
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
    UploadmediaPage.prototype.camera1 = function () {
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
            if (_this.cameraid == 1) {
                _this.imgsrc2 = imageData;
            }
            else {
                _this.imgsrc1 = imageData;
            }
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (fileEntry) {
                // alert('hii')
                // alert(imageData)
                fileEntry.getMetadata(function (metadata) {
                    //metadata.size is the size in bytes
                    //  alert('size'+metadata.size)
                    _this.imageupload();
                });
            });
            // this.imgsrc = "data:image/jpeg;base64," + imageData;
            // this.imageupload()
        }, function (err) { });
    };
    UploadmediaPage.prototype.gallery = function () {
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
            _this.imgsrc = imageData;
            if (_this.cameraid == 1) {
                _this.imgsrc2 = imageData;
            }
            else {
                _this.imgsrc1 = imageData;
            }
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (fileEntry) {
                // alert('hii')
                // alert(imageData)
                fileEntry.getMetadata(function (metadata) {
                    //metadata.size is the size in bytes
                    //  alert('size'+metadata.size)
                    _this.imageupload();
                });
            });
            //  this.imgsrc = "data:image/jpeg;base64," + imageData;
            // this.imageupload()
        }, function (err) { });
    };
    UploadmediaPage.prototype.imageupload = function () {
        var _this = this;
        this.Cover = true;
        var sessionId = localStorage["sessionId"];
        var filekey;
        var uploadlink;
        if (this.cameraid == 1) {
            uploadlink = "https://www.artformplatform.com/api/upload/cover.json";
            filekey = "coverFile";
        }
        else {
            uploadlink = "https://www.artformplatform.com/api/upload/media.json";
            filekey = "files";
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
            enctype: "multipart/form-data;",
            "X-Cookie": "CAKEPHP=" + sessionId,
            "Access-Control-Allow-Origion": "*",
            Connection: "close",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie",
        });
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: filekey,
            fileName: "filename.jpg",
            chunkedMode: false,
            headers: headers,
            httpMethod: "POST",
            mimeType: "image/jpeg",
        };
        // this.uploadstatus='Upload Status:'+this.loadProgress
        this.upload = true;
        filetransfers.onProgress(function (e) {
            _this._zone.run(function () {
                _this.loadProgress = e.lengthComputable
                    ? Math.round((e.loaded / e.total) * 100)
                    : -1;
            });
        });
        // alert(uploadlink)
        // filetransfers.upload(this.imgsrc,'https://www.demo.artformplatform.com/api/messages/upload.json', options)
        filetransfers.upload(this.imgsrc, uploadlink, options).then(function (data) {
            // alert('hope_test'+JSON.stringify(data))
            _this.uploadstatus = "Succesfully Uploaded";
            _this.upload = false;
            _this.coverdata = JSON.parse(data.response);
            // alert(JSON.stringify(this.coverdata))
            _this.youTubeuploadactive = false;
            if (_this.cameraid == 1) {
                _this.coverimgsrc = _this.coverdata.cover_url;
                _this.usermediaId = _this.coverdata.last_id;
                //  alert(this.coverimgsrc+''+this.usermediaId)
                _this.uploadcover();
            }
            else {
                // alert('hi')
                // alert(JSON.stringify(this.coverdata.user))
                // alert(this.coverdata.user.category_id)
                // alert(this.coverdata.user.subcategory_id)
                // alert(this.coverdata.user.subsubcategory_id)
                // alert(JSON.stringify(this.coverdata.files))
                // alert(this.coverdata.files[0].id)
                _this.categoryId = _this.coverdata.user.category_id;
                _this.subcategoryId = _this.coverdata.user.subcategory_id;
                _this.subsubcategoryId = _this.coverdata.user.subsubcategory_id;
                _this.usermediaId = _this.coverdata.files[0].id;
                // alert(this.coverdata[0].user.category_id)
                // alert(this.coverdata.user)
                // alert(this.coverdata)
                // alert(this.coverdata.user.category_id)
                // this.categoryId=this.coverdata.user[0].category_id
                // alert(this.categoryId)
                // this.subcategoryId=this.coverdata.user[0].subcategory_id
                // this.subsubcategoryId=this.coverdata.user[0].subsubcategory_id
                // this.usermediaId=this.coverdata.user[0].files[0].id
                // alert(this.usermediaId)
            }
            // alert('uploaddata'+JSON.stringify(data))
            //       alert('upload')
        }, function (err) {
            alert("bii" + err);
            alert("error4" + JSON.stringify(err));
        });
    };
    UploadmediaPage.prototype.coverupload = function () {
        var sessionId = localStorage["sessionId"];
        var headers = new __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Headers */]({
            enctype: "multipart/form-data;",
            "X-Cookie": "CAKEPHP=" + sessionId,
            "Access-Control-Allow-Origion": "*",
            Connection: "close",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "Authorization, Origin, Content-Type, X-CSRF-Token,X-Cookie",
        });
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: "coverFile",
            fileName: "filename.jpg",
            chunkedMode: false,
            headers: headers,
            httpMethod: "POST",
            mimeType: "image/jpeg",
        };
        // filetransfers.upload(this.imgsrc,'https://www.demo.artformplatform.com/api/messages/upload.json', options)
        filetransfers
            .upload(this.imgsrc, "https://www.artformplatform.com/api/upload/cover.json", options)
            .then(function (data) {
            //       alert('upload')
            // alert('data11'+JSON.stringify(data))
        }, function (err) {
            alert("bii" + err);
            alert("error4" + JSON.stringify(err));
        });
    };
    UploadmediaPage.prototype.category = function () {
        var _this = this;
        // this.navCtrl.push(SelectuploadcategoryPage)
        this.categoryloading = true;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.service.getcategories(); })
            .subscribe(function (data) {
            _this.categoryloading = false;
            _this.createcategory(data);
        });
    };
    UploadmediaPage.prototype.createcategory = function (data) {
        var _this = this;
        this.categories = data.categories;
        console.log(this.categories);
        var alert = this.alertCtrl.create({});
        // Here we will generate dynamically check-box
        for (var i = 0; i < this.categories.length; i++) {
            alert.addInput({
                value: this.categories[i].Category.category_id,
                label: this.categories[i].Category.category_name,
                type: "radio",
                checked: false,
            });
        }
        alert.addButton({
            text: "Skip",
            handler: function () {
                console.log("cancel clicked");
            },
        });
        alert.addButton({
            text: "Next",
            handler: function (data) {
                console.log("Buy clicked", data);
                _this.categoryid = data;
                _this.subcreatecategory(data);
            },
        });
        alert.setMode("md");
        alert.present();
    };
    UploadmediaPage.prototype.subcreatecategory = function (data) {
        // Here we will generate dynamically check-box
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].Category.category_id == data) {
                this.subid = i;
            }
        }
        this.getmysubid(this.subid);
    };
    UploadmediaPage.prototype.getmysubid = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({});
        for (var j = 0; j < this.categories[id].Childrens.length; j++) {
            this.categories[id].Childrens[j].Subcategory.checked = false;
            alert.addInput({
                value: this.categories[id].Childrens[j].Subcategory.subcategory_id,
                label: this.categories[id].Childrens[j].Subcategory.subcategory_name,
                type: "radio",
                checked: false,
            });
        }
        alert.addButton({
            text: "Skip",
            handler: function () {
                console.log("cancel clicked");
            },
        });
        alert.addButton({
            text: "Next",
            handler: function (data) {
                console.log("Buy clicked", data);
                _this.subcategoryid = data;
                _this.subsubcategory(data);
            },
        });
        alert.setMode("md");
        alert.present();
    };
    UploadmediaPage.prototype.subsubcategory = function (data) {
        for (var j = 0; j < this.categories[this.subid].Childrens.length; j++) {
            if (this.categories[this.subid].Childrens[j].Subcategory.subcategory_id ==
                data) {
                this.subsubid = j;
            }
        }
        this.getmysubsubid(this.subsubid);
    };
    UploadmediaPage.prototype.getmysubsubid = function (id) {
        var _this = this;
        if (this.categories[this.subid].Childrens[this.subsubid].Childrens.length > 0) {
            console.log("id" + id);
            var alert_7 = this.alertCtrl.create({});
            for (var k = 0; k <
                this.categories[this.subid].Childrens[this.subsubid].Childrens.length; k++) {
                alert_7.addInput({
                    value: this.categories[this.subid].Childrens[this.subsubid].Childrens[k].Subsubcategory.subsubcategory_id,
                    label: this.categories[this.subid].Childrens[this.subsubid].Childrens[k].Subsubcategory.subsubcategory_name,
                    type: "radio",
                    checked: false,
                });
            }
            alert_7.addButton({
                text: "Skip",
                handler: function () {
                    console.log("cancel clicked");
                },
            });
            alert_7.addButton({
                text: "Next",
                handler: function (data) {
                    _this.subsubcategoryid = data;
                    console.log("Buy clicked", data);
                },
            });
            alert_7.setMode("md");
            alert_7.present();
        }
    };
    UploadmediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-uploadmedia",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/uploadmedia/uploadmedia.html"*/`<!--\n  Generated template for the UploadmediaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-buttons left style="    width: 19px;">\n          <button ion-button menuToggle>\n          <ion-icon item-start>\n            <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n          </ion-icon>\n           </button>\n      </ion-buttons>\n    <ion-title (click)="trytest()" [style.marginRight] = "id ==1 ? \'35px\' :\'-15px\'" id=\'title\' style="text-align:center;    margin-right: -15px;    ">Upload Media</ion-title>\n    <!-- <ion-buttons end style="margin-right: 11px;" >\n  \n  \n  <button ion-button (click)="changeusertype()">\n      <ion-icon *ngIf="loader==false" style="width: 20px;">\n        <img src="assets/profile/upload.png">\n      </ion-icon>\n      <ion-spinner *ngIf="loader==true"></ion-spinner>\n    </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="changetypeshow==false">\n    \n  <form [formGroup]="uploadform" >\n  <ion-item class="item-input" *ngIf="youTubeuploadactive==true">\n    <img class="icon-img" src="assets/upload media/youtube.png" item-left primary>\n    <ion-input (keyup)="tap()" [class.invalid]="!uploadform.controls.youtubeinput.valid && (uploadform.controls.youtubeinput.dirty || submitAttempt)" formControlName="youtubeinput"  placeholder="Enter Youtube Url"></ion-input>\n</ion-item>\n<div  style="color:red" *ngIf="!uploadform.controls.youtubeinput.valid  && (uploadform.controls.youtubeinput.dirty || submitAttempt)">\n  <p class="error-text">Please enter a valid youtube url.</p>\n</div>\n\n\n </form>\n<div *ngIf="youTubeuploadactive==true">\n<div *ngIf="submit==true" class="youtube-submit">\n  <button [disabled]="!uploadform.valid" *ngIf="loader1==false" (click)="submityoutube()" ion-button  round>Submit</button>\n  <ion-label style="color: #000000;" *ngIf="loader1==true">Uploading..</ion-label>\n</div>\n</div>\n<p *ngIf="hidefileinput==false" class="or-style">OR</p>\n   <ion-item *ngIf="hidefileinput==false" class="item-input" >\n    <img   class="icon-img" src="assets/upload media/add-file.png" item-left primary>\n    <ion-input [(ngModel)]="imgsrc1"  placeholder="Add File"></ion-input>\n    \n   </ion-item>\n \n\n  <div *ngIf="hidefileinput==false" class="upload-style" (click)="mediaoption()">\n  <ion-icon>\n    <img class="img-style" src="assets/upload media/plus.png">\n  </ion-icon>\n  </div>\n  <div *ngIf="Cover==true">\n  <ion-item style="    margin-bottom: 9px;" no-lines>\n    <ion-label style="font-family: AvenirLTStd-Heavy;">Add Cover Image</ion-label>\n    <ion-toggle (ionChange)="gettogglevalue()"  [(ngModel)]="toggleswitch" style="    margin-right: 4px;" mode="ios"  checked="false"></ion-toggle>\n  </ion-item>\n   <ion-item *ngIf="uploadactive==false" class="item-input" >\n    <img  class="icon-img" src="assets/upload media/upload_image.png" item-left primary>\n    <ion-input [(ngModel)]="imgsrc2" style="width:10%" placeholder="Upload Image"></ion-input>\n    \n   </ion-item>\n  \n<div class="button-style" *ngIf="uploadactive==false">\n  <button (click)="capturecamera(1)" class="but-style" ion-button color="primary" round>Browse</button>\n</div>\n</div>\n<div class="div-upload" *ngIf="upload==true">\n    <ion-label style="font-family: AvenirLTStd-Heavy;">{{uploadstatus}}</ion-label>\n<progressbar [progress]="loadProgress"></progressbar>\n</div>\n<div class="select-style">\n  <button *ngIf="categoryloading==false" (click)="category()" style="width: 61%;    height: 40px;" ion-button round>SELECT CATEGORIES</button>\n  \n<div style="text-align:center" *ngIf="categoryloading==true">\n  <p >Loading..</p>\n</div>\n</div>\n<div style="text-align:center">\n  <button class="upload" ion-button (click)="changeusertype()">Upload</button>\n</div>\n</div>\n<div class="upload-status" *ngIf="changetypeshow==true">\n    <div class="upload-status-inner">\n  <ion-row class="row">\n    <p style="text-align: center;font-size: 2.1rem;">You have created a User profile. In order to upload, please change to Artist profile. Would you like to change to Artist Profile and enable upload?</p>\n  </ion-row>\n  <ion-row class="row">\n    <div style="display:flex;justify-content: center">\n  <button (click)="changeusertype()" ion-button class="button button-md button-default button-default-md"><span class="button-inner">Change to Artist Profile</span><div class="button-effect"></div></button>\n  </div>\n  </ion-row>\n      </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/uploadmedia/uploadmedia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_picker__["a" /* IOSFilePicker */]])
    ], UploadmediaPage);
    return UploadmediaPage;
}());

//# sourceMappingURL=uploadmedia.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artprofile_artprofile__ = __webpack_require__(187);
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(security, navCtrl, navParams) {
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakeUsers = new Array(4);
        this.catsound = [];
        this.subcat = [];
        this.count = 0;
        this.count1 = 0;
        this.items = [];
        this.addcategories = [];
        this.addsubCategories = [];
        this.addsubSubCategories = [];
        this.catshow1 = false;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loader = false;
        this.loading = false;
        console.log('ionViewDidLoad CategoryPage');
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.getcategory(); }).subscribe(function (data) {
            _this.categories = data.categories;
            _this.loading = true;
        });
        this.catsound = [
            {
                'category': 'Music',
                'img': 'assets/tree-cat/music.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                'artform': 'assets/profile/02_1_music.png',
                'expanded': true
            },
            {
                'category': 'Dance',
                'img': 'assets/tree-cat/dance.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                // 'form':['Hip Hop','Body Pop','BBoy/Breakdance','Irish','Salsa','Ballet','Trap Dance','Jazz','Modern','Swing','Belly','Country','Others'],
                'artform': 'assets/profile/dance.png',
                'expanded': false
            },
            {
                'category': 'Film',
                'img': 'assets/tree-cat/film.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                //  'form':['Show Reel','Documentary','Movie Script','TV Script','Unreleases Films','Others'],
                'artform': 'assets/profile/film.png',
                'expanded': false
            },
            {
                'category': 'Photography',
                'img': 'assets/tree-cat/camera.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                //  'form':['Aerial','Action','Animal','Architecture','Black and White','Commercial','Panoramic','Sports','Nature','Potrait','Long Exposure','Others'],
                'artform': 'assets/profile/photography.png',
                'expanded': false
            },
            {
                'category': 'Literature',
                'img': 'assets/tree-cat/literature.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                //  'form':['Novel','Movie Script','TV Script','Comedy','Journalistic','Factual','Education','Poetry','Others'],
                'artform': 'assets/profile/literature.png',
                'expanded': false
            },
            {
                'category': 'Art',
                'img': 'assets/tree-cat/art.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                //  'form':['Art','Design','Crafts','Others'],
                'artform': 'assets/profile/art.png',
                'expanded': false
            },
            {
                'category': 'Freestyle',
                'img': 'assets/tree-cat/freestyle.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                //  'form':['Breakdance','Body Pop','BMX','Skateboarding','juggling','Parkour','Graffiti','Beatbox','Watersports','Rap','Skiing','Turntabilism','Football','Others'],
                'artform': 'assets/profile/freestyle.png',
                'expanded': false
            },
            {
                'category': 'Personality',
                'img': 'assets/tree-cat/personality.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                //  'form':['Presenter','TV Presenter','Comedian','Radio Presenter','Event Presenter','Commentator','Impersonator','Mime','Others'],
                'artform': 'assets/profile/personality.png',
                'expanded': false
            },
            {
                'category': 'Other',
                'img': 'assets/tree-cat/others.png',
                'form': [{ 'artform': 'Rock', 'img': 'assets/tree-cat/rock.png' },
                    { 'artform': 'Pop', 'img': 'assets/tree-cat/pop.png' }, { 'artform': 'Hip Hop', 'img': 'assets/tree-cat/hip-hop.png' },
                    { 'artform': 'Electronic', 'img': 'assets/tree-cat/electronics.png' },
                    { 'artform': 'Accoustic', 'img': 'assets/tree-cat/acoustic.png' },
                    { 'artform': 'ACappela', 'img': 'assets/tree-cat/capella.png' },
                    { 'artform': 'Jazz', 'img': 'assets/tree-cat/jazz.png' },
                    { 'artform': 'Reggae', 'img': 'assets/tree-cat/reggae.png' },
                    { 'artform': 'Metal', 'img': 'assets/tree-cat/metal.png' },
                    { 'artform': 'Classical', 'img': 'assets/tree-cat/classical.png' },
                    { 'artform': 'DJ', 'img': 'assets/tree-cat/dj.png' },
                    { 'artform': 'Instrumental', 'img': 'assets/tree-cat/instrumental.png' },
                    { 'artform': 'Others', 'img': 'assets/tree-cat/others (2).png' },
                    { 'artform': 'Covers', 'img': 'assets/tree-cat/covers.png' },
                    { 'artform': 'Castlepalooza', 'img': 'assets/tree-cat/castle.png' }],
                //  'form':['Animal Trick','Street Perform','Synchronised Act','Magician','Mime','Modeling','Others'],
                'artform': 'assets/profile/others_bg.png',
                'expanded': false
            }
        ];
        this.subcat = [
            {
                'category': 'Indie Rock',
                'img': 'assets/tree-cat/rock2.png',
            },
            {
                'category': 'Hard Rock',
                'img': 'assets/tree-cat/hard_rock.png',
            },
            {
                'category': 'Grunge',
                'img': 'assets/tree-cat/grunge.png',
            },
            {
                'category': 'Country Rock',
                'img': 'assets/tree-cat/country_rock.png',
            },
            {
                'category': 'Punk',
                'img': 'assets/tree-cat/punk.png',
            },
            {
                'category': 'Instrumental Rock',
                'img': 'assets/tree-cat/instrumental_rock.png',
            },
            {
                'category': 'Accoustic',
                'img': 'assets/tree-cat/acoustic.png',
            },
            {
                'category': 'Electronic',
                'img': 'assets/tree-cat/electronics2.png',
            },
            {
                'category': 'Post Rock',
                'img': 'assets/tree-cat/post_rock.png',
            },
            {
                'category': 'Other',
                'img': 'assets/tree-cat/others (2).png',
            }
        ];
        this.items = [
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false }
        ];
    };
    CategoryPage.prototype.expandItem = function (item, i) {
        console.log('categories', item.Category.checked);
        // console.log('hi',item.checked)
        if (item.Category.checked) {
            item.Category.checked = false;
        }
        else {
            this.categories.map(function (listItem) {
                console.log(listItem, '--', item);
                if (item == listItem) {
                    console.log();
                    listItem.Category.checked = !listItem.Category.checked;
                }
                // else {
                //   listItem.Category.checked = false;
                // }
                console.log('list', listItem);
                return listItem;
            });
        }
        console.log('cat', this.categories);
    };
    CategoryPage.prototype.showsubcat = function (item, i) {
        if (item.Subcategory.checked) {
            item.Subcategory.checked = false;
        }
        else {
            this.categories.map(function (listItem) {
                console.log(listItem.Childrens[i], '--', item);
                if (listItem.Childrens[i]) {
                    if (item == listItem.Childrens[i]) {
                        console.log();
                        listItem.Childrens[i].Subcategory.checked = !listItem.Childrens[i].Subcategory.checked;
                    }
                    else {
                        listItem.Childrens[i].Subcategory.checked = false;
                    }
                }
                else {
                    console.log('pika pika pikabu');
                }
                console.log('list', listItem);
                return listItem;
            });
        }
        console.log('cat', this.categories);
    };
    CategoryPage.prototype.subsubcat = function (item, index, ids, ide) {
        //console.log(item) 
        if (item.Subsubcategory.checked) {
            // item.Subsubcategory.checked = false;
            //Chetan's Code
            this.categories[index].Childrens[ids].Childrens[ide].Subsubcategory.checked = false;
            //End Chetan's Code
        }
        else {
            //item.Subsubcategory.checked = true;
            //Chetan's Code 
            this.categories[index].Childrens[ids].Childrens[ide].Subsubcategory.checked = true;
            //End Chetan's Code 
            /*
         var itemMapElement= this.categories.map(listItem => {
           // console.log('listitem',listItem)
           // console.log('children',listItem.Childrens[ids].Childrens[ide])
           // console.log('matching',listItem.Childrens[ids].Childrens[ide],'--',item)
           console.log("chetan2==",listItem.Childrens[ids].Childrens[ide]);
            //if (item == listItem.Childrens[ids].Childrens[ide]) {
             // console.log('checked',listItem.Childrens[ids].Childrens[ide].Subsubcategory.checked)
             // listItem.Childrens[ids].Childrens[ide].Subsubcategory.checked = !listItem.Childrens[ids].Childrens[ide].Subsubcategory.checked;
            //}
            //  else {
            //          console.log('unchecked')
            //   listItem.Childrens[ids].Childrens[ide].Subsubcategory.checked = false;
            // }
           // console.log('list',listItem)
            return listItem;
          });
          */
        }
        //console.log("chetan3==",itemMapElement);    
    };
    // expandItem(item,i): void {
    //   console.log('hi',item)
    //   if (item.expanded) {
    //     item.expanded = false;
    //   } else {
    //     this.catsound.map(listItem => {
    //       if (item == listItem) {
    //         listItem.expanded = !listItem.expanded;
    //       } else {
    //         listItem.expanded = false;
    //       }
    //       console.log('list',listItem)
    //       return listItem;
    //     });
    //   }
    //   console.log('catsound',this.catsound)
    //    if(this.count%2==0)
    //   {
    //   var z=document.getElementById('tickshow').style.display='block'
    //   var x=document.getElementById('tickshow4').style.display='block'
    //   } 
    //   else{
    //     var z=document.getElementById('tickshow').style.display='none'
    //     var x=document.getElementById('tickshow4').style.display='none'
    //   }
    //   this.count++ 
    // }
    CategoryPage.prototype.cattap = function (id) {
        // if(this.count%2==0)
        // {
        // var y=document.getElementById('showall').style.display='block'
        // var z=document.getElementById('tickshow').style.display='block'
        // var x=document.getElementById('tickshow4').style.display='block'
        // } 
        // else{
        //   var y=document.getElementById('showall').style.display='none'
        //   var z=document.getElementById('tickshow').style.display='none'
        //   var x=document.getElementById('tickshow4').style.display='none'
        // }
        // this.count++ 
    };
    CategoryPage.prototype.addTalk = function () {
        var _this = this;
        this.loader = true;
        console.log('loader', this.loader);
        this.addcategories = [];
        this.addsubCategories = [];
        this.addsubSubCategories = [];
        console.log('categories', this.categories);
        console.log('length' + this.categories.length);
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].Category.checked == true) {
                this.addcategories.push(this.categories[i].Category.category_id);
            }
            for (var j = 0; j < this.categories[i].Childrens.length; j++) {
                if (this.categories[i].Childrens[j].Subcategory.checked == true) {
                    this.addsubCategories.push(this.categories[i].Childrens[j].Subcategory.subcategory_id);
                }
                for (var k = 0; k < this.categories[i].Childrens[j].Childrens.length; k++) {
                    if (this.categories[i].Childrens[j].Childrens[k].Subsubcategory.checked == true) {
                        this.addsubSubCategories.push(this.categories[i].Childrens[j].Childrens[k].Subsubcategory.subsubcategory_id);
                    }
                }
            }
        }
        console.log('cat', this.addcategories);
        console.log('sub', this.addsubCategories);
        console.log('sub sub', this.addsubSubCategories);
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.submitcat(_this.addcategories, _this.addsubCategories, _this.addsubSubCategories); }).subscribe(function (data) {
            //  alert('hi'+JSON.stringify(data))
            _this.loader = false;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__artprofile_artprofile__["a" /* ArtprofilePage */], { id: 4 });
            // this.navCtrl.pop()
        });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/category/category.html"*/`<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title style="text-align:center;    margin-left: -29px;">Select Categories</ion-title>\n    <!-- <ion-buttons  right style="    width: 19px;    margin-right: 12px; " >\n      \n  \n      <button ion-button icon-only (click)="addTalk()">\n          <ion-icon   *ngIf="loader==false">\n              <img style="margin-right: 16px;" class="navbar-icon" item-left src="assets/create_conversation/tick.png">\n            </ion-icon>\n            <ion-spinner *ngIf="loader==true"></ion-spinner>\n          </button>\n  </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list *ngIf="loading==false" style="padding:21px;">\n        <div *ngFor="let fake of fakeUsers" style="    margin-bottom: 12px;">\n        \n            \n           \n             \n                <div class="div-right-inner" >\n                  <p class="p-text p-points-text" style="font-size:1.2rem"></p>\n               \n                </div>\n              \n                \n                \n      </div>\n      </ion-list> \n<ion-list style="    height: 100%;">\n  <div style="    margin-bottom: 13px;" *ngFor="let value of categories;let i=index">\n <div  (click)="expandItem(value,i)" [style.backgroundImage]="\'url(\'+ value.Category.category_image_url +\')\'" class="row-image"  >\n<ion-row style="height: 77px;">\n  <ion-col class="col-style" col-2>\n    <img class="img-size" [src]="value.Category.category_small_image_url">\n  </ion-col>\n  <ion-col class="col-cat" col-7>\n    <p class="p-cat">{{value.Category.category_short_name}}</p>\n  \n    <img id="tickshow4" *ngIf="value.Category.checked==true" class="tree-img" src="assets/tree-cat/chevron.png">\n  </ion-col>\n  <ion-col class="col-cat1" col-3>\n      <img  id="tickshow" *ngIf="value.Category.checked==true" style="    height: 21px;" src="assets/tree-cat/tick_green.png">\n    </ion-col>\n</ion-row>\n\n </div>\n\n <div  style="transition: 0.4s ease-in-out;" id="showall"  >\n    <components-expandable  [expanded]="value.Category.checked">\n    \n      <!-- <div   *ngFor="let val of Childrens"> -->\n        <div  *ngFor="let val of value.Childrens;let ids=index" >\n <div  class="div-style"  (click)="showsubcat(val,ids)">\n   \n   \n  <ion-row style="  height: 65px;">\n    <ion-col class="col-style" col-2>\n      <img class="img-size1" [src]="val.Subcategory.subcategory_small_image_url">\n    </ion-col>\n    <ion-col class="col-cat" col-7>\n      <p class="p-cat1">{{val.Subcategory.subcategory_short_name}}</p>\n   \n    </ion-col>\n    <ion-col col-3 class="tick-arrow">\n       \n        <img *ngIf="val.Subcategory.checked==true" id="tickshow2" style="    height: 21px;" src="assets/tree-cat/tick_green.png">\n        <img  *ngIf="val.Subcategory.checked==true"  id="tickshow3" style="height: 16px;\n        margin-left: 9px;" src="assets/tree-cat/arrow (4).png">\n                </ion-col>\n  </ion-row>\n \n</div>\n<div id="showsub-cat"  class="sub-cat">\n  <components-expandable  [expanded]="val.Subcategory.checked">\n \n  <ion-row (click)="subsubcat(vals,i,ids,ide)" style="  height: 65px;border-bottom: 1px solid;" *ngFor="let vals of val.Childrens;let ide=index">\n    <!-- <div>Hope</div> -->\n\n        <ion-col class="col-style" col-2>\n          <img class="img-size1" [src]="vals.Subsubcategory.subsubcategory_small_image_url">\n        </ion-col>\n        <ion-col class="col-cat" col-7>\n          <p class="p-cat2">{{vals.Subsubcategory.subsubcategory_short_name}}</p>\n          \n        </ion-col>\n        <ion-col col-3 class="tick-arrow">\n       \n            <img *ngIf="vals.Subsubcategory.checked==true" id="tickshow2" style="    height: 21px;" src="assets/tree-cat/tick_green.png">\n         \n                    </ion-col>\n      </ion-row>\n    </components-expandable>\n</div>\n</div>\n</components-expandable>\n</div>\n  </div>\n \n</ion-list>\n\n\n<!-- <ion-card (click)="expandItem(item)" *ngFor="let item of catsound">\n  <ion-card-header [style.backgroundImage]="\'url(\'+ item.artform +\')\'">\n    <ion-card-title>{{item.category}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <components-expandable expandHeight="100px" [expanded]="item.expanded">\n     \n      <p>\n        Hello there.\n      </p>\n      <p>\n        Hello there.\n      </p>\n      <p>\n        Hello there.\n      </p>\n      <p>\n        \n        Hello there.\n      </p>\n      <p>\n        Hello there.\n      </p>\n      <p>\n        Hello there.\n      </p>\n    </components-expandable>\n  </ion-card-content>\n</ion-card> -->\n</ion-content>\n<ion-footer class="footer-style">\n  \n    \n\n        \n    <ion-row>\n      <button (click)="addTalk()" ion-button full>Save</button>\n    </ion-row>    \n   \n    \n</ion-footer>`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersPagepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artistprofilepage_artistprofilepage__ = __webpack_require__(46);
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
 * Generated class for the FollowersPagepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowersPagepPage = (function () {
    function FollowersPagepPage(modalCtrl, navCtrl, navParams, viewCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.id = this.navParams.get('id');
        console.log(this.id);
        // this.followingdata=this.navParams.get('followingdata')
        // console.log('followingdata'+this.followingdata)
        // this.followersdata=this.navParams.get('followersdata')
        // console.log('followersdata'+this.followersdata)
        //console.log(JSON.parse(localStorage['followingdata']))
        if (this.id == 1) {
            this.followers = 'Followers';
            this.followingdata = this.navParams.get('followersdata');
            console.log('followingdata' + this.followersdata);
        }
        else {
            this.followers = 'Following';
            this.followingdata = this.navParams.get('followingdata');
            console.log('follow', this.followingdata);
        }
    }
    FollowersPagepPage.prototype.ionViewDidLoad = function () {
        this.rcentdata = this.navParams.get('rcentdata');
        this.topid = this.navParams.get('topid');
        //   alert(this.topid)
        console.log(JSON.stringify(this.rcentdata));
        console.log('ionViewDidLoad FollowersPagepPage');
    };
    FollowersPagepPage.prototype.closemodal = function () {
        this.viewCtrl.dismiss();
    };
    FollowersPagepPage.prototype.viewprofilepage = function (i) {
        //  alert(i)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */], { id: i, rcentdata: this.followingdata, topid: 2 });
    };
    FollowersPagepPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-followers-pagep',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/followers-pagep/followers-pagep.html"*/`<!--\n  Generated template for the FollowersPagepPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{followers}}</ion-title>\n    <ion-buttons\n      (click)="closemodal()"\n      right\n      style="width: 14px; margin-right: 16px;"\n    >\n      <button style="width: 26px;" ion-button>\n        <ion-icon item-start name="close"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row *ngFor="let value of followingdata;let i=index">\n    <ion-col col-3 (click)="viewprofilepage(i)">\n      <div class="avt-pic">\n        <img class="img-avtar" src="{{value.Users.user_profile_avatar}}" />\n      </div>\n    </ion-col>\n    <ion-col col-9 style="text-align: center;">\n      <p>{{value.Users.user_display_name}}</p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/followers-pagep/followers-pagep.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], FollowersPagepPage);
    return FollowersPagepPage;
}());

//# sourceMappingURL=followers-pagep.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewvideotopperformersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(157);
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
 * Generated class for the ViewvideotopperformersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewvideotopperformersPage = (function () {
    function ViewvideotopperformersPage(youtube, santizer, viewCtrl, navCtrl, navParams) {
        this.youtube = youtube;
        this.santizer = santizer;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewvideotopperformersPage.prototype.ionViewDidLoad = function () {
        this.iframe = false;
        console.log('ionViewDidLoad ViewvideotopperformersPage');
        this.data = this.navParams.get('data');
        this.id = this.navParams.get('id');
        this.mediatype = this.data[this.id].media_thumbnail_url;
        this.usermedia_type = this.data[this.id].usermedia_type;
        console.log('mediatype', this.mediatype);
        console.log('usermedia', this.usermedia_type);
        this.videotap();
    };
    ViewvideotopperformersPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ViewvideotopperformersPage.prototype.videotap = function () {
        if (this.usermedia_type == 'youtube') {
            // alert('url'+this.data[this.id].media_thumbnail_url)
            this.iframe = true;
            var str = this.data[this.id].media_thumbnail_url;
            var n = str.search('watch');
            if (n != -1) {
                var res = this.data[this.id].media_thumbnail_url.split("https://www.youtube.com/watch?v=");
                console.log('ifstatement' + res[1]);
                this.youtube_id = 'http://developersoptimal.com/test/index.html?url_string=' + res[1];
                this.pathsantiz = this.santizer.bypassSecurityTrustResourceUrl(this.youtube_id);
                // this.youtube_id='http://bracketfront.optimaltechnology.in/test.html?url_string='+res[1]
                // this.youtube.openVideo(res[1]); 
                // var youtubeurl='https://www.youtube.com/embed/'+res
                // var youtuberes=youtubeurl.replace(",", "");
                // console.log('youtubers'+youtuberes)
                //  this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes)
                // this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes+'?autoplay=1')
            }
            else {
                var res = this.data[this.id].media_thumbnail_url.split("https://youtu.be/");
                this.youtube_id = 'http://developersoptimal.com/test/index.html?url_string=' + res[1];
                //  this.youtube_id='http://bracketfront.optimaltechnology.in/test.html?url_string='+res[1]
                console.log('elsestatement' + res[1]);
                this.pathsantiz = this.santizer.bypassSecurityTrustResourceUrl(this.youtube_id);
                //  this.youtube.openVideo(res[1]); 
                // var youtubeurl='https://www.youtube.com/embed/'+res
                // var youtuberes1=youtubeurl.replace(",", "");
                //  var youtuberes1=this.data[this.id].media_thumbnail_url
                // var res = this.data[this.id].media_thumbnail_url.split("https://www.youtube.com/watch?v=");
                // console.log('hope'+res)
                // var youtubeurl='https://www.youtube.com/embed/'+res
                // var youtuberes=youtubeurl.replace(",", "");
                // console.log('youtubers'+youtuberes)
                //  this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes)
                // console.log('you',youtuberes1)
                // this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes1+'?autoplay=1')
            }
        }
        else {
        }
    };
    ViewvideotopperformersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewvideotopperformers',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/viewvideotopperformers/viewvideotopperformers.html"*/`<!--\n  Generated template for the ViewvideotopperformersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content style="background-color: rgba(0, 0, 0, 0.6);">\n  <div class="pop-up">\n    <!-- <div class="close-style" (click)="close()">\n          <ion-icon style="font-size:2.2rem " name="close"></ion-icon>\n        </div> -->\n    <button\n      *ngIf="usertype==\'image/jpeg\'"\n      class="butt-style"\n      ion-button\n      round\n      (click)="close()"\n    >\n      <ion-icon name="close"></ion-icon>\n    </button>\n    <button\n      *ngIf="usertype!=\'image/jpeg\'"\n      class="butt-style1"\n      ion-button\n      round\n      (click)="close()"\n    >\n      <ion-icon name="close"></ion-icon>\n    </button>\n    <div class="pop-style">\n      <div\n        *ngIf="usermedia_type==\'image/jpeg\'||usermedia_type==\'image/png\'"\n        style="text-align: center;"\n      >\n        <img style="width: 100%;" [src]="mediatype" />\n      </div>\n      <div\n        *ngIf="usermedia_type!=\'image/jpeg\'&& usermedia_type!=\'image/png\'"\n        style="text-align: center;"\n      >\n        <video\n          playsinline\n          style="height: 189px; width: 96%;"\n          *ngIf="iframe==false"\n          width="330"\n          controls\n        >\n          <source src="{{mediatype}}" type="{{usermedia_type}}" />\n        </video>\n        <iframe\n          style="height: 229px; width: 96%;"\n          *ngIf="iframe==true"\n          width="420"\n          height="345"\n          [src]="pathsantiz"\n        >\n        </iframe>\n\n        <!-- <iframe style="height: 189px;width: 96%;" *ngIf="iframe==true" width="100%" height="100%"  allowfullscreen="0" [src]="youtube_id" >\n      </iframe> -->\n      </div>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/viewvideotopperformers/viewvideotopperformers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ViewvideotopperformersPage);
    return ViewvideotopperformersPage;
}());

//# sourceMappingURL=viewvideotopperformers.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecuritypanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_twitter_connect__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_core__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_cordova_oauth_platform_cordova__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_cordova_oauth_platform_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_cordova_oauth_platform_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commentsbox_commentsbox__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__artistprofilepage_artistprofilepage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_unique_device_id__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TabspagePage } from '../tabspage/tabspage';

//import { GooglePlus } from '@ionic-native/google-plus';






//import{CommunitypopoverPage}from'../communitypopover/communitypopover'



//import { OneSignal } from "@ionic-native/onesignal";
/**
 * Generated class for the SecuritypanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecuritypanelPage = (function () {
    function SecuritypanelPage(
        // private oneSignal: OneSignal,
        uniqueDeviceID, modalCtrl, event, service, loadingCtrl, facebook, formBuilder, twitter, navCtrl, navParams, alertCtrl) {
        this.uniqueDeviceID = uniqueDeviceID;
        this.modalCtrl = modalCtrl;
        this.event = event;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.facebook = facebook;
        this.formBuilder = formBuilder;
        this.twitter = twitter;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.oauth = new __WEBPACK_IMPORTED_MODULE_8_ng2_cordova_oauth_platform_cordova__["OauthCordova"]();
        this.instagramProvider = new __WEBPACK_IMPORTED_MODULE_7_ng2_cordova_oauth_core__["Instagram"]({
            clientId: "9640f8cde2f3436d8853c34c799a3e34",
            redirectUri: "http://localhost",
            responseType: "token",
            appScope: ["basic", "public_content"],
        });
        console.log("status" + localStorage["status"]);
        this.checkremember = true;
        this.apiResponse = [];
        if (localStorage["status"] == "true") {
            this.email = localStorage["email"];
            this.password = localStorage["password"];
            console.log("pika pika pikabu");
            this.checkremember = true;
        }
        else {
            this.email = "";
            this.password = "";
            console.log("chika chika");
        }
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
        var passwordRegex = /^[_A-z]*((-|\s)*[_A-z])*$/;
        this.signupform = formBuilder.group({
            email: [
                "",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(emailRegex),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                ]),
            ],
            //  password:['',Validators.compose([Validators.maxLength(30),Validators.pattern(passwordRegex),Validators.minLength(3),Validators.required])],
            password: [
                "",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(30),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                ]),
            ],
            confirmPassword: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
        }, {
            validator: SecuritypanelPage_1.MatchPassword,
        });
    }
    SecuritypanelPage_1 = SecuritypanelPage;
    SecuritypanelPage.MatchPassword = function (AC) {
        var password = AC.get("password").value; // to get value in input tag
        var confirmPassword = AC.get("confirmPassword").value; // to get value in input tag
        if (password != confirmPassword) {
            console.log("false");
            AC.get("confirmPassword").setErrors({ MatchPassword: true });
        }
        else {
            console.log("true");
            return null;
        }
    };
    SecuritypanelPage.prototype.instagramlogin = function () {
        var _this = this;
        this.oauth.logInVia(this.instagramProvider).then(function (success) {
            console.log(JSON.stringify(success));
            /* Returns User uploaded Photos */
            _this.service.getInstagramUserInfo(success).subscribe(function (response) {
                _this.apiResponse = response.data;
                _this.instalogin(_this.apiResponse);
            });
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    SecuritypanelPage.prototype.instalogin = function (apiResponse) {
        var _this = this;
        // alert('response'+JSON.stringify(apiResponse))
        // alert('hi'+apiResponse[0])
        // alert('id'+apiResponse[0].user.id)
        // alert('fullname'+apiResponse[0].user.username)
        // alert('profilepicture'+apiResponse[0].user.profile_picture)
        var loading = this.loadingCtrl.create({
            spinner: "hide",
            content: "",
            cssClass: "transparent",
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(loading)
            .flatMap(function (loading) { return loading.present(); })
            .flatMap(function () {
            return _this.service.sociallogininsta(apiResponse[0].user.id, apiResponse[0].user.username, apiResponse[0].user.profile_picture);
        })
            .subscribe(function (data) {
            loading.dismiss();
            localStorage["sessionId"] = data.sessionId;
            localStorage["userid"] = data.user.user_id;
            if (_this.checkremember == true) {
                console.log(apiResponse[0].user.profile_picture +
                    "profile pic firtsname" +
                    apiResponse[0].user.profile_picture);
                _this.event.publish("user:image", apiResponse[0].user.profile_picture, apiResponse[0].user.username, Date.now());
                _this.event.publish("user:created", _this.checkremember, Date.now());
            }
            else {
                console.log(apiResponse[0].user.profile_picture +
                    "profile pic firtsname" +
                    apiResponse[0].user.profile_picture);
                _this.event.publish("user:image", apiResponse[0].user.profile_picture, apiResponse[0].user.username, Date.now());
                _this.event.publish("user:created", _this.checkremember, Date.now());
            }
            _this.sociallogin();
            // alert('data'+JSON.stringify(data))
        });
    };
    SecuritypanelPage.prototype.loginUser = function () {
        //   this.googlePlus.login({
        //     'webClientId': '863534362265-cf4n55pnfu3mmhuj85k4u604pnf5vkc5.apps.googleusercontent.com',
        //     'offline': true
        //   }).then( res => {
        // // alert('token'+res.accessToken)
        // this.logingoogle(res.userId,res.email,res.displayName,res.givenName,res.imageUrl)
        // })
        //     .catch(err => alert('error'+err));
    };
    SecuritypanelPage.prototype.logingoogle = function (socialid, email, displayname, firtsname, profile_pic) {
        var _this = this;
        // alert(socialid+''+email+''+displayname+''+firtsname+''+profile_pic)
        var loading = this.loadingCtrl.create({
            spinner: "hide",
            // content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
            content: "",
            cssClass: "transparent",
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(loading)
            .flatMap(function (loading) { return loading.present(); })
            .flatMap(function () {
            return _this.service.sociallogingoogle(socialid, email, displayname, firtsname, profile_pic);
        })
            .subscribe(function (data) {
            loading.dismiss();
            localStorage["sessionId"] = data.sessionId;
            localStorage["userid"] = data.user.user_id;
            if (_this.checkremember == true) {
                console.log(profile_pic + "profile pic firtsname" + profile_pic);
                _this.event.publish("user:image", profile_pic, displayname, Date.now());
                _this.event.publish("user:created", _this.checkremember, Date.now());
            }
            else {
                console.log(profile_pic + "profile pic firtsname" + profile_pic);
                _this.event.publish("user:image", profile_pic, displayname, Date.now());
                _this.event.publish("user:created", _this.checkremember, Date.now());
            }
            _this.event.publish("user:image", profile_pic, displayname, Date.now());
            _this.sociallogin();
            // alert('data'+JSON.stringify(data))
        });
    };
    SecuritypanelPage.prototype.loginWithFB = function () {
        var _this = this;
        // alert(this.checkremember)
        this.facebook.login(["email", "public_profile"]).then(function (response) {
            // alert('res'+response)
            _this.facebook
                .api("me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)", [])
                .then(function (profile) {
                // alert(profile['id']+''+profile['email']+''+profile['first_name']+''+profile['picture_large']['data']['url']+''+ profile['name']+profile['last_name'])
                // this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
                var email = profile["email"];
                var profile_pic = profile["picture_large"]["data"]["url"];
                var first_name = profile["first_name"];
                var profile_name = profile["name"];
                var last_name = profile["last_name"];
                var socialid = profile["id"];
                _this.loggedfbuser(socialid, email, profile_pic, first_name, profile_name, last_name);
            });
        }, function (error) {
            alert(JSON.stringify(error));
        });
    };
    SecuritypanelPage.prototype.loggedfbuser = function (socialid, email, profile_pic, first_name, profile_name, last_name) {
        var _this = this;
        // alert(socialid+''+email+''+profile_pic+''+first_name+''+profile_name+''+last_name)
        var loading = this.loadingCtrl.create({
            spinner: "hide",
            // content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
            content: "",
            cssClass: "transparent",
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(loading)
            .flatMap(function (loading) { return loading.present(); })
            .flatMap(function () {
            return _this.service.sociallogin(socialid, email, profile_pic, first_name, profile_name, last_name);
        })
            .subscribe(function (data) {
            //  alert('data'+JSON.stringify(data))
            // alert(data.token)
            localStorage["xtoken"] = data.token;
            console.log("sessionId", data.sessionId);
            console.log("user_id", data.user.user_id);
            localStorage["sessionId"] = data.sessionId;
            localStorage["userid"] = data.user.user_id;
            if (_this.checkremember == true) {
                console.log(profile_pic + "profile pic firtsname" + first_name);
                _this.event.publish("user:image", profile_pic, first_name, Date.now());
                _this.event.publish("user:created", _this.checkremember, Date.now());
            }
            else {
                console.log(profile_pic + "profile pic firtsname" + first_name);
                _this.event.publish("user:image", profile_pic, first_name, Date.now());
                _this.event.publish("user:created", _this.checkremember, Date.now());
            }
            loading.dismiss();
            _this.event.publish("user:image", profile_pic, first_name, Date.now());
            _this.sociallogin();
            // alert('data'+JSON.stringify(data))
        });
    };
    SecuritypanelPage.prototype.ionViewDidLoad = function () {
        this.radiocheck = "2";
        console.log("ionViewDidLoad SecuritypanelPage");
        this.user = false;
        document.getElementById("reg").style.backgroundColor = "transparent";
        document.getElementById("regp").style.color = "#fff";
        document.getElementById("log").style.backgroundColor = "#fff";
        document.getElementById("logp").style.color = "#000";
        // document.getElementById('strip-box').style.border='2px solid #ffff !important'
    };
    SecuritypanelPage.prototype.navigatebar = function (id) {
        if (id == 2) {
            document.getElementById("log").style.backgroundColor = "transparent";
            document.getElementById("logp").style.color = "#fff";
            document.getElementById("reg").style.backgroundColor = "#fff";
            document.getElementById("regp").style.color = "#000";
            this.user = true;
        }
        else {
            document.getElementById("reg").style.backgroundColor = "transparent";
            document.getElementById("regp").style.color = "#fff";
            document.getElementById("log").style.backgroundColor = "#fff";
            document.getElementById("logp").style.color = "#000";
            this.user = false;
        }
    };
    SecuritypanelPage.prototype.checkalert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Forget Password",
            inputs: [
                {
                    name: "Email",
                    placeholder: "Email",
                },
            ],
            buttons: [
                {
                    text: "Send",
                    handler: function (data) {
                        _this.forgetpass(data.Email);
                    },
                },
            ],
        });
        alert.present();
    };
    SecuritypanelPage.prototype.forgetpass = function (email) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "hide",
            // content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
            content: "",
            cssClass: "transparent",
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(loading)
            .flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.service.forgetpass(email); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == "success") {
                var alert_1 = _this.alertCtrl.create({
                    title: "Email Sent to your account ",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function (data) {
                                _this.user = false;
                            },
                        },
                    ],
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: "Email not found !",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function (data) { },
                        },
                    ],
                });
                alert_2.present();
            }
            loading.dismiss();
        });
    };
    SecuritypanelPage.prototype.navigatetotab = function () {
        var _this = this;
        var popover = this.modalCtrl.create("CommunitypopoverPage", {
            cssClass: "contact-popover",
        });
        popover.present({});
        popover.onDidDismiss(function (data) {
            console.log("MODAL DATA", data);
            if (data == 1) {
                _this.navigatetotab1();
            }
        });
    };
    SecuritypanelPage.prototype.navigatetotab1 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "hide",
            //  content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
            content: "",
            cssClass: "transparent",
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(loading)
            .flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.service.signin(_this.signupform, _this.radiocheck); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == "success") {
                var alert_3 = _this.alertCtrl.create({
                    title: "Register Successfull. Please check your e-mail, and confirm account to activate before login. ",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function (data) {
                                _this.user = false;
                            },
                        },
                    ],
                });
                alert_3.present();
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: "Email already exist !",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function (data) { },
                        },
                    ],
                });
                alert_4.present();
            }
            loading.dismiss();
        });
        //  this.navCtrl.setRoot(TabspagePage,{id:0})
        //  this.navCtrl.parent.select(1)
        // this.navCtrl.parent.select(2);
    };
    SecuritypanelPage.prototype.twLogin = function () {
        var _this = this;
        this.twitter.login().then(function (data) {
            // alert('hope'+JSON.stringify(data))
            _this.twitter.showUser().then(function (user) {
                alert("success" + JSON.stringify(user));
                //   alert("user_id"+user.id)
                //   alert("user_name"+user.name)
                //   alert("display_name"+user.screen_name)
                //   alert("profile_image_url"+user.profile_image_url)
                _this.sociallogintwitter(user.id, user.name, user.screen_name, user.profile_image_url);
            }, function (err) {
                // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
                var profile_image = err.profile_image_url_https.replace("_normal", "");
                // alert(err.name)
                //  alert(err.screen_name)
                // alert(err.followers_count)
                // alert(profile_image)
            }),
                function (error) {
                    alert("error" + error);
                };
        }, function (error) {
            alert("error2" + error);
        });
    };
    SecuritypanelPage.prototype.sociallogintwitter = function (socialid, displayName, firtsname, profile_pic) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "hide",
            // content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
            content: "",
            cssClass: "transparent",
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(loading)
            .flatMap(function (loading) { return loading.present(); })
            .flatMap(function () {
            return _this.service.sociallogintwitter(socialid, displayName, firtsname, profile_pic);
        })
            .subscribe(function (data) {
            loading.dismiss();
            localStorage["sessionId"] = data.sessionId;
            localStorage["userid"] = data.user.user_id;
            _this.event.publish("user:image", profile_pic, firtsname, Date.now());
            _this.sociallogin();
            // alert('data'+JSON.stringify(data))
        });
    };
    SecuritypanelPage.prototype.cleardata = function () {
        this.signupform.reset();
    };
    SecuritypanelPage.prototype.sociallogin = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "Choose",
            message: "Login as ",
            inputs: [
                {
                    type: "radio",
                    label: "Fan",
                    value: "3",
                },
                {
                    type: "radio",
                    label: "Artist",
                    value: "2",
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) {
                        console.log("cancel clicked");
                    },
                },
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log("search clicked", data);
                        localStorage["usertype"] = data;
                        if (localStorage["usertype"] == 2) {
                            _this.changetype();
                            _this.islogged();
                            // this.navCtrl.setRoot(TabspagePage,{id:0})
                        }
                        else {
                            _this.islogged();
                            // this.navCtrl.setRoot(TabspagePage,{id:0})
                        }
                    },
                },
            ],
        });
        prompt.setMode("md");
        prompt.present();
        // if(localStorage['usertype']==2)
        // {
        //   this.navCtrl.setRoot(TabspagePage,{id:0})
        //   this.islogged()
        // }
        // else
        // {
        // localStorage['usertype']=3
        // this.navCtrl.setRoot(TabspagePage,{id:0})
        //       this.islogged()
        // }
    };
    SecuritypanelPage.prototype.changetype = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.service.changeusertype(); })
            .subscribe(function (data) {
            // this.navCtrl.setRoot(SecuritypanelPage)
            // this.navCtrl.setRoot(ArtprofilePage,{id:4})
        });
    };
    SecuritypanelPage.prototype.islogged = function () {
        //   let loading=this.loadingCtrl.create({
        //     spinner:'hide',
        //     content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
        //     cssClass:'transparent'
        //   })
        //  loading.present()
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.service.islogged(); })
            .subscribe(function (data) {
            //alert('usermedia'+localStorage.getItem('usermedia'))
            var type = localStorage.getItem("type");
            //alert('type'+type)
            _this.pushapi();
            if (localStorage.getItem("usermedia")) {
                // alert('inside')
                //this.pushapi()
                if (type == "0") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__commentsbox_commentsbox__["a" /* CommentsboxPage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */]);
                }
            }
            else {
                // this.pushapi()
                _this.navCtrl.setRoot("TabspagePage");
            }
            localStorage.setItem("getbranchstatus", "OK");
            console.log(data);
        });
    };
    SecuritypanelPage.prototype.pushapi = function () {
        var _this = this;
        //alert('hiii')
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.service.pushsend(); })
            .subscribe(function (data) {
            // alert('data'+JSON.stringify(data))
        });
    };
    SecuritypanelPage.prototype.navigatetotabsubmit = function () {
        //  if(localStorage['usertype'])
        //  {
        var _this = this;
        //   this.loginuser(localStorage['usertype'])
        // }
        // else
        // {
        var prompt = this.alertCtrl.create({
            title: "Choose",
            message: "Login as ",
            inputs: [
                {
                    type: "radio",
                    label: "Fan",
                    value: "3",
                },
                {
                    type: "radio",
                    label: "Artist",
                    value: "2",
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) {
                        console.log("cancel clicked");
                    },
                },
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log("search clicked", data);
                        _this.loginuser(data);
                    },
                },
            ],
        });
        prompt.setMode("md");
        prompt.present();
        // }
    };
    SecuritypanelPage.prototype.loginuser = function (usertype) {
        var _this = this;
        this.email = this.email.replace(/\s/g, "");
        var loading = this.loadingCtrl.create({
            spinner: "hide",
            content: "",
            // content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
            cssClass: "transparent",
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].of(loading)
            .flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.service.login(_this.email, _this.password, usertype); })
            .subscribe(function (data) {
            //  localStorage['usertype']=data.usertypeid
            localStorage["xtoken"] = data.token;
            // alert('user_id'+data.user.user_id)
            if (data.status == "success" && usertype == data.usertypeid) {
                localStorage["sessionId"] = data.sessionId;
                localStorage["userid"] = data.user.user_id;
                var firtsname = data.user.user_display_name;
                console.log("sessionId", data.sessionId);
                var profile_pic = "assets/tabsicon/propic.jpg";
                localStorage["image"] = profile_pic;
                localStorage["name"] = data.user.user_display_name;
                //  let alert = this.alertCtrl.create({
                //    title: 'Register Successfull !',
                //    buttons: [
                //      {
                //        text: 'Ok',
                //        handler: data => {
                localStorage["usertype"] = usertype;
                if (_this.checkremember == true) {
                    // var firtsname=this.email
                    console.log(profile_pic + "profile pic firtsname" + firtsname);
                    _this.event.publish("user:image", profile_pic, firtsname, Date.now());
                    _this.event.publish("user:created", _this.checkremember, Date.now());
                    // localStorage['email']=this.email
                    // localStorage['password']=this.password
                }
                else {
                    console.log(profile_pic + "profile pic firtsname" + firtsname);
                    _this.event.publish("user:image", profile_pic, firtsname, Date.now());
                    _this.event.publish("user:created", _this.checkremember, Date.now());
                }
                _this.islogged();
                //        }
                //      }
                //    ]
                //  });
                //  alert.present();
            }
            else if (data.status == "fail") {
                if (data.message ==
                    "<strong>Error!</strong> Please activate your account before login. Please check your e-mail, and confirm account.") {
                    var alert_5 = _this.alertCtrl.create({
                        title: "Please activate your account before login. Please check your e-mail, and confirm account. !",
                        buttons: [
                            {
                                text: "Ok",
                                handler: function (data) { },
                            },
                        ],
                    });
                    alert_5.present();
                }
                else {
                    var alert_6 = _this.alertCtrl.create({
                        title: "Wrong Email-Id or Password !",
                        buttons: [
                            {
                                text: "Ok",
                                handler: function (data) { },
                            },
                        ],
                    });
                    alert_6.present();
                }
            }
            else if (usertype != data.usertypeid) {
                var alert_7 = _this.alertCtrl.create({
                    title: "Wrong User-type Selected!",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function (data) { },
                        },
                    ],
                });
                alert_7.present();
            }
            loading.dismiss();
        });
    };
    SecuritypanelPage = SecuritypanelPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-securitypanel",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/securitypanel/securitypanel.html"*/`<!--\n  Generated template for the SecuritypanelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n        \n          <ion-title style="text-align:center">\n          <div class="title-hope">\n             <div class="round-tab">\n              <ion-row>\n                <ion-col id="log" class="col-stylelog" (click)="navigatebar(1)">\n               <p id="logp" class="log-p">Login</p>\n                </ion-col>\n                <ion-col id="reg" class="col-stylereg" (click)="navigatebar(2)">\n                    <p id="regp" class="reg-p">Register</p> \n                </ion-col>\n              </ion-row>\n             </div>\n          </div>\n        </ion-title>\n      </ion-navbar>\n      </ion-header>\n\n<ion-content class="no-scroll" >\n    <!-- <div class="row-class">\n        <div id="strip-box" class="strip-div">\n         \n          <div id="log" class="login-div" (click)="navigatebar(1)">\n            <p id="logp" class="p-tagline">Login</p>\n          </div>\n          <div id="reg" class="regitser-div" (click)="navigatebar(2)">\n            <p id="regp" class="p-tagline">Register</p>\n          </div>\n        </div>\n       \n      </div> -->\n\n\n    <div *ngIf="user==true">\n    <ion-row [(ngModel)]="radiocheck" style="    margin-top: 8px;" radio-group>\n \n<ion-col class="col-option">\n<p class="p-option">Are you a Fan?</p>\n<ion-radio color="primary" slot="start" value="3" checked></ion-radio>\n</ion-col>\n<ion-col class="col-option">\n<p class="p-option">Are you an Artist?</p>\n<ion-radio  color="primary" slot="start" value="2" ></ion-radio>\n</ion-col>\n\n    </ion-row>\n    <ion-row>\n      <p class="register-net">Register using social networks</p>\n    </ion-row>\n    <ion-row style="    margin-top: 11px;">\n      <ion-col style="    text-align: end;" (click)="loginWithFB()">\n       <img class="social-img" src="assets/welcome/facebook.png">\n      </ion-col>\n      <ion-col style="margin-left: 12px;" (click)="twLogin()">\n        <img  class="social-img" src="assets/welcome/twitter.png">\n      </ion-col>\n      <!-- <ion-col style="text-align: center;margin-right: 12px;" (click)="loginUser()">\n        <img class="social-img" src="assets/welcome/google_plus.png">\n      </ion-col> -->\n      <!-- <ion-col  (click)="instagramlogin()">\n        <img class="social-img" src="assets/welcome/instagram.png">\n      </ion-col> -->\n    </ion-row>\n    <ion-row style="    margin-top: 25px;">\n      <p class="p-divider">OR</p>\n    </ion-row>\n    \n    <form [formGroup]="signupform" >\n    <ion-row  style="justify-content:center">\n      <ion-item class="item-input">\n        <img  class="icon-img" style="height:15px"  src="assets/welcome/mail.png" item-left primary>\n        <ion-input [class.invalid]="!signupform.controls.email.valid && (signupform.controls.email.dirty || submitAttempt)" formControlName="email"  type="text" class="input-font-family" type="text" placeholder="Enter Email"></ion-input>\n      \n    </ion-item>\n    <div *ngIf="!signupform.controls.email.valid  && (signupform.controls.email.dirty || submitAttempt)">\n      <p class="error-text">Please enter a valid Email.</p>\n    </div>\n      <ion-item class="item-input">\n        <img class="icon-img" src="assets/welcome/password.png" item-left primary>\n        <ion-input [class.invalid]="!signupform.controls.password.valid && (signupform.controls.password.dirty || submitAttempt)" formControlName="password"  type="password" class="input-font-family"  class="input-font-family" placeholder="Enter Password"></ion-input>\n       </ion-item>\n       <div *ngIf="!signupform.controls.password.valid  && (signupform.controls.password.dirty || submitAttempt)">\n        <!-- <p class="error-text errorform">Password Should be Six characters including one uppercase letter, one special character and alphanumeric characters .</p> -->\n        <p class="error-text errorform">Password should of minimum 3 characters .</p>\n      </div>\n       <!-- <ion-item class="item-input">\n        <img  class="icon-img" \n        ="assets/welcome/password.png" item-left primary>\n        <ion-input class="input-font-family" placeholder="Confirm Password"></ion-input>\n       </ion-item> -->\n       <ion-item class="item-input">\n          <img class="icon-img" src="assets/welcome/password.png" item-left primary>\n        <ion-input  formControlName="confirmPassword"  placeholder="Confirm Password" type="password" \n           [class.invalid]="!signupform.controls.confirmPassword.valid && (signupform.controls.confirmPassword.dirty || submitAttempt)"></ion-input>\n     </ion-item>\n     <div *ngIf="signupform.controls.confirmPassword.errors?.MatchPassword">\n     <p class="error-text">Password not matching</p>\n    </div>\n    </ion-row>\n  </form>\n    <ion-row style="margin-top: 45px;">\n      <ion-col class="col-style1">\n      <button  [disabled]="!signupform.valid" (click)="navigatetotab()"  style="    width: 83%;height: 40px;font-family:AvenirLTStd-Heavy;" ion-button full color="primary" round>SUBMIT</button> \n      </ion-col>\n      <ion-col class="col-style2">\n        <button (click)="cleardata()" [disabled]="signupform.valid" style="    width: 83%;height: 40px;font-family:AvenirLTStd-Heavy;" disabled ion-button full color="primary" round>CANCEL</button>\n      </ion-col>\n    </ion-row>\n    <ion-row style="height: 129px;" (click)="navigatebar(1)">\n      <p style="width: 100%;    text-align: CENTER; font-family: AvenirLTStd-Book;">Already have an account ?<span style="font-weight:bold;font-family: AvenirLTStd-Heavy;"> Login Here</span></p>\n    </ion-row>\n    </div>\n    <div *ngIf="user==false">\n      <ion-row style="justify-content:center;    margin-top: 23px;">\n        <ion-item class="item-input">\n          <img style="height:15px" class="icon-img"  src="assets/welcome/mail.png" item-left primary>\n          <ion-input [(ngModel)]="email" class="input-font-family" type="text" placeholder="Enter Email"></ion-input>\n        \n      </ion-item>\n        <ion-item class="item-input">\n          <img  class="icon-img" src="assets/welcome/password.png" item-left primary>\n          <ion-input type="password" [(ngModel)]="password" class="input-font-family" placeholder="Enter Password"></ion-input>\n         </ion-item>\n         \n      </ion-row>\n      <ion-row>\n        <p  (click)=" checkalert()" class="forget-style">Forgot Password?</p>\n      </ion-row>\n      <ion-row class="row-button">\n        <button (click)="navigatetotabsubmit()" style="width: 43%;height: 40px;font-family: AvenirLTStd-Heavy;" ion-button round color="primary" full>SUBMIT</button>\n      </ion-row>\n      <!-- <ion-row>\n          <ion-col col-5 class="check-style">\n          <ion-checkbox [(ngModel)]="checkremember" style="    margin-top: 0px;" class="check" color="primary" checked="true"></ion-checkbox>\n          \n        </ion-col>\n        <ion-col col-7 style="    margin-left: -12px;">\n          <p style="    font-family: AvenirLTStd-Book;    font-size: 1.6rem;">Remember Me</p>\n        </ion-col>\n      </ion-row> -->\n      <ion-row (click)="navigatebar(2)">\n \n    <p  style="width: 100%;    text-align: CENTER;    font-family: AvenirLTStd-Book;font-size: 1.5rem;">Don\'t have an account ?<span style="font-weight:bold"> Register Here</span></p>\n      </ion-row>\n      <ion-row class="row-bottom">\n      <div class="bottom-bar">\n      <ion-row>\n        <p class="register-net">Login using social networks</p>\n      </ion-row>\n      <ion-row style="    margin-top: 11px;" >\n        <ion-col style="    text-align: end;" (click)="loginWithFB()">\n         <img class="social-img" src="assets/welcome/facebook.png">\n        </ion-col>\n        <ion-col style="margin-left: 12px;" (click)="twLogin()" >\n          <img  class="social-img" src="assets/welcome/twitter.png">\n        </ion-col>\n        <!-- <ion-col style="text-align:center;margin-right: 12px; " (click)="loginUser()">\n          <img class="social-img" src="assets/welcome/google_plus.png">\n        </ion-col> -->\n        <!-- <ion-col  (click)="instagramlogin()">\n          <img class="social-img" src="assets/welcome/instagram.png">\n        </ion-col> -->\n      </ion-row>\n      </div>\n      </ion-row>\n    </div>\n \n    \n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/securitypanel/securitypanel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SecuritypanelPage);
    return SecuritypanelPage;
    var SecuritypanelPage_1;
}());

//# sourceMappingURL=securitypanel.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uploadmedia_uploadmedia__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commentsbox_commentsbox__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popoverpageshare_popoverpageshare__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reportprob_reportprob__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__followedartist_followedartist__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artistprofilepage_artistprofilepage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_page_transitions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_dashboardservice_dashboardservice__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__viewvideoplay_viewvideoplay__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__viewtalent_viewtalent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__followers_pagep_followers_pagep__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_securitypanel_securitypanel__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { InboxpagePage } from '../inboxpage/inboxpage';
//import { EditprofilepagePage } from '../editprofilepage/editprofilepage';















/**
 * Generated class for the ArtprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArtprofilePage = (function () {
    function ArtprofilePage(app, alertCtrl, events, profilemedia, security, loadingCtrl, event, nativePageTransitions, popoverCtrl, modalCtrl, navCtrl, navParams) {
        var _this = this;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.profilemedia = profilemedia;
        this.security = security;
        this.loadingCtrl = loadingCtrl;
        this.event = event;
        this.nativePageTransitions = nativePageTransitions;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakedata = [1, 2, 3, 4];
        this.count = 1;
        this.page = 0;
        // if(localStorage.getItem('usermedia'))
        // {
        //     this.navCtrl.push(CommentsboxPage)
        // }
        // localStorage.setItem('getbranchstatus','OK')
        // alert('getbranchstatus'+localStorage.getItem('getbranchstatus'))
        this.loadercover = false;
        this.showcat = true;
        this.showshare = false;
        this.playlist = 'latest';
        // this.profile_pic=localStorage['image1']
        // this.banner=localStorage['banner']
        this.profile_pic = localStorage.getItem('image1');
        this.banner = localStorage.getItem('banner');
        // alert(this.profile_pic)
        // alert(this.banner)
        // events.subscribe('user:image',(profile_pic,firtsname,time)=>{
        //   alert('profile_pic'+profile_pic)
        //   console.log('firstname',firtsname)
        //   this.profile_pic=profile_pic
        //   this.firtsname=firtsname
        // })
        events.subscribe('user:banner', function (bannerimgsrc, firtsname, time) {
            _this.banner = bannerimgsrc;
            // alert(this.banner)
        });
        events.subscribe('star-rating:changed', function (starRating) {
            console.log('starrating' + starRating);
            _this.rate = starRating;
        });
        // this.getfollowing()
        // this.getfollow()
        this.loadcat();
        // if(localStorage['followingdata'])
        // {
        // this.followingdata=JSON.parse(localStorage['followingdata'])
        // }
        // if(localStorage['followersdata'])
        // {
        // this.followersdata=JSON.parse(localStorage['followersdata'])
        // }
        // events.subscribe('user:following',(followingdata)=>{
        // this.followingdata=followingdata
        // console.log(this.followingdata)  
        // this.following=this.followingdata.length
        // // alert(this.banner)
        // })
        // events.subscribe('user:following',(followersdata)=>{
        // alert('followersdata'+followersdata)
        // this.followersdata=followersdata
        // // alert(this.banner)
        // })
    }
    ArtprofilePage.prototype.doRefresh = function (event) {
        this.recentcharts();
        this.userchartsdub();
        event.complete();
    };
    ArtprofilePage.prototype.loadcat = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.getcategory(); }).subscribe(function (data) {
            localStorage['category'] = JSON.stringify(data.categories);
        });
        __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.getcategories(); }).subscribe(function (data) {
            console.log('categories', data.categories);
            localStorage['categories'] = JSON.stringify(data.categories);
        });
    };
    // getfollowing()
    // {
    //   Observable.of(null)
    //   .flatMap(()=>this.security.getfollowing()).subscribe(data=>{
    //     console.log('followingusers',data.list)
    // this.followingdata=data.list
    //   })
    // }
    // getfollow(){
    //   Observable.of(null)
    // .flatMap(()=>this.security.getfollow()).subscribe(data=>{
    //   console.log('datausers',data.list)
    //   console.log('hii')
    //  this.followersdata=data.list
    //   console.log('followersdata',this.followersdata)
    // })
    // }
    ArtprofilePage.prototype.movetofollowers = function (id) {
        //   Observable.of(null)
        //   .flatMap(()=>this.security.getfollowing()).subscribe(data=>{
        //     console.log('followingusers',data.list)
        var _this = this;
        // this.followingdata=data.list
        // this.event.publish('user:following',this.followingdata)
        //   })
        if (id == 1) {
            __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.security.getfollow(''); }).subscribe(function (data) {
                console.log('datausers', data.list);
                console.log('hii');
                _this.followersdata = data.list;
                _this.event.publish('user:followersdata', _this.followersdata);
                console.log('followersdata', _this.followersdata);
                var popover = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__followers_pagep_followers_pagep__["a" /* FollowersPagepPage */], { rcentdata: _this.latestchart, topid: 1, followersdata: _this.followersdata, id: id, followingdata: _this.followingdata });
                popover.present({});
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.security.getfollowing(''); }).subscribe(function (data) {
                console.log('followingusers', data.list);
                _this.followingdata = data.list;
                _this.event.publish('user:following', _this.followingdata);
                var popover = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__followers_pagep_followers_pagep__["a" /* FollowersPagepPage */], { rcentdata: _this.latestchart, topid: 1, followersdata: _this.followersdata, id: id, followingdata: _this.followingdata });
                popover.present({});
            });
        }
    };
    ArtprofilePage.prototype.songtype = function (id) {
        this.countload = 0;
        this.page = 0;
        if (id == 1) {
            this.categorytag = 'Music';
            this.catid = 1;
            this.type = 'in Music';
        }
        else if (id == 2) {
            this.categorytag = 'Dance';
            this.catid = 2;
            this.type = 'in Dance';
        }
        else if (id == 3) {
            this.categorytag = 'Film';
            this.catid = 3;
            this.type = 'in Film';
        }
        else if (id == 4) {
            this.categorytag = 'Photography';
            this.catid = 4;
            this.type = 'in Photography';
        }
        else if (id == 7) {
            this.categorytag = 'Literature';
            this.catid = 7;
            this.type = 'in Literature';
        }
        else if (id == 8) {
            this.categorytag = 'Art';
            this.catid = 8;
            this.type = 'in Art';
        }
        else if (id == 5) {
            this.categorytag = 'Freestyle';
            this.catid = 5;
            this.type = 'in Freestyle';
        }
        else if (id == 9) {
            this.categorytag = 'Personality';
            this.catid = 9;
            this.type = 'in Personality';
        }
        else if (id == 6) {
            this.categorytag = 'Others';
            this.catid = 6;
            this.type = 'in Others';
        }
        if (this.playlist == 'recent') {
            this.recentcharts();
            this.profilemedia.sortcatprofile = 1;
        }
        else {
            this.usercharts();
        }
    };
    ArtprofilePage.prototype.changeplaylist = function (id) {
        console.log(id);
        this.type = '';
    };
    ArtprofilePage.prototype.ionViewDidLoad = function () {
        this.user_display_name = localStorage['firstname'];
        this.loaderitem = false;
        this.loadingrecentdata = false;
        var usertype = localStorage['usertype'];
        //  alert(localStorage['usertype'])
        if (usertype == 3) {
            this.artistprop = 'inactive';
            this.title = 'Profile';
            this.charttitle = 'Latest';
            this.type = 'in Music';
        }
        else {
            this.artistprop = 'active';
            this.title = 'Artist Profile';
            this.charttitle = 'Artist';
        }
        console.log('ionViewDidLoad ArtprofilePage');
        this.usercharts();
        this.recentcharts();
    };
    ArtprofilePage.prototype.usercharts = function () {
        var _this = this;
        //   let loading=this.loadingCtrl.create({
        //     spinner:'hide',
        //     content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
        //     cssClass:'transparent' 
        //   })
        //  loading.present()
        // this.banner='assets/Dashboard/thumbnail.png'
        this.loaderitem = true;
        __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(this.loaderitem)
            .flatMap(function () { return _this.security.charts(_this.catid); }).subscribe(function (data) {
            console.log('userdata', data.user);
            _this.user = data.user;
            //  alert(data.user.user_profile_avatar)
            _this.loaderitem = false;
            console.log('user_display_name' + data.user.user_display_name);
            //  alert('banerr'+this.banner)
            if (data.status != 'fail') {
                _this.firtsname = data.user.user_display_name;
                if (_this.profile_pic) {
                    _this.event.publish('user:image', localStorage.getItem('image1'), data.user.user_display_name, Date.now());
                    // alert('ssss'+this.profile_pic)
                }
                else {
                    _this.event.publish('user:image', data.user.user_avatar, data.user.user_display_name, Date.now());
                    _this.profile_pic = data.user.user_avatar;
                }
                // alert('following'+this.following)
                _this.follower = data.user.user_followers.length;
                if (localStorage['following'] != undefined) {
                    _this.following = localStorage['following'];
                }
                else {
                    _this.following = data.user.user_following.length;
                }
                // localStorage['following']=this.following
                if (data.user.user_banner) {
                    if (_this.banner) {
                        //  alert('sssdsds'+this.banner)
                    }
                    else {
                        _this.banner = data.user.user_banner;
                        // alert('bnner'+this.banner)
                    }
                }
                else {
                    // this.banner='assets/profile/Lighthouse.png'
                }
                _this.latestchart = _this.profilemedia.latestcharts(data.playerList);
                console.log('latest', _this.latestchart);
            }
            else {
                _this.firtsname = data.user.user_display_name;
                _this.profile_pic = data.user.user_avatar;
                if (data.user.user_banner)
                    // {
                    // this.banner=data.user.user_banner
                    // // alert('bnner'+this.banner)
                    // }
                    // else
                    // {
                    // this.banner='assets/profile/Lighthouse.png'
                    // }
                    _this.banner = data.user.user_banner;
                _this.follower = data.user.user_followers.length;
                _this.following = data.user.user_following.length;
                // this.firtsname= localStorage['name']
                // this.profile_pic='assets/tabsicon/propic.jpg'
                _this.latestchart = [];
            }
            _this.loadercover = true;
        });
    };
    ArtprofilePage.prototype.userchartsdub = function () {
        var _this = this;
        //   let loading=this.loadingCtrl.create({
        //     spinner:'hide',
        //     content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
        //     cssClass:'transparent' 
        //   })
        //  loading.present()
        // this.banner='assets/Dashboard/thumbnail.png'
        this.loaderitem = true;
        __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(this.loaderitem)
            .flatMap(function () { return _this.security.charts(_this.catid); }).subscribe(function (data) {
            console.log('userdata', data.user);
            //  this.user=data.user
            //  alert(data.user.user_profile_avatar)
            _this.loaderitem = false;
            console.log('user_display_name' + data.user.user_display_name);
            //  alert('banerr'+this.banner)
            if (data.status != 'fail') {
                // this.firtsname=data.user.user_display_name
                // if(this.profile_pic)
                // {
                //   this.event.publish('user:image',localStorage.getItem('image1'),data.user.user_display_name,Date.now())
                //   // alert('ssss'+this.profile_pic)
                // }
                // else
                // {
                //   this.event.publish('user:image',data.user.user_avatar,data.user.user_display_name,Date.now())
                //   this.profile_pic=data.user.user_avatar
                // }
                // alert('following'+this.following)
                // this.follower=data.user.user_followers.length
                if (localStorage['following'] != undefined) {
                    // this.following=localStorage['following']
                }
                else {
                    // this.following=data.user.user_following.length
                }
                // localStorage['following']=this.following
                if (data.user.user_banner) {
                    if (_this.banner) {
                        //  alert('sssdsds'+this.banner)
                    }
                    else {
                        // this.banner=data.user.user_banner
                        // alert('bnner'+this.banner)
                    }
                }
                else {
                    // this.banner='assets/profile/Lighthouse.png'
                }
                _this.latestchart = _this.profilemedia.latestcharts(data.playerList);
                console.log('latest', _this.latestchart);
            }
            else {
                // this.firtsname=data.user.user_display_name
                // this.profile_pic=data.user.user_avatar
                // if(data.user.user_banner)
                // {
                // this.banner=data.user.user_banner
                // // alert('bnner'+this.banner)
                // }
                // else
                // {
                // this.banner='assets/profile/Lighthouse.png'
                // }
                // this.banner=data.user.user_banner
                //     this.follower=data.user.user_followers.length
                //     this.following=data.user.user_following.length
                // this.firtsname= localStorage['name']
                // this.profile_pic='assets/tabsicon/propic.jpg'
                _this.latestchart = [];
            }
            _this.loadercover = true;
        });
    };
    ArtprofilePage.prototype.recentcharts = function (infiniteScroll) {
        var _this = this;
        // this.loadingrecentdata=true
        __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.artistprofilerecent(_this.page, _this.catid); }).subscribe(function (data) {
            // this.following=localStorage['following']
            // this.loadingrecentdata=false
            _this.profileuser = data.user;
            _this.profilerecentcharts = _this.profilemedia.profilerecentcharts(data.media, _this.page);
            _this.profilemedia.sortcatprofile = 0;
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        });
    };
    ArtprofilePage.prototype.loadMore = function (infiniteScroll) {
        this.page++;
        console.log('ss');
        this.recentcharts(infiniteScroll);
        console.log(this.page);
    };
    ArtprofilePage.prototype.showcatevent = function (id) {
        if (id == 1) {
            this.showcat = false;
            document.getElementById('categorylist').style.height = '336px';
        }
        else {
            this.showcat = true;
            document.getElementById('categorylist').style.height = '120px';
        }
    };
    ArtprofilePage.prototype.tapshow = function () {
        if (this.count % 2 != 0) {
            this.showshare = true;
        }
        else {
            this.showshare = false;
        }
        this.count++;
    };
    ArtprofilePage.prototype.inboxtap = function () {
        this.navCtrl.push('InboxpagePage');
    };
    ArtprofilePage.prototype.editprop = function () {
        // let contactmodal=this.modalCtrl.create(EditprofilepagePage,{user:this.user})
        // contactmodal.present() 
        this.navCtrl.push('EditprofilepagePage', { user: this.user });
    };
    ArtprofilePage.prototype.changeprefrence = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    ArtprofilePage.prototype.uploadnavigate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__uploadmedia_uploadmedia__["a" /* UploadmediaPage */], { id: 1 });
    };
    ArtprofilePage.prototype.navigatetocomment = function (i) {
        // let modal=this.modalCtrl.create(CommentsboxPage)
        // modal.present()
        var options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 2
        };
        this.nativePageTransitions.slide(options);
        console.log('i', i);
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        // commentsbox.present()
        // this.navCtrl.push(CommentsboxPage)
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        console.log(this.latestchart[i].usermediaid);
        console.log(this.latestchart[i].category_image_url);
        console.log(this.latestchart[i].usermedia_name);
        console.log(this.latestchart[i].artforms);
        console.log(this.latestchart[i].user_display_name);
        console.log(this.latestchart[i].user_avatar);
        console.log(this.latestchart[i].small_image_url);
        console.log('totalrating', this.latestchart[i].totalRating);
        //  console.log(this.latestchart[id].user_url)
        //  console.log(this.latestchart[id].artist_id)
        //  console.log(this.latestchart[id].rating)
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__commentsbox_commentsbox__["a" /* CommentsboxPage */], {
            usermediaid: this.latestchart[i].usermediaid,
            mediapic: this.latestchart[i].category_image_url,
            medianame: this.latestchart[i].usermedia_name,
            artforms: this.latestchart[i].artforms,
            id: i,
            user_display_name: this.latestchart[i].user_display_name,
            user_avatar: this.latestchart[i].user_avatar,
            small_image_url: this.latestchart[i].mediathumbnailuser,
            totalrating: this.latestchart[i].totalRating,
            userurl: this.latestchart[i].user_url,
            artist_id: this.latestchart[i].artist_id,
            rate: this.latestchart[i].rating
        });
        commentsbox.present();
    };
    ArtprofilePage.prototype.openstar = function (usermediaid) {
        var _this = this;
        console.log('usermedia' + usermediaid);
        console.log('rate' + this.rate);
        if (usermediaid) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__viewtalent_viewtalent__["a" /* ViewtalentPage */], { rate: this.rate });
            modal.present();
            __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.security.starmedia(_this.rate, usermediaid); }).subscribe(function (data) {
            });
        }
    };
    ArtprofilePage.prototype.navigatetocomment1 = function (i) {
        var options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 2
        };
        this.nativePageTransitions.slide(options);
        console.log('i', i);
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        // commentsbox.present()
        // this.navCtrl.push(CommentsboxPage)
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        console.log('usermediaid', this.profilerecentcharts[i].usermediaid);
        console.log('category_image_url', this.profilerecentcharts[i].category_image_url);
        console.log('usermedia_name', this.profilerecentcharts[i].usermedia_name);
        console.log('artforms', this.profilerecentcharts[i].artforms);
        console.log(this.profilerecentcharts[i].user_display_name);
        console.log(this.profilerecentcharts[i].user_avatar);
        console.log(this.profilerecentcharts[i].small_image_url);
        console.log('totalrating' + this.profilerecentcharts[i].totalRating);
        console.log(this.profilerecentcharts[i].userurl);
        console.log(this.profilerecentcharts[i].artist_id);
        console.log(this.profilerecentcharts[i].rating);
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__commentsbox_commentsbox__["a" /* CommentsboxPage */], {
            usermediaid: this.profilerecentcharts[i].usermediaid,
            mediapic: this.profilerecentcharts[i].category_image_url,
            medianame: this.profilerecentcharts[i].usermedia_name,
            artforms: this.profilerecentcharts[i].artforms,
            id: i,
            user_display_name: this.profilerecentcharts[i].user_display_name,
            user_avatar: this.profilerecentcharts[i].user_avatar,
            small_image_url: this.profilerecentcharts[i].mediathumbnailuser,
            totalrating: this.profilerecentcharts[i].totalRating,
            userurl: this.profilerecentcharts[i].userurl,
            artist_id: this.profilerecentcharts[i].artist_id,
            rate: this.profilerecentcharts[i].rating
        });
        commentsbox.present();
    };
    ArtprofilePage.prototype.tapshow1 = function (i) {
        console.log('latestchart', this.latestchart);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], { image: this.latestchart[i].category_image_url,
            artistname: this.latestchart[i].usermedia_name,
            user_url: this.latestchart[i].userurl,
            usermediaid: this.latestchart[i].usermediaid
        });
        popover.present({
            ev: event
        });
    };
    ArtprofilePage.prototype.tapshow2 = function (i) {
        console.log('profilerecentcharts', this.profilerecentcharts);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], { image: null,
            artistname: this.profilerecentcharts[i].usermedia_name,
            user_url: this.profilerecentcharts[i].userurl,
            usermediaid: this.profilerecentcharts[i].usermediaid
        });
        popover.present({
            ev: event
        });
    };
    ArtprofilePage.prototype.reportnavigate = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__reportprob_reportprob__["a" /* ReportprobPage */]);
        modal.present();
    };
    // view media files
    ArtprofilePage.prototype.viewvideo = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__viewvideoplay_viewvideoplay__["a" /* ViewvideoplayPage */], {
            data: this.latestchart, id: id
        });
        modal.present();
    };
    ArtprofilePage.prototype.viewvideo1 = function (id) {
        console.log('profilerecentcharts', this.profilerecentcharts);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__viewvideoplay_viewvideoplay__["a" /* ViewvideoplayPage */], {
            data: this.profilerecentcharts, id: id
        });
        modal.present();
    };
    ArtprofilePage.prototype.followedartist = function (artist_id, user_display_name) {
        var _this = this;
        console.log(user_display_name + '' + this.user_display_name);
        if (this.user_display_name != user_display_name) {
            __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.security.artistfollowed(artist_id); }).subscribe(function (data) {
                console.log(data.status);
                var modalfollow = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__followedartist_followedartist__["a" /* FollowedartistPage */], { msg: data.status });
                modalfollow.present();
            });
        }
    };
    ArtprofilePage.prototype.artistpro = function (i) {
        // this.navCtrl.push(ArtistprofilepagePage)
        if (localStorage['usertype'] == 2) {
        }
        else {
            console.log('latestcharts', this.latestchart);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */], { id: i, rcentdata: this.latestchart, topid: 1 });
        }
    };
    ArtprofilePage.prototype.uploadfile = function () {
        var _this = this;
        if (localStorage['usertype'] == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__uploadmedia_uploadmedia__["a" /* UploadmediaPage */], { id: 1 });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'You have created a User profile. In order to upload, please change to Artist profile. Would you like to change to Artist Profile and enable upload?',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                            _this.changetype();
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: function (data) {
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    ArtprofilePage.prototype.changetype = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            //  content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
            content: '',
            cssClass: 'transparent'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.security.changeusertype(); }).subscribe(function (data) {
            loading.dismiss();
            // this.navCtrl.setRoot(SecuritypanelPage)
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_securitypanel_securitypanel__["a" /* SecuritypanelPage */]);
        });
    };
    ArtprofilePage.prototype.artistpro1 = function (i) {
        // this.navCtrl.push(ArtistprofilepagePage)
        //  alert(localStorage['usertype'])
        if (localStorage['usertype'] == 2) {
        }
        else {
            console.log('latestcharts', this.profilerecentcharts);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */], { id: i, rcentdata: this.profilerecentcharts, topid: 1 });
        }
    };
    ArtprofilePage.prototype.tapshow3 = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], { image: this.profileuser.user_avatar,
            artistname: this.profileuser.user_display_name,
            user_url: this.profileuser.user_url,
            usermediaid: localStorage['userid'],
            type: 'artist',
            banner: this.banner
        });
        // let ev = {
        //   target : {
        //     getBoundingClientRect : () => {
        //       return {
        //         top: 37,
        //         right:20,
        //       };
        //     }
        //   }
        // };
        popover.present({
            ev: event
        });
    };
    // Delete Function Here
    ArtprofilePage.prototype.DeleteMedia = function (UsrMediaID, index, artist) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Do you want to delete this ?',
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        var loading = _this.loadingCtrl.create({
                            spinner: 'hide',
                            content: '',
                            cssClass: 'transparent'
                        });
                        loading.present();
                        __WEBPACK_IMPORTED_MODULE_10_rxjs__["Observable"].of(loading).flatMap(function (loading) { return loading.present(); })
                            .flatMap(function () { return _this.security.getDeleteMedia(UsrMediaID); }).subscribe(function (data) {
                            loading.dismiss();
                            _this.callalert(data['message'], UsrMediaID);
                            // this.navCtrl.setRoot(this.navCtrl.getActive().component);
                            // if(artist=='artist') {
                            //   if (index > -1) {
                            //     this.latestchart.splice(index, 1);
                            //   } 
                            // }
                            // if(artist=='recent') {
                            //   if (index > -1) {
                            //     this.profilerecentcharts.splice(index, 1);
                            //   }
                            // }
                        });
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    ArtprofilePage.prototype.callalert = function (message, UsrMediaID) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        if (message == 'Media has been deleted sucessful.') {
                            _this.recentcharts();
                            _this.userchartsdub();
                            // for(var i=0;i<this.latestchart.length;i++)
                            // {
                            //   console.log('latestchart',this.latestchart)
                            //   console.log('latestchart',this.latestchart[i].usermediaid)
                            //     if(this.latestchart[i].usermediaid==UsrMediaID)
                            //     {
                            //       this.latestchart.splice(i, 1);
                            //     }
                            // }
                            // for(var j=0;j<this.profilerecentcharts.length;j++)
                            // {
                            //   console.log('profilecharts',this.profilerecentcharts)
                            //   console.log('profilerecentcharts',this.profilerecentcharts[j].usermediaid)
                            //     if(this.profilerecentcharts[j].usermediaid==UsrMediaID)
                            //     {
                            //       this.profilerecentcharts.splice(j, 1);
                            //     }
                            // }
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ArtprofilePage.prototype.ionViewWillEnter = function () {
        this.firtsname = localStorage['firstname'];
        if (localStorage.getItem('image1') != null) {
            this.profile_pic = localStorage.getItem('image1');
            this.event.publish('user:image', this.profile_pic, localStorage['firstname'], Date.now());
        }
        //  alert('tt'+localStorage['following'])
        if (localStorage['following'] != undefined) {
            this.following = localStorage['following'];
        }
    };
    ArtprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-artprofile',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/artprofile/artprofile.html"*/`<!--\n  Generated template for the ArtprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left style="width: 19px;">\n      <button ion-button menuToggle>\n        <ion-icon item-start>\n          <img class="navbar-icon" item-left src="assets/Menu/navbar.png" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: CENTER; margin-left: 26px; margin-top: 5px;"\n      >{{title}}</ion-title\n    >\n\n    <ion-buttons\n      (click)="tapshow3()"\n      right\n      style="width: 14px; margin-right: 16px;"\n    >\n      <button style="width: 26px;" ion-button>\n        <ion-icon item-start>\n          <img class="navbar-icon" item-left src="assets/profile/share.png" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div *ngIf="showshare==true" id="shareid" class="share-service">\n    <div class="arrow-icon">\n      <img class="icon-img" src="assets/profile/arrow.png" />\n    </div>\n    <ion-row style="padding: 7px; margin-top: -7px;">\n      <ion-col>\n        <img src="assets/profile/facebook.png" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/twitter.png " />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/google_plus.png" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/pinterest.png" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/whatsaap.png" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/mailwhite.png" />\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- <div *ngIf="loadercover==false" class="row-image">\n      <div class="div-right-inner" >\n        <p class="p-text p-points-text" style="font-size:1.2rem"></p>\n        <p class="p-text p-points-text"></p>\n      </div>\n    </div> -->\n  <div class="row-image" [ngStyle]="{\'background-image\':\'url(\'+banner+\')\'}">\n    <ion-row>\n      <ion-col style="padding: 15px;">\n        <div class="circle-radius">\n          <img\n            *ngIf="loaderitem==false"\n            style="border-radius: 50%; height: 100%; width: 100%;"\n            [src]="profile_pic"\n          />\n        </div>\n        <p\n          style="\n            margin-top: 5px;\n            font-weight: 500;\n            color: #fff;\n            font-size: 1.6rem;\n            font-family: AvenirLTStd-Heavy;\n            margin-left: 8px;\n            height: 0px;\n          "\n        >\n          {{firtsname}}\n        </p>\n        <!-- <p style="    margin-top: -11px;font-weight: 100;    color: #fff;">NYC</p> -->\n      </ion-col>\n      <ion-col>\n        <ion-row style="text-align: center; margin-top: 6px;">\n          <ion-col (click)="inboxtap()">\n            <div class="pro-div">\n              <img\n                style="height: 17px; margin-top: 11px;"\n                src="assets/profile/mail.png"\n              />\n            </div>\n            <p class="p-tag">Inbox</p>\n          </ion-col>\n\n          <ion-col (click)="uploadfile()">\n            <!-- <ion-col (click)="uploadnavigate()" > -->\n            <!-- <div *ngIf="artistprop==\'active\'" class="pro-div" style="background-color:#F29A10">\n    <img  style="    height: 17px;    margin-top: 11px;" src="assets/profile/downloads.png">\n    \n    </div>\n    <p *ngIf="artistprop==\'active\'" class="p-tag">Upload</p> -->\n            <div class="pro-div" style="background-color: hsl(37, 90%, 51%);">\n              <img\n                style="height: 17px; margin-top: 11px;"\n                src="assets/profile/downloads.png"\n              />\n            </div>\n            <p class="p-tag">Upload</p>\n          </ion-col>\n          <ion-col (click)="editprop()">\n            <div class="pro-div">\n              <img\n                style="height: 17px; margin-top: 11px;"\n                src="assets/profile/edit.png"\n              />\n            </div>\n            <p class="p-tag">Edit</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col col-5>\n            <p\n              (click)="movetofollowers(1)"\n              style="\n                font-size: 1.3rem;\n                display: inline-flex;\n                color: #fff !important;\n              "\n            >\n              {{follower}} <span class="text-style"> Followers</span>\n            </p>\n          </ion-col>\n          <ion-col col-2>\n            <hr class="hr-line" />\n          </ion-col>\n          <ion-col col-5>\n            <p\n              (click)="movetofollowers(2)"\n              style="\n                font-size: 1.3rem;\n                display: inline-flex;\n                color: #fff !important;\n              "\n            >\n              {{following}} <span class="text-style"> Following</span>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col>\n        <ion-row style="padding: 7px;">\n          <ion-col>\n            <!-- <img src="assets/profile/facebook (2).png"> -->\n          </ion-col>\n          <ion-col>\n            <!-- <img src="assets/profile/002-twitter.png"> -->\n          </ion-col>\n          <ion-col>\n            <!-- <img src="assets/profile/linkedIn.png"> -->\n          </ion-col>\n          <ion-col>\n            <!-- <img src="assets/profile/pinterest (2).png"> -->\n          </ion-col>\n          <ion-col>\n            <!-- <img src="assets/profile/instagram.png"> -->\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-segment\n    mode="md"\n    [(ngModel)]="playlist"\n    style="font-family: AvenirLTStd-Heavy;"\n  >\n    <ion-segment-button\n      class="seg-stylepro"\n      value="latest"\n      (ionSelect)="changeplaylist(1)"\n    >\n      {{charttitle}} Charts\n    </ion-segment-button>\n    <ion-segment-button\n      class="seg-stylepro"\n      value="recent"\n      (ionSelect)="changeplaylist(2)"\n    >\n      Recent Uploads\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."\n    ></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf="artistprop==\'inactive\'" class="category-list">\n    <div id="categorylist">\n      <ion-row style="padding: 6px;">\n        <ion-col\n          style="\n            font-weight: 500;\n            font-family: AvenirLTStd-Heavy;\n            font-size: 1.6rem;\n          "\n          >Categories</ion-col\n        >\n        <ion-col\n          *ngIf="showcat==true"\n          (click)="showcatevent(1)"\n          class="prop-see"\n          >See All</ion-col\n        >\n        <ion-col\n          *ngIf="showcat==false"\n          (click)="showcatevent(2)"\n          class="prop-see"\n          >Close</ion-col\n        >\n      </ion-row>\n      <ion-row *ngIf="showcat==true" style="margin-top: -8px;">\n        <ion-col class="col-cat" (click)="songtype(1)">\n          <img class="img-cat" src="assets/category/categories1.png" />\n          <p class="cat-types">Music</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(2)">\n          <img class="img-cat" src="assets/category/categories2.png" />\n          <p class="cat-types">Dance</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(3)">\n          <img class="img-cat" src="assets/category/categories3.png" />\n          <p class="cat-types">Film</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(4)">\n          <img class="img-cat" src="assets/category/categories4.png" />\n          <p class="cat-types">Photography</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(7)">\n          <img class="img-cat" src="assets/category/categories5.png" />\n          <p class="cat-types">Litreature</p>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="showcat==false">\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(1)">\n            <img class="img-cat" src="assets/category/categories1.png" />\n            <p class="cat-types">Music</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(2)">\n            <img class="img-cat" src="assets/category/categories2.png" />\n            <p class="cat-types">Dance</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(3)">\n            <img class="img-cat" src="assets/category/categories3.png" />\n            <p class="cat-types">Film</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(4)">\n            <img class="img-cat" src="assets/category/categories4.png" />\n            <p class="cat-types">Photography</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(7)">\n            <img class="img-cat" src="assets/category/categories5.png" />\n            <p class="cat-types">Litreature</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(8)">\n            <img class="img-cat" src="assets/category/categories6.png" />\n            <p class="cat-types">Art</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(5)">\n            <img class="img-cat" src="assets/category/categories7.png" />\n            <p class="cat-types">Freestyle</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(9)">\n            <img class="img-cat" src="assets/category/categories8.png" />\n            <p class="cat-types">Personality</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(6)">\n            <img class="img-cat" src="assets/category/categories9.png" />\n            <p class="cat-types">Other</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n  <div [ngSwitch]="playlist">\n    <!-- <div *ngIf="artistprop==\'inactive\'"  > -->\n    <!-- <div  id="categorylist" *ngSwitchCase="\'latest\'" class="category-list">\n    \n      <ion-row style="padding: 6px;">\n     <ion-col style="font-weight: 500;    font-family: AvenirLTStd-Heavy;font-size: 1.6rem;">Categories</ion-col>\n     <ion-col *ngIf="showcat==true" (click)="showcatevent(1)" class="prop-see" >See All</ion-col>\n     <ion-col *ngIf="showcat==false" (click)="showcatevent(2)" class="prop-see" >Close</ion-col>\n   </ion-row>\n   <ion-row *ngIf="showcat==true"  style="margin-top: -8px;">\n    <ion-col class="col-cat" (click)="songtype(1)">\n      <img class="img-cat" src="assets/category/categories1.png">\n      <p class="cat-types">Music</p>\n  </ion-col>\n  <ion-col  class="col-cat" (click)="songtype(2)">\n      <img class="img-cat" src="assets/category/categories2.png">\n<p class="cat-types">Dance</p>\n    </ion-col>\n  <ion-col  class="col-cat" (click)="songtype(3)">\n      <img class="img-cat" src="assets/category/categories3.png">\n <p class="cat-types">Film</p>\n    </ion-col>\n  <ion-col  class="col-cat" (click)="songtype(4)">\n      <img class="img-cat" src="assets/category/categories4.png">\n      <p class="cat-types">Photography</p>\n  </ion-col>\n  <ion-col  class="col-cat" (click)="songtype(7)">\n      <img class="img-cat" src="assets/category/categories5.png">\n      <p class="cat-types">Litreature</p>\n  </ion-col>\n   </ion-row>\n  <div *ngIf="showcat==false" >\n    <ion-row>\n      <ion-col class="col-cat" (click)="songtype(1)">\n          <img class="img-cat" src="assets/category/categories1.png">\n          <p class="cat-types">Music</p>\n      </ion-col>\n      <ion-col  class="col-cat" (click)="songtype(2)">\n          <img class="img-cat" src="assets/category/categories2.png">\n    <p class="cat-types">Dance</p>\n        </ion-col>\n      <ion-col  class="col-cat" (click)="songtype(3)">\n          <img class="img-cat" src="assets/category/categories3.png">\n     <p class="cat-types">Film</p>\n        </ion-col>\n      <ion-col  class="col-cat" (click)="songtype(4)">\n          <img class="img-cat" src="assets/category/categories4.png">\n          <p class="cat-types">Photography</p>\n      </ion-col>\n     \n      </ion-row>\n      <ion-row>\n         \n          <ion-col  class="col-cat" (click)="songtype(7)">\n              <img class="img-cat" src="assets/category/categories5.png">\n        <p class="cat-types">Litreature</p>\n            </ion-col>\n          <ion-col  class="col-cat" (click)="songtype(8)">\n              <img class="img-cat" src="assets/category/categories6.png">\n         <p class="cat-types">Art</p>\n            </ion-col>\n          <ion-col  class="col-cat" (click)="songtype(5)">\n              <img class="img-cat" src="assets/category/categories7.png">\n              <p class="cat-types">Freestyle</p>\n          </ion-col>\n          <ion-col  class="col-cat" (click)="songtype(9)">\n              <img class="img-cat" src="assets/category/categories8.png">\n              <p class="cat-types">Personality</p>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col  class="col-cat" (click)="songtype(6)">\n                  <img class="img-cat" src="assets/category/categories9.png">\n                  <p class="cat-types">Other</p>\n              </ion-col>\n          </ion-row>\n    </div>\n    \n  \n  </div> -->\n    <!-- </div> -->\n    <div *ngSwitchCase="\'latest\'">\n      <ion-list class="recent-upload">\n        <ion-row style="padding: 17px;" *ngIf="artistprop==\'inactive\'">\n          <ion-col>\n            <p style="font-weight: bold; font-size: 1.3rem;">\n              Based on your prefrences\n            </p>\n          </ion-col>\n          <ion-col style="text-align: end;"\n            ><button\n              (click)="changeprefrence()"\n              class="button-prefrence"\n              ion-button\n              color="primary"\n            >\n              Change Prefrences\n            </button></ion-col\n          >\n        </ion-row>\n        <ion-row style="margin-top: -18px;" padding>\n          <p class="head-p" *ngIf="artistprop==\'inactive\'">\n            <span class="span-head">Latest Uploads </span>{{type}}\n          </p>\n        </ion-row>\n        <!-- <loaderdata *ngIf="loaderitem==true"></loaderdata> -->\n        <ion-row\n          *ngFor="let value of latestchart;let i=index"\n          style="margin-top: -10px; margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              [src]="value.media_thumbnail_url"\n            />\n          </div>\n          <div class="img-box">\n            <div class="img-content">\n              <div (click)="viewvideo(i)" class="cat-div">\n                <!-- <img class="cat-icon" [src]="value.mediathumbnailuser"> -->\n                <ion-row>\n                  <ion-col style="position: absolute;" class="cols-style">\n                    <p\n                      style="\n                        color: #fff;\n                        text-align: start;\n\n                        font-size: 2.9rem;\n\n                        position: absolute;\n\n                        top: -46px;\n                      "\n                    >\n                      0{{i+1}}\n                    </p>\n                  </ion-col>\n                  <ion-col col-8>\n                    <img\n                      *ngIf="value.media_type==\'video/mp4\'||value.media_type==\'youtube\' || value.media_type==\'audio/mpeg\' || value.media_type==\'audio/mp3\' "\n                      class="play-style"\n                      src="assets/play.png"\n                    />\n                  </ion-col>\n                  <ion-col col-4>\n                    <img\n                      *ngIf="value.mediathumbnailuser==null"\n                      class="cat-icon"\n                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8V8wHk1BbSmp3ltF_mbRP10iVeNAF5RqiALGKl3THo3x_-B36&usqp=CAU"\n                    />\n                    <!-- <img class="cat-icon" [src]="value.small_image_url"> -->\n                    <img\n                      *ngIf="value.mediathumbnailuser!=null"\n                      class="cat-icon"\n                      [src]="value.mediathumbnailuser"\n                    />\n                  </ion-col>\n                </ion-row>\n              </div>\n              <div class="details">\n                <ion-row>\n                  <ion-col col-5>\n                    <div class="details-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.artforms}}</p>\n                      <!-- <div *ngIf="user_display_name!=value.user_display_name" class="stars" (click)="openstar(value.rating,value.usermediaid,value.user_display_name)"> <ionic3-star-rating  -->\n                      <div\n                        *ngIf="user_display_name!=value.user_display_name"\n                        class="stars"\n                        (click)="openstar(value.usermediaid)"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="false"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n\n                      <div\n                        *ngIf="user_display_name==value.user_display_name"\n                        class="stars"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="true"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col col-4>\n                    <div class="details-2">\n                      <p class="author-name">{{value.user_display_name}}</p>\n                      <!-- <p class="post-time">{{value.usermedia_posted}}</p> -->\n                    </div>\n                  </ion-col>\n                  <ion-col col-3>\n                    <figure class="author-img">\n                      <img\n                        (click)="artistpro(i)"\n                        style="border-radius: 35px;"\n                        class="custom-cat-icon"\n                        [src]="value.user_avatar"\n                      />\n                    </figure>\n                  </ion-col>\n                </ion-row>\n              </div>\n\n              <!-- <div class="detail-grid" >\n        \n      <div style="margin-top: 6px;" class="detail-div" >\n         <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n         <p class="title-type">{{value.toptypeprofile}}</p>\n         <div *ngIf="user_display_name!=value.user_display_name" class="star-div" (click)="openstar(value.usermediaid)"> <ionic3-star-rating \n          activeIcon = "ios-star"\n          defaultIcon = "ios-star-outline"\n          activeColor = "rgb(228, 215, 38)" \n          defaultColor = "#f4f4f4"\n          readonly="false"\n          [rating]="value.totalRating">\n      </ionic3-star-rating></div>\n      <div *ngIf="user_display_name==value.user_display_name" class="star-div" > <ionic3-star-rating \n        activeIcon = "ios-star"\n        defaultIcon = "ios-star-outline"\n        activeColor = "rgb(228, 215, 38)" \n        defaultColor = "#f4f4f4"\n        readonly="true"\n        [rating]="value.totalRating">\n    </ionic3-star-rating></div>\n    </div>\n      \n      <div style="text-align:right; " class="detail-div1" >\n        <div class="author-box">\n        <p style="    height: 0px;font-weight: bold">{{value.user_display_name}}</p>\n        <p>{{value.usermedia_posted}}</p>\n        </div>\n      </div>\n      <div   class="detail-div userpic">\n        <img (click)="artistpro(i)" class="userimage" [src]="value.user_profile_avatar">\n      </div>\n      </div> -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshow1(i)"></div>\n              </div>\n              <div\n                class="header1"\n                (click)="followedartist(value.artist_id,value.user_display_name)"\n              >\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetocomment(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate()">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n\n              <div\n                class="header1"\n                (click)="DeleteMedia(value.usermediaid,i,\'artist\')"\n              >\n                <ion-icon name="ios-trash-outline" mode="ios"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </ion-row>\n      </ion-list>\n    </div>\n    <!-- <div >\n    <div  id="categorylist" class="category-list" *ngSwitchCase="\'recent\'">\n   \n        <ion-row style="    padding: 6px;">\n       <ion-col style="font-weight: 500;">Categories</ion-col>\n       <ion-col *ngIf="showcat==true" (click)="showcatevent(1)" class="prop-see" >See All</ion-col>\n       <ion-col *ngIf="showcat==false" (click)="showcatevent(2)" class="prop-see" >Close</ion-col>\n     </ion-row>\n     <ion-row *ngIf="showcat==true"  style="margin-top: -8px;">\n       <ion-col class="col-cat" (click)="songtype(1)">\n         <img class="img-cat" src="assets/category/categories1.png">\n         <p class="cat-types">Music</p>\n     </ion-col>\n     <ion-col  class="col-cat" (click)="songtype(2)">\n         <img class="img-cat" src="assets/category/categories2.png">\n   <p class="cat-types">Dance</p>\n       </ion-col>\n     <ion-col  class="col-cat" (click)="songtype(3)">\n         <img class="img-cat" src="assets/category/categories3.png">\n    <p class="cat-types">Film</p>\n       </ion-col>\n     <ion-col  class="col-cat" (click)="songtype(4)">\n         <img class="img-cat" src="assets/category/categories4.png">\n         <p class="cat-types">Photography</p>\n     </ion-col>\n     <ion-col  class="col-cat" (click)="songtype(7)">\n         <img class="img-cat" src="assets/category/categories5.png">\n         <p class="cat-types">Litreature</p>\n     </ion-col>\n     </ion-row>\n    <div *ngIf="showcat==false" >\n      <ion-row>\n        <ion-col class="col-cat" (click)="songtype(1)">\n            <img class="img-cat" src="assets/category/categories1.png">\n            <p class="cat-types">Music</p>\n        </ion-col>\n        <ion-col  class="col-cat" (click)="songtype(2)">\n            <img class="img-cat" src="assets/category/categories2.png">\n      <p class="cat-types">Dance</p>\n          </ion-col>\n        <ion-col  class="col-cat" (click)="songtype(3)">\n            <img class="img-cat" src="assets/category/categories3.png">\n       <p class="cat-types">Film</p>\n          </ion-col>\n        <ion-col  class="col-cat" (click)="songtype(4)">\n            <img class="img-cat" src="assets/category/categories4.png">\n            <p class="cat-types">Photography</p>\n        </ion-col>\n       \n        </ion-row>\n        <ion-row>\n           \n            <ion-col  class="col-cat" (click)="songtype(7)">\n                <img class="img-cat" src="assets/category/categories5.png">\n          <p class="cat-types">Litreature</p>\n              </ion-col>\n            <ion-col  class="col-cat" (click)="songtype(8)">\n                <img class="img-cat" src="assets/category/categories6.png">\n           <p class="cat-types">Art</p>\n              </ion-col>\n            <ion-col  class="col-cat" (click)="songtype(5)">\n                <img class="img-cat" src="assets/category/categories7.png">\n                <p class="cat-types">Freestyle</p>\n            </ion-col>\n            <ion-col  class="col-cat" (click)="songtype(9)">\n                <img class="img-cat" src="assets/category/categories8.png">\n                <p class="cat-types">Personality</p>\n            </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col  class="col-cat" (click)="songtype(6)">\n                    <img class="img-cat" src="assets/category/categories9.png">\n                    <p class="cat-types">Other</p>\n                </ion-col>\n            </ion-row>\n      </div>\n      \n    \n    </div>\n  </div> -->\n    <div *ngSwitchCase="\'recent\'">\n      <!-- <ion-list class="recent-upload"  >\n          <ion-row style="    padding: 17px;" *ngIf="artistprop==\'inactive\'">\n              <ion-col>\n               <p style="    font-weight: bold;\n               font-size:1.3rem "> Based on your prefrence</p>\n     \n               </ion-col>\n              <ion-col style="text-align: end;"><button (click)="changeprefrence()" class="button-prefrence" ion-button color="primary">Change Prefrences</button></ion-col>\n            </ion-row>\n   <ion-row padding style="margin-top: -18px;">\n   <p class="head-p"><span class="span-head">Recent Uploads </span> in Music</p>    \n  </ion-row>   \n  \n  <ion-row *ngFor="let value of profilerecentcharts"  style="    margin-top: -10px;    margin-bottom: 26px;">\n    <div class="image-tag">\n       \n        <img style="    width: 89%;" src="assets/Dashboard/thumbnail.png">\n       \n      </div>\n      <div class="img-box" >\n      <div class="img-content">\n        <div class="cat-div"> \n          <img class="cat-icon" src="assets/Dashboard/artist_profile1.png">\n        </div>\n       \n        <div class="detail-grid">\n          \n        <div style="margin-top: 6px;" class="detail-div">\n           <p style="font-weight: bold;" class="music-type">King Cay Music</p>\n           <p class="title-type">Music / Hip Hop/ Rap</p>\n           <div class="star-div"> <ionic3-star-rating \n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "rgb(228, 215, 38)" \n            defaultColor = "#f4f4f4"\n            readonly="true"\n            [rating]="5">\n        </ionic3-star-rating></div>\n        </div>\n        \n        <div style="text-align:right; " class="detail-div1" (click)="artistpro()">\n          <div class="author-box">\n          <p style="    height: 0px;font-weight: bold">King Cay</p>\n          <p>10 mins ago</p>\n          </div>\n        </div>\n        <div   class="detail-div userpic">\n          <img class="userimage" src="assets/tabsicon/propic.jpg">\n        </div>\n        </div>\n  \n      </div>\n      </div>\n      <div class="post-img">\n   <div class="social-img">\n     \n     <div class="header1">\n        <img  class="img-post" src="assets/Dashboard/share-gray.png">\n        <div class="share-div" (click)="tapshow1()"></div>\n      </div>\n      <div class="header1" (click)="followedartist()">\n          <img class="img-post" src="assets/Dashboard/user.png">\n        </div>\n        <div class="header1" (click)="navigatetocomment()">\n            <img class="img-post" src="assets/Dashboard/msg.png">\n          </div>\n          <div class="header1" (click)="reportnavigate()">\n              <img class="img-post" src="assets/Dashboard/error.png">\n            </div>\n  \n      </div>\n    </div>\n    </ion-row>\n  \n  </ion-list> -->\n\n      <ion-list class="recent-upload">\n        <ion-row style="padding: 17px;" *ngIf="artistprop==\'inactive\'">\n          <ion-col>\n            <p style="font-weight: bold; font-size: 1.3rem;">\n              Based on your prefrences\n            </p>\n          </ion-col>\n          <ion-col style="text-align: end;"\n            ><button\n              (click)="changeprefrence()"\n              class="button-prefrence"\n              ion-button\n              color="primary"\n            >\n              Change Prefrences\n            </button></ion-col\n          >\n        </ion-row>\n        <ion-row style="margin-top: -18px;" padding>\n          <p *ngIf="!type" class="head-p">\n            <span class="span-head">Recent Uploads </span>\n          </p>\n          <p *ngIf="type" class="head-p">\n            <span class="span-head">Recent Uploads </span> {{type}}\n          </p>\n        </ion-row>\n        <!-- <ion-row style="    padding: 6px;">\n  <ion-col style="font-weight: 500;">Categories</ion-col>\n  <ion-col *ngIf="showcat==true" (click)="showcatevent(1)" class="prop-see" >See All</ion-col>\n  <ion-col *ngIf="showcat==false" (click)="showcatevent(2)" class="prop-see" >Close</ion-col>\n</ion-row>\n<ion-row *ngIf="showcat==true"  style="margin-top: -8px;">\n  <ion-col class="col-cat" (click)="songtype(1)">\n    <img class="img-cat" src="assets/category/categories1.png">\n    <p class="cat-types">Music</p>\n</ion-col>\n<ion-col  class="col-cat" (click)="songtype(2)">\n    <img class="img-cat" src="assets/category/categories2.png">\n<p class="cat-types">Dance</p>\n  </ion-col>\n<ion-col  class="col-cat" (click)="songtype(3)">\n    <img class="img-cat" src="assets/category/categories3.png">\n<p class="cat-types">Film</p>\n  </ion-col>\n<ion-col  class="col-cat" (click)="songtype(4)">\n    <img class="img-cat" src="assets/category/categories4.png">\n    <p class="cat-types">Photography</p>\n</ion-col>\n<ion-col  class="col-cat" (click)="songtype(7)">\n    <img class="img-cat" src="assets/category/categories5.png">\n    <p class="cat-types">Litreature</p>\n</ion-col>\n</ion-row>\n<div *ngIf="showcat==false" >\n <ion-row>\n   <ion-col class="col-cat" (click)="songtype(1)">\n       <img class="img-cat" src="assets/category/categories1.png">\n       <p class="cat-types">Music</p>\n   </ion-col>\n   <ion-col  class="col-cat" (click)="songtype(2)">\n       <img class="img-cat" src="assets/category/categories2.png">\n <p class="cat-types">Dance</p>\n     </ion-col>\n   <ion-col  class="col-cat" (click)="songtype(3)">\n       <img class="img-cat" src="assets/category/categories3.png">\n  <p class="cat-types">Film</p>\n     </ion-col>\n   <ion-col  class="col-cat" (click)="songtype(4)">\n       <img class="img-cat" src="assets/category/categories4.png">\n       <p class="cat-types">Photography</p>\n   </ion-col>\n  \n   </ion-row>\n   <ion-row>\n      \n       <ion-col  class="col-cat" (click)="songtype(7)">\n           <img class="img-cat" src="assets/category/categories5.png">\n     <p class="cat-types">Litreature</p>\n         </ion-col>\n       <ion-col  class="col-cat" (click)="songtype(8)">\n           <img class="img-cat" src="assets/category/categories6.png">\n      <p class="cat-types">Art</p>\n         </ion-col>\n       <ion-col  class="col-cat" (click)="songtype(5)">\n           <img class="img-cat" src="assets/category/categories7.png">\n           <p class="cat-types">Freestyle</p>\n       </ion-col>\n       <ion-col  class="col-cat" (click)="songtype(9)">\n           <img class="img-cat" src="assets/category/categories8.png">\n           <p class="cat-types">Personality</p>\n       </ion-col>\n       </ion-row>\n       <ion-row>\n           <ion-col  class="col-cat" (click)="songtype(6)">\n               <img class="img-cat" src="assets/category/categories9.png">\n               <p class="cat-types">Other</p>\n           </ion-col>\n       </ion-row>\n </div>\n  -->\n        <!-- <loaderdata *ngIf="loadingrecentdata==true"></loaderdata> -->\n\n        <ion-row\n          *ngFor="let value of profilerecentcharts;let i=index"\n          style="margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              [src]="value.media_thumbnail_url"\n            />\n          </div>\n          <div class="img-box">\n            <div class="img-content">\n              <div (click)="viewvideo1(i)" class="cat-div">\n                <!-- <img class="cat-icon" [src]="value.mediathumbnailuser"> -->\n                <ion-row>\n                  <ion-col col-8>\n                    <img\n                      *ngIf="value.media_type==\'video/mp4\'||value.media_type==\'youtube\' || value.media_type==\'audio/mpeg\' || value.media_type==\'audio/mp3\'"\n                      class="play-style"\n                      src="assets/play.png"\n                    />\n                  </ion-col>\n                  <ion-col col-4>\n                    <img\n                      *ngIf="value.mediathumbnailuser==null"\n                      class="cat-icon"\n                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8V8wHk1BbSmp3ltF_mbRP10iVeNAF5RqiALGKl3THo3x_-B36&usqp=CAU"\n                    />\n                    <!-- <img class="cat-icon" [src]="value.small_image_url"> -->\n                    <img\n                      *ngIf="value.mediathumbnailuser!=null"\n                      class="cat-icon"\n                      [src]="value.mediathumbnailuser"\n                    />\n                  </ion-col>\n                </ion-row>\n              </div>\n              <div class="details">\n                <ion-row>\n                  <ion-col col-5>\n                    <div class="details-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.artforms}}</p>\n\n                      <div\n                        *ngIf="user_display_name!=value.user_display_name"\n                        class="stars"\n                        (click)="openstar(value.usermediaid)"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="false"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n\n                      <div\n                        *ngIf="user_display_name==value.user_display_name"\n                        class="stars"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="true"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col col-4>\n                    <div class="details-2">\n                      <p class="author-name">{{value.user_display_name}}</p>\n                      <!-- <p class="post-time">{{value.usermedia_posted}}</p> -->\n                    </div>\n                  </ion-col>\n                  <ion-col col-3>\n                    <figure class="author-img">\n                      <img\n                        (click)="artistpro1(i)"\n                        style="border-radius: 35px;"\n                        class="custom-cat-icon"\n                        [src]="value.user_avatar"\n                      />\n                    </figure>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- <div class="detail-grid">\n     \n   <div style="margin-top: 6px;" class="detail-div" >\n      <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n      <p class="title-type">{{value.toptypeprofile}}</p>\n      <div *ngIf="user_display_name!=value.user_display_name" class="star-div" (click)="openstar(value.usermediaid)"> <ionic3-star-rating \n       activeIcon = "ios-star"\n       defaultIcon = "ios-star-outline"\n       activeColor = "rgb(228, 215, 38)" \n       defaultColor = "#f4f4f4"\n       readonly="false"\n       [rating]="value.totalRating">\n   </ionic3-star-rating></div>\n\n   <div *ngIf="user_display_name==value.user_display_name" class="star-div" > <ionic3-star-rating \n    activeIcon = "ios-star"\n    defaultIcon = "ios-star-outline"\n    activeColor = "rgb(228, 215, 38)" \n    defaultColor = "#f4f4f4"\n    readonly="true"\n    [rating]="value.totalRating">\n</ionic3-star-rating></div>\n   </div>\n   \n   <div style="text-align:right; " class="detail-div1" >\n     <div class="author-box">\n     <p style="    height: 0px;font-weight: bold">{{value.user_display_name}}</p>\n     <p>{{value.usermedia_posted}}</p>\n     </div>\n   </div>\n   <div   class="detail-div userpic">\n     <img (click)="artistpro1(i)" class="userimage" [src]="value.user_profile_avatar">\n   </div>\n   </div> -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshow2(i)"></div>\n              </div>\n              <div class="header1" (click)="followedartist(value.artist_id)">\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetocomment1(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate()">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n\n              <div\n                class="header1"\n                (click)="DeleteMedia(value.usermediaid,i,\'recent\')"\n              >\n                <ion-icon name="ios-trash-outline" mode="ios"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </ion-row>\n        <ion-infinite-scroll\n          (ionInfinite)="loadMore($event)"\n          loadingSpinner="bubbles"\n          loadingText="Loading data..."\n        >\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/artprofile/artprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_12__providers_dashboardservice_dashboardservice__["a" /* DashboardserviceProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ArtprofilePage);
    return ArtprofilePage;
}());

//# sourceMappingURL=artprofile.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutusp/aboutusp.module": [
		780,
		7
	],
	"../pages/artistprofilepage/artistprofilepage.module": [
		811,
		35
	],
	"../pages/artprofile/artprofile.module": [
		813,
		34
	],
	"../pages/category/category.module": [
		812,
		33
	],
	"../pages/categorytabpage/categorytabpage.module": [
		781,
		19
	],
	"../pages/chatinboxreply/chatinboxreply.module": [
		804,
		18
	],
	"../pages/childcattabpage/childcattabpage.module": [
		782,
		17
	],
	"../pages/choosecatpagetab/choosecatpagetab.module": [
		805,
		32
	],
	"../pages/commentsbox/commentsbox.module": [
		806,
		31
	],
	"../pages/communitygudelines/communitygudelines.module": [
		783,
		5
	],
	"../pages/communitypopover/communitypopover.module": [
		784,
		16
	],
	"../pages/competitiondetailpage/competitiondetailpage.module": [
		785,
		15
	],
	"../pages/competitionsp/competitionsp.module": [
		786,
		14
	],
	"../pages/createconversationpage/createconversationpage.module": [
		807,
		13
	],
	"../pages/dashboard/dashboard.module": [
		808,
		6
	],
	"../pages/editproartistpag/editproartistpag.module": [
		787,
		30
	],
	"../pages/editprofilepage/editprofilepage.module": [
		809,
		12
	],
	"../pages/followedartist/followedartist.module": [
		788,
		29
	],
	"../pages/followers-pagep/followers-pagep.module": [
		789,
		28
	],
	"../pages/getintouch/getintouch.module": [
		790,
		0
	],
	"../pages/home/home.module": [
		791,
		11
	],
	"../pages/howitworksp/howitworksp.module": [
		792,
		4
	],
	"../pages/howtouploadpagesidemenu/howtouploadpagesidemenu.module": [
		793,
		3
	],
	"../pages/inboxpage/inboxpage.module": [
		794,
		10
	],
	"../pages/popoverpageshare/popoverpageshare.module": [
		810,
		27
	],
	"../pages/privacyp/privacyp.module": [
		795,
		2
	],
	"../pages/reportprob/reportprob.module": [
		796,
		26
	],
	"../pages/securitypanel/securitypanel.module": [
		814,
		25
	],
	"../pages/selectuploadcategory/selectuploadcategory.module": [
		797,
		24
	],
	"../pages/subcattabp/subcattabp.module": [
		798,
		9
	],
	"../pages/tabspage/tabspage.module": [
		799,
		8
	],
	"../pages/termsandconditions/termsandconditions.module": [
		800,
		1
	],
	"../pages/uploadmedia/uploadmedia.module": [
		815,
		23
	],
	"../pages/viewtalent/viewtalent.module": [
		801,
		22
	],
	"../pages/viewvideoplay/viewvideoplay.module": [
		802,
		21
	],
	"../pages/viewvideotopperformers/viewvideotopperformers.module": [
		803,
		20
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_env__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SecurityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SecurityProvider = (function () {
    function SecurityProvider(http, httpclient, httplugin) {
        this.http = http;
        this.httpclient = httpclient;
        this.httplugin = httplugin;
        httplugin.setSSLCertMode("pinned");
        //Clear old cookies
        httplugin.clearCookies();
        console.log("Hello SecurityProvider Provider");
    }
    SecurityProvider.prototype.youtubetest = function (youtube_id) {
        return this.http
            .get(" https://www.artformplatform.com/test.html?url_string=" + youtube_id)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.getfollowing = function (artist_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        //  headers.append('COOKIE','CAKEPHP='+sessionId)
        // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        if (artist_id) {
            return this.http
                .get("https://www.artformplatform.com/api/followers/followingList.json?user_id=" +
                artist_id, requestOptions)
                .map(function (data) {
                return data.json();
            });
        }
        else {
            return this.http
                .get("https://www.artformplatform.com/api/followers/followingList.json", requestOptions)
                .map(function (data) {
                return data.json();
            });
        }
    };
    SecurityProvider.prototype.getfollow = function (artist_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        //  headers.append('COOKIE','CAKEPHP='+sessionId)
        // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        if (artist_id) {
            return this.http
                .get("https://www.artformplatform.com/api/followers/followersList.json?user_id=" +
                artist_id, requestOptions)
                .map(function (data) {
                return data.json();
            });
        }
        else {
            return this.http
                .get("https://www.artformplatform.com/api/followers/followersList.json", requestOptions)
                .map(function (data) {
                return data.json();
            });
        }
    };
    SecurityProvider.prototype.pushsend = function () {
        //alert(localStorage.getItem('uuid'))
        var params = {
            userId: localStorage["userid"],
            appId: "android",
            playerId: localStorage.getItem("uuid"),
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        //  headers.append('COOKIE','CAKEPHP='+sessionId)
        // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/user/saveAppDetails.json", params, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.charts = function (catid) {
        if (localStorage["usertype"] == 3) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            //   headers.append("Access-Control-Allow-Origin", "*");
            var sessionId = localStorage["sessionId"];
            var userToken = localStorage["xtoken"];
            headers.append("X-JSON-WEB-TOKEN", userToken);
            headers.append("X-Cookie", "CAKEPHP=" + sessionId);
            headers.append("Cache-control", "no-cache");
            headers.append("Cache-control", "no-store");
            headers.append("Expires", "0");
            headers.append("Pragma", "no-cache");
            //  headers.append('COOKIE','CAKEPHP='+sessionId)
            // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
                headers: headers,
                withCredentials: false,
            });
            console.log(requestOptions);
            if (catid) {
                return this.http
                    .get("https://www.artformplatform.com/api/player/charts.json?artist_id=" +
                    localStorage["userid"] +
                    "&category_id=" +
                    catid, requestOptions)
                    .map(function (data) {
                    return data.json();
                });
            }
            else {
                return this.http
                    .get("https://www.artformplatform.com/api/player/charts.json?artist_id=" +
                    localStorage["userid"], requestOptions)
                    .map(function (data) {
                    return data.json();
                });
            }
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            //  headers.append("Access-Control-Allow-Origin", "*");
            var sessionId = localStorage["sessionId"];
            var userToken = localStorage["xtoken"];
            headers.append("X-JSON-WEB-TOKEN", userToken);
            headers.append("X-Cookie", "CAKEPHP=" + sessionId);
            headers.append("Cache-control", "no-cache");
            headers.append("Cache-control", "no-store");
            headers.append("Expires", "0");
            headers.append("Pragma", "no-cache");
            headers.append("cache-control", "max-age=0");
            //  headers.append('COOKIE','CAKEPHP='+sessionId)
            // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
                headers: headers,
                withCredentials: false,
            });
            console.log(requestOptions);
            if (catid) {
                return this.http
                    .get("https://www.artformplatform.com/api/player/charts.json?artist_id=" +
                    localStorage["userid"] +
                    "&category_id=" +
                    catid, requestOptions)
                    .map(function (data) {
                    return data.json();
                });
            }
            else {
                //   return this.httpplugin.get('https://www.artformplatform.com/api/player/charts.json?artist_id='+localStorage['userid']+'&category_id='+catid,{},requestOptions)
                // .then(data=>{
                //   return data
                // })
                //  return this.http.get('https://www.demo.artformplatform.com/site.json',requestOptions)
                return this.http
                    .get("https://www.artformplatform.com/api/player/charts.json?artist_id=" +
                    localStorage["userid"], requestOptions)
                    .map(function (data) {
                    return data.json();
                });
            }
        }
    };
    SecurityProvider.prototype.artistcharts = function (artistid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        //  headers.append('COOKIE','CAKEPHP='+sessionId)
        // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .get("https://www.artformplatform.com/api/player/charts.json?artist_id=" +
            artistid, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.signin = function (signupdata, radiocheck) {
        var param = {
            txtUsername: signupdata.controls["email"].value,
            txtPassword: signupdata.controls["password"].value,
            txtConfirmPassword: signupdata.controls["confirmPassword"].value,
            txtUsertype: parseInt(radiocheck),
            txtMobile: 1,
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].mainApi + "/register.json", param).map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.getcompetition = function (competition_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        //  headers.append('COOKIE','CAKEPHP='+sessionId)
        // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .get("https://www.artformplatform.com/api/competitions/view/" +
            competition_id +
            ".json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.comments = function (usermediaid) {
        var params = {
            usermedia_id: usermediaid,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        //  headers.append('COOKIE','CAKEPHP='+sessionId)
        // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log(requestOptions);
        return this.http
            .post("https://www.artformplatform.com/api/comments/tree.json", params, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.islogged = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append('Access-Control-Allow-Origin', '*');
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        //  headers.append('COOKIE','CAKEPHP='+sessionId)
        // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log(requestOptions);
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].mainApi + "/isLogged.json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.login = function (email, password, usertype) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var param = {
            txtUsername: email,
            txtPassword: password,
            txtUsertype: usertype,
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].mainApi + "/login.json", param).map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.getInstagramUserInfo = function (response) {
        return this.http
            .get("https://api.instagram.com/v1/users/self/media/recent?access_token=" +
            response.access_token +
            "&count=5")
            .map(function (data) { return data.json(); });
    };
    SecurityProvider.prototype.youtubeshare = function (youtubeinput) {
        var param = {
            yt_url: youtubeinput,
        };
        if (localStorage["xtoken"]) {
        }
        else {
            alert("Pleae Log In");
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        //  headers.append('COOKIE','CAKEPHP='+sessionId)
        // let requestOptions=new RequestOptions({headers:headers,withCredentials: true})
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log("param", param);
        return this.http
            .post("https://www.artformplatform.com/api/upload/social.json", param, requestOptions)
            .map(function (data) { return data.json(); });
    };
    SecurityProvider.prototype.changeusertype = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(" https://www.artformplatform.com/api/user/becomeAnArtist.json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.cattrendingchattab = function (cattab, intrest, catid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return (this.http
            .get("https://www.artformplatform.com/api/player/topTen.json?&category_type=" +
            intrest +
            "&" +
            "category_id" +
            "=" +
            cattab +
            "&isotope_loader=1&page=0&limit=24", requestOptions)
            .map(function (data) {
            return data.json();
        }));
    };
    SecurityProvider.prototype.forgetpass = function (email) {
        var param = {
            txtUsername: email,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return (this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].mainApi + "/forgotPassowrd.json", param)
            .map(function (data) {
            return data.json();
        }));
    };
    SecurityProvider.prototype.recentupload = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get("https://www.artformplatform.com/recent-uploads.json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.trending_items = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get("https://www.artformplatform.com/trending.json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.loadmore = function (page, link, tag, catid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (tag == 0) {
            return (this.http
                .get("https://www.artformplatform.com/api/media/" +
                link +
                ".json?isotope_loader=1&page=" +
                page +
                "&limit=8", requestOptions)
                .map(function (data) {
                return data.json();
            }));
        }
        else {
            return (this.http
                .get("https://www.artformplatform.com/api/media/" +
                link +
                ".json?category=category&category_id=" +
                catid +
                "&isotope_loader=1&page=" +
                page +
                "&limit=8", requestOptions)
                .map(function (data) {
                return data.json();
            }));
        }
    };
    SecurityProvider.prototype.cattab = function (link, page, cattab, intrest, catid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return (this.http
            .get("https://www.artformplatform.com/api/media/" +
            link +
            ".json?&category=" +
            intrest +
            "&" +
            "category_id" +
            "=" +
            cattab +
            "&isotope_loader=1&page=" +
            page +
            "&limit=24", requestOptions)
            .map(function (data) {
            return data.json();
        }));
    };
    SecurityProvider.prototype.artistprofilerecent = function (page, catid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (catid) {
            return this.http
                .get("https://www.artformplatform.com/api/media/recentMedia.json?exclude_ids=[]&onlyFirstCategory=1&category=category&category_id=" +
                catid +
                "&isotope_loader=1&page_user_id=" +
                localStorage["userid"] +
                "&page=" +
                page +
                "&limit=8", requestOptions)
                .map(function (data) {
                return data.json();
            });
        }
        else {
            return this.http
                .get("https://www.artformplatform.com/api/media/recentMedia.json?exclude_ids=[]&onlyFirstCategory=1&isotope_loader=1&page_user_id=" +
                localStorage["userid"] +
                "&page=" +
                page +
                "&limit=8", requestOptions)
                .map(function (data) {
                return data.json();
            });
        }
    };
    SecurityProvider.prototype.artistprofilerecentchats = function (page, catid, userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //    headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (catid) {
            return this.http
                .get("https://www.artformplatform.com/api/media/recentMedia.json?exclude_ids=[]&onlyFirstCategory=1&category=category&category_id=" +
                catid +
                "&isotope_loader=1&page_user_id=" +
                userid +
                "&page=" +
                page +
                "&limit=8", requestOptions)
                .map(function (data) {
                return data.json();
            });
        }
        else {
            return this.http
                .get("https://www.artformplatform.com/api/media/recentMedia.json?exclude_ids=[]&onlyFirstCategory=1&isotope_loader=1&page_user_id=" +
                userid +
                "&page=" +
                page +
                "&limit=8", requestOptions)
                .map(function (data) {
                return data.json();
            });
        }
    };
    SecurityProvider.prototype.uploadmedia = function (medianame, categoryId, subcategoryId, subsubcategoryId, usermediaId) {
        if (categoryId == "undefined") {
            categoryId = 0;
        }
        else if (subcategoryId == "undefined") {
            subcategoryId = 0;
        }
        else if (subsubcategoryId == "undefined") {
            subsubcategoryId = 0;
        }
        if (localStorage["xtoken"]) {
        }
        else {
            alert("Please Log In");
        }
        //  alert( medianame+'sdsd' // optional
        //  +categoryId+'sdsd' // optional
        //  +subcategoryId+'sdsd' // optional
        //   +'sdsd'+subsubcategoryId+'sdsd'+ // optional
        //  usermediaId)
        var params = {
            mediaName: medianame,
            categoryId: categoryId,
            subcategoryId: subcategoryId,
            subsubcategoryId: subsubcategoryId,
            usermediaId: usermediaId,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        // alert('sessionId'+localStorage['sessionId'])
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post("https://www.artformplatform.com/api/media/updateMediaDetails.json", params, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.uploadcovercrop = function (coverimgsrc, usermediaId) {
        var coverdata = {
            x: 219.4319999999999,
            y: 104.60000000000002,
            height: 836.8000000000001,
            width: 1481.1360000000002,
            rotate: 0,
        };
        var params = {
            cover_src: coverimgsrc,
            // data from cropper.js
            usermedia_id: usermediaId,
        };
        if (localStorage["xtoken"]) {
        }
        else {
            alert("Please Log In");
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //    headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post("https://www.artformplatform.com/api/media/cropCover.json", params, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.sociallogininsta = function (id, username, profile_picture) {
        var param = {
            user_social_Id: id,
            user_display_name: username,
            user_fname: "",
            user_lname: "",
            user_emailid: "",
            user_image: profile_picture,
            user_cropped_image: "",
            user_verified: "1",
            user_social_type: "Instagram",
            usertype_id: "3",
            user_sex: "",
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].mainApi + "/social.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.sociallogingoogle = function (socialid, email, displayname, firtsname, profile_pic) {
        var param = {
            user_social_Id: socialid,
            user_display_name: displayname,
            user_fname: firtsname,
            user_lname: "",
            user_emailid: email,
            user_image: profile_pic,
            user_cropped_image: "",
            user_verified: "1",
            user_social_type: "google",
            usertype_id: "3",
            user_sex: "",
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origin", "*");
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].mainApi + "/social.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.sociallogintwitter = function (socialid, displayName, firtsname, profile_pic) {
        var param = {
            user_social_Id: socialid,
            user_display_name: displayName,
            user_fname: firtsname,
            user_lname: "",
            user_emailid: "",
            user_image: profile_pic,
            user_cropped_image: "",
            user_verified: "1",
            user_social_type: "twitter",
            usertype_id: "3",
            user_sex: "",
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].mainApi + "/social.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.sociallogin = function (socialid, email, profile_pic, first_name, profile_name, last_name) {
        var param = {
            user_social_Id: socialid,
            user_display_name: profile_name,
            user_fname: first_name,
            user_lname: last_name,
            user_emailid: email,
            user_image: profile_pic,
            user_cropped_image: "",
            user_verified: "1",
            user_social_type: "facebook",
            usertype_id: "3",
            user_sex: "",
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].mainApi + "/social.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.topperformers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //    headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return (this.http
            .get("https://www.artformplatform.com/api/player/topTen.json", requestOptions)
            .map(function (data) {
            return data.json();
        }));
    };
    SecurityProvider.prototype.artistfollowed = function (artist_id) {
        var param = {
            artist_id: artist_id,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var sessionId = localStorage["sessionId"];
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log(requestOptions);
        return this.http
            .post("https://www.artformplatform.com/api/followers/followUnfollow.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.reportmedia = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get("https://www.artformplatform.com/api/media/getReportTypes.json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.Competitionapi = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origin", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get("https://www.artformplatform.com/api/competitions.json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.loggedout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get("https://www.artformplatform.com/api/users/logout.json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.reportsubmit = function (mediaid, type) {
        var param = {
            media_id: mediaid,
            type: type,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        ////  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/media/report.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.editcomments = function (comments, mediacomment_id, usermediaid) {
        var param = {
            usermedia_comment: comments,
            mediacomment_id: mediacomment_id,
            usermedia_id: usermediaid,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/comments/update.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.addcomments = function (usermedia, comments) {
        var param = {
            usermedia_id: usermedia,
            usermedia_comment: comments,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/comments/create.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.deletecomments = function (mediacomment_id) {
        var param = {
            mediacomment_id: mediacomment_id,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/comments/delete.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.subcomments = function (usermediaid, mediacomment_id, comments) {
        var param = {
            usermedia_id: usermediaid,
            mediacomment_id: mediacomment_id,
            usermedia_comment: comments,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/subcomments/create.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.editsubcomments = function (comments, subeditmediacomment_id, usermediaid, editmediacomment_id) {
        var param = {
            usermedia_comment: comments,
            mediasubcomment_id: subeditmediacomment_id,
            mediacomment_id: editmediacomment_id,
            usermedia_id: usermediaid,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/subcomments/update.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.deletesubcomments = function (id) {
        var param = {
            mediasubcomment_id: id,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/subcomments/delete.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.starmedia = function (rate, usermedia_id) {
        var param = {
            rate: rate,
            usermedia_id: usermedia_id,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/media/rate.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.inboxapi = function (page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //    headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .get("https://www.artformplatform.com/api/messages/inbox.json?page=" +
            page +
            "&limit=8", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.markasread = function (conversationId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //   headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .get("https://www.artformplatform.com/api/messages/read.json?conversationId=" +
            conversationId, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.createconversation = function (id, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .get("https://www.artformplatform.com/api/messages/conversation.json?conversationId=" +
            id +
            "&page=" +
            page +
            "&limit=8", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.replytoconv = function (conversationid, comments) {
        var param = {
            conversationId: conversationid,
            message: comments,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .post("https://www.artformplatform.com/api/messages/reply.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.conversation = function (idtags, title, Message) {
        var param = {
            title: title,
            message: Message,
            recipients: idtags,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //  headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log("requestoptions", requestOptions);
        return this.http
            .post("https://www.artformplatform.com/api/messages/create.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.editprofile = function (user_fname, user_lname, user_display_name, user_mobileno, user_nationality, user_city, user_sex, user_biography, user_birth) {
        var param = {
            user_fname: user_fname,
            user_lname: user_lname,
            user_display_name: user_display_name,
            user_mobileno: user_mobileno,
            user_nationality: user_nationality,
            user_city: user_city,
            user_sex: user_sex,
            user_biography: user_biography,
            user_birth: user_birth,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        //headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log("requestoptions", requestOptions);
        return this.http
            .post("https://www.artformplatform.com/api/user/edit.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.getrecipients = function (value) {
        var param = {
            term: value,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log("requestoptions", requestOptions);
        return this.http
            .post("https://www.artformplatform.com/api/messages/getRecipients.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.getcategory = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log("requestoptions", requestOptions);
        // alert('requestoptions'+JSON.stringify(requestOptions))
        console.log(JSON.stringify(requestOptions));
        return (this.http
            .get("https://www.artformplatform.com/api/categories/getUserCategories.json", requestOptions)
            .map(function (data) {
            return data.json();
        }));
    };
    SecurityProvider.prototype.getcategories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log("requestoptions", requestOptions);
        // alert('requestoptions'+JSON.stringify(requestOptions))
        console.log(JSON.stringify(requestOptions));
        // return this.http.get('https://www.artformplatform.com/api/categories/getCategories.json',requestOptions)
        return this.http
            .get("https://www.artformplatform.com/api/categories/getCategoriesTree.json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.submitcat = function (addcategories, addsubCategories, addsubSubCategories) {
        // alert('submitcat')
        var param = {
            categories: addcategories,
            subCategories: addsubCategories,
            subSubCategories: addsubSubCategories,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        // alert('requestoptions'+JSON.stringify(requestOptions))
        console.log(JSON.stringify(requestOptions));
        return this.http
            .post("https://www.artformplatform.com/api/categories/saveUserCategories.json", param, requestOptions)
            .map(function (data) {
            //alert('data'+data)
            return data.json();
        });
    };
    SecurityProvider.prototype.getinTouch = function (Name, email, message) {
        var param = {
            name: Name,
            email: email,
            message: message,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        console.log("requestoptions", requestOptions);
        return this.http
            .post("https://www.artformplatform.com/api/forms/contact.json", param, requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    // Delete Function Here
    SecurityProvider.prototype.getDeleteMedia = function (UsrMediaID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .get("https://www.artformplatform.com/api/media/deleteMedia/" +
            UsrMediaID +
            ".json", requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider.prototype.getMediadetails = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        // headers.append("Access-Control-Allow-Origion", "*");
        var sessionId = localStorage["sessionId"];
        var userToken = localStorage["xtoken"];
        headers.append("X-JSON-WEB-TOKEN", userToken);
        headers.append("X-Cookie", "CAKEPHP=" + sessionId);
        headers.append("Cache-control", "no-cache");
        headers.append("Cache-control", "no-store");
        headers.append("Expires", "0");
        headers.append("Pragma", "no-cache");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers,
            withCredentials: false,
        });
        return this.http
            .get("https://www.artformplatform.com/api/player/media.json?usermedia_id=" +
            localStorage.getItem("usermedia"), requestOptions)
            .map(function (data) {
            return data.json();
        });
    };
    SecurityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
        // https://www.artformplatform.com/test.html
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */]])
    ], SecurityProvider);
    return SecurityProvider;
}());

//# sourceMappingURL=security.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosecatpagetabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commentsbox_commentsbox__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popoverpageshare_popoverpageshare__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reportprob_reportprob__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__followedartist_followedartist__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewtalent_viewtalent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artistprofilepage_artistprofilepage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboardservice_dashboardservice__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_viewvideoplay_viewvideoplay__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_viewvideotopperformers_viewvideotopperformers__ = __webpack_require__(184);
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
 * Generated class for the ChoosecatpagetabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoosecatpagetabPage = (function () {
    function ChoosecatpagetabPage(service, events, profilemedia, security, nativePageTransitions, modalCtrl, popoverCtrl, navCtrl, navParams) {
        var _this = this;
        this.service = service;
        this.events = events;
        this.profilemedia = profilemedia;
        this.security = security;
        this.nativePageTransitions = nativePageTransitions;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakedata = [1, 2, 3, 4];
        this.page = 0;
        this.Title = "Top Performers";
        events.subscribe("star-rating:changed", function (starRating) {
            console.log("starrating" + starRating);
            _this.rate = starRating;
        });
        this.link = "recentMedia";
    }
    ChoosecatpagetabPage.prototype.followartist = function (artist_id) {
        // let loading=this.loadingCtrl.create({
        //   spinner:'hide',
        //   content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
        //   cssClass:'transparent'
        // })
        // loading.present()
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.artistfollowed(artist_id); })
            .subscribe(function (data) {
            console.log(data.status);
            var modalfollow = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__followedartist_followedartist__["a" /* FollowedartistPage */], {
                msg: data.status,
            });
            modalfollow.present();
        });
    };
    ChoosecatpagetabPage.prototype.loaddata = function (infiniteScroll) {
        var _this = this;
        if (this.choiceofintrest == 1) {
            this.catid = "subsubcategory_id";
        }
        else if (this.choiceofintrest == 2) {
            this.catid = "subcategory_id";
        }
        else if (this.choiceofintrest == 3) {
            this.catid = "category_id";
        }
        __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].of(null)
            .flatMap(function () {
            return _this.security.cattab(_this.link, _this.page, _this.catype, _this.intrest, _this.catid);
        })
            .subscribe(function (data) {
            console.log(data.media);
            _this.recentdatafull = data;
            console.log("datamedia", data.media);
            _this.loadingdata = "off";
            if (data.status == "fail" && _this.page == 0) {
                // infiniteScroll.enable(false);
                _this.completedata =
                    "Nothing to show here yet, be the first to upload :) ";
            }
            else if (data.status == "fail") {
                _this.completedata = "Nothing more to load!";
            }
            else {
                _this.completedata = "";
            }
            _this.profilerecentcharts = _this.profilemedia.profilerecentcharts(data.media, _this.page);
            console.log("profilecharts", _this.profilerecentcharts);
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        });
    };
    ChoosecatpagetabPage.prototype.trendingload = function () {
        var _this = this;
        if (this.choiceofintrest == 1) {
            this.catid = "subsubcategory_id";
        }
        else if (this.choiceofintrest == 2) {
            this.catid = "subcategory_id";
        }
        else if (this.choiceofintrest == 3) {
            this.catid = "category_id";
        }
        console.log("choice" + this.choiceofintrest);
        console.log("catype" + this.catype);
        __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].of(null)
            .flatMap(function () {
            return _this.security.cattrendingchattab(_this.catype, _this.intrest, _this.catid);
        })
            .subscribe(function (data) {
            console.log("data", data.media);
            _this.loadingdata = "off";
            if (data.status == "fail") {
                _this.text = "Nothing to show here yet, be the first to upload :)";
            }
            else {
                _this.profilemedia.topperformers(data.playerList);
                _this.playerlist = _this.profilemedia.topperformersdata;
                console.log(_this.playerlist);
            }
        });
    };
    ChoosecatpagetabPage.prototype.loadMore = function (infiniteScroll) {
        this.page++;
        this.loaddata(infiniteScroll);
    };
    ChoosecatpagetabPage.prototype.ionViewDidLoad = function () {
        this.user_display_name = localStorage["firstname"];
        this.loadingdata = "on";
        this.title = this.navParams.get("title");
        // alert('title'+this.title)
        this.choiceofintrest = this.navParams.get("choiceofintrest");
        console.log("choiceofintrest", this.choiceofintrest);
        if (this.choiceofintrest == 1) {
            this.intrest = "subsubcategory";
            this.subsub = this.navParams.get("subsub");
            console.log("subsub", this.subsub);
            this.id = this.navParams.get("id");
            this.title = this.subsub[this.id].Subsubcategory.subsubcategory_name;
            this.catype = this.subsub[this.id].Subsubcategory.subsubcategory_id;
        }
        else if (this.choiceofintrest == 2) {
            this.intrest = "subcategory";
            this.subsub = this.navParams.get("subsub");
            console.log("subsub", this.subsub);
            this.id = this.navParams.get("id");
            this.title = this.subsub[this.id].Subcategory.subcategory_name;
            this.catype = this.subsub[this.id].Subcategory.subcategory_id;
        }
        else if (this.choiceofintrest == 3) {
            this.intrest = "category";
            this.subsub = this.navParams.get("subcat");
            console.log("subsub", this.subsub);
            this.id = this.navParams.get("id");
            this.title = this.subsub[this.id].Category.category_name;
            this.catype = this.subsub[this.id].Category.category_id;
            console.log("cattype" + this.catype);
            console.log("title" + this.title);
        }
        //  this.loaddata()
        this.trendingload();
        console.log("ionViewDidLoad ChoosecatpagetabPage");
        this.type = this.navParams.get("type");
        this.Titlecat = this.navParams.get("title");
        console.log("titlecat" + this.Titlecat);
        if (this.Titlecat) {
        }
        else {
            this.Titlecat = "Music";
        }
        if (this.type) {
            this.pet = this.type;
            if (this.type == "Recent_Uploads") {
                this.link = "recentMedia";
                this.loaddata();
            }
            else {
                this.link = "trendingMedia";
                this.loaddata();
            }
        }
        else {
            this.pet = "top_performers";
        }
    };
    ChoosecatpagetabPage.prototype.onSegmentChanged = function (ev) {
        if (ev.value == "top_performers") {
            this.Title = "Top Performers";
        }
        else if (ev.value == "Recent_Uploads") {
            this.Title = "Recent Uploads";
            this.link = "recentMedia";
            this.loaddata();
            //  alert('sd')
            //  this.navCtrl.push(ChoosecatpagetabPage,{type:ev.value,title:'Music'})
        }
        else if (ev.value == "Trending_Items") {
            this.Title = "Trending Items";
            this.link = "trendingMedia";
            this.loaddata();
        }
    };
    ChoosecatpagetabPage.prototype.navigatetocomment = function () {
        localStorage.removeItem("usermedia");
        var options = {
            direction: "up",
            duration: 500,
            slowdownfactor: 2,
        };
        this.nativePageTransitions.slide(options);
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        // commentsbox.present()
        // this.navCtrl.push(CommentsboxPage)
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__commentsbox_commentsbox__["a" /* CommentsboxPage */]);
        commentsbox.present();
        // let modal=this.modalCtrl.create(CommentsboxPage)
        // modal.present()
    };
    ChoosecatpagetabPage.prototype.tapshowtop = function (i) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], {
            image: this.playerlist[i].category_image_url,
            artistname: this.playerlist[i].user_display_name,
            user_url: this.playerlist[i].usermedia_url,
            usermediaid: this.playerlist[i].usermedia_id,
        });
        popover.present({
            ev: event,
        });
    };
    ChoosecatpagetabPage.prototype.navigatetomsg = function (id) {
        console.log("recentdata", this.profilerecentcharts);
        localStorage.removeItem("usermedia");
        var options = {
            direction: "up",
            duration: 500,
            slowdownfactor: 2,
        };
        console.log("user_url", this.profilerecentcharts[id]);
        this.nativePageTransitions.slide(options);
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__commentsbox_commentsbox__["a" /* CommentsboxPage */], {
            usermediaid: this.profilerecentcharts[id].usermediaid,
            mediapic: this.profilerecentcharts[id].category_image_url,
            medianame: this.profilerecentcharts[id].usermedia_name,
            artforms: this.profilerecentcharts[id].artforms,
            id: id,
            user_display_name: this.profilerecentcharts[id].user_display_name,
            user_avatar: this.profilerecentcharts[id].user_avatar,
            small_image_url: this.profilerecentcharts[id].mediathumbnailuser,
            totalrating: this.profilerecentcharts[id].totalRating,
            userurl: this.profilerecentcharts[id].userurl,
            artist_id: this.profilerecentcharts[id].artist_id,
            rate: this.profilerecentcharts[id].rating,
            idstatus: 0,
        });
        commentsbox.present();
        // this.navCtrl.push(CommentsboxPage)
    };
    ChoosecatpagetabPage.prototype.tapshow1 = function (i) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], {
            image: this.profilerecentcharts[i].category_image_url,
            artistname: this.profilerecentcharts[i].usermedia_name,
            user_url: this.profilerecentcharts[i].userurl,
            usermediaid: this.profilerecentcharts[i].usermediaid,
        });
        popover.present({
            ev: event,
        });
    };
    ChoosecatpagetabPage.prototype.navigatetomsgtop = function (id) {
        // alert(id)
        localStorage.removeItem("usermedia");
        var options = {
            direction: "up",
            duration: 500,
            slowdownfactor: 2,
        };
        console.log(this.playerlist[id].usermedia_path);
        this.nativePageTransitions.slide(options);
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__commentsbox_commentsbox__["a" /* CommentsboxPage */], {
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
    ChoosecatpagetabPage.prototype.reportnavigate = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__reportprob_reportprob__["a" /* ReportprobPage */]);
        modal.present();
    };
    ChoosecatpagetabPage.prototype.openstar = function (usermedia_id) {
        var _this = this;
        console.log("usermedia" + usermedia_id);
        console.log("rate" + this.rate);
        if (usermedia_id) {
            __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.service.starmedia(_this.rate, usermedia_id); })
                .subscribe(function (data) {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__viewtalent_viewtalent__["a" /* ViewtalentPage */], {
                    rate: _this.rate,
                });
                modal.present();
            });
        }
    };
    // authtap()
    // {
    //   this.navCtrl.push(ArtistprofilepagePage)
    // }
    ChoosecatpagetabPage.prototype.authtap = function (i, user_display_name) {
        //  alert('authtap')
        console.log("id" + i);
        if (this.user_display_name == user_display_name) {
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */], {
                id: i,
                rcentdata: this.recentdatafull,
            });
        }
    };
    ChoosecatpagetabPage.prototype.authtap1 = function (i, user_display_name) {
        if (this.user_display_name == user_display_name) {
        }
        else {
            console.log("playerlist", this.playerlist);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */], {
                id: i,
                rcentdata: this.playerlist,
                topid: 1,
            });
        }
    };
    ChoosecatpagetabPage.prototype.viewvideo = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_viewvideoplay_viewvideoplay__["a" /* ViewvideoplayPage */], {
            data: this.profilerecentcharts,
            id: id,
        });
        modal.present();
    };
    ChoosecatpagetabPage.prototype.viewvideotop = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__pages_viewvideotopperformers_viewvideotopperformers__["a" /* ViewvideotopperformersPage */], {
            data: this.playerlist,
            id: id,
        });
        modal.present();
    };
    ChoosecatpagetabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-choosecatpagetab",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/choosecatpagetab/choosecatpagetab.html"*/`<!--\n  Generated template for the ChoosecatpagetabPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar style="text-align: center;" color="primary">\n    <!-- <ion-row no-padding>\n     \n     <ion-col style="text-align:center"  no-padding>\n         <p style="color:#fff">{{Titlecat}}</p>\n     </ion-col>\n    </ion-row> -->\n    <span style="color: #fff; color: #fff; margin-top: -20px;"\n      >{{Titlecat}}</span\n    >\n    <ion-row no-padding>\n      <div class="segment-class">\n        <ion-segment\n          mode="md"\n          [(ngModel)]="pet"\n          (ionChange)="onSegmentChanged($event)"\n        >\n          <ion-segment-button mode="md" class="seg-tab" value="Recent_Uploads">\n            Recent Uploads\n          </ion-segment-button>\n          <hr class="divider-seg" />\n          <ion-segment-button mode="md" class="seg-tab" value="top_performers">\n            Top Performers\n          </ion-segment-button>\n          <hr class="divider-seg" />\n          <!-- <ion-segment-button  class="seg-tab" value="Recent_Uploads" > -->\n          <ion-segment-button mode="md" class="seg-tab" value="Trending_Items">\n            Trending Items\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'Recent_Uploads\'">\n      <ion-row style="margin-top: -6px;" padding>\n        <p class="head-p"><span class="span-head">Recent Uploads </span></p>\n      </ion-row>\n      <div>\n        <!-- <ion-row *ngFor="let value of fakedata;let i=index"  style="    margin-top: -10px;    margin-bottom: 26px;">\n           <div class="image-tag">\n              \n               <img style="    width: 89%;" src="assets/Dashboard/thumbnail.png">\n              \n             </div>\n             <div class="img-box" >\n             <div class="img-content">\n              \n                <ion-row>\n                  <ion-col class="cols-style">\n                   0{{i+1}}\n                  </ion-col>\n                <ion-col style="text-align:end">\n                  \n                </ion-col>\n                 </ion-row>\n \n \n               <div class="detail-grid1">\n                 \n               <div class="detail-div">\n                  <p style="font-weight: bold;" class="music-type">Dublin</p>\n                 <p class="title-type1">Photography/Architecture</p> \n                  <ion-row class="star-div"> \n                  <ion-col  col-2>\n                   <img style="height:13px;    margin: 4px 1px 2px -3px;" src="assets/Dashboard/rating.png">\n                 </ion-col>\n                 <ion-col col-10>\n                  <p class="count-like">6037</p>\n                 </ion-col>\n                 </ion-row>\n               </div>\n               <div class="image-box" >\n                 <ion-row (click)="authtap()">\n                   <ion-col col-8 style="    text-align: end;">\n                     <p> dipu_m18</p></ion-col>\n                   <ion-col col-3 style="margin-top: -2px;">\n                       <img class="userimage1" src="assets/tabsicon/propic.jpg"> </ion-col>\n                 </ion-row> \n                 <ion-row style="    margin-top: -32px;" (click)="openstar()">\n                   <ion-col col-3>\n                         <p style="       margin-left: 9px;\n                         display: inline-block;    font-size: 1.5rem;\n                         position: absolute;\n     right: -14px;">Vote</p>\n                   </ion-col>\n                   <ion-col col-9 style="padding: 9px;margin-top: 3px;display: flex;\n                   justify-content: center;">\n                       <ionic3-star-rating \n                       activeIcon = "ios-star"\n                       defaultIcon = "ios-star-outline"\n                       activeColor = "rgb(228, 215, 38)" \n                       defaultColor = "rgb(228, 215, 38)"\n                       readonly="true"\n                       [rating]="0">\n                   </ionic3-star-rating>\n                     </ion-col>\n                   </ion-row>\n               </div>\n               \n               </div>\n       \n             </div>\n             </div>\n             <div class="post-img">\n          <div class="social-img">\n            \n            <div class="header1">\n               <img class="img-post" src="assets/Dashboard/share-gray.png">\n             </div>\n             <div class="header1">\n                 <img class="img-post" src="assets/Dashboard/user.png">\n               </div>\n               <div class="header1">\n                   <img class="img-post" src="assets/Dashboard/msg.png">\n                 </div>\n                 <div class="header1" (click)="reportnavigate()">\n                     <img class="img-post" src="assets/Dashboard/error.png">\n                   </div>\n       \n             </div>\n             <div class="social-img">\n       \n              <div class="header1" >\n                 <img class="img-post" src="assets/Dashboard/share-gray.png">\n                 <div class="share-div" (click)="tapshow1()"></div>\n               </div>\n               <div class="header1" (click)="followedartist()">\n                   <img class="img-post" src="assets/Dashboard/user.png">\n                 </div>\n                 <div class="header1" (click)="navigatetocomment()">\n                     <img class="img-post" src="assets/Dashboard/msg.png">\n                   </div>\n                   <div class="header1" (click)="reportnavigate()">\n                       <img class="img-post" src="assets/Dashboard/error.png">\n                     </div>\n         \n               </div>\n           </div>\n           </ion-row> -->\n        <loaderdata *ngIf="loadingdata==\'on\'"></loaderdata>\n        <ion-row\n          *ngFor="let value of profilerecentcharts;let i=index"\n          style="margin-top: -10px; margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              [src]="value.media_thumbnail_url"\n            />\n          </div>\n          <div class="img-box">\n            <div class="img-content">\n              <div (click)="viewvideo(i)" class="cat-div">\n                <!-- <img class="cat-icon" [src]="value.mediathumbnailuser"> -->\n                <ion-row>\n                  <ion-col col-8>\n                    <img\n                      *ngIf="value.media_type==\'video/mp4\'||value.media_type==\'youtube\'||value.media_type==\'audio/mpeg\' || value.media_type==\'audio/mp3\'"\n                      class="play-style"\n                      src="assets/play.png"\n                    />\n                  </ion-col>\n                  <ion-col col-4>\n                    <!-- <img class="cat-icon" [src]="value.small_image_url"> -->\n                    <img class="cat-icon" [src]="value.mediathumbnailuser" />\n                  </ion-col>\n                </ion-row>\n              </div>\n              <div class="details">\n                <ion-row>\n                  <ion-col col-5>\n                    <div class="details-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.artforms}}</p>\n\n                      <div\n                        *ngIf="user_display_name!=value.user_display_name"\n                        class="stars"\n                        (click)="openstar(value.usermediaid)"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="false"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n\n                      <div\n                        *ngIf="user_display_name==value.user_display_name"\n                        class="stars"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="true"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col col-4>\n                    <div class="details-2">\n                      <p class="author-name">{{value.user_display_name}}</p>\n                      <!-- <p class="post-time">{{value.usermedia_posted}}</p> -->\n                    </div>\n                  </ion-col>\n                  <ion-col col-3>\n                    <figure class="author-img">\n                      <img\n                        (click)="authtap(i,value.user_display_name)"\n                        style="border-radius: 35px;"\n                        class="custom-cat-icon"\n                        [src]="value.user_avatar"\n                      />\n                    </figure>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- <div class="detail-grid" >\n              \n            <div style="margin-top: 6px;    white-space: nowrap;" class="detail-div" >\n               <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n               <p class="title-type">{{value.toptypeprofile}}</p>\n               <div class="star-div" >\n            <ionic3-star-rating (click)="openstar(value.usermediaid)" *ngIf="user_display_name!=value.user_display_name"\n                activeIcon = "ios-star"\n                defaultIcon = "ios-star-outline"\n                activeColor = "rgb(228, 215, 38)" \n                defaultColor = "#f4f4f4"\n                readonly="false"\n                [rating]="value.totalRating">\n            </ionic3-star-rating>\n\n            <ionic3-star-rating *ngIf="user_display_name==value.user_display_name"\n                activeIcon = "ios-star"\n                defaultIcon = "ios-star-outline"\n                activeColor = "rgb(228, 215, 38)" \n                defaultColor = "#f4f4f4"\n                readonly="true"\n                [rating]="value.totalRating">\n            </ionic3-star-rating>\n          \n          </div>\n            </div>\n            \n          \n             <div style="text-align:right; " class="detail-div1" >  \n              <div class="author-box">\n              <p  style="    height: 0px;font-weight: bold">{{value.user_display_name}}</p>\n              <p>{{value.usermedia_posted}}</p>\n              </div>\n            </div>\n            <div   class="detail-div userpic">\n              <img (click)="authtap(i,value.user_display_name)" class="userimage" [src]="value.user_profile_avatar">\n            </div>\n            </div> -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshow1(i)"></div>\n              </div>\n              <div class="header1" (click)="followartist(value.artist_id)">\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetomsg(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate()">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n            </div>\n          </div>\n        </ion-row>\n      </div>\n      <div\n        style="\n          text-align: center;\n          position: absolute;\n\n          width: 100%;\n          padding: 6%;\n          justify-content: center;\n        "\n      >\n        <p\n          style="\n            font-weight: bold;\n\n            font-size: 2.6rem;\n          "\n        >\n          {{completedata}}\n        </p>\n      </div>\n      <ion-infinite-scroll\n        (ionInfinite)="loadMore($event)"\n        loadingSpinner="bubbles"\n        loadingText="Loading data..."\n      >\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n\n    <!--Recent Uploads  -->\n    <ion-list *ngSwitchCase="\'top_performers\'">\n      <ion-row style="margin-top: -6px;" padding>\n        <p class="head-p"><span class="span-head">Top Performers</span></p>\n      </ion-row>\n      <loaderdata *ngIf="loadingdata==\'on\'"></loaderdata>\n      <div\n        style="\n          text-align: center;\n          position: absolute;\n          top: 25%;\n          width: 100%;\n          padding: 6%;\n          justify-content: center;\n        "\n        *ngIf="text"\n      >\n        <p\n          style="\n            font-weight: bold;\n\n            font-size: 2.6rem;\n          "\n        >\n          {{text}}\n        </p>\n      </div>\n      <div>\n        <ion-row\n          *ngFor="let value of playerlist;let i=index"\n          style="margin-top: -10px; margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              src="{{value.usermedia_path}}"\n            />\n          </div>\n          <div class="img-box">\n            <div class="img-content">\n              <!-- <ion-row style="height: 105px;" (click)="viewvideotop(i)">\n                     <ion-col class="cols-style">\n                      0{{i+1}}\n                     </ion-col>\n                   <ion-col style="text-align:end">\n                      <img class="\n                    cat-icon1" [src]="value.covermediathumbnail">\n                   </ion-col>\n                    </ion-row> -->\n              <ion-row style="height: 105px;" (click)="viewvideotop(i)">\n                <ion-col class="cols-style">\n                  0{{i+1}}\n                </ion-col>\n                <ion-col style="text-align: end;">\n                  <ion-row>\n                    <ion-col>\n                      <img\n                        style="\n                          position: absolute;\n                          justify-content: center;\n                          right: 32px;\n                          left: -30px;\n                          top: 41px;\n                        "\n                        *ngIf="value.usermedia_type==\'video/mp4\'||value.usermedia_type==\'youtube\'||value.usermedia_type==\'audio/mpeg\'  || value.usermedia_type==\'audio/mp3\'"\n                        class="play-style"\n                        src="assets/play.png"\n                      />\n                    </ion-col>\n                    <ion-col>\n                      <img\n                        class="cat-icon1"\n                        [src]="value.covermediathumbnail"\n                      />\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n              <div class="details-top">\n                <ion-row>\n                  <ion-col col-6>\n                    <div class="details-top-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.toptype}}</p>\n                      <ion-row class="number-star">\n                        <ion-col col-2>\n                          <img\n                            src="assets/Dashboard/rating.png"\n                            class="star-img-1"\n                          />\n                        </ion-col>\n                        <ion-col col-10>\n                          <p class="count-like">{{value.totalrating}}</p>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                  </ion-col>\n                  <ion-col col-6>\n                    <div class="details-top-2">\n                      <ion-row>\n                        <ion-col col-12>\n                          <p class="author-name">{{value.user_display_name}}</p>\n                          <figure class="author-img">\n                            <img\n                              (click)="authtap1(i,value.user_display_name)"\n                              style="border-radius: 35px;"\n                              class="custom-cat-icon-1"\n                              [src]="value.user_avatar"\n                            />\n                          </figure>\n                        </ion-col>\n                      </ion-row>\n\n                      <ion-row (click)="openstar(value.usermedia_id)">\n                        <ion-col col-3>\n                          <p>Vote</p>\n                        </ion-col>\n                        <ion-col col-9>\n                          <div class="stars-1">\n                            <ionic3-star-rating\n                              *ngIf="user_display_name!=value.user_display_name"\n                              activeIcon="ios-star"\n                              defaultIcon="ios-star-outline"\n                              activeColor="rgb(228, 215, 38)"\n                              defaultColor="rgb(228, 215, 38)"\n                              readonly="false"\n                              [rating]="value.rate"\n                            >\n                            </ionic3-star-rating>\n\n                            <ionic3-star-rating\n                              *ngIf="user_display_name==value.user_display_name"\n                              activeIcon="ios-star"\n                              defaultIcon="ios-star-outline"\n                              activeColor="rgb(228, 215, 38)"\n                              defaultColor="rgb(228, 215, 38)"\n                              readonly="true"\n                              [rating]="value.rate"\n                            >\n                            </ionic3-star-rating>\n                          </div>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- <div class="detail-grid1">\n                    \n                  <div style="white-space: nowrap;" class="detail-div">\n                     <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n                     <p class="title-type1">{{value.toptype}}</p>\n                     <ion-row class="star-div"> \n                     <ion-col  col-2>\n                      <img style="height:13px;    margin: 4px 1px 2px -3px;" src="assets/Dashboard/rating.png">\n                    </ion-col>\n                    <ion-col col-10>\n                     <p style="    margin-top: -4px;" class="count-like">{{value.totalrating}}</p>\n                    </ion-col>\n                    </ion-row>\n                  </div>\n                  <div class="image-box" >\n                    <ion-row (click)="authtap1(i,value.user_display_name)">\n                      <ion-col class="user_name_topperformers" col-8 style="    text-align: end;    white-space: nowrap;">\n                        <p style="text-overflow: ellipsis;\n                        overflow: hidden;"> {{value.user_display_name}}</p></ion-col>\n                      <ion-col col-3 style="margin-top: -2px;">\n                       \n                          <img  class="userimage1" src="{{value.user_avatar}}">\n                         \n                        </ion-col>\n                      </ion-row> \n                    <ion-row style="    margin-top: -32px;"  >\n                      <ion-col col-3>\n                            <p style="       margin-left: 9px;\n                            display: inline-block;    font-size: 1.5rem;\n                            position: absolute; right: -14px;">Vote</p>\n                      </ion-col>\n                      <ion-col col-9 style="padding: 9px;margin-top: 3px;display: flex;\n                      justify-content: center;">\n                          <ionic3-star-rating (click)="openstar(value.usermedia_id)"  *ngIf="user_display_name!=value.user_display_name"\n                          activeIcon = "ios-star"\n                          defaultIcon = "ios-star-outline"\n                          activeColor = "rgb(228, 215, 38)" \n                          defaultColor = "rgb(228, 215, 38)"\n                          readonly="false"\n                          [rating]="value.rate" >\n                      </ionic3-star-rating>\n                      <ionic3-star-rating  *ngIf="user_display_name==value.user_display_name"\n                      activeIcon = "ios-star"\n                      defaultIcon = "ios-star-outline"\n                      activeColor = "rgb(228, 215, 38)" \n                      defaultColor = "rgb(228, 215, 38)"\n                      readonly="true"\n                      [rating]="value.rate" >\n                  </ionic3-star-rating>\n                        </ion-col>\n                      </ion-row>\n                  </div>\n                  \n                  </div> -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshowtop(i)"></div>\n              </div>\n              <div class="header1" (click)="followartist(value.artist_id)">\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetomsgtop(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate(i)">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n            </div>\n          </div>\n        </ion-row>\n      </div>\n    </ion-list>\n    <!-- trending items -->\n    <ion-list *ngSwitchCase="\'Trending_Items\'">\n      <ion-row style="margin-top: -6px;" padding>\n        <p class="head-p"><span class="span-head">Trending Items </span></p>\n      </ion-row>\n      <div>\n        <loaderdata *ngIf="loadingdata==\'on\'"></loaderdata>\n        <!-- <ion-row *ngFor="let value of fakedata;let i=index"  style="    margin-top: -10px;    margin-bottom: 26px;">\n               <div class="image-tag">\n                  \n                   <img style="    width: 89%;" src="assets/Dashboard/thumbnail.png">\n                  \n                 </div>\n                 <div class="img-box" >\n                 <div class="img-content">\n                  \n                    <ion-row>\n                      <ion-col class="cols-style">\n                       0{{i+1}}\n                      </ion-col>\n                    <ion-col style="text-align:end">\n                       \n                    </ion-col>\n                     </ion-row>\n     \n     \n                   <div class="detail-grid1">\n                     \n                   <div class="detail-div">\n                      <p style="font-weight: bold;" class="music-type">Dublin</p>\n                      <p class="title-type1">Photography/Architecture</p> \n                      <ion-row class="star-div"> \n                      <ion-col  col-2>\n                       <img style="height:13px;    margin: 4px 1px 2px -3px;" src="assets/Dashboard/rating.png">\n                     </ion-col>\n                     <ion-col col-10>\n                      <p class="count-like">6037</p>\n                     </ion-col>\n                     </ion-row>\n                   </div>\n                   <div class="image-box">\n                     <ion-row (click)="authtap()">\n                       <ion-col col-8 style="    text-align: end;">\n                         <p> dipu_m18</p></ion-col>\n                       <ion-col col-3 style="margin-top: -2px;">\n                           <img class="userimage1" src="assets/tabsicon/propic.jpg"> </ion-col>\n                     </ion-row> \n                     <ion-row style="    margin-top: -32px;" (click)="openstar()">\n                       <ion-col col-3>\n                             <p style="       margin-left: 9px;\n                             display: inline-block;    font-size: 1.5rem;\n                             position: absolute;\n         right: -14px;">Vote</p>\n                       </ion-col>\n                       <ion-col col-9 style="padding: 9px;margin-top: 3px;display: flex;\n                       justify-content: center;">\n                           <ionic3-star-rating \n                           activeIcon = "ios-star"\n                           defaultIcon = "ios-star-outline"\n                           activeColor = "rgb(228, 215, 38)" \n                           defaultColor = "rgb(228, 215, 38)"\n                           readonly="true"\n                           [rating]="0">\n                       </ionic3-star-rating>\n                         </ion-col>\n                       </ion-row>\n                   </div>\n                   \n                   </div>\n           \n                 </div>\n                 </div>\n                 <div class="post-img">\n              <div class="social-img">\n                \n                <div class="header1">\n                   <img class="img-post" src="assets/Dashboard/share-gray.png">\n                   <div class="share-div" (click)="tapshow1()"></div>\n                 </div>\n                 <div class="header1" (click)="followedartist()">\n                     <img class="img-post" src="assets/Dashboard/user.png">\n                   </div>\n                   <div class="header1" (click)="navigatetocomment()">\n                       <img class="img-post" src="assets/Dashboard/msg.png">\n                     </div>\n                     <div class="header1" (click)="reportnavigate()">\n                         <img class="img-post" src="assets/Dashboard/error.png">\n                       </div>\n           \n                 </div>\n               </div>\n               </ion-row> -->\n        <ion-row\n          *ngFor="let value of profilerecentcharts;let i=index"\n          style="margin-top: -10px; margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              [src]="value.media_thumbnail_url"\n            />\n          </div>\n          <div class="img-box">\n            <div class="img-content">\n              <div (click)="viewvideo(i)" class="cat-div">\n                <!-- <img class="cat-icon" [src]="value.mediathumbnailuser"> -->\n                <ion-row>\n                  <ion-col col-8>\n                    <img\n                      *ngIf="value.media_type==\'video/mp4\'||value.media_type==\'youtube\'||value.media_type==\'audio/mpeg\'  || value.media_type==\'audio/mp3\' "\n                      class="play-style"\n                      src="assets/play.png"\n                    />\n                  </ion-col>\n                  <ion-col col-4>\n                    <!-- <img class="cat-icon" [src]="value.small_image_url"> -->\n                    <img class="cat-icon" [src]="value.mediathumbnailuser" />\n                  </ion-col>\n                </ion-row>\n              </div>\n              <div class="details">\n                <ion-row>\n                  <ion-col col-5>\n                    <div class="details-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.artforms}}</p>\n\n                      <div\n                        *ngIf="user_display_name!=value.user_display_name"\n                        class="stars"\n                        (click)="openstar(value.usermediaid)"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="false"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n\n                      <div\n                        *ngIf="user_display_name==value.user_display_name"\n                        class="stars"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="true"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col col-4>\n                    <div class="details-2">\n                      <p class="author-name">{{value.user_display_name}}</p>\n                      <!-- <p class="post-time">{{value.usermedia_posted}}</p> -->\n                    </div>\n                  </ion-col>\n                  <ion-col col-3>\n                    <figure class="author-img">\n                      <img\n                        (click)="authtap(i,value.user_display_name)"\n                        style="border-radius: 35px;"\n                        class="custom-cat-icon"\n                        [src]="value.user_avatar"\n                      />\n                    </figure>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- <div class="detail-grid" >\n                   \n                 <div style="margin-top: 6px;    white-space: nowrap;" class="detail-div" >\n                    <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n                    <p class="title-type">{{value.toptypeprofile}}</p>\n                    <div class="star-div" > \n                  <ionic3-star-rating  (click)="openstar(value.usermediaid)" *ngIf="user_display_name!=value.user_display_name"\n                     activeIcon = "ios-star"\n                     defaultIcon = "ios-star-outline"\n                     activeColor = "rgb(228, 215, 38)" \n                     defaultColor = "#f4f4f4"\n                     readonly="false"\n                     [rating]="value.totalRating">\n                 </ionic3-star-rating>\n                 <ionic3-star-rating  *ngIf="user_display_name==value.user_display_name"\n                     activeIcon = "ios-star"\n                     defaultIcon = "ios-star-outline"\n                     activeColor = "rgb(228, 215, 38)" \n                     defaultColor = "#f4f4f4"\n                     readonly="true"\n                     [rating]="value.totalRating">\n                 </ionic3-star-rating>\n                </div>\n                 </div>\n                 <div style="text-align:right; " class="detail-div1" > \n               \n                   <div class="author-box">\n                   <p style="    height: 0px;font-weight: bold">{{value.user_display_name}}</p>\n                   <p>{{value.usermedia_posted}}</p>\n                   </div>\n                 </div>\n                 <div   class="detail-div userpic">\n                   <img (click)="authtap(i,value.user_display_name)" class="userimage" [src]="value.user_profile_avatar">\n                 </div>\n                 </div> -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshow1(i)"></div>\n              </div>\n              <div class="header1" (click)="followartist(value.artist_id)">\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetomsg(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate()">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n            </div>\n          </div>\n        </ion-row>\n      </div>\n      <div\n        style="\n          text-align: center;\n          position: absolute;\n          top: 25%;\n          width: 100%;\n          padding: 6%;\n          justify-content: center;\n        "\n        *ngIf="text"\n      >\n        <p\n          style="\n            font-weight: bold;\n\n            font-size: 2.6rem;\n          "\n        >\n          {{completedata}}\n        </p>\n      </div>\n      <ion-infinite-scroll\n        (ionInfinite)="loadMore($event)"\n        loadingSpinner="bubbles"\n        loadingText="Loading data..."\n      >\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/choosecatpagetab/choosecatpagetab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__providers_dashboardservice_dashboardservice__["a" /* DashboardserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ChoosecatpagetabPage);
    return ChoosecatpagetabPage;
}());

//# sourceMappingURL=choosecatpagetab.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditproartistpagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the EditproartistpagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditproartistpagPage = (function () {
    function EditproartistpagPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    EditproartistpagPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditproartistpagPage');
    };
    EditproartistpagPage.prototype.tapshow = function () {
        this.viewCtrl.dismiss();
    };
    EditproartistpagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editproartistpag',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/editproartistpag/editproartistpag.html"*/`<!--\n  Generated template for the EditproartistpagPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title style="text-align:center;margin-left: 45px;">Edit Profile</ion-title>\n      \n      <ion-buttons right style="    width: 14px;margin-right: 28px;"  >\n        <button style="    width: 52px;" ion-button (click)="tapshow()">\n          <ion-icon style="font-size: 2.5rem;" name="close"></ion-icon>\n     </button>\n     </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  <ion-row class="row-style">\n    <ion-avatar>\n        <img class="img-pro" src="assets/tabsicon/propic.jpg">\n    </ion-avatar>\n  \n  \n  </ion-row>\n  \n  <ion-row style="    margin-top: 8px;" class="but-style">\n    <button class="butt" ion-button color="primary">Update Image</button>\n  </ion-row>\n  <ion-row style="    margin-top: 8px;" class="but-style">\n      <button class="butt" ion-button color="primary">Update Banner</button>\n    </ion-row>\n    <ion-row style="    margin-top: 8px;" class="but-style">\n        <button class="butt" ion-button color="primary">Change Password</button>\n      </ion-row>\n  <ion-label>Display Name</ion-label>\n  <ion-item class="item-input">\n  \n    <ion-input placeholder="James Macaw"></ion-input>\n   </ion-item>\n   <ion-label>User Message</ion-label>\n   <ion-item class="item-input">\n   \n    <ion-input placeholder="Enter your message"></ion-input>\n   </ion-item>\n  <ion-row style=" margin-top: -14px;">\n  <ion-col col-6>\n    <ion-label>First Name</ion-label>\n    <ion-item  style="    margin-left: -3px;" class="item-input">\n    \n     <ion-input placeholder="James"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-6>\n    <ion-label>Last Name</ion-label>\n    <ion-item  style="    margin-left: 3px;"   class="item-input">\n    \n     <ion-input placeholder="Macaw"></ion-input>\n    </ion-item>\n  </ion-col>\n  </ion-row>\n  <ion-row style=" margin-top: -14px;">\n  <ion-col col-6>\n    <ion-label>Country</ion-label>\n    <ion-item  style="    margin-left: -3px;"  class="item-input">\n    \n     <ion-input placeholder="United State"></ion-input>\n     <ion-icon  name="arrow-dropdown" item-right></ion-icon>\n    </ion-item>\n  </ion-col>\n  <ion-col col-6>\n    <ion-label>City</ion-label>\n    <ion-item style="    margin-left: 3px;"  class="item-input">\n    \n     <ion-input  placeholder="NYC"></ion-input>\n     <ion-icon  name="arrow-dropdown" item-right></ion-icon>\n    </ion-item>\n  </ion-col>\n  </ion-row>\n  \n  <ion-label style="    margin-top: -5px;">Biography</ion-label>\n  <ion-item class="item-input">\n  \n    <ion-textarea placeholder="Tell the world about yourself.The shorter the better."></ion-textarea>\n   </ion-item>\n  \n   <ion-row style="    margin-top: -11px;">\n    <ion-col style="    margin-left: -3px;" >\n      <ion-label>Birth Date</ion-label>\n      <ion-item class="item-input">\n      \n       <ion-input placeholder="01/01/1998"></ion-input>\n      \n      </ion-item>\n    </ion-col>\n    <ion-col style="    margin-left: 3px;" >\n      <ion-label>Sex</ion-label>\n      <ion-item class="item-input">\n      \n       <ion-input placeholder="Male"></ion-input>\n       <ion-icon  name="arrow-dropdown" item-right></ion-icon>\n      </ion-item>\n    </ion-col>\n    </ion-row>\n    <ion-label style="    margin-top: -7px;">Phone</ion-label>\n    <ion-item class="item-input">\n    \n      <ion-input placeholder="999-999-999"></ion-input>\n     </ion-item>\n  \n  \n  \n  \n  \n  \n  </ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/editproartistpag/editproartistpag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], EditproartistpagPage);
    return EditproartistpagPage;
}());

//# sourceMappingURL=editproartistpag.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectuploadcategoryPage; });
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
 * Generated class for the SelectuploadcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectuploadcategoryPage = (function () {
    function SelectuploadcategoryPage(app, security, navCtrl, navParams) {
        this.app = app;
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakeUsers = new Array(4);
        this.addcategories = [];
        this.addsubCategories = [];
        this.addsubSubCategories = [];
    }
    SelectuploadcategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        alert('hi');
        this.loadingdata = false;
        console.log('ionViewDidLoad SelectuploadcategoryPage');
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.getcategory(); }).subscribe(function (data) {
            _this.loadingdata = true;
            console.log(data);
            _this.categories = data.categories;
            console.log(_this.categories);
            for (var i = 0; i < _this.categories.length; i++) {
                _this.categories[i].Category.checked = false;
                console.log(_this.categories[i].Childrens.length);
                for (var j = 0; j < _this.categories[i].Childrens.length; j++) {
                    _this.categories[i].Childrens[j].Subcategory.checked = false;
                    for (var k = 0; k < _this.categories[i].Childrens[j].Childrens.length; k++) {
                        _this.categories[i].Childrens[j].Childrens[k].Subsubcategory.checked = false;
                    }
                }
            }
        });
    };
    SelectuploadcategoryPage.prototype.expandItem = function (item, i) {
        console.log('categories', item.Category.checked);
        // console.log('hi',item.checked)
        this.verifycheckforcat();
        if (item.Category.checked) {
            item.Category.checked = false;
        }
        else {
            this.categories.map(function (listItem) {
                console.log(listItem, '--', item);
                if (item == listItem) {
                    console.log();
                    listItem.Category.checked = !listItem.Category.checked;
                }
                else {
                    listItem.Category.checked = false;
                }
                console.log('list', listItem);
                return listItem;
            });
        }
        console.log('cat', this.categories);
    };
    SelectuploadcategoryPage.prototype.verifycheckforcat = function () {
        for (var x = 0; x < this.categories.length; x++) {
            console.log('checked' + this.categories[x].Category.checked);
            for (var j = 0; j < this.categories[x].Childrens.length; j++) {
                this.categories[x].Childrens[j].Subcategory.checked = false;
            }
        }
    };
    SelectuploadcategoryPage.prototype.showsubcat = function (item, i) {
        alert('showsubcat');
        console.log('index' + i);
        console.log('categories', item.Subcategory.checked);
        // console.log('hi',item.checked)
        this.verifycheckforsub();
        if (item.Subcategory.checked) {
            console.log('ifcattrue');
            console.log('check' + item.Subcategory.checked);
            item.Subcategory.checked = false;
        }
        else {
            this.categories.map(function (listItem) {
                console.log(listItem.Childrens[i], '--', item);
                console.log('checkboolean' + listItem.Childrens[i].Subcategory.checked);
                console.log('hope' + item.Subcategory.checked);
                if (item == listItem.Childrens[i]) {
                    console.log('subtrue' + listItem.Childrens[i].Subcategory.checked);
                    listItem.Childrens[i].Subcategory.checked = !listItem.Childrens[i].Subcategory.checked;
                }
                else {
                    console.log('sub' + listItem.Childrens[i].Subcategory.checked);
                    listItem.Childrens[i].Subcategory.checked = false;
                }
                console.log('list', listItem);
                return listItem;
            });
        }
        console.log('cat', this.categories);
    };
    SelectuploadcategoryPage.prototype.verifycheckforsub = function () {
        for (var x = 0; x < this.categories.length; x++) {
            console.log('checked' + this.categories[x].Category.checked);
            for (var j = 0; j < this.categories[x].Childrens.length; j++) {
                this.categories[x].Childrens[j].Subcategory.checked = false;
            }
        }
    };
    SelectuploadcategoryPage.prototype.subsubcat = function (item, ids, ide) {
        alert(ide);
        console.log('---', ide, '-88--' + ids);
        console.log(item);
        this.verifycheckforsubsub();
        if (item.Subsubcategory.checked) {
            item.Subsubcategory.checked = false;
        }
        else {
            this.categories.map(function (listItem) {
                console.log('listitem', listItem);
                console.log('children', listItem.Childrens[ids].Childrens[ide]);
                console.log('matching', listItem.Childrens[ids].Childrens[ide], '--', item);
                if (item == listItem.Childrens[ids].Childrens[ide]) {
                    console.log('checked', listItem.Childrens[ids].Childrens[ide].Subsubcategory.checked);
                    listItem.Childrens[ids].Childrens[ide].Subsubcategory.checked = !listItem.Childrens[ids].Childrens[ide].Subsubcategory.checked;
                }
                else {
                    console.log('unchecked');
                    listItem.Childrens[ids].Childrens[ide].Subsubcategory.checked = false;
                }
                console.log('list', listItem);
                return listItem;
            });
        }
        console.log(this.categories);
    };
    SelectuploadcategoryPage.prototype.verifycheckforsubsub = function () {
        for (var i = 0; i < this.categories.length; i++) {
            console.log(this.categories[i].Childrens.length);
            for (var j = 0; j < this.categories[i].Childrens.length; j++) {
                for (var k = 0; k < this.categories[i].Childrens[j].Childrens.length; k++) {
                    this.categories[i].Childrens[j].Childrens[k].Subsubcategory.checked = false;
                }
            }
        }
    };
    SelectuploadcategoryPage.prototype.save = function () {
        this.addcategories = [];
        this.addsubCategories = [];
        this.addsubSubCategories = [];
        console.log('categories', this.categories);
        console.log('length' + this.categories.length);
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].Category.checked == true) {
                this.addcategories.push(this.categories[i].Category.category_id);
            }
            for (var j = 0; j < this.categories[i].Childrens.length; j++) {
                if (this.categories[i].Childrens[j].Subcategory.checked == true) {
                    this.addsubCategories.push(this.categories[i].Childrens[j].Subcategory.subcategory_id);
                }
                for (var k = 0; k < this.categories[i].Childrens[j].Childrens.length; k++) {
                    if (this.categories[i].Childrens[j].Childrens[k].Subsubcategory.checked == true) {
                        this.addsubSubCategories.push(this.categories[i].Childrens[j].Childrens[k].Subsubcategory.subsubcategory_id);
                    }
                }
            }
        }
        console.log('cat', this.addcategories[0]);
        console.log('sub', this.addsubCategories[0]);
        console.log('sub sub', this.addsubSubCategories[0]);
        localStorage['category'] = this.addcategories[0];
        localStorage['subcategory'] = this.addsubCategories[0];
        localStorage['subsubcategory'] = this.addsubSubCategories[0];
        //this.app.getActiveNav().popToRoot()
        this.navCtrl.pop();
    };
    SelectuploadcategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selectuploadcategory',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/selectuploadcategory/selectuploadcategory.html"*/`<!--\n  Generated template for the SelectuploadcategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Select Category</ion-title>\n    <ion-buttons  right style="    width: 19px;    margin-right: 12px; " >\n      \n  \n      <button ion-button icon-only (click)="save()">\n          \n            <ion-icon>\n              <img style="margin-right: 16px;" class="navbar-icon" item-left src="assets/create_conversation/tick.png">\n            </ion-icon>\n            \n          </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list *ngIf="loadingdata==false" style="padding:21px;">\n        <div *ngFor="let fake of fakeUsers" style="    margin-bottom: 12px;">\n        \n            \n           \n             \n                <div class="div-right-inner" >\n                  <p class="p-text p-points-text" style="font-size:1.2rem"></p>\n               \n                </div>\n              \n                \n                \n      </div>\n      </ion-list>\n    <ion-list style="    height: 100%;">\n        <div style="    margin-bottom: 13px;" *ngFor="let value of categories;let i=index">\n       <div  (click)="expandItem(value,i)" [style.backgroundImage]="\'url(\'+ value.Category.category_image_url +\')\'" class="row-image"  >\n      <ion-row style="height: 77px;">\n        <ion-col class="col-style" col-2>\n          <img class="img-size" [src]="value.Category.category_small_image_url">\n        </ion-col>\n        <ion-col class="col-cat" col-7>\n          <p class="p-cat">{{value.Category.category_short_name}}</p>\n        \n          <img id="tickshow4" *ngIf="value.Category.checked==true" class="tree-img" src="assets/tree-cat/chevron.png">\n        </ion-col>\n        <ion-col class="col-cat1" col-3>\n            <img  id="tickshow" *ngIf="value.Category.checked==true" style="    height: 21px;" src="assets/tree-cat/tick_green.png">\n          </ion-col>\n      </ion-row>\n      \n       </div>\n      \n       <div  style="transition: 0.4s ease-in-out;" id="showall"  >\n          <components-expandable  [expanded]="value.Category.checked">\n          \n            <!-- <div   *ngFor="let val of Childrens"> -->\n              <div  *ngFor="let val of value.Childrens;let ids=index" >\n       <div  class="div-style"  (click)="showsubcat(val,ids)">\n         \n         \n        <ion-row style="  height: 65px;">\n          <ion-col class="col-style" col-2>\n            <img class="img-size1" [src]="val.Subcategory.subcategory_small_image_url">\n          </ion-col>\n          <ion-col class="col-cat" col-7>\n            <p class="p-cat1">{{val.Subcategory.subcategory_short_name}}</p>\n         \n          </ion-col>\n          <ion-col col-3 class="tick-arrow">\n             \n              <img *ngIf="val.Subcategory.checked==true" id="tickshow2" style="    height: 21px;" src="assets/tree-cat/tick_green.png">\n              <img  *ngIf="val.Subcategory.checked==true"  id="tickshow3" style="height: 16px;\n              margin-left: 9px;" src="assets/tree-cat/arrow (4).png">\n                      </ion-col>\n        </ion-row>\n       \n      </div>\n      <div id="showsub-cat"  class="sub-cat">\n        <components-expandable  [expanded]="val.Subcategory.checked">\n       \n        <ion-row (click)="subsubcat(vals,ids,ide)" style="  height: 65px;border-bottom: 1px solid;" *ngFor="let vals of val.Childrens;let ide=index">\n          <!-- <div>Hope</div> -->\n      \n              <ion-col class="col-style" col-2>\n                <img class="img-size1" [src]="vals.Subsubcategory.subsubcategory_small_image_url">\n              </ion-col>\n              <ion-col class="col-cat" col-7>\n                <p class="p-cat2">{{vals.Subsubcategory.subsubcategory_short_name}}</p>\n                \n              </ion-col>\n              <ion-col col-3 class="tick-arrow">\n             \n                  <img *ngIf="vals.Subsubcategory.checked==true" id="tickshow2" style="    height: 21px;" src="assets/tree-cat/tick_green.png">\n               \n                          </ion-col>\n            </ion-row>\n          </components-expandable>\n      </div>\n      </div>\n      </components-expandable>\n      </div>\n        </div>\n      \n      \n      \n      </ion-list>\n      <!-- <ion-row style="justify-content:center">\n        <button ion-button (click)="save()">Save</button>\n      </ion-row> -->\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/selectuploadcategory/selectuploadcategory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SelectuploadcategoryPage);
    return SelectuploadcategoryPage;
}());

//# sourceMappingURL=selectuploadcategory.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic3_star_rating__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_category_category__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_uploadmedia_uploadmedia__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reportprob_reportprob__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_choosecatpagetab_choosecatpagetab__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_commentsbox_commentsbox__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_artistprofilepage_artistprofilepage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_popoverpageshare_popoverpageshare__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viewtalent_viewtalent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_followedartist_followedartist__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_native_page_transitions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_viewvideoplay_viewvideoplay__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_twitter_connect__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_dashboardservice_dashboardservice__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_loaderdata_loaderdata__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_viewvideotopperformers_viewvideotopperformers__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_components_expandable_components_expandable__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_social_sharing__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_transfer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_chooser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_tag_input__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular_cropperjs__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_angular_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_jw_angular_social_buttons__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_jw_angular_social_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_jw_angular_social_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_pinterest__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_progressbar_progressbar__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_selectuploadcategory_selectuploadcategory__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_document_viewer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_in_app_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_followers_pagep_followers_pagep__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_youtube_video_player__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_videogular2_core__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_videogular2_controls__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_videogular2_overlay_play__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_videogular2_buffering__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_branch_io__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_onesignal__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_unique_device_id__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_device__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_http__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_file_path__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_file_picker__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { YoutubePlayerMiniModule } from "ng2-youtube-player-mini";

//import { HomePage } from '../pages/home/home';
//import{SecuritypanelPage}from'../pages/securitypanel/securitypanel'
//import { TabspagePage } from '../pages/tabspage/tabspage';
//import { DashboardPage } from '../pages/dashboard/dashboard';

//import{ArtprofilePage}from'../pages/artprofile/artprofile'
//import{InboxpagePage}from'../pages/inboxpage/inboxpage'
//import{CreateconversationpagePage}from'../pages/createconversationpage/createconversationpage'
//import { EditprofilepagePage } from '../pages/editprofilepage/editprofilepage';



//import { GetintouchPage } from '../pages/getintouch/getintouch';
//import{AboutuspPage}from'../pages/aboutusp/aboutusp'
//import { HowitworkspPage } from '../pages/howitworksp/howitworksp';
//import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
//import{PrivacypPage}from'../pages/privacyp/privacyp'
//import { CommunitygudelinesPage } from '../pages/communitygudelines/communitygudelines';
//import { CompetitionspPage } from '../pages/competitionsp/competitionsp';
//import{CategorytabpagePage}from'../pages/categorytabpage/categorytabpage'
//import { SubcattabpPage } from '../pages/subcattabp/subcattabp';
//import { ChildcattabpagePage } from '../pages/childcattabpage/childcattabpage';



//import { EditproartistpagPage } from '../pages/editproartistpag/editproartistpag';


//import { AnumationviewComponent } from '../components/anumationview/anumationview';
//import { HowtouploadpagesidemenuPage } from '../pages/howtouploadpagesidemenu/howtouploadpagesidemenu';





//import { GooglePlus } from "@ionic-native/google-plus";









//import{ChatinboxreplyPage}from'../pages/chatinboxreply/chatinboxreply'










//import{CompetitiondetailpagePage}from'../pages/competitiondetailpage/competitiondetailpage'








//import { Deeplinks } from "@ionic-native/deeplinks";







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                //  HomePage,
                //  SecuritypanelPage,
                // TabspagePage,
                // DashboardPage,
                // ArtprofilePage,
                //  InboxpagePage,
                // CreateconversationpagePage,
                // EditprofilepagePage,
                __WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_uploadmedia_uploadmedia__["a" /* UploadmediaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_reportprob_reportprob__["a" /* ReportprobPage */],
                // GetintouchPage,
                //  AboutuspPage,
                //  HowitworkspPage,
                // TermsandconditionsPage,
                // PrivacypPage,
                // CommunitygudelinesPage,
                //CompetitionspPage,
                // CategorytabpagePage,
                // SubcattabpPage,
                // ChildcattabpagePage,
                __WEBPACK_IMPORTED_MODULE_10__pages_choosecatpagetab_choosecatpagetab__["a" /* ChoosecatpagetabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_commentsbox_commentsbox__["a" /* CommentsboxPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */],
                // EditproartistpagPage,
                __WEBPACK_IMPORTED_MODULE_13__pages_popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_viewtalent_viewtalent__["a" /* ViewtalentPage */],
                //  AnumationviewComponent,
                //  HowtouploadpagesidemenuPage,
                __WEBPACK_IMPORTED_MODULE_15__pages_followedartist_followedartist__["a" /* FollowedartistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewvideoplay_viewvideoplay__["a" /* ViewvideoplayPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_loaderdata_loaderdata__["a" /* LoaderdataComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_viewvideotopperformers_viewvideotopperformers__["a" /* ViewvideotopperformersPage */],
                __WEBPACK_IMPORTED_MODULE_27__components_components_expandable_components_expandable__["a" /* ComponentsExpandableComponent */],
                // ChatinboxreplyPage,
                __WEBPACK_IMPORTED_MODULE_37__components_progressbar_progressbar__["a" /* ProgressbarComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_selectuploadcategory_selectuploadcategory__["a" /* SelectuploadcategoryPage */],
                // CompetitiondetailpagePage,
                // CommunitypopoverPage,
                __WEBPACK_IMPORTED_MODULE_41__pages_followers_pagep_followers_pagep__["a" /* FollowersPagepPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_32_angular2_tag_input__["RlTagInputModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { statusbarPadding: true }, {
                    links: [
                        { loadChildren: '../pages/aboutusp/aboutusp.module#AboutuspPageModule', name: 'AboutuspPage', segment: 'aboutusp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categorytabpage/categorytabpage.module#CategorytabpagePageModule', name: 'CategorytabpagePage', segment: 'categorytabpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/childcattabpage/childcattabpage.module#ChildcattabpagePageModule', name: 'ChildcattabpagePage', segment: 'childcattabpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/communitygudelines/communitygudelines.module#CommunitygudelinesPageModule', name: 'CommunitygudelinesPage', segment: 'communitygudelines', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/communitypopover/communitypopover.module#CommunitypopoverPageModule', name: 'CommunitypopoverPage', segment: 'communitypopover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/competitiondetailpage/competitiondetailpage.module#CompetitiondetailpagePageModule', name: 'CompetitiondetailpagePage', segment: 'competitiondetailpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/competitionsp/competitionsp.module#CompetitionspPageModule', name: 'CompetitionspPage', segment: 'competitionsp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editproartistpag/editproartistpag.module#EditproartistpagPageModule', name: 'EditproartistpagPage', segment: 'editproartistpag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followedartist/followedartist.module#FollowedartistPageModule', name: 'FollowedartistPage', segment: 'followedartist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followers-pagep/followers-pagep.module#FollowersPagepPageModule', name: 'FollowersPagepPage', segment: 'followers-pagep', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getintouch/getintouch.module#GetintouchPageModule', name: 'GetintouchPage', segment: 'getintouch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/howitworksp/howitworksp.module#HowitworkspPageModule', name: 'HowitworkspPage', segment: 'howitworksp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/howtouploadpagesidemenu/howtouploadpagesidemenu.module#HowtouploadpagesidemenuPageModule', name: 'HowtouploadpagesidemenuPage', segment: 'howtouploadpagesidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inboxpage/inboxpage.module#InboxpagePageModule', name: 'InboxpagePage', segment: 'inboxpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacyp/privacyp.module#PrivacypPageModule', name: 'PrivacypPage', segment: 'privacyp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportprob/reportprob.module#ReportprobPageModule', name: 'ReportprobPage', segment: 'reportprob', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selectuploadcategory/selectuploadcategory.module#SelectuploadcategoryPageModule', name: 'SelectuploadcategoryPage', segment: 'selectuploadcategory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subcattabp/subcattabp.module#SubcattabpPageModule', name: 'SubcattabpPage', segment: 'subcattabp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabspage/tabspage.module#TabspagePageModule', name: 'TabspagePage', segment: 'tabspage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termsandconditions/termsandconditions.module#TermsandconditionsPageModule', name: 'TermsandconditionsPage', segment: 'termsandconditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewtalent/viewtalent.module#ViewtalentPageModule', name: 'ViewtalentPage', segment: 'viewtalent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewvideoplay/viewvideoplay.module#ViewvideoplayPageModule', name: 'ViewvideoplayPage', segment: 'viewvideoplay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewvideotopperformers/viewvideotopperformers.module#ViewvideotopperformersPageModule', name: 'ViewvideotopperformersPage', segment: 'viewvideotopperformers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatinboxreply/chatinboxreply.module#ChatinboxreplyPageModule', name: 'ChatinboxreplyPage', segment: 'chatinboxreply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choosecatpagetab/choosecatpagetab.module#ChoosecatpagetabPageModule', name: 'ChoosecatpagetabPage', segment: 'choosecatpagetab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/commentsbox/commentsbox.module#CommentsboxPageModule', name: 'CommentsboxPage', segment: 'commentsbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createconversationpage/createconversationpage.module#CreateconversationpagePageModule', name: 'CreateconversationpagePage', segment: 'createconversationpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofilepage/editprofilepage.module#EditprofilepagePageModule', name: 'EditprofilepagePage', segment: 'editprofilepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popoverpageshare/popoverpageshare.module#PopoverpagesharePageModule', name: 'PopoverpagesharePage', segment: 'popoverpageshare', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/artistprofilepage/artistprofilepage.module#ArtistprofilepagePageModule', name: 'ArtistprofilepagePage', segment: 'artistprofilepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/artprofile/artprofile.module#ArtprofilePageModule', name: 'ArtprofilePage', segment: 'artprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/securitypanel/securitypanel.module#SecuritypanelPageModule', name: 'SecuritypanelPage', segment: 'securitypanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploadmedia/uploadmedia.module#UploadmediaPageModule', name: 'UploadmediaPage', segment: 'uploadmedia', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_34_angular_cropperjs__["AngularCropperjsModule"],
                __WEBPACK_IMPORTED_MODULE_35_jw_angular_social_buttons__["JwSocialButtonsModule"],
                //YoutubePlayerMiniModule,
                __WEBPACK_IMPORTED_MODULE_43_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_44_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_45_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_46_videogular2_buffering__["VgBufferingModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                // HomePage,
                // SecuritypanelPage,
                //  TabspagePage,
                //   DashboardPage,
                //  ArtprofilePage,
                // InboxpagePage,
                //  CreateconversationpagePage,
                // EditprofilepagePage,
                __WEBPACK_IMPORTED_MODULE_7__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_uploadmedia_uploadmedia__["a" /* UploadmediaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_reportprob_reportprob__["a" /* ReportprobPage */],
                // GetintouchPage,
                // AboutuspPage,
                //  HowitworkspPage,
                // TermsandconditionsPage,
                //  PrivacypPage,
                // CommunitygudelinesPage,
                // CompetitionspPage,
                // CategorytabpagePage,
                // SubcattabpPage,
                //  ChildcattabpagePage,
                __WEBPACK_IMPORTED_MODULE_10__pages_choosecatpagetab_choosecatpagetab__["a" /* ChoosecatpagetabPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_commentsbox_commentsbox__["a" /* CommentsboxPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */],
                // EditproartistpagPage,
                __WEBPACK_IMPORTED_MODULE_13__pages_popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_viewtalent_viewtalent__["a" /* ViewtalentPage */],
                // AnumationviewComponent,
                // HowtouploadpagesidemenuPage,
                __WEBPACK_IMPORTED_MODULE_15__pages_followedartist_followedartist__["a" /* FollowedartistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewvideoplay_viewvideoplay__["a" /* ViewvideoplayPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_loaderdata_loaderdata__["a" /* LoaderdataComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_viewvideotopperformers_viewvideotopperformers__["a" /* ViewvideotopperformersPage */],
                // ChatinboxreplyPage,
                __WEBPACK_IMPORTED_MODULE_38__pages_selectuploadcategory_selectuploadcategory__["a" /* SelectuploadcategoryPage */],
                //  CompetitiondetailpagePage,
                // CommunitypopoverPage,
                __WEBPACK_IMPORTED_MODULE_41__pages_followers_pagep_followers_pagep__["a" /* FollowersPagepPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_file_picker__["a" /* IOSFilePicker */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_branch_io__["a" /* BranchIo */],
                // Deeplinks,
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
                //GooglePlus,
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_pinterest__["a" /* Pinterest */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                // {provide:HTTP_INTERCEPTORS,useClass:InterceptorProvider,multi:true},
                __WEBPACK_IMPORTED_MODULE_20__providers_security_security__["a" /* SecurityProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_dashboardservice_dashboardservice__["a" /* DashboardserviceProvider */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistprofilepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uploadmedia_uploadmedia__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editproartistpag_editproartistpag__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commentsbox_commentsbox__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popoverpageshare_popoverpageshare__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reportprob_reportprob__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__followedartist_followedartist__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_page_transitions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_dashboardservice_dashboardservice__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_viewtalent_viewtalent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__viewvideoplay_viewvideoplay__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__followers_pagep_followers_pagep__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { InboxpagePage } from '../inboxpage/inboxpage';















/**
 * Generated class for the ArtistprofilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArtistprofilepagePage = (function () {
    function ArtistprofilepagePage(profilemedia, security, filetransfer, camera, filechoose, actionsheetCtrl, events, nativePageTransitions, popoverCtrl, modalCtrl, navCtrl, navParams) {
        var _this = this;
        this.profilemedia = profilemedia;
        this.security = security;
        this.filetransfer = filetransfer;
        this.camera = camera;
        this.filechoose = filechoose;
        this.actionsheetCtrl = actionsheetCtrl;
        this.events = events;
        this.nativePageTransitions = nativePageTransitions;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakedata = [1, 2, 3, 4];
        this.count = 1;
        this.page = 0;
        this.showcat = true;
        this.showshare = false;
        this.playlist = 'latest';
        events.subscribe('star-rating:changed', function (starRating) {
            console.log('starrating' + starRating);
            _this.rate = starRating;
        });
        // events.subscribe('user:following',(followingdata)=>{
        //   this.followingdata=followingdata
        //   console.log(this.followingdata)  
        //   this.following=this.followingdata.length
        //   // alert(this.banner)
        //   })
        //   events.subscribe('user:followersdata',(followersdata)=>{
        //   this.followersdata=followersdata
        //   this.followers=this.followersdata.length
        //   console.log(this.followersdata)
        //   // alert(this.banner)
        //   })
    }
    ArtistprofilepagePage.prototype.songtype = function (id) {
        this.page = 0;
        if (id == 1) {
            this.categorytag = 'Music';
            this.catid = 1;
            this.type = 'in Music';
        }
        else if (id == 2) {
            this.categorytag = 'Dance';
            this.catid = 2;
            this.type = 'in Dance';
        }
        else if (id == 3) {
            this.categorytag = 'Film';
            this.catid = 3;
            this.type = 'in Film';
        }
        else if (id == 4) {
            this.categorytag = 'Photography';
            this.catid = 4;
            this.type = 'in Photography';
        }
        else if (id == 7) {
            this.categorytag = 'Literature';
            this.catid = 7;
            this.type = 'in Literature';
        }
        else if (id == 8) {
            this.categorytag = 'Art';
            this.catid = 8;
            this.type = 'in Art';
        }
        else if (id == 5) {
            this.categorytag = 'Freestyle';
            this.catid = 5;
            this.type = 'in Freestyle';
        }
        else if (id == 9) {
            this.categorytag = 'Personality';
            this.catid = 9;
            this.type = 'in Personality';
        }
        else if (id == 6) {
            this.categorytag = 'Others';
            this.catid = 6;
            this.type = 'in Others';
        }
        this.profilemedia.sortcatprofile = 1;
        this.recentcharts();
    };
    ArtistprofilepagePage.prototype.ionViewDidLoad = function () {
        this.loadingrecentdata = false;
        this.rcentdata = this.navParams.get('rcentdata');
        console.log('recentdata chetan== ', this.rcentdata);
        this.id = this.navParams.get('id');
        this.topid = this.navParams.get('topid');
        if (this.topid == 1) {
            console.log(this.rcentdata, '-topid--', this.rcentdata[this.id].artist_id);
            this.displayname = this.rcentdata[this.id].user_display_name;
            this.profilepic = this.rcentdata[this.id].user_avatar;
            // this.user_banner=this.rcentdata[this.id].user_banner
            this.artistid = this.rcentdata[this.id].artist_id;
        }
        else if (this.topid == 2) {
            console.log(this.rcentdata, '-topid--', this.rcentdata[this.id].artist_id);
            this.displayname = this.rcentdata[this.id].Users.user_display_name;
            this.profilepic = this.rcentdata[this.id].Users.user_avatar;
            // this.user_banner=this.rcentdata[this.id].user_banner
            this.artistid = this.rcentdata[this.id].Users.user_id;
        }
        else if (this.topid == 4) {
            this.displayname = this.rcentdata[this.id].user_display_name;
            this.profilepic = this.rcentdata[this.id].user_avatar;
            // this.user_banner=this.rcentdata.media[this.id].Users.user_banner
            this.artistid = this.rcentdata[this.id].artist_id;
            console.log(this.artistid);
        }
        else if (localStorage.getItem('usermedia')) {
            // alert(localStorage.getItem('usermedia'))
            // alert(localStorage.getItem('profile'))
            // alert(localStorage.getItem('title'))
            // this.displayname=localStorage.getItem('title')
            // this.profilepic=localStorage.getItem('profile')
            // this.user_banner=this.rcentdata.media[this.id].Users.user_banner
            this.artistid = localStorage.getItem('usermedia');
            // localStorage.removeItem('usermedia')
        }
        else {
            // yatash's code
            console.log(this.rcentdata, '---', this.id);
            this.displayname = this.rcentdata.media[this.id].Users.user_display_name;
            this.profilepic = this.rcentdata.media[this.id].Users.user_profile_avatar;
            // this.user_banner=this.rcentdata.media[this.id].Users.user_banner
            this.artistid = this.rcentdata.media[this.id].Users.user_id;
            // end of yatash's code 
            //chetan's code
            //end of chetan's code
            console.log('displayname' + this.displayname);
            console.log('ionViewDidLoad ArtprofilePage');
        }
        this.artitsload();
        this.recentcharts();
        this.getfollow();
        this.getfollowing();
        // console.log('followingdata',localStorage.getItem('followingdata'))
        // this.followingdata=localStorage.getItem('followingdata')
        // console.log('followersdata',localStorage.getItem('followersdata'))
        // this.followersdata=localStorage.getItem('followersdata')
    };
    ArtistprofilepagePage.prototype.artitsload = function () {
        var _this = this;
        this.loaderitem = true;
        __WEBPACK_IMPORTED_MODULE_13_rxjs__["Observable"].of(this.loaderitem)
            .flatMap(function () { return _this.security.artistcharts(_this.artistid); }).subscribe(function (data) {
            _this.loaderitem = false;
            //  this.following=data.user.user_following.length
            //  this.followers=data.user.user_followers.length
            _this.latestchart = _this.profilemedia.latestcharts(data.playerList);
            //  this.user_banner=data.media[0].Users.user_banner
            //      console.log('user_banner'+data.media[0].Users.user_banner)
            console.log('latest', _this.latestchart);
            console.log(_this.following);
            console.log(_this.followers);
        });
    };
    ArtistprofilepagePage.prototype.recentcharts = function (infiniteScroll) {
        var _this = this;
        this.loadingrecentdata = true;
        __WEBPACK_IMPORTED_MODULE_13_rxjs__["Observable"].of(this.loadingrecentdata)
            .flatMap(function () { return _this.security.artistprofilerecentchats(_this.page, _this.catid, _this.artistid); }).subscribe(function (data) {
            _this.user_banner = data.media[0].Users.user_banner;
            console.log('user_banner' + data.media[0].Users.user_banner);
            console.log('user_display_name' + data.media[0].Users.user_display_name);
            console.log('profilepic' + data.media[0].Users.user_profile_avatar);
            _this.displayname = data.media[0].Users.user_display_name;
            _this.profilepic = data.media[0].Users.user_profile_avatar;
            _this.loadingrecentdata = false;
            _this.profileuser = data.user;
            _this.profilerecentcharts = _this.profilemedia.profilerecentcharts(data.media, _this.page);
            _this.profilemedia.sortcatprofile = 0;
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        });
    };
    ArtistprofilepagePage.prototype.loadMore = function (infiniteScroll) {
        this.page++;
        console.log('ss');
        this.recentcharts(infiniteScroll);
        console.log(this.page);
    };
    ArtistprofilepagePage.prototype.showcatevent = function (id) {
        if (id == 1) {
            this.showcat = false;
            document.getElementById('categorylist').style.height = '300px';
        }
        else {
            this.showcat = true;
            document.getElementById('categorylist').style.height = '120px';
        }
    };
    ArtistprofilepagePage.prototype.tapshow = function () {
        if (this.count % 2 != 0) {
            this.showshare = true;
        }
        else {
            this.showshare = false;
        }
        this.count++;
    };
    ArtistprofilepagePage.prototype.inboxtap = function () {
        this.navCtrl.push('InboxpagePage');
    };
    ArtistprofilepagePage.prototype.editprop = function () {
        var contactmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__editproartistpag_editproartistpag__["a" /* EditproartistpagPage */]);
        contactmodal.present();
    };
    ArtistprofilepagePage.prototype.changeprefrence = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    ArtistprofilepagePage.prototype.uploadnavigate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__uploadmedia_uploadmedia__["a" /* UploadmediaPage */], { id: 1 });
    };
    ArtistprofilepagePage.prototype.getfollowing = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.getfollowing(_this.artistid); }).subscribe(function (data) {
            console.log('followingusers', data.list);
            _this.followingdata = data.list;
            _this.following = data.list.length;
        });
    };
    ArtistprofilepagePage.prototype.getfollow = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.getfollow(_this.artistid); }).subscribe(function (data) {
            console.log('datausers', data.list);
            console.log('hii');
            _this.followersdata = data.list;
            _this.followers = data.list.length;
            console.log('followersdata', _this.followersdata);
        });
    };
    ArtistprofilepagePage.prototype.movetofollowers = function (id) {
        var popover = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__followers_pagep_followers_pagep__["a" /* FollowersPagepPage */], { rcentdata: this.latestchart, topid: 1, followersdata: this.followersdata, id: id, followingdata: this.followingdata });
        popover.present({});
    };
    ArtistprofilepagePage.prototype.navigatetocomment = function (i) {
        // let modal=this.modalCtrl.create(CommentsboxPage)
        // modal.present()
        var options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 2
        };
        this.nativePageTransitions.slide(options);
        console.log('i', i);
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        // commentsbox.present()
        // this.navCtrl.push(CommentsboxPage)
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        console.log(this.latestchart[i].usermediaid);
        console.log(this.latestchart[i].category_image_url);
        console.log(this.latestchart[i].usermedia_name);
        console.log(this.latestchart[i].artforms);
        console.log(this.latestchart[i].user_display_name);
        console.log(this.latestchart[i].user_avatar);
        console.log(this.latestchart[i].small_image_url);
        console.log('totalrating', this.latestchart[i].totalRating);
        //  console.log(this.latestchart[id].user_url)
        //  console.log(this.latestchart[id].artist_id)
        //  console.log(this.latestchart[id].rating)
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__commentsbox_commentsbox__["a" /* CommentsboxPage */], {
            usermediaid: this.latestchart[i].usermediaid,
            mediapic: this.latestchart[i].category_image_url,
            medianame: this.latestchart[i].usermedia_name,
            artforms: this.latestchart[i].artforms,
            id: i,
            user_display_name: this.latestchart[i].user_display_name,
            user_avatar: this.latestchart[i].user_avatar,
            small_image_url: this.latestchart[i].mediathumbnailuser,
            totalrating: this.latestchart[i].totalRating,
            userurl: this.latestchart[i].user_url,
            artist_id: this.latestchart[i].artist_id,
            rate: this.latestchart[i].rating
        });
        commentsbox.present();
    };
    ArtistprofilepagePage.prototype.navigatetocomment1 = function (i) {
        var options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 2
        };
        this.nativePageTransitions.slide(options);
        console.log('i', i);
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        // commentsbox.present()
        // this.navCtrl.push(CommentsboxPage)
        // let commentsbox=this.modalCtrl.create(CommentsboxPage)
        console.log('usermediaid', this.profilerecentcharts[i].usermediaid);
        console.log('category_image_url', this.profilerecentcharts[i].category_image_url);
        console.log('usermedia_name', this.profilerecentcharts[i].usermedia_name);
        console.log('artforms', this.profilerecentcharts[i].artforms);
        console.log(this.profilerecentcharts[i].user_display_name);
        console.log(this.profilerecentcharts[i].user_avatar);
        console.log(this.profilerecentcharts[i].small_image_url);
        console.log('totalrating' + this.profilerecentcharts[i].totalRating);
        console.log(this.profilerecentcharts[i].userurl);
        console.log(this.profilerecentcharts[i].artist_id);
        console.log(this.profilerecentcharts[i].rating);
        var commentsbox = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__commentsbox_commentsbox__["a" /* CommentsboxPage */], {
            usermediaid: this.profilerecentcharts[i].usermediaid,
            mediapic: this.profilerecentcharts[i].category_image_url,
            medianame: this.profilerecentcharts[i].usermedia_name,
            artforms: this.profilerecentcharts[i].artforms,
            id: i,
            user_display_name: this.profilerecentcharts[i].user_display_name,
            user_avatar: this.profilerecentcharts[i].user_avatar,
            small_image_url: this.profilerecentcharts[i].mediathumbnailuser,
            totalrating: this.profilerecentcharts[i].totalRating,
            userurl: this.profilerecentcharts[i].userurl,
            artist_id: this.profilerecentcharts[i].artist_id,
            rate: this.profilerecentcharts[i].rating
        });
        commentsbox.present();
    };
    ArtistprofilepagePage.prototype.viewvideo = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_17__viewvideoplay_viewvideoplay__["a" /* ViewvideoplayPage */], {
            data: this.latestchart, id: id
        });
        modal.present();
    };
    ArtistprofilepagePage.prototype.viewvideo1 = function (id) {
        console.log('profilerecentcharts', this.profilerecentcharts);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_17__viewvideoplay_viewvideoplay__["a" /* ViewvideoplayPage */], {
            data: this.profilerecentcharts, id: id
        });
        modal.present();
    };
    ArtistprofilepagePage.prototype.tapshow1 = function (i) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], { image: this.latestchart[i].category_image_url,
            artistname: this.latestchart[i].usermedia_name,
            user_url: this.latestchart[i].userurl,
            usermediaid: this.latestchart[i].usermediaid
        });
        popover.present({
            ev: event
        });
    };
    ArtistprofilepagePage.prototype.tapshow2 = function (i) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], { image: this.profilerecentcharts[i].category_image_url,
            artistname: this.profilerecentcharts[i].usermedia_name,
            user_url: this.profilerecentcharts[i].userurl,
            usermediaid: this.profilerecentcharts[i].usermediaid
        });
        popover.present({
            ev: event
        });
    };
    ArtistprofilepagePage.prototype.reportnavigate = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__reportprob_reportprob__["a" /* ReportprobPage */]);
        modal.present();
    };
    ArtistprofilepagePage.prototype.followedartist = function (artist_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_13_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.artistfollowed(artist_id); }).subscribe(function (data) {
            console.log(data.status);
            var modalfollow = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__followedartist_followedartist__["a" /* FollowedartistPage */], { msg: data.status });
            modalfollow.present();
        });
    };
    ArtistprofilepagePage.prototype.capturecamera = function () {
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
    ArtistprofilepagePage.prototype.camera1 = function () {
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
            //  alert('imagedata'+imageData)
            _this.imgsrc = imageData;
            // this.imgsrc = "data:image/jpeg;base64," + imageData;
            _this.imageupload();
        }, function (err) {
        });
    };
    ArtistprofilepagePage.prototype.gallery = function () {
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
            _this.imgsrc = imageData;
            //  this.imgsrc = "data:image/jpeg;base64," + imageData;
            _this.imageupload();
        }, function (err) {
        });
    };
    ArtistprofilepagePage.prototype.imageupload = function () {
        var sessionId = localStorage['sessionId'];
        //    alert(sessionId)
        //   alert('imgsrc'+this.imgsrc)
        var headers = new Headers({
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
        // alert(headers)
        // alert(JSON.stringify(headers))
        var filetransfers = this.filetransfer.create();
        var options = {
            fileKey: 'userAvatar',
            fileName: 'filename.jpg',
            chunkedMode: false,
            headers: headers,
            httpMethod: 'POST',
            mimeType: "image/jpeg",
            // params: {"messageId": this.messagedata[this.messagedata.length-1].message_id},
            params: { "cropData": { "x": 2937.6, "y": 1171.621978021978, "height": 1416.5802197802197, "width": 1416.5802197802197, "rotate": 0 } }
        };
        // filetransfers.upload(this.imgsrc,'https://www.demo.artformplatform.com/api/messages/upload.json', options)
        filetransfers.upload(this.imgsrc, 'https://www.artformplatform.com/api/user/uploadAvatar.json', options)
            .then(function (data) {
            alert('upload');
            // alert('data11'+JSON.stringify(data))
        }, function (err) {
            alert('bii' + err);
            alert('error4' + JSON.stringify(err));
        });
    };
    ArtistprofilepagePage.prototype.openstar = function (usermediaid) {
        var _this = this;
        console.log('usermedia' + usermediaid);
        console.log('rate' + this.rate);
        if (usermediaid) {
            __WEBPACK_IMPORTED_MODULE_13_rxjs__["Observable"].of(null)
                .flatMap(function () { return _this.security.starmedia(_this.rate, usermediaid); }).subscribe(function (data) {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_16__pages_viewtalent_viewtalent__["a" /* ViewtalentPage */], { rate: _this.rate });
                modal.present();
            });
        }
    };
    ArtistprofilepagePage.prototype.tapshow3 = function () {
        console.log('profileuser', this.profileuser);
        console.log('user_id', this.profileuser.user_id);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], { image: this.profileuser.user_avatar,
            artistname: this.profileuser.user_display_name,
            user_url: this.profileuser.user_url,
            usermediaid: this.rcentdata[this.id].artist_id,
            type: 'artist',
        });
        popover.present({
            ev: event
        });
    };
    ArtistprofilepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-artistprofilepage',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/artistprofilepage/artistprofilepage.html"*/`<!--\n  Generated template for the ArtistprofilepagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the ArtprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- <ion-buttons left style="    width: 19px;">\n            <button ion-button menuToggle>\n            <ion-icon item-start>\n              <img class="navbar-icon" item-left src="assets/Menu/navbar.png">\n            </ion-icon>\n             </button>\n        </ion-buttons> -->\n    <ion-title>Artist Profile</ion-title>\n\n    <ion-buttons\n      right\n      style="width: 14px; margin-right: 16px; margin-top: -8px;"\n    >\n      <button style="width: 26px;" ion-button (click)="tapshow3()">\n        <ion-icon item-start>\n          <img class="navbar-icon" item-left src="assets/profile/share.png" />\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div *ngIf="showshare==true" id="shareid" class="share-service">\n    <div class="arrow-icon">\n      <img class="icon-img" src="assets/profile/arrow.png" />\n    </div>\n    <ion-row style="padding: 7px; margin-top: -7px;">\n      <ion-col>\n        <img src="assets/profile/facebook.png" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/twitter.png " />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/google_plus.png" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/pinterest.png" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/whatsaap.png" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/profile/mailwhite.png" />\n      </ion-col>\n    </ion-row>\n  </div>\n  <div\n    class="row-image"\n    [ngStyle]="{\'background-image\':\'url(\'+user_banner+\')\'}"\n  >\n    <ion-row>\n      <ion-col style="padding: 15px;">\n        <div class="circle-radius">\n          <img\n            style="border-radius: 50%; height: 100%; width: 100px;"\n            [src]="profilepic"\n          />\n        </div>\n        <p\n          style="\n            margin-top: 5px;\n            font-weight: 500;\n            color: #fff;\n            font-size: 1.6rem;\n            font-family: AvenirLTStd-Heavy;\n          "\n        >\n          {{displayname}}\n        </p>\n        <!-- <p style="    margin-top: -11px;font-weight: 100;    color: #fff;">NYC</p>\n      <p style="    width: 193%;color: #fff;">Music | Dance | Film | Photography | Litreature</p> -->\n      </ion-col>\n      <ion-col>\n        <ion-row style="text-align: center; margin-top: 6px;">\n          <ion-col>\n            <!-- <div class="pro-div">  -->\n            <!-- <img style="    height: 17px;    margin-top: 11px;" src="assets/profile/mail.png"> -->\n\n            <!-- </div> -->\n            <!-- <p class="p-tag" >Inbox</p> -->\n          </ion-col>\n          <ion-col>\n            <!-- <div class="pro-div" style="background-color:#F29A10"> -->\n            <!-- <img style="    height: 17px;    margin-top: 11px;" src="assets/profile/downloads.png"> -->\n\n            <!-- </div> -->\n            <!-- <p class="p-tag">Upload</p> -->\n          </ion-col>\n          <ion-col (click)="editprop()">\n            <!-- <div class="pro-div">\n      <img style="    height: 17px;    margin-top: 11px;" src="assets/profile/edit.png">\n      \n      </div>\n      <p class="p-tag">Edit</p> -->\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-col col-5>\n            <p\n              (click)="movetofollowers(1)"\n              style="\n                font-size: 1.2rem;\n                display: inline-flex;\n                color: #fff !important;\n              "\n            >\n              {{followers}} <span class="text-style"> Followers</span>\n            </p>\n          </ion-col>\n          <ion-col col-2>\n            <hr class="hr-line" />\n          </ion-col>\n          <ion-col col-5>\n            <p\n              (click)="movetofollowers(2)"\n              style="\n                font-size: 1.2rem;\n                display: inline-flex;\n                color: #fff !important;\n              "\n            >\n              {{following}} <span class="text-style"> Following</span>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-row style="    padding: 7px;">\n          <ion-col>\n            <img src="assets/profile/facebook (2).png">\n          </ion-col>\n          <ion-col>\n              <img src="assets/profile/002-twitter.png">\n          </ion-col>\n          <ion-col>\n              <img src="assets/profile/linkedIn.png">\n          </ion-col>\n          <ion-col>\n              <img src="assets/profile/pinterest (2).png">\n          </ion-col>\n          <ion-col>\n              <img src="assets/profile/instagram.png">\n          </ion-col>\n        </ion-row>\n      </ion-col> -->\n    </ion-row>\n  </div>\n  <div>\n    <ion-segment\n      mode="md"\n      [(ngModel)]="playlist"\n      style="font-family: AvenirLTStd-Heavy;"\n    >\n      <ion-segment-button class="seg-stylepro" value="latest">\n        Artists Chart\n      </ion-segment-button>\n      <ion-segment-button class="seg-stylepro" value="recent">\n        Recent Uploads\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="playlist">\n    <!-- <div  id="categorylist" class="category-list" *ngSwitchCase="\'latest\'">\n      \n        <ion-row style="    padding: 6px;">\n       <ion-col style="font-weight: 500;    font-family: AvenirLTStd-Heavy;">Categories</ion-col>\n       <ion-col *ngIf="showcat==true" (click)="showcatevent(1)" class="prop-see" >See All</ion-col>\n       <ion-col *ngIf="showcat==false" (click)="showcatevent(2)" class="prop-see" >Close</ion-col>\n     </ion-row>\n     <ion-row *ngIf="showcat==true"  style="margin-top: -8px;">\n       <ion-col class="col-cat">\n         <img class="img-cat" src="assets/category/categories1.png">\n         <p class="cat-types">Music</p>\n     </ion-col>\n     <ion-col  class="col-cat">\n         <img class="img-cat" src="assets/category/categories2.png">\n   <p class="cat-types">Dance</p>\n       </ion-col>\n     <ion-col  class="col-cat">\n         <img class="img-cat" src="assets/category/categories3.png">\n    <p class="cat-types">Film</p>\n       </ion-col>\n     <ion-col  class="col-cat">\n         <img class="img-cat" src="assets/category/categories4.png">\n         <p class="cat-types">Photography</p>\n     </ion-col>\n     <ion-col  class="col-cat">\n         <img class="img-cat" src="assets/category/categories5.png">\n         <p class="cat-types">Litreature</p>\n     </ion-col>\n     </ion-row>\n    <div *ngIf="showcat==false" >\n      <ion-row>\n        <ion-col class="col-cat">\n            <img class="img-cat" src="assets/category/categories1.png">\n            <p class="cat-types">Music</p>\n        </ion-col>\n        <ion-col  class="col-cat">\n            <img class="img-cat" src="assets/category/categories2.png">\n      <p class="cat-types">Dance</p>\n          </ion-col>\n        <ion-col  class="col-cat">\n            <img class="img-cat" src="assets/category/categories3.png">\n       <p class="cat-types">Film</p>\n          </ion-col>\n        <ion-col  class="col-cat">\n            <img class="img-cat" src="assets/category/categories4.png">\n            <p class="cat-types">Photography</p>\n        </ion-col>\n       \n        </ion-row>\n        <ion-row>\n           \n            <ion-col  class="col-cat">\n                <img class="img-cat" src="assets/category/categories5.png">\n          <p class="cat-types">Litreature</p>\n              </ion-col>\n            <ion-col  class="col-cat">\n                <img class="img-cat" src="assets/category/categories6.png">\n           <p class="cat-types">Art</p>\n              </ion-col>\n            <ion-col  class="col-cat">\n                <img class="img-cat" src="assets/category/categories7.png">\n                <p class="cat-types">Freestyle</p>\n            </ion-col>\n            <ion-col  class="col-cat">\n                <img class="img-cat" src="assets/category/categories8.png">\n                <p class="cat-types">Personality</p>\n            </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col  class="col-cat">\n                    <img class="img-cat" src="assets/category/categories9.png">\n                    <p class="cat-types">Other</p>\n                </ion-col>\n            </ion-row>\n      </div>\n      \n    \n    </div> -->\n    <div style="margin-top: 29px;" *ngSwitchCase="\'latest\'">\n      <!-- <ion-list class="recent-upload"  >\n         <ion-row style="    padding: 17px;">\n           <ion-col>\n            <p style="font-weight: bold;"> Based on your prefrences</p>\n  \n            </ion-col>\n           <ion-col style="text-align: end;"><button (click)="changeprefrence()" class="button-prefrence" ion-button color="primary">Change Prefrences</button></ion-col>\n         </ion-row>\n   <ion-row style="margin-top: -33px;" padding>\n   <p class="head-p"><span class="span-head">Recent Uploads </span> in Music</p>    \n  </ion-row>    -->\n\n      <!-- <ion-row *ngFor="let value of fakedata"  style="    margin-top: -10px;    margin-bottom: 26px;">\n    <div class="image-tag">\n       \n        <img style="    width: 89%;" src="assets/Dashboard/thumbnail.png">\n       \n      </div>\n      <div class="img-box" >\n      <div class="img-content">\n        <div class="cat-div"> \n          <img class="cat-icon" src="assets/Dashboard/artist_profile1.png">\n        </div>\n       \n        <div class="detail-grid">\n          \n        <div style="margin-top: 6px;" class="detail-div">\n           <p style="font-weight: bold;" class="music-type">King Cay Music</p>\n           <p class="title-type">Music / Hip Hop/ Rap</p>\n           <div class="star-div"> <ionic3-star-rating \n            activeIcon = "ios-star"\n            defaultIcon = "ios-star-outline"\n            activeColor = "rgb(228, 215, 38)" \n            defaultColor = "#f4f4f4"\n            readonly="true"\n            [rating]="5">\n        </ionic3-star-rating></div>\n        </div>\n        \n        <div style="text-align:right; " class="detail-div1">\n          <div class="author-box">\n          <p style="    height: 0px;font-weight: bold">King Cay</p>\n          <p>10 mins ago</p>\n          </div>\n        </div>\n        <div   class="detail-div userpic">\n          <img class="userimage" src="assets/tabsicon/propic.jpg">\n        </div>\n        </div>\n  \n      </div>\n      </div>\n      <div class="post-img">\n\n      <div class="social-img">\n       \n        <div class="header1" >\n           <img class="img-post" src="assets/Dashboard/share-gray.png">\n           <div class="share-div" (click)="tapshow1()"></div>\n         </div>\n         <div class="header1" (click)="followedartist()">\n             <img class="img-post" src="assets/Dashboard/user.png">\n           </div>\n           <div class="header1" (click)="navigatetocomment()">\n               <img class="img-post" src="assets/Dashboard/msg.png">\n             </div>\n             <div class="header1" (click)="reportnavigate()">\n                 <img class="img-post" src="assets/Dashboard/error.png">\n               </div>\n   \n         </div>\n    </div>\n    </ion-row> -->\n\n      <div>\n        <!-- <ion-row *ngFor="let value of fakedata;let i=index"  style="    margin-top: -10px;    margin-bottom: 26px;">\n         <div class="image-tag">\n            \n             <img style="    width: 89%;" src="assets/Dashboard/thumbnail.png">\n            \n           </div>\n           <div class="img-box" >\n           <div class="img-content">\n            \n              <ion-row>\n                <ion-col class="cols-style">\n                 0{{i+1}}\n                </ion-col>\n              <ion-col style="text-align:end">\n                 <img class="\n               cat-icon1" src="assets/Dashboard/artist_profile1.png">\n              </ion-col>\n               </ion-row>\n\n\n             <div class="detail-grid1">\n               \n             <div class="detail-div">\n                <p style="font-weight: bold;" class="music-type">Dublin</p>\n                <p class="title-type1">Photography/Architecture</p>\n                <ion-row class="star-div"> \n                <ion-col  col-2>\n                 <img style="height:13px;    margin: 4px 1px 2px -3px;" src="assets/Dashboard/rating.png">\n               </ion-col>\n               <ion-col col-10>\n                <p class="count-like">6037</p>\n               </ion-col>\n               </ion-row>\n             </div>\n             <div class="image-box" >\n               <ion-row (click)="authtap()">\n                 <ion-col col-8 style="    text-align: end;">\n                   <p> dipu_m18</p>\n                  </ion-col>\n                 <ion-col col-3 style="margin-top: -2px;">\n                     <img class="userimage1" src="assets/tabsicon/propic.jpg"> </ion-col>\n               </ion-row> \n               <ion-row style="    margin-top: 16px;" (click)="openstar()">\n                 <ion-col col-3>\n                       <p style="       margin-left: 9px;\n                       display: inline-block;    font-size: 1.5rem;\n                       position: absolute;\n   right: -14px;">Vote</p>\n                 </ion-col>\n                 <ion-col col-9 style="padding: 9px;margin-top: 3px;display: flex;\n                 justify-content: center;">\n                     <ionic3-star-rating \n                     activeIcon = "ios-star"\n                     defaultIcon = "ios-star-outline"\n                     activeColor = "rgb(228, 215, 38)" \n                     defaultColor = "rgb(228, 215, 38)"\n                     readonly="true"\n                     [rating]="0">\n                 </ionic3-star-rating>\n                   </ion-col>\n                 </ion-row>\n             </div>\n             \n             </div>\n     \n           </div>\n           </div>\n           <div class="post-img">\n        <div class="social-img">\n          \n          <div class="header1" >\n             <img class="img-post" src="assets/Dashboard/share-gray.png">\n             <div class="share-div" (click)="tapshow1()"></div>\n           </div>\n           <div class="header1" (click)="followedartist()">\n               <img class="img-post" src="assets/Dashboard/user.png">\n             </div>\n             <div class="header1" (click)="navigatetocomment()">\n                 <img class="img-post" src="assets/Dashboard/msg.png">\n               </div>\n               <div class="header1" (click)="reportnavigate()">\n                   <img class="img-post" src="assets/Dashboard/error.png">\n                 </div>\n     \n           </div>\n         </div>\n         </ion-row> -->\n        <loaderdata *ngIf="loaderitem==true"></loaderdata>\n        <ion-row\n          *ngFor="let value of latestchart;let i=index"\n          style="margin-top: -10px; margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              [src]="value.media_thumbnail_url"\n            />\n          </div>\n          <div class="img-box">\n            <div class="img-content">\n              <div (click)="viewvideo(i)" class="cat-div">\n                <!-- <img class="cat-icon" [src]="value.mediathumbnailuser"> -->\n                <ion-row>\n                  <ion-col style="position: absolute;" class="cols-style">\n                    <p\n                      style="\n                        color: #fff;\n                        text-align: start;\n\n                        font-size: 2.9rem;\n\n                        position: absolute;\n\n                        top: -46px;\n                      "\n                    >\n                      0{{i+1}}\n                    </p>\n                  </ion-col>\n                  <ion-col col-8>\n                    <img\n                      *ngIf="value.media_type==\'video/mp4\'||value.media_type==\'youtube\' || value.usermedia_type==\'audio/mpeg\' || value.usermedia_type==\'audio/mp3\'"\n                      class="play-style"\n                      src="assets/play.png"\n                    />\n                  </ion-col>\n                  <ion-col col-4>\n                    <!-- <img class="cat-icon" [src]="value.small_image_url"> -->\n                    <img class="cat-icon" [src]="value.mediathumbnailuser" />\n                  </ion-col>\n                </ion-row>\n              </div>\n\n              <div class="details">\n                <ion-row>\n                  <ion-col col-5>\n                    <div class="details-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.artforms}}</p>\n                      <!-- <div *ngIf="user_display_name!=value.user_display_name" class="stars" (click)="openstar(value.rating,value.usermediaid,value.user_display_name)"> <ionic3-star-rating  -->\n                      <div\n                        *ngIf="user_display_name!=value.user_display_name"\n                        class="stars"\n                        (click)="openstar(value.usermediaid)"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="false"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n\n                      <div\n                        *ngIf="user_display_name==value.user_display_name"\n                        class="stars"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="true"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col col-4>\n                    <div class="details-2">\n                      <p class="author-name">{{value.user_display_name}}</p>\n                      <!-- <p class="post-time">{{value.usermedia_posted}}</p> -->\n                    </div>\n                  </ion-col>\n                  <ion-col col-3>\n                    <figure class="author-img">\n                      <img\n                        (click)="artistpro(i)"\n                        style="border-radius: 35px;"\n                        class="custom-cat-icon"\n                        [src]="value.user_avatar"\n                      />\n                    </figure>\n                  </ion-col>\n                </ion-row>\n              </div>\n\n              <!-- <div class="detail-grid" >\n                  \n                <div style="margin-top: 6px;    white-space: nowrap;" class="detail-div" >\n                   <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n                   <p class="title-type">{{value.toptypeprofile}}</p>\n                   <div class="star-div" >\n                <ionic3-star-rating (click)="openstar(value.usermediaid)" *ngIf="user_display_name!=value.user_display_name"\n                    activeIcon = "ios-star"\n                    defaultIcon = "ios-star-outline"\n                    activeColor = "rgb(228, 215, 38)" \n                    defaultColor = "#f4f4f4"\n                    readonly="false"\n                    [rating]="value.totalRating">\n                </ionic3-star-rating>\n                <ionic3-star-rating *ngIf="user_display_name==value.user_display_name"\n                activeIcon = "ios-star"\n                defaultIcon = "ios-star-outline"\n                activeColor = "rgb(228, 215, 38)" \n                defaultColor = "#f4f4f4"\n                readonly="true"\n                [rating]="value.totalRating">\n            </ionic3-star-rating>\n              </div>\n                </div>\n                \n                <div style="text-align:right; " class="detail-div1" (click)="artistpro()">\n                  <div class="author-box">\n                  <p style="    height: 0px;font-weight: bold">{{displayname}}</p>\n                  <p>{{value.usermedia_posted}}</p>\n                  </div>\n                </div>\n                <div   class="detail-div userpic">\n                  <img class="userimage" [src]="value.user_profile_avatar">\n                </div>\n                </div>\n           -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshow1(i)"></div>\n              </div>\n              <div class="header1" (click)="followedartist(value.artist_id)">\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetocomment(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate()">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n            </div>\n          </div>\n        </ion-row>\n      </div>\n    </div>\n\n    <div id="categorylist" class="category-list" *ngSwitchCase="\'recent\'">\n      <ion-row style="padding: 6px;">\n        <ion-col style="font-weight: 500;">Categories</ion-col>\n        <ion-col\n          *ngIf="showcat==true"\n          (click)="showcatevent(1)"\n          class="prop-see"\n          >See All</ion-col\n        >\n        <ion-col\n          *ngIf="showcat==false"\n          (click)="showcatevent(2)"\n          class="prop-see"\n          >Close</ion-col\n        >\n      </ion-row>\n      <ion-row *ngIf="showcat==true" style="margin-top: -8px;">\n        <ion-col class="col-cat" (click)="songtype(1)">\n          <img class="img-cat" src="assets/category/categories1.png" />\n          <p class="cat-types">Music</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(2)">\n          <img class="img-cat" src="assets/category/categories2.png" />\n          <p class="cat-types">Dance</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(3)">\n          <img class="img-cat" src="assets/category/categories3.png" />\n          <p class="cat-types">Film</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(4)">\n          <img class="img-cat" src="assets/category/categories4.png" />\n          <p class="cat-types">Photography</p>\n        </ion-col>\n        <ion-col class="col-cat" (click)="songtype(7)">\n          <img class="img-cat" src="assets/category/categories5.png" />\n          <p class="cat-types">Litreature</p>\n        </ion-col>\n      </ion-row>\n      <div *ngIf="showcat==false">\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(1)">\n            <img class="img-cat" src="assets/category/categories1.png" />\n            <p class="cat-types">Music</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(2)">\n            <img class="img-cat" src="assets/category/categories2.png" />\n            <p class="cat-types">Dance</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(3)">\n            <img class="img-cat" src="assets/category/categories3.png" />\n            <p class="cat-types">Film</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(4)">\n            <img class="img-cat" src="assets/category/categories4.png" />\n            <p class="cat-types">Photography</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(7)">\n            <img class="img-cat" src="assets/category/categories5.png" />\n            <p class="cat-types">Litreature</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(8)">\n            <img class="img-cat" src="assets/category/categories6.png" />\n            <p class="cat-types">Art</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(5)">\n            <img class="img-cat" src="assets/category/categories7.png" />\n            <p class="cat-types">Freestyle</p>\n          </ion-col>\n          <ion-col class="col-cat" (click)="songtype(9)">\n            <img class="img-cat" src="assets/category/categories8.png" />\n            <p class="cat-types">Personality</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="col-cat" (click)="songtype(6)">\n            <img class="img-cat" src="assets/category/categories9.png" />\n            <p class="cat-types">Other</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div style="margin-top: 29px;" *ngSwitchCase="\'recent\'">\n      <ion-list class="recent-upload">\n        <!-- <ion-row style="    padding: 17px;">\n                <ion-col>\n                 <p style="    font-weight: 500;"> Based on your prefrence</p>\n       \n                 </ion-col>\n                <ion-col style="text-align: end;"><button (click)="changeprefrence()" class="button-prefrence" ion-button color="primary">Change Prefrences</button></ion-col>\n              </ion-row>\n     <ion-row padding style="margin-top: -33px;">\n     <p class="head-p"><span class="span-head">Recent Uploads </span> in Music</p>    \n    </ion-row>    -->\n        <ion-row padding style="margin-top: -33px;">\n          <p class="head-p">\n            <span class="span-head">Recent Uploads </span> in All Categories\n          </p>\n        </ion-row>\n        <loaderdata *ngIf="loaderitem==true"></loaderdata>\n        <!-- <ion-row *ngFor="let value of fakedata"  style="    margin-top: -10px;    margin-bottom: 26px;">\n      <div class="image-tag">\n         \n          <img style="    width: 89%;" src="assets/Dashboard/thumbnail.png">\n         \n        </div>\n        <div class="img-box" >\n        <div class="img-content">\n          <div class="cat-div"> \n            <img class="cat-icon" src="assets/Dashboard/artist_profile1.png">\n          </div>\n         \n          <div class="detail-grid">\n            \n          <div style="margin-top: 6px;" class="detail-div">\n             <p style="font-weight: bold;" class="music-type">King Cay Music</p>\n             <p class="title-type">Music / Hip Hop/ Rap</p>\n             <div class="star-div"> <ionic3-star-rating \n              activeIcon = "ios-star"\n              defaultIcon = "ios-star-outline"\n              activeColor = "rgb(228, 215, 38)" \n              defaultColor = "#f4f4f4"\n              readonly="true"\n              [rating]="5">\n          </ionic3-star-rating></div>\n          </div>\n          \n          <div style="text-align:right; " class="detail-div1">\n            <div class="author-box">\n            <p style="    height: 0px;font-weight: bold">King Cay</p>\n            <p>10 mins ago</p>\n            </div>\n          </div>\n          <div   class="detail-div userpic">\n            <img class="userimage" src="assets/tabsicon/propic.jpg">\n          </div>\n          </div>\n    \n        </div>\n        </div>\n        <div class="post-img">\n     <div class="social-img">\n       \n       <div class="header1">\n          <img class="img-post" src="assets/Dashboard/share-gray.png">\n        </div>\n        <div class="header1">\n            <img class="img-post" src="assets/Dashboard/user.png">\n          </div>\n          <div class="header1" (click)="navigatetocomment()">\n              <img class="img-post" src="assets/Dashboard/msg.png">\n            </div>\n            <div class="header1">\n                <img class="img-post" src="assets/Dashboard/error.png">\n              </div>\n    \n        </div>\n        <div class="social-img">\n       \n          <div class="header1" >\n             <img class="img-post" src="assets/Dashboard/share-gray.png">\n             <div class="share-div" (click)="tapshow1()"></div>\n           </div>\n           <div class="header1" (click)="followedartist()">\n               <img class="img-post" src="assets/Dashboard/user.png">\n             </div>\n             <div class="header1" (click)="navigatetocomment()">\n                 <img class="img-post" src="assets/Dashboard/msg.png">\n               </div>\n               <div class="header1" (click)="reportnavigate()">\n                   <img class="img-post" src="assets/Dashboard/error.png">\n                 </div>\n     \n           </div>\n      </div>\n      </ion-row> -->\n        <ion-row\n          *ngFor="let value of profilerecentcharts;let i=index"\n          style="margin-top: -10px; margin-bottom: 26px;"\n        >\n          <div class="image-tag">\n            <img\n              style="width: 89%; object-fit: cover; background-color: #2e2e2e;"\n              [src]="value.media_thumbnail_url"\n            />\n          </div>\n          <div class="img-box">\n            <div class="img-content">\n              <div (click)="viewvideo1(i)" class="cat-div">\n                <!-- <img class="cat-icon" [src]="value.mediathumbnailuser"> -->\n                <ion-row>\n                  <ion-col col-8>\n                    <img\n                      *ngIf="value.media_type==\'video/mp4\'||value.media_type==\'youtube\' || value.media_type==\'audio/mpeg\' || value.media_type==\'audio/mp3\'"\n                      class="play-style"\n                      src="assets/play.png"\n                    />\n                  </ion-col>\n                  <ion-col col-4>\n                    <!-- <img class="cat-icon" [src]="value.small_image_url"> -->\n                    <img class="cat-icon" [src]="value.mediathumbnailuser" />\n                  </ion-col>\n                </ion-row>\n              </div>\n              <div class="details">\n                <ion-row>\n                  <ion-col col-5>\n                    <div class="details-1">\n                      <p class="title">{{value.usermedia_name}}</p>\n                      <p class="arts">{{value.artforms}}</p>\n                      <!-- <div *ngIf="user_display_name!=value.user_display_name" class="stars" (click)="openstar(value.rating,value.usermediaid,value.user_display_name)"> <ionic3-star-rating  -->\n                      <div\n                        *ngIf="user_display_name!=value.user_display_name"\n                        class="stars"\n                        (click)="openstar(value.usermediaid)"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="false"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n\n                      <div\n                        *ngIf="user_display_name==value.user_display_name"\n                        class="stars"\n                      >\n                        <ionic3-star-rating\n                          activeIcon="ios-star"\n                          defaultIcon="ios-star-outline"\n                          activeColor="rgb(228, 215, 38)"\n                          defaultColor="#f4f4f4"\n                          readonly="true"\n                          [rating]="value.rating"\n                        >\n                        </ionic3-star-rating>\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col col-4>\n                    <div class="details-2">\n                      <p class="author-name">{{value.user_display_name}}</p>\n                      <!-- <p class="post-time">{{value.usermedia_posted}}</p> -->\n                    </div>\n                  </ion-col>\n                  <ion-col col-3>\n                    <figure class="author-img">\n                      <img\n                        (click)="artistpro(i)"\n                        style="border-radius: 35px;"\n                        class="custom-cat-icon"\n                        [src]="value.user_avatar"\n                      />\n                    </figure>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <!-- <div class="detail-grid">\n             \n           <div style="margin-top: 6px;" class="detail-div" >\n              <p style="font-weight: bold;" class="music-type">{{value.usermedia_name}}</p>\n              <p class="title-type">{{value.toptypeprofile}}</p>\n              <div class="star-div" > \n                <ionic3-star-rating (click)="openstar(value.usermediaid)" *ngIf="user_display_name!=value.user_display_name"\n               activeIcon = "ios-star"\n               defaultIcon = "ios-star-outline"\n               activeColor = "rgb(228, 215, 38)" \n               defaultColor = "#f4f4f4"\n               readonly="false"\n               [rating]="value.totalRating">\n           </ionic3-star-rating>\n           <ionic3-star-rating *ngIf="user_display_name==value.user_display_name"\n           activeIcon = "ios-star"\n           defaultIcon = "ios-star-outline"\n           activeColor = "rgb(228, 215, 38)" \n           defaultColor = "#f4f4f4"\n           readonly="true"\n           [rating]="value.totalRating">\n       </ionic3-star-rating>\n          </div>\n           </div>\n           \n           <div style="text-align:right; " class="detail-div1" (click)="artistpro()">\n             <div class="author-box">\n             <p style="    height: 0px;font-weight: bold">{{displayname}}</p>\n             <p>{{value.usermedia_posted}}</p>\n             </div>\n           </div>\n           <div   class="detail-div userpic">\n             <img class="userimage" [src]="value.user_profile_avatar">\n           </div>\n           </div> -->\n            </div>\n          </div>\n          <div class="post-img">\n            <div class="social-img">\n              <div class="header1">\n                <img class="img-post" src="assets/Dashboard/share-gray.png" />\n                <div class="share-div" (click)="tapshow2(i)"></div>\n              </div>\n              <div class="header1" (click)="followedartist(value.artist_id)">\n                <img class="img-post" src="assets/Dashboard/user.png" />\n              </div>\n              <div class="header1" (click)="navigatetocomment1(i)">\n                <img class="img-post" src="assets/Dashboard/msg.png" />\n              </div>\n              <div class="header1" (click)="reportnavigate()">\n                <img class="img-post" src="assets/Dashboard/error.png" />\n              </div>\n            </div>\n          </div>\n        </ion-row>\n        <ion-infinite-scroll\n          (ionInfinite)="loadMore($event)"\n          loadingSpinner="bubbles"\n          loadingText="Loading data..."\n        >\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/artistprofilepage/artistprofilepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__providers_dashboardservice_dashboardservice__["a" /* DashboardserviceProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ArtistprofilepagePage);
    return ArtistprofilepagePage;
}());

//# sourceMappingURL=artistprofilepage.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artistprofilepage_artistprofilepage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popoverpageshare_popoverpageshare__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__followedartist_followedartist__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reportprob_reportprob__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewtalent_viewtalent__ = __webpack_require__(57);
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
 * Generated class for the CommentsboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentsboxPage = (function () {
    function CommentsboxPage(event, modalCtrl, popoverCtrl, alertCtrl, security, nativePageTransitions, viewCtrl, navCtrl, navParams) {
        var _this = this;
        this.event = event;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.security = security;
        this.nativePageTransitions = nativePageTransitions;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datalist = [1, 2, 3, 4];
        this.fakeUsers = new Array(4);
        event.subscribe("star-rating:changed", function (starRating) {
            _this.actualrate = starRating;
        });
        //  alert('usermedia'+ localStorage.getItem('usermedia'))
        // localStorage['usermedia']='130189'
    }
    CommentsboxPage.prototype.share = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popoverpageshare_popoverpageshare__["a" /* PopoverpagesharePage */], {
            image: this.category_image_url,
            artistname: this.user_display_name,
            user_url: this.userurl,
        });
        popover.present();
    };
    CommentsboxPage.prototype.followuser = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.artistfollowed(_this.artist_id); })
            .subscribe(function (data) {
            console.log(data.status);
            var modalfollow = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__followedartist_followedartist__["a" /* FollowedartistPage */], {
                msg: data.status,
            });
            modalfollow.present();
        });
    };
    CommentsboxPage.prototype.reportnavigate = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__reportprob_reportprob__["a" /* ReportprobPage */], {
            usermediaid: this.usermediaid,
        });
        modal.present();
    };
    CommentsboxPage.prototype.votesuccefully = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.starmedia(_this.actualrate, _this.usermediaid); })
            .subscribe(function (data) {
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__viewtalent_viewtalent__["a" /* ViewtalentPage */], {
                rate: _this.actualrate,
            });
            modal.present();
        });
    };
    CommentsboxPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userid = localStorage["userid"];
        this.loadingsend = true;
        this.send = false;
        this.loadingsend1 = true;
        this.replyloader = true;
        this.editsend = false;
        this.loadingeditsend = true;
        console.log("ionViewDidLoad CommentsboxPage");
        this.loading = false;
        //  alert('getItem'+localStorage.getItem('usermedia'))
        if (localStorage.getItem("usermedia")) {
            this.usermediaid = localStorage.getItem("usermedia");
            // localStorage.removeItem('usermedia')
            __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loading)
                .flatMap(function () { return _this.security.getMediadetails(); })
                .subscribe(function (data) {
                console.log("1", data.playerMedia[0].UserMedia.media_thumbnail_url);
                console.log("2", data.playerMedia[0].UserMedia.usermedia_name);
                console.log("3", data.playerMedia[0].Subcategory.subcategory_name);
                console.log("4", data.playerMedia[0].Subsubcategory.subsubcategory_name);
                console.log("5", data.playerMedia[0].Category.category_name);
                console.log("6", data.user.user_display_name);
                console.log("7", data.user.user_avatar);
                console.log("8", data.playerMedia[0].UserMedia.media_ratings.totalRating);
                console.log("9", data.playerMedia[0].UserMedia.usermedia_url);
                //  alert('10'+data.playerMedia[0].Users.user_id)
                console.log("11", data.playerMedia[0].UserMedia.media_ratings.rate);
                _this.category_image_url =
                    data.playerMedia[0].UserMedia.media_thumbnail_url;
                _this.usermedia_name = data.playerMedia[0].UserMedia.usermedia_name;
                if (data.playerMedia[0].Subcategory.subcategory_name) {
                    if (data.playerMedia[0].Subsubcategory.subsubcategory_name) {
                        _this.artforms =
                            data.playerMedia[0].Category.category_name +
                                "/" +
                                data.playerMedia[0].Subcategory.subcategory_name +
                                "/" +
                                data.playerMedia[0].Subsubcategory.subsubcategory_name;
                    }
                    else {
                        _this.artforms =
                            data.playerMedia[0].Category.category_name +
                                "/" +
                                data.playerMedia[0].Subcategory.subcategory_name;
                    }
                }
                else {
                    _this.artforms = data.playerMedia[0].Category.category_name;
                }
                _this.user_display_name = data.user.user_display_name;
                _this.user_avatar = data.user.user_avatar;
                if (data.playerMedia[0].Subsubcategory.subsubcategory_image) {
                    console.log("subcategory_small_image", data.playerMedia[0].Subsubcategory.subcategory_small_image);
                    _this.small_image_url =
                        "https://www.demo.artformplatform.com/assets/subsubcategory_icons/" +
                            data.playerMedia[0].Subsubcategory.subsubcategory_small_image;
                    console.log("small_image_url", _this.small_image_url);
                }
                else if (data.playerMedia[0].Subcategory.subcategory_image) {
                    console.log("subcategory_small_image", data.playerMedia[0].Subcategory.subcategory_small_image);
                    _this.small_image_url =
                        "https://www.demo.artformplatform.com/assets/subcategory_icons/" +
                            data.playerMedia[0].Subcategory.subcategory_small_image;
                    console.log("small_image_url", _this.small_image_url);
                }
                else if (data.playerMedia[0].Category.category_small_image) {
                    _this.small_image_url =
                        "https://www.demo.artformplatform.com/assets/category_icons/" +
                            data.playerMedia[0].Category.category_small_image;
                    console.log("small_image_url", _this.small_image_url);
                }
                _this.totalrating =
                    data.playerMedia[0].UserMedia.media_ratings.totalRating;
                _this.userurl = data.playerMedia[0].UserMedia.usermedia_url;
                _this.artist_id = data.playerMedia[0].Users.user_id;
                _this.rate = data.playerMedia[0].UserMedia.media_ratings.rate;
                _this.id = 1;
            });
        }
        else {
            this.usermediaid = this.navParams.get("usermediaid");
            this.category_image_url = this.navParams.get("mediapic");
            this.usermedia_name = this.navParams.get("medianame");
            this.artforms = this.navParams.get("artforms");
            this.user_display_name = this.navParams.get("user_display_name");
            this.user_avatar = this.navParams.get("user_avatar");
            this.small_image_url = this.navParams.get("small_image_url");
            this.totalrating = this.navParams.get("totalrating");
            // alert("total" + this.totalrating);
            this.userurl = this.navParams.get("userurl");
            this.artist_id = this.navParams.get("artist_id");
            this.rate = this.navParams.get("rate");
            console.log("rate", this.rate);
            this.idstatus = this.navParams.get("idstatus");
            if (this.idstatus == 1) {
                this.id = this.navParams.get("id") + 1;
                document.getElementById("color_status").style.color = "#fff";
            }
            else {
                this.id = 0;
                document.getElementById("color_status").style.color = "transparent";
            }
        }
        //  alert('this.usermediaid'+this.usermediaid)
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loading)
            .flatMap(function () { return _this.security.comments(_this.usermediaid); })
            .subscribe(function (data) {
            //  alert('data'+JSON.stringify(data))
            _this.loading = true;
            _this.commentdata = data.comments;
            console.log("comments", _this.commentdata);
        });
    };
    CommentsboxPage.prototype.updateeditsubcomment = function (mediacomment_id, submediacomment_id, message) {
        console.log(mediacomment_id);
        console.log(submediacomment_id);
        this.comments = message;
        this.editsend = true;
        this.subeditmediacomment_id = submediacomment_id;
        this.editmediacomment_id = mediacomment_id;
    };
    CommentsboxPage.prototype.editsendbutton = function () {
        var _this = this;
        this.loadingsend = false;
        this.editsend = false;
        this.send = false;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loadingsend)
            .flatMap(function () {
            return _this.security.editsubcomments(_this.comments, _this.subeditmediacomment_id, _this.usermediaid, _this.editmediacomment_id);
        })
            .subscribe(function (data) {
            _this.refreshmsg();
            console.log("comments", _this.commentdata);
        });
    };
    CommentsboxPage.prototype.editcomment = function (mediacomment_id, message) {
        this.comments = message;
        this.send = true;
        this.mediacomment_id = mediacomment_id;
        // Observable.of(this.loading)
        // .flatMap(()=>this.security.editcomments(this.comments,mediacomment_id,this.usermediaid)).subscribe(data=>{
        //   this.loading=true
        //    console.log('comments',this.commentdata)
        //       })
    };
    CommentsboxPage.prototype.sendbutton1 = function () {
        var _this = this;
        this.loadingsend = false;
        this.send = false;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loading)
            .flatMap(function () {
            return _this.security.editcomments(_this.comments, _this.mediacomment_id, _this.usermediaid);
        })
            .subscribe(function (data) {
            _this.loading = true;
            _this.refreshmsg();
            console.log("comments", _this.commentdata);
        });
    };
    CommentsboxPage.prototype.deletesubcomment = function (id) {
        var _this = this;
        this.loadingeditsend = false;
        this.editdeleteid = id;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loadingeditsend)
            .flatMap(function () { return _this.security.deletesubcomments(id); })
            .subscribe(function (data) {
            _this.editdeletemsg();
        });
    };
    CommentsboxPage.prototype.editdeletemsg = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loadingeditsend)
            .flatMap(function () { return _this.security.comments(_this.usermediaid); })
            .subscribe(function (data) {
            _this.loadingeditsend = true;
            _this.commentdata = data.comments;
        });
    };
    CommentsboxPage.prototype.close = function () {
        var options = {
            direction: "down",
            duration: 500,
            slowdownfactor: -1,
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.pop();
    };
    CommentsboxPage.prototype.profilepic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */]);
    };
    CommentsboxPage.prototype.sendbutton = function () {
        var _this = this;
        this.loadingsend = false;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loadingsend)
            .flatMap(function () { return _this.security.addcomments(_this.usermediaid, _this.comments); })
            .subscribe(function (data) {
            _this.refreshmsg();
        });
    };
    CommentsboxPage.prototype.refreshmsg = function () {
        var _this = this;
        console.log("ionViewDidLoad CommentsboxPage");
        this.usermediaid = this.navParams.get("usermediaid");
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loadingsend)
            .flatMap(function () { return _this.security.comments(_this.usermediaid); })
            .subscribe(function (data) {
            _this.loadingsend = true;
            _this.commentdata = data.comments;
            _this.comments = "";
            console.log("comments", _this.commentdata);
        });
    };
    CommentsboxPage.prototype.deletecomment = function (mediacomment_id, id) {
        var _this = this;
        this.loadingsend1 = false;
        this.deleteid = id;
        console.log(this.deleteid);
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loadingsend1)
            .flatMap(function () { return _this.security.deletecomments(mediacomment_id); })
            .subscribe(function (data) {
            _this.deletemsg();
        });
    };
    CommentsboxPage.prototype.deletemsg = function () {
        var _this = this;
        this.usermediaid = this.navParams.get("usermediaid");
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.loadingsend1)
            .flatMap(function () { return _this.security.comments(_this.usermediaid); })
            .subscribe(function (data) {
            _this.loadingsend1 = true;
            _this.commentdata = data.comments;
        });
    };
    CommentsboxPage.prototype.subcomment = function (mediacomment_id, displayname, i) {
        // this.usermediaid
        // Observable.of(this.loadingsend1)
        // .flatMap(()=>this.security.subcomments(this.usermediaid,mediacomment_id,this.comments)).subscribe(data=>{
        var _this = this;
        //       })
        var alert = this.alertCtrl.create({
            title: "Reply to " + displayname,
            inputs: [
                {
                    name: "comments",
                    placeholder: "Enter Reply..",
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function (data) { },
                },
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log(data.comments);
                        _this.replymsg(mediacomment_id, data.comments, i);
                    },
                },
            ],
        });
        alert.present();
    };
    CommentsboxPage.prototype.replymsg = function (mediacomment_id, comments, i) {
        var _this = this;
        this.replyid = i;
        this.usermediaid;
        this.replyloader = false;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.replyloader)
            .flatMap(function () {
            return _this.security.subcomments(_this.usermediaid, mediacomment_id, comments);
        })
            .subscribe(function (data) {
            _this.refreshreply();
        });
    };
    CommentsboxPage.prototype.refreshreply = function () {
        var _this = this;
        this.usermediaid = this.navParams.get("usermediaid");
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.replyloader)
            .flatMap(function () { return _this.security.comments(_this.usermediaid); })
            .subscribe(function (data) {
            _this.replyloader = true;
            _this.replyid = null;
            _this.commentdata = data.comments;
        });
    };
    CommentsboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-commentsbox",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/commentsbox/commentsbox.html"*/`<!--\n  Generated template for the CommentsboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <div\n    class="back-img"\n    [ngStyle]="{\'background-image\':\'url(\'+category_image_url+\')\'}"\n  >\n    <ion-row style="margin-top: 18px;" (click)="close()">\n      <ion-col col-6>\n        <button class="butt-style1" ion-button round>\n          <ion-icon style="color: #fff;" name="close"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 class="col-style">\n        <img class="img-pro" [src]="small_image_url" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <p id="color_status" class="number-icon">{{id}}</p>\n        <p class="city-style">{{usermedia_name}}</p>\n        <p class="cat-style">{{artforms}}</p>\n        <ion-row class="row-style">\n          <!-- <ion-col class="rate-style1" col-3><img class="rate-style" src="assets/Dashboard/rating.png"></ion-col>\n        <ion-col col-9><p class="points-earn">6037</p></ion-col> -->\n          <img class="rate-style" src="assets/Dashboard/rating.png" />\n          <p class="points-earn">{{totalrating}}</p>\n        </ion-row>\n      </ion-col>\n      <ion-col col-6>\n        <ion-row class="comments-style">\n          <img class="expand-img" src="assets/commentsbox/expand.png" />\n        </ion-row>\n        <ion-row class="user-style" (click)="profilepic()">\n          <p class="pro-name">{{user_display_name}}</p>\n          <img class="img-style" [src]="user_avatar" />\n        </ion-row>\n        <ion-row class="vote-style" (click)="votesuccefully()">\n          <p class="vote-p">Vote</p>\n          <ionic3-star-rating\n            style="margin-right: 10px; margin-top: 2px;"\n            activeIcon="ios-star"\n            defaultIcon="ios-star-outline"\n            activeColor="rgb(228, 215, 38)"\n            defaultColor="rgb(228, 215, 38)"\n            readonly="false"\n            [rating]="rate"\n          >\n          </ionic3-star-rating>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-row style="margin-top: 6px;">\n    <ion-col class="img-centre" (click)="share()">\n      <img style="height: 22px;" src="assets/Dashboard/share-gray.png" />\n    </ion-col>\n    <ion-col class="img-centre" (click)="followuser()">\n      <img style="height: 22px;" src="assets/Dashboard/user.png" />\n    </ion-col>\n    <ion-col class="img-centre" (click)="reportnavigate()">\n      <img style="height: 22px;" src="assets/Dashboard/error.png" />\n    </ion-col>\n  </ion-row>\n  <hr style="height: 3px;" />\n  <ion-row>\n    <p class="lat-style">Latest Comments</p>\n  </ion-row>\n  <div *ngIf="loading==true">\n    <ion-grid *ngFor="let value of commentdata;let i=index">\n      <ion-row>\n        <ion-col col-3 style="padding: 0px;">\n          <img class="icon-pro" [src]="value.Users.user_profile_avatar" />\n        </ion-col>\n        <ion-col col-9>\n          <p class="name-style">{{value.Users.user_display_name}}</p>\n          <p class="para-style">{{value.MediaComment.usermedia_comment}}</p>\n          <ion-row style="margin-top: -19px;">\n            <ion-col\n              (click)="editcomment(value.MediaComment.mediacomment_id,value.MediaComment.usermedia_comment)"\n              *ngIf="value.Users.user_id==userid"\n              col-2\n            >\n              <p class="edit-style">Edit</p>\n            </ion-col>\n            <ion-col\n              col-8\n              (click)="subcomment(value.MediaComment.mediacomment_id,value.Users.user_display_name,i)"\n            >\n              <p class="edit-style">Reply</p>\n            </ion-col>\n            <ion-col\n              col-2\n              *ngIf="value.Users.user_id==userid"\n              (click)="deletecomment(value.MediaComment.mediacomment_id,i)"\n            >\n              <ion-icon *ngIf="loadingsend1==true" name="trash"></ion-icon>\n              <ion-spinner\n                style="margin-bottom: 10px;"\n                *ngIf="loadingsend1==false &&i==deleteid"\n              ></ion-spinner>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-3> </ion-col>\n\n        <ion-col col-8 *ngIf="i!=replyid">\n          <ion-row\n            style="background-color: #efefef; margin-bottom: 10px;"\n            *ngFor="let subvalues of value.Subcomments;let editid=index"\n          >\n            <ion-col col-3 style="padding-top: 15px;">\n              <img\n                class="icon-pro"\n                [src]="subvalues.Users.user_profile_avatar"\n              />\n            </ion-col>\n            <ion-col col-9 style="padding: 15px;">\n              <p class="name-style1">{{subvalues.Users.user_display_name}}</p>\n              <p class="para-style1">\n                {{subvalues.MediaSubcomment.usermedia_comment}}\n              </p>\n              <ion-row style="margin-top: -19px;">\n                <ion-col\n                  (click)="updateeditsubcomment(value.MediaComment.mediacomment_id,subvalues.MediaSubcomment.mediasubcomment_id,subvalues.MediaSubcomment.usermedia_comment)"\n                  *ngIf="subvalues.Users.user_id==userid"\n                  col-10\n                >\n                  <p class="edit-style">Edit</p>\n                </ion-col>\n                <ion-col\n                  col-2\n                  (click)="deletesubcomment(subvalues.MediaSubcomment.mediasubcomment_id)"\n                >\n                  <div *ngIf="subvalues.Users.user_id==userid">\n                    <ion-icon\n                      style="padding-top: 10px;"\n                      *ngIf="loadingeditsend==true"\n                      name="trash"\n                    ></ion-icon>\n                    <ion-spinner\n                      style="margin-bottom: 10px;"\n                      *ngIf="loadingeditsend==false && subvalues.MediaSubcomment.mediasubcomment_id==editdeleteid"\n                    ></ion-spinner>\n                  </div>\n                </ion-col>\n                <!-- <ion-col (click)="editcomment(value.MediaComment.mediacomment_id,value.MediaComment.usermedia_comment)" *ngIf="value.Users.user_id==userid" col-2>\n                <p class="edit-style">Edit</p>\n                </ion-col>\n                <ion-col col-8 (click)="subcomment()" > \n                <p class="edit-style">Reply</p>\n              </ion-col>\n              <ion-col col-2 *ngIf="value.Users.user_id==userid" (click)="deletecomment(value.MediaComment.mediacomment_id,i)">\n                <ion-icon  *ngIf="loadingsend1==true" name="trash"></ion-icon>\n                <ion-spinner style="margin-bottom:10px" *ngIf="loadingsend1==false &&i==deleteid" ></ion-spinner> \n              </ion-col> -->\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <div *ngIf=" i==replyid">\n          <ion-spinner></ion-spinner>\n        </div>\n        <ion-col col-1> </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf="loading==false" style="padding: 12px;">\n    <div *ngFor="let fake of fakeUsers" style="margin-bottom: 12px;">\n      <div class="div-right-inner">\n        <p class="p-text p-points-text" style="font-size: 1.2rem;"></p>\n      </div>\n    </div>\n  </div>\n  <!-- <ion-row>\n  <ion-col col-2></ion-col>\n <ion-col col-10>\n  <p class="bold-p">View all 120 comments</p>\n  </ion-col>\n</ion-row> -->\n</ion-content>\n<!-- <ion-footer class="footer-style">\n    <ion-spinner style="margin-bottom:10px" *ngIf="loadingsend==false" ></ion-spinner> \n    \n  <ion-item *ngIf="loadingsend==true" class="item-input"  >\n       \n      <img *ngIf="send==false && editsend==false" style="    height: 28px;" (click)="sendbutton()" class="icon-img" src="assets/commentsbox/gps.png" item-right primary>\n      <img *ngIf="send==true && editsend==false" style="    height: 35px;" (click)="sendbutton1()" class="icon-img" src="assets/commentsbox/gps.png" item-right primary>\n      <img *ngIf="editsend==true" style="    height: 35px;" (click)="editsendbutton()" class="icon-img" src="assets/commentsbox/gps.png" item-right primary>  \n      <ion-input [(ngModel)]="comments" class="input-font-family" placeholder="Enter Comment"></ion-input>\n        \n        </ion-item>\n</ion-footer> -->\n<ion-footer class="footer-style">\n  <ion-spinner\n    style="margin-bottom: 10px;"\n    *ngIf="loadingsend==false"\n  ></ion-spinner>\n\n  <!-- <ion-item *ngIf="loadingsend==true" class="item-input"  > -->\n  <div *ngIf="loadingsend==true" class="item-input">\n    <ion-row>\n      <ion-col col-9>\n        <ion-input\n          style="margin-top: -4px;"\n          [(ngModel)]="comments"\n          class="input-font-family"\n          placeholder="Enter Comment"\n        ></ion-input>\n      </ion-col>\n      <ion-col col-3 style="text-align: end; padding: 8px;">\n        <img\n          (click)="sendbutton()"\n          *ngIf="send==false && editsend==false"\n          style="height: 28px;"\n          class="icon-img"\n          src="assets/commentsbox/gps.png"\n          item-right\n          primary\n        />\n\n        <img\n          *ngIf="send==true && editsend==false"\n          style="height: 35px;"\n          (click)="sendbutton1()"\n          class="icon-img"\n          src="assets/commentsbox/gps.png"\n          item-right\n          primary\n        />\n        <img\n          *ngIf="editsend==true"\n          style="height: 35px;"\n          (click)="editsendbutton()"\n          class="icon-img"\n          src="assets/commentsbox/gps.png"\n          item-right\n          primary\n        />\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- </ion-item> -->\n</ion-footer>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/commentsbox/commentsbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CommentsboxPage);
    return CommentsboxPage;
}());

//# sourceMappingURL=commentsbox.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverpagesharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_pinterest__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_branch_io__ = __webpack_require__(156);
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






/**
 * Generated class for the PopoverpagesharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverpagesharePage = (function () {
    function PopoverpagesharePage(branch, alertCtrl, pinterest, socialshare, navCtrl, navParams, iab) {
        this.branch = branch;
        this.alertCtrl = alertCtrl;
        this.pinterest = pinterest;
        this.socialshare = socialshare;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    PopoverpagesharePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad PopoverpagesharePage");
        this.image = this.navParams.get("image");
        this.artistname = this.navParams.get("artistname");
        // this.user_url=this.navParams.get('user_url')
        this.usermedia = this.navParams.get("usermediaid");
        this.type = this.navParams.get("type");
        console.log("type" + this.type);
        console.log("usermedia", this.usermedia);
        //  this.user_url='artformplatform.app.link/users/art/'+this.usermedia
        //  alert(this.image + "--" + this.artistname + "---" + this.user_url);
        // alert("hi" + this.usermedia);
        // alert("type" + this.type);
        if (this.type) {
            this.banner = this.navParams.get("banner");
            //  alert("banner" + this.banner);
            this.branch
                .createBranchUniversalObject({
                canonicalIdentifier: this.usermedia,
                title: this.artistname,
                contentDescription: "Check out this artwork At ArtFormPlatform !",
                contentImageUrl: this.image,
                contentMetadata: {
                    userId: this.usermedia,
                    userName: this.artistname,
                    type: this.type,
                    banner: this.banner,
                },
            })
                .then(function (newBranchUniversalObj) {
                _this.branchUniversalObj = newBranchUniversalObj;
                // alert("pikabu" + JSON.stringify(newBranchUniversalObj));
                _this.branchfunc();
            });
        }
        else {
            // alert("artistname" + this.artistname);
            this.branch
                .createBranchUniversalObject({
                canonicalIdentifier: this.usermedia,
                title: this.artistname,
                contentDescription: "Check out this Artist Profile At ArtFormPlatform !",
                contentImageUrl: this.image,
                contentMetadata: {
                    userId: this.usermedia,
                    userName: this.artistname,
                    type: 0,
                },
            })
                .then(function (newBranchUniversalObj) {
                _this.branchUniversalObj = newBranchUniversalObj;
                //   alert("pikabu" + JSON.stringify(newBranchUniversalObj));
                _this.branchfunc();
            });
        }
    };
    PopoverpagesharePage.prototype.branchfunc = function () {
        var _this = this;
        // alert('branch')
        this.branchUniversalObj
            .generateShortUrl({}, {})
            .then(function (data) {
            _this.user_url = data.url;
            // alert("user_url" + this.user_url);
            // alert('data'+JSON.stringify(data))
            // alert('aao kabi haveli pr'+data.url)
            // alert('kyu aau?'+data[0].url)
            // alert(data.url)
            //  alert(this.user_url)
        });
    };
    PopoverpagesharePage.prototype.shareviafb = function () {
        // this.branchUniversalObj.showShareSheet({
        //   // put your link properties here
        //   "feature" : "share",
        //   "channel" : "facebook"
        // }, {
        //   // put your control parameters here
        //   "$desktop_url" : "https://www.facebook.com",
        // });
        var browser = this.iab.create("https://www.facebook.com/sharer/sharer.php?u=" + this.user_url, "_system", "location=no");
        // this.socialshare
        //   .shareViaFacebookWithPasteMessageHint(
        //     this.artistname + "-artform platform check out this work on",
        //     null,
        //     this.user_url
        //   )
        //   .then((data) => {
        //     alert("data" + data);
        //     // Success
        //     //  this.socialshare.shareViaFacebookWithPasteMessageHint(this.artistname+'-artform platform check out this work on',null,'artformplatform.com/users/art/'+this.usermedia).then((data) => {
        //     //     this.socialshare.shareViaFacebookWithPasteMessageHint(this.artistname+'-artform platform check out this work on',null,'artformplatform.app.link/users/art/'+this.usermedia).then((data) => {
        //   })
        //   .catch((e) => {
        //     alert("ee" + e);
        //   });
    };
    PopoverpagesharePage.prototype.shareviatwitter = function () {
        //  this.socialshare.shareViaTwitter(this.artistname+'-artform platform check out this work on',null,this.user_url).then((data)=>{
        // alert('data'+data)
        //   this.socialshare.shareViaTwitter(this.artistname+'-artform platform check out this work on',null,'artformplatform.com/users/art/'+this.usermedia).then((data)=>{
        this.socialshare
            .shareViaTwitter(this.artistname + "-artform platform check out this work on", null, this.user_url)
            .then(function (data) {
            // alert("data" + JSON.stringify(data));
        })
            .catch(function (e) {
            //  alert("e" + JSON.stringify(e));
            // alert("Application is not installed .Please install the application.");
        });
    };
    PopoverpagesharePage.prototype.shareviaothers = function () {
        var _this = this;
        this.scopes = [
            this.pinterest.SCOPES.READ_PUBLIC,
            this.pinterest.SCOPES.WRITE_PUBLIC,
            this.pinterest.SCOPES.READ_RELATIONSHIPS,
            this.pinterest.SCOPES.WRITE_RELATIONSHIPS,
        ];
        this.pinterest
            .login(this.scopes)
            .then(function (res) {
            var alert = _this.alertCtrl.create({
                title: "Create Board",
                inputs: [
                    {
                        name: "CreateBoard",
                        placeholder: "Enter Board name",
                    },
                ],
                buttons: [
                    {
                        text: "Send",
                        handler: function (data) {
                            _this.createboardcall(data.CreateBoard);
                        },
                    },
                ],
            });
            alert.present();
        })
            .catch(function (err) { return alert("Error loggin in" + err); });
        // this.socialshare.share(this.artistname+'-artform platform check out this work on'+this.user_url,null,null).then((data)=>{
        //   console.log(data)
        // }).catch((e)=>{
        //   // alert('error'+e)
        // })
    };
    PopoverpagesharePage.prototype.createboardcall = function (CreateBoard) {
        var _this = this;
        this.desc = "ArtForm";
        this.note = this.artistname + "-artform platform check out this work on";
        this.pinterest
            .createBoard(CreateBoard, this.desc)
            .then(function (data) {
            // alert(JSON.stringify((data)))
            // this.pinterest.createPin(this.note, data.id, this.image, this.user_url).then((data)=>{
            // alert(JSON.stringify(data))
            //   this.pinterest.createPin(this.note, data.id, this.image,'artformplatform.com/users/art/'+this.usermedia).then((data)=>{
            _this.pinterest
                .createPin(_this.note, data.id, _this.image, _this.user_url)
                .then(function (data) {
                var alert = _this.alertCtrl.create({
                    title: "Pin Shared Successfully !",
                    buttons: [
                        {
                            text: "Close",
                            handler: function (data) { },
                        },
                    ],
                });
                alert.present();
            })
                .catch(function (err) {
                alert(JSON.stringify(err));
            });
        })
            .catch(function (err) { return alert(JSON.stringify(err)); });
    };
    PopoverpagesharePage.prototype.shareviawattsapp = function () {
        //  alert('user'+this.user_url)
        //  alert( localStorage.getItem('usermedia'))
        // alert(localStorage.removeItem('usermedia'))
        // this.socialshare.shareViaWhatsApp('artformplatform.com/users/art/'+this.usermedia,null,null).then((data)=>{
        // this.socialshare.shareViaWhatsApp(this.artistname+'-artform platform check out this work on' +this.user_url,null,null).then((data)=>{
        // alert('data'+data)
        //  this.socialshare.shareViaWhatsApp(this.artistname+'-artform platform check out this work on artformplatform.com/users/art/'+this.usermedia,null,null).then((data)=>{
        this.socialshare
            .shareViaWhatsApp(this.user_url, null, null)
            .then(function (data) { })
            .catch(function (e) {
            // alert('error'+e)
        });
    };
    PopoverpagesharePage.prototype.shareviamail = function () {
        // this.socialshare.shareViaEmail(this.artistname+'-artform platform check out this work on artformplatform.com/users/art/'+this.usermedia, 'Check Out This!', null, null, null, null).then((data)=>{
        // this.socialshare.shareViaEmail('artformplatform.com/users/art/'+this.usermedia, 'Check Out This!', null, null, null, null).then((data)=>{
        this.socialshare
            .shareViaEmail(this.user_url, "Check Out This!", null)
            .then(function (data) {
            console.log(data);
        })
            .catch(function (e) {
            // alert('error'+e)
        });
    };
    PopoverpagesharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-popoverpageshare",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/popoverpageshare/popoverpageshare.html"*/`<!--\n  Generated template for the PopoverpagesharePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <ion-row>\n    <!-- <ion-col (click)="shareviafb()"> -->\n    <ion-col (click)="shareviafb()">\n      <a\n        href="https://www.facebook.com/sharer/sharer.php?u={{user_url}}"\n        target="_blank"\n      >\n        <img src="assets/profile/facebook.png" />\n      </a>\n    </ion-col>\n\n    <ion-col (click)="shareviatwitter()">\n      <img src="assets/profile/twitter.png " />\n    </ion-col>\n    <ion-col (click)="shareviaothers()">\n      <img src="assets/profile/pinterest.png" />\n    </ion-col>\n    <!-- <ion-col >\n    <img src="assets/profile/pinterest.png"> \n    <pin-it url="http://jasonwatmore.com" media="http://jasonwatmore.com/_content/images/jason.jpg" description="Jason Watmore\'s Blog"></pin-it>\n </ion-col>  -->\n    <ion-col (click)="shareviawattsapp()">\n      <img src="assets/profile/whatsaap.png" />\n    </ion-col>\n    <ion-col (click)="shareviamail()">\n      <img src="assets/profile/mailwhite.png" />\n    </ion-col>\n  </ion-row>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/popoverpageshare/popoverpageshare.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_branch_io__["a" /* BranchIo */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_pinterest__["a" /* Pinterest */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PopoverpagesharePage);
    return PopoverpagesharePage;
}());

//# sourceMappingURL=popoverpageshare.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportprobPage; });
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
 * Generated class for the ReportprobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportprobPage = (function () {
    function ReportprobPage(security, loadingCtrl, viewCtrl, navCtrl, navParams) {
        this.security = security;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakeUsers = new Array(4);
        this.usermediaid = this.navParams.get('usermediaid');
    }
    ReportprobPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ReportprobPage.prototype.ionViewDidLoad = function () {
        this.showbut = true;
        this.getreporttags();
        console.log('ionViewDidLoad ReportprobPage');
    };
    ReportprobPage.prototype.getreporttags = function () {
        var _this = this;
        this.loading = false;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.loading)
            .flatMap(function () { return _this.security.reportmedia(); }).subscribe(function (data) {
            _this.loading = true;
            _this.report = data.reportTypes;
        });
    };
    ReportprobPage.prototype.done = function () {
        var _this = this;
        //  let loading=this.loadingCtrl.create({
        //       spinner:'hide',
        //       content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
        //       cssClass:'transparent'
        //     })
        //     loading.present()
        this.showbut = false;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null)
            .flatMap(function () { return _this.security.reportsubmit(_this.usermediaid, _this.report[_this.relationship]); }).subscribe(function (data) {
            //  loading.dismiss()
            _this.showbut = true;
            _this.viewCtrl.dismiss();
        });
    };
    ReportprobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reportprob',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/reportprob/reportprob.html"*/`<!--\n  Generated template for the ReportprobPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content style="background-color: rgba(0, 0, 0, 0.5);">\n  <div class="modal-style">\n    <div class="report-style">\n      <div class="cross-style" (click)="close()">\n        <img style="height: 11px;" src="assets/reportpop/close (1).png" />\n      </div>\n      <div class="report-icon">\n        <img style="height: 24px;" src="assets/reportpop/popovers1.png" />\n      </div>\n      <div class="report-issue">\n        <p class="report-text">Report media</p>\n        <p>What is the issue?</p>\n      </div>\n      <div style="display: flex; justify-content: CENTER;">\n        <ion-list radio-group [(ngModel)]="relationship" *ngIf="loading==true">\n          <ion-item no-lines *ngFor="let value of report;let i=index">\n            <ion-radio mode="md" item-left value="{{i}}"></ion-radio>\n            <ion-label>{{value}}</ion-label>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngIf="loading==false" style="width: 83%;">\n          <div *ngFor="let fake of fakeUsers" style="margin-bottom: 12px;">\n            <div class="div-right-inner">\n              <p class="p-text p-points-text" style="font-size: 1.2rem;"></p>\n            </div>\n          </div>\n        </ion-list>\n      </div>\n      <div class="button-style">\n        <button\n          *ngIf="showbut==true"\n          (click)="done()"\n          style="text-transform: none;"\n          ion-button\n          round\n          color="primary"\n        >\n          Done\n        </button>\n        <button\n          *ngIf="showbut==false"\n          style="text-transform: none;"\n          ion-button\n          round\n          color="primary"\n        >\n          Sending..\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/reportprob/reportprob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ReportprobPage);
    return ReportprobPage;
}());

//# sourceMappingURL=reportprob.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowedartistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the FollowedartistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowedartistPage = (function () {
    function FollowedartistPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FollowedartistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowedartistPage');
        this.msg = this.navParams.get('msg');
        if (this.msg == 'error') {
            this.errormsg = true;
        }
        else {
            this.errormsg = false;
        }
        console.log(this.msg);
    };
    FollowedartistPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FollowedartistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-followedartist',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/followedartist/followedartist.html"*/`<!--\n  Generated template for the FollowedartistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content style="background-color: rgba(0, 0, 0, 0.6);">\n  <div class="pop-up">\n    <div class="pop-style">\n      <div class="close-style" (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </div>\n      <div style="text-align: center;">\n        <img style="height: 20px;" src="assets/about-us/user.png" />\n        <p style="font-size: 1.8rem;" *ngIf="errormsg==false">\n          Artist {{msg}} Successfully.\n        </p>\n        <p style="font-size: 1.8rem;" *ngIf="errormsg==true">\n          You can\'t follow/unfollow yourself.\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/followedartist/followedartist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], FollowedartistPage);
    return FollowedartistPage;
}());

//# sourceMappingURL=followedartist.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewtalentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the ViewtalentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewtalentPage = (function () {
    function ViewtalentPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.rate = this.navParams.get('rate');
    }
    ViewtalentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewtalentPage');
    };
    ViewtalentPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ViewtalentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewtalent',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/viewtalent/viewtalent.html"*/`<!--\n  Generated template for the ViewtalentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content style="background-color: rgba(0,0,0,.6);">\n  <div class="pop-up">\n    <div class="pop-style">\n  <!-- <div class="close-style" (click)="close()">\n    <ion-icon style="font-size:2rem" name="close"></ion-icon>\n  </div> -->\n<div class="close-position">\n  <button   class="butt-style1" ion-button round (click)="close()">\n    <ion-icon style="color:#fff" name="close"></ion-icon>\n  </button>\n</div>\n  <div style="text-align: center;">\n    <ionic3-star-rating  \n                      activeIcon = "ios-star"\n                      defaultIcon = "ios-star-outline"\n                      activeColor = "rgb(228, 215, 38)" \n                      defaultColor = "rgb(228, 215, 38)"\n                      readonly="true"\n                      [rating]="rate" >\n                  </ionic3-star-rating>\n    <p>Your Vote Saved Successfully.</p>\n  </div>\n  </div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/viewtalent/viewtalent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ViewtalentPage);
    return ViewtalentPage;
}());

//# sourceMappingURL=viewtalent.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Test */
/* unused harmony export Live */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var HTTP_TIMEOUT = 20000;
var Test = {
    mainApi: 'http://localhost:3000',
    timeout: HTTP_TIMEOUT
};
var Live = {
    // mainApi:'https://www.demo.artformplatform.com/api/users',
    mainApi: 'https://www.artformplatform.com/api/users',
    timeout: HTTP_TIMEOUT
};
var ENV = Live;
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_commentsbox_commentsbox__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_security_security__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_branch_io__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_artistprofilepage_artistprofilepage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';
//import { SecuritypanelPage } from '../pages/securitypanel/securitypanel';
//import { TabspagePage } from '../pages/tabspage/tabspage';
//import{CreateconversationpagePage}from'../pages/createconversationpage/createconversationpage'
//import { EditprofilepagePage } from '../pages/editprofilepage/editprofilepage';
//import { CategoryPage } from '../pages/category/category';
//import { ArtprofilePage } from '../pages/artprofile/artprofile';
//import { UploadmediaPage } from '../pages/uploadmedia/uploadmedia';
//import { ReportprobPage } from '../pages/reportprob/reportprob';
//import { GetintouchPage } from '../pages/getintouch/getintouch';
//import { AboutuspPage } from '../pages/aboutusp/aboutusp';
//import { HowitworkspPage } from '../pages/howitworksp/howitworksp';
//import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
//import { PrivacypPage } from '../pages/privacyp/privacyp';
//import{CommunitygudelinesPage}from'../pages/communitygudelines/communitygudelines'
//import { CompetitionspPage } from '../pages/competitionsp/competitionsp';
//import{CategorytabpagePage}from'../pages/categorytabpage/categorytabpage'
//import { SubcattabpPage } from '../pages/subcattabp/subcattabp';
//import { ChildcattabpagePage } from '../pages/childcattabpage/childcattabpage';
//import { ChoosecatpagetabPage } from '../pages/choosecatpagetab/choosecatpagetab';

//import { EditproartistpagPage } from '../pages/editproartistpag/editproartistpag';
//import { ViewtalentPage } from '../pages/viewtalent/viewtalent';
//import { HowtouploadpagesidemenuPage } from '../pages/howtouploadpagesidemenu/howtouploadpagesidemenu';
//import { FollowedartistPage } from '../pages/followedartist/followedartist';
//import { ViewvideoplayPage } from '../pages/viewvideoplay/viewvideoplay';


//import { DashboardPage } from '../pages/dashboard/dashboard';
//import{InboxpagePage}from'../pages/inboxpage/inboxpage'
//import { SelectuploadcategoryPage } from '../pages/selectuploadcategory/selectuploadcategory';
//import { Deeplinks } from "@ionic-native/deeplinks";





// import Auth0Cordova from '@auth0/cordova';
var MyApp = (function () {
    function MyApp(device, uniqueDeviceID, oneSignal, alertCtrl, 
        //public deeplinks: Deeplinks,
        security, loadingCtrl, event, menuCtrl, platform, statusBar, splashScreen, branch) {
        var _this = this;
        this.device = device;
        this.uniqueDeviceID = uniqueDeviceID;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.security = security;
        this.loadingCtrl = loadingCtrl;
        this.event = event;
        this.menuCtrl = menuCtrl;
        this.branch = branch;
        this.rootPage = "HomePage";
        this.imageprofilepic = "assets/imgs/logo_sign_in.png";
        // alert("new");
        this.profile_pic = localStorage["profile_pic"];
        this.firtsname = localStorage["firstname"];
        this.icon1 = "assets/Menu/menu/about.png";
        this.icon2 = "assets/Menu/menu/upload.png";
        this.icon3 = "assets/Menu/menu/setting.png";
        this.icon4 = "assets/Menu/menu/mail.png";
        this.icon5 = "assets/Menu/menu/facebook.png";
        this.icon6 = "assets/Menu/menu/file.png";
        this.icon7 = "assets/Menu/menu/privacy.png";
        this.icon8 = "assets/Menu/menu/guidance.png";
        this.icon9 = "assets/Menu/menu/signIn.png";
        event.subscribe("user:created", function (user, time) {
            console.log("pikabu" + user);
            localStorage["status"] = user;
        });
        event.subscribe("user:image", function (profile_pic, firtsname, time) {
            _this.profile_pic = profile_pic;
            _this.firtsname = firtsname;
            localStorage["firstname"] = firtsname;
            localStorage["profile_pic"] = profile_pic;
        });
        // alert(localStorage['status'])
        if (localStorage["status"] == "true") {
            // this.navCtrl.setRoot(TabspagePage,{id:4})
            this.rootPage = "TabspagePage";
            //  alert('hi')
        }
        else {
            //  alert('bi')
            this.rootPage = "HomePage";
        }
        platform.ready().then(function () {
            // alert("newbranch");
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.deeplinks.routeWithNavController(this.navChild,{
            //   '/users/art/:usermedia':CommentsboxPage
            // }).subscribe((match)=>{
            //   alert('testlink')
            //   localStorage.setItem('usermedia',match.$args.usermedia)
            //  alert('setItem'+localStorage.getItem('usermedia'))
            //   // localStorage['usermedia']=match.$args.usermedia
            //   // this.usermedia=match.$args.usermedia
            //  //event.publish('usermediaid:created', this.usermedia);
            // },(nomatch)=>{
            //   alert('unmatched'+nomatch)
            // })
            statusBar.styleDefault();
            splashScreen.hide();
            statusBar.overlaysWebView(true);
            statusBar.styleLightContent();
            if (platform.is("cordova")) {
                _this.device.uuid;
                //alert(this.device.uuid)
                _this.setupPush(_this.device.uuid);
                localStorage.setItem("uuid", _this.device.uuid);
                // this.uniqueDeviceID.get()
                // .then((uuid: any) =>
                //    {
                //      localStorage.setItem('uuid',uuid)
                //      this.setupPush(uuid);
                //    }
                //  )
                // .catch((error: any) => console.log(error));
            }
            _this.hopetest();
            // (window as any).handleOpenURL = (url: string) => {
            //   Auth0Cordova.onRedirectUri(url);
            // }
        });
        platform.resume.subscribe(function () {
            _this.hopetest();
        });
        // only on devices
        this.pages = [
            { title: "About US", component: "AboutuspPage", logo: this.icon1 },
            {
                title: "How to Upload",
                component: "HowtouploadpagesidemenuPage",
                logo: this.icon2,
            },
            {
                title: "How it Works?",
                component: "HowitworkspPage",
                logo: this.icon3,
            },
            { title: "Get in Touch", component: "GetintouchPage", logo: this.icon4 },
            // {title: 'Connect',component:TabspagePage,logo:this.icon5},
            {
                title: "Terms and Conditions",
                component: "TermsandconditionsPage",
                logo: this.icon6,
            },
            { title: "Privacy Policy", component: "PrivacypPage", logo: this.icon7 },
            {
                title: "Community Guidelines",
                component: "CommunitygudelinesPage",
                logo: this.icon8,
            },
            { title: "Sign Out", component: "HomePage", logo: this.icon9 },
        ];
    }
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        console.log(page.title);
        if (page.title == "Sign Out") {
            localStorage.removeItem("image1");
            localStorage.removeItem("banner");
            this.nav.setRoot(page.component);
            this.menuCtrl.close();
            // let loading=this.loadingCtrl.create({
            //   spinner:'hide',
            //   content:'<img src="https://media.giphy.com/media/3dbzJ7r5tLLjRPufWl/giphy.gif">',
            //   cssClass:'transparent'
            // })
            // loading.present()
            __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].of(null)
                .flatMap(function () { return _this.security.loggedout(); })
                .subscribe(function (data) {
                localStorage["status"] = false;
            });
        }
        else {
            this.nav.setRoot(page.component);
            this.menuCtrl.close();
        }
    };
    MyApp.prototype.closemenu = function () {
        this.menuCtrl.close();
    };
    MyApp.prototype.ionViewDidLoad = function () {
        var x = (document.getElementById(3 + "_img").style.marginLeft = "-7px");
    };
    MyApp.prototype.hopetest = function () {
        var _this = this;
        this.branch.initSession().then(function (data) {
            // alert("hi" + JSON.stringify(data));
            // alert('click_branch_link'+data['+clicked_branch_link'])
            //  alert('non_branch_link'+data['+non_branch_link'])
            if (data["+non_branch_link"]) {
                //alert('hi')
                // this.branchtest=data['+non_branch_link'].split("https://artformplatform.app.link/users/art/")
                // alert(this.branchtest)
                //  alert('branchtest'+this.branchtest[1])
                // this.branchtest = this.branchtest[1].split("?")[0]
                //  alert('hello'+this.branchtest)
                // localStorage.setItem('usermedia',this.branchtest)
                // this.nav.push(CommentsboxPage)
                // this.rootPage=CommentsboxPage
            }
            if (data["+clicked_branch_link"]) {
                //  alert('data'+data['type'])
                localStorage.setItem("type", data["type"]);
                // alert(data['+contentMetadata'].type)
                // read deep link data on click
                // alert('hope'+data['$canonical_identifier'])
                //  alert( localStorage.getItem('getbranchstatus'))
                if (localStorage.getItem("getbranchstatus")) {
                    localStorage.setItem("usermedia", data["$canonical_identifier"]);
                    if (data["type"] != 0) {
                        //  alert(data['$og_image_url'])
                        // alert(data['userName'])
                        // alert(data['banner'])
                        //  localStorage.setItem('profile',data['$og_image_url'])
                        //  localStorage.setItem('title',data['userName'])
                        //  localStorage.setItem('banner',data['banner'])
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_artistprofilepage_artistprofilepage__["a" /* ArtistprofilepagePage */]);
                    }
                    else {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_commentsbox_commentsbox__["a" /* CommentsboxPage */]);
                    }
                }
                else {
                    ///  alert('hiii')
                    localStorage.setItem("usermedia", data["$canonical_identifier"]);
                    _this.rootPage = "SecuritypanelPage";
                }
                // alert('Deep Link Data: ' + JSON.stringify(data));
            }
        });
    };
    MyApp.prototype.navigatetotab = function () {
        this.nav.setRoot("TabspagePage");
        this.menuCtrl.close();
    };
    MyApp.prototype.setupPush = function (uuid) {
        var _this = this;
        // alert(uuid)
        // I recommend to put these into your environment.ts
        this.oneSignal.startInit("2f5be9ae-aa4b-47c6-88e4-27820123c955", uuid);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
        // Notifcation was received in general
        this.oneSignal.handleNotificationReceived().subscribe(function (data) {
            //  alert('data'+JSON.stringify(data))
            var msg = data.payload.body;
            var title = data.payload.title;
            var additionalData = data.payload.additionalData;
            _this.showAlert(title, msg, additionalData.task);
        });
        // Notification was really clicked/opened
        this.oneSignal.handleNotificationOpened().subscribe(function (data) {
            //        alert('data'+JSON.stringify(data))
            // Just a note that the data is a different place here!
            var additionalData = data.notification.payload.additionalData;
            _this.showAlert("Notification opened", "You already read this before", additionalData.task);
        });
        this.oneSignal.endInit();
        this.oneSignal.getIds().then(function (id) {
            //  alert('id'+id.userId)
            localStorage.setItem("uuid", id.userId);
        });
    };
    MyApp.prototype.showAlert = function (title, msg, task) {
        var alert = this.alertCtrl.create({
            buttons: [
                {
                    text: "Action: " + task,
                    handler: function () {
                        // E.g: Navigate to a specific screen
                    },
                },
            ],
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "navChild", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/app/app.html"*/`<ion-menu [content]="content">\n\n        <ion-content>\n            <div style="background-color: #E1E1E1" (click)="navigatetotab()">\n                <ion-row>\n                    <ion-col col-3 class="img-pro">\n                     <img class="img-style" src="{{(profile_pic)?profile_pic:\'assets/tabsicon/propic.jpg\'}}">\n                    </ion-col>\n                    <ion-col col-7>\n                     <p class="welc-style">Welcome</p>\n                     <br>\n                     <p class="p-style">{{firtsname}}</p>\n                     </ion-col>\n                     <ion-col col-2 class="cross-style" (click)="closemenu()">\n                        <img style="    width: 12px;" src="assets/reportpop/close (1).png">\n                        </ion-col>\n                </ion-row>\n            </div>\n\n\n            <ion-list lines>\n                <ion-row style="    border-bottom: 1px solid #c7c3c3;"  *ngFor="let p of pages;let i=index" (click)="openPage(p)">\n                   <ion-col col-3 class="icon-centre">\n                       <div [style.marginLeft]="p.title==\'Connect\'?\'8px\':\'0px\'" style="    height: 30px;\n                       width: 33px;\n                       display: inline-flex;\n                   ">\n                    <img [style.marginLeft] = "p.title == \'Get in Touch\'||p.title==\'Privacy Policy\' ? \'-5px\' : \'-4px\'" [style.height] = "p.title == \'Get in Touch\'||p.title==\'Privacy Policy\' ? \'21px\' : \'23px\'" id="{{i}}_img" src="{{p.logo}}" style="   margin-top: 3px;  margin-left: -4px;   height: 23px;;margin-bottom: -3px; ;margin-right: 20px;">\n                      </div>\n                </ion-col>\n                 <ion-col col-9 style="    margin-left: -21px;">\n                      <p style="color: #838181;">{{p.title}}</p>\n                 </ion-col>    \n                </ion-row>\n            </ion-list>\n        </ion-content>\n       \n    </ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_security_security__["a" /* SecurityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_branch_io__["a" /* BranchIo */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the LoaderdataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
//@IonicPage()
var LoaderdataComponent = (function () {
    function LoaderdataComponent() {
        this.fakeUsers = new Array(100);
        console.log('Hello LoaderdataComponent Component');
        this.text = 'Hello World';
    }
    LoaderdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loaderdata',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/components/loaderdata/loaderdata.html"*/`<!-- Generated template for the LoaderdataComponent component -->\n<ion-list  style="margin-top: 49px;" >\n     \n  <!-- <p style="    margin-left: 20px;">Showing results please wait...</p> -->\n<div *ngFor="let fake of fakeUsers">\n<div  class="div-parent"   >\n  \n  <div   class="div-left" >\n\n    <div class="animate-imagebox" width="80"  ></div>\n    </div>\n    <div class="div-right" >\n      <div class="div-right-inner" >\n        <p class="p-text p-points-text" style="font-size:1.2rem"></p>\n        <p class="p-text p-points-text"></p>\n      </div>\n      </div>\n      <div class="div-text">\n\n      </div>\n     \n    \n \n \n    </div>\n  </div>  \n\n\n</ion-list>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/components/loaderdata/loaderdata.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoaderdataComponent);
    return LoaderdataComponent;
}());

//# sourceMappingURL=loaderdata.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ComponentsExpandableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsExpandableComponent = (function () {
    function ComponentsExpandableComponent(render) {
        this.render = render;
        this.expanded = false;
        this.expandHeight = null;
        console.log('Hello ComponentsExpandableComponent Component');
        this.text = 'Hello World';
    }
    ComponentsExpandableComponent.prototype.ngAfterViewInit = function () {
        this.render.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("expandWrapper", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ComponentsExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("expanded"),
        __metadata("design:type", Boolean)
    ], ComponentsExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("expandHeight"),
        __metadata("design:type", String)
    ], ComponentsExpandableComponent.prototype, "expandHeight", void 0);
    ComponentsExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'components-expandable',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/components/components-expandable/components-expandable.html"*/`<!-- Generated template for the ComponentsExpandableComponent component -->\n<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n  <ng-content></ng-content>\n</div>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/components/components-expandable/components-expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], ComponentsExpandableComponent);
    return ComponentsExpandableComponent;
}());

//# sourceMappingURL=components-expandable.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ProgressbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressbarComponent = (function () {
    function ProgressbarComponent() {
        console.log('Hello ProgressbarComponent Component');
        this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], ProgressbarComponent.prototype, "progress", void 0);
    ProgressbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progressbar',template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/components/progressbar/progressbar.html"*/`<!-- Generated template for the ProgressbarComponent component -->\n<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}%\n  </div>\n</div>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/components/progressbar/progressbar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());

//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewvideoplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(157);
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






/**
 * Generated class for the ViewvideoplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewvideoplayPage = (function () {
    function ViewvideoplayPage(iab, document, santizer, viewCtrl, navCtrl, navParams, youtube) {
        this.iab = iab;
        this.document = document;
        this.santizer = santizer;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.youtube = youtube;
        // alert("nwbi");
        this.mediatypes = false;
    }
    ViewvideoplayPage.prototype.ionViewDidLoad = function () {
        // if (Capacitor.platform === 'web') {
        //   this.initializeYoutubePlayerPluginWeb();
        // } else { // Native
        //   this.initializeYoutubePlayerPluginNative();
        // }
        this.id = this.navParams.get("id");
        this.data = this.navParams.get("data");
        var str = this.data[this.id].mediaplay;
        var n = str.search("youtu.be");
        console.log(this.data[this.id].media_type);
        console.log("str", str);
        if (this.data[this.id].media_type == "application/pdf") {
            this.mediatypes = true;
            var browser = this.iab.create(this.data[this.id].mediaplay, "_system", "location=no");
            // const options: DocumentViewerOptions = {
            //   title: 'My PDF'
            // }
            // this.document.viewDocument(this.data[this.id].mediaplay, 'application/pdf', options)
        }
        else if (this.data[this.id].media_type ==
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            this.mediatypes = true;
            var browser = this.iab.create(this.data[this.id].mediaplay, "_system", "location=no");
            // const options: DocumentViewerOptions = {
            //   title: 'My Document'
            // }
            // this.document.viewDocument(this.data[this.id].mediaplay, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', options)
        }
        else if (this.data[this.id].media_type != "youtube") {
            this.iframe = false;
            this.mediatypes = true;
            this.pathurl = this.data[this.id].mediaplay;
            console.log("data", this.data[this.id]);
            // this.iframe=true
            // var res = this.data[this.id].mediaplay.split("https://www.youtube.com/watch?v=");
            // var youtubeurl='http://www.youtube.com/embed/'+res
            // var youtuberes=youtubeurl.replace(",", "");
            // this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes+'?autoplay=1');
            // this.pathurl=this.pathsantiz
        }
        else {
            this.mediatypes = true;
            this.iframe = true;
            // var res = this.data[this.id].mediaplay.split("https://www.youtube.com/watch?v=");
            //  console.log('mediaplay',this.data[this.id].mediaplay)
            //        var str=this.data[this.id].mediaplay
            //        var n=str.search('http://youtu.be')
            //       if(n!=-1)
            //       {
            //         console.log('if',res)
            //         var res = this.data[this.id].mediaplay.split("http://youtu.be/");
            //       }
            //       else
            //       {
            //         console.log('else',res)
            //       var res = this.data[this.id].mediaplay.split("https://youtu.be/");
            //       }
            //       var youtubeurl='http://www.youtube.com/embed/'+res
            //       var youtuberes=youtubeurl.replace(",", "");
            //      alert('youtuberes'+youtuberes)
            //       // this.pathsantiz=this.santizer.bypassSecurityTrustUrl(this.pathurl);
            //       // console.log('path'+this.pathsantiz)
            //       // this.pathurl=this.data[this.id].UserMedia.usermedia_path
            // //      this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes);
            //       this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes+'?autoplay=1');
            //       this.pathurl=this.pathsantiz
            var str1 = this.data[this.id].mediaplay;
            var n1 = str1.search("watch");
            if (n1 != -1) {
                var res = this.data[this.id].mediaplay.split("https://www.youtube.com/watch?v=");
                console.log("ifstatement" + res[1]);
                //this.videoid=res[1]
                //  var res1=res.replace(","," ")
                // console.log('elsestatement1'+res1)
                var youtubeurl = "https://www.youtube.com/embed/" + res;
                var youtuberes = youtubeurl.replace(",", "");
                //alert(youtuberes)
                console.log("youtubers11" + youtuberes);
                this.youtube_id =
                    "http://developersoptimal.com/test/index.html?url_string=" + res[1];
                // this.youtube.openVideo(res[1]);
                // this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes)
                //alert(this.youtube_id)
                this.pathsantiz = this.santizer.bypassSecurityTrustResourceUrl(this.youtube_id);
            }
            else {
                var res = this.data[this.id].mediaplay.split("https://youtu.be/");
                console.log("res", res[1]);
                //  this.videoid=res[1]
                // var res1=res.replace(",","")
                //console.log('elsestatemen11t'+res1)
                // this.youtube.openVideo(res[1]);
                var youtubeurl = "https://www.youtube.com/embed/" + res;
                var youtuberes1 = youtubeurl.replace(",", "");
                //   alert(youtuberes1)
                //  console.log(youtuberes1)
                //  var youtuberes1=this.data[this.id].media_thumbnail_url
                // var res = this.data[this.id].media_thumbnail_url.split("https://www.youtube.com/watch?v=");
                // console.log('hope'+res)
                // var youtubeurl='https://www.youtube.com/embed/'+res
                // var youtuberes=youtubeurl.replace(",", "");
                // console.log('youtubers'+youtuberes)
                // this.pathsantiz=this.santizer.bypassSecurityTrustResourceUrl(youtuberes)
                console.log("you11", youtuberes1);
                this.youtube_id =
                    "http://developersoptimal.com/test/index.html?url_string=" + res[1];
                // this.youtube.openVideo(res);
                // alert(this.youtube_id)
                this.pathsantiz = this.santizer.bypassSecurityTrustResourceUrl(this.youtube_id);
            }
        }
        this.usertype = this.data[this.id].media_type;
        console.log("ionViewDidLoad ViewvideoplayPage");
    };
    // initializeYoutubePlayerPluginWeb() {
    //   const options = {playerId: 'youtube-player', playerSize: {width: 640, height: 360}, videoId: 'tDW2C6rcH6M'};
    //   const result =  YoutubePlayerWeb.initialize(options);
    //   console.log('playerReady', result);
    // }
    //  destroyYoutubePlayerPluginWeb() {
    //   const result =  YoutubePlayerWeb.destroy('youtube-player');
    //   console.log('destroyYoutubePlayer', result);
    // }
    //  initializeYoutubePlayerPluginNative() {
    //   const { YoutubePlayer } = Plugins;
    //   const options = {width: 640, height: 360, videoId: 'tDW2C6rcH6M'};
    //   const playerReady =  YoutubePlayer.initialize(options);
    // }
    ViewvideoplayPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ViewvideoplayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-viewvideoplay",template:/*ion-inline-start:"/Users/apple/Documents/artformplat/src/pages/viewvideoplay/viewvideoplay.html"*/`<!--\n  Generated template for the ViewvideoplayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content style="background-color: rgba(0, 0, 0, 0.6);">\n  <div class="pop-up">\n    <button\n      *ngIf="usertype==\'image/jpeg\'"\n      class="butt-style"\n      ion-button\n      round\n      (click)="close()"\n    >\n      <ion-icon name="close"></ion-icon>\n    </button>\n    <button\n      *ngIf="usertype!=\'image/jpeg\'"\n      class="butt-style1"\n      ion-button\n      round\n      (click)="close()"\n    >\n      <ion-icon name="close"></ion-icon>\n    </button>\n\n    <div class="pop-style" *ngIf="mediatypes==true">\n      <div\n        *ngIf="usertype==\'image/jpeg\'||usertype==\'image/png\'||usertype==\'application/jpg\'"\n        style="text-align: center;"\n      >\n        <img style="width: 100%;" [src]="pathurl" />\n      </div>\n      <div\n        *ngIf="usertype!=\'image/jpeg\' && usertype!=\'image/png\' && usertype!=\'application/jpg\' && mediatypes==true"\n        style="text-align: center;"\n      >\n        <video\n          webkit-playsinline\n          playsinline\n          autoplay\n          loop\n          style="height: 189px; width: 96%;"\n          *ngIf="iframe==false"\n          width="330"\n          controls\n        >\n          <source src="{{pathurl}}" type="{{usertype}}" />\n        </video>\n        <!-- <iframe allow="autoplay; encrypted-media" style="height: 189px;width: 96%;" *ngIf="iframe==true" width="420" height="345" [src]="pathsantiz" >\n      </iframe> -->\n        <iframe\n          *ngIf="iframe==true"\n          style="height: 229px; width: 96%;"\n          [src]="pathsantiz"\n        >\n        </iframe>\n        <!-- <youtube-player  style="height: 189px;width: 96%;" *ngIf="iframe==true" [playerId]=\'"player"\' [width]="300" [height]="200" [videoId]="videoid"> </youtube-player> -->\n      </div>\n    </div>\n  </div>\n  <!-- <div id="youtube-player">\n\n  </div> -->\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/artformplat/src/pages/viewvideoplay/viewvideoplay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]])
    ], ViewvideoplayPage);
    return ViewvideoplayPage;
}());

//# sourceMappingURL=viewvideoplay.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DashboardserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DashboardserviceProvider = (function () {
    function DashboardserviceProvider(http) {
        this.http = http;
        this.recentdataarray = [];
        this.dublicaterecentdataarray = [];
        this.topperformersdata = [];
        this.latestchart = [];
        this.recentartist = [];
        this.sortcatprofile = 0;
    }
    DashboardserviceProvider.prototype.latestcharts = function (data) {
        console.log("data", data);
        this.latestchart = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].Subcategory.subcategory_image) {
                if (data[i].Subsubcategory.subsubcategory_image) {
                    this.mediathumbnailuser =
                        data[i].Subsubcategory.subsubcategory_small_image_url;
                }
                else {
                    this.mediathumbnailuser =
                        data[i].Subcategory.subcategory_small_image_url;
                }
            }
            else {
                this.mediathumbnailuser = data[i].Category.subcategory_small_image_url;
            }
            if (data[i].UserMedia.usermedia_category.names[2]) {
                this.toptypeprofile =
                    data[i].UserMedia.usermedia_category.names[0] +
                        "/" +
                        data[i].UserMedia.usermedia_category.names[1] +
                        "/" +
                        data[i].UserMedia.usermedia_category.names[2];
            }
            else if (data[i].UserMedia.usermedia_category.names[1]) {
                this.toptypeprofile =
                    data[i].UserMedia.usermedia_category.names[0] +
                        "/" +
                        data[i].UserMedia.usermedia_category.names[1];
            }
            else if (data[i].UserMedia.usermedia_category.names[0]) {
                this.toptypeprofile = data[i].UserMedia.usermedia_category.names[0];
            }
            // if(data[i].Subsubcategory.subsubcategory_url)
            // {
            // this.userurl=data[i].Subsubcategory.subsubcategory_url
            // }
            // else if(data[i].Category.category_url)
            // {
            //   if(data[i].Subcategory.subcategory_url)
            //   {
            //  this.userurl=data[i].Subcategory.subcategory_url
            //   }
            //   else
            //   {
            //  this.userurl=data[i].Category.category_url
            //   }
            // }
            this.userurl = data[i].UserMedia.usermedia_url;
            if (data[i].Subcategory.subcategory_name) {
                if (data[i].Subsubcategory.subsubcategory_name) {
                    this.artformscharts =
                        data[i].Category.category_name +
                            "/" +
                            data[i].Subcategory.subcategory_name +
                            "/" +
                            data[i].Subsubcategory.subsubcategory_name;
                }
                else {
                    this.artformscharts =
                        data[i].Category.category_name +
                            "/" +
                            data[i].Subcategory.subcategory_name;
                }
            }
            else {
                this.artformscharts = data[i].Category.category_name;
            }
            this.latestchart.push({
                media_thumbnail_url: data[i].UserMedia.media_thumbnail_url,
                user_display_name: data[i].Users.user_display_name,
                usermedia_posted: data[i].UserMedia.usermedia_posted,
                user_avatar: data[i].Users.user_avatar,
                usermedia_name: data[i].UserMedia.usermedia_name,
                toptypeprofile: this.toptypeprofile,
                totalRating: data[i].UserMedia.media_ratings.totalRating,
                user_profile_avatar: data[i].Users.user_profile_avatar,
                mediathumbnailuser: this.mediathumbnailuser,
                userurl: this.userurl,
                artist_id: data[i].Users.user_id,
                mediaplay: data[i].UserMedia.media_url,
                media_type: data[i].UserMedia.usermedia_type,
                usermediaid: data[i].UserMedia.usermedia_id,
                category_image_url: data[i].UserMedia.media_thumbnail_url,
                artforms: this.artformscharts,
                user_url: data[i].UserMedia.usermedia_url,
                rating: data[i].UserMedia.media_ratings.rate,
            });
        }
        return this.latestchart;
    };
    DashboardserviceProvider.prototype.profilerecentcharts = function (data, page) {
        console.log("datarecent", this.sortcatprofile);
        console.log("recentartist", this.recentartist);
        console.log("page" + page);
        // this.recentartist=[]
        if (page == 0) {
            this.recentartist = [];
        }
        if (this.sortcatprofile == 1) {
            this.recentartist = [];
        }
        for (var i = 0; i < data.length; i++) {
            console.log("ee", data[i].UserMedia.media_thumbnail_url);
            // if(data[i].Subsubcategory.subsubcategory_url)
            // {
            // this.userurl1=data[i].Subsubcategory.subsubcategory_url
            // }
            // else if(data[i].Category.category_url)
            // {
            //   if(data[i].Subcategory.subcategory_url)
            //   {
            //  this.userurl1=data[i].Subcategory.subcategory_url
            //   }
            //   else
            //   {
            //  this.userurl1=data[i].Category.category_url
            //   }
            // }
            this.userurl1 = data[i].UserMedia.usermedia_url;
            if (data[i].UserMedia.media_thumbnail_url.indexOf("mp3") > -1 ||
                data[i].UserMedia.media_thumbnail_url.indexOf("MP3") > -1) {
                this.backimage = "assets/Dashboard/thumbnail.png";
            }
            else {
                this.backimage = data[i].UserMedia.media_thumbnail_url;
            }
            if (data[i].Subcategory.subcategory_image) {
                if (data[i].Subsubcategory.subsubcategory_image) {
                    this.recentmediathumbnailuser =
                        data[i].Subsubcategory.subsubcategory_small_image_url;
                }
                else {
                    this.recentmediathumbnailuser =
                        data[i].Subcategory.subcategory_small_image_url;
                }
            }
            else {
                this.recentmediathumbnailuser =
                    data[i].Category.subcategory_small_image_url;
            }
            if (data[i].UserMedia.usermedia_category.names[2]) {
                this.recenttoptypeprofile =
                    data[i].UserMedia.usermedia_category.names[0] +
                        "/" +
                        data[i].UserMedia.usermedia_category.names[1] +
                        "/" +
                        data[i].UserMedia.usermedia_category.names[2];
            }
            else if (data[i].UserMedia.usermedia_category.names[1]) {
                this.recenttoptypeprofile =
                    data[i].UserMedia.usermedia_category.names[0] +
                        "/" +
                        data[i].UserMedia.usermedia_category.names[1];
            }
            else if (data[i].UserMedia.usermedia_category.names[0]) {
                this.recenttoptypeprofile =
                    data[i].UserMedia.usermedia_category.names[0];
            }
            if (data[i].Subcategory.subcategory_name) {
                if (data[i].Subsubcategory.subsubcategory_name) {
                    this.artforms1 =
                        data[i].Category.category_name +
                            "/" +
                            data[i].Subcategory.subcategory_name +
                            "/" +
                            data[i].Subsubcategory.subsubcategory_name;
                }
                else {
                    this.artforms1 =
                        data[i].Category.category_name +
                            "/" +
                            data[i].Subcategory.subcategory_name;
                }
            }
            else {
                this.artforms1 = data[i].Category.category_name;
            }
            //   if(data[i].Subcategory.subcategory_image)
            //   {
            //  if(data[i].Subsubcategory.subsubcategory_image)
            //  {
            //    this.covermediathumbnail=data[i].Subsubcategory.subsubcategory_small_image_url
            //    this.mediathumbnail=data[i].Subsubcategory.subsubcategory_image_url
            //  }
            //  else
            //  {
            //    this.covermediathumbnail=data[i].Subcategory.subcategory_small_image_url
            //    this.mediathumbnail=data[i].Subcategory.subcategory_image_url
            //  }
            //   }
            //   else
            //   {
            //    this.covermediathumbnail=data[i].Category.category_small_image_url
            //    this.mediathumbnail=data[i].Category.category_image_url
            //   }
            this.recentartist.push({
                media_thumbnail_url: this.backimage,
                user_display_name: data[i].Users.user_display_name,
                usermedia_posted: data[i].UserMedia.usermedia_posted,
                user_avatar: data[i].Users.user_avatar,
                usermedia_name: data[i].UserMedia.usermedia_name,
                toptypeprofile: this.recenttoptypeprofile,
                totalRating: data[i].UserMedia.media_ratings.totalAllRating,
                user_profile_avatar: data[i].Users.user_profile_avatar,
                mediathumbnailuser: this.recentmediathumbnailuser,
                userurl: this.userurl1,
                artist_id: data[i].Users.user_id,
                usermediaid: data[i].UserMedia.usermedia_id,
                category_image_url: data[i].UserMedia.media_thumbnail_url,
                artforms: this.artforms1,
                rating: data[i].UserMedia.media_ratings.rate,
                mediaplay: data[i].UserMedia.media_url,
                media_type: data[i].UserMedia.usermedia_type,
            });
        }
        return this.recentartist;
    };
    //  recentdatadublicate(recentdata,mediarating)
    //  {
    // for(var i=0;i<recentdata.length;i++)
    // {
    //   this.postedago=moment(recentdata[i].UserMedia.usermedia_date, "YYYYMMDD").fromNow()
    //  if(recentdata[i].subsubcategory.subsubcategory_image)
    //  {
    //    console.log('recent',recentdata[i].subsubcategory.subsubcategory_image)
    // this.caticon='https://www.demo.artformplatform.com/assets/subsubcategory_icons/'+recentdata[i].subsubcategory.subsubcategory_small_image
    //  }
    //  else if(recentdata[i].subcategory.subcategory_image)
    //  {
    //  console.log('recent',recentdata[i].subcategory.subcategory_image)
    //   this.caticon='https://www.demo.artformplatform.com/assets/subcategory_icons/'+recentdata[i].subcategory.subcategory_small_image
    //  }
    //  else if(recentdata[i].category.category_image)
    //  {
    //    console.log('recent',recentdata[i].category.category_small_image)
    //   this.caticon='https://www.demo.artformplatform.com/assets/category_icons/'+recentdata[i].category.category_small_image
    //  }
    //  if(recentdata[i].subcategory.subcategory_name)
    //  {
    // if(recentdata[i].subsubcategory.subsubcategory_name)
    // {
    // this.artforms=recentdata[i].category.category_name+'/'+recentdata[i].subcategory.subcategory_name+'/'+recentdata[i].subsubcategory.subsubcategory_name
    // }
    // else
    // {
    //   this.artforms=recentdata[i].category.category_name+'/'+recentdata[i].subcategory.subcategory_name
    // }
    //  }
    //  else
    //  {
    //   this.artforms=recentdata[i].category.category_name
    //  }
    // console.log('media',mediarating[i][0].media_rating)
    // if(mediarating[i][0].media_rating)
    // {
    //  this.mediarating=mediarating[i][0].media_rating
    // }
    // else
    // {
    //   this.mediarating=0
    // }
    //  if(recentdata[i].UserMedia.usermedia_type=='image/jpeg')
    //  {
    //   if(recentdata[i].UserMedia.usermedia_path)
    //   {
    //      this.usermedia_path='https://demo.artformplatform.com/'+recentdata[i].UserMedia.usermedia_path
    //   }
    //   else
    //   {
    //      this.usermedia_path='https://er006ogq00-flywheel.netdna-ssl.com/wp-content/uploads/2018/02/default-3.jpg'
    //   }
    //  if(recentdata[i].Users.user_image)
    //  {
    //   this.userprofile='https://www.demo.artformplatform.com/assets/websiteuser/'+recentdata[i].Users.user_image
    //  }
    //  else
    //  {
    //   this.userprofile='assets/tabsicon/propic.jpg'
    //  }
    // this.recentdataarray.push(
    //   {'usermedia_path':this.usermedia_path,
    //    'usermedia_play':'https://demo.artformplatform.com/'+recentdata[i].UserMedia.usermedia_path,
    //     'usermedia_type': recentdata[i].UserMedia.usermedia_type,
    //     'user_image':this.userprofile,
    //     'user_display_name':recentdata[i].Users.user_display_name,
    //     'usermedia_name':recentdata[i].UserMedia.usermedia_name,
    //     'artforms':this.artforms,
    //     'mediarating':this.mediarating,
    //     'caticon':this.caticon,
    //     'postedtime':this.postedago,
    //     'category_id':recentdata[i].UserMedia.category_id
    // })
    // }
    //  else
    //  {
    //   if(recentdata[i].Users.user_image)
    //   {
    //    this.userprofile='https://www.demo.artformplatform.com/assets/websiteuser/'+recentdata[i].Users.user_image
    //   }
    //   else
    //   {
    //    this.userprofile='assets/tabsicon/propic.jpg'
    //   }
    //   if(recentdata[i].UserMedia.video_thumbnail)
    //   {
    //      this.usermedia_path='https://demo.artformplatform.com/'+recentdata[i].UserMedia.video_thumbnail
    //   }
    //   else
    //   {
    //      this.usermedia_path='https://er006ogq00-flywheel.netdna-ssl.com/wp-content/uploads/2018/02/default-3.jpg'
    //   }
    //   var str=recentdata[i].UserMedia.usermedia_path
    //   var n=str.search('youtube')
    //   console.log('pika'+n)
    //   if(n==-1)
    //   {
    //     this.usermedia_play='https://demo.artformplatform.com/'+recentdata[i].UserMedia.usermedia_path
    //   }
    //   else
    //   {
    //     this.usermedia_play=recentdata[i].UserMedia.usermedia_path
    //   }
    //   this.recentdataarray.push(
    //     {'usermedia_path':this.usermedia_path,
    //     'usermedia_play':this.usermedia_play,
    //     'usermedia_type':recentdata[i].UserMedia.usermedia_type,
    //     'user_image':this.userprofile,
    //     'user_display_name':recentdata[i].Users.user_display_name,
    //     'usermedia_name':recentdata[i].UserMedia.usermedia_name,
    //     'artforms':this.artforms,
    //     'mediarating':this.mediarating,
    //     'caticon':this.caticon,
    //     'postedtime':this.postedago,
    //     'category_id':recentdata[i].UserMedia.category_id
    //   })
    //  }
    // }
    // this.dublicaterecentdataarray=this.recentdataarray
    // console.log(this.dublicaterecentdataarray)
    //  }
    DashboardserviceProvider.prototype.sortcat = function (id) {
        console.log("----", this.dublicaterecentdataarray);
        this.recentdataarray = [];
        console.log(this.recentdataarray);
        for (var i = 0; i < this.dublicaterecentdataarray.length; i++) {
            if (this.dublicaterecentdataarray[i].category_id == id) {
                this.recentdataarray.push({
                    category_image_url: this.dublicaterecentdataarray[i]
                        .category_image_url,
                    user_avatar: this.dublicaterecentdataarray[i].user_avatar,
                    small_image_url: this.dublicaterecentdataarray[i].small_image_url,
                    user_display_name: this.dublicaterecentdataarray[i].user_display_name,
                    usermedia_posted: this.dublicaterecentdataarray[i].usermedia_posted,
                    usermedia_name: this.dublicaterecentdataarray[i].usermedia_name,
                    rating: this.dublicaterecentdataarray[i].rating,
                    artforms: this.dublicaterecentdataarray[i].artforms,
                    mediaplay: this.dublicaterecentdataarray[i].mediaplay,
                    media_type: this.dublicaterecentdataarray[i].media_type,
                    usermediaid: this.dublicaterecentdataarray[i].usermediaid,
                    user_url: this.dublicaterecentdataarray[i].user_url,
                    totalrating: this.dublicaterecentdataarray[i].totalrating,
                });
            }
        }
        console.log("hope", this.recentdataarray);
    };
    DashboardserviceProvider.prototype.topperformers = function (topperformersdata) {
        this.topperformersdata = [];
        for (var i = 0; i < topperformersdata.length; i++) {
            if (topperformersdata[i].Subcategory.subcategory_image) {
                if (topperformersdata[i].Subsubcategory.subsubcategory_image) {
                    this.covermediathumbnail =
                        topperformersdata[i].Subsubcategory.subsubcategory_small_image_url;
                    this.mediathumbnail =
                        topperformersdata[i].Subsubcategory.subsubcategory_image_url;
                }
                else {
                    this.covermediathumbnail =
                        topperformersdata[i].Subcategory.subcategory_small_image_url;
                    this.mediathumbnail =
                        topperformersdata[i].Subcategory.subcategory_image_url;
                }
            }
            else {
                this.covermediathumbnail =
                    topperformersdata[i].Category.category_small_image_url;
                this.mediathumbnail = topperformersdata[i].Category.category_image_url;
            }
            if (topperformersdata[i].UserMedia.usermedia_category.names[2]) {
                this.toptype =
                    topperformersdata[i].UserMedia.usermedia_category.names[0] +
                        "/" +
                        topperformersdata[i].UserMedia.usermedia_category.names[1] +
                        "/" +
                        topperformersdata[i].UserMedia.usermedia_category.names[2];
            }
            else if (topperformersdata[i].UserMedia.usermedia_category.names[1]) {
                this.toptype =
                    topperformersdata[i].UserMedia.usermedia_category.names[0] +
                        "/" +
                        topperformersdata[i].UserMedia.usermedia_category.names[1];
            }
            else {
                this.toptype =
                    topperformersdata[i].UserMedia.usermedia_category.names[0];
            }
            console.log("---" + this.toptype);
            console.log("--topperformers" + topperformersdata[i].Users.user_image);
            if (topperformersdata[i].Users.user_image) {
                this.user_avatartop = topperformersdata[i].Users.user_avatar;
            }
            else {
                this.user_avatartop =
                    "https://www.demo.artformplatform.com/images/user-comment.png";
            }
            this.totalrating =
                topperformersdata[i].UserMedia.media_ratings.totalAllRating;
            this.rate = topperformersdata[i].UserMedia.media_ratings.rateAll;
            if (topperformersdata[i].UserMedia.usermedia_type == "image/jpeg") {
                this.topperformersdata.push({
                    // 'usermedia_path':this.mediathumbnail,
                    usermedia_path: topperformersdata[i].UserMedia.media_thumbnail_url,
                    user_display_name: topperformersdata[i].Users.user_display_name,
                    user_avatar: this.user_avatartop,
                    usermedia_name: topperformersdata[i].UserMedia.usermedia_name,
                    toptype: this.toptype,
                    totalrating: this.totalrating,
                    media_thumbnail_url: topperformersdata[i].UserMedia.media_url,
                    usermedia_type: topperformersdata[i].UserMedia.usermedia_type,
                    user_image: topperformersdata[i].Users.user_image,
                    artist_id: topperformersdata[i].Users.user_id,
                    rate: this.rate,
                    usermedia_id: topperformersdata[i].UserMedia.usermedia_id,
                    usermedia_url: topperformersdata[i].UserMedia.usermedia_url,
                    covermediathumbnail: this.covermediathumbnail,
                });
            }
            else {
                this.topperformersdata.push({
                    // 'usermedia_path':this.mediathumbnail,
                    usermedia_path: topperformersdata[i].UserMedia.media_thumbnail_url,
                    user_display_name: topperformersdata[i].Users.user_display_name,
                    user_avatar: topperformersdata[i].Users.user_avatar,
                    usermedia_name: topperformersdata[i].UserMedia.usermedia_name,
                    toptype: this.toptype,
                    totalrating: this.totalrating,
                    media_thumbnail_url: topperformersdata[i].UserMedia.media_url,
                    usermedia_type: topperformersdata[i].UserMedia.usermedia_type,
                    artist_id: topperformersdata[i].Users.user_id,
                    rate: this.rate,
                    usermedia_id: topperformersdata[i].UserMedia.usermedia_id,
                    usermedia_url: topperformersdata[i].UserMedia.usermedia_url,
                    covermediathumbnail: this.covermediathumbnail,
                });
            }
        }
        console.log("ss", this.topperformersdata);
    };
    DashboardserviceProvider.prototype.recentdata = function (mediadata) {
        for (var i = 0; i < mediadata.length; i++) {
            if (mediadata[i].UserMedia.media_thumbnail_url !=
                "https://www.demo.artformplatform.com/files/373/6139-3460-1486638426.jpg") {
                console.log("mediatype", mediadata[i].UserMedia.usermedia_type);
                if (mediadata[i].UserMedia.usermedia_type != "audio/mpeg" &&
                    mediadata[i].UserMedia.usermedia_type != "audio/mp3") {
                    this.displaythumbnail = mediadata[i].UserMedia.media_thumbnail_url;
                    console.log("--", this.displaythumbnail);
                }
                //  else if(mediadata[i].UserMedia.usermedia_type=='audio/mpeg')
                //  {
                //   this.displaythumbnail='assets/Dashboard/thumbnail.png'
                //   console.log('hello',this.displaythumbnail)
                //  }
                //  else if( mediadata[i].UserMedia.usermedia_type=='audio/mp3')
                //  {
                //   this.displaythumbnail='assets/Dashboard/thumbnail.png'
                //   console.log('hello22',this.displaythumbnail)
                //  }
            }
            else {
                this.displaythumbnail = "assets/Dashboard/thumbnail.png";
            }
            if (mediadata[i].Users.user_avatar ==
                "https://www.demo.artformplatform.com/assets/websiteuser/") {
                this.user_avatar =
                    "https://www.demo.artformplatform.com/images/user-comment.png";
            }
            else {
                this.user_avatar = mediadata[i].Users.user_avatar;
            }
            if (mediadata[i].Subsubcategory.subsubcategory_image) {
                this.caticon =
                    "https://www.demo.artformplatform.com/assets/subsubcategory_icons/" +
                        mediadata[i].Subsubcategory.subsubcategory_small_image;
            }
            else if (mediadata[i].Subcategory.subcategory_image) {
                this.caticon =
                    "https://www.demo.artformplatform.com/assets/subcategory_icons/" +
                        mediadata[i].Subcategory.subcategory_small_image;
            }
            else if (mediadata[i].Category.category_image) {
                this.caticon =
                    "https://www.demo.artformplatform.com/assets/category_icons/" +
                        mediadata[i].Category.category_small_image;
            }
            if (mediadata[i].Users.user_display_name == " ") {
                this.userdisplayimage = "unknown";
            }
            else {
                this.userdisplayimage = mediadata[i].Users.user_display_name;
            }
            if (mediadata[i].Subcategory.subcategory_name) {
                if (mediadata[i].Subsubcategory.subsubcategory_name) {
                    this.artforms =
                        mediadata[i].Category.category_name +
                            "/" +
                            mediadata[i].Subcategory.subcategory_name +
                            "/" +
                            mediadata[i].Subsubcategory.subsubcategory_name;
                }
                else {
                    this.artforms =
                        mediadata[i].Category.category_name +
                            "/" +
                            mediadata[i].Subcategory.subcategory_name;
                }
            }
            else {
                this.artforms = mediadata[i].Category.category_name;
            }
            this.recentdataarray.push({
                // category_image_url:this.displaythumbnail,
                category_image_url: mediadata[i].UserMedia.media_thumbnail_url,
                user_avatar: this.user_avatar,
                small_image_url: this.caticon,
                user_display_name: this.userdisplayimage,
                usermedia_posted: mediadata[i].UserMedia.usermedia_posted,
                usermedia_name: mediadata[i].UserMedia.usermedia_name,
                rating: mediadata[i].UserMedia.media_ratings.rateAll,
                artforms: this.artforms,
                mediaplay: mediadata[i].UserMedia.media_url,
                media_type: mediadata[i].UserMedia.usermedia_type,
                category_id: mediadata[i].UserMedia.category_id,
                artist_id: mediadata[i].Users.user_id,
                usermediaid: mediadata[i].UserMedia.usermedia_id,
                user_url: mediadata[i].UserMedia.usermedia_url,
                totalrating: mediadata[i].UserMedia.media_ratings.totalAllRating,
            });
        }
        console.log("hopedata" + this.recentdataarray);
        this.dublicaterecentdataarray = this.recentdataarray;
    };
    DashboardserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DashboardserviceProvider);
    return DashboardserviceProvider;
}());

//# sourceMappingURL=dashboardservice.js.map

/***/ })

},[403]);
//# sourceMappingURL=main.js.map
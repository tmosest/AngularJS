"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var video_service_1 = require("./video.service");
var ProgressComponent = (function () {
    function ProgressComponent(videoService) {
        this.videoService = videoService;
    }
    ProgressComponent = __decorate([
        core_1.Component({
            selector: 'video-progress',
            template: "\n    \t<div id=\"progressMeterFull\" \n    \t\t(click)=\"videoService.seekVideo($event)\"\n    \t>\n    \t\t<div id=\"progressMeter\" \n    \t\t\t(click)=\"videoService.seekVideo($event)\"\n    \t\t\t[style.width.px]=\"videoService.calculatedWidth\"\n    \t\t>\n    \t\t</div>\n\t\t</div>\n\t\t<div id=\"thumbScrubber\" \n\t\t\t(mousedown)=\"videoService.dragStart($event)\"\n\t\t\t[style.top.px]=\"videoService.calculatedScrubY - 2\" [style.left.px]=\"videoService.calculatedWidth\"></div>\n\t"
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], ProgressComponent);
    return ProgressComponent;
}());
exports.ProgressComponent = ProgressComponent;
//# sourceMappingURL=progress.component.js.map
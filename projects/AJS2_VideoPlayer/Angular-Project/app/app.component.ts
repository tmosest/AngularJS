import {Component, OnInit} from '@angular/core';
import {ProgressComponent} from './progress.component';
import {ToolbarComponent} from './toolbar.component';
import {OptionsComponent} from './options.components';
import {VideoService} from './video.service';

@Component({
    selector: 'video-app',
    template: `
        <div id="fullPlayer" 
          (mouseup)="videoService.dragStop($event)" 
          (mousemove)="videoService.dragMove($event)" 
          (mouseleave)="videoService.dragStop($event)">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" (click)="videoService.playVideo()" width="100%" height="100%" src="{{videoService.currentPath}}" class="embed-responsive-item"></video>
              <div id="bigPlayButton" 
              [ngClass]="{'fade-out':videoService.isPlaying}" class="fader"
              (click)="videoService.playVideo()"><i class="fa fa-play"></i></div>
              <div id="videoTitle" 
              [ngClass]="{'fade-out':videoService.isPlaying}" class="fader"
              >{{videoService.currentTitle}}</div>
              <video-options [ngClass]="{'fade-out':!videoService.showDetails}" class="fader"></video-options>
          </div>
          <video-progress></video-progress>
          <video-toolbar></video-toolbar>
        </div>
    `,
    directives: [ProgressComponent, ToolbarComponent, OptionsComponent],
    providers: [VideoService]
})
export class AppComponent implements OnInit {
    constructor(public videoService:VideoService) {}
    ngOnInit() {
        this.videoService.appSetup("videoDisplay");
        this.videoService.gatherJSON();
    }
}

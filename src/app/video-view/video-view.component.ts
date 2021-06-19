import { Component, OnInit } from '@angular/core';

import { VideoPlayerService } from '../services/video-player.service';
import { Subscription } from 'rxjs';

import { Video } from '../models/video';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css'],
})
export class VideoViewComponent implements OnInit {
  title: string = 'View Video';

  playVideo: boolean = false;

  constructor(
    public video: Video,
    public videoPlayerService: VideoPlayerService,
    private subscription: Subscription
  ) {
    /* this.videoPlayerService.playedVideo.subscribe((video) => {
      this.video = video;
      this.playVideo = true;
    }); */
  }

  ngOnInit() {
    this.subscription = this.videoPlayerService.playedVideo.subscribe(
      (video) => (this.video = video)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from './models/video';
import { VideoPlayerService } from './services/video-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Video Viewer App';

  constructor(
    public video: Video,
    private videoPlayerService: VideoPlayerService,
    private subscription: Subscription
  ) {}

  ngOnInit() {
    this.subscription = this.videoPlayerService.playedVideo.subscribe(
      (video) => (this.video = video)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, Inject } from '@angular/core';
import { LOCAL_STORAGE } from 'ngx-webstorage-service';

import { Video } from './models/video';
import { VideoPersistService } from './video-persist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VideoPersistService],
})
export class AppComponent {
  title = 'Video Viewer App';

  video: Video = { url: '', urlId: '' };
  history: Array<Video> = [];

  constructor(
    @Inject(LOCAL_STORAGE) private videoPersistService: VideoPersistService
  ) {}

  private isHistorized(video: Video): boolean {
    return this.history.filter((v) => v.urlId === video.urlId).length > 0;
  }

  receiveSearchedVideo($event: Video) {
    console.log('event value: ', $event);
    if ($event) {
      this.video = $event;
      const historyVideo = { ...this.video };
      console.log('isHistorized: ', this.isHistorized(historyVideo));
      if (!this.isHistorized(historyVideo)) {
        this.history.push(historyVideo);
        //this.videoPersistService.saveVideoHistory(this.history);
      }
    }
  }

  receiveHistorizedVideo($event: Video) {
    console.log('event value: ', $event);
    if ($event) {
      this.video = $event;
    }
  }

  ngOnInit(): void {
    //this.history = this.videoPersistService.getVideoHistory();
  }
}

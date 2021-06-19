import { Component } from '@angular/core';

import { Video } from './models/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Video Viewer App';

  video: Video = { url: '', urlId: '', played: false };
  history: Array<Video> = [];

  receivePlayedVideo($event: Video) {
    console.log('event value: ', $event);
    if ($event) {
      this.video = $event;
      const historyVideo = { ...this.video };
      this.history.push(historyVideo);
    }
  }
}

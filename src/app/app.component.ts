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

  receivePlayedVideo($event: string) {
    console.log('event value: ' + $event);
    this.video.urlId = $event;
  }
}

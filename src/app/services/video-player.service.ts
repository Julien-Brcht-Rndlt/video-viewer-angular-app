import { Injectable } from '@angular/core';
import { Video } from '../models/video';
//import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoPlayerService {
  constructor(private video: Video) {}

  public announcePlayingVideo(): Video {
    return this.video;
  }

  public registerPlayingVideo(video: Video) {
    this.video = video;
  }
}

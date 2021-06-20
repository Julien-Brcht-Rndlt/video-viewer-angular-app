import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root',
})
export class VideoPlayerService {
  constructor(public video: Video) {}

  public getPlayingVideo(): Video {
    return this.video;
  }
}

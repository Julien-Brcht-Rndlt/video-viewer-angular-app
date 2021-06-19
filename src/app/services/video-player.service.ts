import { Injectable } from '@angular/core';
import { Video } from '../models/video';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoPlayerService {
  constructor(private video: Video) {}

  // Observable sources
  private playedVideoSource = new BehaviorSubject<Video>(this.video);
  // Observable streams
  playedVideo = this.playedVideoSource.asObservable();

  announcePlayingVideo(video: Video) {
    this.playedVideoSource.next(video);
  }
}

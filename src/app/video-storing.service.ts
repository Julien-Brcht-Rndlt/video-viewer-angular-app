import { Injectable } from '@angular/core';

import { Video } from './models/video';

@Injectable({
  providedIn: 'root',
})
export class VideoStoringService {
  constructor() {}

  getVideoHistory(): Array<Video> {
    return [];
  }

  getVideoBoomarks(): Array<Video> {
    return [];
  }
}

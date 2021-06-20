import { Injectable } from '@angular/core';

import { Video } from './models/video';

@Injectable(/* {
  providedIn: 'root',
} */)
export class VideoPersistService {
  constructor(public localStorage: Storage) {
    this.localStorage = window.localStorage;
  }

  private getVideos(key: string) {
    let videos: Array<Video> = [];
    if (this.localStorage) {
      videos = JSON.parse(this.localStorage.getItem(key) || '{}');
    }
    return videos;
  }

  private setVideos(key: string, videos: Array<Video>) {
    if (this.localStorage) {
      this.localStorage.setItem(key, JSON.stringify(videos));
      return true;
    }
    return false;
  }

  private removeVideos(key: string): boolean {
    if (this.localStorage) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }

  getVideoHistory(): Array<Video> {
    return this.getVideos('history');
  }

  saveVideoHistory(videos: Array<Video>) {
    return this.setVideos('history', videos);
  }

  removeVideoHistory(): boolean {
    return this.removeVideos('history');
  }

  getVideoBoomarks(): Array<Video> {
    return this.getVideos('bookmarks');
  }

  saveVideoBoomarks(videos: Array<Video>) {
    return this.setVideos('bookmarks', videos);
  }

  removeVideoBookmarks(): boolean {
    return this.removeVideos('bookmarks');
  }
}

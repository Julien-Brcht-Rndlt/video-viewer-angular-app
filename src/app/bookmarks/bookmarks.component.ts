import { Component, Input, OnInit } from '@angular/core';

import { Video } from '../models/video';

import { VideoPersistService } from '../video-persist.service';

@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  title: string = 'Your Bookmarks';
  label: string = 'Bookmarks +';

  show: boolean = false;

  bookmarks: Array<Video> = [];

  constructor(/* private videoPersistService: VideoPersistService */) {}

  @Input()
  playingVideo: Video = { url: '', urlId: '', played: false };

  private isBookmarked(video: Video): boolean {
    return this.bookmarks.filter((v) => v.urlId === video.urlId).length > 0;
  }

  bookmark() {
    console.log('isBookmarked', this.isBookmarked(this.playingVideo));
    if (this.playingVideo && !this.isBookmarked(this.playingVideo)) {
      this.bookmarks.push({ ...this.playingVideo });
      console.log('bookmarks', this.bookmarks);
      /*  this.videoPersistService.saveVideoBoomarks(this.bookmarks); */
    }
  }

  showBookmarks() {
    this.show = true;
  }

  getTotalBookmarks() {
    return this.bookmarks.length;
  }

  getVideoBookmarks() {
    /* this.bookmarks = this.videoPersistService.getVideoBoomarks(); */
  }

  ngOnInit(): void {
    this.getVideoBookmarks();
  }
}

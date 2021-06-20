import { Component, Input, OnInit } from '@angular/core';

import { Video } from '../models/video';

import { VideoStoringService } from '../video-storing.service';

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

  constructor(private videoStoringService: VideoStoringService) {}

  @Input()
  playingVideo: Video = { url: '', urlId: '', played: false };

  bookmark() {
    if (this.playingVideo) {
      this.bookmarks.push({ ...this.playingVideo });
      console.log('bookmarks', this.bookmarks);
    }
  }

  showBookmarks() {
    this.show = true;
  }

  getVideoBookmarks() {
    this.bookmarks = this.videoStoringService.getVideoBoomarks();
  }

  ngOnInit(): void {
    this.getVideoBookmarks();
  }
}

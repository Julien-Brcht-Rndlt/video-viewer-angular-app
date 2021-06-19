import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Video } from '../models/video';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  title: string = 'Search Bar';
  label: string = 'search for your video:';

  video: Video = { url: '', played: false };

  @Output()
  videoChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendDataToParent() {
    this.videoChange.emit(this.video.url);
  }

  search(): void {
    console.log(this.video);
    console.log(`search video ${this.video.url} to display`);
    this.sendDataToParent();
  }
}

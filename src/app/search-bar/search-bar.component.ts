import { Component, OnInit } from '@angular/core';

import { Video } from '../models/video';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  title: string = 'Search Bar';
  label: string = 'search for your video:';

  video: Video = new Video('');

  constructor() {}

  ngOnInit(): void {}

  search(): void {
    console.log(this.video);
    console.log(`search video ${this.video.url} to display`);
  }
}

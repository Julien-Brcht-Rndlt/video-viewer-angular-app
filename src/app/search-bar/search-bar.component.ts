import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';

import { Video } from '../models/video';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  title: string = 'Search Bar';
  label: string = 'search for your video:';

  video: Video = { url: '', urlId: '' };

  @Output()
  videoChange: EventEmitter<Video> = new EventEmitter<Video>();

  @ViewChild('url') inputName: any;

  constructor() {}

  ngOnInit(): void {}

  parseUrlIdFromYoutubeUrl(url: string) {
    //https://www.youtube.com/watch?v=AaASF6E4uU0
    const idStart = url.indexOf('watch?v=') + 'watch?v='.length;
    const urlId = url.slice(idStart, url.length);
    return urlId;
  }

  sendDataToParent() {
    this.video.urlId = this.parseUrlIdFromYoutubeUrl(this.video.url);
    console.log(`video urlId ${this.video.urlId}`);
    this.videoChange.emit(this.video);
  }

  search(): void {
    console.log(this.video);
    console.log(`search video ${this.video.url} to display`);
    this.sendDataToParent();
    this.inputName.nativeElement.value = '';
  }
}

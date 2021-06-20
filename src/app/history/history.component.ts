import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  title: string = 'History List';

  constructor() {}

  @Input()
  videoHistory: Array<Video> = [];

  @Output()
  videoChange: EventEmitter<Video> = new EventEmitter<Video>();

  sendDataToParent(video: Video) {
    console.log('sending to parent', video.url);
    this.videoChange.emit(video);
  }

  play(video: Video) {
    //event.preventDefault();
    console.log('selected video', video);
    this.sendDataToParent(video);
  }

  ngOnInit(): void {}
}

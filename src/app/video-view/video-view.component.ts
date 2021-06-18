import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css'],
})
export class VideoViewComponent implements OnInit {
  title: string = 'View Video';

  hasUrl: boolean = false;
  url = '';

  constructor() {}

  ngOnInit(): void {}
}

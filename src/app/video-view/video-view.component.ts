import { Component, OnInit, Input } from '@angular/core';
//import { YouTubePlayer } from '@angular/youtube-player';

import { Video } from '../models/video';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css'],
})
export class VideoViewComponent implements OnInit {
  title: string = 'View Video';

  /* hasUrl: boolean = false;
  url = ''; */

  video: Video = { url: '', played: false };

  @Input()
  urlVideo: string = '';

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

import { VideoPlayerService } from '../services/video-player.service';

import { Video } from '../models/video';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  title: string = 'Search Bar';
  label: string = 'search for your video:';

  constructor(
    public video: Video,
    public videoPlayerService: VideoPlayerService
  ) {}

  ngOnInit(): void {}

  search(): void {
    console.log(this.video);
    console.log(`search video ${this.video.url} to display`);
    this.video.playVideo = true;
    this.videoPlayerService.announcePlayingVideo(this.video);
    console.log(`register to service player current played video`);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { VideoViewComponent } from '../video-view/video-view.component';

@NgModule({
  imports: [CommonModule, YouTubePlayerModule],
  declarations: [VideoViewComponent],
  exports: [VideoViewComponent],
})
export class VideoPlayerModule {}

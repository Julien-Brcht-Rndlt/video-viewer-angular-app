import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { VideoPersistService } from './video-persist.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoViewComponent,
    HistoryComponent,
    BookmarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    StorageServiceModule,
  ],
  providers: [VideoPersistService],
  bootstrap: [AppComponent],
})
export class AppModule {}

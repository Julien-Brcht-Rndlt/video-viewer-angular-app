import { TestBed } from '@angular/core/testing';

import { VideoStoringService } from './video-storing.service';

describe('VideoStoringService', () => {
  let service: VideoStoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoStoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

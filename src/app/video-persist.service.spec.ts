import { TestBed } from '@angular/core/testing';

import { VideoPersistService } from './video-persist.service';

describe('VideoPersistService', () => {
  let service: VideoPersistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPersistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

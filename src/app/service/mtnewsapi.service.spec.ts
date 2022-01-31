import { TestBed } from '@angular/core/testing';

import { MtnewsapiService } from './mtnewsapi.service';

describe('MtnewsapiService', () => {
  let service: MtnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

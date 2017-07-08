import { TestBed, inject } from '@angular/core/testing';

import { RiotApiService } from './riot-api.service';

describe('RiotApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiotApiService]
    });
  });

  it('should be created', inject([RiotApiService], (service: RiotApiService) => {
    expect(service).toBeTruthy();
  }));
});

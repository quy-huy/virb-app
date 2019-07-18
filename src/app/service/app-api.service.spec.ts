import { TestBed } from '@angular/core/testing';

import { AppApiService } from './app-api.service';

describe('AppApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppApiService = TestBed.get(AppApiService);
    expect(service).toBeTruthy();
  });
});

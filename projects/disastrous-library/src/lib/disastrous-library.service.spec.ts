import { TestBed } from '@angular/core/testing';

import { DisastrousLibraryService } from './disastrous-library.service';

describe('DisastrousLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisastrousLibraryService = TestBed.get(DisastrousLibraryService);
    expect(service).toBeTruthy();
  });
});

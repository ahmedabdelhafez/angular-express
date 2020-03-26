import { TestBed } from '@angular/core/testing';

import { ErrorhandlerService } from './errorhandler.service';

describe('ErrorhandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorhandlerService = TestBed.get(ErrorhandlerService);
    expect(service).toBeTruthy();
  });
});

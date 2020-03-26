/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadingSpinnerService } from './loading-spinner.service';

describe('Service: LoadingSpinner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingSpinnerService]
    });
  });

  it('should ...', inject([LoadingSpinnerService], (service: LoadingSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});

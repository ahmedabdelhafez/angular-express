/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpDataServiceService } from './HttpDataService.service';

describe('Service: HttpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpDataServiceService]
    });
  });

  it('should ...', inject([HttpDataServiceService], (service: HttpDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});

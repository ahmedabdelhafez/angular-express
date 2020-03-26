/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpConfigService } from './httpConfig.service';

describe('Service: HttpConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpConfigService]
    });
  });

  it('should ...', inject([HttpConfigService], (service: HttpConfigService) => {
    expect(service).toBeTruthy();
  }));
});

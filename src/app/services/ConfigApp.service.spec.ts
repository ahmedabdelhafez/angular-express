/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfigAppService } from './ConfigApp.service';

describe('Service: ConfigApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigAppService]
    });
  });

  it('should ...', inject([ConfigAppService], (service: ConfigAppService) => {
    expect(service).toBeTruthy();
  }));
});

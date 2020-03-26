import { TestBed, async, inject } from '@angular/core/testing';

import { CanactiveatechildGuard } from './canactiveatechild.guard';

describe('CanactiveatechildGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactiveatechildGuard]
    });
  });

  it('should ...', inject([CanactiveatechildGuard], (guard: CanactiveatechildGuard) => {
    expect(guard).toBeTruthy();
  }));
});

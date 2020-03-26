import { TestBed, async, inject } from '@angular/core/testing';

import { CanactiveateGuard } from './canactiveate.guard';

describe('CanactiveateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactiveateGuard]
    });
  });

  it('should ...', inject([CanactiveateGuard], (guard: CanactiveateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

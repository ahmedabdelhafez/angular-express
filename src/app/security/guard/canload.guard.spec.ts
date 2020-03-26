import { TestBed, async, inject } from '@angular/core/testing';

import { CanloadGuard } from './canload.guard';

describe('CanloadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanloadGuard]
    });
  });

  it('should ...', inject([CanloadGuard], (guard: CanloadGuard) => {
    expect(guard).toBeTruthy();
  }));
});

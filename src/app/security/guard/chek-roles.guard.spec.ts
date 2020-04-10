import { TestBed, async, inject } from '@angular/core/testing';

import { ChekRolesGuard } from './chek-roles.guard';

describe('ChekRolesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChekRolesGuard]
    });
  });

  it('should ...', inject([ChekRolesGuard], (guard: ChekRolesGuard) => {
    expect(guard).toBeTruthy();
  }));
});

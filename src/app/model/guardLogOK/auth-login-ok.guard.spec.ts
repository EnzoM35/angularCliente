import { TestBed } from '@angular/core/testing';

import { AuthLoginOKGuard } from '../guardLogOK/auth-login-ok.guard';

describe('AuthLoginOKGuard', () => {
  let guard: AuthLoginOKGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLoginOKGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

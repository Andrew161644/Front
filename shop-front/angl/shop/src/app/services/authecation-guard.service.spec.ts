import { TestBed } from '@angular/core/testing';

import { AuthecationGuardService } from './authecation-guard.service';

describe('AuthecationGuardService', () => {
  let service: AuthecationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthecationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

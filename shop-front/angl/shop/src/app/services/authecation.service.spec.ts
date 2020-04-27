import { TestBed } from '@angular/core/testing';

import { AuthecationService } from './authecation.service';

describe('AuthecationService', () => {
  let service: AuthecationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthecationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

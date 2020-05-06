import { TestBed } from '@angular/core/testing';

import { PassvaultService } from './passvault.service';

describe('PassvaultService', () => {
  let service: PassvaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassvaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

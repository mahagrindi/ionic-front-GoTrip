import { TestBed } from '@angular/core/testing';

import { IntrestsService } from './intrests.service';

describe('IntrestsService', () => {
  let service: IntrestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntrestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

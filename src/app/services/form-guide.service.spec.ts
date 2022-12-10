import { TestBed } from '@angular/core/testing';

import { FormGuideService } from './form-guide.service';

describe('FormGuideService', () => {
  let service: FormGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ChuteService } from './chute.service';

describe('ChuteService', () => {
  let service: ChuteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

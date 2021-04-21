import { TestBed } from '@angular/core/testing';

import { DefesaService } from './defesa.service';

describe('DefesaService', () => {
  let service: DefesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

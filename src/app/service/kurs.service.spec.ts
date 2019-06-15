import { TestBed } from '@angular/core/testing';

import { KursService } from './kurs.service';

describe('KursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KursService = TestBed.get(KursService);
    expect(service).toBeTruthy();
  });
});

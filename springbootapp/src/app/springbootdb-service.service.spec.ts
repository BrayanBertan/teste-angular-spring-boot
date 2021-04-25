import { TestBed } from '@angular/core/testing';

import { SpringbootdbServiceService } from './springbootdb-service.service';

describe('SpringbootdbServiceService', () => {
  let service: SpringbootdbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringbootdbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

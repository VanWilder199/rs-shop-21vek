import { TestBed } from '@angular/core/testing';

import { HttpItemsCategoriesService } from './http-items-categories.service';

describe('HttpItemsCategoriesService', () => {
  let service: HttpItemsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpItemsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

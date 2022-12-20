import { TestBed } from '@angular/core/testing';

import { UpdateMoviesService } from './update-movies.service';

describe('UpdateMoviesService', () => {
  let service: UpdateMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

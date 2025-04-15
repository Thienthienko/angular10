import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('TestService', () => {
  let service: TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });

    service = TestBed.inject(TestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch data from API', () => {
    service.getData().subscribe(data => {
      expect(data).toEqual({ id: 1, name: 'Test' });
    });

    const req = httpMock.expectOne('https://api.example.com/data');
    expect(req.request.method).toBe('GET');
    req.flush({ id: 1, name: 'Test' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

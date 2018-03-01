import { TestBed, inject } from '@angular/core/testing';

import { ProductFactoryserviceService } from './product-factory.service';

describe('ProductFactoryserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFactoryserviceService]
    });
  });

  it('should be created', inject([ProductFactoryserviceService], (service: ProductFactoryserviceService) => {
    expect(service).toBeTruthy();
  }));
});

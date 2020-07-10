import { TestBed } from '@angular/core/testing';

import { ProductManagmentService } from './product-managment.service';

describe('ProductManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductManagmentService = TestBed.get(ProductManagmentService);
    expect(service).toBeTruthy();
  });
});

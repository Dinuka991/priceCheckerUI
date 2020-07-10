import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCheckerComponent } from './price-checker.component';

describe('CreateEmployeeComponent', () => {
  let component: PriceCheckerComponent;
  let fixture: ComponentFixture<PriceCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

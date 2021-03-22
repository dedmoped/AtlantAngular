import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKepeerComponent } from './store-kepeer.component';

describe('StoreKepeerComponent', () => {
  let component: StoreKepeerComponent;
  let fixture: ComponentFixture<StoreKepeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreKepeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreKepeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

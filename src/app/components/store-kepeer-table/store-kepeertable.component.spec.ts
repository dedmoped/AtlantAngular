import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKepeertableComponent } from './store-kepeertable.component';

describe('StoreKepeertableComponent', () => {
  let component: StoreKepeertableComponent;
  let fixture: ComponentFixture<StoreKepeertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreKepeertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreKepeertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

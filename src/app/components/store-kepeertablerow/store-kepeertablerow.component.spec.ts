import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKepeertablerowComponent } from './store-kepeertablerow.component';

describe('StoreKepeertablerowComponent', () => {
  let component: StoreKepeertablerowComponent;
  let fixture: ComponentFixture<StoreKepeertablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreKepeertablerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreKepeertablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

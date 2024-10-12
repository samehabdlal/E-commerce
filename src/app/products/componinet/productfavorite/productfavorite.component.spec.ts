import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfavoriteComponent } from './productfavorite.component';

describe('ProductfavoriteComponent', () => {
  let component: ProductfavoriteComponent;
  let fixture: ComponentFixture<ProductfavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductfavoriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductfavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

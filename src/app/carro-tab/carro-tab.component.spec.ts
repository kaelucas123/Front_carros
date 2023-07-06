import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroTabComponent } from './carro-tab.component';

describe('CarroTabComponent', () => {
  let component: CarroTabComponent;
  let fixture: ComponentFixture<CarroTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroTabComponent]
    });
    fixture = TestBed.createComponent(CarroTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

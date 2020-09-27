import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarDataComponent } from './cargar-data.component';

describe('CargarDataComponent', () => {
  let component: CargarDataComponent;
  let fixture: ComponentFixture<CargarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

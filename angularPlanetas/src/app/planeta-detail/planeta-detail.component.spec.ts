import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaDetailComponent } from './planeta-detail.component';

describe('PlanetaDetailComponent', () => {
  let component: PlanetaDetailComponent;
  let fixture: ComponentFixture<PlanetaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

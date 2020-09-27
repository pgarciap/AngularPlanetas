import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasViewComponent } from './planetas-view.component';

describe('PlanetasViewComponent', () => {
  let component: PlanetasViewComponent;
  let fixture: ComponentFixture<PlanetasViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

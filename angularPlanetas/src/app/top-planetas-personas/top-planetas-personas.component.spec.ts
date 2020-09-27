import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlanetasPersonasComponent } from './top-planetas-personas.component';

describe('TopPlanetasPersonasComponent', () => {
  let component: TopPlanetasPersonasComponent;
  let fixture: ComponentFixture<TopPlanetasPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPlanetasPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlanetasPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

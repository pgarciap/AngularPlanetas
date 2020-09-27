import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CargarDataComponent } from './cargar-data/cargar-data.component';
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';
import { PersonasViewComponent } from './personas-view/personas-view.component';
import { PlanetaDetailComponent } from './planeta-detail/planeta-detail.component';
import { PlanetasViewComponent } from './planetas-view/planetas-view.component';
import { TopPlanetasPersonasComponent } from './top-planetas-personas/top-planetas-personas.component';

const routes: Route[] = [
  
  {path: 'personasView', component: PersonasViewComponent },
  {path: 'planetasView', component: PlanetasViewComponent},
  {path: 'personaDetail/:id', component:PersonaDetailComponent},
  {path: 'planetasDetail/:id', component:PlanetaDetailComponent},
  {path: 'TopPlanetasPersonas', component:TopPlanetasPersonasComponent},
  {path: 'Home', component:CargarDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

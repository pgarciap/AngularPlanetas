import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasViewComponent } from './personas-view/personas-view.component';
import { PlanetasViewComponent } from './planetas-view/planetas-view.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';
import { PlanetaDetailComponent } from './planeta-detail/planeta-detail.component';
import { TopPlanetasPersonasComponent } from './top-planetas-personas/top-planetas-personas.component';
import { CargarDataComponent } from './cargar-data/cargar-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasViewComponent,
    PlanetasViewComponent,
    PersonaDetailComponent,
    PlanetaDetailComponent,
    TopPlanetasPersonasComponent,
    CargarDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

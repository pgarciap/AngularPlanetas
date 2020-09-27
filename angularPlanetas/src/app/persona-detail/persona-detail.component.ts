import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

 /**
   * Detalle Persona
   * Clase encargada de realizar la visualización del detalle de la persona
   *
   * @autor Paola Garcia
   * @version 1.0 - 26/09/2020
   */

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

  response:any;
  readonly APP_URL = 'http://localhost:8080/api';
  constructor(private _http: HttpClient,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    const idnew = +this._route.snapshot.params['id'];
    this.getDetallesPersona(idnew);
  }

  /**
   * Obtener Detalle Persona
   * Metodo encargado de obtener el detalle por persona 
   * Se consulta servicio Rest con metodo Get
   * 
   * @param id de la persona
   */
  getDetallesPersona(id: number) {
    this._http.get(this.APP_URL + '/CantidadVisitas/' + id)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
    
  }
  /**
   * Volver Vista Tabla Personas
   * Volver pagina principal personas
   */
  getAtrasPersonas(id: number){
    this._router.navigate(['/personasView']);
  }

}

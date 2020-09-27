import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

 /**
   * Tabla Persona
   * Clase encargada de realizar la visualización de la tabla de personas
   *
   * @autor Paola Garcia
   * @version 1.0 - 26/09/2020
   */

@Component({
  selector: 'app-personas-view',
  templateUrl: './personas-view.component.html',
  styleUrls: ['./personas-view.component.css']
})
export class PersonasViewComponent implements OnInit {

  myresponse: any;
  response:any;
  readonly APP_URL = 'http://localhost:8080/api';


  constructor(private _http: HttpClient, private _router:Router) { }

  ngOnInit() {
    this.getTodasPersonas();
  }
  /**
   * Obtener Tabla Persona
   * Metodo encargado de obtener lista Personas 
   * Se consulta servicio Rest con metodo Get
   * 
   */
  getTodasPersonas() {
    this._http.get(this.APP_URL + '/Personas').subscribe(
      data => {
        this.myresponse = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
  
  getDetallesPer(id: number){
    this._router.navigate(['/personaDetail',id]);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


 /**
   * Detalle Top
   * Clase encargada de realizar la visualización de top planetas y personas
   *
   * @autor Paola Garcia
   * @version 1.0 - 26/09/2020
   */

@Component({
  selector: 'app-top-planetas-personas',
  templateUrl: './top-planetas-personas.component.html',
  styleUrls: ['./top-planetas-personas.component.css']
})
export class TopPlanetasPersonasComponent implements OnInit {

  myresponse: any;
  myresponsepersona: any;
  readonly APP_URL = 'http://localhost:8080/api';
  constructor(private _http: HttpClient, private _router:Router) { }

  ngOnInit() {
    this.getTopPersonas();
    this.getTopPlanetas();
  }
    /**
   * Obtener Tabla Persona
   * Metodo encargado de obtener Top lista Planetas 
   * Se consulta servicio Rest con metodo Get
   * 
   */
  getTopPlanetas() {
    this._http.get(this.APP_URL + '/TopPlanetas').subscribe(
      data => {
        this.myresponse = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

    /**
   * Obtener Tabla Persona
   * Metodo encargado de obtener top lista Planeta
   * Se consulta servicio Rest con metodo Get
   * 
   */
  getTopPersonas() {
    this._http.get(this.APP_URL + '/TopPersonas').subscribe(
      data => {
        this.myresponsepersona = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

}

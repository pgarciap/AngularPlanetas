import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-data',
  templateUrl: './cargar-data.component.html',
  styleUrls: ['./cargar-data.component.css']
})
export class CargarDataComponent implements OnInit {

  myresponse: any;
  readonly APP_URL = 'http://localhost:8080/api';


  constructor(private _http: HttpClient, private _router:Router) { }

  ngOnInit() {
    this.cargarData();
  }
  /**
   * Obtener Tabla Persona
   * Metodo encargado de obtener lista Personas 
   * Se consulta servicio Rest con metodo Get
   * 
   */
  cargarData() {
    this._http.get(this.APP_URL + '/InicializarData').subscribe(
      data => {
        this.myresponse = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

}

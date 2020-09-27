import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/**
   * Tabla Planeta
   * Clase encargada de realizar la visualización de la tabla de Planeta
   *
   * @autor Paola Garcia
   * @version 1.0 - 26/09/2020
   */

@Component({
  selector: 'app-planetas-view',
  templateUrl: './planetas-view.component.html',
  styleUrls: ['./planetas-view.component.css']
})
export class PlanetasViewComponent implements OnInit {
  
  myresponse: any;
  readonly APP_URL = 'http://localhost:8080/api';

  constructor(private _http: HttpClient, private _router:Router) { }


  ngOnInit() {
    this.getTodosPlanetas();
  }

   /**
   * Obtener Tabla Planeta
   * Metodo encargado de obtener lista Planeta 
   * Se consulta servicio Rest con metodo Get
   * 
   */
  getTodosPlanetas() {
    this._http.get(this.APP_URL + '/todosPlanetas').subscribe(
      data => {
        this.myresponse = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
  getDetallesPlanetaID(id: number){
    this._router.navigate(['/planetasDetail',id]);
  }

}

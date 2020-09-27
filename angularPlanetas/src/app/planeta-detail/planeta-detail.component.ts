import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

 /**
   * Detalle Planeta
   * Clase encargada de realizar la visualización del detalle de la Planeta
   *
   * @autor Paola Garcia
   * @version 1.0 - 26/09/2020
   */

@Component({
  selector: 'app-planeta-detail',
  templateUrl: './planeta-detail.component.html',
  styleUrls: ['./planeta-detail.component.css']
})
export class PlanetaDetailComponent implements OnInit {

  response:any;
  readonly APP_URL = 'http://localhost:8080/api';
  constructor(private _http: HttpClient,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    const idnew = +this._route.snapshot.params['id'];
    this.getDetallesPlaneta(idnew);
  }

     /**
   * Obtener Detalle Persona
   * Metodo encargado de obtener el detalle por Planeta 
   * Se consulta servicio Rest con metodo Get
   * 
   * @param id de la persona
   */
  getDetallesPlaneta(id: number) {
    this._http.get(this.APP_URL + '/CantidadVisitasPlaneta/' + id)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
    
  }

  getAtrasPlanetas(id: number){
    this._router.navigate(['/planetasView']);
  }


}

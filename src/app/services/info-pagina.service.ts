import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaInterface } from '../Interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

	info: InfoPaginaInterface = {};
	equipo: any [] = [];
	cargada = false;

  constructor( private http: HttpClient) { 

    console.log("pruebas");
		this.CargarInfo();
		this.CargarEquipo();

  }

	private CargarInfo(){
		//leer archivo json
		this.http.get('assets/data/data-pagina.json')
		.subscribe(
			(resp: InfoPaginaInterface) => {
				// se le asigna la respuesta a un tipo interface.
				// para mostrar todo el contenido
				//console.log(resp);
				// para mostrar un item en especial
				//console.log(resp['twitter']);

				this.cargada = true;
				this.info = resp;
			}
		// tslint:disable-next-line: indent
		)
	}

	private CargarEquipo(){
		this.http.get('https://angular-html-bb5a6.firebaseio.com/equipo.json')
		.subscribe( (respEquipo: any) => {
				//console.log(respEquipo);
				this.equipo = respEquipo;
			}
		)
	}
}

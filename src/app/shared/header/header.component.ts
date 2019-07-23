import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // aca se importan los datos que se tienen que mostrar
  // luego en la parte del header se cambia de la siguiente manera:
  // {{ infoPaginaService.info.titulo }} 
  constructor( public _servicio: InfoPaginaService,
            private router: Router ) { }

  ngOnInit() {
  }
  buscarProducto( termino: string){
    if (termino.length < 1) {
      //return;
    }

    this.router.navigate(['/search', termino]);
    console.log(termino);
  }
}

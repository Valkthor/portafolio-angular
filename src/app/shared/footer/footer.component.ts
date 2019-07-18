import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  anio: number = new Date().getFullYear();

  // para cargar los datos en el html tambien se puede usar el [href]="_servicio.info.facebook"
  constructor( public _servicio: InfoPaginaService) { }

  ngOnInit() {
  }

}

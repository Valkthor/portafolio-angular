import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../Interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  producto: ProductoDescripcion = {};
  id: string;
  constructor( private route: ActivatedRoute, 
               public productoService: ProductosService ) { }

  // 
  ngOnInit() {
    this.route.params
    .subscribe(parametros => {

      // de los parametros recibidos solo se requiere el id
      // console.log(parametros['id']);
      this.productoService.getProductos(parametros[ 'id' ])
        .subscribe( (producto: ProductoDescripcion ) => {
          //console.log(producto);
          this.producto = producto;
          this.id = parametros[ 'id' ];
        });

    });
  }

}

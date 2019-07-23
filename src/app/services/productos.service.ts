import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../Interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productoFiltrado: ProductoInterface[] = [];
  // como se va a hacer peticiones http, se tiene que importar el cliente
  constructor( private http: HttpClient) { 

    this.cargarProductos();

  }

 private cargarProductos(){
  return new Promise( ( resolve, reject)=>{
    this.http.get('https://angular-html-bb5a6.firebaseio.com/productos_idx.json')
    .subscribe( (resp: ProductoInterface[]) => {

      this.productos = resp;
      this.cargando = false;
      resolve();
    });
  });


  }


  getProductos(id: string){
    // notese como se obiene la variable
    // retorna altiro el get para ser usada a traves de la funcion
    return this.http.get(`https://angular-html-bb5a6.firebaseio.com/productos/${ id }.json`);

  }

  buscarProductos( termino: string){

    if (this.productos.length === 0){
      this.cargarProductos().then(()=>{
        //ejecutar despues de tener productos

        this.filtrarProductos(termino);
      });
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino : string){

    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ){
        this.productoFiltrado.push( prod );
      }
    });
  }
}

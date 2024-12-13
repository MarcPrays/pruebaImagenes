import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-cardproducto',
  standalone: false,
  
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
// 5.
export class CardproductoComponent implements OnInit {
  producto: Producto = new Producto()

  // Para usar "ActivatedRoute" debemos llamar a la libreria
  /*
    ActividatedRoute: Esto nos va permitir recuperar el ID que esta recibiendo este formulario
    _productoService: Vamo a poder acceder al Servicio
  */
  constructor(private activatedRoute:ActivatedRoute
    ,private _productoService:ProductosService
  ){

  }

  // Cuando inicia, el formulario va recuperar el id que estan enviando como parametro
  ngOnInit(): void {
    // Para recuperar el id de la URL
    // Hacemos llamado a "activateRoute" a su metodo "snapshot" podemos hacer referencia a sus parametros (paramMap), buscando el parametro id (get('id'))
    const id=this.activatedRoute.snapshot.paramMap.get('id') || '0';

    this.producto=this._productoService.getProducto(parseInt( id));
    console.log(this.producto);
  }
}

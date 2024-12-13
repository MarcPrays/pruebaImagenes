import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardproductos',
  standalone: false,
  
  templateUrl: './cardproductos.component.html',
  styleUrl: './cardproductos.component.css'
})
export class CardproductosComponent implements OnInit{
  productos : Producto[] = []
  constructor(private _productosService: ProductosService, private router: Router) { 

  }

  // almacena en el array todos los productos
  ngOnInit(): void {
      this.productos = this._productosService.getProductos()
  }

  // Cuando llamen a este metodo, vamos a redireccionar al card que hemos creado
  verProducto(idx: number){
    this.router.navigate(['producto', idx])
  }
}

import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
// 4. Este es el intermediario que va interactuar con el backend
export class ProductosService {

  constructor() { }
  // Array de Productos
  private productos: Producto[] = [
    {nombre: "Audifonos", img: "/img/img1.jpeg", precio: 100},
    {nombre: "Tenis", img: "/img/img2.jpg", precio: 400},
    {nombre: "Reloj", img: "/img/img3.jpg", precio: 200},
  ];

  getProductos(): Producto[] {return this.productos;}

  getProducto(id: number) : Producto {
    return this.productos[id];
  }

  buscarProductos(termino: string): Producto[]{
    let productosArr: Producto[] = []
    termino = termino.toLowerCase()
    for (const element of this.productos) {
      let producto = element
      let nombre = producto.nombre.toLowerCase()
      // Verifica si el texto ingresado esta en los nombres de los productos.
      if (nombre.indexOf(termino) >= 0) {
        productosArr.push(producto)
      }
    }
    return productosArr;
  }
}

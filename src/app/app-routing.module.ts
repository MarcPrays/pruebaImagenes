import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';

// 2.
// Aqui se agregan las rutas de las paginas web
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'acercade', component: AboutComponent},
  {path: 'productos', component: CardproductosComponent},
  // La manera de mostrar un producto es enviarle un parametro y ese parametro sera un id
  {path: 'producto/:id', component: CardproductoComponent},
  {path: 'buscar/:termino', component: CardbuscadorComponent},
  {path: '**', component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

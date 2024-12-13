import { Component } from '@angular/core';

@Component({
  // Define el nombre del componente y usarlo en las paginas html
  selector: 'app-root',
  //Define que archivo .html se usa para este componente
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marcos Mendoza';
}

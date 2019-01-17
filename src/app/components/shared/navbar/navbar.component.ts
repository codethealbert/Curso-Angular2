import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Para poder navegar y mandar parametros


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { } // Declaramos la variable

  ngOnInit() {
  }
  buscarHeroe( termino: string) {
    this.router.navigate(['/buscar', termino]); // Obtenemos lo que se desea buscar y lo mandamos como parametro al componente BuscarComponent
  }
}

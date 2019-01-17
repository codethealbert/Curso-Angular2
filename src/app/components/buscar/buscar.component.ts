import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para estar escuchando todos los parametros que le lleguen a la ruta
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService ) {

               }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => { // Se hace una promesa
      // console.log(params['termino']); // Imprime lo que le llega de parametro
      this.heroes = this._heroesService.buscarHeroe( params['termino']);
      this.termino = params['termino'];
      console.log(this.heroes);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from './../../servicios/Heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesservice: HeroesService) {
    console.log('constructor');
  }

  ngOnInit() {
    // console.log('ngOnInit');
    this.heroes = this._heroesservice.getHeoes();
    console.log(this.heroes);
  }

}

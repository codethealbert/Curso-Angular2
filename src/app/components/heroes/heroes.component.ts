import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from './../../servicios/Heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesservice: HeroesService,
               private router: Router
    ) {
    // console.log('constructor');
  }

  ngOnInit() {
    // console.log('ngOnInit');
    this.heroes = this._heroesservice.getHeoes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate (['/heroe', idx]);
  }

}

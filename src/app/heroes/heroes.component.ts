import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes = HEROES;
  selectedHero? : Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}

import { JeuDeCarteDeftApiService } from 'src/app/services/jeu-de-carte-deft-api.service';
import { ISuperHeros } from 'src/app/models/isuper-heros';
import { Component, Input, OnInit } from '@angular/core';
import { SuperHeroCard } from 'src/app/models/super-hero-card';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  // obtenir un super héro
  public superhero?:SuperHeroCard;
  // récupère l'id du héro
  @Input() id?:number;

  // on appel le service qui sait récupérer le super héro
  constructor(private _ServiceAPI:JeuDeCarteDeftApiService) { }

  ngOnInit(): void {
    // Si j'ai un id, je récupère un super héro par le service
    if(this.id)
      this._ServiceAPI.getOneSuperHeroesById(this.id).subscribe(
        (h) => this.superhero = new SuperHeroCard(h)
      )
      //ligne 24 : le super héro est récupéré et stockée dans la variable
  }
  public setDefaultImage(html:HTMLImageElement) {
    html.src="https://freesvg.org/img/genericsuperhero.png"
  }

  public getHealth(hero:SuperHeroCard) {
    hero.durability += 10;
  }
}

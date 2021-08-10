import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISuperHeros } from 'src/app/models/isuper-heros';
import { JeuDeCarteDeftApiService } from 'src/app/services/jeu-de-carte-deft-api.service';

@Component({
  selector: 'app-super-heros-list',
  templateUrl: './super-heros-list.component.html',
  styleUrls: ['./super-heros-list.component.scss']
})
export class SuperHerosListComponent implements OnInit {

  private _ids = new Set(); // liste
  public get ids(): any[] {
    return Array.from(this._ids);
  };

  public get ids_team1() : any [] {
    return this.ids.splice(0,3);
  }
  public get ids_team2() : any [] {
    return this.ids.splice(3,3);
  }

  public powerstats:any;

  constructor(){}

  ngOnInit(): void {
    for (let i = 1; this._ids.size < 7; i++) {
      // rdm = random
      let rdm = Math.floor(Math.random()*730)+1
      this._ids.add(rdm)
      
      


      // je m'inscris
      // let sub:Subscription = this._ApiService.getOneSuperHeroesById(i).subscribe(
      //   (sh)=> {
      //     this.heroes.push(sh);
      //     // je me désinscris
      //     sub.unsubscribe();
      //   }
      // )
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISuperHeros } from '../models/isuper-heros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JeuDeCarteDeftApiService {

  // variables
  private _url : string = "http://localhost:3000/api";

  // propriétés (get set)
  private get _basic_url(): string { return `${this._url}/`;};
  
  // constructeur 
  constructor(private _http:HttpClient) { }

  // méthodes
  // public getAllSuperHeroes() : Observable<ISuperHeros[]>{
  //   return this._http.get<ISuperHeros[]>(this._basic_url);
  // }
  public getOneSuperHeroesById(id : number) : Observable<ISuperHeros>{
    return this._http.get<ISuperHeros>(this._basic_url+id);
  }
  // public getSuperHeroesByName(name : string) : Observable<ISuperHeros[]>{
  //   return this._http.get<ISuperHeros[]>(this._basic_url+'search/'+name);
  // }
  
}

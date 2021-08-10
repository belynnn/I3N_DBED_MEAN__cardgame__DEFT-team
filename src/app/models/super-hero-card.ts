import { ISuperHeros } from './isuper-heros';

export class SuperHeroCard {

    private _herodata : ISuperHeros; //wrapping

    public get name():string {return this._herodata.name;}

    public get durability():number {
        if (this._herodata.powerstats.durability === "null") {
            this.durability = Math.floor(Math.random()*100);
        }
        return Number(this._herodata.powerstats.durability)
    }

    public set durability(value:number) {
        this._herodata.powerstats.durability = value;
    }

    public get speed():number {
        if (this._herodata.powerstats.speed === "null") return Math.floor(Math.random()*100);
        return Number(this._herodata.powerstats.speed)
    }
    public get strength():number {
        if (this._herodata.powerstats.strength === "null") return Math.floor(Math.random()*100);
        return Number(this._herodata.powerstats.strength)
    }
    public get image():any {
        // fonctionnera pas sur 404
        if (this._herodata.image.url === "null") return "https://freesvg.org/img/genericsuperhero.png";
        return (this._herodata.image.url)
    }


    public isDefense:boolean = false
    

    constructor(data : ISuperHeros){
        
        this._herodata = data;
    }

    public attack():number{
        return Math.floor(Math.random()*this._herodata.powerstats.strenght);
    }

    public defense():void{
        this.isDefense = true
    }

}

// 1. Générer la class : ng g class Models/nom_class
// 2. lier l'interface à notre class :
//     a. créer un champs private avec le type de notre interface (voir ligne 4)
//     b. ajouter au constructor (ligne 13) un paramètre étant de type de notre interface
//     c. dans le constructeur, envoyer dans le champs les données du paramètre (ligne 14)
// 3. Avoir des propriétés en accessibilité des données de notre champs :
//     Voir ligne 6 à 11;
// 4. Définir les actions de votre class :
//     Voir ligne 17 à 19

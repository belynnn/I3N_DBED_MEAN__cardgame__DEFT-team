import { ISuperHeros } from './isuper-heros';

export class SuperHeroCard {

    // On a enveloppé l'interface dans une classe

    private _herodata : ISuperHeros; //wrapping

    // Pour chercher le nom via l'api

    public get name():string {return this._herodata.name;}

    // Pour chercher les caractéristiques via l'api
    // Ici on fait en sort que chaque héro qui a une durability "null"
    // reçoit un nombre random entre 0 et 100

    public get durability():number {
        if (this._herodata.powerstats.durability === "null") {
            this.durability = Math.floor(Math.random()*100);
        }
        // Pour return ce numéro random
        return Number(this._herodata.powerstats.durability)
    }

    // Pour afficher la durabilité
    public set durability(value:number) {
        this._herodata.powerstats.durability = value;
    }

    // Pour chercher la vitesse
    // Ici on fait en sort que chaque héro qui a une vitesse "null"
    // reçoit un nombre random entre 0 et 100
    public get speed():number {
        if (this._herodata.powerstats.speed === "null") return Math.floor(Math.random()*100);
        // Pour return ce numéro random
        return Number(this._herodata.powerstats.speed)
    }

    // Pour chercher la vitesse
    // Ici on fait en sort que chaque héro qui a une force "null"
    // reçoit un nombre random entre 0 et 100
    public get strength():number {
        if (this._herodata.powerstats.strength === "null") return Math.floor(Math.random()*100);
        // Pour return ce numéro random
        return Number(this._herodata.powerstats.strength)
    }

    // Pour chercher l'image
    // Ici on fait en sort que chaque héro qui a une durability "null"
    // reçoit une image par défaut
    public get image():any {
        // fonctionnera pas sur 404
        if (this._herodata.image.url === "null") return "https://freesvg.org/img/genericsuperhero.png";
        // Pour return cette image (en lien avec hero card component)
        return (this._herodata.image.url)
    }

    // création de la variable isDefense pour activer le mode defense en cliquant sur le bouton défense
    // ici, elle est false par défaut (donc pas d'animation)
    public isDefense:boolean = false
    

    // contrustrion de la data de l'interface ISuperHero
    constructor(data : ISuperHeros){
        
        this._herodata = data;
    }

    // fonction en suspend pour que l'attaque soit random de 0 au nombre du strength
    public attack():number{
        return Math.floor(Math.random()*this._herodata.powerstats.strenght);
    }

    // fonction de défense permettant de dire que la défense devient true
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

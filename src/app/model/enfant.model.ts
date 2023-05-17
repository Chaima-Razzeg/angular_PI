import { classe } from "./classe.model";
import { Image } from "./image.model";
export class enfant {
    idEnfant!:number;
    identifiant!: number;
    nomEnf! : String;
    prenomEnf! : String;
    dateNaissEnf! : Date ;
    genre!:String;
    adresse!:String;
    tuteur!:String;
    numTut!:number;
    situationFam!:String;
    residence!:String;
    maladies!:String;
    infoSupp!:String;
    image! : Image;
    imageStr!:string;
    classe!:classe;

    }

    
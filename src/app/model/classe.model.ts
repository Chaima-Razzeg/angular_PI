import { enfant } from './enfant.model';
import { enseignant } from './enseignant.model';
export class classe {
idClasse! : number;
numClasse! : String;
nbmaxEnfant! : number;
salle! : String ;
enseignant! : enseignant;
enfants: enfant[] = []; // Ajouter la propriété enfants et initialiser avec un tableau vide


}
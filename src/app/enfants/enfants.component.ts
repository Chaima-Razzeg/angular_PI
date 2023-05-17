import { Component, OnInit } from '@angular/core';
import { enfant } from '../model/enfant.model';
import { EnfantService } from '../services/enfant.service';

@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.css']
})
export class EnfantsComponent implements OnInit {
  enfants!:enfant[];
  enfant!:enfant;
  idEnfant!:number;

  constructor(private enfantService: EnfantService) {
   }    
   ngOnInit(): void {
    this.enfantService.listeEnfant().subscribe(clas => {
    console.log(clas);
    this.enfants = clas;
    });
    }
    chargerEnfant(){
      this.enfantService.listeEnfant().subscribe(clas => {
      console.log(clas);
      this.enfants = clas;
      });
      }
      
    
    supprimerEnfant(c: enfant)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.enfantService.supprimerEnfant(c.idEnfant!).subscribe(() => {
console.log("Enfant supprimé");
this.chargerEnfant();
});

}}

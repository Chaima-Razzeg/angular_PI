import { Component, OnInit } from '@angular/core';
import { enseignant } from '../model/enseignant.model';
import { EnseignantsService } from '../services/enseignants.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent  implements OnInit {
  enseignant!: enseignant[];
  constructor(private enseignantService: EnseignantsService,private router: Router) {}

  ngOnInit(): void {
    this.enseignantService.listeEnseignant().subscribe((moto) => {
      console.log(moto);
      this.enseignant = moto;
    });
  }

  chargerEnseignants() {
    this.enseignantService.listeEnseignant().subscribe(ens =>{
      console.log(ens);
      this.enseignant = ens;

    })
  }
  supprimerEnseignant(c: enseignant)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.enseignantService.supprimerEnseignant(c.idEnseignant!).subscribe(() => {
  console.log("Enseignant supprimé");
  this.chargerEnseignants();
  });
  
  }

}

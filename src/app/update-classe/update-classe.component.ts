import { Component, OnInit } from '@angular/core';
import { classe } from '../model/classe.model';
import { ClasseService } from '../services/classe.service';
import { ActivatedRoute, Router } from "@angular/router";
import { enseignant } from '../model/enseignant.model';
import { EnseignantsService } from '../services/enseignants.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-classe',
  templateUrl: './update-classe.component.html',
  styleUrls: ['./update-classe.component.css']
})
export class UpdateClasseComponent implements OnInit {
 
  currentClasse = new classe();
  updatedEnsId! : number;
  enseignants! : enseignant[];



  constructor(  private router:Router,
    private activatedRoute : ActivatedRoute,
    private classeService :ClasseService,
    private enseignantService : EnseignantsService

    ) { }

  ngOnInit(): void {
    this.enseignantService.listeEnseignant().subscribe(data => 
      {this.enseignants = data;
    console.log(data);
  });
    this.classeService.getClasseById(this.activatedRoute.snapshot.params['id']).
    subscribe(data =>{this.currentClasse = data;
    this.updatedEnsId = this.currentClasse.enseignant.idEnseignant;});
    }
  updateClasse(){
    this.currentClasse.enseignant = this.enseignants.find
    (cat => cat.idEnseignant == this.updatedEnsId)!;
    this.classeService.updateClasse(this.currentClasse).subscribe(data => {

      Swal.fire({
        icon: 'success',
        title: 'Classe modifié avec succès',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['classes']);
      });  });


}


}

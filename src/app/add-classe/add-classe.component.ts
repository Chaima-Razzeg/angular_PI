import { enseignant } from './../model/enseignant.model';
import { EnseignantsService } from './../services/enseignants.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { classe } from '../model/classe.model';
import { ClasseService } from '../services/classe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {
  
  classes!: classe[];
  enseignants!:enseignant[];

  newIdEns! : number;
 newEnseignant! : enseignant;
  newClasse = new classe();

  constructor(private classeService: ClasseService,
    private enseignantService : EnseignantsService,
    private router:Router) {}
  ngOnInit(): void  {
    this.classeService.listeClasse().subscribe(data =>
      {this.classes = data;
      console.log(data);
    })
    this.enseignantService.listeEnseignant().subscribe(data =>
      {this.enseignants = data;
      console.log(data);
    })

  }

  addClasse() {
    // Vérifier si la classe existe déjà
    const classeExistante = this.classes.find(classe => classe.numClasse === this.newClasse.numClasse);
    if (classeExistante) {
      // Afficher un message d'erreur
      Swal.fire({
        icon: 'error',
        title: 'La classe existe déjà',
        text: 'Veuillez entrer un autre niveau',
        showConfirmButton: false,
        timer: 1500
      });
      return; // Arrêter l'exécution de la fonction
    }
  
    // Continuer avec l'ajout de la classe
    this.newClasse.enseignant = this.enseignants.find(ens => ens.idEnseignant == this.newIdEns)!;
    this.classeService.ajouterClasse(this.newClasse)
      .subscribe(data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Classe ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['classes']);
        });
      });
  }
  
  }

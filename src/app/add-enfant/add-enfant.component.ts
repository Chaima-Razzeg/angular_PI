import { Component, OnInit } from '@angular/core';
import { enfant } from '../model/enfant.model';
import { EnfantService } from '../services/enfant.service';
import { Router } from '@angular/router';
import { classe } from '../model/classe.model';
import { ClasseService } from '../services/classe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-enfant',
  templateUrl: './add-enfant.component.html',
  styleUrls: ['./add-enfant.component.css']
})
export class AddEnfantComponent  implements OnInit {
  
  enfants!: enfant[];
  classes!:classe[];

  newIdCla! : number;
 newClasse! : classe;
  newEnfant = new enfant();

  constructor(private classeService: ClasseService,
    private enfantService : EnfantService,
    private router:Router) {}
  ngOnInit(): void  {
    this.enfantService.listeEnfant().subscribe(data =>
      {this.enfants = data;
      console.log(data);
    })
    this.classeService.listeClasse().subscribe(data =>
      {this.classes = data;
      console.log(data);
    })

  }
  ajouterEnfant() {
    this.enfantService.listeEnfant().subscribe(enfants => {
      const enfantExistante = enfants.find(enfant => enfant.identifiant == this.newEnfant.identifiant);
      if (enfantExistante) {
        Swal.fire({
          icon: 'error',
          title: "L'enfant est déjà inscrit",
          text: "Veuillez vérifier l'indentifiant",
          showConfirmButton: false,
          timer: 1500
        });
        return; // Arrêter l'exécution de la fonction
      }
      
  
      this.newEnfant.classe = this.classes.find(cla => cla.idClasse == this.newIdCla)!;
      this.enfantService.ajouterEnfant(this.newEnfant)
        .subscribe(data => {
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Enfant ajouté avec succès',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.router.navigate(['enfant']);
          });
        });
    });
  }
  
}  
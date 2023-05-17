import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { enseignant } from '../model/enseignant.model';
import { EnseignantsService } from '../services/enseignants.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent  implements OnInit {
  newEnseignant = new enseignant();
  constructor(
    private activatedRoute: ActivatedRoute,
    private enseignantService: EnseignantsService,private router: Router) {}
 

  ngOnInit(): void {
    
  }
  addEnseignant() {
    this.enseignantService.listeEnseignant().subscribe(enseignants => {
      const enseignantExistante = enseignants.find(enseignant => enseignant.cin == 
        this.newEnseignant.cin);
      if (enseignantExistante) {
        Swal.fire({
          icon: 'error',
          title: "L'enseignant existe déjà",
          text: 'Veuillez vérifier le numéro de CIN',
          showConfirmButton: false,
          timer: 1500
        });
        return; // Arrêter l'exécution de la fonction
      }
    this.enseignantService.ajouterEnseignants(this.newEnseignant).subscribe((moto) => {
      console.log(moto);
      this.router.navigate(["enseignant"]);
    });
  
    })}}

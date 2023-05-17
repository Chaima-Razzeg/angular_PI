import { EnseignantsService } from './../services/enseignants.service';
import { Component, OnInit } from '@angular/core';
import { classe } from '../model/classe.model';
import { ClasseService } from '../services/classe.service';
import { enseignant } from '../model/enseignant.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes!: classe[];
  enseignants!: enseignant[];
  allClasses! : classe[];


  constructor(private classeService : ClasseService,
    private enseignantService :EnseignantsService) { }

  ngOnInit(): void {
    this.classeService.listeClasse().subscribe((data)=> {
      this.classes = data;
      console.log(this.classes);
    })
    this.enseignantService.listeEnseignant().subscribe((data)=> {
      this.enseignants = data;
      console.log(this.enseignants);
    })
    this.classeService.listeClasse().subscribe(data => {
      console.log(data);
      this.allClasses = data;
      })

  }
      
    
    supprimerClasse(idClasse: number){
    Swal.fire({
      title: 'Vous êtes sûr ?',
      text: 'Vous ne pourrez pas récupérer ce poste !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, annulez !',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.value) {
        this.classeService.supprimerClasse(idClasse).subscribe((data) => {
          console.log(data);
          Swal.fire({
            title: 'Succès!',
            text: 'Le poste a été supprimé.',
            icon: 'success',
            confirmButtonColor: '#3085d6'
          });
          this.classeService.listeClasse().subscribe((data) => {
            this.classes = data;
            console.log(this.classes);
          });
        });
      }
    });}}

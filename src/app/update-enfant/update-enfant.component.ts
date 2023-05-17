import { Component } from '@angular/core';
import { enfant } from '../model/enfant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EnfantService } from '../services/enfant.service';
import Swal from 'sweetalert2';
import { classe } from '../model/classe.model';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-update-enfant',
  templateUrl: './update-enfant.component.html',
  styleUrls: ['./update-enfant.component.css']
})
export class UpdateEnfantComponent {
  currentEnfant= new enfant();
  updatedClaId! : number;
  classes! : classe[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private enfService: EnfantService,
    private classeService : ClasseService
  ) {}

  ngOnInit(): void{
    this.classeService.listeClasse().subscribe(data => 
      {this.classes = data;
    console.log(data);
  });
    this.enfService.getEnfantById(this.activatedRoute.snapshot.params['id']).
    subscribe(data =>{this.currentEnfant = data;
    this.updatedClaId = this.currentEnfant.classe.idClasse;});
    }
  

  updateEnfant() {
      this.currentEnfant.classe = this.classes.find
      (cat => cat.idClasse == this.updatedClaId)!;
      this.enfService.updateEnfant(this.currentEnfant).subscribe(data => {
  
        Swal.fire({
          icon: 'success',
          title: 'Enfant modifié avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['enfant']);
        });  });


      }
      
    
      }
        
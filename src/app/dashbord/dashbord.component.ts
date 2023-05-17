import { Component } from '@angular/core';
import { EnfantService } from '../services/enfant.service';
import { EnseignantsService } from '../services/enseignants.service';
import { ClasseService } from '../services/classe.service';
import { enseignant } from '../model/enseignant.model';
import { enfant } from '../model/enfant.model';
import { classe } from '../model/classe.model';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  countEnfant!: enfant[];
  countEnseignant! :enseignant[];
  countClasse! : classe[];
  counte!: Number;
  counte1!: Number;
  counte2!: Number;


  constructor(private enfantService : EnfantService,
    private enseignantService : EnseignantsService,
    private classeService : ClasseService) { }

  ngOnInit(): void {
    this.enfantService.listeEnfant().subscribe((data)=>{
      this.countEnfant = data;
      this.counte1=data.length;
      console.log(data);
      console.log(this.counte1);
    
    });
    this.enseignantService.listeEnseignant().subscribe((data)=>{
      this.countEnseignant = data;
      this.counte=data.length;
      console.log(data);
      console.log(this.counte);

    });
    this.classeService.listeClasse().subscribe((data)=>{
      this.countClasse = data;
      this.counte2=data.length;
      console.log(data);
      console.log(this.counte2);
    });
    


  }
  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { enseignant } from '../model/enseignant.model';
import { EnseignantsService } from '../services/enseignants.service';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {
  currentEnseignant = new enseignant();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ensService: EnseignantsService
  ) {}

  ngOnInit(): void {
  
    this.ensService
    .consulterEnseignant(this.activatedRoute.snapshot.params["id"])
    .subscribe((moto) => {
      this.currentEnseignant = moto;
    });
}
  

  updateEnseignant() {
    this.ensService.updateEnseignant(this.currentEnseignant).subscribe((moto) => {
      this.router.navigate(["enseignant"]);
    });
  }
}

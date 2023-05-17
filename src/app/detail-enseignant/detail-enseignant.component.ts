import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnseignantsService } from '../services/enseignants.service';
import { enseignant } from '../model/enseignant.model';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.component.html',
  styleUrls: ['./detail-enseignant.component.css']
})
export class DetailEnseignantComponent implements OnInit {
  enseignant!: enseignant;

  constructor(
    private route: ActivatedRoute,
    private enseignantService: EnseignantsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const enseignantId = Number(params.get('id'));
      this.getEnseignant(enseignantId);
    });
  }

  getEnseignant(id: number) {
    this.enseignantService.consulterEnseignant(id).subscribe(enseignant => {
      this.enseignant = enseignant;
    });
  }
}

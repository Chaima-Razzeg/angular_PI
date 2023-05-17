import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { enfant } from '../model/enfant.model';
import { EnfantService } from '../services/enfant.service';

@Component({
  selector: 'app-detail-enfant',
  templateUrl: './detail-enfant.component.html',
  styleUrls: ['./detail-enfant.component.css']
})
export class DetailEnfantComponent implements OnInit {
  enfant!: enfant;

  constructor(
    private route: ActivatedRoute,
    private enfantService: EnfantService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const enfantId = Number(params.get('id'));
      this.getEnfant(enfantId);
    });
  }

  getEnfant(id: number) {
    this.enfantService.consulterEnfant(id).subscribe(enfant => {
      this.enfant = enfant;
    });
  }
}
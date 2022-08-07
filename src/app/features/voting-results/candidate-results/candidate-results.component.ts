import { Component, OnInit } from '@angular/core';
import { Candidate, CandidatesService, Partido } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-candidate-results',
  templateUrl: './candidate-results.component.html',
  styleUrls: ['./candidate-results.component.scss']
})
export class CandidateResultsComponent implements OnInit {

  partido1: Partido = {
    _id: '1p',
    motto: 'La masorca',
    name: 'Equipo Masorca'
  }

  partido2: Partido = {
    _id: '1p',
    motto: 'Por el cambio',
    name: 'Cambiantes'
  }

  candidates: Candidate[] = [
    //{ _id: '1', last_name: 'Rodriguez', name: 'Juan', partido: this.partido1 },
    //{ _id: '2', last_name: 'Becerra', name: 'Maria', partido: this.partido2 },
    //{ _id: '3', last_name: 'Garcia', name: 'Luis', partido: this.partido1 }
  ];

  constructor(private readonly candidateSV:CandidatesService) { }

  ngOnInit(): void {
    this.candidateSV.getCandidates()
    .subscribe( res => {
      this.candidates = [...res];
    });
  }

}

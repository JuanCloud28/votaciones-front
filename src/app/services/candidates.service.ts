import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Partido {
  _id: string;
  motto: string;
  name: string;
}

export interface Candidate {
  _id: string;
  last_name: string;
  name: string;
  partido: Partido;
}

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  private readonly API=environment.apiCandidate;

  constructor(private readonly http:HttpClient) { }

  getCandidates():Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.API);
  }
}

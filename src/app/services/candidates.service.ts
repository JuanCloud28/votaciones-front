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

export interface LoginObject {
  token: string;
  user_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  private readonly API=environment.apiCandidate;
  private readonly API_LOGIN=environment.apiLogin;

  constructor(private readonly http:HttpClient) { }

  login():Observable<LoginObject> {
    const body = { correo: "admin@admin.com", contrasena: "admin" };
    return this.http.post<LoginObject>(this.API_LOGIN, body);
  }

  getCandidates():Observable<Candidate[]> {
    this.login().subscribe( res => {
        const token = res.token;
      })
    return this.http.get<Candidate[]>(this.API);
  }
}

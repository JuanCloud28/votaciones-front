import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyResultsService {

  constructor(private http:  HttpClient) { }

  getPartyResults(){
    return this.http.get(`${environment.apiUrl}/parties-result/`);
  }
}

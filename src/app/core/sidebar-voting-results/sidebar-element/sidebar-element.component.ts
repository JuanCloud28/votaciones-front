import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStatusService } from '../../services/login-status.service';

@Component({
  selector: 'app-sidebar-element',
  templateUrl: './sidebar-element.component.html',
  styleUrls: ['./sidebar-element.component.scss']
})
export class SidebarElementComponent implements OnInit {

  constructor(private router: Router,
    private loginStatus: LoginStatusService
  ) { 
    this.$isAuthenticated =this.loginStatus.isLoggedIn();
  }

  $isAuthenticated: Observable<boolean>;
  partys = [{value:"", name:"Todos"},{value:1, name:"Partido 1"}, {value:2, name:"Partido 2"}] //Lista dummy de partidos
  candidates = [{value:"", name:"Todos"},{value:1, name:"Candidato 1"}, {value:2, name:"Candidato 2"}] //Lista dummy de los candidatos
  pollingStation = [{value:"", name:"Todos"},{value:1, name:"Mesa 1"}, {value:2, name:"Mesa 2"}] //Lista dummy de mesas de votación 
  ngOnInit(): void {
  }

  onChangeParty($event: any){
    this.router.navigate(['results/partido']);
  }

  onChangeCandidate($event : any){
    this.router.navigate(['results/candidato']);
  }
  
  onChangePS($event : any){
    this.router.navigate(['results/mesa']);
  }
}

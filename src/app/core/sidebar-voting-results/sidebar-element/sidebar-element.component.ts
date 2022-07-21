import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-element',
  templateUrl: './sidebar-element.component.html',
  styleUrls: ['./sidebar-element.component.scss']
})
export class SidebarElementComponent implements OnInit {

  constructor() { }

  $isAdminLogged = false; // Este debe ser un observable cuyo valor dependa si el usuario se loggeo o no
  partys = [{value:1, name:"Partido 1"}, {value:2, name:"Partido 2"}] //Lista dummy de partidos
  candidates = [{value:1, name:"Candidato 1"}, {value:2, name:"Candidato 2"}] //Lista dummy de los candidatos
  pollingStation = [{value:1, name:"Mesa 1"}, {value:2, name:"Mesa 2"}] //Lista dummy de mesas de votación 
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-voting-results',
  templateUrl: './nav-voting-results.component.html',
  styleUrls: ['./nav-voting-results.component.scss']
})
export class NavVotingResultsComponent implements OnInit {

  constructor(private router: Router) { }

  $isAdminLogged = false; // Este debe ser un observable cuyo valor dependa si el usuario se loggeo o no
  ngOnInit(): void {
  }

  login(){ 
    this.router.navigate(['admin']);
    this.$isAdminLogged = true;
  }

  logOut(){ 
    this.router.navigate(['results']);
    this.$isAdminLogged = false;
  }

  goHome(){
    this.router.navigate(['/']);    
  }
}

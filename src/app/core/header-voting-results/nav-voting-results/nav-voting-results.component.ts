import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SigninPopupComponent } from 'src/app/features/login/signin-popup/signin-popup.component';
import { LoginStatusService } from '../../services/login-status.service';

@Component({
  selector: 'app-nav-voting-results',
  templateUrl: './nav-voting-results.component.html',
  styleUrls: ['./nav-voting-results.component.scss']
})
export class NavVotingResultsComponent implements OnInit {

  $isAuthenticated: Observable<boolean>;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private loginStatus: LoginStatusService
  ) {
    this.$isAuthenticated =this.loginStatus.isLoggedIn();
  }

  ngOnInit(): void {

  }

  login() {
    this.dialog.open(SigninPopupComponent, {
      width: '600px'
    });
  }

  logOut() {
    this.router.navigate(['results']);
    this.loginStatus.clean();
  }

  goHome() {
    this.router.navigate(['/']);
  }
}

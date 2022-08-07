import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStatusService } from 'src/app/core/services/login-status.service';

@Component({
  selector: 'app-signin-popup',
  templateUrl: './signin-popup.component.html',
  styleUrls: ['./signin-popup.component.scss']
})
export class SigninPopupComponent implements OnInit {
  
  loginForm = this.fb.group({
    correo: ['', Validators.required],
    contrasena: ['', Validators.required],
  });

  constructor(
    private router: Router, 
    private loginStatus : LoginStatusService, 
    private fb: FormBuilder, 
    public dialogRef: MatDialogRef<SigninPopupComponent>,
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.router.navigate(['admin']);
      this.loginStatus.logIn(this.loginForm.value).subscribe(
        (reponse :any) =>{ this.loginStatus.saveUser(reponse.user_id); this.closeDialog(); },  
        (error)=>{ console.error(error); this.loginStatus.clean();this.closeDialog()}
      );
      this.loginStatus.saveUser("62edd6d7c1957948d541bd6e");
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }

}

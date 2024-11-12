import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { OTPComponent } from '../dialogs/otp/otp.component';
import { ErrorDialogComponent } from '../dialogs/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage: string | null =  null;

  constructor(private authService: AuthService, 
    private router: Router, 
    private snackbar: MatSnackBar,
    private dialog: MatDialog){}

  login(): void {
    const credentials = {email: this.email, password: this.password}
    this.authService.login(credentials).subscribe(
      response => {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('tokenExpiration', response.expirationTime.toString());

        this.openSuccessDialog();

        this.router.navigate(['/dashboard'])

      }, (error: any) => {       
        console.error ('login failed', error);
      }
    )
  }

  openOtpDialog(): void {
    this.dialog.open(OTPComponent, {
      width: ' 300px'
    })
  }
  openSuccessDialog(){
    this.dialog.open(SuccessDialogComponent, {
      data: {
        message: 'Successfully Registered!'
      }
    })
  }
  openErrorDialog(errorMessage: string){
    this.dialog.open(ErrorDialogComponent, {
      data: {
        message: {message: errorMessage}
      }
    })
  }
}

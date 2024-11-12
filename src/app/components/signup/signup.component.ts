import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { OTPComponent } from '../dialogs/otp/otp.component';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../dialogs/error-dialog/error-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  signup(): void {
    const userInfo = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.authService.signup(userInfo).subscribe(
      (response) => {
        this.openOtpDialog();
        console.debug("Sign up response: ", response)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openOtpDialog(): void {
    this.dialog.open(OTPComponent, {
      width: ' 300px',
    });
  }
  openSuccessDialog(){
    this.dialog.open(SuccessDialogComponent, {
      data: {
        message: 'Successfully Registered!'
      }
    })
  }

}

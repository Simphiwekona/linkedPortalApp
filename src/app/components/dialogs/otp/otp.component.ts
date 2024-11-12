import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
})
export class OTPComponent {
  email = '';
  verificationCode = '';

  constructor(
    public dialogRef: MatDialogRef<OTPComponent>,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private route: Router,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  verify(): void {
    const otp = { verificationCode: this.verificationCode, email: this.email };
    this.authService.otpVerify(otp).subscribe(
      response => {
       if (response && response.message === 'Account verified successfully'){
        console.log('verified', response.message)
        console.log('Navigattion to login successful')
       } 
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

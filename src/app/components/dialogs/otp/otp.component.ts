import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OTPComponent {
  email = '';
  verificationCode = '';

constructor(public dialogRef: MatDialogRef<OTPComponent>, 
  private authService: AuthService,
  private snackbar:MatSnackBar) {}

verify(): void {
  const otp = {verificationCode: this.verificationCode, email: this.email}
  this.authService.otpVerify(otp).subscribe(
    response => 
    {
      this.snackbar.open("Verified", response)
    }, error => {
      const errorMessage = error.error.message || 'Verification Failed';
      this.snackbar.open(errorMessage, 'Close')
    }
  )
  }
}



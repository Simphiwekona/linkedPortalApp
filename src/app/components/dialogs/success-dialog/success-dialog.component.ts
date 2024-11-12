import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrl: './success-dialog.component.css'
})
export class SuccessDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
private dialogRef: MatDialogRef<SuccessDialogComponent>){}

ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 5000)
}
}

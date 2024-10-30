import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-successful-dialog',
  templateUrl: './successful-dialog.component.html',
  styleUrl: './successful-dialog.component.css'
})
export class SuccessfulDialogComponent {

  constructor(public dialogRef: MatDialogRef<SuccessfulDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {title: string, message: string}){
  }

  close(){
    this.dialogRef.close();
  }
}

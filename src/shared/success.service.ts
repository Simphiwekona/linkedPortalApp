import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SuccessfulDialogComponent} from "./successful-dialog/successful-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  constructor(private dialog: MatDialog) { }

  openSuccessDialog(title: string = 'Successful Submitted', message: string = 'Submitted'){
    this.dialog.open(SuccessfulDialogComponent, {
      width: '400px',
      data: {title, message}
    })
  }
}

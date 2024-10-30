import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessfulDialogComponent } from './successful-dialog/successful-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    SuccessfulDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    SuccessfulDialogComponent
  ]
})
export class SharedModule { }

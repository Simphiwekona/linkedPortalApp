import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewQuotaionComponent } from './view-quotaion/view-quotaion.component';
import { CreateQuotaionComponent } from './create-quotaion/create-quotaion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ViewQuotaionComponent, CreateQuotaionComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule, 
    MatTableModule
  ],
})
export class QuotationsModule {}

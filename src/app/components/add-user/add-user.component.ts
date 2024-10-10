import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;


  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required]
    });
  }

}

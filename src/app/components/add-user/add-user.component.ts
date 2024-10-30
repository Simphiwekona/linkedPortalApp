import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SuccessfulDialogComponent} from "../../../shared/successful-dialog/successful-dialog.component";
import {SuccessService} from "../../../shared/success.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  userForm!: FormGroup;
  clientsForm!: FormGroup;


  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private successfulDialog: SuccessService
  ) {
    this.addingClients();
  }

  ngOnInit() {

  }

  addingClients(){
    this.clientsForm = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      suburb: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
    });
  }
  addingUser(){
    this.userForm = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      moblie: new FormControl('', Validators.required),
    })
  }
  clientsFormSubmit(){
    if (this.clientsForm.valid)
    {
      this.successfulDialog.openSuccessDialog('Client Successful Added',
        'The client information has been saved successfully. You can now view or edit the details.')
      console.log('Form Submitted', this.clientsForm.value)
    }
  }
}

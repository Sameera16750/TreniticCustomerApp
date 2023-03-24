//core
import { Component } from '@angular/core';
//forms
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent {

  //initialize form variable
  customerDetailsForm: FormGroup|any;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm()
  }

  //for initialize form
  initializeForm(){
    this.customerDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  //access form controllers in any where
  get form() {
    return this.customerDetailsForm.controls
  }

}

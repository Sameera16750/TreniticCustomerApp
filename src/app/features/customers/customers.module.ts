import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import {FormsModule} from "../../shared/forms/forms.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CustomersComponent,
    ManageCustomersComponent
  ],
  imports: [
    //common
    CommonModule,
    //routing module
    CustomersRoutingModule,
    // forms
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomersModule { }

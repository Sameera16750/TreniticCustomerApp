import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import {SharedFormsModule} from "../../shared/forms/shared-forms.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzInputModule} from "ng-zorro-antd/input";


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
    SharedFormsModule,
    ReactiveFormsModule,
    //from ng zorro ant design
    NzTableModule,
    NzDividerModule,
    NzInputModule,
  ]
})
export class CustomersModule { }

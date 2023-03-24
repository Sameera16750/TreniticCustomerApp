import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextBoxComponent } from './input-text-box/input-text-box.component';
import {PipesModule} from "../pipes/pipes.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    InputTextBoxComponent
  ],
  exports: [
    InputTextBoxComponent
  ],
  imports: [
    //common
    CommonModule,
    //pies Module
    PipesModule,
    //forms
    ReactiveFormsModule
  ]
})
export class FormsModule { }

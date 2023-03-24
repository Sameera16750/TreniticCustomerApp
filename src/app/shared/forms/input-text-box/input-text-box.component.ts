//core
import {Component, Input, Self} from '@angular/core';
//forms
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-input-text-box',
  templateUrl: './input-text-box.component.html',
  styleUrls: ['./input-text-box.component.scss']
})
export class InputTextBoxComponent {

  //this for bind place holder and label value text box
  @Input() placeHolder:string="";
  //this for bind input box type
  @Input() type:string="text"

  constructor(@Self() public ngControl:NgControl)
  {
    this.ngControl.valueAccessor=this;
  }

  registerOnChange(fn: any): void {
    //
  }

  registerOnTouched(fn: any): void {
    //
  }

  setDisabledState(isDisabled: boolean): void {
    //
  }

  writeValue(obj: any): void {
    //
  }

}

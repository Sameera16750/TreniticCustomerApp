import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceReplace'
})
export class SpaceReplacePipe implements PipeTransform {

  //this use for replace any value for space
  transform(value: string,replaceValue:string): string {
    return value.replace(/ /g, replaceValue);
  }

}

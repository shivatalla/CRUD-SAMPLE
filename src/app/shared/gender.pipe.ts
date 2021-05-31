import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GenderSet'
})
export class GenderPipe implements PipeTransform {

  transform(value:string): string {
    debugger;
    if(value == '0'){
      return 'Male'
    }
    else
    return 'Feale'
   
  }

}

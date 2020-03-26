import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summry'
})
export class SummryPipe implements PipeTransform {

  transform(value: string, to: number = 10): any {
    return value.substring(0, to);
  }

}

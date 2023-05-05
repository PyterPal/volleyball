import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'toDate',
})
export class toDate implements PipeTransform {
  transform(value: any): any {
    const datePipe = new DatePipe('hu');
    return datePipe.transform(value * 1000);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import {Moment} from 'moment/moment';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Moment, dateFormat: string, dateRegExp?: string): string {
    let result = '';
    if(!value){
      return result;
    }
    return result = value.format(dateFormat);
  }

}

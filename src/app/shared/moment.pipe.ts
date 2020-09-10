import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
// ??? Pipe
@Pipe({
  name: 'moment',
  pure: false,
})
export class MomentPipe implements PipeTransform {
  // ??? transform
  transform(m: moment.Moment, format: string = 'MMMM YYYY'): any {
    return m.format(format);
  }
}

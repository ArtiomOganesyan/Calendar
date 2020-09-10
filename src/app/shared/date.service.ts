import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
// ??? injectable
@Injectable({
  providedIn: 'root',
})
export class DateService {
  // ??? BehaviorSubject
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  changeMonth(dir: number) {
    const value = this.date.value.add(dir, 'month');
    this.date.next(value);
  }

  changeDate(date: moment.Moment) {
    // check what is in this.date
    const value = this.date.value.set({
      // check what is in date.date()
      date: date.date(),
      month: date.month(),
    });
    this.date.next(value)
  }
}

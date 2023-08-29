import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      const day = this.pad(date.getDate());
      const month = this.pad(date.getMonth() + 1);
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    }
    return value; 
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}
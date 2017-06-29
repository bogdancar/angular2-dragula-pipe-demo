import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => {
      for (const field in item) {
        if (item[field] === null || item[field] === undefined) {
          continue;
        }
        if (item[field].toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    }
    );
  }
}

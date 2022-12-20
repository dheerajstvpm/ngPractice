import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from "../models/movie";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: string[], searchText: string): string[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.toLocaleLowerCase().includes(searchText)
    });
  }

}

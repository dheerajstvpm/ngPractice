import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText:string=''
  characters = [
    'Apple',
    'Orange',
    'Banana',
    'Carrot',
    'Beetroot',
    'Tomato',
    'Potato',
    'Guava'
  ]
}

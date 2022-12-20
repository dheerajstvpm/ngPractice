import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from "../../models/movie";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input('item') movie!: Movie;
  @Output() clickEvent=new EventEmitter()

  onClick(){
    this.clickEvent.emit()
  }
}

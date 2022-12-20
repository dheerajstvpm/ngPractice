import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {

  @Output() submitForm = new EventEmitter()

  title!: string;
  source!: string;

  onSubmit() {
    if (!this.title) {
      alert("Please enter title")
    } else if (!this.source) {
      alert("Please enter source")
    } else {
      const newMovie = {
        title: this.title,
        source: this.source
      }
      this.submitForm.emit(newMovie)
    }
  }
}

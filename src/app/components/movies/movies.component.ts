import { Component } from '@angular/core';
import { GetMoviesService } from "../../services/get-movies.service";
import { UpdateMoviesService } from "../../services/update-movies.service";
import { Movie } from "../../models/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: Movie[] = []

  constructor(private getMovies: GetMoviesService, private updateMovies: UpdateMoviesService) {
    console.log(`Movie component`);
  }
  ngOnInit() {
    this.getMovies.getAll()
      .subscribe((res) => this.movies = res)
  }

  alert(movie: Movie) {
    if (movie.source === 'OTT') {
      alert(`${movie.title} available on ${movie.source}`)
    } else {
      alert(`${movie.title} now showing at ${movie.source}`)
    }
  }

  addNewMovie(newMovie: Movie) {
    this.updateMovies.addMovie(newMovie)
      .subscribe((res) => this.movies.push(res))
  }



  obj = {
    name: 'Sachin Tendulkar',
    age: 41
  }
}

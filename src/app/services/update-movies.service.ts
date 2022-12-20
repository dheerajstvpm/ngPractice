import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UpdateMoviesService {

  private url = `http://localhost:3000/movies`

  constructor(private http:HttpClient) { }

  addMovie(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.url,movie,httpOptions)
  }
}

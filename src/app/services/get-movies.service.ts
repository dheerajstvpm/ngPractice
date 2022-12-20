import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  private url = `http://localhost:3000/movies`

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url)
  }
  
}

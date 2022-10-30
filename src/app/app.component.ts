import { Component } from '@angular/core';
import { Movie } from './model/Movie';
import { MovieSearchResponse } from './model/MovieSearchResponse';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  results: MovieSearchResponse;

  constructor(private movieService: MovieService) {}

  doSearch(input: string): void {
    this.movieService
      .search(input)
      .subscribe((results: MovieSearchResponse) => (this.results = results));
  }
}

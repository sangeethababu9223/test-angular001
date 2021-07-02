import { Component, OnInit } from '@angular/core';
import movieData from '../../_files/movies.json';
interface movie {
  id: string;
  title: string;
  poster: string;
  overview: string;
  release_date: number;
  genres: string[];
}
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: movie[] = movieData;
  constructor() { }

  ngOnInit(): void {
  }

}

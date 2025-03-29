import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  readonly moviesService = inject(MoviesService);
  // id comes from route as string, so we transform it to number
  readonly id = input.required({ transform: numberAttribute });

  readonly movie = computed(() => {
    return this.moviesService.movies().find(movie => movie.id === this.id());
  });

  readonly poster = computed(() => `movies/${this.movie()?.posterImage ?? ''}`);
}

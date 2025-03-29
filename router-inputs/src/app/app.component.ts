import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly moviesService = inject(MoviesService);
}

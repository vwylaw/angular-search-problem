import { Component } from '@angular/core';
import { Photo } from './model/Photo';
import { PhotoService } from './service/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  doSearch(input: string): void {
    this.photoService
      .search(input)
      .subscribe((results: Photo[]) => (this.photos = results));
  }
}

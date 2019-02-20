import {Component, Input, OnInit} from '@angular/core';
import {UnsplashPhotosService} from './unsplash-photos/unsplash-photos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photosArray: any = [];
  constructor(private unsplashPhotosService: UnsplashPhotosService) {}
  ngOnInit() {
    this.onGetPhoto();
  }
  onGetPhoto() {
    this.unsplashPhotosService.getPhotoApiUrl()
      .subscribe(
        (response: any) => {
          const data = response.json();
          console.log(data);
          this.photosArray = data;
        }
      );
  }
}


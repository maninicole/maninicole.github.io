import {Component, Input, OnInit} from '@angular/core';
import {UnsplashPhotosService} from './unsplash-photos.service';
import {Router} from '@angular/router';


@Component ({
  selector: 'app-unsplash-photos',
  templateUrl: './unsplash-photos.template.html',
  styleUrls: ['./unsplash-photo.styles.css']
})
export class UnsplashPhotosComponent implements OnInit{
  photosArray: any = [];
  term: any;
  title = 'code-challenge';
  p: number = 1;
  selectedPhotoIndex = null;
  selectedPhotoLikes: any;
  selectedPhotoDescription: any;
  selectedPhotoUserName: any;
  selectedPhotoUserPortfolioUrl: any;
  selectedPhotoId: any;
  show: boolean = false;
  constructor(private unsplashPhotosService: UnsplashPhotosService,
              private router: Router) {}
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

  onView(index: any) {
    this.selectedPhotoIndex = index;
    this.selectedPhotoId = this.photosArray[this.selectedPhotoIndex].id;
    this.selectedPhotoLikes = this.photosArray[this.selectedPhotoIndex].likes;
    this.selectedPhotoDescription = this.photosArray[this.selectedPhotoIndex].description;
    this.selectedPhotoUserName = this.photosArray[this.selectedPhotoIndex].user.name;
    this.selectedPhotoUserPortfolioUrl = this.photosArray[this.selectedPhotoIndex].user.portfolio_url;
    this.router.navigate(['/photo-info', this.selectedPhotoIndex]);
  }
}


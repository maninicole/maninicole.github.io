import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UnsplashPhotosService} from '../unsplash-photos/unsplash-photos.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-unsplash-photos-more',
  templateUrl: './unsplash-photos-more.template.html',
  styleUrls: ['./unsplash-photos-more.style.css']
})
export class UnsplashPhotosMoreComponent implements OnInit {
  imageLikes;
  index: any;
  id: any;
  imageDescription;
  imageUserName;
  imageUserPortfolioUrl;
  image;
  photosArray: any = [];
  constructor(private route: ActivatedRoute,
              private unsplashPhotosService: UnsplashPhotosService) {
  }
  ngOnInit() {
    this.index = this.route.snapshot.paramMap.get('index');
    console.log('index ' + this.index);
    this.getPhotoByIndex(this.index);
  }
  getPhotoByIndex(index: any) {
    this.unsplashPhotosService.getPhotoApiUrl()
      .subscribe(
        (response: any) => {
          const data = response.json();
          console.log(data);
          this.photosArray = data;
          for (let i = 0; i < this.photosArray.length; i++) {
            this.imageLikes = this.photosArray[index].likes;
            this.imageDescription = this.photosArray[index].description;
            this.imageUserName = this.photosArray[index].user.name;
            this.imageUserPortfolioUrl = this.photosArray[index].user.portfolio_url;
            this.image = this.photosArray[index].urls.full;
            console.log('image ' + this.image);
          }
        }
      );
  }


}

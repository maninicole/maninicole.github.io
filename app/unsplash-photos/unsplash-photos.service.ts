import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Http } from '@angular/http';

@Injectable ()
export class UnsplashPhotosService {
  photoArray:any = [];
  selectedPhotoLikes: any;
  constructor(private http: Http) {}
  getPhotoApiUrl() {
    return this.http.get('https://api.unsplash.com/photos/curated?client_id=e81886bc2d8a5574643aaf24a481b26bfa6cbf20a23d74ef1e08bc2a47f6d0ba');
  }
}


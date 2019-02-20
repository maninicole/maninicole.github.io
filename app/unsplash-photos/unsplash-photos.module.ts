import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UnsplashPhotosService} from './unsplash-photos.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {UnsplashPhotosComponent} from './unsplash-photos.component';


@NgModule({
  declarations: [
    UnsplashPhotosComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [UnsplashPhotosService],
  bootstrap: []
})
export class UnsplashPhotosModule { }

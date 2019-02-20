import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination';
import {HttpModule} from '@angular/http';

import {RouterModule, Routes} from '@angular/router';
import {UnsplashPhotosModule} from './unsplash-photos/unsplash-photos.module';
import {UnsplashPhotosComponent} from './unsplash-photos/unsplash-photos.component';
import {UnsplashPhotosMoreComponent} from './unsplash-photos-more/unsplash-photos-more.component';


const appRoutes: Routes = [
  {path: '', component: UnsplashPhotosComponent},
  {path: 'photo-info/:index', component: UnsplashPhotosMoreComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UnsplashPhotosMoreComponent
  ],
  imports: [
    BrowserModule,
    UnsplashPhotosModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

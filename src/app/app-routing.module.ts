import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';

const routes: Routes = [
  // creating default route
  { path: '', redirectTo: 'image/upload', pathMatch: 'full' },
  // creating a parent route with children routes
  {
    path: 'image', component: ImagesComponent, children: [
      { path: 'upload', component: ImageComponent }, // image/upload
      { path: 'list', component: ImageListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

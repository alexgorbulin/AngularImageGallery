import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importing angular fire module
import { AngularFireModule } from '@angular/fire';
// importing angular fire storage module
import { AngularFireStorageModule } from '@angular/fire/storage';
// in order to use a realtime database
import { AngularFireDatabaseModule } from '@angular/fire/database';
// in order to use reactive forms
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
// importing firebase configurations
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

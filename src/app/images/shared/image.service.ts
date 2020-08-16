import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>;
  // injecting AngularFireDatabase 
  constructor(private firebase: AngularFireDatabase) { }

  // initializing property imageDetailList
  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }
  // in order to insert image to firebaseDB define a fucntion insertImageDetails
  insertImageDetails(imageDetails) {
    this.imageDetailList.push(imageDetails)
  }
}

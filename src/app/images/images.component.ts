import { Component, OnInit } from '@angular/core';
import { ImageService } from '../images/shared/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',

})
export class ImagesComponent implements OnInit {
  // injecting ImageServices inside the parent component
  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.service.getImageDetailList();
  }

}

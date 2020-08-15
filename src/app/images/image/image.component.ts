import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [
  ]
})
export class ImageComponent implements OnInit {
  // creacting the form 
  // inside the FormGroup constructor we will pass the filds of the form
  formTemplate = new FormGroup({
    caption: new FormControl(''),
    category: new FormControl(''),
    imageUrl: new FormControl(''),

  })
  constructor() { }

  ngOnInit(): void {
  }

}

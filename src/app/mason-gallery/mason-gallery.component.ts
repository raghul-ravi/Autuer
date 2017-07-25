import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mason-gallery',
  templateUrl: './mason-gallery.component.html',
  styleUrls: ['./mason-gallery.component.css']
})
export class MasonGalleryComponent implements OnInit {
@Input() datasource;
selectedImage;
/**
 *
 */
constructor() {
console.log(this.datasource);

}
  setSelectedImage(image){
    console.log(image);
    this.selectedImage = image;
  }

  ngOnInit() {
  }

}

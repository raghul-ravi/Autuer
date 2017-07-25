import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  images;
  /**
   *
   */
  constructor() {
    this.images = [
      { "url": "../assets/video_camera1.png" },
      { "url": "../assets/video_camera1.png" },
       { "url": "../assets/video_camera1.png" }, 
       { "url": "../assets/video_camera1.png" },
        { "url": "../assets/video_camera1.png" },
         { "url": "../assets/video_camera1.png" }
     
    ];

  }
}

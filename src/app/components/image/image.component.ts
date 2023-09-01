import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imageURL = 'https://m.media-amazon.com/images/I/71EiS8De01L._AC_SL1500_.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

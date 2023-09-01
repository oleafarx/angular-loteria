import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  @Input() card: Card = {
    name: '',
    imageURL: ''
  }
  
  imageFrontURL = '';

  constructor(
    private gameService: GameService
  ) {  }

  imageBackURL = this.gameService.getBackCard();
  imageURL = this.imageBackURL;

  ngOnInit(): void {
    //Load the new URL for the front card
    this.imageFrontURL = this.card.imageURL;
  }

  //Function to rotate the card
  rotate() {
    this.imageURL = this.imageFrontURL;
  }

}

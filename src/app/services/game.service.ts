import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  routeImages = '../../../assets/images/';
  imageBack = this.routeImages + 'back-card.png';

  groupCards: Card[] = [
    {
      name: 'Angular',
      imageURL: this.routeImages + 'angular.png'
    },
    {
      name: 'Typescript',
      imageURL: this.routeImages + 'typescript.png'
    },
    {
      name: 'Angular',
      imageURL: this.routeImages + 'angular.png'
    },
    {
      name: 'Typescript',
      imageURL: this.routeImages + 'typescript.png'
    },
    {
      name: 'Angular',
      imageURL: this.routeImages + 'angular.png'
    },
    {
      name: 'Typescript',
      imageURL: this.routeImages + 'typescript.png'
    },
    {
      name: 'Angular',
      imageURL: this.routeImages + 'angular.png'
    },
    {
      name: 'Typescript',
      imageURL: this.routeImages + 'typescript.png'
    },
    {
      name: 'Angular',
      imageURL: this.routeImages + 'angular.png'
    },
    {
      name: 'Typescript',
      imageURL: this.routeImages + 'typescript.png'
    },
    {
      name: 'Angular',
      imageURL: this.routeImages + 'angular.png'
    },
    {
      name: 'Typescript',
      imageURL: this.routeImages + 'typescript.png'
    }
  ];

  getBackCard() {
    return this.imageBack;
  }

  getGroupCards() {
    return this.groupCards;
  }

  constructor() { }
}

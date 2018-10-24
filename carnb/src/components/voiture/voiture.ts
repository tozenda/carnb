import { Component } from '@angular/core';

/**
 * Generated class for the VoitureComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'voiture',
  templateUrl: 'voiture.html'
})
export class VoitureComponent {

  text: string;

  constructor() {
    console.log('Hello VoitureComponent Component');
    this.text = 'Hello World';
  }

}

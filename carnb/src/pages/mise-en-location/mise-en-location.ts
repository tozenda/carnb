import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-mise-en-location',
	templateUrl: 'mise-en-location.html'
})

export class MiseEnLocationPage {
	
	
	date : Date = new Date();
	// We get curent time (+ 1 hour) to display by default
	limit : string = this.date.getHours() + 1 + ":" + this.date.getMinutes();
	range : number = 200;

	vehicules : string[] = ["one"];
	// By default the vehicule picked is the first of the list
	vehiculePicked : string = this.vehicules[0];

	constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

	}

	logForm(){
		console.log(this.limit);
		console.log(this.range);
	}

}

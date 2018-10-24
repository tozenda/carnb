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

	constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

	}

	/*
	rec_voiture = {type:null, couleur:null, immatriculation:null, marque:null, modele:null};
	// tabMarqueModele: { marque: string[]}[] = [
	// this.tabMarqueModele.marque['Citroen'] = ;
	// { marque: "Citroen", modele: ["C4","C3"] }
	// // { "marque": "Renault", modele: "Ready" },
	// // { "marque": "Audi", modele: "Started" }
	// ];
	tabMarqueModele = {
		"Citroen":[
			"C3",
			"C4"
		], 
		"Audi":[
		"A3",
		"A5",
		""
		]
	};
	*/

	logForm(){
		console.log(this.limit);
		console.log(this.range);
	}
	



}

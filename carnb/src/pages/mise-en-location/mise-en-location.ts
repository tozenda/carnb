import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-mise-en-location',
	templateUrl: 'mise-en-location.html'
})

export class MiseEnLocationPage {

	constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

	}

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

	logForm(){
		console.log(this.rec_voiture);
	}



}

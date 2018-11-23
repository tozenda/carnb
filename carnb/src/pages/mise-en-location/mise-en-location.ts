import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListVoitureProvider } from '../../providers/list-voiture/list-voiture';
import { Voiture } from '../../entities/voiture';
import { User } from '../../entities/user';
import { LatLng } from '@ionic-native/google-maps';
import { Reservation } from '../../entities/reservation';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
	selector: 'page-mise-en-location',
	templateUrl: 'mise-en-location.html'
})

export class MiseEnLocationPage {
	
	user : User;
	position : LatLng;
	vehicules : Voiture[];
	latitude : number;
	longitude : number;


	constructor(public navCtrl: NavController, private alertCtrl: AlertController, carList: ListVoitureProvider, geoLocation : Geolocation) {
		this.user = carList.getCurrentUser();
		
		geoLocation.getCurrentPosition().then((resp) => { 
			this.latitude = resp.coords.latitude; 
			this.longitude = resp.coords.longitude; 
		}).catch((error) => { console.log('Error getting location', error); }); 
		

		this.vehicules = carList.getVoiture(this.user);
		this.position = new LatLng(this.latitude, this.longitude);

	}


	date : Date = new Date();
	// We get curent time (+ 1 hour) to display by default
	hours = this.date.getHours() + 1;
	minutes = this.date.getMinutes();
	limit : string = this.hours + ":" + this.minutes;

	range : number = 200;


	// By default the vehicule picked is the first of the list
	vehiculePicked : Voiture = this.vehicules[0];

	logForm(){
		// We change the vehicules parameters accordigly
		this.vehiculePicked.position = this.position;
		this.vehiculePicked.reservation = new Reservation(new Date(Date.parse(this.limit)), null, null, this.position, this.range, null);
		this.vehiculePicked.available = true;

		console.log(this.vehiculePicked);
	}

}

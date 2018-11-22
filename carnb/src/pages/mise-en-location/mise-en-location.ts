import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListVoitureProvider } from '../../providers/list-voiture/list-voiture';
import { Voiture } from '../../entities/voiture';
import { User } from '../../entities/user';
import { LatLng } from '@ionic-native/google-maps';
import { Reservation } from '../../entities/reservation';

@Component({
	selector: 'page-mise-en-location',
	templateUrl: 'mise-en-location.html'
})

export class MiseEnLocationPage {

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, carList: ListVoitureProvider) {
		this.carList = carList;
	}

	carList = new ListVoitureProvider();
	user: User = this.carList.CurrentUser;
	position: LatLng = this.carList.Location;

	date: Date = new Date();
	// We get curent time (+ 1 hour) to display by default
	hours = this.date.getHours() + 1;
	minutes = this.date.getMinutes();
	limit: string = this.hours + ":" + this.minutes;

	range: number = 200;

	vehicules: Voiture[] = this.carList.getVoiture(this.user);

	// By default the vehicule picked is the first of the list
	vehiculePicked: Voiture = this.vehicules[0];

	logForm() {
		// We change the vehicules parameters accordigly
		this.vehiculePicked.position = this.position;
		this.vehiculePicked.reservation = new Reservation(new Date(Date.parse(this.limit)), null, null, this.position, this.range, null);
		this.vehiculePicked.available = true;

		console.log(this.vehiculePicked);
	}

}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ListVoitureProvider} from '../../providers/list-voiture/list-voiture';


@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})

export class ProfilePage {


	constructor(public navCtrl: NavController, public myService: ListVoitureProvider) {
		// this.storage.set('BMW', 'AA');

		// console.log(this.storage.get('BMW'));
	}

}

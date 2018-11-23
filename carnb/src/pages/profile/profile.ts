import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ListVoitureProvider} from '../../providers/list-voiture/list-voiture';
import {User} from '../../entities/user';
import {Voiture} from '../../entities/voiture';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})

export class ProfilePage {

	user: User;
	listVoiture: Voiture[];

	constructor(public navCtrl: NavController, private myService: ListVoitureProvider) {
		this.user = myService.getCurrentUser();
		this.listVoiture = myService.getVoiture(this.user);
	}


}

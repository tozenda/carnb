import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
	selector: 'page-subscription',
	templateUrl: 'subscription.html'
})

export class SubscriptionPage {

	constructor(public navCtrl: NavController) {
		
	}

	subscription = {};

	logForm(){

	}

	navigateToLoginPage(): void {
		this.navCtrl.push(LoginPage);
	}
}

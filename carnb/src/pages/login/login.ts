import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {

	constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

	}

	presentAlert() {
		let alert = this.alertCtrl.create({
			title: 'Erreur de connexion',
			subTitle: 'Mauvais email ou mot de passe',
			buttons: ['Fermer']
		});
		alert.present();
	}

	login = {password:null, mail:null};

	logForm(){
		console.log(this.login);
		if(this.login.password == "test" && this.login.mail=="test"){
			console.log("Success");
		}
		else{
			this.presentAlert();
		}
	}

}

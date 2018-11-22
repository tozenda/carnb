import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VoitureType } from '../enregistrer-voiture/voitureType';
import { EnregistrerVoiturePage } from '../enregistrer-voiture/enregistrer-voiture';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  name = "Vincent";
  familyName = "Aubert";
  voiture: VoitureType = { marque: "", modele: "", couleur: "", immatriculation: "" };
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.voiture = navParams.get('voiture');
    this.image = navParams.get('image');
    // console.log(this.image);
  }

  goToSavingCar() {
    this.navCtrl.push(EnregistrerVoiturePage);
  }

}

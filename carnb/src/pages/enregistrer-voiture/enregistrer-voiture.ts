import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Voiture } from './voiture';


@Component({
  selector: 'page-enregistrer-voiture',
  templateUrl: 'enregistrer-voiture.html',
})
export class EnregistrerVoiturePage {

  //voitures: Voiture[];
  voiture = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  logForm() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnregistrerVoiturePage');
  }

}

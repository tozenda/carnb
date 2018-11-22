import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VoitureType } from './voitureType';

import { ProfilePage } from '../profile/profile';
import { hydrateSegment } from 'ionic-angular/umd/navigation/url-serializer';



@Component({
  selector: 'page-enregistrer-voiture',
  templateUrl: 'enregistrer-voiture.html',
})

export class EnregistrerVoiturePage {

  voiture: VoitureType = { marque: "", modele: "", couleur: "", immatriculation: "" };



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  logForm() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnregistrerVoiturePage');
  }

  saveLink(voiture: VoitureType) {
    this.voiture = voiture;

    if (voiture.marque != "" && voiture.modele != "" && voiture.couleur != "" && voiture.immatriculation != "") {
      this.goToanotherPage(this.voiture);
    }

  }

  goToanotherPage(voiture) {
    this.navCtrl.push(ProfilePage, { voiture: voiture });
  }

  ngOnInit() {

  }




}

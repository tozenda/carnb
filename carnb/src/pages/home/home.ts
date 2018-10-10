import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, Environment} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private latitude : number;
  private longitude : number;
  map : GoogleMap;
 
  constructor(public navCtrl: NavController, public geoLocation : Geolocation) {
    this.geoLocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_DEBUG' : 'AIzaSyA4W9dDrcHu0XLec5srkde92s6k5xSsUV8',
      'API_KEY_FOR_BROWSER_RELEASE' : 'AIzaSyA4W9dDrcHu0XLec5srkde92s6k5xSsUV8'
    })

    this.map = GoogleMaps.create('map_canvas');
  }

}

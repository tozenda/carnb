import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, Environment, LatLng, CameraPosition, ILatLng, BaseArrayClass, MarkerIcon, Marker} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private latitude : number;
  private longitude : number;
  initialMapLoad: boolean = true;
  map : GoogleMap;

  private icon: MarkerIcon = {
    url : '../../assets/imgs/car.png',
    size: {
      width: 32,
      height: 24
    }
  };

  constructor(public navCtrl: NavController, public geoLocation : Geolocation) {
    
  }
  
  ionViewWillEnter(){
    if (!this.initialMapLoad) {
      // reset div & *then* set visibility to smooth out reloading of map
      this.map.setDiv('map');
      this.map.setVisible(true);
    } else {
      this.initialMapLoad = false;
    }
  }

  ionViewWillLeave() {
    // unset div & visibility on exit
    this.map.setVisible(false);
    this.map.setDiv(null);
  }


  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_DEBUG' : 'AIzaSyA4W9dDrcHu0XLec5srkde92s6k5xSsUV8',
      'API_KEY_FOR_BROWSER_RELEASE' : 'AIzaSyA4W9dDrcHu0XLec5srkde92s6k5xSsUV8'
    })
    
    this.geoLocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
      let CurrentPosition : LatLng = new LatLng(this.latitude,this.longitude);
      let CameraPosition : CameraPosition<ILatLng> = {
        target : CurrentPosition,
        zoom : 22
      }; 
      this.map.moveCamera(CameraPosition);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    

    this.map = GoogleMaps.create('map_canvas');
    this.map.addMarker({
      'position': {lat : 5.724524, lng : 45.188529},
      'icon': this.icon
    }).then((marker : Marker) => {
      marker.showInfoWindow();
      console.log(marker);
    });
  
  }

}

import { Component } from '@angular/core';
import { MiseEnLocationPage } from '../mise-en-location/mise-en-location';
import { FilterPage } from '../filter/filter';
import { NavController, Platform, Alert } from 'ionic-angular';
import { Voiture } from '../../entities/voiture';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  Environment,
  LatLng,
  CameraPosition,
  ILatLng,
  MarkerIcon,
  GoogleMapsEvent,
  Marker,
  BaseArrayClass
} from '@ionic-native/google-maps';
import { LiteralArray } from '@angular/compiler';
import { ListVoitureProvider } from '../../providers/list-voiture/list-voiture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  // private voiturePoint: string[];
  private latitude: number;
  private longitude: number;
  private markerLatLng: LatLng = new LatLng(0, 0);

  listVoitureProvider: ListVoitureProvider;
  voitureList: Voiture[];

  initialMapLoad: boolean = true;
  map: GoogleMap;

  private icon: MarkerIcon = {
    url: '../../assets/imgs/car.png',
    size: {
      width: 32,
      height: 24
    }
  };

  constructor(public navCtrl: NavController, public geoLocation: Geolocation, public listProvider: ListVoitureProvider) {
    this.listVoitureProvider = listProvider;
    this.voitureList = listProvider.getCarListFiltered();
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  ionViewWillEnter() {
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

  addMarker() { 

    var image = {
      url: '../../assets/imgs/car.png'
    };


    this.markerLatLng.lng = this.longitude; 
    this.markerLatLng.lat = this.latitude;
    for(let voiture of this.voitureList){
      this.map.addMarker({
        title: voiture.model+" "+voiture.brand + "\nprix : "+voiture.price+" E/h", 
        position: voiture.position
      }).then((marker: Marker) => {
          marker.showInfoWindow(); 
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            console.log(marker.getId); 
            confirm("Voulez vous réservez cette voiture ?"); 
          }); 
      }); 
    }

    this.map.addMarker({
      title: "My position", 
      position: new LatLng(this.latitude, this.longitude)
    })
  }




  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_DEBUG' : '',
      'API_KEY_FOR_BROWSER_RELEASE' : ''
    })

    this.geoLocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
      let CurrentPosition: LatLng = new LatLng(this.latitude, this.longitude);
      let CameraPosition: CameraPosition<ILatLng> = {
        target: CurrentPosition,
        zoom: 18
      };
      this.addMarker();
      this.map.moveCamera(CameraPosition);
    }).catch((error) => {
      console.log('Error getting location', error);
    });



    this.map = GoogleMaps.create('map_canvas');

  }

  // Location Page link 
  goToLocation(event) {
    this.navCtrl.push(MiseEnLocationPage);
    console.log(event);
  }

  goToFilterPage(){
    this.navCtrl.push(FilterPage);
  }

}

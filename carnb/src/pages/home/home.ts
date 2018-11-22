import { Component } from '@angular/core';
import { MiseEnLocationPage } from '../mise-en-location/mise-en-location';
import { NavController, Platform, Alert } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FilterPage } from '../filter/filter';
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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private latitude: number;
  private longitude: number;
  private markerLatLng: LatLng = new LatLng(0, 0);

  private POINTS: BaseArrayClass<LatLng>;


  initialMapLoad: boolean = true;
  map: GoogleMap;

  private icon: MarkerIcon = {
    url: '../../assets/imgs/car.png',
    size: {
      width: 32,
      height: 24
    }
  };

  constructor(public navCtrl: NavController, public geoLocation: Geolocation) {

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

  initPoints() {
    this.POINTS = new BaseArrayClass<LatLng>();
    let pt1: LatLng = new LatLng(45.183914, 5.753960);
    let pt2: LatLng = new LatLng(45.184412, 5.765550);
    let pt3: LatLng = new LatLng(45.185114, 5.770380);
    let pt4: LatLng = new LatLng(45.197885, 5.776313);
    this.POINTS.push(pt1);
    this.POINTS.push(pt2);
    this.POINTS.push(pt3);
    this.POINTS.push(pt4);
  }

  addMarker() {
    this.markerLatLng.lng = this.longitude;
    this.markerLatLng.lat = this.latitude;
    this.initPoints();
    this.POINTS.forEach(element => {
      this.map.addMarker({
        position: element,
        iconData: {
          url: "../assets/imgs/car.png"
        }
      }).then((marker: Marker) => {
        marker.showInfoWindow();
        console.log(marker);
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          confirm("Souhaitez vous réserver cette voiture ?");
        });
      });
    });
  }


  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_DEBUG': '',
      'API_KEY_FOR_BROWSER_RELEASE': ''
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

  gotoFilterPage() {
    this.navCtrl.push(FilterPage);

  }


}
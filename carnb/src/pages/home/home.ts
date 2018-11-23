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


  private voiturePoint: string[];
  private latitude: number;
  private longitude: number;
  private markerLatLng: LatLng = new LatLng(0, 0);

  private POINTS: BaseArrayClass<LatLng>;
  private LABEL : string[];
  listVoitureProvider: ListVoitureProvider;
  arrayPointVoiture: Voiture[];

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
    let carListFiltered = this.listVoitureProvider.getCarListFiltered();
    console.log(carListFiltered);
    for(let car of carListFiltered){
      this.POINTS.push(car.position);
      this.LABEL.push(car.brand+" "+car.model+" "+String(car.price));
    }
  }

  addMarker() {
    this.markerLatLng.lng = this.longitude;
    this.markerLatLng.lat = this.latitude;
    this.initPoints();
    let i=0;
    this.POINTS.forEach(element => {
      this.map.addMarker({
        label: this.LABEL[i],
        position: element,
        iconData: {
          url: "../assets/imgs/car.png"
        }
      }).then((marker: Marker) => {
        marker.showInfoWindow();
        console.log(marker);
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          // let voiture = this.voiturePoint[marker.getPosition.toString()];
          // console.log(voiture.position.toString());
          confirm("Souhaitez vous réserver cette voiture ?");
        });
      });
    i++;
    }
    );
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

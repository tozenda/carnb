import { Component } from '@angular/core';
import { NavController, Platform, Alert } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FilterPage } from '../FilterPage/FilterPage';
import { GoogleMaps,
  GoogleMap,
  Environment,
  LatLng,
  CameraPosition,
  ILatLng,
  MarkerIcon,
  GoogleMapsEvent,
  Marker,
  BaseArrayClass} from '@ionic-native/google-maps';
import { LiteralArray } from '@angular/compiler';
import { PopoverController } from 'ionic-angular';
import { FilterComponent } from '../../components/filter/filter';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private latitude : number;
  private longitude : number;
  private markerLatLng : LatLng = new LatLng(0,0);

  private POINTS : BaseArrayClass<LatLng>;


  initialMapLoad: boolean = true;
  map : GoogleMap;

  private icon: MarkerIcon = {
    url : '../../assets/imgs/car.png',
    size: {
      width: 32,
      height: 24
    }
  };

  constructor(public navCtrl: NavController, public geoLocation : Geolocation, public popoverCtrl: PopoverController) {

  }

  ionViewDidLoad(){
    this.loadMap();
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

  initPoints(){
    this.POINTS = new BaseArrayClass<LatLng>();
    let pt1 : LatLng = new LatLng(45.183914,5.753960);
    let pt2 : LatLng = new LatLng(45.184412,5.765550);
    let pt3 : LatLng = new LatLng(45.185114,5.770380);
    let pt4 : LatLng = new LatLng(45.197885,5.776313);
    this.POINTS.push(pt1);
    this.POINTS.push(pt2);
    this.POINTS.push(pt3);
    this.POINTS.push(pt4);
  }

  addMarker(){
    this.markerLatLng.lng = this.longitude;
    this.markerLatLng.lat = this.latitude;
    this.initPoints();
    this.POINTS.forEach(element => {
      this.map.addMarker({
        position : element,
        iconData : {
          url : "../assets/imgs/car.png"
        }
          }).then((marker : Marker) => {
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
        zoom : 18
      };
      this.addMarker();
      this.map.moveCamera(CameraPosition);
     }).catch((error) => {
       console.log('Error getting location', error);
     });



    this.map = GoogleMaps.create('map_canvas');

  }

  gotoFilterPage(){
    // this.navCtrl.push(FilterPage);

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(FilterComponent);
    popover.present({
      ev: myEvent
    });
  }

}

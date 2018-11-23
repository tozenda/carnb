import { Component } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation';
import { ListVoitureProvider } from '../../providers/list-voiture/list-voiture';
// import { NavController } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-Filter',
    templateUrl: 'filter.html'
})

export class FilterPage {

    distanceSet: number;
    prixSet: number;
    latitude: number;
    longitude: number;
    listVoitureProvider: ListVoitureProvider;

    constructor(geoLocation: Geolocation, listVoitureProvider: ListVoitureProvider){
        geoLocation.getCurrentPosition().then((resp) => { 
            this.latitude = resp.coords.latitude; 
            this.longitude = resp.coords.longitude; 
        }).catch((error) => { console.log('Error getting location', error); }); 

        this.listVoitureProvider = listVoitureProvider;
    }
    

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R: number = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    saveLink() {
        this.listVoitureProvider.updateFilteredList(this.prixSet, this.distanceSet, this.latitude, this.longitude);
    }

}
import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-Filter',
    templateUrl: 'Filter.html'
})

export class FilterPage {

    distanceSet: number;
    prixSet: number;

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
        return deg * (Math.PI / 180)
    }

    saveLink() {
        console.log(this.distanceSet);
        console.log(this.prixSet);
    }

}
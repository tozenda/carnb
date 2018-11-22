import { User } from './user';
import { Reservation } from './reservation';
import { LatLng } from '@ionic-native/google-maps';

export class Voiture {

    constructor(position: LatLng, user: User, model: string, brand: string, price: number) {
        this.position = position;
        this.user = user;
        this.model = model;
        this.brand = brand;
        this.price = price;
    }

    // position
    position: LatLng;
    //utlisateur
    user: User;
    //modele
    model: string;
    //marque
    brand: string;
    // enLocation
    available: boolean = false;
    // prix/h
    price: number;
    // reservation
    reservation: Reservation;

}
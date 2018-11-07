import { User } from '../entities/user';
import { Reservation } from '../entities/reservation';
import { LatLng } from '@ionic-native/google-maps';

export class Voiture {

    constructor( position: LatLng, user: User, model: string, brand: string, available: boolean, price: number, reservation: Reservation) {
        this.position = position;
        this.user = user;
        this.model = model;
        this.brand = brand;
        this.available = available;
        this.price = price;
        this.reservation = reservation;
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
    available: boolean;
    // prix/h
    price: number;
    // reservation
    reservation: Reservation;

}
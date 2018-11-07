import { User } from '../entities/user';
import { Reservation } from '../entities/reservation';

export class Voiture {

    constructor( position: number[], user: User, model: string, brand: string, inUse: boolean, price: number, reservation: Reservation) {
        this.position = position;
        this.user = user;
        this.model = model;
        this.brand = brand;
        this.inUse = inUse;
        this.price = price;
        this.reservation = reservation;
    }

    // position
    position: number[];
    //utlisateur
    user: User;
    //modele
    model: string;
    //marque
    brand: string;
    // enLocation
    inUse: boolean;
    // prix/h
    price: number;
    // reservation
    reservation: Reservation;
}
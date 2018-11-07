import { User } from '../entities/user';
import { Reservation } from '../entities/reservation';

export class Voiture {

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
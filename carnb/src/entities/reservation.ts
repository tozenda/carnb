import { User } from '../entities/user';
import { LatLng } from '@ionic-native/google-maps';

export class Reservation {

    constructor( availableTime: number, takenTime: number, returnTime: number, location: LatLng, user: User[]) {
        this.availableTime = availableTime;
        this.takenTime = takenTime;
        this.returnTime = returnTime;
        this.location = location;
        this.user = user;
    }

    //heure de disponibilité
    availableTime: number;
    //heure de prise
    takenTime: number;
    // heure de rendu
    returnTime: number;
    //localisation de rendu/prise
    location: LatLng;
    //user qui loue
    user: User[];
}
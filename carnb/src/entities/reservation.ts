import { User } from '../entities/user';
import { LatLng } from '@ionic-native/google-maps';

export class Reservation {

    constructor(availableTime: Date, takenTime: Date, returnTime: Date, location: LatLng, range: number, user: User) {
        this.availableTime = availableTime;
        this.takenTime = takenTime;
        this.returnTime = returnTime;
        this.location = location;
        this.range = range;
        this.user = user;
    }

    //heure de disponibilité
    availableTime: Date;
    //heure de prise
    takenTime: Date;
    // heure de rendu
    returnTime: Date;
    //localisation de rendu/prise
    location: LatLng;
    // rayon de rendu
    range: number;
    //user qui loue
    user: User;
}
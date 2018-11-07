import { User } from '../entities/user';

export class Reservation {

    constructor( availableTime: number, takenTime: number, returnTime: number, location: number[], user: User[]) {
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
    location: number[];
    //user qui loue
    user: User[];
}
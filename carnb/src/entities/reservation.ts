import { User } from '../entities/user';

export class Reservation {

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
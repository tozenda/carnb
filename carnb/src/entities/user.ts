import { Voiture } from './voiture';

export class User {

    constructor( firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    firstName: string;
    lastName: string;
    picture = "carnb\src\assets\imgs\profil_pic.png";
    carList: Voiture[];
    reviewList: string[];

}

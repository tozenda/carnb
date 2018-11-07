import { Voiture } from '../entities/Voiture';

export class User {

    constructor( firstName: string, lastName: string, carList: Voiture[], reviewList: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.carList = carList;
        this.reviewList = reviewList;
    }

    firstName: string;
    lastName: string;
    picture = "carnb\src\assets\imgs\profil_pic.png";
    carList: Voiture[];
    reviewList: string[];

}

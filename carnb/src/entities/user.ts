import { Voiture } from '../entities/Voiture';

export class User {

    firstName: string;
    lastName: string;
    picture = "carnb\src\assets\imgs\profil_pic.png";
    carList: Voiture[];
    reviewList: string[];

}

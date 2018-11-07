import { Injectable } from '@angular/core';
import { UrlSerializer } from 'ionic-angular';
import { User } from '../../entities/user';
import { Voiture } from '../../entities/voiture';
import { Reservation } from '../../entities/reservation';

/*
  Generated class for the ListVoitureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListVoitureProvider {
  CurrentUser: User;
  Location: number[];

  voitureList: Voiture[];
  userList: User[];
  reservationList:Reservation[];


  constructor() {
    
  }

  addVoiture(voiture: Voiture, user:User){
  	this.voitureList.push(voiture);

  }

  addUser(user: User){
  	this.userList.push(user);
  }

  addReservation(){

  }

  getVoiture(user:User){
  	let voitureList: Voiture[] = user.getVoitureList();
  	return voitureList;
  }

  getUser(nom:string, prenom:string){

  }


}

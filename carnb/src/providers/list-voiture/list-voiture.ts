import { Injectable } from '@angular/core';
import { UrlSerializer } from 'ionic-angular';
import { User } from '../../entities/user';
import { Voiture } from '../../entities/voiture';
import { Reservation } from '../../entities/reservation';
import { LatLng } from '@ionic-native/google-maps';

/*
  Generated class for the ListVoitureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListVoitureProvider {
  private CurrentUser: User;
  private Location: LatLng;

  voitureList: Voiture[];
  userList: User[];
  reservationList: Reservation[];

  constructor() {

  }

  getCurrentUser() {
    return this.CurrentUser;
  }

  setCurrentUser(user: User) {
    this.CurrentUser = user;
  }

  getCurrentLocation() {
    return this.Location;
  }

  setCurrentLocation(location: LatLng) {
    this.Location = location;
  }


  addNewVoiture(position: LatLng, model: string, brand: string, inUse: boolean, price: number, reservation: Reservation, user: User) {
    this.voitureList.push(new Voiture(position, user, model, brand, inUse, price, reservation));
  }

    getVoiture(user: User){
      let voitureList: Voiture[] = user.carList;
      return voitureList;
    }

    addVoiture(voiture: Voiture, user: User){
      this.voitureList.push(voiture);
    }



    addUser(user: User){
      this.userList.push(user);
    }



  getUser(lastName: string, firstName: string) {
    for (let entry of this.userList) {
      if (entry.firstName == firstName && entry.lastName == lastName) {
        return (entry);
      }
    }
  }

  addNewUser(lastName: string, firstName: string) {
    this.userList.push(new User(lastName, firstName, null, null));
  }

  addReservation() {

  }

}

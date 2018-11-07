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
  export class DataProvider {
  	CurrentUser: User;
  	Location: number[];

  	carList: Voiture[] = [
  	new Voiture(), 
  	new Voiture()
  	];

  	userList: User[] = [
  	new User(),
  	new User()
  	];

  	reservationList:Reservation[]=[];


  	addVoiture(voiture: Voiture, user:User){
  		this.carList.push(voiture);

  	}

  	getVoiture(user:User){
  		let voitureList: Voiture[] = user.carList;
  		return voitureList;
  	}

  	getUser(lastName:string, firstName:string){
  		for (let entry of this.userList) {
  			if(entry.firstName == firstName && entry.lastName == lastName){
  				return(entry);
  			}
  		}
  	}

  	addUser(lastName: string, firstName:string){
  		this.userList.push(new User(lastName, firstName));
  	}

  	addReservation(){

  	}

  }

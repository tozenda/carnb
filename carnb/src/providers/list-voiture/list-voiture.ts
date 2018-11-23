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
  	
  	currentUser: User;
  	userList: User[];
  	carList: Voiture[];
    carListFiltered: Voiture[];
  	reservationList: Reservation[];


  	public constructor(){
  		let user1: User = new User("Lars", "Ulrich");
  		let user2: User = new User("Mohammed", "Henni");
  		let user3: User = new User("Janine", "Miche-elle");
  		let user4: User = new User("Zindine", "Zindane");
  		let user5: User = new User("Risitas", "Issou");	

  		this.userList = [
  		user1,
  		user2,
  		user3,
  		user4,
  		user5
  		];

  		let pt1: LatLng = new LatLng(45.183914, 5.753960);
  		let pt2: LatLng = new LatLng(45.184412, 5.765550);
  		let pt3: LatLng = new LatLng(45.185114, 5.770380);
  		let pt4: LatLng = new LatLng(45.197885, 5.776313);

  		let voiture1: Voiture = new Voiture(pt1, user1, "Audi", "A3", 1.1);
  		let voiture2: Voiture = new Voiture(pt2, user2, "Peugeot", "306", 2.2);
  		let voiture3: Voiture = new Voiture(pt3, user3, "Citroen", "C4", 2.1);
  		let voiture4: Voiture = new Voiture(pt4, user4, "Peugeot", "206", 1.5);

  		this.carList = [
  		voiture1,
  		voiture2,
  		voiture3,
  		voiture4
  		];

      this.carListFiltered = this.carList;

  		user1.carList = [voiture1, voiture2];
  		user2.carList = [voiture2];
  		user3.carList = [voiture3];
  		user4.carList = [voiture4];
  		  
  		// for testing
  		this.currentUser = user5;
  	}

  	addVoiture(voiture: Voiture, user:User){
  		this.carList.push(voiture);
  		user.carList.push(voiture);

  	}

  	getVoiture(user:User){
  		return user.carList;
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

    getCurrentUser(){
      return this.currentUser;
    }

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R: number = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    updateFilteredList(price: number, distance:number, latitude:number, longitude: number){
      let tmpList: Voiture[] = [];
      for (let car of this.carList) {
        if(car.price<price && this.getDistanceFromLatLonInKm(car.position.lat, car.position.lng, latitude, longitude)<distance){
          tmpList.push(car);
        }
      }
      this.carListFiltered = tmpList;
    }

    getCarListFiltered(){
      return this.carListFiltered;
    }
    
  }

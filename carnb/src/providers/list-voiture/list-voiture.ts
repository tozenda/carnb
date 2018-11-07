import { Injectable } from '@angular/core';
import { UrlSerializer } from 'ionic-angular';
import { User } from '../../entities/user';

/*
  Generated class for the ListVoitureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListVoitureProvider {
  CurrentUser: User;
  Location: number[];

  constructor() {
    console.log('Hello ListVoitureProvider Provider');
  }

}

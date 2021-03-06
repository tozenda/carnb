import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicStorageModule } from '@ionic/storage';
import { SubscriptionPage } from '../pages/subscription/subscription';
import { ProfilePage } from '../pages/profile/profile';
import { MiseEnLocationPage } from '../pages/mise-en-location/mise-en-location';
import { ListVoitureProvider } from '../providers/list-voiture/list-voiture';
import { FilterPage } from '../pages/filter/filter';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SubscriptionPage, 
    ProfilePage,
    SubscriptionPage,
    MiseEnLocationPage,
    FilterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, 
    LoginPage,
    SubscriptionPage,
    ProfilePage,
    MiseEnLocationPage,
    FilterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListVoitureProvider
  ]
})
export class AppModule {}

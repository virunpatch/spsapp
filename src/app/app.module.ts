import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import { GoogleMaps } from '@ionic-native/google-maps';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule

  ],
  providers: [
    StatusBar,
    SplashScreen,

    //Geolocation,
    //NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //GoogleMaps
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

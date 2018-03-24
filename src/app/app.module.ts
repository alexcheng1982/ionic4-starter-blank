import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicAngularModule } from '@ionic/angular';

import { MyApp } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicAngularModule.forRoot(),
  ],
  bootstrap: [MyApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriesPage } from '../pages/categories/categories';
import { PricePage } from '../pages/price/price';
import { BatikPage } from '../pages/batik/batik';
import { TiePage } from '../pages/tie/tie';
import { SmockPage } from '../pages/smock/smock';
import { GtpPage } from '../pages/gtp/gtp';
import { WoodenPage } from '../pages/wooden/wooden';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoriesPage,
    PricePage,
    BatikPage,
    TiePage,
    SmockPage,
    GtpPage,
    WoodenPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoriesPage,
    PricePage,
    BatikPage,
    TiePage,
    SmockPage,
    GtpPage,
    WoodenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

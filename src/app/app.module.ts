import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

/** Ionic Elements */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/** Component Elements */
import { CircleElement } from '../pages/elements/circle/circle';
import { ProductCard } from '../pages/elements/product-card/product-card';

/** PAGES */
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { ProductModalPage } from '../pages/product-detail/product-detail';

/** SERVICES */
import { HttpManager } from '../pages/shared/http.manager';
import { ProductService } from '../pages/shared/services/product.service';
import { ProductDetaiService } from '../pages/shared/services/product-detail.service';


@NgModule({
  declarations: [
    MyApp,
    /** Pages */
    LoginPage,
    HomePage,
    SettingsPage,
    ProductModalPage,
    /** Elements */
    CircleElement,
    ProductCard
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp)
  ],
  exports: [
    /** Elements */
    CircleElement,
    ProductCard
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    /** Pages */
    LoginPage,
    HomePage,
    SettingsPage,
    ProductModalPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    /** Services */
    HttpManager,
    ProductService,
    ProductDetaiService
  ]
})

export class AppModule {}

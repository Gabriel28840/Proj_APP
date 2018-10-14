import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MyApp } from './app.component';

/** Ionic Elements */
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/** Component Elements */
import { CircleElement } from '../pages/elements/circle/circle';

/** PAGES */
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

/** SERVICES */
import { HttpManager } from '../pages/shared/http.manager';
import { ProductPageService } from '../pages/shared/services/product-page.service';


@NgModule({
  declarations: [
    MyApp,
    /** Pages */
    HomePage,
    SettingsPage,
    ProductDetailPage,
    /** Elements */
    CircleElement
  ],
  imports: [
    BrowserModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp)
  ],
  exports: [
    /** Elements */
    CircleElement
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    /** Pages */
    HomePage,
    SettingsPage,
    ProductDetailPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    /** Services */
    HttpManager,
    ProductPageService
  ]
})
export class AppModule {}

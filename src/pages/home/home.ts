import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/** Pages */
import { SettingsPage } from '../settings/settings';
import { ProductDetailPage } from '../product-detail/product-detail';

/** Models */
import { ProductModel } from '../shared/models/product.model';

/** Services */
import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProductService]
})

export class HomePage {

  /** variables about time ( time to bet ) */
  currentTime: any;
  maxTime : any;
  timeLeftCircleColor : any;
  detailproduct: boolean = false;

  odd: boolean = true;

  /** list of products to show */
  products: ProductModel[] = []

  constructor( private _navController: NavController, private alertCtrl: AlertController, private _product_service: ProductService ) 
  {
    /** Initialize time countdown */
    this.currentTime = 60;
    this.maxTime = 60;
    this.startTimer();

    /** others */
    this.timeLeftCircleColor = "orange";

    /** get products */
    this.products = this._product_service.getListOfProducts();
  }

  /** Countdown */
  startTimer(){
    setTimeout(x => 
      {
          if( this.currentTime > 0 ) {
            this.currentTime -= 1;
            this.startTimer();
          }

          if(this.currentTime < 25) { 
            this.timeLeftCircleColor = "red"; 
          }

      }, 1000);
    }

  licitar(){
    this.currentTime = 60;
    this.timeLeftCircleColor = "orange";
  }

  is_odd(product_id: any){
    return product_id % 2 == 1;
  }
  is_even(product_id: any){
    return product_id % 2 == 0;
  }


  openSettings(){
    this._navController.push(SettingsPage);
  }


  infoProduto(){
    this._navController.push(ProductDetailPage);
  }

  infoProdutoLast(){

    let alert = this.alertCtrl.create({

      cssClass: 'appsMenu',
      title: 'Informação do produto',
      subTitle: 'Informações sobre os produtos em manutenção',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Ok',
          cssClass: 'btnOK',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    alert.present();     
  }

}

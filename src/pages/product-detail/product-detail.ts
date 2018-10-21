import { Component } from '@angular/core';
import { NavController, AlertController, NavParams  } from 'ionic-angular';

/** Models */
import { ProductDetailModel } from '../shared/models/product-detail.model';


/** Services */
import { ProductDetaiService } from '../shared/services/product-detail.service';

/** Component */
@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.html',
  providers: [ProductDetaiService]
})

export class ProductDetailPage {

  loaded: boolean = true;

  /** Product ID Received */
  product_id: Number;

  constructor(
              private _navController: NavController, 
              private _alertController: AlertController,
              private _navParams: NavParams
            ) {

        /** Get Parameters */
        this.product_id = this._navParams.get('product_id');
 }


  /** Back to Home Page */
  backPage(){
    this._navController.pop();
  }


  infoProdutoLast(){

    let alert = this._alertController.create({

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
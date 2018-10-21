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

/** Component */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProductService]
})

/** Class */
export class HomePage {

  /** list of products to show to the user */
  products: ProductModel[] = []

  /** constructor */
  constructor( 
                private _navController: NavController, 
                private alertCtrl: AlertController, 
                private _product_service: ProductService
              ) {

      /** get products */
      this.products = this._product_service.getListOfProducts();

  }

  
  /** Functions to navagate */
  /** Settings */
  openSettings(){
     this._navController.push(SettingsPage);
  }

  /** Info Product */
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

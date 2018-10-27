import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/** Product Model */
import { ProductModel } from '../shared/models/product.model';

/**
 * Generated class for the ProductDetailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail-modal',
  templateUrl: 'product-detail-modal.html',
})
export class ProductDetailModalPage {

  /** variables - Product */
  product: ProductModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _viewController:ViewController) {
  }

  ionViewWillEnter() {
    this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailModalPage');
  }

  closeDescription(){
    this._viewController.dismiss();
  }

}

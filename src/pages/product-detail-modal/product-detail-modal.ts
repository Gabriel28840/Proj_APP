import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private _viewController:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailModalPage');
  }

  closeDescription(){
    this._viewController.dismiss();
  }

}

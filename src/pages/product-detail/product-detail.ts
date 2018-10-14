import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.html'
})

export class ProductDetailPage {

  loaded: boolean = true;

  constructor(public _navController: NavController) { }


  /** Back to Home Page */
  backPage(){
    this._navController.pop();
  }

}
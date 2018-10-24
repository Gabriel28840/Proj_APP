import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/** Models */
//import { ProductDetailModel } from '../shared/models/product-detail.model';

/** Services */
import { ProductDetaiService } from '../shared/services/product-detail.service';


/** Component */
@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.html',
  providers: [ProductDetaiService]
})

export class ProductModalPage {

  constructor( ) {}


  /** Back to Home Page */
  ionViewDidLoad(){
      console.log("ola");
  }

}
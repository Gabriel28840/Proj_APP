import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/** Pages */
import { SettingsPage } from '../settings/settings';

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
                private _product_service: ProductService
              ) {

      /** get products */
      this.products = this._product_service.getListOfProducts();

  }

  /** Settings */
  openSettings(){
     this._navController.push(SettingsPage);
  }


}

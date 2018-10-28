import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/** Modal Page */
import { ProductDetailModalPage } from './product-detail-modal';


@NgModule({
  declarations: [
    ProductDetailModalPage
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailModalPage)
  ],
  exports: [ ]
})

export class ProductDetailModalPageModule {}
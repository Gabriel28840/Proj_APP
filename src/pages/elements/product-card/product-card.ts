import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

/** Models */
import { ProductModel } from '../../shared/models/product.model';

/** Component */
/** Esta componente é precisa para controlar o tempo de cada licitação, são componentes separadas */
@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html'
})

/** Class */
export class ProductCard {
  
    /** Product Received */
    @Input() product: ProductModel;
    @Input() position_number: any;

    /** Initialize Variables */
    constructor(
              private _modalController: ModalController
    ) { }

    
    /** Position of product on aplication */
    /** right */
    is_odd(){
      return this.position_number%2 == 1
    }

    /** left */
    is_even(){
      return this.position_number%2 == 0
    }

    /** Info Product - Description */
    showDescription(){
        const myModal = this._modalController.create('ProductDetailModalPage',
        {
            product: this.product
        },
        {
          cssClass:"my-modal" 
        });

        /** Show the modal */
        myModal.present();
    }

}
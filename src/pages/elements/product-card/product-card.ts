import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

/** Pages */
//import { ProductModalPage } from '../../product-detail/product-detail';

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

    /** variables about time ( time to bet ) */
    currentTime: any;
    maxTime : any;
    timeLeftCircleColor : any;

    /** Initialize Variables */
    constructor(
              private _modalController: ModalController
    ) {
      
      /** Initialize time countdown */
      this.currentTime = 60;
      this.maxTime = 60;
      this.startTimer();
 
      /** others */
      this.timeLeftCircleColor = "orange";
    }

    /** Function to Countdown */
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

    /** Bet - Participar no leilão */
    to_bet(){
      
      if(this.currentTime > 0) {
        this.currentTime = 60;
        this.timeLeftCircleColor = "orange";
      }

    }

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
        const myModal = this._modalController.create('ProductDetailModalPage');

        /** Show the modal */
        myModal.present();
    }

}
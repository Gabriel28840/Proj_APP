import { Component, Input } from '@angular/core';

/** Models */
import { ProductModel } from '../../shared/models/product.model';

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html'
})

/** Esta componente é precisa para controlar o tempo de cada licitação, são componentes separadas */

export class ProductCard {

    /** variables */
    @Input() product: ProductModel;

}
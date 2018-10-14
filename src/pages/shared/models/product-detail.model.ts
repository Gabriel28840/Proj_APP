/** Model */
import { ProductModel } from './product.model';

export class ProductDetailModel {

  constructor(
    public product: ProductModel, 
    public product_description: String
  ) {}

}
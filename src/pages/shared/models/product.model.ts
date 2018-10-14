export class ProductModel {

  constructor(
      public product_id: Number, 
      public product_name: String,
      public product_photo: String,
      public time_to_bet: Number,
      public required_tokens: Number,
      public last_punter: String,
      public value_to_pay: Number
  ) {}
  
}
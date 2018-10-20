/** Communication and others */
import { Http, Headers } from '@angular/http';
import { HttpManager } from '../http.manager';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

/** Models */
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {

    /** auxiliar variables */
    http: Http = null;
    headers: Headers = null;
    urlApi: String = '';
    timeout: number = 0;

    /** Constructor */
    constructor(private _httpManager: HttpManager) {  

      /** HttpManager */
        this.headers = _httpManager.getHeader;
        this.urlApi = _httpManager.getUrlApi;
        this.timeout = _httpManager.getTimeout;
    }

    /** Get list of products */
    getListOfProducts(): ProductModel[] {

      var products: ProductModel[] = [];

      products.push(
        new ProductModel(1,'tv lcd', 'photo', 17, 1, 'antonios', 12)
      )
      products.push(
        new ProductModel(2,'modem Nos', 'photo2', 60, 12, 'george', 22)
      )
      products.push(
        new ProductModel(3,'monitor antigo', 'photo3', 55, 13, 'gans', 5)
      )


        return products;
    }

}
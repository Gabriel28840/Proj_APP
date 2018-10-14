/** Communication and others */
import { Http, Headers } from '@angular/http';
import { HttpManager } from '../http.manager';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

/** Models */
import { ProductModel } from '../models/product.model';

/** EXMAPLE ONLY*/

@Injectable()
export class ProductDetaiService {

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

    /** get Metrics */
    getMetrics(dimensionId: String): Promise<ProductModel> {

      /** Create object to send in post */
        let body = {
            dimension_id:  dimensionId
        }

        return new Promise( (resolve,reject) => {
          
              this.http.post(`${this.urlApi}/metrics/`,body, { headers: this.headers })
                    .timeout(this.timeout)
                    .map(res => this.convertInMetricType(res.json()))
                    .subscribe(
                          data => resolve(data),
                          err => reject('GET Metrics: Server error')
                    )
        });
    }

    /** Convert metrics to type MetricModel */
    private convertInMetricType(object_recived: any): ProductModel {

      /** metrics for send to user */
      var metrics: ProductModel[] = [];

      /** if licence true continue */
      if(object_recived.stateLicence){
      
        object_recived.metrics.map(met => {
          metrics.push(
            new ProductModel(
              met.id,
              met.short_name,
              met.long_name,
              met.a,
              met.b,
              met.c,
              met.p
            ));
        });
        
      }

      return new ProductModel(1,'1','1',1,1,'1',1);
      
    }
}
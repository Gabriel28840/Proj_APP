import { Headers } from '@angular/http';

/** example things */

export class HttpManager {

    /** variables  */
    urlApi: String = null;
    headers: Headers = null;
    token: String = "";
    timeoutInit: number = 6000;
    timeout: number = 4750;
    serverOn: Boolean = true;
    buttonClickedDimension: Boolean = false;
    buttonClickedMetric: Boolean = false;
    licenceState: Boolean = true;
    
    /** constructor */
    constructor(){
        this.urlApi = 'url_to_api';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=utf-8');
    }

    /** metodos/instancias */
    get getUrlApi(): String {
      return this.urlApi;
    }

    get getHeader(): Headers {
      return this.headers;
    }

    get getTimeout() : number {
      return this.timeout;
    }

    get getTimeoutInit(): number {
      return this.timeoutInit;
    }

    get getServerOn() : Boolean {
      return this.serverOn;
    }

    public setServerOn(updateValue: Boolean) {
      this.serverOn = updateValue;
    }

}
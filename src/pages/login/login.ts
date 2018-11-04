import { Component } from '@angular/core';
import { NavController, Header } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  logoImgPath : string;
  txtEmail : string;
  txtPassword: string;

  constructor(public navCtrl: NavController, private http: Http) {
    this.logoImgPath = "assets/imgs/logo.png";
  }

  /*teste(){
    this.logoImgPath = "assets/imgs/logo.png";
  }*/

  chamadaWebService(){

    this.navCtrl.setRoot(HomePage);
    /*this.http.get('http://localhost:8080/?aux=gabbs').subscribe(response=> {

      //this.txtEmail = data.toString();
      //console.log(response._body); // _body aparece como nao sendo um elemento de response (aparece sublinhado a vermelho) mas na verdade ele é um elemento do response e é o elemento que contem o valor retornado pelo web service
      this.navCtrl.setRoot(HomePage);

    },
    error => { // o que fazer quando há erro na chama ao web service
      console.log(error);
    });*/
  }

}

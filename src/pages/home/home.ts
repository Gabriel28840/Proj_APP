import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/** Pages */
import { SettingsPage } from '../settings/settings';
import { ProductDetailPage } from '../product-detail/product-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  current : any;
  max : any;
  listaDados : any;
  timeLeftCircleColor : any;
  detailproduct: boolean = false;

  constructor(public _navController: NavController, private alertCtrl: AlertController) {
    this.current = 100;
    this.max = 100;
    this.listaDados = [{primeiroNome: "Computador XXY", ultimoNome: "B"}, {primeiroNome: "Televisão XWE", ultimoNome: "D"},
                      {primeiroNome: "Televisão AAA", ultimoNome: "Z"}, {primeiroNome: "Relógio UYT", ultimoNome: "T"}];
    this.timeLeftCircleColor = "orange";
  }

  decrementa(){
    this.current -= 1;
    if(this.current < 25)
      this.timeLeftCircleColor = "red";
  }

  licitar(){
    this.current = 100;
    this.timeLeftCircleColor = "orange";
  }


  openSettings(){
    this._navController.push(SettingsPage);
  }


  infoProduto(){
    this._navController.push(ProductDetailPage);
  }

  infoProdutoLast(){

    let alert = this.alertCtrl.create({

      cssClass: 'appsMenu',
      title: 'Informação do produto',
      subTitle: 'Informações sobre os produtos em manutenção',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Ok',
          cssClass: 'btnOK',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    alert.present();     
  }

}

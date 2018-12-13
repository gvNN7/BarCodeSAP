import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RefeicaoPage } from './../refeicao/refeicao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  refeicao(){
    this.navCtrl.push(RefeicaoPage); 
  }

}

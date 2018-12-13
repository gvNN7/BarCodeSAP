import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  backgrounds=[
    '../../assets/imgs/1.jpg',
    '../../assets/imgs/2.jpg',
    '../../assets/imgs/3.jpg',
    '../../assets/imgs/4.jpg',
  ]

  constructor(public toastCtrl: ToastController, public navCtrl: NavController) {
    
  }

  auth(){
    const toast = this.toastCtrl.create({
      message: 'Logado!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.push(TabsPage);
  }

}

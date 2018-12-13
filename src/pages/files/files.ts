import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-files',
  templateUrl: 'files.html'
})
export class FilesPage {
  public anArray:any=[];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  onSelect(type){
      console.log("Tipo: "+type);
      if(type == 1){
        console.log("Sending e-mail");
        this.anArray.push({'value': ''});
        this.export(1);
        
      }else if(type == 2){
        console.log("Opening files manager");
        this.export(2)
      }
    }

  message(){
    const toast = this.toastCtrl.create({
      message:  "E-mail enviado! Verifique sua caixa de entrada.",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  export(selected){
    this.message();
  }
  

}

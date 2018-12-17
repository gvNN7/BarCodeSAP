import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-refeicao',
  templateUrl: 'refeicao.html'
})
export class RefeicaoPage {
  public barcode: string = '';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private barcodeScanner: BarcodeScanner) {
    
  }

  

  save(){
    const toast = this.toastCtrl.create({
      message:  "Registro salvo!",
      duration: 2500,
      position: 'top'
    });
    toast.present();
  }

  takePhoto(){
    const options: BarcodeScannerOptions = {
      prompt: 'Scaneie o crachá'
    }
    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log(barcodeData.text);
      const toast = this.toastCtrl.create({
        message:  "Escaneado com sucesso!",
        duration: 2500,
        position: 'top'
      });
      toast.present();
      console.log('Barcode data', barcodeData);
     }).catch(err => {
      const toast = this.toastCtrl.create({
        message:  "Não foi possível abrir a câmera.",
        duration: 2500,
        position: 'top'
      });
      toast.present();
         console.log('Error', err);
     });
  }

}

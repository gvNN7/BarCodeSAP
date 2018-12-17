import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-files',
  templateUrl: 'files.html'
})
export class FilesPage {
  public anArray:any=[];
  public email: string='';
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private emailComposer: EmailComposer, private file: File) {

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

  export(selected) {
    if(selected == 1){
    this.file.writeFile(this.file.dataDirectory, '[COLETAS SAP].txt', 'Conteudo do txt', {replace: true})
        .then(() => {      
          let email = {
            to: this.email,
            attachments: [
              this.file.dataDirectory + '[COLETAS SAP].txt'
            ],
   
            subject: 'Arquivos de Texto [SAPAULISTA]',
            body: 'Olá, segue os arquivos de textos das coletas feitas pelo aplicativo.',
            isHtml: true
          };
          this.emailComposer.open(email);
          this.message();
   
        })
        .catch((err) => {
          console.error(err);
        });
      }
   
    }

  exporte(selected){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: this.email,
       cc: '',
       
       attachments: [
         'file://img/logo.png',
         'res://icon.png',
         'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
         'file://README.pdf'
       ],
       subject: 'Arquivos de Texto [SAPAULISTA]',
       body: 'Olá, segue os arquivos de textos das coletas feitas pelo aplicativo',
       isHtml: true
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
    
  }
  

}

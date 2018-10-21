import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular'


@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html'
})
export class comentariosPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  popupComentar(){
    const comentar = this.modalCtrl.create('ModalComentariosPage');
    comentar.present();
    comentar.onDidDismiss((data)=>{
        console.log(data);
    })
  }

}

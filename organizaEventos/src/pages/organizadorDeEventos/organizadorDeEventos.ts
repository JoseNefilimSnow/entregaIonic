import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular'

@Component({
  selector: 'page-organizadorDeEventos',
  templateUrl: 'organizadorDeEventos.html'
})
export class organizadorDeEventosPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  popupOrganizarEvento(){
    const crearEvento:Modal = this.modalCtrl.create('ModalPage');
    crearEvento.present();
    crearEvento.onDidDismiss((data)=>{
        console.log(data);
    })
  }

}

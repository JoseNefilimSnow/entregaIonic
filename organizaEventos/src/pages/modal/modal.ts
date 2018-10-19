import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(private navParams: NavParams, private view:ViewController) {
  }
  closeModal(){
    this.view.dismiss();
  }
  closeModalWithSubmit(){
    const data="enviarDatos"//pasar los datos y enviarlos
    this.view.dismiss(data);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}

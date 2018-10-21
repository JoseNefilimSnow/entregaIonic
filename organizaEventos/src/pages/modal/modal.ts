import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { IonicPage, NavParams, ViewController} from 'ionic-angular';
//import { ProvidersProvider } from '../../providers/providers/providers';
import { NgForm } from '@angular/forms';
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

  formgroup:FormGroup;
  nombre:AbstractControl;
  tipo:AbstractControl;
  lugar:AbstractControl;
  fecha:AbstractControl;
  aforo:AbstractControl;
  precio:AbstractControl;

  constructor(private navParams: NavParams,
    private view:ViewController,
    private formbuilder:FormBuilder,
    //private eventosDb:ProvidersProvider
    ) {
      this.formgroup = formbuilder.group({
        nombre:['',[Validators.required,Validators.maxLength(100)]],
        tipo:['',[Validators.required,Validators.maxLength(100)]],
        lugar:['',[Validators.required,Validators.maxLength(100)]],
        fecha:['',Validators.required],
        aforo:['',[Validators.required,Validators.maxLength(100)]],
        precio:['']
      });

      this.nombre = this.formgroup.controls['nombre'];
      this.tipo = this.formgroup.controls['tipo'];
      this.lugar = this.formgroup.controls['lugar'];
      this.fecha = this.formgroup.controls['fecha'];
      this.aforo = this.formgroup.controls['aforo'];
      this.precio = this.formgroup.controls['precio'];
  }
  closeModal(){
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');

  }

  save(form:NgForm) {
    /**let update: boolean = form['href'];
    this.events.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Evento "' + form.nombre + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();*/
      this.view.dismiss();
    /**}, error => this.error = error)
  }**/
  }
}

import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { IonicPage, NavParams, ViewController} from 'ionic-angular';
import { ProvidersProvider } from '../../providers/providers';
/**
 * Generated class for the ModalComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-comentarios',
  templateUrl: 'modal-comentarios.html',
})
export class ModalComentariosPage {

  formgroup:FormGroup;
  nombre:AbstractControl;
  nombreEvento:AbstractControl;
  asunto:AbstractControl;
  contacto:AbstractControl;
  comentario:AbstractControl;


  constructor(private navParams: NavParams,
    private view:ViewController,
    private formbuilder:FormBuilder ) {
      this.formgroup = formbuilder.group({
        nombreEvento:['',[Validators.required,Validators.maxLength(100)]],
        nombre:['',[Validators.required,Validators.maxLength(100)]],
        asunto:['',[Validators.required,Validators.maxLength(100)]],
        contacto:[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.+[a-z]{2,4}$")],
        comentario:['',[Validators.required,Validators.maxLength(100)]]

      });

      this.nombreEvento = this.formgroup.controls['nombreEvento'];
      this.nombre = this.formgroup.controls['nombre'];
      this.asunto = this.formgroup.controls['asunto'];
      this.contacto = this.formgroup.controls['contacto'];
      this.comentario = this.formgroup.controls['comentario'];

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
  validate(){

  }
  }

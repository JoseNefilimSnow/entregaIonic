import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { IonicPage, NavParams, ViewController} from 'ionic-angular';
//import { ProvidersProvider } from '../../providers/providers';
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
        contacto:[''],
        comentario:['',[Validators.required,Validators.maxLength(280)]]

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  
  /**
  PROX LISTAR COMENTARIOS

  **/
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

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular'
//import { ProvidersProvider } from '../../providers/providers/providers';
@Component({
  selector: 'page-organizadorDeEventos',
  templateUrl: 'organizadorDeEventos.html'
})
export class organizadorDeEventosPage {
  //private eventos:Array<any>
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  /**this.eventosDb.getEvents().subscribe(eventos => {
    this.eventos = eventos;
      });
    }
  })
  html += '<p>';
  for (var i = 0; i <= eventos.length; i++) {
    console.log(eventos[i]);
    html += eventos[i].toString(); <- Mirar como queda
  }
  html += '</p>'
  **/
}

  /**
  recargarEventos(){
  /**this.eventosDb.getEvents().subscribe(eventos => {
    this.eventos = eventos;
      });
    }
  })
  html += '<p>';
  for (var i = 0; i <= eventos.length; i++) {
    console.log(eventos[i]);
    html += eventos[i].toString(); <- Mirar como queda
  }
  html += '</p>'

  }
  **/
  popupOrganizarEvento(){
    const crearEvento = this.modalCtrl.create('ModalPage');
    crearEvento.present();
    crearEvento.onDidDismiss((data)=>{
        console.log(data);
    })
  }
}

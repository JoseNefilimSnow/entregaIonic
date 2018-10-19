import { Component } from '@angular/core';

import { organizadorDeEventosPage } from '../organizadorDeEventos/organizadorDeEventos';
import { comentariosPage } from '../comentarios/comentarios';
import { portadaPage } from '../portada/portada';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = portadaPage;
  tab2Root = organizadorDeEventosPage;
  tab3Root = comentariosPage;

  constructor() {

  }
}

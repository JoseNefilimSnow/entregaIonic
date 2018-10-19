import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersProvider {
  public API = 'http://localhost:9080';
    public BEER_API = this.API + '/';

    constructor(public http: HttpClient) {
    }

    getGoodBeers(): Observable<any> {
      return this.http.get(this.API + '/good-beers');
    }
  }

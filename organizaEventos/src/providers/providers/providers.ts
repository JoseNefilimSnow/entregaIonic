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


    constructor(public http: HttpClient) {
    }

    getEvents(): Observable<any> {
      return this.http.get(this.API + '/todos-eventos');
    }

    save(event: any): Observable<any> {
    let result: Observable<Object>;
    if (event['href']) {
      result = this.http.put(event.href, event);
    }
    return result.catch(error => Observable.throw(error));
  }
  }

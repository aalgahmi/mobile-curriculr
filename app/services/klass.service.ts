import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Klass} from '../models/klass';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class KlassService {
  constructor (private _http: Http) {}

  private klassesUrl = 'app/klasses';  // URL to web API

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  getKlasses (): Observable<Klass[]> {
    return this._http.get(this.klassesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  removeBadge(klass: Klass): Observable<Klass> {
    let body = JSON.stringify({ id: klass.id, badge: '' });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.put(this.klassesUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}

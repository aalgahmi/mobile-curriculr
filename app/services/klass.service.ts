import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Klass} from '../models/klass';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class KlassService {
  availableKlasses: Klass[];
  errorMsg: string;
  constructor (private _http: Http) {}

  private klassesUrl = 'app/klasses';  // URL to web API

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getKlasses (): Klass[] {
    if (!this.availableKlasses) {
      this._http.get(this.klassesUrl)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(
        klasses => this.availableKlasses = klasses,
         error =>  this.errorMsg = <any>error
      );
    }

    return this.availableKlasses;
  }

  removeBadge(badge: string): Observable<Klass> {
    let body = JSON.stringify({ badge });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.klassesUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}

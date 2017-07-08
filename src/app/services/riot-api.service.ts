import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class RiotApiService {

  private _backendURL: any;

  constructor(private _http: Http) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  getSummonerByName(): Observable<Object> {
    return this._http.get(this._backendURL.getSummonerByName, this._options())
      .map((res: Response) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return {};
        }
      });
  }

  private _options(headerList: Object = {}): RequestOptions {
    const headers = new Headers(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return new RequestOptions({ headers: headers });
  }

}

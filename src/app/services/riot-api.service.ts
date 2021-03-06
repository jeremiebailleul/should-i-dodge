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

  getSummonerByName(summonerName: string): Observable<Object> {
    return this._http.get(this._backendURL.getSummonerByName + summonerName, this._options())
      .map((res: Response) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return {};
        }
      });
  }

  getProfileIconsVersion() {
    return this._http.get(this._backendURL.getProfileIconsVersion, this._options())
      .map(res => res.json().version);
  }

  getLeague(summonerId: any) {
    return this._http.get(this._backendURL.getLeague + summonerId, this._options())
      .map(res => res.json());
  }

  getMatchlist(accountId: number) {
    return this._http.get(this._backendURL.getMatchlist + accountId, this._options())
      .map(res => res.json().matches.slice(0, 10));
  }

  getMatch(matchId: number) {
    return this._http.get(this._backendURL.getMatch + matchId, this._options())
      .map(res => res.json());
  }

  private _options(headerList: Object = {}): RequestOptions {
    const headers = new Headers(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return new RequestOptions({ headers: headers });
  }

}

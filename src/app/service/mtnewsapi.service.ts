import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MtnewsapiService {
  constructor(private _http: HttpClient) {}

  //Top Headline Api Url
  topHeadlinesNews =
    'https://newsapi.org/v2/top-headlines?country=eg&apiKey=04556923dd6049c58011572453b5560a';

  //Tech News Api Url
  techNews =
    'https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=04556923dd6049c58011572453b5560a';

  //Business News Api Url
  businessNews =
    'https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=04556923dd6049c58011572453b5560a';

  //Use Tech Method
  tcTechNews(): Observable<any> {
    return this._http.get(this.techNews);
  }

  //Use Business Method
  tcBusinessNews(): Observable<any> {
    return this._http.get(this.businessNews);
  }

  tcHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlinesNews);
  }
}

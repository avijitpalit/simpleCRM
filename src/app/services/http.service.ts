import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  readonly rootURL;

  constructor(private http: HttpClient) {
    this.rootURL = 'http://testapi.posorbis.in';
  }

  get(uri: string){
    return this.http.get(`${this.rootURL}/${uri}`);
  }

  post(uri: string, body: object){
    return this.http.post(`${this.rootURL}/${uri}`, body)
  }

  put(uri: string, body: object){
    return this.http.put(`${this.rootURL}/${uri}`, body)
  }

}

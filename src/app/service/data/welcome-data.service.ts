import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  getCustomWelcomeMsg(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/welcome/${name}`)
  }
}

export class HelloWorldBean {
  constructor(public message: String) {}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  domain = "http://localhost:8080/"
  constructor(private http: HttpClient) { }
  getAPIData() {
    return this.http.get(this.domain + "sample/getData")

  }
  postAPIData(config) {
    return this.http.post(this.domain + "sample/postdata", config)

  }
}

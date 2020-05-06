import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassvaultService {

  private baseUrl = 'http://localhost:8080/pass/';

  constructor(private http: HttpClient) { }

  getPassvaultList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'vaults');
  }

  createPassvault(passvault: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'vault/save', passvault);
  }

  deletePassvault(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}vault/delete/${id}`, { responseType: 'text' });
  }

  getPassvault(id: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}vault/${id}`);
  }

  updatePassvault(id: String, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}vault/update/${id}`, value);
  }
}

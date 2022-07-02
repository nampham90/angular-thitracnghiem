import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8084/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DethiserviceService {

  constructor(private http: HttpClient) { }

  getListDethitheoTrinhdo(accessInfo:any,idtrinhdo:number): Observable<any>{
     return this.http.post(AUTH_API +"listdethitheotrinhdo",{idtrinhdo,accessInfo},httpOptions);
  }
}

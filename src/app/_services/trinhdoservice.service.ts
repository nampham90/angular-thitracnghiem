import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';
import { HttpErrorService} from '../http_interceptors/http-error.service'

const AUTH_API = 'http://localhost:8084/api/auth/';

const URL_API = 'http://localhost:8084/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class TrinhdoserviceService {

  constructor(
    private http: HttpClient,
    private httpError:HttpErrorService
    ) { }
  
  getListTrinhdo(): Observable<any>{
      return this.http.get(AUTH_API+"listtrinhdo",httpOptions);
  }

  getDatatest():Observable<any>{
    return this.http.post(URL_API+"data",httpOptions);
  }

}

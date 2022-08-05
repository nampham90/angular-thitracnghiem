import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8084/api/admin/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DethiserviceService {

  constructor(private http: HttpClient) { }

  getListDethitheoTrinhdo(accessInfo: any, idtrinhdo: number): Observable<any> {
    return this.http.post(AUTH_API + "listdethitheotrinhdo", { idtrinhdo, accessInfo }, httpOptions);
  }

  insertDethi(dethiDto: any): Observable<any> {
    //const a = JSON.parse(dethiDto);
    console.log("lista :" + dethiDto.id)

    return this.http.post(AUTH_API + 'create',
      {
        tendethi: dethiDto.tendethi,
        thoigianthi: dethiDto.thoigianthi,
        trangthai: dethiDto.trangthai,
        trinhdo: dethiDto.trinhdo
      }, httpOptions
    );
  }

  // createEmp (emp: Object): Observable<Object>{
  //   return this.http.post(`${this.empUrl}/create`, emp);
  // }

  getAllDethi(): Observable<any> {
    return this.http.get(AUTH_API, httpOptions);
  }



}

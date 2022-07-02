import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private count=0;
  private spinner$=new BehaviorSubject<string>('');

  constructor() { }

  getLoaddingObserver():Observable<string>{
     return this.spinner$.asObservable();
  }

  requestStart(){
    if(++this.count==1){
      this.spinner$.next('start');
    }
  }

  requestEnded(){
    if(this.count===1 || --this.count===1){
      this.spinner$.next('stop');
    }
  }

  resetLoadding(){
    this.count=0;
    this.spinner$.next('stop');
  }

}

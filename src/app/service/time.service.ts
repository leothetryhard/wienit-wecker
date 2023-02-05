import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private readonly time: Observable<Date>;

  constructor() {
    this.time = new Observable((observer) => {
      let curTime: Date;
      setInterval(() =>{
        if(curTime == undefined || new Date().getTime() != curTime.getTime()){
          curTime = new Date();
          curTime.setHours(curTime.getHours())
          observer.next(curTime);
        }
      }, 1000);
    });
  }

  public getTime(): Observable<Date>{
    return this.time;
  }
}

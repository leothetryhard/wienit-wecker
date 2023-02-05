import { Injectable } from '@angular/core';
import {WeckerDTO} from "../dto/WeckerDTO";

@Injectable({
  providedIn: 'root'
})
export class WeckerDataService {
  private weckerList: Array<WeckerDTO>;
  private silent: boolean = false;

  constructor() {
    this.weckerList = new Array<WeckerDTO>();

    let s = localStorage.getItem('silent');
    if(s != null){
      if(typeof JSON.parse(s) == "boolean"){
        this.silent = JSON.parse(s);
      }
    }

    let wList = localStorage.getItem('weckerData');
    if (wList != null){
      this.weckerList = JSON.parse(wList);
      for(let wecker of this.weckerList){
        wecker.time = new Date(wecker.time);
      }
    }
  }

  public getWeckerData(): Array<WeckerDTO>{
    return this.weckerList;
  }

  public setWeckerData(weckerData: Array<WeckerDTO>){
    this.weckerList = weckerData;
    localStorage.setItem('weckerData', JSON.stringify(weckerData));
  }

  public getSilent(): boolean{
    return this.silent;
  }

  public setSilent(silent: boolean){
    this.silent = silent;
    localStorage.setItem('silent', JSON.stringify(silent));
  }
}

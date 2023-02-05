import { Injectable } from '@angular/core';
import {WeckerDTO} from "../dto/WeckerDTO";

@Injectable({
  providedIn: 'root'
})
export class WeckerDataService {
  private weckerList: Array<WeckerDTO>;

  constructor() {
    this.weckerList = new Array<WeckerDTO>();
  }

  public getWeckerData(): Array<WeckerDTO>{
    let wList = localStorage.getItem('weckerData');
    if (wList != null){
      this.weckerList = JSON.parse(wList, );
    }
    for(let wecker of this.weckerList){
      wecker.time = new Date(wecker.time);
    }

    return this.weckerList;
  }

  public setWeckerData(weckerData: Array<WeckerDTO>){
    localStorage.setItem('weckerData', JSON.stringify(weckerData));
  }
}

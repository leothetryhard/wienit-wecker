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
      this.weckerList = JSON.parse(wList);
      return this.weckerList;
    }
    return new Array<WeckerDTO>();
  }

  public setWeckerData(weckerData: Array<WeckerDTO>){
    localStorage.setItem('weckerData', JSON.stringify(weckerData));
  }
}

import {Component, OnDestroy} from '@angular/core';
import {TimeService} from "../service/time.service";
import {Subscription} from "rxjs";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {WeckerDetailComponent} from "../wecker-detail/wecker-detail.component";
import {WeckerDataService} from "../service/wecker-data.service";
import {WeckerDTO} from "../dto/WeckerDTO";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {WeckerRingingComponent} from "../wecker-ringing/wecker-ringing.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{
  public silent = false;
  public time!: Date;
  private timeSubscription: Subscription;
  public weckerList: Array<WeckerDTO>;

  constructor(private timeService: TimeService,
              public weckerDataService: WeckerDataService,
              private _bottomSheet: MatBottomSheet) {
    this.timeSubscription = timeService.getTime().subscribe((newTime) =>{
      this.time = newTime;
      this.checkWeckerList();
    });
    this.silent = weckerDataService.getSilent();
    this.weckerList = weckerDataService.getWeckerData();
  }

  addWecker(): void{
    let sheet = this._bottomSheet.open(WeckerDetailComponent, {
      data: {wecker: null},
    });
    sheet.afterDismissed().subscribe(res => {
      if (res != undefined) {
        this.weckerList.push(res);
        this.weckerDataService.setWeckerData(this.weckerList);
      }
    });
  }
  ngOnDestroy(): void {
        this.timeSubscription.unsubscribe();
    }

  onWeckerChanged($event: WeckerDTO) {
    
  }

  checkWeckerList(): void {
    for(let wecker of this.weckerList){
      if(!wecker.enabled) continue;
      if(wecker.time.getHours() == this.time.getHours() && wecker.time.getMinutes() == this.time.getMinutes()){
        this.startAlarm(wecker);
        wecker.enabled = false;
        break;
      }
    }
  }

  startAlarm(wecker: WeckerDTO): void {
    let sheet = this._bottomSheet.open(WeckerRingingComponent, {
      data: {wecker: wecker},
    });
    sheet.afterDismissed().subscribe(res => {
      if (res == undefined) return;

      for(let wecker of this.weckerList){
        if(res.id != wecker.id) continue;

        wecker.enabled = res.enabled;
        wecker.time = res.time;
        this.weckerDataService.setWeckerData(this.weckerList);
      }
    });
  }
  onSilentChanged($event: MatSlideToggleChange): void {
    this.silent = $event.checked;
    this.weckerDataService.setSilent($event.checked);
  }
}

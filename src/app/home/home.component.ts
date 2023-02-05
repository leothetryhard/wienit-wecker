import {Component, OnDestroy} from '@angular/core';
import {TimeService} from "../service/time.service";
import {Subscription} from "rxjs";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {WeckerDetailComponent} from "../wecker-detail/wecker-detail.component";
import {WeckerDataService} from "../service/wecker-data.service";
import {WeckerDTO} from "../dto/WeckerDTO";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{
  public time!: Date;
  private timeSubscription: Subscription;
  public weckerList: Array<WeckerDTO>;

  constructor(private timeService: TimeService,
              public weckerDataService: WeckerDataService,
              private _bottomSheet: MatBottomSheet) {
    this.timeSubscription = timeService.getTime().subscribe((newTime) =>{
      this.time = newTime;
    });
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
}

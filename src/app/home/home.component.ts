import {Component, OnDestroy} from '@angular/core';
import {TimeService} from "../service/time.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{
  public time!: Date;
  timeSubscription: Subscription;
  constructor(timeService: TimeService) {
    this.timeSubscription = timeService.getTime().subscribe((newTime) =>{
      this.time = newTime;
    });
  }

  ngOnDestroy(): void {
        this.timeSubscription.unsubscribe();
    }
}

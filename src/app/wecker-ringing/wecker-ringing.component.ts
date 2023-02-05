import {Component, Inject, OnDestroy} from '@angular/core';
import {WeckerDTO} from "../dto/WeckerDTO";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-wecker-ringing',
  templateUrl: './wecker-ringing.component.html',
  styleUrls: ['./wecker-ringing.component.scss']
})
export class WeckerRingingComponent implements OnDestroy{
  private audio: HTMLAudioElement;
  public wecker: WeckerDTO;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { wecker: WeckerDTO },
              private _bottomSheetRef: MatBottomSheetRef<WeckerRingingComponent>) {
    this.wecker = data.wecker;
    this.audio = new Audio('assets/alarm-sound-1.mp3');
    this.audio.play();
  }
  ngOnDestroy() {
    this.audio.pause();
  }

  onSnoozeClicked($event: MouseEvent) {
    this.wecker.time.setMinutes(this.wecker.time.getMinutes() + 5);
    this.wecker.enabled = true;
    this._bottomSheetRef.dismiss(this.wecker);
    $event.preventDefault();
  }

  onCancelClicked($event: MouseEvent) {
    this._bottomSheetRef.dismiss(this.wecker);
    $event.preventDefault();
  }
}

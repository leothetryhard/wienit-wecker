import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WeckerDTO} from "../dto/WeckerDTO";

@Component({
  selector: 'app-wecker-detail',
  templateUrl: './wecker-detail.component.html',
  styleUrls: ['./wecker-detail.component.scss']
})
export class WeckerDetailComponent {
  weckerForm = this._formBuilder.group({
    hours: ['', Validators.required],
    minutes: ['', Validators.required],
    name: ["Alarm", Validators.required]
  });

  weekdays = this._formBuilder.group({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
});
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { wecker: WeckerDTO },
              private _bottomSheetRef: MatBottomSheetRef<WeckerDetailComponent>,
              private readonly snackBar: MatSnackBar,
              private _formBuilder: FormBuilder) {

  }

  onSubmitClicked(event: MouseEvent): void {
    if (!this.weckerForm.valid) {
      this.snackBar.open("Füllen Sie alle Pflichtfelder aus!", 'OK', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ["error-snackbar"]
      });
      return;
    }
    const data = this.weckerForm.value;
    let newWecker = new WeckerDTO();
    if (data.hours != undefined && data.minutes != undefined){
      if(parseInt(data.hours) > 23 || parseInt(data.minutes) > 59 || parseInt(data.hours) < 0 || parseInt(data.minutes) < 0){
        this.snackBar.open("Ungültiger Eingabewert. Stunden: 0-23, Minuten: 0-59", 'OK', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["error-snackbar"]
        });
        return;
      }
      let time = new Date();
      time.setSeconds(0);
      time.setMilliseconds(0)
      time.setHours(parseInt(data.hours));
      time.setMinutes(parseInt(data.minutes));
      newWecker.time = time;
    }
    if (data.name != undefined){
      newWecker.name = data.name;
    }
    newWecker.weekdays = this.weekdays.value;

    this._bottomSheetRef.dismiss(newWecker);
    event.preventDefault();
  }

  onCancelClicked(event: MouseEvent): void {
    this._bottomSheetRef.dismiss(undefined);
    event.preventDefault();
  }
}

import {WeekdayCheckListDTO} from "./WeekdayCheckListDTO";

export class WeckerDTO {
  constructor(id: number = 0, name: string = "Alarm", time: Date = new Date(), repeats: boolean = true, weekdays: WeekdayCheckListDTO = new WeekdayCheckListDTO(), snoozed: boolean = false, enabled: boolean = true) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.repeats = repeats;
    this.weekdays = weekdays;
    this.snoozed = snoozed;
    this.enabled = enabled;

  }

  id: number;
  name: string;
  time: Date;
  repeats: boolean;
  weekdays: WeekdayCheckListDTO;
  snoozed: boolean;
  enabled: boolean;
}

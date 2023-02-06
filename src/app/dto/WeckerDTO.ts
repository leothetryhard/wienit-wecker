import {WeekdayCheckListDTO} from "./WeekdayCheckListDTO";

export class WeckerDTO {
  constructor(id: number = Math.floor((Math.random() * 100000) + 1), name: string = "Alarm", time: Date = new Date(), weekdays: WeekdayCheckListDTO = new WeekdayCheckListDTO(), enabled: boolean = true) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.weekdays = weekdays;
    this.enabled = enabled;

  }

  id: number;
  name: string;
  time: Date;
  weekdays: WeekdayCheckListDTO;
  enabled: boolean;
}

import {WeekdayCheckListDTO} from "./WeekdayCheckListDTO";
import { v4 as uuidv4 } from 'uuid';

export class WeckerDTO {
  constructor(id: string = uuidv4(), name: string = "Alarm", time: Date = new Date(), repeats: boolean = true, weekdays: WeekdayCheckListDTO = new WeekdayCheckListDTO(), snoozed: boolean = false, enabled: boolean = true) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.repeats = repeats;
    this.weekdays = weekdays;
    this.snoozed = snoozed;
    this.enabled = enabled;

  }

  id: string;
  name: string;
  time: Date;
  repeats: boolean;
  weekdays: WeekdayCheckListDTO;
  snoozed: boolean;
  enabled: boolean;
}

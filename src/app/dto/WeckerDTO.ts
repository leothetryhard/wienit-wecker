import {WeekdayCheckListDTO} from "./WeekdayCheckListDTO";
import { v4 as uuidv4 } from 'uuid';

export class WeckerDTO {
  constructor(id: string = uuidv4(), name: string = "Alarm", time: Date = new Date(), weekdays: WeekdayCheckListDTO = new WeekdayCheckListDTO(), enabled: boolean = true) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.weekdays = weekdays;
    this.enabled = enabled;

  }

  id: string;
  name: string;
  time: Date;
  weekdays: WeekdayCheckListDTO;
  enabled: boolean;
}

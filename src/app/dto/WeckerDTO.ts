export class WeckerDTO {
  constructor(id: number, name: string, time: string, repeats: boolean, weekdays: string, snoozed: boolean, enabled: boolean) {
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
  time: string;
  repeats: boolean;
  weekdays: string;
  snoozed: boolean;
  enabled: boolean;
}

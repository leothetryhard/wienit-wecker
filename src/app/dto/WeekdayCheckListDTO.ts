export class WeekdayCheckListDTO {

  constructor(Monday: boolean | null = false, Tuesday: boolean | null = false, Wednesday: boolean | null = false, Thrusday: boolean | null = false, Friday: boolean | null = false, Saturday: boolean | null = false, Sunday: boolean | null = false) {
    this.Monday = Monday;
    this.Tuesday = Tuesday;
    this.Wednesday = Wednesday;
    this.Thursday = Thrusday;
    this.Friday = Friday;
    this.Saturday = Saturday;
    this.Sunday = Sunday;
  }

  Monday?: boolean | null = false;
  Tuesday?: boolean | null = false;
  Wednesday?: boolean | null = false;
  Thursday?: boolean | null = false;
  Friday?: boolean | null = false;
  Saturday?: boolean | null = false;
  Sunday?: boolean | null = false;
}
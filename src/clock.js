import { htmlGenerator } from './warmup'

export default class Clock {

  constructor() {
    this.displayTime()
    setInterval(this.displayTime.bind(this), 1000);
  }

  get timeString() {
    return new Date().toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
  }

  displayTime() {
    htmlGenerator(this.timeString, document.getElementById("clock"));
  }

}
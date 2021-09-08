class Clock {
  constructor () {
    this.currentDate = new Date();
    this.hrs = this.currentDate.getHours();
    this.mins = this.currentDate.getMinutes();
    this.secs = this.currentDate.getSeconds();
  }

  start() {
    return setInterval(this.update.bind(this), 1000);
  }

  update() {
    this.updateTime(1);
    return console.log(this.hrs + ':' + this.mins + ':' + this.secs);
  }

  updateTime(secs) {
    this.secs += secs;
    if (this.secs >= 60) {
      this.mins++;
      this.secs = 0;
    }

    if (this.mins >= 60) {
      this.hrs++;
      this.mins = 0;
    }

    if (this.hours >= 24) {
      this.hrs = 0;
    }
  }
}

let clock = new Clock();
clock.start();

class Timer {
  constructor(initialValue, step) {
    this.intervalId = null;
    this.count = initialValue;
    this.step = step;
  }

  startTimer() {
    if (this.intervalId !== null)
      return;
    this.intervalId = setInterval(() => {
      console.log(this.count);
      this.count += this.step;
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}

const timer = new Timer(10, 10);
timer.startTimer();
setTimeout(() => timer.stopTimer(), 5000);
setTimeout(() => timer.startTimer(), 8000);
setTimeout(() => timer.stopTimer(), 12000);
/**
 10
 20
 30
 40
 stop
 start
 50
 60
 70
 stop
 **/

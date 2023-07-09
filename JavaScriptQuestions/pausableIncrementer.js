// class Timer {
//   constructor(initialValue, step) {
//     this.intervalId = null;
//     this.count = initialValue;
//     this.step = step;
//   }
//
//   startTimer() {
//     if (this.intervalId !== null)
//       return;
//     this.intervalId = setInterval(() => {
//       console.log(this.count);
//       this.count += this.step;
//     }, 1000)
//   }
//
//   stopTimer() {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//   }
// }

// using closures - makes the internal variables private
function timerFunction(init, step = 1) {
  let intervalId;
  let count = init;

  const startTimer = () => {
    if (intervalId != null)
      return;
    intervalId = setInterval(() => {
      console.log(count);
      count += step;
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  }

  return {
    startTimer,
    stopTimer
  }

}


// const timer = new Timer(10, 10);
// timer.startTimer();
// setTimeout(() => timer.stopTimer(), 5000);
// setTimeout(() => timer.startTimer(), 8000);
// setTimeout(() => timer.stopTimer(), 12000);
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

const timer = timerFunction(10, 10);
timer.startTimer();
setTimeout(() => timer.stopTimer(), 5000);
setTimeout(() => timer.startTimer(), 8000);
setTimeout(() => timer.stopTimer(), 12000);

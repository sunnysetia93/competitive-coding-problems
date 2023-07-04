const retry = async (asyncFn, retries = 3, delay = 50, finalError = 'Failed') => {
  let timeInterval = 0;
  let timeOutId;
  try {
    console.log("retries left", retries);
    return await asyncFn();
  } catch (e) {
    timeInterval = delay;
    retries--;
    if (retries === 0) {
      console.error(finalError);
      return Promise.reject(finalError);
    } else {
      timeOutId = setTimeout(async () => {
        await retry(asyncFn, retries, delay, finalError);
      }, timeInterval)
    }
  }
}

function asyncFn() {
  console.log('Making API call');
  throw new Error('A function that always throws errors');
}

(async () => await retry(asyncFn))();

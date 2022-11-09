const STATE = {
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
  PEDNING: "pending",
};

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);
    this.stack = `rejected promise is not caught! ${error}`;
  }
}

class MyPromise {
  state = STATE.PEDNING;

  value = null;

  // arrays of then callbacks
  thenCallbacks = [];

  // arrays of catch callbacks
  catchCallbacks = [];

  // bind onSuccess to MyPromise class
  onSuccessBind = this.onSuccess.bind(this);

  // bind onFail to MyPromise class
  onFailBind = this.onFail.bind(this);

  constructor(cb) {
    try {
      cb(this.onSuccessBind, this.onFailBind);
    } catch (error) {
      this.onFail(error);
    }
  }

  runCallbacks() {
    if (this.state === STATE.FULLFILLED) {
      this.thenCallbacks.forEach((callback) => callback(this.value));

      this.thenCallbacks = [];
    }

    if (this.state === STATE.REJECTED) {
      this.catchCallbacks.forEach((callback) => callback(this.value));

      this.thenCallbacks = [];
    }
  }

  onSuccess(resolveValue) {
    // onSuccess is asynchronous by default
    queueMicrotask(() => {
      if (this.state !== STATE.PEDNING) {
        return;
      }

      if (resolveValue instanceof MyPromise) {
        // value is a Promise
        resolveValue.then(this.onSuccessBind, this.onFailBind);
        return;
      }

      this.value = resolveValue;
      this.state = STATE.FULLFILLED;

      this.runCallbacks();
    });
  }

  onFail(rejectValue) {
    // onFail is asynchronous by default
    queueMicrotask(() => {
      if (this.state !== STATE.PEDNING) {
        return;
      }

      if (rejectValue instanceof MyPromise) {
        // value is a Promise
        rejectValue.then(this.onSuccessBind, this.onFailBind);
        return;
      }

      if (this.catchCallbacks.length === 0) {
        throw new UncaughtPromiseError(this.value);
      }

      this.value = rejectValue;
      this.state = STATE.REJECTED;

      this.runCallbacks();
    });
  }

  then(thenCb, catchCb = null) {
    function childPromiseCallback(resolve, reject) {
      function thenCallBack(result) {
        if (thenCb === null) {
          // it's a .catch(); we don't care thenCb. Skip by directly resolving
          // to set up a new resolved promise with inherited value
          // and passing value to the next .then()
          resolve(result);
        } else {
          try {
            const thenResult = thenCb(result);
            resolve(thenResult);
          } catch (error) {
            reject(error);
          }
        }
      }
      this.thenCallbacks.push(thenCallBack.bind(this));

      function catchCallback(result) {
        if (catchCb === null) {
          // it's a .then(); we don't care catchCb. Skip it by directly rejecting
          // to set up a new rejected promise with inherited value
          // and passing value to the next .catch()
          reject(result);
        } else {
          try {
            const catchResult = catchCb(result);
            resolve(catchResult);
          } catch (error) {
            reject(error);
          }
        }
      }
      this.catchCallbacks.push(catchCallback);

      this.runCallbacks();
    }

    // enable chainning by return a new MyPromise with value to be
    // the resolved/ rejected value of the previous MyPromise
    return new MyPromise(childPromiseCallback.bind(this));
  }

  catch(catchCb) {
    // catch method is just then method taking 1 argument
    return this.then(null, catchCb);
  }

  finally(finallyCb) {
    return this.then(
      (result) => {
        finallyCb();
        // return the value of current MypPromise to the next then() | catch()
        return result;
      },
      (result) => {
        finallyCb();
        // throw the error value of current MypPromise to the next then() | catch()
        throw result;
      },
    );
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value));
  }
}

// 1. test then() with chain
function promiseCb1(resolve, reject) {
  const x = 15 / 3;
  if (x >= 5) resolve("result >= 5");
  else reject("result < 5");
}

const p = new MyPromise(promiseCb1);
const pAfter1Then = p.then((value) => value.toUpperCase());
pAfter1Then // should log "RESULT >= 5"
  .then((value) => console.log(value));

// 2. test then catch
function promiseCb2(resolve, reject) {
  const x = 15 / 5;
  if (x >= 5) resolve("result >= 5");
  else reject("result < 5");
}

const p2 = new MyPromise(promiseCb2);
const pAfterThenToBeCaught = p2.then((value) => value.toUpperCase());
pAfterThenToBeCaught.catch((value) => console.log(value));

// 3. test uncaught promise
function promiseCb3(resolve, reject) {
  const x = 15 / 5;
  if (x >= 5) resolve("result >= 5");
  else reject("result < 5");
}

new MyPromise(promiseCb3).then((value) => value.toUpperCase());

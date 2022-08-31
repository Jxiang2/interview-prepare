type AnyFuncion = (...args: any[]) => any;

// type of onSuccess
type Resolve = (...args: any[]) => void;

// type of onFail
type Reject = (...args: any[]) => void;

// we can do return resolve(value) in promiseCallback
type PromiseCallback = (resolve: Resolve, reject: Reject) => void | undefined;

const STATE = {
  FULLFILLED: 'fullfilled',
  REJECTED: 'rejected',
  PEDNING: 'pending',
};

class MyPromise {
  private state: string = STATE.PEDNING;
  private value: any = null;
  private thenCallbacks: Array<AnyFuncion> = [];
  private catchCallbacks: Array<AnyFuncion> = [];

  // bind onSuccess, onFail to MyPromise class
  private onSuccessBind = this.onSuccess.bind(this);
  private onFailBind = this.onFail.bind(this);

  constructor (cb: PromiseCallback) {
    try {
      cb(this.onSuccessBind, this.onFailBind);
    } catch (error) {
      this.onFail(error);
    }
  }

  private runCallbacks() {
    if (this.state === STATE.FULLFILLED) {
      this.thenCallbacks.forEach(callback => callback(this.value));

      this.thenCallbacks = [];
    }

    if (this.state === STATE.REJECTED) {
      this.catchCallbacks.forEach(callback => callback(this.value));

      this.thenCallbacks = [];
    }
  };

  private onSuccess(resolveValue: any) {
    if (this.state !== STATE.PEDNING) {
      return;
    }

    if (resolveValue instanceof MyPromise) { // value is a Promise
      resolveValue.then(this.onSuccessBind, this.onFailBind);
      return;
    }

    this.value = resolveValue;
    this.state = STATE.FULLFILLED;

    this.runCallbacks();
  }

  private onFail(rejectValue: any) {
    if (this.state !== STATE.PEDNING) {
      return;
    }

    if (rejectValue instanceof MyPromise) { // value is a Promise
      rejectValue.then(this.onSuccessBind, this.onFailBind);
      return;
    }

    this.value = rejectValue;
    this.state = STATE.REJECTED;

    this.runCallbacks();
  }

  public then(thenCb: AnyFuncion | null, catchCb: AnyFuncion | null = null) {
    return new MyPromise((resolve, reject) => {
      const thenCallBack = function (result: any) {
        if (thenCb === null) { // it's a .catch()
          resolve(result); // skip .catch(), invoke the next .then()
        }

        try {
          if (thenCb) {
            const thenResult = thenCb(result);
            resolve(thenResult);
          }
        } catch (error) {
          reject(error);
        }
      };
      this.thenCallbacks.push(thenCallBack);

      const catchCallback = function (result: any) {
        if (catchCb === null) { // it's a .then()
          reject(result); // skip .then(), invoke the next .catch()
        }

        try {
          if (catchCb) {
            const catchResult = catchCb(result);
            resolve(catchResult);
          }
        } catch (error) {
          reject(error);
        }
      };
      this.catchCallbacks.push(catchCallback);

      this.runCallbacks();
    });
  }

  public catch(catchCb: AnyFuncion) {
    return this.then(null, catchCb);
  }

  public finally(cb: AnyFuncion) { // finally does not take previous callback result
    return this.then(result => {
      cb();
      return result; // directly return value to the next then() or catch()
    }, result => {
      cb();
      throw result; // directly throw error value to the next then() or catch()
    });
  }

}


/**
 * TESTS !!!
 */


// 1. test then() with chain
function promiseCb(resolve: Resolve, reject: Reject) {
  const x = 15 / 3;

  if (x >= 5) resolve("result >= 5");
  else reject("result < 5");
};

const p = new MyPromise(promiseCb);

const pAfter1Then = p
  .then((value) => (value as string).toUpperCase());

pAfter1Then // should log "RESULT >= 5"
  .then((value) => console.log(value));

new MyPromise(promiseCb) // // should log "RESULT >= 5"
  .then((value) => (value as string).toUpperCase())
  .then((value) => console.log(value));


// 2. test then() & catch() with chain
import {
  AnyFuncion,
  FinallyFunction,
  Reject,
  Resolve,
  PromiseCallback,
  IMyPromise,
} from "./MyPromise.types";

const STATE = {
  FULLFILLED: 'fullfilled',
  REJECTED: 'rejected',
  PEDNING: 'pending',
};

class UncaughtPromiseError extends Error {
  constructor (error: any) {
    super(error);
    this.stack = `rejected promise is not caught! ${error}`;
  }
}

class MyPromise implements IMyPromise {
  private state: string = STATE.PEDNING;
  private value: any = null;

  // arrays of then callbacks
  private thenCallbacks: Array<AnyFuncion> = [];
  // arrays of catch callbacks
  private catchCallbacks: Array<AnyFuncion> = [];

  // bind onSuccess to MyPromise class
  private onSuccessBind = this.onSuccess.bind(this);
  // bind onFail to MyPromise class
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
  }

  private onSuccess(resolveValue: any) {
    // onSuccess is asynchronous by default
    queueMicrotask(() => {
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
    });
  }

  private onFail(rejectValue: any) {
    // onFail is asynchronous by default
    queueMicrotask(() => {
      if (this.state !== STATE.PEDNING) {
        return;
      }

      if (rejectValue instanceof MyPromise) { // value is a Promise
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

  public then(thenCb: AnyFuncion | null, catchCb: AnyFuncion | null = null) {
    function childPromiseCallback(this: MyPromise, resolve: Resolve, reject: Reject) {
      function thenCallBack(this: MyPromise, result: any) {
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
      };
      this.thenCallbacks.push(thenCallBack.bind(this));

      function catchCallback(result: any) {
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
      };
      this.catchCallbacks.push(catchCallback);

      this.runCallbacks();
    };

    // enable chainning by return a new MyPromise with value to be 
    // the resolved/ rejected value of the previous MyPromise
    return new MyPromise(childPromiseCallback.bind(this));
  }

  public catch(catchCb: AnyFuncion) {
    // catch method is just then method taking 1 argument
    return this.then(null, catchCb);
  }

  public finally(finallyCb: FinallyFunction) {
    return this.then(result => {
      finallyCb();
      // return the value of current MypPromise to the next then() | catch()
      return result;
    }, result => {
      finallyCb();
      // throw the error value of current MypPromise to the next then() | catch()
      throw result;
    });
  }

  public static resolve(value: any) {
    return new MyPromise(resolve => resolve(value));
  }

  public static reject(value: any) {
    return new MyPromise((resolve, reject) => reject(value));
  }

}


// 1. test then() with chain
function promiseCb1(resolve: Resolve, reject: Reject) {
  const x = 15 / 3;
  if (x >= 5) resolve("result >= 5");
  else reject("result < 5");
};

const p = new MyPromise(promiseCb1);
const pAfter1Then = p
  .then((value) => (value as string).toUpperCase());
pAfter1Then // should log "RESULT >= 5"
  .then((value) => console.log(value));


// 2. test then catch
function promiseCb2(resolve: Resolve, reject: Reject) {
  const x = 15 / 5;
  if (x >= 5) resolve("result >= 5");
  else reject("result < 5");
};

const p2 = new MyPromise(promiseCb2);
const pAfterThenToBeCaught = p2
  .then(value => (value as string).toUpperCase());
pAfterThenToBeCaught
  .catch(value => console.log(value));


// 3. test uncaught promise
function promiseCb3(resolve: Resolve, reject: Reject) {
  const x = 15 / 5;
  if (x >= 5) resolve("result >= 5");
  else reject("result < 5");
};

new MyPromise(promiseCb3)
  .then((value) => (value as string).toUpperCase());
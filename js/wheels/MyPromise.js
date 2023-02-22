/**
 * Notes
 * 1. when creating a promise using new Promise(excutor),
 * we don't have to provide implementation of resolve and reject
 * instead, they are implemented in Promise class
 *
 * 2.0: thenCallback: access Promise instance's value, do sth with the value, if it's status if fulfilled
 * 2.5: catchCallback: access Promise instance's value, do sth with the value, if it's status if rejected
 *
 * 3. the return type of then callback
 * new Promise((resolve, reject) => {
 *  ...
 * }).then((value) => {
 *  // value is turend to the value of a new Promise instance
 *  return value
 *  // new Promise(...) is resolved first,
 *  // then it's value turned to the value of a new Promise instance
 *  return new Promise((resolve, reject) => {...})
 * })
 */

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
  thenCallbacks = []; // arrays of then callbacks
  catchCallbacks = []; // arrays of catch callbacks
  onSuccessBind = this.onSuccess.bind(this); // bind onSuccess to MyPromise instance
  onFailBind = this.onFail.bind(this); // bind onFail to MyPromise instance

  constructor(cb) {
    try {
      cb(this.onSuccessBind, this.onFailBind);
    } catch (error) {
      this.onFail(error);
    }
  }

  /**
   * excute all callbacks, depending on the state of the MyPromise instance
   */
  runCallbacks() {
    if (this.state === STATE.FULLFILLED) {
      this.thenCallbacks.forEach((callback) => callback(this.value));
      this.thenCallbacks = [];
    }

    if (this.state === STATE.REJECTED) {
      this.catchCallbacks.forEach((callback) => callback(this.value));
      this.catchCallbacks = [];
    }
  }

  /**
   * called when "resolve" function passed as argument of promise excutor asyncronousely
   * it 1. set value 2. set state to resolved 3. initiate iteration through thenCallbacks
   * @param {any} resolveValue
   */
  onSuccess(resolveValue) {
    queueMicrotask(() => {
      if (this.state !== STATE.PEDNING) return;

      if (resolveValue instanceof MyPromise) {
        // in case resolveValue is a MyPromise instance, need to resolve it first
        // and retry onSuccess or onFail to set it to the value of the current MyPromise instance
        resolveValue.then(this.onSuccessBind, this.onFailBind);
        return;
      }

      this.value = resolveValue;
      this.state = STATE.FULLFILLED;

      this.runCallbacks();
    });
  }

  /**
   * called when "reject" function passed as argument of promise excutor asyncronousely
   * it 1. set value 2. set state to rejected 3. initiate iteration through rejectCallbacks
   * @param {any} resolveValue
   */
  onFail(rejectValue) {
    queueMicrotask(() => {
      if (this.state !== STATE.PEDNING) return;

      if (rejectValue instanceof MyPromise) {
        // in case resolveValue is a MyPromise instance, need to resolve it first
        // and retry onSuccess or onFail to set it to the value of the current MyPromise instance
        rejectValue.then(this.onSuccessBind, this.onFailBind);
        return;
      }

      if (this.catchCallbacks.length === 0)
        // if an error occured but .catch(...) not provided
        throw new UncaughtPromiseError(this.value);

      this.value = rejectValue;
      this.state = STATE.REJECTED;

      this.runCallbacks();
    });
  }

  /**
   * 1. add enhanced version of then callback or catch callback to thenCallbacks or catchCallbacks
   * 2. initiate iteration through thenCallbacks or catchCallbacks
   * 3. return a new MyPromise instance to be chained
   * @param {Function} thenCb: a function to be called if promise resolved
   * @param {Function | undefined} catchCb: a function to be called if promise rejected
   * @returns MyPromise
   */
  then(thenCb, catchCb = null) {
    function childPromiseCallback(resolve, reject) {
      this.thenCallbacks.push((result) => {
        if (thenCb === null) {
          // means a .catch() got chained; we don't care thenCb
          // Skip by directly calling resolve, which triggers onSuccess of new MyPromise
          resolve(result);
        } else {
          try {
            const thenResult = thenCb(result);
            resolve(thenResult);
          } catch (error) {
            reject(error);
          }
        }
      });

      this.catchCallbacks.push((result) => {
        if (catchCb === null) {
          // means a .then() got chained; we don't care thenCb
          // Skip by directly calling reject, which triggers onFail of new MyPromise
          reject(result);
        } else {
          try {
            const catchResult = catchCb(result);
            resolve(catchResult);
          } catch (error) {
            reject(error);
          }
        }
      });

      this.runCallbacks();
    }

    // enable chainning by return a new MyPromise and keeping
    // the previously resolved/ rejected value in the new MyPromise
    return new MyPromise(childPromiseCallback.bind(this));
  }

  /**
   * handled by this.then
   * @param {Function} catchCb
   * @returns MyPromise
   */
  catch(catchCb) {
    // catch method is just then method taking 1 argument
    return this.then(null, catchCb);
  }

  /**
   * handled by this.then
   * @param {Function} finallyCb
   * @returns MyPromise
   */
  finally(finallyCb) {
    return this.then(
      (result) => {
        finallyCb();
        return result;
      },
      (result) => {
        finallyCb();
        throw result;
      },
    );
  }

  /**
   * give back a resolved MyPromise instance,
   * by setting instance.value to value and state to fufilled
   * @param {*} value
   * @returns MyPromise
   */
  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  /**
   * give back a rejected MyPromise instance,
   * by setting instance.value to value and state to rejected
   * @param {*} value
   * @returns MyPromise
   */
  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value));
  }
}

module.exports = MyPromise;

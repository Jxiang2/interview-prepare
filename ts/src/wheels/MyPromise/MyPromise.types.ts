export type AnyFuncion = (...args: any[]) => any;

// callback in finally() method, does not take the value of previous MyPromise and does not return anything
export type FinallyFunction = () => void;

// type of onSuccess
export type Resolve = (...args: any[]) => void;

// type of onFail
export type Reject = (...args: any[]) => void;

// we can do "return resolve(value)" in promiseCallback
export type PromiseCallback = (
  resolve: Resolve,
  reject: Reject,
) => void | undefined;

export interface IMyPromise {
  then: (resolveFunc: Resolve, reject: Reject) => IMyPromise;
  catch: (rejectFunc: Reject) => IMyPromise;
  finally: (finallyFunc: FinallyFunction) => IMyPromise;
}

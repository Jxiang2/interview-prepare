/**
 * When a new Promise is initialized,
 * it's aleady resolved or rejected.
 * We just need to use then() or catch() to
 * get the resolved or rejected result
 */

const STATE = {
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
  PEDNING: "pending"
}

class UncaughtPromiseError extends Error {
  constructor (error) {
    super(error)

    this.stack = `(in promise) ${error.stack}`
  }
}

class MyPromise {
  #thenCbs = []
  #catchCbs = []
  #state = STATE.PEDNING
  #value = null
  #onSuccessBinded = this.#onSuccess.bind(this)
  #onFailBinded = this.#onFail.bind(this)


  constructor (promiseCb) {
    try {
      promiseCb(this.#onSuccessBinded, this.#onFailBinded) // call (resolve, reject) => ... when new a Promise
    } catch (err) {
      this.onFail(err)
    }
  }


  #runCallbacks () {
    if (this.#state === STATE.FULLFILLED) {
      this.#thenCbs.forEach(callback => callback(this.#value))

      // make sure excuted callbacks are no longer excuted again
      this.#thenCbs = []
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach(callback => callback(this.#value))

      // make sure excuted callbacks are no longer excuted again
      this.#catchCbs = []
    }
  }


  #onSuccess (value) {
    if (this.#state !== STATE.PEDNING) return

    // value is a promise
    if (value instanceof MyPromise) {
      value.then(this.#onSuccessBinded, this.#onFailBinded)
    }

    // value is a promise
    this.#value = value

    // value is not a promise
    this.#state = STATE.FULLFILLED

    this.#runCallbacks()
  }


  #onFail (value) {
    if (this.#state !== STATE.PEDNING) return

    // value is a promise
    if (value instanceof MyPromise) {
      value.then(this.#onSuccessBinded, this.#onFailBinded)
    }

    // if error occurs but no .catch() provided, throw erro
    if (this.#catchCbs.length === 0) {
      throw new UncaughtPromiseError(value)
    }

    // value is not a promise
    this.#value = value

    this.#state = STATE.REJECTED

    this.#runCallbacks()
  }


  /**
   * @param thenCb
   * @param catchCb 
   * @returns MyPromise
   */
  then (thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push(result => { // we can do multiple p.then() by pushing functions to thenCbs array
        if (thenCb === null) { // if callback is not provided in then(), skip this then()
          resolve(result) // call #onSuccess in the sub MyPromise and set #value to the #value in current MyPromise
          return
        }
        try {
          resolve(thenCb(result)) // resolve the result of function passed in previous then()
        } catch (err) {
          reject(err)
        }
      })


      this.#catchCbs.push(result => { // we can do multiple p.catch() by pushing functions to catchCbs array
        if (catchCb === null) { // if callback is not provided in catch(), skip this catch()
          reject(result) // call #onFail in the sub MyPromise and set #value to the #value in current MyPromise
          return
        }
        try {
          resolve(catchCb(result)) // resolve the result of function passed in previous catch()
        } catch (err) {
          reject(err)
        }
      })

      this.#runCallbacks()
    })
  }


  /**
   * @param catchCb 
   * @returns MyPromise
   */
  catch (catchCb) {
    return this.then(undefined, catchCb)
  }


  /**
   * @param finallyCb 
   * @returns  MyPromise
   */
  finally (finallyCb) { // finally passes result to next chain and finally callback does not take parameters 
    return this.then(result => {
      finallyCb()
      return result
    }, result => {
      finallyCb()
      throw result
    })
  }
}


module.exports = MyPromise


// tests
let p = new Promise((resolve, reject) => {
  resolve("yay!")
})
p
  .then(data => data.toString())
  .then(res => res.toUpperCase())
  .then(res => console.log(res))
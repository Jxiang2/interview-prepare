const STATE = {
  FULLFILLED: "fullfilled",
  REJECTED: "rejected",
  PEDNING: "pending"
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
      promiseCb(this.#onSuccessBinded, this.#onFailBinded)
    } catch (err) {
      this.onFail(err)
    }
  }

  hello () {
    console.log(this)
  }

  #runCallbacks () {
    if (this.#state === STATE.FULLFILLED) {
      this.#thenCbs.forEach(callback => callback(this.#value))
      this.#thenCbs = []
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach(callback => callback(this.#value))
      this.#catchCbs = []
    }
  }

  #onSuccess (value) {
    if (this.#state !== STATE.PEDNING) return

    if (value instanceof MyPromise) {
      value.then(this.#onSuccessBinded, this.#onFailBinded)
    }

    this.#value = value
    this.#state = STATE.FULLFILLED

    this.#runCallbacks()
  }

  #onFail (value) {
    if (this.#state !== STATE.PEDNING) return

    if (value instanceof MyPromise) {
      value.then(this.#onSuccessBinded, this.#onFailBinded)
    }

    this.#value = value
    this.#state = STATE.REJECTED

    this.#runCallbacks()
  }

  then (thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push(result => {
        if (thenCb === null) {
          resolve(result)
          return
        }
        try {
          resolve(thenCb(result))
        } catch (err) {
          reject(err)
        }
      })

      this.#catchCbs.push(result => {
        if (catchCb === null) {
          reject(result)
          return
        }
        try {
          resolve(catchCb(result))
        } catch (err) {
          reject(err)
        }
      })

      this.#runCallbacks()
    })
  }

  catch (catchCb) {
    return this.then(undefined, catchCb)
  }
}

module.exports = MyPromise
/**
 * callback based
 * @param num1: number
 * @param num2: number
 * @param callback: (err, res) => any
 * @returns 
 */
const getSumCb = (num1, num2, callback) => {
  if (!num1 || !num2) {
    return callback(new Error("Missing arguments"), null)
  }
  return callback(null, num1 + num2)
}

getSumCb(1, undefined, (err, result) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(result) // 2
  }
})


/**
 * promise based
 * @param fn: (arg1, arg2, cb) => any
 * @returns Promise<any>
 */
const myPromisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      // define the reject/ resolve logic of the original callback
      function customCallback (err, result) {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      }
      args.push(customCallback)
      fn.call(this, ...args)
    })
  }
}


// Promisification: conversion of a function accepting a callback into a function returning a promise.
const getSumPromise = myPromisify(getSumCb)
getSumPromise(undefined, 1)
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log(err.message)
  })
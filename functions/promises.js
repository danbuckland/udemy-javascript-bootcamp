// Callback technique
const getDataCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, 'This is the callback data')
    callback('This is a callback error')
    callback('This is a callback error')
  }, 1500)
}

getDataCallback((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// Promise technique
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is the promise data')
    reject('This is a promise error')
    reject('This is a promise error')
  }, 1500)
})

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
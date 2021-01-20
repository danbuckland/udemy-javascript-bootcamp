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
const getDataPromise = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`This is my success data: ${data}`)
    // reject('This is a promise error')
  }, 1500)
})

const myPromise = getDataPromise(123)

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})